<template>
  <div @click="closeDialog" class="dialog" v-show="showDialog">
    <div @click.stop class="dialog-container">
      <h1>{{ transaction.title }}</h1>
      <h2 class="trans-1">Transferindo de</h2>
      <div class="amount">
        <h3>Férias</h3>
        <h3>{{ transaction.amount }}</h3>
      </div>
      <div>
        <h2 class="trans-1">Para</h2>
      </div>
      <div class="amount">
        <h3>Conta Warren</h3>
        <h3>{{ transaction.amount }}</h3>
      </div>
      <button @click="closeDialog">fechar</button>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    showDialog: Boolean,
    transaction: Object,
  },
  methods: {
    closeDialog() {
      this.$emit("on-close");
    },
  },
};
</script>

<style>
.dialog {
  width: 100%;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.5); /* Black background with opacity */
  z-index: 2;
  position: fixed;
  top: 0;
  left: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  padding-top: 20px;
}

.dialog-container {
  width: 500px;
  height: 300px;
  background: white;
  padding: 30px;
}

.trans-1 {
  padding-top: 40px;
  text-align: start;
  border-bottom: 2px solid black;
}

.trans-2 {
  text-align: start;
}

.amount {
  display: flex;
  justify-content: space-between;
  padding-top: 20px;
}
</style>
