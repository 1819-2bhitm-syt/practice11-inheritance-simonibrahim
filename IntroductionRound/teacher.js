const Person = require("./Person");

function Teacher(firstName, lastName, gender, hobbies, subject) {
    Person.call(this, firstName, lastName, gender, hobbies);
    this.subject = subject;

    Teacher.prototype.sayHello = function() {
        if(gender == "female") {
            console.log('Hello. My name is Mrs. '+ lastName + ' and I teach ' + subject + '.');
        }
        else {
            console.log('Hello. My name is Mr. '+ lastName + ' and I teach ' + subject + '.');
        }


    }
}

Teacher.prototype = Object.create(Person.prototype);
Teacher.prototype.constructor = Teacher;

module.exports = Teacher;