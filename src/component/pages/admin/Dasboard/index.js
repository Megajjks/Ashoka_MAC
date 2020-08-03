import React, { useState, useEffect } from "react";
import CommitmentCardList from "../../../ui/CommitmentCardList";
import Spinner from "../../../ui/Spinner";
import Error from "../../../ui/Error";
import api from "../../../../helpers/api";

const Dasboard = () => {
  const [data, setData] = useState([]);
  const [status, setStatus] = useState({
    loader: false,
    isError: false,
    message: "",
  });

  useEffect(() => {
    const fetchCommitments = async () => {
      setStatus({ loader: true });
      try {
        const response = await api.get("/commitments");
        setData(response.data);
        setStatus({
          loader: false,
          isError: false,
        });
      } catch (e) {
        console.log(e);
        setStatus({
          loader: false,
          isError: true,
          message:
            "Por el momento no se pueden obtener los datos, verifique su conexión",
        });
      }
    };
    fetchCommitments();
  }, []);

  return (
    <div>
      <h1>Dasboard</h1>
      <CommitmentCardList
        commitments={data}
        btnTitle="Leer compromiso"
        btnUrlBase="/commitment_report"
      />
      {status.loader ? <Spinner /> : null}
      {status.isError ? <Error /> : null}
    </div>
  );
};

export default Dasboard;
