"use strict";
//IIFE -- Immediately Invoked Function Expression
//AKA - Self Executing Function
(function () {
    /**
     *This method saves our data to localStorage
     *
     * @param {any[]} contactList
     */
    function SaveContactListData(contactList) {
        let count = 0;
        for (const contact of contactList) {
            let newContact = new Contact(contact.FullName, contact.ContactNumber, contact.EmailAddress);
            // console.log(newContact.toString());
            localStorage.setItem(count.toString(), newContact.toJSON());
            count++;
        }
    }
    /**
     *This method reads our data from localStorage and returns a Contact Array
     *
     * @return {*}  {Contact[]}
     */
    function LoadContactListData() {
        //create an empty Contact Array Container
        let ContactArray = new Array();
        let keys = Object.keys(localStorage);
        for (let key of keys) {
            let newContact = new Contact();
            newContact.fromJSON(localStorage.getItem(key));
            ContactArray.push(newContact);
        }
        return ContactArray;
    }
    function Start() {
        console.log("App Started!");
        $.getJSON("./Data/contacts.json", function (DataSource) {
            //get your data from the data source
            let contactList = DataSource.ContactList;
            SaveContactListData(contactList);
            let ContactArray = LoadContactListData();
            for (const contact of ContactArray) {
                console.log(contact.toString());
            }
        });
    }
    window.addEventListener("load", Start);
})();
//# sourceMappingURL=app.js.map