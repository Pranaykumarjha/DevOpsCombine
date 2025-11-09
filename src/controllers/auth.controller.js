import { signUpSchema } from '#validations/auth.validation.js';
import { formatValidationErrors } from '#utils/format.js';
import logger from '#config/logger.js'; // make sure this path is correct
import { createUser } from '#services/auth.service.js'; // make sure this path is correct
import jwt from 'jsonwebtoken';
import cookies from '#utils/cookies.js'; // make sure this path is correct

export const signUp = async (req, res, next) => {
  try {
    // Validate request body
    const validationResult = signUpSchema.safeParse(req.body);

    if (!validationResult.success) {
      return res.status(400).json({
        error: 'Validation failed',
        details: formatValidationErrors(validationResult.error),
      });
    }

    // ✅ Correct destructuring syntax (remove parentheses)
    const { name, email,password, role } = validationResult.data;
    //AuthService.signUp({ name, email, password, role });
    const user = await createUser({ name, email, password ,role }); 

   

const token = jwt.sign( 
  { id: user.id, email: user.email, role: user.role },
  process.env.JWT_SECRET || 'secretkey', // replace with your env variable
  { expiresIn: '1h' } // optional
);

cookies.set(res, 'token', token);

    

    // ✅ Correct destructuring syntax (remove parentheses
    logger.info(`Signing up user with email: ${email}`);

    // Simulated successful signup response
    res.status(201).json({
      message: 'User signed up successfully',
      user: { id: user.id, name:user.name, email:user.email, role: user.role,role:user.role },
    });
  } catch (err) {
    logger.error('Error in signUp controller:', err);

    if (err.message === 'User already exists') {
      return res.status(409).json({ error: err.message });
    }

    next(err);
  }
};
