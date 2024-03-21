<script lang="ts">
    import type { PlayerState } from "playroomkit";
    import PlayerRender from "./playerRender.svelte";

    export let players: PlayerState[] = [];

</script>

<div class="window main">

    <h3>Players In Lobby</h3>

    <div class="PlayerList">
        {#each players as player}
            <PlayerRender thisPlayer={player} />
        {/each}
    </div>

    <p>Player In Lobby: {players.length}</p>

</div>

<style>

    .main
    {
        width: 300px;
        height: 400px;
        text-align: center;
    }

    .PlayerList
    {
        height: 310px;
        overflow-y: scroll;
        border: 1px solid rgba(255, 255, 255, 0.18);
        border-radius: 10px;
    }

    p
    {
        opacity: 0.5;
    }

</style>