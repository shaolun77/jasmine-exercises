describe("Helpers test", function () {
    beforeEach(function () {
        // initialization logic
        tipAmtInput.value = 20;
        billAmtInput.value = 100;
        submitPaymentInfo();
    });

    it('should add up total tip amount using sumPaymentTotal()', function () {
        expect(sumPaymentTotal('tipAmt')).toEqual(20);
        billAmtInput.value = 200;
        tipAmtInput.value = 40;

        submitPaymentInfo();

        expect(sumPaymentTotal('tipAmt')).toEqual(60);
    });

    it('should sum tip percent of a single tip on calculateTipPercent()', function () {
        expect(calculateTipPercent(200, 40)).toEqual(20);
        expect(calculateTipPercent(100, 11)).toEqual(11);
    });

    it('should create a new table row element using appendTd(tr, value)', function () {
        let newRow = document.createElement('tr');

        appendTd(newRow, 'test');

        // expect(newRow.children.length).toEqual(1);
        expect(newRow.firstChild.innerHTML).toEqual('test');
    });

    it('should generate delete td and append to tr on appendDeleteBtn(tr)', function () {
        let newTr = document.createElement('tr');

        appendDeleteBtn(newTr);
        expect(newTr.firstChild.innerHTML).toEqual('X');
    });

    afterEach(function () {
        billAmtInput.value = '';
        tipAmtInput.value = '';
        paymentTbody.innerHTML = '';
        summaryTds[0].innerHTML = '';
        summaryTds[1].innerHTML = '';
        summaryTds[2].innerHTML = '';
        serverTbody.innerHTML = '';
        paymentId = 0;
        allPayments = {};
    });
});