import { Selector } from 'testcafe'

//prettier-ignore
fixture`Login Test`
    .page`http://zero.webappsecurity.com/`

test('User cannot login with invalid credentials', async t => {
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

// test('User CAN log in with valid credentials', async t => {
// 	const signInButton = Selector('#signin_button')
// 	await t.click(signInButton)

// 	const loginForm = Selector('#login_form')
// 	await t.expect(loginForm.exists).ok()

// 	const usernameInput = Selector('#user_login')
// 	const userPassword = Selector('#user_password')
// 	const submitButton = Selector('.btn-primary')
// 	await t.typeText(usernameInput, 'username', { paste: true })
// 	await t.typeText(userPassword, 'password', { paste: true })

// 	await t.debug()

// 	await t.click(submitButton)

// 	const loginError = Selector('#login_form > div.alert.alert-error')
// 	await t.expect(loginError.exists).ok()
// })
