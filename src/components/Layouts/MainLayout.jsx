import Header from "../Fragments/Header";
import Navbar from "../Fragments/Navbar";
import { useContext } from "react";
import { ThemeContext } from "../../context/themeContext";
import { NotifContext } from "../../context/notifContext";
import SimpleBackdrop from "../Elements/Baackdrop/indec";
import CustomizedSnackbars from "../Elements/SnackBar";
import { ModeContext } from "../../context/modeContext";

const MainLayout = (props) => {
  const { children } = props;
  const { theme } = useContext(ThemeContext);
  const { msg, setMsg, open, setOpen, isLoading, setIsLoadiing } =
    useContext(NotifContext);
  const { mode, setMode } = useContext(ModeContext);

  return (
    <div
      className={`flex bg-background w-screen min-h-screen max-w-full ${theme.name} ${mode.name}`}
    >
      {/* navbar start*/}
      <Navbar />
      {/* navbar end*/}
      <div className="w-screen">
        {isLoading && (
          <SimpleBackdrop isLoading={isLoading} setIsLoadiing={setIsLoadiing} />
        )}
        {msg && (
          <CustomizedSnackbars
            severity={msg.severity}
            message={msg.desc}
            open={open}
            setOpen={setOpen}
          />
        )}
        {/* header start*/}
        <Header />
        {/* header end*/}
        {/* content start*/}
        <main className="px-6 py-4">{children}</main>
        {/* content end*/}
      </div>
    </div>
  );
};

export default MainLayout;
