# Aula 51 - Introdução a Banco de Dados e SQL

&nbsp;

### Exercício 01

**a)**

- _`VARCHAR`_: Refere-se a um tipo de dados de um campo que pode conter letras e números.
- _`DATE`_: Refere-se a um tipo de dados de um campo que pode conter data.
- _`PRIMARY KEY`_: Indica que o campo será uma chave primária (identificador).
- _`NOT NULL`_: Indica que o campo deve ser preenchido.

&nbsp;

**b)**

- _`SHOW DATABASES`_: Mostra todas a bases de dados existentes.
- _`SHOW TABLES`_: Mostra todas as tabelas existentes dentro da base de dados em uso.

&nbsp;

**c)**

- _`DESCRIBE Actor`_: Mostra a estrutura da tabela, e os tipos de cada campo.

&nbsp;

---

&nbsp;

### Exercício 02

**a)**

```SQL
  INSERT INTO Actor(id, name, salary, birth_date, gender)
  VALUES(
    "002",
    "Glória Pires",
    1200000,
    "1963-08-23",
    "female"
  );
```

&nbsp;

**b)**

#### Query gerando erro:

```SQL
  INSERT INTO Actor(id, name, salary, birth_date, gender)
  VALUES(
    "002",
    "Pedro",
    1200000,
    "1988-05-20",
    "male"
  );
```

- ##### _Error Code_: 1062. Duplicate entry '002' for key 'PRIMARY'.

#### Tradução do erro:

- ##### _Código de erro_: 1062. Entrada duplicada '002' para chave 'PRIMÁRIA'.

#### Motivo:

- Esse erro aconteceu porque um valor da chave primária não pode ser repetido.

&nbsp;

**c)**

#### Query gerando erro:

```SQL
  INSERT INTO Actor (id, name, salary)
  VALUES(
    "003",
    "Fernanda Montenegro",
    300000,
    "1929-10-19",
    "female"
  );
```

- ##### _Error Code_: 1136. Column count doesn't match value count at row 1.
- ##### _Código de erro_: 1136. Número de colunas não corresponde ao valor da linha 1.
- Esse erro aconteceu porque faltaram as propriedades birth_date e gender nos parâmetros da primeira linha.

#### Query corrigida:

```SQL
  INSERT INTO Actor (id, name, salary, birth_date, gender)
  VALUES(
    "003",
    "Fernanda Montenegro",
    300000,
    "1929-10-19",
    "female"
  );
```

&nbsp;

**d)**

#### Query gerando erro:

```SQL
  INSERT INTO Actor (id, salary, birth_date, gender)
  VALUES(
    "004",
    400000,
    "1949-04-18",
    "male"
  );
```

- ##### _Error Code_: 1364. Field 'name' doesn't have a default value.
- ##### _Código de erro_: 1364. Campo 'name' não possui um valor padrão.
- Esse erro aconteceu porque o campo 'name' não pode ser NULL e não foi definido um valor inicial para ele.

#### Query corrigida:

```SQL
  INSERT INTO Actor (id, salary, birth_date, gender, name)
  VALUES(
    "004",
    400000,
    "1949-04-18",
    "male",
    "John Doe"
  );
```

&nbsp;

**e)**

#### Query gerando erro:

```SQL
  INSERT INTO Actor (id, name, salary, birth_date, gender)
  VALUES(
    "005",
    "Juliana Paes",
    719333.33,
    1979-03-26,
    "female"
  );
```

- ##### _Error Code_: 1292. Incorrect date value: '1950' for column 'birth_date' at row 1.
- ##### _Código de erro_: 1292. Valor incorreto de data: '1950' para coluna 'birth_date' na linha 1.
- Esse erro aconteceu porque o campo 'birth_date' espera que o formato 'AAAA-MM-DD' seja uma string.

#### Query corrigida:

```SQL
  INSERT INTO Actor (id, name, salary, birth_date, gender)
  VALUES(
    "005",
    "Juliana Paes",
    719333.33,
    "1979-03-26",
    "female"
  );
```

&nbsp;

**f)**

```SQL
  INSERT INTO Actor
  VALUES(
    "006",
    "Fulana Lana",
    12345,
    "1999-08-21",
    "female"
  );

  INSERT INTO Actor
  VALUES(
    "007",
    "Ciclano Nano",
    54321,
    "1989-05-16",
    "male"
  );
```

&nbsp;

---

&nbsp;

### Exercício 03

**a)**

```SQL
  SELECT \* FROM Actor WHERE gender = "female";
```

&nbsp;

**b)**

```SQL
  SELECT salary FROM Actor WHERE name = "Tony Ramos";
```

&nbsp;

**c)**

```SQL
  SELECT \* FROM Actor Where gender = "invalid";
```

- É retornado NULL, porque não existe gender = "invalid" na tabela Actor.

&nbsp;

**d)**

```SQL
  SELECT id, name, salary FROM Actor WHERE salary > 500000;
```

&nbsp;

**e)**

```SQL
  SELECT id, name FROM Actor WHERE id = "002";
```

&nbsp;

---

&nbsp;

### Exercício 04

**a)**

```SQL
  SELECT * FROM Actor
  WHERE (name LIKE "A%" OR name LIKE "J%") AND salary > 300000
```

- Selecione todos os dados da tabela Actor Onde a propriedade name seja iniciada por "A" ou "J", E Onde o salário seja maior que 300000.

&nbsp;

**b)**

```SQL
  SELECT * FROM Actor WHERE name NOT LIKE "A%" AND salary > 350000;
```

&nbsp;

**c)**

```SQL
  SELECT * FROM Actor WHERE name LIKE "%g%" OR name LIKE "%G%";
```

&nbsp;

**d)**

```SQL
  SELECT * FROM Actor
  WHERE (name LIKE "%a%" OR name LIKE "%A%" OR name LIKE "%g%" OR name LIKE "%G%")
  AND salary BETWEEN 350000 AND 900000;
```

&nbsp;

---

&nbsp;

### Exercício 05

**a)**

```SQL
  CREATE TABLE Movies (
    id VARCHAR(255) PRIMARY KEY,
    title VARCHAR(255) NOT NULL,
    synopsis TEXT NOT NULL,
    release_date DATE NOT NULL,
    score TINYINT NOT NULL
  );
```

&nbsp;

- O tipo TEXT permite armazenar campos de texto mais longos.

&nbsp;

**b)**

```SQL
  INSERT INTO Movies (id, title, synopsis, release_date, score)
  VALUES (
    "001",
    "Se Eu Fosse Você",
    "Cláudio e Helena são casados há muitos anos e enfrentam a rotina do casamento. Um dia eles são atingidos por um fenômeno inexplicável e trocam de corpos",
    "2006-01-06",
    7
  );
```

&nbsp;

**c)**

```SQL
  INSERT INTO Movies (id, title, synopsis, release_date, score)
  VALUES (
    "002",
    "Doce de mãe",
    "Dona Picucha, uma animada senhora de 85 anos, sempre causa grandes confusões. A vida dela e dos seus quatro filhos sofre uma reviravolta depois que Zaida, empregada e amiga de Dona Picucha, anuncia que vai se casar e não poderá mais morar com ela",
    "2012-12-27",
    10
  );
```

&nbsp;

**d)**

```SQL
  INSERT INTO Movies
  VALUES (
    "003",
    "Dona Flor e Seus Dois Maridos",
    "Dona Flor é uma sedutora professora de culinária casada com Vadinho, que só quer saber de farras e jogatina nas boates. A vida de abusos acaba por acarretar sua morte precoce.",
    "2017-11-12",
    8
  );
```

&nbsp;

**e)**

```SQL
  INSERT INTO Movies
  VALUES (
    "004",
    "Tropa de Elite",
    "Em 1997, no Rio de Janeiro, o Capitão Nascimento tem que encontrar um substituto para sua posição enquanto tenta derrubar traficantes e criminosos antes da visita do Papa.",
    "2007-10-12",
    8
  );
```

&nbsp;

---

&nbsp;

### Exercício 06

**a)**

```SQL
  SELECT id, title, score FROM Movies WHERE id = "002";
```

&nbsp;

**b)**

```SQL
  SELECT * FROM Movies WHERE title = "Tropa de Elite";
```

&nbsp;

**c)**

```SQL
  SELECT id, title, synopsis FROM Movies WHERE score >= 7;
```

&nbsp;

---

&nbsp;

### Exercício 07

**a)**

```SQL
  SELECT * FROM Movies
  WHERE title LIKE "%vida%";
```

&nbsp;

**b)**

```SQL
  SELECT * FROM Movies
  WHERE title LIKE "%rio%" OR
      synopsis LIKE "%rio%";
```

&nbsp;

**c)**

```SQL
  SELECT * FROM Movies
  WHERE release_date <= "2020-08-10";
```

&nbsp;

**d)**

```SQL
  SELECT * FROM Movies
  WHERE release_date <= "2020-08-10" AND
      (title LIKE "%vida%" OR
        synopsis LIKE "%vida%") AND score >= 7;
```

&nbsp;

---

&nbsp;

## Todas as queries utilizadas:

```SQL
  USE mello_pedro_tourino;

  CREATE TABLE Actor (
    id VARCHAR(255) PRIMARY KEY,
    name VARCHAR (255) NOT NULL,
    salary FLOAT NOT NULL,
    birth_date DATE NOT NULL,
    gender VARCHAR(6) NOT NULL
  );

  SHOW DATABASES;
  SHOW TABLES;

  DESCRIBE Actor;

  INSERT INTO Actor(id, name, salary, birth_date, gender)
  VALUES(
    "002",
    "Glória Pires",
    1200000,
    "1963-08-23",
    "female"
  );

  INSERT INTO Actor(id, name, salary, birth_date, gender)
  VALUES(
    "002",
    "Pedro",
    1200000,
    "1988-05-20",
    "male"
  );

  INSERT INTO Actor (id, name, salary)
  VALUES(
    "003",
    "Fernanda Montenegro",
    300000,
    "1929-10-19",
    "female"
  );

  INSERT INTO Actor (id, name, salary, birth_date, gender)
  VALUES(
    "003",
    "Fernanda Montenegro",
    300000,
    "1929-10-19",
    "female"
  );

  INSERT INTO Actor (id, salary, birth_date, gender)
  VALUES(
    "004",
    400000,
    "1949-04-18",
    "male"
  );

  INSERT INTO Actor (id, salary, birth_date, gender, name)
  VALUES(
    "004",
    400000,
    "1949-04-18",
    "male",
    "John Doe"
  );

  INSERT INTO Actor (id, name, salary, birth_date, gender)
  VALUES(
    "005",
    "Juliana Paes",
    719333.33,
    1979-03-26,
    "female"
  );

  INSERT INTO Actor (id, name, salary, birth_date, gender)
  VALUES(
    "005",
    "Juliana Paes",
    719333.33,
    "1979-03-26",
    "female"
  );

  INSERT INTO Actor VALUES(
    "006",
    "Fulana Lana",
    12345,
    "1999-08-21",
    "female"
  );

  INSERT INTO Actor VALUES(
    "007",
    "Ciclano Nano",
    54321,
    "1989-05-16",
    "male"
  );

  SELECT * FROM Actor;
  SELECT id, salary FROM Actor;
  SELECT id, name FROM Actor WHERE gender = "male";
  SELECT * FROM Actor WHERE gender = "female";
  SELECT salary FROM Actor WHERE name = "Tony Ramos";
  SELECT * FROM Actor Where gender = "invalid";
  SELECT id, name, salary FROM Actor WHERE salary > 500000;
  SELECT id, name FROM Actor WHERE id = "002";

  SELECT * FROM Actor
  WHERE (name LIKE "A%" OR name LIKE "J%") AND salary > 300000;

  SELECT * FROM Actor WHERE name NOT LIKE "A%" AND salary > 350000;
  SELECT * FROM Actor WHERE name LIKE "%g%" OR name LIKE "%G%";

  SELECT * FROM Actor
  WHERE (name LIKE "%a%" OR name LIKE "%A%" OR name LIKE "%g%" OR name LIKE "%G%")
  AND salary BETWEEN 350000 AND 900000;

  CREATE TABLE Movies (
    id VARCHAR(255) PRIMARY KEY,
    title VARCHAR(255) NOT NULL,
    synopsis TEXT NOT NULL,
    release_date DATE NOT NULL,
    score TINYINT NOT NULL
  );

  INSERT INTO Movies (id, title, synopsis, release_date, score)
  VALUES (
    "001",
    "Se Eu Fosse Você",
    "Cláudio e Helena são casados há muitos anos e enfrentam a rotina do casamento. Um dia eles são atingidos por um fenômeno inexplicável e trocam de corpos",
    "2006-01-06",
    7
  );

  INSERT INTO Movies (id, title, synopsis, release_date, score)
  VALUES (
    "002",
    "Doce de mãe",
    "Dona Picucha, uma animada senhora de 85 anos, sempre causa grandes confusões. A vida dela e dos seus quatro filhos sofre uma reviravolta depois que Zaida, empregada e amiga de Dona Picucha, anuncia que vai se casar e não poderá mais morar com ela",
    "2012-12-27",
    10
  );

  INSERT INTO Movies
  VALUES (
    "003",
    "Dona Flor e Seus Dois Maridos",
    "Dona Flor é uma sedutora professora de culinária casada com Vadinho, que só quer saber de farras e jogatina nas boates. A vida de abusos acaba por acarretar sua morte precoce.",
    "2017-11-12",
    8
  );

  INSERT INTO Movies
  VALUES (
    "004",
    "Tropa de Elite",
    "Em 1997, no Rio de Janeiro, o Capitão Nascimento tem que encontrar um substituto para sua posição enquanto tenta derrubar traficantes e criminosos antes da visita do Papa.",
    "2007-10-12",
    8
  );

  SELECT id, title, score FROM Movies WHERE id = "002";
  SELECT * FROM Movies WHERE title = "Tropa de Elite";
  SELECT id, title, synopsis FROM Movies WHERE score >= 7;

  SELECT * FROM Movies
  WHERE title LIKE "%vida%";

  SELECT * FROM Movies
  WHERE title LIKE "%rio%" OR
      synopsis LIKE "%rio%";

  SELECT * FROM Movies
  WHERE release_date <= "2020-08-10";

  SELECT * FROM Movies
  WHERE release_date <= "2020-08-10" AND
      (title LIKE "%vida%" OR
        synopsis LIKE "%vida%") AND score >= 7;
```
