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
        text-align: center;
        display: flex;
        flex-direction: column;
        flex-grow: .5;
    }

    .PlayerList
    {
        overflow-y: scroll;
        border: 1px solid rgba(255, 255, 255, 0.18);
        border-radius: 10px;
        height: 100%;
    }

    p
    {
        opacity: 0.5;
    }

</style>