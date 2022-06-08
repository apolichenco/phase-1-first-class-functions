function receivesAFunction(callback){
return callback();
}
recievesAFunction(function() {return `I was called back`})

function returnsANamedFunction(){
   return function addStuff(number){
       return 1 + number;
   };
}
function returnsAnAnonymousFunction(){
    return function(number){
        return 1 * number;
    }
}