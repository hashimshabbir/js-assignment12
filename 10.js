//1.  write a js program to print all natural numbers from 1 to n. using while loop:
var i = 1;
var n = 10;
while(i<=n){
    console.log(i);
    i++
}

//2.  write a js program to print all natural numbers in reverse(from n to 1).using while loop:
 var i = 10;
 var n = 1;
 while(i>=n){
    console.log(i);
    i--
 }

 //3.  write a js program to print all alphabets from a to z using while loop:
   var a = 97;
   var z = 122;
   while(a<=z){
    var lett = String.fromCharCode(a)
    console.log(lett);
    a++
   }

   //4.   write a js program to print all even  numbers between 1 to 100 using while loop:
   var a = 2;
   while(a<=100){
    console.log(a)
    a+=2
   }

//5. write a js program to print all odd numbers between 1 to 100:
var r = 1;
while(r<100){
  console.log(r)
  r+=2;
}

  //6. Write a js program to find sum of all natural numbers between 1 to n:
    var n = 10;
    var i = 1;
    sum = 0; 
    while(i<=n){
      sum = sum + i;
      i++;
    }
    console.log(sum)

// 7. Write a js program to find sum of all even numbers between 1 to n:
var i = 2;
sum = 0;
while(i<=10){
  if(i%2==0)
  sum = sum + i;
  i += 2;
}
console.log(i)

// 8. Write a js program to find sum of all odd numbers between 1 to n:
 var  n = 1;
 sum = 0;
 while(n<=30){
  if(n%2!==0){
    sum = sum + n;
    n +=2;
  }
 }
 console.log(n)


// if else exersice starting here :
//1 .write a js program to find maximum between two numbers:
var a = 10;
 var b = 20;
 if (a>b){
  console.log(a);
 }
 else{
    console.log(b + 'is maximun number')
 }
 
 //2.write a js program to find maximum between three numbers:
 var s = 1;
 var c = 2;
 var d = 3;
 if(s>c && s>d){
   console.log('maximum number is'+s)
 }
   else if(c>d){
    console.log('maximum number is'+c)
   }
 else{
  console.log('maximum number is'+d)
 }

 // 3. write a js program to check whether number is negative , positive or zero:
     var a = 0;
     if(a>0){
      console.log('number is positive')
     }
     else if(a<0){
      console.log('number is negative')
     }
     else{
      console.log('number is zero')
     }
  
     // 4.write a  js program  to check whether a number is divisible by 5 and 11 or not:
        var  d = 10;
        if (d%5 && d%11){
          console.log('number is divisible by 5 & 11')
        }
        else{
          console.log('number is not divisible by 5 & 11')
        }
   


      // 5. write a js program to check whether a number is even or odd:
        var a = 8;
       if(a % 2 == 0){
        console.log('number is even')
       }
       else{
        console.log('number is odd')
       }

       //6. write a js program to check whether a year is leap or not:
        var a = 2024;
        if(a % 4 == 0){
          console.log('this year is a leap year')
        }
        else{
          console.log('this year is not a leap year')
        }

        //7. write a js program to check whether a chracter is alphabet or not:
        var a = "a"
        if (a>="a"&& a<="z" || a>="A" && a<="Z"){
          console.log("this character is alphabet")
        }
        else{
          console.log("this character is not alphabet")
        }

        //8. write a js program to input any alphabet and check whether is is vowel or constant:
         var a = "a"
         if (a == "a" || a == "e" || a == "i" || a == "o" || a == "u" || a =="A" || a == "E" || a == "I" || a == "O" || a == "U"){
          console.log("alphabets are vowel")
         } 
         else {
          console.log("alphabets are not vowel")
         }


         // 9.write a js program to input any character and check whether it is alphabet , digit or special character:
         var a = "a";
         if (a >="a" && a<="z" ||  a>="A" && a<="Z" ){
          console.log("the character is alphabet")
         }
         else if( a == Number){
          console.log("the charcter is digit")
         }
         else{
          console.log("the character is special")
         }


         // 10. write a js program to check whether a charcter is uppercase or lowercase alphabet:
         var a = "a"
         if (a>="a" && a<="z"){
          console.log("the character is lower case alphabet")
         }
         else if(a>="A" && a<="Z"){
          console.log("the character is upercase alphabet")
         }
         else{
          console.log("a is not a alphbet" + a)
         }
  
         // 11.write a js program to input week number and print week day:

         var weekdays = 3;

         switch(weekdays){
          case 1:
           console.log("sunday");
           break;


          case 2:
           console.log("monday");
           break;


          case 3:
           console.log("tuesday");
           break;


          case 4:
           console.log("wednesday");
           break;


          case 5:
            console.log("thursday");
            break;


            case 6:
              console.log("friday");
              break;

              case 7:
                console.log("saturday");
                break;

              default:
                console.log("input is invalid ");
                break;

         }
     
         //12.write a js program to input month number and print number of days in that month:
             var month = 2;
             switch(month){
              case 1:
                console.log("month has 31 days");
                break;

                case 2:
                  console.log("month has 28 or 29 days");
                  break;

                  case 3:
                      console.log("month has 31 days");
                      break;

                      case 4:
                        console.log("month has 30 days");
                        break;

                        case 5:
                          console.log("month has 31 days");
                          break;

                          case 6:
                            console.log("month has 30 days");
                            break;
                           
                            case 7:
                              console.log("month has 31 days");
                              break;

                              case 8:
                                console.log("month has 31 days");
                                break;

                                case 9:
                                  console.log("month has 30 days");
                                  break;
                                  
                                  case 10:
                                    console.log("month has 31 days")
                                    break;

                                    case 11:
                                      console.log("month has 30 days");
                                      break;

                                      case 12:
                                        console.log("month has 31 days");
                                        break;

                                        default:
                                          console.log("invalid month")
                                            break;
             }

 //13.write a js program to count total number of notes in given amount:
     
 var amount = 1200;
 var notes = 0;
 if (amount>=600){
  notes = notes + Math.floor(amount/600);
  console.log("notes of 600"+ notes);
 }


 //14.write a js program to input angles of triangles and check whether triangle is valid or not:
   var angle1 = 60;
   var angle2 = 60;
   var angle3 = 60;
   if (angle1 + angle2 +angle3 == 180){
    console.log("triangle is valid");
   }
   else{
    console.log("triangle is  not valid");
   }

   //15. Write a js program to input all sides of a triangle and check whether triangle is valid or not.
     var a = 10;
     var b = 20;
     var c = 30;
     if (a+b>c && a+c>b && c+b>a){
      console.log("triagle is valid")
     }
     else{
      console.log("triangle is not valid")
     }
     
     //16 . Write a js program to check whether the triangle is equilateral, isosceles or scalene triangle.

       var angle1 = 60;
       var angle2 = 60;
       var angle3 = 60;
        
       if (angle2+angle3+angle3 == 180){
        console.log("triangle is equilateral");
       }
       else if(angle1+angle2 == 120){
        console.log("triangle is isoceles");
       }
       else{
        console.log("triangle is scalene");
       }

       //17. write a js program to find all roots of a quadratic equation:
  
       var a = 1;
       var b = 5;
       var c = 6;
       
       var d =(b * b) - (4 * a * c);

       if (d > 0){
         var root1 =(-b + Math.sqrt(d)) / (2 * a);
         var root2 =(-b - Math.sqrt(d)) / ( 2 * a);
         console.log("roots are" +root1 +"and"+root2);
       }
       else if (d == 0){
        var root1 = (-b + MATH.sqrt(d)) / (2 * a);
        console.log("root is"+root1)
       }
       else{
        console.log("roots are imaginary")
       }

       //18.write a js program to calculate profit or loss:
         var p = 100;
         var l = 50;
        
         if (p>l){
          var profit = p - l;
          console.log("profit is"+profit);
         }
         else if (l>p){
          var loss = l - p;
          console.log("loss is"+loss);
         }
         else{
          console.log("no profit no loss")
         }

         
 // 19. Write a js program to input marks of five subjects Physics, Chemistry, Biology, Mathematics and Computer. Calculate percentage and grade according to following:
// Percentage >= 90% : Grade A
// Percentage >= 80% : Grade B
// Percentage >= 70% : Grade C
// Percentage >= 60% : Grade D
// Percentage >= 40% : Grade E
// Percentage < 40% : Grade F


    var chemistry = 10;
    var physics = 10;
    var biology = 10;
    var mathematics = 10;
    var computer = 14;

    var percentage = (chemistry+physics+biology+mathematics+computer / 5);

    if(percentage>=90){
      console.log("Grade is A");
    }
    else if(percentage>=80){
      console.log("Grade is B");
    }
    else if (percentage>=70){
      console.log("Grade is C");
    }
    else if (percentage>=60){
      console.log("Grade is D");
    }
    else if(percentage>=40){
      console.log("Grade is E");
    }
    else{
      console.log("Grade is F")
    }
  
    
// 20. Write a js program to input basic salary of an employee and calculate its Gross salary according to following:
 // Basic Salary <= 10000 : HRA = 20%, DA = 80%
 // Basic Salary <= 20000 : HRA = 25%, DA = 90%
 // Basic Salary > 20000 : HRA = 30%, DA = 95% 

 var basic = 10000;
 var hra = 0;
 var da = 0;
 var gross = 0;

 if (basic<=10000){
  hra = (basic * 20) / 100;
  da = (basic * 80) / 100;
 }
 else if (basic<=20000){
  hra = (basic * 25) / 100;
  da = (basic * 90) /100;
 }
 else{
   hra =(basic * 30) / 100;
   da =(basic * 95) / 100;
 }
 gross = basic+hra+da;
 console.log("gross salary is"+gross);



// 21. Write a js program to input electricity unit charges and calculate total electricity bill according to the given condition:
// For first 50 units Rs. 0.50/unit
// For next 100 units Rs. 0.75/unit
// For next 100 units Rs. 1.20/unit
// For unit above 250 Rs. 1.50/unit


 var units_price = 40;
 var consumedunits = 160
 var bill = consumedunits * units_price; 
 var netbill = 0;

 if(consumedunits<=50){
    netbill = bill +(consumedunits * 0.5)
    console.log("netbill="+netbill)
 }
 else if(consumedunits>50 && consumedunits<=150){
  netbill = bill +(consumedunits * 0.75)
  console.log("netbill="+netbill)
 }
 else if(consumedunits>150 && consumedunits<=250){
  netbill = bill +(consumedunits * 1.20)
  console.log("netbill="+netbill)
 }
 else if(consumedunits>250){
  netbill = bill+(consumedunits * 1.50)
  console.log("netbill="+netbill)
 }
else{
  console.log("invalid input")
}