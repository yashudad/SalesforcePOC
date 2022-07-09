public class DssFlowController {
 @AuraEnabled
   public static Account getAccount() {
       List<Account> accountRec = [SELECT Id, Name, LastModifiedDate FROM Account LIMIT 1];
       System.debug('Account record is ' + accountRec.get(0).id);
      return accountRec.get(0);
   }
}
