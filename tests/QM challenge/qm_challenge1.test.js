import { Selector } from 'testcafe'

fixture`MC Image Test`.page`https://www.quantummetric.com/our-story/`

test('MCs image is visible on the page', async t => {
	const marioImage = Selector('div.executive-single.bio-item')
	await t.expect(marioImage.exists).ok()
})

const qmApiCall = `
(function() {
    var qtm = document.createElement('script'); qtm.type = 'text/javascript'; qtm.async = 1; qtm.src = 'https://cdn.quantummetric.com/instrumentation/quantum-qa1.js';
    var d = document.getElementsByTagName('script')[0];
    !window.QuantumMetricAPI && d.parentNode.insertBefore(qtm, d);
    })();
    window["QuantumMetricOnload"] = function() {
    var sessionID = QuantumMetricAPI.getSessionID();
    // <VERIFY HERE THAT sessionID IS ​UNDEFINED​> };
    `
