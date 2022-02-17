const { StatusCodes } = require('http-status-codes');
const { update } = require('../../services/tasks');

module.exports = async (req, res, next) => {
    try {
        const { name, description, status } = req.body;
        const { id } = req.params;

        const body = { name, description, status };
        const task = req.body.task;
        const keys = Object.keys(body);
        const filtredKeys = keys.filter((key) => {
            if (body[key]) return true;
            return false;
        })
        filtredKeys.forEach((key) => {
            task[key] = body[key];
        })
      
        await update(task, id);

        return res.status(StatusCodes.NO_CONTENT).end();
    } catch (error) {
        next(error)
    }
}