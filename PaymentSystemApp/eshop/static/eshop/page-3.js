const queryString = window.location.search;
const urlParams = new URLSearchParams(queryString);
const id = urlParams.get('id')
const address = urlParams.get('walletAddress')
console.log("id:"+id+"; walletAddress:"+address);
var url = 'http://127.0.0.1:8080/purchase/page1/result/'+id;
console.log("PAGE 3 START");

function handleErrors(response)
{
    if (!response.ok)
      throw Error(response.statusText);
    return response;
}
async function getData(url)
{
  return await fetch(url,
  {
    method: 'GET',
    mode: 'cors',
    headers:
    {
      'Content-type': 'application/json',
    }
  })
  .then(handleErrors)
  .catch(error => console.log(error))
  .then(response => response.json())
  .then(function(response) {return response.order_paid;});
}

var paid = false;
function checkStatus()
{
  getData(url).then(function(response)
  {
    if(response == "not paid yet")
      paid = false;
    else
      paid = true;
  });
  if (paid)
  {
    var r = "The Payment Has Been Received!";
    console.log(r);
    document.getElementById('resultOfPayment').innerHTML = r;
    clearInterval(intervalId);
  }
}
var seconds = 1;
var intervalId = window.setInterval(function()
{
  checkStatus();
  if (paid)
    {
      var r = "The Payment Has Been Received, Nice!";
      console.log(r);
      document.getElementById('resultOfPayment').innerHTML = r;
      clearInterval(intervalId);
    }
  else
    {
      if(seconds >= 60)
        {
          var r = "Your transaction time has exceeded 5 minuttes. Please initiate a purchase from the start!";
          console.log(r);
          document.getElementById('resultOfPayment').innerHTML = r;
          clearInterval(intervalId);
        }
      seconds = seconds + 10;
    }
}, 10000);
