import express from "express";

const app = express();
const PORT = process.env.PORT || 3000;

app.get("/", (res, req) => res.send("Hello World"));

app.listen(PORT, () => {
  console.log(`El puerto se esta iniciando en el puerto ${PORT}`);
});
