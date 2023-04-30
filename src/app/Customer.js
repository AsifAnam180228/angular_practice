/*class Customer{
 private firstName: string;
 private lastName: string;
 constructor(theFirst: string, theLast: string) {
   this.firstName = theFirst;
   this.lastName = theLast;;
 }
}

let myCustomer = new Customer("Asif", "Anam");

console.log(myCustomer)

*/
var Customer = /** @class */ (function () {
    function Customer(theFirst, theLast) {
        this.firstName = theFirst;
        this.lastName = theLast;
    }
    return Customer;
}());
var myCustomer = new Customer("Alan", "Smith");
console.log(myCustomer.firstName);
console.log(myCustomer.lastName);
