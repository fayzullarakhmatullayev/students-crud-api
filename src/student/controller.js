import pool from "../../db.js";
import {
  getAllStudentsQuery,
  getStudentByIdQuery,
  createStudentQuery,
  checkIfStudentEmailExistsQuery,
  updateStudentQuery,
  deleteStudentQuery,
} from "./queries.js";

export const getAllStudents = (req, res) => {
  pool.query(getAllStudentsQuery, (error, results) => {
    if (error) throw error;
    res.status(200).json(results.rows);
  });
};

export const getStudentById = (req, res) => {
  const id = parseInt(req.params.id);
  if(!id) return res.status(400).json({ message: "Invalid ID!" })
  pool.query(getStudentByIdQuery, [id], (error, results) => {
    if (error) throw error;
    if(results.rows.length === 0) return res.status(404).json({ message: "Student not found!" })
    res.status(200).json(...results.rows);
  });
};

export const createStudent = (req, res) => {
  const { name, email, age, dob } = req.body;
  pool.query(checkIfStudentEmailExistsQuery, [email], (error, results) => {
    if (error) throw error;
    if (results.rows.length > 0) {
      return res.status(409).json({ message: "Student with this email already exists!" });
    }
    pool.query(createStudentQuery, [name, email, age, dob], (error, results) => {
      if (error) throw error;
      res.status(201).json({ message: "Student created successfully!" });
    });
  });
};

export const updateStudent = (req, res) => {
  const id = parseInt(req.params.id);
  if(!id) return res.status(400).json({ message: "Invalid ID!" })
  const { name, email, age, dob } = req.body;

  pool.query(getStudentByIdQuery, [id], (error, results) => {
    if (error) throw error;
    if (!results.rows.length) return res.status(404).json({ message: "Student not found!" });
    pool.query(updateStudentQuery, [name, email, age, dob, id], (error, results) => {
      if (error) throw error;
      res.status(200).json({ message: "Student updated successfully!" });
    });
  });
};

export const deleteStudent = (req, res) => {
  const id = parseInt(req.params.id);
  if(!id) return res.status(400).json({ message: "Invalid ID!" })
  pool.query(getStudentByIdQuery, [id], (error, results) => {
    if (error) throw error;
    if (results.rows.length === 0) return res.status(404).json({ message: "Student not found!" });
    pool.query(deleteStudentQuery, [id], (error, results) => {
      if (error) throw error;
      res.status(200).json({ message: "Student deleted successfully!" });
    });
  });
};
