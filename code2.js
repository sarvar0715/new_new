"use strict"
// interpolyaptsiya uchun mison 
// bu pythonda f string bilan birxil ishlaydi 
const lname = 'sarvar'
const fmailya = 'abdusalomov'

console.log(`user name ${lname} , familya ${fmailya}`)

console.log(19+11)
// int  typelarni qoshishda oddiy + belgisi orqali ishlatamiz



let incr  = 10 ;
let descr = 10 ;

--incr;  // incrumetda ++  1 ni qo'shadi 
descr--;  // decrumet ++ bo'lsa ham 1 ni qo'shadi 
console.log(incr);
console.log(descr);

/*
masalan  ++ incr kelsa  avval 1 ni qo'shadi va komsulga incr+1  qilib chiqaradi 
aksincha incr++ bo'lsa avvar incr mi consolga chiqaradi va keyin 1 ni qoshadi incr+ 1 kabi

dcrm ham huddi sbunday 
dcrm++   
console.log(dcrm) -->> bo'lsa avval dcrm ni oldingi qiymatini chiqaradi 
keyin 1 ni qo'shadi  dcrm + 1 kabi 

++dcrm
console.log(dcrm) -->> bo'lsa aksincha avval dcrm ga 1 ni qo'shib chiqaradi dcrm+1 kabi 

--dmcr va dcrm-- da  ham huddi shunday ``

*/



// qoldiqli bo'lish

console.log(10%3)
// natija 1 chiqadi 
// chunki 10 ni 3 ga bo'lsak 1 qoldiq qoladi % -- belgisi bizga qoldiqli bo'lishni chiqar


console.log(2+2==4) // bool qiymat qaytaradi 
// chunki == tengmi yoki yo'qligini tekshiradi 

// 2 ta tenglik belgisini kelishini sababi faqat qiymat bo'yicha tekshira
// 3 ta tenklik esa ===  ham qiymat ham type bo'yicha tekshirib chiqadi


console.log(2+2=="4")  // True
console.log(2+2==="4") // false qaytaradi 


// && belgisi va degan  ma'noni angladi
//masalan
const a=true;
const b=false
console.log(a&&b); 
// && bunda barchasi true bo'lsa true qaytaradi 
// agar 1 ta false bo'lsa va qolganlari true bo'lsa ham natija false qaytadi 


//  || -- yoki belgisi hisoblanadi 

const  c= true;
const d = false;
console.log(c||d)
// || belgisi yoki degani agar barchasi false bo'lsa natija false
// agar ular ichada 1 dona ham true bo'lsa natoja  true qaytaradi


// ! -- bun belgi qiymatni o'zgartitadi
// masalan 
console.log(c)  // o'zi c True edi 
console.log(!c) //  keyin false ga almashdi


// != --> teng emasmi belgisi hisoblanadi 
//masalan    "cmd": ["python", "$file"],

const a1= 15;
const a2 = 16;
console.log(a1==a2) // bunda tengligini tekshirdi  a1 a2 ga teng emas shuning uchun false qaytadi
console.log(a1!=a2) // bunda teng emasligini tekshirdi a1 a2 ga teng emas shunning uchun true qaytardi 

