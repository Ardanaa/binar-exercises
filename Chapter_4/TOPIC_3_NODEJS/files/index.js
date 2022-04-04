const { getData, createData } = require("./functions/files");

const payload = {
    name: "Ardana",
    age: 20,
};

createData(payload);

const data = getData();

console.log(data.name);