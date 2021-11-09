// 문법

// let result = '';
// let i = 0;
//
// do {
//     i = i + 1;
//     result = result + i;
// } while (i < 5);
//
// console.log(result);

//예제 팩토리얼 구하기

let i = 0

const n = 10

let result = 1
do {
    i++
    result = result * i

} while (i < n)

console.log(n + '!의 값은 ' + result +'입니다.')