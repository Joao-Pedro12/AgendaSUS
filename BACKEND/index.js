import express from "express"
import pacienteRoutes from "./routes/pacientes.js"
import cors from "cors"

const app = express()
const port = 3001;

app.use(express.json())
app.use(cors())

app.use("/", pacienteRoutes)

app.get('/', (req, res) => {
  res.send('Backend funcionando!');
});

app.listen(port, () => {
  console.log(`Servidor rodando na porta ${port}`);
});

app.listen(5000)