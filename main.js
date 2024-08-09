/*
1. Họ tên không được để trống
2. Số điện thoại không được để trống
3. Email không được để trống
4. Số điện thoại không đúng định dạng
5. Email không đúng định dạng

Nếu có trường hợp nào trong các trường hợp trên xảy ra,
chúng ta sẽ thông báo 1 message text ngay bên dưới
ô input để người dùng dễ nhận biết và chỉnh sửa lại
nội dung cho phù hợp

-> Còn trường hợp tất cả các ô dữ liệu đều thỏa mãn
điều kiện validate, lúc này chúng ta sẽ thông báo ra
 message với nội dung "Đăng ký thành công"
*/

const userNameEle = document.getElementById("username");
const phoneEle = document.getElementById("phone");
const emailEle = document.getElementById("email");
const btnRegister = document.getElementById("btn-register");
const inputEles = document.querySelectorAll(".input-row");

btnRegister.addEventListener("click", function () {
    Array.from(inputEles).map((ele) => ele.classList.remove("success", "error"));

    let isValid = checkValidate();

    if (isValid) {
        alert("Gửi đăng kí thành công");
    }
});

function checkValidate() {
    let usernameValue = userNameEle.value;
    let emailValue = emailEle.value;
    let phoneValue = phoneEle.value;

    let isCheck = true;

    // Kiểm tra trường hợp user
    if (usernameValue == "") {
        setError(userNameEle, "Tên không được để trống");
        isCheck = false;
    } else {
        setSuccess(userNameEle);
    }

    // Kiểm tra trường hợp email
    if (emailValue == "") {
        setError(emailEle, "Email không được để trống");
        isCheck = false;
    } else if (!isEmail(emailValue)) {
        setError(emailEle, "Email không đúng định dạng");
        isCheck = false;
    } else {
        setSuccess(emailEle);
    }

    // Kiểm tra trường hợp phone
    if (phoneValue == "") {
        setError(phoneEle, "Số điện thoại không được để trống");
        isCheck = false;
    } else if (!isPhone(phoneValue)) {
        setError(phoneEle, "Số điện thoại không đúng định dạng");
        isCheck = false;
    } else {
        setSuccess(phoneEle);
    }

    return isCheck;
}

function setError(ele, message) {
    let parentEle = ele.parentNode;
    parentEle.classList.add("error");
    parentEle.querySelector("small").innerText = message;
}

function setSuccess(ele) {
    ele.parentNode.classList.add("success");
}

function isEmail(email) {
    return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email);
}

function isPhone(number) {
    return /(84|0[3|5|7|8|9])+([0-9]{8})\b/.test(number);
}
