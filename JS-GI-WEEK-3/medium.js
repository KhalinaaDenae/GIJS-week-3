function cutSlices(slices){
  
    pizza = function sharePizza(people){
        return slices / people;
    }
    return people;
}

let sharePizza = cutSlices(8)
console.log(`Each person gets ${sharePizza(3)} slices of pizza . `)