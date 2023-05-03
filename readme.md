# Hospital API

Hospital API is a RESTful API built using Node.js, Express.js, and MongoDB. This API allows hospitals to manage their patients, and doctors. It provides endpoints for creating, and fetching patient records. Additionally, the API supports authentication and authorization using JSON Web Tokens (JWTs).

## Setup

To get started with the Hospital API, follow these steps:

1. Clone the repository:

    ```bash
    git clone https://github.com/Kavinkumar-97/hospital-api.git
    ```

2. Install dependencies:

    ```bash
    cd hospital-api
    npm install
    ```

3. Start the server:

    ```bash
    npm start
    ```

## Endpoints

Server is listening to [localhost:7878](http://localhost:7878/). The Hospital API provides the following endpoints:

| Endpoint | Method | Description |
| -------- | ------ | ----------- |
| `api/doctors/register` | POST | Register doctor |
| `api/doctors/login` | POST | Log in doctor |
| `api/patients/register` | POST | Register new patient |
| `api/patients/:id/create_report` | POST | Create a new report |
| `api/patients/:id/all_report` | GET | Get all the reports of a patient oldest to latest |
| `api/reports/:status` | GET | List all the reports of all the patients filtered by a specific status |

## Authentication

The Hospital API uses JSON Web Tokens (JWTs) for authentication and authorization. To access the API endpoints, clients must include a JWT in the Authorization header of their requests in the following format:

```text
Authorization: Bearer <token>
```

To obtain a JWT, clients must first register an account using the `/api/doctors/register` endpoint, and then log in using the `/api/doctors/login` endpoint. The login endpoint returns a JWT that can be used to access the protected endpoints.
