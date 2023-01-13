import menuData from "../../components/menuData";
import "../../assets/styles/menu.css";
import { Link } from "react-router-dom";
import logo from "../../assets/imgs/SWICO-LOGO.png";
import logoSm from "../../assets/imgs/SWICO-LOGO-sm.png";
import { HiOutlineChevronLeft, HiOutlineChevronRight } from "react-icons/hi";
import MobileNav from "../../components/menu/MobileNav";
import SideBar from "../../components/menu/SideBar";
import MinimisedSideBar from "../../components/menu/MinimisedSideBar";
import { authentication } from "../../helpers/firebase";
import DefaultAvatar from "../../components/DefaultAvatar";
import { MdLogout } from "react-icons/md";
import { Badge } from "react-bootstrap";
import useDialog from "../../hooks/useDialog";
import { ImProfile } from "react-icons/im";
import useAuth from "../../contexts/Auth";

function SuperAdminMenu({ minimiseMenu, maximiseMenu }) {
  const preferredToggleMenu =
    localStorage.getItem("preferredToggleMenu") || true;
  const { SuperAdmin } = menuData;
  const [toggleMenu, showToggleMenu, hideToggleMenu] = useDialog(
    JSON.parse(preferredToggleMenu)
  );
  const [show, handleShow, handleClose] = useDialog();

  const { logout } = useAuth();
  const handleLogout = async () => {
    try {
      localStorage.removeItem("onRefresh");
      await logout();
      window.location = "/";
    } catch (error) {
      console.log(error);
    }
  };

  if (show) {
    window.onclick = (event) =>
      !event.target.matches(".footerContext") ? handleClose() : null;
  }

  return (
    <div className="menuSide">
      <MobileNav
        role={SuperAdmin}
        user="superadmin"
        displayName={authentication?.currentUser?.displayName}
      />
      {toggleMenu === true ? (
        <nav className="sidebar">
          <div id="brand">
            <img width={120} src={logo} alt="SWICO" />
            <div
              id="arrowCircle"
              onClick={() => {
                hideToggleMenu();
                minimiseMenu();
              }}
            >
              <HiOutlineChevronLeft
                style={{ color: "#c6c7c8", fontSize: "15px" }}
              />
            </div>
          </div>
          <SideBar role={SuperAdmin} user="superadmin" />
          <footer
            onClick={(event) => {
              show ? handleClose() : handleShow();
              event.stopPropagation();
            }}
          >
            <div className="footerContext">
              {authentication?.currentUser.photoURL !==
                "https://firebasestorage.googleapis.com/v0/b/car-insurance-app.appspot.com/o/default-user-image.png?alt=media&token=f9f8f8e9-f8f8-4f8f-8f8f-f8f8f8f8f8f8" &&
              authentication?.currentUser.photoURL !==
                "https://example.com/jane-doe/photo.jpg" ? (
                <img
                  src={authentication?.currentUser.photoURL}
                  alt="profile"
                  width={50}
                  height={50}
                  style={{ borderRadius: "50%" }}
                />
              ) : (
                <DefaultAvatar />
              )}
              <div>
                <p style={{ fontWeight: "500", fontSize: "1.05rem" }}>
                  <span>
                    {(authentication?.currentUser?.displayName).split(" ")[0]}{" "}
                  </span>
                  <span>
                    {(authentication?.currentUser?.displayName).split(" ")[1]}
                  </span>
                </p>
                <p style={{ color: "#646464" }}>
                  <Badge bg="danger">Super Admin</Badge>
                </p>
              </div>
              <h3 style={{ color: "#000" }}>&hellip;</h3>
            </div>
            {/* </Link> */}
            <ul className={show ? "footerContextShow" : ""} id="contextUl">
              <li>
                <Link to="/superadmin/settings">
                  <ImProfile /> My Profile
                </Link>
              </li>
              <li onClick={handleLogout}>
                <MdLogout /> Logout
              </li>
            </ul>
          </footer>
        </nav>
      ) : (
        <nav className="sidebar-m">
          <section id="brand_m">
            <img width={35} src={logoSm} alt="SWICO" />
            <div
              id="arrowOutCircle"
              onClick={() => {
                showToggleMenu();
                maximiseMenu();
              }}
            >
              <HiOutlineChevronRight
                style={{ color: "#c6c7c8", fontSize: "15px" }}
              />
            </div>
          </section>
          <MinimisedSideBar role={SuperAdmin} />
          <footer
            onClick={(event) => {
              show ? handleClose() : handleShow();
              event.stopPropagation();
            }}
          >
            <div className="footerContext">
              <DefaultAvatar />
            </div>
            <ul className={show ? "footerContextShow" : ""} id="contextUl">
              <li>
                <Link to="/superadmin/settings">
                  <ImProfile />
                </Link>
              </li>
              <li onClick={handleLogout}>
                  <MdLogout />
              </li>
            </ul>
          </footer>
        </nav>
      )}
    </div>
  );
}

export default SuperAdminMenu;
