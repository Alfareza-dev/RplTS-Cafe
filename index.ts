interface Order {
    id: number
    custumer: string
    menu: string
    qty: number
    price: number
}

const order: Order[] = [
    {id: 1, custumer: "Andi", menu:"Nasi Goreng", qty: 2, price: 20000},
    {id: 2, custumer: "Budi", menu:"Mie ayam", qty: 1, price: 15000},
    {id: 3, custumer: "Citra", menu:"Es teh", qty: 3, price: 5000},
    {id: 4, custumer: "Andi", menu:"Es jeruk", qty: 1, price: 8000},
];


// 1 

let totals = order.map((order) => order.qty * order.price)
console.log(totals) 

console.log("-------------------------------")

// 2 

let customerTotals = order.map((o) => {
  return {
    customer: o.custumer,
    total: o.qty * o.price
  }
})

console.log(customerTotals)

console.log("-------------------------------")


// 3 


let multipleOrders = order.filter((o) => o.qty > 1)

console.log(multipleOrders);

console.log("-------------------------------") 
