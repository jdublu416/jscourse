//Storage Controller

//Item Controller
const ItemCtrl = (function() {
  //Item constructor
  const Item = function(id, name, calories) {
    this.id = id;
    this.name = name;
    this.calories = calories;
  };
  //Data structure (state)
  const data = {
    items: [],
    currentItem: null,
    totalCalories: 0
  };
  return {
    getItems: function() {
      return data.items;
    },
    addItem: function(name, calories) {
      let ID;
      //Create id
      if (data.items.length > 0) {
        ID = data.items[data.items.length - 1].id + 1;
      } else {
        ID = 0;
      }
      //Calories to number
      calories = parseInt(calories);
      // Create new Item
      newItem = new Item(ID, name, calories);
      //add to items array
      data.items.push(newItem);
      return newItem;
    },
    getTotalCalories: function() {
      let total = 0;
      data.items.forEach(item => (total += item.calories));
      //Set total cal in data stx
      data.totalCalories = total;
      return data.totalCalories;
    },
    logData: function() {
      return data;
    }
  };
})();

//UI Controller
const UICtrl = (function() {
  const UISelectors = {
    itemList: '#item-list',
    addBtn: '.add-btn',
    itemNameInput: '#item-name',
    itemCaloriesInput: '#item-calories',
    totalCalories: '.total-calories'
  };
  //Public Methods
  return {
    populateItemList: function(items) {
      let html = '';
      items.forEach(function(item) {
        html += `<li id="item-${item.id}" class="collection-item">
            <strong>${item.name} : </strong> <em>${item.calories} calories</em>
            <a href="#" class="secondary-content"><i class="edit-item fa fa-pencil"></i></a>
        </li>`;
      });
      //Insert list items to the UI
      document.querySelector(UISelectors.itemList).innerHTML = html;
    },
    getItemInput: function() {
      return {
        name: document.querySelector(UISelectors.itemNameInput).value,
        calories: document.querySelector(UISelectors.itemCaloriesInput).value
      };
    },
    addListItem: function(item) {
      //reveal ul
      document.querySelector(UISelectors.itemList).style.display = 'block';
      //Create li element, class, id and innerHTML: then output to UI
      const li = document.createElement('li');
      li.className = 'collection-item';
      li.id = `item-${item.id}`;
      li.innerHTML = `<strong>${item.name} : </strong> <em>${item.calories} calories</em>
        <a href="#" class="secondary-content"><i class="edit-item fa fa-pencil"></i></a>`;
      document
        .querySelector(UISelectors.itemList)
        .insertAdjacentElement('beforeend', li);
    },
    clearInput: function() {
      document.querySelector(UISelectors.itemNameInput).value = '';
      document.querySelector(UISelectors.itemCaloriesInput).value = '';
    },
    hideList: function() {
      document.querySelector(UISelectors.itemList).style.display = 'none';
    },
    showTotalCalories: function(totalCalories) {
      document.querySelector(
        UISelectors.totalCalories
      ).textContent = totalCalories;
    },
    getSelectors: function() {
      return UISelectors;
    }
  };
})();

//App Controller
const App = (function(ItemCtrl, UICtrl) {
  //Load Event Listeners
  const loadEventListeners = function() {
    //give access to the private method of UICtrl
    const UISelectors = UICtrl.getSelectors();
    //Add item event
    document
      .querySelector(UISelectors.addBtn)
      .addEventListener('click', itemAddSubmit);
  };
  //Add Item event
  const itemAddSubmit = function(e) {
    e.preventDefault();
    //get form input from UICtrl
    const input = UICtrl.getItemInput();
    //check for name and calorie input (validation)
    if (input.name !== '' && input.calories !== '') {
      //Add Item
      const newItem = ItemCtrl.addItem(input.name, input.calories);
      //Add item to UI list
      UICtrl.addListItem(newItem);
      //Get total calories
      const totalCalories = ItemCtrl.getTotalCalories();
      UICtrl.showTotalCalories(totalCalories);
      //Clear fields
      UICtrl.clearInput();
    }
  };

  //Public methods
  return {
    init: function() {
      //Fetch Items from data stx
      const items = ItemCtrl.getItems();
      //Check if items
      if (items.length === 0) {
        UICtrl.hideList();
      } else {
        //Populate list with items
        UICtrl.populateItemList(items);
        const totalCalories = ItemCtrl.getTotalCalories();
        UICtrl.showTotalCalories(totalCalories);
      }

      //Load event listeners
      loadEventListeners();
    }
  };
})(ItemCtrl, UICtrl);

//Initialize App
App.init();
