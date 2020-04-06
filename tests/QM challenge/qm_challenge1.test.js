import { Selector } from 'testcafe'

fixture`MC Image Test`.page`https://www.quantummetric.com/our-story/`

test('MCs image is visible on the page', async t => {
	const marioImage = Selector('div.executive-single.bio-item')
	await t.expect(marioImage.exists).ok()
})
