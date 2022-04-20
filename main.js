// All valid credit card numbers
const valid1 = [4, 5, 3, 9, 6, 7, 7, 9, 0, 8, 0, 1, 6, 8, 0, 8];
const valid2 = [5, 5, 3, 5, 7, 6, 6, 7, 6, 8, 7, 5, 1, 4, 3, 9];
const valid3 = [3, 7, 1, 6, 1, 2, 0, 1, 9, 9, 8, 5, 2, 3, 6];
const valid4 = [6, 0, 1, 1, 1, 4, 4, 3, 4, 0, 6, 8, 2, 9, 0, 5];
const valid5 = [4, 5, 3, 9, 4, 0, 4, 9, 6, 7, 8, 6, 9, 6, 6, 6];

// All invalid credit card numbers
const invalid1 = [4, 5, 3, 2, 7, 7, 8, 7, 7, 1, 0, 9, 1, 7, 9, 5];
const invalid2 = [5, 7, 9, 5, 5, 9, 3, 3, 9, 2, 1, 3, 4, 6, 4, 3];
const invalid3 = [3, 7, 5, 7, 9, 6, 0, 8, 4, 4, 5, 9, 9, 1, 4];
const invalid4 = [6, 0, 1, 1, 1, 2, 7, 9, 6, 1, 7, 7, 7, 9, 3, 5];
const invalid5 = [5, 3, 8, 2, 0, 1, 9, 7, 7, 2, 8, 8, 3, 8, 5, 4];

// Can be either valid or invalid
const mystery1 = [3, 4, 4, 8, 0, 1, 9, 6, 8, 3, 0, 5, 4, 1, 4];
const mystery2 = [5, 4, 6, 6, 1, 0, 0, 8, 6, 1, 6, 2, 0, 2, 3, 9];
const mystery3 = [6, 0, 1, 1, 3, 7, 7, 0, 2, 0, 9, 6, 2, 6, 5, 6, 2, 0, 3];
const mystery4 = [4, 9, 2, 9, 8, 7, 7, 1, 6, 9, 2, 1, 7, 0, 9, 3];
const mystery5 = [4, 9, 1, 3, 5, 4, 0, 4, 6, 3, 0, 7, 2, 5, 2, 3];

// An array of all the arrays above
const batch = [valid1, valid2, valid3, valid4, valid5, invalid1, invalid2, invalid3, invalid4, invalid5, mystery1, mystery2, mystery3, mystery4, mystery5];


// Add your functions below:

const validateCred = arr => {
  let newArr = [...arr];
    newArr.pop(newArr.length -1);
    newArr = newArr.reverse();
    console.log(newArr);

    let sum = arr[arr.length-1];
    console.log(`init ${sum}`)
    let val;
    for(let i = 0; i < newArr.length; i++){
        let num = newArr[i];
        let mod = i % 2;
        console.log(`${i} % 2 = ${mod}, ${mod == 0 ? "even" : "Odd"}`);
        
        if(mod == 0){ //even numbers
            
            val = num * 2;          
            console.log(`${num} * 2 = ${val}`)
            console.log(`${val} > ${9} = ${val>9} and Sum = ${sum+val}`)
            
            if(val > 9){
              sum = sum + (val-9);
              console.log(`${val} > ${9} = ${val>9} and Sum = ${sum}`)
            }
            else{
              sum += val;
              console.log(`${val} > ${9} = ${val>9} and Sum = ${sum+val}`)
              //console.log(sum)
            }
        }
        else{ // odd numbers
          console.log(`${num} + ${sum} = ${sum+num}`);
            sum = sum + num;
            console.log( "out " + sum)
            
        }

        
    }
    console.log(sum);
    if(sum % 10 === 0){
        console.log("Card is VALID.");
        return "valid";
    }
    else{
        console.log("card is INVALID !!!");
        return "invalid";
    }
}

validateCred(invalid5);

const findInvalidCard = arr =>{
  let invalidArr =[];

  for(let i = 0; i < arr.length; i++){
    if(validateCred(arr[i]) === 'invalid'){
      invalidArr.push(arr[i]);
    }
  }
  return invalidArr;
};

const invalidArray = findInvalidCard(batch);
console.log(invalidArray);

const idInvalidCardCompanies = arr => {
  let invalidCompany = {};

  for(let i = 0; i < arr.length; i++){
    if(arr[i][0] === 3){
      if(invalidCompany["amex"] != 1){
        invalidCompany["amex"] = 1;
      }
    }

    else if(arr[i][0] === 4){
      if(invalidCompany["Visa"] != 1){
        invalidCompany["Visa"] = 1;
      }
    }

    else if(arr[i][0] === 5){
      if(invalidCompany["Mastercard"] != 1){
        invalidCompany["Mastercard"] = 1;
      }
    }

    else if(arr[i][0] === 6){
      if(invalidCompany["Discover"] != 1){
        invalidCompany["Discover"] = 1;
      }
    }

    else{
      console.log("Company not found");
    }
  }
  
  console.log(invalidCompany);
  return Object.keys(invalidCompany)
}

let invalidCompanies = idInvalidCardCompanies(invalidArray);


console.log(invalidCompanies);


