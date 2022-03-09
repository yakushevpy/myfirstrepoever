const {By,Key,Builder} = require("selenium-webdriver");
require("chromedriver");   


 
async function example(){
 
        let driver = await new Builder().forBrowser("chrome").build();
        await driver.get("http://google.com");
        await driver.findElement(By.xpath(`/html/body/div[1]/div[3]/form/div[1]/div[1]/div[3]/center/input[2]`)).click();
        await driver.findElement(By.xpath(`//*[@id="highlight"]/ul/li[3]/div/div[1]/a`)).click();

        let title = await driver.getTitle();
        console.log('Title is:',title);
 
        await driver.quit();
}
 
example()