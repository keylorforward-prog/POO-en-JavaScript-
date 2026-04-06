//Objetos POO q es un paradigma

class Product{
    constructor(name, price, category){ 
        this.name = name;
        this.price = price;
        this.category = category;
    }
        

    displayProduct(){
        console.log(`Product: ${this.name}`);
        console.log(`Price: $${this.price.toFixed(2)}`);
        console.log(`Total with tax: $${this.calculateTotal(salesTax).toFixed(2)}`)
               
    }

    calculateTotal (salesTax){
        return this.price + (this.price * salesTax);
    }
}

const salesTax = 0.005 

//toFixed (Redondea un numero a n decimales y lo convierte en string)
const Product1 = new Product ("Shirt", 19.99, "Clothe");
const Product2 = new Product ("Pants", 22.50, "Clothe");
const Product3 = new Product ("Underwear", 99.99, "Clothe");

Product3.displayProduct();

const total = Product1.calculateTotal(salesTax);

//console.log(`Total price (with tax): $${total.toFixed(2)}`);

//ESTO EN REACT NATIVE SERIA TAL Q ASI EJEMPLO 

// export default function App() {

//   const salesTax = 0.005;

//   const product = {
//     name: "Shirt",
//     price: 19.99,
//     category: "Clothe"
//   };

//   const calculateTotal = (price, tax) => {
//     return price + (price * tax);
//   };

//   return (
//     <div>
//       <h2>Product: {product.name}</h2>
//       <p>Price: ${product.price.toFixed(2)}</p>
//       <p>
//         Total: ${calculateTotal(product.price, salesTax).toFixed(2)}
//       </p>
//     </div>
//   );
// }