
var recursive = function(number){
 if(number<=2)
 {
 	return 1;
 }
 else
 {
 	return recursive(number-1) + recursive(number-2);
 }
};
console.log(recursive(42));