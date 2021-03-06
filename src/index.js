/**
 * constやlet等の変数宣言について
 */

// var val1 = "前までの変数宣言";
// console.log(val1);

// //var変数は上書き可能
// var val1 = "var変数を上書き";
// console.log(val1);

// //var変数は再宣言可能
// var val1 = "var変数の再宣言";
// console.log(val1);

// let var2 = "let変数宣言"
// console.log(var2);

// var2 = "let変数の上書き"
// console.log(var2);

// // let変数再宣言するがエラーが出る
// let var2 = "let変数再宣言"
// console.log(var2);

//console.log("let変数は変数の上書きはできるが、再宣言はできない");

// const val3 = "const変数宣言";
// console.log(val3);

//エラーが出る
// val3 = "const変数の上書き";
// console.log(cal3);

//エラーが出る
// const val3 = "const変数宣言";
// console.log(val3);

//constで定義したオブジェクトはプロパティの値の変更は可能
// const val4 = {
//   name: "HOGE",
//   age: 25
// };
// console.log(val4);

// val4.name = "tsuyoppe";
// val4.address = "Tokyo"
// console.log(val4);

//constで定義した配列はプロパティの値の変更は可能
// const val5 = ["dog", "cat"];
// val5[0] = "bird";
// val5.push("monkey");
// console.log(val5);

//------------------------------------------------

/**
 * テンプレート文字列
 */

//  const name = "tsuyoppe";
//  const age = 25;
//  //私の名前はtsuyoppeです。年齢は25歳です。

//  //従来のやり方
//  const message = "私の名前は" + name + "です。年齢は" + age + "です。";
//  console.log(message);

//  //テンプレート文字列を用いると
//  const message2 = `私の名前は${name}です。年齢は${age}です。`;
//  console.log(message2);

//------------------------------------------------

/**
 * アロー関数
 */

// //従来の関数
// const func1 = function (str) {
//   return str;
// };

// console.log(func1("func1です。"));

// //アロー関数
// const func2 = (str) => {
//   return str;
// };
// console.log(func2("funk2です。"));

// const func3 = (num1,num2) => {
//   return num1 + num2;
// }
// // const func3 = (num1,num2) => num1+num2

// console.log(func3(5,10));

//------------------------------------------------

/**
 * 分割代入｛｝
 */

// const myProfile = {
//   name: "Tsuyopoe",
//   age: 25
// };
// const message1 = `私の名前は${myProfile.name}です。年齢は${myProfile.age}です。`;
// console.log(message1);

// const { name, age } = myProfile;
// const message2 = `私の名前は${name}です。年齢は${age}です。`;
// console.log(message2);

//配列
// const myProfile = ["Tsuyoppe", "25"];
// const message3 = `私の名前は${myProfile[0]}です。年齢は${myProfile[1]}です。`;
// console.log(message3);

// const [name, age] = myProfile;
// const message4 = `私の名前は${name}です。年齢は${age}歳です。`;
// console.log(message4);

//------------------------------------------------
/**
 * デフォルト値、引数
 */
// const sayHello = (name = "ゲスト") => console.log(`こんにちは！${name}さん！`);
// sayHello();

/**
 * スプレッド構文
 */
//配列の展開
// const arr1 = [1,2];
// console.log(arr1);
// console.log(...arr1);//配列だったものが格納された値のみになっている

// const sumFunc1 = (num1,num2) => console.log(num1 + num2);
// sumFunc1(arr1[0],arr1[1]);
// sumFunc1(...arr1);

//配列をまとめる
// const arr2 = [1,2,3,4,5];
// const [num1,num2,...arr3] = arr2;
// console.log(num1);
// console.log(num2);
// console.log(arr3);

//配列のコピー・結合
// const arr4 = [10, 20];
// const arr5 = [30, 40];

// const arr6 = [...arr4];
// arr6[0] = 100
// console.log(arr6);
// console.log(arr4); //arr4に対して、影響を受けない

// const arr7 = [...arr4,...arr5];
// console.log(arr7);

// const arr8 = arr4;
// arr8[0] = 100;
// console.log(arr8);
// console.log(arr4);//arr4にも影響が出てしまう。

/**
 * mapやfelterを使った配列の処理
 */
const nameArr = ["田中", "小林", "和田", "Tsuyoppe"];

//従来のFor文を用いたモノ
// for (let index = 0; index < nameArr.length; index++) {
//   console.log(nameArr[index]);
// }

//Mapを用いて表示する
// const nameArr2 = nameArr.map((name) => {
//   return name;
// });
// console.log(nameArr2);

//nameArr.map((name,index) => console.log(`${index + 1}番目の名前は${name}さんです。`));
// const newNameArr = nameArr.map((name) => {
//   if (name === "Tsuyoppe" ) {
//     return name;
//   } else {
//     return `${name}さん`
//   }
// })
// console.log(newNameArr);

//Filter
// const num1 = [1, 2, 3, 4, 5];
// const newNumArr = num1.filter((num) => {
//   return num % 2 === 1;
// });
// console.log(newNumArr);

/**
 * 三項演算子
 */
//　ある条件 ? ある条件がTrueの時実行 : ある条件がFalseの時実行
// const val1 = 1 === 0 ? "0です。" : "0以外です。";
// console.log(val1);

// const num = 1300;
// console.log(num.toLocaleString()); //toLocalStringは3桁ごとにコンマを売ってくれる

// const num = "1300";
//文字列の場合、toLocaleStringが使えない
//console.log(num.toLocaleString()); //toLocaleStringは3桁ごとにコンマを売ってくれる

// const formattedNum =
//   typeof num === "number" ? Number.toLocaleString : "数値を入力してください!!";
// console.log(formattedNum);

// const checkSum = (num1, num2) => {
//   return num1 + num2 > 100 ? "100を超えています！" : "許容範囲内です！";
// };
// console.log(checkSum(40,100));

/**
 * 論理演算子の本当の意味を知ろう
 */
// const flag1 = true;
// const flag2 = false;
// if (flag1 || flag2) {
//   console.log("1または2はTrueです！");
// }

// if (flag1 && flag2) {
//   console.log("1または2はTrueです！");
// }

// //は左側がFalseであれば右側を返す処理
const num = null;
const fee = num || 100;
console.log(fee);

//　&&は左側がTrueであれば右側を返す処理
const num2 = 100;
const fee2 = num2 && 1000;
console.log(fee2);
