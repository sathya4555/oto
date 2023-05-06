import { BrowserRouter, Route, Routes } from "react-router-dom";
import ChatBody from "../container/chat-body";
import Onboarding from "../container/onboarding";
import Header from "../compoents/header";
import Footer from "../compoents/footer";
import Home from "../container/home";

const AppRoutes = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route
            path={"/"}
            element={
              <>
                <Home />
              </>
            }
          />
          <Route
            path={"/chat/:id"}
            element={
              <>
                <Header />
                <ChatBody /> <Footer />
              </>
            }
          />
          <Route
            path={"/onboarding"}
            element={
              <>
                <Onboarding />
              </>
            }
          />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default AppRoutes;
