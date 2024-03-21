<script lang="ts">
    import { myPlayer, type PlayerState } from "playroomkit";

    export let thisPlayer: PlayerState;

    // on player state change, update the player state
    let isReady = false;
    setInterval(() => {
        isReady = thisPlayer.getState("ready");
    }, 100);

</script>

<div class="main {isReady ? "ready" : ""}">

    <div class="background" style="background-image: url('{thisPlayer.getProfile().photo}');"></div>

    <div class="foreground">
        {thisPlayer.getProfile().name + (thisPlayer.id === myPlayer().id ? " (You)" : "")}
        <p>{isReady ? "Ready" : "Unready"}</p>
    </div>

</div>

<style>

    .main
    {
        width: calc(100% - 10px);
        height: 70px;
        margin: 5px;
        border-radius: 15px;
        position: relative;
        overflow: hidden;
        transition: box-shadow 0.2s;
    }

    .foreground
    {
        display: flex;
        align-items: center;
        padding: 5px;
        position: absolute;
        top: 0;
        height: 100%;
        width: 100%;
    }

    .background
    {
        background-repeat: no-repeat;
        background-size: cover;
        background-position: center;
        filter: blur(2px) brightness(0.5);
        background-color: #424549;
        width: 100%;
        height: 100%;
    }

    .ready
    {
        box-shadow: 0px 0px 7px 1px rgba(102, 180, 102, 0.527);
    }

    p
    {
        margin-left: auto;
    }

</style>