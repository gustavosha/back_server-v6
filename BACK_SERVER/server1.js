// 19/04 - criar oprimeiro servidor web usando node
const http =require('http');


const server =http.createServer((req, res)=>{
    console.log("Efetuando o pedido!\n");
    //declarando um header
    res.setHeader('content-type','text/html');
    res.write("<h1>O que vossa senhoria deseja?<h1>");
    res.write("<h2>Dormir</h2>");
    res.write("<h3>Cafezinho</h3>");
    res.end();
})

server.listen(3000,'localhost',()=>{
    console.log('servidor no ar!!!!');
})
