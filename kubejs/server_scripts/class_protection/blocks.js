BlockEvents.rightClicked(event => {
    let is_entered = false
    let can_open = false
    let classes = ["alchemist", "archer", "bard", "blacksmith", "carpenter", "chef", "farmer", "mage", "miner", "shadow", "warrior"]

    classes.forEach(_class => {
        for (let i = 0; i <= 4; i++) {
            if (event.getBlock().hasTag("atherion:usable/" + _class + "/" + i)) {
                is_entered = true
                for (let j = i; j <= 4; j++)
                    if (event.getPlayer().getNbt().getAsString().search("origins:class/" + _class + "/" + _class + "" + j) >= 0)
                        can_open = true
            }
        }
    })

    if (is_entered && !can_open)
        event.cancel()
})