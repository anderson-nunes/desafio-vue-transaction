<template>
  <Header />
  <div class="filters container">
    <Search
      class="search-container"
      placeholder="Pesquise por um título"
      @on-search="getTransactionByTitle"
    />
    <Select :options="options" @on-select="getTransactionByStatus" />
  </div>
  <TransactionTable class="container" :transactions="transactionsFiltered" />
</template>

<script>
import Header from "./components/Header.vue";
import Search from "./components/Search.vue";
import Select from "./components/Select.vue";
import TransactionTable from "./components/TransactionTable.vue";
import { getTransactions } from "./service/transaction";
import Modal from "./components/Modal.vue";

export default {
  name: "App",
  components: {
    Header,
    Search,
    Select,
    TransactionTable,
    Modal,
  },
  data() {
    return {
      searchTitle: "",
      searchStatus: "all",
      options: [
        {
          name: "Todos",
          value: "all",
        },
        {
          name: "Solicitado",
          value: "created",
        },
        {
          name: "Processando",
          value: "processing",
        },
        {
          name: "Concluído",
          value: "processed",
        },
      ],
      transactions: [],
      transactionsFiltered: [],
    };
  },
  methods: {
    getTransactionByTitle(searchValue) {
      this.searchTitle = searchValue;
      this.filteredTransactions();
    },
    getTransactionByStatus(statusValue) {
      this.searchStatus = statusValue;
      this.filteredTransactions();
    },
    filteredTransactions() {
      const titleParsed = this.searchTitle.toLowerCase();

      this.transactionsFiltered = this.transactions.filter((transaction) => {
        const transactionTitle = transaction.title.toLowerCase();
        const validation =
          this.searchStatus == "all"
            ? transactionTitle.includes(titleParsed)
            : transactionTitle.includes(titleParsed) &&
              transaction.status == this.searchStatus;

        return validation;
      });
    },
  },
  async created() {
    this.transactions = await getTransactions();
    this.transactionsFiltered = this.transactions;
  },
};
</script>

<style>
@import "./styles/general.css";
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  background: white;
}
* {
  margin: 0;
  padding: 0;
}

.filters {
  padding: 20px 0;
  width: 100%;
  display: flex;
  justify-content: start;
}
.search-container {
  margin-right: 20px;
}
</style>
