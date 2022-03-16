import { addEmployee } from "src/fetch-functions";
import { getUserEmployees } from "src/fetch-functions";
import { DashboardLayout } from "src/components/dashboard-layout";

import EmployeePage from "../components/client-employee/index";

const Employees = () => {
  return (
    <EmployeePage
      addResourceFunc={addEmployee}
      type="employee"
      popoverTitle="Add an Employee"
      mainResourceFunc={getUserEmployees}
    />
  );
};

Employees.getLayout = (page) => <DashboardLayout>{page}</DashboardLayout>;

export default Employees;
