const oauthButton = require('../verificatie_app/oauth');
const header = require('./header'); 

module.exports = function nav(showOAuth = false, showHeader = false) {
  return `
    <section class="highlight-clean" style="background: url('api/img/white-abstract-background_23-2148817572.avif') center / cover repeat-y, rgba(255,255,255,0);">
      <div class="container">
        <div class="intro">
          <h2 class="text-center">
            <img src="api/img/logo.svg" width="300" />
            
            ${showHeader ? '<div>' + header() + '</div>' : ''}
          </h2>
        </div>
        ${showOAuth ? '<div class="oauth-button-container" style="text-align: center; margin-top: 20px;">' + oauthButton() + '</div>' : ''}
      </div>
    </section>
  `;
};
