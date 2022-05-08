
function Bikers(x,y,k,l,arr){
    const aKm=x*k;
    const bKm=y*l;
    let aCount=0;
    let bCount=0;
    let aTotal=0;
    let bTotal=0;

    arr.map(item=>{
        aTotal+=parseInt(item);
        bTotal+=parseInt(item);
        if(aKm>aTotal){
            aCount++;
        }
        if(bKm>bTotal){
            bCount++;
        }
    });
    return `${aCount} ${bCount}`;


}



// let arr1=[1,2,3,4];
// let sum=0;
// arr1.map((item)=>{
//     sum+=parseInt(item);
// })
// console.log(sum);


const inp=`40 21 
20 15
40 98 134 179 211 248`;
const [x,y]=inp.split('\n')[0].split(' ');
const [k,l]=inp.split('\n')[1].split(' ');
const arr=inp.split('\n')[2].split(' ');
console.log(x,y);
console.log(k,l);
console.log(arr);
console.log(Bikers(x,y,k,l,arr));