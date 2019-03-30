function random(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

function getTitle() {
  var a = ["Lorem", "Ipsum", "Dolor", "Sit", "Amet", "Dolorium"];
  var b = random(2, 6);
  var c = "";

  for (var i = 0; i < b; i++) {
    c += a[i] + " ";
  }

  return c;
}

function getBody() {
  var a =
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer iaculis, ligula eget molestie suscipit, ipsum libero convallis elit, a cursus enim metus nec enim.";
  var b = random(80, 160);
  var c = a.substr(0, b);
  var d = c.substr(0, Math.min(c.length, c.lastIndexOf(" ")));

  return d;
}
function getQuestion() {
  return random(5, 200);
}
function getTime() {
  return random(20, 60);
}
function getAccess() {
  return random(1000, 1200);
}
function getTag() {
  return "#IT";
}
function getDate() {
  var today = new Date();
  var dd = today.getDate();
  var mm = today.getMonth() + 1; //January is 0!

  var yyyy = today.getFullYear();
  if (dd < 10) {
    dd = "0" + dd;
  }
  if (mm < 10) {
    mm = "0" + mm;
  }
  return dd + "/" + mm + "/" + yyyy;
}
for (var i = 0; i < 10; i++) {
  for (var j = 1; j < 4; j++) {
    var randomImageHeight = random(240, 340);
    var relation = 280 / randomImageHeight;
    var padding = 100 / relation;

    $(".cards-mansory").append(`
      <div class="card">
        <div class="bottom">
          <a class="title" href="detailquestion">${getTitle()}</a>
          <div class="rating"><span class="fa fa-star checked"></span>
          <span class="fa fa-star checked"></span>
          <span class="fa fa-star checked"></span>
          <span class="fa fa-star"></span>
          <span class="fa fa-star"></span></div>
          <div class="set-info">
            <b> <i class="fas fa-question"></i> ${getQuestion()} questions</b>
            <b><i class="fas fa-clock"></i> ${getTime()} minutes</b>
            <b> <i class="fas fa-user"></i> ${getAccess()} access</b>
          </div>
          <p>${getBody()}</p>
          <div class="set-info">
            <a href="#">${getTag()}</a>
            <b> <i class="fas fa-calendar"></i> ${getDate()}</b>
          </div>
        </div>
      </div>`);
  }
}
