// let paragraph = document.getElementById('myParagraph')
// paragraph.remove()

// let parent = document.getElementById('list')
// let child = document.getElementById('item')

// function action(){
//     child.remove();
//     console.log('child is remove');
    
// }

// child.addEventListener('click',action)




//let input = document.getElementById('input')
//let h1 = document.getElementById('name')

//function inputAction(){
    //console.log(e); 
    //console.log(input.value);
    //h1.textContent = input.value;
    //h1.textContent = e.target.value
    //h1.textContent = this.value;
    // console.log(this);

//}

//input.addEventListener('input', inputAction)


// function Counter(initialValue){
//     this.value = initialValue;
//     this.reset = function(){
//         this.value = initialValue;
//     }
//     this.increment = function(){
//         this.value++
//     }
//     this.decrement = function(){
//         this.value--

//     }
    


// }
// let Counter = new Counter(0);
// console.log(Counter);


// function greet(name, callback){
//     console.log('Hello, ' + name);
//     callback()
// }

// function sayGoodbye(){
//     console.log('Goodbye!');
// }

// greet('Ali', sayGoodbye)


// function calculate(a, b, callback){
//    return callback(a,b);
// }

// let addition = (a , b) => a + b

// let subtraction = (a , b) => a - b
// let multiplication = (a , b) => a * b
// let result1 = calculate(5,3, addition);
//  let result2 = calculate(5,3, subtraction);
//  let result3 = calculate(5,3, multiplication);
// console.log(result1);
//  console.log(result2);
// console.log(result3);


// const hof = () => {
//     let init = 0;
//     return () => {
//         console.log(++init);
        
//     }
// }


// let increment = hof();
// increment();
// increment();
// increment = hof();
// increment();


// let arr = [1,2,3,4,5];
// let action = (number => number * 5);
// let result = arr.map(action)
// console.log(result);



const students = [
    {firstName: 'Alice', lastName:'Smith'},
    {firstName: 'Bob', lastName:'Johnson'},
    {firstName: 'Ali', lastName:'Haider'}
]

console.log(students.map((student) => student.firstName + ' ' + student.lastName));

