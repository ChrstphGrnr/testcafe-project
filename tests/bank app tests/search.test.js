// import { Selector } from 'testcafe'
import Navbar from '../../page-objects/components/Navbar'
import SearchResultsPage from '../../page-objects/pages/SearchResultsPage'

const navbar = new Navbar()
const searchResultsPage = new SearchResultsPage()

//prettier-ignore
fixture`Search form test`
    .page`http://zero.webappsecurity.com/index.html`

test('User can submit form and see results page', async (t) => {
	//Selectors
	//got replaced with page-objects

	//Actions
	//got replaced with async function in page-objects
	navbar.search('banking')

	//Assertions
	await t
		.expect(searchResultsPage.pageContent.innerText)
		.contains('Search Results:')
	await t
		.expect(searchResultsPage.linkText.innerText)
		.contains('Zero - Personal Banking - Loans - Credit Cards')
})
