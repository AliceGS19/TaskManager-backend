const { StatusCodes } = require('http-status-codes');
const { create } = require('../../services/tasks');

module.exports = async (req, res, next) => {
    try {
        const { name, description, status } = req.body;
      
        await create({ name, description, status })

        return res.status(StatusCodes.CREATED).json({ message: 'Task created successfully'})
    } catch (error) {
        next(error)
    }
}