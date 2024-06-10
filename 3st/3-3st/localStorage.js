localStorage.setItem("name", "james");
localStorage.setItem("age", 20);

const person = {
    name: 'Bard',
    age: 3,
    occupation: 'Language Model'
};

localStorage.setItem("person", JSON.stringify(person));