import { addClient } from "src/fetch-functions";
import { getUserClients } from "src/fetch-functions";
import { DashboardLayout } from "src/components/dashboard-layout";

import ClientPage from "../components/client-employee/index";

const Clients = () => {
  return (
    <ClientPage
      addResourceFunc={addClient}
      type="client"
      popoverTitle="Add a new Client"
      mainResourceFunc={getUserClients}
    />
  );
};

Clients.getLayout = (page) => <DashboardLayout>{page}</DashboardLayout>;

export default Clients;
