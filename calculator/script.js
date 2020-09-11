//Вызов функции
initCalculator();

//Что делает эта функция
function initCalculator() {
    // Переменная keys равна Возврату элементов всех span после id calculator(keys становится массивом)
    let keys = document.querySelectorAll("#calculator span");
    //Цикл c параметрами:переменная i равна 0, i<длины массива keys, i+1; (мы проходим по всем элементам массива)
    for (let i = 0; i < keys.length; i++) {
        //тело цикла: keys[i] с вызовом события нажатия равному функции callBack(если мы нажимаем на любую кнопку, мы вызываем callBack)
        keys[i].onclick = callBack;
    }
}

//Функция callBack с параметрами (е)
function callBack(e) {
    //параметр е вызывает метод preventDefault, который cообщает пользовательскому агенту(браузеру), что если событие не обрабатывается явным образом, его действие по умолчанию не должно выполняться, как обычно
    e.preventDefault();

    //в теле функции указана переменная массив operators
    let operators = ["+", "-", "x", "÷"],
        decimalAdded = false,
        total = 0,//Результат работы калькулятора
        input = document.querySelector(".screen"),//Возвращает только элемент с селектором screen 
        btnVal = this.innerHTML,//Текущая нажатая кнопка
        inputVal = input.innerHTML;//Экран калькулятора, сюда выводятся введенные данные(то что между тегами)

    // Если оператор btnVal выполняет проверку на равенство, то выполняется функция calculate
    if (btnVal == "=") {
        calculate();

    } else if (operators.indexOf(btnVal) > -1) { //иначе, если в параметрах оператор с методом indexOf(возвращает первый индекс, по которому данный элемент может быть найден в массиве или -1, если такого индекса нет.), то выполняется функция showOperator
        showOperator();
    } else if (btnVal == ".") {// иначе, если нажата точка, то вызывается функция showDecimal
        showDecimal();
    } else if (btnVal == "C") {// иначе если нажата кнопка С , то вызывается функция reset
        reset();
    } else {//иначе вызывается функция showDigit с параметрами btnVal
        showDigit(btnVal);
    }

    /** Обработчики */

    function showOperator() {
        let lastChar = inputVal[inputVal.length - 1];//переменная равна введеным данным в экране калькулятора с длинной массива-1
        if (inputVal != "" && operators.indexOf(lastChar) == -1)//если inputVal не пустой и lastChar оператор 
            input.innerHTML += btnVal;//Вывод на экран калькулятора равен вводу того что введено
        else if (inputVal == "" && btnVal == "-") input.innerHTML += btnVal;//иначе, если вывод на экран равен "" и введеное значение равно минусу, выведенное на экран значение добавит введенное
        if (operators.indexOf(lastChar) > -1 && inputVal.length > 1) {//если в параметрах оператор с методом indexOf параметрами lastChar больше -1 и длине массива введенного значения больше 1
            input.innerHTML = inputVal.replace(/.$/, btnVal);//Выведенные данные на экран калькулятора присваиваются введенным изменениям
        }
        decimalAdded = false;//переменная фальш
    }

    function showDigit() {
        input.innerHTML += btnVal;//В экран калькулятора с данными добавляется символ нажатой кнопки
    }

    function showDecimal() {
        if (!decimalAdded) {//если в параметрах фальш, выведенное на экран значение добавляет нажатое
            input.innerHTML += btnVal;
            decimalAdded = true;//число с дробной частью
        }
    }

    function calculate() {
        let equation = inputVal,//в теле функции задана переменная равная выведенным на экране значениям
            lastChar = equation[equation.length - 1];//переменная равна equation с длиной массива equation -1

        equation = equation.replace(/x/g, "*").replace(/÷/g, "/");//переменная equation равна замене equation параметрами
        if (operators.indexOf(lastChar) > -1 || lastChar == ".")
            equation = equation.replace(/.$/, "");
        if (equation) {
            total = eval(equation);
            if (total.toString().indexOf(".") != -1)
                total = total.toFixed(2);
            input.innerHTML = total;
        }
        decimalAdded = false;
    }

    function reset() {//кнопка сброса С

        console.warn("Function Reset started");
        input.innerHTML = "";
    }

}

