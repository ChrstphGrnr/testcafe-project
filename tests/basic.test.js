import { Selector, t } from 'testcafe'

fixture`Getting started with TestCafe`
	.page(`https://devexpress.github.io/testcafe/example`)
	.before(async t => {
		//test setup goes here
		//await runDatabaseReset()
		//await seedTestData()
	})
	.beforeEach(async t => {
		//Runs before each test
		await t.setTestSpeed(1)
		await t.setPageLoadTimeout(0)
	})
	.after(async t => {
		//cleaning test data
		//looging and sending data to monitoring systems
	})
	.afterEach(async t => {
		//Runs after each test
		//more comments here
	})

test.only('My First TestCafe Test', async t => {
	//test code
	const developerName = Selector('#developer-name')
	const submitButton = Selector('#submit-button')
	const articleText = Selector('#article-header')

	// await t.takeScreenshot({ fullpage: true })
	// await t.takeElementScreenshot(submitButton)
	// await t.setTestSpeed(0.1)
	await t.typeText(developerName, 'John')
	await t.click(submitButton)

	await t.expect(articleText.innerText).contains('John')
})
test('My First TestCafe Test', async t => {
	//test code
	const developerName = Selector('#developer-name')
	const submitButton = Selector('#submit-button')
	const articleText = Selector('#article-header')

	// await t.takeScreenshot({ fullpage: true })
	// await t.takeElementScreenshot(submitButton)
	// await t.setTestSpeed(0.1)
	await t.typeText(developerName, 'John')
	await t.click(submitButton)

	await t.expect(articleText.innerText).contains('John')
})
test('My First TestCafe Test', async t => {
	//test code
	const developerName = Selector('#developer-name')
	const submitButton = Selector('#submit-button')
	const articleText = Selector('#article-header')

	// await t.takeScreenshot({ fullpage: true })
	// await t.takeElementScreenshot(submitButton)
	// await t.setTestSpeed(0.1)
	await t.typeText(developerName, 'John')
	await t.click(submitButton)

	await t.expect(articleText.innerText).contains('John')
})
