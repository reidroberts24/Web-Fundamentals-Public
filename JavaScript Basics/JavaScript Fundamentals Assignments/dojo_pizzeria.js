// Choices for the random pizza function
var crustType = ["hand tossed", "thin", "deep dish", "new-york style", "traditional"]
var sauceType =["marinara", "buffalo", "alfredo", "none"]
var cheeses = ["cheddar", "mozzarella", "feta"]
var toppings = ["mushrooms", "olives", "onions", "pepperoni", "sausage"]

function pizzaOven(crustType, sauceType, cheese, toppings) {
    var pizza = {
        'crust': crustType,
        'sauce': sauceType,
        'cheese': cheese,
        'toppings': toppings
    }
    return pizza
}

function randomPizza() {
    var pizza = {
        'crust': crustType[Math.floor(Math.random()*crustType.length)],
        'sauce': sauceType[Math.floor(Math.random()*sauceType.length)],
        'cheese': cheeses[Math.floor(Math.random()*cheeses.length)],
        'toppings': toppings[Math.floor(Math.random()*toppings.length)]
    }
    return pizza
}
// Predefined pizzas
console.log(pizzaOven("deep dish", "traditional", ["mozzarella"], ["pepperoni", "sausage"]))
console.log(pizzaOven("hand tossed", "marinara", ["mozzarella", "feta"], ["mushrooms", "olives", "onions"]))
console.log(pizzaOven("new-york style", "alfredo", ["cheddar", "mozzarella"], ["mushrooms", "sausage", "onions"]))
console.log(pizzaOven("hand tossed", "marinara", ["mozzarella"], ["olives", "pepperoni"]))

// Random Pizzas
console.log(randomPizza())
console.log(randomPizza())