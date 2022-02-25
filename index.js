const express = require('express')
const app = express();
const PORT = 8080

app.use(express.json())

app.listen(PORT,
    () => console.log(`host http://localhost:${PORT}`)
)

app.get('/games', (req, res) => {
    res.status(200).send({
        games: "fifa",
        players: "tons",
        wins: 58,
        draws: 12,
        losses: 4,
        reaction: "happy"
    })
});

app.post('/games/:player', (req, res) => {
    const {player} = req.params;
    const {controller} = req.body;

        if(!controller) {
            res.status(418).send({message: 'No controller!'})
        }

    res.send({
        games: `your player is ${player}, and you do have ${controller}`,
    })

})