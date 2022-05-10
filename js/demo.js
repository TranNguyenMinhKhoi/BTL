$(document).ready(function() {
    $("#menu1").click(function() {
        if($(".sidebar").css("display")=="none")
        {
           $(".sidebar").css("display", "block");
        }else{
            $(".sidebar").css("display", "none");
         }
    })
})
function KiemTraTenDN() {
    var re = /^[a-z]\w*/;
    if (re.test(document.getElementById('txtDN').value.trim()) == false){
        tendn.innerText = "* bắc buộc,bắt đầu bằng ký tự";
        return false;
    }else {
        tendn.innerText = "Đúng";
        return true;
    }
}
function KiemTraPassWord(){
var re =/(?=.*\d).{6,}/;
if (re.test(document.getElementById('txtMK').value.trim())==false) {
    mk.innerText="* phải có chữ ,số ,ít nhất 6 ký tự";
    return false;
    } else {
       mk.innerText = "*";
       return true;
    }
}
function KiemTraXacNhanPassWord(){
if (document.getElementById('txtXNMK').value !=
    document.getElementById('txtMK').value) {
    xnmk.innerText="* phải giống ô mật khẩu";
    return false;
    } else {
       xnmk.innerText = "*";
       return true;
    }    
}
function KiemTraNgaySinh(){
var ns = new Date(document.getElementById('txtNS').value);
var today = new Date();
if (eval(today.getFullYear()  - ns.getFullYear())<= 10)  {
    ngaysinh.innerText="* tuổi phải > 10";
    return false;
    } else {
       ngaysinh.innerText = "";
       return true;
    }
}
function SubmitForm(){
if (KiemTraTenDN()==false || KiemTraPassWord() == false || KiemTraXacNhanPassWord() ==false) {
    alert("bạn chưa nhập đầu đủ và đúng thông tin!");
    } else {
       var tt1= document.getElementById("txtName").value;
       var tt2= document.getElementById("txtNS").value;
       var w = open("FormValidation_info.html","Ketqua");
       w.document.write("<B>THONG TIN CA NHAN</b>");
       w.document.write("Ho ten:" + tt1 + "<br>");
       w.document.write("Nam sinh: " + tt2 + "<br>");
    }
}
var free = document.getElementById("free");

free.addEventListener("click", () => {
    document.getElementById("freePopUp").style.display = "block";
})

document.getElementById("close").addEventListener("click", () => {
    document.getElementById("freePopUp").style.display = "none";
})