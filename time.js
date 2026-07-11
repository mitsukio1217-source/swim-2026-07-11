// 保存されているデータを取得
let records = JSON.parse(localStorage.getItem("records")) || [];

// ページを開いたら表を表示
window.onload = function () {
    showTable();
};

// 保存
function saveTime() {

    const data = {
        date: document.getElementById("date").value,
        style: document.getElementById("style").value,
        distance: document.getElementById("distance").value,
        record: document.getElementById("record").value,
        meet: document.getElementById("meet").value
    };

    // 日付入力チェック
    if (data.date === "") {
        alert("日付を入力してください。");
        return;
    }

    // 同じ日付・種目・距離なら更新
    const index = records.findIndex(item =>
        item.date === data.date &&
        item.style === data.style &&
        item.distance === data.distance
    );

    if (index !== -1) {

        records[index] = data;

    } else {

        records.push(data);

    }

    // 保存
    localStorage.setItem(
        "records",
        JSON.stringify(records)
    );

    showTable();

    clearForm();

    alert("保存しました。");

}

// 一覧表示
function showTable() {

    const table = document.getElementById("timeTable");

    table.innerHTML = "";

    records.forEach((r, index) => {

        table.innerHTML += `
        <tr>
            <td>${r.date}</td>
            <td>${r.style}</td>
            <td>${r.distance}</td>
            <td>${r.record}</td>
            <td>${r.meet}</td>

            <td>
                <button onclick="editTime(${index})">
                    編集
                </button>
            </td>

            <td>
                <button onclick="deleteTime(${index})">
                    削除
                </button>
            </td>

        </tr>
        `;

    });

}

// 編集
function editTime(index){

    const r = records[index];

    document.getElementById("date").value = r.date;
    document.getElementById("style").value = r.style;
    document.getElementById("distance").value = r.distance;
    document.getElementById("record").value = r.record;
    document.getElementById("meet").value = r.meet;

}

// 削除
function deleteTime(index){

    if(confirm("この記録を削除しますか？")){

        records.splice(index,1);

        localStorage.setItem(
            "records",
            JSON.stringify(records)
        );

        showTable();

    }

}

// 入力欄を空にする
function clearForm(){

    document.getElementById("date").value = "";
    document.getElementById("style").selectedIndex = 0;
    document.getElementById("distance").selectedIndex = 0;
    document.getElementById("record").value = "";
    document.getElementById("meet").value = "";

}