//***************************** */Storage Controller **************************************
//*****************************************************************************************
const StorageCtrl = (function() {
  return {
    storeItem: function(item) {
      let items;
      //Check to see if items is empty(create empty array,
      //push new item into array, then set: have to chg object to string for ls )
      if (localStorage.getItem('items') === null) {
        items = [];
        items.push(item);
        localStorage.setItem('items', JSON.stringify(items));
      } else {
        //if items are stored need to parse them to push item into array,
        //then stringify for storage with setItem
        items = JSON.parse(localStorage.getItem('items'));
        items.push(item);
        localStorage.setItem('items', JSON.stringify(items));
      }
    },
    getItemsFromStorage: function() {
      let items;
      if (localStorage.getItem('items') === null) {
        items = [];
      } else {
        items = JSON.parse(localStorage.getItem('items'));
        return items;
      }
    },
    updateItemStorage: function(updatedItem) {
      let items = JSON.parse(localStorage.getItem('items'));
      items.forEach((item, index) => {
        if (updatedItem.id === item.id) {
            items.splice(index, 1, updatedItem);
        }
      });
      localStorage.setItem('items', JSON.stringify(items));
    },
    deleteItemFromStorage: function(id) {
        let items = JSON.parse(localStorage.getItem('items'));
        items.forEach((item, index) => {
          if (id === item.id) {
              items.splice(index, 1);
          }
        });
        localStorage.setItem('items', JSON.stringify(items));
    },
    clearItemsFromStorage: function(){
        localStorage.removeItem('items');
    }
  };
})();

//******************************* Item Controller *****************************************
//****************************************************************************************//

const ItemCtrl = (function() {
  //Item constructor
  const Item = function(id, name, calories) {
    this.id = id;
    this.name = name;
    this.calories = calories;
  };
  //Data structure (state)
  const data = {
    items: StorageCtrl.getItemsFromStorage(),
    currentItem: null,
    totalCalories: 0
  };
  return {
    getItems: function() {
        
        if(data.items === undefined){
            data.items = []
        }
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
    getItemById: function(id) {
      let found = null;
      data.items.forEach(item => {
        if (item.id === id) {
          found = item;
        }
      });
      return found;
    },
    updateItem: function(name, calories) {
      //calories to number
      calories = parseInt(calories);
      let found = null;
      data.items.forEach(item => {
        if (item.id === data.currentItem.id) {
          item.name = name;
          item.calories = calories;
          found = item;
        }
      });
      return found;
    },
    deleteItem: function(id) {
      const ids = data.items.map(item => {
        return item.id;
      });
      //Get index
      const index = ids.indexOf(id);
      data.items.splice(index, 1);
    },
    clearAllItems: function() {
      data.items = [];
    },
    getTotalCalories: function() {
      let total = 0;
      data.items.forEach(item => (total += item.calories));
      //Set total cal in data stx
      data.totalCalories = total;
      return data.totalCalories;
    },
    setCurrentItem: function(item) {
      data.currentItem = item;
    },
    getCurrentItem: function() {
      return data.currentItem;
    },
    logData: function() {
      return data;
    }
  };
})();

//**************************************** */UI Controller **********************************
//*******************************************************************************************

const UICtrl = (function() {
  const UISelectors = {
    itemList: '#item-list',
    listItems: '#item-list li',
    addBtn: '.add-btn',
    updateBtn: '.update-btn',
    deleteBtn: '.delete-btn',
    backBtn: '.back-btn',
    clearBtn: '.clear-btn',
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
    addItemToForm: function() {
      document.querySelector(
        UISelectors.itemNameInput
      ).value = ItemCtrl.getCurrentItem().name;
      document.querySelector(
        UISelectors.itemCaloriesInput
      ).value = ItemCtrl.getCurrentItem().calories;
      UICtrl.showEditState();
    },
    updateListItem: function(item) {
      let listItems = document.querySelectorAll(UISelectors.listItems);
      //convert nodeList into array
      listItemArr = Array.from(listItems);
      listItemArr.forEach(listItem => {
        const itemID = listItem.getAttribute('id');
        if (itemID === `item-${item.id}`) {
          document.querySelector(
            `#${itemID}`
          ).innerHTML = `<strong>${item.name} : </strong> <em>${item.calories} calories</em>
                <a href="#" class="secondary-content"><i class="edit-item fa fa-pencil"></i></a>`;
        }
      });
    },
    deleteListItem: function(currentId) {
      const itemID = `#item-${currentId}`;
      const item = document.querySelector(itemID);
      item.remove();
    },
    removeItems: function() {
      let listItems = document.querySelectorAll(UISelectors.listItems);
      listItemArr = Array.from(listItems);
      listItemArr.forEach(listItem => {
        listItem.remove();
      });
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
    clearEditState: function() {
      UICtrl.clearInput();
      document.querySelector(UISelectors.updateBtn).style.display = 'none';
      document.querySelector(UISelectors.deleteBtn).style.display = 'none';
      document.querySelector(UISelectors.backBtn).style.display = 'none';
      document.querySelector(UISelectors.addBtn).style.display = 'inline';
    },
    showEditState: function() {
      document.querySelector(UISelectors.updateBtn).style.display = 'inline';
      document.querySelector(UISelectors.deleteBtn).style.display = 'inline';
      document.querySelector(UISelectors.backBtn).style.display = 'inline';
      document.querySelector(UISelectors.addBtn).style.display = 'none';
    },
    getSelectors: function() {
      return UISelectors;
    }
  };
})();

//********************************** App Controller ***********************************
//**************************************************************************************

const App = (function(ItemCtrl, StorageCtrl, UICtrl) {
  //Load Event Listeners
  const loadEventListeners = function() {
    //give access to the private method of UICtrl
    const UISelectors = UICtrl.getSelectors();
    //Add item event listener
    document
      .querySelector(UISelectors.addBtn)
      .addEventListener('click', itemAddSubmit);
    //Disable submit on enter
    document.addEventListener('keypress', function(e) {
      if (e.keyCode === 13 || e.which === 13) {
        e.preventDefault();
        return false;
      }
    });
    //Edit icon click event
    document
      .querySelector(UISelectors.itemList)
      .addEventListener('click', itemEditClick);
    //Update item event
    document
      .querySelector(UISelectors.updateBtn)
      .addEventListener('click', itemUpdateSubmit);
    //Delete item event
    document
      .querySelector(UISelectors.deleteBtn)
      .addEventListener('click', itemDeleteSubmit);
    //Back button item event
    document
      .querySelector(UISelectors.backBtn)
      .addEventListener('click', UICtrl.clearEditState);
    //Clear Items event
    document
      .querySelector(UISelectors.clearBtn)
      .addEventListener('click', clearAllItemsClick);
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
      //Store in localStorage
      StorageCtrl.storeItem(newItem);
      //Clear fields
      UICtrl.clearInput();
    }
  };

  // item click event to bring up edit state
  const itemEditClick = function(e) {
    if (e.target.classList.contains('edit-item')) {
      // get list item id
      const listId = e.target.parentNode.parentNode.id;
      // Break into an array
      const listIdArr = listId.split('-');
      //Get actual id by:
      const id = parseInt(listIdArr[1]);
      //Get Item
      const itemToEdit = ItemCtrl.getItemById(id);
      //set currentItem
      ItemCtrl.setCurrentItem(itemToEdit);
      //add Item to form
      UICtrl.addItemToForm();
      e.preventDefault();
    }
  };

  //Update the item for UI
  const itemUpdateSubmit = function(e) {
    const input = UICtrl.getItemInput();
    const updatedItem = ItemCtrl.updateItem(input.name, input.calories);
    //now we need to call UI
    UICtrl.updateListItem(updatedItem);
    const totalCalories = ItemCtrl.getTotalCalories();
    UICtrl.showTotalCalories(totalCalories);
    //update local storage
    StorageCtrl.updateItemStorage(updatedItem);
    UICtrl.clearEditState();
    e.preventDefault();
  };
  //Delete an Item
  const itemDeleteSubmit = function(e) {
    const currentItem = ItemCtrl.getCurrentItem();
    ItemCtrl.deleteItem(currentItem.id);
    // delete from UI
    UICtrl.deleteListItem(currentItem.id);
    const totalCalories = ItemCtrl.getTotalCalories();
    UICtrl.showTotalCalories(totalCalories);
    StorageCtrl.deleteItemFromStorage(currentItem.id);
    UICtrl.clearEditState();
    e.preventDefault();
  };

  //Clear all items
  const clearAllItemsClick = function() {
    ItemCtrl.clearAllItems();
    const totalCalories = ItemCtrl.getTotalCalories();
    UICtrl.showTotalCalories(totalCalories);
    UICtrl.clearEditState();
    //Remove from UI
    UICtrl.removeItems();
    StorageCtrl.clearItemsFromStorage();
    UICtrl.hideList();
  };

  //Public methods
  return {
    init: function() {
      //Clear edit state
      UICtrl.clearEditState();

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
})(ItemCtrl, StorageCtrl, UICtrl);

//Initialize App
App.init();
