const Person = require("./Person");

function Student(firstName, lastName, gender, hobbies, subject) {
    Person.call(this, firstName, lastName, gender, hobbies);
    this.subject = subject;

    Student.prototype.sayHello = function() {
        console.log("Hi. I'm " + firstName + " and I study " + subject + ".");
    }
}

Student.prototype = Object.create(Person.prototype);
Student.prototype.constructor = Student;

module.exports = Student;