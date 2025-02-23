<template>
    <table class="racingHorsesTable">
        <tr>
            <th>Horses</th>
            <th></th>
        </tr>
        <tr v-for="horse in store.state.horsesNew" ref="horsesTemplate" :key="horse.random">
            <td>{{ horse.name }}</td>
            <td class="horse-container">
                <div class="row horse-wrapper">
                    <img :class="'horse-img-' + horse.time" tabindex="1"
                        src="http://cliparts.co/cliparts/8Tz/Byj/8TzByjyTp.gif" alt="Running Horse">
                </div>
            </td>
        </tr>
    </table>
    <div class="row roundNameWrapper">
        <div class="col-2">

        </div>
        <div class="col-8">
            <span class="roundNameText">
                {{ store.state.currentRound }}
            </span>
        </div>
        <div class="col-2 finishTextWrapper">
            <span class="finishText">FINISH</span>
        </div>
    </div>
</template>

<script>
import { useStore } from 'vuex';
export default {
    name: 'RacingHorsesTable',
    setup() {
        const store = useStore();
        return {
            store
        }
    }
};
</script>

<style scoped>
.finishTextWrapper {
    display: flex;
    justify-content: flex-end;
}

.roundNameWrapper{
    margin-top: 20px;
}
.roundNameText{
    margin-top: 10px;
    font-size: 20px;
    color: red;
    text-transform: uppercase;
}
.finishText {
    writing-mode: vertical-rl;
    text-orientation: upright;
    color: red;
    font-size: 20px;
}

.horse {
    max-width: 100vw;
    max-height: 100vh;
    background-image: url("http://s18.postimg.io/49u99igkp/field_008.jpg");
    background-size: contain;
    background-repeat: repeat-x;
}

.horse-wrapper {
    max-width: 100%;
}

.horse-wrapper img {
    max-width: 50px;
    max-height: 25vh;
}

.racingHorsesTable {
    margin-right: 10px;
    border-right: 3px solid red;
}

.racingHorsesTable tr:last-child .horse-container:last-child {
    width: 80%;
    border-top: 1px dashed;
    border-bottom: 1px dashed;
}

.horse-container {
    width: 80%;
    border-top: 1px dashed;
}

.horse-img-6 {
    animation: runningHorse 6s linear;
    animation-fill-mode: forwards;
}

.horse-img-7 {
    animation: runningHorse 7s linear;
    animation-fill-mode: forwards;
}

.horse-img-8 {
    animation: runningHorse 8s linear;
    animation-fill-mode: forwards;
}

.horse-img-9 {
    animation: runningHorse 9s linear;
    animation-fill-mode: forwards;
}

.horse-img-10 {
    animation: runningHorse 10s linear;
    animation-fill-mode: forwards;
}

.horse-img-11 {
    animation: runningHorse 11s linear;
    animation-fill-mode: forwards;
}

.horse-img-12 {
    animation: runningHorse 12s linear;
    animation-fill-mode: forwards;
}

.horse-img-13 {
    animation: runningHorse 13s linear;
    animation-fill-mode: forwards;
}

.horse-img-14 {
    animation: runningHorse 14s linear;
    animation-fill-mode: forwards;
}

.horse-img-15 {
    animation: runningHorse 15s linear;
    animation-fill-mode: forwards;
}

.horse-img-16 {
    animation: runningHorse 16s linear;
    animation-fill-mode: forwards;
}

.horse-img-17 {
    animation: runningHorse 17s linear;
    animation-fill-mode: forwards;
}

.horse-img-18 {
    animation: runningHorse 18s linear;
    animation-fill-mode: forwards;
}

.horse-img-19 {
    animation: runningHorse 19s linear;
    animation-fill-mode: forwards;
}

.horse-img-20 {
    animation: runningHorse 20s linear;
    animation-fill-mode: forwards;
}

@keyframes runningHorse {
    from {
        margin-left: 0%;
    }

    50% {
        margin-left: 45%;
    }

    to {
        margin-left: 93%;
    }
}
</style>