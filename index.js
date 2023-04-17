import express from 'express';
import cors from 'cors';
import mongodb from 'mongodb';
import './util/config'

const PORT = 9898
const app = express()

app.use(cors())
app.use(express.json())

app.get('/api/v1/boats', (req,res)=>{
    res.sendStatus(200)
})
app.get('/api/v1/reservations', (req,res)=>{
    res.sendStatus(200)
})
app.post('/api/v1/boat', (req,res)=>{
    res.sendStatus(200)
})
app.post('/api/v1/reservation', (req,res)=>{
    res.sendStatus(200)
})
app.put('/api/v1/boat', (req,res)=>{
    res.sendStatus(200)
})
app.put('/api/v1/reservation', (req,res)=>{
    res.sendStatus(200)
})



app.listen(PORT, ()=>{console.log("listen at " + PORT)})