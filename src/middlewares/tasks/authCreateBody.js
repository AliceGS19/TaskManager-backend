const { StatusCodes } = require('http-status-codes');
const taskCreateSchema = require('../../schemas/taskCreate');

module.exports = (req, res, next) => {
    const { name, description, status } = req.body;
    const { error } = taskCreateSchema.validate({ name, description, status });
    if (error) return res.status(StatusCodes.BAD_REQUEST).json({ message: error.message })
    next();
};