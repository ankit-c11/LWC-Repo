public with sharing class AccountController {
    @AuraEnabled(cacheable=true)
    public static List<Account> getAccounts(){
        return [SELECT Id, Name, Industry, Type FROM Account LIMIT 5];
    }
    
    @AuraEnabled(cacheable=true)
    public static List<Account> filterAccountByIndustry(String industry){
        return [SELECT Id, Name, Industry, Type FROM Account WHERE Industry =:industry];
    }
}