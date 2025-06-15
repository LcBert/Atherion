BlockEvents.rightClicked(event => {
    let is_entered = false
    let can_open = false

    for (let i = 0; i <= 4; i++) {
        if (event.getBlock().hasTag("atherion:usable/blacksmith/" + i)) {
            is_entered = true
            for (let j = i; j <= 4; j++)
                if (event.getPlayer().getNbt().getAsString().search("origins:class/blacksmith/blacksmith" + j) >= 0)
                    can_open = true
        }
    }

    if (is_entered && !can_open)
        event.cancel()
})