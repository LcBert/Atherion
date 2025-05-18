ServerEvents.commandRegistry(event => {
    const { commands: Commands, arguments: Arguments } = event;
    event.register(
        Commands.literal("announcement")
            .requires(src => src.hasPermission(2))
            .then(Commands.argument("players", Arguments.PLAYERS.create(event))
                .then(Commands.argument("title", Arguments.STRING.create(event))
                    .then(Commands.argument("message", Arguments.STRING.create(event)).executes(command_event => {
                        const activator = command_event.getSource().getPlayerOrException()
                        const targets = Arguments.PLAYERS.getResult(command_event, "players")
                        try {
                            targets.forEach(target => {
                                target.displayClientMessage(Component.of(
                                    Component.literal("[").append(
                                        Component.gold(Arguments.STRING.getResult(command_event, "title"))).append(
                                            Component.literal("] ")).append(
                                                Component.white(Arguments.STRING.getResult(command_event, "message")))
                                ), false)
                            });
                        } catch (e) {
                            console.log(e)
                        }

                        return 1;
                    })))))
})