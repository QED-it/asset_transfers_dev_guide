# QeditAssetTransfers.ImportWalletRequest

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**walletId** | **String** | The ID under which to import the Wallet; can be different from the ID the Wallet was stored under in the exporting Node | 
**encryptedSk** | **String** | The encrypted secret key of the Wallet | 
**authorization** | **String** | The authorization password used during Wallet generation that allows to decrypt the encrypted secret key | 
**salt** | **String** | The salt used in the encryption of the secret key | 


