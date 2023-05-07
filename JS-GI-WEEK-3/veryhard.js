function Person(name, job, age){
  this.name = name
  this.job = job
  this.age = age 
  }
Person.prototype.exercise = function(){
  console.log("Running is fun!")
}
Person.prototype.fecthJob = function(){
  console.log(this.name + " is a "+ this.job)
}


Person.prototype.isBusy = true


Person.prototype.completeTask = function() {
this.isBusy = false
}

Person.prototype.acceptNewTask = function() {
 this.isBusy = true
}

Person.prototype.offerNewTask = function() {

if (this.isBusy === true ){
  console.log(`${this.name} can't accept any taks right now.` )
} else {
  console.log(`${this.name} is available to accept new tasks. `)
}
}

Person.prototype.learnLanguage = function() {
      console.log("C++", "Python")
}

Person.prototype.listLanguages = function() {
  console.log(`${this.languages}`)
}

let programmer = new Person("John", "Software Engineer", 25)
programmer.languages = "Python"
programmer.isBusy = true
console.log(programmer)