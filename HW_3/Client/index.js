const { ethers } = require('ethers');
const config = require('./config');
require('dotenv').config();

const provider = new ethers.JsonRpcProvider(config.infuraEndpoint);
const contract = new ethers.Contract(config.contractAddress, config.contractABI, provider);

const addMovie = async (title, releaseYear, isAvailable) => {
    try {
      const wallet = new ethers.Wallet(process.env.PRIVATE_KEY, provider);
      const contractWithSigner = contract.connect(wallet);
    
      const transaction = await contractWithSigner.addMovie(title, releaseYear, isAvailable);
      await transaction.wait();
      console.log("Фильм успешно добавлен");
    } catch (error) {
      console.error("Ошибка добавления фильма: ", error);
    }
  };
  
const removeMovie = async (key) => {
    try {
      const wallet = new ethers.Wallet(process.env.PRIVATE_KEY, provider);
      const contractWithSigner = contract.connect(wallet);
    
      const transaction = await contractWithSigner.removeMovie(key);
      await transaction.wait();
      console.log("Фильм успешно удален");
    } catch (error) {
      console.error("Ошибка удаления фильма: ", error);
    }
  };

async function main() {
    addMovie("Название фильма", 2022, true);
    removeMovie(1);
}

main()
    .then(() => process.exit(0))
    .catch(error => {
        console.error(error);
        process.exit(1);
    });

