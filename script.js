let productId = 1;

function addProduct() {
  const productName = document.getElementById('productName').value;
  const productPrice = document.getElementById('productPrice').value;
  const productCategory = document.getElementById('productCategory').value;
  const productDescription = document.getElementById('productDescription').value;

  const productTableBody = document.getElementById('productTableBody');

  const newRow = document.createElement('tr');
  newRow.innerHTML = `
    <td>${productId}</td>
    <td>${productName}</td>
    <td>${productPrice}</td>
    <td>${productCategory}</td>
    <td>${productDescription}</td>
    <td><button onclick="deleteProduct(this)">Delete</button></td>
    <td><button onclick="updateProduct(this)">Update</button></td>
  `;
  newRow.classList.add(productId % 2 === 0 ? 'even-row' : 'odd-row');
  productTableBody.appendChild(newRow);
  productId++;
}

function deleteProduct(button) {
  const row = button.parentNode.parentNode;
  row.parentNode.removeChild(row);
}
