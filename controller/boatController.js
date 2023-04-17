import { ObjectId } from "mongodb";
import { getDb } from "../util/db.js"
const COL = 'boats'

export const getBoats = async (req,res) => {
    try {
        const db = await getDb()
        const docs = await db.collection(COL).find()
        if(docs==null) return res.end()
        res.json(docs)
    }catch(err) {
        console.error(err)
        res.sendStatus(500)

    }
    
}

export const addBoat = async (req, res) => {
    try {
        const db = await getDb()
        const results = await db.collection(COL).insertOne(req.body)
        console.log(results)
        res.end()
    }catch(err) {
        console.error(err)
        res.sendStatus(500)
    }

}