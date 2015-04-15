var BankAccount = {
    balance: 0,
    withdraw: function(amount) {
    this.balance = this.balance - amount;
    },
    deposit: function(amount) {
    this.balance = this.balance + amount;
    }
};


$(document).ready(function() {
    $('form#bank').submit(function() {
        var name('input#name').val();
        var amount('input#amount').val();
        var balance = BankAccount(amount);
        


    });
});
