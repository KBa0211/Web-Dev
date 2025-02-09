alert( 1.35.toFixed(1) ); // 1.4
alert( 6.35.toFixed(1) ); // 6.3

// Internally the decimal fraction 6.35 is an endless binary. As always in such cases, it is stored with a precision loss.
alert( Math.round(6.35 * 10) / 10 ); // 6.35 -> 63.5 -> 64(rounded) -> 6.4