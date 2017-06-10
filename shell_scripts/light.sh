#!/bin/bash
# pins 0 - 7 test

echo "turning on lights!"

#set mode to output
for i in 0 1 2 3 4 5 6 7;
do gpio mode $i out;
done;

# turn on LEDS
for i in 0 1 2 3 4 5 6 7;
do gpio write $i 1;
done;

#wait 2 seconds
sleep 2;

echo "Turning off lights!"

#turn them off
for i in 0 1 2 3 4 5 6 7;
do gpio write $i 0;
done;
