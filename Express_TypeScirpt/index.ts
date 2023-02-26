import express,{Express,Request,Response} from 'express';

const PORT:number = 3000

const app: Express = express()
 
app.get('/',(req:Request,res:Response)=>{
    res.send("Learning TypeScript + Express")
})

app.get('/hi',(req:Request,res:Response)=>{
    res.send("Hi Route")
})

app.post('/',(req:Request,res:Response)=>{
    res.json({"Message":"Receieved"})
})

app.listen(PORT,()=>{
    console.log("Learning TypeScirpt + Express")
})