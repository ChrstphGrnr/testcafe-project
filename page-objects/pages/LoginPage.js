import { Selector, t } from 'testcafe'

class LoginPage {
	constructor() {
		this.usernameInput = Selector('#user_login')
		this.passwordInput = Selector('#user_password')
		this.submitButton = Selector('.btn-primary')
	}
	async loginToApp(username, userpassword) {
		await t
			.typeText(this.usernameInput, username, { paste: true, replace: true })
			.typeText(this.passwordInput, userpassword, {
				paste: true,
				replace: true,
			})
			.click(this.submitButton)
	}
}

export default LoginPage
