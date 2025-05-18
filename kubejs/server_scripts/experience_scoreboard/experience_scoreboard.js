PlayerEvents.tick(event => {
    const scoreboard = event.server.scoreboard.getObjective("experience")
    const player_name = event.player.getDisplayName().getString()
    const scores = event.server.getScoreboard().getOrCreatePlayerScore(player_name, scoreboard)
})

ItemEvents.rightClicked(event => {
    try {
        if (event.item.id == "minecraft:stick") {
            // event.player.experienceProgress = event.player.experienceProgress + 0.1

            // event.player.data.put("XpP", event.player.experienceProgress)
            event.server.runCommandSilent(`data modify entity ${event.player.getDisplayName().getString()} XpP set value ${event.player.experienceProgress + 0.1}`)
            // event.player.tell(event.player.data.containsValue("XpP"))
            // event.player.tell(event.player.compo)
            // event.player.tell(event.player.getComponent("XpP"))
            // try {
            //     event.player.syncComponent(
            //         event.player.componentContainer.fromTag("XpP"),
            //         (buf, player) => { buf.writeDouble(event.player.experienceProgress) },
            //         (player) => { player.uuid === event.player.uuid }
            //     )
            // } catch (e) {
            //     console.log(e)
            // }
        }
    } catch (e) {
        console.log(e)
    }
})