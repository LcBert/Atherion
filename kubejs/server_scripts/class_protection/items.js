PlayerEvents.tick(event => {
    let is_entered = false
    let can_use = false

    for (let i = 0; i <= 4; i++) {
        if (event.getPlayer().mainHandItem.hasTag("atherion:usable/blacksmith/" + i)) {
            is_entered = true
            for (let j = i; j <= 4; j++)
                if (event.getPlayer().getNbt().getAsString().search("origins:class/blacksmith/blacksmith" + j) >= 0)
                    can_use = true
        }
    }

    if (is_entered && !can_use) {
        event.player.runCommandSilent(`/effect give @s minecraft:weakness 1 50 true`)
        event.player.runCommandSilent(`/effect give @s minecraft:mining_fatigue 1 50 true`)
    }
})