function date_now(){
    let date = new Date(Date.now());
    console.log(date)
    let dd = date.getDate()
    let mm = date.getMonth() + 1;
    let yyyy = date.getFullYear();
    console.log(`${mm}-${dd}-${yyyy}`)
    console.log(`${mm}/${dd}/${yyyy}`)
    console.log(`${dd}-${mm}-${yyyy}`)
    console.log(`${dd}/${mm}/${yyyy}`)
}

date_now();