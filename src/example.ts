import log from './index';

const typeLog = ['BgBlue', 'Bright', 'FgWhite'];
log('Test Custom Log', {key: 'test custom data'}, typeLog);
log('Success', { response: 'success' }, []);
log('Warning', { response: 'warning' }, []);
log('Error', { response: 'error' }, []);
