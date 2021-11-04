const { returns } = require("chai-spies");

function receivesAFunction(cb){
    cb("Hello")
}
receivesAFunction((thing)=>{
    return(thing);
})

function returnsANamedFunction(cb1) {
    return(function namedFunction(stuff){
        retrun (stuff);
    });
}


function returnsAnAnonymousFunction(cb2) {
    return ()=>{
        return(cb2);
    };
}
