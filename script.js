
function deposit(){
    let depositValue = document.getElementById("deposit-value");
    let depositOutput = document.getElementById("deposit-output");
    let balanceOutput = document.getElementById("balance-output");


    balanceOutput.innerText = parseFloat(balanceOutput.innerText) + parseFloat(depositValue.value);
    ;
    depositOutput.innerText = parseFloat(depositOutput.innerText) + parseFloat(depositValue.value);

    depositValue.value = "";
    
}

function withdraw() {
    let withdrawValue = document.getElementById("withdraw-value");
    let withdrawOutput = document.getElementById("withdraw-output");
    let balanceOutput = document.getElementById("balance-output");
    

    withdrawOutput.innerText = parseFloat(withdrawOutput.innerText) + parseFloat(withdrawValue.value);

    balanceOutput.innerText = parseFloat(balanceOutput.innerText) -  parseFloat(withdrawValue.value); 

    withdrawValue.value = "";
}



function addMoney(currentAmount, newAmount){
    return parseFloat(currentAmount) + parseFloat(newAmoun)t;
}

function getMoney(currentAmount, newAmount) {
    return parseFloat(currentAmount) - parseFloat(newAmount);
}

function deposit() {
    const totalBalance = addMoney(depositOutput.innerText, depositValue.value);
    depositOutput.innerText = totalBalance;
    balanceOutput.innerText = totalBalance;

    depositValue.value = "";
}

function withdraw() {
    const totalWithdraw = getMoney(withdrawOutput.innerText, withdrawValue);
    withdrawOutput.innerText = totalWithdraw;

    const totalBalance = getMoney(balanceOutput.innerText, withdrawValue.value);
    balanceOutput.innerText = totalBalance;

    withdrawValue.value = "";
}

