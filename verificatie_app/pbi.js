module.exports = function pbiPage() {
  return `
    <div class="panel panel-default" style="border-style: none;">
      <div class="panel-body" style="background: #ffffff;">
        <div class="media">
          <div class="media-left">
            <a><img class="img-circle media-object" style="height: 50px; width: 50px;" src="api/img/user.svg"></a>
          </div>
          <div class="media-body">
            <ul class="list-unstyled fa-ul">
              <li><i class="fa fa-user fa-li"></i><a href="#">Full Name</a></li>
              <li><i class="fa fa-envelope fa-li"></i><a href="#">Your Email</a></li>
              <li><i class="fa fa-phone fa-li"></i>Your Phone</li>
            </ul>
          </div>
        </div>
        <div><small>Your Rank?&nbsp;<i class="fa fa-info-circle text-info"></i></small></div>
      </div>
      <div class="panel-footer" style="background: rgb(255,255,255);">
        <center><p class="help-block">Verificatie © V1.23.4</p></center>
        <center><p class="help-block">OnlineThuis</p></center>
        <center><p class="help-block"><img class="img-circle" width="30" height="30" src="api/img/verif.png" /></p></center>
        <center><p class="help-block"><button class="btn btn-default" type="button" style="background: rgb(248,248,248);border-style: solid;border-color: rgb(248,248,248);">uitloggen</button></p></center>
      </div>
    </div>
  `;
};
