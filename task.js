
function calculateTax(income, expenses) {
    if (income >= 0 && expenses >= 0 && income>=expenses) {
        const savings = income - expenses;
        const tax = savings * .20;
        return tax;
    }
    else {
        return "Invalid Input"
    }
}


function sendNotification(email) {
    const find = email.indexOf("@");

    if (find !== -1) {
        const parts = email.split("@");
        let add = parts[0] + " " + "sent you an email from" + " " + parts[1];
        return add;
    }
    else {
        return "Invalid Email"
    }
}


function checkDigitsInName(name) {

   if (typeof name !== 'string') {
        return 'Invalid Input';
    }
    
    for (let num = 0; num <= 9; num++) {

        let convert = num.toString();

       if (name.includes(convert)) {
           return true;
        }
    }
  return false;
}



function calculateFinalScore(obj) {

  if (typeof obj !== 'object') {
    return "Invalid Input"
  }

  const name = obj.name;
  const testScore = obj.testScore;
  const schoolGrade = obj.schoolGrade;
  const isFFamily = obj.isFFamily;

  if (typeof name !== 'string' || typeof testScore !== 'number' ||
    typeof schoolGrade!=='number'||typeof isFFamily!=='boolean'
  ) {
    return "Invalid Input"
  }

  let finalScore = testScore + schoolGrade;
  if (isFFamily === true) {
    finalScore = finalScore + 20;
  }

  if (finalScore >= 80) {
    return true;
  } else {
    return false;
  }
  
}



function  waitingTime(waitingTimes  , serialNumber) {
    if (Array.isArray(waitingTimes) === false || typeof serialNumber !== 'number') {
      return "Invalid Input"
    }

    sum = 0;
    for (let i = 0; i < waitingTimes.length; i++){
        sum = sum + waitingTimes[i]; 
    }

    let divided = sum / waitingTimes.length;
    let round = Math.round(divided);
    let serial = serialNumber - 1;
    let finalSerial = serial - waitingTimes.length;
    let finalSum = round * finalSerial;

    return finalSum;
}


