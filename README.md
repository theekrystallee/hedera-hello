## Hedera Consensus Service Demo

### The Tech Stack

- Network: [Hedera](https://hedera.com/)
- SDK: [Hashgraph JS](https://github.com/hashgraph/hedera-sdk-js)
- IDE: [Visual Studio Code](https://visualstudio.microsoft.com/downloads/)

---

### Getting Started

### The prerequisites:

1. Install [Git](https://git-scm.com/downloads) and [Node.js](https://nodejs.org/en/download/) on your machine.

- Create a [Hedera Portal Profile](https://docs.hedera.com/guides/getting-started/introduction) and [testnet account](https://hedera.com/blog/create-accounts-with-ed25519-and-ecdsa-keys-from-the-hedera-portal).
- Install [MetaMask wallet](https://metamask.io/), add the [Hedera network RPC endpoint](https://hedera.com/blog/leveraging-ethereum-developer-tools-on-hedera#Import), and import the Hedera account you created in the previous step.

---

### Development Environment

1. Clone the repository:

```zsh
git clone https://github.com/theekrystallee/hedera-hello.git
```

2. Install the dependencies:

```zsh
npm install
```

3. Rename the `.env.example` file to `.env` and add your Hedera account ID and private key.

4. Install `dotenv`:

```zsh
npm install dotenv
```

5. Run the code:

```zsh
node index.js
```
