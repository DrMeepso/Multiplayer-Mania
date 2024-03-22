<script lang="ts">
    import type { MapSet } from "./types";


    export let ThisMap: MapSet;
    export let isVisable = false;

</script>

{#if isVisable}

    <!-- svelte-ignore a11y-click-events-have-key-events -->
    <!-- svelte-ignore a11y-no-static-element-interactions -->
    <div class="screenBlock" on:click={() => isVisable = false}></div>

    <div class="window">



    </div>

{/if}

<style>

    .screenBlock
    {
        position: absolute;
        width: 100vw;
        height: 100vh;
        background-color: rgba(0, 0, 0, 0.5);
        z-index: 99;
    }

    .window
    {
        height: 500px;
        width: 800px;
        position: absolute;
        top: calc(50% - 250px);
        left: calc(50% - 400px);
        z-index: 100;
    }

</style>