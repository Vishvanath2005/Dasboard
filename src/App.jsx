import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "./Pages/layout/Layout";
import Institution from "./Pages/institution/Institution";
import Leads from "./Pages/leads/Leads";
import Enquires from "./Pages/enquires/Enquires";
import Tickets from "./Pages/tickets/Tickets";
import Users from "./Pages/users/Users";
import Interview from "./Pages/interview/Interview";
import Subscription from "./Pages/subscription/Subscription";
import Settings from "./Pages/settings/Settings";
import Packages from "./Pages/packages/Packages";
import AssignTickets from "./Pages/tickets/AssignTickets";
import LeadsDetails from "./Pages/leads/LeadsDetails";
import UsersTabs from "./Pages/users/UsersTabs";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route path="/insitution" element={<Institution />} />
            <Route path="/leads" element={<Leads />} />
            <Route path="/leads/leads_details" element={<LeadsDetails />} />
            <Route path="/enquires" element={<Enquires />} />
            <Route path="/tickets" element={<Tickets />} />
            <Route path="/tickets/assign_tickets" element={<AssignTickets />} />
            <Route path="/packages" element={<Packages />} />
            <Route path="/users" element={<Users />} />
            <Route path="/users/users_tab" element={<UsersTabs />} />
            <Route path="/interview" element={<Interview />} />
            <Route path="/subscription" element={<Subscription />} />
            <Route path="/settings" element={<Settings />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
