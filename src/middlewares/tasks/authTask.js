const { StatusCodes } = require('http-status-codes');
const { getById } = require('../../services/tasks');

module.exports = async (req, res, next) => {
    try {
        const { id } = req.params
        
        const task = await getById(id);
        if (task === null) {
            return res.status(StatusCodes.UNPROCESSABLE_ENTITY)
              .json({ message: 'Id is not a valid mongo ObjectId' })
        }
        if (task === undefined) {
            return res.status(StatusCodes.NOT_FOUND)
              .json({ message: 'Task not found' })
        }
        
        req.body.task = task

        next();
    } catch (error) {
        next(error)
    }
}