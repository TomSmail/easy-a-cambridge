import { ethers } from 'hardhat';

async function main(): Promise<void> {

    const EnergyMarket = await ethers.deployContract(
        'EnergyMarket',
        [],
        {
            from: (await ethers.getSigners())[0].address
        }
    );

    await EnergyMarket.waitForDeployment();

    console.log(
        `EnergyMarket deployed to ${JSON.stringify(EnergyMarket)}`
    );
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
    console.error(error);
    process.exitCode = 1;
});
