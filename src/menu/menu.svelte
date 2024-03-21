<script lang="ts">
    import type { PlayerState } from 'playroomkit';
    import PlayerList from './playerList.svelte';
    import Chat from './chat.svelte';
    import ActionButtons from './actionButtons.svelte';
    import SongSelect from './songSelect.svelte';

    export let players: PlayerState[] = [];
    export let isHosting = false;

</script>


<main>

    <div class="leftHang">

        <PlayerList bind:players={players} />
        <Chat />

    </div>

    <div class="rightHang">

        <SongSelect bind:isHosting={isHosting} />
        <ActionButtons />

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
    
        display: flex;

    }

    .rightHang
    {
        width: 100%;
        height: 100vh;
        display: flex;
        flex-direction: column;
    }

    .leftHang
    {
        display: flex;
        height: 100vh;
        width: 20%;
        min-width: 540px;
        flex-direction: column;
        justify-content: space-between;
    }

</style>