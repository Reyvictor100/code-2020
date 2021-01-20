let shoppingList = ['bread', 'milk', 'pizza', 'coffee', 'tortillas', 'crackers', 'soda']

function secondQuestion ( message = prompt('Would you like a list of the available items')) {
if(message === 'yes') {
    message = alert(`Here are the options ${shoppingList.join(', ')}`)
} else {
   message = alert('ok have a nice day');
}
}

secondQuestion();