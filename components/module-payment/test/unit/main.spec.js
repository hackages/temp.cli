var main = require('../../scripts/main');

describe('module-payment suite test ', function() {
  describe('Main', function() {
    it('should be an object', function() {
      expect(main).toBeObject();
    });

    it('Simple operation', function() {
      expect(1).toEqual(1);
    });
  });
});


