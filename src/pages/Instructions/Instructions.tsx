import React, {useState} from 'react';
import logo from "../../assets/logo.svg";
import axios from "axios";

function InstructionsPage() {
  return (
    <div className="grid gap-28">
      <header className="relative">
        <div className="row">
          <div className="container mx-auto text-center">
            <a href="/" className="inline-block relative mt-12">
              <img src={logo} alt="Logo" className="block mx-auto" loading="lazy" />
              <span className="sr-only">ILLI Wallet</span>
            </a>
          </div>
        </div>
      </header>
      <main className="relative grid gap-28">
        <div className="row">
          <div className="container mx-auto">
            <div className="max-w-2xl mx-auto px-4 py-8 text-white">
              <h2 className="text-2xl font-bold mb-4">Using a Bitcoin Paper Wallet</h2>
              <div className="mb-8">
                <h3 className="text-xl font-bold mb-2">Transfer Bitcoin to the Paper Wallet</h3>
                <p className="mb-2">Send Bitcoin from your digital wallet or exchange account to the public address on your paper wallet. Use a QR code scanner to easily transfer the funds.</p>
              </div>
              <div className="mb-8">
                <h3 className="text-xl font-bold mb-2">Keep the Paper Wallet Secure</h3>
                <p className="mb-2">Store the paper wallet in a safe place, protected from moisture, fire, and theft. Consider using a safe deposit box or a secure home safe.</p>
              </div>
              <div className="mb-8">
                <h3 className="text-xl font-bold mb-2">Accessing Funds</h3>
                <p className="mb-2">When you want to access the funds stored in the paper wallet, you will need to sweep the private key into a Bitcoin wallet that supports this feature. Use caution when handling the private key, as it grants access to your Bitcoin funds.</p>
              </div>
              <div className="mb-8">
                <h3 className="text-xl font-bold mb-2">Sweeping Private Key</h3>
                <p className="mb-2">To sweep the funds, create a new wallet address in your Bitcoin wallet and use the "sweep" feature to transfer the funds from the paper wallet to the new address.</p>
              </div>
            </div>
          </div>
        </div>
        <BitcoinAddressBalance />
      </main>
      <footer className="relative">
        <div className="row pt-28 bg-black text-gray-dark">
          <div className="container mx-auto py-5 text-center">
            <div className="mx-auto divide-y divide-white">
              <div className="hidden">
                <a href="#">Privacy and Cookies</a>
                <a href="#">Terms & Conditions</a>
              </div>
              <p className="mt-10 pt-10 mx-auto font-bold text-white">® ILLI Wallet - 2024</p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

function BitcoinAddressBalance() {
  const [address, setAddress] = useState('');
  const [balance, setBalance] = useState(null);

  const getBalance = async () => {
    try {
      const response = await axios.get(`https://blockchain.info/rawaddr/${address}`);

      setBalance(response.data.final_balance);
    } catch (error) {
      console.error('Error fetching balance:', error);
    }
  };

  return (
    <div className="max-w-md mx-auto p-4 bg-gray-800 text-white">
      <h2 className="text-2xl font-bold mb-4">Check Bitcoin Address Balance</h2>
      <input
        className="w-full p-2 mb-4 bg-gray-700 border border-gray-600 rounded text-black"
        type="text"
        placeholder="Enter Bitcoin address"
        value={address}
        onChange={(e) => setAddress(e.target.value)}
      />
      <button
        className="w-full p-2 bg-blue-600 hover:bg-blue-700 text-white font-bold rounded"
        onClick={getBalance}
      >
        Check Balance
      </button>
      {balance !== null && (
        <p className="mt-4">Balance for address {address}: {balance} Satoshi</p>
      )}
    </div>
  );
}

export default InstructionsPage;
