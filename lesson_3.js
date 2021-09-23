// Задание 1. С помощью цикла while вывести все простые числа в промежутке от 0 до 100.
var a = 0;
function numbers(num) {
    var i = 2;
    while (i < num / 2) {
        if (num % i == 0) {
            return false;
        }
        i++;
    }
    return true;
}

while (a <= 100) {
    if (numbers(a)) {
        console.log(a);
    }
    a++;
}


// Задание 2. С этого урока начинаем работать с функционалом интернет-магазина. Предположим, есть сущность корзины. Нужно реализовать функционал подсчета стоимости корзины в зависимости от находящихся в ней товаров.

var cart = [
    {
        model: "Поло",
        season: "Spring-Summer 21",
        price: 25,
        count: 1
    },
    {
        model: "Юбка",
        season: "Summer 21",
        price: 50,
        count: 2
    },
    {
        model: "Блузка",
        season: "Spring 21",
        price: 10,
        count: 3
    }
]

// Задание 3. Товары в корзине хранятся в массиве. Задачи:
// a) Организовать такой массив для хранения товаров в корзине;
// b) Организовать функцию countBasketPrice, которая будет считать стоимость корзины.

function countBasketPrice(mas) {
    var cartPrice = 0;
    for (var item of mas) {
        cartPrice = cartPrice + (item.price * item.count)
    }
    return cartPrice;
}
console.log(countBasketPrice(cart));



// Задание 4.*Вывести с помощью цикла for числа от 0 до 9, не используя тело цикла. Выглядеть это должно так:
//for(…){// здесь пусто}

for (var a = 0; a <= 9; console.log(a++));

// Задание 5. *Нарисовать пирамиду с помощью console.log, как показано на рисунке, только у вашей пирамиды должно быть 20 рядов, а не 5:
// x
// xx
// xxx
// xxxx
// xxxxx

var mountain = "";

for (var a = 0; a <= 20; a++) {
    mountain += "x";
    console.log(mountain);
}