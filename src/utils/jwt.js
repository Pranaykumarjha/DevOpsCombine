import jwt, { verify } from 'jsonwebtoken';

const JWT_SECRET = process.env.JWT_SECRET || 'your-default-secret';
const JWT_EXPIRES_IN = '1d'; // Token expiration time

export const jwttoken = () =>
{
    sign: (payload) =>
    {
        try
        {
            return jwt.sign(payload, JWT_SECRET, { expiresIn: JWT_EXPIRES_IN });
        }
        catch (error)
        {
            logger.error('Error signing JWT:', error);
            throw new Error('Could not sign JWT');
        }
    }
    verify: (token) =>
    {
        try{
            return jwt.verify(token, JWT_SECRET);

        }
        catch (error)
        {
            logger.error('Error verifying JWT:', error);
            throw new Error('Could not verify JWT');
        }
    }

}