const items = [
    {id:1,name:"eggs", price: 1.99,} ,
    {id:2,name:"milk",price:3.49}, 
    {id:3,name:"ribs", price: 14}, 
    {id:4,name:"salmon",price: 8},
    {id:5,name:"vegetables", price: 2.49 },
    {id:6,name:"waffles", price: 2.48}

];

const name = prompt('enter an item from your grocery list to find it')

const found = items.find(item => item.name === name);
if(found) {
    console.log ('we found it');

    console.log(found);
}
    else{
        console.log(`we could not find an item with that name${name}`);
    }

    const search = prompt(`enter a string, we will see the items which have that string in their name`)

    const keyForMapping = prompt('choose a key,either id,name, or price so we can use map to display the values for that key','price');
    const mappedValues = items.map(item => item[keyForMapping])
    console.log("mapped values",mappedValues);

   const keyForReducing = prompt('choose a ley either id,or price so we can use reduce to sum up the values for that key','price');
    const reduction = items.reduce((acc,item )=>{
        acc = acc + item[keyForReducing]
        return acc;
    },0);
    console.log (reduction);