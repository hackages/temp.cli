import { LogonServiceName } from './services/logonservice';

/**
 * LogonController Controller
 * @ngInject LogonService
 */
const LogonController = function LogonController(LogonService) {
  this.doLogon = () => {
    const logonPromise = LogonService.doLogon(this);
    logonPromise.then((result) => {
      if (result.success) {
        this.logon = result.payload;
      } else {
        this.logonErrors = result.errors;
      }
    });
  };
};

LogonController.$inject = [LogonServiceName];
export default LogonController;
