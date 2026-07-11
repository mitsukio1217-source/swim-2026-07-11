// 保存されているデータを取得
let practices = JSON.parse(localStorage.getItem("practices")) || [];

// ページを開いたら表を表示
window.onload = function () {
    showTable();
};

// 保存
function savePractice() {

    const data = {
        date: document.getElementById("date").value,
        time: document.getElementById("time").value,
        theme: document.getElementById("theme").value,
        practice: document.getElementById("practice").value,
        good: document.getElementById("good").value,
        bad: document.getElementById("bad").value
    };

    // 日付チェック
    if (data.date === "") {
        alert("日付を入力してください。");
        return;
    }

    // 同じ日付なら更新
    const index = practices.findIndex(item => item.date === data.date);

    if (index !== -1) {
        practices[index] = data;
    } else {
        practices.push(data);
    }

    // 保存
    localStorage.setItem(
        "practices",
        JSON.stringify(practices)
    );

    // 表を更新
    showTable();

    // 入力欄をリセット
    clearForm();

    alert("保存しました。");
}

// 表示
function showTable() {

    const table = document.getElementById("practiceTable");

    table.innerHTML = "";

    practices.forEach((p, index) => {

        table.innerHTML += `
        <tr>
            <td>${p.date}</td>
            <td>${p.time}</td>
            <td>${p.theme}</td>
            <td>
                <button onclick="editPractice(${index})">
                    編集
                </button>
            </td>
            <td>
                <button onclick="deletePractice(${index})">
                    削除
                </button>
            </td>
        </tr>
        `;

    });

}

// 編集
function editPractice(index){

    const p = practices[index];

    document.getElementById("date").value = p.date;
    document.getElementById("time").value = p.time;
    document.getElementById("theme").value = p.theme;
    document.getElementById("practice").value = p.practice;
    document.getElementById("good").value = p.good;
    document.getElementById("bad").value = p.bad;

}

// 削除
function deletePractice(index){

    if(confirm("この記録を削除しますか？")){

        practices.splice(index,1);

        localStorage.setItem(
            "practices",
            JSON.stringify(practices)
        );

        showTable();

    }

}

// 入力欄を空にする
function clearForm(){

    document.getElementById("date").value = "";
    document.getElementById("time").value = "";
    document.getElementById("theme").value = "";
    document.getElementById("practice").value = "";
    document.getElementById("good").value = "";
    document.getElementById("bad").value = "";

}
