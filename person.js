var Person = function(firstName, lastName ) {
  this.firstName = firstName;
  this.lastName = lastName;
};
var Dog = function(name, breed) {
  this.name = name;
  this.breed = breed;
}

var tintin = new Dog('tintin', 'spaniel');

Dog.prototype.fullName = function() {
  return this.name + ' is a ' + this.breed
};


Person.prototype.fullName = function() {
  return this.firstName + ' ' + this.lastName
};

var harry = new Person('Harry', 'Potter');
var hermione = new Person('Hermione', 'Granger');
var ron = new Person('Ron', 'Wesley');

var people = [harry, hermione, ron];

people.forEach(function(person) {
  console.log(person.fullName());
});


console.log(tintin.fullName());



