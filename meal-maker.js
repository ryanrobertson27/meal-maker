let menu = {};

menu.courses = {};

menu.courses.appetizers = [];
menu.courses.mains = [];
menu.courses.desserts = [];


menu.addDishesToCourse = function(courseName, dishName, dishPrice) {
    let dish = {}
    dish.name = dishName;
    dish.price = dishPrice;

    switch (courseName) {
        case ('appetizers'):
            menu.courses.appetizers.push(dish);
            break;
        case ('mains'):
            menu.courses.mains.push(dish);
            break;
        case ('desserts'):
            menu.courses.desserts.push(dish);
            break;
        default:
            console.log('We only serve appetizers, mains, and desserts');
    }
}

menu.getRandomDishFromCourse = function(courseName) {
    let dishes = menu.courses[courseName]
    let index = Math.floor(Math.random(dishes.length));

    return dishes[index];
}
 menu.generateRandomMeal = function() {
     let appetizer = menu.getRandomDishFromCourse('appetizers')
     let main = menu.getRandomDishFromCourse('mains')
     let dessert = menu.getRandomDishFromCourse('desserts')

     let price = appetizer.price + main.price + dessert.price;
    
     return `Your Meal For The Evening: \nAppetizer: ${appetizer.name}. \nMain Dish: ${main.name} \nDessert: ${dessert.name} \nTotal Price: \$${price}`
 }

menu.addDishesToCourse('appetizers', 'Truffle Fries', 6.49);
menu.addDishesToCourse('mains', 'House Burger', 12.99);
menu.addDishesToCourse('desserts', 'Lava Cake', 4.99);


let meal = menu.generateRandomMeal();
console.log(meal)


