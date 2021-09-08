const url = "https://warren-transactions-api.herokuapp.com/api";

export const getTransactions = async () => {
  const resp = await fetch(`${url}/transactions`);
  return await resp.json();
};
