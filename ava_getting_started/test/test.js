import test from 'ava';

test('can easily pass a test', t => {
  t.pass();
});

test('can easily fail a test', t => {
    //t.fail();
});


test('can use true or false', t => {
	// t.true asserts a value true
	t.true(42 === 42);
	t.false(1 === 2);


	// This of course would fail
	//t.false(true);

});

test('can assert equal or not equal', t => {

	// Naturally a pig is not a pig.
	t.is('pig', 'pig');

	// But a Pig isn't, because it's capitalized.
	t.not('Pig', 'pig');

	// And we all know a canary isn't
	t.not('canary', 'pig')
});

test('bar', async t => {
    const bar = Promise.resolve('bar');

    t.is(await bar, 'bar');
});
