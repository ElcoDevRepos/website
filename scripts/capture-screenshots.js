const { chromium } = require('playwright');
const sharp = require('sharp');
const fs = require('fs').promises;
const path = require('path');

const sites = [

  {
    name: 'synctup',
    url: 'https://app.synctup.com',
    selectors: ['.main-view', '.content'],
    auth: false
  }
];

async function captureScreenshots() {
  const browser = await chromium.launch({ headless: true });
  const context = await browser.newContext({
    viewport: { width: 1920, height: 1080 },
    deviceScaleFactor: 2  // For higher quality screenshots
  });

  const outputDir = path.join(__dirname, '..', 'public', 'portfolio');
  await fs.mkdir(outputDir, { recursive: true });

  for (const site of sites) {
    try {
      console.log(`📸 Capturing ${site.name}...`);
      const page = await context.newPage();
      
      // Navigate with retry logic
      let retries = 3;
      while (retries > 0) {
        try {
          await page.goto(site.url, { 
            waitUntil: 'networkidle',
            timeout: 30000 
          });
          break;
        } catch (err) {
          console.log(`Retry ${4 - retries} for ${site.name}`);
          retries--;
          if (retries === 0) throw err;
          await new Promise(r => setTimeout(r, 5000));
        }
      }

      // Wait for content to load
      await page.waitForTimeout(5000);

      // Try to find and wait for specific selectors
      for (const selector of site.selectors) {
        try {
          await page.waitForSelector(selector, { timeout: 5000 });
        } catch (e) {
          console.log(`Selector ${selector} not found in ${site.name}`);
        }
      }

      // Take full page screenshot
      const screenshotPath = path.join(outputDir, `${site.name}.jpg`);
      await page.screenshot({
        path: screenshotPath,
        fullPage: false,
        type: 'jpeg',
        quality: 90
      });

      // Optimize the image
      await sharp(screenshotPath)
        .resize(1920, 1080, {
          fit: 'cover',
          position: 'top'
        })
        .jpeg({
          quality: 85,
          progressive: true,
          mozjpeg: true
        })
        .toFile(path.join(outputDir, `${site.name}-optimized.jpg`));

      console.log(`✅ Successfully captured and optimized ${site.name}`);
      await page.close();
    } catch (error) {
      console.error(`❌ Error capturing ${site.name}:`, error.message);
    }
  }

  await browser.close();
  console.log('🎉 Screenshot capture complete!');
}

captureScreenshots().catch(console.error);
