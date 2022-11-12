$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("file:features/SoundsHomePage.feature");
formatter.feature({
  "name": "Sounds Homepage",
  "description": "",
  "keyword": "Feature"
});
formatter.background({
  "name": "",
  "description": "",
  "keyword": "Background"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "I am on the BBC Sounds Homepage",
  "keyword": "Given "
});
formatter.match({
  "location": "stepDefinitions.steps.i_am_on_the_BBC_Sounds_Homepage()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Radio 1 and Radio 2 logos are displayed in the Listen Live module on the Sounds Homepage",
  "description": "",
  "keyword": "Scenario"
});
formatter.step({
  "name": "I select the \"Home\" logo",
  "keyword": "When "
});
formatter.match({
  "location": "stepDefinitions.steps.i_select_the_logo(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I am on the Sounds Homepage",
  "keyword": "Then "
});
formatter.match({
  "location": "stepDefinitions.steps.i_am_on_the_Sounds_Homepage()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I can see the Radio1 logo",
  "keyword": "And "
});
formatter.match({
  "location": "stepDefinitions.steps.i_can_see_the_Radio1_logo()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I can see the Radio2 logo",
  "keyword": "And "
});
formatter.match({
  "location": "stepDefinitions.steps.i_can_see_the_Radio2_logo()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.background({
  "name": "",
  "description": "",
  "keyword": "Background"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "I am on the BBC Sounds Homepage",
  "keyword": "Given "
});
formatter.match({
  "location": "stepDefinitions.steps.i_am_on_the_BBC_Sounds_Homepage()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Verify network station logos are displayed on the Stations page",
  "description": "",
  "keyword": "Scenario"
});
formatter.step({
  "name": "I click the \"View all Sations \u0026 Schedules\" link",
  "keyword": "When "
});
formatter.match({
  "location": "stepDefinitions.steps.i_click_the_link(java.lang.String)"
});
formatter.result({
  "error_message": "io.cucumber.java.PendingException: TODO: implement me\r\n\tat stepDefinitions.steps.i_click_the_link(steps.java:75)\r\n\tat ✽.I click the \"View all Sations \u0026 Schedules\" link(file:///C:/Users/ssaib/Desktop/AutomationFramework/BBCSoundMusic/./features/SoundsHomePage.feature:13)\r\n",
  "status": "pending"
});
formatter.step({
  "name": "I am on the \"Stations\" page",
  "keyword": "Then "
});
formatter.match({
  "location": "stepDefinitions.steps.i_am_on_the_page(java.lang.String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "I see 26 network station logos",
  "keyword": "And "
});
formatter.match({
  "location": "stepDefinitions.steps.i_see_network_station_logos(java.lang.Integer)"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "status": "passed"
});
formatter.background({
  "name": "",
  "description": "",
  "keyword": "Background"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "I am on the BBC Sounds Homepage",
  "keyword": "Given "
});
formatter.match({
  "location": "stepDefinitions.steps.i_am_on_the_BBC_Sounds_Homepage()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Selecting the Hip Hop category from the Categories module on the Sounds Homepage",
  "description": "",
  "keyword": "Scenario"
});
formatter.step({
  "name": "I select Hip Hop,RnB \u0026 Dancehall Category",
  "keyword": "When "
});
formatter.match({
  "location": "stepDefinitions.steps.i_select_Hip_Hop_RnB_Dancehall_Category()"
});
formatter.result({
  "error_message": "io.cucumber.java.PendingException: TODO: implement me\r\n\tat stepDefinitions.steps.i_select_Hip_Hop_RnB_Dancehall_Category(steps.java:91)\r\n\tat ✽.I select Hip Hop,RnB \u0026 Dancehall Category(file:///C:/Users/ssaib/Desktop/AutomationFramework/BBCSoundMusic/./features/SoundsHomePage.feature:18)\r\n",
  "status": "pending"
});
formatter.step({
  "name": "I am on \"Hip Hop,RnB \u0026 Dancehall\" Category page",
  "keyword": "Then "
});
formatter.match({
  "location": "stepDefinitions.steps.i_am_on_Category_page(java.lang.String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "I see the Category page is sorted by popular",
  "keyword": "And "
});
formatter.match({
  "location": "stepDefinitions.steps.i_see_the_Category_page_is_sorted_by_popular()"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "status": "passed"
});
});