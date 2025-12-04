//  ~ YOU THERE! bring me the finest chocolate pretzel in all the land. STAT!~
//          \   ^__^\
//           \  (oo)\_______
//              (__)\       )\/\
//           (x)    ||-----||   \
//                  ||     ||

//------------------------- Seting up shop (Lab #1, Week 3) -------------------------//

let horseName = "Meow";
let horseAge = 222;
let isHorseOutside = true;
let monthlyBoardingFee = 250;
let lateFee = 250 + 0.2 * monthlyBoardingFee;

let messageForVisitors = "Welcome to Sugar Cookie Stables!";
let messageForLatePayment =
    "Late payments will result in a $" +
    lateFee +
    " fine. This amount is calculated from the initial monthly fee to board " +
    horseName +
    " at $" +
    monthlyBoardingFee +
    " and an additional 20%.";

//------------------------- First day (Lab #2, Week 4) -------------------------//

let horses = {
    meow: {
        name: horseName,
        nickname: "mimi",
        age: horseAge,
        favouriteTreat: "chocolate covered pretzels",
        monthlyRent: monthlyBoardingFee,
        isHorseOutside: true,
        favouriteDrink: "pink lemonade",
        favouriteSinger: "Sabrina Carpenter",
    },

    secondHorse: {
        name: "butter",
        nickname: "bubu",
        age: 12,
        favouriteTreat: "corn bread",
        monthlyRent: 150,
        isHorseOutside: false,
        favouriteDrink: "butter beer",
        favouriteSinger: "Morgan Wallen",
    },

    thirdHorse: {
        name: "calico",
        nickname: "cali",
        age: 6,
        favouriteTreat: "sardines",
        monthlyRent: 100,
        isHorseOutside: false,
        favouriteDrink: "guava juice",
        favouriteSinger: "Clairo",
    },
};

let newHorse = {
    name: "rumble",
    nickname: "rum",
    age: 23,
    favouriteTreat: "carrots",
    monthlyRent: 300,
    isHorseOutside: true,
    favouriteDrink: "carrot juice",
    favouriteSinger: "Benson Boone",
};

horses.rumble = newHorse;

// initialize new property using dot notation
horses.meow.isHungry = true;
horses.secondHorse.isHungry = true;
horses.thirdHorse.isHungry = false;
horses.rumble.isHungry = true;

if (horses.meow.isHungry) {
    console.log("Scurry in Mimi! Your chocolate covered pretzels are ready!");
} else {
    console.log("Be patient, lady! The youngins need to eat first.");
}

//------------------------- Growing our business (Lab #2, Week 6) -------------------------//

const NUMBER_OF_STALLS = 10;
function availableStalls(totalNumberOfStalls, totalNumberOfHorses) {
    let totalNumOfAvailStalls = totalNumberOfStalls - totalNumberOfHorses;
    console.log(
        "There are " + totalNumOfAvailStalls + " stalls still available!"
    );
}

// invoked:
availableStalls(10, horses);

function lateRentCost(horse, lateFee) {
    let total = horses.monthlyRent + lateFee;
    console.log("Your payment is late! You owe $" + total + "!");
}

// invoked:
lateRentCost(horses.rumble);

function returnNickname(horses) {
    return horses.nickname;
}

// log
console.log(returnNickname(horses.secondHorse));

//------------------------- Stable roster -------------------------//

// We want to keep track of our horses and how they are doing. Paste the data structure
// of our horse variable below so we can reference it. It is okay to comment it out.

// let horses = {
//     meow: {
//         name: "Meow",
//         nickname: "mimi",
//         age: 222,
//         favouriteTreat: "chocolate covered pretzels",
//         monthlyRent: 250,
//         isHorseOutside: true,
//         favouriteDrink: "pink lemonade",
//         favouriteSinger: "Sabrina Carpenter",
//         isHungry: true
//     },

//     secondHorse: {
//         name: "butter",
//         nickname: "bubu",
//         age: 12,
//         favouriteTreat: "corn bread",
//         monthlyRent: 150,
//         isHorseOutside: false,
//         favouriteDrink: "butter beer",
//         favouriteSinger: "Morgan Wallen",
//         isHungry: true
//     },

//     thirdHorse: {
//         name: "calico",
//         nickname: "cali",
//         age: 6,
//         favouriteTreat: "sardines",
//         monthlyRent: 100,
//         isHorseOutside: false,
//         favouriteDrink: "guava juice",
//         favouriteSinger: "Clairo",
//         isHungry: false
//     },

//     rumble: {
//         name: "rumble",
//         nickname: "rum",
//         age: 23,
//         favouriteTreat: "carrots",
//         monthlyRent: 300,
//         isHorseOutside: true,
//         favouriteDrink: "carrot juice",
//         favouriteSinger: "Benson Boone",
//         isHungry: true
//     }
// };

//---------------------- Growing business ----------------------//

// We've added some horses! Re-assign the variable that contains the number of available stalls.
// Use the math operator to determine how many stables you should have left, given the number of
// horses you've added.

// Express the following in code: If the variable that contains your remaining stalls
// is less than 2, log out "We need to build more stalls", otherwise log out "We have
// [number of stalls] available!"

let horseList = [
    horses.meow,
    horses.secondHorse,
    horses.thirdHorse,
    horses.rumble,
];

let totalStalls = NUMBER_OF_STALLS;

let totalHorses = horseList.length;

let remainingStalls = totalStalls - totalHorses;

if (remainingStalls < 2) {
    console.log("We need to build more stalls");
} else {
    console.log("We have " + remainingStalls + " stalls available!");
}

// Create a function that logs out how much will an individual horse will owe if rent is
// paid late. Invoke the function.

function lateRentCost(horse) {
    const LATE_FEE_RATE = 0.2;
    let total = horse.monthlyRent * (1 + LATE_FEE_RATE);

    console.log(horse.name + " will owe $" + total + " if rent is paid late.");
}

lateRentCost(horses.rumble);

// Add loop that checks to find out if a certain horse likes a treat. If the horse does not like
// the treat, log out their disatisfaction and check the next horse. Exit the loop when you find
// the horse that likes the treat.

function findHorseThatLikesTreat(treat) {
    for (let i = 0; i < horseList.length; i++) {
        let horse = horseList[i];

        if (horse.favouriteTreat === treat) {
            console.log(horse.name + " loves " + treat + "!");
            return horse;
        } else {
            console.log(horse.name + " does not like " + treat + ".");
        }
    }

    return "None of the horses like " + treat + ".";
}

// invoked:
findHorseThatLikesTreat("carrots");

// Create and invoke a function that returns (not logs) the nickname of a chosen horse. Log out
// the return value outside of the function.

function getHorseNickname(horse) {
    return horse.nickname;
}

let meowNickname = getHorseNickname(horses.meow);
console.log("Meow's nickname is " + meowNickname);

//------------------------- Day to day operations -------------------------//

// Create and invoke a function references one of your unique horse properties. It should
// contain a conditional or a loop.

function playFavouriteSingerForHorse(horse) {
    if (horse.favouriteSinger) {
        console.log(
            horse.name + " is jamming out to " + horse.favouriteSinger + "."
        );
    } else {
        console.log(horse.name + " doesn't have a favourite singer.");
    }
}

playFavouriteSingerForHorse(horses.thirdHorse);

// Morning! Create and invoke a function that moves all your horses outside. It should
// log out statement indicating the horses have been moved to spend time in the sun.

// Bedtime! Update the function that lets your horses outside so that it also calls them
// in if it is getting dark. Only the horses that moved should log out a message. Invoke the function.

function moveHorsesBasedOnTime(isDaytime) {
    for (let key in horses) {
        let horse = horses[key];

        // Morning: move horses that are inside to outside
        if (isDaytime && !horse.isHorseOutside) {
            horse.isHorseOutside = true;
            console.log(
                horse.name + " has been moved outside to enjoy the sun."
            );
        }

        // Night: move horses that are outside to inside
        if (!isDaytime && horse.isHorseOutside) {
            horse.isHorseOutside = false;
            console.log(horse.name + " has been brought inside for the night.");
        }
    }
}

// Morning time
moveHorsesBasedOnTime(true);

// Nighttime or bedtime
moveHorsesBasedOnTime(false);

// Initialize a method on your horses that moves them inside if they are outside, and vice versa.

// version to check for individual horse (just function):

function moveHorseInsideOrOutside(horse) {
    if (horse.isHorseOutside === true) {
        horse.isHorseOutside = false;
        console.log(horse.name + " is now inside.");
    } else {
        horse.isHorseOutside = true;
        console.log(horse.name + " is now outside.");
    }
}

moveHorseInsideOrOutside(horses.meow);

// version to check for all horses (loop):

function moveAllHorses(horses) {
    for (let i = 0; i < horseList.length; i++) {
        let horse = horseList[i];

        if (horse.isHorseOutside === true) {
            horse.isHorseOutside = false;
            console.log(horse.name + " is now inside.");
        } else {
            horse.isHorseOutside = true;
            console.log(horse.name + " is now outside.");
        }
    }
}

moveAllHorses(horses);

// Food! Create and invoke a function that feeds your horses. If the horse is outside, it
// should call them in, and then all horses should be fed a treat. Log the activity of
// the horses.

function feedHorses(horses) {
    for (let i = 0; i < horseList.length; i++) {
        let horse = horseList[i];

        if (horse.isHorseOutside === true) {
            horse.isHorseOutside = false;
            console.log(horse.name + " was outside and is comin' in to eat!");
        }

        horse.isHungry = false;
        console.log(
            horse.name + " is happily eating " + horse.favouriteTreat + "!"
        );
    }
}

feedHorses(horses);
