let Monthly_Income = game.askForNumber("How much do you make a month?")
let Affordable_Mortgage = Monthly_Income / 4
game.splash("You can afford a monthly mortgage of " + "$" + Affordable_Mortgage)
let Number_of_Workers = game.askForNumber("How many people in your family work?")
while (Number_of_Workers > 0) {
	
}
if (Affordable_Mortgage < 500) {
    game.splash("Try Renting!" + "You are not in a position to buy a house!")
}
