'use strict';
/* global shoppingList, cuid */

// eslint-disable-next-line no-unused-vars
const store = (function () {
    const items = [
        { id: cuid(), name: 'apples', checked: false },
        { id: cuid(), name: 'oranges', checked: false },
        { id: cuid(), name: 'milk', checked: true },
        { id: cuid(), name: 'bread', checked: false }
    ];
    const hideCheckedItems = false;
    const searchTerm = '';
    const findById = function (id) {
        return items.find(item => item.id === id);

    };
    const addItem = function (name) {
        try {
            this.items.push(Item.create(name));
        }
        catch (error) {
            console.log(`Cannot add item ${error.message}`);
        }
    };
    const findAndToggleChecked = function (id) {
        const foundItem = this.findById(id);
        foundItem.checked = !foundItem.checked;
    };
    const findAndUpdateName = function (id, newName) {
        try {
            const foundId = this.findById(id);
            foundId.name = newName;
        }
        catch (error) {
            console.log(`Cannot update name: ${error.message}`);
        }
    };
    const findAndDelete = function (id) {
        const foundID = this.findById(id)
        this.items.splice(foundID, 1);
    };
    const toggleCheckedFilter = function () {
        return this.hideCheckedItems = !this.hideCheckedItems;
    }
    const setSearchTerm = function (term) {
        return this.searchTerm = term;
    }
    return {
        items, 
        hideCheckedItems, 
        searchTerm, 
        findById, 
        addItem, 
        findAndToggleChecked, 
        findAndUpdateName, 
        findAndDelete,
        toggleCheckedFilter,
        setSearchTerm
    };

}());