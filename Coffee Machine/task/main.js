const input = require('sync-input');

let water = 400;
let milk = 540;
let almondMilk = 500;
let coffeeBeans = 120;
let cups = 9;
let money = 550;

function supplies(){
    console.log("The coffee machine has:");
    console.log(water+" "+"ml of water");
    console.log(milk+" "+"ml of milk");
    console.log(coffeeBeans+" "+"g of coffee beans");
    console.log(cups+" "+"disposable cups");
    console.log("$"+""+money+" "+"of money");
}

function chooseAction(){
    let stateOn = true;
    console.log("Write action (buy, fill, take, remaining, exit):");
    let inputChooseAction = input('');
    if(inputChooseAction === "buy"){
      buy();
      chooseAction();
    } else if (inputChooseAction === "fill"){
       fill();
       chooseAction();
    } else if (inputChooseAction === "take"){
       take();
       chooseAction();
    } else if (inputChooseAction === "remaining"){
       supplies();
       chooseAction();
    } else if (inputChooseAction === "exit"){
       stateOn = false;
    }
}
chooseAction();
function buy(){
    console.log("What do you want to buy?  1 - espresso, 2 - latte, 3 - cappuccino, 4 - frapuccino");
    let choose = input('' );
    let chooseCoffee = parseInt(choose);
    if(chooseCoffee === 1){
        espresso();
    } else if (chooseCoffee === 2){
        late();
    } else if(chooseCoffee === 3){
        cappuccino();
    } else if (chooseCoffee == "back"){
        chooseAction();
    } else if (chooseCoffee === 4){
        frapuccino();
    }
}
function espresso(){
    if(water >= 250 && coffeeBeans>= 16 && cups >=1){
        water = water - 250;
        coffeeBeans = coffeeBeans - 16;
        cups  = cups - 1;
        money  = money + 4;
        console.log("I have enough resources, making you a coffee!");
    } else if (water < 250){
        console.log("Sorry, not enough water!");
    } else if (coffeeBeans < 16){
        console.log("Sorry, not enough coffee beans!");
    } else if (cups > 1){
        console.log("Sorry, not enough cups!");
    }

}
function late(){
    if (water >= 350 && milk >= 75 && coffeeBeans >= 20){
        water = water - 350;
        milk = milk - 75;
        coffeeBeans = coffeeBeans - 20;
        cups = cups - 1;
        money = money + 7;
        console.log("I have enough resources, making you a coffee!");
    } else if (water < 350){
        console.log("Sorry, not enough water!");
    } else if (milk < 75){
        console.log("Sorry, not enough milk!");
    } else if (coffeeBeans < 20){
        console.log("Sorry, not enough coffee beans!");
    } else if (cups < 1){
        console.log("Sorry, not enough cups!");
    }
}
function cappuccino(){
    if (water >= 200 && milk >= 100 && coffeeBeans >= 12 && cups >= 1){
        water = water - 200;
        milk = milk - 100;
        coffeeBeans = coffeeBeans - 12;
        cups = cups - 1;
        money = money + 6;
        console.log("I have enough resources, making you a coffee!");
    } else if (water < 200){
        console.log("Sorry, not enough water!");
    } else if (milk < 100){
        console.log("Sorry, not enough milk!");
    } else if (coffeeBeans < 12){
        console.log("Sorry, not enough coffee beans!");
    } else if (cups < 1){
        console.log("Sorry, not enough cups!");
    }

}
function frapuccino(){
    if(water >= 200 && almondMilk >= 100 && coffeeBeans >= 12 && cups >= 1) {
        water = water - 200;
        almondMilk = almondMilk - 100;
        coffeeBeans = coffeeBeans - 12;
        cups = cups - 1;
        money = money + 8;
        console.log("I have enough resources, making you a coffee!");
    }   else if (water < 200){
    console.log("Sorry, not enough water!");
} else if (almondMilk < 100){
    console.log("Sorry, not enough almond milk!");
} else if (coffeeBeans < 12){
    console.log("Sorry, not enough coffee beans!");
} else if (cups < 1){
    console.log("Sorry, not enough cups!");
}
}

function fill(){
    console.log("Write how many ml of water you want to add: ");
    let inputWater = input("");
    let addWater = parseInt(inputWater);
    water = water + addWater;
    console.log("Write how many ml of milk you want to add:");
    let inputMilk = input("");
    let addMilk = parseInt(inputMilk);
    milk = milk + addMilk;
    console.log("Write how many grams of coffee beans you want to add: ");
    let inputCoffeeBeans = input("");
    let addCoffeeBeans = parseInt(inputCoffeeBeans);
    coffeeBeans = coffeeBeans + addCoffeeBeans;
    console.log("Write how many disposable cups you want to add:");
    let inputCups = input("");
    let addCups = parseInt(inputCups);
    cups= cups + addCups;
}
function take(){
    console.log("I gave you $"+money);
    money = 0;
}
