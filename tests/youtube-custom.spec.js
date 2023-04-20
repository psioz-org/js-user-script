import {test,expect} from '@playwright/test'
test('test',async ({page}) => {
  //Just check script run fine and element exists
  await page.addInitScript({path: './src/youtube-custom.user.js'})
  await page.goto('https://www.youtube.com/watch?v=__NeP0RqACU/')
  await page.waitForSelector('.ytp-chrome-bottom',{timeout: 5000})
})
