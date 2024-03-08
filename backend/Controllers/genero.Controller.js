import pool from "../db.js"

export const getGeneros = async (req, res) => {
    try {
        const [results] = await pool.query(
            `select * from Generos`
        )
        res.json(results)
    } catch (error) {
        return res.status(500).json({ message: error.message });
    }
}

export const postGeneros = async (req, res) => {
    try {
        const { nombreGenero } = req.body;
        const [result] = await pool.query(
            "INSERT INTO Generos(nombreGenero) VALUES (?)",
            [nombreGenero]
        );
        res.json({
            id: result.insertId,
            nombreGenero
        });
    } catch (error) {
        return res.status(500).json({ message: error.message });
    }
}

export const deleteGenero = async (req, res) => {
    try {
        const [result] = await pool.query("DELETE FROM Generos WHERE idGenero = ?", [
            req.params.id,
        ]);

        if (result.affectedRows === 0)
            return res.status(404).json({ message: "Generos not found" });

        return res.sendStatus(204);
    } catch (error) {
        return res.status(500).json({ message: error.message });
    }
}

export const updateGenero = async (req, res) => {
    try {
        const result = await pool.query("UPDATE Generos SET ? WHERE idGenero = ?", [
          req.body,
          req.params.id,
        ]);
        res.json(result);
      } catch (error) {
        return res.status(500).json({ message: error.message });
      }
}