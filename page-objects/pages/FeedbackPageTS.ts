import { Selector, t } from 'testcafe'

class FeedbackPageTS {
	formName: Selector = Selector('#name')
	formEmail: Selector = Selector('#email')
	formSubject: Selector = Selector('#subject')
	formComment: Selector = Selector('#comment')
	formSubmitButton: Selector = Selector('input').withAttribute(
		'value',
		'Send Message'
	)
	formMessage: Selector = Selector('div')

	async submitFeedback(t: TestController) {
		await t
			.typeText(this.formName, 'name', { paste: true, replace: true })
			.typeText(this.formEmail, 'test@email.com', {
				paste: true,
				replace: true,
			})
			.typeText(this.formSubject, 'SUBJECT', { paste: true, replace: true })
			.typeText(this.formComment, 'YOUR COMMENT', {
				paste: true,
				replace: true,
			})
			.click(this.formSubmitButton)
	}
}

export default FeedbackPageTS
