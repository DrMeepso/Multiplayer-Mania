<script lang="ts">

    import { RPC, type PlayerState } from "playroomkit";
    import MPEvent from "../playroomManager";

    type chatMessage = {
        message: string;
        sender: PlayerState;
        fromServer?: boolean;
    }

    let chat: chatMessage[] = [];

    RPC.register("chat", async (message: string, sender: PlayerState) => {
        chat.push({ message, sender });
        chat = chat; // get the reactivity to work
        return 'ok';
    });

    RPC.register("chat-server", async (message: string) => {
        chat.push({ message, sender: {} as PlayerState, fromServer: true });
        chat = chat; // get the reactivity to work
        return 'ok';
    });

    //@ts-ignore
    MPEvent.addEventListener("chat-server", (event: CustomEvent) => {
        console.log(event.detail.message);
        chat.push({ message: event.detail.message, sender: {} as PlayerState, fromServer: true });
        chat = chat; // get the reactivity to work
    });

    let message = ""
    let input: HTMLInputElement;

    const send = async () => {
        if (message.length > 0)
        {
            input.disabled = true;
            await RPC.call("chat", message);
            message = ""
            input.disabled = false;
        }
    }

</script>

<div class="window">
    
    <h3>Lobby</h3>
    <div class="chat">
        {#each chat as message}
            <p>{message.fromServer ? "Server" : (message.sender).getProfile().name}: {message.message}</p>
        {/each}
    </div>
    <br>
    <div class="holder">
        <input type="text" placeholder="Type a message..." bind:value={message} bind:this={input} />
        <button on:click={send}>Send</button>
    </div>

</div>

<style>

    .holder
    {
        width: 100%;
        display: flex;
        gap: 10px;
    }

    .window
    {
        width: 500px;
        height: 400px;
        text-align: center;
    }

    .chat
    {
        height: 260px;
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

    p
    {
        margin: 2px;
        text-align: left;
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