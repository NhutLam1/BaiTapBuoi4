//Kiểm tra giá trị của biểu thức
var data = prompt('nhap vao mot so');
var x = parseInt(data); 
switch(x){
	case 1:
		console.log('Chính nó là 1');
		break; //Kết thúc dòng lệnh này
	case 5:
		console.log('Vâng là nó');
		break;
	default: // giá trị x mà tôi không muốn nó xảy ra
		console.log('Tks...');
		break;
}

//Kiểm tra y
var data2 = prompt('nhap vao mot so');
var y = parseInt(data2); 
switch(y){
	case 2:
	case 4:
	case 6:
		console.log('y = 2, 4, 6 hành xử như nhau');
		break;
	case 1:
	case 3:
		console.log('y= 1, 3 hành xử như nhau');
		break;
	default:
		console.log('Để sau');
		break;
}