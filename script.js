function convert(){
    let value= Number(document.getElementById("value").value);
    let from = document.getElementById("from").value;
    let to =document.getElementById("to").value;

    let result;

    if(from == "km" && to =="miles")
    {
        result = value *0.621371;
    }
    else if (from == "miles" && to == "km")
    {
        result = value * 1.60934;
    }
    else if(from == "c" && to =="f")
    {
        result = (value *9/5)+32;
    }
    else if (from =="f" && to == "c")
    {
        result = (value - 32)*5/9;
    }
    else if (from == "kg" && to == "lb")
    {
        result = value * 2.20462;
    }
    else if(from == "lb" && to == "kg")
    {
        result = value * 0.453592;
    }
    else if(from == to)
    {
        result = value;
    }
    else{
        result= "Invalid conversion";
    }
    document.getElementById("result").innerHTML = "Result: " + result;
}