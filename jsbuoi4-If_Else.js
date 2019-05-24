//Khai báo biến
var a = 5;
var b = 10;
// Cấu trúc lệnh if - Chỉ qtam giá trị đúng
if (a<b) {
	console.log('a<b dung roi...');
}
if (a<b){
	console.log('dung roi nhe');
}else{
	console.log('sai nhe');
}
//Kiểm tra số chẵn số lẻ
var data = prompt('nhap vao mot so');
var number = parseInt(data);//đưa về kiểu số nguyên
var isEven = number % 2 ;
if(isEven == 0){
	console.log('Number = ' +number+ ' là số chẵn');

}else{
	console.log('Number = ' +number+ ' Là số lẻ');
}

/*Nhập vào điểm TB*/ 
//If Else lồng nhau
var dtb = 6;
if(dtb>=9){//dung
	console.log('Xuất Chúng');
}else{
	if(dtb>=7){//dung
		console.log('Giỏi đấy');
	}else{
		if(dtb>=6){//dung
			console.log('Khá Bảnh');
		}else
			console.log('Theo thằng Khá chừ ngu như bò');
	}
}
// Một cách khác của if else lồng nhau
var dtb = 9;
if(dtb>=9){
	console.log('Xuất Chúng');
}else if(dtb>=7){
	console.log('Giỏi');
}else if(dtb>=6){
	console.log('khá');
}else{
	console.log('Về học lại đi con');
}