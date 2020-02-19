#!/usr/bin/env python3
# -*- coding: UTF-8 -*-

import json

from cree_sro_syllabics import syllabics2sro  # type: ignore
from flask import Flask, render_template

app = Flask(__name__)

with open("./sentences.json", "r", encoding="UTF-8") as sentfile:
    syl_sentences = json.load(sentfile)["sentences"]

sentences = []
for syllabics in syl_sentences:
    if not syllabics:
        continue
    sentences.append(
        {
            "Cans": syllabics,
            "Latn": syllabics2sro(syllabics),
            "Latn-x-macron": syllabics2sro(syllabics, produce_macrons=True),
        }
    )


@app.route("/")
def index():
    return render_template("index.html", sentences=sentences)


if __name__ == "__main__":
    app.run(debug=True)
