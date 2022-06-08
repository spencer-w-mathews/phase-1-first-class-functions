function named(){
    return 2;
}


function receivesAFunction(callback){
   return callback();
}

function returnsANamedFunction(){
    return named;
}

function returnsAnAnonymousFunction(){
    return (()=>console.log('Anonymous function'));
    
}