import {test,expect} from '@playwright/test'
test('test',async ({page}) => {
  console.log('BROWSER_NAME2:',process.env.BROWSER_NAME2)
  console.log('GITHUB_ACTION',process.env.GITHUB_ACTION)
  //try {
  // - Show:
  // Story own by me and I'm in subtask
  // Story own by me but no me in subtask
  // Story not own by me but I'm in subtask
  // - Show2, although ignored col if it has no subtask, it's already easy visible as card so always show:
  // Story own by me without any subtask in active col
  // Story own by me without any subtask in ignored col

  // - Don't show:
  // Story own by me and my subtask is already in ignored col
  // Story unrelated to me
  // Story not own by me but I'm in subtask which is already in ignored col
  // Story not own by me without any subtask in active col
  // Story not own by me without any subtask in ignored col

  await page.goto('https://jira.atlassian.com/')
  await page.getByRole('link',{name: 'Log in'}).nth(1).click()
  await page.getByPlaceholder('Enter your email').fill(process.env.ATLASSIAN_USER)
  await page.getByPlaceholder('Enter your email').press('Enter')
  await page.getByPlaceholder('Enter password').fill(process.env.ATLASSIAN_PASS)
  await page.getByPlaceholder('Enter password').press('Enter')
  await page.waitForNavigation() //Not work because multiple redirect
  await page.waitForSelector('[data-testid="recent-work-title"]')

  await page.addInitScript({path: './src/atlassian-jira-board.user.js'}) //Must add before goto target page
  await page.goto('https://zev-zakaryan.atlassian.net/jira/software/c/projects/JT/boards/1?quickFilter=1')
  await page.waitForSelector('#ghx-complete-sprint')
  const visibleHeader={
    "Story own by me and I'm in subtask": true,
    "Story own by me but no me in subtask": true,
    "Story not own by me but I'm in subtask": true,
    "Story own by me without any subtask in active col": true,
    "Story own by me without any subtask in ignored col": true
  }
  for (let xs=page.locator('.ghx-swimlane-header .ghx-summary, .ghx-last .ghx-summary'),i=0,n=await xs.count();i<n;i++) {
    const x=await xs.nth(i)
    const text=await x.evaluate(p => p.childNodes[p.childNodes.length-1].textContent)
    if (visibleHeader[text]) {
      delete visibleHeader[text]
      await expect(x).toBeVisible()
    } else {
      await expect(x).toBeHidden()
    }
  }
  await expect(visibleHeader).toStrictEqual({})
  //} catch (e) {
  //  console.log('err',e)
  //}
})
