ServerEvents.commandRegistry(event => {
    const { commands: Commands, arguments: Arguments } = event;
    event.register(
        Commands.literal("class")
            .requires(src => src.hasPermission(2))
            .then(Commands.literal("set")
                .then(Commands.argument("player", Arguments.PLAYER.create(event))
                    .then(Commands.argument("type", Arguments.WORD.create(event))
                        .then(Commands.argument("level", Arguments.INTEGER.create(event))
                            .executes(command_event => {
                                const activator = command_event.getSource().getPlayerOrException()
                                const target = Arguments.PLAYER.getResult(command_event, "player")
                                const type = Arguments.WORD.getResult(command_event, "type")
                                const level = Arguments.INTEGER.getResult(command_event, "level")

                                target.persistentData.put("atherion_class_type", type)
                                target.persistentData.put("atherion_class_level", level)

                                activator.tell("Set " + target.getName().getString() + "'s class to " + type + " level " + level)
                                return 1
                            })
                        )
                    )
                )
            )
            .then(Commands.literal("get")
                .then(Commands.argument("player", Arguments.PLAYER.create(event))
                    .executes(command_event => {
                        const activator = command_event.getSource().getPlayerOrException()
                        const target = Arguments.PLAYER.getResult(command_event, "player")
                        activator.tell(target.persistentData.get("atherion_class_level"))
                        activator.tell(target.persistentData.get("atherion_class_type"))
                        return 1
                    })
                )
            )
            .then(Commands.literal("reset")
                .then(Commands.argument("player", Arguments.PLAYER.create(event))
                    .executes(command_event => {
                        const activator = command_event.getSource().getPlayerOrException()
                        const target = Arguments.PLAYER.getResult(command_event, "player")
                        target.persistentData.put("atherion_class_type", "common")
                        target.persistentData.put("atherion_class_level", -1)
                        target.runCommandSilent("origin set @s origins:class origins:empty")
                        activator.tell("Reset " + target.getName().getString() + "'s class")
                        return 1
                    })
                )
            )
    )
})