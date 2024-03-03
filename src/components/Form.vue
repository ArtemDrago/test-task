<script >
    import { mapGetters } from 'vuex';
    import { toRaw } from 'vue';
    import CustomSelect from '../fitches/uiux/CustomSelect.vue';
    export default {
        data() {
            return {
                selectedSity: '',
                selectedWorkshop: '',
                selectedWorker: '',
                selectedBrigade: '',
                selectedShift: '',

                Sitys: [],
                Workshops: [],
                Workers: [],
            }
        },
        components:{
            CustomSelect
        },
        computed: {
            ...mapGetters([
                'getSitys',
                'getWorkshops',
                'getWorkers',
                'getBrigades',
                'getShifts',
            ]),
        },
        methods: {
            formsubmit() {
                let dataForm = {
                    sity: toRaw(this.selectedSity) || '',
                    workshop: toRaw(this.selectedWorkshop) || '',
                    worker: toRaw(this.selectedWorker) || '',
                    brigade: toRaw(this.selectedBrigade) || '',
                    shift: toRaw(this.selectedShift) || ''
                };

                if (
                    this.selectedSity != '' &&
                    this.selectedWorkshop != '' &&
                    this.selectedWorker != ''
                ) {
                    dataForm = JSON.stringify(dataForm);
                    let data = new Date().toLocaleDateString();

                    document.cookie = encodeURIComponent(data + '-cookie') + '=' + encodeURIComponent(dataForm);
                }

                this.selectedSity = '';
                this.selectedWorkshop = '';
                this.selectedWorker = '';
                this.selectedBrigade = '';
                this.selectedShift = '';
            },
            changeActiveSity(value) {
                this.selectedSity = value;
                if (this.selectedSity == '') {
                    this.Workshops = this.getWorkshops;
                    this.Workers = this.getWorkers;
                    return;
                }
                let activeWorkshops = [];
                this.Workshops = this.getWorkshops.filter(workshop => workshop.sity_id == this.selectedSity.id);
                this.Workshops.forEach(workshop => {
                    activeWorkshops.push(workshop.id);
                });
                this.Workers = this.getWorkers.filter(worker => activeWorkshops.indexOf(worker.workshop_id) != -1);
                this.selectedWorkshop = '';
                this.selectedWorker = '';
            },
            changeActiveWorkshop(value) {
                this.selectedWorkshop = value;
                if (this.selectedWorkshop == '') {
                    this.Workers = this.getWorkers;
                    this.Sitys = this.getSitys;
                    return;
                }
                this.Workers = this.getWorkers.filter(worker => worker.workshop_id == this.selectedWorkshop.id);

                this.Sitys = this.getSitys.filter(sity => sity.id == this.selectedWorkshop.sity_id);
                this.selectedWorker = '';
                this.selectedSity = this.Sitys[0];
            },
            changeActiveWorker(value) {
                this.selectedWorker = value;
                if (this.selectedWorker == '') {
                    this.Workshops = this.getWorkshops;
                    this.Sitys = this.getSitys;
                    return;
                }

                let sityId = null;
                for (let i = 0; i < this.getWorkshops.length; i++) {
                    if (this.getWorkshops[i].id == this.selectedWorker.workshop_id) {
                        sityId = this.getWorkshops[i].sity_id;
                        break;
                    }
                };

                if (!sityId) return;
                this.Workshops = this.getWorkshops.filter(workshop => workshop.id == this.selectedWorker.workshop_id);
                this.Sitys = this.getSitys.filter(sity => sity.id == sityId);

                this.selectedSity = this.Sitys[0];
                this.selectedWorkshop = this.Workshops[0];
            },
            changeActiveBrigade(value) {
                this.selectedBrigade = value;
            },
            changeActiveShift(value) {
                this.selectedShift = value;
            },
        },
        beforeMount() {
            this.Sitys = this.getSitys;
            this.Workers = this.getWorkers;
            this.Workshops = this.getWorkshops;
        },

    };    
</script>

<template>
    <div class="form-wrapper">
        <form 
            v-on:submit.prevent="formsubmit" 
            class="form"
        >
            <CustomSelect 
                v-bind:options="this.Sitys" 
                v-bind:activeOption="selectedSity" 
                @changeSelectedOption="changeActiveSity"
                title="Не выбран город" 
            />
            <CustomSelect 
                v-bind:options="this.Workshops" 
                v-bind:activeOption="selectedWorkshop" 
                @changeSelectedOption="changeActiveWorkshop" 
                title="Не выбран цэх" 
            />
            <CustomSelect 
                v-bind:options="this.Workers" 
                v-bind:activeOption="selectedWorker" 
                @changeSelectedOption="changeActiveWorker"
                title="Не выбран сотрудник" 
            />
            <CustomSelect 
                v-bind:options="getBrigades" 
                v-bind:activeOption="selectedBrigade" 
                @changeSelectedOption="changeActiveBrigade"
                title="Не выбрана бригада" 
            />
            <CustomSelect 
                v-bind:options="getShifts" 
                v-bind:activeOption="selectedShift" 
                @changeSelectedOption="changeActiveShift"
                title="Не выбрана смена" 
            />
            
            <button type="submit">submit</button>
        </form>
    </div>
</template>

<style scoped>
.form-wrapper {
    max-width: 1000px;
}
.form {
    display: flex;
    flex-direction: column;
    gap: 10px;
}
</style>../fitches/uiux/CustomSelect.vue
