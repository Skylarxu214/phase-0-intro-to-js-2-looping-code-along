// Code your solutions in this file
/*for (let age = 30; age < 40; age++) {
    console.log(`I'm ${age} years old. Happy birthday to me!`);
    debugger;
  }*/

//const gifts = ["teddy bear", "drone", "doll"];

/*function wrapGifts(gifts) {
  for (let i = 0; i < gifts.length; i++) {
    console.log(`Wrapped ${gifts[i]} and added a bow!`);
    debugger;
  }

  return gifts;
}

wrapGifts(gifts);*/


const message = "surprise";
const names = ['Lisa', 'Kaitlin', 'Jan' ];
let arr = [];
function writeCards(names, message){
    for (let i = 0; i < names.length ; i ++ ){
          arr[i] = `Thank you, ${names[i]}, for the wonderful ${message} gift!`;
         //console.log(`Thank you, ${names[i]}, for the wonderful ${message} gift!`)
       debugger
       }

    return arr;
}


writeCards(names,message);




/*const num = 0;
function countDown(num) {
    let i = 10;
    while (i >= num){
       console.log(i);
       i --;
    }
    return num
}
countDown(num);*/

function countDown(num){
  let i = 0;
  while(i <= num ){
    console.log(num - i);
    i ++;
  }
}

countDown(10);
countDown(4);