Callbacks are one way to handle asynchronous function calls

Some problems with callbacks
- They introduce what appears to be an incontinuity in the code (even though logically there probably isn't); our brain likes to
plan sequentially, and the code isn't

What's the order of execution here?
```
doA( function(){
	doC();

	doD( function(){
		doF();
	} )

	doE();
} );

doB();
```
It DEPENDS on which of these are asynch.If all are, a,b,c,d,e,f and if none are, a,c,d,f,e,b

## Callback hell isn't just about indents, it's about order of execution

- Hardcoding order of execution in callbacks makes the code brittle, especially when handling exceptions

## Inversion of control
```
// A
ajax( "..", function(..){
	// C
} );
// B
```

In this case C is really a continuation of our program (a,b,c), but we are asking a different function, 
potentially a third-party function, run C; it slips out of our control at that point. This is inversion of control and 
is an anti-pattern. What happens if the callback is never invoked?

## split callbacks

consider the signature ``foo(param, failure(), success())`` (note that I am marking the functions with ())
This is a common pattern in JS; the external function is given two callbacks, 
one when things go right, one for when things go badly.

Or this one ``foo(param,result()``
In this case the result() function has two parameters:
``result = (err, response) {
    if (err)  ..handle error..;
    else ..process response..
 ``
This is also common, especially in Node (it's often called Node style or error-first style)
``
# Promises
Example: Ordering a burger at UBurger; you get a ticket with a number on it that represents the future burger. Once 
the number is called, you exchange it for either your burger or get an error from the clerk (out of them!)

Some code from the book illustrating what we want...
```
foo(x) {
	// start doing something that could take a while
}

foo( 42 )

on (foo "completion") {
	// now we can do the next step!
}

on (foo "error") {
	// oops, something went wrong in `foo(..)`
}
```
----
This one treats it like an event listener...

```
function foo(x) {
	// start doing something that could take a while

	// make a `listener` event notification
	// capability to return

	return listener;
}

var evt = foo( 42 );

evt.on( "completion", function(){
	// now we can do the next step!
} );

evt.on( "failure", function(err){
	// oops, something went wrong in `foo(..)`
} );

```
## Note that this un-inverts control, so that the caller is no longer dependent on a third party to run the callback
There could be several calls to foo() pending, and foo() doesn't really know or care about them

The event in this case is analogous to a Promise, though that isn't strictly the underlying mechanism


- Promises are in one of three states: 
-- Pending
-- Fulfilled
-- Rejected

- A resolved Promise is immutable and so is safe to pass around

## We can think of the resolve, reject methods on the promise as being 'return' statements in the future







THENABLES









