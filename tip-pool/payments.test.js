describe("Payments test", function () {
    beforeEach(function () {
        // initialization logic
        tipAmtInput.value = 20;
        billAmtInput.value = 100;
    });

    it('should add a new payment to allPayments', function () {
        submitPaymentInfo();

        // expect(Object.keys(allPayments).length).toEqual(1);
        expect(allPayments['payment1'].billAmt).toEqual('100');
        expect(allPayments['payment1'].tipAmt).toEqual('20');
        expect(allPayments['payment1'].tipPercent).toEqual(20);
    });

    it('should update #paymentTable using appendPaymentTable()', function () {
        let curPayment = createCurPayment();
        // // allPayments['payment1'] = curPayment;
        appendPaymentTable(curPayment);

        let curTdList = document.querySelectorAll('#paymentTable tbody tr td');

        expect(curTdList[0].innerText).toEqual('$100');
        expect(curTdList[1].innerText).toEqual('$20');
        expect(curTdList[2].innerText).toEqual('20%');
    });

    it('should create a new payment on createCurPayment()', function () {
        let expectedPayment = {
            billAmt: '100', tipAmt: '20', tipPercent: 20,
        }
        expect(createCurPayment()).toEqual(expectedPayment);
    });


    afterEach(function () {
        billAmtInput.value = '';
        tipAmtInput.value = '';
        paymentTbody.innerHTML = '';
        summaryTds[0].innerHTML = '';
        summaryTds[1].innerHTML = '';
        summaryTds[2].innerHTML = '';
        paymentId = 0;
        allPayments = {};
    });
});