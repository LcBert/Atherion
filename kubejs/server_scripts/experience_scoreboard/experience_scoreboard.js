PlayerEvents.tick(event => {
    const scoreboard = event.server.scoreboard.getObjective("experience")
    const player_name = event.player.getDisplayName().getString()
    const scores = event.server.getScoreboard().getOrCreatePlayerScore(player_name, scoreboard)
    event.player.tell(scores.getScore().toString())
})