const firebase = require('../../config/firebase')
const { getFirestore } = require("firebase/firestore");
const { collection, getDocs, addDoc } = require("firebase/firestore");
const db = getFirestore(firebase);

async function create(req, res, next) {
    try {
        const { name, code, color, amount } = req.body;
        if (!name || !code) {
            return res.json({ status: 0, message: "Name and code is require" })
        }
        const docRef = await addDoc(collection(db, "products"), {
            name, code, color, amount
        });
        res.json({ status: 1, data: docRef })
    } catch (error) {
        next(error);
    }
}
async function list(req, res, next) {
    try {
        const arr = [];
        const querySnapshot = await getDocs(collection(db, "products"));
        querySnapshot.forEach((doc) => {
            arr.push(doc.data())
        });
        res.json({ status: 1, data: arr })
    } catch (error) {
        next(error);
    }
}

module.exports = {
    create,
    list
}   