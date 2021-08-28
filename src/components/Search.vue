<template>
  <input type="text" :placeholder="placeholder" v-model="searchValue" />
</template>

<script>
export default {
  props: {
    placeholder: String,
  },
  data() {
    return {
      searchValue: "",
    };
  },
  watch: {
    searchValue() {
      this.$emit("on-search", this.searchValue);
    },
  },
};
</script>

<style scoped>
input {
  padding: 10px 20px;
}
</style>
