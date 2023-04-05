function bang_mau(string_input){
    if (typeof string_input != "string") {
      return "INPUT NOT A STRING";
    }
    let length = string_input.length;
    for(let i = 0; i<length/2;i++){
        if(string_input[i]!=string_input[length-i-1]){
            return false
        }
    }
    return true;
}

console.log(bang_mau("Tuan"))
console.log(bang_mau("amma"))
console.log(bang_mau("anh"))