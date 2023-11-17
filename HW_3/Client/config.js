module.exports = {
    infuraEndpoint: 'https://polygon-mumbai.infura.io/v3/1b1dc38a916e4dfebaad8fde26adb653',
    contractAddress: '0x6eaE8976618B0A1c16f92093310cC64A2d89287B',
    contractABI: [
        {
            "anonymous": false,
            "inputs": [
                {
                    "indexed": false,
                    "internalType": "uint256",
                    "name": "Id",
                    "type": "uint256"
                },
                {
                    "indexed": false,
                    "internalType": "string",
                    "name": "title",
                    "type": "string"
                },
                {
                    "indexed": false,
                    "internalType": "uint256",
                    "name": "releaseYear",
                    "type": "uint256"
                },
                {
                    "indexed": false,
                    "internalType": "bool",
                    "name": "isAvailable",
                    "type": "bool"
                }
            ],
            "name": "MovieAdded",
            "type": "event"
        },
        {
            "anonymous": false,
            "inputs": [
                {
                    "indexed": false,
                    "internalType": "uint256",
                    "name": "Id",
                    "type": "uint256"
                }
            ],
            "name": "MovieRemoved",
            "type": "event"
        },
        {
            "inputs": [
                {
                    "internalType": "string",
                    "name": "title",
                    "type": "string"
                },
                {
                    "internalType": "uint256",
                    "name": "releaseYear",
                    "type": "uint256"
                },
                {
                    "internalType": "bool",
                    "name": "isAvailable",
                    "type": "bool"
                }
            ],
            "name": "addMovie",
            "outputs": [],
            "stateMutability": "nonpayable",
            "type": "function"
        },
        {
            "inputs": [],
            "name": "lastId",
            "outputs": [
                {
                    "internalType": "uint256",
                    "name": "",
                    "type": "uint256"
                }
            ],
            "stateMutability": "view",
            "type": "function"
        },
        {
            "inputs": [
                {
                    "internalType": "uint256",
                    "name": "",
                    "type": "uint256"
                }
            ],
            "name": "movieMapping",
            "outputs": [
                {
                    "internalType": "string",
                    "name": "title",
                    "type": "string"
                },
                {
                    "internalType": "uint256",
                    "name": "releaseYear",
                    "type": "uint256"
                },
                {
                    "internalType": "bool",
                    "name": "isAvailable",
                    "type": "bool"
                }
            ],
            "stateMutability": "view",
            "type": "function"
        },
        {
            "inputs": [
                {
                    "internalType": "uint256",
                    "name": "Id",
                    "type": "uint256"
                }
            ],
            "name": "removeMovie",
            "outputs": [],
            "stateMutability": "nonpayable",
            "type": "function"
        }
    ]
}