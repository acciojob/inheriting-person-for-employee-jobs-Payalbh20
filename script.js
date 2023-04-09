function Person(name, age) {
	Person(name,age){
		greet(){
			console.log(`Hello, my name is ${this.name} , I am ${this.age} years old`)
		}
	}
}

function Employee extends Person(name, age, jobTitle) {
	Employee(name,age,jobTitle){
		super()
		jobGreet(){
			console.log(`Hello, my name is ${this.name} , I am ${this.age} years old, and my job title is ${this.jobTitle}`);
		}
	}
}

var employee1 = new Employee('sai',23,'instructor');

// Do not change code below this line
window.Person = Person;
window.Employee = Employee;