import { ethers } from 'hardhat';


async function main(): Promise<void> {
    const vechainEM = await ethers.getContractAt(
        'EnergyMarket',
        '0xcd35fe2e863fbd5da209980352e61f13cc91e48d'
    );
    const message = await vechainEM.registerSupplier('0xB2C2147EfB3B7907bB5264C733a1786a25fD7176', true);
    //const message2 = await tryplaceorder();

    console.log(`${message}`);
}



// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
    console.error(error);
    process.exitCode = 1;
});
