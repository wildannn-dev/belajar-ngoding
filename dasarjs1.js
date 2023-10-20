// variabel bisa menampung tipe data string(text),integer(number),boolean,array,object

let nama = "wildan"; //string
let umur = 17; //number
let apakahBenar = true; //boolean
let uang = 5000.5 //number namun ada koma

//operator aritmatika

let angka1 =10;
let angka2 =20;

console.log(angka1 + angka2);
console.log(angka1 - angka2);
console.log(angka1 * angka2);
console.log(angka1 / angka2);
console.log(angka1 % angka2);

let penampungHasilOperatorAritmatika = angka1 + angka2;
console.log(penampungHasilOperatorAritmatika);

penampungHasilOperatorAritmatika = angka1 - angka2;
console.log(penampungHasilOperatorAritmatika);

penampungHasilOperatorAritmatika = angka1 * angka2;
console.log(penampungHasilOperatorAritmatika);

penampungHasilOperatorAritmatika = angka1 / angka2;
console.log(penampungHasilOperatorAritmatika);

penampungHasilOperatorAritmatika = angka1 % angka2;
console.log(penampungHasilOperatorAritmatika);

//string juga bisa ditambah namun string ga bisa dikurang dengan operator aritmatika
let firstname = "wildan";
let lastname = "ryandhika";
let fullname = firstname + ' ' + lastname;
console.log(firstname +' '+ lastname);
console.log(fullname);
console.log(firstname - lastname); // NaN

//alur pembacaan code
// untuk membaca kode harus membacanya dari kiri ke kanan, atas ke bawah
//contoh

let number = 20;
console.log(number + 10); //30
number = 10;
console.log(number + 10); //20 
number = false;
console.log(number + 10); // 10

//pertanyaan? kenapa false dikurangi 10 tetap menjadi 10??  karena false =0 true =1
console.log(true + 10); // 11

// contoh error
// const hewan = 'jerapah';
// console.log(hewan)
// hewan = 'buaya';

// auto komentar bisa pencet ctrl + /