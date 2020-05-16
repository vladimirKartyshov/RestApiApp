    const Todo = require('../models/todo')

    const users = [
        {name: 'Igor', age: 23},
        {name: 'Elena', age: 30},
    ]

    module.exports = {
        test() {
            return{
                count: Math.trunc(Math.random() * 10),
                users
            }
        },

      async  getTodos(){
            try {
              return await Todo.findAll()
            }catch (e) {
                throw new Error('Fetch todos is not available')
            }
        }
    }
