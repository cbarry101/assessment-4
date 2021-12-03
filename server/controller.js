let goals = []
let globalId = 1


module.exports = {
    getGoals: (req, res) => res.status(200).send(goals),

    addGoal: (req,res) => {
        let {goal} = req.body
        let newGoal = {
            goal,
            globalId 
        }
        goals.push(newGoal)
        res.status(200).send(goals)
        globalId++
    },
    deleteGoal: (req, res) => {
        let index = goals.findIndex(elem => elem.id === req.params.id)
        goals.splice(index, 1)
        res.status(200).send(goals)
    }
}