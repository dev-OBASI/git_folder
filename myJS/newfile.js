const Tips = document.getElementById('tips-percent')
const BillAmount = document.getElementById('bill-amount')
const TipTotal = document.getElementById('tip-value')
const TotalPayment = document.getElementById('total')
const CalculateTotal = document.querySelector('.calculateTotal')

    // let RateValue = Rate.value;
    // let AmountValue = Amount.value;


function calculateTotal() {
    let RateValue = parseFloat(Tips.value);
    let AmountValue = parseFloat(BillAmount.value);
    let myTip = parseFloat(RateValue/100 * AmountValue);
    let myTotal = myTip + AmountValue
    

    TipTotal.textContent = `$${myTip + ".00"}`
    TotalPayment.textContent = `$${myTotal + ".00"}`

    if (!RateValue && !AmountValue) {
        TipTotal.textContent = `$${0 + ".00"}`
        TotalPayment.textContent = `$${0 + ".00"}`
    }
    
}