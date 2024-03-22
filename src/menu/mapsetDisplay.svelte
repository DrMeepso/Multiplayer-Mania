<script lang="ts">

    import { type MapSet } from "./types";

    export let thisMap: MapSet;
    console.log(thisMap);

    function r(num: number | undefined)
    {
        if (num === undefined)
        {
            return "N/A";
        }
        return Math.round(num*100)/100;
    }

</script>

<div class="mapSet">

    <div class="mapBackground" style="background-image: url('https://cdn.quavergame.com/mapsets/{thisMap.id}.jpg');"></div>

    <div class="mapInfo">
        <div>
            <h3>{thisMap.artist} - {thisMap.title}</h3>
            <p>Mapped by {thisMap.creator_username}</p>
        </div>
        <div class="h">
            <p class="mapDif">Rating: {r(thisMap.difficulty_range[0])} - {r(thisMap.difficulty_range.at(-1))}, {thisMap.difficulty_range.length} Map{thisMap.difficulty_range.length > 1 ? "s" : ""}</p>
            <button>Select</button>
        </div>
    </div>

</div>

<style>

    .h
    {
        display: flex;
        justify-content: space-between;
        align-items: flex-end;
        gap: 15px;
    }

    button
    {
        background-color: #424549;
        color: white;
        border: 1px solid rgba(255, 255, 255, 0.1);
        border-radius: 5px;
        padding: 10px;
        cursor: pointer;
        transition: background-color 0.2s;
        width: 100px;
    }

    button:hover
    {
        background-color: #5a5d60;
    }

    .mapDif
    {
        opacity: 1;
        font-size: medium;
    }

    .mapSet
    {
        width: 100%;
        height: 100px;
        border-radius: 15px;

        margin-bottom: 5px;

        position: relative;
        overflow: hidden;
    }

    .mapBackground
    {
        background-repeat: no-repeat;
        background-size: cover;
        background-position: center;
        filter: blur(2px) brightness(0.5);
        background-color: #424549;
        width: 100%;
        height: 100%;
    }

    .mapInfo
    {
        display: flex;
        flex-direction: column;
        padding: 5px;
        position: absolute;
        top: 0;
        height: 100%;
        width: 100%;
        justify-content: space-between;
    }

    p
    {
        margin: 0;
        opacity: 0.5;
        font-size: small;
    }

</style>