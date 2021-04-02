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
