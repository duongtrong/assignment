var userName = document.getElementById("userName");
var fullName = document.getElementById("fullName");
var password = document.getElementById("password");
var email = document.getElementById("email");
var confrimPass = document.getElementById("confrimPass");
var brithDay = document.getElementById("brithDay");

userName.onkeyup = function()
{
 	var span = userName.parentNode.getElementsByTagName("span")[0];

	if (userName.value.length == 0) {
		span.innerHTML = "Vui lòng nhập tên.";
		span.style.color = "red";
	}
		else if(userName.value.length < 7) {
	  	span.innerHTML = "Tên quá ngắn.";
	  	span.style.color = "red";
	}
	else {
	  	span.innerHTML = "Hợp lệ.";
	  	span.style.color = "green";
	}
}

fullName.onkeyup = function()
{
 	var span = fullName.parentNode.getElementsByTagName("span")[0];
 	console.log('test');
	if (fullName.value.length == 0) {
		span.innerHTML = "Vui lòng nhập họ và tên.";
		span.style.color = "red";
	}
		else if(fullName.value.length < 7) {
	  	span.innerHTML = "Tên quá ngắn.";
	  	span.style.color = "red";
	}
	else {
	  	span.innerHTML = "Tên Hợp lệ.";
	  	span.style.color = "green";
	}
}

password.onkeyup = function()
{
 	var span = password.parentNode.getElementsByTagName("span")[0];

	if (password.value.length == 0) {
		span.innerHTML = "Vui lòng nhập mật khẩu.";
		span.style.color = "red";
	}
		else if(password.value.length < 7) {
	  	span.innerHTML = "Mật Khẩu quá ngắn.";
	  	span.style.color = "red";
	}
	else {
	  	span.innerHTML = "Hợp lệ.";
	  	span.style.color = "green";
	}
}

email.onkeyup = function()
{
 	var span = email.parentNode.getElementsByTagName("span")[0];

	if (email.value.length == 0) {
		span.innerHTML = "Vui lòng nhập email.";
		span.style.color = "red";
	}
		else if(email.value.length < 7) {
	  	span.innerHTML = "Email không chính xác.";
	  	span.style.color = "red";
	}
	else {
	  	span.innerHTML = "Hợp lệ.";
	  	span.style.color = "green";
	}
}

confrimPass.onkeyup = function()
{
 	var span = confrimPass.parentNode.getElementsByTagName("span")[0];

	if (confrimPass.value.length == 0) {
		span.innerHTML = "Vui lòng xác nhận mật khẩu.";
		span.style.color = "red";
	}
		else if(confrimPass.value.length < 7) {
	  	span.innerHTML = "Mật khẩu không khớp.";
	  	span.style.color = "red";
	}
	else {
	  	span.innerHTML = "Hợp lệ.";
	  	span.style.color = "green";
	}
}

brithDay.onkeyup = function()
{
 	var span = brithDay.parentNode.getElementsByTagName("span")[0];

	if (brithDay.value.length == 0) {
		span.innerHTML = "Vui lòng nhập ngày tháng năm";
		span.style.color = "red";
	}
		else if(brithDay.value.length < 7) {
	  	span.innerHTML = "Tên quá ngắn.";
	  	span.style.color = "red";
	}
	else {
	  	span.innerHTML = "Hợp lệ.";
	  	span.style.color = "green";
	}
}