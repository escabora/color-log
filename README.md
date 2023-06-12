[![Version](https://img.shields.io/npm/v/color-log-package.svg)](https://www.npmjs.com/package/color-log-package)
[![Downloads Total](https://img.shields.io/npm/dt/color-log-package.svg)](https://www.npmjs.com/package/color-log-package)
[![License](https://img.shields.io/badge/License-MIT-yellow.svg)](https://github.com/escabora/color-log-package/blob/main/LICENSE.md)
[![CodeFactor](https://www.codefactor.io/repository/github/escabora/color-log-package/badge)](https://www.codefactor.io/repository/github/escabora/color-log-package)

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
### Output:<br />
![default](/imgs/default.png)
<br /><br /><br />
The second you can define the color, the styles and the message that will be displayed. Just passing an array with the styles you want

```javascript
import log from 'color-log-package'

const data = { key: 'test' }
const setupColor = ['BgBlue', 'Bright', 'FgWhite'];

log('Test Custom Log', data, setupColor);

```
### Output:<br />
![custom](/imgs/custom.png)<br /><br />
Use our list below to find out what color and style parameters you can use:

| parameter    	| output 	|
|--------------	|--------	|
| `Reset`      	| ![Reset](/imgs/Reset.png)      |
| `Bright`     	| ![Bright](/imgs/Bright.png)      |
| `Dim`        	| ![Dim](/imgs/Dim.png)      |
| `Underscore` 	| ![Underscore](/imgs/Underscore.png)      |
| `Blink`      	| ![Blink](/imgs/Blink.png)      |
| `Reverse`    	| ![Reverse](/imgs/Reverse.png)      |
| `Hidden`     	| ![Hidden](/imgs/Hidden.png)      |
| `FgBlack`    	| ![FgBlack](/imgs/FgBlack.png)      |
| `FgRed`      	| ![FgRed](/imgs/FgRed.png)      |
| `FgGreen`    	| ![FgGreen](/imgs/FgGreen.png)      |
| `FgYellow`   	| ![FgYellow](/imgs/FgYellow.png)      |
| `FgBlue`     	| ![FgBlue](/imgs/FgBlue.png)      |
| `FgMagenta`  	| ![FgBlue](/imgs/FgBlue.png)      |
| `FgCyan`     	| ![FgCyan](/imgs/FgCyan.png)      |
| `FgWhite`    	| ![FgWhite](/imgs/FgWhite.png)      |
| `FgGray`     	| ![FgGray](/imgs/FgGray.png)      |
| `BgBlack`    	| ![BgBlack](/imgs/BgBlack.png)      |
| `BgGreen`    	| ![BgGreen](/imgs/BgGreen.png)      |
| `BgYellow`   	| ![BgYellow](/imgs/BgYellow.png)      |
| `BgBlue`     	| ![BgBlue](/imgs/BgBlue.png)      |
| `BgMagenta`  	| ![BgMagenta](/imgs/BgMagenta.png)      |
| `BgCyan`     	| ![BgCyan](/imgs/BgCyan.png)      |
| `BgWhite`    	| ![BgWhite](/imgs/BgWhite.png)      |
| `BgGray`     	| ![BgGray](/imgs/BgGray.png)      |

## License

The code is available under the [MIT License](LICENSE.md).
