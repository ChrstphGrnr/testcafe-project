import { Selector, t } from 'testcafe'

class SearchResultsPage {
	constructor() {
		this.pageContent = Selector('div')
		this.linkText = Selector(
			'body > div.wrapper > div.container > div > ul'
		).nth(0)
	}
}

export default SearchResultsPage
