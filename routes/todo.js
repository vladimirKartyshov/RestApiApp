const {Router} = require('express')
const Todo = require('../models/todo')
const router = Router()

//получение списка задач
router.get('/', (req, res) => {
    try {

    }catch (e) {
        console.log(e)
        res.status(500).json({
            message: 'Server error'
        })
    }

})

//создание новой задачи
router.post('/', async (req, res) => {
    try {
       const todo = await Todo.create({
            title: req.body.title,
            done: false
        })
        res.status(201).json({todo})
    }catch (e) {
        console.log(e)
        res.status(500).json({
            message: 'Server error'
        })
    }

})

//изминение задачи
router.put('/:id', (req, res) => {
    try {

    }catch (e) {
        console.log(e)
        res.status(500).json({
            message: 'Server error'
        })
    }

})

//удаление задачи
router.delete('/:id', (req, res) => {
    try {

    }catch (e) {
        console.log(e)
        res.status(500).json({
            message: 'Server error'
        })
    }

})



module.exports = router