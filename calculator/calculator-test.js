
it('should calculate the monthly rate correctly', function () {
  // ...
  const values = { amount: 250000, years: 20, rate: 5.8 };
  expect(calculateMonthlyPayment(values)).toEqual('1762.35')
});


it("should return a result with 2 decimal places", function () {
  // ..
  const values = { amount: 250234, years: 10, rate: 5.5 };
  expect(calculateMonthlyPayment(values)).toEqual('2715.70')
});

/// etc

it("should work with negative interest rates", function () {
  // ..
  const values = { amount: 20000, years: 10, rate: -2 };
  expect(calculateMonthlyPayment(values)).toEqual('150.42')
});

