// Function

function createPerson(){
    let person ={};

    person.name = prompt("What's your name?")
    person.age = +promt("How old are you?")
    person.gender = promt("M/F?")
    person.isLogin = true;

    ageCheck(person.age);
    return person;
}

function ageCheck(age){
    if(age<18){
        alert("Ты еще мал");
    } else {
        alert("Welcome to the club");
    }
}
    
    let newPerson = createPerson();
    console.log(newPerson);
    // ageCheck(newPerson.age);