import { Selector } from 'testcafe'
import Navbar from '../../page-objects/components/Navbar'

const navbar = new Navbar()

//prettier-ignore
fixture`Send forgotten password test`
    .page`http://zero.webappsecurity.com/index.html`

test('User can request new password to be sent through his email', async (t) => {
	// Selectors
	// const signInButton = Selector('#signin_button')
	const linkToForgottenPassword = Selector('a').withText('Forgot your password')
	const emailInput = Selector('#user_email')
	const pageMessage = Selector('div').innerText

	//Actions
	await t.click(navbar.signInButton)
	await t.click(linkToForgottenPassword)
	await t.typeText(emailInput, 'email@email.com', { paste: true })
	await t.pressKey('enter')

	//Assertions
	await t.expect(pageMessage).contains('email@email.com')
	await t.expect(emailInput.exist).notOk()
})
