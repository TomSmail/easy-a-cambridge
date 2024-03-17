// eslint-disable-next-line eslint-comments/disable-enable-pair
/* eslint-disable no-undef */
import axios from 'axios';

const walletConnectOptions = {
    projectId: 'a0b855ceaf109dbc8426479a4c3d38d8',
    metadata: {
        name: 'Sample VeChain dApp',
        description: 'A sample VeChain dApp',
        url: window.location.origin,
        icons: [`${window.location.origin}/images/logo/my-dapp.png`],
    },
};

const vechainDAppKitOptions = {
    nodeUrl: 'https://testnet.vechain.org/',
    genesis: 'test',
    walletConnectOptions,
    usePersistence: true,
};

// DAppKitUI.configure(vechainDAppKitOptions);

// custom button configuration

const customButton = document.getElementById('custom-button');

// customButton.addEventListener('click', async () => {
//     DAppKitUI.modal.open();
// });

const handleConnected = (address) => {
    if (address) {
        // set address_wallet to address
        address_wallet = address;
        const formattedAddress = `${address.slice(0, 6)}...${address.slice(
            -4,
        )}`;
        customButton.innerText = `Disconnect from ${formattedAddress}`;
    } else {
        customButton.innerText = 'Connect Custom Button';
    }
};

// handleConnected(DAppKitUI.wallet.state.address);

// DAppKitUI.modal.onConnectionStatusChange(handleConnected);

function changeProvider() {
    var selectElement = document.getElementById("supplier-dropdown");
    var buttonElement = document.getElementById("provider-button");
    var selectedOption = selectElement.options[selectElement.selectedIndex].text;
    buttonElement.textContent = "Select " + selectedOption + " As Provider";
}

const providerButton = document.getElementById('provider-button');
providerButton.addEventListener('click', async () => {
    console.log('provider button clicked');
    // send POST request to /main/v2/supplier
    var selectElement = document.getElementById("supplier-dropdown");
    var selectedOption = selectElement.options[selectElement.selectedIndex].text;
    if (selectedOption == "Clean"){
    var data = {
        "address": "0x424b8b4619127601e1a6A362Ac812e67E289022C",
        "amount": 1,
        "exponent": 0
    }

const url = 'https://api.vorj.app/main/v2/erc20/contracts/0x8bebfa37B2DC3914909c6Cd85bce8699D2Cdb117/mint';
const headers = {
  'accept': 'application/json',
  'x-project-id': '65f603754ee2be27051bd0f3',
  'x-api-key': 'e5f9d9dde11431ba7f63ad6b7d3735a4eae7afdfd34faa524b74ae01179f8668',
  'Content-Type': 'application/json'
};
const data = {
  address: '0x424b8b4619127601e1a6A362Ac812e67E289022C',
  amount: '1',
  exponent: 0
};

axios.post(url, data, { headers })
  .then(response => {
    console.log('Response:', response.data);
  })
  .catch(error => {
    console.error('Error:', error);
  });
}
});