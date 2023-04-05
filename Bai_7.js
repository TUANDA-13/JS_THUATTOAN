let matran = 
 [[1, 0, 0], 
  [0, 2, 0], 
  [0, 0, 3] ]

console.log(ma_tran_cheo(matran))

function ma_tran_cheo(matran){
    if(matran.length != matran[0].length){
        return false;
    }
    for(let i = 0;i<matran.length;i++){
        for(let j = 0;j<i;j++){
            if(matran[i][j]!=0 || matran[j][i]!=0){
                return false;
            }
        }
    }
    let so_phan_tu_bang_0_tren_duong_cheo_chinh = 0
    for(let i = 0;i<matran.length;i++){
        if(matran[i][i]==0){
            so_phan_tu_bang_0_tren_duong_cheo_chinh += 1;
        }
    }
    return so_phan_tu_bang_0_tren_duong_cheo_chinh!=matran.length;
}
