window.InitUserScripts = function()
{
var player = GetPlayer();
var object = player.object;
var once = player.once;
var addToTimeline = player.addToTimeline;
var setVar = player.SetVar;
var getVar = player.GetVar;
var update = player.update;
var pointerX = player.pointerX;
var pointerY = player.pointerY;
var showPointer = player.showPointer;
var hidePointer = player.hidePointer;
var slideWidth = player.slideWidth;
var slideHeight = player.slideHeight;
window.Script1 = function()
{
  function uuidv4() {
  return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
    const r = Math.random() * 16 | 0, v = c === 'x' ? r : (r & 0x3 | 0x8);
    return v.toString(16);
  });
}
var uuid = uuidv4();
var player = GetPlayer();
player.SetVar("SessionID", uuid);

}

window.Script2 = function()
{
  var player = GetPlayer();

var data = {
  "UserID": player.GetVar("UserID"),
  "MatchHazard_Attempts": player.GetVar("MatchHazard_Attempts"),
  "MatchHazard_Correct": player.GetVar("MatchHazard_Correct"),
  "HoC_Attempts": player.GetVar("HoC_Attempts"),
  "HoC_Correct": player.GetVar("HoC_Correct"),
  "Costumer_Attempts": player.GetVar("Costumer_Attempts"),
  "Costumer_Correct": player.GetVar("Costumer_Correct"),
  "Music_Attempts": player.GetVar("Music_Attempts"),
  "Music_Correct": player.GetVar("Music_Correct"),
  "Home_Attempts": player.GetVar("Home_Attempts"),
  "Home_Correct": player.GetVar("Home_Correct"),
  "AI4Safety_Before_Reflection": player.GetVar("AI4Safety_Before_Reflection"),
  "AI4Safety_After_Reflection": player.GetVar("AI4Safety_After_Reflection"),
  "ModelPurpose": player.GetVar("ModelPurpose"),
  "InputNeeded": player.GetVar("InputNeeded"),
  "ExpectedOuput": player.GetVar("ExpectedOuput"),
  "ResultsReport": player.GetVar("ResultsReport"),
  "HumanRole": player.GetVar("HumanRole"),
  "AI_Concerns": player.GetVar("AI_Concerns")
};

fetch("https://script.google.com/macros/s/AKfycbzam30ehgJt4jgFN8mTM6OElrbfzLPQSsyRr09Bsm7wmO3n5VavNhyDwRcU4e0Xwkjzig/exec", {
  method: "POST",
  mode: "no-cors",
  headers: {
    "Content-Type": "application/x-www-form-urlencoded"
  },
  body: new URLSearchParams(data)
});
}

window.Script3 = function()
{
  var player = GetPlayer();

window.addEventListener("message", function(event) {
    if (event.data === "surveyCompleted") {
        player.SetVar("SurveyCompleted", true);
    }
}, false);
}

window.Script4 = function()
{
  function getQueryParam(param) {
  var url = new URL(window.location.href);
  return url.searchParams.get(param);
}

var player = GetPlayer();
var incomingUserID = getQueryParam("PostUserID");
if (incomingUserID) {
  player.SetVar("PostUserID", incomingUserID);
}

}

window.Script5 = function()
{
  var player = GetPlayer();

var data = {
  "PostUserID": player.GetVar("PostUserID"),
};

fetch("https://script.google.com/macros/s/AKfycbzam30ehgJt4jgFN8mTM6OElrbfzLPQSsyRr09Bsm7wmO3n5VavNhyDwRcU4e0Xwkjzig/exec", {
  method: "POST",
  mode: "no-cors",
  headers: {
    "Content-Type": "application/x-www-form-urlencoded"
  },
  body: new URLSearchParams(data)
});
}

window.Script6 = function()
{
  var player = GetPlayer();

window.addEventListener("message", function(event) {
    if (event.data === "surveyCompleted") {
        player.SetVar("SurveyCompleted", true);
    }
}, false);
}

window.Script7 = function()
{
  function getQueryParam(param) {
  var url = new URL(window.location.href);
  return url.searchParams.get(param);
}

var player = GetPlayer();
var incomingUserID = getQueryParam("UserID");
if (incomingUserID) {
  player.SetVar("UserID", incomingUserID);
}

}

window.Script8 = function()
{
  var player = GetPlayer();

window.addEventListener("message", function(event) {
    if (event.data === "surveyCompleted") {
        player.SetVar("SurveyCompleted", true);
    }
}, false);
}

window.Script9 = function()
{
  function getQueryParam(param) {
  var url = new URL(window.location.href);
  return url.searchParams.get(param);
}

var player = GetPlayer();
var incomingUserID = getQueryParam("PostUserID");
if (incomingUserID) {
  player.SetVar("PostUserID", incomingUserID);
}

}

window.Script10 = function()
{
  var player = GetPlayer();

var data = {
  "PostUserID": player.GetVar("PostUserID"),
};

fetch("https://script.google.com/macros/s/AKfycbzam30ehgJt4jgFN8mTM6OElrbfzLPQSsyRr09Bsm7wmO3n5VavNhyDwRcU4e0Xwkjzig/exec", {
  method: "POST",
  mode: "no-cors",
  headers: {
    "Content-Type": "application/x-www-form-urlencoded"
  },
  body: new URLSearchParams(data)
});
}

};
