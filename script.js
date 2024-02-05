document.getElementById('purchase').addEventListener('submit', e => {
    e.preventDefault();
    savePurchase();
});

function savePurchase() {
    var purchase = {
        name: document.getElementById('name').value,
        price: document.getElementById('price').value
    }
    localStorage.setItem('purchase', JSON.stringify(purchase));
    console.log('Purchase saved');
}