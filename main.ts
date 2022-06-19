basic.forever(function () {
    while (edubitIrBit.isIrSensorTriggered()) {
        basic.showLeds(`
            . # . # .
            # # # # #
            # # # # #
            . # # # .
            . . # . .
            `)
        basic.showLeds(`
            . . . . .
            . # . # .
            . # # # .
            . . # . .
            . . . . .
            `)
    }
    music.startMelody(music.builtInMelody(Melodies.BaDing), MelodyOptions.Once)
    basic.showNumber(randint(1, 6))
    while (!(edubitIrBit.isIrSensorTriggered())) {
    	
    }
})
