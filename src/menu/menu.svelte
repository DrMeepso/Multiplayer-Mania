<script lang="ts">
    import type { PlayerState } from 'playroomkit';
    import PlayerList from './playerList.svelte';
    import Chat from './chat.svelte';
    import ActionButtons from './actionButtons.svelte';
    import SongSelect from './songSelect.svelte';
    import MapSelect from './mapSelect.svelte';
    import type { MapSet } from './types';

    export let players: PlayerState[] = [];
    export let isHosting = false;

    let currentlySelectedMap: MapSet = {} as MapSet;
    let isMapSelectVisable = true;

</script>


<main>

    <MapSelect bind:isVisable={isMapSelectVisable} bind:ThisMap={currentlySelectedMap} />

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
        overflow: hidden;
    }

    .leftHang
    {
        display: flex;
        height: 100%;
        width: 20%;
        min-width: 540px;
        flex-direction: column;
        justify-content: space-between;
    }

</style>