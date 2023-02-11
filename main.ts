robotbit.MotorRunDual(
robotbit.Motors.M1A,
0,
robotbit.Motors.M1B,
0
)
basic.forever(function () {
    if (input.buttonIsPressed(Button.A)) {
        robotbit.MotorRunDual(
        robotbit.Motors.M1A,
        150,
        robotbit.Motors.M1B,
        0
        )
    } else if (input.buttonIsPressed(Button.B)) {
        robotbit.MotorRunDual(
        robotbit.Motors.M1A,
        0,
        robotbit.Motors.M1B,
        150
        )
    } else if (input.buttonIsPressed(Button.AB)) {
        robotbit.MotorRunDual(
        robotbit.Motors.M1A,
        150,
        robotbit.Motors.M1B,
        150
        )
    } else {
        robotbit.MotorRunDual(
        robotbit.Motors.M1A,
        0,
        robotbit.Motors.M1B,
        0
        )
    }
})
