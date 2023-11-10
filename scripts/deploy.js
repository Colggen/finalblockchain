

async function main() {
  const Voting = await ethers.getContractFactory("Voting");
  const voting = await Voting.deploy(["Artyom", "Max", "Yelkhan", "Bota"]); 

  await voting.waitForDeployment();

  console.log("Contract address:", await voting.getAddress());


}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});