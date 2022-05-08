const Lower='abcdefghijklmnopqrstuvwxyz';
const Upper='ABCDEFGHIJKLMNOPQRSTUVWXYZ';

const UpperCase=(arr)=>{
    let LowerCase=Lower.split('');
    let UpperCase=Upper.split('');

    let lowerObj={};
    let upperObj={};
    let outputArr=[];
    
    LowerCase.map((item,index)=>lowerObj[item]=(index+1));

    UpperCase.map((item,index)=>upperObj[index+1]=item);

    arr.map(inp=>{
        let newStr='';
        inp.split('').map(item=>{
            if(lowerObj[item]){
                newStr+=upperObj[lowerObj[item]];
            }
            else{
                newStr+=item;
            }
        })
        outputArr.push(newStr);
    })
    return outputArr;
}

console.log(UpperCase(["divya","Seetha"]));