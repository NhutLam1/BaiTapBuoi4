function cong(){
	//lấy dữ liệu
	var s1 = document.getElementById('so1').value;
	var s2 = document.getElementById('so2').value;
	var ptinh = parseInt(s1)+parseInt(s2);
	document.getElementById('ketqua').innerHTML = 'Ket qua: ' +ptinh;
}
function tru(){
	//lấy dữ liệu
	var s1 = document.getElementById('so1').value;
	var s2 = document.getElementById('so2').value;
	var ptinh = parseInt(s1)-parseInt(s2);
	document.getElementById('ketqua').innerHTML = 'Ket qua: ' +ptinh;
}