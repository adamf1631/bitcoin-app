fetch('https://api.coindesk.com/v1/bpi/currentprice.json')
.then(res => res.json())
.then(res => {
  let output = `
  <h4>Current Bitcoin Price</h4><br>
  <h5>Last Updated: ${res.time.updated}</h5><br>
  <ul>
    <li><strong>${res.bpi.USD.description}</strong>: ${res.bpi.USD.rate}</li>
    <li><strong>${res.bpi.EUR.description}</strong>: ${res.bpi.EUR.rate}</li>
    <li><strong>${res.bpi.GBP.description}</strong>: ${res.bpi.GBP.rate}</li>
  </ul>
  `;

  document.getElementById('bitcoin').innerHTML = output;
})
.catch(e => console.error(e))


fetch('https://api.coindesk.com/v1/bpi/historical/close.json?for=yesterday')
.then(res => res.json())
.then(res => {

  const date = Object.keys(res.bpi);
  const rate = Object.values(res.bpi);

  const formattedDate = new Date(date);

  let output = `
  <p>
  ${formattedDate}<br>
  <strong>
  Yesterday's Rate:
  <strong>
  <span>
  $${rate}
  </span>
  </p>
  `;

  document.getElementById('yesterday').innerHTML = output;
})
.catch(e => console.error(e))
