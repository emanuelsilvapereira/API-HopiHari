const mysql = require('../mysql');

exports.getNotificacoes= async (req, res, ) => {

    if (!res.locals.idUsuario) {
        return res.status(400).json({ message: "id_user é obrigatório" });
      }
    
      try {
        const results = await mysql.execute(
            `select * from notifications
            where id_user = ?
              AND status = 1`
            ,
          [res.locals.idUsuario] 
        );
    
        
        return res.status(200).send({"Resultados": results});
      } catch (error) {
        console.error("Erro ao buscar notificações:", error);
        return res.status(500).json({ message: "Erro interno do servidor" });
      }
    };