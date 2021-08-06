/**
 * index.js
 * - All our useful JS goes here, awesome!
 */

 console.log("JavaScript is amazing!");
 var today = new Date();
 var date = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate();
 var time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
 var dateTime = date+' '+time;
 document.getElementById("date").innerHTML = dateTime;