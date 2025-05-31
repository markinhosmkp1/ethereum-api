/**
 * Script para exportar a chave privada de uma wallet local usando ethers.js.
 * 
 * Este script carrega a chave privada de um arquivo .env (variável PRIVATE_KEY) ou de uma string definida diretamente,
 * cria uma instância de Wallet do ethers.js e exporta o objeto wallet.
 * 
 * @module exportPrivateKey
 * @requires dotenv
 * @requires ethers
 * 
 * @example
 * // Defina PRIVATE_KEY no arquivo .env ou diretamente no script.
 * // Execute o script para exibir o endereço da wallet e exportar a chave privada.
 * 
 * @exports wallet
 */
// Script para exportar a chave privada de uma wallet local usando ethers.js
// Salve como exportPrivateKey.js

require('dotenv').config();
const { ethers } = require('ethers');

// Use a PRIVATE_KEY do .env ou defina diretamente aqui
const privateKey = process.env.PRIVATE_KEY || 'COLOQUE_SUA_CHAVE_PRIVADA_AQUI';

if (!privateKey || privateKey === 'COLOQUE_SUA_CHAVE_PRIVADA_AQUI') {
  console.error('Defina sua chave privada no .env (PRIVATE_KEY=...) ou diretamente no script.');
  process.exit(1);
}

const 
wallet = new ethers.Wallet(privateKey);
// Exporta a wallet para uso posterior

exports.wallet = wallet;
// Exibe o endereço da wallet e a chave privada
console.log('Chave privada:', wallet.privateKey);
// Exibe o endereço da wallet 



console.log('Endereço da wallet:', wallet.address);

console.log('Chave privada exportada com sucesso.');



