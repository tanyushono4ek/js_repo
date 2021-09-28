// Задание 1.
//Написать функцию, преобразующую число в объект. Передавая на вход число от 0 до 999, мы должны получить на выходе объект, в котором в соответствующих свойствах описаны единицы, десятки и сотни. Например, для числа 245 мы должны получить следующий объект: {‘единицы’: 5, ‘десятки’: 4, ‘сотни’: 2}. Если число превышает 999, необходимо выдать соответствующее сообщение с помощью console.log и вернуть пустой объект.

var numbers = prompt("Введите число от 0 до 999")
numbersLenght = numbers.length;
object = {};
func(numbers);

function func(number) {
    if (number < 0 || number >= 1000) {
        console.log("Проверьте ввод числа");

    } else {
        switch (numbersLenght) {
            case 3:
                object.unit = number[2];
                object.dozens = number[1];
                object.hundred = number[0];
                break;
            case 2:
                object.unit = number[1];
                object.dozens = number[0];
                break;
            case 1:
                object.unit = number;
                break;

        }
        console.log(object);
    }
    return object;

}


// Задание 2. 
//Для игры, реализованной на уроке, добавить возможность вывода хода номер n (номер задается пользователем)

var works = {
    a00: 'Вы живёте в тихой и уютной деревеньке на окрайне страны.\n' +
        'Здесь есть практчески всё: речка, лес, горы, озеро, луга и поля, есть даже школа в соседнем селе.\n' +
        'Сейчас начало лета, воскресенье, раннее утро, Вы просыпаетесь и собираетесь ...\n',
    a0: 2,
    a1: '1 - Поспать до обеда\n',
    a2: '2 - Пойти прогуляться\n',
    b00: 'Вы решили поспать до обеда.\n' +
        'После того как Вы проснулись первое, что вы ощутили, это приятный запах, который шёл с кухни.\n' +
        'После Вы замечаете, какая за окном прекрасная погода, и Вы думаете ...\n',
    b0: 2,
    b1: '1 - Пойти прогуляться\n',
    b2: '2 - Пойти пообедать\n',
    c00: 'Вы решили пойти прогуляться.\n' +
        'Вы выходите из своего дома и видите прекрасный рассвет, блики солнца так и играют на озёрной глади.\n' +
        'Вы решаете дойти до озера, полюбоваться его красотойю\n' +
        'С одной стороны тропинки Вы видите пшеничное поле, за которым веднеется лес.\n' +
        'С другой стороны течёт речка, а в далеке виднеются горы.\n' +
        'Вы наслаждаетесь пейзажами и не замечаете как летит время.\n' +
        'Домой Вы приходите только к обеду, но до обеда ещё есть время и Вы решаете ...\n',
    c0: 2,
    c1: '1 - Подождать обед в столовой\n',
    c2: '2 - Поколоть дров перед обедом\n',
    d00: 'Здесь пишем текст повествования.\n' +
        'Потом пишем несколько действий, например, два\n',
    d0: 2,
    d1: '1 - 1-й ответ\n',
    d2: '2 - 2-й ответ\n',
};
var answer = 'a';
var answers = [];
function story() {
do {
if (answer == 'a') {
    answers.push('a00');
    question2 = prompt(works.a00 + works.a1 + works.a2 + '-1 - Выход из игры');
    if (question2 == 1) {
        answer = 'b';
        answers.push('a1');
    }
    else if (question2 == 2) {
        answer = 'c';
        answers.push('a2');
    }
    else if(question2 == -1) {
        alert('Всего доброго!')
        answer = 'e';
        break;
    }
    else if (question2 != 1 || question2 != 2) {
        alert('Проверьте ввод данных');
        answers.pop('a00');
        story();
    }
    }
if (answer =="b") { 
    answers.push('b00');
    question3 = prompt(works.b00 + works.b1 + works.b2 + '-1 - Выход из игры');
    if (question3 == 1) {
        answer = 'c';
        answers.push('b1');
    }
        else if (question3== 2) {
        answer = 'x';
        answers.push('b2');
    }
        else if(question3 == '-1') {
        alert('Всего доброго!');
        answer = 'e';
        break;}
   
        else if (question3 != 1 || question3 != 2) {
            alert('Проверьте ввод данных');
            answers.pop('b00');
            story();
    }
}
if (answer == "c") { 
    answers.push('с00');
    question4 = prompt(works.c00 + works.c1 + works.c2 + '-1 - Выход из игры');
    if (question4 == 1) {
        answer = 'y';
        answers.push('c1');}
        else if (question4 == 2) {
        answer = 'z';
        answers.push('c2');
        }   
        else if(question4 == '-1') {
        alert('Всего доброго');
        answer = 'e';
        break; }
   
        else if (question4 != 1 || question4 != 2) {
            alert('Проверьте ввод данных');
            answers.pop('с00');
            story();
        }

}
} while(answer=='e');
}
story();
var result;
l=answers.length;
alert("История ходов: "+answers);
for(var i in works){
    //alert(i);
    for (var j = 0; j < l; j++) {
        //alert(answers[j]);
    if (answers[j]==i) {
        result=result+works[i];
        //alert(works[i]);
    } 
    }
}
alert('A вот и полная история \n'+result);
alert("Всего ходов: "+answers.length/2);
quest5=prompt("Результат какого хода хотите посмотреть?");
//alert(answers[quest5*2-1]);
searchkey=answers[quest5*2-1];
for(var i in works){
    if (i==searchkey) {
        alert(works[i]);
    } 
}




// Задание 3. 
/* На базе игры, созданной на уроке, реализовать игру "Кто хочет стать миллионером?"*/