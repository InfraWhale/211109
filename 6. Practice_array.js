//배열 생성

const arr = []
console.log(arr) // []
console.log(arr.length) // 0

//배열 추가

//뒤에 추가
arr.push('가')
arr.push('나')

console.log(arr)// [ '가', '나' ]
console.log(arr.length) // 2
console.log(arr.push('다')) // 3
console.log(arr) // [ '가', '나', '다' ]

//앞에 추가
arr.unshift('A')
arr.unshift('B')

console.log(arr)// [ 'B', 'A', '가', '나', '다' ]
console.log(arr.length) // 5
console.log(arr.unshift('C')) // 6
console.log(arr) // [ 'C', 'B', 'A', '가', '나', '다' ]

//push, unshift는 길이형태로 저장됨

//배열 제거

// 뒤에 제거

arr.pop()

console.log(arr) // [ 'C', 'B', 'A', '가', '나' ]
console.log(arr.length) // 5
console.log(arr.pop()) // 나
console.log(arr) // [ 'C', 'B', 'A', '가' ]

// 앞에 제거

arr.shift()

console.log(arr) // [ 'B', 'A', '가', ]
console.log(arr.length) // 3
console.log(arr.shift()) // B
console.log(arr) // [ 'A', '가' ]

//  인덱스로 항목 접근
console.log(arr[0]) // A
console.log(arr[1]) // 가

// 인덱스 번호 접근
console.log(arr.indexOf('A')) // 0
console.log(arr.indexOf('가')) // 1

// 인덱스 pos 부터 시작하여 n개 제거
arr2 = [1,2,3,4,5,6,7,8,9,10]

arr2.splice(1,1)
console.log(arr2) // [ 1, 3, 4, 5, 6, 7, 8, 9, 10 ]

arr2.splice(2,3)
console.log(arr2) // [ 1, 3, 7, 8, 9, 10 ]

console.log(arr2.splice(2,2)) // [ 7, 8 ] 떼진 부분만 따로 나옴
console.log(arr2) // [ 1, 3, 9, 10 ]

// for문 이용 배열 생성

const arr3 =[]
for (let i = 0; i <= 100; i++) {
    arr3.push(i)
}

console.log(arr3)

//     [
//     0,  1,  2,  3,  4,  5,  6,  7,  8,  9, 10, 11,
//         12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23,
//         24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35,
//         36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47,
//         48, 49, 50, 51, 52, 53, 54, 55, 56, 57, 58, 59,
//         60, 61, 62, 63, 64, 65, 66, 67, 68, 69, 70, 71,
//         72, 73, 74, 75, 76, 77, 78, 79, 80, 81, 82, 83,
//         84, 85, 86, 87, 88, 89, 90, 91, 92, 93, 94, 95,
//         96, 97, 98, 99,
// ... 1 more item
// ]






