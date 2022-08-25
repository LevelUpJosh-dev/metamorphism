## Create Test Data for Apex Tests
#### Adding a Test Utility Class
> [!NOTE] Test Utility Class
>1. In the Developer Console, click **File** | **New** | **Apex Class**, and enter TestDataFactory for the class name, and then click **OK**.
>2. Replace the default class body with the following.
    >        ```Java
    >        @isTest
    >        public class TestDataFactory {
    >            public static List< Account > createAccountsWithOpps(Integer numAccts, Integer numOppsPerAcct) {
    >                List < Account > accts = new List< Account >();
    >                for(Integer i=0; i < numAccts;i++) {
    >                    Account a = new Account(Name='TestAccount' + i);
    >                    accts.add(a);
    >                }
    >                insert accts;
    >                List < Opportunity > opps = new List < Opportunity >();
    >                for (Integer j=0;j < numAccts;j++) {
    >                    Account acct = accts[j];
    >                    // For each account just inserted, add opportunities
    >                    for (Integer k=0;k < numOppsPerAcct;k++) {
    >                        opps.add(new Opportunity(Name=acct.Name + ' Opportunity ' + k,
    >                                               StageName='Prospecting',
    >                                               CloseDate=System.today().addMonths(1),
    >                                               AccountId=acct.Id));
    >                    }
    >                }
    >                // Insert all opportunities for all accounts.
    >                insert opps;
    >                return accts;
    >            }
    >        }
    >        ```
* This class utility contains one static method, `createAccountsWithOpps()`, which accepts the number of accounts and the number of related opportunities to create for each account.
* The second loop creates the opportunities. Because each group of opportunities are linked to one account, the outer loop iterates through accounts and contains a nested loop that creates related opportunities for the current account

#### Calling Utility Methods for Test Data Creation
With the factory class that was created, we can utilize the new utility method to create the accounts for us in our Test class:
```Java
        // Test data setup
        // Create one account with one opportunity by calling a utility method
        Account[] accts = TestDataFactory.createAccountsWithOpps(1,1);
```
