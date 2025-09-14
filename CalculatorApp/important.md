#### Issues to fix

- Repeated equals (5 + 2 = = =) → doesn’t repeat last op

- Multiple operators like 7+-5 (must use +/-)

- Multiple decimals if pressed fast → ".." edge case

- Very large numbers → JS precision issues

- Starting with negative number (-5+3) not allowed without +/-

- Multiple +/- presses → can give NaN

- Double minus without parentheses (7 - -2) not parsed
