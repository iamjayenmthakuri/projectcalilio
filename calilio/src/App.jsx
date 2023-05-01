import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import RootLayout from "./layouts/RootLayout";
import Dashbord from "./pages/Dashbord";

import Contact from "./pages/Contact";
import Bulksms from "./pages/Bulksms";
import Overview from "./SettingComponent/Workspaces/Overview";
import SettingSidebarLayout from "./layouts/SettingSidebarLayout";
import Mynumber from "./SettingComponent/Workspaces/Mynumber";
import Blocklist from "./SettingComponent/Workspaces/Blocklist";
import Member from "./SettingComponent/Workspaces/Member";
import Subscription from "./SettingComponent/Biling/Subscription";
import PaymentMethod from "./SettingComponent/Biling/paymentMethod";
import Audio from "./SettingComponent/Application Setting/Audio";
import Notification from "./SettingComponent/Application Setting/Notification";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<RootLayout />}>
          <Route index element={<Dashbord />} />
          <Route path="setting" element={<SettingSidebarLayout />}>
            <Route path="overview" element={<Overview />} />
            <Route path="mynumber" element={<Mynumber />} />
            <Route path="blocklist" element={<Blocklist />} />
            <Route path="member" element={<Member />} />
            <Route path="subscription" element={<Subscription />} />
            <Route path="payment" element={<PaymentMethod />} />
            <Route path="audio" element={<Audio />} />
            <Route path="notification" element={<Notification />} />
          </Route>
          <Route path="contact" element={<Contact />} />
          <Route path="bulksms" element={<Bulksms />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
