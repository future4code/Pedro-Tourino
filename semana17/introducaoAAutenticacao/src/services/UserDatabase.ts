import knex from "knex";

export default class UserDatabase {
  private connection = knex({
    client: "mysql",
    connection: {
      host: process.env.DB_HOST,
      port: Number(process.env.DB_PORT || "3306"),
      user: process.env.DB_USER,
      password: process.env.DB_PASSWORD,
      database: process.env.DB_NAME,
    },
  });

  private static TABLE_NAME = "Users";

  public async createUser(
    id: string,
    email: string,
    password: string
  ): Promise<void> {
    try {
      await this.connection
        .insert({ id, email, password })
        .into(UserDatabase.TABLE_NAME);
    } catch (error) {
      throw new Error(error.message);
    }
  }

  public async getUserByEmail(email: string): Promise<any> {
    try {
      const result = await this.connection(UserDatabase.TABLE_NAME).where({
        email,
      });
      return result[0];
    } catch (error) {
      throw new Error(error.message);
    }
  }

  public async getUserById(id: string): Promise<any> {
    try {
      const result = await this.connection(UserDatabase.TABLE_NAME).where({
        id,
      });
      return result[0];
    } catch (error) {
      throw new Error(error.message);
    }
  }
}
