ServerEvents.tags("block", event => {
    event.get("atherion:usable/blacksmith/0").add([
        "minecraft:anvil"
    ])
})

ServerEvents.tags("item", event => {
    event.get("atherion:usable/blacksmith/0").add([])

    event.get("atherion:equipable/blacksmith/0").add([])
})