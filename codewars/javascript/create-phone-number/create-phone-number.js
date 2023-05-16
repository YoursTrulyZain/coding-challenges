function createPhoneNumber(numbers){
    //variables to hold a counter and the string that will be returned.
    let count = 0;
    let numberString = "";
    
    //For loop that cycles through array
    for (let i = 0; i<numbers.length; i++) {
      
      //Switch which handles the special spaces and symbols in the number
      switch(count){
          
          case 0:
            numberString += "(" + numbers[i];
            break;
          case 2:
            numberString += numbers[i] + ") ";
            break;
          case 5:
            numberString += numbers[i] + "-";
            break;
          default:
            numberString += numbers[i];
            break;
      }
      
      //Incrementing the counter
      count++;
    }
    
    //Returning finished number
    return numberString;
  }