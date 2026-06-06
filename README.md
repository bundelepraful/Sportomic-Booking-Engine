# Sportomic Arena Booking Engine

## Problem
A turf can be configured as:
- 2 x 7v7 courts
- 3 x 5v5 courts

Since they share physical space, bookings on one configuration affect availability on the other.

## Tech Stack
- HTML
- CSS
- JavaScript

## Run
Open index.html in browser.

## Logic
Implemented using an overlap graph where every arena knows which arenas physically conflict with it.

Booked courts block all overlapping courts automatically.
