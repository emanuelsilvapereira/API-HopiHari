    const jwt = require("jsonwebtoken");

exports.required = async (req, res, next) => {
    try {
        res.locals.idUsuario = 0;
        res.locals.admin = false;

        const token = req.headers.authorization.split(" ")[1];
        const decoded = jwt.verify(token, "senhadojwt");

        if (decoded) {
            res.locals.idUsuario = decoded.id;
            res.locals.admin = decoded.admin;
            next();
        } else {
            return res.status(401).send({ "Mensagem": "Usuário não Autenticado" });
        }

    } catch (error) {
        return res.status(500).send(error);
    }
}

exports.userRequire = async (req, res, next) => {
    try {
        if (!res.locals.admin) {
            return res.status(405).send({ "Mensagem": "Usuário não Autorizado"});
        }
        next();
    }catch (error) {
        return res.status(500).send(error);
    }
}