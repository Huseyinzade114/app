function showForm(id){
    document.querySelectorAll('.form-container').forEach(f => f.style.display = 'none');
    document.getElementById(id).style.display = 'block';
}

function hideForms(){
    document.querySelectorAll('.form-container').forEach(f => f.style.display = 'none');
}

function submitForm(e){
    e.preventDefault();

    let ageInput = e.target.querySelector('input[type="number"]');
    let age = Number(ageInput.value);

    if (age < 1 || isNaN(age)) {
        alert("❌ Yaş 1-dən kiçik ola bilməz!");
        ageInput.focus();
        return;
    }

    alert("✅ Qeydiyyat tamamlandı!");
    e.target.reset();
    hideForms();
}