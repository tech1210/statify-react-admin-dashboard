import { Outlet, useLocation } from "react-router-dom";
import Sidebar from "./Sidebar";
import Header from "./Header";
import { Container } from "reactstrap";

const FullLayout = () => {
  const location = useLocation();

  // Check if the current path is '/login' or '/signup'
  const hideHeaderAndSidebar =
    location.pathname === "/login" || location.pathname === "/signup";

  return (
    <main>
      <div className="pageWrapper d-lg-flex">
        {/* Conditional rendering of Sidebar */}
        {!hideHeaderAndSidebar && (
          <aside className="sidebarArea shadow" id="sidebarArea">
            <Sidebar />
          </aside>
        )}
        {/* Conditional rendering of Header */}
        {!hideHeaderAndSidebar && (
          <div className="contentArea">
            <Header />
            {/* Middle Content */}
            <Container className="p-4 wrapper" fluid>
              <Outlet />
            </Container>
          </div>
        )}
        {/* If header and sidebar are hidden, only render Outlet */}
        {hideHeaderAndSidebar && <Outlet />}
      </div>
    </main>
  );
};

export default FullLayout;
