import { BrowserRouter, Routes, Route } from "react-router-dom";
import RootLayout from "./components/layouts/RootLayout";
import HomePage from "./components/pages/HomePage";
import GroupsPage from "./components/pages/GroupsPage";
import NotFound from "./components/shared/NotFound";
import GroupsDetailsPage from "./components/pages/GroupsDetailsPage";
import { Toaster } from "./components/ui/toaster";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<RootLayout />}>
          <Route index element={<HomePage />} />
          <Route path="/groups" element={<GroupsPage />} />
          <Route path="/groups/:id" element={<GroupsDetailsPage />} />
          <Route path="*" element={<NotFound />} />
        </Route>
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Toaster />
    </BrowserRouter>
  );
}

export default App;
