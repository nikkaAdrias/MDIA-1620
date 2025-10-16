// Welcome!
//
//                                                  #    #
//                                             %%% ##   ##
//                                          %%%%% ###%🎀###
//                                         %%%%% ### %%% #
//                                       %%%%%% ### %%% ###
//                                        %%%% ## %% #######
//                                       %%%%% # %% #@#####
//                                     %%%%%% # % #########
//                                    %%%%% ##### #########
//                          ###        %% ####### #########
//                 %%% ############    ########### ########
//              %%%% ############################### #######
//            %%%%% ################################## ######
//          %%%%%% #################################### #C###
//         %%%🌸%% #####################################  ###
//         %%%%% #######################################
//        %%%%%% ############### BEANS ##################
//     % %%%%%%% ############### BEANS ##################
//      %%%%%%%%% ############## BEANS ##################
//     %%%%%%%%%% ########################################
//  %%% %%%%%%%%   ###### ################################
//    %%%%%%%%      ###### #################### ##########
// % %%%🌸%%%%        ####### ########### ###### ##########
//  %%%%%%%%%         #######  ########### ###### ########
// %%%%%%%%%%          ##### ###  ######### ####### ######
//  %%%%%%%%%%          #### ##               ####### ####
//  %🌸%%%%%%%%%           ## #                  ##### ###
//   %%  %% % %%         # ##                      ## ###
//     %   %    %        # ###                      # ###
//                        # ###                     ## ###
//                        # ###                     ## ###
//                        # ####                   #### ##
//                       ### ###                  ##### ###
//                      ####  ###                 ####   ##
//                     #####   ###                 ##    ##
//                    #####    ####                      ###
//                     ##        ###                     ###
//                                ####                     ##
//                                 ####                    ###
//                                                         ####
//                                                          ##
//
// This is a template for your labs and final project. You'll be setting up a stable and making
// sure it runs smoothly.
//
// Please do not create a new file for each lab!
// Feel free to keep the headings (e.g.: "Variables"), but please delete any boilerplate
// comments. (Your own comments, where necessary, are acceptable.)
//
// NOTE: UNLESS SPECIFIED, VARIABLE NAMING IS UP TO YOU. THERE SHOULD BE NO HARD-CODED
// NUMBERS OR STRINGS WHERE VARIBALES WOULD BE PREFERRED.

//------------------------- Seting up shop (Lab #1, Week 3) -------------------------//

// Declare variables with values for the following:
// - the name of the horse at the stable
// - the age of the horse
// - whether the horse is inside or outside
// - the cost to board the horse monthly
// - the fee for a late payment (monthly rate + 20%)
//
// Create a variable and use it to store a message for visitors to the stable.
// Create a variable and use it to store a message that monthly payment is late, and the amount owing.
// Include the name of your horse in the message.

let horseName = "Meow";
let horseNickname = "Mimi";
let horseAge = 222;
let horseTraits = horseName + " is " + horseAge + " years old.";
let isHorseOutside = true;
let monthlyBoardingFee = 250;
let lateFee = monthlyBoardingFee + 0.2 * monthlyBoardingFee;

let messageForVisitors = "Welcome to Sugar Cookie Stables!";
let messageForLatePayment =
    "Late payments will result in a $" +
    lateFee +
    " fine. This amount is calculated from the initial monthly fee to board " +
    horseName +
    " at $" +
    monthlyBoardingFee +
    " and an additional 20%.";

console.log(messageForVisitors);
console.log("My horse is Called " + horseName + "!");
console.log(
    "Her nickname is '" +
        horseNickname +
        "'! " +
        horseTraits +
        " Next year, she will be " +
        (horseAge + 1) +
        "."
);

console.log(
    "It will cost $" + monthlyBoardingFee + " to board " + horseName + "."
);
console.log(messageForLatePayment);

//------------------------- First day (Lab #2, Week 4) -------------------------//

// Using an object, add at least 3 horses to your stables.
//
// The horses should have the following properties:
// - name, nickname, favorite treat (string)
// - age, monthly rent (number)
// - location (boolean inside/outside)
// - two unique properties of your choice (use any primitive)

// Store the horses you've just created in a "horses" variable.
// Keep your old horse info from week one for now.

// Fancy! Another horse wants to be stabled! Create a variable that stores an object
// literal of your new horse, and add it to your "horses" variable.

// Initialize new property to your horses: a boolean that allows you to check if your horse
// is hungry or not. Use dot notation.

let horseObj = {
        name: "Meow",
        nickname: "Mimi",
        age: 222,
        favouriteTreat: "chocolate covered pretzels",
        monthlyRent: 250,
        isHorseOutside: true,
        favouriteDrink: "pink lemonade",
        favouriteSinger: "Sabrina Carpenter",
    },
    secondHorse = {
        name: "Butter",
        nickname: "Bubu",
        age: 12,
        favouriteTreat: "corn bread",
        monthlyRent: 150,
        isHorseOutside: false,
        favouriteDrink: "butter beer",
        favouriteSinger: "Morgan Wallen",
    },
    thirdHorse = {
        name: "Calico",
        nickname: "Cali",
        age: 6,
        favouriteTreat: "sardines",
        monthlyRent: 100,
        isHorseOutside: false,
        favouriteDrink: "guava juice",
        favouriteSinger: "Clairo",
    };

let newHorse = {
    name: "Rumble",
    nickname: "Rum",
    age: 23,
    favouriteTreat: "carrots",
    monthlyRent: 300,
    isHorseOutside: true,
    favouriteDrink: "carrot juice",
    favouriteSinger: "Benson Boone",
};

let horseNames = [horseObj.name, secondHorse.name, thirdHorse.name]; //, newHorse.name

let horses = [horseObj, secondHorse, thirdHorse];

console.log(horses);

horses.Rumble = newHorse;

console.log(horses);

let allHorseTraits = [
    horseObj.favouriteTreat,
    secondHorse.favouriteTreat,
    thirdHorse.favouriteTreat,
    newHorse.favouriteTreat,
];

console.log(
    horseObj.nickname +
        " has some other horse friends. Thier names are " +
        horses +
        "!"
);

horses.push("Sticker");

console.log(horses);
console.log("Another horse wants to be stabled! His name is " + horses[4]);
console.log("We now have 5 horses in the stable. They are " + horses + ".");

horses.isHungry = true;

console.log(
    "It's time to eat! It's ",
    horses.isHungry,
    +", they are very hungry."
);

console.log(horses);

console.log(
    "It's time to eat! Pick what to feed them. Some things they like to share are: " +
        allHorseTraits +
        "."
);

//-------------------------------------------break--------------------------------------------//
