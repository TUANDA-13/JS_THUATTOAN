function convert_string(string_here){
    if(typeof string_here != "string"){
        return "INPUT NOT A STRING";
    }
    else{
        let result = ""
        for(let i = 0; i<string_here.length;i++){
            result = string_here[i]+result;
        }
        return result;
    }
}