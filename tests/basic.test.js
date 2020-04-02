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
		await t.setTestSpeed(0.1)
	})
	.after(async t => {
		//cleaning test data
		//looging and sending data to monitoring systems
	})
	.afterEach(async t => {
		//Runs after each test
	})

test('My First TestCafe Test', async t => {
	//test code
	await t.setTestSpeed(0.1)
	await t.typeText('#developer-name', 'John')
	await t.click('#submit-button')

	await t.expect(Selector('#article-header').innerText).contains('John')
})
