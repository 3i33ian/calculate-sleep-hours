function getSleepHours(day){
  if(day==='monday'){
    return 8;
  } else if(day==='tuesday'){
    return 7;
  } else if(day==='wednesday'){
    return 6;
  } else if(day==='thursday'){
    return 8
  } else if(day==='friday'){
    return 9
  } else if(day==='saturday'){
    return 9
  } else if(day==='sunday'){
    return 5
  }
}

function getActualSleepHours(){
 return getSleepHours('monday') 
  + getSleepHours('tuesday')
  + getSleepHours('wednesday')
  + getSleepHours('thursday')
  + getSleepHours('friday')
  + getSleepHours('saturday')
  + getSleepHours('sunday')
 
}

function getIdealSleepHours(){
  let idealHours = 3;
  return idealHours * 7;
}

function calculateSleepDebt(){
const actualSleepHours = getActualSleepHours();
const idealSleepHours = getIdealSleepHours();

if(actualSleepHours === idealSleepHours ){
console.log('yeah');
} else if(actualSleepHours > idealSleepHours){
console.log('You slept too much, you got ' + (actualSleepHours -idealSleepHours) + 'hours of difference');
} else if(actualSleepHours < idealSleepHours){
console.log('You slept too less,you got ' + (idealSleepHours - actualSleepHours) + ' hours of difference');
}
}

console.log(getActualSleepHours());
console.log(getIdealSleepHours());
calculateSleepDebt();
