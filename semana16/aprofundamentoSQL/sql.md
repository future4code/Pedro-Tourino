# Aula 52 - Aprofundamento SQL

&nbsp;

### Exercício 01

**a)**

- Altera a tabela Actor, removendo a coluna salary.

&nbsp;

**b)**

- Altera a tabela Actor, trocando o nome da coluna gender por sex.

&nbsp;

**c)**

- Altera a tabela Actor, trocando o tipo da coluna gender por VARCHAR(255).

&nbsp;

**d)**

```SQL
  ALTER TABLE Actor
  CHANGE gender gender VARCHAR(100);
```

&nbsp;

---

&nbsp;

### Exercício 02

**a)**

```SQL
  UPDATE Actor
  SET name = "John Doe", birth_date = "2000-01-15"
  WHERE id = "003";
```

&nbsp;

**b)**

```SQL
  UPDATE Actor
  SET name = "JULIANA PÃES"
  WHERE name = "Juliana Paes";

  UPDATE Actor
  SET name = "Juliana Paes"
  WHERE name = "JULIANA PÃES";
```

&nbsp;

**c)**

```SQL
  UPDATE Actor
  SET
  name = "Fulano",
  salary = 20000,
  birth_date = "1999-12-15",
  gender = "male"
  WHERE id = "0111";
```

&nbsp;

**d)**

- ##### 0 row(s) affected Rows matched: 0 Changed: 0 Warnings: 0.
- Não é retornado erro, porque não existe uma lógica captura de erro.

&nbsp;

---

&nbsp;

### Exercício 03

**a)**

```SQL
  DELETE FROM Actor WHERE name = "Fernanda Montenegro";
```

&nbsp;

**b)**

```SQL
  DELETE FROM Actor WHERE salary > 1000000 AND gender = "male";
```

&nbsp;

---

&nbsp;

### Exercício 04

**a)**

```SQL
  SELECT MAX(salary) FROM Actor;
```

&nbsp;

**b)**

```SQL
  SELECT MIN(salary) FROM Actor WHERE gender = "female";
```

&nbsp;

**c)**

```SQL
  SELECT COUNT(*) FROM Actor WHERE gender = "female";
```

&nbsp;

**d)**

```SQL
  SELECT SUM(salary) FROM Actor;
```

&nbsp;

---

&nbsp;

### Exercício 05

**a)**

- O GROUP BY permite agrupar os resultados em um formato mais informativo.

&nbsp;

**b)**

```SQL
  SELECT id, name FROM Actor
  ORDER BY name DESC;
```

&nbsp;

**c)**

```SQL
  SELECT * FROM Actor
  ORDER BY salary;
```

&nbsp;

**d)**

```SQL
  SELECT * FROM Actor
  ORDER BY salary
  LIMIT 3;
```

&nbsp;

**e)**

```SQL
  SELECT AVG(salary), gender FROM Actor
  GROUP BY gender;
```

&nbsp;

---

&nbsp;

### Exercício 06

**a)**

```SQL
  ALTER TABLE Movies
  ADD playing_limit_date DATE;
```

&nbsp;

**b)**

```SQL
  ALTER TABLE Movies
  CHANGE score score FLOAT NOT NULL;
```

&nbsp;

**c)**

```SQL
  UPDATE Movies
  SET playing_limit_date = "2020-12-12"
  WHERE id = "001";

  UPDATE Movies
  SET playing_limit_date = "2019-12-12"
  WHERE id = "002";
```

&nbsp;

**d)**

- ##### 0 row(s) affected Rows matched: 0 Changed: 0 Warnings: 0.
- Novamente, o mySQL não detecta erros de não encontrado.

&nbsp;

---

&nbsp;

### Exercício 07

**a)**

```SQL
  SELECT COUNT(*) FROM Movies
  WHERE score > 7.5;
```

&nbsp;

**b)**

```SQL
  SELECT AVG(score) FROM Movies;
```

&nbsp;

**c)**

```SQL
  SELECT COUNT(*) FROM Movies
  WHERE playing_limit_date >= CURDATE();
```

&nbsp;

**d)**

```SQL
  SELECT COUNT(*) FROM Movies
  WHERE release_date > CURDATE();
```

&nbsp;

**e)**

```SQL
  SELECT MAX(score) FROM Movies;
```

&nbsp;

**f)**

```SQL
  SELECT MIN(score) FROM Movies;
```

&nbsp;

---

&nbsp;

### Exercício 08

**a)**

```SQL
  SELECT * FROM Movies
  ORDER BY title;
```

&nbsp;

**b)**

```SQL
  SELECT * FROM Movies
  ORDER BY title DESC
  LIMIT 5;
```

&nbsp;

**c)**

```SQL
  SELECT * FROM Movies
  WHERE playing_limit_date >= CURDATE()
  ORDER BY release_date DESC
  LIMIT 3;
```

&nbsp;

**d)**

```SQL
  SELECT * FROM Movies
  ORDER BY score DESC
  LIMIT 3;
```
