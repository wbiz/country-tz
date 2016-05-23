var expect = require('chai').expect;
var _ = require('lodash');
var ctz = require('../index');

describe('country-tz', function () {

  it('should get all countries', function (done) {
    var countries = ctz.getCountries();
    expect(_.size(countries)).to.be.eql(247);
    done();
  });

  it('should get all timezones', function (done) {
    var tzs = ctz.getZones();
    expect(_.size(tzs)).to.be.eql(339);
    done();
  });
  describe('#getNameByCode', function () {
    it('should get country name by code', function (done) {
      var code = ctz.getNameByCode('AD');
      expect(code).to.be.eql('Andorra');
      done();
    });

    it('should get undefined when code is invalid', function (done) {
      var code = ctz.getNameByCode('AD-z');
      expect(code).to.be.undefined;
      done();
    });
  });

  describe('#getCodeByName', function () {
    it('should get code by name', function (done) {
      var code = ctz.getCodeByName('Andorra');
      expect(code).to.be.eql('AD');
      done();
    });
    it('should get undefined when name is invalid', function (done) {
      var code = ctz.getNameByCode('Andorra-z');
      expect(code).to.be.undefined;
      done();
    });
  });

  describe('#getTimeZonesByCode', function () {
    it('should get timezone list by code', function (done) {
      var tzs = ctz.getTimeZonesByCode('AD');
      expect(tzs).to.be.an('array');
      expect(tzs[0]).to.be.eql('Europe/Andorra');
      done();
    });
    it('should get undefined when code is invalid', function (done) {
      var code = ctz.getTimeZonesByCode('AD-z');
      expect(code).to.be.undefined;
      done();
    });
  });

  describe('#getCodesByTimeZone', function () {
    it('should get code list by timezone', function (done) {
      var codes = ctz.getCodesByTimeZone('Europe/Andorra');
      expect(codes).to.be.an('array');
      expect(codes[0]).to.be.eql('AD');
      done();
    });
    it('should get undefined when timezone is invalid', function (done) {
      var code = ctz.getCodesByTimeZone('Europe/Andorra-z');
      expect(code).to.be.undefined;
      done();
    });
  });
});
