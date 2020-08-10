# Aula 51 - Introdução a Banco de Dados e SQL

## Iniciando o Banco de dados:

```SQL
USE mello_pedro_tourino;

CREATE TABLE Actor (
  id VARCHAR(255) PRIMARY KEY,
  name VARCHAR (255) NOT NULL,
  salary FLOAT NOT NULL,
  birth_date DATE NOT NULL,
  gender VARCHAR(6) NOT NULL
);
```

### Exercício 01

**a)**

- _`VARCHAR`_: Refere-se a um tipo de dados de um campo que pode conter letras e números.
- _`DATE`_: Refere-se a um tipo de dados de um campo que pode conter data.
- _`PRIMARY KEY`_: Indica que o campo será uma chave primária (identificador).
- _`NOT NULL`_: Indica que o campo deve ser preenchido.

**b)**

- _`SHOW DATABASES`_: Mostra todas a bases de dados existentes.
- _`SHOW TABLES`_: Mostra todas as tabelas existentes dentro da base de dados em uso.

**c)**

- _`DESCRIBE Actor`_: Mostra a estrutura da tabela, e os tipos de cada campo.
