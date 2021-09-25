<template>
  <select name="" id="" v-model="selected">
    <option
      v-for="option in options"
      :key="option.value"
      :value="option.value"
      >{{ option.name }}</option
    >
  </select>
</template>

<script>
export default {
  props: {
    options: Array,
  },
  data() {
    return {
      selected: "",
    };
  },
  created() {
    this.selected = this.options[0].value;
  },
  watch: {
    selected() {
      this.$emit("on-select", this.selected);
    },
  },
};
</script>

<style scoped></style>
