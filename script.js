// 今日の日付

const today = new Date();

document.getElementById("today").textContent =
today.toLocaleDateString("ja-JP");

// 今日の一言

const messages = [

"フォームを最後まで押し切ろう！",

"キックを止めない！",

"水をしっかりキャッチ！",

"呼吸はリラックス！",

"最後まであきらめない！",

"昨日の自分を超えよう！"

];

const random =
Math.floor(Math.random()*messages.length);

document.getElementById("message").textContent =
messages[random];


// チェックボックス

const checks =
document.querySelectorAll("input[type='checkbox']");

checks.forEach(check=>{

    check.addEventListener("change",update);

});


function update(){

    let count=0;

    checks.forEach(check=>{

        if(check.checked){

            count++;

        }

    });

    const percent =
    Math.round(count/checks.length*100);

    document.getElementById("progressBar").style.width =
    percent+"%";

    document.getElementById("percent").textContent =
    percent+"%";

}
document.getElementById("practiceText").textContent =
localStorage.getItem("practice") || "17:00～19:30";

document.getElementById("message").textContent =
localStorage.getItem("message") || "今日もベストを尽くそう！";

for(let i=1;i<=5;i++){

    document.getElementById("g"+i).textContent =
    localStorage.getItem("goal"+i) || "目標を入力してください";

}
