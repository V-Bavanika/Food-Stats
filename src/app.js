const express = require('express');
const app = express();
const path=require('path');
const router = express.Router();
//const path=require("./db/conn.js");
//const User = require("./models/usermessage.js");
//const hbs= require("hbs");


//const app=express();
//const port=process.env.PORT || 3000;

//setting the path
const staticpath = path.join(__dirname,"/css");
app.use(express.static("src"));
app.use(express.static(__dirname + '/src'));
//const templatepath = path.join(__dirname,"../public/templates/views");
//const partialpath = path.join(__dirname,"../public/templates/partials");
//middleware

//app.use('/css',express.static(path.join(__dirname,"../node_modules/bootstrap/dist/css")));
//app.use('/js',express.static(path.join(__dirname,"../node_modules/bootstrap/dist/js")));
//app.use('/jq',express.static(path.join(__dirname,"../node_modules/jquery/dist")));

//app.use(express.urlencoded({extended:false}))
//app.use(express.static(staticpath))
//app.set("view engine","html");
//app.engine('html', require('ejs').renderFile);
//app.set("views",templatepath);
//hbs.registerPartials(partialpath);

//routing
//app.get(path,callback)
app.get('/css/style.css',function(req,res) {
    res.sendFile(__dirname+'/css/style.css');
})

app.get('/css/home.css',function(req,res) {
    res.sendFile(__dirname+'/css/home.css');
})

app.get('/css/tqstyle.css',function(req,res) {
    res.sendFile(__dirname+'/css/tqstyle.css');
})


router.get('/',function(req,res) {
    res.sendFile(path.join(__dirname+'/index.html'));
});

router.get('/contact',function(req,res) {
    res.sendFile(path.join(__dirname+'/contact.html'));
});

router.get('/cuisines',function(req,res) {
    res.sendFile(path.join(__dirname+'/cuisines.html'));
});


router.get('/maps',function(req,res) {
    res.sendFile(path.join(__dirname+'/maps.html'));
});
router.get('/tq',function(req,res) {
    res.sendFile(path.join(__dirname+'/tq.html'));
});

router.get('/amc',function(req,res) {
    res.sendFile(path.join(__dirname+'/amc.html'));
});

router.get('/chi',function(req,res) {
    res.sendFile(path.join(__dirname+'/chi.html'));
});

router.get('/cont',function(req,res) {
    res.sendFile(path.join(__dirname+'/cont.html'));
});

router.get('/itn',function(req,res) {
    res.sendFile(path.join(__dirname+'/itn.html'));
});

router.get('/jap',function(req,res) {
    res.sendFile(path.join(__dirname+'/jap.html'));
});

router.get('/ind',function(req,res) {
    res.sendFile(path.join(__dirname+'/ind.html'));
});


router.get('/tq',function(req,res) {
    res.sendFile(path.join(__dirname+'/tq.html'));
});


/*
app.post("/contact", async(req,res) => {
    try{
        res.send(req.body);

    }catch(error){
        res.status(500).send(error);
    }

})
/*
//create server
app.listen(port,() => {
    */
    app.use('/', router);
    app.listen(process.env.port || 5000);

    console.log('Running at Port 5000');
