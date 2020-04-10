import { Selector, t } from 'testcafe'

import FeedbackPageTS from '../../page-objects/pages/FeedbackPageTS'

const feedbackPageTS = new FeedbackPageTS()

//prettier-ignore
fixture`TS Feedback form submission test`
    .page`http://zero.webappsecurity.com/index.html`

test('User can submit Feedback form and see their name on the page after submission', async (t) => {
	// Selectors
	const feedbackForm = Selector('#feedback')

	// Actions
	await t.click(feedbackForm)
	// feedbackPageTS.submitFeedback(t)
	await t
		.typeText(feedbackPageTS.formName, 'chris', { paste: true })
		.typeText(feedbackPageTS.formEmail, 'chris@chris.com', { paste: true })
		.typeText(feedbackPageTS.formSubject, 'Hello', { paste: true })
		.typeText(feedbackPageTS.formComment, 'World!', { paste: true })
		.click(feedbackPageTS.formSubmitButton)

	// Assertions
	await t.expect(feedbackPageTS.formMessage.innerText).contains('chris')
	await t.expect(feedbackPageTS.formSubmitButton.exists).notOk()
})
