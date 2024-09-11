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

