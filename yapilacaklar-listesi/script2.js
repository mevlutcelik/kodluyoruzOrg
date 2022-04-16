// Değişklenleri tanımlayalım
let input = document.querySelector('#noteInput');
let button = document.querySelector('#noteAdd');
let msg = document.querySelector('#msg');
let content = document.querySelector('#content');
let data = localStorage.getItem('data') ? JSON.parse(localStorage.getItem('data')) : [];
let deleteClick = false;

// Notu kontrol eden fonksiyon
function noteControle() {
    // Mesaj kartındaki tüm classlari siliyoruz
    msg.classList.remove('card', 'error', 'warning');
    let value = input.value.trim();
    if (value === '') {
        message('error', 'Lütfen boş bırakmayın!');
    } else {
        noteAdd(value);
    }
    input.value = "";
}

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

// Not ekleme işlemi fonksiyonu
function noteAdd(value) {
    saveData(value);
    checkData();
}

// Not yazma fonksiyonu
function writeNote(str, id, active = false, mxCode) {
    let newNote = document.createElement('div');
    let newNoteSpan = document.createElement('span');
    let newNoteButton = document.createElement('button');
    newNote.classList.add('card');
    newNote.id = `ID-${id}`;
    newNote.setAttribute('mx-code', mxCode);
    active ? newNote.classList.add('active') : null;
    newNoteSpan.classList.add('card-text');
    newNoteSpan.innerHTML = str;
    newNoteButton.innerHTML = 'Sil';
    newNoteButton.id = `ID-${id}-delete`;
    newNote.appendChild(newNoteSpan);
    newNote.appendChild(newNoteButton);
    content.appendChild(newNote);
    document.querySelector(`#ID-${id}`).addEventListener('click', function () {
        activeData(mxCode, id, active);
    });
    document.querySelector(`#ID-${id}-delete`).addEventListener('click', function () {
        deleteData(mxCode, id);
    });
    deleteClick = false;
}


// Notu kayıt etmek fonksiyonu
function saveData(str) {
    data.push({
        id: Math.floor(Math.random() * 100000000000),
        active: false,
        text: str
    });
    localStorage.setItem('data', JSON.stringify(data));
}

// Notu güncelleme fonksiyonu
function activeData(index, id, active) {
    if (!deleteClick) {
        if (data.length === 1) {
            active ? data[index].active = false : data[index].active = true;
            localStorage.setItem('data', JSON.stringify(data));
            checkData();
        } else {
            if (data[index].id === id) {
                active ? data[index].active = false : data[index].active = true;
                localStorage.setItem('data', JSON.stringify(data));
                checkData();
            }
        }
    }
}

// Notu silme fonksiyonu
function deleteData(index, id) {
    deleteClick = true;
    if (data.length === 1) {
        data.splice(index, 1);
        localStorage.clear();
        checkData();
    } else {
        if (data[index].id === id) {
            data.splice(index, 1);
            localStorage.setItem('data', JSON.stringify(data));
            checkData();
        }
    }
}

function checkData() {
    if (data.length === 0) {
        content.innerHTML = null;
        document.querySelector('.title').classList.add('hidden');
        message('warning', 'Henüz not eklenmedi. Lütfen not ekleyin!', false);
        input.focus();
    } else {
        document.querySelector('.title').classList.remove('hidden');
        msg.innerHTML = null;
        content.innerHTML = null;
        for (i in data) {
            writeNote(data[i].text, data[i].id, data[i].active, i);
        }
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
        noteControle();
    }
});

// Butona tıklandığında
button.addEventListener('click', function () {
    noteControle();
});

checkData();