basic.showLeds(`
    # . . # .
    # # . # .
    # . # # .
    # . . # .
    . . . . .
    `)
// This block lets Micro:bit know a pixel strip is connected. And how many pixels long the strip is. Pixels on bit:booster are #0-9. Strip is 30 more pixels. 10+30 = 40
let strip = neopixel.create(DigitalPin.P2, 40, NeoPixelMode.RGB)
// Sets the brightness of the strip. (Max 255 very bright!!)
strip.setBrightness(75)
// Cycles ALL pixels on strip through all the possible colors. 
basic.forever(function () {
    strip.showColor(neopixel.colors(NeoPixelColors.Red))
    basic.pause(500)
    strip.showColor(neopixel.colors(NeoPixelColors.Orange))
    basic.pause(500)
    strip.showColor(neopixel.colors(NeoPixelColors.Yellow))
    basic.pause(500)
    strip.showColor(neopixel.colors(NeoPixelColors.Green))
    basic.pause(500)
    strip.showColor(neopixel.colors(NeoPixelColors.Blue))
    basic.pause(500)
    strip.showColor(neopixel.colors(NeoPixelColors.Indigo))
    basic.pause(500)
    strip.showColor(neopixel.colors(NeoPixelColors.Violet))
    basic.pause(500)
    strip.showColor(neopixel.colors(NeoPixelColors.Purple))
    basic.pause(500)
    strip.showColor(neopixel.colors(NeoPixelColors.White))
    basic.pause(500)
    strip.showColor(neopixel.colors(NeoPixelColors.Black))
    basic.pause(500)
})
