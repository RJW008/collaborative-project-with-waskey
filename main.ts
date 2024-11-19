let TotalMonthlyIncome = 0
let Number_of_Workers = 0
let Monthly_Income = 0
let Affordable_Mortgage = 0
/**
 */
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    TotalMonthlyIncome = 0
    Number_of_Workers = game.askForNumber("How many people in your family work?")
    while (Number_of_Workers > 0) {
        Monthly_Income = game.askForNumber("How much does this person make")
        Number_of_Workers += -1
        TotalMonthlyIncome += Monthly_Income
    }
    Affordable_Mortgage = TotalMonthlyIncome / 4
    if (Affordable_Mortgage < 500) {
        game.splash("Try Renting!" + "You are not in a position to buy a house!")
    } else {
        game.splash("You can afford a monthly mortgage of " + "$" + Affordable_Mortgage)
    }
    doSomething(Affordable_Mortgage > 5000)
})
function doSomething (bool: boolean) {
    if (bool) {
        game.splash("You are absurdly wealthy!" + " " + "Take this house!")
        return sprites.create(img`
            ....................e2e22e2e....................
            .................222eee22e2e222.................
            ..............222e22e2e22eee22e222..............
            ...........e22e22eeee2e22e2eeee22e22e...........
            ........eeee22e22e22e2e22e2e22e22e22eeee........
            .....222e22e22eeee22e2e22e2e22eeee22e22e222.....
            ...22eeee22e22e22e22eee22eee22e22e22e22eeee22...
            4cc22e22e22eeee22e22e2e22e2e22e22eeee22e22e22cc4
            6c6eee22e22e22e22e22e2e22e2e22e22e22e22e22eee6c6
            46622e22eeee22e22eeee2e22e2eeee22e22eeee22e22664
            46622e22e22e22eeee22e2e22e2e22eeee22e22e22e22664
            4cc22eeee22e22e22e22eee22eee22e22e22e22eeee22cc4
            6c622e22e22eeee22e22e2e22e2e22e22eeee22e22e226c6
            466eee22e22e22e22e22e2e22e2e22e22e22e22e22eee664
            46622e22eeee22e22e22e2e22e2e22e22e22eeee22e22664
            4cc22e22e22e22e22eeee2e22e2eeee22e22e22e22e22cc4
            6c622eeee22e22eeee22eee22eee22eeee22e22eeee226c6
            46622e22e22eeee22e22e2e22e2e22e22eeee22e22e22664
            466eee22e22e22e22e22e2e22e2e22e22e22e22e22eee664
            4cc22e22eeee22e22e22e2e22e2e22e22e22eeee22e22cc4
            6c622e22e22e22e22e22eee22eee22e22e22e22e22e226c6
            46622eeee22e22e22eeecc6666cceee22e22e22eeee22664
            46622e22e22e22eeecc6666666666cceee22e22e22e22664
            4cceee22e22eeecc66666cccccc66666cceee22e22eeecc4
            6c622e22eeecc66666cc64444446cc66666cceee22e226c6
            46622e22cc66666cc64444444444446cc66666cc22e22664
            46622cc6666ccc64444444444444444446ccc6666cc22664
            4ccc6666ccc6444bcc666666666666ccb4446ccc6666ccc4
            cccccccc6666666cb44444444444444bc6666666cccccccc
            64444444444446c444444444444444444c64444444444446
            66cb444444444cb411111111111111114bc444444444bc66
            666cccccccccccd166666666666666661dccccccccccc666
            6666444444444c116eeeeeeeeeeeeee611c4444444446666
            666e2222222e4c16e4e44e44e44e44ee61c4e2222222e666
            666eeeeeeeee4c16e4e44e44e44e44ee61c4eeeeeeeee666
            666eddddddde4c66f4e4effffffe44ee66c4eddddddde666
            666edffdffde4c66f4effffffffff4ee66c4edffdffde666
            666edccdccde4c66f4effffffffffeee66c4edccdccde666
            666eddddddde4c66f4eeeeeeeeeeeeee66c4eddddddde666
            c66edffdffde4c66e4e44e44e44e44ee66c4edffdffde66c
            c66edccdccde4c66e4e44e44e44e44ee66c4edccdccde66c
            cc66666666664c66e4e44e44e44feeee66c46666666666cc
            .c66444444444c66e4e44e44e44ffffe66c44444444466c.
            ..c64eee4eee4c66f4e44e44e44f44fe66c4eee4eee46c..
            ...c4eee4eee4c66f4e44e44e44effee66c4eee4eee4c...
            ....644444444c66f4e44e44e44e44ee66c444444446....
            .....64eee444c66f4e44e44e44e44ee66c444eee46.....
            ......6ccc666c66e4e44e44e44e44ee66c666ccc6......
            `, SpriteKind.Player)
    } else {
        game.splash("You aren't that rich. " + " " + "Take this snowball while you think about what kind of house to buy.")
        return sprites.create(img`
            . . . . . . . . . . . . . . . . 
            . . . . . 1 . . . . . . . . . . 
            . . 1 1 . . . 1 1 1 . . . . . . 
            . . 1 1 . 1 1 1 1 1 1 1 . . . . 
            . . . . 1 1 1 1 1 1 1 1 1 . . . 
            . . . 1 1 1 1 1 1 1 1 1 1 1 . . 
            . . . 1 1 1 1 1 1 1 1 1 1 1 . . 
            . . 1 1 1 1 1 1 1 1 1 1 1 1 1 . 
            . . 1 1 1 1 1 1 1 1 1 1 1 1 1 . 
            . . 1 1 1 1 1 1 1 1 1 1 1 1 1 . 
            . . . 1 1 1 1 1 1 1 1 1 1 1 . . 
            . . . 1 1 1 1 1 1 1 1 1 1 1 . . 
            . . . . 1 1 1 1 1 1 1 1 1 . . . 
            . . 1 . . 1 1 1 1 1 1 1 . . . . 
            . . . . . . . 1 1 1 . . . . 1 . 
            . . . . . . . . . . . . . . . . 
            `, SpriteKind.Player)
    }
}
