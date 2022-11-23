let title = document.getElementById("title");

let array = ["이름은 이찬욱", "MBTI는 ISTJ", "힙합을 좋아해요", "발라드 싫어요"];

function clearText(elem, sleep) {
    let rst = elem.innerText;
    let now = 0;
    for (let i = rst.length - 1; i >= 0; i--) {
        setTimeout(() => {
            elem.innerText = rst.slice(0, i);
        }, now);
        now += sleep;
    }
}

function textEffect(elem, text, sleep) {
    elem.innerText = ""; // clear element

    let rst = "";
    let now = 0;
    for (let i = 0; i < text.length; i++) {
        setTimeout(() => {
            rst += text[i];
            elem.innerText = rst;
        }, now);
        now += sleep;
    }
}

let index = 0;

textEffect(title, array[index], 70);
setTimeout(() => {
    clearText(title, 70);
}, 3000);
index++;

setInterval(() => {
    textEffect(title, array[index], 70);
    setTimeout(() => {
        clearText(title, 70);
    }, 3000);
    index++;
    if (index >= array.length)
        index = 0;
}, 5000);

let github_text = document.getElementById("github_text");
let github_box = document.getElementById("github_box");

function textEffectSp(elem, elem1, text, sleep) {
    elem.innerText = ""; // clear element

    let rst = "";
    let now = 0;
    let flag = false;
    for (let i = 0; i < text.length; i++) {
        setTimeout(() => {
            if (flag) return;

            rst += text[i];
            elem.innerText = rst;

            if (!elem1.matches(":hover")) {
                flag = true;
                elem.innerText = "";
            }
        }, now);
        now += sleep;
    }
}

github_box.onmouseenter = (ev => {
    textEffectSp(github_text, github_box, "Github", 70);
});
github_box.onmouseleave = (ev => {
   clearText(github_text, 70);
});

let pf_box = document.getElementById("pf_box");
let pf_text = document.getElementById("pf_text");

pf_box.onmouseenter = (ev => {
    textEffectSp(pf_text, pf_box, "Portfolio", 30);
});

pf_box.onmouseleave = (ev => {
   clearText(pf_text, 30);
});