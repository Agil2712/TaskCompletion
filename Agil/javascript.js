function selectOption(option) {
    let options = document.querySelectorAll('.option');

    options.forEach((opt, index) => {
        if (index + 1 === option) {
            opt.classList.add('expanded');
            opt.querySelector('input[type="radio"]').checked = true; 
        } else {
            opt.classList.remove('expanded');
        }
    });  
    calculateTotal();
}

function calculateTotal() {
    let total = 0;
    const selectedOption = document.querySelector('input[name="bundle"]:checked');

    if (selectedOption) {
        total = parseFloat(selectedOption.value);
    }

    document.getElementById('total').innerText = total.toFixed(2); 
}