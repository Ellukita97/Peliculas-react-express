import pool from "../db.js";

export const getProyecciones = async (req, res) => {
    try {
        const [results] = await pool.query(
            `select * from Proyecciones`
        )
        res.json(results)
    } catch (error) {
        return res.status(500).json({ message: error.message });
    }
}

export const postProyecciones = async (req, res) => {
    try {
        const { idPelicula, FechaHoraProyeccion, MontoProyeccion } = req.body;
        const [result] = await pool.query(
            "INSERT INTO Proyecciones(idPelicula,FechaHoraProyeccion,MontoProyeccion) VALUES (?,?,?)     ",
            [idPelicula, FechaHoraProyeccion, MontoProyeccion]
        );
        res.json({
            id: result.insertId,
            idPelicula,
            FechaHoraProyeccion,
            MontoProyeccion
        });
    } catch (error) {
        return res.status(500).json({ message: error.message });
    }
}

export const deleteProyecciones = async (req, res) => {
    try {
        const [result] = await pool.query("DELETE FROM Proyecciones WHERE idProyeccion = ?", [
            req.params.id,
        ]);

        if (result.affectedRows === 0)
            return res.status(404).json({ message: "Proyecciones not found" });

        return res.sendStatus(204);
    } catch (error) {
        return res.status(500).json({ message: error.message });
    }
}

export const updateProyecciones = async (req, res) => {
    try {
        const result = await pool.query("UPDATE Proyecciones SET ? WHERE idProyeccion = ?", [
            req.body,
            req.params.id,
        ]);
        res.json(result);
    } catch (error) {
        return res.status(500).json({ message: error.message });
    }
}
