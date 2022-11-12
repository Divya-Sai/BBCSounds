package Pages;

import org.openqa.selenium.By;
import org.openqa.selenium.JavascriptExecutor;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;

public class homePage {

    WebDriver driver;
    //WebElements
    @FindBy(xpath="//span[@class='sc-c-sounds-nav__link-text gel-pica'][normalize-space()='Home']")
    private WebElement btnHome;

    @FindBy(xpath="//span[normalize-space()='Music']")
    private WebElement btnMusic;

    @FindBy(xpath="//span[normalize-space()='Podcasts']")
    private WebElement btnPodcasts;

    @FindBy(xpath="//span[normalize-space()='My Sounds']")
    private WebElement btnMySounds;

    @FindBy(xpath="//div[@class='sc-c-sounds-nav__wrapper']")
    public WebElement bbcSoundsNav;

    @FindBy(xpath="//h2[@id='sc-id-listen-live']")
    private WebElement listenLive;

    @FindBy(xpath="//div[normalize-space()='Radio 1']")
    public WebElement btnRadio1;

    @FindBy(xpath="//div[normalize-space()='Radio 2']")
    public WebElement btnRadio2;

    public homePage(WebDriver driver) {
        this.driver=driver;
        PageFactory.initElements(driver,this);
    }

    public void soundNavItems(String navItems){
      if (navItems.equalsIgnoreCase("Home")){
          btnHome.click();
      }
      else if (navItems.equalsIgnoreCase("Music")){
          btnMusic.click();
      }
      else if (navItems.equalsIgnoreCase("Podcasts")){
          btnPodcasts.click();
      }
      else if (navItems.equalsIgnoreCase("My Sounds")){
          btnMySounds.click();
      }
    }

    public WebElement getSelectedPage() {
        return bbcSoundsNav.findElement(By.className("sc-c-sounds-nav__link-item--active"));
    }
    public void isListenLive(){
        listenLive.isDisplayed();
        ((JavascriptExecutor)driver)
                .executeScript("arguments[0].scrollIntoView(true);", listenLive);
    }

}
