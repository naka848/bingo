checkList = [];

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

document.body.addEventListener("click", () => {
    checkRow0 = [checkList[0], checkList[1], checkList[2], checkList[3], checkList[4]]
    console.log(checkRow0)
    checkRow1 = checkList.slice(5, 10)
    console.log(checkRow1)
})