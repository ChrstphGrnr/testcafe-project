import { Selector } from 'testcafe'
import Navbar from '../../page-objects/components/Navbar'
import ForgottenPasswordPage from '../../page-objects/pages/ForgottenPasswordPage'

const navbar = new Navbar()
const forgottenPassword = new ForgottenPasswordPage()

//prettier-ignore
fixture`Send forgotten password test`
    .page`http://zero.webappsecurity.com/index.html`

test('User can request new password to be sent through his email', async (t) => {
	// Selectors
	// const signInButton = Selector('#signin_button')
	// const linkToForgottenPassword = Selector('a').withText('Forgot your password')
	// const emailInput = Selector('#user_email')
	// const pageMessage = Selector('div').innerText

	//Actions
	await t.click(navbar.signInButton)
	await t.click(forgottenPassword.linkToForgottenPassword)
	forgottenPassword.emailInputForm('email@email.com')

	//Assertions
	await t
		.expect(forgottenPassword.pageMessage.innerText)
		.contains('email@email.com')
	await t.expect(forgottenPassword.emailInput.exist).notOk()
})
