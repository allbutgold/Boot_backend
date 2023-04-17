import { getDB } from "./db.js";

const COL = 'reservations';

export const getReservations = async (req, res) => {
  console.log(req.headers)
  try {
    const db = await getDB();
    const reservations = await db.collection(COL).find().toArray();
    console.log(reservations)
    if (reservations === null) res.end()
    else res.json(reservations)
  } catch (err) {
    console.log(err)
    res.status(500).end()
  }
}


export const addReservations = async (req, res) => {
  console.log(req.body)
  try {
    const db = await getDB();
    const reservations = await db.collection(COL).insertOne(req.body);
    res.json(reservations)
  } catch (err) {
    console.log(err)
    res.status(500).end()
  }
}