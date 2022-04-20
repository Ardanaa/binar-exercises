const usersService = require("../services/usersService");

const getAll = async(req, res) => {
    const { title } = req.query;
    console.log(title);
    // Manggil Service Get users
    const getusers = await usersService.getAll({ title });
    res.send(getusers);
};



const getById = async(req, res) => {
    const {
        id
    } = req.params;
    const getusersById = await usersService.getById({
        id
    });

    res.status(200).send(getusersById);
}

const updateById = async(req, res) => {
    const { title, author, price } = req.body;
    const { id } = req.params;
    const updateusersById = await usersService.updateById({
        id,
        title,
        author,
        price
    });



    res.status(200).send(updateusersById);
};



const deleteById = async(req, res) => {
    const {
        id
    } = req.params;
    const deleteusersById = await usersService.deleteById({
        id
    });

    res.status(200).send(deleteusersById);
};

const create = async(req, res) => {
    const {
        title,
        author,
        price
    } = req.body;

    const createduser = await usersService.create({
        title,
        author,
        price
    });

    res.status(201).send(createduser);
};

module.exports = {
    getAll,
    create,
    getById,
    deleteById,
    updateById
};