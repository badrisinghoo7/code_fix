let prime=13;
let count=0
for(let i=1;i<=prime;i++){
    if(i%prime==0){
        count++
    }
}
if(count==2){
    console.log("prime");
}else{
    console.log("not prime");
}