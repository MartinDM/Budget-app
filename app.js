/* Add event handler

Get input values
Add new items to structure
Calculate budget
Update UI

*/

var budgetController = ( function(){

    var Expense = function(id, description, value){
        this.id = id
        this.description = description,
        this.value = value
    };

    var Income = function(id, description, value){
        this.id = id
        this.description = description,
        this.value = value
    };

    var data = {
        allItems: {
            exp: [],
            inc: []
        },
        totals: {
            exp: 0,
            inc: 0
        }
    }

    return { 
        addItem: function(type, desc, value){

            var newItem;

            // Create new ID
            ID = data.allItems[type][data.allItems[type].length - 1].id + 1;

            // Create new objects from our constructors
            if ( type === 'exp' ) {
                newItem = new Expense(ID, desc, value);
            } else {
                newItem = new Income(ID, desc, value);
            }

            // Push it to the internal data store
            data.allitems[type].push(newItem);

            // Return new element
            return {
                newItem
            } 
        }
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
                type: domEls.type.value, // 'exp' or 'inc'
                amount: domEls.amount.value,
                decription: domEls.description.value
            }
        },

        getDOMEls: function(){
            return domEls
        }
    }

})();

// Connects the other two modules, can use the above modules
var controller = (function(budgetCtrl, UICtrl){ 

    var setupEventListeners = function(){ 
        document.querySelector('.add__btn').addEventListener('click' , ctrlAddItem );
        document.addEventListener('keypress', function(e){
            console.log(e)
            if(e.charCode === 13) {
                ctrlAddItem();
            }
        });
    };
    
    var ctrlAddItem = function(){

        // get field value.
        // Calls method returned from other controller
        var input = UICtrl.getInput() 
       
        // add item to budget controller 
        budgetController.addItem(input.type, input.description, input.value)

        // add item to ui
        
        // calculate budget
    
        //update ui with budget

    };

    return {
        init: function(){
            console.log('app started');
            setupEventListeners();
        }
    }

})(budgetController, UIController);

controller.init();