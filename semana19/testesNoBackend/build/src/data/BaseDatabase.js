"use strict";
var __awaiter =
  (this && this.__awaiter) ||
  function (thisArg, _arguments, P, generator) {
    function adopt(value) {
      return value instanceof P
        ? value
        : new P(function (resolve) {
            resolve(value);
          });
    }
    return new (P || (P = Promise))(function (resolve, reject) {
      function fulfilled(value) {
        try {
          step(generator.next(value));
        } catch (e) {
          reject(e);
        }
      }
      function rejected(value) {
        try {
          step(generator["throw"](value));
        } catch (e) {
          reject(e);
        }
      }
      function step(result) {
        result.done
          ? resolve(result.value)
          : adopt(result.value).then(fulfilled, rejected);
      }
      step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
  };
var __importDefault =
  (this && this.__importDefault) ||
  function (mod) {
    return mod && mod.__esModule ? mod : { default: mod };
  };
Object.defineProperty(exports, "__esModule", { value: true });
exports.BaseDataBase = void 0;
const dotenv_1 = __importDefault(require("dotenv"));
const knex_1 = __importDefault(require("knex"));
dotenv_1.default.config();
let BaseDataBase = /** @class */ (() => {
  class BaseDataBase {
    getConnection() {
      if (BaseDataBase.connection === null) {
        BaseDataBase.connection = knex_1.default({
          client: "mysql",
          connection: {
            host: process.env.DB_HOST,
            port: Number(process.env.PORT || "3306"),
            user: process.env.DB_USER,
            password: process.env.DB_PASSWORD,
            database: process.env.DB_DATABASE_NAME,
          },
        });
      }
      return BaseDataBase.connection;
    }
    distroyConnection() {
      return __awaiter(this, void 0, void 0, function* () {
        if (BaseDataBase.connection) {
          yield BaseDataBase.connection.destroy();
        }
      });
    }
  }
  BaseDataBase.connection = null;
  return BaseDataBase;
})();
exports.BaseDataBase = BaseDataBase;
