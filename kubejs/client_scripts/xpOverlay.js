ClientEvents.paintScreen(event => {
    const screen_x = event.width
    const screen_y = event.height
    const overlay = {
        xp_overlay: {
            type: "text",
            text: "0",
            color: "#00FF00",
            shadow: true,
            alignX: "center",
            alignY: "bottom",
            moveY: -25,
            draw: "always"
        }
    }

    if (event.player.hasContainerOpen())
        overlay.xp_overlay.color = "#BB00FF00"
    // overlay.xp_overlay.color = "#BBFF0000"

    try { event.player.paint({ xp_overlay: { remove: true } }) } catch (e) { }
    if (event.player.getXpLevel() == 0 && !event.player.isCreative() && !event.player.isSpectator())
        event.player.paint(overlay)
})