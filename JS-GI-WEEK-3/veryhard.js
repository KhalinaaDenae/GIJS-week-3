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

   

let programmer = new Programmer("John", "Software Engineer", 25, )
programmer.languages = "Javascript"
programmer.busy = true
programmer.completeTask = function(){
    programmer.busy = false
}
programmer.acceptNewTask = function(){
    programmer.busy = true
}
programmer.offerNewTask = function(){
  if(programmer.busy){
    console.log(`${this.name}can't accept any new tasks right now`)
  } else {
    console.log(`${this.name} would love to take on a new responsibility.`)
  }
}
programmer.learnLanguage = 
programmer.listLanguage = function(languages){
    console.log(this.languages)
}

