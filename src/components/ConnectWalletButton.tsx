import React, { useState, useEffect } from 'react';
import {
  Button,
  ToastContainer,
  Toast
  } from 'react-bootstrap';



  function simulateNetworkRequest() {
    return new Promise((resolve) => setTimeout(resolve, 2000));
  }
 
  
const  ConnectWalletButton = () => {
    const [isLoading, setLoading] = useState(false);
    const [connectWallet, setconnectWallet] = useState(false)
  
    useEffect(() => {
      if (isLoading) {
        simulateNetworkRequest().then(() => {
          setLoading(false);
        });
      }
    }, [isLoading]);
  
    const handleClick = () => {
      setLoading(true);
      setconnectWallet(true);
    }
    const handleIdle = () => {};
    const toggleconnectWallet = () => setconnectWallet(!connectWallet);
  
    return (<>
      <Button
        variant="primary"
        disabled={isLoading}
        size="lg"
        onClick={!isLoading ? handleClick : handleIdle}
      >
        {isLoading ? 'Loading......' : 'Connect wallet'}
      </Button>
      <ToastContainer className="p-3 text-dark" position='top-center'>
      <Toast show={connectWallet} onClose={toggleconnectWallet}>
          <Toast.Header>
            <img
              src="whelps.png"
              className="rounded me-2"
              width="20px"
              height="20px"
              alt=""
            />
            <strong className="me-auto">Bootstrap</strong>
            <small>11 mins ago</small>
          </Toast.Header>
          <Toast.Body>Woohoo, you're reading this text in a Toast!</Toast.Body>
        </Toast>
        </ToastContainer></>
    );
  }
  
  export default ConnectWalletButton;


        