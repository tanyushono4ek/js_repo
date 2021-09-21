// Задание 1.
// грубо пропишу свои расчеты:
// с = 1(так как префиксный инкремент,то + считается)+ 1(т.к. а = 1 по условию), то есть на экран выведется с = 2
// d = b(1 по условию) + 0(постфиксный инкремент не оотбражается, но учитывается как новые данные переменной), т.о. на экран выведется d = 1
// опираясь на новые условия с = 2 + 1(префиксный инкремент) + 2 ( новое значение а), т.о. на экран будет выведено с = 5
// также по новым условиям: d = 2 + 2(b с новым значением + постфиксный инкремент), т.о. на экран будет выведено 4
// в итоге после всех вычислений и изменений а = 3, и на экран выводится 3,
// и b равно 3, выводится также 3


// Задание 2.
// по условию задания, а = 2, то есть х = 1 + (2*2) = 1 + 4 = 5



//Задание 3.
function numbers(a, b) {
    if (a >= 0 && b >= 0) {
        c = a - b;
        alert(c);
    }
    else if (a < 0 && b < 0) {
        c = a * b;
        alert(c)
    }
    else if ((a > 0 && b < 0) || (a < 0 && b > 0)) {
        c = a + b;
        alert(c)
    }
}

//Задание 4.

var a;
a = prompt("Введите число от 0 до 15");
a = parseInt(a);
switch (a) {
    case 0:
    case 1:
    case 2:
    case 3:
    case 4:
    case 5:
    case 6:
    case 7:
    case 8:
    case 9:
    case 10:
    case 11:
    case 12:
    case 13:
    case 14:
    case 15:
        alert(a);
        break;

    default:
        alert("Проверьте ввод числа");
        break;
}

//Задание 5.

var a, b;

function sum(a, b) {
    result = parseInt(a) + parseInt(b)   //изначально вводила function sum(a, b) {return a + b;}, но при совмещении с заданием 6 не было верного результата, запись расценивалась как текст
    return result;
}

function dif(a, b) {
    return a - b;
}

function mult(a, b) {
    return a * b;
}

function div(a, b) {
    if (b != 0)
        return a / b;
    return 0
}
//я проверяла через консоль, если не ставить условие с 0, то мне показывало ошибку

//Задание 6.

var a = prompt("Введите первое число ");
var b = prompt("Введите второе число ");
var operation = prompt("Введите действие + , - , * или /");

function count(a, b, operation) {
    switch (operation) {
        case "+":
            alert(sum(a, b));
            break;

        case "-":
            alert(dif(a, b));
            break;

        case "*":
            alert(mult(a, b));
            break;
        case "/":
            alert(div(a, b));
            break;
        default:
            alert("Уточните параметры ввода");
            break;
    }
}
count(a, b, operation);


//Задание 7.

// null — это специальное значение, но оно не является ни числом, ни строкой, ни логическим значением,обозначает "ничто" 
// а 0 - это число, обозначает конкретное число, например, результат вычислений или значение переменной.

//Задание 8.

function power(val, pow) {
    if (pow == 0) {
        return 1;
    }

    if (pow == 1) {
        return val;
    }

    if (pow > 0) {
        var exponentaition = val * power(val, pow-1);
        return exponentaition;

    }

    return (1 / val) * power(val, pow+1);
}

var a = prompt("Введите число");
var b = prompt("Введите степень возведения");
alert(power(a, b));

power(val, pow);




