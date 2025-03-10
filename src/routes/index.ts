import { Router } from 'express'
import { createContact, deleteContact, getContacts } from '../service/contact';

export const router = Router();

router.post("/contact", async (req, res) => {
    const name = req.body.name;

    if (!name || name.length < 2) {
        res.json({ error: "insert at least 2 characters." });
        return;
    }

    await createContact(name);

    res.status(201).json({ contact: name });
});

router.get("/contact", async (req, res) => {
    let list = await getContacts();

    res.json({ users: list });
})

router.delete("/contact", async (req, res) => {
    let name = req.query.name;

    if (!name) {
        res.json({ error: "need send a name to exclude." });
        return;
    }

    let list = await getContacts();
    
    await deleteContact(name as string);

    res.json({ contacts: list });
})