// ==UserScript==
// @name         Cigar v2
// @description  Cigar v2
// @version      1.0
// @author       Davi Freitas
// @match        *://agar.io/*
// @connect      localhost
// @run-at       document-start
// @grant        none
// ==/UserScript==

if (location.host === 'agar.io' && location.href !== 'https://agar.io/cigar') {
  location.href = 'https://agar.io/cigar';
  return;
}

const CIGAR = new class {
  constructor() {
    this.method = 'GET';
    this.URL = "http://127.0.0.1:5500/web/";
    this.HTML = ``;
    this.date = Date.now();
  }

  load() {
    this.setMessage();
    this.fetch();
  }

  setMessage() {
    document.body.innerHTML = "LOADING...";
  }

  fetch() {
    const request = new XMLHttpRequest();
    request.open(this.method, this.URL, true);
    request.onload = () => {
      this.HTML = request.responseText;
      this.write();
    };
    request.onerror = () => {
      document.body.innerHTML = "<div style='width: 100%; text-align: center; font-size: 24px; font-family: sans-serif;'>Failed to fetch HSLO files.</div>";
    }
    request.send();
  }
    replace(hello) {
        return hello;
    }

  write() {
    document.open();
    document.write(this.replace(this.HTML));
    document.close();
  }
}
CIGAR.load();
