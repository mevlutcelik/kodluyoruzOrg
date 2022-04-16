// Değişklenleri tanımlayalım
let input = document.querySelector('#noteInput');
let button = document.querySelector('#noteAdd');
let msg = document.querySelector('#msg');
let content = document.querySelector('#content');

// LocalStrorage'i kontrol edelim
let data = localStorage.getItem('data') ? JSON.parse(localStorage.getItem('data')) : [];


// Mesaj Fonksiyonu
function message(className, str, timeOut = true) {
    msg.classList.add('card', className);
    msg.innerHTML = str;
    if (timeOut) {
        setTimeout(function () {
            msg.classList.remove('card', 'error', 'warning');
            msg.innerHTML = null;
        }, 1500);
    }
}

// Notu ekrana yazdırma
function writeWindow(str) {
    let newNote = document.createElement('div');
    newNote.classList.add('card');
    newNote.innerHTML = str;
    content.appendChild(newNote);
    addDB(str);
}

// LocalStrorage'e kayıt etme fonksiyonu
function addDB(str) {
    data.push(str);
    localStorage.setItem('data', JSON.stringify(data));
    checkData();
}

// Veriyi kontrol etme fonksiyonu
function checkData() {
    if (data.length === 0) {
        message('warning', 'Henüz not eklenmedi. Lütfen not ekleyin!', false);
    } else {
        for (i in data) {
            writeWindow(data[i]);
        }
    }
}

// Not ekleme fonksiyonu
function noteAdd() {
    msg.classList.remove('card', 'error', 'warning');
    let value = input.value.trim();
    if (value === '') {
        message('error', 'Lütfen boş bırakmayın!');
    } else {
        writeWindow(value);
    }
}

// Klavye işlemleri
window.addEventListener('keyup', function (e) {
    if (e.key === '/' || e.code === 'NumpadDivide' || e.keyCode === 111) {
        input.focus();
    }
    else if (e.key === '/' || e.code === 'NumpadDivide' || e.keyCode === 111) {
        input.focus();
    }
    else if (e.key === 'Enter' || e.code === 'Enter' || e.keyCode === 13) {
        noteAdd();
    }
});

// Butona tıklandığında
button.addEventListener('click', function () {
    noteAdd();
});

checkData();