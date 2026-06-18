class SavingsAccount extends BankAccount {

    public SavingsAccount(String accountNumber,
                          String accountHolderName,
                          double balance) {
        super(accountNumber, accountHolderName, balance);
    }

    @Override
    public double calculateInterest() {
        return balance * 0.05;
    }
}