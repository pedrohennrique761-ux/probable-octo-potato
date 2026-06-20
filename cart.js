const cart = [];

async function addItem(item) {
    cart.push(item);
}

async function deleteItem(name) {
    const index = cart.findIndex(item => item.name === name);
    if (index !== -1) cart.splice(index, 1);
}

async function removeItem(name) {
    const item = cart.find(item => item.name === name);

    if (!item) return;

    if (item.quantity > 1) {
        item.quantity--;
    } else {
        await deleteItem(name);
    }
}

async function displayCart() {
    console.log("\n🛒 Carrinho Shopee\n");

    cart.forEach((item, index) => {
        console.log(`${index + 1}. ${item.name} | R$ ${item.price.toFixed(2)} | Qtd: ${item.quantity} | Subtotal: R$ ${item.subtotal().toFixed(2)}`);
    });
}

async function calculateTotal() {
    const total = cart.reduce((acc, item) => acc + item.subtotal(), 0);
    console.log(`\n💰 Total: R$ ${total.toFixed(2)}`);
}

export { addItem, deleteItem, removeItem, displayCart, calculateTotal };
