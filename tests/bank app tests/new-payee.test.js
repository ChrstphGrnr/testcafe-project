import { Selector } from 'testcafe'

//pettier-ignore
fixture`New payee test`.page`http://zero.webappsecurity.com/index.html`

test.before(async (t) => {
	const signInButton = Selector('#signin_button')
	await t.click(signInButton)

	const loginForm = Selector('#login_form')
	await t.expect(loginForm.exists).ok()

	const usernameInput = Selector('#user_login')
	const userPassword = Selector('#user_password')

	await t.typeText(usernameInput, 'username')
	await t.typeText(userPassword, 'password')

	const submitButton = Selector('#login_form > div.form-actions > input')
	await t.click(submitButton)
})('User can add a new payee to the list of payees', async (t) => {
	//Selectors
	const payBillsTab = Selector('#pay_bills_tab')
	const addNewPayeeTab = Selector('li').withText('Add New Payee')
	const payeeName = Selector('#np_new_payee_name')
	const payeeAddress = Selector('#np_new_payee_address')
	const payeeAccount = Selector('#np_new_payee_account')
	const payeeDetails = Selector('#np_new_payee_details')
	const addPayeeButton = Selector('#add_new_payee')
	const alertContent = Selector('#alert_content').innerText
	//Actions
	await t.click(payBillsTab)
	await t.click(addNewPayeeTab)
	await t.typeText(payeeName, 'Homer', { paste: true })
	await t.typeText(payeeAddress, 'Springfield', { paste: true })
	await t.typeText(payeeAccount, 'Nuclear Power Plant', { paste: true })
	await t.typeText(payeeDetails, 'Need to sleep more', { paste: true })
	await t.click(addPayeeButton)
	//The new payee awdadw was successfully created.
	//Assertions
	await t.expect(alertContent).contains('Homer')
})
