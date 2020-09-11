//ТЗ 18 Функции
// Написать два варианта решения доработки данного кода для вывода i последовательно 0 1 2 3 

// Вариант 1 поменять var на let(видимость в условиях всего блока)
const arr = [10, 12, 15, 21];
for (let i = 0; i < arr.length; i++) {
    setTimeout(function () {
        console.log('Index: ' + i + ', element: ' + arr[i]);
    }, 3000);
}

//Вариант 2
const arr1 = [10, 12, 15, 21];
function logout(e) {
    console.log('Index: ' + e + ', element: ' + arr1[e]);
}

for (var e = 0; e < arr1.length; e++) {
    setTimeout(logout, 3000, e);
}

let array = [34, 3, 2, 1]

//Вариант 3
for (let y = 0; y < array.length; y++) {
    (function (index) {
        setTimeout(function () {
            console.log(index + ' key  ' + array[index]);
        }, 3000);
    }(y));
}