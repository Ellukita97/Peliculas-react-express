import pool from "../db.js";

export const getSalas= async (req, res) => {
    try {
        const [results] = await pool.query(
            `select * from Salas`
        )
        res.json(results)
    } catch (error) {
        return res.status(500).json({ message: error.message });
    }
}

export const postSalas = async (req, res) => {
    try {
        const { CantTotalAsientosSala } = req.body;
        const [result] = await pool.query(
            "INSERT INTO Salas(CantTotalAsientosSala) VALUES (?)",
            [CantTotalAsientosSala]
        );
        res.json({
            id: result.insertId,
            CantTotalAsientosSala
        });
    } catch (error) {
        return res.status(500).json({ message: error.message });
    }
}

export const deleteSalas = async (req, res) => {
    try {
        const [result] = await pool.query("DELETE FROM Salas WHERE idSala = ?", [
            req.params.id,
        ]);

        if (result.affectedRows === 0)
            return res.status(404).json({ message: "Salas not found" });

        return res.sendStatus(204);
    } catch (error) {
        return res.status(500).json({ message: error.message });
    }
}

export const updateSalas = async (req, res) => {
    try {
        const result = await pool.query("UPDATE Salas SET ? WHERE idSala = ?", [
            req.body,
            req.params.id,
        ]);
        res.json(result);
    } catch (error) {
        return res.status(500).json({ message: error.message });
    }
}
