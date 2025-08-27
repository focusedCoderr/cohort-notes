# Proving my genius against my friend with the help of Arrays on an EV Road Trip

## The Bet That Started It All

So, recently I lost a bet of Rs. 10000 to one of my friends, John and ever since I lost the bet, I knew I wouldn’t pay up! But to my surprise John was expecting me to pay 😮 Is this how friends are supposed to be? I don’t know what will happen to this world.

Anyways, since I was not paying up even after several weeks of subtle reminders, now it was not about the money but about the ego for John. He had to prove that he beat me.

## Preparing for the Road Trip

So, he devised a plan. He asked me to go on a road trip and wanted to trick me into paying. I agreed knowing fully well his intentions. So, just before the weekend he sent his car for service and asked them to give the car back on Monday and asked me to take my car and very casually said that I would pay for the petrol and he would cover the food and toll charges.

I agreed but I had another plan in mind. I borrowed an Electric Car from my friend, who had earlier lost a bet to me and had not paid up yet.

So, the trip began. To keep track of expenses, I kept three arrays:

● One for toll charges and miscellaneous items named ‘toll’  
● One for food items named ‘food’  
● One for every thing that I will pay named ‘me’

Whenever we paid anything, I pushed the expenses in the corresponding array.

## Using `push()` for Tracking Expenses

As soon as we crossed Delhi, first toll of Rs 85 came, so I pushed toll.push(85). push pushes a new element at the end of an array. After some time we stopped at Haldirams and a quick breakfast cost us Rs 540. So, I did food.push(540). Remember both food and toll had to be paid by John. So, now he was eagerly waiting for the EV charging break as he wanted to witness history of me paying up 😂. So after travelling for about 6 hours, we stopped for lunch and EV charging. We put the car to charge and while it was charging, we had our lunch and he paid Rs 890 i.e. food.push(890). We came back to the car, the car was fully charged and to John’s surprise, the charging bill was 0. The look on his face was priceless. Actually the EV that I had borrowed from my friend came with a promotional offer of free charging for 6 months on public TATA EV chargers, and I knew it. I just hadn’t told John yet that this was the case. His whole plan was collapsing in front of him and he did not take it well. He got furious and told me that I am not a good driver and he would be driving now ;-) I was loving the whole thing.

## The Overspeeding Fine and `pop()`

So, off we go after having lunch, John not talking to me and driving fast in anger. We hadn’t even covered 5 kilometers when we were stopped by traffic police because we were over speeding and were instantly slapped with a fine of Rs 1000 :-). I instantly did toll.push(1000) 😂. As soon as I did this, I don’t know what happened, John’s anger just went away and he was talking very sweetly with me . This being end of the month, he requested me to pay for it. I agreed but I had one condition. It was a fun condition and he agreed. We will talk about it at the end. So, I did me.push(friend.pop()). pop takes out the last element from the array and returns it.

## Adding Extra Info with Objects and `filter()`

After that the rest of our trip went smoothly, I paid nothing for charging and John paid for food, toll charges and miscellaneous items. We came back home and now it was time for doing all the calculation.

When we came back home, I remembered, I had not just put numbers in the toll array, I had also put in some objects in the array because I wanted to note down some important info about the places that we visited like noting down the name of the hotels that I liked, restaurants that I like. The structure of the object was like this:

```javascript
const obj1 = {
	place: "Jaipur",
	liked: true,
	notes: "liked but not the hotel. Do not stay in xyz hotel again",
};
```

So i used filter method of array to filter all the entries that had notes so that all the charges come in one array and other info in another array. Filter method returns a new array which contains all the elements from the original array which pass the filter test. filter method takes a callback function as argument which determines which elements are to be added to the new array and which elements are to be excluded.

const info = toll.filter((curr)=> curr.notes)

const tollCharges = toll.filter((curr)=> !curr.notes )

## Verifying Toll Charges with `slice()` and `splice()`

As we went back to my other friend’s house to return the car that we had borrowed, I thanked him and told him about all the free charging sessions. He kept insisting that EVs are exempt from toll charges as well in Haryana. John kept saying no because he knew we had paid for the tolls in Haryana. In fact the first three tolls were in Haryana only. So I did console.log(tollCharges.slice(0,3)) . slice(startIndex, endIndex) method returns a new array from startIndex to endIndex which is a portion of the original array, endIndex is not included in the new array. This showed him the charges that we paid in Haryana for the toll and then I asked him to check his toll card online to check the entries. He checked and confirmed that toll charges are not exempt in Haryana for EVs. But he also told that the third toll for which we paid Rs330 was in fact of Rs 80 only and the money was refunded in his wallet and he gave me Rs250 back. So I did tollCharges.splice(2,1,80) and replaced the third entry and gave Rs 250 back to John and he took a sigh of relief. splice(startIndex, deleteCount, newElement), is used to replace or delete , single or multiple elements in the array. At startIndex , whatever is deleteCount is, those number of elements are deleted and however many newElements are there, they are added at that place.

## Combining Arrays with `concat()`

Just to see what each of us paid, first of all, I combined the two arrays of toll charges and food that were paid by John. const totalPaidByFriend = food.concat(tollCharges). concat joins two arrays to give a new array.

## Calculating Totals with `reduce()`

Then to know the total that he paid, I did totalPaidByFriend.reduce((acc, curr)=> curr+acc,0). Turns out, the total money paid by John was Rs 8934 excluding the money for the fine which I paid.

Total money paid by me was me.reduce((acc,curr)=>acc+curr, 0) which comes out to be Rs1000 ;-)

## Applying Cashback with `map()`

Now that John had acknowledged that It was impossible to pull money out of me, it was time to bring some smile on his face. As all payment was done using my credit card and John had to pay me later, I had not told him that I get 5% cashback on all the spends through credit card . So, now the reduced prices were put in the new array i.e. const afterCashback = totalPaidByFriend.map((curr)=> 0.95\*curr). map method runs a callback functions on each elements of the original array and whatever is the return value of each function call, that return value is added to a new array and that array is returned .So total amount after cashback was afterCashback.reduce((acc, curr) => acc+curr,0) which came out to be 8487.3. This put a little smile on his face but it was a very small amount.

## Sorting Smartly with `sort()`

As I had already had my win for the day, I decided to be a little more generous and told him that I will pay for the first four items in the array ‘afterCashback’ whatever the amount. He was happy. I was being generous but not stupid so first of all I did afterCashback.sort((a,b)=>a-b) . sort method takes a user specified callback function, based on which, it is decided what should be the order of a and b. Then const whatIwillPay = me.concat(afterCashback.slice(0,3)) and then calculated the total amount that I had to pay using whatIwillPay.reduce((acc, curr)=> acc+curr, 0) which turned out to be 1324 only ;-)

## Printing Messages with `forEach()`

Finally, time for one condition that I had put in to pay Rs1000 fine for overspeeding. The condition is that for each element in afterCashback array, John has to print the following on a page and paste it on the rear windshield of the car “I lost the bet to Gaurav but still paid x amount to him” where x is each element in aftercashback array.

So he did afterCashback.forEach((curr)=>{console.log(“I lost the bet to Gaurav but still paid “ + curr + “to him”)}) and pasted it on his rear windshield.

forEach runs a callback function on each element of the original array.

## Closing Note

This is the story of me and Arrays having fun with John.
