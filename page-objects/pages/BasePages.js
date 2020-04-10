import { Selector, t } from 'testcafe'

class BasePage {
    async waitFor(milliseconds) {
        await t.wait(milliseconds)
    }

    async setTestSpeed(testSpeed) {
        await t.setTestSpeed(testSpeed)
    }

}

export default BasePage