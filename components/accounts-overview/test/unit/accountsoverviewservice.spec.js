import service from './../../modules/accountsoverview/services/accountsoverviewservice';

describe('Account Overview', function () {

    beforeEach(angular.mock.module('crelan.accounts.service'));

    describe('The service', () => {

        let accountsOverviewService, $httpBackend;
        
        beforeEach(angular.mock.inject((_AccountsOverviewService_, _$httpBackend_) => {
            accountsOverviewService = _AccountsOverviewService_;
            $httpBackend = _$httpBackend_;
        }));

        it('should be defined', function () {
            expect(accountsOverviewService).toBeDefined();
        });

        it('should return a list of accounts', (done) => {
            $httpBackend.whenGET('/portal/accounts/list/all').respond(200, {"Account": "1"});
            let actual = accountsOverviewService.getAllAccounts();

            actual.then((response) => {
                console.log('moo');
                expect(response).toEqual({"Account": "1"});
                done();
            }).catch((err) => {
                fail(err);
                done();
            });
            $httpBackend.flush();
        });

    });
})
;

