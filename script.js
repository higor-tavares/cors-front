document.getElementById('purchase').addEventListener('submit', e => {
    e.preventDefault();
    savePurchase();
});

function savePurchase() {
    var journalEntry = {
        description: getField('description'),
        type: getField('type'),
        username: getField('username'),
        amount: getField('amountInCents'),
    }
    //this will result on CORS error because the server does not return allow origin header
    fetch('http://localhost:5000', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(journalEntry)
    })
}

const getField = (fieldName) => document.getElementById(fieldName).value;