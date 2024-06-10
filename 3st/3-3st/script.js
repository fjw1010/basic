// 배열 메소드 연습 문제
const arr = [1, 2, 3, 4, 5];
const b = arr.map((a) => a * 2)
console.log(b)

// 1
const person = [ { name: 'Alice', age: 22 }, { name: 'Bob', age: 24 }, { name: 'Carol', age: 23 } ]
const people = person.map((n) => n.name)
console.log(people);

// 2
const persons = [ { name: 'Alice', age: 30, city: 'Seoul' }, { name: 'Bob', age: 25, city: 'New York' }, { name: 'Charlie', age: 35, city: 'London' } ];
const peoples = persons.map((i) => {
    return {
        name: i.name,
        city: i.city
    }
})

console.log(peoples);

// find 리턴 뒤에 조건 사용
const number = [3, 4, 11, 9, 12, 13]
const numbers = number.find((i) => i > 10);
console.log(numbers)

// 1
const uesr = [ { name: 'Alice', age: 30 }, { name: 'Bob', age: 25 }, { name: 'Charlie', age: 35 } ]
const uesrs = uesr.find((person) => person.name === 'Alice')
console.log(uesrs)

// 2
const newUesr = [ { id: 1, name: 'Laptop' }, { id: 2, name: 'Smartphone' }, { id: 3, name: 'Tablet' } ]
const newUesrs = newUesr.find((person) => person.name, person.age === 3)
console.log(newUesrs)

// filter 연습
const nums = [1, 2, 3, 4, 5, 6];
const filterNums = nums.filter((number) => number % 2 === 0)
console.log(filterNums)

// 1
const ageUp = [ { name: 'Alice', age: 25 }, { name: 'Bob', age: 30 }, { name: 'Charlie', age: 35 } ]
const ageFilter = ageUp.filter((number) => number.age >= 30);
console.log(ageFilter);

// 2
const money = [ { name: 'Laptop', price: 1000 }, { name: 'Smartphone', price: 500 }, { name: 'Tablet', price: 250 } ]
const moneyUp = money.filter((moneys) => moneys.price >= 500)
console.log(moneyUp)

// 스프레드, 딕스럭쳐링

const arr1 = [1, 2, 3];
const arr2 = [4, 5, 6];
const arr3 = [7, 8, 9];

const newArr = [...arr1, ...arr2, ...arr3];

console.log(newArr);

// 1
const obj1 = { name: "Alice", age: 30 };
const obj2 = { job: "Software Engineer", city: "Seoul" };

const objct = {...obj1, ...obj2};

console.log(objct);

// 2
const numberss = [10, 20, 30]
function sumNumbers(x, y, z) {
    return x + y + z
}
const sum = sumNumbers(...numberss);

console.log(sum)

// 3
const personss = {
    name: "John Doe",
    age: 30,
    occupation: "Software Engineer"
};

const {name, age, occupation} = personss;

console.log(name, age, occupation)

// 4
const user = {
    name: "Jane Doe",
    age: 25,
    occupation: "Web Developer",
    address: {
      city: "Seoul",
      country: "South Korea"
    }
};

const {address: {city}} = user;

console.log(city)

// 5
const numbers1 = [1, 2, 3, 4, 5];
const [num1, num2, ...numss] = numbers1

console.log(numss);