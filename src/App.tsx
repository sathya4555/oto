import { RecoilRoot } from "recoil";
import "./App.css";
import { SocketProvider } from "./compoents/socket-engine/SocketContext";
import AppRoutes from "./routes/app-routes";

function App() {
  return (
    <RecoilRoot>
      <SocketProvider>
        {/* <Header /> */}
        <AppRoutes />
        {/* <Footer /> */}
      </SocketProvider>
    </RecoilRoot>
  );
}

export default App;
