input.onButtonPressed(Button.A, function () {
    music.playMelody("B A F D G E C5 C ", 120)
    basic.showString(" HOLA QUE TAL?")
})
input.onGesture(Gesture.Shake, function () {
    music.stopAllSounds()
})
input.onButtonPressed(Button.AB, function () {
    music.playMelody("C C D C5 F A G C5 ", 158)
})
input.onButtonPressed(Button.B, function () {
    music.startMelody(music.builtInMelody(Melodies.JumpDown), MelodyOptions.Once)
})
basic.forever(function () {
    basic.showLeds(`
        . # . # .
        . . . . .
        . . # . .
        # . . . #
        . # # # .
        `)
})
