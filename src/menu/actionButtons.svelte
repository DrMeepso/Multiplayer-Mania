<script lang="ts">

    import { RPC, type PlayerState, myPlayer } from "playroomkit";

    let ready = false;

    const toggleReady = async () => {
        ready = !ready;
        myPlayer().setState("ready", ready);
    }

</script>

<div>

    <button on:click={toggleReady}>
        {#if ready}
            Not Ready
        {:else}
            Ready
        {/if}
    </button>

</div>

<style>

    div
    {
        height: 150px;
        display: flex;
        justify-content: flex-end;
        align-items: flex-end;
    }

    button
    {
        width: 200px;
        height: 100px;
        font-size: 30px;

        border: 1px solid rgba(255, 255, 255, 0.18);
        background-color: #424549;

        border-width: 1px 0px 0px 1px;
        border-top-left-radius: 10px;

        color: white;

        cursor: pointer;

        transition: background-color 0.2s;

    }

    button:hover
    {
        background-color: #5a5d60;
    }

</style>