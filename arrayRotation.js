const array = ['a', 'b', 'c'];

function arrayRotation(input){
    let temp = '';
    for(i=0; i<array.length; i++){
       if(i === 0){
          temp = input[0] ;
       }else{
        input[i]= input[i+1];
       }
       if(i === array.length-1){
           input[i] = temp;
       }
    }
    return input;
}

console.log(arrayRotation(array));