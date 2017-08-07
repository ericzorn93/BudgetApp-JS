/* Coded by Eric Zorn */


//First Module
var budgetController = (function () {

    var x = 23;

    var add = function (a) {
        return x + a;
    };

    return {
        publicTest: function (b) {
            return add(b);
        }
    }

})();





//Second Module
var UIController = (function () {
    // Some code
})();





//Third Module
var controller = (function (budgetCtrl, UICtrl) {

    var z = budgetCtrl.publicTest(5);

    return {
        anotherPublic: function () {
            console.log(z);
        }
    };

})(budgetController, UIController);