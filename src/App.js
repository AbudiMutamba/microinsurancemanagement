import MyRouter from "./routes/MyRouter";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Login, Logout, ForgotPassword, Dashboard } from "./pages";
import PrivateRoute from "./routes/PrivateRoute";
import { SuperAdminRoutes } from "routes";
import Organisations from "./pages/admin/Organisations";
import AddOrganisation from "pages/admin/AddOrganisation";
import Admins from "pages/superAdmin/Admins";
import { Mtp, AddUsers, Claims, Settings } from "./pages";
import SystemLogs from "./pages/superAdmin/SystemLogs";
import Windscreen from "components/forms/Windscreen";
import Comprehensive from "components/forms/Comprehensive";

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
      </Routes>
    </Router>
  );
}
