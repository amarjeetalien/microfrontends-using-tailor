# Micro frontends demo application using Tailor.js

Forked from https://github.com/tsnolan23/tailor-react-spa.

Refactored to use Webpack 4, Typescript and React Hooks (instead of proppy and proppy-react)

# How to build

- `npm install`
- `npm run install-fragment-dependencies`
- `npm run build-fragments`

# How to run

- `npm run start-fragments` - Starts the frontend fragments on different ports
- `npm start` - Starts the tailor.js application that will load the fragments.

Navigate to http://localhost:8080

# Updates: 
## 31.03.2019 
- Added navigation using the react-router in the header fragment