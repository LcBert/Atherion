ServerEvents.tags("block", event => {
    event.get("atherion:usable/blacksmith/1").add([
        "minecraft:anvil"
    ])
})

ServerEvents.tags("item", event => {
    event.get("atherion:usable/blacksmith/0").add([
        "minecraft:stone_pickaxe"
    ])
})