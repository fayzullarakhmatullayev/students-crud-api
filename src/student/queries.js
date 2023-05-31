export const getAllStudentsQuery = "SELECT * FROM students";
export const getStudentByIdQuery = "SELECT * FROM students WHERE id = $1";
export const checkIfStudentEmailExistsQuery = "SELECT * FROM students WHERE email = $1";
export const createStudentQuery =
  "INSERT INTO students (name, email, age, dob) VALUES ($1, $2, $3, $4)";
export const updateStudentQuery =
  "UPDATE students SET name = $1, email = $2, age = $3, dob = $4 WHERE id = $5";
export const deleteStudentQuery = "DELETE FROM students WHERE id = $1";
