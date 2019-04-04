require("dotenv").config({ path: __dirname + '/.env' });
const puppeteer = require("puppeteer");

(async () => {
  const browser = await puppeteer.launch();
  console.log('Launching browser');
  const page = await browser.newPage();
  await page.goto("https://dashboard.opendns.com/settings");

  console.log('Logging in')
  await page.type("#username", process.env.USERNAME);
  await page.type("#password", process.env.PASSWORD);

  await Promise.all([
    await page.click("#sign-in"),
    await page.waitForNavigation({ waitUntil: "networkidle0" })
  ]);
  console.log('Login successful')

  try {
    await page.click('img[style*="border: 0pt none; margin-bottom: -1px"]');
    console.log('Updated ip');
  } catch (e) {
    console.log('Keeping old IP');
  }

  console.log('Closing browser');
  await browser.close();
  console.log('All done!');
})();
