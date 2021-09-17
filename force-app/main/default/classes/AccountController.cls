public with sharing class AccountController {
    @AuraEnabled(cacheable=true)
    public static List<Account> getAccounts(){
        return [SELECT Id, Name, Industry, Type FROM Account LIMIT 5];
    }

    @AuraEnabled(cacheable=true)
    public static List<Account> filterAccounts(String type){
        return [SELECT Id, Name, Industry, Type FROM Account WHERE TYPE=:type LIMIT 5];
    }

    @AuraEnabled(cacheable=true)
    public static List<Account> findAccounts(String searchKey){
        searchKey = '%'+searchKey+'%';
        return [SELECT Id, Name, Industry, Type FROM Account 
        WHERE Name LIKE :searchKey];
    }
}