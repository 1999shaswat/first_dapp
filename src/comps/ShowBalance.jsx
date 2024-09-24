import { useConnection, useWallet } from "@solana/wallet-adapter-react"
import { LAMPORTS_PER_SOL } from "@solana/web3.js"
import { useEffect } from "react"
import { useState } from "react"

export function ShowBalance() {
  const [balance, setBalance] = useState("")
  const { connection } = useConnection()
  const wallet = useWallet()

  const publicKey = wallet.publicKey
  useEffect(() => {
    if (!publicKey) return
    connection.getBalance(publicKey).then((res) => setBalance(res / LAMPORTS_PER_SOL))
  }, [wallet])

  return (
    <div>
      <p>Balance: {balance} SOL</p>
    </div>
  )
}
