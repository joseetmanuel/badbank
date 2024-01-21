const Withdraw = () => {
  let nav = document.getElementById("withdraw");
  nav.classList.add("active");
  let nav2 = document.getElementById("home");
  nav2.classList.remove("active");
  return <h1>Hola mundo Withdraw</h1>;
};

export default Withdraw;
