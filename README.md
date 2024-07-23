## Teamsport test-app Installatie

Teamsport is een test-app voor de OAuth (login) functionaliteit van de Nederlandse Verificatie App.

![Alt tekst](https://raw.githubusercontent.com/verificatie/oauth-Teamsport-test-app/main/img/Teamsport-3320.png)

👋 This app is intended solely for testing the login functionality of the Nederlandse Verificatie App | OS Autoriteit. It may be that the login base URL is disabled. Please note that you must connect your own API to dsvr.verificatie.nl.

Installatie
Om deze applicatie te installeren en te draaien, volg de onderstaande stappen:

![Alt tekst](https://raw.githubusercontent.com/verificatie/oauth-Teamsport-test-app/main/img/Teamsport-0723-0133.png)

1. Clone de repository naar je lokale machine:

    ```bash
    git clone https://github.com/verificatie/oauth-Teamsport-test-app.git
    ```

2. Navigeer naar de projectmap:

    ```bash
    cd oauth-Teamsport-test-app
    ```

3. Installeer de benodigde npm-pakketten:

    ```bash
    npm install express
    ```

4. Start de server
Om de server te starten, gebruik het volgende commando:

    ```bash
    node index.js
    ```

## Verificatie API

Voor het correct functioneren van de login functionaliteit, moet je verbinding maken met de API op dsvr.verificatie.nl. Zorg ervoor dat je de juiste API-instellingen configureert in de verificatie_app map (flutter app).

Bezoek dev.verificatie.nl voor meer informatie over de API en de integratie.

## Toekomstige updates

De verificatie_app Flutter login OAuth komt na een maand of twee uit en zal dan worden geüpload in deze map. Blijf op de hoogte van updates en controleer regelmatig de repository voor de nieuwste wijzigingen.

![Alt tekst](https://raw.githubusercontent.com/verificatie/oauth-Teamsport-test-app/main/img/Teamsport-20240723.png)
