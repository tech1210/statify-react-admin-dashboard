import { Button, Nav, NavItem } from "reactstrap";
import Logo from "./Logo";
import { Link, useLocation } from "react-router-dom";

const navigation = [
  {
    title: "Dashboard",
    href: "/starter",
    icon: "bi bi-speedometer2",
  },
  {
    title: "Alert",
    href: "/alerts",
    icon: "bi bi-bell",
  },
  {
    title: "Badges",
    href: "/badges",
    icon: "bi bi-patch-check",
  },
  {
    title: "Buttons",
    href: "/buttons",
    icon: "bi bi-hdd-stack",
  },
  {
    title: "Cards",
    href: "/cards",
    icon: "bi bi-card-text",
  },
  {
    title: "Grid",
    href: "/grid",
    icon: "bi bi-columns",
  },
  {
    title: "Forms",
    href: "/forms",
    icon: "bi bi-textarea-resize",
  },
  {
    title: "Table",
    href: "/table",
    icon: "bi bi-layout-split",
  },
  {
    title: "Breadcrumbs",
    href: "/breadcrumbs",
    icon: "bi bi-link",
  },
  {
    title: "About",
    href: "/about",
    icon: "bi bi-people",
  },
];

const Sidebar = () => {
  const showMobilemenu = () => {
    document.getElementById("sidebarArea").classList.toggle("showSidebar");
  };
  let location = useLocation();

  return (
    <div className="p-3">
      <div className="d-flex align-items-center">
        <Logo />
        <span className="ms-auto d-lg-none">
          <Button
            close
            size="sm"
            className="ms-auto d-lg-none"
            onClick={() => showMobilemenu()}
          ></Button>
        </span>
      </div>
      <div className="pt-4 mt-2">
        <Nav vertical className="sidebarNav">
          {navigation.map((navi, index) => (
            <NavItem key={index} className="sidenav-bg">
              <Link
                to={navi.href}
                className={
                  location.pathname === navi.href
                    ? "text-primary nav-link py-3"
                    : "nav-link text-secondary py-3"
                }
              >
                <i className={navi.icon}></i>
                <span className="ms-3 d-inline-block">{navi.title}</span>
              </Link>
            </NavItem>
          ))}

          <Button
            tag="a"
            target="_blank"
            className="mb-5"
            href="https://ui8.net/encode-infotech/products"
            style={{
              background: "red",
              color: "white",
              border: "none",
              cursor: "pointer",
              boxShadow: "5px 5px 7px rgba(0, 0, 0, 0.6)",
            }}
          >
            BUY NOW
          </Button>
        </Nav>
      </div>
    </div>
  );
};

export default Sidebar;
