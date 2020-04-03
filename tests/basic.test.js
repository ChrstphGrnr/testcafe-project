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

	// different types of test functions
	await t.click('selector', { options })
	await t.doubleClick('selector', { options })
	await t.rightClick('selector', { options })
	await t.drag('selector', 200, 0, { options }) // second argument is x-offset, third argument is y-offset
	await t.hover('selector', { options })
	await t.typeText('selector', 'text')
	await t.pressKey('key')
	await t.navigateTo('url')
	await t.takeScreenshot()
	await t.resizeWindow(800, 600) // first argument is width, second is height

	// Deep Equal
	await t.expect('foo').eql('foo', 'message', options) // error message//
	// Not Deep Equal
	await t.expect('foo').notEql('Foo')
	// OK
	await t.expect('foo').ok() // works like a conditional, 'if "foo" is truthy, it will return true
	// Not OK
	await t.expect('foo').notOk()
	// contains
	await t.expect('foo').contains('o')
	// Not contains
	await t.expect('foo').notContains('F')
	// Greater or Less than
	await t.expect(10).gt(4)
	await t.expect(10).gte(10)
	await t.expect(10).lt(12)
	await t.expect(10).lte(10)
	// Within
	await t.expect(10).within(1, 100)
})
