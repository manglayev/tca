console.log("INDEX START");
function handleErrors(response)
{
    if (!response.ok)
    {
        throw Error(response.statusText);
    }
    return response;
}

async function postData(url, data)
{
  return await fetch(url,
  {
    method: 'POST',
    mode: 'cors',
    headers:
    {
      'Content-type': 'application/json',
    },
    body: JSON.stringify(data),
  })
  .then(handleErrors)
  .catch(error => console.log(error))
  .then(response => response.json())
  .then(function(data) {return data;});
  //.then(data => console.log('id:', data.id, '; address:', data.address));
}

function submitForm()
{
  var url = 'http://127.0.0.1:8080/purchase/page1/result/';

  var today = new Date();
  var date = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate();
  var time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
  var dateTime = date+'T'+time+'Z';

  var data =
  {
      'order_first_name': $("#firstName").val(),
      'order_last_name': $("#lastName").val(),
      'order_email': $("#email").val(),
      'order_wallet_address': $("#walletAddress").val(),
      'order_street_address': $("#streetAddress1").val(),
      'order_price': '8800',
      'order_paid': 'not paid yet',
      'order_completed': 'incomplete',
      'order_start': dateTime,
      'wallet_ballance': '0'
  };
  postData(url, data).then(function(response)
  {
    //console.log("after id: "+response.id+"; address: "+response.address);
    window.location = '/eshop/page3?id='+response.id+'&walletAddress='+response.address;
  });
  //document.getElementById("detailsForm").submit();
}
