import { Selector } from 'testcafe'

//prettier-ignore
fixture`Getting started with TestCafe`
    .page(`https://devexpress.github.io/testcafe/example`)

test('My First TestCafe Test', async t => {
	//test code
	await t.typeText('#developer-name', 'John')
	await t.click('#submit-button')
})
