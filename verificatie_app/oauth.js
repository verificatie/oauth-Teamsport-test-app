module.exports = function oauthButton() {
  return `
    <div class="buttons">
      <button onclick="openOAuthWindow()" class="btn btn-primary btn-sm" type="button" style="background: rgb(35,27,110);width: 300.18px;color: rgb(255,255,255);border-style: solid;border-color: rgb(49,44,105);font-size: 10px;padding: 10px 32px;">
        <img class="img-rounded" width="20" src="/api/img/verif.svg" height="20" /> open Verificatie APP
      </button>
      <script>
        function openOAuthWindow() {
          var width = 500;
          var height = 600;
          var left = (screen.width / 2) - (width / 2);
          var top = (screen.height / 2) - (height / 2);
          window.open('http://open.verificatie.nl/login/#verificatie/Window/#/OAuth', 'OAuth Login', 'width=' + width + ', height=' + height + ', top=' + top + ', left=' + left);
        }
      </script>
    </div>
  `;
};
