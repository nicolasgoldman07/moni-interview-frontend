import React, { useEffect, useState } from "react";
import axios from "axios";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
import EditModal from "../../components/EditModal/EditModal";
import "./loans-list.scss";

function LoansList() {
  const [usersWithLoans, setUsersWithLoans] = useState([]);

  useEffect(() => {
    async function fetchUsersWithLoans() {
      await axios.get("/api/get/allLoans").then((res) => {
        setUsersWithLoans(res.data);
      });
    }
    fetchUsersWithLoans();
  }, []);

  async function onDeleteHandler(e, IdLoan) {
    e.preventDefault();
    await axios
      .delete("/api/delete/delete-loan", {
        params: {
          IdLoan: IdLoan,
        },
      })
      .then(window.location.reload(false));
  }

  return (
    <div className="loans-list-container">
      <h1>Prestamos solicitados</h1>
      <h3>
        Aqui abajo encontrara todos las consultas sobre prestamos con sus
        respectivos resultados
      </h3>
      <table>
        <thead>
          <tr>
            <th>Loan ID</th>
            <th>DNI</th>
            <th>Name</th>
            <th>Email</th>
            <th>Gender</th>
            <th>Loan Status</th>
            <th>Edit</th>
            <th>Remove</th>
          </tr>
        </thead>
        <tbody>
          {usersWithLoans &&
            usersWithLoans.map((user) => (
              <tr key={user.uid}>
                <th>{user.uid}</th>
                <th>{user.dni}</th>
                <th>{`${user.firstName} ${user.lastName}`}</th>
                <th>{user.email}</th>
                <th>{user.gender}</th>
                <th>{user.loanStatus}</th>
                <th>
                  <EditModal userLoan={user} />
                </th>
                <th>
                  <FontAwesomeIcon
                    icon={faTrash}
                    onClick={(e) => onDeleteHandler(e, user.uid)}
                  />
                </th>
              </tr>
            ))}
        </tbody>
      </table>
    </div>
  );
}

export default LoansList;
