input.onButtonPressed(Button.A, function () {
    music.play(music.builtinPlayableSoundEffect(soundExpression.hello), music.PlaybackMode.LoopingInBackground)
    basic.showIcon(IconNames.Happy)
})
