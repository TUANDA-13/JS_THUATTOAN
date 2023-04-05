function camelize(string_input){
    if(typeof string_here != "string"){
        return "INPUT NOT A STRING";
    }
    let result = "";
    for(let i = 0;i<string_input.length;i++){
        if(string_input[i]==" ")
        {
            if(i+1<string_input.length){
                result+=string_input[++i].toUpperCase();
            }
        }
        else{
            result += string_input[i];
        }
    }
    return result;
}

console.log(camelize("JavaScript Exercises"));
console.log(camelize("JavaScript exercises"));
console.log(camelize("JavaScriptExercises"));