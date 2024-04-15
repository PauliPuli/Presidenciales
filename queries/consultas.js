import pool from "../config/db.js";

//CREAR O REGISTRAR CANDIDATOS
const crearCandidato = async (datos) => {
  try {
    const query = {
      text: "insert into candidatos (nombre, foto,color) values($1,$2,$3) returning *",
      values: datos,
    };
    const response = await pool.query(query);
    return response.rows[0];
  } catch (error) {
    console.log(error.message);
  }
};

const verCandidatos = async () => {
  try {
    const query = {
      text: "select * from candidatos",
    };
    const response = await pool.query(query);
    return response.rows;
  } catch (error) {
    console.log(error.message);
  }
};

const editarCandidatos = async (datos) => {
  try {
    const query = {
      text: "update candidatos set nombre=$1, foto=$2 where id=$3 returning *",
      values: datos,
    };
    const response = await pool.query(query);
    return response.rows;
  } catch (error) {
    console.log(error.message);
  }
};
export { crearCandidato, verCandidatos, editarCandidatos };
