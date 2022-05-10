# Local setup
create a file named .env.local with 
```
ENVIRONMENT="local"
NEXT_PUBLIC_ENVIRONMENT="local"
```

then you need to run local hardhat node:
```
npx hardhat node
```
and deploy a smartcontract to it:
```
npx hardhat run scripts/deploy.js --network localhost
```

Page3 then should render a greet from smartcontract