# Node.js PostgreSQL CRUD Rest API Example

### This project is a simple example of how to create a CRUD Rest API using Node.js and PostgreSQL.

## Getting Started

### 1. Install the dependencies:

```bash
  npm install
```

### 2. Create a PostgreSQL database and user.

### 3. In the `.env` file, set the following environment variables:

```
PORT=3000
DB_USER=your_user_name
DB_HOST=your_host
DB_DATABASE=your_database_name
DB_PASSWORD=your_password
DB_PORT=your_db_password
```

### 4.Development Server

Start the development server on `http://localhost:3000`

```bash
npm run dev
````

### The application will be running on port 3000. You can test the APIs using Postman or another API testing tool.

APIs The following APIs are available:

* `GET /api/v1/students` Get all students.
* `GET /api/v1/students/:id` Get a student by ID.
* `POST /api/v1/students` Create a new student.
* `PUT /api/v1/students/:id` Update a student by ID.
* `DELETE /api/v1/students/:id` Delete a student by ID.

### Example

To create a new student, you can use the following Postman request:

`POST /api/v1/students`

```
{
  "name": "Jhon",
  "email": "jhon@mail.com",
  "age": 20,
  "dob": 2003-05-31
}
```


The response will be a JSON object containing the newly created tutorial:
```
  {
    "message": "Student created successfully!"
  }
```

### Testing

You can test the APIs using Postman or another API testing tool. Here are some examples of requests you can make:

* **Get all students**

`GET /api/v1/students`

```
[
  {
    "id": 1,
    "name": "Anna",
    "email": "anna@mail.com",
    "age": 23,
    "dob": "2000-07-17T19:00:00.000Z"
  },
  {
    "id": 2,
    "name": "elsa",
    "email": "elsa@mail.ru",
    "age": 36,
    "dob": "1987-07-17T17:00:00.000Z"
  },
  {
    "id": 3,
    "name": "frank",
    "email": "frank@mail.com",
    "age": 37,
    "dob": "1986-07-17T17:00:00.000Z"
  }
]
```
* **Get a student by ID**

`GET /api/v1/students/1`

```
{
  "id": 1,
  "name": "Anna",
  "email": "anna@mail.com",
  "age": 23,
  "dob": "2000-07-17T19:00:00.000Z"
}

```


* **Create a new student**

`POST /api/v1/students`

```
{
  "name": "jhon",
  "email": "jhon@mail.com",
  "age": 20,
  "dob": "2003-05-30"
}

```

* **Update a student by ID**

`PUT /api/v1/students/1`

```
{
  "name": "Anna updated",
  "email": "anna@mail.com",
  "age": 23,
  "dob": "2000-07-17"
}
```
* **Delete a student by ID**

`DELETE /api/v1/students/1`

## Further Reading

* [Express](https://expressjs.com/)
* [PostgreSQL](https://www.postgresql.org/)