function Person(firstName, lastName, gender, hobbies) {
    this.name = {
        first:firstName,
        last:lastName
    };
    this.gender = gender;
    this.hobbies = hobbies;

    Person.prototype.sayHello = function() {
        console.log('Hello. My name is ' + firstName + ' ' + lastName + '.');
    }

    Person.prototype.tellHobbies = function() {
        if(hobbies.length == 0) {
            console.log('I have no hobbies.');
            console.log('');
        }
        else if(hobbies.length == 1) {
            console.log('My only hobby is ' + hobbies[0] + '.');
            console.log('');
        }
        else {
            console.log('My hobbie are: ');
            for (i in hobbies) {
                console.log('- ' + hobbies[i]);
            }
            console.log('');
        }
    }
}

module.exports = Person;