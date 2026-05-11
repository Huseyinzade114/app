function showSection(id){

    let sections =
        document.querySelectorAll(".section");

    sections.forEach(sec => {

        sec.style.display = "none";

    });

    document.getElementById(id).style.display = "block";
}

function registerUser(e){

    e.preventDefault();

    let i =
        e.target.querySelectorAll("input");

    localStorage.setItem("email", i[1].value);

    localStorage.setItem("password", i[2].value);

    alert("Qeydiyyat tamamlandı");
}

function loginUser(e){

    e.preventDefault();

    let i =
        e.target.querySelectorAll("input");

    if(

        i[0].value ===
        localStorage.getItem("email")

        &&

        i[1].value ===
        localStorage.getItem("password")

    ){

        alert("Xoş gəldiniz");

    }else{

        alert("Email və ya şifrə yanlışdır");
    }
}

function showServiceForm(course){

    document.getElementById("serviceForm")
    .style.display = "block";

    document.getElementById("courseSelect")
    .value = course;

    document.getElementById("serviceForm")
    .scrollIntoView({
        behavior:"smooth"
    });
}

function closeForm(id){

    document.getElementById(id)
    .style.display = "none";
}

function showError(element,message){

    element.innerHTML = message;
}

function clearError(element){

    element.innerHTML = "";
}

document.getElementById("fullname")
.addEventListener("input", function(){

    this.value =
        this.value.replace(/[^a-zA-ZəƏğĞşŞçÇıİöÖüÜ\s]/g,"");
});

document.getElementById("phone")
.addEventListener("input", function(){

    this.value =
        this.value.replace(/[^0-9]/g,"");
});

const courseForm =
    document.getElementById("courseForm");

courseForm.addEventListener("submit", function(e){

    e.preventDefault();

    let fullname =
        document.getElementById("fullname");

    let email =
        document.getElementById("email");

    let phone =
        document.getElementById("phone");

    let course =
        document.getElementById("courseSelect");

    let valid = true;

    if(fullname.value.trim() === ""){

        showError(
            document.getElementById("nameError"),
            "Ad boş ola bilməz!"
        );

        valid = false;

    }else{

        clearError(
            document.getElementById("nameError")
        );
    }

    if(email.value.trim() === ""){

        showError(
            document.getElementById("emailError"),
            "Email boş ola bilməz!"
        );

        valid = false;

    }else if(

        !(/^[^\s@]+@[^\s@]+\.[^\s@]+$/)
        .test(email.value)

    ){

        showError(
            document.getElementById("emailError"),
            "Düzgün email daxil edin!"
        );

        valid = false;

    }else{

        clearError(
            document.getElementById("emailError")
        );
    }

    if(phone.value.trim() === ""){

        showError(
            document.getElementById("phoneError"),
            "Telefon nömrəsi boş ola bilməz!"
        );

        valid = false;

    }else{

        clearError(
            document.getElementById("phoneError")
        );
    }

    if(valid){

        document.getElementById("result")
        .innerHTML =
            "Qeydiyyat uğurla tamamlandı!";

        document.getElementById("result")
        .className = "ok";

    }else{

        document.getElementById("result")
        .innerHTML =
            "Xanaları düzgün doldurun!";

        document.getElementById("result")
        .className = "error";
    }

});

document.getElementById("regName")
.addEventListener("input", function(){

    this.value =
        this.value.replace(/[^a-zA-ZəƏğĞşŞçÇıİöÖüÜ\s]/g,"");

});