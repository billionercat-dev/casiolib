const inputElement = document.getElementById('inputtext');
const count = document.getElementById('chacount');
const specificVietnameseRegex = /[àÀảẢãÃáÁạẠăĂằẰẳẲẵẴắẮặẶâÂầẦẩẨẫẪấẤậẬđĐèÈẻẺẽẼéÉẹẸêÊềỀểỂễỄếẾệỆìÌỉỈĩĨíÍịỊòÒỏỎõÕóÓọỌôÔồỒổỔỗỖốỐộỘơƠờỜởỞỡỠớỚợỢùÙủỦũŨúÚụỤưƯừỪửỬữỮứỨựỰỳỲỷỶỹỸýÝỵỴ]/u;
const outputinstruc = document.getElementById('intruction');
let inputValue = '';
let charCount = 0;
const outputarea = document.getElementById('outputarea')
let charArray = [];
//test commit
function increseNum() {
    inputValue = inputElement.value;
    // console.log(inputElement.value);
    charArray = inputValue.split('');
    charCount = charArray.length;
    count.textContent = charCount + "/85";
}
inputElement.addEventListener('input', increseNum);
increseNum();

function reset() {
    const divElement = document.getElementById("outputarea");
    const idToKeep = "intruction";
    const childNodes = Array.from(divElement.childNodes); // Convert NodeList to Array

    childNodes.forEach(child => {
        if (child.id !== idToKeep) {
            divElement.removeChild(child);
        }
    });
    outputinstruc.textContent = '';
}

function convert() {
    reset();
    console.log(inputValue);
    //check tiếng việt
    if (checkVietnamese(inputValue)) {
        return;
    }

    //check viết thường
    if (containsLowercase(inputValue)) {
        return;
    }

    //check dòng
    if (charCount < 18) {
        addLowerEnglishInstruc(inputValue);
        return
    }
}

function checkVietnamese(text) {
    return specificVietnameseRegex.test(text);
}

function containsLowercase(text) {
    const lowercaseRegex = /[a-z]/;
    return lowercaseRegex.test(text);
}

function addLowerEnglishInstruc(text) {
    outputp1 = 'q93==qwL13[Qrq[I[q),9q),999r=C!oor=!q.q.!!oRq8R26!!$9o!)+';
    outputinstruc.textContent = outputp1;

    const outputp2 = document.createElement("p");
    outputp2.textContent = "nhập 100 số bất kì";
    outputarea.appendChild(outputp2);

    const outputp3 = document.createElement("p");
    outputp3.textContent = 'r=[Qrq[I[q),9q),9r=!q.q748q73uq73zq73uq73zq73u0!Oo!Oo!Oo!Oo!Oo!OoooooooooooQy$Qr1.0000$$$$623$23r==E$$';
    outputp3.style.fontFamily = 'CASIO BUTTON';
    outputarea.appendChild(outputp3);
    outputp3.style.maxWidth = "100%";
    outputp3.style.wordWrap = "break-word";

    const outputp4 = document.createElement("p");
    const alphabet = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z',' '];
    const instruction = [
        'M',
        'Qz',
        'Qx',
        'Qu',
        'Qj',
        'Qk',
        'Ql',
        '[',
        'Q)',
        'QM',
        'q713!9o',
        'q747!9o',
        'q748!9o',
        'q749!9o',
        'q714!9o',
        'q[',
        'y',
        'qy',
        'Q[',
        'q716!9o',
        'q7R21!9o',
        'q717!9o',
        'q7R12!9o',
        'q718!9o',
        'q719!9o',
        'q726!9o',
        'q8R26!9o'
    ]

    const mapping = {};
    for (let i = 0; i < alphabet.length; i++) {
        mapping[alphabet[i]] = instruction[i];
    }
    console.log(charCount);
    amountspace = 17 - charCount;

    for (let i = 0; i < amountspace; i++) {
        outputp4.textContent += 'q8R26!9o!!$'
    }

    for (let i = charCount-1; i >= 0; i--) {
        outputp4.textContent += mapping[charArray[i]] + '!!$';
        console.log("huh?");
    }
    outputp4 += 'o$$$$$$$$$$$$$$$$$12345678901234567$$2[';

    console.log(outputp4)

    outputarea.appendChild(outputp4);
    outputp4.style.maxWidth = "100%";
    outputp4.style.wordWrap = "break-word";
    outputp4.style.fontFamily = 'CASIO BUTTON';
}