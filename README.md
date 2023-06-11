# Color Log Package

The creation of this package is to help identify precious logs in applications

## Installation

```javascript
yarn add color-log-package

//- or

npm install color-log-package
```

## Usage

There are two ways to use this package.
The first way to use our aliases is to be fast and responsive.
```javascript
import log from 'color-log-package'

const data = { key: 'test' }
log('Success', data)
log('Warning', data)
log('Error', data)
```
Output:
The second you can define the color, the styles and the message that will be displayed.
```javascript
import log from 'color-log-package'

const data = { key: 'test' }
setupColor = ['BgBlue', 'Bright', 'FgWhite'];

log('Test Custom Log', data, typeLog);

```

Use our list below to find out what color and style parameters you can use:

| parameter    	| output 	|
|--------------	|--------	|
| `Reset`      	|        	|
| `Bright`     	|        	|
| `Dim`        	|        	|
| `Underscore` 	|        	|
| `Blink`      	|        	|
| `Reverse`    	|        	|
| `Hidden`     	|        	|
| `FgBlack`    	|        	|
| `FgRed`      	|        	|
| `FgGreen`    	|        	|
| `FgYellow`   	|        	|
| `FgBlue`     	|        	|
| `FgMagenta`  	|        	|
| `FgCyan`     	|        	|
| `FgWhite`    	|        	|
| `FgGray`     	|        	|
| `BgBlack`    	|        	|
| `BgBlack`    	|        	|
| `BgGreen`    	|        	|
| `BgYellow`   	|        	|
| `BgBlue`     	|        	|
| `BgMagenta`  	|        	|
| `BgCyan`     	|        	|
| `BgWhite`    	|        	|
| `BgGray`     	|        	|

## License

The code is available under the [MIT License](LICENSE.md).