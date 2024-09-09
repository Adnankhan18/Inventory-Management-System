// Item constructor function
function Item(id, name, quantity, price) {
  this.id = id;
  this.name = name;
  this.quantity = quantity;
  this.price = price;
}

// Function to add an item to the inventory
function addItem(inventory, item) {
  inventory.push(item);
  console.log("Item added.");
}

// Function to update an item in the inventory
function updateItem(inventory, id, newDetails) {
  const item = inventory.find(item => item.id === id);
  if (item) {
    Object.assign(item, newDetails);  // Update only provided properties
    console.log(`Item with ID ${id} updated.`);
  } else {
    console.log(`Item with ID ${id} not found.`);
  }
}

// Function to delete an item from the inventory
function deleteItem(inventory, id) {
  const index = inventory.findIndex(item => item.id === id);
  if (index !== -1) {
    inventory.splice(index, 1);
    console.log(`Item with ID ${id} deleted.`);
  } else {
    console.log(`Item with ID ${id} not found.`);
  }
}

// Function to get an item from the inventory
function getItem(inventory, id) {
  return inventory.find(item => item.id === id) || null;
}

// Function to print the inventory
function printInventory(inventory) {
  console.log("Inventory:");
  console.log(JSON.stringify(inventory, null, 2));
}

// Example usage
const inventory = [];

// Initial Inventory
console.log("Initial Inventory:");
addItem(inventory, new Item(1, 'Apple', 10, 0.5));
addItem(inventory, new Item(2, 'Banana', 20, 0.2));
printInventory(inventory);

// Adding a new item
console.log("\nAdding item:");
addItem(inventory, new Item(3, 'Orange', 15, 0.7));
printInventory(inventory);

// Updating an existing item
console.log("\nUpdating item:");
updateItem(inventory, 2, { quantity: 30 });
printInventory(inventory);

// Deleting an item
console.log("\nDeleting item:");
deleteItem(inventory, 2);
printInventory(inventory);

// Get an item
console.log("\nGet item with ID 1:");
console.log(getItem(inventory, 1));
