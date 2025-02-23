<template>
    <div class="random-horses-list">
        <h3 class="allHorsesListHeader">Horse List(1-20)</h3>
        <table class="allHorsesListTable">
            <tr>
                <th>Name</th>
                <th>Condition</th>
                <th>Color</th>
            </tr>
            <tr v-for="horse in store.state.defaultHorses" ref="horsesTemplate" :key="horse.random">
                <td>{{ horse.name }}</td>
                <td>
                    {{ horse.time }}
                </td>
                <td>{{ horse.color }}</td>
            </tr>
        </table>
    </div>
</template>

<script>
import { useStore } from 'vuex';
export default {
    name: 'RandomHorsesList', 
    setup() {
        const store = useStore();
        return {
            store
        }
    }
};
</script>

<style scoped>
.allHorsesListTable {
    max-height: 500px;
    overflow-y: auto;
    height: 500px;
    min-height: 0px;
    display: block;
}

.allHorsesListTable th {
    width: 100%;
    border: 1px solid black;
    background: rgb(201, 199, 199);
    font: 20px;
    color: black;
    height: 40px;
}

.allHorsesListTable td {
    width: 100%;
    border: 1px solid black;
    padding: 10px;
}

.allHorsesListTable tr {
    width: 100%;
    height: 30px;
}

.allHorsesListHeader {
    display: flex;
    align-items: center;
    justify-content: flex-start;
    padding-left: 15px;
    height: 50px;
    font-size: 20px;
    background-color: yellow;
    text-align: center;
    margin: 0px;
}
</style>