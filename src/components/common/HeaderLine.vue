<template>
    <div class="header row">
        <div class="col-4 headerTextWrapper">
            <h3>Horse Racing</h3>
        </div>
        <div class="col col-center-justify w-100 headerButtonsWrapper">
            <div class="row">
                <button @click="generateProgram()">GENERATE PROGRAM</button>
                <button @click="startOrPause()">START / PAUSE</button>
            </div>
        </div>
    </div>
</template>

<script>
import { useStore } from 'vuex';

export default {
    name: 'HeaderLine',
    emits: ['updateRaceState', 'generateProgram'],
    setup() {
        const store = useStore();
        const startOrPause = () => {
            store.commit('setRaceStarted', !store.state.isRaceStarted);
        }

        const generateProgram = () => {
            store.commit('generateProgram');
        }

        return {
            startOrPause,
            generateProgram
        }
    }
};
</script>

<style scoped>
.header {
    background-color: rgb(212, 94, 114);
    text-align: center;
    width: 100%;
}

.headerTextWrapper {
    display: flex;
    padding-left: 15px;
    justify-content: flex-start;
    align-items: center;
}

.headerButtonsWrapper {
    padding-right: 15px;
}

.headerButtonsWrapper .row {
    align-items: center;
    justify-content: flex-end;
}

.headerButtonsWrapper button {
    height: 50px;
    display: flex;
    max-width: 250px;
    width: 100%;
    justify-content: center;
    align-items: center;
    font-size: 20px;
}

h3 {
    color: white;
    font-size: 20px;
    font-weight: bold;
}
</style>