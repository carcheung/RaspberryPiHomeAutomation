#!/bin/bash
# turn all 17 pins off immediately

for i in 0 1 2 3 4 5 6 7 8 9 10 11 12 13 14 15 16
do gpio write $i 0;
done;