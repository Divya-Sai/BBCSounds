package Pages;

import org.openqa.selenium.By;
import org.openqa.selenium.JavascriptExecutor;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;
import org.testng.Assert;

import java.util.ArrayList;
import java.util.Collections;
import java.util.List;

public class homePage {

    WebDriver driver;
    //WebElements
    @FindBy(xpath = "//span[@class='sc-c-sounds-nav__link-text gel-pica'][normalize-space()='Home']")
    private WebElement btnHome;

    @FindBy(xpath = "//span[normalize-space()='Music']")
    private WebElement btnMusic;

    @FindBy(xpath = "//span[normalize-space()='Podcasts']")
    private WebElement btnPodcasts;

    @FindBy(xpath = "//span[normalize-space()='My Sounds']")
    private WebElement btnMySounds;

    @FindBy(xpath = "//div[@class='sc-c-sounds-nav__wrapper']")
    public WebElement bbcSoundsNav;

    @FindBy(xpath = "//h2[@id='sc-id-listen-live']")
    private WebElement listenLive;

    @FindBy(xpath = "//div[normalize-space()='Radio 1']")
    public WebElement btnRadio1;

    @FindBy(xpath = "//div[normalize-space()='Radio 2']")
    public WebElement btnRadio2;

    @FindBy(xpath = "//span[contains(text(),'View all Stations & Schedules')]")
    public WebElement linkViewallStationSchedules;

    @FindBy(xpath = "//h2[@id='sc-id-categories']")
    private WebElement Categories;

    @FindBy(xpath = "//div[contains(text(),'Hip Hop, RnB & Dancehall')]")
    public WebElement linkHipHopANDDancehall;

    @FindBy(xpath = "(//ul[@class='sc-c-grid__grid gel-layout gel-layout--equal'])[4]")
    public WebElement Categorieslinks;

    public homePage(WebDriver driver) {
        this.driver = driver;
        PageFactory.initElements(driver, this);
    }

    public void soundNavItems(String navItems) {
        if (navItems.equalsIgnoreCase("Home")) {
            btnHome.click();
        } else if (navItems.equalsIgnoreCase("Music")) {
            btnMusic.click();
        } else if (navItems.equalsIgnoreCase("Podcasts")) {
            btnPodcasts.click();
        } else if (navItems.equalsIgnoreCase("My Sounds")) {
            btnMySounds.click();
        }
    }

    public WebElement getSelectedPage() {
        return bbcSoundsNav.findElement(By.className("sc-c-sounds-nav__link-item--active"));
    }

    public void isListenLive() {
        listenLive.isDisplayed();
        ((JavascriptExecutor) driver)
                .executeScript("arguments[0].scrollIntoView(true);", listenLive);
    }

    public void clickOnStationandSchedule() throws InterruptedException {
        Thread.sleep(5000);
        ((JavascriptExecutor) driver)
                .executeScript("arguments[0].scrollIntoView(true);", linkViewallStationSchedules);
        linkViewallStationSchedules.click();
    }

    public void selectCategories() throws InterruptedException {
        ((JavascriptExecutor) driver)
                .executeScript("arguments[0].scrollIntoView(true);", Categories);
        Thread.sleep(4000);
        linkHipHopANDDancehall.click();

    }

    public void isSorted(){
      //  ArrayList<String> obtainedList = new ArrayList<>();
        ArrayList<String>  obtainedList = new ArrayList<String>();
        List<WebElement> elementList= driver.findElements(By.xpath("(//ul[@class='sc-c-grid__grid gel-layout gel-layout--equal'])[4]"));
        for(WebElement we:elementList){
            obtainedList.add(we.getText());
            System.out.println("Obtained or original List is"+obtainedList);
        }
        ArrayList<String>  sortedList = new ArrayList();
        for(String s:obtainedList){
            sortedList.add(s);
            System.out.println("Sorted list is:: "+sortedList);
        }
        Collections.sort(sortedList);
        Assert.assertTrue(sortedList.equals(obtainedList));
    }

}
