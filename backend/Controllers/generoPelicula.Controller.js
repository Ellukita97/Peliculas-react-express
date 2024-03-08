import pool from "../db.js";

export const getGeneroPelicula = async (req, res) => {
    try {
        const [results] = await pool.query(
            `select * from GeneroPelicula`
        )
        res.json(results)
    } catch (error) {
        return res.status(500).json({ message: error.message });
    }
}

export const postGeneroPelicula = async (req, res) => {
    try {
        const { idGenero, idPelicula } = req.body;
        const [result] = await pool.query(
            "INSERT INTO GeneroPelicula(idGenero,idPelicula) VALUES (?,?) ",
            [idGenero, idPelicula]
        );
        res.json({
            id: result.insertId,
            idGenero,
            idPelicula
        });
    } catch (error) {
        return res.status(500).json({ message: error.message });
    }
}

export const deleteGeneroPelicula = async (req, res) => {
    try {
        const [result] = await pool.query("DELETE FROM GeneroPelicula WHERE id = ?", [
            req.params.id,
        ]);

        if (result.affectedRows === 0)
            return res.status(404).json({ message: "GeneroPelicula not found" });

        return res.sendStatus(204);
    } catch (error) {
        return res.status(500).json({ message: error.message });
    }
}

export const updateGeneroPelicula = async (req, res) => {
    try {
        const result = await pool.query("UPDATE GeneroPelicula SET ? WHERE id = ?", [
            req.body,
            req.params.id,
        ]);
        res.json(result);
    } catch (error) {
        return res.status(500).json({ message: error.message });
    }
}