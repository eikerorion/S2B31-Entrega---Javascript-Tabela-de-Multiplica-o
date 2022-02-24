let a = []
function multply(){
    for(let i = 0;i <= 10; i++){
   a[i] = []
   for(let j = 0; j <= 10; j++){
       a[i][j]= j*i
   }
}
 return a
}
console.table(multply())