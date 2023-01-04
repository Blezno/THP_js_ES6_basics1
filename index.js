const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    outpout: process.stdout
});

const items = [
{id: 1,	name: 'Sleek Granite Bench'},
{id: 2, name: 'Ergonomic Copper Lamp'},
{id: 3, name: 'Aerodynamic Cotton Coat'},
{id: 4,	name: 'Enormous Linen Lamp'},
{id: 5,	name: 'Practical Cotton Pants'},
{id: 6,	name: 'Enormous Bronze Gloves'},
{id: 7, name: 'Ergonomic Leather Lamp'},
{id: 8,	name: 'Aerodynamic Plastic Bottle'},
{id: 9, name: 'Practical Concrete Lamp'},
{id: 10, name: 'Rustic Linen Bottle'},
{id: 11, name: 'Enormous Bronze Shirt'},
{id: 12, name: 'Enormous Copper Clock'},
{id: 13, name: 'Small Marble Keyboard'},
{id: 14, name: 'Incredible Copper Lamp'},
{id: 15, name: 'Lightweight Bronze Wallet'},
{id: 16, name: 'Lightweight Leather Chair'},
{id: 17, name: 'Synergistic Granite Hat'},
{id: 18, name: 'Aerodynamic Wool Watch'},
{id: 19, name: 'Synergistic Concrete Watch'},
{id: 20, name: 'Awesome Wool Bench'},
{id: 21, name: 'Rustic Granite Table'},
{id: 22, name: 'Fantastic Wool Coat'},
{id: 23, name: 'Enormous Cotton Gloves'},
{id: 24, name: 'Aerodynamic Bronze Gloves'},
{id: 25, name: 'Incredible Paper Computer'},
{id: 26, name: 'Aerodynamic Linen Lamp'},
{id: 27, name: 'Heavy Duty Silk Bottle'},
{id: 28, name: 'Incredible Bronze Clock'},
{id: 29, name: 'Heavy Duty Linen Knife'},
];

console.log("Please choose an option below : ");
console.log("1.Access the list of items");
console.log("2.Exit the app");

const optionMenu = rl.question("Please enter a number :");
    if(optionMenu === "1") {
        console.log("You choose to access the list of items")
        console.log(items);
    } else if(optionMenu === "2") {
        console.log("You choose to exit the app.")
        rl.close();
    } else {
        console.log("You did not select the right number, please try again.")
    };