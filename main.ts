let stroomindegrond = 0
input.onButtonPressed(Button.A, function () {
    stroomindegrond = pins.analogReadPin(AnalogPin.P0)
    led.plotBarGraph(
    stroomindegrond,
    1023
    )
})
