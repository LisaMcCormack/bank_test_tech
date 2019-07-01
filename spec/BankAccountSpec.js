describe ('A bank account:', function() {

    beforeEach(function(){
        bankAccount = new BankAccount();
    });

    it ('starts with a balance of zero', function() {
        expect(bankAccount.balance()).toEqual(0);
    });

    it ('allows the customer to make deposits', function() {
      bankAccount.makeDeposit(1000);
      expect(bankAccount.balance()).toEqual(1000);
    });

    it ('allows the customer to make withdrawals', function() {
      bankAccount.makeDeposit(1000);
      bankAccount.makeWithdrawal(500);
      expect(bankAccount.balance()).toEqual(500);
    });
});
