basic.forever(function () {
    if (input.isGesture(Gesture.LogoUp)) {
        basic.showLeds(`
            # # . # #
            # # . # #
            . . # . .
            # . . . #
            . # # # .
            `)
    } else if (input.isGesture(Gesture.LogoDown)) {
        basic.showLeds(`
            . # # # .
            # . . . #
            . . . . .
            . . . # .
            . # . . .
            `)
    } else if (input.isGesture(Gesture.TiltLeft)) {
        basic.showLeds(`
            # . . . .
            . # . # .
            . # . . .
            . # . # .
            # . . . .
            `)
    } else if (input.isGesture(Gesture.TiltRight)) {
        basic.showLeds(`
            . . . # .
            . # . . #
            . . . . #
            . # . . #
            . . . # .
            `)
    } else {
        basic.showLeds(`
            # . . . #
            . # . # .
            . . # . .
            . # . # .
            # . . . #
            `)
    }
})
basic.forever(function () {
	
})
