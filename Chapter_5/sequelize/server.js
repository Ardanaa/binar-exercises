const express = require("express");
const app = express();
const PORT = 8087;

app.use(express.json());

app.listen(PORT, () => {
    console.log(`Server berhasil berjalan di port http://localhost:${PORT}`);
});