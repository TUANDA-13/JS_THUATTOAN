function text_truncate(string_input, number_of_string,symbol=""){
    if(typeof string_here != "string"){
        return "INPUT NOT A STRING";
    }
    if(typeof number_of_string=="undefined"){
        return string_input;
    }
    let result = string_input.slice(0,number_of_string - symbol.length);
    if(number_of_string<string_input.length-1){
        result += symbol ? symbol : "...";
    }
    return result;
}
console.log(text_truncate('We are doing JS string exercises.'))
console.log(text_truncate('We are doing JS string exercises.',19))
console.log(text_truncate('We are doing JS string exercises.',15,'!!'))