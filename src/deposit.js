const Deposit = () => {
  let nav = document.getElementById("deposit");
  nav.classList.add("active");
  let nav2 = document.getElementById("home");
  nav2.classList.remove("active");
  return <h1>Hola mundo Deposit</h1>;
};

export default Deposit;
