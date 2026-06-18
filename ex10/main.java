public class Main {

    public static void main(String[] args) {

        SavingsAccount sa =
                new SavingsAccount("SA101",
                                   "Anurag Singh",
                                   10000);

        CurrentAccount ca =
                new CurrentAccount("CA201",
                                   "Rahul Kumar",
                                   15000);

        sa.deposit(2000);
        ca.deposit(3000);

        System.out.println("Savings Account Details");
        sa.displayDetails();
        System.out.println("Interest: " +
                           sa.calculateInterest());

        System.out.println();

        System.out.println("Current Account Details");
        ca.displayDetails();
        System.out.println("Interest: " +
                           ca.calculateInterest());
    }
}