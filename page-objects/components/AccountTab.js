import { Selector, t } from 'testcafe'

class AccountTab {
	constructor() {
		this.accountSummaryTab = Selector('#account_summary_tab')
	}
}

export default AccountTab
