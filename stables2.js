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

function latePaymentNotice(individualHorse) {
    const LATE_FEE_RATE = 0.2;

    if (!individualHorse || typeof individualHorse.monthlyRent !== "number") {
        console.log("Invalid horse data.");
        return;
    }

    const amountDue = individualHorse.monthlyRent * (1 + LATE_FEE_RATE);

    console.log(
        individualHorse.name +
            " has an account balance of " +
            amountDue.toFixed(2) +
            " including a 20% late fee. Please pay now."
    );
}

// invoked:
latePaymentNotice(horses.rumble);

function returnNickname(horses) {
    return horses.nickname;
}

// log
console.log(returnNickname(horses.secondHorse));
