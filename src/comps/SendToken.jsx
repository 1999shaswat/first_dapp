import { useConnection, useWallet } from "@solana/wallet-adapter-react"
import { PublicKey, LAMPORTS_PER_SOL, SystemProgram, Transaction } from "@solana/web3.js"
import { useState } from "react"

export function SendToken() {
  const [toAcc, setToAcc] = useState(null)
  const [amount, setAmount] = useState(null)
  const wallet = useWallet()
  const { connection } = useConnection()
  async function sendTokens() {
    const transaction = new Transaction()
    transaction.add(
      SystemProgram.transfer({
        fromPubkey: wallet.publicKey,
        toPubkey: new PublicKey(toAcc),
        lamports: amount * LAMPORTS_PER_SOL,
      })
    )
    await wallet.sendTransaction(transaction, connection)
    alert("Sent " + amount + " to SOL " + toAcc)
  }
  return (
    <div>
      <input type='text' placeholder='to' onChange={(e) => setToAcc(e.target.value)} />
      <input type='text' placeholder='amount' onChange={(e) => setAmount(e.target.value)} />
      <button onClick={sendTokens}>Send</button>
    </div>
  )
}
