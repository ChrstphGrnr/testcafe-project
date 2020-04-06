import { Selector } from 'testcafe'

//prettier-ignore
fixture`Login Test`
    .page`http://zero.webappsecurity.com/`

test('User cannot login with invalid credentials', async (t) => {
	const signInButton = Selector('#signin_button')
	await t.click(signInButton)

	const loginForm = Selector('#login_form')
	await t.expect(loginForm.exists).ok()

	const usernameInput = Selector('#user_login')
	const userPassword = Selector('#user_password')
	const submitButton = Selector('.btn-primary')
	await t.typeText(usernameInput, 'invalid username', { paste: true })
	await t.typeText(userPassword, 'invalid password', { paste: true })

	await t.click(submitButton)

	const loginError = Selector('#login_form > div.alert.alert-error')
	await t.expect(loginError.exists).ok()
})

test('User cannot login with invalid credentials', async (t) => {
	const signInButton = Selector('#signin_button')
	await t.click(signInButton)

	const loginForm = Selector('#login_form')
	await t.expect(loginForm.exists).ok()

	const usernameInput = Selector('#user_login')
	const userPassword = Selector('#user_password')

	await t.typeText(usernameInput, 'username')
	await t.typeText(userPassword, 'password')

	// await t.debug()

	const submitButton = Selector('#login_form > div.form-actions > input')
	await t.click(submitButton)

	const accountSummaryTab = Selector('#account_summary_tab')
	await t.click(accountSummaryTab)
	await t.expect(loginForm.exists).notOk()

	const userIcon = Selector('.icon-user')
	await t.click(userIcon)

	const logOutButton = Selector('#logout_link')
	await t.click(logOutButton)

	await t.expect(signInButton.exists).ok()
})
