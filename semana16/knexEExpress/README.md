# Aula 53 - Knex e Express

&nbsp;

## Exercício 1

**a)**

- A resposta RAW vem com várias informações extras da tabela, sendo que o primeiro array é o resultado da query.

&nbsp;

**b)**

```SQL
  /* Search By Name Endpoint */
  app.get('/search/:name', searchByName);

  async function searchByName(req: Request, res: Response): Promise<any> {
    try {
      const result = await connection.raw(`
        SELECT * FROM Actor
        WHERE name LIKE "%${req.params.name}%";
      `);

      res.status(200).send(result[0]);
    } catch (error) {
      res.status(400).send(error.message);
    }
  }
```

&nbsp;

**c)**

```SQL
  /* Count By Gender Endpoint */
  app.get('/count/:gender', countByGender);

  async function countByGender(req: Request, res: Response): Promise<any> {
    try {
      const result = await connection.raw(`
        SELECT COUNT(*) AS "quantity", gender FROM Actor
        WHERE gender = "${req.params.gender}"
        GROUP BY gender;
      `);

      res.status(200).send(result[0]);
    } catch (error) {
      res.status(400).send(error.message);
    }
  }
```

&nbsp;

---

&nbsp;

## Exercício 2

**a)**

```SQL
  /* Update Salary by Id */
  app.put('/edit/salary', editSalaryById);

  async function editSalaryById(req: Request, res: Response): Promise<any> {
    try {
      await connection
        .table('Actor')
        .update({ salary: req.body.salary })
        .where({ id: req.body.id });

      res.status(200).send(`Salary updated sucessfuly.`);
    } catch (error) {
      res.status(400).send(error.message);
    }
  }
```

&nbsp;

**b)**

```SQL
  /* Delete Actor by Id */
  app.delete('/delete/actor/', deleteActorById);

  async function deleteActorById(req: Request, res: Response): Promise<any> {
    try {
      await connection.table('Actor').del().where({ id: req.body.id });

      res.status(200).send(`Actor deleted succesfuly.`);
    } catch (error) {
      res.status(400).send(error.message);
    }
  }
```

&nbsp;

**c)**

```SQL
  /* Calculate Average Salary By Gender */
  app.get('/average/:gender', averageSalaryByGender);

  async function averageSalaryByGender(
    req: Request,
    res: Response
  ): Promise<any> {
    try {
      const result = await connection
        .table('Actor')
        .avg('salary as average_salary')
        .where({ gender: req.params.gender });

      res.status(200).send(result);
    } catch (error) {
      res.status(400).send(error.message);
    }
  }
```

&nbsp;

---

&nbsp;

## Exercício 3

**a)**

- Porque ele é passado via params no endereço http.

&nbsp;

**b)**

- O status 200 envia como resposta o retorno da função getActorById(id). O status 400 envia como resposta um objeto com uma mensagem de erro.

&nbsp;

**c)**

```SQL
  /* Count By Gender Endpoint With Query Params */
  app.get('/actor?', countByGenderWithQuery);

  async function countByGenderWithQuery(
    req: Request,
    res: Response
  ): Promise<any> {
    try {
      const result = await connection
        .table('Actor')
        .count('gender as quantity')
        .where({ gender: req.query.gender });

      res.status(200).send(result);
    } catch (error) {
      res.status(400).send({ message: error.message });
    }
  }
```

&nbsp;

---

&nbsp;

## Exercício 4

**a)**

- Igual ao Exercício 2 a.

&nbsp;

**b)**

- Igual ao Exercício 2 b.

&nbsp;

---

&nbsp;

## Exercício 5

```SQL
  /* Add Film to Table */
  app.post('/movie', addFilm);

  async function addFilm(req: Request, res: Response): Promise<any> {
    try {
      const newFilm = {
        id: req.body.id,
        title: req.body.title,
        synopsis: req.body.synopsis,
        release_date: new Date(req.body.release_date),
        score: req.body.score,
        playing_limit_date: new Date(req.body.playing_limit_date),
      };

      await connection.table('Movies').insert(newFilm);

      res.status(200).send(`Film added succesfuly.`);
    } catch (error) {
      res.status(400).send({ message: error.message });
    }
  }
```

&nbsp;

---

&nbsp;

## Exercício 6

```SQL
  /* Get All Films */
  app.get('/movie/all', getAllMovies);

  async function getAllMovies(req: Request, res: Response): Promise<any> {
    try {
      const result = await connection.table('Movies').select().limit(15);

      res.status(200).send(result);
    } catch (error) {
      res.status(400).send({ message: error.message });
    }
  }
```

&nbsp;

---

&nbsp;

## Exercício 7

```SQL
  /* Search Movie By Query Text */
  app.get('/movie/search', searchMovieByText);

  async function searchMovieByText(req: Request, res: Response): Promise<any> {
    try {
      const result = await connection.raw(`
        SELECT * FROM Movies
        WHERE title LIKE "%${req.query.text}%" OR
          synopsis LIKE "%${req.query.text}%"
      `);

      res.status(200).send(result[0]);
    } catch (error) {
      res.status(400).send({ message: error.message });
    }
  }
```
