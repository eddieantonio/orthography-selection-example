# Orthography selection example

Or orthography _switching_ example.

I created this repository because I had an idea of how to implement something in
[UAlbertaALTLab/cree-intelligent-dictionary],
but it's priotized to be completed yet. Namely, dynamic orthography switching. In our case,
we want to switch between two flavours of standard Roman Orthograph (SRO) and syllabics.

This example shows how the server produces markup with `[data-*]` attributes that pre-computes all variants
ahead of time. Then JavaScript simply switches out the elements' `.innerText`.

This will eventually be implemented with tests and documentation over the course of several PRs
in [UAlbertaALTLab/cree-intelligent-dictionary].

[UAlbertaALTLab/cree-intelligent-dictionary]: https://github.com/UAlbertaALTLab/cree-intelligent-dictionary

## Dependencies

You need node > 10.x and Python 3.7 with Poetry.

## Install

    npm install
    poetry install
    
## Running

    npm run build
    poetry run python3 app.py

## Developing

In one terminal window:

    npm start
   
In a different terminal window:

    poetry run python3 app.py
   
## Copying

Copyright (C) 2020  Eddie Antonio Santos. MIT Licensed.
