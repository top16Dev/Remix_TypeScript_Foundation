/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import type {
  FoundationTreasury,
  FoundationTreasuryInterface,
} from "../FoundationTreasury";

const _abi = [
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "FundsWithdrawn",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "bytes32",
        name: "role",
        type: "bytes32",
      },
      {
        indexed: true,
        internalType: "bytes32",
        name: "previousAdminRole",
        type: "bytes32",
      },
      {
        indexed: true,
        internalType: "bytes32",
        name: "newAdminRole",
        type: "bytes32",
      },
    ],
    name: "RoleAdminChanged",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "bytes32",
        name: "role",
        type: "bytes32",
      },
      {
        indexed: true,
        internalType: "address",
        name: "account",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "sender",
        type: "address",
      },
    ],
    name: "RoleGranted",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "bytes32",
        name: "role",
        type: "bytes32",
      },
      {
        indexed: true,
        internalType: "address",
        name: "account",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "sender",
        type: "address",
      },
    ],
    name: "RoleRevoked",
    type: "event",
  },
  {
    inputs: [],
    name: "DEFAULT_ADMIN_ROLE",
    outputs: [
      {
        internalType: "bytes32",
        name: "",
        type: "bytes32",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "OPERATOR_ROLE",
    outputs: [
      {
        internalType: "bytes32",
        name: "",
        type: "bytes32",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "role",
        type: "bytes32",
      },
    ],
    name: "getRoleAdmin",
    outputs: [
      {
        internalType: "bytes32",
        name: "",
        type: "bytes32",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "role",
        type: "bytes32",
      },
      {
        internalType: "uint256",
        name: "index",
        type: "uint256",
      },
    ],
    name: "getRoleMember",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "role",
        type: "bytes32",
      },
    ],
    name: "getRoleMemberCount",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "account",
        type: "address",
      },
    ],
    name: "grantAdmin",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "account",
        type: "address",
      },
    ],
    name: "grantOperator",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "role",
        type: "bytes32",
      },
      {
        internalType: "address",
        name: "account",
        type: "address",
      },
    ],
    name: "grantRole",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "role",
        type: "bytes32",
      },
      {
        internalType: "address",
        name: "account",
        type: "address",
      },
    ],
    name: "hasRole",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "admin",
        type: "address",
      },
    ],
    name: "initialize",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "account",
        type: "address",
      },
    ],
    name: "isAdmin",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "account",
        type: "address",
      },
    ],
    name: "isOperator",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "role",
        type: "bytes32",
      },
      {
        internalType: "address",
        name: "account",
        type: "address",
      },
    ],
    name: "renounceRole",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "account",
        type: "address",
      },
    ],
    name: "revokeAdmin",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "account",
        type: "address",
      },
    ],
    name: "revokeOperator",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "role",
        type: "bytes32",
      },
      {
        internalType: "address",
        name: "account",
        type: "address",
      },
    ],
    name: "revokeRole",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "contract ISendValueWithFallbackWithdraw",
        name: "market",
        type: "address",
      },
    ],
    name: "withdrawFromEscrow",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address payable",
        name: "to",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "withdrawFunds",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    stateMutability: "payable",
    type: "receive",
  },
];

const _bytecode =
  "0x608060405234801561001057600080fd5b50610fff806100206000396000f3fe60806040526004361061012d5760003560e01c8063924ab158116100a5578063ca15c87311610074578063e348da1311610059578063e348da131461035b578063f5b541a61461037b578063fad8b32a146103af57600080fd5b8063ca15c8731461031b578063d547741f1461033b57600080fd5b8063924ab158146102a6578063a217fddf146102c6578063c1075329146102db578063c4d66de8146102fb57600080fd5b806335bb3e16116100fc5780636d70f7ae116100e15780636d70f7ae1461022e5780639010d07c1461024e57806391d148541461028657600080fd5b806335bb3e16146101ee57806336568abe1461020e57600080fd5b8063248a9ca31461013957806324d7806c1461017c5780632d345670146101ac5780632f2ff15d146101ce57600080fd5b3661013457005b600080fd5b34801561014557600080fd5b50610169610154366004610eaf565b60009081526033602052604090206002015490565b6040519081526020015b60405180910390f35b34801561018857600080fd5b5061019c610197366004610edd565b6103cf565b6040519015158152602001610173565b3480156101b857600080fd5b506101cc6101c7366004610edd565b6103e1565b005b3480156101da57600080fd5b506101cc6101e9366004610efa565b6103ef565b3480156101fa57600080fd5b506101cc610209366004610edd565b610490565b34801561021a57600080fd5b506101cc610229366004610efa565b61049b565b34801561023a57600080fd5b5061019c610249366004610edd565b610523565b34801561025a57600080fd5b5061026e610269366004610f2a565b61054f565b6040516001600160a01b039091168152602001610173565b34801561029257600080fd5b5061019c6102a1366004610efa565b61056e565b3480156102b257600080fd5b506101cc6102c1366004610edd565b610586565b3480156102d257600080fd5b50610169600081565b3480156102e757600080fd5b506101cc6102f6366004610f4c565b610659565b34801561030757600080fd5b506101cc610316366004610edd565b610738565b34801561032757600080fd5b50610169610336366004610eaf565b6107f4565b34801561034757600080fd5b506101cc610356366004610efa565b61080b565b34801561036757600080fd5b506101cc610376366004610edd565b610899565b34801561038757600080fd5b506101697f97667070c54ef182b0f5858b034beac1b6f3089aa2d3188bb1e8929f4fa9b92981565b3480156103bb57600080fd5b506101cc6103ca366004610edd565b6108c3565b60006103db818361056e565b92915050565b6103ec60008261080b565b50565b60008281526033602052604090206002015461040b903361056e565b6104825760405162461bcd60e51b815260206004820152602f60248201527f416363657373436f6e74726f6c3a2073656e646572206d75737420626520616e60448201527f2061646d696e20746f206772616e74000000000000000000000000000000000060648201526084015b60405180910390fd5b61048c82826108ed565b5050565b6103ec6000826103ef565b6001600160a01b03811633146105195760405162461bcd60e51b815260206004820152602f60248201527f416363657373436f6e74726f6c3a2063616e206f6e6c792072656e6f756e636560448201527f20726f6c657320666f722073656c6600000000000000000000000000000000006064820152608401610479565b61048c8282610946565b60006103db7f97667070c54ef182b0f5858b034beac1b6f3089aa2d3188bb1e8929f4fa9b9298361056e565b6000828152603360205260408120610567908361099f565b9392505050565b600082815260336020526040812061056790836109ab565b61059160003361056e565b6106035760405162461bcd60e51b815260206004820152602e60248201527f41646d696e526f6c653a2063616c6c657220646f6573206e6f7420686176652060448201527f7468652041646d696e20726f6c650000000000000000000000000000000000006064820152608401610479565b806001600160a01b0316633ccfd60b6040518163ffffffff1660e01b8152600401600060405180830381600087803b15801561063e57600080fd5b505af1158015610652573d6000803e3d6000fd5b5050505050565b61066460003361056e565b6106d65760405162461bcd60e51b815260206004820152602e60248201527f41646d696e526f6c653a2063616c6c657220646f6573206e6f7420686176652060448201527f7468652041646d696e20726f6c650000000000000000000000000000000000006064820152608401610479565b806106de5750475b6106f16001600160a01b038316826109cd565b816001600160a01b03167feaff4b37086828766ad3268786972c0cd24259d4c87a80f9d3963a3c3d999b0d8260405161072c91815260200190565b60405180910390a25050565b600054610100900460ff1680610751575060005460ff16155b6107b45760405162461bcd60e51b815260206004820152602e60248201527f496e697469616c697a61626c653a20636f6e747261637420697320616c72656160448201526d191e481a5b9a5d1a585b1a5e995960921b6064820152608401610479565b600054610100900460ff161580156107d6576000805461ffff19166101011790555b6107df82610aeb565b801561048c576000805461ff00191690555050565b60008181526033602052604081206103db90610b9c565b600082815260336020526040902060020154610827903361056e565b6105195760405162461bcd60e51b815260206004820152603060248201527f416363657373436f6e74726f6c3a2073656e646572206d75737420626520616e60448201527f2061646d696e20746f207265766f6b65000000000000000000000000000000006064820152608401610479565b6103ec7f97667070c54ef182b0f5858b034beac1b6f3089aa2d3188bb1e8929f4fa9b929826103ef565b6103ec7f97667070c54ef182b0f5858b034beac1b6f3089aa2d3188bb1e8929f4fa9b9298261080b565b60008281526033602052604090206109059082610ba6565b1561048c5760405133906001600160a01b0383169084907f2f8788117e7eff1d82e926ec794901d17c78024a50270940304540a733656f0d90600090a45050565b600082815260336020526040902061095e9082610bbb565b1561048c5760405133906001600160a01b0383169084907ff6391f5c32d9c69d2a47ea670b442974b53935d1edc7fd64eb21e047a839171b90600090a45050565b60006105678383610bd0565b6001600160a01b03811660009081526001830160205260408120541515610567565b80471015610a1d5760405162461bcd60e51b815260206004820152601d60248201527f416464726573733a20696e73756666696369656e742062616c616e63650000006044820152606401610479565b6000826001600160a01b03168260405160006040518083038185875af1925050503d8060008114610a6a576040519150601f19603f3d011682016040523d82523d6000602084013e610a6f565b606091505b5050905080610ae65760405162461bcd60e51b815260206004820152603a60248201527f416464726573733a20756e61626c6520746f2073656e642076616c75652c207260448201527f6563697069656e74206d617920686176652072657665727465640000000000006064820152608401610479565b505050565b600054610100900460ff1680610b04575060005460ff16155b610b675760405162461bcd60e51b815260206004820152602e60248201527f496e697469616c697a61626c653a20636f6e747261637420697320616c72656160448201526d191e481a5b9a5d1a585b1a5e995960921b6064820152608401610479565b600054610100900460ff16158015610b89576000805461ffff19166101011790555b610b91610bfa565b6107df600083610482565b60006103db825490565b6000610567836001600160a01b038416610cbc565b6000610567836001600160a01b038416610d0b565b6000826000018281548110610be757610be7610f78565b9060005260206000200154905092915050565b600054610100900460ff1680610c13575060005460ff16155b610c765760405162461bcd60e51b815260206004820152602e60248201527f496e697469616c697a61626c653a20636f6e747261637420697320616c72656160448201526d191e481a5b9a5d1a585b1a5e995960921b6064820152608401610479565b600054610100900460ff16158015610c98576000805461ffff19166101011790555b610ca0610dfe565b610ca8610dfe565b80156103ec576000805461ff001916905550565b6000818152600183016020526040812054610d03575081546001818101845560008481526020808220909301849055845484825282860190935260409020919091556103db565b5060006103db565b60008181526001830160205260408120548015610df4576000610d2f600183610f8e565b8554909150600090610d4390600190610f8e565b9050818114610da8576000866000018281548110610d6357610d63610f78565b9060005260206000200154905080876000018481548110610d8657610d86610f78565b6000918252602080832090910192909255918252600188019052604090208390555b8554869080610db957610db9610fb3565b6001900381819060005260206000200160009055905585600101600086815260200190815260200160002060009055600193505050506103db565b60009150506103db565b600054610100900460ff1680610e17575060005460ff16155b610e7a5760405162461bcd60e51b815260206004820152602e60248201527f496e697469616c697a61626c653a20636f6e747261637420697320616c72656160448201526d191e481a5b9a5d1a585b1a5e995960921b6064820152608401610479565b600054610100900460ff16158015610ca8576000805461ffff191661010117905580156103ec576000805461ff001916905550565b600060208284031215610ec157600080fd5b5035919050565b6001600160a01b03811681146103ec57600080fd5b600060208284031215610eef57600080fd5b813561056781610ec8565b60008060408385031215610f0d57600080fd5b823591506020830135610f1f81610ec8565b809150509250929050565b60008060408385031215610f3d57600080fd5b50508035926020909101359150565b60008060408385031215610f5f57600080fd5b8235610f6a81610ec8565b946020939093013593505050565b634e487b7160e01b600052603260045260246000fd5b600082821015610fae57634e487b7160e01b600052601160045260246000fd5b500390565b634e487b7160e01b600052603160045260246000fdfea264697066735822122002ddc0acf7eb00c82d4cdbd6670555ee3a4d8d1239257ec1ddf2b01f305374b764736f6c634300080a0033";

type FoundationTreasuryConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: FoundationTreasuryConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class FoundationTreasury__factory extends ContractFactory {
  constructor(...args: FoundationTreasuryConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  deploy(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<FoundationTreasury> {
    return super.deploy(overrides || {}) as Promise<FoundationTreasury>;
  }
  getDeployTransaction(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  attach(address: string): FoundationTreasury {
    return super.attach(address) as FoundationTreasury;
  }
  connect(signer: Signer): FoundationTreasury__factory {
    return super.connect(signer) as FoundationTreasury__factory;
  }
  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): FoundationTreasuryInterface {
    return new utils.Interface(_abi) as FoundationTreasuryInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): FoundationTreasury {
    return new Contract(address, _abi, signerOrProvider) as FoundationTreasury;
  }
}
