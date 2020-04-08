import { Selector } from 'testcafe'
// import { login } from '../../helper.js'
import LoginPage from '../../page-objects/pages/LoginPage'
import Navbar from '../../page-objects/components/Navbar'
import AccountTab from '../../page-objects/components/AccountTab'

const loginPage = new LoginPage()
const navbar = new Navbar()
const accountTab = new AccountTab()

//prettier-ignore
fixture`Login Test`
    .page`http://zero.webappsecurity.com/`

test('User cannot login with invalid credentials', async (t) => {
	await t.click(navbar.signInButton)

	loginPage.loginToApp('invalid username', 'invalid password')

	await t.expect(loginPage.loginError.exists).ok()
})

test('User CAN login with valid credentials', async (t) => {
	await t.click(navbar.signInButton)

	loginPage.loginToApp('username', 'password')

	await t.click(accountTab.accountSummaryTab)
	await t.expect(loginPage.loginForm.exists).notOk()

	await t.click(loginPage.userIcon)
	await t.click(loginPage.logoutButton)

	await t.expect(navbar.signInButton.exists).ok()
})
