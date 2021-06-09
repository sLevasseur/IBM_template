function compute()
{
    var principal = document.getElementById("principal").value;
    var rate = document.getElementById("rate").value;
    var years = document.getElementById("years").value;
    var interest = principal * years * rate / 100
    var year = new Date().getFullYear()+parseInt(years)
    //condition to check if the amount of principal is equal or lower to zero, if so an alert is raised
    if(principal.value <= 0){
        alert("Enter a positive number")
        principal.focus()
        return false
    }
    document.getElementById("result").innerHTML="If you deposit "+principal+",\<br\>at an interest rate of "+rate+"%\<br\>You will receive an amount of "+amount+",\<br\>in the year "+year+"\<br\>"
}

function updateRate()
{
    var rateval = document.getElementById("rate").value
    document.getElementById("rate_val").innerText=rateval
}
        