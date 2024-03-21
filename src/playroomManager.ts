import { insertCoin, myPlayer, isHost, getRoomCode, onPlayerJoin, setState, getState, waitForState, RPC } from "playroomkit";
import type { PlayerState } from "playroomkit";
import { MPEventType } from './types';

const lobbyPlayers: PlayerState[] = []

const eventEmitter = new EventTarget();
export default eventEmitter;

export async function init(roomCode: string, playerName: string)
{

    window.location.hash = `player_name=${playerName}&player_photo=https://images.pexels.com/photos/45201/kitty-cat-kitten-pet-45201.jpeg`

    await insertCoin({
        roomCode: roomCode,
        skipLobby: true,
        gameId: "JJu23yxlbfHHv3jC8Tkk", // fuck.
        persistentMode: false
    });

    lobbyPlayers.push(myPlayer())

    onPlayerJoin(async (player) => {
        lobbyPlayers.push(player)

        player.onQuit(async () => {
            const index = lobbyPlayers.indexOf(player)
            lobbyPlayers.splice(index, 1)

            eventEmitter.dispatchEvent(new CustomEvent(MPEventType.PlayerQuit, { detail: player }));
            if (isHost())
            {
                await RPC.call("chat-server", `${player.getProfile().name} has left the game`)
            }
        })

        eventEmitter.dispatchEvent(new CustomEvent(MPEventType.PlayerJoin, { detail: player }));
        if (isHost())
        {
            await RPC.call("chat-server", `${player.getProfile().name} has joined the game`)
        }

    });

    // setup player states
    myPlayer().setState("ready", false, true)
    myPlayer().setState("isSpectator", false, true)
    myPlayer().setState("wishesToBeSpectator", false, true)


    console.log(isHost())
    // setup lobby states
    setTimeout(() => {
        
        if (isHost())
        {
            console.log("I am the host")
            eventEmitter.dispatchEvent(new CustomEvent("chat-server", { detail: { message: "Welcome, you are hosting the lobby!" } }));
            setState("gameState", "lobby")
            setState("selectedMap", null)
        } else {
            console.log("I am not the host")
            eventEmitter.dispatchEvent(new CustomEvent("chat-server", { detail: { message: "Welcome to the lobby!" } }));
        }

    }, 150);

}

export let thisPlayer = myPlayer
export function isHostPlayer()
{
    return isHost()
}

export function getPlayers()
{
    return lobbyPlayers
}