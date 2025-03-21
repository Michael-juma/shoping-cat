document.addEventListener("DOMContentLoaded", () => {
    window.cart = []; 
  });
  
  function addToCart(name, price) {
    let existing = cart.find(item => item.name === name);
  
    if (existing) {
      existing.quantity += 1;
      existing.total = existing.quantity * existing.price;
    } else {
      cart.push({ name, price, quantity: 1, total: price });
    }
    renderCart();
  }
  
  function removeItem(index) {
    cart.splice(index, 1);
    renderCart();
  }
function renderCart() {
    const table = document.getElementById("cart");

    table.innerHTML = `
      <tr>
        <th>#</th>
        <th>Item</th>
        <th>Price</th>
        <th>Quantity</th>
        <th>Total</th>
        <th>Action</th>
      </tr>
    `;
    cart.forEach((item, index) => {
        const row = document.createElement("tr");
        row.innerHTML = `
          <td>${index + 1}</td>
          <td>${item.name}</td>
          <td>ksh${item.price.toFixed(2)}</td>
          <td>${item.quantity}</td>
          <td>ksh${item.total.toFixed(2)}</td>
          <td><button onclick="removeItem(${index})">Remove</button></td>
        `;
        table.appendChild(row);
      });
    }
  
