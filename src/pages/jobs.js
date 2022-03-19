import Head from "next/head";

import { connect } from "react-redux";
import { useQuery } from "react-query";
import { getUserJobs, getUserEmployees } from "src/fetch-functions";

import { Box, Container, Grid } from "@mui/material";

import { DashboardLayout } from "../components/dashboard-layout";
import { JobListToolbar } from "src/components/job/job-list-toolbar";
import JobCard from "../components/job/job-card";

const Customers = ({ userId }) => {
  const { data, status } = useQuery("jobs", () => getUserJobs(userId));
  const {
    data: allEmployees,
    isLoading: employeesLoading,
    status: employeeStatus,
  } = useQuery("employees", () => getUserEmployees(userId));

  const deleteEmployeeFromJob = (job_id, employee_id) => {
    console.log(`deleting ${employee_id} from job: ${job_id}`);
  };

  return (
    <>
      <Head>
        <title>Jobs | Material Kit</title>
      </Head>
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          py: 8,
        }}
      >
        <Container maxWidth={false}>
          <JobListToolbar />

          {status === "success" && employeeStatus === "success" && (
            <Grid container spacing={2} mt={3}>
              {data.map((job) => {
                return (
                  <Grid item>
                    <JobCard
                      key={job.job_id}
                      job={job}
                      isLoading={employeesLoading}
                      allEmployees={allEmployees}
                      deleteEmployeeFromJob={deleteEmployeeFromJob}
                    />
                  </Grid>
                );
              })}
            </Grid>
          )}
        </Container>
      </Box>
    </>
  );
};

Customers.getLayout = (page) => <DashboardLayout>{page}</DashboardLayout>;

const mapStateToProps = (state) => ({
  userId: state.user.user_id,
});

export default connect(mapStateToProps)(Customers);
