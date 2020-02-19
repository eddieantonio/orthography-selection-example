#!/usr/bin/env python3
# -*- coding: UTF-8 -*-

import json

from flask import Flask, render_template

app = Flask(__name__)

with open("./sentences.json", "r", encoding="UTF-8") as sentfile:
    sentences = json.load(sentfile)["sentences"]


@app.route("/")
def index():
    return render_template("index.html", sentences=sentences)


if __name__ == "__main__":
    app.run(debug=True)
