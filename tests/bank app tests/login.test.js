import { Selector } from 'testcafe'
// import { login } from '../../helper.js'
import LoginPage from '../../page-objects/pages/LoginPage'
import Navbar from '../../page-objects/components/Navbar'

const loginPage = new LoginPage()
const navbar = new Navbar()

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

	const accountSummaryTab = Selector('#account_summary_tab')
	await t.click(accountSummaryTab)
	await t.expect(loginPage.loginForm.exists).notOk()

	const userIcon = Selector('.icon-user')
	await t.click(userIcon)

	const logOutButton = Selector('#logout_link')
	await t.click(logOutButton)

	await t.expect(navbar.signInButton.exists).ok()
})
