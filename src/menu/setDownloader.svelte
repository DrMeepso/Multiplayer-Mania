<script lang="ts">
    import type { MapSet } from "./types";
    import MapSetDisplay from "./mapsetDisplay.svelte"

    export let ThisMap: MapSet;
    export let isVisable = false;

    export let currentDownloadProgress: number;

    function r(num: number | undefined)
    {
        if (num === undefined)
        {
            return "N/A";
        }
        return Math.round(num*100)/100;
    }

</script>

{#if isVisable}

    <!-- svelte-ignore a11y-click-events-have-key-events -->
    <!-- svelte-ignore a11y-no-static-element-interactions -->
    <div class="screenBlock"></div>

    <div class="window">

        <MapSetDisplay thisMap={ThisMap} globalSelectedMap={ThisMap} infoONLY={true} />

        <h3>Please wait, fetching song data...</h3>

        <div class="percert">
            <p>{currentDownloadProgress}%</p>
        </div>

    </div>

{/if}

<style>

    .screenBlock
    {
        position: absolute;
        width: 100%;
        height: 100%;
        background-color: rgba(0, 0, 0, 0.5);
        z-index: 99;
        top: -0px;
        left: -0px;
    }

    .window
    {
        width: 400px;
        height: 400px;
        position: absolute;
        z-index: 100;
        top: calc(50% - 200px);
        left: calc(50% - 200px);
        text-align: center;
        display: flex;
        flex-direction: column;
    }

    .percert
    {
        flex-grow: 1;
        display: flex;
        justify-content: center;
        align-items: center;
    }

</style>