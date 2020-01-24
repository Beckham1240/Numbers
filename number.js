var num1 = document.getElementById("first");
var num2 = document.getElementById("second");
var num3 = document.getElementById("third");
var num4 = document.getElementById("fourth");
var num5 = document.getElementById("fifth");
var num6 = document.getElementById("sixth");
var output = document.getElementById("output");
var greatest;
var least;

//function to find mean
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
//function to find largest number
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

function range(){
    smallest();
    largest();
    var range = greatest - least;
    output.innerHTML = range;
    console.log(greatest, least, range);
}

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

    //Unique = how many different numbers there are (2,2,3,4,4,5) ans = 2,3,4,5
    //Duplicate = what numbers are being repeated
    //Mode = what number is being repeated the most

}   