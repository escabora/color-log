import { colors, infoDefault } from './constants';
import { capitalize } from './utils';

function log(info: string, data: any, types: Array<string>) {
  const lowerCaseInfo: string = info.toLowerCase()
  const capitalizeInfo: string = capitalize(info)
  
  if (infoDefault.includes(lowerCaseInfo)) {
    const typeLog: Array<string> = [lowerCaseInfo];

    console.log(
      `${typeLog.map((type) => colors[type]).join('')}${capitalizeInfo}\x1b[0m`,
      data
    );
  } else {
    console.log(
      `${types.map((type) => colors[type]).join('')}${info}\x1b[0m`,
      data
    );
  }
  
}


export default log;
