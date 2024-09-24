import { ConnectionProvider, WalletProvider } from "@solana/wallet-adapter-react"
import "./App.css"
import { WalletDisconnectButton, WalletModalProvider, WalletMultiButton } from "@solana/wallet-adapter-react-ui"
import "@solana/wallet-adapter-react-ui/styles.css"
import { RequestAirdrop } from "./comps/RequestAirdrop"
import { ShowBalance } from "./comps/ShowBalance"
import { SendToken } from "./comps/SendToken"
import { SignMessage } from "./comps/SignMessage"

function App() {
  return (
    <div>
      <ConnectionProvider endpoint={"https://api.devnet.solana.com"}>
        <WalletProvider wallets={[]} autoConnect>
          <WalletModalProvider>
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                width: "100vw",
                paddingBottom: 20,
              }}>
              <WalletMultiButton />
              <WalletDisconnectButton />
            </div>
            <ShowBalance />
            <RequestAirdrop />
            <SendToken />
            <SignMessage />
          </WalletModalProvider>
        </WalletProvider>
      </ConnectionProvider>
    </div>
  )
}

export default App
