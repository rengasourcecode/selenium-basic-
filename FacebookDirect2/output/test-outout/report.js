$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("src/test/java/FeatureScripts/test.Feature");
formatter.feature({
  "name": "Facebook Login",
  "description": "",
  "keyword": "Feature"
});
formatter.scenario({
  "name": "With valid credentials user enters the login page",
  "description": "",
  "keyword": "Scenario"
});
formatter.step({
  "name": "user is the facebook login page",
  "keyword": "Given "
});
formatter.match({
  "location": "DefnFB.user_is_the_facebook_login_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user enters the username",
  "keyword": "Then "
});
formatter.match({
  "location": "DefnFB.user_enters_the_username()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user enters the password",
  "keyword": "Then "
});
formatter.match({
  "location": "DefnFB.user_enters_the_password()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user clicks the submit button",
  "keyword": "And "
});
formatter.match({
  "location": "DefnFB.user_clicks_the_submit_button()"
});
formatter.result({
  "status": "passed"
});
});