function calculate(){
//console.log("calculate"); 
var amount;
var rate;
var years;

amount=parseFloat(document.getElementById("amount").value);
rate=parseFloat(document.getElementById("rate").value);
years=parseFloat(document.getElementById("years").value);


var resultsTable=document.getElementById("results_table");

var myHTML = "";
myHTML += "<table>";
myHTML += "<tr><th>Month</th><th>Interest</th><th>Balance</th></tr>";

for (var i=1; i<=years*12; i++){
    var month = i;
    var interest = amount * ((rate /100) / 12);
    var balance = Math.round((amount + interest) * 100) / 100;
    amount = balance;
    
    myHTML +="<tr><td>" + month + "</td><td>" + interest.toFixed(2) + "</td><td>" + balance + "</td></tr>";
}

resultsTable.innerHTML = myHTML;
}

function reset(){
//console.log("reset");
var resultsTable=document.getElementById("results_table");
resultsTable.innerHTML = "";
document.getElementById("amount").value="";
document.getElementById("rate").value="";
document.getElementById("years").value="";
}