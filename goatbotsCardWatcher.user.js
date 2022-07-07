// ==UserScript==
// @name           GoatBots Card Watcher
// @version        1.0.1
// @author         aminomancer
// @homepageURL    https://github.com/aminomancer/GoatBots-Card-Watcher
// @supportURL     https://github.com/aminomancer/GoatBots-Card-Watcher
// @downloadURL    https://cdn.jsdelivr.net/gh/aminomancer/GoatBots-Card-Watcher@latest/goatbotsCardWatcher.user.js
// @namespace      https://github.com/aminomancer
// @grant          none
// @run-at         document-start
// @match          https://www.goatbots.com/set/promotional-double-masters-2022+
// @description    Refresh a GoatBots page on a set timer, check if any of the
// cards specified by name in the settings are in stock, and make an alert if
// so. The alert will use text-to-speech to audibly speak the names of the new
// cards if text-to-speech is available on your computer. Otherwise it will just
// play a predefined sound file that says "New cards in stock."
// Configure the script by setting the @match URL just above this to the URL for
// the GoatBots page you want to scan. You can have multiple @match entries. If
// you want to still be able to use the normal page without it constantly
// reloading, add a + at the end of the URL (see above). You can navigate to it
// just fine, and your script manager will recognize it as a different URL.
// Then, the script will only activate when you explicitly navigate to the
// version of the URL with a + at the end.
// Then, replace the card names in the config section below with the card names
// you want to scan for. Names must match the names on GoatBots exactly.
// By default, this will refresh the page every 10 seconds, provided the tab the
// page is loaded in is not active. It basically pauses refreshing while the tab
// is active, so that you can still use the page as normal. That way, it will
// only scan in the background, and alert you when it finds something. However,
// this pausing behavior can be disabled by setting "Refresh while active" to
// false in the config settings below. There are a few other settings below.
// If you're using Firefox and you want the text-to-speech alerts, make sure the
// following pref is enabled in about:config -
// media.webspeech.synth.enabled
// If you don't want or can't use text-to-speech, and the default sound file is
// not to your liking, you can replace it with your own base64-encoded audio
// file. You can convert any mp3 file to base64 by uploading it to this encoder:
// https://codepen.io/xewl/pen/NjyRJx
// Then just copy the resulting string and replace the "Base64 audio file" value
// below with your new string. The script will decode and play it at runtime.
// @license        This Source Code Form is subject to the terms of the Creative Commons Attribution-NonCommercial-ShareAlike International License, v. 4.0. If a copy of the CC BY-NC-SA 4.0 was not distributed with this file, You can obtain one at http://creativecommons.org/licenses/by-nc-sa/4.0/ or send a letter to Creative Commons, PO Box 1866, Mountain View, CA 94042, USA.
// @icon           data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 250 250"><path d="M209.82 4.76c6.89-2.17 14.1-3.64 21.35-3.39-3.84 5.25-10.98 5.94-15.65 10.18-3.46 3.21-6.81 6.64-9.42 10.59-5.7 9.12-8.51 19.69-14.2 28.81-5.78 9.3-13.58 17.08-20.24 25.72-1.45 1.98-3.04 3.99-3.69 6.4-.34 3.05.6 6.05.74 9.08l.05 2.13c-4.95-4.04-9.21-8.86-14.4-12.62-2.88-2.07-5.77-4.39-7.25-7.71-1.9-3.22-3.03-7.96-7.28-8.75-7.22-1.55-14.52.8-21.8.47-5.74.22-12.08-.92-17.31 2-3.97 3.64-4.81 9.54-8.84 13.18-4.53 4.17-9.48 7.88-14.38 11.6l-.4-3.44c-.32-3.18-1.1-6.41-3.14-8.96-7.28-9.66-17.82-16.31-25.03-26.03-4.49-7.25-4.69-16.16-8.06-23.89-3.43-8.09-7.86-16.86-16.25-20.71-3.78-2.02-8.23-3.37-10.79-7.05 7.25-.25 14.46 1.22 21.35 3.39 4.92 1.55 9.31 4.48 12.81 8.24 7.79 8.3 14.09 17.87 21.73 26.29 5.96 5.31 12.47 10.13 19.88 13.24 8.95 4.94 19.27 6.73 29.41 6.51 7.76-.21 15.79.74 23.3-1.71 7.83-2.72 13.95-8.6 19.6-14.44 6.63-6.79 15.51-11.01 21.55-18.43 2.99-3.67 6.31-7.06 10-10.04 5.05-4.09 10-8.71 16.36-10.66zM114.1 113.84c3.61.62 6.75 2.57 9.89 4.33 3.14-1.78 6.28-3.72 9.89-4.33 2.06 6.59 5.3 13.45 3.39 20.49-2.87 4.34-7.31 7.39-11.21 10.75-2.15 2.25-4.57-.47-6.31-1.81-3.09-2.86-6.82-5.26-8.95-8.97-2.1-7.03 1.49-13.81 3.3-20.46zm-58.06 2.13c6.37 2.83 11.79 7.51 16.26 12.8 1.35 1.43 1.52 3.44 1.82 5.29-9.66.14-18.59-8.24-18.08-18.09zm128.03 5.08c2.71-1.94 5.49-4.35 9.03-4.32.01 9.08-8.75 16.15-17.31 17.1-1.4-5.95 4.39-9.51 8.28-12.78zm-71.88 31.12c5.66-1.78 11.7-2.26 17.6-1.7 6.43.65 12.07 4.59 16.22 9.36-7.22 2.36-14.22 6.39-22.05 5.95-6.67.14-12.78-3.25-18.1-6.95 1.17-2.88 3.21-5.73 6.33-6.66z" fill="%23735141"/><path d="M118.03 65.67c7.28.33 14.58-2.02 21.8-.47 4.25.79 5.38 5.53 7.28 8.75 1.48 3.32 4.37 5.64 7.25 7.71 5.19 3.76 9.45 8.58 14.4 12.62 4.83 4.66 12.1 4.35 18.3 3.78 8.88-.73 17.18-5.71 26.26-4.12-1.24 1.55-2.55 3.07-4.17 4.23-8.33 6.01-18.2 9.44-26.49 15.52-8.35 6.22-12.61 16.36-14.92 26.22-1.34 5.2-1.8 11.08-5.69 15.16-5.87 6.19-13.54 10.4-19.08 16.94-2.96 3.37-6.09 7.07-10.6 8.29-4.66 1.19-9.59 1.42-14.34.76-4.55-.71-6.87-5.21-9.85-8.19-6.43-7.67-15.54-12.48-21.92-20.16-6.32-8.02-4.82-19.25-10.33-27.66-5.93-9.38-15.17-16.08-24.91-21.1-5.79-3.07-12.4-5.47-16.36-11.01 6.19-.98 12.22 1.13 18.37 1.33 4.98.23 9.96.18 14.94.11 3.24-.12 6.7-.12 9.53-1.93 4.9-3.72 9.85-7.43 14.38-11.6 4.03-3.64 4.87-9.54 8.84-13.18 5.23-2.92 11.57-1.78 17.31-2m34.74 31.09c-4.84 5.32-12.49 8.51-14.11 16.21 2.22 2.38 5.01 4.66 8.42 4.77 4.72.14 9.24-1.97 13.04-4.61 4.45-3.14 5.68-9.01 5.27-14.14-.33-3.91-4.29-7.47-8.3-6.25-1.63 1.12-2.94 2.63-4.32 4.02m-74.95 4.16c2.79 8.98 11.12 15.94 20.23 17.78 4.61 1.2 7.32-3.37 9.4-6.63-2.18-4.17-6.05-6.97-9.24-10.3-4.04-3.81-9.05-7.99-14.98-7.42-3.02.44-6.85 3.06-5.41 6.57m36.28 12.92c-1.81 6.65-5.4 13.43-3.3 20.46 2.13 3.71 5.86 6.11 8.95 8.97 1.74 1.34 4.16 4.06 6.31 1.81 3.9-3.36 8.34-6.41 11.21-10.75 1.91-7.04-1.33-13.9-3.39-20.49-3.61.61-6.75 2.55-9.89 4.33-3.14-1.76-6.28-3.71-9.89-4.33m-1.91 38.33c-3.12.93-5.16 3.78-6.33 6.66 5.32 3.7 11.43 7.09 18.1 6.95 7.83.44 14.83-3.59 22.05-5.95-4.15-4.77-9.79-8.71-16.22-9.36-5.9-.56-11.94-.08-17.6 1.7zm46.15 25.22c2.66-8.12 4.5-17.94 12.52-22.6.74 4.36.84 8.78 1.03 13.19.45 10.5 2.72 21.08 7.73 30.39 2.99 5.62 5.65 11.48 6.72 17.8l-49.1 28.43c-1.64-7.43-.74-15.06-.98-22.59.05-4.78-.52-9.8 1.41-14.32 4.77-11.51 17-18.17 20.67-30.3zm-78.08-20.56c7.52 8.48 10.21 19.98 16.93 29.01 5.08 7.16 13.12 11.63 17.93 19.01 3.45 5.37 3.63 11.96 3.76 18.13.04 7.38.13 14.79-.89 22.12-2.08.16-4.16.36-6.24.43l-41.04-23.32c-.03-9.13-.51-18.48 2.13-27.33 3.74-12.39 6.36-25.15 7.42-38.05z" fill="%23e4dfd1"/><path d="M208.39 88.39c10.26-2.56 20.49-5.45 31.02-6.69.53 6.12-3.34 11.21-7.53 15.18-5.77 5.58-11.14 11.74-18.05 15.97-4.04 2.75-8.7 4.45-12.65 7.34-5.22 4.37-6.75 11.63-11.85 16.13-3.53 3.34-8.33 4.89-11.9 8.16-1.31 4.33-.83 8.97-1.11 13.44.06 7.56-.61 15.18.24 22.7 2.74 11.04 11.96 19.31 14.21 30.53.77 2.74-2.67 3.78-4.43 5.02-1.07-6.32-3.73-12.18-6.72-17.8-5.01-9.31-7.28-19.89-7.73-30.39-.19-4.41-.29-8.83-1.03-13.19-8.02 4.66-9.86 14.48-12.52 22.6-3.67 12.13-15.9 18.79-20.67 30.3-1.93 4.52-1.36 9.54-1.41 14.32.24 7.53-.66 15.16.98 22.59-2.56 1.8-4.95 3.83-7.66 5.4h-12.26c-1.84-1.51-3.67-3.05-5.57-4.47 2.08-.07 4.16-.27 6.24-.43 1.02-7.33.93-14.74.89-22.12-.13-6.17-.31-12.76-3.76-18.13-4.81-7.38-12.85-11.85-17.93-19.01-6.72-9.03-9.41-20.53-16.93-29.01-1.06 12.9-3.68 25.66-7.42 38.05-2.64 8.85-2.16 18.2-2.13 27.33-3.2-1.63-6.82-3.13-8.74-6.36-.32-2.72.21-5.44.76-8.1 2.03-8.82 4.96-17.42 6.74-26.31 2.32-10.98 3.38-22.26 2.81-33.47-.27-1.35-.05-3.1-1.23-4.04-3.51-2.92-8.07-4.37-11.24-7.74-4.62-4.71-5.79-11.8-10.73-16.23-4.84-4.05-11.29-5.73-15.78-10.26-4.2-4.23-7.08-9.54-11-14.01-3.59-4.44-8.35-7.8-11.58-12.53 6.64-.16 13.27.74 19.68 2.42 6.81 1.74 13.5 4.25 20.59 4.58 8.7.36 17.54.76 26.11-1.15l.4 3.44c-2.83 1.81-6.29 1.81-9.53 1.93-4.98.07-9.96.12-14.94-.11-6.15-.2-12.18-2.31-18.37-1.33 3.96 5.54 10.57 7.94 16.36 11.01 9.74 5.02 18.98 11.72 24.91 21.1 5.51 8.41 4.01 19.64 10.33 27.66 6.38 7.68 15.49 12.49 21.92 20.16 2.98 2.98 5.3 7.48 9.85 8.19 4.75.66 9.68.43 14.34-.76 4.51-1.22 7.64-4.92 10.6-8.29 5.54-6.54 13.21-10.75 19.08-16.94 3.89-4.08 4.35-9.96 5.69-15.16 2.31-9.86 6.57-20 14.92-26.22 8.29-6.08 18.16-9.51 26.49-15.52 1.62-1.16 2.93-2.68 4.17-4.23-9.08-1.59-17.38 3.39-26.26 4.12-6.2.57-13.47.88-18.3-3.78l-.05-2.13c6.44.32 12.88 1.26 19.33.7 6.95-.59 13.61-2.79 20.35-4.46M56.04 115.97c-.51 9.85 8.42 18.23 18.08 18.09-.3-1.85-.47-3.86-1.82-5.29-4.47-5.29-9.89-9.97-16.26-12.8m128.03 5.08c-3.89 3.27-9.68 6.83-8.28 12.78 8.56-.95 17.32-8.02 17.31-17.1-3.54-.03-6.32 2.38-9.03 4.32zm-31.3-24.29c1.38-1.39 2.69-2.9 4.32-4.02 4.01-1.22 7.97 2.34 8.3 6.25.41 5.13-.82 11-5.27 14.14-3.8 2.64-8.32 4.75-13.04 4.61-3.41-.11-6.2-2.39-8.42-4.77 1.62-7.7 9.27-10.89 14.11-16.21zm-74.95 4.16c-1.44-3.51 2.39-6.13 5.41-6.57 5.93-.57 10.94 3.61 14.98 7.42 3.19 3.33 7.06 6.13 9.24 10.3-2.08 3.26-4.79 7.83-9.4 6.63-9.11-1.84-17.44-8.8-20.23-17.78z" fill="%230c0b09"/></svg>
// ==/UserScript==

class CardWatcher {
  config = {
    // Add the card names you want to get an alert for. These need to be exact,
    // so I recommend copying and pasting the names from the page. If you need
    // to add a lot of names, you can save time if you go to the GoatBots page
    // you want to scan, open the devtools, and enter this into the console:
    // let cards = []; for (let row of document.querySelector("#main .price-list")?.children) { if (row.className === "header") continue; let name = row.querySelector(".name").innerText; cards.push(name); } console.log(cards);
    // It will return an array with all the card names on the page. You can then
    // right-click the returned array in the console and hit "Copy Object" and
    // then replace the array below with the one that's now in your clipboard.
    // Then just delete the names you don't care about.
    "Cards": [
      "Wrenn and Six",
      "Force of Negation #12",
      "Seasoned Pyromancer",
      "Cavern of Souls",
      "Aether Vial",
      "Surgical Extraction #19",
      "Emrakul, the Aeons Torn #67",
      "Liliana, the Last Hope",
      "Ulamog, the Infinite Gyre",
      "Supreme Verdict #43",
      "Kolaghan's Command",
      "Lightning Bolt #24",
      "Assassin's Trophy",
      "City of Brass #79",
      "Damnation #18",
      "Monastery Swiftspear",
      "Mulldrifter #11",
      "Eternal Witness #30",
      "Spell Pierce",
      "Burning-Tree Emissary",
      "Thought Scour",
      "Grim Flayer",
      "Unearth",
      "Crucible of Worlds #64",
      "Glimpse the Unthinkable",
      "Hardened Scales",
      "Rampant Growth #29",
      "Gifts Ungiven #13",
      "Blood Artist",
      "Wall of Omens #2",
      "Anger of the Gods",
      "Pithing Needle #61",
      "Thousand-Year Storm",
      "Bloodbraid Elf #40",
      "Flickerwisp",
      "Terminate #39",
      "Dragonlord Dromoka",
    ],

    // By default, the alert will convert the names of the new cards to audible
    // speech. You can disable text-to-speech by setting this to false. In that
    // case, it will use the fallback base64 audio file below.
    "Use text-to-speech": true,

    // How often to refresh the page to check stock, in milliseconds. This is
    // set to 10 seconds by default. This should be set to at least the average
    // page load time. If it normally takes 2 seconds for the page to finish
    // loading (as indicated by a loading icon in your browser, etc.), then you
    // don't want to set this to less than 2 seconds.
    "Timer interval": 10000,

    // By default, the page will only refresh when the tab is in the background
    // (i.e., you have a different tab focused). This way you can still use the
    // page normally if you want to. But if you use windows instead of tabs, so
    // that your GoatBots tab is always visible, you should set this to false.
    "Refresh while active": false,

    // The audio file to use if text-to-speech is disabled or unavailable. This
    // must be an mp3 file converted to a base64 file using this tool:
    // https://codepen.io/xewl/pen/NjyRJx
    // By default, it says "new cards available" in a male English voice.
    // Make sure the string is wrapped in backticks `like this`
    "Base64 audio file": `SUQzAwAAAAAfdlRFTkMAAAATAAAB//5MAGEAbQBlACAATQBQADMAVExBTgAAABcAAAH//lUAUwAgAEUAbgBnAGwAaQBzAGgAVEFMQgAAAD0AAAH//kMAcgBlAGEAdABlAGQAOgAgADcALwA2AC8AMgAwADIAMgAgADEAMAA6ADEANAA6ADEANAAgAFAATQBUUEUxAAAAMQAAAf/+VABlAHgAdABBAGwAbwB1AGQAOgAgAEkAVgBPAE4AQQAgAEoAbwBlAHkAMgAyAENPTU0AAAAyAAABZW5nAAD//mgAdAB0AHAAOgAvAC8AdwB3AHcALgBuAGUAeAB0AHUAcAAuAGMAbwBtAFRDT04AAAAPAAAB//5TAHAAZQBlAGMAaABUSVQyAAAAGwAAAf/+NgA2ADkAMAAzADMAOAAwAC4AbQBwADMAVFlFUgAAAAsAAAH//jIAMAAyADIAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA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`,
  };
  constructor() {
    // console.log("constructed");
    if (this.config["Use text-to-speech"] && window.speechSynthesis) {
      this.voices = [];
      window.speechSynthesis.onvoiceschanged = () => {
        this.voices = window.speechSynthesis.getVoices();
      };
    }
    this.audio = new Audio("data:audio/mp3;base64," + this.config["Base64 audio file"]);
    window.addEventListener("load", this);
  }
  handleEvent() {
    // console.log("loaded");
    let cards = [];
    for (let row of document.querySelector("#main .price-list")?.children) {
      if (row.className === "header") continue;
      let name = row.querySelector(".name")?.innerText?.trim();
      if (this.config.Cards.includes(name)) {
        // Only name the card if it's in stock.
        if (row.querySelector(".stock")?.classList.contains("out")) continue;
        // console.log("name :>> ", name);
        cards.push(name);
        let delivery = row.querySelector(".delivery");
        // If the card isn't already in our cart, add it.
        if (delivery.firstElementChild?.classList.contains("delivery-count")) continue;
        delivery?.click();
      }
    }
    window.removeEventListener("load", this);
    if (cards.length > 0) {
      if (this.config["Use text-to-speech"] && window.speechSynthesis) {
        this.speechSynth(cards.map(item => item.replace(/#[0-9]*$/, "").trim()).join("; "));
      } else this.playAudio();
    } else this.countdown();
  }
  speechSynth(words) {
    // console.log("words :>> ", words);
    let speech = new window.SpeechSynthesisUtterance();
    this.voices = window.speechSynthesis.getVoices();
    speech.text = words;
    if (this.voices) {
      if (!window.speechSynthesis.speaking) {
        // Navigate to the delivery page when the alert is finished. I'd prefer
        // to do this sooner but navigation ends the speech synthesis.
        speech.onend = () => {
          location.href = "/delivery";
          speech.onend = null;
        };
        window.speechSynthesis.speak(speech);
      }
    } else this.playAudio();
  }
  playAudio() {
    // console.log("playing audio");
    // Navigate to the delivery page when the alert is finished.
    this.audio.onended = () => {
      location.href = "/delivery";
      this.audio.onended = null;
    };
    this.audio.play();
  }
  countdown() {
    window.clearTimeout(this.timer);
    this.timer = window.setTimeout(() => {
      if (document.hidden || this.config["Refresh while active"]) location.reload();
      else this.countdown();
    }, this.config["Timer interval"]);
  }
}

new CardWatcher();
