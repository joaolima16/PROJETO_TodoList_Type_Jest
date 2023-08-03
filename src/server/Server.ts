import App from "../app/App";
const port = 3333 || process.env.PORT

App.listen(port,()=>{
    console.log("Server is running")
})