ClientEvents.paintScreen(event => {
    // const screen_x = event.width
    // const screen_y = event.height

    // const player = Client.player
    // const currentScreen = Client.screen

    // const overlay = {
    //     xp_overlay: {
    //         type: "text",
    //         text: "0",
    //         color: "#65FF3A",
    //         shadow: true,
    //         alignX: "center",
    //         alignY: "bottom",
    //         moveY: -25,
    //         draw: "always"
    //     }
    // };

    // if (currentScreen) {
    //     let screenClass = currentScreen.getClass()
    //     if (screenClass.toString() != "class net.minecraft.class_408" && screenClass.toString() != "class net.minecraft.class_5289") {
    //         overlay.xp_overlay.color = "#253B12"
    //     }
    // }

    try {
        event.player.paint({ xp_overlay: { remove: true } })
    } catch (e) { }

    // if (
    //     event.player.getXpLevel() === 0 &&
    //     !event.player.isCreative() &&
    //     !event.player.isSpectator()
    // ) {
    //     event.player.paint(overlay)
    // }
});
