// remove duplicates from array
// find the frequency of a number in array
// find max and min of an array
// count the number of prime elements in an array

var arr = [1, 2, 1, 34, 17, 19, 20, 22, 31, 96, 100, 36, 43, 96, 17, 65, 71];


// Removing duplicates
function duplicate(arr){
  arr.sort(function(a, b){return a - b})
  const temp = []
  
  arr.forEach(function(ele){
      var count = 0
      if(temp.includes(ele)){
        count++
      }
      else{
        temp.push(ele)
      }
    })
  
  console.log("Array without duplicates: ")
  console.log(temp)
  frequency(arr)
}

duplicate(arr)

// Frequency of repeated elements
function frequency(arr){
  var arr2 = arr;
  var finalArr = [];
  var temp;

  for (i = 0; i < arr2.length; i++) {
    let count = 0;
    for (j = 0; j < arr2.length; j++) {
      temp = arr2[i];
      temp1 = temp
      if (temp === arr2[j]) {
        count++;
        continue;
      } else {
        finalArr.push(arr2[i]);
      }
    }

    if(temp==arr[i-1]){
      console.log(`${temp} is repeated ${count} times`);
    }
  }
}

//Max Min 
function maxmin(arr) {
  var max = arr[0];
  var min = arr[0];

  arr.forEach((element) => {
    if (max < element) max = element;
    if (min > element) min = element;
  });
  console.log(`MAX = ${max} `);
  console.log(`MIN = ${min} `);
}
maxmin(arr)

//Prime numbers
function isPrime(num) {
  if (num === 1 || num === 0) {
    return false;
  }
  for (i = 2; i <= num / 2; i++) {
    if (num % i == 0) {
      return false;
    }
  }
  return true;
}

function arrprimecount(arr) {
  var count = 0;
  arr.forEach((element) => {
    if (isPrime(element)) {
      count++;
      console.log(`${element} `);
    }
  });
  console.log(`Count of Prime :  ${count} `);
}

arrprimecount(arr);
