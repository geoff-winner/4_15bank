var BankAccount = {
    balance: 0,
    withdraw: function(amount) {
    this.balance = this.balance - amount;
    return this.balance;
    },
    deposit: function(amount) {
    this.balance = this.balance + amount;
    return this.balance;
    }
};


$(document).ready(function() {
    var myBankAccount = Object.create(BankAccount);
    $('form#create').submit(function(event) {
        var name = $('input#name').val();
        var amount = parseInt($('input#inideposit').val());
        myBankAccount.deposit(amount);
        $("#create").hide();
        $('.withdraw').show();
        $('.name').text(name);
        $('.inideposit').text(myBankAccount.balance);


        event.preventDefault();


    });
    $('form#withdep').submit(function(event){
        event.preventDefault();


        var depamount = parseInt($('#deposit').val());
        if (!depamount) {
            depamount = 0;
        };
        myBankAccount.deposit(depamount);
        $('.inideposit').text(myBankAccount.balance);

        var withamount = parseInt($('#withdrawal').val());
            if (!withamount) {
                withamount = 0;
            };
        myBankAccount.withdraw(withamount);
        $('.inideposit').text(myBankAccount.balance);


    });
});
