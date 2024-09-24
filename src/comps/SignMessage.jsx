import { useWallet } from "@solana/wallet-adapter-react"
import { useState } from "react"
import { ed25519 } from "@noble/curves/ed25519"
import bs58 from "bs58"

export function SignMessage() {
  const { publicKey, signMessage } = useWallet()
  const [message, setMessage] = useState()
  async function onClick() {
    if (!publicKey) throw new Error("Wallet Not Connected")
    if (!signMessage) throw new Error("Wallet does not support signing message")

    const encodedMessage = new TextEncoder().encode(message)
    const signature = await signMessage(encodedMessage) // signing

    //verification
    if (!ed25519.verify(signature, encodedMessage, publicKey.toBytes())) throw new Error("Message signature invalid")
    alert("Success", `Message signature ${bs58.encode(signature)}`)
  }

  return (
    <div>
      <input type='text' placeholder='message' onChange={(e) => setMessage(e.target.value)} />
      <button onClick={onClick}>Sign Message</button>
    </div>
  )
}
