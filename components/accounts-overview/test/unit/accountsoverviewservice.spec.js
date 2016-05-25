import service from './../../modules/accountsoverview/services/accountsoverviewservice';

const accountsPayload = {
    "statusCode": 200,
    "success": true,
    "payload": [
        {
            "accountNumber": "BE08860110466713",
            "accountType": "30",
            "accountName": "Pakketrekening",
            "accountHolder": "VAN DER KELEN F. - MERTENS D",
            "secondaryName": "Gezamelijke",
            "currency": "EUR",
            "balance": 0,
            "availableAmount": 0,
            "excluded": false,
            "favorite": true,
            "issuerTransferAllowed": true,
            "externalTransferAllowed": true
        }
    ]
};

describe('Account Overview', function () {

    beforeEach(angular.mock.module(service));

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
            $httpBackend.whenGET('/portal/accounts/list/all').respond(200, accountsPayload);
            let actualPromise = accountsOverviewService.getAllAccounts();

            actualPromise.then((response) => {
                expect(response).toEqual(
                    {
                        "savingAccounts": [],
                        "checkingAccounts": [{
                            "accountNumber": "BE08860110466713",
                            "accountType": "30",
                            "accountName": "Pakketrekening",
                            "accountHolder": "VAN DER KELEN F. - MERTENS D",
                            "secondaryName": "Gezamelijke",
                            "currency": "EUR",
                            "balance": 0,
                            "availableAmount": 0,
                            "excluded": false,
                            "favorite": true,
                            "issuerTransferAllowed": true,
                            "externalTransferAllowed": true
                        }],
                        "creditAccounts": []
                    }
                );
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

