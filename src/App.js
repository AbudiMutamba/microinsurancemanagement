import MyRouter from "./routes/MyRouter";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import {
  Login,
  Logout,
  ForgotPassword,
  Dashboard,
  Clients,
  Agents,
  Logs,
  Reports,
} from "./pages";
import PrivateRoute from "./routes/PrivateRoute";
import { SuperAdminRoutes } from "routes";
import Organisations from "./pages/admin/Organisations";
import AddOrganisation from "pages/admin/AddOrganisation";
import Admins from "pages/superAdmin/Admins";
import { Mtp, AddUsers, Claims, Settings } from "./pages";
import SystemLogs from "./pages/superAdmin/SystemLogs";
import Windscreen from "components/forms/Windscreen";
import Comprehensive from "components/forms/Comprehensive";
import StickerMgt from "pages/admin/StickerMgt";
import Supervisors from "pages/admin/Supervisors";

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/login" element={<Login />} />
        <Route path="/forgot-password" element={<ForgotPassword />} />
        <Route path="/logout" element={<Logout />} />

        {/* <SuperAdminRoutes /> */}
        <Route path="/superadmin" element={<SuperAdminRoutes />}>
          <Route
            index
            element={
              <PrivateRoute>
                <Dashboard />
              </PrivateRoute>
            }
          />
          <Route
            path="dashboard"
            element={
              <PrivateRoute>
                <Dashboard />
              </PrivateRoute>
            }
          />
          <Route
            path="organisations"
            element={
              <PrivateRoute>
                <Organisations />
              </PrivateRoute>
            }
          />
          <Route
            path="add-organisations"
            element={
              <PrivateRoute>
                <AddOrganisation />
              </PrivateRoute>
            }
          />
          <Route
            path="admins"
            element={
              <PrivateRoute>
                <Admins />
              </PrivateRoute>
            }
          />
          <Route
            path="add-admin"
            element={
              <PrivateRoute>
                <AddUsers role="admin" />
              </PrivateRoute>
            }
          />
          <Route
            path="claims"
            element={
              <PrivateRoute>
                <Claims />
              </PrivateRoute>
            }
          />
          <Route
            path="system-logs"
            element={
              <PrivateRoute>
                <SystemLogs />
              </PrivateRoute>
            }
          />
          <Route
            path="settings"
            element={
              <PrivateRoute>
                <Settings />
              </PrivateRoute>
            }
          />
          <Route
            path="motor-third-party"
            element={
              <PrivateRoute>
                <Mtp policyCategory="mtp" />
              </PrivateRoute>
            }
          />
          <Route
            path="windscreen"
            element={
              <PrivateRoute>
                <Windscreen policyCategory="windscreen" />
              </PrivateRoute>
            }
          />
          <Route
            path="comprehensive"
            element={
              <PrivateRoute>
                <Mtp policyCategory="comprehensive" />
              </PrivateRoute>
            }
          />
          <Route
            path="new-import"
            element={
              <PrivateRoute>
                <Mtp policyCategory="newImport" />
              </PrivateRoute>
            }
          />
          <Route
            path="transit"
            element={
              <PrivateRoute>
                <Mtp policyCategory="transit" />
              </PrivateRoute>
            }
          />
        </Route>
        {/* Admin Routes */}
        <Route path="/admin">
          <Route
            index
            element={
              <PrivateRoute>
                <Dashboard />
              </PrivateRoute>
            }
          />
          <Route
            path="dashboard"
            element={
              <PrivateRoute>
                <Dashboard />
              </PrivateRoute>
            }
          />
          <Route
            path="organisations"
            element={
              <PrivateRoute>
                <Organisations />
              </PrivateRoute>
            }
          />
          <Route
            path="add-organisations"
            element={
              <PrivateRoute>
                <AddOrganisation />
              </PrivateRoute>
            }
          />
          <Route
            path="clients"
            element={
              <PrivateRoute>
                <Clients />
              </PrivateRoute>
            }
          />
          <Route
            path="agents"
            element={
              <PrivateRoute>
                <Agents />
              </PrivateRoute>
            }
          />
          <Route
            path="add-agent"
            element={
              <PrivateRoute>
                <AddUsers role="agent" />
              </PrivateRoute>
            }
          />
          <Route
            path="add-supervisor"
            element={
              <PrivateRoute>
                <AddUsers role="supervisor" />
              </PrivateRoute>
            }
          />
          <Route
            path="supervisors"
            element={
              <PrivateRoute>
                <Supervisors />
              </PrivateRoute>
            }
          />
          <Route
            path="claims"
            element={
              <PrivateRoute>
                <Claims />
              </PrivateRoute>
            }
          />
          <Route
            path="sticker-management"
            element={
              <PrivateRoute>
                <StickerMgt />
              </PrivateRoute>
            }
          />
          <Route
            path="settings"
            element={
              <PrivateRoute>
                <Settings />
              </PrivateRoute>
            }
          />
          <Route
            path="motor-third-party"
            element={
              <PrivateRoute>
                <Mtp policyCategory="mtp" />
              </PrivateRoute>
            }
          />
          <Route
            path="windscreen"
            element={
              <PrivateRoute>
                <Windscreen policyCategory="windscreen" />
              </PrivateRoute>
            }
          />
          <Route
            path="comprehensive"
            element={
              <PrivateRoute>
                <Mtp policyCategory="comprehensive" />
              </PrivateRoute>
            }
          />
          <Route
            path="new-import"
            element={
              <PrivateRoute>
                <Mtp policyCategory="newImport" />
              </PrivateRoute>
            }
          />
          <Route
            path="transit"
            element={
              <PrivateRoute>
                <Mtp policyCategory="transit" />
              </PrivateRoute>
            }
          />
          <Route
            path="view-log-trail"
            element={
              <PrivateRoute>
                <Logs />
              </PrivateRoute>
            }
          />
          <Route
            path="reports"
            element={
              <PrivateRoute>
                <Reports />
              </PrivateRoute>
            }
          />
        </Route>

        {/* Supervisors  */}
        <Route path="/supervisor">
          <Route
            index
            element={
              <PrivateRoute>
                <Dashboard />
              </PrivateRoute>
            }
          />
          <Route
            path="dashboard"
            element={
              <PrivateRoute>
                <Dashboard />
              </PrivateRoute>
            }
          />
          <Route
            path="add-agent"
            element={
              <PrivateRoute>
                <AddUsers role="agent" />
              </PrivateRoute>
            }
          />
          <Route
            path="add-clients"
            element={
              <PrivateRoute>
                <AddUsers role="customer" />
              </PrivateRoute>
            }
          />
          <Route
            path="clients"
            element={
              <PrivateRoute>
                <Clients />
              </PrivateRoute>
            }
          />
          <Route
            path="agents"
            element={
              <PrivateRoute>
                <Agents />
              </PrivateRoute>
            }
          />
          <Route
            path="add-agents"
            element={
              <PrivateRoute>
                <AddUsers role="agent" />
              </PrivateRoute>
            }
          />
          <Route
            path="view-log-trail"
            element={
              <PrivateRoute>
                <Logs />
              </PrivateRoute>
            }
          />
          <Route
            path="reports"
            element={
              <PrivateRoute>
                <Reports />
              </PrivateRoute>
            }
          />
          <Route
            path="settings"
            element={
              <PrivateRoute>
                <Settings />
              </PrivateRoute>
            }
          />
          <Route
            path="claims"
            element={
              <PrivateRoute>
                <Claims />
              </PrivateRoute>
            }
          />
          <Route
            path="motor-third-party"
            element={
              <PrivateRoute>
                <Mtp policyCategory="mtp" />
              </PrivateRoute>
            }
          />
          <Route
            path="windscreen"
            element={
              <PrivateRoute>
                <Windscreen policyCategory="windscreen" />
              </PrivateRoute>
            }
          />
          <Route
            path="comprehensive"
            element={
              <PrivateRoute>
                <Mtp policyCategory="comprehensive" />
              </PrivateRoute>
            }
          />
          <Route
            path="new-import"
            element={
              <PrivateRoute>
                <Mtp policyCategory="newImport" />
              </PrivateRoute>
            }
          />
          <Route
            path="transit"
            element={
              <PrivateRoute>
                <Mtp policyCategory="transit" />
              </PrivateRoute>
            }
          />
        </Route>

        {/* Agents  */}
        <Route path="/agent">
          <Route
            index
            element={
              <PrivateRoute>
                <Dashboard />
              </PrivateRoute>
            }
          />
          <Route
            path="dashboard"
            element={
              <PrivateRoute>
                <Dashboard />
              </PrivateRoute>
            }
          />
          <Route
            path="add-agent"
            element={
              <PrivateRoute>
                <AddUsers role="agent" />
              </PrivateRoute>
            }
          />
          <Route
            path="add-clients"
            element={
              <PrivateRoute>
                <AddUsers role="customer" />
              </PrivateRoute>
            }
          />
          <Route
            path="clients"
            element={
              <PrivateRoute>
                <Clients />
              </PrivateRoute>
            }
          />
          <Route
            path="agents"
            element={
              <PrivateRoute>
                <Agents />
              </PrivateRoute>
            }
          />
          <Route
            path="add-agents"
            element={
              <PrivateRoute>
                <AddUsers role="agent" />
              </PrivateRoute>
            }
          />
          <Route
            path="view-log-trail"
            element={
              <PrivateRoute>
                <Logs />
              </PrivateRoute>
            }
          />
          <Route
            path="reports"
            element={
              <PrivateRoute>
                <Reports />
              </PrivateRoute>
            }
          />
          <Route
            path="settings"
            element={
              <PrivateRoute>
                <Settings />
              </PrivateRoute>
            }
          />
          <Route
            path="claims"
            element={
              <PrivateRoute>
                <Claims />
              </PrivateRoute>
            }
          />
          <Route
            path="motor-third-party"
            element={
              <PrivateRoute>
                <Mtp policyCategory="mtp" />
              </PrivateRoute>
            }
          />
          <Route
            path="windscreen"
            element={
              <PrivateRoute>
                <Windscreen policyCategory="windscreen" />
              </PrivateRoute>
            }
          />
          <Route
            path="comprehensive"
            element={
              <PrivateRoute>
                <Mtp policyCategory="comprehensive" />
              </PrivateRoute>
            }
          />
          <Route
            path="new-import"
            element={
              <PrivateRoute>
                <Mtp policyCategory="newImport" />
              </PrivateRoute>
            }
          />
          <Route
            path="transit"
            element={
              <PrivateRoute>
                <Mtp policyCategory="transit" />
              </PrivateRoute>
            }
          />
        </Route>
      </Routes>
    </Router>
  );
}
