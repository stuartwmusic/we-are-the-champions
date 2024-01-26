import { initializeApp } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-app.js"
import { getDatabase, ref, push, onValue, remove } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-database.js"

const appSettings = {
    databaseURL: "https://playground-5194f-default-rtdb.firebaseio.com/"
}

const app = initializeApp(appSettings)
const database = getDatabase(app)
const endorsementsInDB = ref(database, "endorsements")

const inputFieldEl = document.getElementById("input-field")
const publishButtonEl = document.getElementById("publish-button")
const endorsementsListEl = document.getElementById("endorsements-list")

// publishButtonEl.addEventListener("click", function() {
//     let inputValue = inputFieldEl.value
//     push(endorsementsInDB, inputValue)
//     clearInputFieldEl()
//     endorsementsListEl.innerHTML += `<li>${inputValue}</li>`

        //  console.log(`${inputValue} added to database`)
})

// onValue(shoppingListInDB, function(snapshot) {
//     if (snapshot.exists()) {
//         let itemsArray = Object.entries(snapshot.val())
    
//         clearShoppingListEl()
        
//         for (let i = 0; i < itemsArray.length; i++) {
//             let currentItem = itemsArray[i]
//             let currentItemID = currentItem[0]
//             let currentItemValue = currentItem[1]
            
//             appendItemToShoppingListEl(currentItem)
//         }    
//     } else {
//         shoppingListEl.innerHTML = "No items here... yet"
//     }
// })

// function clearShoppingListEl() {
//     shoppingListEl.innerHTML = ""
// }

 function clearInputFieldEl() {
     inputFieldEl.value = ""
 }

// function appendItemToShoppingListEl(item) {
//     let itemID = item[0]
//     let itemValue = item[1]
    
//     let newEl = document.createElement("li")
    
//     newEl.textContent = itemValue
    
//     newEl.addEventListener("click", function() {
//         let exactLocationOfItemInDB = ref(database, `shoppingList/${itemID}`)
        
//         remove(exactLocationOfItemInDB)
//     })
    
//     shoppingListEl.append(newEl)
// }
