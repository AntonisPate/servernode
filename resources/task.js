const task = require('../models/task')

module.exports = {
    create: async (data) => {
        return await task.create({
            title: data.title,
            context: data.context,
        })
    },
    read: async (search = null) => {
        return search ? await task.find({ _id: search}) : await task.find()
    },
    deleteOne: async (search) => {
        return await task.deleteOne({ _id: search})
    }
};
