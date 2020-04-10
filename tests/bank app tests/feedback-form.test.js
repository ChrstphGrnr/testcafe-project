import { Selector } from 'testcafe'

import FeedbackPage from '../../page-objects/pages/FeedbackPage'

const feedbackPage = new FeedbackPage()

//prettier-ignore
fixture`Feedback form submission test`
	.page`http://zero.webappsecurity.com/index.html`

test('User can submit Feedback form and see their name on the page after submission', async (t) => {
	// Selectors
	const feedbackForm = Selector('#feedback')
	feedbackPage.waitFor(5000)
	await t.click(feedbackForm)
	feedbackPage.formFill(
		'Homer',
		'Homer@Simpsons.com',
		'This is nuts',
		'Mr. Burns wanted to fire me but I just ran'
	)

	// Assertions
	await t.expect(feedbackPage.page_content.innerText).contains('Homer')
	await t.expect(feedbackPage.form_submit.exists).notOk()
})
