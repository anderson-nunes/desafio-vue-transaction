<template>
  <table>
    <thead>
      <tr>
        <th v-for="(title, index) in titles" :key="index">
          {{ title }}
        </th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="transaction in transactions" :key="transaction.id">
        <td>{{ transaction.title }}</td>
        <td>{{ transaction.description }}</td>
        <td>{{ transaction.status }}</td>
        <td>{{ transaction.amount }}</td>
      </tr>
    </tbody>
  </table>
</template>

<script>
export default {
  data() {
    return {
      titles: ["Título", "Descrição", "Status", "Valor"],
    };
  },
  props: {
    transactions: Array,
  },
};
</script>

<style scoped>
table {
  border: 1px solid black;
  border-collapse: collapse;
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
