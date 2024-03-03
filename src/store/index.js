import { createStore } from 'vuex'
import {brigades, shifts, sitys, workers, workshops} from './modules/stack';

const store = createStore({
    state: {
        sitys: sitys,
        workshops: workshops,
        workers: workers,
        brigades: brigades,
        shifts: shifts,
    },
    getters: {
        getSitys(state) {
            return state.sitys;
        },
        getWorkshops(state) {
            return state.workshops;
        },
        getWorkers(state) {
            return state.workers;
        },
        getBrigades(state) {
            return state.brigades;
        },
        getShifts(state) {
            return state.shifts;
        },
    },
});

export default store;
