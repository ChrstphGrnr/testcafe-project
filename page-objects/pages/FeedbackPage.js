import { Selector, t } from 'testcafe'
import BasePage from './BasePages'

class FeedbackPage extends BasePage {
	constructor() {
		super()
		this.form_name = Selector('#name')
		this.form_email = Selector('#email')
		this.form_subject = Selector('#subject')
		this.form_comment = Selector('#comment')
		this.form_submit = Selector(
			'body > div.wrapper > div.container > div > div > div > form > div.pull-right > input.btn-signin.btn.btn-primary'
		)
		this.page_content = Selector('div')
	}
	async formFill(name, email, subject, comment) {
		await t
			.typeText(this.form_name, name, { paste: true, replace: true })
			.typeText(this.form_email, email, { paste: true, replace: true })
			.typeText(this.form_subject, subject, { paste: true, replace: true })
			.typeText(this.form_comment, comment, { paste: true, replace: true })
			.click(this.form_submit)
	}
}

export default FeedbackPage
