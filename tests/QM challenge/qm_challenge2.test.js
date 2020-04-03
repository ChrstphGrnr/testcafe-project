import { Selector } from 'testcafe'

fixture`QM API Call`.page`https://status.cloud.google.com/`

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

//prettier-ignore
test('inserting JS and checking for undefined SessionID', async t => {})
    .clientScripts({ content: qmApiCall }
)
