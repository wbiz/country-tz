# country-tz

## Install
```
npm install country-tz --save
```
or 
```
bower install country-tz --save
```
## Usage

```
var ctz = require('country-tz');
ctz.getCountries();  // return the list of the country objects
ctz.getZones();  // return the list of the timezone objects
ctz.getNameByCode('AD');  // return  'Andorra'
ctz.getCodeByName('Andorra');  // return 'AD'
ctz.getTimeZonesByCode('AD');  //return ['Europe/Andorra']
ctz.getCodesByTimeZone('Europe/Andorra');  //return ['AD']
```

* return undefined if invalid param is given.
