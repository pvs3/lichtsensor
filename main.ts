let x = 0
let y = 0
let aantal = 0
function adres (led2: number) {
    x = led2 / 5
    y = led2 % 5
}
basic.forever(function () {
    aantal = Math.map(input.lightLevel(), 0, 230, 0, 24)
    for (let index = 0; index <= aantal; index++) {
        adres(index)
        led.plot(x, y)
    }
    serial.writeNumber(aantal)
    serial.writeLine("")
    basic.pause(100)
    basic.clearScreen()
})
