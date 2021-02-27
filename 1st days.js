// ...............................................javaScript................................................................


//# How website front end works? ...web-site er front end part gula holo.....
// ans- user interface ke front end/claint side bola hoy. font end development er jnne 3 ta lenguage jante hy..(1.HTML/HTML5) (2.CSS/CSS3) (3.javaScript) 


// ................................................suru....................................................................
// 1. javaScript chara 1 ta website kmn oita dekhaite hbe.
// 2. javaScript soho 1 ta website kmn oita o dekhaite hbe.
// vs code..er extension.............................................................
// 1.javaScript(ES6) code snippets.
// 2.babel javaScript..


/**** Section 3👉 values and variables in JavaScript ****/

// variable likhte 5 ta kaj korte hy (1.var likhte hy) (2.variable er 1 ta name dite hy) (3.[=]dite hy) (4.value likhte hy) (5.[;]diye sesh korte hy)
// shb kichu output korte console.log likhte hy r [()] er mddhe variable er nam likhte hy.

var myName = 'Ratul';
console.log(myName);
var myAge = 26;
console.log(myage);
// 1 ta console.loge er vitore 2 ta variable name likhle. pashapashi output dekhabe..
console.log(myName, myAge);

// Naming Practice...................................................................................
// variable er name er mddhe kno jayga tei space deya jabe na... 
// variable er name er prothome (_) use kora jabe.jekono jayga tei jabe.
var _myName = "Rahman";
console.log(_myName);

// variable er name er khetre prothom e number deya jabe na. dile error khabo.tobe 1st e use na kore variable er name er je kono jayga te use kora jbe.
var 1myName = "Ratul";
console.log(1myName);

// (_) use korar pore number use kora jabe and je kono jayga te (_) use kora jabe. error dibe na.  
var _1my__Name = "Latif";
console.log(_1my__Name);

// variable er name er prothome [$] use kora jabe. kono error dibe na
var $myName = "javaScript Practice";
console.log($myName);

// [%] use kora jabe na error dibe....bcz eta holo modulo operator ..
var myNaem% = "web developer";
console.log(myNaem %);

// variable names are case sensitive....
// mane variable likhar smoy jei name deya hoise output korar smy console.log e same name e dite hbe. dorkar hole copy kore dite hbe. nyto error khaite hbe.
// javascript e kichu reserved words ache oigula variableer name hisebe use kora jabe na jemon var var = 'latif';........


/**** Section 4👉 Data Types in JavaScript ****/
// 6 dhoroner data type ache javascript e..

// 1.undefined:typeof ==="undefined"{variable likha hoise kintu kono value deya hy nai}
var myName =;
// 2.boolean:typeof ==="boolean"{value holo [true or flase]}

// 3.number:typeof ==="number"{value 1, 2, 3, 4 ba je kono number}
var myAge = 20;
// 4.string:typeof ==="string"{["", '', ``, er vitore jei value thake]}
var myName = 'Latifur Rahman'
// 5.bigint:typeof ==="bigint"

// 6.symbol:typeof ==="symbool"

// // typeof operator--
// data type ber korte [typeof(variable er name)] method er mddhme ber kra jay.....

var myName = "Ratul Ai";
console.log(myName);
console.log(typeof (myName));

var myAge = 26;
console.log(myAge);
console.log(typeof (myAge));

var iiAmRatul = false;
console.log(iAmRatul);
console.log(typeof (iAmRatul));


// DataTypes Practice........................................................................

// number + string = pashapashi boshay dibe
// 10 + "20"
console.log(10 + "20"); //output: 1020..

// number - string = result 4 thik e ashbe kintu eta ekta bug..karon number + string korle = pashapashi boshay dey, kintu number - string = result thik e [-] kore dicche
// 9 - "5"
console.log(9 - "5"); //bug.....

// string + string = pashapashi boshay dibe
// "Java" + "Script"
console.log("Java" + "Script"); //output: javaScript

// empty string + empty string = empty ashbe...[note:eta empty na ekhane space ache..tbe ei logic er khetre 2 tar ans e same hok seta empty ba space..onno logic er khetre space r empty same jinish na]
// " " + " "
console.log("" + "");

// empty string + 0 = 0 result dekhabe
// " " + 0
console.log(" " + 0);

// string - string = NaN [NaN = not a number]
// "ratul" - "mahbub"
console.log("ratul" - "mahbub");

// true + true = 2 hobe, bcz true = 1.
// true + true
console.log(true + true);


// true + false = 1 bcz true = 1, flase = 0
console.log(true + false);

// false + true = 1 bcz true = 1, flase = 0.
console.log(false + true);

// false - true = -1 hbe
console.log(false - true);


// 🙋‍👨‍🏫 Interview Question 1 🙋‍👨‍🏫
// Difference between undefined vs null?
// নাল বনাম অপরিবর্তিত মধ্যে পার্থক্য?
// undefined = variable likha hoise kintu kono value deya hy nai.. 
// null = varable er value ki hbe oita jani na .. bt undefined rakhte chai na[kichu khetre variable er value na janle undefined na rekhe null rakhte hy]

var iAmUseless = null;  //kichu nai ..poreo value deya jabe na
console.log(iAmUseless);
console.log(typeof (iAmUseless)); // {data-type: object} 2nd javascript bug...bcz null er data type [object] hotei pare na...bcz ekhne to kono value e nai..value hoile to data-type hbe.

var iAmStandBy;  //ekhne ki hbe oita jana nai...bt pore value deya jabae
console.log(iAmStandBy);
console.log(typeof (iAmStandBy));//{data-type: undefined}--


// 🙋‍👨‍🏫 Interview Question 2 🙋‍👨‍🏫
// What is NaN?
// NaN কী?

// eta xmpl.. {2 ta string er(-) [string - string = NaN] er output NaN ase}


// NaN is a property of the global object....  global object somporke DOM vs BOM e janbo.. 
// NaN গ্লোবাল অবজেক্টের একটি সম্পত্তি।
// In other words, it is a variable in global scope.
// অন্য কথায়, এটি বৈশ্বিক সুযোগে একটি পরিবর্তনশীল। 
// The initial value of NaN is Not-A-Number 
// NaN এর প্রাথমিক মানটি একটি নম্বর নয়

var myPhoneNumber = 01929985964;
console.log(myPhoneNumber);
var myName = "Latifur Rahman";
console.log(myName);

// konta number r konta number na oita ber korte hole console.log(isNaN(variable er name))
// facebook id creat frm ta dekhalei hbe...

// form er khetre kaj e ase...jodi kew name er jayga te numbr dey tahole take alrt deya jabe or number er jayga te name.....(je kono login page holo exmpl)
var myPhoneNumber = 01929985964;
console.log(isNaN(myPhoneNumber));  //output false ashbe, karon eta number r ami console.log e isNaN mne not a number likhsi
var myName = "Latifur Rahman";
console.log(isNaN(myName)); //output true ashbe karon eta number na eta 1 ta string..r jehtu eta string tai console.log e isNaN likhay true asche

if (isNaN(myName)) {    //number er filde e ulta palta likhle...
  console.log("plz enter valid phone no");
  // }


  // NaN Practice 🤯
// console.log e diye check korte hbe......
  // NaN === NaN = false        
  // Number.NaN === NaN = false 
  // isNaN(NaN) = true         
  // isNaN(Number.NaN) = true  
  // Number.isNaN(NaN) = true



  // 🙋‍👨‍🏫 Interview Question 1 🙋‍👨‍🏫
  // var vs let vs const ....morden javaScript e...


  /**** Section 5👉 Arithmetic operators in JavaScript ****/

  // console.log(5+20);


  // EXPRESSIONS & OPERATORS
  //  5            +     20
  // operand   operator  operand
  // javascript e 6 dhoroner operators ache
  // 1.Assignment operators.
  // 2.Arithmetic operators.
  // 3. Increment and Decrement operator.
  // 4.Comparison operators.
  // 5.Logical operators.
  // 6.String Concatenation operators.

  // 1️⃣Assignment operators.

  // An assignment operator assigns a value to its left operand based on the value of its right operand. 
  // একটি অ্যাসাইনমেন্ট অপারেটর তার বাম (অপারেন্ড / dike) একটি মান নির্ধারণ করে, এর ডান অপরেন্ডের মানের ভিত্তিতে।
  // The simple assignment operator is equal (=)
  // সাধারণ অ্যাসাইনমেন্ট অপারেটর সমান |

  var x = 5;
  var y = 5;

  console.log("is both the x and y are equal or not" + x == y);  //old style..output vul dekhaito...age same evbe likhte hoto...
  console.log(x == y); //new style output thik dekhay.
// (==) diye sudhu value check korse...ekhane string diye r 1 ta exmpl dile topic ta clear hy jabe...
  // I will tell you when we will see es6.
  // console.log(`Is both the x and y are equal : ${x == y}`);..--es6 e dekhbo eta.


  // 2️⃣Arithmetic operators

  // An arithmetic operator takes numerical values 
  // (either literals or variables) as their operands and 
  // returns a single numerical value.
  //একটি গাণিতিক অপারেটর সাংখ্যিক মান নেয় (হয় আক্ষরিক বা পরিবর্তনশীল) তাদের অপারেশন হিসাবে এবং একক সংখ্যাসূচক মান প্রদান করে। 
  //  
  console.log(3 + 3);
  console.log(10 - 5);
  console.log(20 / 5);
  console.log(5 * 6);

  console.log("Remainder Operator " + 27 % 4);


  // 🙄.3) Increment[barano] and Decrement[komano] operator

  // ++ hok age ba pichone etar mane holo barano
  // -- hok age ba pichone etar mne holo komano.
  // Operator: x++ or ++x or x-- or --x

  //used postfix......Increment = 1 barbe....................................................................
  // If used postfix, with operator after operand (for example, x++), 
  // the increment operator increments and returns the value before incrementing.
  // অপারেন্ডের পরে অপারেটরের সাথে পোস্টফিক্স ব্যবহার করা হয় (উদাহরণস্বরূপ, x ++), ইনক্রিমেন্ট অপারেটর ইনক্রিমেন্ট এবং ইনক্রিমেন্টিংয়ের আগে মান প্রদান করে।.
  // .[pore ++ hole, amn ta hbe]
  var num = 15;
  var newNum = num++;
  console.log(num); //ans: 16 hbe jehtu (++) use kora hoise
  console.log(newNum); //ans: 15.....ekhane newNum er value bartese na ager motoi thke jacche, karon ++ pore deyate num e 1 jog thik e hocche bt newNum [1 jog houa] oi value ta nicche na, old value tai nicche. r num++ deyate num er value 1 bere gese. jehtu num e ++ use kora hoise newNum e na.  [++ er mane 1 barano]. r eta bujhte nicher example.
  var newNum = num++ + 5;
  console.log(num); //...num er value ta ekhane dekha hoise bujhar suvidar jnne.
  console.log(newNum); //ekhane output 20 hbe. bcz (++) ta pore use korar karone newNum old value ta nise, 1 barano ta ney nai. tai newNum er value 15 dhora hoise.

  //used postfix......Decrement = 1 kombe....................................................................   
  var num = 15;
  var newNum = num--;
  console.log(num);
  console.log(newNum); //ans 14, 15.....ekhane newNum er value bartese na ager motoi thke jacche, karon -- pore deyate num e 1 biog thik e hocche bt newNum [1 biog houa/new value] oi value ta nicche na, old value tai nicche. r num-- deyate num er value 1 kome gese. jehtu num e -- use kora hoise newNum e na.  [++ er mane 1 barano]. r eta bujhte nicher example.
  var newNum = num-- + 5;
  console.log(num); //...num er value ta ekhane dekha hoise bujhar suvidar jnne.
  console.log(newNum); //ekhane output 20 hbe. bcz (--) ta pore use korar karone newNum old value ta nise, 1 komano ta ney nai. tai newNum er value 15 dhora hoise.

  // Postfix increment operator means the expression is evaluated 
  // first using the original value of the variable and then the 
  // variable is incremented(increased).
  //  পোস্টফিক্স ইনক্রিমেন্ট অপারেটর মানে এক্সপ্রেশনটি মূল্যায়ন করা হয় প্রথমে ভেরিয়েবলের মূল মানটি ব্যবহার করুন এবং তারপরে পরিবর্তনশীল বর্ধিত হয় (বর্ধিত)।


  // used prefix.........Increment = 1 barbe....................................................................
  // If used prefix, with operator before operand (for example, ++x), 
  // the increment operator increments and returns the value after incrementing.
  // অপারেন্ডের আগে অপারেটরের সাথে যদি উপসর্গ ব্যবহার করা হয় (উদাহরণস্বরূপ, ++ এক্স), ইনক্রিমেন্ট অপারেটর ইনক্রিমেন্ট এবং ইনক্রিমেন্টিংয়ের পরে মানটি প্রদান করে।
  var num = 15;
  var newNum = ++num;
  console.log(num); //ans: 16 hbe ++ use korate. bcz (++) age hok ba pore 1 barabei
  console.log(newNum); //ans: 16 hbe, bcz ekhane age (++) use kora hoise. r jehtu age (++) use kora hoise tai newNum 1 baranor porer value tai nicche. ager ta na niye. niche example..
  var newNum = ++num + 5;
  console.log(num); //...num er value ta ekhane dekha hoise bujhar suvidar jnne.
  console.log(newNum);  //ekhane output 21 hbe. bcz (++) ta age use korar karone newNum new value ta nise, old value ta ney nai. tai newNum er value ekhane 16 dhora hoise.

  // used prefix.........Decrement = 1 kombe....................................................................
  var num = 15;
  var newNum = --num;
  console.log(num); //ans: 14 hbe -- use korate. bcz (--) age hok ba pore 1 kombei.
  console.log(newNum); //ans: 14 hbe, bcz ekhane age (--) use kora hoise. r jehtu age (--) use kora hoise tai newNum 1 komanor porer value tai nicche. ager ta na niye. niche example..
  var newNum = --num + 5;
  console.log(num); //...num er value ta ekhane dekha hoise bujhar suvidar jnne.
  console.log(newNum);  //ekhane output 19 hbe. bcz (--) ta age use korar karone newNum new value ta nise, old value ta ney nai. tai newNum er value ekhane 14 dhora hoise.

  // Prefix increment operator means the variable is incremented first and then 
  // the expression is evaluated using the new value of the variable.
  // প্রিফিক্স ইনক্রিমেন্ট অপারেটর মানে ভেরিয়েবলটি প্রথমে এবং তারপরে বাড়ানো হয় এক্সপ্রেশনটি ভেরিয়েবলের নতুন মানটি ব্যবহার করে মূল্যায়ন করা হয়।


  // 4)..Comparison operators = tulona korbe 1 value er sthe r 1 value...........................................................................................
  // A comparison operator compares its operands and 
  // returns a logical value based on whether the comparison is true.
  // একটি তুলনা অপারেটর তার অপারেশন এবং তুলনা করে তুলনাটি সত্য কিনা তার ভিত্তিতে একটি যৌক্তিক মান প্রদান করে।

  // About Equal (==)--2 ta soman deyar mane holo 2 ta value soman naki oita dekha..soman hole ans true ashbe..false hle ans false ashbe..
  var a = 30;
  var b = 10;
  console.log(a == b); //ans: false, jehtu a, b er chaite boro..

  // Not equal (!=) --soman na dekhte (!=) eta use hy..
  var a = 30;
  var b = 20;
  console.log(a != b); //ans: true, hbe jehtu a, b soman na. a, b er chaite boro.

  // // Greater than (>)--ager ta boro porer ta choto ki na eta dekhte (>) use kora hy..
  var a = 30;
  var b = 20;
  console.log(a > b); // ans: true, jehtu ekhane a(prothomta) boro, b(porerta) choto...

  // // Greater than or equal (>=)--ager ta boro naki soman eta dekhte (>=) use kora hy...
  // note: ei operator er khetre 1-st er value 2-nd value er thke choto hote parbe na[choto hole onno r 1 ti operator ache].. . hy boro hote hbe nyto soman hote hbe. 
  var a = 30;
  var b = 20;
  console.log(a >= b); //ans: true, hbe bcz ekhane a er value beshi b er value er tulonay.. ekhane jehtu a er value b er chaite boro tai program ta Greater than(>) check kora obdi run kore jkhn peye jabe je ha eta true mne a er value b er chaite boro.. tokhon program r run korbe na output diye dibe..r jodi a er value r b er value soman hoto tahole program Greater than(>) check korar pore jkhn dekhto value soman.. tar mane eta false.. thn porer ta te program jaito thn check korto thn output dito..

  // // Less than (<) -- 1-st value 2-nd value er chaite choto nki eta dekhte (<) use hy..
  var a = 30;
  var b = 20;
  console.log(a < b); // ans: false, asbe karon ekhane a er value b er valuer chaite boro.. jodi a er value b er value er chaite chot hoito tahole true asto..

  // // Less than or equal (<=) 1-st er value 2-nd er value er chaite choto naki soman eta dekhte (<=) use hy..
  // note: ei operator e 1-st er value 2-nd value er chaite boro hte parbe na[boro hole onno 1 ta operator ache], hy choto hote hobe nyto soman hote hbe
  var a = 5;
  var b = 10;
  console.log(a <= b);


  // 5).. Logical operators.....................................................
  // Logical operators are typically used with Boolean (logical) values; 
  // when they are, they return a Boolean value.
  // লজিকাল অপারেটরগুলি সাধারণত বুলিয়ান (যৌক্তিক) মানগুলির সাথে ব্যবহৃত হয়; & লজিকাল অপারেটর একটি বুলিয়ান মান প্রদান করে। 
  // Logical operator guli holo
  // 1. logical AND (&&)
  // 2. logical OR (||) 
  // 3. logical NOT (!)

  // Logical AND (&&)--ek sathe onek gula condition likhar jnne / check korar jnne logical AND (&&) use kora hy.. tbe logical AND (&&) use korle shb gula condition true hole output true dibe.. kintu tader moddhe jodi 1 tar condition o false hy tahole smpurno output e false hy jabe..
  // NOTE: logical AND (&&) use kora hy ek er odhik condition likhte / check korte.. shb gula condition true hte hbe .. 1 tao condition o jate false na hy oi dike kheyal rakhte hbe [nyto 1 tao jodi false hy taholei outepute false dye dibe]..
  var a = 30;
  var b = 20;
  console.log(a > b && b > -50);  //output: true, bcz ekhane 2 ta condition e true.
  console.log(a > b && b > -50 && b < 0); //output: false, bcz ekhane 1-st 2 ta condition true holeo sesh er ta false. tai sompurno output tai false asche. so etai bujha gelo je logical AND (&&) e sob gula condition true hote hbe..karon jekono 1 ta condition false holei sompurno output e false ashe....
  // boi er songa....
  // The logical AND (&&) operator (logical conjunction) for a set of 
  // operands is true if and only if all of its operands are true.
  // এর সেট এর জন্য লজিকাল এন্ড (এবং&) অপারেটর (যৌক্তিক সংমিশ্রণ)  অপারেশনগুলি সত্য এবং যদি এর অপারেশনগুলির সমস্ত সত্য হয়।

  // Logical OR (||)-- je kono 1 ta true holei output true dibe..kintu 1 tao true na hole false output dibe..
  var a = 30;
  var b = 20;
  console.log(a > b || b > -50 || b < 0); // output: true, bcz ekhane shorto holo jekono 1 ta true holei output true hbe. r ekhane jetu 3 tar thke 2 tai true tai outepute o true..
  console.log(a < b || b < -50 || b < 0); //output: false, bcz ekhane 1 ta condition o true na
  // boi er songa....
  // The logical OR (||) operator (logical disjunction) for a set of 
  // operands is true if and only if one or more of its operands is true.


  // Logical NOT (!)--true k false output dibe...r false k true... jodi kono true result k false korte hy ba kono false k true korte hy tahole ei operator use kora hy...jetar resulte change korte chai oitar age ei operator use korte hbe...
  // The logical NOT (!) operator (logical complement, negation) 
  // takes truth to falsity and vice versa.

  console.log(!((a > 0) || (b < 0)));
  // console.log(!true);



  // 6).. String Concatenation(operators)
  // The concatenation operator (+) concatenates two string values together, 
  // returning another string that is the union of the two operand strings.


  console.log("Hello World");

  console.log("hello " + "world");

  var myName = "vinod";

  console.log(myName + " thapa");
  console.log(myName + " bahadur");
  console.log(myName + " bahadur Thapa");


  // 😳 4 Challenge Time... 

  // What will be the output of 3**3? 

  // What will be the output, when we add a number and a string?

  // Write a program to swap two numbers?

  // Write a program to swap two numbers without using third variable?



  // sol 1: ✔
  console.log(3 ** 3); //output: 27, square korbe[borgo kore (**) diye]
  // console.log(10 ** -1); 1/10 intrvw....


  // sol 2:  ✔
  console.log(5 + "ratul"); //pashapashi boshay dibe..
  console.log(5 + "ratul"); //NaN dibe output...

  // sol 3: ✔
  // use 3-rd variable..... 
  // 2 ta variable er value odol-bodol korte hle ..je kono 1 ta variable er value 3-rd 1 ta variable e rakhte hbe..
  var a = 5;
  var b = 10;

  // output: b=5; a=10

  var c = b; //c = 10
  b = a; // b = 5;
  a = c;
  console.log("the value of a is " + a);
  console.log("the value of b is " + b);


  // sol 4: ✔
  // without use 3-rd variable...
  // ekhane jehtu amader a er value 10 dekhate hbe so 1 st e a, b jog kore felte hbe ..pore b er value ta beriye jabe a-b korlei...r a-b korar pore jehtu b er value 5 hy jay ..tkhn a er valuer jnne a-b kore dilei hy jbe....
  var a = 5;
  var b = 10;
  a = a + b; // a = 15
  b = a - b; // b = 5; 
  a = a - b; // a = 10;
  // output b=5; a=10 [proved]
  console.log("the value of a is " + a);
  console.log("the value of b is " + b);




  // 🙋‍👨‍🏫 Interview Question 4 🙋‍👨‍🏫
  // What is the Difference between == vs === ?


  // sol 
  // (==) sudhu value check korbe datatype noy...r (===) dile value o check korbe & datatype o...
  var num1 = 5;
  var num2 = '5';
  console.log(typeof (num1));
  console.log(typeof (num2));

  console.log(num1 == num2); //output: true ashbe, bcz ekhane (==) use kora hoise..tai just value check korse datatype check kore nai..

  var num1 = 5;
  var num2 = '5';

  console.log(typeof (num1));
  console.log(typeof (num2));
  console.log(num1 === num2); //output: false ashbe..bcz ekhane (===) use kora hoise..value er sathe data-type o check kora hoise .. r jehtu value same holeo data-type same hy nai, tai output: false asche..

  var num2 = '5';
  console.log(num2); //--eta diye dekhano hoise variable er value te string likha hoileo output string asce nai..number ['5' na ese 5 evabe asche] asche ,..r tar karonei (==) use korle output true astechilo.. 

  // ************************************************************


  // Section 6👉 Control Statement - 

  //  1️⃣If...Else.............................................................................
  // The if statement executes a statement if a specified condition is truthy. 
  // If the condition is falsy, another statement can be executed.
  // যদি নির্দিষ্ট শর্তটি সত্য হয় তবে যদি বিবৃতিটি একটি বিবৃতি কার্যকর করে।  শর্তটি মিথ্যা হলে, অন্য একটি বিবৃতি কার্যকর করা যেতে পারে।

  // if raining = raincoat
  // else no raincoat


  // jodi true hoy tahole if er vitore dhukbe..r jodi false hy tahole else er vitore dhukbe....
  // NOTE: variable er value jeta r condition o jodi oita hy, mne same hoy tahole true hbe..r variable value & condition same na hoile false hbe..
  var tomr = 'sunny';

  if (tomr == 'rain') { //condition check korte (==) use kora hoise...
    console.log('take a raincoat');
  } else {
    console.log('No need to take a raincoat');
  }  //ekhane output hbe else er result ta ..bcz ekhane variable er value hisebe deya ache "sunny" r condition check kora hocche "rain" er, jehtu value r condition same hy nai, so ekhane result: false. r result false hle shb smy else er ta output dibe....   

  // 2-nd exmpl......
  var tomr = 'rain';

  if (tomr == 'rain') { //condition check korte (==) use kora hoise...
    console.log('take a raincoat');
  } else {
    console.log('No need to take a raincoat');
  }  //ekhane output hbe if er result ta ..bcz ekhane variable er value hisebe deya ache "rain" r condition o check kora hocche "rain" er, jehtu value r condition same hy gese, so ekhane result: true. r result true hle shb smy if er ta output dibe....   


  // 🤩Challenge Time.........leap year ber kora....... 
  // write a program that works out whether if a given year is a leap year or not?
  //  একটি প্রোগ্রাম লিখুন যা একটি প্রদত্ত বছর লিপ বছর কিনা তা কার্যকর করে?
  // A normal year has 365 days, leap years have 366, with an extra day in February.
  // একটি সাধারণ বছরের ফেব্রুয়ারিতে অতিরিক্ত দিন সহ 365 দিন, লিপ বছরগুলিতে 366 থাকে।
  // jodi kono year k 4 diye vag kora jay tahole oita holo leap year..[vagsesh thakte parbe na]
  // jodi kono year 100 diye vag hbe na..kintu 4 diye hy na, tahole oita leap year na..[vagsesh thakte parbe na]
  // 400 diye o kono year k vag kora gele oita o leap year..[vagsesh thakte parbe na]
  // (4 diye vag hole) (100 diye vag hobe na abar 4 diye o vag hote hbe) (400 diye vag hye) (muloto jodi kono year k 4,100,400 diye vag deyar pore kono vag-sesh na thake tahole oi year tai holo leap year)

  var year = 2020;
  // debugger;
  if (year % 4 === 0) {
    if (year % 100 === 0) {
      if (year % 400 === 0) {
        console.log("The year " + year + " is a leap year");
      } else {
        console.log("The year " + year + " is not a leap year");
      }
    } else {
      console.log("The year " + year + " is a leap year");
    }
  } else {
    console.log("The year " + year + " is not a leap year");
  }


  // What is truthy and falsy values in Javascript?

  // we have total 5 falsy values in javascript-(bangla: javaScript er moddhe total 5 ta falsy value ache..oigula holo:- 0,"",undefined,null,NaN,false** is false anyway)

  if (score = 0) {
    console.log("Yay, We won the game 😀");
  } else {
    console.log("OMG, we loss the game 😭");
  } //ekhane output else er ta hbe karon value falsy deya..r falsy sojasoji else er kche chole jay thn output kore dey...
  //  2nd exmpl--
  if (score = 10) {
    console.log("Yay, We won the game 😀"); //ekhane output if er ta hbe karon condition er valu truthy..r truthy hole if er ta output kore..
  } else {
    console.log("OMG, we loss the game 😭");


    // 2️⃣Conditional (ternary) operator..etar maddhome if-else er (codition) kaj ta choto kore (com code likhe) kora jay....

    // The conditional (ternary) operator is the only JavaScript operator 
    // that takes three operands...
    // IF--ELSE SYSTEM...
    var age = 17;
    if (age >= 18) {
      console.log("you are eligible to vote");
    } else {
      console.log("you are not eligible to vote");
    }
    // Conditional (ternary) operator--SYSTEM-
    // Conditional (ternary) operator--likhar niom (1-st e: console.log er vitore condition likhte hbe pore (?) dite hbe porre true hole ki output dekhbe oita dite hbe tarpore (:) diye false hole ki value dekhbe oita dite hbe)
    var age = 18;
    console.log((age >= 18) ? "you can vote" : "you can't vote");  //ekhane true tai (: er) 1 st er ta output hbe..r false hole (: er) 2nd ta output hbe....


    // 3️⃣ switch Statement..................................................................
    // Evaluates an expression, matching the expression's value to a 
    // case clause, and executes statements associated with that case.

    // 1st without break statment 
    // Find the Area of circle, triangle and rectangle?

    // old style...onk beshi code kora lage..
    var area = "circle";
    var PI = 3.142, l = 5, b = 4, r = 3;

    if (area == "circle") {
      console.log("the area of the circle is : " + PI * r ** 2);
    } else if (area == "triangle") {
      console.log("the area of the triangle is : " + (l * b) / 2);
    } else if (area == "rectangle") {
      console.log("the area of the rectangle is : " + (l * b));
    } else {
      console.log("please enter valid data");
    }
    //  switch Statement...ekhane output shb gula chole ashbe..bt amr to 1 ta 1 ta kore output chai..r oitar jnne break statement ache oita diye korte lage....
    var area = "circle";
    var PI = 3.142, l = 5, b = 4, r = 3;

    switch (area) {
      case 'circle':
        console.log("the area of the circle is : " + PI * r ** 2);
        break;

      case 'triangle':
        console.log("the area of the triangle is : " + (l * b) / 2);
        break;

      case 'rectangle':
        console.log("the area of the rectangle is : " + (l * b));
        break;

      default:
        console.log("please enter valid data");
    } ... //break na dile hy shb gula output dibe..nyto sesh er ta dibe..tai break use kora lage..
    // value ulta palta dile default er ta aibo... 



    // 🤗break------------------
    // Terminates the current loop, switch, or label 
    // statement and transfers 
    // program control to the statement following the terminated statement.
    //  বর্তমান লুপ, সুইচ বা লেবেল সমাপ্ত করে
    // বিবৃতি এবং স্থানান্তর
    // সমাপ্ত বিবৃতি অনুসরণ করে বিবৃতিতে প্রোগ্রামের নিয়ন্ত্রণ।


    // 🤗continue
    // Terminates execution of the statements in the current iteration of the 
    // current or labeled loop, and continues execution of the loop with the 
    // এর বর্তমান পুনরাবৃত্তিতে বিবৃতিগুলির সম্পাদন সমাপ্ত করে
    // বর্তমান বা লেবেলযুক্ত লুপ, এবং এর সাথে লুপটির কার্যকারিতা চালিয়ে যায়


    // next iteration..................................................................


    // 4️⃣ While Loop Statement......
    // The while statement creates a loop that executes a specified statement 
    // as long as the test condition evaluates to true.
    // যখন বিবৃতিটি একটি লুপ তৈরি করে যা একটি নির্দিষ্ট বিবৃতি কার্যকর করে
    // যতক্ষণ না পরীক্ষার শর্তটি সত্য হিসাবে মূল্যায়ন করে 
    // 1-st e 1 ta variable nite hbe..(variable to thakbei).....tarpore lop chalaite hbe...niche deya ache kivbe loop chalate hy...
    var num = 0;
    while (num <= 10) { //ekhane {2nd brkt k} block scope boleee..joto khn false na hbe tottokhn loop cholte thkbe...
      console.log(num) // infinte hy jabe jodi num++ na dei;
      num++;
    }  // evabe chalate hy ...eta holo basic..

    var num = 20;
    // block scope 
    while (num <= 10) {
      console.log(num); //infinte loop
      num++;
    } //ekhne loop cholbei na karon ekhne condition false hy gese...r while loop age condition heck kore pore condition true hole loop chole ..false hole chole naa...

    // 5️⃣ Do-While Loop Statement...age loop cholbe ..pore condition check korbe...karon do-while loop e loop age chaliye deyar pore condition deya hy...tai do while loop e condition false holeo ...1 ta output ashhbeiii....

    // var num = 20;
    // do{
    //   debugger;
    //   console.log(num); //infinte loop
    //   num++;
    // }while(num <= 10);

    // while loop or do while loop er moddhe parhokko holo ...while loop e age condition check korbe pore loop cholbe..r do while loop e age loop cholar pore condition check korbe...(1 st e th output diyre e dey pore jst condition check kore output e koto porjonto dekhbe oita selet kore..)....r while loop e condition false hole loop cholbe na ...but do while loop e condition false holeo 1 ta output dibe karon condition check korar age do while loop e loop chole jay...

    // 6️⃣ For Loop.......while loop r do while loop er short version holo for loop...   
    //  for loop e variable r condition ek sthei likha jay niche ta deya holo..sami clone dite hbe..thn num++/-- nyto infinety hy  jabe.
    for (var num = 0; num <= 10; num++) {
      //  debugger;
      console.log(num);
    } //...condition false hole loop cholbe na...tbe ekhne loop cholbe karon eta te condition false hy nai............



    // 😀6: challenge Time 🏁
    // JavaScript program to print table for given number (8)?

    // output :  8 * 1 = 8 
    //   8 * 2 = 16(8*2)
    //  => 8 * 10 = 80...eta output ante hbe... 8 er namtaa

    for (var num = 1; num <= 10; num++) {
      var tableOf = 12;
      console.log(tableOf + " * " + num + " = " + tableOf * num);
    }  // eta holo full prosses...step by step....joto beshi obdi lagbe num er value totto diye dibo...r joto er namta chai tableOF e totto number likhe dibo...


    // ************************************************************

    /**** Section 5 👉 Functions in JavaScript ****/

    // JavaScript function is a block of code designed to perform a particular task.
    // জাভাস্ক্রিপ্ট ফাংশন একটি নির্দিষ্ট টাস্ক সম্পাদন করার জন্য ডিজাইন করা কোডের একটি ব্লক।



    //  1️⃣Function Definition 

    // Before we use a function, we need to define it......nijer moto kore likha..function bebohar korar age amder function Definition korte hb

    // A function definition (also called a function declaration, or function statement)...ei 2 nam e function k daka hy 
    // consists of the function keyword, followed by:

    // The name of the function.
    // A list of parameters to the function, enclosed in parentheses and separated by commas.
    // The JavaScript statements that define the function, enclosed in curly brackets, {...}.
    // কোনও ফাংশন ব্যবহার করার আগেকোনও ফাংশন ব্যবহার করার আগে আমাদের এটি সংজ্ঞায়িত করতে হবে।
    //  একটি ফাংশন সংজ্ঞা (একটি ফাংশন ঘোষণা, বা ফাংশন বিবৃতিও বলা হয়)
    //  ফাংশন কীওয়ার্ড নিয়ে গঠিত, তারপরে:
    //  ফাংশনের নাম।
    //  ফাংশনটির প্যারামিটারগুলির একটি তালিকা, বন্ধনীগুলিতে আবদ্ধ এবং কমা দ্বারা পৃথক।
    //  জাভাস্ক্রিপ্ট বিবৃতি যা কোঁকড়া বন্ধনীতে আবদ্ধ ফাংশনটি সংজ্ঞায়িত করে,} ...}। আমাদের এটি সংজ্ঞায়িত করতে হবে।
    //  একটি ফাংশন সংজ্ঞা (একটি ফাংশন ঘোষণা, বা ফাংশন বিবৃতিও বলা হয়)
    //  ফাংশন কীওয়ার্ড নিয়ে গঠিত, তারপরে:
    //  ফাংশনের নাম।
    // //  ফাংশনটির প্যারামিটারগুলির একটি তালিকা, বন্ধনীগুলিতে আবদ্ধ এবং কমা দ্বারা পৃথক।
    //  জাভাস্ক্রিপ্ট বিবৃতি যা কোঁকড়া বন্ধনীতে আবদ্ধ ফাংশনটি সংজ্ঞায়িত করে,} ...}।

    // function likhar niom...
    //1-st e function likhte hobe....egulare keyword bole.mane function keyword likhte hbe..
    // 2-nd function er 1 ta name dite hbe..
    // 3-rd (1-st bereket) diye oitar vitore parameter likhte hoy......na dileo error khabe na 
    // {2 nd bereket dite hbe } r oitar vitorei baki kaj... 

    // basic way....bt eta right way na...eta r kothao use kora jabe na bt (function e korle call kore onno jayga te o use kora jay)...ekhne a or b konotar value e change kora jabe na...
    var a = 10;
    var b = 20;
    var sum = a + b;
    console.log(sum);

    // same kaj ta function diye korte.............................onno jayga te o call kore ei function ta neya jabe....................
    function sum() {
      var a = 10, b = 40; //1 ta variable ei 2 ta value likha hyse...eta 2 ta var niye alada alada o kora jeto
      var total = a + b;
      console.log(total); //ekhane sudhu function likha hoise call kora hy nai ..r call na korle function kaj korbe na..
    }   //output dekhabe na call korle ...

    // // 

    // 2️⃣Calling functions...er niom....................
    // Defining a function does not execute it.
    // A JavaScript function is executed when "something" invokes it (calls it).
    // কোনও ফাংশন সংজ্ঞায়িত করা এটি কার্যকর করে না।
    // একটি জাভাস্ক্রিপ্ট ফাংশন কার্যকর করা হয় যখন "কিছু" এটি আহ্বান করে (কল করে)।

    // function likha +  function call kora......................... etao nrml function ..eta kora hoise jst function bujhte...eta diye kaj kora jabe na ...
    function sum() {
      var a = 10, b = 40;
      var total = a + b;
      console.log(total);
    }  //output dibe bcz call kora hoise.........................
    sum(); //function er name ta (1st bereket er sthe likhe dilei call kora hy gse...
    //  // sum();
    // sum(20,30);
    // sum(50,50);
    // sum(5,6)...ei function e jodi ammi eigula ber korte chai tahole amk sojasoji variable er value change korte hbe..so etao right way na..tchara etate 1 ta output e ber korte parbo..

    // 3️⃣ Function Parameter vs Function Arguments 
    // Function parameters are the names listed in the function's definition. 
    // Function arguments are the real values passed to the function.

    //  function er right way...
    function sum(a, b) {
      var total = a + b;
      console.log(total);
    }

    sum(10, 39);.. //eta holo argument.// name call kore kon kon value er jog chai oita diye dite parbo ..niche deya ache
    // sum(20,30);
    // sum(50,50);
    // sum(5,6)




    // 🙋‍👨‍🏫 Interview Question 🙋‍👨‍🏫 

    // Why Functions? 
    //  function bar bar use kora jay..


    // You can reuse code: Define the code once, and use it many times.
    // You can use the same code many times with different arguments, 
    // to produce different results.
    // আপনি কোডটি পুনঃব্যবহার করতে পারেন: একবার কোডটি সংজ্ঞায়িত করুন এবং এটি বহুবার ব্যবহার করুন।
    // আপনি বিভিন্ন যুক্তি দিয়ে একই কোডটি বহুবার ব্যবহার করতে পারেন,
    // বিভিন্ন ফলাফল উত্পাদন।

    // OR

    // A function is a group of reusable code which can be called anywhere 
    // in your program. This eliminates the need of writing the same code 
    // again and again.
    // একটি ফাংশন হ'ল পুনরায় ব্যবহারযোগ্য কোডের একটি গোষ্ঠী যা কোথাও বলা যেতে পারে
    //  আপনার প্রোগ্রামে এটি একই কোড বারে বারে লেখার প্রয়োজনীয়তা দূর করে

    // DRY => do not repeat yourself


    // 4️⃣ Function expressions
    // "Function expressions simply means 
    // create a function and put it into the variable "

    function sum(a, b) {
      var total = a + b;
      console.log(total);
    }
    // ekhane function call korar somoy oita 1 ta variable e rakha hoise...tarpor variable name call kora hoise...
    var funExp = sum(5, 15);
    funExp; //variable name call kora hoise.....variable name call na korleo output dekhabe...bcz variable er vitore function call kora hy gse..etao cmplt function na..

    // 5️⃣ Return Keyword
    // When JavaScript reaches a return statement, 
    // the function will stop executing.

    // Functions often compute a return value.
    // The return value is "returned" back to the "caller"
    // যখন জাভাস্ক্রিপ্ট একটি রিটার্ন বিবৃতিতে পৌঁছেছে,
    // ফাংশন কার্যকর করা বন্ধ হবে।

    // ফাংশনগুলি প্রায়শই একটি রিটার্ন মান গণনা করে।
    // প্রত্যাবর্তনের মান "কলার" এ "ফিরে"

    function sum(a, b) {
      return total = a + b;  //console.log korte alada variable nite hoto function er vitore.. tarpopre console.log korte hoto..bt variable e total na kore oita return keyword e dile r alada kore console.log likhte hy na
    }
    var funExp = sum(5, 25); // function call kore 1 ta variable e rakha hoise
    //  funExp;... //call kora jaito variable name...jehtu call chara e output dekhacche o call kora hy nai....
    console.log('the sum of two no is ' + funExp); //tarpore oi variable ta console.log kora hoise..........


    // 6️⃣ Anonymous Function

    // A function expression is similar to and has the same syntax 
    // as a function declaration One can define "named" 
    // function expressions (where the name of the expression might 
    // be used in the call stack for example) 
    // or "anonymous" function expressions.
    // একটি ফাংশন এক্সপ্রেশন অনুরূপ এবং একই বাক্য গঠন আছে
    // একটি ফাংশন ঘোষণা হিসাবে একটি "নামকরণ" সংজ্ঞায়িত করতে পারে
    // ফাংশন এক্সপ্রেশন (যেখানে অভিব্যক্তির নাম হতে পারে)
    //  উদাহরণস্বরূপ কল স্ট্যাক ব্যবহার করুন)
    //  বা "বেনামে" ফাংশন এক্সপ্রেশন।
    // ei function e ...function k e 1 ta variable e rekhe deya hy..
    var funExp = function (a, b) { //variable e function rakhle function er kono name dite hy na....
      return total = a + b; //function e jeta chai oita return keyword er mddhe likhte hbe,.,.,.
    }
    console.log(funExp(5, 20)); //variable name diye output dekhte hy...(NOTE: variable er name diye (1 bereket diye) value likhte hy...)
    //  r jodi call kore kore output chai tahole ...call ta k 1 ta variable e diye..oi variable tare log korte hbe....
    // NOTE:joto iccha value diye output ana jabe........
    var sum = funExp(15, 15);
    var sum1 = funExp(20, 15);
    // etao check korte parbo......................................................
    console.log(sum > sum1);




    // ************************************************************


    // 👻 Now It's Time for Modern JavaScript 😍😍 

    // 🙏🙏 Features of ECMAScript 2015 also known as ES6 🙏🙏

    // 1️⃣ LET VS CONST  vs  VAR............................................................................
// var er use.. var er vitore kichu likhle khub shoj ei change kora jay ..value..
     var myName = "Ratul";
     console.log(myName);
// myName er value change kora hoise...
     myName = "Latifur Rahman";
     console.log(myName);
// let er use....var r let er moddhe kono parthokko nai ...sudhu let ntun asche..tai let use kora lagbe..
     let myName = "Ratul";
     console.log(myName);
// myName er value change kora hoise...
     myName = "Latifur Rahman";
     console.log(myName);

// const er use..
     const myName = "Ratul";
     console.log(myName); //eta thik ache..output dekhabe..
// myName er value change kora hoise.. ekhne value change hbe na ,,,bcz const er value change kora jay na..
     myName = "Latifur Rahman";
     console.log(myName);


// Global scope =>....eta shb kichur baire variable creat korte hbe... eta A to Z shb jayga te use kora jabe...[NOTE: hy e na bolte gele..]
// var => Function scope .. function er vitore jodi kono variable make kora hoy...eta sudhhu function er {2 nd brket} vitore kaj korbe...baire use kora jabe na... [NOTE: function scope kom use hy..]
// let and const => Block Scope .....jodi function e same variable & value 1 barer beshi thake tahole joto bar thakbe totto bar output dibe r oita thamanor jnnei..block scope/let & const er use...[NOTE: block scope beshi use hy..]
// ei 2 tar use/mane ki..& 2 tar moddhe parthokko ki.?..

// variable jodi shb kichur baire creat kora hy oita shb jayga te e use kora jabe..
// 1 ta perent function er vitore jodi variable er value same hoy r oita jodi var (keyword) use kora hy tahole 2 bar output dibe..tai oikhne var er jayga te let use kora lagbe.....
     function biodata() {
       const myFirstName = "Mohammad";
       console.log(myFirstName);

       if(true){ 
        //  ekhane jodi r 1 ta function creat kortam tahole..oi function mul function er {2-nd-brket} obdi call kora jabe...etar nijosso {2-nd-brekt} thaka sotteo....tobe ekhne problem holo ,..same variable & value niye 1 ti function er vitore jodi r o function creat kora hy...tahole output 2 bar ase...jeta standerd way na..tai ei rokom case/kajer er khetre var use na kore let use korte hbe
         const myLastName = "Latif";
       }

        console.log('innerOuter ' + myLastName);
     }

     console.log(myFirstName);

     biodata(); //function call kora baddhotamulok, nyto function kaj korbe na..
 

    // 2️⃣ Template literals (Template strings) [``] etar use .................................................................

    // JavaScript program to print table for given number (8)?................namta ber kora....

    //  output :  8 * 1 = 8 
      //  8 * 2 = 16(8*2)
      // => 8 * 10 = 80

     for(let num = 1; num<= 10; num++){
         let tableOf = 12;  
       // console.log(tableOf + " * " + num + " = " + tableOf * num);.....old rule...
       console.log( ` ${tableOf} * ${num} = ${tableOf * num}` ); // [${variable Name dite hbe}] tahole r bar bar + diye string add kora lagbe na old tar moto...
       }


    // 3️⃣  Default Parameters.....................................................................
    // Default function parameters allow named parameters to be 
    // initialized with default values if no value or undefined is passed.
    // ডিফল্ট ফাংশন পরামিতি নামকরণ পরামিতি হতে দেয়
    //  কোনও মান বা অপরিজ্ঞাত পাস না হলে ডিফল্ট মানগুলির সাথে আরম্ভ করা।
// console.log e 2 ta value na dile etar use...parameter er sathe value diye deya...
// parameters er moddhe jetar value dite chai oitar pore [=] diye [value] diye dibo...
// NOTE: jodi parameters e o value deya hy r console.log e o deya hy tahole..console.log er ta use hbe...
     function mult(a,b=5){
       return a*b;
     }
     console.log(mult(3)); // log e 1 ta value hole oita 1st(a) er ta dhora hbe....


    // 4️⃣ Destructuring in ES6
    // The destructuring assignment syntax is a JavaScript expression 
    // that makes it possible to unpack values from arrays, 
    // or properties from objects, into distinct variables.

    //  ➡ Array Destructuring  🏁

    // const myBioData = ['vinod', 'thapa', 26];

    // let myFName = myBioData[0];
    // let myLName = myBioData[1];
    // let myAge = myBioData[2];

    // let [myFName,myAge, myLName] = myBioData;
    // console.log(myAge);

    // we can add values too 

    // let [myFName,myLName,myAge, myDegree="MCS"] = myBioData;
    // console.log(myDegree);



    // ➡ Object destructuring 🏁...............................................................................
    // const myBioData = {
    //   myFname : 'vinod',
    //   myLname : 'thapa',
    //   myAge : 26
    // }

    // let age = myBioData.age;
    // let myFname = myBioData.myFname;

    // let {myFname,myLname,myAge, myDegree="MCS"} = myBioData;
    // console.log(myLname);





    // 5️⃣ Object Properties ..........................................................................................

    // ➡ we can now use Dynamic Properties 

    // let myName = "vinod";
    // const myBio = {
    //   [myName] : "hello how are you?",
    //   [20 + 6] : "is my age"
    // }

    // console.log(myBio);

    // ➡ no need to write key and value, if both are same 

    // let myName = "vinod thapa";
    // let myAge = 26;

    // const myBio = {myName,myAge}

    // console.log(myBio);





    // 6️⃣ Fat Arror Function ..............................................................................

    // 👻 Normal Way of writing Function...old way...  

     function sum() {
       let a = 5; b = 6;
       let sum = a+b;
      return `the sum of the two number is ${sum}`;
     }
      console.log(sum()); 

    // 👻 How to convert in into Fat Arrow Function............new...way 

     const sum = () => `the sum of the two number is ${(a=5)+(b=6)}`;  // 1 line er function code e return keyword o use kora lage na ... ..{2nd brket} o use kora lage na. //evbe likhte hobe...joto choto kora jay....

     console.log(sum()); 


    // 7️⃣Spread Operator...........................................................................................

    // const colors = ['red', 'green', 'blue', 'white', 'pink'];

    // const myColors = ['red', 'green', 'blue', 'white','pink', 'yellow', 'black'];
    // // // 2nd time add one more color on top and tell we need to write it again 
    // // // on myColor array too 

    // const MyFavColors = [ ...colors, 'yellow', 'black'];

    // console.log(MyFavColors);


    // ES7 features.................................................................................. 

    // 1: array include 
    // const colors = ['red', 'green', 'blue', 'white', 'pink'];
    // const isPresent = colors.includes('purple');
    // console.log(isPresent);

    // 2: **
    // console.log(2**3); 



    // ES8 Features.................................................................................... 

    // String padding
    // Object.values()
    // Object.entries()

    // const message = "my name is vinod";
    // console.log(message);
    // console.log(message.padStart(5));
    // console.log(message.padEnd(10));


    // const person = { name: 'Fred', age: 87 };

    // // // console.log( Object.values(person) );
    // const arrObj =  Object.entries(person);
    // console.log(Object.fromEntries(arrObj));



    // ES2018.........................................................................................

    // const person = { name: 'Fred', age: 87, degree : "mcs" };
    // const sPerson = { ...person };

    // console.log(person);
    // console.log(sPerson);


    // ES2019....................................................................................................
    // Array.prototype.{flat,flatMap}
    // Object.fromEntries()

    // ES2020.................................................................................................
    // #1: BigInt

    // let oldNum = Number.MAX_SAFE_INTEGER;
    // // console.log(oldNum);
    // // console.log( 9007199254740991n + 12n );
    // const newNum = 9007199254740991n + 12n;

    // console.log(newNum);
    // console.log(typeof newNum);


    // const foo = null ?? 'default string';
    // console.log(foo);

    // ES2014.......................................................................................

    // "use strict";

    // x = 3.14; 
    // console.log(x);





    // ************************************************************



    // /**** Section 7👉 Arrays in JavaScript  ****/.........................................

    // When we use var, we can stored only one value at a time. .....
// যখন আমরা var ব্যবহার করি, আমরা একবারে কেবল একটি মান সংরক্ষণ করতে পারি। exmpl niche
     var friend1 = 'lamu';
     var friend2 = 'pakistan';
     var friend3 = 'pakhi';
// use array ... [3 rd brkt]...multipul data store
     var myFriends = ['ramesh',22,male,'arjun',20,male,'vishal',true, 52];

    // When we feel like storing multiple values in one variable then 
    // instead of var, we will use an Array.

    // In JavaScript, we have an Array class, and 
    // arrays are the prototype of this class. 
    // আমরা যখন এক ভেরিয়েবলের মধ্যে একাধিক মান সংরক্ষণ করার মতো অনুভব করি
    //  var এর পরিবর্তে, আমরা একটি অ্যারে ব্যবহার করব।
    //  জাভাস্ক্রিপ্টে, আমাদের একটি অ্যারে ক্লাস রয়েছে এবং
    //  অ্যারেগুলি এই শ্রেণীর প্রোটোটাইপ।
    // example 🏁
     var myFriends = ['ramesh',22,male,'arjun',20,male,'vishal',true, 52];

      //je kono dhoroner datatype er value add kora jabe ..error dibe na....
    //  array er 1 value = Lower Index
    // array er last value = Upper Index.

    // 1st value er index number = 0, baki gula 1, 1 kore barte thakbe...


    // 1️⃣ Array Subsection 1 👉 Traversal in array✌ .....................................................
    // navigate through an array

    // if we want to get the single data at a time  and also 
    // if we want to change the data..
    
// যদি আমরা একসাথে এবং একই সাথে একক ডেটা পেতে চাই
// আমরা যদি ডেটা পরিবর্তন করতে চাই 


     var myFriends = ['vinod','ramesh','arjun','vishal'];
     console.log(myFriend[0]); ////jei velue ta output dekhaite chaibo..oitar index number dite hbe console.log e...

    // if we want to check the length of elements of an array
// যদি আমরা কোনও অ্যারের উপাদানগুলির দৈর্ঘ্য পরীক্ষা করতে চাই ..index number suru hoy = 0, theke length suru hy = 1,  thke
    // console.log(myFriends.length); ///sudhu eta likhle kyta value ache oita output dibe --rule)
     console.log(myFriends[myFriends.length - 1]); // last er ta output korteee...

// use for in loop....
    // we use for loop to navigate 

     var myFriends = ['vinod','ramesh','arjun','vishal'];
     for(var i=0; i<myFriends.length; i++){
       console.log(myFriends[i]);
     } //old....

    // After ES6 we have for..in and for..of loop too 

     var myFriends = ['vinod','ramesh','arjun','vishal'];

     for(let elements in myFriends){
       console.log(elements);
     } //eta use korle array er value/elements er index number show korbe..

    //  for of loop...
    var myFriends = ['vinod','ramesh','arjun','vishal'];

     for(let elements of myFriends){
       console.log(elements);
     } //value output hbe.....
// use forEach loop....
    // Array.prototype.forEach() 🙋‍♂️
    // Calls a function for each element in the array.

     var myFriends = ['vinod','ramesh','arjun','vishal'];

     myFriends.forEach(function(element, index, array) {
           console.log(element + " index : " +
             index + " " + array);
     }); //shb gular index ber kora jay ...amar qsn er ans ..ami khujsilam..amn je shb gula kivbe er korte hy...
    //  ekhane output element diye single single value output neya jay...index diye shb gular eksthe index ber kora jay...array diye jei array niye kaj korchi oita bujha jay..
// fat array function...
var myFriends = ['vinod','ramesh','arjun','vishal'];
     myFriends.forEach((element, index, array) => {
       console.log(element + " index : " +
         index + " " + array);
     }); //eta sohoj...this support kore na....




    // 2️⃣ Array Subsection 2 👉 Searching and Filter in an Array .......................................................product search er jnne...eccomrc site

    // Array.prototype.indexOf() 🙋‍♂️..............samne thke index guna suru korbe..

    // Returns the first (least) index of an element within the array equal 
    // to an element, or -1 if none is found. It search the element from the 
    // 0th index number..
    // অ্যারের সমতুল্য কোনও উপাদানের প্রথম (সর্বনিম্ন) সূচক প্রদান করে
    //  একটি উপাদান, বা -1 পাওয়া যায় না। এটি উপাদান থেকে অনুসন্ধান করে
    //  0 তম সূচক নম্বর ....-1 er mane holo oi value ta oi array er moddhe nai e...

     var myFriendNames = ["vinod","bahadur","thapa","thapatechnical","thapa"];
         console.log(myFriendNames.indexOf("Thapa", 3)); // value likhe index-number ber korar jnne (indexOf) use kora hy...tarpore koto tomo index thke index guna suru korbe oita bole dite (,) diye oi number diye dite hbe...jemon console.log(variable-name.indexOf(value, joto thke start hobe oi number))

// ------------------------------------------------------------------------------------------------------------------------
    // Array.prototype.lastIndexOf() 🙋‍♂️.....pichon thke index guna suru korbe ....
    // Returns the last (greatest) index of an element within the array equal 
    // to an element, or -1 if none is found. It search the element last to first..
// অ্যারের সমতুল্য কোনও উপাদানের সর্বশেষ (বৃহত্তম) সূচকটি প্রদান করে
// একটি উপাদান, বা -1 পাওয়া যায় না। এটি সর্বশেষ থেকে শেষ পর্যন্ত উপাদানটি অনুসন্ধান করে

   var myFriendNames = ["vinod","bahadur","thapa","thapatechnical","thapa"];
     console.log(myFriendNames.lastIndexOf("Thapa",3));  //// value likhe pichon thke index-number ber korar jnne (lastIndexOf) use kora hy...tarpore koto tomo index thke index guna suru korbe oita bole dite (,) diye oi number diye dite hbe...jemon console.log(variable-name.lastIndexOf(value, joto thke start hobe oi number))

// ------------------------------------------------------------------------------------------------------------------------
    // Array.prototype.includes() 🙋‍♂️------value diye search kora je oi value ta array er vitore ache ki na ....
    // Determines whether the array contains a value, 
    // returning true or false as appropriate.
// অ্যারেতে কোনও মান রয়েছে কিনা তা নির্ধারণ করে,
// যথাযথ হিসাবে সত্য বা মিথ্যা প্রত্যাবর্তন।

     var myFriendNames = ["vinod","bahadur","thapa","thapatechnical"];
     console.log(myFriendNames.includes("thapa")); //ekhane log er mddhe value diye search kora hocche je oi value ta array er mddhe ache nki ...thakle output: true dibe, r na thakle output: false dibe,,, likhar niom: console.log(variable-name.includes("jei value ta search korbo oi value"));

// ------------------------------------------------------------------------------------------------------------------------
    // Array.prototype.find() 🙋‍♂️

    // arr.find(callback(element[, index[, array]])[, thisArg])

    // Returns the found element in the array, if some element in the 
    // array satisfies the testing function, or undefined if not found.
    // Only problem is that it return only one element..
    // অ্যারেতে পাওয়া উপাদানটি প্রদান করে, যদি এর মধ্যে কিছু উপাদান থাকে
    //  অ্যারে পরীক্ষার ক্রিয়াকে সন্তুষ্ট করে, বা পাওয়া না গেলে অপরিজ্ঞাত।
    //  কেবল সমস্যাটি হ'ল এটি কেবল একটি উপাদানকে ফেরত দেয়

     const prices = [200,300,350,400,450,500,600];

    // price < 400
     const findElem = prices.find((currVal) =>  currVal < 400 ); //fat function diye kora hoise tai ato choto...1 st e 1 ta variable niye nibo(const) tarpore jeitar check korbo oi variable er name.find(function-name) => function-name < 400 (joto thke choto ta dekhte chaibo oi variable value diye dibo ..)...r jekhnei 400 thke choto peye jabe oita e output diye dibe...porer gula r check korbe na..
     const findElem = prices.find((currVal) =>  currVal > 1400 ); // undefined achbe...bcz 1400 thke boro kono value e naii.
     console.log(findElem);   

     console.log(  prices.find((currVal) => currVal > 1400 )); //emn koreo likha jay....

// ------------------------------------------------------------------------------------------------------------------------
    // Array.prototype.findIndex() 🙋‍♂️

    // Returns the found index in the array, if an element in the 
    // array satisfies the testing function, or -1 if not found.
    // অ্যারেতে পাওয়া সূচকটি প্রদান করে, যদি এর মধ্যে একটি উপাদান থাকে
    //  অ্যারে পরীক্ষার কার্যটি সন্তুষ্ট করে, বা -1 না পাওয়া গেলে।

    const prices = [200,300,350,400,450,500,600];

    // price < 400
     const findElem = prices.findIndex((currVal) =>  currVal < 400 ); //fat function diye kora hoise tai ato choto...1 st e 1 ta variable niye nibo(const) tarpore jeitar check korbo oi variable er name.findIndex(function-name) => function-name < 400 (joto thke choto ta dekhte chaibo oi variable value diye dibo ..)...r jekhnei 400 thke choto peye jabe oitar index-number  output diye dibe...porer gula r check korbe na..
     const findElem = prices.findIndex((currVal) =>  currVal > 1400 ); // -1 achbe...bcz 1400 thke boro kono value e naii.
     console.log(findElem); 
     console.log(  prices.findIndex((currVal) => currVal > 1400 )); //evbe o likha jajy..

    // ---------------------------------------------------------------------------------------------------------------------
    // Array.prototype.filter() 🙋‍♂️.....function check kore jei jei value condition true hobe, oi value diye ntun 1 ta array e output dibe 

    // Returns a new array containing all elements of the calling 
    // array for which the provided filtering function returns true.
    // কলিংয়ের সমস্ত উপাদান সম্বলিত একটি নতুন অ্যারে প্রদান করে
    //  অ্যারে যার জন্য সরবরাহিত ফিল্টারিং ফাংশনটি সত্য করে।

     const prices = [200,300,350,400,450,500,600];

    // // price < 400...ei condition chek kore jeta jeta true hbe oita oita diye 1 ta array output dibe...
     const newPriceTag = prices.filter((elem, index) => {
       return elem > 1400;
     })
     console.log(newPriceTag);  // // // // // // / / / / / / / eta pari na bujhi nai / / / / /



    // 3️⃣ Array Subsection 3 👉 How to sort an Array.....................................................................

    // Array.prototype.sort() 🙋‍♂️..............choto hater thke boro hater kora jay ....boro hater thke choto hater o kora jay

    // The sort() method sorts the elements of an array in place and 
    //returns the sorted array. The default sort order is ascending, built 
    //upon converting the elements into strings, 
    // then comparing their sequences of UTF-16 code units values.
    // বাছাই () পদ্ধতিটি স্থানে এবং একটি অ্যারের উপাদানগুলি সাজায়
    // সাজানো অ্যারে প্রদান করে ডিফল্ট সাজানোর ক্রমটি আরোহন, বিল্ট
    // উপাদানগুলিকে স্ট্রিংয়ে রূপান্তর করার পরে,
    //  তারপরে তাদের ইউটিএফ -16 কোড ইউনিটের মানগুলির ক্রমগুলির তুলনা করুন।

     const months = ['March', 'Jan', 'Feb', 'April' , 'Dec', 'Nov'];
     console.log(months.sort()); //choto hater thke boro hater show korbe.output..

     const array1 = [1, 30, 4, 21, 100000, 99];
     console.log(array1.sort()); // ekhane ulot palot hy jabe...bcz ei method jokhon run hbe..tkhn shb gula value k string kore nibe..thn sudhu 1-st okkhor ta dekhe hisab kore output dibe... r ekhne jehtu onk gular 1-st okkhor hisebe 1 ache tai 10000 oita age chole jabeee;.....


    // However, if numbers are sorted as strings, 
    // "25" is bigger than "100", because "2" is bigger than "1".
// তবে, সংখ্যাগুলি স্ট্রিং হিসাবে বাছাই করা থাকলে,
// "25" "100" এর চেয়ে বড়, কারণ "2" "1" এর চেয়ে বড়

    // Because of this, the sort() method will produce an incorrect 
    // result when sorting numbers.
    // এ কারণে, বাছাই () পদ্ধতিটি একটি ভুল তৈরি করবে
    // সংখ্যা বাছাই করার সময় ফলাফল।


    // 😀7: challenge Time  🏁

    // 1: How to Sort the numbers in the array in ascending (up) and descending (down) order?

    // compareFunction      Optional. 
    // A function that defines an alternative sort order. The function should return a negative, zero, or positive value, depending on the arguments, like:
     function(a, b){
      return a-b}

    // for asecnding order 
     array1.sort(function(a,b){
         console.log(a,b);
         if(a>b){
             return 1;
             // b comes first and then a 
         }
         if(a<b){
             // a comes first and then b 
             return -1;
         }
         if(a==b){
             // No changes
             return 0;
         }
     });

    // for desecnding order 
     array1.sort(function(a,b){
         console.log(a,b);
         if(a>b){
             return -1;
             // b comes first and then a 
         }
         if(a<b){
             // a comes first and then b 
             return 1;
         }
         if(a==b){
             // No changes
         return 0;
         }
     });

     console.log(array1);







    // 2: sort the array in descending order

    var fruits = ["Banana", "Orange", "Apple", "Mango"];

     let aFruits = fruits.sort();

     //Array.prototype.reverse() 🙋‍♂️
     // The reverse() method reverses an array in place. 
     // The first array element becomes the last, and 
     // the last array element becomes the first.





    // 4️⃣ Array Subsection 4 👉 Perform CRUD

    // Array.prototype.[push()-rule] 🙋‍♂️....eta method...kono ntun value add korte chaile ei method use korte hbe..array er pichone add hbee

    // The push() method adds one or more elements to the 
    // end of an array and returns the new length of the array.
// পুশ () পদ্ধতিটি এক বা একাধিক উপাদান যুক্ত করে
    // অ্যারের শেষ এবং অ্যারের নতুন দৈর্ঘ্য প্রদান করে।
    // NOTE: data/value..pichone add hbe..
     const animals = ['pigs', 'goats', 'sheep'];
     animals.push('cat') // apply korte hbe evbe.
     console.log(animals); // ekhne rslt hy gse..
      const count = animals.push('chicken'); //variable e rakha hoise...
       console.log(count); // ntun length.. dibe
     animals.push('chicken', 'cats','cow');
     console.log(animals);  // ekadhik data o push kora jabe...


    // Array.prototype.[unshift()..rule] 🙋‍♂️..method...prothome data/value add korte eta use korte hy...

    // The unshift() method adds one or more elements to the 
    // beginning of an array and returns the new length of the array.
    // আনশিফ্ট () পদ্ধতিটি এক বা একাধিক উপাদান যুক্ত করে
    // অ্যারের শুরু এবং অ্যারের নতুন দৈর্ঘ্য প্রদান করে |
// NOTE: data/value samne add hy.. 
     const animals = ['pigs', 'goats', 'sheep'];
     animals.unshift('cat'); //evabe apply korte hy..
     console.log(animals); //samne add hbe..

     const count = animals.unshift('chicken'); //variable e rakha hoise..variable e rakhle lenth o dibe
     console.log(count);
     console.log(animals);

     animals.unshift('chicken', 'cats','cow'); //ekadhik data/value push..
     console.log(animals);


    // 2nd example .....

     const myNumbers = [1,2,3,5];
     myNumbers.unshift(4,6); //apply evbe korte hy
     console.log(myNumbers);


    // Array.prototype.[pop()..rule] ....data remove korte eta use kora hy 

    // The pop() method removes the last element from an array and returns 
    // that element. This method changes the length of the array.
    // থেকে শেষ উপাদানটি সরিয়ে ফেরত দেয়
    // যে উপাদান। এই পদ্ধতিটি অ্যারের দৈর্ঘ্য পরিবর্তন করে।
// NOTE: last er ta remove korbe..
     const plants = ['broccoli', 'cauliflower',  'kale', 'tomato', 'cabbage'];
    plants.pop(); //method apply..
     console.log(plants); //sesh er ta remove hy jabeee..
     console.log(plants.pop()); //evbeo kora jay...
     console.log(plants); 


    // Array.prototype.[shift()--rule] 🙋‍♂️
    // The shift() method removes the first element from an array and returns 
    // that removed element. This method changes the length of the array.
// শিফট () পদ্ধতিটি অ্যারের থেকে প্রথম উপাদানটি সরিয়ে ফেরত দেয়
    // যে উপাদান সরানো। এই পদ্ধতিটি অ্যারের দৈর্ঘ্য পরিবর্তন করে।
    // NOTE: 1 st thke remove korbe...
     const plants = ['broccoli', 'cauliflower',  'kale', 'tomato', 'cabbage'];
     plants.shift(); //apply method..
     console.log(plants); //samne thke 1 ta data/value remove hy jabe...
     console.log(plants.shift()); //evbeo kora jay...
     console.log(plants);




    // 😀8: challenge Time 🏁
// NOTE: ei challenge e kivbe majhkhne data/value add kora jay remove kora jay oita dekhano hbee....
    // Array.prototype.[splice()--rule] 🙋‍♂️
    // Adds and/or removes elements from an array.
    // অ্যারে থেকে উপাদানগুলি যুক্ত করে এবং / অথবা সরায়।
    // NOTE: sob kaj 1 ta method diyei kora jay..samne add pichone add..samne delete pichone delete..majhe add majhe delete...etc

    // 1: Add Dec at the end of an array?..dc k last e add korte hbe array er..
    // 2: What is the return value of splice method?
    // 3: update march to March (update)?
    // 4: Delete June from an array?
    
// 2: What is the return value of splice method?
    // 3: update march to March (update)?
    // 4: Delete June from an array?
    // 1: একটি অ্যারের শেষে ডিসেম্বর যুক্ত করবেন?
// 2: স্প্লাইস পদ্ধতির রিটার্ন মান কত?
    // 3: আপডেট মার্চ টু মার্চ (আপডেট)?
    // 4: জুন থেকে একটি অ্যারে মুছবেন?


    // sol1:------------ sesh e add kora data/value
     const months = ['Jan', 'march', 'April', 'June', 'July']; 
     const newMonth = months.splice(months.length,0,"Dec");//apply korar somy jst  ta variable e niye nise ..tachara r kichui na..tbe new variable e rakha hy jate ki returne korse oita jana jay.  //variable name.solice likhe(last value er index nnumber thke 1 beshi or last e add korte chaile months.length likhlei hy jabe thn (,) koma diye kichu delete korte na chaile (0) likhte hbe (,) koma diye "string" er mddhe dite hbe ooi value ta jeta add korbo)..taholei hy jabeee..
     console.log(months); //output hy jabeee....

    // sol2:...ki returne korse oita dekha....
     console.log(newMonth); // ki returne korse oita output diye dibe...r  method apply apply korar smoy new varible e rakhsi tai eta ber kora jacche ...so shb smy e new variable e niye nibo...uporer kichu method e o ......... 

    // sol3: .kono 1 ta value deya ache ,,,oitare edit kora ..chng kora na jst edit kora..
    // value modify kore oi value er jayga tei add kora...
     const months = ['Jan', 'march', 'April', 'June', 'July'];
     const updateMonth = months.splice(1,1,'March')
     console.log(months); //output dibe..evbeo kora jabeee...kom value thakle evbe kora jabe...na korai valo...

    //  jei value change korte chai..ba update korte chai ..oitar indexOf ber korte hbe..r indexOf ber korar maddhme 2 ta kaj hoye jabe..oi value/data ta oi array er moddhe ache ki na, eta dekha jabe..r jodi thake tahole oitar index-number output ashbe....value/data na thakle output: -1 ashbe..
    // tarpore if else er maddhome program korte hbe..r program hobe etai je..indexOfMonth jodi -1 na hoy tahole splice kore daw...r -1 hole else er moddhe kichu 1 ta output niye nao....
     const months = ['Jan', 'march', 'April', 'June', 'July'];
     const indexOfMonth = months.indexOf('March'); //index number ber hobe...
     if(indexOfMonth != -1){
       const updateMonth = months.splice(indexOfMonth,1,'March');
       console.log(months);
     }else{
       console.log('No such data found');
     } //....working..........


    // sol4: 
     const months = ['Jan', 'march', 'April', 'June', 'July'];
     const indexOfMonth = months.indexOf('April');  //index number ber hobe

     if(indexOfMonth != -1){
       const updateMonth = months.splice(indexOfMonth,1); //ekhne jei 2 likha hoise oitar mane holo kyta delete korte chai ...upore ei bepare bistarito ache..r jeta delete korbo oita return korbe ..etao upore bistarito achee...r shb gula delete korte oi nnumber er jayga te infinity likhte hbe
       console.log(months);
       console.log(updateMonth);
     }else{
       console.log('No such data found');
     }  // same as qsn 3...jst oita te delete kore thn new value update korte hoise...r ekhane jst delete korte hbe kono new value add korte bola hy nai......



    // 5️⃣ Array Subsection 4 👉 Map and Reduce Method 
    // map method er kaj: map method 1 ta ntun array toiri korte kaje lage..age 1 ta array chilo oita thke 1 ta ntun array creat korte parbo.. note: oi 1 ta array er moddhe vibinno kaj korte para jabe..return kore alada varoiable e stor o kora jabe.....proti ta element/value/dta k loop korbe...

    // Array.prototype.map() 🙋‍♂️.....array modoify kora jay...return use kora must

    // let newArray = arr.map(callback(currentValue[, index[, array]]) {
    //     // return element for newArray, after executing something
    //   }[, thisArg]); ...............3 line apply rule....

    // Returns a new array containing the results of calling a 
    // function on every element in this array. 
    // কল করার ফলাফল যুক্ত একটি নতুন অ্যারে প্রদান করে
    // এই অ্যারের প্রতিটি উপাদান উপর ফাংশন।
// old array re kicihui korbe na ....amra ja edit korbo oigula 1 ta new array te diye dibe....
     const array1 = [1, 4, 9, 16, 25];
    // num > 9
     let newArr = array1.map((curElem,index,arr) => {
         return curElem > 9;
     })
     console.log(array1);
     console.log(newArr); //output done....

     let newArr = array1.map((curElm, index, arr) => {
         return `Index no = ${index} and the value is ${curElm} belong to ${arr} `
     }).reduce().
     console.log(newArr);

// use forEach to dekhte ki hy
     let newArrfor = array1.forEach((curElm, index, arr) => {
       return `Index no = ${index} and the value is ${curElm} belong to ${arr} `
     })
     console.log(newArrfor); //output: undefiend ans dibe..

    // It return new array without mutating the orignal array 



    // 😀9: challenge Time 🏁

    //  1: Find the square root of each element in an array?
    //  2: Multiply each element by 2 and return only those 
    //     elements which are greater than 10?
    // 1: একটি অ্যারের মধ্যে প্রতিটি উপাদান এর বর্গমূল খুঁজে?
    // 2: প্রতিটি উপাদানকে 2 দিয়ে গুণ করুন এবং কেবল সেগুলি ফেরত দিন
    // উপাদানগুলি 10 এর চেয়ে বেশি?

    // sol1: 
     let arr = [25, 36, 49, 64, 81]; // kon kon sonkha re squre korle array er moddher sonkha gula ber hbe oi sonkha gula ber kora..... 

     let arrSqr = arr.map((curElem) =>  Math.sqrt(curElem) ) //use pore dekhbo..topic abar ashbe ...
     console.log(arrSqr); // working...

    // sol 2: --map e eksthe onk kichu use kora jay.....///reduce smporke niche onk kichu likiha ache ..
    // 2 diye shb gula gun ...r output hbe jegula 10 er thke boro hobe...
      let arr = [2, 3, 4, 6, 8]; 
      //  console.log(arr.flat(Infinity));

      let arr2 = arr.map((curElm) => curElm * 2).filter((curElem) => curElem > 10 ).reduce((accumulator, curElem) => {
           return accumulator += curElem;
         });
      console.log(arr2);

    // we can use the chaining too.... 


    // 👉 Reduce Method 

    // flatten an array means to convert the 3d or 2d array into a 
    // single dimensional array 

    // The reduce() method executes a reducer function (that you provide) 
    // on each element of the array, resulting in single output value.

    // The reducer function takes four arguments:

    // Accumulator
    // Current Value
    // Current Index
    // Source Array
// একটি অ্যারের সমতল করা মানে 3 ডি বা 2 ডি অ্যারেকে একটিতে রূপান্তর করা
    // একক মাত্রিক অ্যারে

    // হ্রাস () পদ্ধতিটি হ্রাসকারী ফাংশন সম্পাদন করে (যে আপনি সরবরাহ করেন)
    // অ্যারে প্রতিটি উপাদান, একক আউটপুট মান ফলে।

    // রিডিউসার ফাংশনটি চারটি আর্গুমেন্ট গ্রহণ করে:

    // একিউমুলেটর
    // বর্তমান মূল্য
    // বর্তমান সূচি
    // উত্স অ্যারে
    // 

    // 4 subj = 1sub= 7
    // 3 subj = [5,6,2] ei 2 ta condition cmplt korte bolche..

     let arr = [5,6,2];

     let sum = arr.reduce((accumulator, curElem) => {
    //         debugger;
           return accumulator += curElem;
     },7) //ei 7 ta holo ..nije thke jodi kono value add kora lage tahole evbe kora lagbe ...  //rule....eta ....r accumulator dite hbe shb smy....
     console.log(sum);




    // How to fatten an array .....flat kora..
    // converting 2d and 3d array into one dimensional array 

     const arr = [
             ['zone_1', 'zone_2'],
             ['zone_3', 'zone_4'],
             ['zone_5', 'zone_6'],
             ['zone_7', ['zone_7', ['zone_7', 'zone_8']]]
         ];

      let flatArr = arr.reduce((accum, currVal)  => { 
                return accum.concat(currVal);
      }) //use concat

     console.log(flatArr);


    // const arr = [ ['zone_1', 'zone_2'], ['zone_3', ['zone_1', 'zone_2', ['zone_1', 'zone_2']]] ];
    // console.log(arr.flat(3));
    // console.log(arr);





    /**** Section 7👉 Strings in JavaScript  ****/

    // A JavaScript string is zero or more characters written inside quotes.

    // JavaScript strings are used for storing and manipulating text.
    // You can use single or double quotes

    // Strings can be created as primitives, 
    // from string literals, or as objects, using the String() constructor
    // একটি জাভাস্ক্রিপ্ট স্ট্রিং শূন্য বা আরও বেশি অক্ষর উদ্ধৃতি ভিতরে লেখা হয়।

    // জাভাস্ক্রিপ্ট স্ট্রিংগুলি পাঠ্য সংরক্ষণ এবং হেরফের জন্য ব্যবহৃত হয়।
    // আপনি একক বা ডাবল উদ্ধৃতি ব্যবহার করতে পারেন

    // স্ট্রিংগুলি আদিম হিসাবে তৈরি করা যেতে পারে,
    // স্ট্রিং লিটারাল থেকে বা স্ট্রিং () কনস্ট্রাক্টর ব্যবহার করে অবজেক্ট হিসাবে as

    let myName = "vinod thapa";
    let myChannelName = 'vinod thapa';

    // let ytName = new String("Thapa Technical");...intrvw..
    let ytName = 'thapa technical';

    console.log(myName);
    console.log((ytName));



    // 👉 How to find the length of a string
    // String.prototype.length 🙋‍♂️..length jante hle..
    // Reflects the length of the string. 
    // স্ট্রিংয়ের দৈর্ঘ্য প্রতিফলিত করে।

     let myName = "vinod thapa";
     console.log(myName.length); //rule..evbe likhte hbe



    // 👉 Escape Character

     let anySentence = "We are the so-called \"Vikings\" from the north.";
     console.log(anySentence); //output e dubble cotetion chaile...

    // // if you dont want to mess, simply use the alternate quotes........ 
    // আপনি যদি গোলযোগ করতে চান না, কেবল বিকল্প উদ্ধৃতিগুলি ব্যবহার করুন |
     let anySentence =  " We are the so-called 'Vikings' from the north. ";
     console.log(anySentence); // single cotetion dile kono backslash deya lage na..etai tar exmpl..same cotetion ek sthe use kora jabe na ..


    // 👉 Finding a String in a String...string er vitore string khoja..

    // String.prototype.indexOf(searchValue [, fromIndex]) 🙋‍♂️

    // The indexOf() method returns the index of (the position of) the first
    //  occurrence of a specified text in a string
    // স্ট্রিং.প্রোটোটাইপ.ইন্ডেক্সফ (সার্চভ্যালু [, ইনডেক্স]] 🙋‍♂️

    // ইনডেক্সফ () পদ্ধতিটি প্রথমটির সূচকে (অবস্থানের) প্রদান করে
    // স্ট্রিংয়ে নির্দিষ্ট পাঠ্যের উপস্থিতি

     const myBioData =  'I am the thapa Technical';
     console.log(myBioData.indexOf("thapa"));     //thakle joto tomo index number e ache oi number ta dekhabe,,,r na thakle -1 dekhabe....


    // // JavaScript counts positions from zero.
    // // 0 is the first position in a string, 1 is the second, 2 is the third ...
    // // জাভাস্ক্রিপ্ট শূন্য থেকে অবস্থান গণনা করে।
    // // 0 একটি স্ট্রিংয়ে প্রথম অবস্থান, 1 দ্বিতীয়, 2 তৃতীয় ...



    // // String.prototype.lastIndexOf(searchValue [, fromIndex]) 🙋‍♂️
    // // Returns the index within the calling String object of the 
    // // last occurrence of searchValue, or -1 if not found.
    // // এর কলিং স্ট্রিং অবজেক্টের মধ্যে সূচকটি ফেরত দেয়
    // // সার্চভ্যালুয়ের শেষ ঘটনা, বা -1 না পাওয়া গেলে।

// pichon thke khujbe lastIndexOf dile...
     const myBioData =  'I am the thapa Technical';
     console.log(myBioData.lastIndexOf("t", 6));


    // 👉 Searching for a String in a String...string er vitore string search.....

    // String.prototype.search(regexp) 🙋‍♂️..method name

    // The search() method searches a string for a specified 
    // value and returns the position of the match...
    // অনুসন্ধান () পদ্ধতিটি একটি নির্দিষ্টটির জন্য একটি স্ট্রিং সন্ধান করে
    // মান এবং ম্যাচের অবস্থানটি ফেরত দেয়

     const myBioData =  'I am the thapa Technical';
     let sData = myBioData.search("technical");
     console.log(sData); // data thakle index number output dibe...na thakle -1 output dibe..


    // The search() method cannot take a second start position argument.
// অনুসন্ধান () পদ্ধতিটি দ্বিতীয় শুরুর অবস্থানের আর্গুমেন্ট নিতে পারে না |


    // 👉 Extracting String Parts

    // There are 3 methods for extracting a part of a string:
    // স্ট্রিংয়ের অংশ বের করার জন্য 3 টি পদ্ধতি রয়েছে:

    // 1.slice(start, end)
    // 2.substring(start, end)
    // 3.substr(start, length)

    // The slice() Method 🙋‍♂️
    // slice() extracts a part of a string and returns the extracted part 
    // in a new string.

    // The method takes 2 parameters: the start position, 
    // and the end position (end not included).
    // স্লাইস () স্ট্রিংয়ের একটি অংশ বের করে এবং উত্তোলিত অংশটি প্রদান করে
    // একটি নতুন স্ট্রিং মধ্যে।

    // পদ্ধতিটি 2 পরামিতি নেয়: শুরুর অবস্থান,
    // এবং শেষের অবস্থান (অন্তর্ভুক্ত নয়)।

     var str = "Apple, Bananaa, Kiwi, mango";

     let res = str.slice(0,4); //index number likhte hbe....koi thke start hbe and koi giye end hobe oita
     let res = str.slice(7, -2); // 7 er thke suru kore end obdi jabe..r pore -2 er jnne..2 ta index kata jabeeeeee.e.e.e.e.e.e.e.e.e.e.
     console.log(res);

// sesh er ta dhorbe na
    // The slice() method selects the elements starting at the 
    // given start argument, and ends at, but does not include, 
    // the given end argument.
// স্লাইস () পদ্ধতিটি শুরুতে উপাদান নির্বাচন করে
    // প্রদত্ত শুরু যুক্তি, এবং শেষ হয়, তবে এতে অন্তর্ভুক্ত নেই,
    // প্রদত্ত শেষ যুক্তি।

    // Note: The original array will not be changed.
    // Remember: JavaScript counts positions from zero. First position is 0.
    // দ্রষ্টব্য: মূল অ্যারে পরিবর্তন করা হবে না।
    // মনে রাখবেন: জাভাস্ক্রিপ্ট শূন্য থেকে অবস্থান গণনা করে। প্রথম অবস্থান 0।




    // 😀11: challenge Time 🏁

    // Display only 280 characters of a string like the 
    // one used in Twitter?

     let myTweets  = "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum. Why do we use it? ";

     let myActualTweet = myTweets.slice(0,280);
     console.log(myActualTweet);
     console.log(myActualTweet.length); //length dekha hoise eta diye...






    // The substring() Method 🙋‍♂️
    // substring() is similar to slice().

    // The difference is that substring() cannot accept 
    // negative indexes.
    // সাবস্ট্রিং () স্লাইস () এর মতো।

    // পার্থক্য হ'ল সাবস্ট্রিং () গ্রহণ করতে পারে না
    // নেতিবাচক সূচী।

     var str = "Apple, Bananaa, Kiwi";
     let res = str.substring(8,-2);
     console.log(res); // negetive value kaj kore na ...so use kra jabe na ...



    // // If we give negative value then the characters are
    //  counted from the 0th pos
    // আমরা যদি নেতিবাচক মান দিই তবে অক্ষরগুলি হ'ল
    // 0 ম পোস্ট থেকে গণনা করা



    // The substr() Method 🙋‍♂️
    // substr() is similar to slice().

    // The difference is that the second parameter specifies the 
    // length of the extracted part.
    // সাবস্ট্রাস্ট () স্লাইসের সাথে মিল রয়েছে ()।

    // পার্থক্যটি হ'ল দ্বিতীয় প্যারামিটারটি নির্দিষ্ট করে
    // উত্তোলিত অংশের  দৈর্ঘ্য।


     var str = "Apple, Bananaa, Kiwi";
      let res = str.substr(7,-2); //negetive value dile kono output e dibe na...
     let res = str.substr(-4); //negetive value kaj kore na ...tbe pichon thke kichu data dekhaite chaile eta  kaj e ashbe ..r oita likhar niom etai.....
     console.log(res);






    // 👉 Replacing String Content() 

    // String.prototype.replace(searchFor, replaceWith) 🙋‍♂️

    // The replace() method replaces a specified value 
    // with another value in a string.
    // প্রতিস্থাপন () পদ্ধতিটি একটি নির্দিষ্ট মান প্রতিস্থাপন করে
    // স্ট্রিংয়ের অন্য মান সহ
// kon value ta riplace korte chai..r kon value er sthe chai ..oita dite hbe koma diye..niche exmpl..ekadhik bar same likha thakle string e ...1 st e jeta pabe oita change kore dibe..porer ta r korbe na..
     let myBioData = `I am vinod bahadur thapa vinod`;

     let repalceData = myBioData.replace('Vinod','VINOD');
     console.log(repalceData);
     console.log(myBioData);


    // Points to remember 
    // 1: The replace() method does not change the string 
    // it is called on.  It returns a new string.
    // 2: By default, the replace() method replaces only 
    // the first match
    // 3:By default, the replace() method is case sensitive. 
    // Writing VINOD (with upper-case) will not work..
// পয়েন্টগুলি মনে রাখার জন্য
    // 1: প্রতিস্থাপন () পদ্ধতি স্ট্রিং পরিবর্তন করে না
    // এটি বলা হয়। এটি একটি নতুন স্ট্রিং প্রদান করে।
    // 2: ডিফল্টরূপে, প্রতিস্থাপন () পদ্ধতিটি কেবলমাত্র প্রতিস্থাপন করে
    // প্রথম ম্যাচ
    // 3: ডিফল্টরূপে, প্রতিস্থাপন () পদ্ধতিটি কেস সংবেদনশীল।
    // ভিনোড (উচ্চ-কেস সহ) লেখা কার্যকর হবে না |


    //👉 Extracting String Characters

    // There are 3 methods for extracting string characters:
    // স্ট্রিং অক্ষর আহরণের জন্য 3 টি পদ্ধতি রয়েছে:

    // 1.charAt(position)
    // 2.charCodeAt(position)
    // 3.Property access [ ]



    // The charAt() Method 🙋‍♂️.......
    // The charAt() method returns the character at a 
    // specified index (position) in a string..
    // CharAt () পদ্ধতিটি অক্ষরে ফিরে আসে
    // স্ট্রিংয়ে নির্দিষ্ট সূচক (অবস্থান)

     let str = "HELLO WORLD";

    let jekonoName str.charAt(9);
    console.log(jekonoName); // index number diye kon position e ki data likha ache oita ber korte use hy....


    // The charCodeAt() Method 🙋‍♂️
    // The charCodeAt() method returns the unicode of the 
    // character at a specified index in a string:

    // The method returns a UTF-16 code
    //  (an integer between 0 and 65535).

    // The Unicode Standard provides a unique number for every 
    // character, no matter the platform, device, application, 
    // or language. UTF-8 is a popular Unicode encoding which
    //  has 88-bit code units.
    // CharCodeAt () পদ্ধতিটি এর ইউনিকোড প্রদান করে
    // স্ট্রিংয়ের একটি নির্দিষ্ট সূচীতে // অক্ষর:

    // পদ্ধতিটি একটি ইউটিএফ -16 কোড দেয়
    // (0 থেকে 65535 এর মধ্যে একটি পূর্ণসংখ্যা)।

    // ইউনিকোড স্ট্যান্ডার্ড প্রতিটি জন্য একটি অনন্য নম্বর সরবরাহ করে
    // চরিত্র, প্ল্যাটফর্ম, ডিভাইস, অ্যাপ্লিকেশন,
    // বা ভাষা। ইউটিএফ -8 একটি জনপ্রিয় ইউনিকোড এনকোডিং যা
    // এর 88-বিট কোড ইউনিট রয়েছে।
    let str = "HELLO WORLD";
    let jekonoName str.charAt(9);
    console.log(jekonoName); //uninode ber kore...jekono 1 ta number dibe..



    // 😀12: challenge Time 🏁

    // Return the Unicode of the last character in a string...string er sesh er okkhor er unicode ber korte hbe

     let str = "HELLO WORLD";
     let lastChar = str.length - 1;
     console.log(str.charCodeAt(lastChar)); //vnge vnge korse tai amn..1 line e o code likha jaitooo..




    // Property Access........
    // ECMAScript 5 (2009) allows property access [ ] on strings
// ECMAScript 5 (২০০৯) স্ট্রিংগুলিতে সম্পত্তি অ্যাক্সেসের অনুমতি দেয় []

     var str = "HELLO WORLD";
     console.log(str[1]); //index number addkorle ..oi index e kon data ta ache oita show korbee...




    //👉  Other useful methods......................................................... 

     let myName = "vinod tHapa";
     console.log(myName.toUpperCase()); 
     console.log(myName.toLowerCase()); //likha boro hater kora choto hater kora...




    // The concat() Method 🙋‍♂️
    // concat() joins two or more strings

     let fName = "vinod"
     let lName = "thapa"

     console.log(fName + lName ); //old but usefull... 
     console.log(`${fName} ${lName}`); //new and usefull..
     console.log(fName.concat(lName));
     console.log(fName.concat(" " ,lName));  //1 variable er datar sthe onno 1 ta variable er data jog koraaaa....






    // String.trim() 🙋‍♂️
    // The trim() method removes whitespace from both 
    // sides of a string
    
// উভয় থেকে সাদা স্থান সরিয়ে দেয়
// একটি স্ট্রিং এর পক্ষ

     var str = "              Hello         World!            ";
     console.log(str.trim()); // string er 2 paser space remove kore...kintu majher gula kore na....


    // Converting a String to an Array ...string k array te convert kora....................................................
    // A string can be converted to an array with the..
// স্ট্রিংকে একটি অ্যারেতে রূপান্তর করা যায় .. 
    // split() method..method name

     var txt = "a, b,c d,e";   // String
     console.log(txt.split(","));           // Split on commas.......protita alada alada array hbe
     console.log( txt.split(" "));          // Split on spaces.......
     console.log(txt.split("|"));         // Split on pipe...........

     


    /**** Section 8👉 Date and Time in JavaScript ****/

    // JavaScript Date objects represent a single moment in time in a 
    // platform-independent format. Date objects contain a Number 
    // that represents milliseconds since 1 January 1970 UTC.
    // জাভাস্ক্রিপ্ট তারিখের অবজেক্টগুলি একটিতে সময়ের মধ্যে একটি মুহুর্তকে উপস্থাপন করে
    // প্ল্যাটফর্ম-স্বতন্ত্র ফর্ম্যাট। তারিখের অবজেক্টগুলিতে একটি সংখ্যা থাকে
    // যা 1 জানুয়ারি 1970 ইউটিসি থেকে মিলিসেকেন্ডগুলিকে উপস্থাপন করে।

    // 👉 Creating Date Objects
    // There are 4 ways to create a new date object:

     new Date()
    new Date(year, month, day, hours, minutes, seconds, milliseconds)
    // // it takes 7 arguments
    new Date(milliseconds)
    // // we cannot avoid month section 
    new Date(date string)



    // new Date() 🙋‍♂️................
    // Date objects are created with the new Date() constructor.
    // তারিখ অবজেক্টস নতুন তারিখ () কনস্ট্রাক্টর দিয়ে তৈরি করা হয়।

     let currDate = new Date(); 
     console.log(currDate); // output: jkhn ei code run kora hbe oi smy er output dibe...
     console.log(new Date()); //evbe o dekha jay....
     console.log(new Date().toLocaleString()); // 9/11/2019, 1:25:01 PM ...ekebare sohoj e local time in vs code..
     console.log(new Date().toString()); // Wed Sep 11 2019 13:25:01 GMT+0700 (GMT+07:00)..browser e jei time dekhay oi time dekhabe vs code e...

    // Date.now() 🙋‍♂️
    // Returns the numeric value corresponding to the current time—the number 
    // of milliseconds elapsed since January 1, 1970 00:00:00 UTC
    // বর্তমান সময়ের সাথে সংখ্যার মান — সংখ্যাটি প্রদান করে
    // মিলিসেকেন্ডগুলির { কে 1 জানুয়ারি, 1970 00:00:00 ইউটিসি থেকে কেটে গেছে

// Date.now...method...
     console.log(Date.now()); // miliscd return kore ..jan 1 1970.


    // new Date(year, month, ...) 🙋‍♂️
    // 7 numbers specify year, month, day, hour, minute, second, 
    // and millisecond (in that order)
    // Note: JavaScript counts months from 0 to 11.
    // 7 নম্বর বছর, মাস, দিন, ঘন্টা, মিনিট, দ্বিতীয়,
    // এবং মিলিসেকেন্ড (সেই ক্রমে)
    // দ্রষ্টব্য: জাভাস্ক্রিপ্ট 0 থেকে 11 পর্যন্ত মাস গণনা করে।

    // January is 0. December is 11....eta mne rakhte hbe..

     var d = new Date(2021,0);
     console.log(d.toLocaleString()); // jan 1 er dtls dibe..

// 7 argument er name: 1.year, 2.month, 3.date/tsrikh, 4.hour, 5.miniute, 6.second, 7.mili-second.

    // new Date(dateString) 🙋‍♂️
    // new Date(dateString) creates a new date object from a date string..
// নতুন তারিখ (ডেটস্ট্রিং) একটি তারিখের স্ট্রিং থেকে একটি নতুন তারিখের অবজেক্ট তৈরি করে

     var d = new Date("October 13, 2021 11:13:00");
     console.log(d.toLocaleString());

    // new Date(milliseconds) 🙋‍♂️
    // new Date(milliseconds) creates a new date object as zero time plus milliseconds:
// নতুন তারিখ (মিলিসেকেন্ডস) একটি নতুন তারিখের অবজেক্টটি শূন্য সময় প্লাস মিলিসেকেন্ড হিসাবে তৈরি করে:


     var d = new Date(0);
     var d = new Date(1609574531435);
     var d = new Date(86400000*2);
     console.log(d.toLocaleString());

    //👉 Dates Method

    //  const curDate = new Date();

    // // how to get the indivisual date..

     console.log(curDate.toLocaleString());  //date & time 2 tai output dibe...

     console.log(curDate.getFullYear()); // sudhu year..

     console.log(curDate.getMonth()); // 0-11 jan to dec. sudhu month

     console.log(curDate.getDate()); //koto tarikh oita ber kore..

     console.log(curDate.getDay()); //ki bar oita ber kore..

    // // how to set the indivisual date 

     console.log(curDate.setFullYear(2022)); //mili second output dibe..bt oita year e hbe
    // // The setFullYear() method can optionally set month and day
     console.log(curDate.setFullYear(2022, 10, 5)); //mili second output dibe..
     let setmonth = curDate.setMonth(10); // 0-11 jan to dec
     console.log(setmonth); //mili second output dibe..
     console.log(curDate.setDate(5)); //mili second output dibe..
     console.log(curDate.toLocaleString()); //mili second output dibe..





    //👉 Time Methods

     const curTime = new Date();

    // how to get the indivisual Time 

     console.log(curTime.getTime());
    // // // The getTime() method returns the number of milliseconds 
    // // since January 1, 1970
     console.log(curTime.getHours());
    // // // The getHours() method returns the hours of a date as a 
     number (0-23)
     console.log(curTime.getMinutes());
     console.log(curTime.getSeconds());
     console.log(curTime.getMilliseconds());
    //  shb kichu alada alada...




    // // how to set the indivisual Time 

    let curTime = new Date();

    console.log(curTime.setTime());
    console.log(curTime.setHours(5));
    console.log(curTime.setMinutes(5));
    /console.log(curTime.setSeconds(5));
    console.log(curTime.setMilliseconds(5));



    // // Practice Time .........................................................................................
     new Date().toLocaleTimeString(); // 11:18:48 AM
    // //---sydhu time chaile eta
     new Date().toLocaleDateString(); // 11/16/2015
    // //---sudhu date chaile eta
     new Date().toLocaleString(); // 11/16/2015, 11:18:48 PM
    //  ---time date 2 tai chaile.




    // Challenge Time NOT yet decided...............................................
    // (function(){
    //   setInterval(()=> {
    //     console.log(new Date().toLocaleTimeString());
    //   }, 1000)
    // })();




    /**** Section 9👉 Math Object in JavaScript ****/

    // The JavaScript Math object allows you to perform mathematical tasks on numbers.
    // জাভাস্ক্রিপ্ট ম্যাথ অবজেক্ট আপনাকে সংখ্যায় গাণিতিক কাজ সম্পাদনের অনুমতি দেয়। 

     console.log(Math.PI);  // PI er man ber korte


    // Math.round() 🙋‍♂️...etar kaj ..
    // returns the value of x rounded to its nearest integer..
// x এর মানটিকে তার নিকটতম পূর্ণসংখ্যায় প্রত্যাবর্তন করে

  let num = 10.501;
     console.log(Math.round(num)); //purno sonkha kore dibe doshomik thakle..doshomik er pore..5 diye suru hole bere jabe ..5 er kom hole kome jabe..jemon ekhne 11 hy jabe...5 er kom hle 10 hy jeto..


    // Math.pow() 🙋‍♂️
    // Math.pow(x, y) returns the value of x to the power of y
    // ম্যাথ.প্যাও (x, y) x এর মানকে y এর শক্তি দিয়ে দেয়

     console.log(Math.pow(2,3));
     console.log(2**3); //bujhi nai ...


    // Math.sqrt() 🙋‍♂️
    // Math.sqrt(x) returns the square root of x
// ম্যাথ.এসকিআরটি (এক্স) এক্স এর বর্গমূল প্রদান করে

     console.log(Math.sqrt(25));
     console.log(Math.sqrt(81));
     console.log(Math.sqrt(66)); //squre ber korte..use


    // Math.abs() 🙋‍♂️
    // Math.abs(x) returns the absolute (positive) value of x
    // ম্যাথ.এবস (এক্স) এক্স এর পরম (ধনাত্মক) মান প্রদান করে

     console.log(Math.abs(-55));
    // console.log(Math.abs(-55.5));
     console.log(Math.abs(-955));
     console.log(Math.abs(4-6)); //shb value posetive kore dibe jodi negetive thake..



    // Math.ceil() 🙋‍♂️
    // Math.ceil(x) returns the value of x rounded up to its nearest integer..
// ম্যাথ.সিল (এক্স) এটির নিকটতম পূর্ণসংখ্যার জন্য x গোলাকার মান প্রদান করে

    console.log(Math.ceil(4.51));
    console.log(Math.round(4.51));
    console.log(Math.ceil(99.01));
    console.log(Math.round(99.1)); // output dekhe nibo...2 tar kaj e pray same kichu ta parthokko ache..ceil dosomik er pore jotoi thak 1 baray dibe..r round doshomik er pore 5 thkle 1 barabe...nyto oi same sonkha e output dibe...



    // Math.floor()  🙋‍♂️
    // Math.floor(x) returns the value of x rounded down to its nearest integer   
// ম্যাথ.ফ্লুর (x) x এর মানটিকে নিকটতম পূর্ণসংখ্যায় ফেরত দেয়
     console.log(Math.floor(4.7)); 
     console.log(Math.floor(99.1)); //dosomik er pore joto e thak barabe na ..same tai rkhe dibe...



    // Math.min() 🙋‍♂️
    // Math.min() can be used to find the lowest value in a list of arguments
  // ম্যাথ.মিন () আর্গুমেন্টের তালিকার সর্বনিম্ন মানটি ব্যবহার করতে ব্যবহৃত হতে পারে

     console.log(Math.min(0, 150, 30, 20, -8, -200)); //shb theke mimimum value/data ta ber korbe



    // Math.max() 🙋‍♂️
    // Math.max() can be used to find the highest value in a list of arguments
    // ম্যাথ.ম্যাক্স () আর্গুমেন্টের তালিকার সর্বোচ্চ মান খুঁজে পেতে ব্যবহার করা যেতে পারে

     console.log(Math.max(0, 150, 30, 20, -8, -200)); // shb thke boro value/data ta ber korbe khuje..



    // Math.random() 🙋‍♂️
    // Math.random() returns a random number between 0 (inclusive), and 1 (exclusive)
// ম্যাথ.র্যান্ডম () 0 (সমেত) এবং 1 (একচেটিয়া) এর মধ্যে একটি এলোমেলো সংখ্যা প্রদান করে

     console.log(Math.floor(Math.random()*10)); // 10 diye gun na korle 0 thke 1 obdi number e output dibe sudhu ...tai 10 diye gun kore..1 thke 9 e nite hbe
     console.log(Math.floor(Math.random()*10)); // 0 to 9 eta sothik..



    // Math.round() 🙋‍♂️
    // The Math.round() function returns the value of a number 
    // rounded to the nearest integer.

     console.log(Math.round(4.6));
    console.log(Math.round(99.1)); // dekha hoise..



    // Math.trunc()  🙋‍♂️
    // The trunc() method returns the integer part of a number
    // ট্রাঙ্ক () পদ্ধতিটি কোনও সংখ্যার পূর্ণসংখ্যার অংশটি প্রদান করে

    console.log(Math.trunc(4.6));
      console.log(Math.trunc(-99.1)); // dosomik er age jei number thakbe oita diye dibe...-thkle - soho..jekono kichui thakle oita sohoi..



    // Practice Time........................................................................... 

    // if the argument is a positive number, Math.trunc() is equivalent to 
    // Math.floor(),
    // otherwise Math.trunc() is equivalent to Math.ceil().
// যদি আর্গুমেন্টটি ধনাত্মক সংখ্যা হয় তবে ম্যাথ.ট্রুঙ্ক () সমান
    // ম্যাথ.ফ্লুর (),
    // অন্যথায় Math.trunc () ম্যাথ.সিল () এর সমতুল্য।




    // Section 10👉 DOM...Document Object model in JavaScript 

    // 1️⃣ Window: Window is the main container or we can say the 
    // global Object and any operations related to entire 
    // browser window can be a part of window object. 
    // 1️⃣ Window: উইন্ডোটি মূল ধারক বা আমরা এটি বলতে পারি
    // গ্লোবাল অবজেক্ট এবং সম্পূর্ণ সম্পর্কিত যে কোনও ক্রিয়াকলাপ
    // ব্রাউজার উইন্ডো উইন্ডো অবজেক্টের অংশ হতে পারে।

    // For ex 👉 the history or to find the url etc.// প্রাক্তন ইতিহাসের জন্য বা url ইত্যাদি সন্ধান করার জন্য

    // 1️⃣ DOM: whereas the DOM is the child of Window Object
    // DOM: যদিও ডিওএম উইন্ডো অবজেক্টের শিশু






    // 2️⃣window:  All the members like objects, methods or properties. 
    // If they are the part of window object then we do not refer 
    // the window object. Since window is the global object 
    // so you do not have to write down window. 
    // - it will be figured out by the runtime.
    // window: 2️⃣ সমস্ত সদস্য বস্তু, পদ্ধতি বা বৈশিষ্ট্য পছন্দ করে।
    // যদি সেগুলি উইন্ডো অবজেক্টের অংশ হয় তবে আমরা উল্লেখ করি না
    // উইন্ডো অবজেক্ট। উইন্ডো যেহেতু বিশ্বব্যাপী বস্তু
    // সুতরাং আপনাকে উইন্ডোটি লিখতে হবে না।
    // - এটি রানটাইমের দ্বারা নির্ধারিত হবে।

    // For example
    // 👉 window.screen or just screen is a small information 
    // object about physical screen dimensions.
    // 👉 window.location giving the current URL
    // 👉 window.document or just document is the main object 
    // of the potentially visible (or better yet: rendered).../ উদাহরণ স্বরূপ
    // 👉 উইন্ডো.স্ক্রিন বা জাস্ট স্ক্রিন একটি ছোট তথ্য
    // শারীরিক পর্দার মাত্রা সম্পর্কে অবজেক্ট।
    // 👉 উইন্ডো.লোকশন বর্তমান ইউআরএল দিচ্ছে
    // 👉 উইন্ডো.ডোকামেন্ট বা কেবল নথিই মূল বিষয়
    // সম্ভাব্য দৃশ্যমান (বা এখনও আরও ভাল: রেন্ডার)
    // ডকুমেন্ট অবজেক্ট মডেল / DOM

    // 2️⃣ DOM: Where in the DOM we need to refer the document, 
    // if we want to use the document object, methods or properties
    // 2️⃣ ডোম: ডোমটি কোথায় আমাদের নথির উল্লেখ করতে হবে,
    // যদি আমরা নথির অবজেক্ট, পদ্ধতি বা বৈশিষ্ট্যগুলি ব্যবহার করতে চাই
    // For example......
    // 👉 document.getElementById()


    // 3️⃣window: Window has methods, properties and object. 
    // ex setTimeout() or setInterval() are the methods 
    // where as Document is the object of the Window and 
    // It also has a screen object with properties 
    // describing the physical display.


    // Now, I know you have a doubt like we have seen the methods 
    // and object of the global object that is window. But What about
    // the properties of the Window Object 🤔

    // so example of window object properties are
    // innerHeight, 
    // innerWidth and there are many more 

    // let's see some practical in DOM HTML file..
    // 3 উইন্ডো: উইন্ডোতে পদ্ধতি, বৈশিষ্ট্য এবং অবজেক্ট রয়েছে।
    // এক্স সেটটাইমআউট () বা সেটইন্টারওয়াল () হ'ল পদ্ধতি
    // যেখানে ডকুমেন্ট উইন্ডো এর অবজেক্ট এবং
    // এটিতে বৈশিষ্ট্যযুক্ত একটি স্ক্রিন অবজেক্টও রয়েছে
    // শারীরিক প্রদর্শন বর্ণনা।


    // এখন, আমি জানি যে আপনি পদ্ধতিগুলি যেমন দেখেছি তেমন সন্দেহ আছে
    // এবং উইন্ডো যে বিশ্বব্যাপী অবজেক্টের অবজেক্ট। কিন্তু কি ব্যাপারে
    // উইন্ডো অবজেক্টের বৈশিষ্ট্য 🤔

    // উইন্ডো অবজেক্ট বৈশিষ্ট্যের উদাহরণ তাই
    // ইনারহাইট,
    // ইন্টার্নউইথ এবং আরও অনেক কিছু আছে

    // আসুন ডিওএম এইচটিএমএল ফাইলটিতে কিছু ব্যবহারিক দেখি




    // ************** DOM vs BOM *******************

    // 👉DOM: The DOM is the Document Object Model, which deals with the document, 
    // the HTML elements themselves, e.g. document and all traversal you 
    // would do in it, events, etc.
    // DOM: ডিওএম হ'ল ডকুমেন্ট অবজেক্ট মডেল, যা নথির সাথে সম্পর্কিত,
    // এইচটিএমএল উপাদানগুলি নিজেরাই, উদাঃ দস্তাবেজ এবং সমস্ত আপনাকে অনুসরণ করে al
    // এর মধ্যে ইভেন্টগুলি, ইত্যাদি করবে

    // For Ex: 👨‍🏫
    // change the background color to red
    // document.body.style.background = "red";


    // 👉 The BOM is the Browser Object Model, which deals with browser components 
    // aside from the document, like history, location, navigator and screen 
    // (as well as some others that vary by browser). OR 
    // In simple meaning all the Window operations which comes under BOM are performed 
    // usign BOM 
    // 👉 বিওএম হ'ল ব্রাউজার অবজেক্ট মডেল, যা ব্রাউজারের উপাদানগুলি নিয়ে কাজ করে
    // ইতিহাস, অবস্থান, নেভিগেটর এবং স্ক্রিনের মতো দস্তাবেজ থেকে আলাদা aside
    // (পাশাপাশি কিছু অন্যান্য যা ব্রাউজার অনুসারে পরিবর্তিত হয়)। বা
    // সাধারণ অর্থে বিওএম এর আওতায় আসা সমস্ত উইন্ডো অপারেশন সম্পাদন করা হয়
    // usign BOM




    // Let's see more practical on History object 

    // Functions alert/confirm/prompt are also a part of BOM: 
    // they are directly not related to the document, 
    // but represent pure browser methods of communicating with the user.// আসুন ইতিহাসের বিষয়টিতে আরও ব্যবহারিক দেখুন

    // ফাংশন সতর্কতা / নিশ্চিত / প্রম্পটগুলিও বিএম এর একটি অংশ:
    // এগুলি সরাসরি নথির সাথে সম্পর্কিত নয়,
    // তবে ব্যবহারকারীর সাথে যোগাযোগের বিশুদ্ধ ব্রাউজার পদ্ধতি উপস্থাপন করুন।

    alert(location.href); // shows current URL
     if (confirm("Want to Visit ThapaTechnical?")) {
       location.href = "https://www.youtube.com/thapatechnical"; // redirect the browser to another URL
     }





    // Section 3️⃣: Navigate through the DOM 

    // 1: document.documentElement
    // returns the Element that is the root element of the document. 
    // 2: document.head
    // 3: document.body
    // 4: document.body.childNodes (include tab,enter and whiteSpace)
    // list of the direct children only 
    // 5: document.children (without text nodes, only regular Elements)
    // 6: document.childNodes.length

    // 👉 Practice Time 
    // How to check whether an element has child nodes or not?
    // we will use hasChildNodes()

    // 👉 Practice Time 
    // How to find the child in DOM tree 
    // firstChild vs firstElementChild
    // lastChild vs lastElementChild 
    // const data = document.body.firstElementChild;
    // undefined
    // data
    // data.firstElementChild
    // data.firstElementChild.firstElementChild
    // data.firstElementChild.firstElementChild.style.color = "red"
    // vs 
    // document.querySelector(".child-two").style.color = "yellow";

    // 👉 How to find the Parent Nodes 
    // document.body.parentNode
    // document.body.parentElement

    // 👉 How to find or access the siblings
    // document.body.nextSibling
    // document.body.nextElementSibling
    // document.body.previousSibling
    // document.body.previousElementSibling



    //SECTION 4️⃣:  How to search the Elements and the References 
    // We will see the new file 






    // **********************************************************************


    /**** Section 11👉 EVENTS in JavaScript ****/


    // HTML events are "things" that happen to HTML elements.
    // When JavaScript is used in HTML pages, JavaScript can "react" on these events.


    // 👨‍🏫 HTML Events
    // An HTML event can be something the browser does, or something a user does.

    // Here are some examples of HTML events:

    // An HTML web page has finished loading
    // An HTML input field was changed
    // An HTML button was clicked
    // Often, when events happen, you may want to do something.

    // JavaScript lets you execute code when events are detected.

    // HTML allows event handler attributes, with JavaScript code, 
    // to be added to HTML elements.



    // section 1️⃣ 4 ways of writing Events in JavaScript

    // 1: using inline events alert();
    // 2: By Calling a funcion (We already seen and most common way of writing) 
    // 3: using Inline events (HTML onclick="" property and element.onclick)
    // 4: using Event Listeners (addEventListener and IE's attachEvent)

    // check the Events HTML File



    // section 2️⃣: What is Event Object?
    // Event object is the parent object of the event object. 
    // for Example 
    // MouseEvent, focusEvent, KeyboardEvent etc 



    // section ️3️⃣ MouseEvent in JavaScript
    // The MouseEvent Object
    // Events that occur when the mouse interacts with the HTML 
    // document belongs to the MouseEvent Object.



    // section ️4️⃣ KeyboardEvent  in JavaScript
    // Events that occur when user presses a key on the keyboard, 
    // belongs to the KeyboardEvent Object.
    // https://www.w3schools.com/jsref/obj_keyboardevent.asp


    // Section 5️⃣ InputEvents in JavaScript 
    // The onchange event occurs when the value of an element has been changed.

    // For radiobuttons and checkboxes, the onchange event occurs when the 
    // checked state has been changed.




    // **********************************************************************

    // 👉  JavaScript Timing Events

    // **********************************************************************


    // The window object allows execution of code at specified time intervals.

    // These time intervals are called timing events.

    // The two key methods to use with JavaScript are:

    // setTimeout(function, milliseconds)
    // Executes a function, after waiting a specified number of milliseconds.

    // setInterval(function, milliseconds)
    // Same as setTimeout(), but repeats the execution of the function continuously.


    // 1️⃣ setTimeout()

    // 2️⃣clearTimeout()

    // 3️⃣ setInterval()

    // 4️⃣ clearInterval()



    // **********************************************************************

    // 👉 object oriented Javascript

    // **********************************************************************


    // 1️⃣ What is Object Literal?

    // Object literal is simply a key:value pair data structure. 

    // Storing variables and functions together in one container, 
    // we can refer this as an Objects.

    // object = school bag 

    // How to create an Object?

    // 1st way 

    // let bioData = { 
    //     myName : "thapatechnical",
    //     myAge : 26,
    //     getData : function(){
    //       console.log(`My name is ${bioData.myName} and my age is ${bioData.myAge}`);
    //     }
    // }

    // bioData.getData();

    // 2nd way no need to write functions as well after es6

    // let bioData = { 
    //   myName : "thapatechnical",
    //   myAge : 26,
    //   getData (){
    //     console.log(`My name is ${bioData.myName} and my age is ${bioData.myAge}`);
    //   }
    // }

    // bioData.getData();


    // 👉 What if we want object as a value inside an Object 


    // let bioData = { 
    //   myName : {
    //     realName : "vinod",
    //     channelName : "thapa technical" 
    //   },
    //   myAge : 26,
    //   getData (){
    //     console.log(`My name is ${bioData.myName} and my age is ${bioData.myAge}`);
    //   }
    // }

    // console.log(bioData.myName.channelName );





    // 2️⃣ What is this Object?

    // The definition  of "this" object is that it contain the current context. 

    // The this object can have different values depending on where it is placed.  


    // // For Example 1 
    // console.log(this.alert('Awesome'));
    // // it refers to the current context and that is window global object 


    // // ex 2 
    // function myName() {
    //     console.log(this);
    // }
    // myName();



    // // ex 3 

    // var myNames = 'vinod';
    // function myName() {
    //     console.log(this.myNames);
    // }
    // myName();


    // // ex 4 
    // const obj = {
    //     myAge : 26,
    //     myName() {
    //       console.log(this.myAge);
    //     }
    // }
    // obj.myName();

    // // ex 5 
    // // this object will not work with arrow function bcz arrow function is bound to class.

    // const obj = {
    //     myAge : 26,
    //     myName : () => {
    //       console.log(this);
    //     }
    // }
    // obj.myName();



    // // ex 6

    // let bioData = {
    //     myName : {
    //         realName : "vinod thapa",
    //         channelName : 'thapa technical'
    //     },
    //     // things to remember is that the myName is the key and the object is act like a value 
    //     myAge : 26,
    //     getData (){
    //       console.log(`My name is ${this.myName.channelName} and my age is ${this.myAge} `);
    //     }
    //   }

    //   bioData.getData();


    // // call method is used to call the method of another object 
    // // or with call(), an object can use a method belonging to another object 

    // // But as per other it is simply the way to use the this keyword or another object 






    // // **********************************************************************

    // // 👉 How JavaScript Works? Advanced and Asynchronous JavaScript

    // // **********************************************************************


    // // Advanced JavaScript Section

    // // 1️⃣: Event Propagation (Event Bubbling and Event Capturing)

    // // check html file 


    // // 2️⃣: Higher Order Function
    // // function which takes another function as an arguments is called HOF 
    // // wo function jo dusre function ko as an argument accept krta hai use HOF 


    // // 3️⃣: Callback Function
    // // function which get passed as an argument to another function is called CBF 
    // // A callback function is a function that is passed as an argument to 
    // // another function, to be “called back” at a later time. 

    // // Jis bhi function ko hum kisi or function ke under as an arguments passed 
    // // krte hai then usko hum CallBack fun bolte hai 


    // // // we need to create a calculator 

    // const add = (a,b) => {
    //     return a+b;
    // }
    // // console.log(add(5,2));

    // const subs = (a,b) => {
    //     return Math.abs(a-b);
    // }
    // const mult = (a,b) => {
    //     return a*b;
    // }

    // const calculator = (num1,num2, operator) => {
    //   return operator(num1,num2);
    // }

    // calculator(5,2,subs)

    // console.log(calculator(5,2,subs));

    // // // I have to do the hardcoded for each operation which is bad
    // // // we will use the callback and the HOF to make it simple to use 




    // // // Now instead of calling each function indivisually we can call it
    // // // by simply using one function that is calculator 

    // console.log(calculator(5,6,add));
    // console.log(calculator(5,6,subs));
    // console.log(calculator(5,6,mult));

    // // In the above example, calculator is the higher-order function, 
    // // which accepts three arguments, the third one being the callback.
    // // Here the calculator is called the Higher Order Function because it takes
    // // another function as an argument 

    // // and add, sub and mult are called the callback function bcz they are passed 
    // // as an argument to another fucntion 

    // // InterView Question 
    // // Difference Between Higher Order Function and Callback Function ?


    // // 🏁🏁Asynchronous JavaScript


    // // 6️⃣:   Synchronous JavaScript Prog 

    // 1work = 10min
    // 2work = 5s

    // const fun2 = () => {
    //   console.log(`Function 2️⃣ is called`);
    // }

    // const fun1 = () => {
    //   console.log(`Function 1 is called`);
    //   fun2();
    //   console.log(`Function 1 is called Again ✌`);
    // }

    // fun1();


    // Asynchronous JavaScript Prog 

    // const fun2 = () => {
    //   setTimeout(()=> {
    //       console.log(`Function 2️⃣  is called`);
    //   }, 2000);
    // }

    // const fun1 = () => {
    //   console.log(`Function 1 is called`);
    //   fun2();
    //   console.log(`Function 1 is called Again ✌`);
    // }

    // fun1();


    // //👻 What is Event Loop in JavaScript?
    // // ppt explain 


    // // 5️⃣ Hoisting in JavaScript 

    // // we have a creation phase and execution phase.

    // // Hoisting in Javascript is a mechanism where variables and functions
    // // declarations are moved to the top of their scope before the code execute.

    // For Example 👇
    // console.log(myName);
    // let myName;
    // myName = "thapa";

    // // How it will be in output during creation phase 

    // 1: var myName = undefined;
    // 2: console.log(myName);
    // 3: myName = "thapa";


    // //😲 In ES2015 (a.k.a. ES6), hoisting is avoided by using the let keyword 
    // // instead of var. (The other difference is that variables declared 
    // // with let are local to the surrounding block, not the entire function.)



    // // 6️⃣ What is Scope Chain and Lexical Scoping in JavaScript? 

    // // The scope chain is used to resolve the value of variable names 
    // // in JS.

    // // scope chain in js is lexically defined, which means that we can 
    // // see what the scope chain will be by looking at the code. 

    // // At the top, we have the Global Scope, which is the window Object
    // // in the browser.

    // // Lexical Scoping means Now, the inner function can get access to 
    // // their parent functions variables But the vice-versa is not true.


    // // For Example 👇

    // let a = "Hello guys. "; // global scope

    // const first= () => {
    //   let b = " How are you?"

    //     const second = () => {
    //       let c = " Hii, I am fine thank you🙏";
    //       console.log(a+b+c);
    //     }
    //     second();
    //     console.log(a+b+c); //I can't use C 
    // }

    // first();



    // // 7️⃣ What is Closures in JavaScript 🤔

    // // A closure is the combination of a function bundled together (enclosed) with references 
    // // to its surrounding state (the lexical environment). 

    // // In other words, a closure gives you 
    // // access to an outer function’s scope from an inner function. 

    // // In JavaScript, closures are created every time a function is created, at function creation time.

    // // For Example 👇

    // const outerFun = (a) => {
    //     let b = 10;
    //     const innerFun = () => {
    //       let sum = a+b;
    //       console.log(`the sum of the two no is ${sum}`);
    //     }
    //     innerFun();
    // }
    // outerFun(5);

    // // it same like lexical scoping 

    // // One more Example 👇

    // const outerFun = (a) => {
    //   let b = 10;
    //   const innerFun = () => {
    //     let sum = a+b;
    //     console.log(`the sum of the two no is ${sum}`);
    //   }
    //   return innerFun;
    // }
    // let checkClousure = outerFun(5);
    // console.dir(checkClousure);

    // "use strict"

    // let x = "vinod";
    // console.log(x);


    // //🏁🏁🏁 Back To Advanced JavaScript 




    // Currying


    // const sum = (num1) => (num2) => (num3) => console.log(num1+num2+num3); 

    // sum(5)(3)(8);





    // // 8️⃣: CallBack Hell 

    // setTimeout(()=>{
    //     console.log(`1️⃣ works is done`);    
    //     setTimeout(()=>{
    //         console.log(`2️⃣ works is done`); 
    //         setTimeout(()=>{
    //             console.log(`3️⃣ works is done`);  
    //             setTimeout(()=>{
    //                 console.log(`4️⃣ works is done`); 
    //                 setTimeout(()=>{
    //                     console.log(`5️⃣ works is done`);   
    //                     setTimeout(()=>{
    //                         console.log(`6️⃣ works is done`);    
    //                     }, 1000) 
    //                 }, 1000)   
    //             }, 1000)  
    //         }, 1000)   
    //     }, 1000)
    // }, 1000)



    // // **********************************************************************

    // // 👉 // 🤩 Bonus JSON 🤩

    // // **********************************************************************


    // // 👉 JSON.stringify turns a JavaScript object into JSON text and 
    // stores that JSON text in a string, eg:

    // var my_object = { key_1: "some text", key_2: true, key_3: 5 };

    // var object_as_string = JSON.stringify(my_object);  
    // // "{"key_1":"some text","key_2":true,"key_3":5}"  

    // console.log(object_as_string);

    // typeof(object_as_string);  
    // "string" 


    // // 👉 JSON.parse turns a string of JSON text into a JavaScript object, eg:

    // var object_as_string_as_object = JSON.parse(object_as_string);  
    // // {key_1: "some text", key_2: true, key_3: 5} 

    // typeof(object_as_string_as_object);  
    // // "object" 



    // // 7️⃣ AJAX Call using XMLHttprequest 

    // // how to handled with the events and callback 

    // // XMLHttpRequest (XHR) objects are used to interact with servers. 
    // // You can retrieve data from a URL without having to do a full 
    // // page refresh. This enables a Web page to update just part 
    // // of a page without disrupting what the user is doing. 
    // // XMLHttpRequest is used heavily in AJAX programming.

    // const request = new XMLHttpRequest();
    // // we need to call the api or request the api using GET method ki, me jo
    // // url pass kar kr rha hu uska data chaiye 
    // request.open('GET', "https://covid-api.mmediagroup.fr/v1");
    // request.send(); // we need to send the request and its async so we need to 
    // // add the event to load the data adn get it

    // // to get the response 
    // request.addEventListener("load", () => {
    // console.log(this.responseText);
// });