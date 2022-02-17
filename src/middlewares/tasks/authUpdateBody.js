const { StatusCodes } = require('http-status-codes');
const taskUpdateSchema = require('../../schemas/taskUpdate');

module.exports = (req, res, next) => {
    const { name, description, status} = req.body
    if (!name && !description && !status) {
        return res.status(StatusCodes.BAD_REQUEST)
          .json({ message: "Must have at least 1 property on body to update"})
    }
    const { error } = taskUpdateSchema.validate({ name, description, status });
    if (error) return res.status(StatusCodes.BAD_REQUEST).json({ message: error.message })
    next();
};