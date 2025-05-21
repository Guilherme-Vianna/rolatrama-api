
/**
 * Client
**/

import * as runtime from './runtime/library.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model users
 * 
 */
export type users = $Result.DefaultSelection<Prisma.$usersPayload>
/**
 * Model password_reset_tokens
 * 
 */
export type password_reset_tokens = $Result.DefaultSelection<Prisma.$password_reset_tokensPayload>
/**
 * Model towns
 * 
 */
export type towns = $Result.DefaultSelection<Prisma.$townsPayload>
/**
 * Model npcs
 * 
 */
export type npcs = $Result.DefaultSelection<Prisma.$npcsPayload>
/**
 * Model locations
 * 
 */
export type locations = $Result.DefaultSelection<Prisma.$locationsPayload>
/**
 * Model sheets
 * 
 */
export type sheets = $Result.DefaultSelection<Prisma.$sheetsPayload>

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Users
 * const users = await prisma.users.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Users
   * const users = await prisma.users.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): PrismaClient;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

  /**
   * Add a middleware
   * @deprecated since 4.16.0. For new code, prefer client extensions instead.
   * @see https://pris.ly/d/extensions
   */
  $use(cb: Prisma.Middleware): void

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;


  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>


  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.users`: Exposes CRUD operations for the **users** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.users.findMany()
    * ```
    */
  get users(): Prisma.usersDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.password_reset_tokens`: Exposes CRUD operations for the **password_reset_tokens** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Password_reset_tokens
    * const password_reset_tokens = await prisma.password_reset_tokens.findMany()
    * ```
    */
  get password_reset_tokens(): Prisma.password_reset_tokensDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.towns`: Exposes CRUD operations for the **towns** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Towns
    * const towns = await prisma.towns.findMany()
    * ```
    */
  get towns(): Prisma.townsDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.npcs`: Exposes CRUD operations for the **npcs** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Npcs
    * const npcs = await prisma.npcs.findMany()
    * ```
    */
  get npcs(): Prisma.npcsDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.locations`: Exposes CRUD operations for the **locations** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Locations
    * const locations = await prisma.locations.findMany()
    * ```
    */
  get locations(): Prisma.locationsDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.sheets`: Exposes CRUD operations for the **sheets** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Sheets
    * const sheets = await prisma.sheets.findMany()
    * ```
    */
  get sheets(): Prisma.sheetsDelegate<ExtArgs, ClientOptions>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql



  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
   * Metrics
   */
  export type Metrics = runtime.Metrics
  export type Metric<T> = runtime.Metric<T>
  export type MetricHistogram = runtime.MetricHistogram
  export type MetricHistogramBucket = runtime.MetricHistogramBucket

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 6.6.0
   * Query Engine version: f676762280b54cd07c770017ed3711ddde35f37a
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  type SelectAndOmit = {
    select: any
    omit: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
        : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? P : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    users: 'users',
    password_reset_tokens: 'password_reset_tokens',
    towns: 'towns',
    npcs: 'npcs',
    locations: 'locations',
    sheets: 'sheets'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "users" | "password_reset_tokens" | "towns" | "npcs" | "locations" | "sheets"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      users: {
        payload: Prisma.$usersPayload<ExtArgs>
        fields: Prisma.usersFieldRefs
        operations: {
          findUnique: {
            args: Prisma.usersFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usersPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.usersFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usersPayload>
          }
          findFirst: {
            args: Prisma.usersFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usersPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.usersFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usersPayload>
          }
          findMany: {
            args: Prisma.usersFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usersPayload>[]
          }
          create: {
            args: Prisma.usersCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usersPayload>
          }
          createMany: {
            args: Prisma.usersCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.usersCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usersPayload>[]
          }
          delete: {
            args: Prisma.usersDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usersPayload>
          }
          update: {
            args: Prisma.usersUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usersPayload>
          }
          deleteMany: {
            args: Prisma.usersDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.usersUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.usersUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usersPayload>[]
          }
          upsert: {
            args: Prisma.usersUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usersPayload>
          }
          aggregate: {
            args: Prisma.UsersAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUsers>
          }
          groupBy: {
            args: Prisma.usersGroupByArgs<ExtArgs>
            result: $Utils.Optional<UsersGroupByOutputType>[]
          }
          count: {
            args: Prisma.usersCountArgs<ExtArgs>
            result: $Utils.Optional<UsersCountAggregateOutputType> | number
          }
        }
      }
      password_reset_tokens: {
        payload: Prisma.$password_reset_tokensPayload<ExtArgs>
        fields: Prisma.password_reset_tokensFieldRefs
        operations: {
          findUnique: {
            args: Prisma.password_reset_tokensFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$password_reset_tokensPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.password_reset_tokensFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$password_reset_tokensPayload>
          }
          findFirst: {
            args: Prisma.password_reset_tokensFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$password_reset_tokensPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.password_reset_tokensFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$password_reset_tokensPayload>
          }
          findMany: {
            args: Prisma.password_reset_tokensFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$password_reset_tokensPayload>[]
          }
          create: {
            args: Prisma.password_reset_tokensCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$password_reset_tokensPayload>
          }
          createMany: {
            args: Prisma.password_reset_tokensCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.password_reset_tokensCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$password_reset_tokensPayload>[]
          }
          delete: {
            args: Prisma.password_reset_tokensDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$password_reset_tokensPayload>
          }
          update: {
            args: Prisma.password_reset_tokensUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$password_reset_tokensPayload>
          }
          deleteMany: {
            args: Prisma.password_reset_tokensDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.password_reset_tokensUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.password_reset_tokensUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$password_reset_tokensPayload>[]
          }
          upsert: {
            args: Prisma.password_reset_tokensUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$password_reset_tokensPayload>
          }
          aggregate: {
            args: Prisma.Password_reset_tokensAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregatePassword_reset_tokens>
          }
          groupBy: {
            args: Prisma.password_reset_tokensGroupByArgs<ExtArgs>
            result: $Utils.Optional<Password_reset_tokensGroupByOutputType>[]
          }
          count: {
            args: Prisma.password_reset_tokensCountArgs<ExtArgs>
            result: $Utils.Optional<Password_reset_tokensCountAggregateOutputType> | number
          }
        }
      }
      towns: {
        payload: Prisma.$townsPayload<ExtArgs>
        fields: Prisma.townsFieldRefs
        operations: {
          findUnique: {
            args: Prisma.townsFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$townsPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.townsFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$townsPayload>
          }
          findFirst: {
            args: Prisma.townsFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$townsPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.townsFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$townsPayload>
          }
          findMany: {
            args: Prisma.townsFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$townsPayload>[]
          }
          create: {
            args: Prisma.townsCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$townsPayload>
          }
          createMany: {
            args: Prisma.townsCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.townsCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$townsPayload>[]
          }
          delete: {
            args: Prisma.townsDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$townsPayload>
          }
          update: {
            args: Prisma.townsUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$townsPayload>
          }
          deleteMany: {
            args: Prisma.townsDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.townsUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.townsUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$townsPayload>[]
          }
          upsert: {
            args: Prisma.townsUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$townsPayload>
          }
          aggregate: {
            args: Prisma.TownsAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateTowns>
          }
          groupBy: {
            args: Prisma.townsGroupByArgs<ExtArgs>
            result: $Utils.Optional<TownsGroupByOutputType>[]
          }
          count: {
            args: Prisma.townsCountArgs<ExtArgs>
            result: $Utils.Optional<TownsCountAggregateOutputType> | number
          }
        }
      }
      npcs: {
        payload: Prisma.$npcsPayload<ExtArgs>
        fields: Prisma.npcsFieldRefs
        operations: {
          findUnique: {
            args: Prisma.npcsFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$npcsPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.npcsFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$npcsPayload>
          }
          findFirst: {
            args: Prisma.npcsFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$npcsPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.npcsFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$npcsPayload>
          }
          findMany: {
            args: Prisma.npcsFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$npcsPayload>[]
          }
          create: {
            args: Prisma.npcsCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$npcsPayload>
          }
          createMany: {
            args: Prisma.npcsCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.npcsCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$npcsPayload>[]
          }
          delete: {
            args: Prisma.npcsDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$npcsPayload>
          }
          update: {
            args: Prisma.npcsUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$npcsPayload>
          }
          deleteMany: {
            args: Prisma.npcsDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.npcsUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.npcsUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$npcsPayload>[]
          }
          upsert: {
            args: Prisma.npcsUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$npcsPayload>
          }
          aggregate: {
            args: Prisma.NpcsAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateNpcs>
          }
          groupBy: {
            args: Prisma.npcsGroupByArgs<ExtArgs>
            result: $Utils.Optional<NpcsGroupByOutputType>[]
          }
          count: {
            args: Prisma.npcsCountArgs<ExtArgs>
            result: $Utils.Optional<NpcsCountAggregateOutputType> | number
          }
        }
      }
      locations: {
        payload: Prisma.$locationsPayload<ExtArgs>
        fields: Prisma.locationsFieldRefs
        operations: {
          findUnique: {
            args: Prisma.locationsFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$locationsPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.locationsFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$locationsPayload>
          }
          findFirst: {
            args: Prisma.locationsFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$locationsPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.locationsFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$locationsPayload>
          }
          findMany: {
            args: Prisma.locationsFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$locationsPayload>[]
          }
          create: {
            args: Prisma.locationsCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$locationsPayload>
          }
          createMany: {
            args: Prisma.locationsCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.locationsCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$locationsPayload>[]
          }
          delete: {
            args: Prisma.locationsDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$locationsPayload>
          }
          update: {
            args: Prisma.locationsUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$locationsPayload>
          }
          deleteMany: {
            args: Prisma.locationsDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.locationsUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.locationsUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$locationsPayload>[]
          }
          upsert: {
            args: Prisma.locationsUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$locationsPayload>
          }
          aggregate: {
            args: Prisma.LocationsAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateLocations>
          }
          groupBy: {
            args: Prisma.locationsGroupByArgs<ExtArgs>
            result: $Utils.Optional<LocationsGroupByOutputType>[]
          }
          count: {
            args: Prisma.locationsCountArgs<ExtArgs>
            result: $Utils.Optional<LocationsCountAggregateOutputType> | number
          }
        }
      }
      sheets: {
        payload: Prisma.$sheetsPayload<ExtArgs>
        fields: Prisma.sheetsFieldRefs
        operations: {
          findUnique: {
            args: Prisma.sheetsFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$sheetsPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.sheetsFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$sheetsPayload>
          }
          findFirst: {
            args: Prisma.sheetsFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$sheetsPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.sheetsFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$sheetsPayload>
          }
          findMany: {
            args: Prisma.sheetsFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$sheetsPayload>[]
          }
          create: {
            args: Prisma.sheetsCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$sheetsPayload>
          }
          createMany: {
            args: Prisma.sheetsCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.sheetsCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$sheetsPayload>[]
          }
          delete: {
            args: Prisma.sheetsDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$sheetsPayload>
          }
          update: {
            args: Prisma.sheetsUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$sheetsPayload>
          }
          deleteMany: {
            args: Prisma.sheetsDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.sheetsUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.sheetsUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$sheetsPayload>[]
          }
          upsert: {
            args: Prisma.sheetsUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$sheetsPayload>
          }
          aggregate: {
            args: Prisma.SheetsAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateSheets>
          }
          groupBy: {
            args: Prisma.sheetsGroupByArgs<ExtArgs>
            result: $Utils.Optional<SheetsGroupByOutputType>[]
          }
          count: {
            args: Prisma.sheetsCountArgs<ExtArgs>
            result: $Utils.Optional<SheetsCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Defaults to stdout
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events
     * log: [
     *   { emit: 'stdout', level: 'query' },
     *   { emit: 'stdout', level: 'info' },
     *   { emit: 'stdout', level: 'warn' }
     *   { emit: 'stdout', level: 'error' }
     * ]
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
    /**
     * Global configuration for omitting model fields by default.
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   omit: {
     *     user: {
     *       password: true
     *     }
     *   }
     * })
     * ```
     */
    omit?: Prisma.GlobalOmitConfig
  }
  export type GlobalOmitConfig = {
    users?: usersOmit
    password_reset_tokens?: password_reset_tokensOmit
    towns?: townsOmit
    npcs?: npcsOmit
    locations?: locationsOmit
    sheets?: sheetsOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type GetLogType<T extends LogLevel | LogDefinition> = T extends LogDefinition ? T['emit'] extends 'event' ? T['level'] : never : never
  export type GetEvents<T extends any> = T extends Array<LogLevel | LogDefinition> ?
    GetLogType<T[0]> | GetLogType<T[1]> | GetLogType<T[2]> | GetLogType<T[3]>
    : never

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'updateManyAndReturn'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  /**
   * These options are being passed into the middleware as "params"
   */
  export type MiddlewareParams = {
    model?: ModelName
    action: PrismaAction
    args: any
    dataPath: string[]
    runInTransaction: boolean
  }

  /**
   * The `T` type makes sure, that the `return proceed` is not forgotten in the middleware implementation
   */
  export type Middleware<T = any> = (
    params: MiddlewareParams,
    next: (params: MiddlewareParams) => $Utils.JsPromise<T>,
  ) => $Utils.JsPromise<T>

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type UsersCountOutputType
   */

  export type UsersCountOutputType = {
    PasswordResetToken: number
  }

  export type UsersCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    PasswordResetToken?: boolean | UsersCountOutputTypeCountPasswordResetTokenArgs
  }

  // Custom InputTypes
  /**
   * UsersCountOutputType without action
   */
  export type UsersCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UsersCountOutputType
     */
    select?: UsersCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * UsersCountOutputType without action
   */
  export type UsersCountOutputTypeCountPasswordResetTokenArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: password_reset_tokensWhereInput
  }


  /**
   * Count Type TownsCountOutputType
   */

  export type TownsCountOutputType = {
    locations: number
    npcs: number
  }

  export type TownsCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    locations?: boolean | TownsCountOutputTypeCountLocationsArgs
    npcs?: boolean | TownsCountOutputTypeCountNpcsArgs
  }

  // Custom InputTypes
  /**
   * TownsCountOutputType without action
   */
  export type TownsCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TownsCountOutputType
     */
    select?: TownsCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * TownsCountOutputType without action
   */
  export type TownsCountOutputTypeCountLocationsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: locationsWhereInput
  }

  /**
   * TownsCountOutputType without action
   */
  export type TownsCountOutputTypeCountNpcsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: npcsWhereInput
  }


  /**
   * Models
   */

  /**
   * Model users
   */

  export type AggregateUsers = {
    _count: UsersCountAggregateOutputType | null
    _avg: UsersAvgAggregateOutputType | null
    _sum: UsersSumAggregateOutputType | null
    _min: UsersMinAggregateOutputType | null
    _max: UsersMaxAggregateOutputType | null
  }

  export type UsersAvgAggregateOutputType = {
    id: number | null
  }

  export type UsersSumAggregateOutputType = {
    id: number | null
  }

  export type UsersMinAggregateOutputType = {
    id: number | null
    email: string | null
    password: string | null
    name: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UsersMaxAggregateOutputType = {
    id: number | null
    email: string | null
    password: string | null
    name: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UsersCountAggregateOutputType = {
    id: number
    email: number
    password: number
    name: number
    recoveryTokens: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type UsersAvgAggregateInputType = {
    id?: true
  }

  export type UsersSumAggregateInputType = {
    id?: true
  }

  export type UsersMinAggregateInputType = {
    id?: true
    email?: true
    password?: true
    name?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UsersMaxAggregateInputType = {
    id?: true
    email?: true
    password?: true
    name?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UsersCountAggregateInputType = {
    id?: true
    email?: true
    password?: true
    name?: true
    recoveryTokens?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type UsersAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which users to aggregate.
     */
    where?: usersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of users to fetch.
     */
    orderBy?: usersOrderByWithRelationInput | usersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: usersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned users
    **/
    _count?: true | UsersCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: UsersAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: UsersSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UsersMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UsersMaxAggregateInputType
  }

  export type GetUsersAggregateType<T extends UsersAggregateArgs> = {
        [P in keyof T & keyof AggregateUsers]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUsers[P]>
      : GetScalarType<T[P], AggregateUsers[P]>
  }




  export type usersGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: usersWhereInput
    orderBy?: usersOrderByWithAggregationInput | usersOrderByWithAggregationInput[]
    by: UsersScalarFieldEnum[] | UsersScalarFieldEnum
    having?: usersScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UsersCountAggregateInputType | true
    _avg?: UsersAvgAggregateInputType
    _sum?: UsersSumAggregateInputType
    _min?: UsersMinAggregateInputType
    _max?: UsersMaxAggregateInputType
  }

  export type UsersGroupByOutputType = {
    id: number
    email: string
    password: string
    name: string
    recoveryTokens: string[]
    createdAt: Date
    updatedAt: Date
    _count: UsersCountAggregateOutputType | null
    _avg: UsersAvgAggregateOutputType | null
    _sum: UsersSumAggregateOutputType | null
    _min: UsersMinAggregateOutputType | null
    _max: UsersMaxAggregateOutputType | null
  }

  type GetUsersGroupByPayload<T extends usersGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UsersGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UsersGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UsersGroupByOutputType[P]>
            : GetScalarType<T[P], UsersGroupByOutputType[P]>
        }
      >
    >


  export type usersSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    password?: boolean
    name?: boolean
    recoveryTokens?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    PasswordResetToken?: boolean | users$PasswordResetTokenArgs<ExtArgs>
    _count?: boolean | UsersCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["users"]>

  export type usersSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    password?: boolean
    name?: boolean
    recoveryTokens?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["users"]>

  export type usersSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    password?: boolean
    name?: boolean
    recoveryTokens?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["users"]>

  export type usersSelectScalar = {
    id?: boolean
    email?: boolean
    password?: boolean
    name?: boolean
    recoveryTokens?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type usersOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "email" | "password" | "name" | "recoveryTokens" | "createdAt" | "updatedAt", ExtArgs["result"]["users"]>
  export type usersInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    PasswordResetToken?: boolean | users$PasswordResetTokenArgs<ExtArgs>
    _count?: boolean | UsersCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type usersIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type usersIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $usersPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "users"
    objects: {
      PasswordResetToken: Prisma.$password_reset_tokensPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      email: string
      password: string
      name: string
      recoveryTokens: string[]
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["users"]>
    composites: {}
  }

  type usersGetPayload<S extends boolean | null | undefined | usersDefaultArgs> = $Result.GetResult<Prisma.$usersPayload, S>

  type usersCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<usersFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UsersCountAggregateInputType | true
    }

  export interface usersDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['users'], meta: { name: 'users' } }
    /**
     * Find zero or one Users that matches the filter.
     * @param {usersFindUniqueArgs} args - Arguments to find a Users
     * @example
     * // Get one Users
     * const users = await prisma.users.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends usersFindUniqueArgs>(args: SelectSubset<T, usersFindUniqueArgs<ExtArgs>>): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Users that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {usersFindUniqueOrThrowArgs} args - Arguments to find a Users
     * @example
     * // Get one Users
     * const users = await prisma.users.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends usersFindUniqueOrThrowArgs>(args: SelectSubset<T, usersFindUniqueOrThrowArgs<ExtArgs>>): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {usersFindFirstArgs} args - Arguments to find a Users
     * @example
     * // Get one Users
     * const users = await prisma.users.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends usersFindFirstArgs>(args?: SelectSubset<T, usersFindFirstArgs<ExtArgs>>): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Users that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {usersFindFirstOrThrowArgs} args - Arguments to find a Users
     * @example
     * // Get one Users
     * const users = await prisma.users.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends usersFindFirstOrThrowArgs>(args?: SelectSubset<T, usersFindFirstOrThrowArgs<ExtArgs>>): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {usersFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Users
     * const users = await prisma.users.findMany()
     * 
     * // Get first 10 Users
     * const users = await prisma.users.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const usersWithIdOnly = await prisma.users.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends usersFindManyArgs>(args?: SelectSubset<T, usersFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Users.
     * @param {usersCreateArgs} args - Arguments to create a Users.
     * @example
     * // Create one Users
     * const Users = await prisma.users.create({
     *   data: {
     *     // ... data to create a Users
     *   }
     * })
     * 
     */
    create<T extends usersCreateArgs>(args: SelectSubset<T, usersCreateArgs<ExtArgs>>): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Users.
     * @param {usersCreateManyArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const users = await prisma.users.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends usersCreateManyArgs>(args?: SelectSubset<T, usersCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Users and returns the data saved in the database.
     * @param {usersCreateManyAndReturnArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const users = await prisma.users.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Users and only return the `id`
     * const usersWithIdOnly = await prisma.users.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends usersCreateManyAndReturnArgs>(args?: SelectSubset<T, usersCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Users.
     * @param {usersDeleteArgs} args - Arguments to delete one Users.
     * @example
     * // Delete one Users
     * const Users = await prisma.users.delete({
     *   where: {
     *     // ... filter to delete one Users
     *   }
     * })
     * 
     */
    delete<T extends usersDeleteArgs>(args: SelectSubset<T, usersDeleteArgs<ExtArgs>>): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Users.
     * @param {usersUpdateArgs} args - Arguments to update one Users.
     * @example
     * // Update one Users
     * const users = await prisma.users.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends usersUpdateArgs>(args: SelectSubset<T, usersUpdateArgs<ExtArgs>>): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Users.
     * @param {usersDeleteManyArgs} args - Arguments to filter Users to delete.
     * @example
     * // Delete a few Users
     * const { count } = await prisma.users.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends usersDeleteManyArgs>(args?: SelectSubset<T, usersDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {usersUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Users
     * const users = await prisma.users.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends usersUpdateManyArgs>(args: SelectSubset<T, usersUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users and returns the data updated in the database.
     * @param {usersUpdateManyAndReturnArgs} args - Arguments to update many Users.
     * @example
     * // Update many Users
     * const users = await prisma.users.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Users and only return the `id`
     * const usersWithIdOnly = await prisma.users.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends usersUpdateManyAndReturnArgs>(args: SelectSubset<T, usersUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Users.
     * @param {usersUpsertArgs} args - Arguments to update or create a Users.
     * @example
     * // Update or create a Users
     * const users = await prisma.users.upsert({
     *   create: {
     *     // ... data to create a Users
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Users we want to update
     *   }
     * })
     */
    upsert<T extends usersUpsertArgs>(args: SelectSubset<T, usersUpsertArgs<ExtArgs>>): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {usersCountArgs} args - Arguments to filter Users to count.
     * @example
     * // Count the number of Users
     * const count = await prisma.users.count({
     *   where: {
     *     // ... the filter for the Users we want to count
     *   }
     * })
    **/
    count<T extends usersCountArgs>(
      args?: Subset<T, usersCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UsersCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsersAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends UsersAggregateArgs>(args: Subset<T, UsersAggregateArgs>): Prisma.PrismaPromise<GetUsersAggregateType<T>>

    /**
     * Group by Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {usersGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends usersGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: usersGroupByArgs['orderBy'] }
        : { orderBy?: usersGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, usersGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUsersGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the users model
   */
  readonly fields: usersFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for users.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__usersClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    PasswordResetToken<T extends users$PasswordResetTokenArgs<ExtArgs> = {}>(args?: Subset<T, users$PasswordResetTokenArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$password_reset_tokensPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the users model
   */
  interface usersFieldRefs {
    readonly id: FieldRef<"users", 'Int'>
    readonly email: FieldRef<"users", 'String'>
    readonly password: FieldRef<"users", 'String'>
    readonly name: FieldRef<"users", 'String'>
    readonly recoveryTokens: FieldRef<"users", 'String[]'>
    readonly createdAt: FieldRef<"users", 'DateTime'>
    readonly updatedAt: FieldRef<"users", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * users findUnique
   */
  export type usersFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the users
     */
    omit?: usersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usersInclude<ExtArgs> | null
    /**
     * Filter, which users to fetch.
     */
    where: usersWhereUniqueInput
  }

  /**
   * users findUniqueOrThrow
   */
  export type usersFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the users
     */
    omit?: usersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usersInclude<ExtArgs> | null
    /**
     * Filter, which users to fetch.
     */
    where: usersWhereUniqueInput
  }

  /**
   * users findFirst
   */
  export type usersFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the users
     */
    omit?: usersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usersInclude<ExtArgs> | null
    /**
     * Filter, which users to fetch.
     */
    where?: usersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of users to fetch.
     */
    orderBy?: usersOrderByWithRelationInput | usersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for users.
     */
    cursor?: usersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of users.
     */
    distinct?: UsersScalarFieldEnum | UsersScalarFieldEnum[]
  }

  /**
   * users findFirstOrThrow
   */
  export type usersFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the users
     */
    omit?: usersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usersInclude<ExtArgs> | null
    /**
     * Filter, which users to fetch.
     */
    where?: usersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of users to fetch.
     */
    orderBy?: usersOrderByWithRelationInput | usersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for users.
     */
    cursor?: usersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of users.
     */
    distinct?: UsersScalarFieldEnum | UsersScalarFieldEnum[]
  }

  /**
   * users findMany
   */
  export type usersFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the users
     */
    omit?: usersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usersInclude<ExtArgs> | null
    /**
     * Filter, which users to fetch.
     */
    where?: usersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of users to fetch.
     */
    orderBy?: usersOrderByWithRelationInput | usersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing users.
     */
    cursor?: usersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` users.
     */
    skip?: number
    distinct?: UsersScalarFieldEnum | UsersScalarFieldEnum[]
  }

  /**
   * users create
   */
  export type usersCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the users
     */
    omit?: usersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usersInclude<ExtArgs> | null
    /**
     * The data needed to create a users.
     */
    data: XOR<usersCreateInput, usersUncheckedCreateInput>
  }

  /**
   * users createMany
   */
  export type usersCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many users.
     */
    data: usersCreateManyInput | usersCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * users createManyAndReturn
   */
  export type usersCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the users
     */
    omit?: usersOmit<ExtArgs> | null
    /**
     * The data used to create many users.
     */
    data: usersCreateManyInput | usersCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * users update
   */
  export type usersUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the users
     */
    omit?: usersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usersInclude<ExtArgs> | null
    /**
     * The data needed to update a users.
     */
    data: XOR<usersUpdateInput, usersUncheckedUpdateInput>
    /**
     * Choose, which users to update.
     */
    where: usersWhereUniqueInput
  }

  /**
   * users updateMany
   */
  export type usersUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update users.
     */
    data: XOR<usersUpdateManyMutationInput, usersUncheckedUpdateManyInput>
    /**
     * Filter which users to update
     */
    where?: usersWhereInput
    /**
     * Limit how many users to update.
     */
    limit?: number
  }

  /**
   * users updateManyAndReturn
   */
  export type usersUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the users
     */
    omit?: usersOmit<ExtArgs> | null
    /**
     * The data used to update users.
     */
    data: XOR<usersUpdateManyMutationInput, usersUncheckedUpdateManyInput>
    /**
     * Filter which users to update
     */
    where?: usersWhereInput
    /**
     * Limit how many users to update.
     */
    limit?: number
  }

  /**
   * users upsert
   */
  export type usersUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the users
     */
    omit?: usersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usersInclude<ExtArgs> | null
    /**
     * The filter to search for the users to update in case it exists.
     */
    where: usersWhereUniqueInput
    /**
     * In case the users found by the `where` argument doesn't exist, create a new users with this data.
     */
    create: XOR<usersCreateInput, usersUncheckedCreateInput>
    /**
     * In case the users was found with the provided `where` argument, update it with this data.
     */
    update: XOR<usersUpdateInput, usersUncheckedUpdateInput>
  }

  /**
   * users delete
   */
  export type usersDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the users
     */
    omit?: usersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usersInclude<ExtArgs> | null
    /**
     * Filter which users to delete.
     */
    where: usersWhereUniqueInput
  }

  /**
   * users deleteMany
   */
  export type usersDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which users to delete
     */
    where?: usersWhereInput
    /**
     * Limit how many users to delete.
     */
    limit?: number
  }

  /**
   * users.PasswordResetToken
   */
  export type users$PasswordResetTokenArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the password_reset_tokens
     */
    select?: password_reset_tokensSelect<ExtArgs> | null
    /**
     * Omit specific fields from the password_reset_tokens
     */
    omit?: password_reset_tokensOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: password_reset_tokensInclude<ExtArgs> | null
    where?: password_reset_tokensWhereInput
    orderBy?: password_reset_tokensOrderByWithRelationInput | password_reset_tokensOrderByWithRelationInput[]
    cursor?: password_reset_tokensWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Password_reset_tokensScalarFieldEnum | Password_reset_tokensScalarFieldEnum[]
  }

  /**
   * users without action
   */
  export type usersDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the users
     */
    omit?: usersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usersInclude<ExtArgs> | null
  }


  /**
   * Model password_reset_tokens
   */

  export type AggregatePassword_reset_tokens = {
    _count: Password_reset_tokensCountAggregateOutputType | null
    _avg: Password_reset_tokensAvgAggregateOutputType | null
    _sum: Password_reset_tokensSumAggregateOutputType | null
    _min: Password_reset_tokensMinAggregateOutputType | null
    _max: Password_reset_tokensMaxAggregateOutputType | null
  }

  export type Password_reset_tokensAvgAggregateOutputType = {
    id: number | null
    userId: number | null
  }

  export type Password_reset_tokensSumAggregateOutputType = {
    id: number | null
    userId: number | null
  }

  export type Password_reset_tokensMinAggregateOutputType = {
    id: number | null
    token: string | null
    userId: number | null
    expiresAt: Date | null
    createdAt: Date | null
  }

  export type Password_reset_tokensMaxAggregateOutputType = {
    id: number | null
    token: string | null
    userId: number | null
    expiresAt: Date | null
    createdAt: Date | null
  }

  export type Password_reset_tokensCountAggregateOutputType = {
    id: number
    token: number
    userId: number
    expiresAt: number
    createdAt: number
    _all: number
  }


  export type Password_reset_tokensAvgAggregateInputType = {
    id?: true
    userId?: true
  }

  export type Password_reset_tokensSumAggregateInputType = {
    id?: true
    userId?: true
  }

  export type Password_reset_tokensMinAggregateInputType = {
    id?: true
    token?: true
    userId?: true
    expiresAt?: true
    createdAt?: true
  }

  export type Password_reset_tokensMaxAggregateInputType = {
    id?: true
    token?: true
    userId?: true
    expiresAt?: true
    createdAt?: true
  }

  export type Password_reset_tokensCountAggregateInputType = {
    id?: true
    token?: true
    userId?: true
    expiresAt?: true
    createdAt?: true
    _all?: true
  }

  export type Password_reset_tokensAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which password_reset_tokens to aggregate.
     */
    where?: password_reset_tokensWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of password_reset_tokens to fetch.
     */
    orderBy?: password_reset_tokensOrderByWithRelationInput | password_reset_tokensOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: password_reset_tokensWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` password_reset_tokens from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` password_reset_tokens.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned password_reset_tokens
    **/
    _count?: true | Password_reset_tokensCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: Password_reset_tokensAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: Password_reset_tokensSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Password_reset_tokensMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Password_reset_tokensMaxAggregateInputType
  }

  export type GetPassword_reset_tokensAggregateType<T extends Password_reset_tokensAggregateArgs> = {
        [P in keyof T & keyof AggregatePassword_reset_tokens]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePassword_reset_tokens[P]>
      : GetScalarType<T[P], AggregatePassword_reset_tokens[P]>
  }




  export type password_reset_tokensGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: password_reset_tokensWhereInput
    orderBy?: password_reset_tokensOrderByWithAggregationInput | password_reset_tokensOrderByWithAggregationInput[]
    by: Password_reset_tokensScalarFieldEnum[] | Password_reset_tokensScalarFieldEnum
    having?: password_reset_tokensScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Password_reset_tokensCountAggregateInputType | true
    _avg?: Password_reset_tokensAvgAggregateInputType
    _sum?: Password_reset_tokensSumAggregateInputType
    _min?: Password_reset_tokensMinAggregateInputType
    _max?: Password_reset_tokensMaxAggregateInputType
  }

  export type Password_reset_tokensGroupByOutputType = {
    id: number
    token: string
    userId: number
    expiresAt: Date
    createdAt: Date
    _count: Password_reset_tokensCountAggregateOutputType | null
    _avg: Password_reset_tokensAvgAggregateOutputType | null
    _sum: Password_reset_tokensSumAggregateOutputType | null
    _min: Password_reset_tokensMinAggregateOutputType | null
    _max: Password_reset_tokensMaxAggregateOutputType | null
  }

  type GetPassword_reset_tokensGroupByPayload<T extends password_reset_tokensGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<Password_reset_tokensGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof Password_reset_tokensGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Password_reset_tokensGroupByOutputType[P]>
            : GetScalarType<T[P], Password_reset_tokensGroupByOutputType[P]>
        }
      >
    >


  export type password_reset_tokensSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    token?: boolean
    userId?: boolean
    expiresAt?: boolean
    createdAt?: boolean
    user?: boolean | usersDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["password_reset_tokens"]>

  export type password_reset_tokensSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    token?: boolean
    userId?: boolean
    expiresAt?: boolean
    createdAt?: boolean
    user?: boolean | usersDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["password_reset_tokens"]>

  export type password_reset_tokensSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    token?: boolean
    userId?: boolean
    expiresAt?: boolean
    createdAt?: boolean
    user?: boolean | usersDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["password_reset_tokens"]>

  export type password_reset_tokensSelectScalar = {
    id?: boolean
    token?: boolean
    userId?: boolean
    expiresAt?: boolean
    createdAt?: boolean
  }

  export type password_reset_tokensOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "token" | "userId" | "expiresAt" | "createdAt", ExtArgs["result"]["password_reset_tokens"]>
  export type password_reset_tokensInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | usersDefaultArgs<ExtArgs>
  }
  export type password_reset_tokensIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | usersDefaultArgs<ExtArgs>
  }
  export type password_reset_tokensIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | usersDefaultArgs<ExtArgs>
  }

  export type $password_reset_tokensPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "password_reset_tokens"
    objects: {
      user: Prisma.$usersPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      token: string
      userId: number
      expiresAt: Date
      createdAt: Date
    }, ExtArgs["result"]["password_reset_tokens"]>
    composites: {}
  }

  type password_reset_tokensGetPayload<S extends boolean | null | undefined | password_reset_tokensDefaultArgs> = $Result.GetResult<Prisma.$password_reset_tokensPayload, S>

  type password_reset_tokensCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<password_reset_tokensFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: Password_reset_tokensCountAggregateInputType | true
    }

  export interface password_reset_tokensDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['password_reset_tokens'], meta: { name: 'password_reset_tokens' } }
    /**
     * Find zero or one Password_reset_tokens that matches the filter.
     * @param {password_reset_tokensFindUniqueArgs} args - Arguments to find a Password_reset_tokens
     * @example
     * // Get one Password_reset_tokens
     * const password_reset_tokens = await prisma.password_reset_tokens.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends password_reset_tokensFindUniqueArgs>(args: SelectSubset<T, password_reset_tokensFindUniqueArgs<ExtArgs>>): Prisma__password_reset_tokensClient<$Result.GetResult<Prisma.$password_reset_tokensPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Password_reset_tokens that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {password_reset_tokensFindUniqueOrThrowArgs} args - Arguments to find a Password_reset_tokens
     * @example
     * // Get one Password_reset_tokens
     * const password_reset_tokens = await prisma.password_reset_tokens.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends password_reset_tokensFindUniqueOrThrowArgs>(args: SelectSubset<T, password_reset_tokensFindUniqueOrThrowArgs<ExtArgs>>): Prisma__password_reset_tokensClient<$Result.GetResult<Prisma.$password_reset_tokensPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Password_reset_tokens that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {password_reset_tokensFindFirstArgs} args - Arguments to find a Password_reset_tokens
     * @example
     * // Get one Password_reset_tokens
     * const password_reset_tokens = await prisma.password_reset_tokens.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends password_reset_tokensFindFirstArgs>(args?: SelectSubset<T, password_reset_tokensFindFirstArgs<ExtArgs>>): Prisma__password_reset_tokensClient<$Result.GetResult<Prisma.$password_reset_tokensPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Password_reset_tokens that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {password_reset_tokensFindFirstOrThrowArgs} args - Arguments to find a Password_reset_tokens
     * @example
     * // Get one Password_reset_tokens
     * const password_reset_tokens = await prisma.password_reset_tokens.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends password_reset_tokensFindFirstOrThrowArgs>(args?: SelectSubset<T, password_reset_tokensFindFirstOrThrowArgs<ExtArgs>>): Prisma__password_reset_tokensClient<$Result.GetResult<Prisma.$password_reset_tokensPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Password_reset_tokens that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {password_reset_tokensFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Password_reset_tokens
     * const password_reset_tokens = await prisma.password_reset_tokens.findMany()
     * 
     * // Get first 10 Password_reset_tokens
     * const password_reset_tokens = await prisma.password_reset_tokens.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const password_reset_tokensWithIdOnly = await prisma.password_reset_tokens.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends password_reset_tokensFindManyArgs>(args?: SelectSubset<T, password_reset_tokensFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$password_reset_tokensPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Password_reset_tokens.
     * @param {password_reset_tokensCreateArgs} args - Arguments to create a Password_reset_tokens.
     * @example
     * // Create one Password_reset_tokens
     * const Password_reset_tokens = await prisma.password_reset_tokens.create({
     *   data: {
     *     // ... data to create a Password_reset_tokens
     *   }
     * })
     * 
     */
    create<T extends password_reset_tokensCreateArgs>(args: SelectSubset<T, password_reset_tokensCreateArgs<ExtArgs>>): Prisma__password_reset_tokensClient<$Result.GetResult<Prisma.$password_reset_tokensPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Password_reset_tokens.
     * @param {password_reset_tokensCreateManyArgs} args - Arguments to create many Password_reset_tokens.
     * @example
     * // Create many Password_reset_tokens
     * const password_reset_tokens = await prisma.password_reset_tokens.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends password_reset_tokensCreateManyArgs>(args?: SelectSubset<T, password_reset_tokensCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Password_reset_tokens and returns the data saved in the database.
     * @param {password_reset_tokensCreateManyAndReturnArgs} args - Arguments to create many Password_reset_tokens.
     * @example
     * // Create many Password_reset_tokens
     * const password_reset_tokens = await prisma.password_reset_tokens.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Password_reset_tokens and only return the `id`
     * const password_reset_tokensWithIdOnly = await prisma.password_reset_tokens.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends password_reset_tokensCreateManyAndReturnArgs>(args?: SelectSubset<T, password_reset_tokensCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$password_reset_tokensPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Password_reset_tokens.
     * @param {password_reset_tokensDeleteArgs} args - Arguments to delete one Password_reset_tokens.
     * @example
     * // Delete one Password_reset_tokens
     * const Password_reset_tokens = await prisma.password_reset_tokens.delete({
     *   where: {
     *     // ... filter to delete one Password_reset_tokens
     *   }
     * })
     * 
     */
    delete<T extends password_reset_tokensDeleteArgs>(args: SelectSubset<T, password_reset_tokensDeleteArgs<ExtArgs>>): Prisma__password_reset_tokensClient<$Result.GetResult<Prisma.$password_reset_tokensPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Password_reset_tokens.
     * @param {password_reset_tokensUpdateArgs} args - Arguments to update one Password_reset_tokens.
     * @example
     * // Update one Password_reset_tokens
     * const password_reset_tokens = await prisma.password_reset_tokens.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends password_reset_tokensUpdateArgs>(args: SelectSubset<T, password_reset_tokensUpdateArgs<ExtArgs>>): Prisma__password_reset_tokensClient<$Result.GetResult<Prisma.$password_reset_tokensPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Password_reset_tokens.
     * @param {password_reset_tokensDeleteManyArgs} args - Arguments to filter Password_reset_tokens to delete.
     * @example
     * // Delete a few Password_reset_tokens
     * const { count } = await prisma.password_reset_tokens.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends password_reset_tokensDeleteManyArgs>(args?: SelectSubset<T, password_reset_tokensDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Password_reset_tokens.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {password_reset_tokensUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Password_reset_tokens
     * const password_reset_tokens = await prisma.password_reset_tokens.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends password_reset_tokensUpdateManyArgs>(args: SelectSubset<T, password_reset_tokensUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Password_reset_tokens and returns the data updated in the database.
     * @param {password_reset_tokensUpdateManyAndReturnArgs} args - Arguments to update many Password_reset_tokens.
     * @example
     * // Update many Password_reset_tokens
     * const password_reset_tokens = await prisma.password_reset_tokens.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Password_reset_tokens and only return the `id`
     * const password_reset_tokensWithIdOnly = await prisma.password_reset_tokens.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends password_reset_tokensUpdateManyAndReturnArgs>(args: SelectSubset<T, password_reset_tokensUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$password_reset_tokensPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Password_reset_tokens.
     * @param {password_reset_tokensUpsertArgs} args - Arguments to update or create a Password_reset_tokens.
     * @example
     * // Update or create a Password_reset_tokens
     * const password_reset_tokens = await prisma.password_reset_tokens.upsert({
     *   create: {
     *     // ... data to create a Password_reset_tokens
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Password_reset_tokens we want to update
     *   }
     * })
     */
    upsert<T extends password_reset_tokensUpsertArgs>(args: SelectSubset<T, password_reset_tokensUpsertArgs<ExtArgs>>): Prisma__password_reset_tokensClient<$Result.GetResult<Prisma.$password_reset_tokensPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Password_reset_tokens.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {password_reset_tokensCountArgs} args - Arguments to filter Password_reset_tokens to count.
     * @example
     * // Count the number of Password_reset_tokens
     * const count = await prisma.password_reset_tokens.count({
     *   where: {
     *     // ... the filter for the Password_reset_tokens we want to count
     *   }
     * })
    **/
    count<T extends password_reset_tokensCountArgs>(
      args?: Subset<T, password_reset_tokensCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Password_reset_tokensCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Password_reset_tokens.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Password_reset_tokensAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends Password_reset_tokensAggregateArgs>(args: Subset<T, Password_reset_tokensAggregateArgs>): Prisma.PrismaPromise<GetPassword_reset_tokensAggregateType<T>>

    /**
     * Group by Password_reset_tokens.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {password_reset_tokensGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends password_reset_tokensGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: password_reset_tokensGroupByArgs['orderBy'] }
        : { orderBy?: password_reset_tokensGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, password_reset_tokensGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPassword_reset_tokensGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the password_reset_tokens model
   */
  readonly fields: password_reset_tokensFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for password_reset_tokens.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__password_reset_tokensClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends usersDefaultArgs<ExtArgs> = {}>(args?: Subset<T, usersDefaultArgs<ExtArgs>>): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the password_reset_tokens model
   */
  interface password_reset_tokensFieldRefs {
    readonly id: FieldRef<"password_reset_tokens", 'Int'>
    readonly token: FieldRef<"password_reset_tokens", 'String'>
    readonly userId: FieldRef<"password_reset_tokens", 'Int'>
    readonly expiresAt: FieldRef<"password_reset_tokens", 'DateTime'>
    readonly createdAt: FieldRef<"password_reset_tokens", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * password_reset_tokens findUnique
   */
  export type password_reset_tokensFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the password_reset_tokens
     */
    select?: password_reset_tokensSelect<ExtArgs> | null
    /**
     * Omit specific fields from the password_reset_tokens
     */
    omit?: password_reset_tokensOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: password_reset_tokensInclude<ExtArgs> | null
    /**
     * Filter, which password_reset_tokens to fetch.
     */
    where: password_reset_tokensWhereUniqueInput
  }

  /**
   * password_reset_tokens findUniqueOrThrow
   */
  export type password_reset_tokensFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the password_reset_tokens
     */
    select?: password_reset_tokensSelect<ExtArgs> | null
    /**
     * Omit specific fields from the password_reset_tokens
     */
    omit?: password_reset_tokensOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: password_reset_tokensInclude<ExtArgs> | null
    /**
     * Filter, which password_reset_tokens to fetch.
     */
    where: password_reset_tokensWhereUniqueInput
  }

  /**
   * password_reset_tokens findFirst
   */
  export type password_reset_tokensFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the password_reset_tokens
     */
    select?: password_reset_tokensSelect<ExtArgs> | null
    /**
     * Omit specific fields from the password_reset_tokens
     */
    omit?: password_reset_tokensOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: password_reset_tokensInclude<ExtArgs> | null
    /**
     * Filter, which password_reset_tokens to fetch.
     */
    where?: password_reset_tokensWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of password_reset_tokens to fetch.
     */
    orderBy?: password_reset_tokensOrderByWithRelationInput | password_reset_tokensOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for password_reset_tokens.
     */
    cursor?: password_reset_tokensWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` password_reset_tokens from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` password_reset_tokens.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of password_reset_tokens.
     */
    distinct?: Password_reset_tokensScalarFieldEnum | Password_reset_tokensScalarFieldEnum[]
  }

  /**
   * password_reset_tokens findFirstOrThrow
   */
  export type password_reset_tokensFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the password_reset_tokens
     */
    select?: password_reset_tokensSelect<ExtArgs> | null
    /**
     * Omit specific fields from the password_reset_tokens
     */
    omit?: password_reset_tokensOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: password_reset_tokensInclude<ExtArgs> | null
    /**
     * Filter, which password_reset_tokens to fetch.
     */
    where?: password_reset_tokensWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of password_reset_tokens to fetch.
     */
    orderBy?: password_reset_tokensOrderByWithRelationInput | password_reset_tokensOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for password_reset_tokens.
     */
    cursor?: password_reset_tokensWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` password_reset_tokens from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` password_reset_tokens.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of password_reset_tokens.
     */
    distinct?: Password_reset_tokensScalarFieldEnum | Password_reset_tokensScalarFieldEnum[]
  }

  /**
   * password_reset_tokens findMany
   */
  export type password_reset_tokensFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the password_reset_tokens
     */
    select?: password_reset_tokensSelect<ExtArgs> | null
    /**
     * Omit specific fields from the password_reset_tokens
     */
    omit?: password_reset_tokensOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: password_reset_tokensInclude<ExtArgs> | null
    /**
     * Filter, which password_reset_tokens to fetch.
     */
    where?: password_reset_tokensWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of password_reset_tokens to fetch.
     */
    orderBy?: password_reset_tokensOrderByWithRelationInput | password_reset_tokensOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing password_reset_tokens.
     */
    cursor?: password_reset_tokensWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` password_reset_tokens from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` password_reset_tokens.
     */
    skip?: number
    distinct?: Password_reset_tokensScalarFieldEnum | Password_reset_tokensScalarFieldEnum[]
  }

  /**
   * password_reset_tokens create
   */
  export type password_reset_tokensCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the password_reset_tokens
     */
    select?: password_reset_tokensSelect<ExtArgs> | null
    /**
     * Omit specific fields from the password_reset_tokens
     */
    omit?: password_reset_tokensOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: password_reset_tokensInclude<ExtArgs> | null
    /**
     * The data needed to create a password_reset_tokens.
     */
    data: XOR<password_reset_tokensCreateInput, password_reset_tokensUncheckedCreateInput>
  }

  /**
   * password_reset_tokens createMany
   */
  export type password_reset_tokensCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many password_reset_tokens.
     */
    data: password_reset_tokensCreateManyInput | password_reset_tokensCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * password_reset_tokens createManyAndReturn
   */
  export type password_reset_tokensCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the password_reset_tokens
     */
    select?: password_reset_tokensSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the password_reset_tokens
     */
    omit?: password_reset_tokensOmit<ExtArgs> | null
    /**
     * The data used to create many password_reset_tokens.
     */
    data: password_reset_tokensCreateManyInput | password_reset_tokensCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: password_reset_tokensIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * password_reset_tokens update
   */
  export type password_reset_tokensUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the password_reset_tokens
     */
    select?: password_reset_tokensSelect<ExtArgs> | null
    /**
     * Omit specific fields from the password_reset_tokens
     */
    omit?: password_reset_tokensOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: password_reset_tokensInclude<ExtArgs> | null
    /**
     * The data needed to update a password_reset_tokens.
     */
    data: XOR<password_reset_tokensUpdateInput, password_reset_tokensUncheckedUpdateInput>
    /**
     * Choose, which password_reset_tokens to update.
     */
    where: password_reset_tokensWhereUniqueInput
  }

  /**
   * password_reset_tokens updateMany
   */
  export type password_reset_tokensUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update password_reset_tokens.
     */
    data: XOR<password_reset_tokensUpdateManyMutationInput, password_reset_tokensUncheckedUpdateManyInput>
    /**
     * Filter which password_reset_tokens to update
     */
    where?: password_reset_tokensWhereInput
    /**
     * Limit how many password_reset_tokens to update.
     */
    limit?: number
  }

  /**
   * password_reset_tokens updateManyAndReturn
   */
  export type password_reset_tokensUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the password_reset_tokens
     */
    select?: password_reset_tokensSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the password_reset_tokens
     */
    omit?: password_reset_tokensOmit<ExtArgs> | null
    /**
     * The data used to update password_reset_tokens.
     */
    data: XOR<password_reset_tokensUpdateManyMutationInput, password_reset_tokensUncheckedUpdateManyInput>
    /**
     * Filter which password_reset_tokens to update
     */
    where?: password_reset_tokensWhereInput
    /**
     * Limit how many password_reset_tokens to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: password_reset_tokensIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * password_reset_tokens upsert
   */
  export type password_reset_tokensUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the password_reset_tokens
     */
    select?: password_reset_tokensSelect<ExtArgs> | null
    /**
     * Omit specific fields from the password_reset_tokens
     */
    omit?: password_reset_tokensOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: password_reset_tokensInclude<ExtArgs> | null
    /**
     * The filter to search for the password_reset_tokens to update in case it exists.
     */
    where: password_reset_tokensWhereUniqueInput
    /**
     * In case the password_reset_tokens found by the `where` argument doesn't exist, create a new password_reset_tokens with this data.
     */
    create: XOR<password_reset_tokensCreateInput, password_reset_tokensUncheckedCreateInput>
    /**
     * In case the password_reset_tokens was found with the provided `where` argument, update it with this data.
     */
    update: XOR<password_reset_tokensUpdateInput, password_reset_tokensUncheckedUpdateInput>
  }

  /**
   * password_reset_tokens delete
   */
  export type password_reset_tokensDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the password_reset_tokens
     */
    select?: password_reset_tokensSelect<ExtArgs> | null
    /**
     * Omit specific fields from the password_reset_tokens
     */
    omit?: password_reset_tokensOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: password_reset_tokensInclude<ExtArgs> | null
    /**
     * Filter which password_reset_tokens to delete.
     */
    where: password_reset_tokensWhereUniqueInput
  }

  /**
   * password_reset_tokens deleteMany
   */
  export type password_reset_tokensDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which password_reset_tokens to delete
     */
    where?: password_reset_tokensWhereInput
    /**
     * Limit how many password_reset_tokens to delete.
     */
    limit?: number
  }

  /**
   * password_reset_tokens without action
   */
  export type password_reset_tokensDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the password_reset_tokens
     */
    select?: password_reset_tokensSelect<ExtArgs> | null
    /**
     * Omit specific fields from the password_reset_tokens
     */
    omit?: password_reset_tokensOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: password_reset_tokensInclude<ExtArgs> | null
  }


  /**
   * Model towns
   */

  export type AggregateTowns = {
    _count: TownsCountAggregateOutputType | null
    _avg: TownsAvgAggregateOutputType | null
    _sum: TownsSumAggregateOutputType | null
    _min: TownsMinAggregateOutputType | null
    _max: TownsMaxAggregateOutputType | null
  }

  export type TownsAvgAggregateOutputType = {
    id: number | null
  }

  export type TownsSumAggregateOutputType = {
    id: number | null
  }

  export type TownsMinAggregateOutputType = {
    id: number | null
    name: string | null
    size: string | null
    whether: string | null
    history: string | null
    locationDescription: string | null
    economy: string | null
    criminality: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type TownsMaxAggregateOutputType = {
    id: number | null
    name: string | null
    size: string | null
    whether: string | null
    history: string | null
    locationDescription: string | null
    economy: string | null
    criminality: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type TownsCountAggregateOutputType = {
    id: number
    name: number
    size: number
    whether: number
    history: number
    locationDescription: number
    economy: number
    criminality: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type TownsAvgAggregateInputType = {
    id?: true
  }

  export type TownsSumAggregateInputType = {
    id?: true
  }

  export type TownsMinAggregateInputType = {
    id?: true
    name?: true
    size?: true
    whether?: true
    history?: true
    locationDescription?: true
    economy?: true
    criminality?: true
    createdAt?: true
    updatedAt?: true
  }

  export type TownsMaxAggregateInputType = {
    id?: true
    name?: true
    size?: true
    whether?: true
    history?: true
    locationDescription?: true
    economy?: true
    criminality?: true
    createdAt?: true
    updatedAt?: true
  }

  export type TownsCountAggregateInputType = {
    id?: true
    name?: true
    size?: true
    whether?: true
    history?: true
    locationDescription?: true
    economy?: true
    criminality?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type TownsAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which towns to aggregate.
     */
    where?: townsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of towns to fetch.
     */
    orderBy?: townsOrderByWithRelationInput | townsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: townsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` towns from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` towns.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned towns
    **/
    _count?: true | TownsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: TownsAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: TownsSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: TownsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: TownsMaxAggregateInputType
  }

  export type GetTownsAggregateType<T extends TownsAggregateArgs> = {
        [P in keyof T & keyof AggregateTowns]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateTowns[P]>
      : GetScalarType<T[P], AggregateTowns[P]>
  }




  export type townsGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: townsWhereInput
    orderBy?: townsOrderByWithAggregationInput | townsOrderByWithAggregationInput[]
    by: TownsScalarFieldEnum[] | TownsScalarFieldEnum
    having?: townsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: TownsCountAggregateInputType | true
    _avg?: TownsAvgAggregateInputType
    _sum?: TownsSumAggregateInputType
    _min?: TownsMinAggregateInputType
    _max?: TownsMaxAggregateInputType
  }

  export type TownsGroupByOutputType = {
    id: number
    name: string
    size: string
    whether: string
    history: string
    locationDescription: string
    economy: string
    criminality: string
    createdAt: Date
    updatedAt: Date
    _count: TownsCountAggregateOutputType | null
    _avg: TownsAvgAggregateOutputType | null
    _sum: TownsSumAggregateOutputType | null
    _min: TownsMinAggregateOutputType | null
    _max: TownsMaxAggregateOutputType | null
  }

  type GetTownsGroupByPayload<T extends townsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<TownsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof TownsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], TownsGroupByOutputType[P]>
            : GetScalarType<T[P], TownsGroupByOutputType[P]>
        }
      >
    >


  export type townsSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    size?: boolean
    whether?: boolean
    history?: boolean
    locationDescription?: boolean
    economy?: boolean
    criminality?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    locations?: boolean | towns$locationsArgs<ExtArgs>
    npcs?: boolean | towns$npcsArgs<ExtArgs>
    _count?: boolean | TownsCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["towns"]>

  export type townsSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    size?: boolean
    whether?: boolean
    history?: boolean
    locationDescription?: boolean
    economy?: boolean
    criminality?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["towns"]>

  export type townsSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    size?: boolean
    whether?: boolean
    history?: boolean
    locationDescription?: boolean
    economy?: boolean
    criminality?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["towns"]>

  export type townsSelectScalar = {
    id?: boolean
    name?: boolean
    size?: boolean
    whether?: boolean
    history?: boolean
    locationDescription?: boolean
    economy?: boolean
    criminality?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type townsOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "size" | "whether" | "history" | "locationDescription" | "economy" | "criminality" | "createdAt" | "updatedAt", ExtArgs["result"]["towns"]>
  export type townsInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    locations?: boolean | towns$locationsArgs<ExtArgs>
    npcs?: boolean | towns$npcsArgs<ExtArgs>
    _count?: boolean | TownsCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type townsIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type townsIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $townsPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "towns"
    objects: {
      locations: Prisma.$locationsPayload<ExtArgs>[]
      npcs: Prisma.$npcsPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      name: string
      size: string
      whether: string
      history: string
      locationDescription: string
      economy: string
      criminality: string
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["towns"]>
    composites: {}
  }

  type townsGetPayload<S extends boolean | null | undefined | townsDefaultArgs> = $Result.GetResult<Prisma.$townsPayload, S>

  type townsCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<townsFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: TownsCountAggregateInputType | true
    }

  export interface townsDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['towns'], meta: { name: 'towns' } }
    /**
     * Find zero or one Towns that matches the filter.
     * @param {townsFindUniqueArgs} args - Arguments to find a Towns
     * @example
     * // Get one Towns
     * const towns = await prisma.towns.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends townsFindUniqueArgs>(args: SelectSubset<T, townsFindUniqueArgs<ExtArgs>>): Prisma__townsClient<$Result.GetResult<Prisma.$townsPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Towns that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {townsFindUniqueOrThrowArgs} args - Arguments to find a Towns
     * @example
     * // Get one Towns
     * const towns = await prisma.towns.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends townsFindUniqueOrThrowArgs>(args: SelectSubset<T, townsFindUniqueOrThrowArgs<ExtArgs>>): Prisma__townsClient<$Result.GetResult<Prisma.$townsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Towns that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {townsFindFirstArgs} args - Arguments to find a Towns
     * @example
     * // Get one Towns
     * const towns = await prisma.towns.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends townsFindFirstArgs>(args?: SelectSubset<T, townsFindFirstArgs<ExtArgs>>): Prisma__townsClient<$Result.GetResult<Prisma.$townsPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Towns that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {townsFindFirstOrThrowArgs} args - Arguments to find a Towns
     * @example
     * // Get one Towns
     * const towns = await prisma.towns.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends townsFindFirstOrThrowArgs>(args?: SelectSubset<T, townsFindFirstOrThrowArgs<ExtArgs>>): Prisma__townsClient<$Result.GetResult<Prisma.$townsPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Towns that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {townsFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Towns
     * const towns = await prisma.towns.findMany()
     * 
     * // Get first 10 Towns
     * const towns = await prisma.towns.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const townsWithIdOnly = await prisma.towns.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends townsFindManyArgs>(args?: SelectSubset<T, townsFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$townsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Towns.
     * @param {townsCreateArgs} args - Arguments to create a Towns.
     * @example
     * // Create one Towns
     * const Towns = await prisma.towns.create({
     *   data: {
     *     // ... data to create a Towns
     *   }
     * })
     * 
     */
    create<T extends townsCreateArgs>(args: SelectSubset<T, townsCreateArgs<ExtArgs>>): Prisma__townsClient<$Result.GetResult<Prisma.$townsPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Towns.
     * @param {townsCreateManyArgs} args - Arguments to create many Towns.
     * @example
     * // Create many Towns
     * const towns = await prisma.towns.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends townsCreateManyArgs>(args?: SelectSubset<T, townsCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Towns and returns the data saved in the database.
     * @param {townsCreateManyAndReturnArgs} args - Arguments to create many Towns.
     * @example
     * // Create many Towns
     * const towns = await prisma.towns.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Towns and only return the `id`
     * const townsWithIdOnly = await prisma.towns.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends townsCreateManyAndReturnArgs>(args?: SelectSubset<T, townsCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$townsPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Towns.
     * @param {townsDeleteArgs} args - Arguments to delete one Towns.
     * @example
     * // Delete one Towns
     * const Towns = await prisma.towns.delete({
     *   where: {
     *     // ... filter to delete one Towns
     *   }
     * })
     * 
     */
    delete<T extends townsDeleteArgs>(args: SelectSubset<T, townsDeleteArgs<ExtArgs>>): Prisma__townsClient<$Result.GetResult<Prisma.$townsPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Towns.
     * @param {townsUpdateArgs} args - Arguments to update one Towns.
     * @example
     * // Update one Towns
     * const towns = await prisma.towns.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends townsUpdateArgs>(args: SelectSubset<T, townsUpdateArgs<ExtArgs>>): Prisma__townsClient<$Result.GetResult<Prisma.$townsPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Towns.
     * @param {townsDeleteManyArgs} args - Arguments to filter Towns to delete.
     * @example
     * // Delete a few Towns
     * const { count } = await prisma.towns.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends townsDeleteManyArgs>(args?: SelectSubset<T, townsDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Towns.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {townsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Towns
     * const towns = await prisma.towns.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends townsUpdateManyArgs>(args: SelectSubset<T, townsUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Towns and returns the data updated in the database.
     * @param {townsUpdateManyAndReturnArgs} args - Arguments to update many Towns.
     * @example
     * // Update many Towns
     * const towns = await prisma.towns.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Towns and only return the `id`
     * const townsWithIdOnly = await prisma.towns.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends townsUpdateManyAndReturnArgs>(args: SelectSubset<T, townsUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$townsPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Towns.
     * @param {townsUpsertArgs} args - Arguments to update or create a Towns.
     * @example
     * // Update or create a Towns
     * const towns = await prisma.towns.upsert({
     *   create: {
     *     // ... data to create a Towns
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Towns we want to update
     *   }
     * })
     */
    upsert<T extends townsUpsertArgs>(args: SelectSubset<T, townsUpsertArgs<ExtArgs>>): Prisma__townsClient<$Result.GetResult<Prisma.$townsPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Towns.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {townsCountArgs} args - Arguments to filter Towns to count.
     * @example
     * // Count the number of Towns
     * const count = await prisma.towns.count({
     *   where: {
     *     // ... the filter for the Towns we want to count
     *   }
     * })
    **/
    count<T extends townsCountArgs>(
      args?: Subset<T, townsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], TownsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Towns.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TownsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends TownsAggregateArgs>(args: Subset<T, TownsAggregateArgs>): Prisma.PrismaPromise<GetTownsAggregateType<T>>

    /**
     * Group by Towns.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {townsGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends townsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: townsGroupByArgs['orderBy'] }
        : { orderBy?: townsGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, townsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTownsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the towns model
   */
  readonly fields: townsFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for towns.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__townsClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    locations<T extends towns$locationsArgs<ExtArgs> = {}>(args?: Subset<T, towns$locationsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$locationsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    npcs<T extends towns$npcsArgs<ExtArgs> = {}>(args?: Subset<T, towns$npcsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$npcsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the towns model
   */
  interface townsFieldRefs {
    readonly id: FieldRef<"towns", 'Int'>
    readonly name: FieldRef<"towns", 'String'>
    readonly size: FieldRef<"towns", 'String'>
    readonly whether: FieldRef<"towns", 'String'>
    readonly history: FieldRef<"towns", 'String'>
    readonly locationDescription: FieldRef<"towns", 'String'>
    readonly economy: FieldRef<"towns", 'String'>
    readonly criminality: FieldRef<"towns", 'String'>
    readonly createdAt: FieldRef<"towns", 'DateTime'>
    readonly updatedAt: FieldRef<"towns", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * towns findUnique
   */
  export type townsFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the towns
     */
    select?: townsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the towns
     */
    omit?: townsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: townsInclude<ExtArgs> | null
    /**
     * Filter, which towns to fetch.
     */
    where: townsWhereUniqueInput
  }

  /**
   * towns findUniqueOrThrow
   */
  export type townsFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the towns
     */
    select?: townsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the towns
     */
    omit?: townsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: townsInclude<ExtArgs> | null
    /**
     * Filter, which towns to fetch.
     */
    where: townsWhereUniqueInput
  }

  /**
   * towns findFirst
   */
  export type townsFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the towns
     */
    select?: townsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the towns
     */
    omit?: townsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: townsInclude<ExtArgs> | null
    /**
     * Filter, which towns to fetch.
     */
    where?: townsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of towns to fetch.
     */
    orderBy?: townsOrderByWithRelationInput | townsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for towns.
     */
    cursor?: townsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` towns from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` towns.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of towns.
     */
    distinct?: TownsScalarFieldEnum | TownsScalarFieldEnum[]
  }

  /**
   * towns findFirstOrThrow
   */
  export type townsFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the towns
     */
    select?: townsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the towns
     */
    omit?: townsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: townsInclude<ExtArgs> | null
    /**
     * Filter, which towns to fetch.
     */
    where?: townsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of towns to fetch.
     */
    orderBy?: townsOrderByWithRelationInput | townsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for towns.
     */
    cursor?: townsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` towns from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` towns.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of towns.
     */
    distinct?: TownsScalarFieldEnum | TownsScalarFieldEnum[]
  }

  /**
   * towns findMany
   */
  export type townsFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the towns
     */
    select?: townsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the towns
     */
    omit?: townsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: townsInclude<ExtArgs> | null
    /**
     * Filter, which towns to fetch.
     */
    where?: townsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of towns to fetch.
     */
    orderBy?: townsOrderByWithRelationInput | townsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing towns.
     */
    cursor?: townsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` towns from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` towns.
     */
    skip?: number
    distinct?: TownsScalarFieldEnum | TownsScalarFieldEnum[]
  }

  /**
   * towns create
   */
  export type townsCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the towns
     */
    select?: townsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the towns
     */
    omit?: townsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: townsInclude<ExtArgs> | null
    /**
     * The data needed to create a towns.
     */
    data: XOR<townsCreateInput, townsUncheckedCreateInput>
  }

  /**
   * towns createMany
   */
  export type townsCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many towns.
     */
    data: townsCreateManyInput | townsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * towns createManyAndReturn
   */
  export type townsCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the towns
     */
    select?: townsSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the towns
     */
    omit?: townsOmit<ExtArgs> | null
    /**
     * The data used to create many towns.
     */
    data: townsCreateManyInput | townsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * towns update
   */
  export type townsUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the towns
     */
    select?: townsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the towns
     */
    omit?: townsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: townsInclude<ExtArgs> | null
    /**
     * The data needed to update a towns.
     */
    data: XOR<townsUpdateInput, townsUncheckedUpdateInput>
    /**
     * Choose, which towns to update.
     */
    where: townsWhereUniqueInput
  }

  /**
   * towns updateMany
   */
  export type townsUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update towns.
     */
    data: XOR<townsUpdateManyMutationInput, townsUncheckedUpdateManyInput>
    /**
     * Filter which towns to update
     */
    where?: townsWhereInput
    /**
     * Limit how many towns to update.
     */
    limit?: number
  }

  /**
   * towns updateManyAndReturn
   */
  export type townsUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the towns
     */
    select?: townsSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the towns
     */
    omit?: townsOmit<ExtArgs> | null
    /**
     * The data used to update towns.
     */
    data: XOR<townsUpdateManyMutationInput, townsUncheckedUpdateManyInput>
    /**
     * Filter which towns to update
     */
    where?: townsWhereInput
    /**
     * Limit how many towns to update.
     */
    limit?: number
  }

  /**
   * towns upsert
   */
  export type townsUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the towns
     */
    select?: townsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the towns
     */
    omit?: townsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: townsInclude<ExtArgs> | null
    /**
     * The filter to search for the towns to update in case it exists.
     */
    where: townsWhereUniqueInput
    /**
     * In case the towns found by the `where` argument doesn't exist, create a new towns with this data.
     */
    create: XOR<townsCreateInput, townsUncheckedCreateInput>
    /**
     * In case the towns was found with the provided `where` argument, update it with this data.
     */
    update: XOR<townsUpdateInput, townsUncheckedUpdateInput>
  }

  /**
   * towns delete
   */
  export type townsDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the towns
     */
    select?: townsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the towns
     */
    omit?: townsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: townsInclude<ExtArgs> | null
    /**
     * Filter which towns to delete.
     */
    where: townsWhereUniqueInput
  }

  /**
   * towns deleteMany
   */
  export type townsDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which towns to delete
     */
    where?: townsWhereInput
    /**
     * Limit how many towns to delete.
     */
    limit?: number
  }

  /**
   * towns.locations
   */
  export type towns$locationsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the locations
     */
    select?: locationsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the locations
     */
    omit?: locationsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: locationsInclude<ExtArgs> | null
    where?: locationsWhereInput
    orderBy?: locationsOrderByWithRelationInput | locationsOrderByWithRelationInput[]
    cursor?: locationsWhereUniqueInput
    take?: number
    skip?: number
    distinct?: LocationsScalarFieldEnum | LocationsScalarFieldEnum[]
  }

  /**
   * towns.npcs
   */
  export type towns$npcsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the npcs
     */
    select?: npcsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the npcs
     */
    omit?: npcsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: npcsInclude<ExtArgs> | null
    where?: npcsWhereInput
    orderBy?: npcsOrderByWithRelationInput | npcsOrderByWithRelationInput[]
    cursor?: npcsWhereUniqueInput
    take?: number
    skip?: number
    distinct?: NpcsScalarFieldEnum | NpcsScalarFieldEnum[]
  }

  /**
   * towns without action
   */
  export type townsDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the towns
     */
    select?: townsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the towns
     */
    omit?: townsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: townsInclude<ExtArgs> | null
  }


  /**
   * Model npcs
   */

  export type AggregateNpcs = {
    _count: NpcsCountAggregateOutputType | null
    _avg: NpcsAvgAggregateOutputType | null
    _sum: NpcsSumAggregateOutputType | null
    _min: NpcsMinAggregateOutputType | null
    _max: NpcsMaxAggregateOutputType | null
  }

  export type NpcsAvgAggregateOutputType = {
    id: number | null
    townId: number | null
  }

  export type NpcsSumAggregateOutputType = {
    id: number | null
    townId: number | null
  }

  export type NpcsMinAggregateOutputType = {
    id: number | null
    townId: number | null
    name: string | null
    race: string | null
    age: string | null
    description: string | null
    ocupation: string | null
    history: string | null
    interest: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type NpcsMaxAggregateOutputType = {
    id: number | null
    townId: number | null
    name: string | null
    race: string | null
    age: string | null
    description: string | null
    ocupation: string | null
    history: string | null
    interest: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type NpcsCountAggregateOutputType = {
    id: number
    townId: number
    name: number
    race: number
    age: number
    description: number
    ocupation: number
    history: number
    interest: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type NpcsAvgAggregateInputType = {
    id?: true
    townId?: true
  }

  export type NpcsSumAggregateInputType = {
    id?: true
    townId?: true
  }

  export type NpcsMinAggregateInputType = {
    id?: true
    townId?: true
    name?: true
    race?: true
    age?: true
    description?: true
    ocupation?: true
    history?: true
    interest?: true
    createdAt?: true
    updatedAt?: true
  }

  export type NpcsMaxAggregateInputType = {
    id?: true
    townId?: true
    name?: true
    race?: true
    age?: true
    description?: true
    ocupation?: true
    history?: true
    interest?: true
    createdAt?: true
    updatedAt?: true
  }

  export type NpcsCountAggregateInputType = {
    id?: true
    townId?: true
    name?: true
    race?: true
    age?: true
    description?: true
    ocupation?: true
    history?: true
    interest?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type NpcsAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which npcs to aggregate.
     */
    where?: npcsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of npcs to fetch.
     */
    orderBy?: npcsOrderByWithRelationInput | npcsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: npcsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` npcs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` npcs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned npcs
    **/
    _count?: true | NpcsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: NpcsAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: NpcsSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: NpcsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: NpcsMaxAggregateInputType
  }

  export type GetNpcsAggregateType<T extends NpcsAggregateArgs> = {
        [P in keyof T & keyof AggregateNpcs]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateNpcs[P]>
      : GetScalarType<T[P], AggregateNpcs[P]>
  }




  export type npcsGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: npcsWhereInput
    orderBy?: npcsOrderByWithAggregationInput | npcsOrderByWithAggregationInput[]
    by: NpcsScalarFieldEnum[] | NpcsScalarFieldEnum
    having?: npcsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: NpcsCountAggregateInputType | true
    _avg?: NpcsAvgAggregateInputType
    _sum?: NpcsSumAggregateInputType
    _min?: NpcsMinAggregateInputType
    _max?: NpcsMaxAggregateInputType
  }

  export type NpcsGroupByOutputType = {
    id: number
    townId: number | null
    name: string
    race: string
    age: string
    description: string
    ocupation: string
    history: string
    interest: string
    createdAt: Date
    updatedAt: Date
    _count: NpcsCountAggregateOutputType | null
    _avg: NpcsAvgAggregateOutputType | null
    _sum: NpcsSumAggregateOutputType | null
    _min: NpcsMinAggregateOutputType | null
    _max: NpcsMaxAggregateOutputType | null
  }

  type GetNpcsGroupByPayload<T extends npcsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<NpcsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof NpcsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], NpcsGroupByOutputType[P]>
            : GetScalarType<T[P], NpcsGroupByOutputType[P]>
        }
      >
    >


  export type npcsSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    townId?: boolean
    name?: boolean
    race?: boolean
    age?: boolean
    description?: boolean
    ocupation?: boolean
    history?: boolean
    interest?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    town?: boolean | npcs$townArgs<ExtArgs>
  }, ExtArgs["result"]["npcs"]>

  export type npcsSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    townId?: boolean
    name?: boolean
    race?: boolean
    age?: boolean
    description?: boolean
    ocupation?: boolean
    history?: boolean
    interest?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    town?: boolean | npcs$townArgs<ExtArgs>
  }, ExtArgs["result"]["npcs"]>

  export type npcsSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    townId?: boolean
    name?: boolean
    race?: boolean
    age?: boolean
    description?: boolean
    ocupation?: boolean
    history?: boolean
    interest?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    town?: boolean | npcs$townArgs<ExtArgs>
  }, ExtArgs["result"]["npcs"]>

  export type npcsSelectScalar = {
    id?: boolean
    townId?: boolean
    name?: boolean
    race?: boolean
    age?: boolean
    description?: boolean
    ocupation?: boolean
    history?: boolean
    interest?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type npcsOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "townId" | "name" | "race" | "age" | "description" | "ocupation" | "history" | "interest" | "createdAt" | "updatedAt", ExtArgs["result"]["npcs"]>
  export type npcsInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    town?: boolean | npcs$townArgs<ExtArgs>
  }
  export type npcsIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    town?: boolean | npcs$townArgs<ExtArgs>
  }
  export type npcsIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    town?: boolean | npcs$townArgs<ExtArgs>
  }

  export type $npcsPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "npcs"
    objects: {
      town: Prisma.$townsPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      townId: number | null
      name: string
      race: string
      age: string
      description: string
      ocupation: string
      history: string
      interest: string
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["npcs"]>
    composites: {}
  }

  type npcsGetPayload<S extends boolean | null | undefined | npcsDefaultArgs> = $Result.GetResult<Prisma.$npcsPayload, S>

  type npcsCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<npcsFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: NpcsCountAggregateInputType | true
    }

  export interface npcsDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['npcs'], meta: { name: 'npcs' } }
    /**
     * Find zero or one Npcs that matches the filter.
     * @param {npcsFindUniqueArgs} args - Arguments to find a Npcs
     * @example
     * // Get one Npcs
     * const npcs = await prisma.npcs.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends npcsFindUniqueArgs>(args: SelectSubset<T, npcsFindUniqueArgs<ExtArgs>>): Prisma__npcsClient<$Result.GetResult<Prisma.$npcsPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Npcs that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {npcsFindUniqueOrThrowArgs} args - Arguments to find a Npcs
     * @example
     * // Get one Npcs
     * const npcs = await prisma.npcs.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends npcsFindUniqueOrThrowArgs>(args: SelectSubset<T, npcsFindUniqueOrThrowArgs<ExtArgs>>): Prisma__npcsClient<$Result.GetResult<Prisma.$npcsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Npcs that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {npcsFindFirstArgs} args - Arguments to find a Npcs
     * @example
     * // Get one Npcs
     * const npcs = await prisma.npcs.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends npcsFindFirstArgs>(args?: SelectSubset<T, npcsFindFirstArgs<ExtArgs>>): Prisma__npcsClient<$Result.GetResult<Prisma.$npcsPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Npcs that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {npcsFindFirstOrThrowArgs} args - Arguments to find a Npcs
     * @example
     * // Get one Npcs
     * const npcs = await prisma.npcs.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends npcsFindFirstOrThrowArgs>(args?: SelectSubset<T, npcsFindFirstOrThrowArgs<ExtArgs>>): Prisma__npcsClient<$Result.GetResult<Prisma.$npcsPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Npcs that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {npcsFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Npcs
     * const npcs = await prisma.npcs.findMany()
     * 
     * // Get first 10 Npcs
     * const npcs = await prisma.npcs.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const npcsWithIdOnly = await prisma.npcs.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends npcsFindManyArgs>(args?: SelectSubset<T, npcsFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$npcsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Npcs.
     * @param {npcsCreateArgs} args - Arguments to create a Npcs.
     * @example
     * // Create one Npcs
     * const Npcs = await prisma.npcs.create({
     *   data: {
     *     // ... data to create a Npcs
     *   }
     * })
     * 
     */
    create<T extends npcsCreateArgs>(args: SelectSubset<T, npcsCreateArgs<ExtArgs>>): Prisma__npcsClient<$Result.GetResult<Prisma.$npcsPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Npcs.
     * @param {npcsCreateManyArgs} args - Arguments to create many Npcs.
     * @example
     * // Create many Npcs
     * const npcs = await prisma.npcs.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends npcsCreateManyArgs>(args?: SelectSubset<T, npcsCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Npcs and returns the data saved in the database.
     * @param {npcsCreateManyAndReturnArgs} args - Arguments to create many Npcs.
     * @example
     * // Create many Npcs
     * const npcs = await prisma.npcs.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Npcs and only return the `id`
     * const npcsWithIdOnly = await prisma.npcs.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends npcsCreateManyAndReturnArgs>(args?: SelectSubset<T, npcsCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$npcsPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Npcs.
     * @param {npcsDeleteArgs} args - Arguments to delete one Npcs.
     * @example
     * // Delete one Npcs
     * const Npcs = await prisma.npcs.delete({
     *   where: {
     *     // ... filter to delete one Npcs
     *   }
     * })
     * 
     */
    delete<T extends npcsDeleteArgs>(args: SelectSubset<T, npcsDeleteArgs<ExtArgs>>): Prisma__npcsClient<$Result.GetResult<Prisma.$npcsPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Npcs.
     * @param {npcsUpdateArgs} args - Arguments to update one Npcs.
     * @example
     * // Update one Npcs
     * const npcs = await prisma.npcs.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends npcsUpdateArgs>(args: SelectSubset<T, npcsUpdateArgs<ExtArgs>>): Prisma__npcsClient<$Result.GetResult<Prisma.$npcsPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Npcs.
     * @param {npcsDeleteManyArgs} args - Arguments to filter Npcs to delete.
     * @example
     * // Delete a few Npcs
     * const { count } = await prisma.npcs.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends npcsDeleteManyArgs>(args?: SelectSubset<T, npcsDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Npcs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {npcsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Npcs
     * const npcs = await prisma.npcs.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends npcsUpdateManyArgs>(args: SelectSubset<T, npcsUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Npcs and returns the data updated in the database.
     * @param {npcsUpdateManyAndReturnArgs} args - Arguments to update many Npcs.
     * @example
     * // Update many Npcs
     * const npcs = await prisma.npcs.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Npcs and only return the `id`
     * const npcsWithIdOnly = await prisma.npcs.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends npcsUpdateManyAndReturnArgs>(args: SelectSubset<T, npcsUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$npcsPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Npcs.
     * @param {npcsUpsertArgs} args - Arguments to update or create a Npcs.
     * @example
     * // Update or create a Npcs
     * const npcs = await prisma.npcs.upsert({
     *   create: {
     *     // ... data to create a Npcs
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Npcs we want to update
     *   }
     * })
     */
    upsert<T extends npcsUpsertArgs>(args: SelectSubset<T, npcsUpsertArgs<ExtArgs>>): Prisma__npcsClient<$Result.GetResult<Prisma.$npcsPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Npcs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {npcsCountArgs} args - Arguments to filter Npcs to count.
     * @example
     * // Count the number of Npcs
     * const count = await prisma.npcs.count({
     *   where: {
     *     // ... the filter for the Npcs we want to count
     *   }
     * })
    **/
    count<T extends npcsCountArgs>(
      args?: Subset<T, npcsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], NpcsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Npcs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NpcsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends NpcsAggregateArgs>(args: Subset<T, NpcsAggregateArgs>): Prisma.PrismaPromise<GetNpcsAggregateType<T>>

    /**
     * Group by Npcs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {npcsGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends npcsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: npcsGroupByArgs['orderBy'] }
        : { orderBy?: npcsGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, npcsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetNpcsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the npcs model
   */
  readonly fields: npcsFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for npcs.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__npcsClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    town<T extends npcs$townArgs<ExtArgs> = {}>(args?: Subset<T, npcs$townArgs<ExtArgs>>): Prisma__townsClient<$Result.GetResult<Prisma.$townsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the npcs model
   */
  interface npcsFieldRefs {
    readonly id: FieldRef<"npcs", 'Int'>
    readonly townId: FieldRef<"npcs", 'Int'>
    readonly name: FieldRef<"npcs", 'String'>
    readonly race: FieldRef<"npcs", 'String'>
    readonly age: FieldRef<"npcs", 'String'>
    readonly description: FieldRef<"npcs", 'String'>
    readonly ocupation: FieldRef<"npcs", 'String'>
    readonly history: FieldRef<"npcs", 'String'>
    readonly interest: FieldRef<"npcs", 'String'>
    readonly createdAt: FieldRef<"npcs", 'DateTime'>
    readonly updatedAt: FieldRef<"npcs", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * npcs findUnique
   */
  export type npcsFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the npcs
     */
    select?: npcsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the npcs
     */
    omit?: npcsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: npcsInclude<ExtArgs> | null
    /**
     * Filter, which npcs to fetch.
     */
    where: npcsWhereUniqueInput
  }

  /**
   * npcs findUniqueOrThrow
   */
  export type npcsFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the npcs
     */
    select?: npcsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the npcs
     */
    omit?: npcsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: npcsInclude<ExtArgs> | null
    /**
     * Filter, which npcs to fetch.
     */
    where: npcsWhereUniqueInput
  }

  /**
   * npcs findFirst
   */
  export type npcsFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the npcs
     */
    select?: npcsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the npcs
     */
    omit?: npcsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: npcsInclude<ExtArgs> | null
    /**
     * Filter, which npcs to fetch.
     */
    where?: npcsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of npcs to fetch.
     */
    orderBy?: npcsOrderByWithRelationInput | npcsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for npcs.
     */
    cursor?: npcsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` npcs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` npcs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of npcs.
     */
    distinct?: NpcsScalarFieldEnum | NpcsScalarFieldEnum[]
  }

  /**
   * npcs findFirstOrThrow
   */
  export type npcsFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the npcs
     */
    select?: npcsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the npcs
     */
    omit?: npcsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: npcsInclude<ExtArgs> | null
    /**
     * Filter, which npcs to fetch.
     */
    where?: npcsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of npcs to fetch.
     */
    orderBy?: npcsOrderByWithRelationInput | npcsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for npcs.
     */
    cursor?: npcsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` npcs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` npcs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of npcs.
     */
    distinct?: NpcsScalarFieldEnum | NpcsScalarFieldEnum[]
  }

  /**
   * npcs findMany
   */
  export type npcsFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the npcs
     */
    select?: npcsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the npcs
     */
    omit?: npcsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: npcsInclude<ExtArgs> | null
    /**
     * Filter, which npcs to fetch.
     */
    where?: npcsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of npcs to fetch.
     */
    orderBy?: npcsOrderByWithRelationInput | npcsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing npcs.
     */
    cursor?: npcsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` npcs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` npcs.
     */
    skip?: number
    distinct?: NpcsScalarFieldEnum | NpcsScalarFieldEnum[]
  }

  /**
   * npcs create
   */
  export type npcsCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the npcs
     */
    select?: npcsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the npcs
     */
    omit?: npcsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: npcsInclude<ExtArgs> | null
    /**
     * The data needed to create a npcs.
     */
    data: XOR<npcsCreateInput, npcsUncheckedCreateInput>
  }

  /**
   * npcs createMany
   */
  export type npcsCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many npcs.
     */
    data: npcsCreateManyInput | npcsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * npcs createManyAndReturn
   */
  export type npcsCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the npcs
     */
    select?: npcsSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the npcs
     */
    omit?: npcsOmit<ExtArgs> | null
    /**
     * The data used to create many npcs.
     */
    data: npcsCreateManyInput | npcsCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: npcsIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * npcs update
   */
  export type npcsUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the npcs
     */
    select?: npcsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the npcs
     */
    omit?: npcsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: npcsInclude<ExtArgs> | null
    /**
     * The data needed to update a npcs.
     */
    data: XOR<npcsUpdateInput, npcsUncheckedUpdateInput>
    /**
     * Choose, which npcs to update.
     */
    where: npcsWhereUniqueInput
  }

  /**
   * npcs updateMany
   */
  export type npcsUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update npcs.
     */
    data: XOR<npcsUpdateManyMutationInput, npcsUncheckedUpdateManyInput>
    /**
     * Filter which npcs to update
     */
    where?: npcsWhereInput
    /**
     * Limit how many npcs to update.
     */
    limit?: number
  }

  /**
   * npcs updateManyAndReturn
   */
  export type npcsUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the npcs
     */
    select?: npcsSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the npcs
     */
    omit?: npcsOmit<ExtArgs> | null
    /**
     * The data used to update npcs.
     */
    data: XOR<npcsUpdateManyMutationInput, npcsUncheckedUpdateManyInput>
    /**
     * Filter which npcs to update
     */
    where?: npcsWhereInput
    /**
     * Limit how many npcs to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: npcsIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * npcs upsert
   */
  export type npcsUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the npcs
     */
    select?: npcsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the npcs
     */
    omit?: npcsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: npcsInclude<ExtArgs> | null
    /**
     * The filter to search for the npcs to update in case it exists.
     */
    where: npcsWhereUniqueInput
    /**
     * In case the npcs found by the `where` argument doesn't exist, create a new npcs with this data.
     */
    create: XOR<npcsCreateInput, npcsUncheckedCreateInput>
    /**
     * In case the npcs was found with the provided `where` argument, update it with this data.
     */
    update: XOR<npcsUpdateInput, npcsUncheckedUpdateInput>
  }

  /**
   * npcs delete
   */
  export type npcsDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the npcs
     */
    select?: npcsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the npcs
     */
    omit?: npcsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: npcsInclude<ExtArgs> | null
    /**
     * Filter which npcs to delete.
     */
    where: npcsWhereUniqueInput
  }

  /**
   * npcs deleteMany
   */
  export type npcsDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which npcs to delete
     */
    where?: npcsWhereInput
    /**
     * Limit how many npcs to delete.
     */
    limit?: number
  }

  /**
   * npcs.town
   */
  export type npcs$townArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the towns
     */
    select?: townsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the towns
     */
    omit?: townsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: townsInclude<ExtArgs> | null
    where?: townsWhereInput
  }

  /**
   * npcs without action
   */
  export type npcsDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the npcs
     */
    select?: npcsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the npcs
     */
    omit?: npcsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: npcsInclude<ExtArgs> | null
  }


  /**
   * Model locations
   */

  export type AggregateLocations = {
    _count: LocationsCountAggregateOutputType | null
    _avg: LocationsAvgAggregateOutputType | null
    _sum: LocationsSumAggregateOutputType | null
    _min: LocationsMinAggregateOutputType | null
    _max: LocationsMaxAggregateOutputType | null
  }

  export type LocationsAvgAggregateOutputType = {
    id: number | null
    townId: number | null
  }

  export type LocationsSumAggregateOutputType = {
    id: number | null
    townId: number | null
  }

  export type LocationsMinAggregateOutputType = {
    id: number | null
    townId: number | null
    name: string | null
    description: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type LocationsMaxAggregateOutputType = {
    id: number | null
    townId: number | null
    name: string | null
    description: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type LocationsCountAggregateOutputType = {
    id: number
    townId: number
    name: number
    description: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type LocationsAvgAggregateInputType = {
    id?: true
    townId?: true
  }

  export type LocationsSumAggregateInputType = {
    id?: true
    townId?: true
  }

  export type LocationsMinAggregateInputType = {
    id?: true
    townId?: true
    name?: true
    description?: true
    createdAt?: true
    updatedAt?: true
  }

  export type LocationsMaxAggregateInputType = {
    id?: true
    townId?: true
    name?: true
    description?: true
    createdAt?: true
    updatedAt?: true
  }

  export type LocationsCountAggregateInputType = {
    id?: true
    townId?: true
    name?: true
    description?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type LocationsAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which locations to aggregate.
     */
    where?: locationsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of locations to fetch.
     */
    orderBy?: locationsOrderByWithRelationInput | locationsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: locationsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` locations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` locations.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned locations
    **/
    _count?: true | LocationsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: LocationsAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: LocationsSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: LocationsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: LocationsMaxAggregateInputType
  }

  export type GetLocationsAggregateType<T extends LocationsAggregateArgs> = {
        [P in keyof T & keyof AggregateLocations]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateLocations[P]>
      : GetScalarType<T[P], AggregateLocations[P]>
  }




  export type locationsGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: locationsWhereInput
    orderBy?: locationsOrderByWithAggregationInput | locationsOrderByWithAggregationInput[]
    by: LocationsScalarFieldEnum[] | LocationsScalarFieldEnum
    having?: locationsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: LocationsCountAggregateInputType | true
    _avg?: LocationsAvgAggregateInputType
    _sum?: LocationsSumAggregateInputType
    _min?: LocationsMinAggregateInputType
    _max?: LocationsMaxAggregateInputType
  }

  export type LocationsGroupByOutputType = {
    id: number
    townId: number
    name: string
    description: string
    createdAt: Date
    updatedAt: Date
    _count: LocationsCountAggregateOutputType | null
    _avg: LocationsAvgAggregateOutputType | null
    _sum: LocationsSumAggregateOutputType | null
    _min: LocationsMinAggregateOutputType | null
    _max: LocationsMaxAggregateOutputType | null
  }

  type GetLocationsGroupByPayload<T extends locationsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<LocationsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof LocationsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], LocationsGroupByOutputType[P]>
            : GetScalarType<T[P], LocationsGroupByOutputType[P]>
        }
      >
    >


  export type locationsSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    townId?: boolean
    name?: boolean
    description?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    town?: boolean | townsDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["locations"]>

  export type locationsSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    townId?: boolean
    name?: boolean
    description?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    town?: boolean | townsDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["locations"]>

  export type locationsSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    townId?: boolean
    name?: boolean
    description?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    town?: boolean | townsDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["locations"]>

  export type locationsSelectScalar = {
    id?: boolean
    townId?: boolean
    name?: boolean
    description?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type locationsOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "townId" | "name" | "description" | "createdAt" | "updatedAt", ExtArgs["result"]["locations"]>
  export type locationsInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    town?: boolean | townsDefaultArgs<ExtArgs>
  }
  export type locationsIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    town?: boolean | townsDefaultArgs<ExtArgs>
  }
  export type locationsIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    town?: boolean | townsDefaultArgs<ExtArgs>
  }

  export type $locationsPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "locations"
    objects: {
      town: Prisma.$townsPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      townId: number
      name: string
      description: string
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["locations"]>
    composites: {}
  }

  type locationsGetPayload<S extends boolean | null | undefined | locationsDefaultArgs> = $Result.GetResult<Prisma.$locationsPayload, S>

  type locationsCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<locationsFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: LocationsCountAggregateInputType | true
    }

  export interface locationsDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['locations'], meta: { name: 'locations' } }
    /**
     * Find zero or one Locations that matches the filter.
     * @param {locationsFindUniqueArgs} args - Arguments to find a Locations
     * @example
     * // Get one Locations
     * const locations = await prisma.locations.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends locationsFindUniqueArgs>(args: SelectSubset<T, locationsFindUniqueArgs<ExtArgs>>): Prisma__locationsClient<$Result.GetResult<Prisma.$locationsPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Locations that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {locationsFindUniqueOrThrowArgs} args - Arguments to find a Locations
     * @example
     * // Get one Locations
     * const locations = await prisma.locations.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends locationsFindUniqueOrThrowArgs>(args: SelectSubset<T, locationsFindUniqueOrThrowArgs<ExtArgs>>): Prisma__locationsClient<$Result.GetResult<Prisma.$locationsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Locations that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {locationsFindFirstArgs} args - Arguments to find a Locations
     * @example
     * // Get one Locations
     * const locations = await prisma.locations.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends locationsFindFirstArgs>(args?: SelectSubset<T, locationsFindFirstArgs<ExtArgs>>): Prisma__locationsClient<$Result.GetResult<Prisma.$locationsPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Locations that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {locationsFindFirstOrThrowArgs} args - Arguments to find a Locations
     * @example
     * // Get one Locations
     * const locations = await prisma.locations.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends locationsFindFirstOrThrowArgs>(args?: SelectSubset<T, locationsFindFirstOrThrowArgs<ExtArgs>>): Prisma__locationsClient<$Result.GetResult<Prisma.$locationsPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Locations that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {locationsFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Locations
     * const locations = await prisma.locations.findMany()
     * 
     * // Get first 10 Locations
     * const locations = await prisma.locations.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const locationsWithIdOnly = await prisma.locations.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends locationsFindManyArgs>(args?: SelectSubset<T, locationsFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$locationsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Locations.
     * @param {locationsCreateArgs} args - Arguments to create a Locations.
     * @example
     * // Create one Locations
     * const Locations = await prisma.locations.create({
     *   data: {
     *     // ... data to create a Locations
     *   }
     * })
     * 
     */
    create<T extends locationsCreateArgs>(args: SelectSubset<T, locationsCreateArgs<ExtArgs>>): Prisma__locationsClient<$Result.GetResult<Prisma.$locationsPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Locations.
     * @param {locationsCreateManyArgs} args - Arguments to create many Locations.
     * @example
     * // Create many Locations
     * const locations = await prisma.locations.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends locationsCreateManyArgs>(args?: SelectSubset<T, locationsCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Locations and returns the data saved in the database.
     * @param {locationsCreateManyAndReturnArgs} args - Arguments to create many Locations.
     * @example
     * // Create many Locations
     * const locations = await prisma.locations.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Locations and only return the `id`
     * const locationsWithIdOnly = await prisma.locations.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends locationsCreateManyAndReturnArgs>(args?: SelectSubset<T, locationsCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$locationsPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Locations.
     * @param {locationsDeleteArgs} args - Arguments to delete one Locations.
     * @example
     * // Delete one Locations
     * const Locations = await prisma.locations.delete({
     *   where: {
     *     // ... filter to delete one Locations
     *   }
     * })
     * 
     */
    delete<T extends locationsDeleteArgs>(args: SelectSubset<T, locationsDeleteArgs<ExtArgs>>): Prisma__locationsClient<$Result.GetResult<Prisma.$locationsPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Locations.
     * @param {locationsUpdateArgs} args - Arguments to update one Locations.
     * @example
     * // Update one Locations
     * const locations = await prisma.locations.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends locationsUpdateArgs>(args: SelectSubset<T, locationsUpdateArgs<ExtArgs>>): Prisma__locationsClient<$Result.GetResult<Prisma.$locationsPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Locations.
     * @param {locationsDeleteManyArgs} args - Arguments to filter Locations to delete.
     * @example
     * // Delete a few Locations
     * const { count } = await prisma.locations.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends locationsDeleteManyArgs>(args?: SelectSubset<T, locationsDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Locations.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {locationsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Locations
     * const locations = await prisma.locations.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends locationsUpdateManyArgs>(args: SelectSubset<T, locationsUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Locations and returns the data updated in the database.
     * @param {locationsUpdateManyAndReturnArgs} args - Arguments to update many Locations.
     * @example
     * // Update many Locations
     * const locations = await prisma.locations.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Locations and only return the `id`
     * const locationsWithIdOnly = await prisma.locations.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends locationsUpdateManyAndReturnArgs>(args: SelectSubset<T, locationsUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$locationsPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Locations.
     * @param {locationsUpsertArgs} args - Arguments to update or create a Locations.
     * @example
     * // Update or create a Locations
     * const locations = await prisma.locations.upsert({
     *   create: {
     *     // ... data to create a Locations
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Locations we want to update
     *   }
     * })
     */
    upsert<T extends locationsUpsertArgs>(args: SelectSubset<T, locationsUpsertArgs<ExtArgs>>): Prisma__locationsClient<$Result.GetResult<Prisma.$locationsPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Locations.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {locationsCountArgs} args - Arguments to filter Locations to count.
     * @example
     * // Count the number of Locations
     * const count = await prisma.locations.count({
     *   where: {
     *     // ... the filter for the Locations we want to count
     *   }
     * })
    **/
    count<T extends locationsCountArgs>(
      args?: Subset<T, locationsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], LocationsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Locations.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LocationsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends LocationsAggregateArgs>(args: Subset<T, LocationsAggregateArgs>): Prisma.PrismaPromise<GetLocationsAggregateType<T>>

    /**
     * Group by Locations.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {locationsGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends locationsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: locationsGroupByArgs['orderBy'] }
        : { orderBy?: locationsGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, locationsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetLocationsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the locations model
   */
  readonly fields: locationsFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for locations.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__locationsClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    town<T extends townsDefaultArgs<ExtArgs> = {}>(args?: Subset<T, townsDefaultArgs<ExtArgs>>): Prisma__townsClient<$Result.GetResult<Prisma.$townsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the locations model
   */
  interface locationsFieldRefs {
    readonly id: FieldRef<"locations", 'Int'>
    readonly townId: FieldRef<"locations", 'Int'>
    readonly name: FieldRef<"locations", 'String'>
    readonly description: FieldRef<"locations", 'String'>
    readonly createdAt: FieldRef<"locations", 'DateTime'>
    readonly updatedAt: FieldRef<"locations", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * locations findUnique
   */
  export type locationsFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the locations
     */
    select?: locationsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the locations
     */
    omit?: locationsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: locationsInclude<ExtArgs> | null
    /**
     * Filter, which locations to fetch.
     */
    where: locationsWhereUniqueInput
  }

  /**
   * locations findUniqueOrThrow
   */
  export type locationsFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the locations
     */
    select?: locationsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the locations
     */
    omit?: locationsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: locationsInclude<ExtArgs> | null
    /**
     * Filter, which locations to fetch.
     */
    where: locationsWhereUniqueInput
  }

  /**
   * locations findFirst
   */
  export type locationsFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the locations
     */
    select?: locationsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the locations
     */
    omit?: locationsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: locationsInclude<ExtArgs> | null
    /**
     * Filter, which locations to fetch.
     */
    where?: locationsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of locations to fetch.
     */
    orderBy?: locationsOrderByWithRelationInput | locationsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for locations.
     */
    cursor?: locationsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` locations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` locations.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of locations.
     */
    distinct?: LocationsScalarFieldEnum | LocationsScalarFieldEnum[]
  }

  /**
   * locations findFirstOrThrow
   */
  export type locationsFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the locations
     */
    select?: locationsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the locations
     */
    omit?: locationsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: locationsInclude<ExtArgs> | null
    /**
     * Filter, which locations to fetch.
     */
    where?: locationsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of locations to fetch.
     */
    orderBy?: locationsOrderByWithRelationInput | locationsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for locations.
     */
    cursor?: locationsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` locations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` locations.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of locations.
     */
    distinct?: LocationsScalarFieldEnum | LocationsScalarFieldEnum[]
  }

  /**
   * locations findMany
   */
  export type locationsFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the locations
     */
    select?: locationsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the locations
     */
    omit?: locationsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: locationsInclude<ExtArgs> | null
    /**
     * Filter, which locations to fetch.
     */
    where?: locationsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of locations to fetch.
     */
    orderBy?: locationsOrderByWithRelationInput | locationsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing locations.
     */
    cursor?: locationsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` locations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` locations.
     */
    skip?: number
    distinct?: LocationsScalarFieldEnum | LocationsScalarFieldEnum[]
  }

  /**
   * locations create
   */
  export type locationsCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the locations
     */
    select?: locationsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the locations
     */
    omit?: locationsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: locationsInclude<ExtArgs> | null
    /**
     * The data needed to create a locations.
     */
    data: XOR<locationsCreateInput, locationsUncheckedCreateInput>
  }

  /**
   * locations createMany
   */
  export type locationsCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many locations.
     */
    data: locationsCreateManyInput | locationsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * locations createManyAndReturn
   */
  export type locationsCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the locations
     */
    select?: locationsSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the locations
     */
    omit?: locationsOmit<ExtArgs> | null
    /**
     * The data used to create many locations.
     */
    data: locationsCreateManyInput | locationsCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: locationsIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * locations update
   */
  export type locationsUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the locations
     */
    select?: locationsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the locations
     */
    omit?: locationsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: locationsInclude<ExtArgs> | null
    /**
     * The data needed to update a locations.
     */
    data: XOR<locationsUpdateInput, locationsUncheckedUpdateInput>
    /**
     * Choose, which locations to update.
     */
    where: locationsWhereUniqueInput
  }

  /**
   * locations updateMany
   */
  export type locationsUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update locations.
     */
    data: XOR<locationsUpdateManyMutationInput, locationsUncheckedUpdateManyInput>
    /**
     * Filter which locations to update
     */
    where?: locationsWhereInput
    /**
     * Limit how many locations to update.
     */
    limit?: number
  }

  /**
   * locations updateManyAndReturn
   */
  export type locationsUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the locations
     */
    select?: locationsSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the locations
     */
    omit?: locationsOmit<ExtArgs> | null
    /**
     * The data used to update locations.
     */
    data: XOR<locationsUpdateManyMutationInput, locationsUncheckedUpdateManyInput>
    /**
     * Filter which locations to update
     */
    where?: locationsWhereInput
    /**
     * Limit how many locations to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: locationsIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * locations upsert
   */
  export type locationsUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the locations
     */
    select?: locationsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the locations
     */
    omit?: locationsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: locationsInclude<ExtArgs> | null
    /**
     * The filter to search for the locations to update in case it exists.
     */
    where: locationsWhereUniqueInput
    /**
     * In case the locations found by the `where` argument doesn't exist, create a new locations with this data.
     */
    create: XOR<locationsCreateInput, locationsUncheckedCreateInput>
    /**
     * In case the locations was found with the provided `where` argument, update it with this data.
     */
    update: XOR<locationsUpdateInput, locationsUncheckedUpdateInput>
  }

  /**
   * locations delete
   */
  export type locationsDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the locations
     */
    select?: locationsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the locations
     */
    omit?: locationsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: locationsInclude<ExtArgs> | null
    /**
     * Filter which locations to delete.
     */
    where: locationsWhereUniqueInput
  }

  /**
   * locations deleteMany
   */
  export type locationsDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which locations to delete
     */
    where?: locationsWhereInput
    /**
     * Limit how many locations to delete.
     */
    limit?: number
  }

  /**
   * locations without action
   */
  export type locationsDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the locations
     */
    select?: locationsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the locations
     */
    omit?: locationsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: locationsInclude<ExtArgs> | null
  }


  /**
   * Model sheets
   */

  export type AggregateSheets = {
    _count: SheetsCountAggregateOutputType | null
    _avg: SheetsAvgAggregateOutputType | null
    _sum: SheetsSumAggregateOutputType | null
    _min: SheetsMinAggregateOutputType | null
    _max: SheetsMaxAggregateOutputType | null
  }

  export type SheetsAvgAggregateOutputType = {
    id: number | null
  }

  export type SheetsSumAggregateOutputType = {
    id: number | null
  }

  export type SheetsMinAggregateOutputType = {
    id: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type SheetsMaxAggregateOutputType = {
    id: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type SheetsCountAggregateOutputType = {
    id: number
    data: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type SheetsAvgAggregateInputType = {
    id?: true
  }

  export type SheetsSumAggregateInputType = {
    id?: true
  }

  export type SheetsMinAggregateInputType = {
    id?: true
    createdAt?: true
    updatedAt?: true
  }

  export type SheetsMaxAggregateInputType = {
    id?: true
    createdAt?: true
    updatedAt?: true
  }

  export type SheetsCountAggregateInputType = {
    id?: true
    data?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type SheetsAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which sheets to aggregate.
     */
    where?: sheetsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of sheets to fetch.
     */
    orderBy?: sheetsOrderByWithRelationInput | sheetsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: sheetsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` sheets from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` sheets.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned sheets
    **/
    _count?: true | SheetsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: SheetsAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: SheetsSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: SheetsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: SheetsMaxAggregateInputType
  }

  export type GetSheetsAggregateType<T extends SheetsAggregateArgs> = {
        [P in keyof T & keyof AggregateSheets]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateSheets[P]>
      : GetScalarType<T[P], AggregateSheets[P]>
  }




  export type sheetsGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: sheetsWhereInput
    orderBy?: sheetsOrderByWithAggregationInput | sheetsOrderByWithAggregationInput[]
    by: SheetsScalarFieldEnum[] | SheetsScalarFieldEnum
    having?: sheetsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: SheetsCountAggregateInputType | true
    _avg?: SheetsAvgAggregateInputType
    _sum?: SheetsSumAggregateInputType
    _min?: SheetsMinAggregateInputType
    _max?: SheetsMaxAggregateInputType
  }

  export type SheetsGroupByOutputType = {
    id: number
    data: JsonValue
    createdAt: Date
    updatedAt: Date
    _count: SheetsCountAggregateOutputType | null
    _avg: SheetsAvgAggregateOutputType | null
    _sum: SheetsSumAggregateOutputType | null
    _min: SheetsMinAggregateOutputType | null
    _max: SheetsMaxAggregateOutputType | null
  }

  type GetSheetsGroupByPayload<T extends sheetsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<SheetsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof SheetsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], SheetsGroupByOutputType[P]>
            : GetScalarType<T[P], SheetsGroupByOutputType[P]>
        }
      >
    >


  export type sheetsSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    data?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["sheets"]>

  export type sheetsSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    data?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["sheets"]>

  export type sheetsSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    data?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["sheets"]>

  export type sheetsSelectScalar = {
    id?: boolean
    data?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type sheetsOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "data" | "createdAt" | "updatedAt", ExtArgs["result"]["sheets"]>

  export type $sheetsPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "sheets"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: number
      data: Prisma.JsonValue
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["sheets"]>
    composites: {}
  }

  type sheetsGetPayload<S extends boolean | null | undefined | sheetsDefaultArgs> = $Result.GetResult<Prisma.$sheetsPayload, S>

  type sheetsCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<sheetsFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: SheetsCountAggregateInputType | true
    }

  export interface sheetsDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['sheets'], meta: { name: 'sheets' } }
    /**
     * Find zero or one Sheets that matches the filter.
     * @param {sheetsFindUniqueArgs} args - Arguments to find a Sheets
     * @example
     * // Get one Sheets
     * const sheets = await prisma.sheets.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends sheetsFindUniqueArgs>(args: SelectSubset<T, sheetsFindUniqueArgs<ExtArgs>>): Prisma__sheetsClient<$Result.GetResult<Prisma.$sheetsPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Sheets that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {sheetsFindUniqueOrThrowArgs} args - Arguments to find a Sheets
     * @example
     * // Get one Sheets
     * const sheets = await prisma.sheets.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends sheetsFindUniqueOrThrowArgs>(args: SelectSubset<T, sheetsFindUniqueOrThrowArgs<ExtArgs>>): Prisma__sheetsClient<$Result.GetResult<Prisma.$sheetsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Sheets that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {sheetsFindFirstArgs} args - Arguments to find a Sheets
     * @example
     * // Get one Sheets
     * const sheets = await prisma.sheets.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends sheetsFindFirstArgs>(args?: SelectSubset<T, sheetsFindFirstArgs<ExtArgs>>): Prisma__sheetsClient<$Result.GetResult<Prisma.$sheetsPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Sheets that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {sheetsFindFirstOrThrowArgs} args - Arguments to find a Sheets
     * @example
     * // Get one Sheets
     * const sheets = await prisma.sheets.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends sheetsFindFirstOrThrowArgs>(args?: SelectSubset<T, sheetsFindFirstOrThrowArgs<ExtArgs>>): Prisma__sheetsClient<$Result.GetResult<Prisma.$sheetsPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Sheets that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {sheetsFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Sheets
     * const sheets = await prisma.sheets.findMany()
     * 
     * // Get first 10 Sheets
     * const sheets = await prisma.sheets.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const sheetsWithIdOnly = await prisma.sheets.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends sheetsFindManyArgs>(args?: SelectSubset<T, sheetsFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$sheetsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Sheets.
     * @param {sheetsCreateArgs} args - Arguments to create a Sheets.
     * @example
     * // Create one Sheets
     * const Sheets = await prisma.sheets.create({
     *   data: {
     *     // ... data to create a Sheets
     *   }
     * })
     * 
     */
    create<T extends sheetsCreateArgs>(args: SelectSubset<T, sheetsCreateArgs<ExtArgs>>): Prisma__sheetsClient<$Result.GetResult<Prisma.$sheetsPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Sheets.
     * @param {sheetsCreateManyArgs} args - Arguments to create many Sheets.
     * @example
     * // Create many Sheets
     * const sheets = await prisma.sheets.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends sheetsCreateManyArgs>(args?: SelectSubset<T, sheetsCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Sheets and returns the data saved in the database.
     * @param {sheetsCreateManyAndReturnArgs} args - Arguments to create many Sheets.
     * @example
     * // Create many Sheets
     * const sheets = await prisma.sheets.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Sheets and only return the `id`
     * const sheetsWithIdOnly = await prisma.sheets.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends sheetsCreateManyAndReturnArgs>(args?: SelectSubset<T, sheetsCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$sheetsPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Sheets.
     * @param {sheetsDeleteArgs} args - Arguments to delete one Sheets.
     * @example
     * // Delete one Sheets
     * const Sheets = await prisma.sheets.delete({
     *   where: {
     *     // ... filter to delete one Sheets
     *   }
     * })
     * 
     */
    delete<T extends sheetsDeleteArgs>(args: SelectSubset<T, sheetsDeleteArgs<ExtArgs>>): Prisma__sheetsClient<$Result.GetResult<Prisma.$sheetsPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Sheets.
     * @param {sheetsUpdateArgs} args - Arguments to update one Sheets.
     * @example
     * // Update one Sheets
     * const sheets = await prisma.sheets.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends sheetsUpdateArgs>(args: SelectSubset<T, sheetsUpdateArgs<ExtArgs>>): Prisma__sheetsClient<$Result.GetResult<Prisma.$sheetsPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Sheets.
     * @param {sheetsDeleteManyArgs} args - Arguments to filter Sheets to delete.
     * @example
     * // Delete a few Sheets
     * const { count } = await prisma.sheets.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends sheetsDeleteManyArgs>(args?: SelectSubset<T, sheetsDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Sheets.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {sheetsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Sheets
     * const sheets = await prisma.sheets.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends sheetsUpdateManyArgs>(args: SelectSubset<T, sheetsUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Sheets and returns the data updated in the database.
     * @param {sheetsUpdateManyAndReturnArgs} args - Arguments to update many Sheets.
     * @example
     * // Update many Sheets
     * const sheets = await prisma.sheets.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Sheets and only return the `id`
     * const sheetsWithIdOnly = await prisma.sheets.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends sheetsUpdateManyAndReturnArgs>(args: SelectSubset<T, sheetsUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$sheetsPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Sheets.
     * @param {sheetsUpsertArgs} args - Arguments to update or create a Sheets.
     * @example
     * // Update or create a Sheets
     * const sheets = await prisma.sheets.upsert({
     *   create: {
     *     // ... data to create a Sheets
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Sheets we want to update
     *   }
     * })
     */
    upsert<T extends sheetsUpsertArgs>(args: SelectSubset<T, sheetsUpsertArgs<ExtArgs>>): Prisma__sheetsClient<$Result.GetResult<Prisma.$sheetsPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Sheets.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {sheetsCountArgs} args - Arguments to filter Sheets to count.
     * @example
     * // Count the number of Sheets
     * const count = await prisma.sheets.count({
     *   where: {
     *     // ... the filter for the Sheets we want to count
     *   }
     * })
    **/
    count<T extends sheetsCountArgs>(
      args?: Subset<T, sheetsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], SheetsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Sheets.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SheetsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends SheetsAggregateArgs>(args: Subset<T, SheetsAggregateArgs>): Prisma.PrismaPromise<GetSheetsAggregateType<T>>

    /**
     * Group by Sheets.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {sheetsGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends sheetsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: sheetsGroupByArgs['orderBy'] }
        : { orderBy?: sheetsGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, sheetsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetSheetsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the sheets model
   */
  readonly fields: sheetsFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for sheets.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__sheetsClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the sheets model
   */
  interface sheetsFieldRefs {
    readonly id: FieldRef<"sheets", 'Int'>
    readonly data: FieldRef<"sheets", 'Json'>
    readonly createdAt: FieldRef<"sheets", 'DateTime'>
    readonly updatedAt: FieldRef<"sheets", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * sheets findUnique
   */
  export type sheetsFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the sheets
     */
    select?: sheetsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the sheets
     */
    omit?: sheetsOmit<ExtArgs> | null
    /**
     * Filter, which sheets to fetch.
     */
    where: sheetsWhereUniqueInput
  }

  /**
   * sheets findUniqueOrThrow
   */
  export type sheetsFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the sheets
     */
    select?: sheetsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the sheets
     */
    omit?: sheetsOmit<ExtArgs> | null
    /**
     * Filter, which sheets to fetch.
     */
    where: sheetsWhereUniqueInput
  }

  /**
   * sheets findFirst
   */
  export type sheetsFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the sheets
     */
    select?: sheetsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the sheets
     */
    omit?: sheetsOmit<ExtArgs> | null
    /**
     * Filter, which sheets to fetch.
     */
    where?: sheetsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of sheets to fetch.
     */
    orderBy?: sheetsOrderByWithRelationInput | sheetsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for sheets.
     */
    cursor?: sheetsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` sheets from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` sheets.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of sheets.
     */
    distinct?: SheetsScalarFieldEnum | SheetsScalarFieldEnum[]
  }

  /**
   * sheets findFirstOrThrow
   */
  export type sheetsFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the sheets
     */
    select?: sheetsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the sheets
     */
    omit?: sheetsOmit<ExtArgs> | null
    /**
     * Filter, which sheets to fetch.
     */
    where?: sheetsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of sheets to fetch.
     */
    orderBy?: sheetsOrderByWithRelationInput | sheetsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for sheets.
     */
    cursor?: sheetsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` sheets from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` sheets.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of sheets.
     */
    distinct?: SheetsScalarFieldEnum | SheetsScalarFieldEnum[]
  }

  /**
   * sheets findMany
   */
  export type sheetsFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the sheets
     */
    select?: sheetsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the sheets
     */
    omit?: sheetsOmit<ExtArgs> | null
    /**
     * Filter, which sheets to fetch.
     */
    where?: sheetsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of sheets to fetch.
     */
    orderBy?: sheetsOrderByWithRelationInput | sheetsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing sheets.
     */
    cursor?: sheetsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` sheets from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` sheets.
     */
    skip?: number
    distinct?: SheetsScalarFieldEnum | SheetsScalarFieldEnum[]
  }

  /**
   * sheets create
   */
  export type sheetsCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the sheets
     */
    select?: sheetsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the sheets
     */
    omit?: sheetsOmit<ExtArgs> | null
    /**
     * The data needed to create a sheets.
     */
    data: XOR<sheetsCreateInput, sheetsUncheckedCreateInput>
  }

  /**
   * sheets createMany
   */
  export type sheetsCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many sheets.
     */
    data: sheetsCreateManyInput | sheetsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * sheets createManyAndReturn
   */
  export type sheetsCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the sheets
     */
    select?: sheetsSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the sheets
     */
    omit?: sheetsOmit<ExtArgs> | null
    /**
     * The data used to create many sheets.
     */
    data: sheetsCreateManyInput | sheetsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * sheets update
   */
  export type sheetsUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the sheets
     */
    select?: sheetsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the sheets
     */
    omit?: sheetsOmit<ExtArgs> | null
    /**
     * The data needed to update a sheets.
     */
    data: XOR<sheetsUpdateInput, sheetsUncheckedUpdateInput>
    /**
     * Choose, which sheets to update.
     */
    where: sheetsWhereUniqueInput
  }

  /**
   * sheets updateMany
   */
  export type sheetsUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update sheets.
     */
    data: XOR<sheetsUpdateManyMutationInput, sheetsUncheckedUpdateManyInput>
    /**
     * Filter which sheets to update
     */
    where?: sheetsWhereInput
    /**
     * Limit how many sheets to update.
     */
    limit?: number
  }

  /**
   * sheets updateManyAndReturn
   */
  export type sheetsUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the sheets
     */
    select?: sheetsSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the sheets
     */
    omit?: sheetsOmit<ExtArgs> | null
    /**
     * The data used to update sheets.
     */
    data: XOR<sheetsUpdateManyMutationInput, sheetsUncheckedUpdateManyInput>
    /**
     * Filter which sheets to update
     */
    where?: sheetsWhereInput
    /**
     * Limit how many sheets to update.
     */
    limit?: number
  }

  /**
   * sheets upsert
   */
  export type sheetsUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the sheets
     */
    select?: sheetsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the sheets
     */
    omit?: sheetsOmit<ExtArgs> | null
    /**
     * The filter to search for the sheets to update in case it exists.
     */
    where: sheetsWhereUniqueInput
    /**
     * In case the sheets found by the `where` argument doesn't exist, create a new sheets with this data.
     */
    create: XOR<sheetsCreateInput, sheetsUncheckedCreateInput>
    /**
     * In case the sheets was found with the provided `where` argument, update it with this data.
     */
    update: XOR<sheetsUpdateInput, sheetsUncheckedUpdateInput>
  }

  /**
   * sheets delete
   */
  export type sheetsDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the sheets
     */
    select?: sheetsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the sheets
     */
    omit?: sheetsOmit<ExtArgs> | null
    /**
     * Filter which sheets to delete.
     */
    where: sheetsWhereUniqueInput
  }

  /**
   * sheets deleteMany
   */
  export type sheetsDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which sheets to delete
     */
    where?: sheetsWhereInput
    /**
     * Limit how many sheets to delete.
     */
    limit?: number
  }

  /**
   * sheets without action
   */
  export type sheetsDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the sheets
     */
    select?: sheetsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the sheets
     */
    omit?: sheetsOmit<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const UsersScalarFieldEnum: {
    id: 'id',
    email: 'email',
    password: 'password',
    name: 'name',
    recoveryTokens: 'recoveryTokens',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type UsersScalarFieldEnum = (typeof UsersScalarFieldEnum)[keyof typeof UsersScalarFieldEnum]


  export const Password_reset_tokensScalarFieldEnum: {
    id: 'id',
    token: 'token',
    userId: 'userId',
    expiresAt: 'expiresAt',
    createdAt: 'createdAt'
  };

  export type Password_reset_tokensScalarFieldEnum = (typeof Password_reset_tokensScalarFieldEnum)[keyof typeof Password_reset_tokensScalarFieldEnum]


  export const TownsScalarFieldEnum: {
    id: 'id',
    name: 'name',
    size: 'size',
    whether: 'whether',
    history: 'history',
    locationDescription: 'locationDescription',
    economy: 'economy',
    criminality: 'criminality',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type TownsScalarFieldEnum = (typeof TownsScalarFieldEnum)[keyof typeof TownsScalarFieldEnum]


  export const NpcsScalarFieldEnum: {
    id: 'id',
    townId: 'townId',
    name: 'name',
    race: 'race',
    age: 'age',
    description: 'description',
    ocupation: 'ocupation',
    history: 'history',
    interest: 'interest',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type NpcsScalarFieldEnum = (typeof NpcsScalarFieldEnum)[keyof typeof NpcsScalarFieldEnum]


  export const LocationsScalarFieldEnum: {
    id: 'id',
    townId: 'townId',
    name: 'name',
    description: 'description',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type LocationsScalarFieldEnum = (typeof LocationsScalarFieldEnum)[keyof typeof LocationsScalarFieldEnum]


  export const SheetsScalarFieldEnum: {
    id: 'id',
    data: 'data',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type SheetsScalarFieldEnum = (typeof SheetsScalarFieldEnum)[keyof typeof SheetsScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const JsonNullValueInput: {
    JsonNull: typeof JsonNull
  };

  export type JsonNullValueInput = (typeof JsonNullValueInput)[keyof typeof JsonNullValueInput]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  export const JsonNullValueFilter: {
    DbNull: typeof DbNull,
    JsonNull: typeof JsonNull,
    AnyNull: typeof AnyNull
  };

  export type JsonNullValueFilter = (typeof JsonNullValueFilter)[keyof typeof JsonNullValueFilter]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'Json'
   */
  export type JsonFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Json'>
    


  /**
   * Reference to a field of type 'QueryMode'
   */
  export type EnumQueryModeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'QueryMode'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    
  /**
   * Deep Input Types
   */


  export type usersWhereInput = {
    AND?: usersWhereInput | usersWhereInput[]
    OR?: usersWhereInput[]
    NOT?: usersWhereInput | usersWhereInput[]
    id?: IntFilter<"users"> | number
    email?: StringFilter<"users"> | string
    password?: StringFilter<"users"> | string
    name?: StringFilter<"users"> | string
    recoveryTokens?: StringNullableListFilter<"users">
    createdAt?: DateTimeFilter<"users"> | Date | string
    updatedAt?: DateTimeFilter<"users"> | Date | string
    PasswordResetToken?: Password_reset_tokensListRelationFilter
  }

  export type usersOrderByWithRelationInput = {
    id?: SortOrder
    email?: SortOrder
    password?: SortOrder
    name?: SortOrder
    recoveryTokens?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    PasswordResetToken?: password_reset_tokensOrderByRelationAggregateInput
  }

  export type usersWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    email?: string
    AND?: usersWhereInput | usersWhereInput[]
    OR?: usersWhereInput[]
    NOT?: usersWhereInput | usersWhereInput[]
    password?: StringFilter<"users"> | string
    name?: StringFilter<"users"> | string
    recoveryTokens?: StringNullableListFilter<"users">
    createdAt?: DateTimeFilter<"users"> | Date | string
    updatedAt?: DateTimeFilter<"users"> | Date | string
    PasswordResetToken?: Password_reset_tokensListRelationFilter
  }, "id" | "email">

  export type usersOrderByWithAggregationInput = {
    id?: SortOrder
    email?: SortOrder
    password?: SortOrder
    name?: SortOrder
    recoveryTokens?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: usersCountOrderByAggregateInput
    _avg?: usersAvgOrderByAggregateInput
    _max?: usersMaxOrderByAggregateInput
    _min?: usersMinOrderByAggregateInput
    _sum?: usersSumOrderByAggregateInput
  }

  export type usersScalarWhereWithAggregatesInput = {
    AND?: usersScalarWhereWithAggregatesInput | usersScalarWhereWithAggregatesInput[]
    OR?: usersScalarWhereWithAggregatesInput[]
    NOT?: usersScalarWhereWithAggregatesInput | usersScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"users"> | number
    email?: StringWithAggregatesFilter<"users"> | string
    password?: StringWithAggregatesFilter<"users"> | string
    name?: StringWithAggregatesFilter<"users"> | string
    recoveryTokens?: StringNullableListFilter<"users">
    createdAt?: DateTimeWithAggregatesFilter<"users"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"users"> | Date | string
  }

  export type password_reset_tokensWhereInput = {
    AND?: password_reset_tokensWhereInput | password_reset_tokensWhereInput[]
    OR?: password_reset_tokensWhereInput[]
    NOT?: password_reset_tokensWhereInput | password_reset_tokensWhereInput[]
    id?: IntFilter<"password_reset_tokens"> | number
    token?: StringFilter<"password_reset_tokens"> | string
    userId?: IntFilter<"password_reset_tokens"> | number
    expiresAt?: DateTimeFilter<"password_reset_tokens"> | Date | string
    createdAt?: DateTimeFilter<"password_reset_tokens"> | Date | string
    user?: XOR<UsersScalarRelationFilter, usersWhereInput>
  }

  export type password_reset_tokensOrderByWithRelationInput = {
    id?: SortOrder
    token?: SortOrder
    userId?: SortOrder
    expiresAt?: SortOrder
    createdAt?: SortOrder
    user?: usersOrderByWithRelationInput
  }

  export type password_reset_tokensWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    token?: string
    AND?: password_reset_tokensWhereInput | password_reset_tokensWhereInput[]
    OR?: password_reset_tokensWhereInput[]
    NOT?: password_reset_tokensWhereInput | password_reset_tokensWhereInput[]
    userId?: IntFilter<"password_reset_tokens"> | number
    expiresAt?: DateTimeFilter<"password_reset_tokens"> | Date | string
    createdAt?: DateTimeFilter<"password_reset_tokens"> | Date | string
    user?: XOR<UsersScalarRelationFilter, usersWhereInput>
  }, "id" | "token">

  export type password_reset_tokensOrderByWithAggregationInput = {
    id?: SortOrder
    token?: SortOrder
    userId?: SortOrder
    expiresAt?: SortOrder
    createdAt?: SortOrder
    _count?: password_reset_tokensCountOrderByAggregateInput
    _avg?: password_reset_tokensAvgOrderByAggregateInput
    _max?: password_reset_tokensMaxOrderByAggregateInput
    _min?: password_reset_tokensMinOrderByAggregateInput
    _sum?: password_reset_tokensSumOrderByAggregateInput
  }

  export type password_reset_tokensScalarWhereWithAggregatesInput = {
    AND?: password_reset_tokensScalarWhereWithAggregatesInput | password_reset_tokensScalarWhereWithAggregatesInput[]
    OR?: password_reset_tokensScalarWhereWithAggregatesInput[]
    NOT?: password_reset_tokensScalarWhereWithAggregatesInput | password_reset_tokensScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"password_reset_tokens"> | number
    token?: StringWithAggregatesFilter<"password_reset_tokens"> | string
    userId?: IntWithAggregatesFilter<"password_reset_tokens"> | number
    expiresAt?: DateTimeWithAggregatesFilter<"password_reset_tokens"> | Date | string
    createdAt?: DateTimeWithAggregatesFilter<"password_reset_tokens"> | Date | string
  }

  export type townsWhereInput = {
    AND?: townsWhereInput | townsWhereInput[]
    OR?: townsWhereInput[]
    NOT?: townsWhereInput | townsWhereInput[]
    id?: IntFilter<"towns"> | number
    name?: StringFilter<"towns"> | string
    size?: StringFilter<"towns"> | string
    whether?: StringFilter<"towns"> | string
    history?: StringFilter<"towns"> | string
    locationDescription?: StringFilter<"towns"> | string
    economy?: StringFilter<"towns"> | string
    criminality?: StringFilter<"towns"> | string
    createdAt?: DateTimeFilter<"towns"> | Date | string
    updatedAt?: DateTimeFilter<"towns"> | Date | string
    locations?: LocationsListRelationFilter
    npcs?: NpcsListRelationFilter
  }

  export type townsOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    size?: SortOrder
    whether?: SortOrder
    history?: SortOrder
    locationDescription?: SortOrder
    economy?: SortOrder
    criminality?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    locations?: locationsOrderByRelationAggregateInput
    npcs?: npcsOrderByRelationAggregateInput
  }

  export type townsWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: townsWhereInput | townsWhereInput[]
    OR?: townsWhereInput[]
    NOT?: townsWhereInput | townsWhereInput[]
    name?: StringFilter<"towns"> | string
    size?: StringFilter<"towns"> | string
    whether?: StringFilter<"towns"> | string
    history?: StringFilter<"towns"> | string
    locationDescription?: StringFilter<"towns"> | string
    economy?: StringFilter<"towns"> | string
    criminality?: StringFilter<"towns"> | string
    createdAt?: DateTimeFilter<"towns"> | Date | string
    updatedAt?: DateTimeFilter<"towns"> | Date | string
    locations?: LocationsListRelationFilter
    npcs?: NpcsListRelationFilter
  }, "id">

  export type townsOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    size?: SortOrder
    whether?: SortOrder
    history?: SortOrder
    locationDescription?: SortOrder
    economy?: SortOrder
    criminality?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: townsCountOrderByAggregateInput
    _avg?: townsAvgOrderByAggregateInput
    _max?: townsMaxOrderByAggregateInput
    _min?: townsMinOrderByAggregateInput
    _sum?: townsSumOrderByAggregateInput
  }

  export type townsScalarWhereWithAggregatesInput = {
    AND?: townsScalarWhereWithAggregatesInput | townsScalarWhereWithAggregatesInput[]
    OR?: townsScalarWhereWithAggregatesInput[]
    NOT?: townsScalarWhereWithAggregatesInput | townsScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"towns"> | number
    name?: StringWithAggregatesFilter<"towns"> | string
    size?: StringWithAggregatesFilter<"towns"> | string
    whether?: StringWithAggregatesFilter<"towns"> | string
    history?: StringWithAggregatesFilter<"towns"> | string
    locationDescription?: StringWithAggregatesFilter<"towns"> | string
    economy?: StringWithAggregatesFilter<"towns"> | string
    criminality?: StringWithAggregatesFilter<"towns"> | string
    createdAt?: DateTimeWithAggregatesFilter<"towns"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"towns"> | Date | string
  }

  export type npcsWhereInput = {
    AND?: npcsWhereInput | npcsWhereInput[]
    OR?: npcsWhereInput[]
    NOT?: npcsWhereInput | npcsWhereInput[]
    id?: IntFilter<"npcs"> | number
    townId?: IntNullableFilter<"npcs"> | number | null
    name?: StringFilter<"npcs"> | string
    race?: StringFilter<"npcs"> | string
    age?: StringFilter<"npcs"> | string
    description?: StringFilter<"npcs"> | string
    ocupation?: StringFilter<"npcs"> | string
    history?: StringFilter<"npcs"> | string
    interest?: StringFilter<"npcs"> | string
    createdAt?: DateTimeFilter<"npcs"> | Date | string
    updatedAt?: DateTimeFilter<"npcs"> | Date | string
    town?: XOR<TownsNullableScalarRelationFilter, townsWhereInput> | null
  }

  export type npcsOrderByWithRelationInput = {
    id?: SortOrder
    townId?: SortOrderInput | SortOrder
    name?: SortOrder
    race?: SortOrder
    age?: SortOrder
    description?: SortOrder
    ocupation?: SortOrder
    history?: SortOrder
    interest?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    town?: townsOrderByWithRelationInput
  }

  export type npcsWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: npcsWhereInput | npcsWhereInput[]
    OR?: npcsWhereInput[]
    NOT?: npcsWhereInput | npcsWhereInput[]
    townId?: IntNullableFilter<"npcs"> | number | null
    name?: StringFilter<"npcs"> | string
    race?: StringFilter<"npcs"> | string
    age?: StringFilter<"npcs"> | string
    description?: StringFilter<"npcs"> | string
    ocupation?: StringFilter<"npcs"> | string
    history?: StringFilter<"npcs"> | string
    interest?: StringFilter<"npcs"> | string
    createdAt?: DateTimeFilter<"npcs"> | Date | string
    updatedAt?: DateTimeFilter<"npcs"> | Date | string
    town?: XOR<TownsNullableScalarRelationFilter, townsWhereInput> | null
  }, "id">

  export type npcsOrderByWithAggregationInput = {
    id?: SortOrder
    townId?: SortOrderInput | SortOrder
    name?: SortOrder
    race?: SortOrder
    age?: SortOrder
    description?: SortOrder
    ocupation?: SortOrder
    history?: SortOrder
    interest?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: npcsCountOrderByAggregateInput
    _avg?: npcsAvgOrderByAggregateInput
    _max?: npcsMaxOrderByAggregateInput
    _min?: npcsMinOrderByAggregateInput
    _sum?: npcsSumOrderByAggregateInput
  }

  export type npcsScalarWhereWithAggregatesInput = {
    AND?: npcsScalarWhereWithAggregatesInput | npcsScalarWhereWithAggregatesInput[]
    OR?: npcsScalarWhereWithAggregatesInput[]
    NOT?: npcsScalarWhereWithAggregatesInput | npcsScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"npcs"> | number
    townId?: IntNullableWithAggregatesFilter<"npcs"> | number | null
    name?: StringWithAggregatesFilter<"npcs"> | string
    race?: StringWithAggregatesFilter<"npcs"> | string
    age?: StringWithAggregatesFilter<"npcs"> | string
    description?: StringWithAggregatesFilter<"npcs"> | string
    ocupation?: StringWithAggregatesFilter<"npcs"> | string
    history?: StringWithAggregatesFilter<"npcs"> | string
    interest?: StringWithAggregatesFilter<"npcs"> | string
    createdAt?: DateTimeWithAggregatesFilter<"npcs"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"npcs"> | Date | string
  }

  export type locationsWhereInput = {
    AND?: locationsWhereInput | locationsWhereInput[]
    OR?: locationsWhereInput[]
    NOT?: locationsWhereInput | locationsWhereInput[]
    id?: IntFilter<"locations"> | number
    townId?: IntFilter<"locations"> | number
    name?: StringFilter<"locations"> | string
    description?: StringFilter<"locations"> | string
    createdAt?: DateTimeFilter<"locations"> | Date | string
    updatedAt?: DateTimeFilter<"locations"> | Date | string
    town?: XOR<TownsScalarRelationFilter, townsWhereInput>
  }

  export type locationsOrderByWithRelationInput = {
    id?: SortOrder
    townId?: SortOrder
    name?: SortOrder
    description?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    town?: townsOrderByWithRelationInput
  }

  export type locationsWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: locationsWhereInput | locationsWhereInput[]
    OR?: locationsWhereInput[]
    NOT?: locationsWhereInput | locationsWhereInput[]
    townId?: IntFilter<"locations"> | number
    name?: StringFilter<"locations"> | string
    description?: StringFilter<"locations"> | string
    createdAt?: DateTimeFilter<"locations"> | Date | string
    updatedAt?: DateTimeFilter<"locations"> | Date | string
    town?: XOR<TownsScalarRelationFilter, townsWhereInput>
  }, "id">

  export type locationsOrderByWithAggregationInput = {
    id?: SortOrder
    townId?: SortOrder
    name?: SortOrder
    description?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: locationsCountOrderByAggregateInput
    _avg?: locationsAvgOrderByAggregateInput
    _max?: locationsMaxOrderByAggregateInput
    _min?: locationsMinOrderByAggregateInput
    _sum?: locationsSumOrderByAggregateInput
  }

  export type locationsScalarWhereWithAggregatesInput = {
    AND?: locationsScalarWhereWithAggregatesInput | locationsScalarWhereWithAggregatesInput[]
    OR?: locationsScalarWhereWithAggregatesInput[]
    NOT?: locationsScalarWhereWithAggregatesInput | locationsScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"locations"> | number
    townId?: IntWithAggregatesFilter<"locations"> | number
    name?: StringWithAggregatesFilter<"locations"> | string
    description?: StringWithAggregatesFilter<"locations"> | string
    createdAt?: DateTimeWithAggregatesFilter<"locations"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"locations"> | Date | string
  }

  export type sheetsWhereInput = {
    AND?: sheetsWhereInput | sheetsWhereInput[]
    OR?: sheetsWhereInput[]
    NOT?: sheetsWhereInput | sheetsWhereInput[]
    id?: IntFilter<"sheets"> | number
    data?: JsonFilter<"sheets">
    createdAt?: DateTimeFilter<"sheets"> | Date | string
    updatedAt?: DateTimeFilter<"sheets"> | Date | string
  }

  export type sheetsOrderByWithRelationInput = {
    id?: SortOrder
    data?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type sheetsWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: sheetsWhereInput | sheetsWhereInput[]
    OR?: sheetsWhereInput[]
    NOT?: sheetsWhereInput | sheetsWhereInput[]
    data?: JsonFilter<"sheets">
    createdAt?: DateTimeFilter<"sheets"> | Date | string
    updatedAt?: DateTimeFilter<"sheets"> | Date | string
  }, "id">

  export type sheetsOrderByWithAggregationInput = {
    id?: SortOrder
    data?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: sheetsCountOrderByAggregateInput
    _avg?: sheetsAvgOrderByAggregateInput
    _max?: sheetsMaxOrderByAggregateInput
    _min?: sheetsMinOrderByAggregateInput
    _sum?: sheetsSumOrderByAggregateInput
  }

  export type sheetsScalarWhereWithAggregatesInput = {
    AND?: sheetsScalarWhereWithAggregatesInput | sheetsScalarWhereWithAggregatesInput[]
    OR?: sheetsScalarWhereWithAggregatesInput[]
    NOT?: sheetsScalarWhereWithAggregatesInput | sheetsScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"sheets"> | number
    data?: JsonWithAggregatesFilter<"sheets">
    createdAt?: DateTimeWithAggregatesFilter<"sheets"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"sheets"> | Date | string
  }

  export type usersCreateInput = {
    email: string
    password: string
    name: string
    recoveryTokens?: usersCreaterecoveryTokensInput | string[]
    createdAt?: Date | string
    updatedAt?: Date | string
    PasswordResetToken?: password_reset_tokensCreateNestedManyWithoutUserInput
  }

  export type usersUncheckedCreateInput = {
    id?: number
    email: string
    password: string
    name: string
    recoveryTokens?: usersCreaterecoveryTokensInput | string[]
    createdAt?: Date | string
    updatedAt?: Date | string
    PasswordResetToken?: password_reset_tokensUncheckedCreateNestedManyWithoutUserInput
  }

  export type usersUpdateInput = {
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    recoveryTokens?: usersUpdaterecoveryTokensInput | string[]
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    PasswordResetToken?: password_reset_tokensUpdateManyWithoutUserNestedInput
  }

  export type usersUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    recoveryTokens?: usersUpdaterecoveryTokensInput | string[]
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    PasswordResetToken?: password_reset_tokensUncheckedUpdateManyWithoutUserNestedInput
  }

  export type usersCreateManyInput = {
    id?: number
    email: string
    password: string
    name: string
    recoveryTokens?: usersCreaterecoveryTokensInput | string[]
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type usersUpdateManyMutationInput = {
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    recoveryTokens?: usersUpdaterecoveryTokensInput | string[]
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type usersUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    recoveryTokens?: usersUpdaterecoveryTokensInput | string[]
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type password_reset_tokensCreateInput = {
    token: string
    expiresAt: Date | string
    createdAt?: Date | string
    user: usersCreateNestedOneWithoutPasswordResetTokenInput
  }

  export type password_reset_tokensUncheckedCreateInput = {
    id?: number
    token: string
    userId: number
    expiresAt: Date | string
    createdAt?: Date | string
  }

  export type password_reset_tokensUpdateInput = {
    token?: StringFieldUpdateOperationsInput | string
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: usersUpdateOneRequiredWithoutPasswordResetTokenNestedInput
  }

  export type password_reset_tokensUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    token?: StringFieldUpdateOperationsInput | string
    userId?: IntFieldUpdateOperationsInput | number
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type password_reset_tokensCreateManyInput = {
    id?: number
    token: string
    userId: number
    expiresAt: Date | string
    createdAt?: Date | string
  }

  export type password_reset_tokensUpdateManyMutationInput = {
    token?: StringFieldUpdateOperationsInput | string
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type password_reset_tokensUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    token?: StringFieldUpdateOperationsInput | string
    userId?: IntFieldUpdateOperationsInput | number
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type townsCreateInput = {
    name?: string
    size: string
    whether: string
    history: string
    locationDescription: string
    economy: string
    criminality: string
    createdAt?: Date | string
    updatedAt?: Date | string
    locations?: locationsCreateNestedManyWithoutTownInput
    npcs?: npcsCreateNestedManyWithoutTownInput
  }

  export type townsUncheckedCreateInput = {
    id?: number
    name?: string
    size: string
    whether: string
    history: string
    locationDescription: string
    economy: string
    criminality: string
    createdAt?: Date | string
    updatedAt?: Date | string
    locations?: locationsUncheckedCreateNestedManyWithoutTownInput
    npcs?: npcsUncheckedCreateNestedManyWithoutTownInput
  }

  export type townsUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    size?: StringFieldUpdateOperationsInput | string
    whether?: StringFieldUpdateOperationsInput | string
    history?: StringFieldUpdateOperationsInput | string
    locationDescription?: StringFieldUpdateOperationsInput | string
    economy?: StringFieldUpdateOperationsInput | string
    criminality?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    locations?: locationsUpdateManyWithoutTownNestedInput
    npcs?: npcsUpdateManyWithoutTownNestedInput
  }

  export type townsUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    size?: StringFieldUpdateOperationsInput | string
    whether?: StringFieldUpdateOperationsInput | string
    history?: StringFieldUpdateOperationsInput | string
    locationDescription?: StringFieldUpdateOperationsInput | string
    economy?: StringFieldUpdateOperationsInput | string
    criminality?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    locations?: locationsUncheckedUpdateManyWithoutTownNestedInput
    npcs?: npcsUncheckedUpdateManyWithoutTownNestedInput
  }

  export type townsCreateManyInput = {
    id?: number
    name?: string
    size: string
    whether: string
    history: string
    locationDescription: string
    economy: string
    criminality: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type townsUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
    size?: StringFieldUpdateOperationsInput | string
    whether?: StringFieldUpdateOperationsInput | string
    history?: StringFieldUpdateOperationsInput | string
    locationDescription?: StringFieldUpdateOperationsInput | string
    economy?: StringFieldUpdateOperationsInput | string
    criminality?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type townsUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    size?: StringFieldUpdateOperationsInput | string
    whether?: StringFieldUpdateOperationsInput | string
    history?: StringFieldUpdateOperationsInput | string
    locationDescription?: StringFieldUpdateOperationsInput | string
    economy?: StringFieldUpdateOperationsInput | string
    criminality?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type npcsCreateInput = {
    name: string
    race: string
    age: string
    description: string
    ocupation: string
    history: string
    interest: string
    createdAt?: Date | string
    updatedAt?: Date | string
    town?: townsCreateNestedOneWithoutNpcsInput
  }

  export type npcsUncheckedCreateInput = {
    id?: number
    townId?: number | null
    name: string
    race: string
    age: string
    description: string
    ocupation: string
    history: string
    interest: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type npcsUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    race?: StringFieldUpdateOperationsInput | string
    age?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    ocupation?: StringFieldUpdateOperationsInput | string
    history?: StringFieldUpdateOperationsInput | string
    interest?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    town?: townsUpdateOneWithoutNpcsNestedInput
  }

  export type npcsUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    townId?: NullableIntFieldUpdateOperationsInput | number | null
    name?: StringFieldUpdateOperationsInput | string
    race?: StringFieldUpdateOperationsInput | string
    age?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    ocupation?: StringFieldUpdateOperationsInput | string
    history?: StringFieldUpdateOperationsInput | string
    interest?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type npcsCreateManyInput = {
    id?: number
    townId?: number | null
    name: string
    race: string
    age: string
    description: string
    ocupation: string
    history: string
    interest: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type npcsUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
    race?: StringFieldUpdateOperationsInput | string
    age?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    ocupation?: StringFieldUpdateOperationsInput | string
    history?: StringFieldUpdateOperationsInput | string
    interest?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type npcsUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    townId?: NullableIntFieldUpdateOperationsInput | number | null
    name?: StringFieldUpdateOperationsInput | string
    race?: StringFieldUpdateOperationsInput | string
    age?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    ocupation?: StringFieldUpdateOperationsInput | string
    history?: StringFieldUpdateOperationsInput | string
    interest?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type locationsCreateInput = {
    name: string
    description: string
    createdAt?: Date | string
    updatedAt?: Date | string
    town: townsCreateNestedOneWithoutLocationsInput
  }

  export type locationsUncheckedCreateInput = {
    id?: number
    townId: number
    name: string
    description: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type locationsUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    town?: townsUpdateOneRequiredWithoutLocationsNestedInput
  }

  export type locationsUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    townId?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type locationsCreateManyInput = {
    id?: number
    townId: number
    name: string
    description: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type locationsUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type locationsUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    townId?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type sheetsCreateInput = {
    data: JsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type sheetsUncheckedCreateInput = {
    id?: number
    data: JsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type sheetsUpdateInput = {
    data?: JsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type sheetsUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    data?: JsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type sheetsCreateManyInput = {
    id?: number
    data: JsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type sheetsUpdateManyMutationInput = {
    data?: JsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type sheetsUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    data?: JsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type StringNullableListFilter<$PrismaModel = never> = {
    equals?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    has?: string | StringFieldRefInput<$PrismaModel> | null
    hasEvery?: string[] | ListStringFieldRefInput<$PrismaModel>
    hasSome?: string[] | ListStringFieldRefInput<$PrismaModel>
    isEmpty?: boolean
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type Password_reset_tokensListRelationFilter = {
    every?: password_reset_tokensWhereInput
    some?: password_reset_tokensWhereInput
    none?: password_reset_tokensWhereInput
  }

  export type password_reset_tokensOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type usersCountOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    password?: SortOrder
    name?: SortOrder
    recoveryTokens?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type usersAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type usersMaxOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    password?: SortOrder
    name?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type usersMinOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    password?: SortOrder
    name?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type usersSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type UsersScalarRelationFilter = {
    is?: usersWhereInput
    isNot?: usersWhereInput
  }

  export type password_reset_tokensCountOrderByAggregateInput = {
    id?: SortOrder
    token?: SortOrder
    userId?: SortOrder
    expiresAt?: SortOrder
    createdAt?: SortOrder
  }

  export type password_reset_tokensAvgOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
  }

  export type password_reset_tokensMaxOrderByAggregateInput = {
    id?: SortOrder
    token?: SortOrder
    userId?: SortOrder
    expiresAt?: SortOrder
    createdAt?: SortOrder
  }

  export type password_reset_tokensMinOrderByAggregateInput = {
    id?: SortOrder
    token?: SortOrder
    userId?: SortOrder
    expiresAt?: SortOrder
    createdAt?: SortOrder
  }

  export type password_reset_tokensSumOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
  }

  export type LocationsListRelationFilter = {
    every?: locationsWhereInput
    some?: locationsWhereInput
    none?: locationsWhereInput
  }

  export type NpcsListRelationFilter = {
    every?: npcsWhereInput
    some?: npcsWhereInput
    none?: npcsWhereInput
  }

  export type locationsOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type npcsOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type townsCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    size?: SortOrder
    whether?: SortOrder
    history?: SortOrder
    locationDescription?: SortOrder
    economy?: SortOrder
    criminality?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type townsAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type townsMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    size?: SortOrder
    whether?: SortOrder
    history?: SortOrder
    locationDescription?: SortOrder
    economy?: SortOrder
    criminality?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type townsMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    size?: SortOrder
    whether?: SortOrder
    history?: SortOrder
    locationDescription?: SortOrder
    economy?: SortOrder
    criminality?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type townsSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type IntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type TownsNullableScalarRelationFilter = {
    is?: townsWhereInput | null
    isNot?: townsWhereInput | null
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type npcsCountOrderByAggregateInput = {
    id?: SortOrder
    townId?: SortOrder
    name?: SortOrder
    race?: SortOrder
    age?: SortOrder
    description?: SortOrder
    ocupation?: SortOrder
    history?: SortOrder
    interest?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type npcsAvgOrderByAggregateInput = {
    id?: SortOrder
    townId?: SortOrder
  }

  export type npcsMaxOrderByAggregateInput = {
    id?: SortOrder
    townId?: SortOrder
    name?: SortOrder
    race?: SortOrder
    age?: SortOrder
    description?: SortOrder
    ocupation?: SortOrder
    history?: SortOrder
    interest?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type npcsMinOrderByAggregateInput = {
    id?: SortOrder
    townId?: SortOrder
    name?: SortOrder
    race?: SortOrder
    age?: SortOrder
    description?: SortOrder
    ocupation?: SortOrder
    history?: SortOrder
    interest?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type npcsSumOrderByAggregateInput = {
    id?: SortOrder
    townId?: SortOrder
  }

  export type IntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type TownsScalarRelationFilter = {
    is?: townsWhereInput
    isNot?: townsWhereInput
  }

  export type locationsCountOrderByAggregateInput = {
    id?: SortOrder
    townId?: SortOrder
    name?: SortOrder
    description?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type locationsAvgOrderByAggregateInput = {
    id?: SortOrder
    townId?: SortOrder
  }

  export type locationsMaxOrderByAggregateInput = {
    id?: SortOrder
    townId?: SortOrder
    name?: SortOrder
    description?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type locationsMinOrderByAggregateInput = {
    id?: SortOrder
    townId?: SortOrder
    name?: SortOrder
    description?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type locationsSumOrderByAggregateInput = {
    id?: SortOrder
    townId?: SortOrder
  }
  export type JsonFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<JsonFilterBase<$PrismaModel>>, Exclude<keyof Required<JsonFilterBase<$PrismaModel>>, 'path'>>,
        Required<JsonFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<JsonFilterBase<$PrismaModel>>, 'path'>>

  export type JsonFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
  }

  export type sheetsCountOrderByAggregateInput = {
    id?: SortOrder
    data?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type sheetsAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type sheetsMaxOrderByAggregateInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type sheetsMinOrderByAggregateInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type sheetsSumOrderByAggregateInput = {
    id?: SortOrder
  }
  export type JsonWithAggregatesFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<JsonWithAggregatesFilterBase<$PrismaModel>>, Exclude<keyof Required<JsonWithAggregatesFilterBase<$PrismaModel>>, 'path'>>,
        Required<JsonWithAggregatesFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<JsonWithAggregatesFilterBase<$PrismaModel>>, 'path'>>

  export type JsonWithAggregatesFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedJsonFilter<$PrismaModel>
    _max?: NestedJsonFilter<$PrismaModel>
  }

  export type usersCreaterecoveryTokensInput = {
    set: string[]
  }

  export type password_reset_tokensCreateNestedManyWithoutUserInput = {
    create?: XOR<password_reset_tokensCreateWithoutUserInput, password_reset_tokensUncheckedCreateWithoutUserInput> | password_reset_tokensCreateWithoutUserInput[] | password_reset_tokensUncheckedCreateWithoutUserInput[]
    connectOrCreate?: password_reset_tokensCreateOrConnectWithoutUserInput | password_reset_tokensCreateOrConnectWithoutUserInput[]
    createMany?: password_reset_tokensCreateManyUserInputEnvelope
    connect?: password_reset_tokensWhereUniqueInput | password_reset_tokensWhereUniqueInput[]
  }

  export type password_reset_tokensUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<password_reset_tokensCreateWithoutUserInput, password_reset_tokensUncheckedCreateWithoutUserInput> | password_reset_tokensCreateWithoutUserInput[] | password_reset_tokensUncheckedCreateWithoutUserInput[]
    connectOrCreate?: password_reset_tokensCreateOrConnectWithoutUserInput | password_reset_tokensCreateOrConnectWithoutUserInput[]
    createMany?: password_reset_tokensCreateManyUserInputEnvelope
    connect?: password_reset_tokensWhereUniqueInput | password_reset_tokensWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type usersUpdaterecoveryTokensInput = {
    set?: string[]
    push?: string | string[]
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type password_reset_tokensUpdateManyWithoutUserNestedInput = {
    create?: XOR<password_reset_tokensCreateWithoutUserInput, password_reset_tokensUncheckedCreateWithoutUserInput> | password_reset_tokensCreateWithoutUserInput[] | password_reset_tokensUncheckedCreateWithoutUserInput[]
    connectOrCreate?: password_reset_tokensCreateOrConnectWithoutUserInput | password_reset_tokensCreateOrConnectWithoutUserInput[]
    upsert?: password_reset_tokensUpsertWithWhereUniqueWithoutUserInput | password_reset_tokensUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: password_reset_tokensCreateManyUserInputEnvelope
    set?: password_reset_tokensWhereUniqueInput | password_reset_tokensWhereUniqueInput[]
    disconnect?: password_reset_tokensWhereUniqueInput | password_reset_tokensWhereUniqueInput[]
    delete?: password_reset_tokensWhereUniqueInput | password_reset_tokensWhereUniqueInput[]
    connect?: password_reset_tokensWhereUniqueInput | password_reset_tokensWhereUniqueInput[]
    update?: password_reset_tokensUpdateWithWhereUniqueWithoutUserInput | password_reset_tokensUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: password_reset_tokensUpdateManyWithWhereWithoutUserInput | password_reset_tokensUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: password_reset_tokensScalarWhereInput | password_reset_tokensScalarWhereInput[]
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type password_reset_tokensUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<password_reset_tokensCreateWithoutUserInput, password_reset_tokensUncheckedCreateWithoutUserInput> | password_reset_tokensCreateWithoutUserInput[] | password_reset_tokensUncheckedCreateWithoutUserInput[]
    connectOrCreate?: password_reset_tokensCreateOrConnectWithoutUserInput | password_reset_tokensCreateOrConnectWithoutUserInput[]
    upsert?: password_reset_tokensUpsertWithWhereUniqueWithoutUserInput | password_reset_tokensUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: password_reset_tokensCreateManyUserInputEnvelope
    set?: password_reset_tokensWhereUniqueInput | password_reset_tokensWhereUniqueInput[]
    disconnect?: password_reset_tokensWhereUniqueInput | password_reset_tokensWhereUniqueInput[]
    delete?: password_reset_tokensWhereUniqueInput | password_reset_tokensWhereUniqueInput[]
    connect?: password_reset_tokensWhereUniqueInput | password_reset_tokensWhereUniqueInput[]
    update?: password_reset_tokensUpdateWithWhereUniqueWithoutUserInput | password_reset_tokensUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: password_reset_tokensUpdateManyWithWhereWithoutUserInput | password_reset_tokensUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: password_reset_tokensScalarWhereInput | password_reset_tokensScalarWhereInput[]
  }

  export type usersCreateNestedOneWithoutPasswordResetTokenInput = {
    create?: XOR<usersCreateWithoutPasswordResetTokenInput, usersUncheckedCreateWithoutPasswordResetTokenInput>
    connectOrCreate?: usersCreateOrConnectWithoutPasswordResetTokenInput
    connect?: usersWhereUniqueInput
  }

  export type usersUpdateOneRequiredWithoutPasswordResetTokenNestedInput = {
    create?: XOR<usersCreateWithoutPasswordResetTokenInput, usersUncheckedCreateWithoutPasswordResetTokenInput>
    connectOrCreate?: usersCreateOrConnectWithoutPasswordResetTokenInput
    upsert?: usersUpsertWithoutPasswordResetTokenInput
    connect?: usersWhereUniqueInput
    update?: XOR<XOR<usersUpdateToOneWithWhereWithoutPasswordResetTokenInput, usersUpdateWithoutPasswordResetTokenInput>, usersUncheckedUpdateWithoutPasswordResetTokenInput>
  }

  export type locationsCreateNestedManyWithoutTownInput = {
    create?: XOR<locationsCreateWithoutTownInput, locationsUncheckedCreateWithoutTownInput> | locationsCreateWithoutTownInput[] | locationsUncheckedCreateWithoutTownInput[]
    connectOrCreate?: locationsCreateOrConnectWithoutTownInput | locationsCreateOrConnectWithoutTownInput[]
    createMany?: locationsCreateManyTownInputEnvelope
    connect?: locationsWhereUniqueInput | locationsWhereUniqueInput[]
  }

  export type npcsCreateNestedManyWithoutTownInput = {
    create?: XOR<npcsCreateWithoutTownInput, npcsUncheckedCreateWithoutTownInput> | npcsCreateWithoutTownInput[] | npcsUncheckedCreateWithoutTownInput[]
    connectOrCreate?: npcsCreateOrConnectWithoutTownInput | npcsCreateOrConnectWithoutTownInput[]
    createMany?: npcsCreateManyTownInputEnvelope
    connect?: npcsWhereUniqueInput | npcsWhereUniqueInput[]
  }

  export type locationsUncheckedCreateNestedManyWithoutTownInput = {
    create?: XOR<locationsCreateWithoutTownInput, locationsUncheckedCreateWithoutTownInput> | locationsCreateWithoutTownInput[] | locationsUncheckedCreateWithoutTownInput[]
    connectOrCreate?: locationsCreateOrConnectWithoutTownInput | locationsCreateOrConnectWithoutTownInput[]
    createMany?: locationsCreateManyTownInputEnvelope
    connect?: locationsWhereUniqueInput | locationsWhereUniqueInput[]
  }

  export type npcsUncheckedCreateNestedManyWithoutTownInput = {
    create?: XOR<npcsCreateWithoutTownInput, npcsUncheckedCreateWithoutTownInput> | npcsCreateWithoutTownInput[] | npcsUncheckedCreateWithoutTownInput[]
    connectOrCreate?: npcsCreateOrConnectWithoutTownInput | npcsCreateOrConnectWithoutTownInput[]
    createMany?: npcsCreateManyTownInputEnvelope
    connect?: npcsWhereUniqueInput | npcsWhereUniqueInput[]
  }

  export type locationsUpdateManyWithoutTownNestedInput = {
    create?: XOR<locationsCreateWithoutTownInput, locationsUncheckedCreateWithoutTownInput> | locationsCreateWithoutTownInput[] | locationsUncheckedCreateWithoutTownInput[]
    connectOrCreate?: locationsCreateOrConnectWithoutTownInput | locationsCreateOrConnectWithoutTownInput[]
    upsert?: locationsUpsertWithWhereUniqueWithoutTownInput | locationsUpsertWithWhereUniqueWithoutTownInput[]
    createMany?: locationsCreateManyTownInputEnvelope
    set?: locationsWhereUniqueInput | locationsWhereUniqueInput[]
    disconnect?: locationsWhereUniqueInput | locationsWhereUniqueInput[]
    delete?: locationsWhereUniqueInput | locationsWhereUniqueInput[]
    connect?: locationsWhereUniqueInput | locationsWhereUniqueInput[]
    update?: locationsUpdateWithWhereUniqueWithoutTownInput | locationsUpdateWithWhereUniqueWithoutTownInput[]
    updateMany?: locationsUpdateManyWithWhereWithoutTownInput | locationsUpdateManyWithWhereWithoutTownInput[]
    deleteMany?: locationsScalarWhereInput | locationsScalarWhereInput[]
  }

  export type npcsUpdateManyWithoutTownNestedInput = {
    create?: XOR<npcsCreateWithoutTownInput, npcsUncheckedCreateWithoutTownInput> | npcsCreateWithoutTownInput[] | npcsUncheckedCreateWithoutTownInput[]
    connectOrCreate?: npcsCreateOrConnectWithoutTownInput | npcsCreateOrConnectWithoutTownInput[]
    upsert?: npcsUpsertWithWhereUniqueWithoutTownInput | npcsUpsertWithWhereUniqueWithoutTownInput[]
    createMany?: npcsCreateManyTownInputEnvelope
    set?: npcsWhereUniqueInput | npcsWhereUniqueInput[]
    disconnect?: npcsWhereUniqueInput | npcsWhereUniqueInput[]
    delete?: npcsWhereUniqueInput | npcsWhereUniqueInput[]
    connect?: npcsWhereUniqueInput | npcsWhereUniqueInput[]
    update?: npcsUpdateWithWhereUniqueWithoutTownInput | npcsUpdateWithWhereUniqueWithoutTownInput[]
    updateMany?: npcsUpdateManyWithWhereWithoutTownInput | npcsUpdateManyWithWhereWithoutTownInput[]
    deleteMany?: npcsScalarWhereInput | npcsScalarWhereInput[]
  }

  export type locationsUncheckedUpdateManyWithoutTownNestedInput = {
    create?: XOR<locationsCreateWithoutTownInput, locationsUncheckedCreateWithoutTownInput> | locationsCreateWithoutTownInput[] | locationsUncheckedCreateWithoutTownInput[]
    connectOrCreate?: locationsCreateOrConnectWithoutTownInput | locationsCreateOrConnectWithoutTownInput[]
    upsert?: locationsUpsertWithWhereUniqueWithoutTownInput | locationsUpsertWithWhereUniqueWithoutTownInput[]
    createMany?: locationsCreateManyTownInputEnvelope
    set?: locationsWhereUniqueInput | locationsWhereUniqueInput[]
    disconnect?: locationsWhereUniqueInput | locationsWhereUniqueInput[]
    delete?: locationsWhereUniqueInput | locationsWhereUniqueInput[]
    connect?: locationsWhereUniqueInput | locationsWhereUniqueInput[]
    update?: locationsUpdateWithWhereUniqueWithoutTownInput | locationsUpdateWithWhereUniqueWithoutTownInput[]
    updateMany?: locationsUpdateManyWithWhereWithoutTownInput | locationsUpdateManyWithWhereWithoutTownInput[]
    deleteMany?: locationsScalarWhereInput | locationsScalarWhereInput[]
  }

  export type npcsUncheckedUpdateManyWithoutTownNestedInput = {
    create?: XOR<npcsCreateWithoutTownInput, npcsUncheckedCreateWithoutTownInput> | npcsCreateWithoutTownInput[] | npcsUncheckedCreateWithoutTownInput[]
    connectOrCreate?: npcsCreateOrConnectWithoutTownInput | npcsCreateOrConnectWithoutTownInput[]
    upsert?: npcsUpsertWithWhereUniqueWithoutTownInput | npcsUpsertWithWhereUniqueWithoutTownInput[]
    createMany?: npcsCreateManyTownInputEnvelope
    set?: npcsWhereUniqueInput | npcsWhereUniqueInput[]
    disconnect?: npcsWhereUniqueInput | npcsWhereUniqueInput[]
    delete?: npcsWhereUniqueInput | npcsWhereUniqueInput[]
    connect?: npcsWhereUniqueInput | npcsWhereUniqueInput[]
    update?: npcsUpdateWithWhereUniqueWithoutTownInput | npcsUpdateWithWhereUniqueWithoutTownInput[]
    updateMany?: npcsUpdateManyWithWhereWithoutTownInput | npcsUpdateManyWithWhereWithoutTownInput[]
    deleteMany?: npcsScalarWhereInput | npcsScalarWhereInput[]
  }

  export type townsCreateNestedOneWithoutNpcsInput = {
    create?: XOR<townsCreateWithoutNpcsInput, townsUncheckedCreateWithoutNpcsInput>
    connectOrCreate?: townsCreateOrConnectWithoutNpcsInput
    connect?: townsWhereUniqueInput
  }

  export type townsUpdateOneWithoutNpcsNestedInput = {
    create?: XOR<townsCreateWithoutNpcsInput, townsUncheckedCreateWithoutNpcsInput>
    connectOrCreate?: townsCreateOrConnectWithoutNpcsInput
    upsert?: townsUpsertWithoutNpcsInput
    disconnect?: townsWhereInput | boolean
    delete?: townsWhereInput | boolean
    connect?: townsWhereUniqueInput
    update?: XOR<XOR<townsUpdateToOneWithWhereWithoutNpcsInput, townsUpdateWithoutNpcsInput>, townsUncheckedUpdateWithoutNpcsInput>
  }

  export type NullableIntFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type townsCreateNestedOneWithoutLocationsInput = {
    create?: XOR<townsCreateWithoutLocationsInput, townsUncheckedCreateWithoutLocationsInput>
    connectOrCreate?: townsCreateOrConnectWithoutLocationsInput
    connect?: townsWhereUniqueInput
  }

  export type townsUpdateOneRequiredWithoutLocationsNestedInput = {
    create?: XOR<townsCreateWithoutLocationsInput, townsUncheckedCreateWithoutLocationsInput>
    connectOrCreate?: townsCreateOrConnectWithoutLocationsInput
    upsert?: townsUpsertWithoutLocationsInput
    connect?: townsWhereUniqueInput
    update?: XOR<XOR<townsUpdateToOneWithWhereWithoutLocationsInput, townsUpdateWithoutLocationsInput>, townsUncheckedUpdateWithoutLocationsInput>
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedIntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type NestedFloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
  }
  export type NestedJsonFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<NestedJsonFilterBase<$PrismaModel>>, Exclude<keyof Required<NestedJsonFilterBase<$PrismaModel>>, 'path'>>,
        Required<NestedJsonFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<NestedJsonFilterBase<$PrismaModel>>, 'path'>>

  export type NestedJsonFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
  }

  export type password_reset_tokensCreateWithoutUserInput = {
    token: string
    expiresAt: Date | string
    createdAt?: Date | string
  }

  export type password_reset_tokensUncheckedCreateWithoutUserInput = {
    id?: number
    token: string
    expiresAt: Date | string
    createdAt?: Date | string
  }

  export type password_reset_tokensCreateOrConnectWithoutUserInput = {
    where: password_reset_tokensWhereUniqueInput
    create: XOR<password_reset_tokensCreateWithoutUserInput, password_reset_tokensUncheckedCreateWithoutUserInput>
  }

  export type password_reset_tokensCreateManyUserInputEnvelope = {
    data: password_reset_tokensCreateManyUserInput | password_reset_tokensCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type password_reset_tokensUpsertWithWhereUniqueWithoutUserInput = {
    where: password_reset_tokensWhereUniqueInput
    update: XOR<password_reset_tokensUpdateWithoutUserInput, password_reset_tokensUncheckedUpdateWithoutUserInput>
    create: XOR<password_reset_tokensCreateWithoutUserInput, password_reset_tokensUncheckedCreateWithoutUserInput>
  }

  export type password_reset_tokensUpdateWithWhereUniqueWithoutUserInput = {
    where: password_reset_tokensWhereUniqueInput
    data: XOR<password_reset_tokensUpdateWithoutUserInput, password_reset_tokensUncheckedUpdateWithoutUserInput>
  }

  export type password_reset_tokensUpdateManyWithWhereWithoutUserInput = {
    where: password_reset_tokensScalarWhereInput
    data: XOR<password_reset_tokensUpdateManyMutationInput, password_reset_tokensUncheckedUpdateManyWithoutUserInput>
  }

  export type password_reset_tokensScalarWhereInput = {
    AND?: password_reset_tokensScalarWhereInput | password_reset_tokensScalarWhereInput[]
    OR?: password_reset_tokensScalarWhereInput[]
    NOT?: password_reset_tokensScalarWhereInput | password_reset_tokensScalarWhereInput[]
    id?: IntFilter<"password_reset_tokens"> | number
    token?: StringFilter<"password_reset_tokens"> | string
    userId?: IntFilter<"password_reset_tokens"> | number
    expiresAt?: DateTimeFilter<"password_reset_tokens"> | Date | string
    createdAt?: DateTimeFilter<"password_reset_tokens"> | Date | string
  }

  export type usersCreateWithoutPasswordResetTokenInput = {
    email: string
    password: string
    name: string
    recoveryTokens?: usersCreaterecoveryTokensInput | string[]
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type usersUncheckedCreateWithoutPasswordResetTokenInput = {
    id?: number
    email: string
    password: string
    name: string
    recoveryTokens?: usersCreaterecoveryTokensInput | string[]
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type usersCreateOrConnectWithoutPasswordResetTokenInput = {
    where: usersWhereUniqueInput
    create: XOR<usersCreateWithoutPasswordResetTokenInput, usersUncheckedCreateWithoutPasswordResetTokenInput>
  }

  export type usersUpsertWithoutPasswordResetTokenInput = {
    update: XOR<usersUpdateWithoutPasswordResetTokenInput, usersUncheckedUpdateWithoutPasswordResetTokenInput>
    create: XOR<usersCreateWithoutPasswordResetTokenInput, usersUncheckedCreateWithoutPasswordResetTokenInput>
    where?: usersWhereInput
  }

  export type usersUpdateToOneWithWhereWithoutPasswordResetTokenInput = {
    where?: usersWhereInput
    data: XOR<usersUpdateWithoutPasswordResetTokenInput, usersUncheckedUpdateWithoutPasswordResetTokenInput>
  }

  export type usersUpdateWithoutPasswordResetTokenInput = {
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    recoveryTokens?: usersUpdaterecoveryTokensInput | string[]
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type usersUncheckedUpdateWithoutPasswordResetTokenInput = {
    id?: IntFieldUpdateOperationsInput | number
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    recoveryTokens?: usersUpdaterecoveryTokensInput | string[]
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type locationsCreateWithoutTownInput = {
    name: string
    description: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type locationsUncheckedCreateWithoutTownInput = {
    id?: number
    name: string
    description: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type locationsCreateOrConnectWithoutTownInput = {
    where: locationsWhereUniqueInput
    create: XOR<locationsCreateWithoutTownInput, locationsUncheckedCreateWithoutTownInput>
  }

  export type locationsCreateManyTownInputEnvelope = {
    data: locationsCreateManyTownInput | locationsCreateManyTownInput[]
    skipDuplicates?: boolean
  }

  export type npcsCreateWithoutTownInput = {
    name: string
    race: string
    age: string
    description: string
    ocupation: string
    history: string
    interest: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type npcsUncheckedCreateWithoutTownInput = {
    id?: number
    name: string
    race: string
    age: string
    description: string
    ocupation: string
    history: string
    interest: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type npcsCreateOrConnectWithoutTownInput = {
    where: npcsWhereUniqueInput
    create: XOR<npcsCreateWithoutTownInput, npcsUncheckedCreateWithoutTownInput>
  }

  export type npcsCreateManyTownInputEnvelope = {
    data: npcsCreateManyTownInput | npcsCreateManyTownInput[]
    skipDuplicates?: boolean
  }

  export type locationsUpsertWithWhereUniqueWithoutTownInput = {
    where: locationsWhereUniqueInput
    update: XOR<locationsUpdateWithoutTownInput, locationsUncheckedUpdateWithoutTownInput>
    create: XOR<locationsCreateWithoutTownInput, locationsUncheckedCreateWithoutTownInput>
  }

  export type locationsUpdateWithWhereUniqueWithoutTownInput = {
    where: locationsWhereUniqueInput
    data: XOR<locationsUpdateWithoutTownInput, locationsUncheckedUpdateWithoutTownInput>
  }

  export type locationsUpdateManyWithWhereWithoutTownInput = {
    where: locationsScalarWhereInput
    data: XOR<locationsUpdateManyMutationInput, locationsUncheckedUpdateManyWithoutTownInput>
  }

  export type locationsScalarWhereInput = {
    AND?: locationsScalarWhereInput | locationsScalarWhereInput[]
    OR?: locationsScalarWhereInput[]
    NOT?: locationsScalarWhereInput | locationsScalarWhereInput[]
    id?: IntFilter<"locations"> | number
    townId?: IntFilter<"locations"> | number
    name?: StringFilter<"locations"> | string
    description?: StringFilter<"locations"> | string
    createdAt?: DateTimeFilter<"locations"> | Date | string
    updatedAt?: DateTimeFilter<"locations"> | Date | string
  }

  export type npcsUpsertWithWhereUniqueWithoutTownInput = {
    where: npcsWhereUniqueInput
    update: XOR<npcsUpdateWithoutTownInput, npcsUncheckedUpdateWithoutTownInput>
    create: XOR<npcsCreateWithoutTownInput, npcsUncheckedCreateWithoutTownInput>
  }

  export type npcsUpdateWithWhereUniqueWithoutTownInput = {
    where: npcsWhereUniqueInput
    data: XOR<npcsUpdateWithoutTownInput, npcsUncheckedUpdateWithoutTownInput>
  }

  export type npcsUpdateManyWithWhereWithoutTownInput = {
    where: npcsScalarWhereInput
    data: XOR<npcsUpdateManyMutationInput, npcsUncheckedUpdateManyWithoutTownInput>
  }

  export type npcsScalarWhereInput = {
    AND?: npcsScalarWhereInput | npcsScalarWhereInput[]
    OR?: npcsScalarWhereInput[]
    NOT?: npcsScalarWhereInput | npcsScalarWhereInput[]
    id?: IntFilter<"npcs"> | number
    townId?: IntNullableFilter<"npcs"> | number | null
    name?: StringFilter<"npcs"> | string
    race?: StringFilter<"npcs"> | string
    age?: StringFilter<"npcs"> | string
    description?: StringFilter<"npcs"> | string
    ocupation?: StringFilter<"npcs"> | string
    history?: StringFilter<"npcs"> | string
    interest?: StringFilter<"npcs"> | string
    createdAt?: DateTimeFilter<"npcs"> | Date | string
    updatedAt?: DateTimeFilter<"npcs"> | Date | string
  }

  export type townsCreateWithoutNpcsInput = {
    name?: string
    size: string
    whether: string
    history: string
    locationDescription: string
    economy: string
    criminality: string
    createdAt?: Date | string
    updatedAt?: Date | string
    locations?: locationsCreateNestedManyWithoutTownInput
  }

  export type townsUncheckedCreateWithoutNpcsInput = {
    id?: number
    name?: string
    size: string
    whether: string
    history: string
    locationDescription: string
    economy: string
    criminality: string
    createdAt?: Date | string
    updatedAt?: Date | string
    locations?: locationsUncheckedCreateNestedManyWithoutTownInput
  }

  export type townsCreateOrConnectWithoutNpcsInput = {
    where: townsWhereUniqueInput
    create: XOR<townsCreateWithoutNpcsInput, townsUncheckedCreateWithoutNpcsInput>
  }

  export type townsUpsertWithoutNpcsInput = {
    update: XOR<townsUpdateWithoutNpcsInput, townsUncheckedUpdateWithoutNpcsInput>
    create: XOR<townsCreateWithoutNpcsInput, townsUncheckedCreateWithoutNpcsInput>
    where?: townsWhereInput
  }

  export type townsUpdateToOneWithWhereWithoutNpcsInput = {
    where?: townsWhereInput
    data: XOR<townsUpdateWithoutNpcsInput, townsUncheckedUpdateWithoutNpcsInput>
  }

  export type townsUpdateWithoutNpcsInput = {
    name?: StringFieldUpdateOperationsInput | string
    size?: StringFieldUpdateOperationsInput | string
    whether?: StringFieldUpdateOperationsInput | string
    history?: StringFieldUpdateOperationsInput | string
    locationDescription?: StringFieldUpdateOperationsInput | string
    economy?: StringFieldUpdateOperationsInput | string
    criminality?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    locations?: locationsUpdateManyWithoutTownNestedInput
  }

  export type townsUncheckedUpdateWithoutNpcsInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    size?: StringFieldUpdateOperationsInput | string
    whether?: StringFieldUpdateOperationsInput | string
    history?: StringFieldUpdateOperationsInput | string
    locationDescription?: StringFieldUpdateOperationsInput | string
    economy?: StringFieldUpdateOperationsInput | string
    criminality?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    locations?: locationsUncheckedUpdateManyWithoutTownNestedInput
  }

  export type townsCreateWithoutLocationsInput = {
    name?: string
    size: string
    whether: string
    history: string
    locationDescription: string
    economy: string
    criminality: string
    createdAt?: Date | string
    updatedAt?: Date | string
    npcs?: npcsCreateNestedManyWithoutTownInput
  }

  export type townsUncheckedCreateWithoutLocationsInput = {
    id?: number
    name?: string
    size: string
    whether: string
    history: string
    locationDescription: string
    economy: string
    criminality: string
    createdAt?: Date | string
    updatedAt?: Date | string
    npcs?: npcsUncheckedCreateNestedManyWithoutTownInput
  }

  export type townsCreateOrConnectWithoutLocationsInput = {
    where: townsWhereUniqueInput
    create: XOR<townsCreateWithoutLocationsInput, townsUncheckedCreateWithoutLocationsInput>
  }

  export type townsUpsertWithoutLocationsInput = {
    update: XOR<townsUpdateWithoutLocationsInput, townsUncheckedUpdateWithoutLocationsInput>
    create: XOR<townsCreateWithoutLocationsInput, townsUncheckedCreateWithoutLocationsInput>
    where?: townsWhereInput
  }

  export type townsUpdateToOneWithWhereWithoutLocationsInput = {
    where?: townsWhereInput
    data: XOR<townsUpdateWithoutLocationsInput, townsUncheckedUpdateWithoutLocationsInput>
  }

  export type townsUpdateWithoutLocationsInput = {
    name?: StringFieldUpdateOperationsInput | string
    size?: StringFieldUpdateOperationsInput | string
    whether?: StringFieldUpdateOperationsInput | string
    history?: StringFieldUpdateOperationsInput | string
    locationDescription?: StringFieldUpdateOperationsInput | string
    economy?: StringFieldUpdateOperationsInput | string
    criminality?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    npcs?: npcsUpdateManyWithoutTownNestedInput
  }

  export type townsUncheckedUpdateWithoutLocationsInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    size?: StringFieldUpdateOperationsInput | string
    whether?: StringFieldUpdateOperationsInput | string
    history?: StringFieldUpdateOperationsInput | string
    locationDescription?: StringFieldUpdateOperationsInput | string
    economy?: StringFieldUpdateOperationsInput | string
    criminality?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    npcs?: npcsUncheckedUpdateManyWithoutTownNestedInput
  }

  export type password_reset_tokensCreateManyUserInput = {
    id?: number
    token: string
    expiresAt: Date | string
    createdAt?: Date | string
  }

  export type password_reset_tokensUpdateWithoutUserInput = {
    token?: StringFieldUpdateOperationsInput | string
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type password_reset_tokensUncheckedUpdateWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    token?: StringFieldUpdateOperationsInput | string
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type password_reset_tokensUncheckedUpdateManyWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    token?: StringFieldUpdateOperationsInput | string
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type locationsCreateManyTownInput = {
    id?: number
    name: string
    description: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type npcsCreateManyTownInput = {
    id?: number
    name: string
    race: string
    age: string
    description: string
    ocupation: string
    history: string
    interest: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type locationsUpdateWithoutTownInput = {
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type locationsUncheckedUpdateWithoutTownInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type locationsUncheckedUpdateManyWithoutTownInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type npcsUpdateWithoutTownInput = {
    name?: StringFieldUpdateOperationsInput | string
    race?: StringFieldUpdateOperationsInput | string
    age?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    ocupation?: StringFieldUpdateOperationsInput | string
    history?: StringFieldUpdateOperationsInput | string
    interest?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type npcsUncheckedUpdateWithoutTownInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    race?: StringFieldUpdateOperationsInput | string
    age?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    ocupation?: StringFieldUpdateOperationsInput | string
    history?: StringFieldUpdateOperationsInput | string
    interest?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type npcsUncheckedUpdateManyWithoutTownInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    race?: StringFieldUpdateOperationsInput | string
    age?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    ocupation?: StringFieldUpdateOperationsInput | string
    history?: StringFieldUpdateOperationsInput | string
    interest?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }



  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}