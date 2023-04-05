function time_to_tet(nam){
    let ngay_hien_tai = new Date(Date.now());
    if( typeof nam != "number"){
        console.log("Nam khong hop le.");
        return;
    }
    var Holidays = require('date-holidays')
    var hd = new Holidays("VN")
    let tet = hd.getHolidays(nam).find(element=>{
        return element.name == 'Tết Nguyên Đán'
    })
    console.log(tet);
    let ngay_tet = new Date(tet.date)
    let so_ngay = ngay_tet.getTime()-ngay_hien_tai.getTime();
    so_ngay = so_ngay/1000/60/60/24
    console.log(Math.ceil(so_ngay));
}

time_to_tet(2023)
