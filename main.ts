input.onButtonPressed(Button.A, function () {
    NAMES = ["walid", "nour", "abd"]
    basic.showString("" + (NAMES[0]))
    basic.showString("" + (NAMES[1]))
    basic.showString("" + (NAMES[2]))
})
input.onButtonPressed(Button.B, function () {
    NUMS = [0, 1, 2]
    NUMS.insertAt(1, 6)
    basic.showNumber(1)
})
let NUMS: number[] = []
let NAMES: string[] = []
let list: number[] = []
let movie = ["cake", "cola", "mints"]
basic.showString("" + (list[1]))
