const express= require ('express'); //Se inyecta la dependencia de express
let app= express();
let PORT =process.env.PORT || 3000; // SE DEFINE EL PUERTO DE ESCUCHA QUE INGRESAMOS EN EL NAVEGADOR
app.use('/assets', express.static(__dirname + '/public')); //contenido estatico

app.use(express.urlencoded({extended: false}));

app.set('view engine', 'ejs');

app.get('/', (req,res)=>{
    res.send(`<!DOCTYPE html> <html lang="en"> <head><link rel=stylesheet" href="/assets/style.css">
    <title>Document</title></head>
    <body> <h1>Hola mundo </h1>
    </body></html>`)
});

app.get('/person/:id', (req,res)=>{
    res.render('person', {Name: req.params.id, Message: req.query.message, Times: req.query.times});
});

app.get('/student', (req, res) =>{
    res.render('index');
})

app.post('/student', (req, res)=>{
    res.send(`First Name es: ${req.body.fname}, Last Name es: ${req.body.lname}`);
})

app.listen(PORT);