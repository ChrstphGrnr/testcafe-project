import { Selector, t } from 'testcafe'

class Navbar {
	constructor() {
		//Selectors
		this.searchBox = Selector('#searchTerm')
		this.signInButton = Selector('#signin_button')
	}
}

export default Navbar
