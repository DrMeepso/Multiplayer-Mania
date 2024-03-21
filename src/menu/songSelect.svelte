<script lang="ts">

    export let isHosting: boolean;

    import { type Beatmap, type BeatmapSet } from "./types";

    const quaverAPIUrl = "https://api.chimu.moe"
    let searchValue = ""
    
    

</script>

<div class="window">

    {#if isHosting}
        <h3>Song Select</h3>

        <div class="ToolBar">
            <input type="text" placeholder="Search for a song..." bind:value={searchValue} />
            <button>Search</button>
        </div>
        <div class="songSelectHolder">

        </div>

    {:else}
        <h3>Please Wait, The host is selecting a map!</h3>
    {/if}

</div>

<style>

    div
    {
        height: 100%;
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

        padding: 5px;

        display: flex;
        flex-direction: column;
        justify-content: flex-end;
        align-items: flex-start;
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