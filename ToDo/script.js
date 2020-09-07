//ТЗ 18 Функции
// Написать два варианта решения доработки данного кода для вывода i последовательно 0 1 2 3 

// Вариант 1 поменять var на let(видимость в условиях всего блока)
// const arr = [10, 12, 15, 21];
// for (let i = 0; i < arr.length; i++) { 
//     setTimeout(function() {
//         console.log('Index: ' + i + ', element: ' + arr[i]);
//                             }, 3000);
// }

//Вариант 2
const arr = [10, 12, 15, 21];
function logout(i)
    {
        console.log('Index: ' + i + ', element: ' + arr[i]);
    }
for (var i = 0; i < arr.length; i++) 
{ 
    setTimeout(logout(i), 3000);
}