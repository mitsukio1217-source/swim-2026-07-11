console.log("setting.jsが読み込まれました");
window.onload=function(){

document.getElementById("practice").value=
localStorage.getItem("practice") || "";

document.getElementById("message").value=
localStorage.getItem("message") || "";

for(let i=1;i<=5;i++){

document.getElementById("goal"+i).value=
localStorage.getItem("goal"+i) || "";

}

}

function saveData(){

    const practice =
    document.getElementById("practice").value;

    const message =
    document.getElementById("message").value;

    localStorage.setItem("practice",practice);
    localStorage.setItem("message",message);

    let debug="";

    debug+="練習\n";
    debug+=practice+"\n\n";

    debug+="一言\n";
    debug+=message+"\n\n";

    for(let i=1;i<=5;i++){

        const goal=
        document.getElementById("goal"+i).value;

        localStorage.setItem("goal"+i,goal);

        debug+="目標"+i+" : "+goal+"\n";

    }

    alert(
        "保存しました。\n\n"+
        debug
    );
    console.table({
    practice: localStorage.getItem("practice"),
    message: localStorage.getItem("message"),
    goal1: localStorage.getItem("goal1"),
    goal2: localStorage.getItem("goal2"),
    goal3: localStorage.getItem("goal3"),
    goal4: localStorage.getItem("goal4"),
    goal5: localStorage.getItem("goal5")
});

}
function showData(){

    let text="保存されているデータ\n\n";

    text+="練習\n";
    text+=localStorage.getItem("practice")+"\n\n";

    text+="一言\n";
    text+=localStorage.getItem("message")+"\n\n";

    for(let i=1;i<=5;i++){

        text+="目標"+i+" : ";
        text+=localStorage.getItem("goal"+i);
        text+="\n";

    }

    alert(text);

}