module.exports = function footer() {
  return `
    <footer class="text-black text-opacity-25 bg-dark" style="background: linear-gradient(#ffffff 0%, white);border-top-style: solid;border-top-color: rgb(239,239,239);">
      <div class="container py-4 py-lg-5">
        <p class="mb-0" style="color: rgba(0,0,0,0.91);">
          <img class="rounded" src="api/img/ts_icon.svg" width="30">&nbsp;&nbsp;Teamsport | TEST APP
        </p>
        <div class="d-flex justify-content-between align-items-center pt-3">
          <p class="mb-0" style="color: rgba(0,0,0,0.91);">
            <img class="rounded" src="api/img/verif.png" width="30">&nbsp; Nederlandse Verificatie App | OS Autoriteit
          </p>
        </div>
      </div>
    </footer>
    <footer class="footer-clean" style="border-top-style: solid;border-top-color: rgb(242,242,242);">
      <div class="container">
        <div class="row">
          <div class="col-md-12 col-md-offset-0 item social">
            <p class="copyright">This app is intended solely for testing the login functionality of the Nederlandse Verificatie App | OS Autoriteit.</p>
            <p class="copyright">Important Notice:<br><br>This app, "Teamsport | TEST APP," is for testing purposes only and is not intended for production use.<br>Use this app to test the functionality and integration of the Nederlandse Verificatie App | OS Autoriteit login.<br>The data and information in this test environment are not representative of the actual production environment.<br>Any issues or bugs found in this test app may not necessarily occur in the official Nederlandse Verificatie App | OS Autoriteit.</p>
            <p class="copyright">Use this app exclusively for testing purposes and not for official verifications or production processes.</p>
            <p class="copyright">SOFTYWA LTD |&nbsp;Company number 15104139 | Registered office address<br>Erickson Holding Ltd, 415 High Street 1st Floor, London, United Kingdom, E15 4QZ</p>
            <p class="copyright">
              <button class="btn btn-default" type="button" style="background: rgb(248,248,248);border-style: solid;border-color: rgb(248,248,248);">View the log</button>
            </p>
          </div>
        </div>
      </div>
    </footer>
  `;
};
