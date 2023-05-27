import {
  useContract,
  useAccount,
  useContractRead,
  useBalance,
} from "@starknet-react/core";
import { staking } from "../abis/staking";

export default function ContractInteract() {
  const { address } = useAccount();
  console.log("userAddress", { address });
  // para obtener la instancia de un contrato
  const { contract } = useContract({
    address:
      "0x073c43795687eb35b637b4b740877aa582eee5beb5ccf89116682603b152bfa2",
    abi: staking,
  });

  const { data: ethBalance } = useBalance({
    address,
    token: "0x049d36570d4e46f48e99674bd3fcc84644ddd6b96f7c741b1562b82f9e004dc7",
  });

  const { data, isLoading, error, refetch } = useContractRead({
    address:
      "0x073c43795687eb35b637b4b740877aa582eee5beb5ccf89116682603b152bfa2",
    abi: staking,
    functionName: "balanceStaked",
    args: [
      "0x022aAdB68263d40197452fe3e7b5172f156C12b01cFc0F969a391f076b203cC3",
    ],
  });

  if (isLoading) return <span>Loading...</span>;
  // if (error) return <span>Error: {error}</span>;

  console.log({ contract });
  console.log({ data, ethBalance });

  return (
    <div>
      <div style={{ margin: "20px" }}>
        <h3>Staking Contract: </h3>
        <span>{contract?.address}</span>
      </div>
      <div style={{ margin: "20px" }}>
        <h3>Your ETH Balance: </h3>
        <span>{ethBalance?.formatted}</span>
      </div>
      <button onClick={refetch}>Refresh</button>
    </div>
  );
}
