module.exports = function alert() {
  return `
    <div id="alert" class="alert alert-warning beautiful" role="alert" style="background: rgb(252,248,227);">
      <div style="font-size: 10px;">
        <strong>👋</strong> This app is intended solely for testing the login functionality of the Nederlandse Verificatie App | OS Autoriteit. It may be that the login base URL is disabled.

        Please note that you must connect your own API to dsvr.verificatie.nl
      </div>
    </div>
  `;
};
