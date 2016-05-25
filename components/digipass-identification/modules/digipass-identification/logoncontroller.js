import { LogonServiceName } from './services/logonservice';

/**
 * LogonController Controller
 * @ngInject LogonService
 */
const LogonController = function (LogonService) {
  this.doLogon = () => {
    const logonPromise = LogonService.doLogon(this);
    logonPromise.then((result) => {
      this.logon = result.payload;
      console.log(result);
    });
  };
};

LogonController.$inject = [LogonServiceName];
export default LogonController;
