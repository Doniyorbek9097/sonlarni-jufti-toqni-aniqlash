var sonlar = [1,3,5,3,223,321,2,3,5,6];
var juftson = 0;
var toqson = 0;
for(son of sonlar){
  if(son%2 == 0){
juftson++;
  }else{
toqson++;
  }
}

console.log("jusft sonlar qiyati "+ juftson + " toqsonlar qiymati " + toqson);