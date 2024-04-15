// Bank Account Management Console Application By Sabbir


class BankAccount{

    static  uniqueAccountNumber=1001;
    constructor(ownerName,balance){
        this.accountNumber= BankAccount.uniqueAccountNumber++;
        this.ownerName=ownerName;
        this.balance=balance;
    }

    // Deposit Amount Method
    deposit(amount){
        this.balance+=amount;
        console.log(`Deposit $${amount}. New Balance: $${this.balance}`);
    }

    // Withdraw Amount Method
    withdraw(amount){
        if (amount<=this.balance) {
            this.balance-=amount;
            console.log(`Withdraw $${amount}. New Balance: $${this.balance}`);
        }else{
            console.log("Insufficient funds");
        }
    }

    // GetBalance Amount Method
    getBalance(){
        console.log(`Current Account Balance =$${this.balance}`);
    }

    //Display Account Informatioin
    displayAccountInfo(){
        console.log(`Account Number: ${this.accountNumber}`);
        console.log(`Owner Name: ${this.ownerName}`);
        console.log(`Balance: $${this.balance}`);
    }

}


const john=new BankAccount("John Doe",700);
const rabbil=new BankAccount("Rabbil Hasan",15000);
const sabbir=new BankAccount("Md Sabbir Mondol",100);


console.log(`Account 1`);
john.displayAccountInfo();
john.deposit(300);
john.withdraw(100);
john.withdraw(1000);
john.getBalance();

console.log(`\n\nAccount 2`);
rabbil.displayAccountInfo();
rabbil.deposit(300);
rabbil.withdraw(100);
rabbil.getBalance();

console.log(`\n\nAccount 3`);
sabbir.displayAccountInfo();
sabbir.deposit(300);
sabbir.withdraw(100);
sabbir.withdraw(1000);
sabbir.getBalance();




 