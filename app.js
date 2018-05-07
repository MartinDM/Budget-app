/* Add event handler

Get input values
Add new items to structure
Calculate budget
Update UI

*/

var budgetController = ( function(){

    
    return {

    }

}());


// Creating separation. Two controlers create entirely separate concerns of Data and UI
var UIController = (function(){

    var domEls = { 
        type: document.querySelector('.add__type'),
        description: document.querySelector('.add__description'),
        amount: document.querySelector('.add__value')
    } 

    return { 
        // Has access to private vars
        getInput: function(){ 
            return { 
                type: domEls.type.value,
                amount: domEls.amount.value,
                decription: domEls.description.value,
          }
        }
    }

})();


// Connects the other two modules, can use the above modules
var controller = (function(budgetCtrl, UICtrl){

    var ctrlAddItem = function(){

        // get field value.
        // Calls method returned from other controller
        var input = UICtrl.getInput() 
        console.log(input)
       
       // add item to budget controller
    
    
        // add item to ui
    
        // calculate budget
    
        //update ui with budget

    }
 
    document.querySelector('.add__btn').addEventListener('click' , ctrlAddItem );

    document.addEventListener('keypress', function(e){ 
        if(e.key === "Enter"){
            ctrlAddItem();
        }
    })

})(budgetController, UIController);



