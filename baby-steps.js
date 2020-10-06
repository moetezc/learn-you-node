var array=process.argv;
var sum=0;
for (i=2; i<array.length; i++){
    sum=sum+parseInt(array[i]);
}
console.log(sum);