const express=require('express')
const app=express();
const hbs=require('hbs')
const path=require('path')
const port=process.env.PORT || 3000;

const static_path=path.join(__dirname,"../public")
const template_path=path.join(__dirname,"../templets/views")
const partials_path=path.join(__dirname,"../templets/partials")
console.log(partials_path)

hbs.registerPartials(partials_path)
 
app.set("view engine",'hbs');
app.set('views',template_path)




app.use(express.static(static_path))


app.get('/',(req,res)=>{
    res.render("index")
})

app.get('/seh',(req,res)=>{
    res.render('about')   
})

app.get('/weather',(req,res)=>{
    res.render('weather')   
})

app.get('/background_changer',(req,res)=>{
    res.render('background_changer')   
})

app.get('/wordcounter',(req,res)=>{
    res.render('wordcounter')   
})

app.get('/temperature_converter',(req,res)=>{
    res.render('temperature_converter')   
})

app.get('*',(req,res)=>{
    res.render('404')
})

app.listen(port,()=>{
    console.log(`${port} active`)
})