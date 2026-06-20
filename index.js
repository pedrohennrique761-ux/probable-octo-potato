import createItem from "./services/item.js";
import { addItem, deleteItem, removeItem, displayCart, calculateTotal } from "./services/cart.js";

const item1 = await createItem("Notebook Gamer", 4500, 1);
const item2 = await createItem("Mouse Gamer", 150, 2);
const item3 = await createItem("Teclado Mecânico", 250, 1);

await addItem(item1);
await addItem(item2);
await addItem(item3);

await displayCart();
await calculateTotal();

await removeItem("Mouse Gamer");

await displayCart();
await calculateTotal();

await deleteItem("Notebook Gamer");

await displayCart();
await calculateTotal();
