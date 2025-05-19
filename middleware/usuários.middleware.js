const jwt = require("jsonwebtoken");

exports.required = async (req, res, next) => {
    try {
        res.locals.idUsuario = 0;


        const token = req.headers.authorization.split(" ")[1];
        const decoded = jwt.verify(token, "senhadojwt");

        if (decoded) {
            res.locals.idUsuario = decoded.id;
            next();
        } else {
            return res.status(401).send({ "Mensagem": "Usuário não Autenticado" });
        }

    } catch (error) {
        return res.status(500).send(error);
    }
}