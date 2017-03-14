var ds = new App.DataStore();

QUnit.test('hello test', function(assert) {
    assert.ok(1 == '1', 'Passed!');
});

QUnit.test('add ok test', function(assert) {
    assert.equal(Object.keys(ds.getAll()).length, 0, 'Passed!');
    ds.add('m@bond.com', 'tea');
    assert.equal(Object.keys(ds.getAll()).length, 1, 'Passed!');
    assert.ok(Object.keys(ds.getAll()).length, 1, 'Passed!');
});

QUnit.test('addAll ok test', function(assert) {
    ds.add('m@bond.com', 'tea');
    ds.add('james@bond.com', 'eshpressho');

    var obj = {
        'm@bond.com': 'tea',
        'james@bond.com': 'eshpressho'
    };
    assert.deepEqual(ds.getAll(), obj, 'Passed!');
    assert.equal(Object.keys(ds.getAll()).length, 2, 'Passed!');
    assert.ok(Object.keys(ds.getAll()).length, 2, 'Passed!');
});

QUnit.test('remove ok test', function(assert) {
    ds.remove('james@bond.com');
    assert.ok(ds.data, ds.getAll(), 'Passed!');
    assert.equal(ds.data, ds.getAll(), 'Passed!');
});

QUnit.test('get ok test', function(assert) {
    assert.ok(ds.get('m@bond.com'), 'tea', 'Passed!');
    assert.equal(ds.get('m@bond.com'), 'tea', 'Passed!');
    assert.strictEqual(ds.get('m@bond.com'), 'tea', 'Passed!');
});

// QUnit test functions for Truck DataStore
QUnit.test('Truck', function(assert) {

    myTruck.createOrder({
        emailAddress: 'me@goldfinger.com',
        coffee: 'double mocha'
    });
    myTruck.createOrder({
        emailAddress: 'dr@no.com',
        coffee: 'decaf'
    });
    myTruck.createOrder({
        emailAddress: 'm@bond.com',
        coffee: 'earl grey'
    });

    var printOrders = myTruck.printOrders();
    assert.deepEqual(printOrders, [
        'me@goldfinger.com',
        'dr@no.com',
        'm@bond.com'
    ], 'The Print Order values are same');
    myTruck.deliverOrder('dr@no.com');
    myTruck.deliverOrder('m@bond.com');
    var printOrdersAfterDeletion = myTruck.printOrders();
    assert.deepEqual(printOrdersAfterDeletion, [
        'me@goldfinger.com'
    ], ' values are me@goldfinger.com');
});
