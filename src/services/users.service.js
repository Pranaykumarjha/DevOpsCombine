import logger from "#config/logger.js";
import { db } from "#config/database.js";
import { users } from "#models/users.model.js";
import { id } from "zod/locales";


export const getAllUsers = async (req, res) => {
    try{
        const allUsers = await db.select({
            id: users.id,
             name: users.name, email: users.email,
             role: users.role,
             created_at: users.created_at,
             updated_at: users.updated_at,

        }).from(users);
        return allUsers;

    }
    catch(error){
        logger.error('Error fetching users:', error);
        throw error;

    }
}
