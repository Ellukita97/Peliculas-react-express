import pool from "../db.js";

export const getProyeccionSala = async (req, res) => {
    try {
        const [results] = await pool.query(
            `select * from ProyeccionSala`
        )
        res.json(results)
    } catch (error) {
        return res.status(500).json({ message: error.message });
    }
}

export const postProyeccionSala = async (req, res) => {
    try {
        const { idSala, idProyeccion } = req.body;
        const [result] = await pool.query(
            "INSERT INTO ProyeccionSala(idSala,idProyeccion) VALUES (?,?) ",
            [idSala, idProyeccion]
        );
        res.json({
            id: result.insertId,
            idSala,
            idProyeccion
        });
    } catch (error) {
        return res.status(500).json({ message: error.message });
    }
}

export const deleteProyeccionSala = async (req, res) => {
    try {
        const [result] = await pool.query("DELETE FROM ProyeccionSala WHERE id = ?", [
            req.params.id,
        ]);

        if (result.affectedRows === 0)
            return res.status(404).json({ message: "ProyeccionSala not found" });

        return res.sendStatus(204);
    } catch (error) {
        return res.status(500).json({ message: error.message });
    }
}

export const updateProyeccionSala = async (req, res) => {
    try {
        const result = await pool.query("UPDATE ProyeccionSala SET ? WHERE id = ?", [
            req.body,
            req.params.id,
        ]);
        res.json(result);
    } catch (error) {
        return res.status(500).json({ message: error.message });
    }
}
