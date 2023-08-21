import { BrowserRouter, Route, Routes } from "react-router-dom";
import { NavBar } from "./components/NavBar";
import { ErrorPage } from "./views/ErrorPage";
import { Home } from "./views/Home";
import { Footer } from "./components/Footer";
import { Tutorial } from "./views/Tutorial";
import { About } from "./views/About";
import { Escrow } from "./views/Escrow";
import {
  EthereumClient,
  w3mConnectors,
  w3mProvider,
} from "@web3modal/ethereum";
import { Web3Modal } from "@web3modal/react";
import { configureChains, createConfig, WagmiConfig } from "wagmi";
import { arbitrum, mainnet, polygon } from "wagmi/chains";
import { Create } from "./views/Create";
import { MyContracts } from "./views/MyContracts";

const chains = [arbitrum, mainnet, polygon];
const projectId = "ba45c12dbc5d135f1b2333ec55da1aa5";

const { publicClient } = configureChains(chains, [w3mProvider({ projectId })]);
const wagmiConfig = createConfig({
  autoConnect: true,
  connectors: w3mConnectors({ projectId, chains }),
  publicClient,
});
const ethereumClient = new EthereumClient(wagmiConfig, chains);

function App() {
  return (
    <>
      <BrowserRouter>
        <WagmiConfig config={wagmiConfig}>
          <div className="App">
            <NavBar />
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/create" element={<Create />} />
              <Route path="/mycontracts" element={<MyContracts />} />
              <Route path="/*" element={<ErrorPage />} />
            </Routes>
            <Footer />
          </div>
        </WagmiConfig>

        <Web3Modal projectId={projectId} ethereumClient={ethereumClient} />
      </BrowserRouter>
    </>
  );
}

export default App;
