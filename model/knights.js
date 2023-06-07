const connect = require('./connection');

const getKnights = (req ,res) => {
    connect.query('SELECT * FROM knight', (err, result, fields) => {
        res.status(200).json(result);
    });
}

const getKnightsByID = (req, res) => {
    const id = req.params.id;
    connect.query('SELECT * FROM knight WHERE id=?', [id], (err, result, fields) => {
        res.status(200).json(result);
    });
}

const createKnight = (req, res) => {
    connect.query('INSERT INTO knight(name,age) VALUES (?,?)',[req.body.name,req.body.age], (err, result, fields) => {
        err ? res.status('500').send(err) : res.status(200).send('created knight');
    });
}

const updateKnight = (req, res) => {
    connect.query('UPDATE knight SET ? WHERE id=?',[req.body,req.params.id], (err, result, fields) => {
        err ? res.status('500').send(err) : res.status(200).send('updated knight');
    })
}

const deleteKnightById = (req, res) => {
    connect.query('DELETE FROM knight WHERE id=?',[req.params.id], (err,result, fields) => {
        err ? res.status('500').send(err) : res.status(200).send('deleted knight');
    })
}

module.exports = {
    getKnights,
    getKnightsByID,
    createKnight,
    updateKnight,
    deleteKnightById
};