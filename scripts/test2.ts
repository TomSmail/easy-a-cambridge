const { ethers } = require("ethers");
import energyMarketAbi from '../artifacts/contracts/EnergyMarket.sol/EnergyMarket.json';
// Assume ethers, Wallet, and provider are correctly set up as shown previously

async function main(): Promise<void> {
    const mnemonic = "turn mix inch harbor side oblige galaxy year ribbon dinosaur rule margin"; // Use environment variables for production
    const wallet = ethers.Wallet.fromPhrase(mnemonic);
    const provider = new ethers.JsonRpcProvider('https://testnet.vechain.org'); // Example, adjust based on your network
    const buyer = wallet.connect(provider);

    // Address and ABI for the EnergyMarket contract
    const contractAddress = "0x2c150d8f85ff0778ea94f09aab28b6c4f68b21cd"; // Your deployed contract address here

    const energyMarket = new ethers.Contract(contractAddress, energyMarketAbi.abi, buyer);

    // Call placeOrder as the buyer, ensure to adjust arguments as per your contract
    const txResponse = await energyMarket.placeOrder("0xB2C2147EfB3B7907bB5264C733a1786a25fD7176", 1 , ethers.parseEther("0.1"));

    await txResponse.wait(); // Wait for the transaction to be mined

    console.log("Order placed successfully");
}

main().catch((error) => {
    console.error(error);
    process.exitCode = 1;
});