const AllData = () => {
  let nav = document.getElementById("allData");
  nav.classList.add("active");
  let nav2 = document.getElementById("home");
  nav2.classList.remove("active");
  return <h1>Hola mundo AllData</h1>;
};

export default AllData;
