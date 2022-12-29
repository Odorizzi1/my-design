const tasks = require('../model/task')

module.exports = {
    async index(req, res) {
        const task = await tasks.find();
        res.json(task)
        return task;
    },
    async create(req, res) {
        const { title } = req.body;

        let dataCreate = {}
        dataCreate = {
            title
        }

        const createTask = await tasks.create(dataCreate);
        res.json(createTask)
        return createTask;
    },

    async getById(req, res) {
        const { _id } = req.params
        const task = await tasks.findOne({ _id })
        res.json(task)
    },
    async delete(req, res) {
        const { _id } = req.params
        const task = await tasks.findByIdAndDelete({ _id })
        res.json(task)
    },
    async update(req, res) {
        const { _id, title } = req.body;

        let dataCreate = {}

        dataCreate = {
            title
        }
        const createTask = await tasks.findByIdAndUpdate({ _id }, dataCreate, { new: true });
        res.json(createTask)
        return createTask;
    },
}