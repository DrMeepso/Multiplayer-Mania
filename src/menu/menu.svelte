<script lang="ts">
    import type { PlayerState } from 'playroomkit';
    import PlayerList from './playerList.svelte';
    import Chat from './chat.svelte';

    export let players: PlayerState[] = [];

</script>


<main>

    <div class="leftHang">

        <PlayerList bind:players={players} />
        <Chat />

    </div>

</main>

<style>
    
    main
    {
        padding: 0;
        margin: 0;
    
        width: 100vw;
        height: 100vh;
    
        overflow: hidden;
    
    }

    .leftHang
    {
        display: flex;
        height: 100vh;
        width: 20%;
        min-width: 550px;
        flex-direction: column;
        justify-content: space-between;
    }

</style>