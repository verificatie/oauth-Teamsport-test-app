## Teamsport test-app Installation

## Project structure

```plaintext
project/
├── components/
│   ├── nav.js
│   ├── footer.js
│   ├── pbi.js
│   ├── prof_data.js
│   └── header.js
├── api/
│   ├── api_links.js
│   ├── alert.js
│   ├── css/
│   └── img/
├── verificatie_app/
│   ├── oauth.js
│   └── pbi.js
├── index.js
├── app.js
└── package.json

Teamsport is a test app for the OAuth (login) functionality of the Nederlandse Verificatie App.

![Alt tekst](https://raw.githubusercontent.com/verificatie/oauth-Teamsport-test-app/main/img/Teamsport-3320.png)

👋 This app is intended solely for testing the login functionality of the Nederlandse Verificatie App | OS Autoriteit. Please note that the login base URL may be disabled. You must connect your own API to dsvr.verificatie.nl.

Installation
To install and run this application, follow the steps below:

![Alt tekst](https://raw.githubusercontent.com/verificatie/oauth-Teamsport-test-app/main/img/Teamsport-0723-0133.png)

1. Clone the repository to your local machine:


    ```bash
    git clone https://github.com/verificatie/oauth-Teamsport-test-app.git
    ```

2. Navigate to the project directory:

    ```bash
    cd oauth-Teamsport-test-app
    ```

3. Install the required npm packages:

    ```bash
    npm install express
    ```

4. Start the server
To start the server, use the following command:

    ```bash
    node index.js
    ```

## Verificatie API

For the login functionality to work correctly, you need to connect to the API at dsvr.verificatie.nl. Make sure to configure the correct API settings in the verificatie_app folder (Flutter app).

Visit dev.verificatie.nl for more information about the API and integration.

## Future Updates
The verification_app Flutter OAuth login will be released in about a month or two and will be uploaded to this folder. Stay tuned for updates and check the repository regularly for the latest changes.

![Alt tekst](https://raw.githubusercontent.com/verificatie/oauth-Teamsport-test-app/main/img/Teamsport-20240723.png)
