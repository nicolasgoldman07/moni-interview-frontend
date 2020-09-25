import React, { useState, useLayoutEffect } from "react";
import axios from "axios";
import ReactLoading from "react-loading";

import "./home.scss";
import AlertDialog from "../../components/ApiDialog/ApiDialog";

const Home = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [gender, setGender] = useState("other");
  const [email, setEmail] = useState("");
  const [dni, setDni] = useState("");
  const [apiResposeStatus, setApiResposeStatus] = useState("");
  const [apiRequestsFulfilled, setApiRequestsFulfilled] = useState(0);
  const [loading, setLoading] = useState(false);

  async function onLoanSubmit(e) {
    e.preventDefault();
    setLoading(true);
    await axios
      .get("/api/get/loan-possible", {
        params: {
          dni: dni,
        },
      })
      .then((res) => {
        const { status } = res.data;
        setApiRequestsFulfilled(apiRequestsFulfilled + 1);
        setApiResposeStatus(status);
      });
  }

  useLayoutEffect(() => {
    if (!apiResposeStatus) return;
    async function postData() {
      await axios({
        method: "post",
        url: "/api/post/add-loan",
        data: {
          firstName: firstName,
          lastName: lastName,
          gender: gender,
          email: email,
          dni: dni,
          loanStatus: apiResposeStatus,
        },
      });
    }
    postData();
    setLoading(false);
  }, [apiResposeStatus]);

  return (
    <div className="home-container">
      <div className="right-container">
        <h1>Prestamos al instante</h1>
        <h2>
          Si necesitás un préstamo, ¡aca estoy yo! <br />
        </h2>
        <h3> Te presto hasta $65.000 en 6 cuotas.</h3>
        <img
          src={process.env.PUBLIC_URL + "/moni-home.png"}
          alt="moni-home"
          className="home-right-image"
        />
        <h3 className="form-title">
          Completa tus datos en el formulario de la izquierda, y revisa si
          tienes la posibilidad de pedir un prestamo con Moni al instante
        </h3>
      </div>
      <div className="left-container">
        {loading && (
          <ReactLoading
            type={"cylon"}
            color={"#5493e7"}
            height={"15%"}
            width={"15%"}
          />
        )}

        {!loading && apiRequestsFulfilled !== 0 && (
          <AlertDialog
            apiRequestsFulfilled={apiRequestsFulfilled}
            apiResposeStatus={apiResposeStatus}
          />
        )}
        {!loading && (
          <form className="form-container">
            <h3 className="form-title">- Ingresa tus datos -</h3>
            <div className="form-input-container">
              <input
                type="text"
                name="firstName"
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
                className="form-input"
                placeholder="Nombre/s"
                autoComplete="off"
                required
              />
              <input
                type="text"
                name="lastName"
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
                className="form-input"
                placeholder="Apellido/s"
                autoComplete="off"
                required
              />
              <select
                name="gender"
                value={gender}
                className="form-input"
                onChange={(e) => setGender(e.target.value)}
              >
                <option value="masculino">Masculino</option>
                <option value="female">Femenino</option>
                <option value="other">Otro</option>
              </select>
              <input
                type="email"
                name="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="form-input"
                placeholder="Email"
                autoComplete="off"
                required
              />
              <input
                type="text"
                name="dni"
                value={dni}
                onChange={(e) => setDni(e.target.value)}
                className="form-input"
                placeholder="DNI"
                autoComplete="off"
                required
              />
            </div>
            <button className="form-button" onClick={(e) => onLoanSubmit(e)}>
              Consultar
            </button>
          </form>
        )}
      </div>
    </div>
  );
};

export default Home;
