const express= require ('express'); //Se inyecta la dependencia de express
let app= express();
let PORT =process.env.PORT || 3000; // SE DEFINE EL PUERTO DE ESCUCHA QUE INGRESAMOS EN EL NAVEGADOR
app.use('/assets', express.static(__dirname + '/public')); //contenido estatico

app.set('view engine', 'ejs');

app.get('/', (req,res)=>{
    res.send(`<!DOCTYPE html> <html lang="en"> <head><link rel=stylesheet" href="/assets/style.css">
    <title>Document</title></head>
    <body> <h1>Hola mundo </h1>
    <p></p></body></html>`)
});

app.get('/person/:id', (req,res)=>{
    res.render('person', {ID: req.params.id, Qstr: req.query.qrst});
});

app.listen(PORT);