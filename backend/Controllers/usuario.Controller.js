import pool from "../db.js";

export const getUsuarios = async (req, res) => {
    try {
        const [results] = await pool.query(
            `select * from Usuarios`
        )
        res.json(results)
    } catch (error) {
        return res.status(500).json({ message: error.message });
    }
}

export const postUsuarios = async (req, res) => {
    try {
        const { nombreUsuario, EmailUsuario, PasswordUsuario, FechaRegistroUsuario, FechaNacimiento, Tel, Rol } = req.body;
        const [result] = await pool.query(
            "INSERT INTO Usuarios(nombreUsuario,EmailUsuario,PasswordUsuario,FechaRegistroUsuario,FechaNacimiento,Tel,Rol) VALUES (?,?,?,?,?,?,?)",
            [nombreUsuario, EmailUsuario, PasswordUsuario, FechaRegistroUsuario, FechaNacimiento, Tel, Rol]
        );
        res.json({
            id: result.insertId,
            nombreUsuario,
            EmailUsuario,
            PasswordUsuario,
            FechaRegistroUsuario,
            FechaNacimiento,
            Tel,
            Rol
        });
    } catch (error) {
        return res.status(500).json({ message: error.message });
    }
}

export const deleteUsuarios = async (req, res) => {
    try {
        const [result] = await pool.query("DELETE FROM Usuarios WHERE idUsuario = ?", [
            req.params.id,
        ]);

        if (result.affectedRows === 0)
            return res.status(404).json({ message: "Usuarios not found" });

        return res.sendStatus(204);
    } catch (error) {
        return res.status(500).json({ message: error.message });
    }
}

export const updateUsuarios = async (req, res) => {
    try {
        const result = await pool.query("UPDATE Usuarios SET ? WHERE idUsuario = ?", [
            req.body,
            req.params.id,
        ]);
        res.json(result);
    } catch (error) {
        return res.status(500).json({ message: error.message });
    }
}
