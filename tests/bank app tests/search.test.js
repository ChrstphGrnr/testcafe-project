import { Selector } from 'testcafe'

//prettier-ignore
fixture`Search form test`
    .page`http://zero.webappsecurity.com/index.html`

test('User can submit form and see results page', async (t) => {
	//Selectors
	const searchForm = Selector('#searchTerm')
	const pageContent = Selector('div').innerText
	const linkText = Selector(
		'body > div.wrapper > div.container > div > ul'
	).nth(0).innerText

	//Actions
	await t.typeText(searchForm, 'banking', { paste: true })
	await t.pressKey('enter')

	//Assertions
	await t.expect(pageContent).contains('Search Results:')
	await t
		.expect(linkText)
		.contains('Zero - Personal Banking - Loans - Credit Cards')
})
