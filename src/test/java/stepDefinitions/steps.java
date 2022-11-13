package stepDefinitions;

import Pages.basePage;
import Pages.homePage;
import io.cucumber.java.After;
import io.cucumber.java.en.Given;
import io.cucumber.java.en.Then;
import io.cucumber.java.en.When;
import io.cucumber.java.Before;
import org.apache.logging.log4j.LogManager;
import org.apache.logging.log4j.Logger;
import org.openqa.selenium.By;
import org.openqa.selenium.JavascriptExecutor;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.chrome.ChromeDriver;
import org.testng.Assert;

public class steps {

    Logger logger; //for logging
    basePage bPage;
    WebDriver driver;
    homePage homPage;

    @Before
    public void setup(){
        //for logging
        logger= LogManager.getLogger(this.getClass());
        bPage = new basePage();
        bPage.setBrowser("Chrome");
        driver = new ChromeDriver();
    }

    @After
    public void tearDown() throws InterruptedException {
        Thread.sleep(5000);
        driver.quit();
    }

    @Given("I am on the BBC Sounds Homepage")
    public void i_am_on_the_BBC_Sounds_Homepage() {
        driver.get("http://www.bbc.co.uk/sounds");
        driver.manage().window().maximize();
        logger.info("logged into BBC Sounds Homepage");
    }

    @When("I select the {string} logo")
    public void i_select_the_logo(String soundnavitem) throws InterruptedException {
       homPage = new homePage(driver);
       Thread.sleep(5000);
       homPage.soundNavItems(soundnavitem);

    }
    @Then("I am on the Sounds Homepage")
    public void i_am_on_the_Sounds_Homepage() {
        String actualtitle =driver.getTitle();
        Assert.assertTrue(homPage.bbcSoundsNav.isDisplayed());
        Assert.assertEquals(actualtitle, "BBC Sounds - Music. Radio. Podcasts");
        Assert.assertEquals(homPage.getSelectedPage().getText(), "Home");

    }
    @Then("I can see the Radio1 logo")
    public void i_can_see_the_Radio1_logo() {
       homPage.isListenLive();
       Assert.assertTrue(homPage.btnRadio1.isDisplayed());
    }

    @Then("I can see the Radio2 logo")
    public void i_can_see_the_Radio2_logo() {
        homPage.isListenLive();
        Assert.assertTrue(homPage.btnRadio2.isDisplayed());
    }
    @When("I click the View all Sations & Schedules link")
    public void i_click_the_link()  {
        homPage = new homePage(driver);
        homPage.linkViewallStationSchedules.click();
    }
    @Then("I am on the Stations page")
    public void i_am_on_the_page() {
        String actualtitle =driver.getTitle();
        Assert.assertEquals(actualtitle, "BBC Sounds - Stations & Schedules");
    }
    @Then("I see 26network station logos")
    public void i_see_network_station_logos() throws InterruptedException {
        java.util.List<WebElement> links = driver.findElements(By.tagName("a"));
        System.out.println("Number of Links in the Page is " + links.size());

        for (int i = 1; i<links.size(); i++) {
            System.out.println("Name of Link# " + i + links.get(i).getText());
        }
        Thread.sleep(5000);
    }

    @When("I select Hip Hop,RnB & Dancehall Category")
    public void i_select_Hip_Hop_RnB_Dancehall_Category() throws InterruptedException {
        homPage = new homePage(driver);
        homPage.selectCategories();
    }
    @Then("I am on Hip Hop,RnB & Dancehal Category page")
    public void hiphopdancepage() throws InterruptedException {
        Thread.sleep(3000);
        String actualtitle =driver.getTitle();
        System.out.println("the hip hop title is "+actualtitle);
        Assert.assertEquals(actualtitle, "BBC Sounds - Categories - Hip Hop, RnB & Dancehall");
    }
    @Then("I see the Category page is sorted by popular")
    public void i_see_the_Category_page_is_sorted_by_popular() {
     homPage =  new homePage(driver);

    }


}
