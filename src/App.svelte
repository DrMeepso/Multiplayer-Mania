<script lang="ts">
  import { RPC, type PlayerState, isHost } from 'playroomkit';


    // import init function and default export as MPEvents from ./playroomManager
    import MPEvents, { init, thisPlayer } from './playroomManager';
    import { MPEventType } from './types';

    // this is all setup here so we can have the svelte reactivity!

    init("12", `Player${Math.round(Math.random()*100)}`);

    let players: PlayerState[] = [];

    //@ts-ignore
    MPEvents.addEventListener(MPEventType.PlayerJoin, async (event: CustomEvent) => {
        players = [...players, event.detail];
        console.log(`Player ${event.detail.getProfile().name} joined`)
    });

    //@ts-ignore
    MPEvents.addEventListener(MPEventType.PlayerQuit, async (event: CustomEvent) => {
        players = players.filter(player => player.id !== event.detail.id);
        console.log(`Player ${event.detail.getProfile().name} quit`)
    });

    import Menu from './menu/menu.svelte';

</script>

<main>

    <Menu bind:players={players} />


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

</style>
