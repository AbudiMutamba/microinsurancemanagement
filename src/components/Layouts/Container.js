import useAuth from "contexts/Auth";


function Container({ children }) {
  const { currentUser, authClaims } = useAuth();
  const [largeContentClass, minimiseMenu, maximiseMenu] = useToggleMenu();
  return (
    <div
      className={largeContentClass ? "top-container-large" : `top-container`}
    >
      <div className="MenuSide">
        {authClaims?.superadmin && (
          <SuperAdminMenu
            largeContentClass={largeContentClass}
            minimiseMenu={minimiseMenu}
            maximiseMenu={maximiseMenu}
          />
        )}
      </div>
      <main>{children}</main>
    </div>
  );
}

export default Container;
