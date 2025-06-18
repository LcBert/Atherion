PlayerEvents.inventoryChanged(event => {
    let is_entered = false
    let can_equip = false
    let classes = ["alchemist", "archer", "bard", "blacksmith", "carpenter", "chef", "farmer", "mage", "miner", "shadow", "warrior"]
    let items = [event.player.headArmorItem, event.player.chestArmorItem, event.player.legsArmorItem, event.player.feetArmorItem]
    let head_item = false
    let chest_item = false
    let legs_item = false
    let feet_item = false

    classes.forEach(_class => {
        if (event.getSlot() >= 5 && event.getSlot() <= 8) {
            items.forEach((item, i) => {
                if (item.hasTag("atherion:equipable/" + _class + "/" + i)) {
                    is_entered = true
                    for (let j = i; j <= 4; j++) {
                        if (event.getPlayer().getNbt().getAsString().search("origins:class/" + _class + "/" + _class + "" + j) >= 0) {
                            if (i == 0) head_item = true
                            if (i == 1) chest_item = true
                            if (i == 2) legs_item = true
                            if (i == 3) feet_item = true
                            can_equip = true
                        }
                    }
                }
            })
        }
    })

    if (is_entered && !can_equip) {
        if (!head_item) {
            event.player.give(items[0])
            event.player.setHeadArmorItem(Item.empty)
        }
        if (!chest_item) {
            event.player.give(items[1])
            event.player.setChestArmorItem(Item.empty)
        }
        if (!legs_item) {
            event.player.give(items[2])
            event.player.setLegsArmorItem(Item.empty)
        }
        if (!feet_item) {
            event.player.give(items[3])
            event.player.setFeetArmorItem(Item.empty)
        }
    }
})