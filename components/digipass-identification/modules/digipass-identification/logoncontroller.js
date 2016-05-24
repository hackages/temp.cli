import {LogonServiceName} from './services/logonservice'

/**
 * LogonController Controller
 * @ngInject LogonService
 */
const LogonController = function(LogonService) {

  this.doLogon = () => {
    console.log(this);
    const logonPromise = LogonService.doLogon(this);
    logonPromise.then((result) => {
      this.logon =  result.payload;
    }).catch((error) => {
      console.error(error);
      throw error;
    })
  }

};
LogonController.$inject = [LogonServiceName];
export default LogonController;
