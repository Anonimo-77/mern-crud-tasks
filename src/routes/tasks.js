const { Router } = require("express");
const router = Router();
const Task = require("../models/Task");

router.route("/")
    .get(async (req,res) => {
        let tasks = await Task.find({});
        res.json(tasks);
    })
    .post(async (req, res) => {
        let newTask = new Task(req.body);
        let saved = await newTask.save();
        let tasks = await Task.find({});
        res.json(tasks);
    });
router.route("/:id")
    .get(async (req, res) => {
        let task = await Task.findById(req.params.id);
        res.json(task);
    })
    .put(async (req, res) => {
        let id = req.params.id;
        let updated = await Task.findByIdAndUpdate(id,req.body);
        let tasks = await Task.find({});
        res.json(tasks);
    })
    .delete(async (req, res) => {
        let id = req.params.id;
        let deleted = await Task.findByIdAndRemove(id);
        let tasks = await Task.find({});
        res.json(tasks);
    });

module.exports = router;