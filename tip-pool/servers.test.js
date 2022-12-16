describe("Servers test (with setup and tear-down)", function () {
  beforeEach(function () {
    // initialization logic
    serverNameInput.value = 'Alice';
  });

  it('should add a new server to allServers on submitServerInfo()', function () {
    submitServerInfo();

    expect(Object.keys(allServers).length).toEqual(1);
    expect(allServers['server' + serverId].serverName).toEqual('Alice');
  });

  it('should add a new row to the server table with name and amount', function () {
    submitServerInfo();
    updateServerTable();

    let newRow = document.querySelectorAll('#serverTable tbody tr td');

    expect(newRow[0].innerText).toEqual('Alice');
    expect(newRow[1].innerText).toEqual('$0.00');
  });

  afterEach(function () {
    // teardown logic
    serverNameInput.value = '';
    allServers = [];
  });
});
