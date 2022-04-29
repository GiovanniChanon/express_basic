const express = require('express')
const { get } = require('express/lib/response')
const app = express()
const port = 3000

app.get('/', (req, res) => {
    res.send('Hello World!')
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})

app.get('/launchx', (req, res) => {
    res.send('Bienvenidos a launchx')
})

app.get('/explorersInNode', (req, res) => {
    const explorer = {name: "explorer", msg: "Hello"}
    res.send(explorer)
})

app.get('/explorers/:explorerName', (req, res) => {
    res.send(req.params)
})