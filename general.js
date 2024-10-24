// For Card 1
document.getElementById('donate-btn-1').addEventListener('click', function() {

    // Getting Money Input
    const moneyInput = getInputFieldValue('input-field-1')
    clearInputField('input-field-1')
    

    // Getting Main Balance
    const mainBalance = document.getElementById('main-balance').innerText
    const mainBalanceFloat = parseFloat(mainBalance)

    // Getting Value of Total Donation
    const donationAmount = document.getElementById('donation-amount-1').innerText
    const donationAmountFloat = parseFloat(donationAmount)
    
    if (moneyInput > mainBalanceFloat || moneyInput < 1) {
        alert("Invalid Amount")
    }

    else {

        // Subtracting Main Balance
        const moneyLeft = mainBalanceFloat - moneyInput
        document.getElementById('main-balance').innerText = moneyLeft

        // Adding to Total Donation
        const totalDonation = donationAmountFloat + moneyInput
        document.getElementById('donation-amount-1').innerText = totalDonation
    }
})

// For Card 2
document.getElementById('donate-btn-2').addEventListener('click', function() {

    // Getting Money Input
    const moneyInput = getInputFieldValue('input-field-2')
    clearInputField('input-field-2')
    

    // Getting Main Balance
    const mainBalance = document.getElementById('main-balance').innerText
    const mainBalanceFloat = parseFloat(mainBalance)

    // Getting Value of Total Donation
    const donationAmount = document.getElementById('donation-amount-2').innerText
    const donationAmountFloat = parseFloat(donationAmount)
    
    if (moneyInput > mainBalanceFloat || moneyInput < 1) {
        alert("Invalid Amount")
    }

    else {

        // Subtracting Main Balance
        const moneyLeft = mainBalanceFloat - moneyInput
        document.getElementById('main-balance').innerText = moneyLeft

        // Adding to Total Donation
        const totalDonation = donationAmountFloat + moneyInput
        document.getElementById('donation-amount-2').innerText = totalDonation
    }
})

// For Card 3
document.getElementById('donate-btn-3').addEventListener('click', function() {

    // Getting Money Input
    const moneyInput = getInputFieldValue('input-field-3')
    clearInputField('input-field-3')
    

    // Getting Main Balance
    const mainBalance = document.getElementById('main-balance').innerText
    const mainBalanceFloat = parseFloat(mainBalance)

    // Getting Value of Total Donation
    const donationAmount = document.getElementById('donation-amount-3').innerText
    const donationAmountFloat = parseFloat(donationAmount)
    
    if (moneyInput > mainBalanceFloat || moneyInput < 1) {
        alert("Invalid Amount")
    }

    else {

        // Subtracting Main Balance
        const moneyLeft = mainBalanceFloat - moneyInput
        document.getElementById('main-balance').innerText = moneyLeft

        // Adding to Total Donation
        const totalDonation = donationAmountFloat + moneyInput
        document.getElementById('donation-amount-3').innerText = totalDonation
    }
})