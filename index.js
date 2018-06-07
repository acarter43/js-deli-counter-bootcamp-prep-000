var katzDeli = [];
var counter = 0

function takeANumber(katzDeliLine){
  counter++
  katzDeliLine.push()
  return (`You are number ${katzDeliLine.length}.`)
}

function nowServing(customer){
  if (customer.length === 0 ){
    return "There is nobody waiting to be served!" 
  } else {
    
    return `Currently serving ${customer.shift()}.`
  }
}

function currentLine(line) {
 if (line.length === 0) {
   return "The line is currently empty."
  } 
  else {
   var lineNameAndNo = []
   for (let i = 0; line.length> i; i++ ){
     lineNameAndNo.push(`${i +1}. ${line[i]}`)
   }
   return `The line is currently: ${lineNameAndNo.join(', ')}` 
    
  }
}

function array(item){
  for (let i = 0; i < item.length; i++){
    console.log(item[i])
  }
}
  


var item = ['Michael', "sam"]

