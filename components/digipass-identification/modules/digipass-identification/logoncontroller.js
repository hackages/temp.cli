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

  let staticRoot = window.launchpad ? window.launchpad.staticRoot : '/static';
  this.getIcon = function getIcon(icon) {
    return `${staticRoot}/features/[BBHOST]/icons/dist/icons.svg#${icon}`;
  };
};

LogonController.$inject = [LogonServiceName];
export default LogonController;
