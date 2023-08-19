/*
 Implement a function `calculateTotalSpentByCategory` which takes a list of transactions as parameter
 and return a list of objects where each object is unique category-wise and has total price spent as its value.
 Transaction - an object like { itemName, category, price, timestamp }.
 Output - [{ category1 - total_amount_spent_on_category1 }, { category2 - total_amount_spent_on_category2 }]
*/

// transaction = {
//     itemName: "",
//     category: "",
//     price: 0,
//     timeStamp: ""
// }
// output = {
//     category: "",
//     totalAmountSpent: 0
// }

function calculateTotalSpentByCategory(transactions) {
    let outputArray = [];
    let outputObject = {};

    transactions.forEach(object => {
        let tempCategoryName = object.category;

        if(outputObject[tempCategoryName]){
            outputObject[tempCategoryName] += object.price;
        }else{
            outputObject[tempCategoryName] = object.price;
        }

    });

    for(let category in outputObject){
        outputArray.push({ [category]: outputObject[category] });
    }

    return outputArray;
}

const transactions = [
    { itemName: 'Item1', category: 'Food', price: 10, timestamp: '2023-08-17' },
    { itemName: 'Item2', category: 'Clothing', price: 20, timestamp: '2023-08-18' },
    { itemName: 'Item3', category: 'Food', price: 15, timestamp: '2023-08-19' },
    { itemName: 'Item4', category: 'Electronics', price: 50, timestamp: '2023-08-20' },
    { itemName: 'Item5', category: 'Clothing', price: 30, timestamp: '2023-08-21' },
];

const result = calculateTotalSpentByCategory(transactions);

console.log(result);

