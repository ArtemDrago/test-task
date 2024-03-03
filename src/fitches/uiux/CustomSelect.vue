<script>
    export default {
        props:{
            options: Array,
            activeOption: Object,
            title: String
        },
        data() {
            return {
                selectedOption: this.activeOption,
            }
        },
        methods: {
            changeActiveOption() {
                this.$emit('changeSelectedOption', this.selectedOption);
            },
        },
        beforeUpdate() {
            this.selectedOption = this.activeOption;
        },
    };
</script>
<template>
    <select v-model="selectedOption" @change="changeActiveOption">
        <option value="">{{ title }}</option>
        <option v-bind:value="option" v-for="option in options">
            {{ option.name }}
        </option>
    </select>
</template>