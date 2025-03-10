import { Router } from 'express'
import { readFile, writeFile } from 'fs/promises';

const dataSource = "./data/list.txt"

export const router = Router();

router.post("/contact", async (req, res) => {
    const name = req.body.name;

    if (!name || name.length < 2) {
        res.json({ error: "insert at least 2 characters." });
        return;
    }

    let list: string[] = [];

    try {
        const data = await readFile(dataSource, { encoding: "utf-8" });
        list = data.split("\n")
    } catch (err) {
        
    }

    list.push(name);

    await writeFile(dataSource, list.join("\n"));

    res.status(201).json({ contact: name });
});

router.get("/contact", async (req, res) => {
    let list: string[] = [];
    try {
        const usersList = await readFile(dataSource, { encoding: "utf-8" });    
        list = usersList.split("\n");
    } catch {

    }

    res.json({ users: list });
})

router.delete("/contact", async (req, res) => {
    let name = req.query.name;

    if (!name) {
        res.json({ error: "need send a name to exclude." });
        return;
    }

    let list: string[] = [];
    
    try {
        const contentList = await readFile(dataSource, { encoding: "utf-8" });
        list = contentList.split("\n");
    } catch(err) { }
    
    list = list.filter(n => n.toUpperCase() !== (name as string).toUpperCase());
    await writeFile(dataSource, list.join("\n"));

    res.json({ contacts: list });
})