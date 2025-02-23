<template>
  <div class="row row-center">
    <div class="col col-center w-100">
      <HeaderLine />
    </div>
  </div>
  <div class="row mainContainer">
    <div class="col col-3">
      <RandomHorsesList />
    </div>
    <div class="col col-6">
      <RacingHorsesTable />
    </div>
    <div class="col col-5">
      <ProgramList />
    </div>
  </div>
</template>

<script>
import { onMounted } from 'vue';
import RandomHorsesList from './children-components/RandomHorsesList/RandomHorsesList.vue';
import RacingHorsesTable from './children-components/RacingHorsesTable/RacingHorsesTable.vue';
import HeaderLine from './common/HeaderLine.vue';
import ProgramList from './children-components/ProgramList/ProgramList.vue';
import { useStore } from 'vuex';
export default {
  name: 'RacePage',
  components: {
    RandomHorsesList,
    RacingHorsesTable,
    ProgramList,
    HeaderLine
  },
  setup() {
    const store = useStore();

    store.subscribe((mutations, state) => {
      if (mutations.type === 'setRaceStarted') {
        if (state.isRaceStarted === true) {
          startRace(1);
        } else {
          store.commit('clearRace');
        }
      }
    });

    const getRandomTime = () => {
      return Math.floor(Math.random() * 7) + 6;
    };

    const startRace = (counter) => {
      if (counter === 7) {
        store.commit('setCurrentRound', "Yarış bitti");
        return;
      } else {
        store.commit('setCurrentRound', counter.toString() + ". round");
      }

      let biggestTime = 0;
      const mockHorsesNew = store.state.horsesNew.slice();
      mockHorsesNew.map((horse) => {
        horse['time'] = getRandomTime() + counter;
        horse['random'] = Math.random();
        if (horse['time'] > biggestTime) {
          biggestTime = horse['time'];
        }
        return horse;

      });
      store.commit('setNewHorses', mockHorsesNew);

      const newDefaultHorses = store.state.defaultHorses.slice();
      newDefaultHorses.forEach((horse, firstIndex) => {
        store.state.horsesNew.forEach((horseNew) => {
          if (horseNew.name === horse.name) {
            newDefaultHorses[firstIndex].time = horseNew.time;
          }
        }
        )
      });

      store.commit('setDefaultHorses', newDefaultHorses);

      const newTimeoutList = store.state.timeoutList.slice();
      const timeout = setTimeout(() => {
        const newResultList = store.state.resultsList.slice();
        const sortedHorses = Array.from(store.state.horsesNew).sort((a, b) => a.time - b.time);
        newResultList.push({
          round: { round: counter, distance: store.state.rounds[counter - 1].distance },
          horses: sortedHorses
        });

        store.commit('setResultsList', newResultList);
        startRace(counter + 1);
      }, (biggestTime + 1) * 1000);

      newTimeoutList.push(timeout);
      store.commit('setTimeoutList', newTimeoutList);
    };

    onMounted(() => {
      store.commit('setDefaultHorses');
      store.commit('setNewHorses');
      store.commit('generateProgram');
    });


  }
}

</script>

<style scoped>
.startRaceBtn {
  width: 100%;
  color: black;
  font: bold 20px/30px Helvetica, Verdana, sans-serif;
  max-width: 200px;
}

.mainContainer {
  margin-top: 15px;
}
</style>
