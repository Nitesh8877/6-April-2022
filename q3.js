let str="WELCOME";

console.log(str.length);

function MiddleOdd(str){
    const letter=str.split('');
    const n=letter.length;
    const mid=(n-1)/2;
    const newLetter=letter.slice(mid).concat(letter.slice(0,mid));
    console.log(newLetter);
    const arr=[];
    letter.forEach(element=>{
        arr.push(newLetter.join(' '));
        console.log(arr);
       console.log( newLetter.pop());
    //    console.log(newLetter.unshift(' '));

    });
   console.log( arr.reverse());
    console.log(arr.join('\n'));
}
MiddleOdd(str);