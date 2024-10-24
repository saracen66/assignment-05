function getInputFieldValue(id) {
    const inputValue = document.getElementById(id).value
    const moneyInput = parseFloat(inputValue)
    return moneyInput
}

// Clear Input Field
function clearInputField(id) {
    const clearInputField = document.getElementById(id)
    clearInputField.value = ''
}