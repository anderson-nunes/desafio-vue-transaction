<template>
  <div>
    <table>
      <thead>
        <tr>
          <th v-for="(title, index) in titles" :key="index">
            {{ title }}
          </th>
        </tr>
      </thead>
      <tbody>
        <tr
          v-for="transaction in transactions"
          :key="transaction.id"
          @click="abrirModal(transaction)"
        >
          <td>{{ transaction.title }}</td>
          <td>{{ transaction.description }}</td>
          <td>{{ transaction.status }}</td>
          <td>{{ transaction.amount }}</td>
        </tr>
      </tbody>
    </table>
    <Dialog
      :showDialog="showDialog"
      :transaction="transactionSelected"
      @on-close="closeModal"
    />
  </div>
</template>

<script>
import Dialog from "./Dialog.vue";
export default {
  components: {
    Dialog,
  },
  data() {
    return {
      transactionSelected: {},
      showDialog: false,
      titles: ["Título", "Descrição", "Status", "Valor"],
    };
  },
  props: {
    transactions: Array,
  },
  methods: {
    abrirModal(transaction) {
      this.showDialog = true;
      this.transactionSelected = transaction;
    },
    closeModal() {
      this.showDialog = false;
    },
  },
};
</script>

<style scoped>
table {
  border: 1px solid black;
  border-collapse: collapse;
  width: 100%;
}
th {
  background: #ccc;
}
td,
th {
  text-align: left;
  border-right: 1px solid black;
  padding: 10px 5px;
}
tr:nth-child(even) {
  background: #eee;
}

tbody tr {
  cursor: pointer;
}

tbody tr:hover {
  background: #ccc;
}
</style>
