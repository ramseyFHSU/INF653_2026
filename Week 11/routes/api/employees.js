const express = require('express');
const router = express.Router();
const {
  GetAllEmployees,
  CreateNewEmployee,
  UpdateEmployee,
  DeleteEmployee,
  GetEmployee
} = require('../../controller/employeeController');

router
  .route("/")
  .get(GetAllEmployees)
  .post(CreateNewEmployee)
  .put(UpdateEmployee)
  .delete(DeleteEmployee);

router.route("/:id").get(GetEmployee);

module.exports = router;
