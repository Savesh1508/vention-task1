interface Item {
  name: string;
  price: number;
}

const shoppingCart:Item[] = []

function addItem(name:string, price:number):string {
  const item:Item = {name, price};
  shoppingCart.push(item);
  return `Item ${name} added to cart!`
}

function calculateTotalCost(items:Item[]):number {
  return items.reduce((acc, item) => acc + item.price, 0)
}

console.log(addItem('Apple', 123));
console.log(addItem('Peach', 321));

const totalCost = calculateTotalCost(shoppingCart);
console.log(`Total cost: ${totalCost}$`);