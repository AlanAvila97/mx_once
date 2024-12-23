/**
 * videojs-select-subtitle
 * @version 0.1.1
 * @copyright 2016 Lubos Krnac <lubos.krnac@gmail.com>
 * @license Apache-2.0
 */
(function(f){if(typeof exports==="object"&&typeof module!=="undefined"){module.exports=f()}else if(typeof define==="function"&&define.amd){define([],f)}else{var g;if(typeof window!=="undefined"){g=window}else if(typeof global!=="undefined"){g=global}else if(typeof self!=="undefined"){g=self}else{g=this}g.videojsSelectSubtitle = f()}})(function(){var define,module,exports;return (function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
(function (global){
'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _videoJs = (typeof window !== "undefined" ? window['videojs'] : typeof global !== "undefined" ? global['videojs'] : null);

var _videoJs2 = _interopRequireDefault(_videoJs);

// Default options for the plugin.
var defaults = {};

/**
 * Function to invoke when the player is ready.
 *
 * This is a great place for your plugin to initialize itself. When this
 * function is called, the player will have its DOM and child components
 * in place.
 *
 * @function onPlayerReady
 * @param    {Player} player
 * @param    {Object} [options={}]
 */
var onPlayerReady = function onPlayerReady(player, options) {
  player.addClass('vjs-select-subtitle');
};

/**
 * Function reads desired caption/subtitle language from options
 * and shows belonging caption/subtitle track.
 * @function showTrackFromOptions
 * @param    {Player} player
 * @param    {Object} [options={}]
 */
var showTrackFromOptions = function showTrackFromOptions(player, options) {
  if (!options.trackLanguage) {
    return;
  }

  for (var idx = 0; idx < player.textTracks().length; idx++) {
    var track = player.textTracks()[idx];

    if (track.language === options.trackLanguage) {
      track.mode = 'showing';
      break;
    }
  }
};

/**
 * A video.js plugin.
 *
 * In the plugin function, the value of `this` is a video.js `Player`
 * instance. You cannot rely on the player being in a "ready" state here,
 * depending on how the plugin is invoked. This may or may not be important
 * to you; if not, remove the wait for "ready"!
 *
 * @function selectSubtitle
 * @param    {Object} [options={}]
 *           An object of options left to the plugin author to define.
 */
var selectSubtitle = function selectSubtitle(options) {
  var _this = this;

  this.ready(function () {
    onPlayerReady(_this, _videoJs2['default'].mergeOptions(defaults, options));
  });

  this.on('play', function () {
    return showTrackFromOptions(_this, options);
  });
};

// Register the plugin with video.js.
_videoJs2['default'].plugin('selectSubtitle', selectSubtitle);

// Include the version number.
selectSubtitle.VERSION = '0.1.1';

exports['default'] = selectSubtitle;
module.exports = exports['default'];
}).call(this,typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})
},{}]},{},[1])(1)
});