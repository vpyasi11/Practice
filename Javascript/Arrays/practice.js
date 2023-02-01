// Finding maximum sum in Sub-arrays

const arr = [[2,2,3,4],[5,7,5],[1,3,9,6,8],[8,4,8,9,1,2],[5,4,5,8,5]]
var arr2 = [1, 2, 1, 34, 17, 19, 20, 22, 31, 96, 100, 36, 43, 96, 17, 65, 71];

function sumArr(arr){
    var max = 0
    var temp = []
    arr.forEach(element => {
        var sum = 0
        element.forEach((ele)=>{
            sum += ele
        })
        if(max < sum){
            max = sum
            temp = element
        }
    });
    console.log(`Maximum sum is in Sub-array: ${temp} is ${max}`)
}

// sumArr(arr)

// Find no. of even/odd numbers in array

function evenOdd(arr){
    var even = 0
    var odd = 0
    arr.filter(ele => {
        if(ele%2 == 0) even++
        else odd++
    })
    console.log("Even: " + even)
    console.log("Odd: " + odd)
}

// evenOdd(arr2)

//Count Vowels/consonants

function letters(str){
    var v = 0
    vowels = ['a','e','i','o','u']
    vowels.filter(ele => {
        for(i of str){
            if(i == ele) v++
        }
    })
    console.log("No. of Vowels : " + v)
    console.log("No. of consonants : " + (str.length-v))
}

// letters("Chandramani")

//Reverse a sentence

function reverse(str){
    let arr = str.split(' ')
    let temp = []
    for(i=arr.length-1;i>=0;i--){
        temp[i] = arr[arr.length-i-1]
    }
    
    console.log(temp.join(" "))
}

// reverse("This is a sentence")

// Check if two strings are anagram

function anagram(str1, str2){
    var first = str1.toLowerCase().split("").sort().join()
    var second = str2.toLowerCase().split("").sort().join()
    
    if(first == second){
        console.log(`Yes ${str1} & ${str2} are anagrams`)
    }
    else
        console.log(`No ${str1} & ${str2} are not anagrams`)
}

// anagram("Care","Race")

// Rotate an array by 'r' value 

function rotate(arr,d){
    let temp =[]

    for(i=d;i<arr.length;i++){
        temp[i-d]=arr[i]
    }
    for(i=0;i<d;i++){
        temp.push(arr[i])
    }
    
    console.log("Original array:")
    console.log(arr)
    console.log("Modified array:")
    console.log(temp)
}

// rotate(arr2,4)





// 3rd largest value

// function largestThird(arr) {
//     var max = arr[0];
//     var temp = 0 
//     var temp1 =0
//     for(i=0;i<arr.length;i++){
//         if(max<arr[i]){
//             max=arr[i]
//             index = i
//         }
//     }
   
//     for(i=0;i<arr.length;i++){
//         temp = arr[0]
//         if(arr[i]!=arr[index]){
//            if(temp<arr[i]){
//             temp=arr[i]
//             index1 = i
//            }
//         }
//     }
//     for(i=0;i<arr.length;i++){
//         temp1 = arr[0]
//         if(arr[i]!=arr[index] && arr[i]!=arr[index1]){
//            if(temp1<arr[i]){
//             temp1=arr[i]
//            }
//         console.log(arr[i])
//         }
//     }
//     console.log(max)
//     console.log(temp1)
//   }
//   arr2 = [4,5,3,6,1]
//   largestThird(arr2)