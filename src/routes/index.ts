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