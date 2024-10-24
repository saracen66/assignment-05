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

    // Selecting the modal
    const myModal = document.getElementById('my_modal_1')

    // Getting the Card Title
    const title = document.getElementById('card-1-title').innerText
    
    if (moneyInput > mainBalanceFloat || moneyInput < 1 || Number.isNaN(moneyInput)) {
        alert("Invalid Amount")
    }

    else {

        myModal.showModal();

        // Subtracting Main Balance
        const moneyLeft = mainBalanceFloat - moneyInput
        document.getElementById('main-balance').innerText = moneyLeft

        // Adding to Total Donation
        const totalDonation = donationAmountFloat + moneyInput
        document.getElementById('donation-amount-1').innerText = totalDonation

        // Adding details to Transaction History
        const div = document.createElement('div')
        div.style.border = '1px solid rgb(227, 228, 230)'
        div.style.borderRadius = '10px'
        div.style.padding = '15px'

        // p1
        const p1 = document.createElement('p')
        p1.innerText = `${moneyInput} Tk is donated for ${title}`
        p1.style.fontWeight = 'bold'
        p1.style.fontSize = '1.25rem'
        div.appendChild(p1)

        // p2
        const p2 = document.createElement('p')
        const currentTime = new Date()
        p2.innerText = `Date: ${currentTime.toString()}`
        div.appendChild(p2)


        document.getElementById('history-section').appendChild(div)

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

    // Selecting the modal
    const myModal = document.getElementById('my_modal_1')

    // Getting the Card Title
    const title = document.getElementById('card-2-title').innerText
    
    if (moneyInput > mainBalanceFloat || moneyInput < 1 || Number.isNaN(moneyInput)) {
        alert("Invalid Amount")
    }

    else {

        myModal.showModal();

        // Subtracting Main Balance
        const moneyLeft = mainBalanceFloat - moneyInput
        document.getElementById('main-balance').innerText = moneyLeft

        // Adding to Total Donation
        const totalDonation = donationAmountFloat + moneyInput
        document.getElementById('donation-amount-2').innerText = totalDonation


        // Adding details to Transaction History
        const div = document.createElement('div')
        div.style.border = '1px solid rgb(227, 228, 230)'
        div.style.borderRadius = '10px'
        div.style.padding = '15px'

        // p1
        const p1 = document.createElement('p')
        p1.innerText = `${moneyInput} Tk is donated for ${title}`
        p1.style.fontWeight = 'bold'
        p1.style.fontSize = '1.25rem'
        div.appendChild(p1)

        // p2
        const p2 = document.createElement('p')
        const currentTime = new Date()
        p2.innerText = `Date: ${currentTime.toString()}`
        div.appendChild(p2)


        document.getElementById('history-section').appendChild(div)
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

    // Selecting the modal
    const myModal = document.getElementById('my_modal_1')

    // Getting the Card Title
    const title = document.getElementById('card-3-title').innerText
    
    if (moneyInput > mainBalanceFloat || moneyInput < 1 || Number.isNaN(moneyInput)) {
        alert("Invalid Amount")
    }

    else {

        myModal.showModal();

        // Subtracting Main Balance
        const moneyLeft = mainBalanceFloat - moneyInput
        document.getElementById('main-balance').innerText = moneyLeft

        // Adding to Total Donation
        const totalDonation = donationAmountFloat + moneyInput
        document.getElementById('donation-amount-3').innerText = totalDonation


        // Adding details to Transaction History
        const div = document.createElement('div')
        div.style.border = '1px solid rgb(227, 228, 230)'
        div.style.borderRadius = '10px'
        div.style.padding = '15px'

        // p1
        const p1 = document.createElement('p')
        p1.innerText = `${moneyInput} Tk is donated for ${title}`
        p1.style.fontWeight = 'bold'
        p1.style.fontSize = '1.25rem'
        div.appendChild(p1)

        // p2
        const p2 = document.createElement('p')
        const currentTime = new Date()
        p2.innerText = `Date: ${currentTime.toString()}`
        div.appendChild(p2)


        document.getElementById('history-section').appendChild(div)
    }
})