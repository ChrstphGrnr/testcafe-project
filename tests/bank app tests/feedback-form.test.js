import { Selector, t } from 'testcafe'

//prettier-ignore
fixture`Feedback form submission test`
    .page`http://zero.webappsecurity.com/index.html`

test('User can submit Feedback form and see their name on the page after submission', async (t) => {
	// Selectors
	const feedbackForm = Selector('#feedback')
	const usernameInput = Selector('#name')
	const usernameEmail = Selector('#email')
	const subject = Selector('#subject')
	const comment = Selector('#comment')
	const submitButton = Selector('input.btn-signin.btn.btn-primary')
	const pageContent = Selector('div').innerText

	// Actions
	await t.click(feedbackForm)
	await t.typeText(usernameInput, 'chris', { paste: true })
	await t.typeText(usernameEmail, 'chris@chris.com', { paste: true })
	await t.typeText(subject, 'Hello', { paste: true })
	await t.typeText(comment, 'World!', { paste: true })
	await t.click(submitButton)

	// Assertions
	await t.expect(pageContent).contains('chris')
	await t.expect(submitButton.exists).notOk()
})
