const orderButtons = document.querySelectorAll('.button button');
const receiptDiv = document.querySelector('.receipt');

orderButtons.forEach(button => {
    button.addEventListener('click', function () {
        const itemName = this.closest('.card').querySelector('.name-order').textContent;

        // Create a new div to represent the order item
        const orderItem = document.createElement('div');
        orderItem.className = 'order-item';

        // Add the item name
        const itemNameDiv = document.createElement('span');
        itemNameDiv.className = 'item-name';
        itemNameDiv.textContent = itemName;

        // Create the quantity selector
        const quantityInput = document.createElement('input');
        quantityInput.className = 'quantity-input';
        quantityInput.type = 'number';
        quantityInput.value = 1;
        quantityInput.min = 1;

        // Create the remove button
        const removeButton = document.createElement('button');
        removeButton.className = 'remove-button';
        removeButton.textContent = 'Remove';

        // Append the item name, quantity input, and remove button to the order item
        orderItem.appendChild(itemNameDiv);
        orderItem.appendChild(quantityInput);
        orderItem.appendChild(removeButton);

        // Append the order item to the receipt div
        receiptDiv.appendChild(orderItem);

        // Add event listener to the remove button
        removeButton.addEventListener('click', function () {
            orderItem.remove();  // Remove the order item from the receipt
        });
    });
});
