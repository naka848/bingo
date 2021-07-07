checkList = [];

// 漢数字のまるとマークのまるが混在するとエラー

const makeMasu = (abc) => {
    // 定数masuの定義（div要素の生成）
    const masu = document.createElement("div");
    // 定数randomNumberを定義する（ランダムな値）
    const randomNumber = Math.floor(Math.random() * 100)
    // 配列checkListに値をいれる（引数：randomNumber）
    checkList.push(randomNumber);
    // 定数masuのテキストを定数randomNumberにする
    masu.textContent = randomNumber;
    // クリックしたら、テキストの中身が○に変わる
    // masu.addEventListener("click",function(){
    //     this.textContent = "○"
    masu.addEventListener("click", (evt) => {
        // 表示用のテキストに○をだす＜外部＞
        evt.target.textContent = "◯";
        // 配列checkListの数字が変更された場所に○をいれる＜内部＞
        checkList[abc] = "◯"
        // 確認
        console.log(checkList)
    })
    // masuを増やす
    document.querySelector(".bingocard").appendChild(masu)
}

// マスを追加する作業を25回繰り返して、マスを増やす
for (let i = 0; i < 25; i++) {
    makeMasu(i);
}

// // 対象要素.addEventListener( 種類, 関数, false )
// // さまざまなイベント処理を実行することができるメソッド
// document.body.addEventListener("click", () => {
//     // rowA = [checkList[0], checkList[1], checkList[2], checkList[3], checkList[4]]
//     // var str = 文字列
//     // str.slice( 開始位置, 終了位置(省略可能) );rowA = checkList.slice
//     rowA = checkList.slice(0, 5);
//     console.log(rowA);

// })

document.querySelector(".bingocard").addEventListener("click", function () {
    // チェック用の配列を作る
    // たて
    columnA= [checkList[0], checkList[5], checkList[10], checkList[15], checkList[20]]
    columnB= [checkList[1], checkList[6], checkList[11], checkList[16], checkList[21]]
    columnC= [checkList[2], checkList[7], checkList[12], checkList[17], checkList[22]]
    columnD= [checkList[3], checkList[8], checkList[13], checkList[18], checkList[23]]
    columnE= [checkList[4], checkList[9], checkList[14], checkList[19], checkList[24]]

    // よこ
    rowA = checkList.slice(0, 5);
    rowB = checkList.slice(5, 10);
    rowC = checkList.slice(10, 15);
    rowD = checkList.slice(15, 20);
    rowE = checkList.slice(20, 25);

    // ななめ
    diagonalA= [checkList[0], checkList[6], checkList[12], checkList[18], checkList[24]]
    diagonalB= [checkList[4], checkList[8], checkList[12], checkList[16], checkList[20]]

    function checkWin(checkArray) {
        if (checkArray.every(n => n === "◯")) {
            // checkListを全て埋める
            checkList.fill("1");
            //  定数winAを定義する
            const winA = document.createElement("div");
            winA.textContent = "ビンゴ！";
            winA.setAttribute("class", "win");
            document.body.appendChild(winA)
        }
    }
    checkWin(columnA);
    checkWin(columnB);
    checkWin(columnC);
    checkWin(columnD);
    checkWin(columnE);
    checkWin(rowA);
    checkWin(rowB);
    checkWin(rowC);
    checkWin(rowD);
    checkWin(rowE);
    checkWin(diagonalA);
    checkWin(diagonalB);
})

