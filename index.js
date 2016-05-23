'use strict';

var _ = require('lodash');

var timezoneData = require('./data/timezone_data.min.json');
var codes = timezoneData.countries;
var tzs = timezoneData.zones;

module.exports = {

  getCountries: function(){
  	return codes;
  },

  getZones: function(){
  	return tzs;
  },

  getNameByCode: function(code){
  	return (codes[code]) ? codes[code].name : undefined;
  },

  getCodeByName: function(name){
  	var obj = _.find(_.values(codes), {name: name})
  	return (obj) ? obj.abbr : undefined;
  },

  getTimeZonesByCode: function(code){
    return (codes[code]) ? codes[code].zones : undefined;
  },

  getCodesByTimeZone: function(tz){
    return (tzs[tz]) ? tzs[tz].countries : undefined;
  }

};