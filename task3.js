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

let output = checkDigitsInName(["Raj"]);
console.log(output);



