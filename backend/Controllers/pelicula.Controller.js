import pool from "../db.js";

export const getPeliculas = async (req, res) => {
    try {
        const [results] = await pool.query(
            `select * from Peliculas`
        )
        res.json(results)
    } catch (error) {
        return res.status(500).json({ message: error.message });
    }
}

export const postPeliculas = async (req, res) => {
    try {
        const { PeliculaUrlImagen, PeliculaUrlPortada, nombre, Sinopsis, Clasificaccion } = req.body;
        const [result] = await pool.query(
            "INSERT INTO Peliculas(PeliculaUrlImagen,PeliculaUrlPortada,nombre,Sinopsis,Clasificaccion) VALUES (?,?,?,?,?)",
            [PeliculaUrlImagen, PeliculaUrlPortada, nombre, Sinopsis, Clasificaccion]
        );
        res.json({
            id: result.insertId,
            PeliculaUrlImagen,
            PeliculaUrlPortada,
            nombre,
            Sinopsis,
            Clasificaccion
        });
    } catch (error) {
        return res.status(500).json({ message: error.message });
    }
}

export const deletePeliculas = async (req, res) => {
    try {
        const [result] = await pool.query("DELETE FROM Peliculas WHERE idPelicula = ?", [
            req.params.id,
        ]);

        if (result.affectedRows === 0)
            return res.status(404).json({ message: "Pelicula not found" });

        return res.sendStatus(204);
    } catch (error) {
        return res.status(500).json({ message: error.message });
    }
}

export const updatePeliculas = async (req, res) => {
    try {
        const result = await pool.query("UPDATE Peliculas SET ? WHERE idPelicula = ?", [
            req.body,
            req.params.id,
        ]);
        res.json(result);
    } catch (error) {
        return res.status(500).json({ message: error.message });
    }
}
