import { Selector, t } from 'testcafe'

class ForgottenPasswordPage {
	constructor() {
		this.linkToForgottenPassword = Selector('a').withText(
			'Forgot your password'
		)
		this.emailInput = Selector('#user_email')
		this.pageMessage = Selector('div')
	}

	async emailInputForm(email) {
		await t
			.typeText(this.emailInput, email, { paste: true, replace: true })
			.pressKey('enter')
	}
}

export default ForgottenPasswordPage
