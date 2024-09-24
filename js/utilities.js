function getInputFieldValue(id){
    const donateMoney = document.getElementById(id).value;
    const donateMoneyNumber= parseFloat(donateMoney)
    return donateMoneyNumber;
}

function getTextValueById(id)
{
    const TextValue = document.getElementById(id).innerText;
    const TextValueNumber = parseFloat(TextValue);
    return TextValueNumber;
}

function showElementsById(id){
    document.getElementById('show-transaction-history').classList.add('hidden');
    document.getElementById('show-donation').classList.add('hidden');
    document.getElementById(id).classList.remove('hidden');
}

function showPopUpById(id){
  document.getElementById(id)
}