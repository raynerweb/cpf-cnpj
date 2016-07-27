# cpf-cnpj
Diretiva __AngularJS__ para adicionar máscara de CPF ou CNPJ num mesmo campo.

Diretiva do tipo atributo. **cpf-cnpj**

*ng-model* é obrigatório

Para ter o *ng-model* como uma string use assim:

```html
<input type="text" cpf-cnpj ng-model="cpfCnpj" >
```

Para ter o *ng-mode* num tipo numérico use o atributo **as-number**

```html
<input type="text" cpf-cnpj as-number ng-model="cpfCnpj" >
```

