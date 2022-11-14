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
  "name": "I click the View all Sations \u0026 Schedules link",
  "keyword": "When "
});
formatter.match({
  "location": "stepDefinitions.steps.i_click_the_link()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I am on the Stations page",
  "keyword": "Then "
});
formatter.match({
  "location": "stepDefinitions.steps.i_am_on_the_page()"
});
formatter.result({
  "error_message": "java.lang.AssertionError: expected [BBC Sounds - Stations \u0026 Schedules] but found [BBC Sounds - Music. Radio. Podcasts]\r\n\tat org.testng.Assert.fail(Assert.java:97)\r\n\tat org.testng.Assert.assertEqualsImpl(Assert.java:136)\r\n\tat org.testng.Assert.assertEquals(Assert.java:118)\r\n\tat org.testng.Assert.assertEquals(Assert.java:575)\r\n\tat org.testng.Assert.assertEquals(Assert.java:585)\r\n\tat stepDefinitions.steps.i_am_on_the_page(steps.java:83)\r\n\tat ✽.I am on the Stations page(file:///C:/Users/ssaib/Desktop/AutomationFramework/BBCSoundMusic/./features/SoundsHomePage.feature:14)\r\n",
  "status": "failed"
});
formatter.step({
  "name": "I see 26network station logos",
  "keyword": "And "
});
formatter.match({
  "location": "stepDefinitions.steps.i_see_network_station_logos()"
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
  "status": "passed"
});
formatter.step({
  "name": "I see the Category page is sorted by popular",
  "keyword": "And "
});
formatter.match({
  "location": "stepDefinitions.steps.i_see_the_Category_page_is_sorted_by_popular()"
});
formatter.result({
  "error_message": "org.openqa.selenium.StaleElementReferenceException: stale element reference: element is not attached to the page document\n  (Session info: chrome\u003d107.0.5304.107)\nFor documentation on this error, please visit: https://selenium.dev/exceptions/#stale_element_reference\nBuild info: version: \u00274.0.0-alpha-6\u0027, revision: \u00275f43a29cfc\u0027\nSystem info: host: \u0027ROSHI-IDEAPAD\u0027, ip: \u0027192.168.1.62\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_281\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 107.0.5304.107, chrome: {chromedriverVersion: 107.0.5304.62 (1eec40d3a576..., userDataDir: C:\\Users\\ssaib\\AppData\\Loca...}, goog:chromeOptions: {debuggerAddress: localhost:61721}, javascriptEnabled: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: WINDOWS, platformName: WINDOWS, proxy: Proxy(), setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify, webauthn:extension:credBlob: true, webauthn:extension:largeBlob: true, webauthn:virtualAuthenticators: true}\nSession ID: 18db6d1ee0c202e3b27755a474b82723\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:423)\r\n\tat org.openqa.selenium.remote.codec.w3c.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:196)\r\n\tat org.openqa.selenium.remote.codec.w3c.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:129)\r\n\tat org.openqa.selenium.remote.codec.w3c.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:53)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:160)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:582)\r\n\tat org.openqa.selenium.remote.RemoteWebElement.execute(RemoteWebElement.java:316)\r\n\tat org.openqa.selenium.remote.RemoteWebElement.getText(RemoteWebElement.java:181)\r\n\tat Pages.homePage.isSorted(homePage.java:102)\r\n\tat stepDefinitions.steps.i_see_the_Category_page_is_sorted_by_popular(steps.java:112)\r\n\tat ✽.I see the Category page is sorted by popular(file:///C:/Users/ssaib/Desktop/AutomationFramework/BBCSoundMusic/./features/SoundsHomePage.feature:19)\r\n",
  "status": "failed"
});
formatter.step({
  "name": "I am on Hip Hop,RnB \u0026 Dancehal Category page",
  "keyword": "Then "
});
formatter.match({
  "location": "stepDefinitions.steps.hiphopdancepage()"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "status": "passed"
});
});