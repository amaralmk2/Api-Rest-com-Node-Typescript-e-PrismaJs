import  Express from "express";

const app = Express();
app.use(Express.json());
const PORT = 8000;


/*app.get('/', (req, res) => {
    return res.send({mensage: 'Olá mundo!'});
})*/


app.listen(PORT,() => {
    console.log(`Server is Runing... ${PORT}`);
})