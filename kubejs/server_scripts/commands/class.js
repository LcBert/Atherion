const kit = [
    {
        class: "warrior", starter_kit: {
            head: { id: "magistuarmory:coif", count: 1, },
            chest: { id: "magistuarmory:gambeson_chestplate", count: 1, },
            legs: { id: "magistuarmory:pantyhose", count: 1, },
            feet: { id: "magistuarmory:gambeson_boots", count: 1, },
            offhand: { id: "minecraft:lantern", count: 1 },
            0: { id: "magistuarmory:wood_shortsword", count: 1 },
            1: { id: "minecraft:bread", count: 10 },
        }
    },
    {
        class: "archer", starter_kit: {
            head: { id: "minecraft:leather_helmet", count: 1, },
            chest: { id: "minecraft:leather_chestplate", count: 1, },
            legs: { id: "minecraft:leather_leggings", count: 1, },
            feet: { id: "minecraft:leather_boots", count: 1, },
            offhand: { id: "minecraft:lantern", count: 1 },
            0: { id: "minecraft:bow", count: 1 },
            1: { id: "minecraft:bread", count: 10 },
            9: { id: "minecraft:arrow", count: 64 }
        }
    }
]

ServerEvents.commandRegistry(event => {
    const { commands: Commands, arguments: Arguments } = event;
    event.register(
        Commands.literal("class")
            .requires(src => src.hasPermission(2))
            .then(Commands.literal("set")
                .then(Commands.argument("player", Arguments.PLAYER.create(event))
                    .then(Commands.literal("warrior").then(Commands.argument("starter_kit", Arguments.BOOLEAN.create(event)).executes(command_event => {
                        const activator = command_event.getSource().getPlayerOrException()
                        const target = Arguments.PLAYER.getResult(command_event, "player")
                        const give_starter_kit = Arguments.BOOLEAN.getResult(command_event, "starter_kit")

                        removeClass(activator, target)
                        setClass(activator, target, "warrior")
                        if (give_starter_kit)
                            giveStarterKit(target, kit[0])

                        activator.tell("Set class to warrior for " + target.getName().getString())
                        return 1;
                    })))
                    .then(Commands.literal("archer").then(Commands.argument("starter_kit", Arguments.BOOLEAN.create(event)).executes(command_event => {
                        const activator = command_event.getSource().getPlayerOrException()
                        const target = Arguments.PLAYER.getResult(command_event, "player")
                        const give_starter_kit = Arguments.BOOLEAN.getResult(command_event, "starter_kit")

                        removeClass(activator, target)
                        setClass(activator, target, "archer")

                        if (give_starter_kit)
                            giveStarterKit(target, kit[1])

                        activator.tell("Set class to archer for " + target.getName().getString())
                        return 1;
                    })))
                ))
            .then(Commands.literal("remove").then(Commands.argument("player", Arguments.PLAYER.create(event)).executes(command_event => {
                const activator = command_event.getSource().getPlayerOrException()
                const target = Arguments.PLAYER.getResult(command_event, "player")
                removeClass(activator, target)

                activator.tell("Removed class from " + target.getName().getString())
                return 1;
            })))
            .then(Commands.literal("get").then(Commands.argument("player", Arguments.PLAYER.create(event)).executes(command_event => {
                const activator = command_event.getSource().getPlayerOrException()
                const target = Arguments.PLAYER.getResult(command_event, "player")
                getClass(activator, target)
                return 1;
            })))
    )
})

function giveStarterKit(target, kit_id) {
    // For Armor: 39 = helmet, 38 = chestplate, 37 = leggings, 36 = boots, 40 = offhand
    var indexs = [39, 38, 37, 36, 40]
    var items = [
        kit_id.starter_kit.head,
        kit_id.starter_kit.chest,
        kit_id.starter_kit.legs,
        kit_id.starter_kit.feet,
        kit_id.starter_kit.offhand,
    ]


    for (let i = 0; i < items.length; i++) {
        try {
            if (target.inventory.getStackInSlot(indexs[i]).isEmpty()) {
                target.inventory.insertItem(indexs[i], items[i].id, false)
            } else {
                target.inventory.insertItem(items[i].id, false)
            }
        } catch (e) {
            console.log(e)
        }
    }

    for (let i = 0; i <= 35; i++) {
        try {
            if (target.inventory.getStackInSlot(i).isEmpty())
                target.inventory.insertItem(i, Item.of(kit_id.starter_kit[i].id, kit_id.starter_kit[i].count), false)
            else
                target.inventory.insertItem(Item.of(kit_id.starter_kit[i].id, kit_id.starter_kit[i].count), false)
        } catch (e) {
            console.log(e)
        }
    }
}

function setClass(activator, target, class_id) {
    target.addTag("class:" + class_id)
}

function removeClass(activator, target) {
    target.tags.removeIf(tag => tag.startsWith("class:"))
}

function getClass(activator, target) {
    const tags = target.getTags().toArray()
    let class_tags = []
    for (let i = 0; i < tags.length; i++) {
        if (tags[i].startsWith("class:")) {
            class_tags.push(tags[i])
        }
    }

    if (class_tags.length != 0)
        activator.tell(target.getName().getString() + " is a " + class_tags.join(", ").replace("class:", ""))
    else
        activator.tell(target.getName().getString() + " has no class")
}
