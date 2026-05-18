import colors from 'colors'
import server from './server';

const PORT = process.env.PORT || 4000;

server.listen(PORT, () => {
    console.log(colors.bgBlue.magenta.italic('Servidor corriendo en el puerto:'), PORT);
});


let productName = "Tablet"
let isAuth = false
let price = 30
interface Product {
    id: number,
    price: number,
    name: string
}

let product: Product = {
    id: 1,
    price: 30,
    name: "Tablet"
}

let product2: Product = {
    id: 2,
    price: 30,
    name: "Tablet 11 Pulgadas"
}

const numbers = [10, 20, 30]