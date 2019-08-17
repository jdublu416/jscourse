// JSON

//   valid json should have double quotes on key and value

document.getElementById('button1').addEventListener('click', loadCustomer);
document.getElementById('button2').addEventListener('click', loadCustomers);

function loadCustomer() {
  const xhr = new XMLHttpRequest();
  xhr.open('GET', 'customer.json', true);
  xhr.onload = function() {
    if (this.status === 200) {
      //   console.log(this.responseText);
      const customer = JSON.parse(this.responseText);

      const output = `
        <ul>
            <li>Name: ${customer.name}</li>
            <li>Phone: ${customer.phone}</li>
            <li>Company: ${customer.company}</li>
            <li>Customer Id: ${customer.id}</li>
        </ul>
        `;
      document.getElementById('customer').innerHTML = output;
    }
  };
  xhr.send();
}

function loadCustomers() {
  const xhr = new XMLHttpRequest();
  xhr.open('GET', 'customers.json', true);
  xhr.onload = function() {
    if (this.status === 200) {
      const customers = JSON.parse(this.responseText);
      //   console.log(this.responseText);
      let output = '';// need to use let here and initialize the variable to an empty variable to receive the data
      customers.map(function(customer) {
        //using += is how you append in a loop so you don't overwrite the data
        output += ` 
        <ul>
            <li>Name: ${customer.name}</li>
            <li>Phone: ${customer.phone}</li>
            <li>Company: ${customer.company}</li>
            <li>Customer Id: ${customer.id}</li>
        </ul>
        `;
      });
      document.getElementById('customers').innerHTML = output;
    }
  };
  xhr.send();
}
