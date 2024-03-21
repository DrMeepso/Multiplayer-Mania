<script lang="ts">

    import { isHost } from "playroomkit";

</script>

<div class="window">

    {#if isHost()}
        <h3>Host</h3>
    {:else}
        <h3>Please Wait, The host is selecting a map!</h3>
    {/if}

</div>

<style>

    div
    {
        height: 100%;
    }    

</style>