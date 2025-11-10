import { fetchAllUsers } from '#controllers/users.controller.js';
import express from 'express';

const router = express.Router();

// router.get('/', (req, res) => {
//     res.send('GET/ Users');
// });
router.get('/',fetchAllUsers );
router.get('/:id', (req, res) => {
    res.send('GET/ Users/:id');
});
router.put('/', (req, res) => {
    res.send('PUT/ Users/:id');
});
router.delete('/', (req, res) => {
    res.send('DELETE/ Users/:id');
});

export default router;