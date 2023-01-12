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
import { Badge } from "react-bootstrap";
import { MdLogout } from "react-icons/md";
import DefaultAvatar from "../../components/DefaultAvatar";
import { ImProfile } from "react-icons/im";
import useDialog from "../../hooks/useDialog";
import useAuth from "../../contexts/Auth";
import { MdSettings } from "react-icons/md";

function SupervisorMenu({ minimiseMenu, maximiseMenu }) {
  const preferredToggleMenu =
    localStorage.getItem("preferredToggleMenu") || true;
  const { Supervisor } = menuData;
  const [toggleMenu, showToggleMenu, hideToggleMenu] = useDialog(
    JSON.parse(preferredToggleMenu)
  );
  const [show, handleShow, handleClose] = useDialog();

  const { logout } = useAuth();
  const handleLogout = async () => {
    try {
      window.location = "/";
      await logout();
    } catch (error) {}
  };

  if (show) {
    window.onclick = (event) =>
      !event.target.matches(".footerContext") ? handleClose() : null;
  }

  return (
    <div className="menuSide">
      <MobileNav
        role={Supervisor}
        user="supervisor"
        displayName={authentication?.currentUser?.displayName}
      />
      {toggleMenu ? (
        <nav className="sidebar">
          <section id="brand">
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
          </section>
          <SideBar
            role={Supervisor}
            user="supervisor"
            displayName={authentication?.currentUser?.displayName}
          />

          <footer
            className="footerContext"
            onClick={(event) => {
              show ? handleClose() : handleShow();
              event.stopPropagation();
            }}
          >
            <div className="footerContext tw-w-full tw-h-full tw-flex tw-px-3 tw-py-2 tw-gap-3 tw-items-center">
              {authentication?.currentUser.photoURL !==
                "https://firebasestorage.googleapis.com/v0/b/car-insurance-app.appspot.com/o/default-user-image.png?alt=media&token=f9f8f8e9-f8f8-4f8f-8f8f-f8f8f8f8f8f8" &&
              authentication?.currentUser.photoURL !==
                "https://example.com/jane-doe/photo.jpg" ? (
                <img
                  src={authentication?.currentUser.photoURL}
                  alt={authentication?.currentUser.displayName}
                  width={50}
                  height={50}
                  className="tw-rounded-full tw-overflow-hidden"
                />
              ) : (
                <DefaultAvatar />
              )}
              <div className="">
                <p className="tw-font-medium tw-text-lg tw-m-0">
                  <span>
                    {(authentication?.currentUser?.displayName).split(" ")[0]}{" "}
                  </span>
                  <span>
                    {(authentication?.currentUser?.displayName).split(" ")[1]}
                  </span>
                </p>
                <span className="tw-text-gray-400 tw-text-sm">Supervisor</span>
              </div>
            </div>
            <ul className={show ? "footerContextShow" : ""} id="contextUl">
              <li>
                <Link to="/supervisor/settings">
                  <ImProfile /> My Profile
                </Link>
              </li>
              <li onClick={handleLogout}>
                <Link>
                  <MdLogout /> Logout
                </Link>
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
          <MinimisedSideBar role={Supervisor} />
          <footer
            onClick={(event) => {
              show ? handleClose() : handleShow();
              event.stopPropagation();
            }}
            className="tw-relative"
          >
            <div className="tw-flex tw-justify-center tw-items-center tw-w-full tw-h-full tw-px-3 tw-py-2 tw-gap-3">
              <DefaultAvatar />
            </div>
            <ul className={show ? "footerContextShow" : ""} id="contextUl">
              <li>
                <Link to="/supervisor/settings">
                  <ImProfile />
                </Link>
              </li>
              <li onClick={handleLogout}>
                <Link>
                  <MdLogout />
                </Link>
              </li>
            </ul>
          </footer>
        </nav>
      )}
    </div>
  );
}

export default SupervisorMenu;
