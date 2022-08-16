function scuberGreetingForFeet(distance){
  
  let result;
  if(distance <= 400){
    result = `This one is on me!`
  }else if(distance >= 400 && distance <= 2500){
    result = `I will gladly take your thirty bucks.`
  }else if (distance > 2500){
    result = `No can do.`
  }
  return result;
}
console.log(scuberGreetingForFeet(199));
console.log(scuberGreetingForFeet(2501));


function ternaryCheckCity(city){
  // Write your code here!
  
  return city === `NYC` ? "Ok, sounds good." : "No go.";


}
console.log(ternaryCheckCity(`NYC`));
console.log(ternaryCheckCity(`Pittsburgh`));


function switchOnCharmFromTip(tip){
  // Write your code here!
  switch(tip){
         case `generous`:
         return `Thank you so much.`
  }
  switch(tip){
    case `not as generous`:
      return `Thank you.`
      default:{
        return `Bye.`
  }
}
}
