/**
 * For the sake of other ninjas, please only add code in Blocks. Otherwise you will need to create custom blocks for the javascript you want to use.
 */
/**
 * Please add comments explaining the code that you want to add.
 */
// Anytime a player is created we should run this code for that player.
sprites.onCreated(SpriteKind.Player, function (sprite) {
    controller.moveSprite(sprite, 50, 50)
    sprite.setStayInScreen(true)
})
scene.setBackgroundColor(7)
let ninjaGuy = sprites.create(img`
    . . . . . . f f f f . . . . . . 
    . . . . f f f c c f f f . . . . 
    . . . f f f c c c c f f f . . . 
    . . f f f b b b b b b f f f . . 
    . . f f b c c c c c c b b f . . 
    . . f b c f f f f f f c b f . . 
    . . f f f f b b b b f f f f . . 
    . . f b f b f 4 4 f b f b f . . 
    . . b b 4 1 f d d f 1 4 b b . . 
    . . f b c c c c c c c c b f . . 
    . . . f c c c c c c c c f . . . 
    . . e 4 f c c c c c c f 4 e . . 
    . . 4 d f c c c c c c f d 4 . . 
    . . 4 4 f 4 4 5 5 4 4 f 4 4 . . 
    . . . . . f f f f f f . . . . . 
    . . . . . f f . . f f . . . . . 
    `, SpriteKind.Player)
