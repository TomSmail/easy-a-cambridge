// eslint-disable-next-line eslint-comments/disable-enable-pair
/* eslint-disable no-undef */
import { DAppKitUI } from '@vechain/dapp-kit-ui';

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

DAppKitUI.configure(vechainDAppKitOptions);

// custom button configuration

const customButton = document.getElementById('custom-button');

customButton.addEventListener('click', async () => {
    DAppKitUI.modal.open();
});

const handleConnected = (address) => {
    if (address) {
        const formattedAddress = `${address.slice(0, 6)}...${address.slice(
            -4,
        )}`;
        customButton.innerText = `Disconnect from ${formattedAddress}`;
    } else {
        customButton.innerText = 'Connect Custom Button';
    }
};

handleConnected(DAppKitUI.wallet.state.address);

DAppKitUI.modal.onConnectionStatusChange(handleConnected);

// Battery Status function
function batteryImage(batteryLevel, sustainableEnergyLevel) {
    var image = document.getElementById("battery");
    var batteryImgUrl = 'assets/battery-';
    switch (sustainableEnergyLevel) {
        // all of the battery is using sustainable energy
        case 100:
            batteryImgUrl += '100';
        // half of the batter is using sustainable energy
        case 50:
            batteryImgUrl += '50';
        // none of the battery is using sustainable energy
        default:
            batteryImgUrl += '0';
    }

    // battery level
    switch (batteryLevel) {
        case 100:
            batteryImgUrl += '-100';
        case 50:
            batteryImgUrl += '-50';
        default:
            batteryImgUrl += '-0';
    }   
    
    batteryImgUrl += '.png';
    image.src = batteryImgUrl;
   
}
