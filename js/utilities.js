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