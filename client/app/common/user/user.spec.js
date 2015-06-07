// Have to import angular first before angular-mocks
// https://github.com/Workiva/karma-jspm/issues/23
import angular from 'angular';
import 'angular-mocks';
import UserModule from './user.js';
import UserFactory from './user.factory.js';
import test from './user-test.js';

describe('User', ()=>{

  it('should run this test', ()=> {
    expect(4).to.equal(4);
  });

  it('should import properly', function() {
    expect(test.hello).to.equal('world');
  });

});
