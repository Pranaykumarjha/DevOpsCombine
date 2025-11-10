import logger from "#config/logger.js";
import { users } from "#models/users.model.js";
import { getAllUsers } from "#services/users.service.js";
import { count } from "drizzle-orm";
export const fetchAllUsers = async(req, res,next) => {
    try{
        logger.info('Fetching all users');
        const getAllusers = await getAllUsers();
        res.json({
            message: 'Users fetched successfully',
            users: getAllusers,
            count: getAllusers.length,
        })

    }catch(error){
        logger.error(error);
        next(error);
    }
}