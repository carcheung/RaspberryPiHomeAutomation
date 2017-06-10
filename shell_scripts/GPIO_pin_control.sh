#!/bin/bash
# Accepts GPIO (WiringPI) Pin number and turns it ON or OFF depending on its current status
# Usage: bash GPIO_pin_control.sh <PIN NUMBER>

if [ "$1" == "" ]; then
    echo "USAGE: bash GPIO_pin_control.sh <PIN NUMBER>"
    exit
fi

GPIOSTATUS=$(gpio read $1)

if [ "$GPIOSTATUS" = "0" ]; then
    echo "GPIO $1 ON"
    gpio write $1 1
else
    echo "GPIO $1 OFF"
    gpio write $1 0
fi