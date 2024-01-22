import React, { useState } from "react";
import Sidebar from "./Sidebar";
import Feed from "./Feed";
import Widgets from "./Widgets";
import "./App.css";

function App() {
  const [currentAccount, setCurrentAccount] = useState("");
  const [showPopup, setShowPopup] = useState(false);

  // Calls Metamask to connect wallet on clicking Connect Wallet button
  const connectWallet = async () => {
    try {
      const { ethereum } = window;

      if (!ethereum) {
        setShowPopup(true); // Trigger popup if MetaMask not detected
        return;
      }

      const accounts = await ethereum.request({ method: "eth_requestAccounts" });

      console.log("Found account", accounts[0]);
      setCurrentAccount(accounts[0]);
    } catch (error) {
      console.log("Error connecting to MetaMask", error);
    }
  };

  // Handle closing the popup
  const handleClosePopup = () => {
    setShowPopup(false);
  };

  return (
    <div>
      {currentAccount === "" ? (
        <button
          className="text-2xl font-bold py-3 px-12 bg-[#f1c232] rounded-lg mb-10 hover:scale-105 transition duration-500 ease-in-out"
          onClick={connectWallet}
        >
          Connect Wallet
        </button>
      ) : (
        <div className="app">
          <Sidebar />

          <Feed />
          
          <Widgets />
        </div>
      )}

      {showPopup && (
        <div className="popup">
          <h2>Please install MetaMask to continue</h2>
          <p>
            You don't seem to have MetaMask installed. Please install it to
            connect your wallet.
          </p>
          <button>
          <a href="https://metamask.io/" target="_blank" rel="noopener noreferrer">
            Get MetaMask
          </a>
          </button>
          <button onClick={handleClosePopup}>Close</button>
        </div>
      )}
    </div>
  );
}

export default App;
