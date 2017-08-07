/* Coded by Eric Zorn */


//BUDGET CONTROLLER
var budgetController = (function () {
    //Some Code
})();





//UI CONTROLLER
var UIController = (function () {

    return {
        getInput: function () {
            // noinspection JSAnnotator
            return {
                type : document.querySelector(".add__type").value, // Will be either inc or exp
                description : document.querySelector(".add__description").value,
                value : document.querySelector(".add__value").value
            };
        }
    };

})();





//GLOBAL APP CONTROLLER
var controller = (function (budgetCtrl, UICtrl) {

    var ctrlAddItem = function () {
        // 1. Get the field input data

        // 2. Add the item to the budget controller

        // 3. Add the new item to the UI

        // 4. Calculate the budget

        // 5. Display the budget on the UI
        console.log("It works!");
    };

    //Click Event Listener
    document.querySelector('.add__btn').addEventListener('click', ctrlAddItem);

    //Return/Enter Key Press
    document.addEventListener('keypress', function (event) {

        if (event.keyCode === 13 || event.which === 13) {
            ctrlAddItem();
        }

    });

})(budgetController, UIController);