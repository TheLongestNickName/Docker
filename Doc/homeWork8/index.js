function sum(a, b){
    return a + b;
};
function sub(a, b) {
    return a + b;
};
function div(a, b){
    return a / b;
};
function  mult(a, b){
    return a * b
};

function calculator(operator, operant1, operant2){
    if (operator == "sum") {
        return sum(operant1, operant2);
    }else if (operator == "sub") {
        return sub(operant1, operant2 );
    } else  if (operator == "div") {
        return div(operant1,operant2);
    }  else if  (operator == "mult"){
        return mult(operant1,operant2);
    }

}

let globalObj = {
    name: "Peter"
};

function set(name, value){
    globalObj[name] = value;
};

function get(name){
    if(globalObj.hasOwnProperty(name)){
        return globalObj[name]
    } else{
        alert(`There are not key ${name}`)
    }
}

