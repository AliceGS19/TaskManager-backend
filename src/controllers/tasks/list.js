const { StatusCodes } = require('http-status-codes');
const { list } = require('../../services/tasks');

module.exports = async (_req, res, next) => {
    try { 
        const tasks = await list()
        if(!tasks.length) return res.status(StatusCodes.NOT_FOUND).json({ message: 'No registered task' })

        return res.status(StatusCodes.OK).json(tasks)
    } catch (error) {
        next(error)
    }
}