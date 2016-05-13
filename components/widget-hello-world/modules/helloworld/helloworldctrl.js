HelloWorldCtrl.$inject = ['HelloWorldService'];
/**
 * HelloWorld Controller
 * @ngInject
 */
function HelloWorldCtrl(HelloWorldService) {
  HelloWorldService.getHelloWorld()
    .then(function (helloWorld) {
      this.helloWorld = helloWorld;
    }.bind(this));
}

export default HelloWorldCtrl;
