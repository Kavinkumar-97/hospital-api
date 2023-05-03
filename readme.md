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

### Doctor

| Endpoint | Method | Description |
| -------- | ------ | ----------- |
| `api/doctors/register` | POST | Register doctor using username, mobile number and password |
| `api/doctors/login` | POST | Log in doctor using username and password. Return JWT Token. That need to passed as `Bearer Token` in header for patient and reports api |

### Patient

| Endpoint | Method | Description |
| -------- | ------ | ----------- |
| `api/patients/register` | POST | Register new patient |
| `api/patients/:id/create_report` | POST | Create report for the patient |
| `api/patients/:id/all_report` | GET | List all the reports of a patient oldest to latest |

### Report

| Endpoint | Method | Description |
| -------- | ------ | ----------- |
| `api/reports/:status` | GET | List all the reports of all the patients filtered by a specific status |
