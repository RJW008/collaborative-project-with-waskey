let Monthly_Income = 0
let TotalMonthlyIncome = 0
let Number_of_Workers = game.askForNumber("How many people in your family work?")
while (Number_of_Workers > 0) {
    Monthly_Income = game.askForNumber("How much does this person make")
    Number_of_Workers += -1
    TotalMonthlyIncome += Monthly_Income
}
let Affordable_Mortgage = TotalMonthlyIncome / 4
if (Affordable_Mortgage < 500) {
    game.splash("Try Renting!" + "You are not in a position to buy a house!")
} else {
    game.splash("You can afford a monthly mortgage of " + "$" + Affordable_Mortgage)
}
