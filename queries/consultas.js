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


export { crearCandidato }