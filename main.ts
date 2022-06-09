input.onButtonPressed(Button.A, function () {
    music.playMelody("B A F D G E C5 C ", 120)
})
input.onGesture(Gesture.Shake, function () {
    music.stopAllSounds()
})
basic.showString("HOLA QUE TAL?")
basic.forever(function () {
    basic.showLeds(`
        . # . # .
        . . . . .
        . . # . .
        # . . . #
        . # # # .
        `)
})
