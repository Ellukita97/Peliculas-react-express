import pool from "../db.js";

export const getBoletoCompra = async (req, res) => {
    try {
        const [results] = await pool.query(
            `select * from BoletoCompra`
        )
        res.json(results)
    } catch (error) {
        return res.status(500).json({ message: error.message });
    }
}

export const postBoletoCompra = async (req, res) => {
    try {
        const { idProyeccion, idUsuario, AsientoBoleto } = req.body;
        const [result] = await pool.query(
            "INSERT INTO BoletoCompra(idProyeccion,idUsuario,AsientoBoleto) VALUES (?,?,?)",
            [idProyeccion, idUsuario, AsientoBoleto]
        );
        res.json({
            id: result.insertId,
            idProyeccion,
            idUsuario,
            AsientoBoleto
        });
    } catch (error) {
        return res.status(500).json({ message: error.message });
    }
}

export const deleteBoletoCompra = async (req, res) => {
    try {
        const [result] = await pool.query("DELETE FROM BoletoCompra WHERE idBoleto = ?", [
            req.params.id,
        ]);

        if (result.affectedRows === 0)
            return res.status(404).json({ message: "BoletoCompra not found" });

        return res.sendStatus(204);
    } catch (error) {
        return res.status(500).json({ message: error.message });
    }
}

export const updateBoletoCompra = async (req, res) => {
    try {
        const result = await pool.query("UPDATE BoletoCompra SET ? WHERE idBoleto = ?", [
            req.body,
            req.params.id,
        ]);
        res.json(result);
    } catch (error) {
        return res.status(500).json({ message: error.message });
    }
}