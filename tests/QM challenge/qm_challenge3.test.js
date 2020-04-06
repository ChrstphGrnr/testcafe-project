import { ClientFunction } from 'testcafe'

const qmApiCall = `
    (function() {
        var qtm = document.createElement('script'); qtm.type = 'text/javascript'; qtm.async = 1; qtm.src = 'https://cdn.quantummetric.com/instrumentation/quantum-qa1.js';
        var d = document.getElementsByTagName('script')[0];
        !window.QuantumMetricAPI && d.parentNode.insertBefore(qtm, d);
        })();
        window["QuantumMetricOnload"] = function() { QuantumMetricAPI.addEventListener('start', function() {
        var sessionID = QuantumMetricAPI.getSessionID();
        return sessionID
        });
    }
    `
//prettier-ignore
fixture`QM API Call 2`
    .page`https://status.cloud.google.com/`
    .clientScripts({content: qmApiCall})

const getQMOnload = ClientFunction(() => window.quantumMetricOnload)
//prettier-ignore
test.only('inserting JS and checking for undefined SessionID', async t => {
		const win = getQMOnload()
        await t.debug()
        const sessionID = ClientFunction(
            () => {
                //QuantumMetricAPI.getSessionID();
                window.quantumMetricOnload()
            }
        )
		await t.expect(sessionID).notEql(undefined)
	})
