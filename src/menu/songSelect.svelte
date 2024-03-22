<script lang="ts">

    export let isHosting: boolean;

    import { type MapSet } from "./types";
    import MapSetDisplay from "./mapsetDisplay.svelte"
    import MapSelect from "./setDownloader.svelte";

    import { RPC } from "playroomkit";

    const quaverAPIUrl = "https://api.quavergame.com/v1"
    let searchValue = ""
    
    let visableMaps: MapSet[] = []
    let isLoading = false;

    async function getSongs(page: number)
    {
        isLoading = true;
        visableMaps = [];
        let fetched = await fetch(`${quaverAPIUrl}/mapsets/maps/search?search=${searchValue}&page=${page}&mode=1`)
        let maps: MapSet[] = (await fetched.json()).mapsets

        isLoading = false;
        visableMaps = maps
    }

    async function getFirstPage() {
        await getSongs(0)
    }

    getFirstPage()

    let isMapSelectVisable = false;
    let currentlySelectedMap: MapSet = {} as MapSet;

    let currentDownloadProgress = 0;

    async function openMenu(map: MapSet)
    {
        isMapSelectVisable = true;
        await RPC.call("chat-server", `Map selected: ${map.artist} - ${map.title}`)
    
        // start downloading the map
        let dl = fetch(`${quaverAPIUrl}/d/web/map/${map.id}`)

    }

    let curretAudioOut = new Audio();

    $: selectedChanged(currentlySelectedMap);

    function selectedChanged(map: MapSet)
    {
        currentlySelectedMap = map;
        curretAudioOut.src = `https://cdn.quavergame.com/audio-previews/${map.id}.mp3`;
        curretAudioOut.volume = 0.25;
        curretAudioOut.play();
    }

</script>

<div class="window">

    <MapSelect bind:isVisable={isMapSelectVisable} bind:ThisMap={currentlySelectedMap} bind:currentDownloadProgress={currentDownloadProgress} />

    {#if isHosting}
        <h3>Song Select</h3>

        <div class="ToolBar">
            <input type="text" placeholder="Search for a song..." bind:value={searchValue} />
            <button on:click={getFirstPage}>Search</button>
        </div>
        <div class="songSelectHolder">
            {#if isLoading}
                <h3>Loading...</h3>
            {:else}
                {#if visableMaps.length == 0}
                    <h3>No Maps Found</h3>
                {/if}
            {/if}
            {#each visableMaps as map}
                <MapSetDisplay thisMap={map} bind:globalSelectedMap={currentlySelectedMap} {openMenu} />
            {/each}
        </div>

    {:else}
        <h3>Please Wait, The host is selecting a map!</h3>
    {/if}

</div>

<style>

    .window
    {
        overflow: hidden;
    }

    div
    {
        height: calc(100% - 150px);
        position: relative;
    }    

    .ToolBar
    {
        margin: 5px 0 5px 0;
        display: flex;
        justify-content: space-between;
        align-items: center;
        height: 40px;
        gap: 5px;
    }

    .songSelectHolder
    {
        height: calc(100% - 80px);
        overflow-y: scroll;
        border: 1px solid rgba(255, 255, 255, 0.18);
        border-radius: 10px;
        margin-top: 10px;

    }
    
    input
    {
        width: calc(100% - 20px);
        height: 50px;
        border: 1px solid rgba(255, 255, 255, 0.18);
        
        border-radius: 10px;
        padding: 10px;
        background-color: #424549;

        color: white;

        font-size: 15px;

    }

    input::placeholder
    {
        color: rgba(255, 255, 255, 0.5);
    }

    input:focus
    {
        outline: none;
    }

    button
    {
        width: 100px;
        height: 50px;
        border: none;
        border-radius: 10px;
        background-color: #424549;
        color: white;
        font-size: 15px;
        border: 1px solid rgba(255, 255, 255, 0.18);
        cursor: pointer;
        transition: background-color 0.2s;
    }

    button:hover
    {
        background-color: #5a5d60;
    }

</style>