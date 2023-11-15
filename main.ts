/* Copyright (c) 2020 MTHS All rights reserved
 *
 * Created by: Angelo Yalung
 * Created on: Nov 2023
 * This program ...
*/

// variables
let loopCounter = 0
let loopCounter2 = 0
let mySprite: game.LedSprite = null

// setup
basic.pause(500)
basic.clearScreen()
basic.showIcon(IconNames.Happy)

// on a button pressed, make the pixels light up around the edge
input.onButtonPressed(Button.A, function () {
mySprite = game.createSprite(0, 0)

  // x axis for top half
  while (loopCounter <= 5) {
    mySprite.set(LedSpriteProperty.X, loopCounter)
    basic.pause(500)
    loopCounter++

    // start y axis for the right side
    if (loopCounter <= 5) {
      loopCounter2++
    }
    // y axis for right side
    while (loopCounter2 <= 5) {
        mySprite.set(LedSpriteProperty.X, loopCounter)
        basic.pause(500)
        loopCounter2++
    }
}

mySprite.delete()
basic.pause(500)
})
