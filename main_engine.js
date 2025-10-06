const echo = {
    'エ': false,
    '工': true,
    'ニ': false,
    '二': true,
};

const reflectCorrect = document.getElementById('reflectCorrect');
const reflectWrong = document.getElementById('reflectWrong');
const q = document.getElementById('q');
const normalBtn = document.getElementById('normalBtn');
const kana = document.getElementById('kana');
const kanji = document.getElementById('kanji');
const retry = document.getElementById('retry');

const selectedKey = [];
const type = [];

const maxIndex = 11;

let index = 0;
let random = 0;
let correct = 0;
let wrong = 0;

kana.hidden = true;
kanji.hidden = true;
retry.hidden = true;

const normal = () => {
    index++;
    normalBtn.hidden = true;
    kana.hidden = false;
    kanji.hidden = false;
    createRandom();

    for(const buffer in echo) {
        selectedKey.push(buffer);
        type.push(echo[buffer]);
    }
    q.innerText = selectedKey[random];
};

const createRandom = () => {
    index++;
    if(index > maxIndex) {
        end();
        return false;
    }
    random = Math.floor(Math.random() * Object.keys(echo).length);
    return true;
};

const kanaJudge = () => {
    if(!type[random]) {
        correct++;

        reflectCorrect.innerText = '正解数:' + correct + '回';

    } else {
        wrong++;

        reflectWrong.innerText = '不正解数:' + wrong + '回';

    }
    if(!createRandom()) return;
    q.innerText = selectedKey[random];
};
const kanjiJudge = () => {
    if(!type[random]) {
        correct++;

        reflectCorrect.innerText = '正解数:' + correct + '回';

    } else {
        wrong++;

        reflectWrong.innerText = '不正解数:' + wrong + '回';

    }
    if(!createRandom()) return;;
    q.innerText = selectedKey[random];
};

const end = () => {
    kana.hidden = true;
    kanji.hidden = true;
    retry.hidden = false;
    random = 0;
    index = 0;
    correct = 0;
    wrong = 0;
    q.innerText = '終了';
};

const re = () => {
    retry.hidden = true;
    normalBtn.hidden = false;
    reflectCorrect.textContent = '';
    reflectWrong.textContent = '';
};
