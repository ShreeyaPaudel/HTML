// const product_name = document.getElementById("name");
// const product_code = document.getElementById("code");
// const product_quantity = document.getElementById("quantity");
// const product_type = document.getElementById("type");
// const isAvailable = document.getElementById("yes");
// const notAvailable= document.getElementById("no");
// const submitBtn = document.getElementById("btn");

// // create
// // update 
// // edit 
// // delete 
// // validation pani
document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('productForm');
    const productTable = document.getElementById('productTable').querySelector('tbody');
    let editIndex = null;

    // Add or update product
    form.addEventListener('submit', (e) => {
        e.preventDefault();

        const name = document.getElementById('name').value;
        const code = document.getElementById('code').value;
        const quantity = document.getElementById('quantity').value;
        const type = document.getElementById('type').value;
        const availability = document.querySelector('input[name="availability"]:checked').value;

        if (editIndex === null) {
            addProduct(name, code, quantity, type, availability);
        } else {
            updateProduct(name, code, quantity, type, availability);
        }

        form.reset();
    });

    // Add new product
    function addProduct(name, code, quantity, type, availability) {
        const row = document.createElement('tr');
        row.innerHTML = `
            <td>${productTable.rows.length + 1}</td>
            <td>${name}</td>
            <td>${code}</td>
            <td>${quantity}</td>
            <td>${type}</td>
            <td>${availability}</td>
            <td>
                <button class="action-btn edit-btn">Edit</button>
                <button class="action-btn delete-btn">Delete</button>
            </td>
        `;

        // Attach event listeners to actions
        row.querySelector('.edit-btn').addEventListener('click', () => editProduct(row));
        row.querySelector('.delete-btn').addEventListener('click', () => deleteProduct(row));

        productTable.appendChild(row);
    }

    // Edit product
    function editProduct(row) {
        editIndex = Array.from(productTable.children).indexOf(row);

        document.getElementById('name').value = row.children[1].textContent;
        document.getElementById('code').value = row.children[2].textContent;
        document.getElementById('quantity').value = row.children[3].textContent;
        document.getElementById('type').value = row.children[4].textContent;
        document.querySelector(input[name="availability"][value="${row.children[5].textContent}"]).checked = true;
    }

    // Update product
    function updateProduct(name, code, quantity, type, availability) {
        const row = productTable.children[editIndex];
        row.children[1].textContent = name;
        row.children[2].textContent = code;
        row.children[3].textContent = quantity;
        row.children[4].textContent = type;
        row.children[5].textContent = availability;

        editIndex = null;
    }

    // Delete product
    function deleteProduct(row) {
        row.remove();
        updateRowNumbers();
    }

    // Update row numbers after deletion
    function updateRowNumbers() {
        Array.from(productTable.children).forEach((row, index) => {
            row.children[0].textContent = index + 1;
    });
}
});