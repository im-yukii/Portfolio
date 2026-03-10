const puppeteer = require('puppeteer');

(async () => {
  const browser = await puppeteer.launch({ headless: 'new' });
  const page = await browser.newPage();
  
  // Capture console messages
  page.on('console', msg => console.log('PAGE LOG:', msg.text()));
  page.on('pageerror', error => console.log('PAGE ERROR:', error.message));
  page.on('requestfailed', request => console.log('REQUEST FAILED:', request.url(), request.failure().errorText));

  // Disable cache to ensure fresh load
  await page.setCacheEnabled(false);

  console.log('Navigating to index.html...');
  await page.goto('file:///Users/yun/Desktop/BU_%E3%83%9D%E3%83%BC%E3%83%88%E3%83%95%E3%82%A9%E3%83%AA%E3%82%AA/www/index.html', { waitUntil: 'networkidle0' });

  // Check if Swiper is global
  const swiperDefined = await page.evaluate(() => typeof window.Swiper !== 'undefined');
  console.log('window.Swiper defined:', swiperDefined);

  // Check if any swipers were initialized
  const initialized = await page.evaluate(() => {
    return Array.from(document.querySelectorAll('.mySwiper')).map(el => !!el.swiper);
  });
  console.log('Swipers initialized state:', initialized);

  await browser.close();
})();
