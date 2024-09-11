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

const output = { name: "Rajib", testScore: 45,  schoolGrade: 25, isFFamily : true  } ;
const result = calculateFinalScore(output);
console.log(result);
