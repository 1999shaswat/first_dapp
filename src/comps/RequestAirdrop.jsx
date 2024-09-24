import { useConnection, useWallet } from "@solana/wallet-adapter-react"
import { LAMPORTS_PER_SOL } from "@solana/web3.js"
import { useState } from "react"

export function RequestAirdrop() {
  const [num, setNum] = useState("")
  const wallet = useWallet()
  const { connection } = useConnection()
  function requestAirdrop() {
    const publicKey = wallet.publicKey
    connection.requestAirdrop(publicKey, parseInt(num) * LAMPORTS_PER_SOL)
  }

  return (
    <div>
      <input type='text' placeholder='Amount' onChange={(e) => setNum(e.target.value)} />
      <button onClick={requestAirdrop}>Request Airdrop</button>
      <p>Public Key: {wallet.publicKey?.toBase58()}</p>
    </div>
  )
}
