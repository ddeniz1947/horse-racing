import { createApp } from 'vue'
import App from './App.vue'

import { createStore } from 'vuex'

const getRandomTime = () => {
    return Math.floor(Math.random() * 7) + 6;
}

const store = createStore({
    state() {
        return {
            horses: [
                { "name": "Şimşek Rüzgarı" },
                { "name": "Kara Yıldız" },
                { "name": "Altın Nal" },
                { "name": "Gece Kartalı" },
                { "name": "Ateş Pençesi" },
                { "name": "Yıldırım Pırıltısı" },
                { "name": "Kasırga Ruh" },
                { "name": "Fırtına Gölgesi" },
                { "name": "Parlayan Şafak" },
                { "name": "Çelik Adım" },
                { "name": "Gökyüzü Savaşçısı" },
                { "name": "Kum Fırtınası" },
                { "name": "Deniz Köpüğü" },
                { "name": "Kızıl Şimşek" },
                { "name": "Gümüş Rüzgar" },
                { "name": "Gölge Kanat" },
                { "name": "Safir Hız" },
                { "name": "Dikenli Yel" },
                { "name": "Efsane Nal" },
                { "name": "Siyah İnci" }
            ],
            defaultHorses: [],
            horsesNew: [],
            programList: [],
            resultsList: [],
            timeoutList: [],
            isRaceStarted: false,
            colors: [
                "red",
                "blue",
                "green",
                "yellow",
                "purple",
                "orange",
                "pink",
                "brown",
                "black",
                "white"
            ],
            currentRound: undefined,
            rounds: [
                { "round": 1, "distance": 1200 },
                { "round": 2, "distance": 1400 },
                { "round": 3, "distance": 1600 },
                { "round": 4, "distance": 1800 },
                { "round": 5, "distance": 2000 },
                { "round": 6, "distance": 2200 }
            ]

        }
    },
    mutations: {
        setDefaultHorses(state, payload) {
            if (payload) {
                state.defaultHorses = payload;
            } else {
                state.defaultHorses = state.horses.map(horse => ({
                    ...horse,
                    time: getRandomTime(),
                    color: state.colors[Math.floor(Math.random() * state.colors.length)]
                }));
            }

        },
        setNewHorses(state, payload) {
            if (payload) {
                state.horsesNew = payload;
            } else {
                state.horsesNew = state.horses.slice();
            }
        },
        setProgramList(state, payload) {
            state.programList = payload;
        },
        setResultsList(state, payload) {
            state.resultsList = payload;
        },
        setRaceStarted(state, payload) {
            state.isRaceStarted = payload;
        },
        setTimeoutList(state, payload) {
            state.timeoutList = payload;
        },
        setCurrentRound(state, payload) {
            state.currentRound = payload;
        },
        generateProgram(state) {
            store.commit('clearRace');
            state.isRaceStarted = false;
            state.horsesNew = store.state.horses.sort(() => 0.5 - Math.random()).slice(0, 10);
            const newProgramList = [];

            state.rounds.forEach((round) => {
                const programListObject = {
                    round: round,
                    horses: state.horsesNew
                };
                newProgramList.push(programListObject);
            });
            state.programList = newProgramList;
            state.resultsList = [];
        },
        clearRace(state) {
            state.timeoutList.forEach((timeout) => {
                clearTimeout(timeout);
            });
            const mockHorsesNew = state.horsesNew.slice();
            mockHorsesNew.forEach((horse) => {
                delete horse['time'];
                delete horse['random'];
            });
            state.horsesNew = mockHorsesNew;
            state.resultsList = [];
        }
    }
})

createApp(App).use(store).mount('#app');
