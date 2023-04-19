import express from 'express';
import cors from 'cors';
import mongodb from 'mongodb';

import './util/config.js'
import { getReservations, addReservations } from './util/resController.js';
import {getBoats, addBoat,getAvailiableBoats, addReservation} from './controller/boatController.js'

const PORT = 9898
const app = express()

app.use(cors({origin: "https://bootfrontend-production.up.railway.app"}))

app.use(express.json())

app.get('/api/v1/boats',  getBoats)

app.get('/api/v1/reservations', getReservations)
app.post('/api/v1/availiableBoats',getAvailiableBoats)

app.post('/api/v1/boat', addBoat)
app.post('/api/v1/reservation', addReservations)

app.post('/api/v1/boat', (req,res)=>{
    res.sendStatus(200)
})

app.put('/api/v1/boat', addReservation)
app.put('/api/v1/reservation', (req,res)=>{
    res.sendStatus(200)
})



app.listen(PORT, ()=>{console.log("listen at " + PORT)})