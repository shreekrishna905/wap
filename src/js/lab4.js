/** Create a function using function declaration named sum with one parameter of Array type, the
returned result is the sum of all elements which are greater than 20.
 */


function sum(array){
    return array.filter( item => item > 20)
                .reduce((prev,current) => prev +current, 0);
}

console.log(sum([1,2,3,4,5])) //0

console.log(sum([50,21,30])) //101


/**Create a function using function expression named getNewArray with one parameter of String
Array, return a new array which contains all string, length is greater than and equal to 5, and
contains letter ‘a’. **/

let getNewArray = (arr) => arr.filter(item => item.includes('a') && item.length >=5);

console.log(getNewArray(['shreek','apple','ant','another']))