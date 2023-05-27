const json = require("json-server")
const server = json.create()
const router = json.router("db.json")
const middleware = json.defaults()
const port = 9876

server.use(middleware)
server.use(router)

server.listen(port, ()=>{
    console.log(`Server is running at port ${port}`);
})