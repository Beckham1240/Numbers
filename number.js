var num1 = document.getElementById("first");
var num2 = document.getElementById("second");
var num3 = document.getElementById("third");
var num4 = document.getElementById("fourth");
var num5 = document.getElementById("fifth");
var num6 = document.getElementById("sixth");
var output = document.getElementById("output");
var greatest;
var least;

//function to find mean or average of all 6 numbers
function mean(){
    var first = parseFloat(num1.value);
    var second = parseFloat(num2.value);
    var third = parseFloat(num3.value);
    var fourth = parseFloat(num4.value);
    var fifth = parseFloat(num5.value);
    var sixth = parseFloat(num6.value);
    var addDivide = (first + second + third + fourth + fifth + sixth) / 6;
    output.innerHTML = "Output: " + addDivide;
    return addDivide;
}
//function to find the largest number out of all of the 6 numbers
function largest(){
    var first = parseFloat(num1.value);
    var second = parseFloat(num2.value);
    var third = parseFloat(num3.value);
    var fourth = parseFloat(num4.value);
    var fifth = parseFloat(num5.value);
    var sixth = parseFloat(num6.value);

    greatest = Math.max(first, second, third, fourth, fifth, sixth);
    output.innerHTML = "Output: " + greatest;
    return greatest;
}
//function to find the smallest number out of all of the 6 numbers
function smallest(){
    var first = parseFloat(num1.value);
    var second = parseFloat(num2.value);
    var third = parseFloat(num3.value);
    var fourth = parseFloat(num4.value);
    var fifth = parseFloat(num5.value);
    var sixth = parseFloat(num6.value);

    least = Math.min(first, second, third, fourth, fifth, sixth);
    output.innerHTML = "Output: " + least;
    return least;
}
//Function to find the range by taking the biggest number and subtract it by the smallest number
function range(){
    smallest();
    largest();
    var range = greatest - least;
    output.innerHTML = range;
    console.log(greatest, least, range);
}
//Function to arrange the 6 numbers from smallest to biggest
function order(){
    var one = parseFloat(num1.value);
    var two = parseFloat(num2.value);
    var three = parseFloat(num3.value);
    var four = parseFloat(num4.value);
    var five = parseFloat(num5.value);
    var six = parseFloat(num6.value);

    var o1 = 0;
    var o2 = 0;
    var o3 = 0;
    var o4 = 0;
    var o5 = 0;
    var o6 = 0;

    o1 = Math.min(one, two, three, four, five, six);
    if(o1 === one){
        one = two;
        two = three;
        three = four;
        four = five;
        five = six;
    }
    else if(o1 === two){
        one = one;
        two = three;
        three = four;
        four = five;
        five = six;
    }
    else if(o1 === three){
        one = one;
        two = two;
        three = four;
        four = five;
        five = six;
    }
    else if(o1 === four){
        one = one;
        two = three;
        three = three;
        four = five;
        five = six;
    }
    else if(o1 === five){
        one = one;
        two = two;
        three = three;
        four = four;
        five = six;
    }

    o2 = Math.min(one, two, three, four, five);
    if(o2 === one){
        one = two;
        two = three;
        three = four;
        four = five;
    }
    else if(o2 === two){
        one = one;
        two = three;
        three = four;
        four = five;
    }
    else if(o2 === three){
        one = one;
        two = two;
        three = four;
        four = five;
    }
    else if(o2 === four){
        one = one;
        two = three;
        three = three;
        four = five;
    }

    o3 = Math.min(one, two, three, four);
    if(o3 === one){
        one = two;
        two = three;
        three = four;
    }
    else if(o3 === two){
        one = one;
        two = three;
        three = four;
    }
    else if(o3 === three){
        one = one;
        two = two;
        three = four;
    }

    o4 = Math.min(one, two, three);
    if(o4 === one){
        one = two;
        two = three;
    }
    else if(o4 === two){
        one = one;
        two = three;
    }

    o5 = Math.min(one, two);
    if(o5 === one){
        one = two;
    }
    
    else{
        o6 = one;
    }

    output.innerHTML = "Output: " + o1 + ", " + o2 + ", " + o3 + ", " + o4 + ", " + o5 + ", " + o6;
} 
//Function to find the value that shows up the most
function mode(){
    var one = parseFloat(num1.value);
    var two = parseFloat(num2.value);
    var three = parseFloat(num3.value);
    var four = parseFloat(num4.value);
    var five = parseFloat(num5.value);
    var six = parseFloat(num6.value);

    var m1 = 0;
    var m2 = 0;
    var m3 = 0;
    var m4 = 0;
    var m5 = 0;
    var m6 = 0;

    if(one === two){
        m1++;
    }
    if(one === three){
        m1++;
    }
    if(one === four){
        m1++;
    }
    if(one === five){
        m1++;
    }
    if(one === six){
        m1++;
    }

    if(two === one){
        m2++;
    }
    if(two === three){
        m2++;
    }
    if(two === four){
        m2++;
    }
    if(two === five){
        m2++;
    }
    if(two === six){
        m2++;
    }

    if(three === one){
        m3++;
    }
    if(three === two){
        m3++;
    }
    if(three === four){
        m3++;
    }
    if(three === five){
        m3++;
    }
    if(three === six){
        m3++;
    }

    if(four === one){
        m4++;
    }
    if(four === two){
        m4++;
    }
    if(four === three){
        m4++;
    }
    if(four === five){
        m4++;
    }
    if(four === six){
        m4++;
    }

    if(five === one){
        m5++;
    }
    if(five === two){
        m5++;
    }
    if(five === four){
        m5++;
    }
    if(five === three){
        m5++;
    }
    if(five === six){
        m5++;
    }

    if(six === one){
        m6++;
    }
    if(six === two){
        m6++;
    }
    if(six === four){
        m6++;
    }
    if(six === five){
        m6++;
    }
    if(six === three){
        m6++;
    }
    
    var most = Math.max(m1, m2, m3, m4, m5, m6);

    if(most === m1){
        output.innerHTML = one;
    }
    else if(most === m2){
        output.innerHTML = two;
    }
    else if(most === m3){
        output.innerHTML = three;
    }
    else if(most === m4){
        output.innerHTML = four;
    }
    else if(most === m5){
        output.innerHTML = five;
    }
    else{
        output.innerHTML = six;
    }
}
//Function to find numbers that are repeated 
function duplicate(){
    var one = parseFloat(num1.value);
    var two = parseFloat(num2.value);
    var three = parseFloat(num3.value);
    var four = parseFloat(num4.value);
    var five = parseFloat(num5.value);
    var six = parseFloat(num6.value);

    var m1 = 0;
    var m2 = 0;
    var m3 = 0;
    var m4 = 0;
    var m5 = 0;
    var m6 = 0;

    if(one === two){
        m1++;
    }
    if(one === three){
        m1++;
    }
    if(one === four){
        m1++;
    }
    if(one === five){
        m1++;
    }
    if(one === six){
        m1++;
    }

    if(two === one){
        m2++;
    }
    if(two === three){
        m2++;
    }
    if(two === four){
        m2++;
    }
    if(two === five){
        m2++;
    }
    if(two === six){
        m2++;
    }

    if(three === one){
        m3++;
    }
    if(three === two){
        m3++;
    }
    if(three === four){
        m3++;
    }
    if(three === five){
        m3++;
    }
    if(three === six){
        m3++;
    }

    if(four === one){
        m4++;
    }
    if(four === two){
        m4++;
    }
    if(four === three){
        m4++;
    }
    if(four === five){
        m4++;
    }
    if(four === six){
        m4++;
    }

    if(five === one){
        m5++;
    }
    if(five === two){
        m5++;
    }
    if(five === four){
        m5++;
    }
    if(five === three){
        m5++;
    }
    if(five === six){
        m5++;
    }

    if(six === one){
        m6++;
    }
    if(six === two){
        m6++;
    }
    if(six === four){
        m6++;
    }
    if(six === five){
        m6++;
    }
    if(six === three){
        m6++;
    }

    if(m1 >= 1){
        output.innerHTML = "Output: " + one;
    }
    if(m2 >= 1){
        output.innerHTML = "Output: " + ", " + two;
    }
    if(m3 >= 1){
        output.innerHTML = ", " + three;
    }
    if(m4 >= 1){
        output.innerHTML = ", " + four;
    }
    if(m5 >= 1){
        output.innerHTML = ", " + five;
    }
    if(m6 >= 1){
        output.innerHTML = ", " + six;
    }
}