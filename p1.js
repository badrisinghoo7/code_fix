let str="abba";
let bag="";
for(i=str.length-1;i>=0;i--){
    bag+=str[i];
}
if(str==bag){
    console.log("It is a Palindrom");
}
else{
    console.log("Not");
}