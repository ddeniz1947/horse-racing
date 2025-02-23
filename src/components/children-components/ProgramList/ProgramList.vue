<template>
    <div class="header row">
        <div class="col-6 programListWrapper">
            <h6 class="headerText">Program</h6>
            <div v-for="program in store.state.programList" :key="program.id">
                <div class="littleTableHeader">{{ program.round.round }}ST Lap - {{ program.round.distance }}m</div>
                <table class="programListTable">
                    <tr>
                        <th class="indexCol">Position</th>
                        <th class="horseNameCol">Name</th>
                    </tr>
                    <tr v-for="(horse, index) in program.horses" :key="index">
                        <td class="indexCol">{{ index }}</td>
                        <td class="horseNameCol">
                            {{ horse.name }}
                        </td>
                    </tr>
                </table>
            </div>
        </div>
        <div class="col-6 resultListWrapper">
            <h6 class="headerText">Results</h6>
            <div v-for="result in store.state.resultsList" :key="result.id">
                <div class="littleTableHeader">{{ result.round.round }}ST Lap - {{ result.round.distance }}m</div>
                <table class="programListTable">
                    <tr>
                        <th class="indexCol">Position</th>
                        <th class="horseNameCol">Name</th>
                    </tr>
                    <tr v-for="(horse, index) in result.horses" :key="index">
                        <td class="indexCol">{{ index }}</td>
                        <td class="horseNameCol">
                            {{ horse.name }}
                        </td>
                    </tr>
                </table>
            </div>
        </div>
    </div>
</template>

<script>
import { useStore } from 'vuex';

export default {
    name: 'ProgramList',
    setup() {
        const store = useStore();
        return {
            store
        }
    }
};
</script>

<style scoped>
.headerText {
    font-size: 15px;
    color: black;
    background: steelblue;
    padding: 10px;
    margin: 0;
}

.littleTableHeader {
    background-color: rgb(212, 94, 114);
    font-size: 12px;
    color: black;
}

.programListWrapper,
.resultListWrapper {
    max-height: 50%;
    overflow-y: auto;
}

.resultListWrapper .headerText {
    background: rgb(64, 165, 64);
}

.programListTable {
    width: 100%;
}

.programListTable th {
    border: 1px solid black;
    background: rgb(201, 199, 199);
    font: 20px;
    color: black;
    height: 10px;
}

.programListTable td {
    border: 1px solid black;
}

.indexCol {
    width: 30%;
}

.horseNameCol {
    width: 70%;
}

.programListTable tr {
    width: 100%;
    height: 10px;
}
</style>