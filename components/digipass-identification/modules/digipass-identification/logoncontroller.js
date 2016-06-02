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
        window.location.href = this.getUri('app');
      } else {
        this.logonErrors = result.errors;
      }
    });

    this.getUri = function getUri(to) {
      if (window.b$) {
        return `${window.b$.portal.config.serverRoot}/${window.b$.portal.portalName}/${to}`;
      } else {
        return `/${to}`
      }
    };
  };

  let staticRoot = window.launchpad ? window.launchpad.staticRoot : '/static';
  this.getIcon = function getIcon(icon) {
    return `${staticRoot}/features/[BBHOST]/icons/dist/icons.svg#${icon}`;
  };
};

LogonController.$inject = [LogonServiceName];
export default LogonController;
