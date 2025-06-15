ServerEvents.commandRegistry(event => {
    const { commands: Commands, arguments: Arguments } = event;
    event.register(
        Commands.literal("class")
            .requires(src => src.hasPermission(2))
            .then(Commands.literal("set")
                .then(Commands.argument("player", Arguments.PLAYER.create(event))
                    .then(Commands.literal("common")
                        .then(Commands.argument("level", Arguments.INTEGER.create(event))
                            .executes(command_event => {
                                const activator = command_event.getSource().getPlayerOrException()
                                const target = Arguments.PLAYER.getResult(command_event, "player")
                                const level = Arguments.INTEGER.getResult(command_event, "level")
                                setClass(activator, target, "common", level)
                                return 1
                            })
                        )
                    )
                    .then(Commands.literal("alchemist")
                        .then(Commands.argument("level", Arguments.INTEGER.create(event))
                            .executes(command_event => {
                                const activator = command_event.getSource().getPlayerOrException()
                                const target = Arguments.PLAYER.getResult(command_event, "player")
                                const level = Arguments.INTEGER.getResult(command_event, "level")
                                setClass(activator, target, "alchemist", level)
                                return 1
                            })
                        )
                    )
                    .then(Commands.literal("archer")
                        .then(Commands.argument("level", Arguments.INTEGER.create(event))
                            .executes(command_event => {
                                const activator = command_event.getSource().getPlayerOrException()
                                const target = Arguments.PLAYER.getResult(command_event, "player")
                                const level = Arguments.INTEGER.getResult(command_event, "level")
                                setClass(activator, target, "archer", level)
                                return 1
                            })
                        )
                    )
                    .then(Commands.literal("bard")
                        .then(Commands.argument("level", Arguments.INTEGER.create(event))
                            .executes(command_event => {
                                const activator = command_event.getSource().getPlayerOrException()
                                const target = Arguments.PLAYER.getResult(command_event, "player")
                                const level = Arguments.INTEGER.getResult(command_event, "level")
                                setClass(activator, target, "bard", level)
                                return 1
                            })
                        )
                    )
                    .then(Commands.literal("blacksmith")
                        .then(Commands.argument("level", Arguments.INTEGER.create(event))
                            .executes(command_event => {
                                const activator = command_event.getSource().getPlayerOrException()
                                const target = Arguments.PLAYER.getResult(command_event, "player")
                                const level = Arguments.INTEGER.getResult(command_event, "level")
                                setClass(activator, target, "blacksmith", level)
                                return 1
                            })
                        )
                    )
                    .then(Commands.literal("carpenter")
                        .then(Commands.argument("level", Arguments.INTEGER.create(event))
                            .executes(command_event => {
                                const activator = command_event.getSource().getPlayerOrException()
                                const target = Arguments.PLAYER.getResult(command_event, "player")
                                const level = Arguments.INTEGER.getResult(command_event, "level")
                                setClass(activator, target, "carpenter", level)
                                return 1
                            })
                        )
                    )
                    .then(Commands.literal("chef")
                        .then(Commands.argument("level", Arguments.INTEGER.create(event))
                            .executes(command_event => {
                                const activator = command_event.getSource().getPlayerOrException()
                                const target = Arguments.PLAYER.getResult(command_event, "player")
                                const level = Arguments.INTEGER.getResult(command_event, "level")
                                setClass(activator, target, "chef", level)
                                return 1
                            })
                        )
                    )
                    .then(Commands.literal("farmer")
                        .then(Commands.argument("level", Arguments.INTEGER.create(event))
                            .executes(command_event => {
                                const activator = command_event.getSource().getPlayerOrException()
                                const target = Arguments.PLAYER.getResult(command_event, "player")
                                const level = Arguments.INTEGER.getResult(command_event, "level")
                                setClass(activator, target, "farmer", level)
                                return 1
                            })
                        )
                    )
                    .then(Commands.literal("mage")
                        .then(Commands.argument("level", Arguments.INTEGER.create(event))
                            .executes(command_event => {
                                const activator = command_event.getSource().getPlayerOrException()
                                const target = Arguments.PLAYER.getResult(command_event, "player")
                                const level = Arguments.INTEGER.getResult(command_event, "level")
                                setClass(activator, target, "mage", level)
                                return 1
                            })
                        )
                    )
                    .then(Commands.literal("miner")
                        .then(Commands.argument("level", Arguments.INTEGER.create(event))
                            .executes(command_event => {
                                const activator = command_event.getSource().getPlayerOrException()
                                const target = Arguments.PLAYER.getResult(command_event, "player")
                                const level = Arguments.INTEGER.getResult(command_event, "level")
                                setClass(activator, target, "miner", level)
                                return 1
                            })
                        )
                    )
                    .then(Commands.literal("shadow")
                        .then(Commands.argument("level", Arguments.INTEGER.create(event))
                            .executes(command_event => {
                                const activator = command_event.getSource().getPlayerOrException()
                                const target = Arguments.PLAYER.getResult(command_event, "player")
                                const level = Arguments.INTEGER.getResult(command_event, "level")
                                setClass(activator, target, "shadow", level)
                                return 1
                            })
                        )
                    )
                    .then(Commands.literal("warrior")
                        .then(Commands.argument("level", Arguments.INTEGER.create(event))
                            .executes(command_event => {
                                const activator = command_event.getSource().getPlayerOrException()
                                const target = Arguments.PLAYER.getResult(command_event, "player")
                                const level = Arguments.INTEGER.getResult(command_event, "level")
                                setClass(activator, target, "warrior", level)
                                return 1
                            })
                        )
                    )
                )
            )
            .then(Commands.literal("reset")
                .then(Commands.argument("player", Arguments.PLAYER.create(event))
                    .executes(command_event => {
                        const activator = command_event.getSource().getPlayerOrException()
                        const target = Arguments.PLAYER.getResult(command_event, "player")
                        resetClass(activator, target)
                        return 1
                    })
                )
            )
    )
})


function setClass(_activator, _target, _class, _level) {
    _target.runCommandSilent("origin set @s origins:class origins:class/" + _class + "/" + _class + _level)
    // _target.runCommandSilent("scoreboard players set @s level " + _level)
    _activator.tell("Set " + _target.getName().getString() + "'s class to " + _class + " level " + _level)
}

function resetClass(_activator, _target) {
    _target.runCommandSilent("origin set @s origins:class origins:class/common")
    // _target.runCommandSilent("scoreboard players set @s level 0")
    _activator.tell("Reset " + _target.getName().getString() + "'s class")
}