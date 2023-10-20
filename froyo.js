const userInputString = prompt(
    "Please enter a list of froyo flavors seperated by commas",
    "Vanilla, Vanilla, Chocolate, Cake Batter"
)

const stringArray = userInputString.split(",");

function createOrderObject(str) {
    const flavorArray = str.split(",");
    const order = {};
    for (let i = 0; i < flavorArray.length; i++) {
        if(flavorArray[i] in order) {
            order[flavorArray[i]] += 1;
        }
        else {
            order[flavorArray[i]] = 1;
        }
    }

    return order;
}
const newOrder = createOrderObject(userInputString);
console.table(newOrder);