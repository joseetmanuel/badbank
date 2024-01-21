import Card from "./card";
import React, { useState } from "react";

const Deposit = () => {
  let ctx = JSON.parse(sessionStorage.getItem("users"));
  if (!ctx) ctx = [];
  const [id, setId] = useState(0);
  const [saldo_final, setSaldo_final] = useState("Saldo: $ " + ctx[id].saldo);
  const [status, setStatus] = useState("");
  const [cta, setCta] = useState(ctx[id]);
  const [deposito, setDeposito] = useState(0);

  let nav = document.getElementById("deposit");
  nav.classList.add("active");
  let nav2 = document.getElementById("home");
  nav2.classList.remove("active");

  const change = (e) => {
    setId(Number(e.target.value));
    const new_cta = ctx[e.target.value];
    setCta(new_cta);
    setSaldo_final("Saldo: $ " + new_cta.saldo);
  };

  const handleCreate = () => {
    if (deposito <= 0) return;
    const saldo = Number(cta.saldo) + Number(deposito);
    const new_cta = { ...cta, saldo };
    setCta(new_cta);
    setSaldo_final("Saldo: $ " + new_cta.saldo);
    ctx[id] = new_cta;
    sessionStorage.setItem("users", JSON.stringify(ctx));
    setDeposito(0);
  };

  const validate = (field) => {
    if (field === "") setStatus("El deposito debe ser número.");
    else if (Number(field) < 0)
      setStatus("No se permiten depósitos negativos.");
    else if (Number(field) === 0) setStatus("El deposito debe ser mayor a 0.");
    else setStatus("");
  };

  return (
    <Card
      header="Selecciona una cuenta para hacer un deposito"
      body={
        <>
          Cuenta
          <br />
          <select className="form-control" onChange={change}>
            {ctx.map((u) => (
              <option key={u.id} value={u.id}>
                {u.name}
              </option>
            ))}
          </select>
          <br />
          Deposito
          <br />
          <input
            type="number"
            className="form-control"
            id="deposito"
            value={deposito}
            style={{ textAlign: "right" }}
            onChange={(e) => {
              setDeposito(e.currentTarget.value);
              validate(e.currentTarget.value);
            }}
            onBlur={(e) => {
              validate(e.currentTarget.value);
            }}
          />
          <br />
          <button
            type="submit"
            disabled={!status && deposito > 0 ? false : true}
            className="btn btn-light"
            onClick={handleCreate}
          >
            Depositar
          </button>
        </>
      }
      title={saldo_final}
      status={status}
      color="red"
    />
  );
};

export default Deposit;
