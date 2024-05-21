
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
 * Model User
 * 
 */
export type User = $Result.DefaultSelection<Prisma.$UserPayload>
/**
 * Model Role
 * 
 */
export type Role = $Result.DefaultSelection<Prisma.$RolePayload>
/**
 * Model MasterMenu
 * 
 */
export type MasterMenu = $Result.DefaultSelection<Prisma.$MasterMenuPayload>
/**
 * Model SubMenu
 * 
 */
export type SubMenu = $Result.DefaultSelection<Prisma.$SubMenuPayload>
/**
 * Model RoleMenuAccess
 * 
 */
export type RoleMenuAccess = $Result.DefaultSelection<Prisma.$RoleMenuAccessPayload>

/**
 * ##  Prisma Client ʲˢ
 * 
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Users
 * const users = await prisma.user.findMany()
 * ```
 *
 * 
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  T extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof T ? T['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<T['log']> : never : never,
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
   * const users = await prisma.user.findMany()
   * ```
   *
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<T, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): void;

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


  $extends: $Extensions.ExtendsHook<'extends', Prisma.TypeMapCb, ExtArgs>

      /**
   * `prisma.user`: Exposes CRUD operations for the **User** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.user.findMany()
    * ```
    */
  get user(): Prisma.UserDelegate<ExtArgs>;

  /**
   * `prisma.role`: Exposes CRUD operations for the **Role** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Roles
    * const roles = await prisma.role.findMany()
    * ```
    */
  get role(): Prisma.RoleDelegate<ExtArgs>;

  /**
   * `prisma.masterMenu`: Exposes CRUD operations for the **MasterMenu** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more MasterMenus
    * const masterMenus = await prisma.masterMenu.findMany()
    * ```
    */
  get masterMenu(): Prisma.MasterMenuDelegate<ExtArgs>;

  /**
   * `prisma.subMenu`: Exposes CRUD operations for the **SubMenu** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more SubMenus
    * const subMenus = await prisma.subMenu.findMany()
    * ```
    */
  get subMenu(): Prisma.SubMenuDelegate<ExtArgs>;

  /**
   * `prisma.roleMenuAccess`: Exposes CRUD operations for the **RoleMenuAccess** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more RoleMenuAccesses
    * const roleMenuAccesses = await prisma.roleMenuAccess.findMany()
    * ```
    */
  get roleMenuAccess(): Prisma.RoleMenuAccessDelegate<ExtArgs>;
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
  export import NotFoundError = runtime.NotFoundError

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
   * Prisma Client JS version: 5.14.0
   * Query Engine version: e9771e62de70f79a5e1c604a2d7c8e2a0a874b48
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion 

  /**
   * Utility Types
   */

  /**
   * From https://github.com/sindresorhus/type-fest/
   * Matches a JSON object.
   * This type can be useful to enforce some input to be JSON-compatible or as a super-type to be extended from. 
   */
  export type JsonObject = {[Key in string]?: JsonValue}

  /**
   * From https://github.com/sindresorhus/type-fest/
   * Matches a JSON array.
   */
  export interface JsonArray extends Array<JsonValue> {}

  /**
   * From https://github.com/sindresorhus/type-fest/
   * Matches any valid JSON value.
   */
  export type JsonValue = string | number | boolean | JsonObject | JsonArray | null

  /**
   * Matches a JSON object.
   * Unlike `JsonObject`, this type allows undefined and read-only properties.
   */
  export type InputJsonObject = {readonly [Key in string]?: InputJsonValue | null}

  /**
   * Matches a JSON array.
   * Unlike `JsonArray`, readonly arrays are assignable to this type.
   */
  export interface InputJsonArray extends ReadonlyArray<InputJsonValue | null> {}

  /**
   * Matches any valid value that can be used as an input for operations like
   * create and update as the value of a JSON field. Unlike `JsonValue`, this
   * type allows read-only arrays and read-only object properties and disallows
   * `null` at the top level.
   *
   * `null` cannot be used as the value of a JSON field because its meaning
   * would be ambiguous. Use `Prisma.JsonNull` to store the JSON null value or
   * `Prisma.DbNull` to clear the JSON value and set the field to the database
   * NULL value instead.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-by-null-values
   */
  export type InputJsonValue = string | number | boolean | InputJsonObject | InputJsonArray | { toJSON(): unknown }

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
      | {[P in keyof O as P extends K ? K : never]-?: O[P]} & O
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
    User: 'User',
    Role: 'Role',
    MasterMenu: 'MasterMenu',
    SubMenu: 'SubMenu',
    RoleMenuAccess: 'RoleMenuAccess'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }


  interface TypeMapCb extends $Utils.Fn<{extArgs: $Extensions.InternalArgs}, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs']>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    meta: {
      modelProps: 'user' | 'role' | 'masterMenu' | 'subMenu' | 'roleMenuAccess'
      txIsolationLevel: Prisma.TransactionIsolationLevel
    },
    model: {
      User: {
        payload: Prisma.$UserPayload<ExtArgs>
        fields: Prisma.UserFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UserFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UserFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findFirst: {
            args: Prisma.UserFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UserFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findMany: {
            args: Prisma.UserFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          create: {
            args: Prisma.UserCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          createMany: {
            args: Prisma.UserCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.UserDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          update: {
            args: Prisma.UserUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          deleteMany: {
            args: Prisma.UserDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.UserUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.UserUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          aggregate: {
            args: Prisma.UserAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateUser>
          }
          groupBy: {
            args: Prisma.UserGroupByArgs<ExtArgs>,
            result: $Utils.Optional<UserGroupByOutputType>[]
          }
          count: {
            args: Prisma.UserCountArgs<ExtArgs>,
            result: $Utils.Optional<UserCountAggregateOutputType> | number
          }
        }
      }
      Role: {
        payload: Prisma.$RolePayload<ExtArgs>
        fields: Prisma.RoleFieldRefs
        operations: {
          findUnique: {
            args: Prisma.RoleFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$RolePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.RoleFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$RolePayload>
          }
          findFirst: {
            args: Prisma.RoleFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$RolePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.RoleFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$RolePayload>
          }
          findMany: {
            args: Prisma.RoleFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$RolePayload>[]
          }
          create: {
            args: Prisma.RoleCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$RolePayload>
          }
          createMany: {
            args: Prisma.RoleCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.RoleDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$RolePayload>
          }
          update: {
            args: Prisma.RoleUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$RolePayload>
          }
          deleteMany: {
            args: Prisma.RoleDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.RoleUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.RoleUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$RolePayload>
          }
          aggregate: {
            args: Prisma.RoleAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateRole>
          }
          groupBy: {
            args: Prisma.RoleGroupByArgs<ExtArgs>,
            result: $Utils.Optional<RoleGroupByOutputType>[]
          }
          count: {
            args: Prisma.RoleCountArgs<ExtArgs>,
            result: $Utils.Optional<RoleCountAggregateOutputType> | number
          }
        }
      }
      MasterMenu: {
        payload: Prisma.$MasterMenuPayload<ExtArgs>
        fields: Prisma.MasterMenuFieldRefs
        operations: {
          findUnique: {
            args: Prisma.MasterMenuFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$MasterMenuPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.MasterMenuFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$MasterMenuPayload>
          }
          findFirst: {
            args: Prisma.MasterMenuFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$MasterMenuPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.MasterMenuFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$MasterMenuPayload>
          }
          findMany: {
            args: Prisma.MasterMenuFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$MasterMenuPayload>[]
          }
          create: {
            args: Prisma.MasterMenuCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$MasterMenuPayload>
          }
          createMany: {
            args: Prisma.MasterMenuCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.MasterMenuDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$MasterMenuPayload>
          }
          update: {
            args: Prisma.MasterMenuUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$MasterMenuPayload>
          }
          deleteMany: {
            args: Prisma.MasterMenuDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.MasterMenuUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.MasterMenuUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$MasterMenuPayload>
          }
          aggregate: {
            args: Prisma.MasterMenuAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateMasterMenu>
          }
          groupBy: {
            args: Prisma.MasterMenuGroupByArgs<ExtArgs>,
            result: $Utils.Optional<MasterMenuGroupByOutputType>[]
          }
          count: {
            args: Prisma.MasterMenuCountArgs<ExtArgs>,
            result: $Utils.Optional<MasterMenuCountAggregateOutputType> | number
          }
        }
      }
      SubMenu: {
        payload: Prisma.$SubMenuPayload<ExtArgs>
        fields: Prisma.SubMenuFieldRefs
        operations: {
          findUnique: {
            args: Prisma.SubMenuFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$SubMenuPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.SubMenuFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$SubMenuPayload>
          }
          findFirst: {
            args: Prisma.SubMenuFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$SubMenuPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.SubMenuFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$SubMenuPayload>
          }
          findMany: {
            args: Prisma.SubMenuFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$SubMenuPayload>[]
          }
          create: {
            args: Prisma.SubMenuCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$SubMenuPayload>
          }
          createMany: {
            args: Prisma.SubMenuCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.SubMenuDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$SubMenuPayload>
          }
          update: {
            args: Prisma.SubMenuUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$SubMenuPayload>
          }
          deleteMany: {
            args: Prisma.SubMenuDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.SubMenuUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.SubMenuUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$SubMenuPayload>
          }
          aggregate: {
            args: Prisma.SubMenuAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateSubMenu>
          }
          groupBy: {
            args: Prisma.SubMenuGroupByArgs<ExtArgs>,
            result: $Utils.Optional<SubMenuGroupByOutputType>[]
          }
          count: {
            args: Prisma.SubMenuCountArgs<ExtArgs>,
            result: $Utils.Optional<SubMenuCountAggregateOutputType> | number
          }
        }
      }
      RoleMenuAccess: {
        payload: Prisma.$RoleMenuAccessPayload<ExtArgs>
        fields: Prisma.RoleMenuAccessFieldRefs
        operations: {
          findUnique: {
            args: Prisma.RoleMenuAccessFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$RoleMenuAccessPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.RoleMenuAccessFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$RoleMenuAccessPayload>
          }
          findFirst: {
            args: Prisma.RoleMenuAccessFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$RoleMenuAccessPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.RoleMenuAccessFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$RoleMenuAccessPayload>
          }
          findMany: {
            args: Prisma.RoleMenuAccessFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$RoleMenuAccessPayload>[]
          }
          create: {
            args: Prisma.RoleMenuAccessCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$RoleMenuAccessPayload>
          }
          createMany: {
            args: Prisma.RoleMenuAccessCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.RoleMenuAccessDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$RoleMenuAccessPayload>
          }
          update: {
            args: Prisma.RoleMenuAccessUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$RoleMenuAccessPayload>
          }
          deleteMany: {
            args: Prisma.RoleMenuAccessDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.RoleMenuAccessUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.RoleMenuAccessUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$RoleMenuAccessPayload>
          }
          aggregate: {
            args: Prisma.RoleMenuAccessAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateRoleMenuAccess>
          }
          groupBy: {
            args: Prisma.RoleMenuAccessGroupByArgs<ExtArgs>,
            result: $Utils.Optional<RoleMenuAccessGroupByOutputType>[]
          }
          count: {
            args: Prisma.RoleMenuAccessCountArgs<ExtArgs>,
            result: $Utils.Optional<RoleMenuAccessCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<'define', Prisma.TypeMapCb, $Extensions.DefaultArgs>
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
   * Count Type UserCountOutputType
   */

  export type UserCountOutputType = {
    roles: number
    createdRoles: number
    updatedRoles: number
    deletedRoles: number
    createdMenus: number
    updatedMenus: number
    deletedMenus: number
    createdSubMenus: number
    updatedSubMenus: number
    deletedSubMenus: number
    createdAccesses: number
    updatedAccesses: number
    deletedAccesses: number
  }

  export type UserCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    roles?: boolean | UserCountOutputTypeCountRolesArgs
    createdRoles?: boolean | UserCountOutputTypeCountCreatedRolesArgs
    updatedRoles?: boolean | UserCountOutputTypeCountUpdatedRolesArgs
    deletedRoles?: boolean | UserCountOutputTypeCountDeletedRolesArgs
    createdMenus?: boolean | UserCountOutputTypeCountCreatedMenusArgs
    updatedMenus?: boolean | UserCountOutputTypeCountUpdatedMenusArgs
    deletedMenus?: boolean | UserCountOutputTypeCountDeletedMenusArgs
    createdSubMenus?: boolean | UserCountOutputTypeCountCreatedSubMenusArgs
    updatedSubMenus?: boolean | UserCountOutputTypeCountUpdatedSubMenusArgs
    deletedSubMenus?: boolean | UserCountOutputTypeCountDeletedSubMenusArgs
    createdAccesses?: boolean | UserCountOutputTypeCountCreatedAccessesArgs
    updatedAccesses?: boolean | UserCountOutputTypeCountUpdatedAccessesArgs
    deletedAccesses?: boolean | UserCountOutputTypeCountDeletedAccessesArgs
  }

  // Custom InputTypes
  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserCountOutputType
     */
    select?: UserCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountRolesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: RoleWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountCreatedRolesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: RoleWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountUpdatedRolesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: RoleWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountDeletedRolesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: RoleWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountCreatedMenusArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MasterMenuWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountUpdatedMenusArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MasterMenuWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountDeletedMenusArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MasterMenuWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountCreatedSubMenusArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SubMenuWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountUpdatedSubMenusArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SubMenuWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountDeletedSubMenusArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SubMenuWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountCreatedAccessesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: RoleMenuAccessWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountUpdatedAccessesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: RoleMenuAccessWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountDeletedAccessesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: RoleMenuAccessWhereInput
  }


  /**
   * Count Type RoleCountOutputType
   */

  export type RoleCountOutputType = {
    users: number
    User: number
    RoleMenuAccess: number
  }

  export type RoleCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    users?: boolean | RoleCountOutputTypeCountUsersArgs
    User?: boolean | RoleCountOutputTypeCountUserArgs
    RoleMenuAccess?: boolean | RoleCountOutputTypeCountRoleMenuAccessArgs
  }

  // Custom InputTypes
  /**
   * RoleCountOutputType without action
   */
  export type RoleCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RoleCountOutputType
     */
    select?: RoleCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * RoleCountOutputType without action
   */
  export type RoleCountOutputTypeCountUsersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserWhereInput
  }

  /**
   * RoleCountOutputType without action
   */
  export type RoleCountOutputTypeCountUserArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserWhereInput
  }

  /**
   * RoleCountOutputType without action
   */
  export type RoleCountOutputTypeCountRoleMenuAccessArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: RoleMenuAccessWhereInput
  }


  /**
   * Count Type MasterMenuCountOutputType
   */

  export type MasterMenuCountOutputType = {
    subMenus: number
  }

  export type MasterMenuCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    subMenus?: boolean | MasterMenuCountOutputTypeCountSubMenusArgs
  }

  // Custom InputTypes
  /**
   * MasterMenuCountOutputType without action
   */
  export type MasterMenuCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MasterMenuCountOutputType
     */
    select?: MasterMenuCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * MasterMenuCountOutputType without action
   */
  export type MasterMenuCountOutputTypeCountSubMenusArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SubMenuWhereInput
  }


  /**
   * Count Type SubMenuCountOutputType
   */

  export type SubMenuCountOutputType = {
    RoleMenuAccess: number
  }

  export type SubMenuCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    RoleMenuAccess?: boolean | SubMenuCountOutputTypeCountRoleMenuAccessArgs
  }

  // Custom InputTypes
  /**
   * SubMenuCountOutputType without action
   */
  export type SubMenuCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SubMenuCountOutputType
     */
    select?: SubMenuCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * SubMenuCountOutputType without action
   */
  export type SubMenuCountOutputTypeCountRoleMenuAccessArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: RoleMenuAccessWhereInput
  }


  /**
   * Models
   */

  /**
   * Model User
   */

  export type AggregateUser = {
    _count: UserCountAggregateOutputType | null
    _avg: UserAvgAggregateOutputType | null
    _sum: UserSumAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  export type UserAvgAggregateOutputType = {
    id: number | null
    roleId: number | null
    status: number | null
  }

  export type UserSumAggregateOutputType = {
    id: number | null
    roleId: number | null
    status: number | null
  }

  export type UserMinAggregateOutputType = {
    id: number | null
    uid: string | null
    roleId: number | null
    username: string | null
    email: string | null
    password: string | null
    firstName: string | null
    lastName: string | null
    token: string | null
    refreshToken: string | null
    status: number | null
    latestLoginAt: Date | null
    createdAt: Date | null
    updatedAt: Date | null
    deletedAt: Date | null
  }

  export type UserMaxAggregateOutputType = {
    id: number | null
    uid: string | null
    roleId: number | null
    username: string | null
    email: string | null
    password: string | null
    firstName: string | null
    lastName: string | null
    token: string | null
    refreshToken: string | null
    status: number | null
    latestLoginAt: Date | null
    createdAt: Date | null
    updatedAt: Date | null
    deletedAt: Date | null
  }

  export type UserCountAggregateOutputType = {
    id: number
    uid: number
    roleId: number
    username: number
    email: number
    password: number
    firstName: number
    lastName: number
    token: number
    refreshToken: number
    status: number
    latestLoginAt: number
    createdAt: number
    updatedAt: number
    deletedAt: number
    _all: number
  }


  export type UserAvgAggregateInputType = {
    id?: true
    roleId?: true
    status?: true
  }

  export type UserSumAggregateInputType = {
    id?: true
    roleId?: true
    status?: true
  }

  export type UserMinAggregateInputType = {
    id?: true
    uid?: true
    roleId?: true
    username?: true
    email?: true
    password?: true
    firstName?: true
    lastName?: true
    token?: true
    refreshToken?: true
    status?: true
    latestLoginAt?: true
    createdAt?: true
    updatedAt?: true
    deletedAt?: true
  }

  export type UserMaxAggregateInputType = {
    id?: true
    uid?: true
    roleId?: true
    username?: true
    email?: true
    password?: true
    firstName?: true
    lastName?: true
    token?: true
    refreshToken?: true
    status?: true
    latestLoginAt?: true
    createdAt?: true
    updatedAt?: true
    deletedAt?: true
  }

  export type UserCountAggregateInputType = {
    id?: true
    uid?: true
    roleId?: true
    username?: true
    email?: true
    password?: true
    firstName?: true
    lastName?: true
    token?: true
    refreshToken?: true
    status?: true
    latestLoginAt?: true
    createdAt?: true
    updatedAt?: true
    deletedAt?: true
    _all?: true
  }

  export type UserAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which User to aggregate.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Users
    **/
    _count?: true | UserCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: UserAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: UserSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserMaxAggregateInputType
  }

  export type GetUserAggregateType<T extends UserAggregateArgs> = {
        [P in keyof T & keyof AggregateUser]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUser[P]>
      : GetScalarType<T[P], AggregateUser[P]>
  }




  export type UserGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserWhereInput
    orderBy?: UserOrderByWithAggregationInput | UserOrderByWithAggregationInput[]
    by: UserScalarFieldEnum[] | UserScalarFieldEnum
    having?: UserScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserCountAggregateInputType | true
    _avg?: UserAvgAggregateInputType
    _sum?: UserSumAggregateInputType
    _min?: UserMinAggregateInputType
    _max?: UserMaxAggregateInputType
  }

  export type UserGroupByOutputType = {
    id: number
    uid: string
    roleId: number
    username: string
    email: string
    password: string
    firstName: string
    lastName: string | null
    token: string | null
    refreshToken: string | null
    status: number
    latestLoginAt: Date | null
    createdAt: Date
    updatedAt: Date | null
    deletedAt: Date | null
    _count: UserCountAggregateOutputType | null
    _avg: UserAvgAggregateOutputType | null
    _sum: UserSumAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  type GetUserGroupByPayload<T extends UserGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserGroupByOutputType[P]>
            : GetScalarType<T[P], UserGroupByOutputType[P]>
        }
      >
    >


  export type UserSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    uid?: boolean
    roleId?: boolean
    username?: boolean
    email?: boolean
    password?: boolean
    firstName?: boolean
    lastName?: boolean
    token?: boolean
    refreshToken?: boolean
    status?: boolean
    latestLoginAt?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    deletedAt?: boolean
    role?: boolean | RoleDefaultArgs<ExtArgs>
    roles?: boolean | User$rolesArgs<ExtArgs>
    createdRoles?: boolean | User$createdRolesArgs<ExtArgs>
    updatedRoles?: boolean | User$updatedRolesArgs<ExtArgs>
    deletedRoles?: boolean | User$deletedRolesArgs<ExtArgs>
    createdMenus?: boolean | User$createdMenusArgs<ExtArgs>
    updatedMenus?: boolean | User$updatedMenusArgs<ExtArgs>
    deletedMenus?: boolean | User$deletedMenusArgs<ExtArgs>
    createdSubMenus?: boolean | User$createdSubMenusArgs<ExtArgs>
    updatedSubMenus?: boolean | User$updatedSubMenusArgs<ExtArgs>
    deletedSubMenus?: boolean | User$deletedSubMenusArgs<ExtArgs>
    createdAccesses?: boolean | User$createdAccessesArgs<ExtArgs>
    updatedAccesses?: boolean | User$updatedAccessesArgs<ExtArgs>
    deletedAccesses?: boolean | User$deletedAccessesArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>

  export type UserSelectScalar = {
    id?: boolean
    uid?: boolean
    roleId?: boolean
    username?: boolean
    email?: boolean
    password?: boolean
    firstName?: boolean
    lastName?: boolean
    token?: boolean
    refreshToken?: boolean
    status?: boolean
    latestLoginAt?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    deletedAt?: boolean
  }


  export type UserInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    role?: boolean | RoleDefaultArgs<ExtArgs>
    roles?: boolean | User$rolesArgs<ExtArgs>
    createdRoles?: boolean | User$createdRolesArgs<ExtArgs>
    updatedRoles?: boolean | User$updatedRolesArgs<ExtArgs>
    deletedRoles?: boolean | User$deletedRolesArgs<ExtArgs>
    createdMenus?: boolean | User$createdMenusArgs<ExtArgs>
    updatedMenus?: boolean | User$updatedMenusArgs<ExtArgs>
    deletedMenus?: boolean | User$deletedMenusArgs<ExtArgs>
    createdSubMenus?: boolean | User$createdSubMenusArgs<ExtArgs>
    updatedSubMenus?: boolean | User$updatedSubMenusArgs<ExtArgs>
    deletedSubMenus?: boolean | User$deletedSubMenusArgs<ExtArgs>
    createdAccesses?: boolean | User$createdAccessesArgs<ExtArgs>
    updatedAccesses?: boolean | User$updatedAccessesArgs<ExtArgs>
    deletedAccesses?: boolean | User$deletedAccessesArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }


  export type $UserPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "User"
    objects: {
      role: Prisma.$RolePayload<ExtArgs>
      roles: Prisma.$RolePayload<ExtArgs>[]
      createdRoles: Prisma.$RolePayload<ExtArgs>[]
      updatedRoles: Prisma.$RolePayload<ExtArgs>[]
      deletedRoles: Prisma.$RolePayload<ExtArgs>[]
      createdMenus: Prisma.$MasterMenuPayload<ExtArgs>[]
      updatedMenus: Prisma.$MasterMenuPayload<ExtArgs>[]
      deletedMenus: Prisma.$MasterMenuPayload<ExtArgs>[]
      createdSubMenus: Prisma.$SubMenuPayload<ExtArgs>[]
      updatedSubMenus: Prisma.$SubMenuPayload<ExtArgs>[]
      deletedSubMenus: Prisma.$SubMenuPayload<ExtArgs>[]
      createdAccesses: Prisma.$RoleMenuAccessPayload<ExtArgs>[]
      updatedAccesses: Prisma.$RoleMenuAccessPayload<ExtArgs>[]
      deletedAccesses: Prisma.$RoleMenuAccessPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      uid: string
      roleId: number
      username: string
      email: string
      password: string
      firstName: string
      lastName: string | null
      token: string | null
      refreshToken: string | null
      status: number
      latestLoginAt: Date | null
      createdAt: Date
      updatedAt: Date | null
      deletedAt: Date | null
    }, ExtArgs["result"]["user"]>
    composites: {}
  }


  type UserGetPayload<S extends boolean | null | undefined | UserDefaultArgs> = $Result.GetResult<Prisma.$UserPayload, S>

  type UserCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<UserFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: UserCountAggregateInputType | true
    }

  export interface UserDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['User'], meta: { name: 'User' } }
    /**
     * Find zero or one User that matches the filter.
     * @param {UserFindUniqueArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends UserFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, UserFindUniqueArgs<ExtArgs>>
    ): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one User that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {UserFindUniqueOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends UserFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, UserFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first User that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends UserFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, UserFindFirstArgs<ExtArgs>>
    ): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first User that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends UserFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, UserFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Users
     * const users = await prisma.user.findMany()
     * 
     * // Get first 10 Users
     * const users = await prisma.user.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const userWithIdOnly = await prisma.user.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends UserFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, UserFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a User.
     * @param {UserCreateArgs} args - Arguments to create a User.
     * @example
     * // Create one User
     * const User = await prisma.user.create({
     *   data: {
     *     // ... data to create a User
     *   }
     * })
     * 
    **/
    create<T extends UserCreateArgs<ExtArgs>>(
      args: SelectSubset<T, UserCreateArgs<ExtArgs>>
    ): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many Users.
     * @param {UserCreateManyArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
    **/
    createMany<T extends UserCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, UserCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a User.
     * @param {UserDeleteArgs} args - Arguments to delete one User.
     * @example
     * // Delete one User
     * const User = await prisma.user.delete({
     *   where: {
     *     // ... filter to delete one User
     *   }
     * })
     * 
    **/
    delete<T extends UserDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, UserDeleteArgs<ExtArgs>>
    ): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one User.
     * @param {UserUpdateArgs} args - Arguments to update one User.
     * @example
     * // Update one User
     * const user = await prisma.user.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends UserUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, UserUpdateArgs<ExtArgs>>
    ): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more Users.
     * @param {UserDeleteManyArgs} args - Arguments to filter Users to delete.
     * @example
     * // Delete a few Users
     * const { count } = await prisma.user.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends UserDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, UserDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends UserUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, UserUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one User.
     * @param {UserUpsertArgs} args - Arguments to update or create a User.
     * @example
     * // Update or create a User
     * const user = await prisma.user.upsert({
     *   create: {
     *     // ... data to create a User
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the User we want to update
     *   }
     * })
    **/
    upsert<T extends UserUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, UserUpsertArgs<ExtArgs>>
    ): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserCountArgs} args - Arguments to filter Users to count.
     * @example
     * // Count the number of Users
     * const count = await prisma.user.count({
     *   where: {
     *     // ... the filter for the Users we want to count
     *   }
     * })
    **/
    count<T extends UserCountArgs>(
      args?: Subset<T, UserCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends UserAggregateArgs>(args: Subset<T, UserAggregateArgs>): Prisma.PrismaPromise<GetUserAggregateType<T>>

    /**
     * Group by User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserGroupByArgs} args - Group by arguments.
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
      T extends UserGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserGroupByArgs['orderBy'] }
        : { orderBy?: UserGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, UserGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the User model
   */
  readonly fields: UserFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for User.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UserClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    role<T extends RoleDefaultArgs<ExtArgs> = {}>(args?: Subset<T, RoleDefaultArgs<ExtArgs>>): Prisma__RoleClient<$Result.GetResult<Prisma.$RolePayload<ExtArgs>, T, 'findUniqueOrThrow'> | Null, Null, ExtArgs>;

    roles<T extends User$rolesArgs<ExtArgs> = {}>(args?: Subset<T, User$rolesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RolePayload<ExtArgs>, T, 'findMany'> | Null>;

    createdRoles<T extends User$createdRolesArgs<ExtArgs> = {}>(args?: Subset<T, User$createdRolesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RolePayload<ExtArgs>, T, 'findMany'> | Null>;

    updatedRoles<T extends User$updatedRolesArgs<ExtArgs> = {}>(args?: Subset<T, User$updatedRolesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RolePayload<ExtArgs>, T, 'findMany'> | Null>;

    deletedRoles<T extends User$deletedRolesArgs<ExtArgs> = {}>(args?: Subset<T, User$deletedRolesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RolePayload<ExtArgs>, T, 'findMany'> | Null>;

    createdMenus<T extends User$createdMenusArgs<ExtArgs> = {}>(args?: Subset<T, User$createdMenusArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MasterMenuPayload<ExtArgs>, T, 'findMany'> | Null>;

    updatedMenus<T extends User$updatedMenusArgs<ExtArgs> = {}>(args?: Subset<T, User$updatedMenusArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MasterMenuPayload<ExtArgs>, T, 'findMany'> | Null>;

    deletedMenus<T extends User$deletedMenusArgs<ExtArgs> = {}>(args?: Subset<T, User$deletedMenusArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MasterMenuPayload<ExtArgs>, T, 'findMany'> | Null>;

    createdSubMenus<T extends User$createdSubMenusArgs<ExtArgs> = {}>(args?: Subset<T, User$createdSubMenusArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SubMenuPayload<ExtArgs>, T, 'findMany'> | Null>;

    updatedSubMenus<T extends User$updatedSubMenusArgs<ExtArgs> = {}>(args?: Subset<T, User$updatedSubMenusArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SubMenuPayload<ExtArgs>, T, 'findMany'> | Null>;

    deletedSubMenus<T extends User$deletedSubMenusArgs<ExtArgs> = {}>(args?: Subset<T, User$deletedSubMenusArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SubMenuPayload<ExtArgs>, T, 'findMany'> | Null>;

    createdAccesses<T extends User$createdAccessesArgs<ExtArgs> = {}>(args?: Subset<T, User$createdAccessesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RoleMenuAccessPayload<ExtArgs>, T, 'findMany'> | Null>;

    updatedAccesses<T extends User$updatedAccessesArgs<ExtArgs> = {}>(args?: Subset<T, User$updatedAccessesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RoleMenuAccessPayload<ExtArgs>, T, 'findMany'> | Null>;

    deletedAccesses<T extends User$deletedAccessesArgs<ExtArgs> = {}>(args?: Subset<T, User$deletedAccessesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RoleMenuAccessPayload<ExtArgs>, T, 'findMany'> | Null>;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the User model
   */ 
  interface UserFieldRefs {
    readonly id: FieldRef<"User", 'Int'>
    readonly uid: FieldRef<"User", 'String'>
    readonly roleId: FieldRef<"User", 'Int'>
    readonly username: FieldRef<"User", 'String'>
    readonly email: FieldRef<"User", 'String'>
    readonly password: FieldRef<"User", 'String'>
    readonly firstName: FieldRef<"User", 'String'>
    readonly lastName: FieldRef<"User", 'String'>
    readonly token: FieldRef<"User", 'String'>
    readonly refreshToken: FieldRef<"User", 'String'>
    readonly status: FieldRef<"User", 'Int'>
    readonly latestLoginAt: FieldRef<"User", 'DateTime'>
    readonly createdAt: FieldRef<"User", 'DateTime'>
    readonly updatedAt: FieldRef<"User", 'DateTime'>
    readonly deletedAt: FieldRef<"User", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * User findUnique
   */
  export type UserFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findUniqueOrThrow
   */
  export type UserFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findFirst
   */
  export type UserFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findFirstOrThrow
   */
  export type UserFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findMany
   */
  export type UserFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which Users to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User create
   */
  export type UserCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to create a User.
     */
    data: XOR<UserCreateInput, UserUncheckedCreateInput>
  }

  /**
   * User createMany
   */
  export type UserCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * User update
   */
  export type UserUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to update a User.
     */
    data: XOR<UserUpdateInput, UserUncheckedUpdateInput>
    /**
     * Choose, which User to update.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User updateMany
   */
  export type UserUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
  }

  /**
   * User upsert
   */
  export type UserUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The filter to search for the User to update in case it exists.
     */
    where: UserWhereUniqueInput
    /**
     * In case the User found by the `where` argument doesn't exist, create a new User with this data.
     */
    create: XOR<UserCreateInput, UserUncheckedCreateInput>
    /**
     * In case the User was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UserUpdateInput, UserUncheckedUpdateInput>
  }

  /**
   * User delete
   */
  export type UserDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter which User to delete.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User deleteMany
   */
  export type UserDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Users to delete
     */
    where?: UserWhereInput
  }

  /**
   * User.roles
   */
  export type User$rolesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Role
     */
    select?: RoleSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoleInclude<ExtArgs> | null
    where?: RoleWhereInput
    orderBy?: RoleOrderByWithRelationInput | RoleOrderByWithRelationInput[]
    cursor?: RoleWhereUniqueInput
    take?: number
    skip?: number
    distinct?: RoleScalarFieldEnum | RoleScalarFieldEnum[]
  }

  /**
   * User.createdRoles
   */
  export type User$createdRolesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Role
     */
    select?: RoleSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoleInclude<ExtArgs> | null
    where?: RoleWhereInput
    orderBy?: RoleOrderByWithRelationInput | RoleOrderByWithRelationInput[]
    cursor?: RoleWhereUniqueInput
    take?: number
    skip?: number
    distinct?: RoleScalarFieldEnum | RoleScalarFieldEnum[]
  }

  /**
   * User.updatedRoles
   */
  export type User$updatedRolesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Role
     */
    select?: RoleSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoleInclude<ExtArgs> | null
    where?: RoleWhereInput
    orderBy?: RoleOrderByWithRelationInput | RoleOrderByWithRelationInput[]
    cursor?: RoleWhereUniqueInput
    take?: number
    skip?: number
    distinct?: RoleScalarFieldEnum | RoleScalarFieldEnum[]
  }

  /**
   * User.deletedRoles
   */
  export type User$deletedRolesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Role
     */
    select?: RoleSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoleInclude<ExtArgs> | null
    where?: RoleWhereInput
    orderBy?: RoleOrderByWithRelationInput | RoleOrderByWithRelationInput[]
    cursor?: RoleWhereUniqueInput
    take?: number
    skip?: number
    distinct?: RoleScalarFieldEnum | RoleScalarFieldEnum[]
  }

  /**
   * User.createdMenus
   */
  export type User$createdMenusArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MasterMenu
     */
    select?: MasterMenuSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MasterMenuInclude<ExtArgs> | null
    where?: MasterMenuWhereInput
    orderBy?: MasterMenuOrderByWithRelationInput | MasterMenuOrderByWithRelationInput[]
    cursor?: MasterMenuWhereUniqueInput
    take?: number
    skip?: number
    distinct?: MasterMenuScalarFieldEnum | MasterMenuScalarFieldEnum[]
  }

  /**
   * User.updatedMenus
   */
  export type User$updatedMenusArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MasterMenu
     */
    select?: MasterMenuSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MasterMenuInclude<ExtArgs> | null
    where?: MasterMenuWhereInput
    orderBy?: MasterMenuOrderByWithRelationInput | MasterMenuOrderByWithRelationInput[]
    cursor?: MasterMenuWhereUniqueInput
    take?: number
    skip?: number
    distinct?: MasterMenuScalarFieldEnum | MasterMenuScalarFieldEnum[]
  }

  /**
   * User.deletedMenus
   */
  export type User$deletedMenusArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MasterMenu
     */
    select?: MasterMenuSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MasterMenuInclude<ExtArgs> | null
    where?: MasterMenuWhereInput
    orderBy?: MasterMenuOrderByWithRelationInput | MasterMenuOrderByWithRelationInput[]
    cursor?: MasterMenuWhereUniqueInput
    take?: number
    skip?: number
    distinct?: MasterMenuScalarFieldEnum | MasterMenuScalarFieldEnum[]
  }

  /**
   * User.createdSubMenus
   */
  export type User$createdSubMenusArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SubMenu
     */
    select?: SubMenuSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubMenuInclude<ExtArgs> | null
    where?: SubMenuWhereInput
    orderBy?: SubMenuOrderByWithRelationInput | SubMenuOrderByWithRelationInput[]
    cursor?: SubMenuWhereUniqueInput
    take?: number
    skip?: number
    distinct?: SubMenuScalarFieldEnum | SubMenuScalarFieldEnum[]
  }

  /**
   * User.updatedSubMenus
   */
  export type User$updatedSubMenusArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SubMenu
     */
    select?: SubMenuSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubMenuInclude<ExtArgs> | null
    where?: SubMenuWhereInput
    orderBy?: SubMenuOrderByWithRelationInput | SubMenuOrderByWithRelationInput[]
    cursor?: SubMenuWhereUniqueInput
    take?: number
    skip?: number
    distinct?: SubMenuScalarFieldEnum | SubMenuScalarFieldEnum[]
  }

  /**
   * User.deletedSubMenus
   */
  export type User$deletedSubMenusArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SubMenu
     */
    select?: SubMenuSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubMenuInclude<ExtArgs> | null
    where?: SubMenuWhereInput
    orderBy?: SubMenuOrderByWithRelationInput | SubMenuOrderByWithRelationInput[]
    cursor?: SubMenuWhereUniqueInput
    take?: number
    skip?: number
    distinct?: SubMenuScalarFieldEnum | SubMenuScalarFieldEnum[]
  }

  /**
   * User.createdAccesses
   */
  export type User$createdAccessesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RoleMenuAccess
     */
    select?: RoleMenuAccessSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoleMenuAccessInclude<ExtArgs> | null
    where?: RoleMenuAccessWhereInput
    orderBy?: RoleMenuAccessOrderByWithRelationInput | RoleMenuAccessOrderByWithRelationInput[]
    cursor?: RoleMenuAccessWhereUniqueInput
    take?: number
    skip?: number
    distinct?: RoleMenuAccessScalarFieldEnum | RoleMenuAccessScalarFieldEnum[]
  }

  /**
   * User.updatedAccesses
   */
  export type User$updatedAccessesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RoleMenuAccess
     */
    select?: RoleMenuAccessSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoleMenuAccessInclude<ExtArgs> | null
    where?: RoleMenuAccessWhereInput
    orderBy?: RoleMenuAccessOrderByWithRelationInput | RoleMenuAccessOrderByWithRelationInput[]
    cursor?: RoleMenuAccessWhereUniqueInput
    take?: number
    skip?: number
    distinct?: RoleMenuAccessScalarFieldEnum | RoleMenuAccessScalarFieldEnum[]
  }

  /**
   * User.deletedAccesses
   */
  export type User$deletedAccessesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RoleMenuAccess
     */
    select?: RoleMenuAccessSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoleMenuAccessInclude<ExtArgs> | null
    where?: RoleMenuAccessWhereInput
    orderBy?: RoleMenuAccessOrderByWithRelationInput | RoleMenuAccessOrderByWithRelationInput[]
    cursor?: RoleMenuAccessWhereUniqueInput
    take?: number
    skip?: number
    distinct?: RoleMenuAccessScalarFieldEnum | RoleMenuAccessScalarFieldEnum[]
  }

  /**
   * User without action
   */
  export type UserDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
  }


  /**
   * Model Role
   */

  export type AggregateRole = {
    _count: RoleCountAggregateOutputType | null
    _avg: RoleAvgAggregateOutputType | null
    _sum: RoleSumAggregateOutputType | null
    _min: RoleMinAggregateOutputType | null
    _max: RoleMaxAggregateOutputType | null
  }

  export type RoleAvgAggregateOutputType = {
    id: number | null
    status: number | null
    createdBy: number | null
    updatedBy: number | null
    deletedBy: number | null
  }

  export type RoleSumAggregateOutputType = {
    id: number | null
    status: number | null
    createdBy: number | null
    updatedBy: number | null
    deletedBy: number | null
  }

  export type RoleMinAggregateOutputType = {
    id: number | null
    uid: string | null
    name: string | null
    description: string | null
    status: number | null
    createdBy: number | null
    createdAt: Date | null
    updatedBy: number | null
    updatedAt: Date | null
    deletedBy: number | null
    deletedAt: Date | null
  }

  export type RoleMaxAggregateOutputType = {
    id: number | null
    uid: string | null
    name: string | null
    description: string | null
    status: number | null
    createdBy: number | null
    createdAt: Date | null
    updatedBy: number | null
    updatedAt: Date | null
    deletedBy: number | null
    deletedAt: Date | null
  }

  export type RoleCountAggregateOutputType = {
    id: number
    uid: number
    name: number
    description: number
    status: number
    createdBy: number
    createdAt: number
    updatedBy: number
    updatedAt: number
    deletedBy: number
    deletedAt: number
    _all: number
  }


  export type RoleAvgAggregateInputType = {
    id?: true
    status?: true
    createdBy?: true
    updatedBy?: true
    deletedBy?: true
  }

  export type RoleSumAggregateInputType = {
    id?: true
    status?: true
    createdBy?: true
    updatedBy?: true
    deletedBy?: true
  }

  export type RoleMinAggregateInputType = {
    id?: true
    uid?: true
    name?: true
    description?: true
    status?: true
    createdBy?: true
    createdAt?: true
    updatedBy?: true
    updatedAt?: true
    deletedBy?: true
    deletedAt?: true
  }

  export type RoleMaxAggregateInputType = {
    id?: true
    uid?: true
    name?: true
    description?: true
    status?: true
    createdBy?: true
    createdAt?: true
    updatedBy?: true
    updatedAt?: true
    deletedBy?: true
    deletedAt?: true
  }

  export type RoleCountAggregateInputType = {
    id?: true
    uid?: true
    name?: true
    description?: true
    status?: true
    createdBy?: true
    createdAt?: true
    updatedBy?: true
    updatedAt?: true
    deletedBy?: true
    deletedAt?: true
    _all?: true
  }

  export type RoleAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Role to aggregate.
     */
    where?: RoleWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Roles to fetch.
     */
    orderBy?: RoleOrderByWithRelationInput | RoleOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: RoleWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Roles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Roles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Roles
    **/
    _count?: true | RoleCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: RoleAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: RoleSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: RoleMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: RoleMaxAggregateInputType
  }

  export type GetRoleAggregateType<T extends RoleAggregateArgs> = {
        [P in keyof T & keyof AggregateRole]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateRole[P]>
      : GetScalarType<T[P], AggregateRole[P]>
  }




  export type RoleGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: RoleWhereInput
    orderBy?: RoleOrderByWithAggregationInput | RoleOrderByWithAggregationInput[]
    by: RoleScalarFieldEnum[] | RoleScalarFieldEnum
    having?: RoleScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: RoleCountAggregateInputType | true
    _avg?: RoleAvgAggregateInputType
    _sum?: RoleSumAggregateInputType
    _min?: RoleMinAggregateInputType
    _max?: RoleMaxAggregateInputType
  }

  export type RoleGroupByOutputType = {
    id: number
    uid: string
    name: string
    description: string | null
    status: number
    createdBy: number | null
    createdAt: Date
    updatedBy: number | null
    updatedAt: Date | null
    deletedBy: number | null
    deletedAt: Date | null
    _count: RoleCountAggregateOutputType | null
    _avg: RoleAvgAggregateOutputType | null
    _sum: RoleSumAggregateOutputType | null
    _min: RoleMinAggregateOutputType | null
    _max: RoleMaxAggregateOutputType | null
  }

  type GetRoleGroupByPayload<T extends RoleGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<RoleGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof RoleGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], RoleGroupByOutputType[P]>
            : GetScalarType<T[P], RoleGroupByOutputType[P]>
        }
      >
    >


  export type RoleSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    uid?: boolean
    name?: boolean
    description?: boolean
    status?: boolean
    createdBy?: boolean
    createdAt?: boolean
    updatedBy?: boolean
    updatedAt?: boolean
    deletedBy?: boolean
    deletedAt?: boolean
    users?: boolean | Role$usersArgs<ExtArgs>
    createdByUser?: boolean | Role$createdByUserArgs<ExtArgs>
    updatedByUser?: boolean | Role$updatedByUserArgs<ExtArgs>
    deletedByUser?: boolean | Role$deletedByUserArgs<ExtArgs>
    User?: boolean | Role$UserArgs<ExtArgs>
    RoleMenuAccess?: boolean | Role$RoleMenuAccessArgs<ExtArgs>
    _count?: boolean | RoleCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["role"]>

  export type RoleSelectScalar = {
    id?: boolean
    uid?: boolean
    name?: boolean
    description?: boolean
    status?: boolean
    createdBy?: boolean
    createdAt?: boolean
    updatedBy?: boolean
    updatedAt?: boolean
    deletedBy?: boolean
    deletedAt?: boolean
  }


  export type RoleInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    users?: boolean | Role$usersArgs<ExtArgs>
    createdByUser?: boolean | Role$createdByUserArgs<ExtArgs>
    updatedByUser?: boolean | Role$updatedByUserArgs<ExtArgs>
    deletedByUser?: boolean | Role$deletedByUserArgs<ExtArgs>
    User?: boolean | Role$UserArgs<ExtArgs>
    RoleMenuAccess?: boolean | Role$RoleMenuAccessArgs<ExtArgs>
    _count?: boolean | RoleCountOutputTypeDefaultArgs<ExtArgs>
  }


  export type $RolePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Role"
    objects: {
      users: Prisma.$UserPayload<ExtArgs>[]
      createdByUser: Prisma.$UserPayload<ExtArgs> | null
      updatedByUser: Prisma.$UserPayload<ExtArgs> | null
      deletedByUser: Prisma.$UserPayload<ExtArgs> | null
      User: Prisma.$UserPayload<ExtArgs>[]
      RoleMenuAccess: Prisma.$RoleMenuAccessPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      uid: string
      name: string
      description: string | null
      status: number
      createdBy: number | null
      createdAt: Date
      updatedBy: number | null
      updatedAt: Date | null
      deletedBy: number | null
      deletedAt: Date | null
    }, ExtArgs["result"]["role"]>
    composites: {}
  }


  type RoleGetPayload<S extends boolean | null | undefined | RoleDefaultArgs> = $Result.GetResult<Prisma.$RolePayload, S>

  type RoleCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<RoleFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: RoleCountAggregateInputType | true
    }

  export interface RoleDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Role'], meta: { name: 'Role' } }
    /**
     * Find zero or one Role that matches the filter.
     * @param {RoleFindUniqueArgs} args - Arguments to find a Role
     * @example
     * // Get one Role
     * const role = await prisma.role.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends RoleFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, RoleFindUniqueArgs<ExtArgs>>
    ): Prisma__RoleClient<$Result.GetResult<Prisma.$RolePayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one Role that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {RoleFindUniqueOrThrowArgs} args - Arguments to find a Role
     * @example
     * // Get one Role
     * const role = await prisma.role.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends RoleFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, RoleFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__RoleClient<$Result.GetResult<Prisma.$RolePayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first Role that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RoleFindFirstArgs} args - Arguments to find a Role
     * @example
     * // Get one Role
     * const role = await prisma.role.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends RoleFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, RoleFindFirstArgs<ExtArgs>>
    ): Prisma__RoleClient<$Result.GetResult<Prisma.$RolePayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first Role that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RoleFindFirstOrThrowArgs} args - Arguments to find a Role
     * @example
     * // Get one Role
     * const role = await prisma.role.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends RoleFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, RoleFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__RoleClient<$Result.GetResult<Prisma.$RolePayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more Roles that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RoleFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Roles
     * const roles = await prisma.role.findMany()
     * 
     * // Get first 10 Roles
     * const roles = await prisma.role.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const roleWithIdOnly = await prisma.role.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends RoleFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, RoleFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RolePayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a Role.
     * @param {RoleCreateArgs} args - Arguments to create a Role.
     * @example
     * // Create one Role
     * const Role = await prisma.role.create({
     *   data: {
     *     // ... data to create a Role
     *   }
     * })
     * 
    **/
    create<T extends RoleCreateArgs<ExtArgs>>(
      args: SelectSubset<T, RoleCreateArgs<ExtArgs>>
    ): Prisma__RoleClient<$Result.GetResult<Prisma.$RolePayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many Roles.
     * @param {RoleCreateManyArgs} args - Arguments to create many Roles.
     * @example
     * // Create many Roles
     * const role = await prisma.role.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
    **/
    createMany<T extends RoleCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, RoleCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Role.
     * @param {RoleDeleteArgs} args - Arguments to delete one Role.
     * @example
     * // Delete one Role
     * const Role = await prisma.role.delete({
     *   where: {
     *     // ... filter to delete one Role
     *   }
     * })
     * 
    **/
    delete<T extends RoleDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, RoleDeleteArgs<ExtArgs>>
    ): Prisma__RoleClient<$Result.GetResult<Prisma.$RolePayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one Role.
     * @param {RoleUpdateArgs} args - Arguments to update one Role.
     * @example
     * // Update one Role
     * const role = await prisma.role.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends RoleUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, RoleUpdateArgs<ExtArgs>>
    ): Prisma__RoleClient<$Result.GetResult<Prisma.$RolePayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more Roles.
     * @param {RoleDeleteManyArgs} args - Arguments to filter Roles to delete.
     * @example
     * // Delete a few Roles
     * const { count } = await prisma.role.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends RoleDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, RoleDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Roles.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RoleUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Roles
     * const role = await prisma.role.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends RoleUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, RoleUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Role.
     * @param {RoleUpsertArgs} args - Arguments to update or create a Role.
     * @example
     * // Update or create a Role
     * const role = await prisma.role.upsert({
     *   create: {
     *     // ... data to create a Role
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Role we want to update
     *   }
     * })
    **/
    upsert<T extends RoleUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, RoleUpsertArgs<ExtArgs>>
    ): Prisma__RoleClient<$Result.GetResult<Prisma.$RolePayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of Roles.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RoleCountArgs} args - Arguments to filter Roles to count.
     * @example
     * // Count the number of Roles
     * const count = await prisma.role.count({
     *   where: {
     *     // ... the filter for the Roles we want to count
     *   }
     * })
    **/
    count<T extends RoleCountArgs>(
      args?: Subset<T, RoleCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], RoleCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Role.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RoleAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends RoleAggregateArgs>(args: Subset<T, RoleAggregateArgs>): Prisma.PrismaPromise<GetRoleAggregateType<T>>

    /**
     * Group by Role.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RoleGroupByArgs} args - Group by arguments.
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
      T extends RoleGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: RoleGroupByArgs['orderBy'] }
        : { orderBy?: RoleGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, RoleGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetRoleGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Role model
   */
  readonly fields: RoleFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Role.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__RoleClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    users<T extends Role$usersArgs<ExtArgs> = {}>(args?: Subset<T, Role$usersArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, 'findMany'> | Null>;

    createdByUser<T extends Role$createdByUserArgs<ExtArgs> = {}>(args?: Subset<T, Role$createdByUserArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, 'findUniqueOrThrow'> | null, null, ExtArgs>;

    updatedByUser<T extends Role$updatedByUserArgs<ExtArgs> = {}>(args?: Subset<T, Role$updatedByUserArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, 'findUniqueOrThrow'> | null, null, ExtArgs>;

    deletedByUser<T extends Role$deletedByUserArgs<ExtArgs> = {}>(args?: Subset<T, Role$deletedByUserArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, 'findUniqueOrThrow'> | null, null, ExtArgs>;

    User<T extends Role$UserArgs<ExtArgs> = {}>(args?: Subset<T, Role$UserArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, 'findMany'> | Null>;

    RoleMenuAccess<T extends Role$RoleMenuAccessArgs<ExtArgs> = {}>(args?: Subset<T, Role$RoleMenuAccessArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RoleMenuAccessPayload<ExtArgs>, T, 'findMany'> | Null>;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the Role model
   */ 
  interface RoleFieldRefs {
    readonly id: FieldRef<"Role", 'Int'>
    readonly uid: FieldRef<"Role", 'String'>
    readonly name: FieldRef<"Role", 'String'>
    readonly description: FieldRef<"Role", 'String'>
    readonly status: FieldRef<"Role", 'Int'>
    readonly createdBy: FieldRef<"Role", 'Int'>
    readonly createdAt: FieldRef<"Role", 'DateTime'>
    readonly updatedBy: FieldRef<"Role", 'Int'>
    readonly updatedAt: FieldRef<"Role", 'DateTime'>
    readonly deletedBy: FieldRef<"Role", 'Int'>
    readonly deletedAt: FieldRef<"Role", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Role findUnique
   */
  export type RoleFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Role
     */
    select?: RoleSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoleInclude<ExtArgs> | null
    /**
     * Filter, which Role to fetch.
     */
    where: RoleWhereUniqueInput
  }

  /**
   * Role findUniqueOrThrow
   */
  export type RoleFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Role
     */
    select?: RoleSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoleInclude<ExtArgs> | null
    /**
     * Filter, which Role to fetch.
     */
    where: RoleWhereUniqueInput
  }

  /**
   * Role findFirst
   */
  export type RoleFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Role
     */
    select?: RoleSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoleInclude<ExtArgs> | null
    /**
     * Filter, which Role to fetch.
     */
    where?: RoleWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Roles to fetch.
     */
    orderBy?: RoleOrderByWithRelationInput | RoleOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Roles.
     */
    cursor?: RoleWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Roles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Roles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Roles.
     */
    distinct?: RoleScalarFieldEnum | RoleScalarFieldEnum[]
  }

  /**
   * Role findFirstOrThrow
   */
  export type RoleFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Role
     */
    select?: RoleSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoleInclude<ExtArgs> | null
    /**
     * Filter, which Role to fetch.
     */
    where?: RoleWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Roles to fetch.
     */
    orderBy?: RoleOrderByWithRelationInput | RoleOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Roles.
     */
    cursor?: RoleWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Roles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Roles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Roles.
     */
    distinct?: RoleScalarFieldEnum | RoleScalarFieldEnum[]
  }

  /**
   * Role findMany
   */
  export type RoleFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Role
     */
    select?: RoleSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoleInclude<ExtArgs> | null
    /**
     * Filter, which Roles to fetch.
     */
    where?: RoleWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Roles to fetch.
     */
    orderBy?: RoleOrderByWithRelationInput | RoleOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Roles.
     */
    cursor?: RoleWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Roles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Roles.
     */
    skip?: number
    distinct?: RoleScalarFieldEnum | RoleScalarFieldEnum[]
  }

  /**
   * Role create
   */
  export type RoleCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Role
     */
    select?: RoleSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoleInclude<ExtArgs> | null
    /**
     * The data needed to create a Role.
     */
    data: XOR<RoleCreateInput, RoleUncheckedCreateInput>
  }

  /**
   * Role createMany
   */
  export type RoleCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Roles.
     */
    data: RoleCreateManyInput | RoleCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Role update
   */
  export type RoleUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Role
     */
    select?: RoleSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoleInclude<ExtArgs> | null
    /**
     * The data needed to update a Role.
     */
    data: XOR<RoleUpdateInput, RoleUncheckedUpdateInput>
    /**
     * Choose, which Role to update.
     */
    where: RoleWhereUniqueInput
  }

  /**
   * Role updateMany
   */
  export type RoleUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Roles.
     */
    data: XOR<RoleUpdateManyMutationInput, RoleUncheckedUpdateManyInput>
    /**
     * Filter which Roles to update
     */
    where?: RoleWhereInput
  }

  /**
   * Role upsert
   */
  export type RoleUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Role
     */
    select?: RoleSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoleInclude<ExtArgs> | null
    /**
     * The filter to search for the Role to update in case it exists.
     */
    where: RoleWhereUniqueInput
    /**
     * In case the Role found by the `where` argument doesn't exist, create a new Role with this data.
     */
    create: XOR<RoleCreateInput, RoleUncheckedCreateInput>
    /**
     * In case the Role was found with the provided `where` argument, update it with this data.
     */
    update: XOR<RoleUpdateInput, RoleUncheckedUpdateInput>
  }

  /**
   * Role delete
   */
  export type RoleDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Role
     */
    select?: RoleSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoleInclude<ExtArgs> | null
    /**
     * Filter which Role to delete.
     */
    where: RoleWhereUniqueInput
  }

  /**
   * Role deleteMany
   */
  export type RoleDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Roles to delete
     */
    where?: RoleWhereInput
  }

  /**
   * Role.users
   */
  export type Role$usersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    where?: UserWhereInput
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    cursor?: UserWhereUniqueInput
    take?: number
    skip?: number
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * Role.createdByUser
   */
  export type Role$createdByUserArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    where?: UserWhereInput
  }

  /**
   * Role.updatedByUser
   */
  export type Role$updatedByUserArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    where?: UserWhereInput
  }

  /**
   * Role.deletedByUser
   */
  export type Role$deletedByUserArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    where?: UserWhereInput
  }

  /**
   * Role.User
   */
  export type Role$UserArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    where?: UserWhereInput
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    cursor?: UserWhereUniqueInput
    take?: number
    skip?: number
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * Role.RoleMenuAccess
   */
  export type Role$RoleMenuAccessArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RoleMenuAccess
     */
    select?: RoleMenuAccessSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoleMenuAccessInclude<ExtArgs> | null
    where?: RoleMenuAccessWhereInput
    orderBy?: RoleMenuAccessOrderByWithRelationInput | RoleMenuAccessOrderByWithRelationInput[]
    cursor?: RoleMenuAccessWhereUniqueInput
    take?: number
    skip?: number
    distinct?: RoleMenuAccessScalarFieldEnum | RoleMenuAccessScalarFieldEnum[]
  }

  /**
   * Role without action
   */
  export type RoleDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Role
     */
    select?: RoleSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoleInclude<ExtArgs> | null
  }


  /**
   * Model MasterMenu
   */

  export type AggregateMasterMenu = {
    _count: MasterMenuCountAggregateOutputType | null
    _avg: MasterMenuAvgAggregateOutputType | null
    _sum: MasterMenuSumAggregateOutputType | null
    _min: MasterMenuMinAggregateOutputType | null
    _max: MasterMenuMaxAggregateOutputType | null
  }

  export type MasterMenuAvgAggregateOutputType = {
    id: number | null
    order: number | null
    status: number | null
    createdBy: number | null
    updatedBy: number | null
    deletedBy: number | null
  }

  export type MasterMenuSumAggregateOutputType = {
    id: number | null
    order: number | null
    status: number | null
    createdBy: number | null
    updatedBy: number | null
    deletedBy: number | null
  }

  export type MasterMenuMinAggregateOutputType = {
    id: number | null
    uid: string | null
    name: string | null
    description: string | null
    url: string | null
    icon: string | null
    order: number | null
    status: number | null
    createdBy: number | null
    createdAt: Date | null
    updatedBy: number | null
    updatedAt: Date | null
    deletedBy: number | null
    deletedAt: Date | null
  }

  export type MasterMenuMaxAggregateOutputType = {
    id: number | null
    uid: string | null
    name: string | null
    description: string | null
    url: string | null
    icon: string | null
    order: number | null
    status: number | null
    createdBy: number | null
    createdAt: Date | null
    updatedBy: number | null
    updatedAt: Date | null
    deletedBy: number | null
    deletedAt: Date | null
  }

  export type MasterMenuCountAggregateOutputType = {
    id: number
    uid: number
    name: number
    description: number
    url: number
    icon: number
    order: number
    status: number
    createdBy: number
    createdAt: number
    updatedBy: number
    updatedAt: number
    deletedBy: number
    deletedAt: number
    _all: number
  }


  export type MasterMenuAvgAggregateInputType = {
    id?: true
    order?: true
    status?: true
    createdBy?: true
    updatedBy?: true
    deletedBy?: true
  }

  export type MasterMenuSumAggregateInputType = {
    id?: true
    order?: true
    status?: true
    createdBy?: true
    updatedBy?: true
    deletedBy?: true
  }

  export type MasterMenuMinAggregateInputType = {
    id?: true
    uid?: true
    name?: true
    description?: true
    url?: true
    icon?: true
    order?: true
    status?: true
    createdBy?: true
    createdAt?: true
    updatedBy?: true
    updatedAt?: true
    deletedBy?: true
    deletedAt?: true
  }

  export type MasterMenuMaxAggregateInputType = {
    id?: true
    uid?: true
    name?: true
    description?: true
    url?: true
    icon?: true
    order?: true
    status?: true
    createdBy?: true
    createdAt?: true
    updatedBy?: true
    updatedAt?: true
    deletedBy?: true
    deletedAt?: true
  }

  export type MasterMenuCountAggregateInputType = {
    id?: true
    uid?: true
    name?: true
    description?: true
    url?: true
    icon?: true
    order?: true
    status?: true
    createdBy?: true
    createdAt?: true
    updatedBy?: true
    updatedAt?: true
    deletedBy?: true
    deletedAt?: true
    _all?: true
  }

  export type MasterMenuAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which MasterMenu to aggregate.
     */
    where?: MasterMenuWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of MasterMenus to fetch.
     */
    orderBy?: MasterMenuOrderByWithRelationInput | MasterMenuOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: MasterMenuWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` MasterMenus from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` MasterMenus.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned MasterMenus
    **/
    _count?: true | MasterMenuCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: MasterMenuAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: MasterMenuSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: MasterMenuMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: MasterMenuMaxAggregateInputType
  }

  export type GetMasterMenuAggregateType<T extends MasterMenuAggregateArgs> = {
        [P in keyof T & keyof AggregateMasterMenu]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateMasterMenu[P]>
      : GetScalarType<T[P], AggregateMasterMenu[P]>
  }




  export type MasterMenuGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MasterMenuWhereInput
    orderBy?: MasterMenuOrderByWithAggregationInput | MasterMenuOrderByWithAggregationInput[]
    by: MasterMenuScalarFieldEnum[] | MasterMenuScalarFieldEnum
    having?: MasterMenuScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: MasterMenuCountAggregateInputType | true
    _avg?: MasterMenuAvgAggregateInputType
    _sum?: MasterMenuSumAggregateInputType
    _min?: MasterMenuMinAggregateInputType
    _max?: MasterMenuMaxAggregateInputType
  }

  export type MasterMenuGroupByOutputType = {
    id: number
    uid: string
    name: string
    description: string | null
    url: string | null
    icon: string | null
    order: number
    status: number
    createdBy: number | null
    createdAt: Date
    updatedBy: number | null
    updatedAt: Date | null
    deletedBy: number | null
    deletedAt: Date | null
    _count: MasterMenuCountAggregateOutputType | null
    _avg: MasterMenuAvgAggregateOutputType | null
    _sum: MasterMenuSumAggregateOutputType | null
    _min: MasterMenuMinAggregateOutputType | null
    _max: MasterMenuMaxAggregateOutputType | null
  }

  type GetMasterMenuGroupByPayload<T extends MasterMenuGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<MasterMenuGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof MasterMenuGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], MasterMenuGroupByOutputType[P]>
            : GetScalarType<T[P], MasterMenuGroupByOutputType[P]>
        }
      >
    >


  export type MasterMenuSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    uid?: boolean
    name?: boolean
    description?: boolean
    url?: boolean
    icon?: boolean
    order?: boolean
    status?: boolean
    createdBy?: boolean
    createdAt?: boolean
    updatedBy?: boolean
    updatedAt?: boolean
    deletedBy?: boolean
    deletedAt?: boolean
    subMenus?: boolean | MasterMenu$subMenusArgs<ExtArgs>
    createdByUser?: boolean | MasterMenu$createdByUserArgs<ExtArgs>
    updatedByUser?: boolean | MasterMenu$updatedByUserArgs<ExtArgs>
    deletedByUser?: boolean | MasterMenu$deletedByUserArgs<ExtArgs>
    _count?: boolean | MasterMenuCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["masterMenu"]>

  export type MasterMenuSelectScalar = {
    id?: boolean
    uid?: boolean
    name?: boolean
    description?: boolean
    url?: boolean
    icon?: boolean
    order?: boolean
    status?: boolean
    createdBy?: boolean
    createdAt?: boolean
    updatedBy?: boolean
    updatedAt?: boolean
    deletedBy?: boolean
    deletedAt?: boolean
  }


  export type MasterMenuInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    subMenus?: boolean | MasterMenu$subMenusArgs<ExtArgs>
    createdByUser?: boolean | MasterMenu$createdByUserArgs<ExtArgs>
    updatedByUser?: boolean | MasterMenu$updatedByUserArgs<ExtArgs>
    deletedByUser?: boolean | MasterMenu$deletedByUserArgs<ExtArgs>
    _count?: boolean | MasterMenuCountOutputTypeDefaultArgs<ExtArgs>
  }


  export type $MasterMenuPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "MasterMenu"
    objects: {
      subMenus: Prisma.$SubMenuPayload<ExtArgs>[]
      createdByUser: Prisma.$UserPayload<ExtArgs> | null
      updatedByUser: Prisma.$UserPayload<ExtArgs> | null
      deletedByUser: Prisma.$UserPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      uid: string
      name: string
      description: string | null
      url: string | null
      icon: string | null
      order: number
      status: number
      createdBy: number | null
      createdAt: Date
      updatedBy: number | null
      updatedAt: Date | null
      deletedBy: number | null
      deletedAt: Date | null
    }, ExtArgs["result"]["masterMenu"]>
    composites: {}
  }


  type MasterMenuGetPayload<S extends boolean | null | undefined | MasterMenuDefaultArgs> = $Result.GetResult<Prisma.$MasterMenuPayload, S>

  type MasterMenuCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<MasterMenuFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: MasterMenuCountAggregateInputType | true
    }

  export interface MasterMenuDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['MasterMenu'], meta: { name: 'MasterMenu' } }
    /**
     * Find zero or one MasterMenu that matches the filter.
     * @param {MasterMenuFindUniqueArgs} args - Arguments to find a MasterMenu
     * @example
     * // Get one MasterMenu
     * const masterMenu = await prisma.masterMenu.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends MasterMenuFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, MasterMenuFindUniqueArgs<ExtArgs>>
    ): Prisma__MasterMenuClient<$Result.GetResult<Prisma.$MasterMenuPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one MasterMenu that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {MasterMenuFindUniqueOrThrowArgs} args - Arguments to find a MasterMenu
     * @example
     * // Get one MasterMenu
     * const masterMenu = await prisma.masterMenu.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends MasterMenuFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, MasterMenuFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__MasterMenuClient<$Result.GetResult<Prisma.$MasterMenuPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first MasterMenu that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MasterMenuFindFirstArgs} args - Arguments to find a MasterMenu
     * @example
     * // Get one MasterMenu
     * const masterMenu = await prisma.masterMenu.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends MasterMenuFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, MasterMenuFindFirstArgs<ExtArgs>>
    ): Prisma__MasterMenuClient<$Result.GetResult<Prisma.$MasterMenuPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first MasterMenu that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MasterMenuFindFirstOrThrowArgs} args - Arguments to find a MasterMenu
     * @example
     * // Get one MasterMenu
     * const masterMenu = await prisma.masterMenu.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends MasterMenuFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, MasterMenuFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__MasterMenuClient<$Result.GetResult<Prisma.$MasterMenuPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more MasterMenus that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MasterMenuFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all MasterMenus
     * const masterMenus = await prisma.masterMenu.findMany()
     * 
     * // Get first 10 MasterMenus
     * const masterMenus = await prisma.masterMenu.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const masterMenuWithIdOnly = await prisma.masterMenu.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends MasterMenuFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, MasterMenuFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MasterMenuPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a MasterMenu.
     * @param {MasterMenuCreateArgs} args - Arguments to create a MasterMenu.
     * @example
     * // Create one MasterMenu
     * const MasterMenu = await prisma.masterMenu.create({
     *   data: {
     *     // ... data to create a MasterMenu
     *   }
     * })
     * 
    **/
    create<T extends MasterMenuCreateArgs<ExtArgs>>(
      args: SelectSubset<T, MasterMenuCreateArgs<ExtArgs>>
    ): Prisma__MasterMenuClient<$Result.GetResult<Prisma.$MasterMenuPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many MasterMenus.
     * @param {MasterMenuCreateManyArgs} args - Arguments to create many MasterMenus.
     * @example
     * // Create many MasterMenus
     * const masterMenu = await prisma.masterMenu.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
    **/
    createMany<T extends MasterMenuCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, MasterMenuCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a MasterMenu.
     * @param {MasterMenuDeleteArgs} args - Arguments to delete one MasterMenu.
     * @example
     * // Delete one MasterMenu
     * const MasterMenu = await prisma.masterMenu.delete({
     *   where: {
     *     // ... filter to delete one MasterMenu
     *   }
     * })
     * 
    **/
    delete<T extends MasterMenuDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, MasterMenuDeleteArgs<ExtArgs>>
    ): Prisma__MasterMenuClient<$Result.GetResult<Prisma.$MasterMenuPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one MasterMenu.
     * @param {MasterMenuUpdateArgs} args - Arguments to update one MasterMenu.
     * @example
     * // Update one MasterMenu
     * const masterMenu = await prisma.masterMenu.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends MasterMenuUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, MasterMenuUpdateArgs<ExtArgs>>
    ): Prisma__MasterMenuClient<$Result.GetResult<Prisma.$MasterMenuPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more MasterMenus.
     * @param {MasterMenuDeleteManyArgs} args - Arguments to filter MasterMenus to delete.
     * @example
     * // Delete a few MasterMenus
     * const { count } = await prisma.masterMenu.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends MasterMenuDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, MasterMenuDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more MasterMenus.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MasterMenuUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many MasterMenus
     * const masterMenu = await prisma.masterMenu.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends MasterMenuUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, MasterMenuUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one MasterMenu.
     * @param {MasterMenuUpsertArgs} args - Arguments to update or create a MasterMenu.
     * @example
     * // Update or create a MasterMenu
     * const masterMenu = await prisma.masterMenu.upsert({
     *   create: {
     *     // ... data to create a MasterMenu
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the MasterMenu we want to update
     *   }
     * })
    **/
    upsert<T extends MasterMenuUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, MasterMenuUpsertArgs<ExtArgs>>
    ): Prisma__MasterMenuClient<$Result.GetResult<Prisma.$MasterMenuPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of MasterMenus.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MasterMenuCountArgs} args - Arguments to filter MasterMenus to count.
     * @example
     * // Count the number of MasterMenus
     * const count = await prisma.masterMenu.count({
     *   where: {
     *     // ... the filter for the MasterMenus we want to count
     *   }
     * })
    **/
    count<T extends MasterMenuCountArgs>(
      args?: Subset<T, MasterMenuCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], MasterMenuCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a MasterMenu.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MasterMenuAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends MasterMenuAggregateArgs>(args: Subset<T, MasterMenuAggregateArgs>): Prisma.PrismaPromise<GetMasterMenuAggregateType<T>>

    /**
     * Group by MasterMenu.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MasterMenuGroupByArgs} args - Group by arguments.
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
      T extends MasterMenuGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: MasterMenuGroupByArgs['orderBy'] }
        : { orderBy?: MasterMenuGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, MasterMenuGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetMasterMenuGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the MasterMenu model
   */
  readonly fields: MasterMenuFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for MasterMenu.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__MasterMenuClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    subMenus<T extends MasterMenu$subMenusArgs<ExtArgs> = {}>(args?: Subset<T, MasterMenu$subMenusArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SubMenuPayload<ExtArgs>, T, 'findMany'> | Null>;

    createdByUser<T extends MasterMenu$createdByUserArgs<ExtArgs> = {}>(args?: Subset<T, MasterMenu$createdByUserArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, 'findUniqueOrThrow'> | null, null, ExtArgs>;

    updatedByUser<T extends MasterMenu$updatedByUserArgs<ExtArgs> = {}>(args?: Subset<T, MasterMenu$updatedByUserArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, 'findUniqueOrThrow'> | null, null, ExtArgs>;

    deletedByUser<T extends MasterMenu$deletedByUserArgs<ExtArgs> = {}>(args?: Subset<T, MasterMenu$deletedByUserArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, 'findUniqueOrThrow'> | null, null, ExtArgs>;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the MasterMenu model
   */ 
  interface MasterMenuFieldRefs {
    readonly id: FieldRef<"MasterMenu", 'Int'>
    readonly uid: FieldRef<"MasterMenu", 'String'>
    readonly name: FieldRef<"MasterMenu", 'String'>
    readonly description: FieldRef<"MasterMenu", 'String'>
    readonly url: FieldRef<"MasterMenu", 'String'>
    readonly icon: FieldRef<"MasterMenu", 'String'>
    readonly order: FieldRef<"MasterMenu", 'Int'>
    readonly status: FieldRef<"MasterMenu", 'Int'>
    readonly createdBy: FieldRef<"MasterMenu", 'Int'>
    readonly createdAt: FieldRef<"MasterMenu", 'DateTime'>
    readonly updatedBy: FieldRef<"MasterMenu", 'Int'>
    readonly updatedAt: FieldRef<"MasterMenu", 'DateTime'>
    readonly deletedBy: FieldRef<"MasterMenu", 'Int'>
    readonly deletedAt: FieldRef<"MasterMenu", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * MasterMenu findUnique
   */
  export type MasterMenuFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MasterMenu
     */
    select?: MasterMenuSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MasterMenuInclude<ExtArgs> | null
    /**
     * Filter, which MasterMenu to fetch.
     */
    where: MasterMenuWhereUniqueInput
  }

  /**
   * MasterMenu findUniqueOrThrow
   */
  export type MasterMenuFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MasterMenu
     */
    select?: MasterMenuSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MasterMenuInclude<ExtArgs> | null
    /**
     * Filter, which MasterMenu to fetch.
     */
    where: MasterMenuWhereUniqueInput
  }

  /**
   * MasterMenu findFirst
   */
  export type MasterMenuFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MasterMenu
     */
    select?: MasterMenuSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MasterMenuInclude<ExtArgs> | null
    /**
     * Filter, which MasterMenu to fetch.
     */
    where?: MasterMenuWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of MasterMenus to fetch.
     */
    orderBy?: MasterMenuOrderByWithRelationInput | MasterMenuOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for MasterMenus.
     */
    cursor?: MasterMenuWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` MasterMenus from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` MasterMenus.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of MasterMenus.
     */
    distinct?: MasterMenuScalarFieldEnum | MasterMenuScalarFieldEnum[]
  }

  /**
   * MasterMenu findFirstOrThrow
   */
  export type MasterMenuFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MasterMenu
     */
    select?: MasterMenuSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MasterMenuInclude<ExtArgs> | null
    /**
     * Filter, which MasterMenu to fetch.
     */
    where?: MasterMenuWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of MasterMenus to fetch.
     */
    orderBy?: MasterMenuOrderByWithRelationInput | MasterMenuOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for MasterMenus.
     */
    cursor?: MasterMenuWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` MasterMenus from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` MasterMenus.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of MasterMenus.
     */
    distinct?: MasterMenuScalarFieldEnum | MasterMenuScalarFieldEnum[]
  }

  /**
   * MasterMenu findMany
   */
  export type MasterMenuFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MasterMenu
     */
    select?: MasterMenuSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MasterMenuInclude<ExtArgs> | null
    /**
     * Filter, which MasterMenus to fetch.
     */
    where?: MasterMenuWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of MasterMenus to fetch.
     */
    orderBy?: MasterMenuOrderByWithRelationInput | MasterMenuOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing MasterMenus.
     */
    cursor?: MasterMenuWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` MasterMenus from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` MasterMenus.
     */
    skip?: number
    distinct?: MasterMenuScalarFieldEnum | MasterMenuScalarFieldEnum[]
  }

  /**
   * MasterMenu create
   */
  export type MasterMenuCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MasterMenu
     */
    select?: MasterMenuSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MasterMenuInclude<ExtArgs> | null
    /**
     * The data needed to create a MasterMenu.
     */
    data: XOR<MasterMenuCreateInput, MasterMenuUncheckedCreateInput>
  }

  /**
   * MasterMenu createMany
   */
  export type MasterMenuCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many MasterMenus.
     */
    data: MasterMenuCreateManyInput | MasterMenuCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * MasterMenu update
   */
  export type MasterMenuUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MasterMenu
     */
    select?: MasterMenuSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MasterMenuInclude<ExtArgs> | null
    /**
     * The data needed to update a MasterMenu.
     */
    data: XOR<MasterMenuUpdateInput, MasterMenuUncheckedUpdateInput>
    /**
     * Choose, which MasterMenu to update.
     */
    where: MasterMenuWhereUniqueInput
  }

  /**
   * MasterMenu updateMany
   */
  export type MasterMenuUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update MasterMenus.
     */
    data: XOR<MasterMenuUpdateManyMutationInput, MasterMenuUncheckedUpdateManyInput>
    /**
     * Filter which MasterMenus to update
     */
    where?: MasterMenuWhereInput
  }

  /**
   * MasterMenu upsert
   */
  export type MasterMenuUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MasterMenu
     */
    select?: MasterMenuSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MasterMenuInclude<ExtArgs> | null
    /**
     * The filter to search for the MasterMenu to update in case it exists.
     */
    where: MasterMenuWhereUniqueInput
    /**
     * In case the MasterMenu found by the `where` argument doesn't exist, create a new MasterMenu with this data.
     */
    create: XOR<MasterMenuCreateInput, MasterMenuUncheckedCreateInput>
    /**
     * In case the MasterMenu was found with the provided `where` argument, update it with this data.
     */
    update: XOR<MasterMenuUpdateInput, MasterMenuUncheckedUpdateInput>
  }

  /**
   * MasterMenu delete
   */
  export type MasterMenuDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MasterMenu
     */
    select?: MasterMenuSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MasterMenuInclude<ExtArgs> | null
    /**
     * Filter which MasterMenu to delete.
     */
    where: MasterMenuWhereUniqueInput
  }

  /**
   * MasterMenu deleteMany
   */
  export type MasterMenuDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which MasterMenus to delete
     */
    where?: MasterMenuWhereInput
  }

  /**
   * MasterMenu.subMenus
   */
  export type MasterMenu$subMenusArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SubMenu
     */
    select?: SubMenuSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubMenuInclude<ExtArgs> | null
    where?: SubMenuWhereInput
    orderBy?: SubMenuOrderByWithRelationInput | SubMenuOrderByWithRelationInput[]
    cursor?: SubMenuWhereUniqueInput
    take?: number
    skip?: number
    distinct?: SubMenuScalarFieldEnum | SubMenuScalarFieldEnum[]
  }

  /**
   * MasterMenu.createdByUser
   */
  export type MasterMenu$createdByUserArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    where?: UserWhereInput
  }

  /**
   * MasterMenu.updatedByUser
   */
  export type MasterMenu$updatedByUserArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    where?: UserWhereInput
  }

  /**
   * MasterMenu.deletedByUser
   */
  export type MasterMenu$deletedByUserArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    where?: UserWhereInput
  }

  /**
   * MasterMenu without action
   */
  export type MasterMenuDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MasterMenu
     */
    select?: MasterMenuSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MasterMenuInclude<ExtArgs> | null
  }


  /**
   * Model SubMenu
   */

  export type AggregateSubMenu = {
    _count: SubMenuCountAggregateOutputType | null
    _avg: SubMenuAvgAggregateOutputType | null
    _sum: SubMenuSumAggregateOutputType | null
    _min: SubMenuMinAggregateOutputType | null
    _max: SubMenuMaxAggregateOutputType | null
  }

  export type SubMenuAvgAggregateOutputType = {
    id: number | null
    masterMenuId: number | null
    order: number | null
    status: number | null
    createdBy: number | null
    updatedBy: number | null
    deletedBy: number | null
  }

  export type SubMenuSumAggregateOutputType = {
    id: number | null
    masterMenuId: number | null
    order: number | null
    status: number | null
    createdBy: number | null
    updatedBy: number | null
    deletedBy: number | null
  }

  export type SubMenuMinAggregateOutputType = {
    id: number | null
    uid: string | null
    masterMenuId: number | null
    name: string | null
    description: string | null
    url: string | null
    icon: string | null
    order: number | null
    status: number | null
    createdBy: number | null
    createdAt: Date | null
    updatedBy: number | null
    updatedAt: Date | null
    deletedBy: number | null
    deletedAt: Date | null
  }

  export type SubMenuMaxAggregateOutputType = {
    id: number | null
    uid: string | null
    masterMenuId: number | null
    name: string | null
    description: string | null
    url: string | null
    icon: string | null
    order: number | null
    status: number | null
    createdBy: number | null
    createdAt: Date | null
    updatedBy: number | null
    updatedAt: Date | null
    deletedBy: number | null
    deletedAt: Date | null
  }

  export type SubMenuCountAggregateOutputType = {
    id: number
    uid: number
    masterMenuId: number
    name: number
    description: number
    url: number
    icon: number
    order: number
    status: number
    createdBy: number
    createdAt: number
    updatedBy: number
    updatedAt: number
    deletedBy: number
    deletedAt: number
    _all: number
  }


  export type SubMenuAvgAggregateInputType = {
    id?: true
    masterMenuId?: true
    order?: true
    status?: true
    createdBy?: true
    updatedBy?: true
    deletedBy?: true
  }

  export type SubMenuSumAggregateInputType = {
    id?: true
    masterMenuId?: true
    order?: true
    status?: true
    createdBy?: true
    updatedBy?: true
    deletedBy?: true
  }

  export type SubMenuMinAggregateInputType = {
    id?: true
    uid?: true
    masterMenuId?: true
    name?: true
    description?: true
    url?: true
    icon?: true
    order?: true
    status?: true
    createdBy?: true
    createdAt?: true
    updatedBy?: true
    updatedAt?: true
    deletedBy?: true
    deletedAt?: true
  }

  export type SubMenuMaxAggregateInputType = {
    id?: true
    uid?: true
    masterMenuId?: true
    name?: true
    description?: true
    url?: true
    icon?: true
    order?: true
    status?: true
    createdBy?: true
    createdAt?: true
    updatedBy?: true
    updatedAt?: true
    deletedBy?: true
    deletedAt?: true
  }

  export type SubMenuCountAggregateInputType = {
    id?: true
    uid?: true
    masterMenuId?: true
    name?: true
    description?: true
    url?: true
    icon?: true
    order?: true
    status?: true
    createdBy?: true
    createdAt?: true
    updatedBy?: true
    updatedAt?: true
    deletedBy?: true
    deletedAt?: true
    _all?: true
  }

  export type SubMenuAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which SubMenu to aggregate.
     */
    where?: SubMenuWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SubMenus to fetch.
     */
    orderBy?: SubMenuOrderByWithRelationInput | SubMenuOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: SubMenuWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SubMenus from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SubMenus.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned SubMenus
    **/
    _count?: true | SubMenuCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: SubMenuAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: SubMenuSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: SubMenuMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: SubMenuMaxAggregateInputType
  }

  export type GetSubMenuAggregateType<T extends SubMenuAggregateArgs> = {
        [P in keyof T & keyof AggregateSubMenu]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateSubMenu[P]>
      : GetScalarType<T[P], AggregateSubMenu[P]>
  }




  export type SubMenuGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SubMenuWhereInput
    orderBy?: SubMenuOrderByWithAggregationInput | SubMenuOrderByWithAggregationInput[]
    by: SubMenuScalarFieldEnum[] | SubMenuScalarFieldEnum
    having?: SubMenuScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: SubMenuCountAggregateInputType | true
    _avg?: SubMenuAvgAggregateInputType
    _sum?: SubMenuSumAggregateInputType
    _min?: SubMenuMinAggregateInputType
    _max?: SubMenuMaxAggregateInputType
  }

  export type SubMenuGroupByOutputType = {
    id: number
    uid: string
    masterMenuId: number
    name: string
    description: string | null
    url: string | null
    icon: string | null
    order: number
    status: number
    createdBy: number | null
    createdAt: Date
    updatedBy: number | null
    updatedAt: Date | null
    deletedBy: number | null
    deletedAt: Date | null
    _count: SubMenuCountAggregateOutputType | null
    _avg: SubMenuAvgAggregateOutputType | null
    _sum: SubMenuSumAggregateOutputType | null
    _min: SubMenuMinAggregateOutputType | null
    _max: SubMenuMaxAggregateOutputType | null
  }

  type GetSubMenuGroupByPayload<T extends SubMenuGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<SubMenuGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof SubMenuGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], SubMenuGroupByOutputType[P]>
            : GetScalarType<T[P], SubMenuGroupByOutputType[P]>
        }
      >
    >


  export type SubMenuSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    uid?: boolean
    masterMenuId?: boolean
    name?: boolean
    description?: boolean
    url?: boolean
    icon?: boolean
    order?: boolean
    status?: boolean
    createdBy?: boolean
    createdAt?: boolean
    updatedBy?: boolean
    updatedAt?: boolean
    deletedBy?: boolean
    deletedAt?: boolean
    masterMenu?: boolean | MasterMenuDefaultArgs<ExtArgs>
    createdByUser?: boolean | SubMenu$createdByUserArgs<ExtArgs>
    updatedByUser?: boolean | SubMenu$updatedByUserArgs<ExtArgs>
    deletedByUser?: boolean | SubMenu$deletedByUserArgs<ExtArgs>
    RoleMenuAccess?: boolean | SubMenu$RoleMenuAccessArgs<ExtArgs>
    _count?: boolean | SubMenuCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["subMenu"]>

  export type SubMenuSelectScalar = {
    id?: boolean
    uid?: boolean
    masterMenuId?: boolean
    name?: boolean
    description?: boolean
    url?: boolean
    icon?: boolean
    order?: boolean
    status?: boolean
    createdBy?: boolean
    createdAt?: boolean
    updatedBy?: boolean
    updatedAt?: boolean
    deletedBy?: boolean
    deletedAt?: boolean
  }


  export type SubMenuInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    masterMenu?: boolean | MasterMenuDefaultArgs<ExtArgs>
    createdByUser?: boolean | SubMenu$createdByUserArgs<ExtArgs>
    updatedByUser?: boolean | SubMenu$updatedByUserArgs<ExtArgs>
    deletedByUser?: boolean | SubMenu$deletedByUserArgs<ExtArgs>
    RoleMenuAccess?: boolean | SubMenu$RoleMenuAccessArgs<ExtArgs>
    _count?: boolean | SubMenuCountOutputTypeDefaultArgs<ExtArgs>
  }


  export type $SubMenuPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "SubMenu"
    objects: {
      masterMenu: Prisma.$MasterMenuPayload<ExtArgs>
      createdByUser: Prisma.$UserPayload<ExtArgs> | null
      updatedByUser: Prisma.$UserPayload<ExtArgs> | null
      deletedByUser: Prisma.$UserPayload<ExtArgs> | null
      RoleMenuAccess: Prisma.$RoleMenuAccessPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      uid: string
      masterMenuId: number
      name: string
      description: string | null
      url: string | null
      icon: string | null
      order: number
      status: number
      createdBy: number | null
      createdAt: Date
      updatedBy: number | null
      updatedAt: Date | null
      deletedBy: number | null
      deletedAt: Date | null
    }, ExtArgs["result"]["subMenu"]>
    composites: {}
  }


  type SubMenuGetPayload<S extends boolean | null | undefined | SubMenuDefaultArgs> = $Result.GetResult<Prisma.$SubMenuPayload, S>

  type SubMenuCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<SubMenuFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: SubMenuCountAggregateInputType | true
    }

  export interface SubMenuDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['SubMenu'], meta: { name: 'SubMenu' } }
    /**
     * Find zero or one SubMenu that matches the filter.
     * @param {SubMenuFindUniqueArgs} args - Arguments to find a SubMenu
     * @example
     * // Get one SubMenu
     * const subMenu = await prisma.subMenu.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends SubMenuFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, SubMenuFindUniqueArgs<ExtArgs>>
    ): Prisma__SubMenuClient<$Result.GetResult<Prisma.$SubMenuPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one SubMenu that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {SubMenuFindUniqueOrThrowArgs} args - Arguments to find a SubMenu
     * @example
     * // Get one SubMenu
     * const subMenu = await prisma.subMenu.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends SubMenuFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, SubMenuFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__SubMenuClient<$Result.GetResult<Prisma.$SubMenuPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first SubMenu that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SubMenuFindFirstArgs} args - Arguments to find a SubMenu
     * @example
     * // Get one SubMenu
     * const subMenu = await prisma.subMenu.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends SubMenuFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, SubMenuFindFirstArgs<ExtArgs>>
    ): Prisma__SubMenuClient<$Result.GetResult<Prisma.$SubMenuPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first SubMenu that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SubMenuFindFirstOrThrowArgs} args - Arguments to find a SubMenu
     * @example
     * // Get one SubMenu
     * const subMenu = await prisma.subMenu.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends SubMenuFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, SubMenuFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__SubMenuClient<$Result.GetResult<Prisma.$SubMenuPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more SubMenus that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SubMenuFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all SubMenus
     * const subMenus = await prisma.subMenu.findMany()
     * 
     * // Get first 10 SubMenus
     * const subMenus = await prisma.subMenu.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const subMenuWithIdOnly = await prisma.subMenu.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends SubMenuFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, SubMenuFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SubMenuPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a SubMenu.
     * @param {SubMenuCreateArgs} args - Arguments to create a SubMenu.
     * @example
     * // Create one SubMenu
     * const SubMenu = await prisma.subMenu.create({
     *   data: {
     *     // ... data to create a SubMenu
     *   }
     * })
     * 
    **/
    create<T extends SubMenuCreateArgs<ExtArgs>>(
      args: SelectSubset<T, SubMenuCreateArgs<ExtArgs>>
    ): Prisma__SubMenuClient<$Result.GetResult<Prisma.$SubMenuPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many SubMenus.
     * @param {SubMenuCreateManyArgs} args - Arguments to create many SubMenus.
     * @example
     * // Create many SubMenus
     * const subMenu = await prisma.subMenu.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
    **/
    createMany<T extends SubMenuCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, SubMenuCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a SubMenu.
     * @param {SubMenuDeleteArgs} args - Arguments to delete one SubMenu.
     * @example
     * // Delete one SubMenu
     * const SubMenu = await prisma.subMenu.delete({
     *   where: {
     *     // ... filter to delete one SubMenu
     *   }
     * })
     * 
    **/
    delete<T extends SubMenuDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, SubMenuDeleteArgs<ExtArgs>>
    ): Prisma__SubMenuClient<$Result.GetResult<Prisma.$SubMenuPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one SubMenu.
     * @param {SubMenuUpdateArgs} args - Arguments to update one SubMenu.
     * @example
     * // Update one SubMenu
     * const subMenu = await prisma.subMenu.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends SubMenuUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, SubMenuUpdateArgs<ExtArgs>>
    ): Prisma__SubMenuClient<$Result.GetResult<Prisma.$SubMenuPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more SubMenus.
     * @param {SubMenuDeleteManyArgs} args - Arguments to filter SubMenus to delete.
     * @example
     * // Delete a few SubMenus
     * const { count } = await prisma.subMenu.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends SubMenuDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, SubMenuDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more SubMenus.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SubMenuUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many SubMenus
     * const subMenu = await prisma.subMenu.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends SubMenuUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, SubMenuUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one SubMenu.
     * @param {SubMenuUpsertArgs} args - Arguments to update or create a SubMenu.
     * @example
     * // Update or create a SubMenu
     * const subMenu = await prisma.subMenu.upsert({
     *   create: {
     *     // ... data to create a SubMenu
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the SubMenu we want to update
     *   }
     * })
    **/
    upsert<T extends SubMenuUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, SubMenuUpsertArgs<ExtArgs>>
    ): Prisma__SubMenuClient<$Result.GetResult<Prisma.$SubMenuPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of SubMenus.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SubMenuCountArgs} args - Arguments to filter SubMenus to count.
     * @example
     * // Count the number of SubMenus
     * const count = await prisma.subMenu.count({
     *   where: {
     *     // ... the filter for the SubMenus we want to count
     *   }
     * })
    **/
    count<T extends SubMenuCountArgs>(
      args?: Subset<T, SubMenuCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], SubMenuCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a SubMenu.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SubMenuAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends SubMenuAggregateArgs>(args: Subset<T, SubMenuAggregateArgs>): Prisma.PrismaPromise<GetSubMenuAggregateType<T>>

    /**
     * Group by SubMenu.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SubMenuGroupByArgs} args - Group by arguments.
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
      T extends SubMenuGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: SubMenuGroupByArgs['orderBy'] }
        : { orderBy?: SubMenuGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, SubMenuGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetSubMenuGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the SubMenu model
   */
  readonly fields: SubMenuFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for SubMenu.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__SubMenuClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    masterMenu<T extends MasterMenuDefaultArgs<ExtArgs> = {}>(args?: Subset<T, MasterMenuDefaultArgs<ExtArgs>>): Prisma__MasterMenuClient<$Result.GetResult<Prisma.$MasterMenuPayload<ExtArgs>, T, 'findUniqueOrThrow'> | Null, Null, ExtArgs>;

    createdByUser<T extends SubMenu$createdByUserArgs<ExtArgs> = {}>(args?: Subset<T, SubMenu$createdByUserArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, 'findUniqueOrThrow'> | null, null, ExtArgs>;

    updatedByUser<T extends SubMenu$updatedByUserArgs<ExtArgs> = {}>(args?: Subset<T, SubMenu$updatedByUserArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, 'findUniqueOrThrow'> | null, null, ExtArgs>;

    deletedByUser<T extends SubMenu$deletedByUserArgs<ExtArgs> = {}>(args?: Subset<T, SubMenu$deletedByUserArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, 'findUniqueOrThrow'> | null, null, ExtArgs>;

    RoleMenuAccess<T extends SubMenu$RoleMenuAccessArgs<ExtArgs> = {}>(args?: Subset<T, SubMenu$RoleMenuAccessArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RoleMenuAccessPayload<ExtArgs>, T, 'findMany'> | Null>;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the SubMenu model
   */ 
  interface SubMenuFieldRefs {
    readonly id: FieldRef<"SubMenu", 'Int'>
    readonly uid: FieldRef<"SubMenu", 'String'>
    readonly masterMenuId: FieldRef<"SubMenu", 'Int'>
    readonly name: FieldRef<"SubMenu", 'String'>
    readonly description: FieldRef<"SubMenu", 'String'>
    readonly url: FieldRef<"SubMenu", 'String'>
    readonly icon: FieldRef<"SubMenu", 'String'>
    readonly order: FieldRef<"SubMenu", 'Int'>
    readonly status: FieldRef<"SubMenu", 'Int'>
    readonly createdBy: FieldRef<"SubMenu", 'Int'>
    readonly createdAt: FieldRef<"SubMenu", 'DateTime'>
    readonly updatedBy: FieldRef<"SubMenu", 'Int'>
    readonly updatedAt: FieldRef<"SubMenu", 'DateTime'>
    readonly deletedBy: FieldRef<"SubMenu", 'Int'>
    readonly deletedAt: FieldRef<"SubMenu", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * SubMenu findUnique
   */
  export type SubMenuFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SubMenu
     */
    select?: SubMenuSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubMenuInclude<ExtArgs> | null
    /**
     * Filter, which SubMenu to fetch.
     */
    where: SubMenuWhereUniqueInput
  }

  /**
   * SubMenu findUniqueOrThrow
   */
  export type SubMenuFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SubMenu
     */
    select?: SubMenuSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubMenuInclude<ExtArgs> | null
    /**
     * Filter, which SubMenu to fetch.
     */
    where: SubMenuWhereUniqueInput
  }

  /**
   * SubMenu findFirst
   */
  export type SubMenuFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SubMenu
     */
    select?: SubMenuSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubMenuInclude<ExtArgs> | null
    /**
     * Filter, which SubMenu to fetch.
     */
    where?: SubMenuWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SubMenus to fetch.
     */
    orderBy?: SubMenuOrderByWithRelationInput | SubMenuOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for SubMenus.
     */
    cursor?: SubMenuWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SubMenus from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SubMenus.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of SubMenus.
     */
    distinct?: SubMenuScalarFieldEnum | SubMenuScalarFieldEnum[]
  }

  /**
   * SubMenu findFirstOrThrow
   */
  export type SubMenuFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SubMenu
     */
    select?: SubMenuSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubMenuInclude<ExtArgs> | null
    /**
     * Filter, which SubMenu to fetch.
     */
    where?: SubMenuWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SubMenus to fetch.
     */
    orderBy?: SubMenuOrderByWithRelationInput | SubMenuOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for SubMenus.
     */
    cursor?: SubMenuWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SubMenus from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SubMenus.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of SubMenus.
     */
    distinct?: SubMenuScalarFieldEnum | SubMenuScalarFieldEnum[]
  }

  /**
   * SubMenu findMany
   */
  export type SubMenuFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SubMenu
     */
    select?: SubMenuSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubMenuInclude<ExtArgs> | null
    /**
     * Filter, which SubMenus to fetch.
     */
    where?: SubMenuWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SubMenus to fetch.
     */
    orderBy?: SubMenuOrderByWithRelationInput | SubMenuOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing SubMenus.
     */
    cursor?: SubMenuWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SubMenus from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SubMenus.
     */
    skip?: number
    distinct?: SubMenuScalarFieldEnum | SubMenuScalarFieldEnum[]
  }

  /**
   * SubMenu create
   */
  export type SubMenuCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SubMenu
     */
    select?: SubMenuSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubMenuInclude<ExtArgs> | null
    /**
     * The data needed to create a SubMenu.
     */
    data: XOR<SubMenuCreateInput, SubMenuUncheckedCreateInput>
  }

  /**
   * SubMenu createMany
   */
  export type SubMenuCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many SubMenus.
     */
    data: SubMenuCreateManyInput | SubMenuCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * SubMenu update
   */
  export type SubMenuUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SubMenu
     */
    select?: SubMenuSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubMenuInclude<ExtArgs> | null
    /**
     * The data needed to update a SubMenu.
     */
    data: XOR<SubMenuUpdateInput, SubMenuUncheckedUpdateInput>
    /**
     * Choose, which SubMenu to update.
     */
    where: SubMenuWhereUniqueInput
  }

  /**
   * SubMenu updateMany
   */
  export type SubMenuUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update SubMenus.
     */
    data: XOR<SubMenuUpdateManyMutationInput, SubMenuUncheckedUpdateManyInput>
    /**
     * Filter which SubMenus to update
     */
    where?: SubMenuWhereInput
  }

  /**
   * SubMenu upsert
   */
  export type SubMenuUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SubMenu
     */
    select?: SubMenuSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubMenuInclude<ExtArgs> | null
    /**
     * The filter to search for the SubMenu to update in case it exists.
     */
    where: SubMenuWhereUniqueInput
    /**
     * In case the SubMenu found by the `where` argument doesn't exist, create a new SubMenu with this data.
     */
    create: XOR<SubMenuCreateInput, SubMenuUncheckedCreateInput>
    /**
     * In case the SubMenu was found with the provided `where` argument, update it with this data.
     */
    update: XOR<SubMenuUpdateInput, SubMenuUncheckedUpdateInput>
  }

  /**
   * SubMenu delete
   */
  export type SubMenuDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SubMenu
     */
    select?: SubMenuSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubMenuInclude<ExtArgs> | null
    /**
     * Filter which SubMenu to delete.
     */
    where: SubMenuWhereUniqueInput
  }

  /**
   * SubMenu deleteMany
   */
  export type SubMenuDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which SubMenus to delete
     */
    where?: SubMenuWhereInput
  }

  /**
   * SubMenu.createdByUser
   */
  export type SubMenu$createdByUserArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    where?: UserWhereInput
  }

  /**
   * SubMenu.updatedByUser
   */
  export type SubMenu$updatedByUserArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    where?: UserWhereInput
  }

  /**
   * SubMenu.deletedByUser
   */
  export type SubMenu$deletedByUserArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    where?: UserWhereInput
  }

  /**
   * SubMenu.RoleMenuAccess
   */
  export type SubMenu$RoleMenuAccessArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RoleMenuAccess
     */
    select?: RoleMenuAccessSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoleMenuAccessInclude<ExtArgs> | null
    where?: RoleMenuAccessWhereInput
    orderBy?: RoleMenuAccessOrderByWithRelationInput | RoleMenuAccessOrderByWithRelationInput[]
    cursor?: RoleMenuAccessWhereUniqueInput
    take?: number
    skip?: number
    distinct?: RoleMenuAccessScalarFieldEnum | RoleMenuAccessScalarFieldEnum[]
  }

  /**
   * SubMenu without action
   */
  export type SubMenuDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SubMenu
     */
    select?: SubMenuSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubMenuInclude<ExtArgs> | null
  }


  /**
   * Model RoleMenuAccess
   */

  export type AggregateRoleMenuAccess = {
    _count: RoleMenuAccessCountAggregateOutputType | null
    _avg: RoleMenuAccessAvgAggregateOutputType | null
    _sum: RoleMenuAccessSumAggregateOutputType | null
    _min: RoleMenuAccessMinAggregateOutputType | null
    _max: RoleMenuAccessMaxAggregateOutputType | null
  }

  export type RoleMenuAccessAvgAggregateOutputType = {
    id: number | null
    roleId: number | null
    submenuId: number | null
    status: number | null
    createdBy: number | null
    updatedBy: number | null
    deletedBy: number | null
  }

  export type RoleMenuAccessSumAggregateOutputType = {
    id: number | null
    roleId: number | null
    submenuId: number | null
    status: number | null
    createdBy: number | null
    updatedBy: number | null
    deletedBy: number | null
  }

  export type RoleMenuAccessMinAggregateOutputType = {
    id: number | null
    uid: string | null
    name: string | null
    description: string | null
    roleId: number | null
    submenuId: number | null
    status: number | null
    createdBy: number | null
    createdAt: Date | null
    updatedBy: number | null
    updatedAt: Date | null
    deletedBy: number | null
    deletedAt: Date | null
  }

  export type RoleMenuAccessMaxAggregateOutputType = {
    id: number | null
    uid: string | null
    name: string | null
    description: string | null
    roleId: number | null
    submenuId: number | null
    status: number | null
    createdBy: number | null
    createdAt: Date | null
    updatedBy: number | null
    updatedAt: Date | null
    deletedBy: number | null
    deletedAt: Date | null
  }

  export type RoleMenuAccessCountAggregateOutputType = {
    id: number
    uid: number
    name: number
    description: number
    roleId: number
    submenuId: number
    status: number
    createdBy: number
    createdAt: number
    updatedBy: number
    updatedAt: number
    deletedBy: number
    deletedAt: number
    _all: number
  }


  export type RoleMenuAccessAvgAggregateInputType = {
    id?: true
    roleId?: true
    submenuId?: true
    status?: true
    createdBy?: true
    updatedBy?: true
    deletedBy?: true
  }

  export type RoleMenuAccessSumAggregateInputType = {
    id?: true
    roleId?: true
    submenuId?: true
    status?: true
    createdBy?: true
    updatedBy?: true
    deletedBy?: true
  }

  export type RoleMenuAccessMinAggregateInputType = {
    id?: true
    uid?: true
    name?: true
    description?: true
    roleId?: true
    submenuId?: true
    status?: true
    createdBy?: true
    createdAt?: true
    updatedBy?: true
    updatedAt?: true
    deletedBy?: true
    deletedAt?: true
  }

  export type RoleMenuAccessMaxAggregateInputType = {
    id?: true
    uid?: true
    name?: true
    description?: true
    roleId?: true
    submenuId?: true
    status?: true
    createdBy?: true
    createdAt?: true
    updatedBy?: true
    updatedAt?: true
    deletedBy?: true
    deletedAt?: true
  }

  export type RoleMenuAccessCountAggregateInputType = {
    id?: true
    uid?: true
    name?: true
    description?: true
    roleId?: true
    submenuId?: true
    status?: true
    createdBy?: true
    createdAt?: true
    updatedBy?: true
    updatedAt?: true
    deletedBy?: true
    deletedAt?: true
    _all?: true
  }

  export type RoleMenuAccessAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which RoleMenuAccess to aggregate.
     */
    where?: RoleMenuAccessWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of RoleMenuAccesses to fetch.
     */
    orderBy?: RoleMenuAccessOrderByWithRelationInput | RoleMenuAccessOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: RoleMenuAccessWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` RoleMenuAccesses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` RoleMenuAccesses.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned RoleMenuAccesses
    **/
    _count?: true | RoleMenuAccessCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: RoleMenuAccessAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: RoleMenuAccessSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: RoleMenuAccessMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: RoleMenuAccessMaxAggregateInputType
  }

  export type GetRoleMenuAccessAggregateType<T extends RoleMenuAccessAggregateArgs> = {
        [P in keyof T & keyof AggregateRoleMenuAccess]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateRoleMenuAccess[P]>
      : GetScalarType<T[P], AggregateRoleMenuAccess[P]>
  }




  export type RoleMenuAccessGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: RoleMenuAccessWhereInput
    orderBy?: RoleMenuAccessOrderByWithAggregationInput | RoleMenuAccessOrderByWithAggregationInput[]
    by: RoleMenuAccessScalarFieldEnum[] | RoleMenuAccessScalarFieldEnum
    having?: RoleMenuAccessScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: RoleMenuAccessCountAggregateInputType | true
    _avg?: RoleMenuAccessAvgAggregateInputType
    _sum?: RoleMenuAccessSumAggregateInputType
    _min?: RoleMenuAccessMinAggregateInputType
    _max?: RoleMenuAccessMaxAggregateInputType
  }

  export type RoleMenuAccessGroupByOutputType = {
    id: number
    uid: string
    name: string
    description: string | null
    roleId: number
    submenuId: number
    status: number
    createdBy: number | null
    createdAt: Date
    updatedBy: number | null
    updatedAt: Date | null
    deletedBy: number | null
    deletedAt: Date | null
    _count: RoleMenuAccessCountAggregateOutputType | null
    _avg: RoleMenuAccessAvgAggregateOutputType | null
    _sum: RoleMenuAccessSumAggregateOutputType | null
    _min: RoleMenuAccessMinAggregateOutputType | null
    _max: RoleMenuAccessMaxAggregateOutputType | null
  }

  type GetRoleMenuAccessGroupByPayload<T extends RoleMenuAccessGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<RoleMenuAccessGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof RoleMenuAccessGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], RoleMenuAccessGroupByOutputType[P]>
            : GetScalarType<T[P], RoleMenuAccessGroupByOutputType[P]>
        }
      >
    >


  export type RoleMenuAccessSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    uid?: boolean
    name?: boolean
    description?: boolean
    roleId?: boolean
    submenuId?: boolean
    status?: boolean
    createdBy?: boolean
    createdAt?: boolean
    updatedBy?: boolean
    updatedAt?: boolean
    deletedBy?: boolean
    deletedAt?: boolean
    role?: boolean | RoleDefaultArgs<ExtArgs>
    subMenu?: boolean | SubMenuDefaultArgs<ExtArgs>
    createdByUser?: boolean | RoleMenuAccess$createdByUserArgs<ExtArgs>
    updatedByUser?: boolean | RoleMenuAccess$updatedByUserArgs<ExtArgs>
    deletedByUser?: boolean | RoleMenuAccess$deletedByUserArgs<ExtArgs>
  }, ExtArgs["result"]["roleMenuAccess"]>

  export type RoleMenuAccessSelectScalar = {
    id?: boolean
    uid?: boolean
    name?: boolean
    description?: boolean
    roleId?: boolean
    submenuId?: boolean
    status?: boolean
    createdBy?: boolean
    createdAt?: boolean
    updatedBy?: boolean
    updatedAt?: boolean
    deletedBy?: boolean
    deletedAt?: boolean
  }


  export type RoleMenuAccessInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    role?: boolean | RoleDefaultArgs<ExtArgs>
    subMenu?: boolean | SubMenuDefaultArgs<ExtArgs>
    createdByUser?: boolean | RoleMenuAccess$createdByUserArgs<ExtArgs>
    updatedByUser?: boolean | RoleMenuAccess$updatedByUserArgs<ExtArgs>
    deletedByUser?: boolean | RoleMenuAccess$deletedByUserArgs<ExtArgs>
  }


  export type $RoleMenuAccessPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "RoleMenuAccess"
    objects: {
      role: Prisma.$RolePayload<ExtArgs>
      subMenu: Prisma.$SubMenuPayload<ExtArgs>
      createdByUser: Prisma.$UserPayload<ExtArgs> | null
      updatedByUser: Prisma.$UserPayload<ExtArgs> | null
      deletedByUser: Prisma.$UserPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      uid: string
      name: string
      description: string | null
      roleId: number
      submenuId: number
      status: number
      createdBy: number | null
      createdAt: Date
      updatedBy: number | null
      updatedAt: Date | null
      deletedBy: number | null
      deletedAt: Date | null
    }, ExtArgs["result"]["roleMenuAccess"]>
    composites: {}
  }


  type RoleMenuAccessGetPayload<S extends boolean | null | undefined | RoleMenuAccessDefaultArgs> = $Result.GetResult<Prisma.$RoleMenuAccessPayload, S>

  type RoleMenuAccessCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<RoleMenuAccessFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: RoleMenuAccessCountAggregateInputType | true
    }

  export interface RoleMenuAccessDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['RoleMenuAccess'], meta: { name: 'RoleMenuAccess' } }
    /**
     * Find zero or one RoleMenuAccess that matches the filter.
     * @param {RoleMenuAccessFindUniqueArgs} args - Arguments to find a RoleMenuAccess
     * @example
     * // Get one RoleMenuAccess
     * const roleMenuAccess = await prisma.roleMenuAccess.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends RoleMenuAccessFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, RoleMenuAccessFindUniqueArgs<ExtArgs>>
    ): Prisma__RoleMenuAccessClient<$Result.GetResult<Prisma.$RoleMenuAccessPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one RoleMenuAccess that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {RoleMenuAccessFindUniqueOrThrowArgs} args - Arguments to find a RoleMenuAccess
     * @example
     * // Get one RoleMenuAccess
     * const roleMenuAccess = await prisma.roleMenuAccess.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends RoleMenuAccessFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, RoleMenuAccessFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__RoleMenuAccessClient<$Result.GetResult<Prisma.$RoleMenuAccessPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first RoleMenuAccess that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RoleMenuAccessFindFirstArgs} args - Arguments to find a RoleMenuAccess
     * @example
     * // Get one RoleMenuAccess
     * const roleMenuAccess = await prisma.roleMenuAccess.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends RoleMenuAccessFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, RoleMenuAccessFindFirstArgs<ExtArgs>>
    ): Prisma__RoleMenuAccessClient<$Result.GetResult<Prisma.$RoleMenuAccessPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first RoleMenuAccess that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RoleMenuAccessFindFirstOrThrowArgs} args - Arguments to find a RoleMenuAccess
     * @example
     * // Get one RoleMenuAccess
     * const roleMenuAccess = await prisma.roleMenuAccess.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends RoleMenuAccessFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, RoleMenuAccessFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__RoleMenuAccessClient<$Result.GetResult<Prisma.$RoleMenuAccessPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more RoleMenuAccesses that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RoleMenuAccessFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all RoleMenuAccesses
     * const roleMenuAccesses = await prisma.roleMenuAccess.findMany()
     * 
     * // Get first 10 RoleMenuAccesses
     * const roleMenuAccesses = await prisma.roleMenuAccess.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const roleMenuAccessWithIdOnly = await prisma.roleMenuAccess.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends RoleMenuAccessFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, RoleMenuAccessFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RoleMenuAccessPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a RoleMenuAccess.
     * @param {RoleMenuAccessCreateArgs} args - Arguments to create a RoleMenuAccess.
     * @example
     * // Create one RoleMenuAccess
     * const RoleMenuAccess = await prisma.roleMenuAccess.create({
     *   data: {
     *     // ... data to create a RoleMenuAccess
     *   }
     * })
     * 
    **/
    create<T extends RoleMenuAccessCreateArgs<ExtArgs>>(
      args: SelectSubset<T, RoleMenuAccessCreateArgs<ExtArgs>>
    ): Prisma__RoleMenuAccessClient<$Result.GetResult<Prisma.$RoleMenuAccessPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many RoleMenuAccesses.
     * @param {RoleMenuAccessCreateManyArgs} args - Arguments to create many RoleMenuAccesses.
     * @example
     * // Create many RoleMenuAccesses
     * const roleMenuAccess = await prisma.roleMenuAccess.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
    **/
    createMany<T extends RoleMenuAccessCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, RoleMenuAccessCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a RoleMenuAccess.
     * @param {RoleMenuAccessDeleteArgs} args - Arguments to delete one RoleMenuAccess.
     * @example
     * // Delete one RoleMenuAccess
     * const RoleMenuAccess = await prisma.roleMenuAccess.delete({
     *   where: {
     *     // ... filter to delete one RoleMenuAccess
     *   }
     * })
     * 
    **/
    delete<T extends RoleMenuAccessDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, RoleMenuAccessDeleteArgs<ExtArgs>>
    ): Prisma__RoleMenuAccessClient<$Result.GetResult<Prisma.$RoleMenuAccessPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one RoleMenuAccess.
     * @param {RoleMenuAccessUpdateArgs} args - Arguments to update one RoleMenuAccess.
     * @example
     * // Update one RoleMenuAccess
     * const roleMenuAccess = await prisma.roleMenuAccess.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends RoleMenuAccessUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, RoleMenuAccessUpdateArgs<ExtArgs>>
    ): Prisma__RoleMenuAccessClient<$Result.GetResult<Prisma.$RoleMenuAccessPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more RoleMenuAccesses.
     * @param {RoleMenuAccessDeleteManyArgs} args - Arguments to filter RoleMenuAccesses to delete.
     * @example
     * // Delete a few RoleMenuAccesses
     * const { count } = await prisma.roleMenuAccess.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends RoleMenuAccessDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, RoleMenuAccessDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more RoleMenuAccesses.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RoleMenuAccessUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many RoleMenuAccesses
     * const roleMenuAccess = await prisma.roleMenuAccess.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends RoleMenuAccessUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, RoleMenuAccessUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one RoleMenuAccess.
     * @param {RoleMenuAccessUpsertArgs} args - Arguments to update or create a RoleMenuAccess.
     * @example
     * // Update or create a RoleMenuAccess
     * const roleMenuAccess = await prisma.roleMenuAccess.upsert({
     *   create: {
     *     // ... data to create a RoleMenuAccess
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the RoleMenuAccess we want to update
     *   }
     * })
    **/
    upsert<T extends RoleMenuAccessUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, RoleMenuAccessUpsertArgs<ExtArgs>>
    ): Prisma__RoleMenuAccessClient<$Result.GetResult<Prisma.$RoleMenuAccessPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of RoleMenuAccesses.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RoleMenuAccessCountArgs} args - Arguments to filter RoleMenuAccesses to count.
     * @example
     * // Count the number of RoleMenuAccesses
     * const count = await prisma.roleMenuAccess.count({
     *   where: {
     *     // ... the filter for the RoleMenuAccesses we want to count
     *   }
     * })
    **/
    count<T extends RoleMenuAccessCountArgs>(
      args?: Subset<T, RoleMenuAccessCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], RoleMenuAccessCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a RoleMenuAccess.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RoleMenuAccessAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends RoleMenuAccessAggregateArgs>(args: Subset<T, RoleMenuAccessAggregateArgs>): Prisma.PrismaPromise<GetRoleMenuAccessAggregateType<T>>

    /**
     * Group by RoleMenuAccess.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RoleMenuAccessGroupByArgs} args - Group by arguments.
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
      T extends RoleMenuAccessGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: RoleMenuAccessGroupByArgs['orderBy'] }
        : { orderBy?: RoleMenuAccessGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, RoleMenuAccessGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetRoleMenuAccessGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the RoleMenuAccess model
   */
  readonly fields: RoleMenuAccessFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for RoleMenuAccess.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__RoleMenuAccessClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    role<T extends RoleDefaultArgs<ExtArgs> = {}>(args?: Subset<T, RoleDefaultArgs<ExtArgs>>): Prisma__RoleClient<$Result.GetResult<Prisma.$RolePayload<ExtArgs>, T, 'findUniqueOrThrow'> | Null, Null, ExtArgs>;

    subMenu<T extends SubMenuDefaultArgs<ExtArgs> = {}>(args?: Subset<T, SubMenuDefaultArgs<ExtArgs>>): Prisma__SubMenuClient<$Result.GetResult<Prisma.$SubMenuPayload<ExtArgs>, T, 'findUniqueOrThrow'> | Null, Null, ExtArgs>;

    createdByUser<T extends RoleMenuAccess$createdByUserArgs<ExtArgs> = {}>(args?: Subset<T, RoleMenuAccess$createdByUserArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, 'findUniqueOrThrow'> | null, null, ExtArgs>;

    updatedByUser<T extends RoleMenuAccess$updatedByUserArgs<ExtArgs> = {}>(args?: Subset<T, RoleMenuAccess$updatedByUserArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, 'findUniqueOrThrow'> | null, null, ExtArgs>;

    deletedByUser<T extends RoleMenuAccess$deletedByUserArgs<ExtArgs> = {}>(args?: Subset<T, RoleMenuAccess$deletedByUserArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, 'findUniqueOrThrow'> | null, null, ExtArgs>;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the RoleMenuAccess model
   */ 
  interface RoleMenuAccessFieldRefs {
    readonly id: FieldRef<"RoleMenuAccess", 'Int'>
    readonly uid: FieldRef<"RoleMenuAccess", 'String'>
    readonly name: FieldRef<"RoleMenuAccess", 'String'>
    readonly description: FieldRef<"RoleMenuAccess", 'String'>
    readonly roleId: FieldRef<"RoleMenuAccess", 'Int'>
    readonly submenuId: FieldRef<"RoleMenuAccess", 'Int'>
    readonly status: FieldRef<"RoleMenuAccess", 'Int'>
    readonly createdBy: FieldRef<"RoleMenuAccess", 'Int'>
    readonly createdAt: FieldRef<"RoleMenuAccess", 'DateTime'>
    readonly updatedBy: FieldRef<"RoleMenuAccess", 'Int'>
    readonly updatedAt: FieldRef<"RoleMenuAccess", 'DateTime'>
    readonly deletedBy: FieldRef<"RoleMenuAccess", 'Int'>
    readonly deletedAt: FieldRef<"RoleMenuAccess", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * RoleMenuAccess findUnique
   */
  export type RoleMenuAccessFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RoleMenuAccess
     */
    select?: RoleMenuAccessSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoleMenuAccessInclude<ExtArgs> | null
    /**
     * Filter, which RoleMenuAccess to fetch.
     */
    where: RoleMenuAccessWhereUniqueInput
  }

  /**
   * RoleMenuAccess findUniqueOrThrow
   */
  export type RoleMenuAccessFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RoleMenuAccess
     */
    select?: RoleMenuAccessSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoleMenuAccessInclude<ExtArgs> | null
    /**
     * Filter, which RoleMenuAccess to fetch.
     */
    where: RoleMenuAccessWhereUniqueInput
  }

  /**
   * RoleMenuAccess findFirst
   */
  export type RoleMenuAccessFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RoleMenuAccess
     */
    select?: RoleMenuAccessSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoleMenuAccessInclude<ExtArgs> | null
    /**
     * Filter, which RoleMenuAccess to fetch.
     */
    where?: RoleMenuAccessWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of RoleMenuAccesses to fetch.
     */
    orderBy?: RoleMenuAccessOrderByWithRelationInput | RoleMenuAccessOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for RoleMenuAccesses.
     */
    cursor?: RoleMenuAccessWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` RoleMenuAccesses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` RoleMenuAccesses.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of RoleMenuAccesses.
     */
    distinct?: RoleMenuAccessScalarFieldEnum | RoleMenuAccessScalarFieldEnum[]
  }

  /**
   * RoleMenuAccess findFirstOrThrow
   */
  export type RoleMenuAccessFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RoleMenuAccess
     */
    select?: RoleMenuAccessSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoleMenuAccessInclude<ExtArgs> | null
    /**
     * Filter, which RoleMenuAccess to fetch.
     */
    where?: RoleMenuAccessWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of RoleMenuAccesses to fetch.
     */
    orderBy?: RoleMenuAccessOrderByWithRelationInput | RoleMenuAccessOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for RoleMenuAccesses.
     */
    cursor?: RoleMenuAccessWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` RoleMenuAccesses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` RoleMenuAccesses.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of RoleMenuAccesses.
     */
    distinct?: RoleMenuAccessScalarFieldEnum | RoleMenuAccessScalarFieldEnum[]
  }

  /**
   * RoleMenuAccess findMany
   */
  export type RoleMenuAccessFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RoleMenuAccess
     */
    select?: RoleMenuAccessSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoleMenuAccessInclude<ExtArgs> | null
    /**
     * Filter, which RoleMenuAccesses to fetch.
     */
    where?: RoleMenuAccessWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of RoleMenuAccesses to fetch.
     */
    orderBy?: RoleMenuAccessOrderByWithRelationInput | RoleMenuAccessOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing RoleMenuAccesses.
     */
    cursor?: RoleMenuAccessWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` RoleMenuAccesses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` RoleMenuAccesses.
     */
    skip?: number
    distinct?: RoleMenuAccessScalarFieldEnum | RoleMenuAccessScalarFieldEnum[]
  }

  /**
   * RoleMenuAccess create
   */
  export type RoleMenuAccessCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RoleMenuAccess
     */
    select?: RoleMenuAccessSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoleMenuAccessInclude<ExtArgs> | null
    /**
     * The data needed to create a RoleMenuAccess.
     */
    data: XOR<RoleMenuAccessCreateInput, RoleMenuAccessUncheckedCreateInput>
  }

  /**
   * RoleMenuAccess createMany
   */
  export type RoleMenuAccessCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many RoleMenuAccesses.
     */
    data: RoleMenuAccessCreateManyInput | RoleMenuAccessCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * RoleMenuAccess update
   */
  export type RoleMenuAccessUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RoleMenuAccess
     */
    select?: RoleMenuAccessSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoleMenuAccessInclude<ExtArgs> | null
    /**
     * The data needed to update a RoleMenuAccess.
     */
    data: XOR<RoleMenuAccessUpdateInput, RoleMenuAccessUncheckedUpdateInput>
    /**
     * Choose, which RoleMenuAccess to update.
     */
    where: RoleMenuAccessWhereUniqueInput
  }

  /**
   * RoleMenuAccess updateMany
   */
  export type RoleMenuAccessUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update RoleMenuAccesses.
     */
    data: XOR<RoleMenuAccessUpdateManyMutationInput, RoleMenuAccessUncheckedUpdateManyInput>
    /**
     * Filter which RoleMenuAccesses to update
     */
    where?: RoleMenuAccessWhereInput
  }

  /**
   * RoleMenuAccess upsert
   */
  export type RoleMenuAccessUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RoleMenuAccess
     */
    select?: RoleMenuAccessSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoleMenuAccessInclude<ExtArgs> | null
    /**
     * The filter to search for the RoleMenuAccess to update in case it exists.
     */
    where: RoleMenuAccessWhereUniqueInput
    /**
     * In case the RoleMenuAccess found by the `where` argument doesn't exist, create a new RoleMenuAccess with this data.
     */
    create: XOR<RoleMenuAccessCreateInput, RoleMenuAccessUncheckedCreateInput>
    /**
     * In case the RoleMenuAccess was found with the provided `where` argument, update it with this data.
     */
    update: XOR<RoleMenuAccessUpdateInput, RoleMenuAccessUncheckedUpdateInput>
  }

  /**
   * RoleMenuAccess delete
   */
  export type RoleMenuAccessDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RoleMenuAccess
     */
    select?: RoleMenuAccessSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoleMenuAccessInclude<ExtArgs> | null
    /**
     * Filter which RoleMenuAccess to delete.
     */
    where: RoleMenuAccessWhereUniqueInput
  }

  /**
   * RoleMenuAccess deleteMany
   */
  export type RoleMenuAccessDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which RoleMenuAccesses to delete
     */
    where?: RoleMenuAccessWhereInput
  }

  /**
   * RoleMenuAccess.createdByUser
   */
  export type RoleMenuAccess$createdByUserArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    where?: UserWhereInput
  }

  /**
   * RoleMenuAccess.updatedByUser
   */
  export type RoleMenuAccess$updatedByUserArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    where?: UserWhereInput
  }

  /**
   * RoleMenuAccess.deletedByUser
   */
  export type RoleMenuAccess$deletedByUserArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    where?: UserWhereInput
  }

  /**
   * RoleMenuAccess without action
   */
  export type RoleMenuAccessDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RoleMenuAccess
     */
    select?: RoleMenuAccessSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoleMenuAccessInclude<ExtArgs> | null
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


  export const UserScalarFieldEnum: {
    id: 'id',
    uid: 'uid',
    roleId: 'roleId',
    username: 'username',
    email: 'email',
    password: 'password',
    firstName: 'firstName',
    lastName: 'lastName',
    token: 'token',
    refreshToken: 'refreshToken',
    status: 'status',
    latestLoginAt: 'latestLoginAt',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    deletedAt: 'deletedAt'
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


  export const RoleScalarFieldEnum: {
    id: 'id',
    uid: 'uid',
    name: 'name',
    description: 'description',
    status: 'status',
    createdBy: 'createdBy',
    createdAt: 'createdAt',
    updatedBy: 'updatedBy',
    updatedAt: 'updatedAt',
    deletedBy: 'deletedBy',
    deletedAt: 'deletedAt'
  };

  export type RoleScalarFieldEnum = (typeof RoleScalarFieldEnum)[keyof typeof RoleScalarFieldEnum]


  export const MasterMenuScalarFieldEnum: {
    id: 'id',
    uid: 'uid',
    name: 'name',
    description: 'description',
    url: 'url',
    icon: 'icon',
    order: 'order',
    status: 'status',
    createdBy: 'createdBy',
    createdAt: 'createdAt',
    updatedBy: 'updatedBy',
    updatedAt: 'updatedAt',
    deletedBy: 'deletedBy',
    deletedAt: 'deletedAt'
  };

  export type MasterMenuScalarFieldEnum = (typeof MasterMenuScalarFieldEnum)[keyof typeof MasterMenuScalarFieldEnum]


  export const SubMenuScalarFieldEnum: {
    id: 'id',
    uid: 'uid',
    masterMenuId: 'masterMenuId',
    name: 'name',
    description: 'description',
    url: 'url',
    icon: 'icon',
    order: 'order',
    status: 'status',
    createdBy: 'createdBy',
    createdAt: 'createdAt',
    updatedBy: 'updatedBy',
    updatedAt: 'updatedAt',
    deletedBy: 'deletedBy',
    deletedAt: 'deletedAt'
  };

  export type SubMenuScalarFieldEnum = (typeof SubMenuScalarFieldEnum)[keyof typeof SubMenuScalarFieldEnum]


  export const RoleMenuAccessScalarFieldEnum: {
    id: 'id',
    uid: 'uid',
    name: 'name',
    description: 'description',
    roleId: 'roleId',
    submenuId: 'submenuId',
    status: 'status',
    createdBy: 'createdBy',
    createdAt: 'createdAt',
    updatedBy: 'updatedBy',
    updatedAt: 'updatedAt',
    deletedBy: 'deletedBy',
    deletedAt: 'deletedAt'
  };

  export type RoleMenuAccessScalarFieldEnum = (typeof RoleMenuAccessScalarFieldEnum)[keyof typeof RoleMenuAccessScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  /**
   * Field references 
   */


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    
  /**
   * Deep Input Types
   */


  export type UserWhereInput = {
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    id?: IntFilter<"User"> | number
    uid?: StringFilter<"User"> | string
    roleId?: IntFilter<"User"> | number
    username?: StringFilter<"User"> | string
    email?: StringFilter<"User"> | string
    password?: StringFilter<"User"> | string
    firstName?: StringFilter<"User"> | string
    lastName?: StringNullableFilter<"User"> | string | null
    token?: StringNullableFilter<"User"> | string | null
    refreshToken?: StringNullableFilter<"User"> | string | null
    status?: IntFilter<"User"> | number
    latestLoginAt?: DateTimeNullableFilter<"User"> | Date | string | null
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeNullableFilter<"User"> | Date | string | null
    deletedAt?: DateTimeNullableFilter<"User"> | Date | string | null
    role?: XOR<RoleRelationFilter, RoleWhereInput>
    roles?: RoleListRelationFilter
    createdRoles?: RoleListRelationFilter
    updatedRoles?: RoleListRelationFilter
    deletedRoles?: RoleListRelationFilter
    createdMenus?: MasterMenuListRelationFilter
    updatedMenus?: MasterMenuListRelationFilter
    deletedMenus?: MasterMenuListRelationFilter
    createdSubMenus?: SubMenuListRelationFilter
    updatedSubMenus?: SubMenuListRelationFilter
    deletedSubMenus?: SubMenuListRelationFilter
    createdAccesses?: RoleMenuAccessListRelationFilter
    updatedAccesses?: RoleMenuAccessListRelationFilter
    deletedAccesses?: RoleMenuAccessListRelationFilter
  }

  export type UserOrderByWithRelationInput = {
    id?: SortOrder
    uid?: SortOrder
    roleId?: SortOrder
    username?: SortOrder
    email?: SortOrder
    password?: SortOrder
    firstName?: SortOrder
    lastName?: SortOrderInput | SortOrder
    token?: SortOrderInput | SortOrder
    refreshToken?: SortOrderInput | SortOrder
    status?: SortOrder
    latestLoginAt?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrderInput | SortOrder
    deletedAt?: SortOrderInput | SortOrder
    role?: RoleOrderByWithRelationInput
    roles?: RoleOrderByRelationAggregateInput
    createdRoles?: RoleOrderByRelationAggregateInput
    updatedRoles?: RoleOrderByRelationAggregateInput
    deletedRoles?: RoleOrderByRelationAggregateInput
    createdMenus?: MasterMenuOrderByRelationAggregateInput
    updatedMenus?: MasterMenuOrderByRelationAggregateInput
    deletedMenus?: MasterMenuOrderByRelationAggregateInput
    createdSubMenus?: SubMenuOrderByRelationAggregateInput
    updatedSubMenus?: SubMenuOrderByRelationAggregateInput
    deletedSubMenus?: SubMenuOrderByRelationAggregateInput
    createdAccesses?: RoleMenuAccessOrderByRelationAggregateInput
    updatedAccesses?: RoleMenuAccessOrderByRelationAggregateInput
    deletedAccesses?: RoleMenuAccessOrderByRelationAggregateInput
  }

  export type UserWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    uid?: string
    email?: string
    token?: string
    refreshToken?: string
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    roleId?: IntFilter<"User"> | number
    username?: StringFilter<"User"> | string
    password?: StringFilter<"User"> | string
    firstName?: StringFilter<"User"> | string
    lastName?: StringNullableFilter<"User"> | string | null
    status?: IntFilter<"User"> | number
    latestLoginAt?: DateTimeNullableFilter<"User"> | Date | string | null
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeNullableFilter<"User"> | Date | string | null
    deletedAt?: DateTimeNullableFilter<"User"> | Date | string | null
    role?: XOR<RoleRelationFilter, RoleWhereInput>
    roles?: RoleListRelationFilter
    createdRoles?: RoleListRelationFilter
    updatedRoles?: RoleListRelationFilter
    deletedRoles?: RoleListRelationFilter
    createdMenus?: MasterMenuListRelationFilter
    updatedMenus?: MasterMenuListRelationFilter
    deletedMenus?: MasterMenuListRelationFilter
    createdSubMenus?: SubMenuListRelationFilter
    updatedSubMenus?: SubMenuListRelationFilter
    deletedSubMenus?: SubMenuListRelationFilter
    createdAccesses?: RoleMenuAccessListRelationFilter
    updatedAccesses?: RoleMenuAccessListRelationFilter
    deletedAccesses?: RoleMenuAccessListRelationFilter
  }, "id" | "uid" | "email" | "token" | "refreshToken">

  export type UserOrderByWithAggregationInput = {
    id?: SortOrder
    uid?: SortOrder
    roleId?: SortOrder
    username?: SortOrder
    email?: SortOrder
    password?: SortOrder
    firstName?: SortOrder
    lastName?: SortOrderInput | SortOrder
    token?: SortOrderInput | SortOrder
    refreshToken?: SortOrderInput | SortOrder
    status?: SortOrder
    latestLoginAt?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrderInput | SortOrder
    deletedAt?: SortOrderInput | SortOrder
    _count?: UserCountOrderByAggregateInput
    _avg?: UserAvgOrderByAggregateInput
    _max?: UserMaxOrderByAggregateInput
    _min?: UserMinOrderByAggregateInput
    _sum?: UserSumOrderByAggregateInput
  }

  export type UserScalarWhereWithAggregatesInput = {
    AND?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    OR?: UserScalarWhereWithAggregatesInput[]
    NOT?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"User"> | number
    uid?: StringWithAggregatesFilter<"User"> | string
    roleId?: IntWithAggregatesFilter<"User"> | number
    username?: StringWithAggregatesFilter<"User"> | string
    email?: StringWithAggregatesFilter<"User"> | string
    password?: StringWithAggregatesFilter<"User"> | string
    firstName?: StringWithAggregatesFilter<"User"> | string
    lastName?: StringNullableWithAggregatesFilter<"User"> | string | null
    token?: StringNullableWithAggregatesFilter<"User"> | string | null
    refreshToken?: StringNullableWithAggregatesFilter<"User"> | string | null
    status?: IntWithAggregatesFilter<"User"> | number
    latestLoginAt?: DateTimeNullableWithAggregatesFilter<"User"> | Date | string | null
    createdAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
    updatedAt?: DateTimeNullableWithAggregatesFilter<"User"> | Date | string | null
    deletedAt?: DateTimeNullableWithAggregatesFilter<"User"> | Date | string | null
  }

  export type RoleWhereInput = {
    AND?: RoleWhereInput | RoleWhereInput[]
    OR?: RoleWhereInput[]
    NOT?: RoleWhereInput | RoleWhereInput[]
    id?: IntFilter<"Role"> | number
    uid?: StringFilter<"Role"> | string
    name?: StringFilter<"Role"> | string
    description?: StringNullableFilter<"Role"> | string | null
    status?: IntFilter<"Role"> | number
    createdBy?: IntNullableFilter<"Role"> | number | null
    createdAt?: DateTimeFilter<"Role"> | Date | string
    updatedBy?: IntNullableFilter<"Role"> | number | null
    updatedAt?: DateTimeNullableFilter<"Role"> | Date | string | null
    deletedBy?: IntNullableFilter<"Role"> | number | null
    deletedAt?: DateTimeNullableFilter<"Role"> | Date | string | null
    users?: UserListRelationFilter
    createdByUser?: XOR<UserNullableRelationFilter, UserWhereInput> | null
    updatedByUser?: XOR<UserNullableRelationFilter, UserWhereInput> | null
    deletedByUser?: XOR<UserNullableRelationFilter, UserWhereInput> | null
    User?: UserListRelationFilter
    RoleMenuAccess?: RoleMenuAccessListRelationFilter
  }

  export type RoleOrderByWithRelationInput = {
    id?: SortOrder
    uid?: SortOrder
    name?: SortOrder
    description?: SortOrderInput | SortOrder
    status?: SortOrder
    createdBy?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedBy?: SortOrderInput | SortOrder
    updatedAt?: SortOrderInput | SortOrder
    deletedBy?: SortOrderInput | SortOrder
    deletedAt?: SortOrderInput | SortOrder
    users?: UserOrderByRelationAggregateInput
    createdByUser?: UserOrderByWithRelationInput
    updatedByUser?: UserOrderByWithRelationInput
    deletedByUser?: UserOrderByWithRelationInput
    User?: UserOrderByRelationAggregateInput
    RoleMenuAccess?: RoleMenuAccessOrderByRelationAggregateInput
  }

  export type RoleWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    uid?: string
    AND?: RoleWhereInput | RoleWhereInput[]
    OR?: RoleWhereInput[]
    NOT?: RoleWhereInput | RoleWhereInput[]
    name?: StringFilter<"Role"> | string
    description?: StringNullableFilter<"Role"> | string | null
    status?: IntFilter<"Role"> | number
    createdBy?: IntNullableFilter<"Role"> | number | null
    createdAt?: DateTimeFilter<"Role"> | Date | string
    updatedBy?: IntNullableFilter<"Role"> | number | null
    updatedAt?: DateTimeNullableFilter<"Role"> | Date | string | null
    deletedBy?: IntNullableFilter<"Role"> | number | null
    deletedAt?: DateTimeNullableFilter<"Role"> | Date | string | null
    users?: UserListRelationFilter
    createdByUser?: XOR<UserNullableRelationFilter, UserWhereInput> | null
    updatedByUser?: XOR<UserNullableRelationFilter, UserWhereInput> | null
    deletedByUser?: XOR<UserNullableRelationFilter, UserWhereInput> | null
    User?: UserListRelationFilter
    RoleMenuAccess?: RoleMenuAccessListRelationFilter
  }, "id" | "uid">

  export type RoleOrderByWithAggregationInput = {
    id?: SortOrder
    uid?: SortOrder
    name?: SortOrder
    description?: SortOrderInput | SortOrder
    status?: SortOrder
    createdBy?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedBy?: SortOrderInput | SortOrder
    updatedAt?: SortOrderInput | SortOrder
    deletedBy?: SortOrderInput | SortOrder
    deletedAt?: SortOrderInput | SortOrder
    _count?: RoleCountOrderByAggregateInput
    _avg?: RoleAvgOrderByAggregateInput
    _max?: RoleMaxOrderByAggregateInput
    _min?: RoleMinOrderByAggregateInput
    _sum?: RoleSumOrderByAggregateInput
  }

  export type RoleScalarWhereWithAggregatesInput = {
    AND?: RoleScalarWhereWithAggregatesInput | RoleScalarWhereWithAggregatesInput[]
    OR?: RoleScalarWhereWithAggregatesInput[]
    NOT?: RoleScalarWhereWithAggregatesInput | RoleScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Role"> | number
    uid?: StringWithAggregatesFilter<"Role"> | string
    name?: StringWithAggregatesFilter<"Role"> | string
    description?: StringNullableWithAggregatesFilter<"Role"> | string | null
    status?: IntWithAggregatesFilter<"Role"> | number
    createdBy?: IntNullableWithAggregatesFilter<"Role"> | number | null
    createdAt?: DateTimeWithAggregatesFilter<"Role"> | Date | string
    updatedBy?: IntNullableWithAggregatesFilter<"Role"> | number | null
    updatedAt?: DateTimeNullableWithAggregatesFilter<"Role"> | Date | string | null
    deletedBy?: IntNullableWithAggregatesFilter<"Role"> | number | null
    deletedAt?: DateTimeNullableWithAggregatesFilter<"Role"> | Date | string | null
  }

  export type MasterMenuWhereInput = {
    AND?: MasterMenuWhereInput | MasterMenuWhereInput[]
    OR?: MasterMenuWhereInput[]
    NOT?: MasterMenuWhereInput | MasterMenuWhereInput[]
    id?: IntFilter<"MasterMenu"> | number
    uid?: StringFilter<"MasterMenu"> | string
    name?: StringFilter<"MasterMenu"> | string
    description?: StringNullableFilter<"MasterMenu"> | string | null
    url?: StringNullableFilter<"MasterMenu"> | string | null
    icon?: StringNullableFilter<"MasterMenu"> | string | null
    order?: IntFilter<"MasterMenu"> | number
    status?: IntFilter<"MasterMenu"> | number
    createdBy?: IntNullableFilter<"MasterMenu"> | number | null
    createdAt?: DateTimeFilter<"MasterMenu"> | Date | string
    updatedBy?: IntNullableFilter<"MasterMenu"> | number | null
    updatedAt?: DateTimeNullableFilter<"MasterMenu"> | Date | string | null
    deletedBy?: IntNullableFilter<"MasterMenu"> | number | null
    deletedAt?: DateTimeNullableFilter<"MasterMenu"> | Date | string | null
    subMenus?: SubMenuListRelationFilter
    createdByUser?: XOR<UserNullableRelationFilter, UserWhereInput> | null
    updatedByUser?: XOR<UserNullableRelationFilter, UserWhereInput> | null
    deletedByUser?: XOR<UserNullableRelationFilter, UserWhereInput> | null
  }

  export type MasterMenuOrderByWithRelationInput = {
    id?: SortOrder
    uid?: SortOrder
    name?: SortOrder
    description?: SortOrderInput | SortOrder
    url?: SortOrderInput | SortOrder
    icon?: SortOrderInput | SortOrder
    order?: SortOrder
    status?: SortOrder
    createdBy?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedBy?: SortOrderInput | SortOrder
    updatedAt?: SortOrderInput | SortOrder
    deletedBy?: SortOrderInput | SortOrder
    deletedAt?: SortOrderInput | SortOrder
    subMenus?: SubMenuOrderByRelationAggregateInput
    createdByUser?: UserOrderByWithRelationInput
    updatedByUser?: UserOrderByWithRelationInput
    deletedByUser?: UserOrderByWithRelationInput
  }

  export type MasterMenuWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    uid?: string
    AND?: MasterMenuWhereInput | MasterMenuWhereInput[]
    OR?: MasterMenuWhereInput[]
    NOT?: MasterMenuWhereInput | MasterMenuWhereInput[]
    name?: StringFilter<"MasterMenu"> | string
    description?: StringNullableFilter<"MasterMenu"> | string | null
    url?: StringNullableFilter<"MasterMenu"> | string | null
    icon?: StringNullableFilter<"MasterMenu"> | string | null
    order?: IntFilter<"MasterMenu"> | number
    status?: IntFilter<"MasterMenu"> | number
    createdBy?: IntNullableFilter<"MasterMenu"> | number | null
    createdAt?: DateTimeFilter<"MasterMenu"> | Date | string
    updatedBy?: IntNullableFilter<"MasterMenu"> | number | null
    updatedAt?: DateTimeNullableFilter<"MasterMenu"> | Date | string | null
    deletedBy?: IntNullableFilter<"MasterMenu"> | number | null
    deletedAt?: DateTimeNullableFilter<"MasterMenu"> | Date | string | null
    subMenus?: SubMenuListRelationFilter
    createdByUser?: XOR<UserNullableRelationFilter, UserWhereInput> | null
    updatedByUser?: XOR<UserNullableRelationFilter, UserWhereInput> | null
    deletedByUser?: XOR<UserNullableRelationFilter, UserWhereInput> | null
  }, "id" | "uid">

  export type MasterMenuOrderByWithAggregationInput = {
    id?: SortOrder
    uid?: SortOrder
    name?: SortOrder
    description?: SortOrderInput | SortOrder
    url?: SortOrderInput | SortOrder
    icon?: SortOrderInput | SortOrder
    order?: SortOrder
    status?: SortOrder
    createdBy?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedBy?: SortOrderInput | SortOrder
    updatedAt?: SortOrderInput | SortOrder
    deletedBy?: SortOrderInput | SortOrder
    deletedAt?: SortOrderInput | SortOrder
    _count?: MasterMenuCountOrderByAggregateInput
    _avg?: MasterMenuAvgOrderByAggregateInput
    _max?: MasterMenuMaxOrderByAggregateInput
    _min?: MasterMenuMinOrderByAggregateInput
    _sum?: MasterMenuSumOrderByAggregateInput
  }

  export type MasterMenuScalarWhereWithAggregatesInput = {
    AND?: MasterMenuScalarWhereWithAggregatesInput | MasterMenuScalarWhereWithAggregatesInput[]
    OR?: MasterMenuScalarWhereWithAggregatesInput[]
    NOT?: MasterMenuScalarWhereWithAggregatesInput | MasterMenuScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"MasterMenu"> | number
    uid?: StringWithAggregatesFilter<"MasterMenu"> | string
    name?: StringWithAggregatesFilter<"MasterMenu"> | string
    description?: StringNullableWithAggregatesFilter<"MasterMenu"> | string | null
    url?: StringNullableWithAggregatesFilter<"MasterMenu"> | string | null
    icon?: StringNullableWithAggregatesFilter<"MasterMenu"> | string | null
    order?: IntWithAggregatesFilter<"MasterMenu"> | number
    status?: IntWithAggregatesFilter<"MasterMenu"> | number
    createdBy?: IntNullableWithAggregatesFilter<"MasterMenu"> | number | null
    createdAt?: DateTimeWithAggregatesFilter<"MasterMenu"> | Date | string
    updatedBy?: IntNullableWithAggregatesFilter<"MasterMenu"> | number | null
    updatedAt?: DateTimeNullableWithAggregatesFilter<"MasterMenu"> | Date | string | null
    deletedBy?: IntNullableWithAggregatesFilter<"MasterMenu"> | number | null
    deletedAt?: DateTimeNullableWithAggregatesFilter<"MasterMenu"> | Date | string | null
  }

  export type SubMenuWhereInput = {
    AND?: SubMenuWhereInput | SubMenuWhereInput[]
    OR?: SubMenuWhereInput[]
    NOT?: SubMenuWhereInput | SubMenuWhereInput[]
    id?: IntFilter<"SubMenu"> | number
    uid?: StringFilter<"SubMenu"> | string
    masterMenuId?: IntFilter<"SubMenu"> | number
    name?: StringFilter<"SubMenu"> | string
    description?: StringNullableFilter<"SubMenu"> | string | null
    url?: StringNullableFilter<"SubMenu"> | string | null
    icon?: StringNullableFilter<"SubMenu"> | string | null
    order?: IntFilter<"SubMenu"> | number
    status?: IntFilter<"SubMenu"> | number
    createdBy?: IntNullableFilter<"SubMenu"> | number | null
    createdAt?: DateTimeFilter<"SubMenu"> | Date | string
    updatedBy?: IntNullableFilter<"SubMenu"> | number | null
    updatedAt?: DateTimeNullableFilter<"SubMenu"> | Date | string | null
    deletedBy?: IntNullableFilter<"SubMenu"> | number | null
    deletedAt?: DateTimeNullableFilter<"SubMenu"> | Date | string | null
    masterMenu?: XOR<MasterMenuRelationFilter, MasterMenuWhereInput>
    createdByUser?: XOR<UserNullableRelationFilter, UserWhereInput> | null
    updatedByUser?: XOR<UserNullableRelationFilter, UserWhereInput> | null
    deletedByUser?: XOR<UserNullableRelationFilter, UserWhereInput> | null
    RoleMenuAccess?: RoleMenuAccessListRelationFilter
  }

  export type SubMenuOrderByWithRelationInput = {
    id?: SortOrder
    uid?: SortOrder
    masterMenuId?: SortOrder
    name?: SortOrder
    description?: SortOrderInput | SortOrder
    url?: SortOrderInput | SortOrder
    icon?: SortOrderInput | SortOrder
    order?: SortOrder
    status?: SortOrder
    createdBy?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedBy?: SortOrderInput | SortOrder
    updatedAt?: SortOrderInput | SortOrder
    deletedBy?: SortOrderInput | SortOrder
    deletedAt?: SortOrderInput | SortOrder
    masterMenu?: MasterMenuOrderByWithRelationInput
    createdByUser?: UserOrderByWithRelationInput
    updatedByUser?: UserOrderByWithRelationInput
    deletedByUser?: UserOrderByWithRelationInput
    RoleMenuAccess?: RoleMenuAccessOrderByRelationAggregateInput
  }

  export type SubMenuWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    uid?: string
    AND?: SubMenuWhereInput | SubMenuWhereInput[]
    OR?: SubMenuWhereInput[]
    NOT?: SubMenuWhereInput | SubMenuWhereInput[]
    masterMenuId?: IntFilter<"SubMenu"> | number
    name?: StringFilter<"SubMenu"> | string
    description?: StringNullableFilter<"SubMenu"> | string | null
    url?: StringNullableFilter<"SubMenu"> | string | null
    icon?: StringNullableFilter<"SubMenu"> | string | null
    order?: IntFilter<"SubMenu"> | number
    status?: IntFilter<"SubMenu"> | number
    createdBy?: IntNullableFilter<"SubMenu"> | number | null
    createdAt?: DateTimeFilter<"SubMenu"> | Date | string
    updatedBy?: IntNullableFilter<"SubMenu"> | number | null
    updatedAt?: DateTimeNullableFilter<"SubMenu"> | Date | string | null
    deletedBy?: IntNullableFilter<"SubMenu"> | number | null
    deletedAt?: DateTimeNullableFilter<"SubMenu"> | Date | string | null
    masterMenu?: XOR<MasterMenuRelationFilter, MasterMenuWhereInput>
    createdByUser?: XOR<UserNullableRelationFilter, UserWhereInput> | null
    updatedByUser?: XOR<UserNullableRelationFilter, UserWhereInput> | null
    deletedByUser?: XOR<UserNullableRelationFilter, UserWhereInput> | null
    RoleMenuAccess?: RoleMenuAccessListRelationFilter
  }, "id" | "uid">

  export type SubMenuOrderByWithAggregationInput = {
    id?: SortOrder
    uid?: SortOrder
    masterMenuId?: SortOrder
    name?: SortOrder
    description?: SortOrderInput | SortOrder
    url?: SortOrderInput | SortOrder
    icon?: SortOrderInput | SortOrder
    order?: SortOrder
    status?: SortOrder
    createdBy?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedBy?: SortOrderInput | SortOrder
    updatedAt?: SortOrderInput | SortOrder
    deletedBy?: SortOrderInput | SortOrder
    deletedAt?: SortOrderInput | SortOrder
    _count?: SubMenuCountOrderByAggregateInput
    _avg?: SubMenuAvgOrderByAggregateInput
    _max?: SubMenuMaxOrderByAggregateInput
    _min?: SubMenuMinOrderByAggregateInput
    _sum?: SubMenuSumOrderByAggregateInput
  }

  export type SubMenuScalarWhereWithAggregatesInput = {
    AND?: SubMenuScalarWhereWithAggregatesInput | SubMenuScalarWhereWithAggregatesInput[]
    OR?: SubMenuScalarWhereWithAggregatesInput[]
    NOT?: SubMenuScalarWhereWithAggregatesInput | SubMenuScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"SubMenu"> | number
    uid?: StringWithAggregatesFilter<"SubMenu"> | string
    masterMenuId?: IntWithAggregatesFilter<"SubMenu"> | number
    name?: StringWithAggregatesFilter<"SubMenu"> | string
    description?: StringNullableWithAggregatesFilter<"SubMenu"> | string | null
    url?: StringNullableWithAggregatesFilter<"SubMenu"> | string | null
    icon?: StringNullableWithAggregatesFilter<"SubMenu"> | string | null
    order?: IntWithAggregatesFilter<"SubMenu"> | number
    status?: IntWithAggregatesFilter<"SubMenu"> | number
    createdBy?: IntNullableWithAggregatesFilter<"SubMenu"> | number | null
    createdAt?: DateTimeWithAggregatesFilter<"SubMenu"> | Date | string
    updatedBy?: IntNullableWithAggregatesFilter<"SubMenu"> | number | null
    updatedAt?: DateTimeNullableWithAggregatesFilter<"SubMenu"> | Date | string | null
    deletedBy?: IntNullableWithAggregatesFilter<"SubMenu"> | number | null
    deletedAt?: DateTimeNullableWithAggregatesFilter<"SubMenu"> | Date | string | null
  }

  export type RoleMenuAccessWhereInput = {
    AND?: RoleMenuAccessWhereInput | RoleMenuAccessWhereInput[]
    OR?: RoleMenuAccessWhereInput[]
    NOT?: RoleMenuAccessWhereInput | RoleMenuAccessWhereInput[]
    id?: IntFilter<"RoleMenuAccess"> | number
    uid?: StringFilter<"RoleMenuAccess"> | string
    name?: StringFilter<"RoleMenuAccess"> | string
    description?: StringNullableFilter<"RoleMenuAccess"> | string | null
    roleId?: IntFilter<"RoleMenuAccess"> | number
    submenuId?: IntFilter<"RoleMenuAccess"> | number
    status?: IntFilter<"RoleMenuAccess"> | number
    createdBy?: IntNullableFilter<"RoleMenuAccess"> | number | null
    createdAt?: DateTimeFilter<"RoleMenuAccess"> | Date | string
    updatedBy?: IntNullableFilter<"RoleMenuAccess"> | number | null
    updatedAt?: DateTimeNullableFilter<"RoleMenuAccess"> | Date | string | null
    deletedBy?: IntNullableFilter<"RoleMenuAccess"> | number | null
    deletedAt?: DateTimeNullableFilter<"RoleMenuAccess"> | Date | string | null
    role?: XOR<RoleRelationFilter, RoleWhereInput>
    subMenu?: XOR<SubMenuRelationFilter, SubMenuWhereInput>
    createdByUser?: XOR<UserNullableRelationFilter, UserWhereInput> | null
    updatedByUser?: XOR<UserNullableRelationFilter, UserWhereInput> | null
    deletedByUser?: XOR<UserNullableRelationFilter, UserWhereInput> | null
  }

  export type RoleMenuAccessOrderByWithRelationInput = {
    id?: SortOrder
    uid?: SortOrder
    name?: SortOrder
    description?: SortOrderInput | SortOrder
    roleId?: SortOrder
    submenuId?: SortOrder
    status?: SortOrder
    createdBy?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedBy?: SortOrderInput | SortOrder
    updatedAt?: SortOrderInput | SortOrder
    deletedBy?: SortOrderInput | SortOrder
    deletedAt?: SortOrderInput | SortOrder
    role?: RoleOrderByWithRelationInput
    subMenu?: SubMenuOrderByWithRelationInput
    createdByUser?: UserOrderByWithRelationInput
    updatedByUser?: UserOrderByWithRelationInput
    deletedByUser?: UserOrderByWithRelationInput
  }

  export type RoleMenuAccessWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    uid?: string
    AND?: RoleMenuAccessWhereInput | RoleMenuAccessWhereInput[]
    OR?: RoleMenuAccessWhereInput[]
    NOT?: RoleMenuAccessWhereInput | RoleMenuAccessWhereInput[]
    name?: StringFilter<"RoleMenuAccess"> | string
    description?: StringNullableFilter<"RoleMenuAccess"> | string | null
    roleId?: IntFilter<"RoleMenuAccess"> | number
    submenuId?: IntFilter<"RoleMenuAccess"> | number
    status?: IntFilter<"RoleMenuAccess"> | number
    createdBy?: IntNullableFilter<"RoleMenuAccess"> | number | null
    createdAt?: DateTimeFilter<"RoleMenuAccess"> | Date | string
    updatedBy?: IntNullableFilter<"RoleMenuAccess"> | number | null
    updatedAt?: DateTimeNullableFilter<"RoleMenuAccess"> | Date | string | null
    deletedBy?: IntNullableFilter<"RoleMenuAccess"> | number | null
    deletedAt?: DateTimeNullableFilter<"RoleMenuAccess"> | Date | string | null
    role?: XOR<RoleRelationFilter, RoleWhereInput>
    subMenu?: XOR<SubMenuRelationFilter, SubMenuWhereInput>
    createdByUser?: XOR<UserNullableRelationFilter, UserWhereInput> | null
    updatedByUser?: XOR<UserNullableRelationFilter, UserWhereInput> | null
    deletedByUser?: XOR<UserNullableRelationFilter, UserWhereInput> | null
  }, "id" | "uid">

  export type RoleMenuAccessOrderByWithAggregationInput = {
    id?: SortOrder
    uid?: SortOrder
    name?: SortOrder
    description?: SortOrderInput | SortOrder
    roleId?: SortOrder
    submenuId?: SortOrder
    status?: SortOrder
    createdBy?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedBy?: SortOrderInput | SortOrder
    updatedAt?: SortOrderInput | SortOrder
    deletedBy?: SortOrderInput | SortOrder
    deletedAt?: SortOrderInput | SortOrder
    _count?: RoleMenuAccessCountOrderByAggregateInput
    _avg?: RoleMenuAccessAvgOrderByAggregateInput
    _max?: RoleMenuAccessMaxOrderByAggregateInput
    _min?: RoleMenuAccessMinOrderByAggregateInput
    _sum?: RoleMenuAccessSumOrderByAggregateInput
  }

  export type RoleMenuAccessScalarWhereWithAggregatesInput = {
    AND?: RoleMenuAccessScalarWhereWithAggregatesInput | RoleMenuAccessScalarWhereWithAggregatesInput[]
    OR?: RoleMenuAccessScalarWhereWithAggregatesInput[]
    NOT?: RoleMenuAccessScalarWhereWithAggregatesInput | RoleMenuAccessScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"RoleMenuAccess"> | number
    uid?: StringWithAggregatesFilter<"RoleMenuAccess"> | string
    name?: StringWithAggregatesFilter<"RoleMenuAccess"> | string
    description?: StringNullableWithAggregatesFilter<"RoleMenuAccess"> | string | null
    roleId?: IntWithAggregatesFilter<"RoleMenuAccess"> | number
    submenuId?: IntWithAggregatesFilter<"RoleMenuAccess"> | number
    status?: IntWithAggregatesFilter<"RoleMenuAccess"> | number
    createdBy?: IntNullableWithAggregatesFilter<"RoleMenuAccess"> | number | null
    createdAt?: DateTimeWithAggregatesFilter<"RoleMenuAccess"> | Date | string
    updatedBy?: IntNullableWithAggregatesFilter<"RoleMenuAccess"> | number | null
    updatedAt?: DateTimeNullableWithAggregatesFilter<"RoleMenuAccess"> | Date | string | null
    deletedBy?: IntNullableWithAggregatesFilter<"RoleMenuAccess"> | number | null
    deletedAt?: DateTimeNullableWithAggregatesFilter<"RoleMenuAccess"> | Date | string | null
  }

  export type UserCreateInput = {
    uid?: string
    username: string
    email: string
    password: string
    firstName: string
    lastName?: string | null
    token?: string | null
    refreshToken?: string | null
    status?: number
    latestLoginAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string | null
    deletedAt?: Date | string | null
    role: RoleCreateNestedOneWithoutUserInput
    roles?: RoleCreateNestedManyWithoutUsersInput
    createdRoles?: RoleCreateNestedManyWithoutCreatedByUserInput
    updatedRoles?: RoleCreateNestedManyWithoutUpdatedByUserInput
    deletedRoles?: RoleCreateNestedManyWithoutDeletedByUserInput
    createdMenus?: MasterMenuCreateNestedManyWithoutCreatedByUserInput
    updatedMenus?: MasterMenuCreateNestedManyWithoutUpdatedByUserInput
    deletedMenus?: MasterMenuCreateNestedManyWithoutDeletedByUserInput
    createdSubMenus?: SubMenuCreateNestedManyWithoutCreatedByUserInput
    updatedSubMenus?: SubMenuCreateNestedManyWithoutUpdatedByUserInput
    deletedSubMenus?: SubMenuCreateNestedManyWithoutDeletedByUserInput
    createdAccesses?: RoleMenuAccessCreateNestedManyWithoutCreatedByUserInput
    updatedAccesses?: RoleMenuAccessCreateNestedManyWithoutUpdatedByUserInput
    deletedAccesses?: RoleMenuAccessCreateNestedManyWithoutDeletedByUserInput
  }

  export type UserUncheckedCreateInput = {
    id?: number
    uid?: string
    roleId: number
    username: string
    email: string
    password: string
    firstName: string
    lastName?: string | null
    token?: string | null
    refreshToken?: string | null
    status?: number
    latestLoginAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string | null
    deletedAt?: Date | string | null
    roles?: RoleUncheckedCreateNestedManyWithoutUsersInput
    createdRoles?: RoleUncheckedCreateNestedManyWithoutCreatedByUserInput
    updatedRoles?: RoleUncheckedCreateNestedManyWithoutUpdatedByUserInput
    deletedRoles?: RoleUncheckedCreateNestedManyWithoutDeletedByUserInput
    createdMenus?: MasterMenuUncheckedCreateNestedManyWithoutCreatedByUserInput
    updatedMenus?: MasterMenuUncheckedCreateNestedManyWithoutUpdatedByUserInput
    deletedMenus?: MasterMenuUncheckedCreateNestedManyWithoutDeletedByUserInput
    createdSubMenus?: SubMenuUncheckedCreateNestedManyWithoutCreatedByUserInput
    updatedSubMenus?: SubMenuUncheckedCreateNestedManyWithoutUpdatedByUserInput
    deletedSubMenus?: SubMenuUncheckedCreateNestedManyWithoutDeletedByUserInput
    createdAccesses?: RoleMenuAccessUncheckedCreateNestedManyWithoutCreatedByUserInput
    updatedAccesses?: RoleMenuAccessUncheckedCreateNestedManyWithoutUpdatedByUserInput
    deletedAccesses?: RoleMenuAccessUncheckedCreateNestedManyWithoutDeletedByUserInput
  }

  export type UserUpdateInput = {
    uid?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: NullableStringFieldUpdateOperationsInput | string | null
    token?: NullableStringFieldUpdateOperationsInput | string | null
    refreshToken?: NullableStringFieldUpdateOperationsInput | string | null
    status?: IntFieldUpdateOperationsInput | number
    latestLoginAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    role?: RoleUpdateOneRequiredWithoutUserNestedInput
    roles?: RoleUpdateManyWithoutUsersNestedInput
    createdRoles?: RoleUpdateManyWithoutCreatedByUserNestedInput
    updatedRoles?: RoleUpdateManyWithoutUpdatedByUserNestedInput
    deletedRoles?: RoleUpdateManyWithoutDeletedByUserNestedInput
    createdMenus?: MasterMenuUpdateManyWithoutCreatedByUserNestedInput
    updatedMenus?: MasterMenuUpdateManyWithoutUpdatedByUserNestedInput
    deletedMenus?: MasterMenuUpdateManyWithoutDeletedByUserNestedInput
    createdSubMenus?: SubMenuUpdateManyWithoutCreatedByUserNestedInput
    updatedSubMenus?: SubMenuUpdateManyWithoutUpdatedByUserNestedInput
    deletedSubMenus?: SubMenuUpdateManyWithoutDeletedByUserNestedInput
    createdAccesses?: RoleMenuAccessUpdateManyWithoutCreatedByUserNestedInput
    updatedAccesses?: RoleMenuAccessUpdateManyWithoutUpdatedByUserNestedInput
    deletedAccesses?: RoleMenuAccessUpdateManyWithoutDeletedByUserNestedInput
  }

  export type UserUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    uid?: StringFieldUpdateOperationsInput | string
    roleId?: IntFieldUpdateOperationsInput | number
    username?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: NullableStringFieldUpdateOperationsInput | string | null
    token?: NullableStringFieldUpdateOperationsInput | string | null
    refreshToken?: NullableStringFieldUpdateOperationsInput | string | null
    status?: IntFieldUpdateOperationsInput | number
    latestLoginAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    roles?: RoleUncheckedUpdateManyWithoutUsersNestedInput
    createdRoles?: RoleUncheckedUpdateManyWithoutCreatedByUserNestedInput
    updatedRoles?: RoleUncheckedUpdateManyWithoutUpdatedByUserNestedInput
    deletedRoles?: RoleUncheckedUpdateManyWithoutDeletedByUserNestedInput
    createdMenus?: MasterMenuUncheckedUpdateManyWithoutCreatedByUserNestedInput
    updatedMenus?: MasterMenuUncheckedUpdateManyWithoutUpdatedByUserNestedInput
    deletedMenus?: MasterMenuUncheckedUpdateManyWithoutDeletedByUserNestedInput
    createdSubMenus?: SubMenuUncheckedUpdateManyWithoutCreatedByUserNestedInput
    updatedSubMenus?: SubMenuUncheckedUpdateManyWithoutUpdatedByUserNestedInput
    deletedSubMenus?: SubMenuUncheckedUpdateManyWithoutDeletedByUserNestedInput
    createdAccesses?: RoleMenuAccessUncheckedUpdateManyWithoutCreatedByUserNestedInput
    updatedAccesses?: RoleMenuAccessUncheckedUpdateManyWithoutUpdatedByUserNestedInput
    deletedAccesses?: RoleMenuAccessUncheckedUpdateManyWithoutDeletedByUserNestedInput
  }

  export type UserCreateManyInput = {
    id?: number
    uid?: string
    roleId: number
    username: string
    email: string
    password: string
    firstName: string
    lastName?: string | null
    token?: string | null
    refreshToken?: string | null
    status?: number
    latestLoginAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string | null
    deletedAt?: Date | string | null
  }

  export type UserUpdateManyMutationInput = {
    uid?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: NullableStringFieldUpdateOperationsInput | string | null
    token?: NullableStringFieldUpdateOperationsInput | string | null
    refreshToken?: NullableStringFieldUpdateOperationsInput | string | null
    status?: IntFieldUpdateOperationsInput | number
    latestLoginAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type UserUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    uid?: StringFieldUpdateOperationsInput | string
    roleId?: IntFieldUpdateOperationsInput | number
    username?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: NullableStringFieldUpdateOperationsInput | string | null
    token?: NullableStringFieldUpdateOperationsInput | string | null
    refreshToken?: NullableStringFieldUpdateOperationsInput | string | null
    status?: IntFieldUpdateOperationsInput | number
    latestLoginAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type RoleCreateInput = {
    uid?: string
    name: string
    description?: string | null
    status?: number
    createdAt?: Date | string
    updatedAt?: Date | string | null
    deletedAt?: Date | string | null
    users?: UserCreateNestedManyWithoutRolesInput
    createdByUser?: UserCreateNestedOneWithoutCreatedRolesInput
    updatedByUser?: UserCreateNestedOneWithoutUpdatedRolesInput
    deletedByUser?: UserCreateNestedOneWithoutDeletedRolesInput
    User?: UserCreateNestedManyWithoutRoleInput
    RoleMenuAccess?: RoleMenuAccessCreateNestedManyWithoutRoleInput
  }

  export type RoleUncheckedCreateInput = {
    id?: number
    uid?: string
    name: string
    description?: string | null
    status?: number
    createdBy?: number | null
    createdAt?: Date | string
    updatedBy?: number | null
    updatedAt?: Date | string | null
    deletedBy?: number | null
    deletedAt?: Date | string | null
    users?: UserUncheckedCreateNestedManyWithoutRolesInput
    User?: UserUncheckedCreateNestedManyWithoutRoleInput
    RoleMenuAccess?: RoleMenuAccessUncheckedCreateNestedManyWithoutRoleInput
  }

  export type RoleUpdateInput = {
    uid?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    status?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    users?: UserUpdateManyWithoutRolesNestedInput
    createdByUser?: UserUpdateOneWithoutCreatedRolesNestedInput
    updatedByUser?: UserUpdateOneWithoutUpdatedRolesNestedInput
    deletedByUser?: UserUpdateOneWithoutDeletedRolesNestedInput
    User?: UserUpdateManyWithoutRoleNestedInput
    RoleMenuAccess?: RoleMenuAccessUpdateManyWithoutRoleNestedInput
  }

  export type RoleUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    uid?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    status?: IntFieldUpdateOperationsInput | number
    createdBy?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedBy?: NullableIntFieldUpdateOperationsInput | number | null
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deletedBy?: NullableIntFieldUpdateOperationsInput | number | null
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    users?: UserUncheckedUpdateManyWithoutRolesNestedInput
    User?: UserUncheckedUpdateManyWithoutRoleNestedInput
    RoleMenuAccess?: RoleMenuAccessUncheckedUpdateManyWithoutRoleNestedInput
  }

  export type RoleCreateManyInput = {
    id?: number
    uid?: string
    name: string
    description?: string | null
    status?: number
    createdBy?: number | null
    createdAt?: Date | string
    updatedBy?: number | null
    updatedAt?: Date | string | null
    deletedBy?: number | null
    deletedAt?: Date | string | null
  }

  export type RoleUpdateManyMutationInput = {
    uid?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    status?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type RoleUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    uid?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    status?: IntFieldUpdateOperationsInput | number
    createdBy?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedBy?: NullableIntFieldUpdateOperationsInput | number | null
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deletedBy?: NullableIntFieldUpdateOperationsInput | number | null
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type MasterMenuCreateInput = {
    uid?: string
    name: string
    description?: string | null
    url?: string | null
    icon?: string | null
    order?: number
    status?: number
    createdAt?: Date | string
    updatedAt?: Date | string | null
    deletedAt?: Date | string | null
    subMenus?: SubMenuCreateNestedManyWithoutMasterMenuInput
    createdByUser?: UserCreateNestedOneWithoutCreatedMenusInput
    updatedByUser?: UserCreateNestedOneWithoutUpdatedMenusInput
    deletedByUser?: UserCreateNestedOneWithoutDeletedMenusInput
  }

  export type MasterMenuUncheckedCreateInput = {
    id?: number
    uid?: string
    name: string
    description?: string | null
    url?: string | null
    icon?: string | null
    order?: number
    status?: number
    createdBy?: number | null
    createdAt?: Date | string
    updatedBy?: number | null
    updatedAt?: Date | string | null
    deletedBy?: number | null
    deletedAt?: Date | string | null
    subMenus?: SubMenuUncheckedCreateNestedManyWithoutMasterMenuInput
  }

  export type MasterMenuUpdateInput = {
    uid?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    url?: NullableStringFieldUpdateOperationsInput | string | null
    icon?: NullableStringFieldUpdateOperationsInput | string | null
    order?: IntFieldUpdateOperationsInput | number
    status?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    subMenus?: SubMenuUpdateManyWithoutMasterMenuNestedInput
    createdByUser?: UserUpdateOneWithoutCreatedMenusNestedInput
    updatedByUser?: UserUpdateOneWithoutUpdatedMenusNestedInput
    deletedByUser?: UserUpdateOneWithoutDeletedMenusNestedInput
  }

  export type MasterMenuUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    uid?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    url?: NullableStringFieldUpdateOperationsInput | string | null
    icon?: NullableStringFieldUpdateOperationsInput | string | null
    order?: IntFieldUpdateOperationsInput | number
    status?: IntFieldUpdateOperationsInput | number
    createdBy?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedBy?: NullableIntFieldUpdateOperationsInput | number | null
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deletedBy?: NullableIntFieldUpdateOperationsInput | number | null
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    subMenus?: SubMenuUncheckedUpdateManyWithoutMasterMenuNestedInput
  }

  export type MasterMenuCreateManyInput = {
    id?: number
    uid?: string
    name: string
    description?: string | null
    url?: string | null
    icon?: string | null
    order?: number
    status?: number
    createdBy?: number | null
    createdAt?: Date | string
    updatedBy?: number | null
    updatedAt?: Date | string | null
    deletedBy?: number | null
    deletedAt?: Date | string | null
  }

  export type MasterMenuUpdateManyMutationInput = {
    uid?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    url?: NullableStringFieldUpdateOperationsInput | string | null
    icon?: NullableStringFieldUpdateOperationsInput | string | null
    order?: IntFieldUpdateOperationsInput | number
    status?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type MasterMenuUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    uid?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    url?: NullableStringFieldUpdateOperationsInput | string | null
    icon?: NullableStringFieldUpdateOperationsInput | string | null
    order?: IntFieldUpdateOperationsInput | number
    status?: IntFieldUpdateOperationsInput | number
    createdBy?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedBy?: NullableIntFieldUpdateOperationsInput | number | null
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deletedBy?: NullableIntFieldUpdateOperationsInput | number | null
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type SubMenuCreateInput = {
    uid?: string
    name: string
    description?: string | null
    url?: string | null
    icon?: string | null
    order?: number
    status?: number
    createdAt?: Date | string
    updatedAt?: Date | string | null
    deletedAt?: Date | string | null
    masterMenu: MasterMenuCreateNestedOneWithoutSubMenusInput
    createdByUser?: UserCreateNestedOneWithoutCreatedSubMenusInput
    updatedByUser?: UserCreateNestedOneWithoutUpdatedSubMenusInput
    deletedByUser?: UserCreateNestedOneWithoutDeletedSubMenusInput
    RoleMenuAccess?: RoleMenuAccessCreateNestedManyWithoutSubMenuInput
  }

  export type SubMenuUncheckedCreateInput = {
    id?: number
    uid?: string
    masterMenuId: number
    name: string
    description?: string | null
    url?: string | null
    icon?: string | null
    order?: number
    status?: number
    createdBy?: number | null
    createdAt?: Date | string
    updatedBy?: number | null
    updatedAt?: Date | string | null
    deletedBy?: number | null
    deletedAt?: Date | string | null
    RoleMenuAccess?: RoleMenuAccessUncheckedCreateNestedManyWithoutSubMenuInput
  }

  export type SubMenuUpdateInput = {
    uid?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    url?: NullableStringFieldUpdateOperationsInput | string | null
    icon?: NullableStringFieldUpdateOperationsInput | string | null
    order?: IntFieldUpdateOperationsInput | number
    status?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    masterMenu?: MasterMenuUpdateOneRequiredWithoutSubMenusNestedInput
    createdByUser?: UserUpdateOneWithoutCreatedSubMenusNestedInput
    updatedByUser?: UserUpdateOneWithoutUpdatedSubMenusNestedInput
    deletedByUser?: UserUpdateOneWithoutDeletedSubMenusNestedInput
    RoleMenuAccess?: RoleMenuAccessUpdateManyWithoutSubMenuNestedInput
  }

  export type SubMenuUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    uid?: StringFieldUpdateOperationsInput | string
    masterMenuId?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    url?: NullableStringFieldUpdateOperationsInput | string | null
    icon?: NullableStringFieldUpdateOperationsInput | string | null
    order?: IntFieldUpdateOperationsInput | number
    status?: IntFieldUpdateOperationsInput | number
    createdBy?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedBy?: NullableIntFieldUpdateOperationsInput | number | null
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deletedBy?: NullableIntFieldUpdateOperationsInput | number | null
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    RoleMenuAccess?: RoleMenuAccessUncheckedUpdateManyWithoutSubMenuNestedInput
  }

  export type SubMenuCreateManyInput = {
    id?: number
    uid?: string
    masterMenuId: number
    name: string
    description?: string | null
    url?: string | null
    icon?: string | null
    order?: number
    status?: number
    createdBy?: number | null
    createdAt?: Date | string
    updatedBy?: number | null
    updatedAt?: Date | string | null
    deletedBy?: number | null
    deletedAt?: Date | string | null
  }

  export type SubMenuUpdateManyMutationInput = {
    uid?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    url?: NullableStringFieldUpdateOperationsInput | string | null
    icon?: NullableStringFieldUpdateOperationsInput | string | null
    order?: IntFieldUpdateOperationsInput | number
    status?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type SubMenuUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    uid?: StringFieldUpdateOperationsInput | string
    masterMenuId?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    url?: NullableStringFieldUpdateOperationsInput | string | null
    icon?: NullableStringFieldUpdateOperationsInput | string | null
    order?: IntFieldUpdateOperationsInput | number
    status?: IntFieldUpdateOperationsInput | number
    createdBy?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedBy?: NullableIntFieldUpdateOperationsInput | number | null
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deletedBy?: NullableIntFieldUpdateOperationsInput | number | null
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type RoleMenuAccessCreateInput = {
    uid?: string
    name: string
    description?: string | null
    status?: number
    createdAt?: Date | string
    updatedAt?: Date | string | null
    deletedAt?: Date | string | null
    role: RoleCreateNestedOneWithoutRoleMenuAccessInput
    subMenu: SubMenuCreateNestedOneWithoutRoleMenuAccessInput
    createdByUser?: UserCreateNestedOneWithoutCreatedAccessesInput
    updatedByUser?: UserCreateNestedOneWithoutUpdatedAccessesInput
    deletedByUser?: UserCreateNestedOneWithoutDeletedAccessesInput
  }

  export type RoleMenuAccessUncheckedCreateInput = {
    id?: number
    uid?: string
    name: string
    description?: string | null
    roleId: number
    submenuId: number
    status?: number
    createdBy?: number | null
    createdAt?: Date | string
    updatedBy?: number | null
    updatedAt?: Date | string | null
    deletedBy?: number | null
    deletedAt?: Date | string | null
  }

  export type RoleMenuAccessUpdateInput = {
    uid?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    status?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    role?: RoleUpdateOneRequiredWithoutRoleMenuAccessNestedInput
    subMenu?: SubMenuUpdateOneRequiredWithoutRoleMenuAccessNestedInput
    createdByUser?: UserUpdateOneWithoutCreatedAccessesNestedInput
    updatedByUser?: UserUpdateOneWithoutUpdatedAccessesNestedInput
    deletedByUser?: UserUpdateOneWithoutDeletedAccessesNestedInput
  }

  export type RoleMenuAccessUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    uid?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    roleId?: IntFieldUpdateOperationsInput | number
    submenuId?: IntFieldUpdateOperationsInput | number
    status?: IntFieldUpdateOperationsInput | number
    createdBy?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedBy?: NullableIntFieldUpdateOperationsInput | number | null
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deletedBy?: NullableIntFieldUpdateOperationsInput | number | null
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type RoleMenuAccessCreateManyInput = {
    id?: number
    uid?: string
    name: string
    description?: string | null
    roleId: number
    submenuId: number
    status?: number
    createdBy?: number | null
    createdAt?: Date | string
    updatedBy?: number | null
    updatedAt?: Date | string | null
    deletedBy?: number | null
    deletedAt?: Date | string | null
  }

  export type RoleMenuAccessUpdateManyMutationInput = {
    uid?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    status?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type RoleMenuAccessUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    uid?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    roleId?: IntFieldUpdateOperationsInput | number
    submenuId?: IntFieldUpdateOperationsInput | number
    status?: IntFieldUpdateOperationsInput | number
    createdBy?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedBy?: NullableIntFieldUpdateOperationsInput | number | null
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deletedBy?: NullableIntFieldUpdateOperationsInput | number | null
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type DateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | null
    notIn?: Date[] | string[] | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type RoleRelationFilter = {
    is?: RoleWhereInput
    isNot?: RoleWhereInput
  }

  export type RoleListRelationFilter = {
    every?: RoleWhereInput
    some?: RoleWhereInput
    none?: RoleWhereInput
  }

  export type MasterMenuListRelationFilter = {
    every?: MasterMenuWhereInput
    some?: MasterMenuWhereInput
    none?: MasterMenuWhereInput
  }

  export type SubMenuListRelationFilter = {
    every?: SubMenuWhereInput
    some?: SubMenuWhereInput
    none?: SubMenuWhereInput
  }

  export type RoleMenuAccessListRelationFilter = {
    every?: RoleMenuAccessWhereInput
    some?: RoleMenuAccessWhereInput
    none?: RoleMenuAccessWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type RoleOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type MasterMenuOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type SubMenuOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type RoleMenuAccessOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UserCountOrderByAggregateInput = {
    id?: SortOrder
    uid?: SortOrder
    roleId?: SortOrder
    username?: SortOrder
    email?: SortOrder
    password?: SortOrder
    firstName?: SortOrder
    lastName?: SortOrder
    token?: SortOrder
    refreshToken?: SortOrder
    status?: SortOrder
    latestLoginAt?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    deletedAt?: SortOrder
  }

  export type UserAvgOrderByAggregateInput = {
    id?: SortOrder
    roleId?: SortOrder
    status?: SortOrder
  }

  export type UserMaxOrderByAggregateInput = {
    id?: SortOrder
    uid?: SortOrder
    roleId?: SortOrder
    username?: SortOrder
    email?: SortOrder
    password?: SortOrder
    firstName?: SortOrder
    lastName?: SortOrder
    token?: SortOrder
    refreshToken?: SortOrder
    status?: SortOrder
    latestLoginAt?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    deletedAt?: SortOrder
  }

  export type UserMinOrderByAggregateInput = {
    id?: SortOrder
    uid?: SortOrder
    roleId?: SortOrder
    username?: SortOrder
    email?: SortOrder
    password?: SortOrder
    firstName?: SortOrder
    lastName?: SortOrder
    token?: SortOrder
    refreshToken?: SortOrder
    status?: SortOrder
    latestLoginAt?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    deletedAt?: SortOrder
  }

  export type UserSumOrderByAggregateInput = {
    id?: SortOrder
    roleId?: SortOrder
    status?: SortOrder
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
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
    in?: string[]
    notIn?: string[]
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

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type DateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | null
    notIn?: Date[] | string[] | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type IntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type UserListRelationFilter = {
    every?: UserWhereInput
    some?: UserWhereInput
    none?: UserWhereInput
  }

  export type UserNullableRelationFilter = {
    is?: UserWhereInput | null
    isNot?: UserWhereInput | null
  }

  export type UserOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type RoleCountOrderByAggregateInput = {
    id?: SortOrder
    uid?: SortOrder
    name?: SortOrder
    description?: SortOrder
    status?: SortOrder
    createdBy?: SortOrder
    createdAt?: SortOrder
    updatedBy?: SortOrder
    updatedAt?: SortOrder
    deletedBy?: SortOrder
    deletedAt?: SortOrder
  }

  export type RoleAvgOrderByAggregateInput = {
    id?: SortOrder
    status?: SortOrder
    createdBy?: SortOrder
    updatedBy?: SortOrder
    deletedBy?: SortOrder
  }

  export type RoleMaxOrderByAggregateInput = {
    id?: SortOrder
    uid?: SortOrder
    name?: SortOrder
    description?: SortOrder
    status?: SortOrder
    createdBy?: SortOrder
    createdAt?: SortOrder
    updatedBy?: SortOrder
    updatedAt?: SortOrder
    deletedBy?: SortOrder
    deletedAt?: SortOrder
  }

  export type RoleMinOrderByAggregateInput = {
    id?: SortOrder
    uid?: SortOrder
    name?: SortOrder
    description?: SortOrder
    status?: SortOrder
    createdBy?: SortOrder
    createdAt?: SortOrder
    updatedBy?: SortOrder
    updatedAt?: SortOrder
    deletedBy?: SortOrder
    deletedAt?: SortOrder
  }

  export type RoleSumOrderByAggregateInput = {
    id?: SortOrder
    status?: SortOrder
    createdBy?: SortOrder
    updatedBy?: SortOrder
    deletedBy?: SortOrder
  }

  export type IntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
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

  export type MasterMenuCountOrderByAggregateInput = {
    id?: SortOrder
    uid?: SortOrder
    name?: SortOrder
    description?: SortOrder
    url?: SortOrder
    icon?: SortOrder
    order?: SortOrder
    status?: SortOrder
    createdBy?: SortOrder
    createdAt?: SortOrder
    updatedBy?: SortOrder
    updatedAt?: SortOrder
    deletedBy?: SortOrder
    deletedAt?: SortOrder
  }

  export type MasterMenuAvgOrderByAggregateInput = {
    id?: SortOrder
    order?: SortOrder
    status?: SortOrder
    createdBy?: SortOrder
    updatedBy?: SortOrder
    deletedBy?: SortOrder
  }

  export type MasterMenuMaxOrderByAggregateInput = {
    id?: SortOrder
    uid?: SortOrder
    name?: SortOrder
    description?: SortOrder
    url?: SortOrder
    icon?: SortOrder
    order?: SortOrder
    status?: SortOrder
    createdBy?: SortOrder
    createdAt?: SortOrder
    updatedBy?: SortOrder
    updatedAt?: SortOrder
    deletedBy?: SortOrder
    deletedAt?: SortOrder
  }

  export type MasterMenuMinOrderByAggregateInput = {
    id?: SortOrder
    uid?: SortOrder
    name?: SortOrder
    description?: SortOrder
    url?: SortOrder
    icon?: SortOrder
    order?: SortOrder
    status?: SortOrder
    createdBy?: SortOrder
    createdAt?: SortOrder
    updatedBy?: SortOrder
    updatedAt?: SortOrder
    deletedBy?: SortOrder
    deletedAt?: SortOrder
  }

  export type MasterMenuSumOrderByAggregateInput = {
    id?: SortOrder
    order?: SortOrder
    status?: SortOrder
    createdBy?: SortOrder
    updatedBy?: SortOrder
    deletedBy?: SortOrder
  }

  export type MasterMenuRelationFilter = {
    is?: MasterMenuWhereInput
    isNot?: MasterMenuWhereInput
  }

  export type SubMenuCountOrderByAggregateInput = {
    id?: SortOrder
    uid?: SortOrder
    masterMenuId?: SortOrder
    name?: SortOrder
    description?: SortOrder
    url?: SortOrder
    icon?: SortOrder
    order?: SortOrder
    status?: SortOrder
    createdBy?: SortOrder
    createdAt?: SortOrder
    updatedBy?: SortOrder
    updatedAt?: SortOrder
    deletedBy?: SortOrder
    deletedAt?: SortOrder
  }

  export type SubMenuAvgOrderByAggregateInput = {
    id?: SortOrder
    masterMenuId?: SortOrder
    order?: SortOrder
    status?: SortOrder
    createdBy?: SortOrder
    updatedBy?: SortOrder
    deletedBy?: SortOrder
  }

  export type SubMenuMaxOrderByAggregateInput = {
    id?: SortOrder
    uid?: SortOrder
    masterMenuId?: SortOrder
    name?: SortOrder
    description?: SortOrder
    url?: SortOrder
    icon?: SortOrder
    order?: SortOrder
    status?: SortOrder
    createdBy?: SortOrder
    createdAt?: SortOrder
    updatedBy?: SortOrder
    updatedAt?: SortOrder
    deletedBy?: SortOrder
    deletedAt?: SortOrder
  }

  export type SubMenuMinOrderByAggregateInput = {
    id?: SortOrder
    uid?: SortOrder
    masterMenuId?: SortOrder
    name?: SortOrder
    description?: SortOrder
    url?: SortOrder
    icon?: SortOrder
    order?: SortOrder
    status?: SortOrder
    createdBy?: SortOrder
    createdAt?: SortOrder
    updatedBy?: SortOrder
    updatedAt?: SortOrder
    deletedBy?: SortOrder
    deletedAt?: SortOrder
  }

  export type SubMenuSumOrderByAggregateInput = {
    id?: SortOrder
    masterMenuId?: SortOrder
    order?: SortOrder
    status?: SortOrder
    createdBy?: SortOrder
    updatedBy?: SortOrder
    deletedBy?: SortOrder
  }

  export type SubMenuRelationFilter = {
    is?: SubMenuWhereInput
    isNot?: SubMenuWhereInput
  }

  export type RoleMenuAccessCountOrderByAggregateInput = {
    id?: SortOrder
    uid?: SortOrder
    name?: SortOrder
    description?: SortOrder
    roleId?: SortOrder
    submenuId?: SortOrder
    status?: SortOrder
    createdBy?: SortOrder
    createdAt?: SortOrder
    updatedBy?: SortOrder
    updatedAt?: SortOrder
    deletedBy?: SortOrder
    deletedAt?: SortOrder
  }

  export type RoleMenuAccessAvgOrderByAggregateInput = {
    id?: SortOrder
    roleId?: SortOrder
    submenuId?: SortOrder
    status?: SortOrder
    createdBy?: SortOrder
    updatedBy?: SortOrder
    deletedBy?: SortOrder
  }

  export type RoleMenuAccessMaxOrderByAggregateInput = {
    id?: SortOrder
    uid?: SortOrder
    name?: SortOrder
    description?: SortOrder
    roleId?: SortOrder
    submenuId?: SortOrder
    status?: SortOrder
    createdBy?: SortOrder
    createdAt?: SortOrder
    updatedBy?: SortOrder
    updatedAt?: SortOrder
    deletedBy?: SortOrder
    deletedAt?: SortOrder
  }

  export type RoleMenuAccessMinOrderByAggregateInput = {
    id?: SortOrder
    uid?: SortOrder
    name?: SortOrder
    description?: SortOrder
    roleId?: SortOrder
    submenuId?: SortOrder
    status?: SortOrder
    createdBy?: SortOrder
    createdAt?: SortOrder
    updatedBy?: SortOrder
    updatedAt?: SortOrder
    deletedBy?: SortOrder
    deletedAt?: SortOrder
  }

  export type RoleMenuAccessSumOrderByAggregateInput = {
    id?: SortOrder
    roleId?: SortOrder
    submenuId?: SortOrder
    status?: SortOrder
    createdBy?: SortOrder
    updatedBy?: SortOrder
    deletedBy?: SortOrder
  }

  export type RoleCreateNestedOneWithoutUserInput = {
    create?: XOR<RoleCreateWithoutUserInput, RoleUncheckedCreateWithoutUserInput>
    connectOrCreate?: RoleCreateOrConnectWithoutUserInput
    connect?: RoleWhereUniqueInput
  }

  export type RoleCreateNestedManyWithoutUsersInput = {
    create?: XOR<RoleCreateWithoutUsersInput, RoleUncheckedCreateWithoutUsersInput> | RoleCreateWithoutUsersInput[] | RoleUncheckedCreateWithoutUsersInput[]
    connectOrCreate?: RoleCreateOrConnectWithoutUsersInput | RoleCreateOrConnectWithoutUsersInput[]
    connect?: RoleWhereUniqueInput | RoleWhereUniqueInput[]
  }

  export type RoleCreateNestedManyWithoutCreatedByUserInput = {
    create?: XOR<RoleCreateWithoutCreatedByUserInput, RoleUncheckedCreateWithoutCreatedByUserInput> | RoleCreateWithoutCreatedByUserInput[] | RoleUncheckedCreateWithoutCreatedByUserInput[]
    connectOrCreate?: RoleCreateOrConnectWithoutCreatedByUserInput | RoleCreateOrConnectWithoutCreatedByUserInput[]
    createMany?: RoleCreateManyCreatedByUserInputEnvelope
    connect?: RoleWhereUniqueInput | RoleWhereUniqueInput[]
  }

  export type RoleCreateNestedManyWithoutUpdatedByUserInput = {
    create?: XOR<RoleCreateWithoutUpdatedByUserInput, RoleUncheckedCreateWithoutUpdatedByUserInput> | RoleCreateWithoutUpdatedByUserInput[] | RoleUncheckedCreateWithoutUpdatedByUserInput[]
    connectOrCreate?: RoleCreateOrConnectWithoutUpdatedByUserInput | RoleCreateOrConnectWithoutUpdatedByUserInput[]
    createMany?: RoleCreateManyUpdatedByUserInputEnvelope
    connect?: RoleWhereUniqueInput | RoleWhereUniqueInput[]
  }

  export type RoleCreateNestedManyWithoutDeletedByUserInput = {
    create?: XOR<RoleCreateWithoutDeletedByUserInput, RoleUncheckedCreateWithoutDeletedByUserInput> | RoleCreateWithoutDeletedByUserInput[] | RoleUncheckedCreateWithoutDeletedByUserInput[]
    connectOrCreate?: RoleCreateOrConnectWithoutDeletedByUserInput | RoleCreateOrConnectWithoutDeletedByUserInput[]
    createMany?: RoleCreateManyDeletedByUserInputEnvelope
    connect?: RoleWhereUniqueInput | RoleWhereUniqueInput[]
  }

  export type MasterMenuCreateNestedManyWithoutCreatedByUserInput = {
    create?: XOR<MasterMenuCreateWithoutCreatedByUserInput, MasterMenuUncheckedCreateWithoutCreatedByUserInput> | MasterMenuCreateWithoutCreatedByUserInput[] | MasterMenuUncheckedCreateWithoutCreatedByUserInput[]
    connectOrCreate?: MasterMenuCreateOrConnectWithoutCreatedByUserInput | MasterMenuCreateOrConnectWithoutCreatedByUserInput[]
    createMany?: MasterMenuCreateManyCreatedByUserInputEnvelope
    connect?: MasterMenuWhereUniqueInput | MasterMenuWhereUniqueInput[]
  }

  export type MasterMenuCreateNestedManyWithoutUpdatedByUserInput = {
    create?: XOR<MasterMenuCreateWithoutUpdatedByUserInput, MasterMenuUncheckedCreateWithoutUpdatedByUserInput> | MasterMenuCreateWithoutUpdatedByUserInput[] | MasterMenuUncheckedCreateWithoutUpdatedByUserInput[]
    connectOrCreate?: MasterMenuCreateOrConnectWithoutUpdatedByUserInput | MasterMenuCreateOrConnectWithoutUpdatedByUserInput[]
    createMany?: MasterMenuCreateManyUpdatedByUserInputEnvelope
    connect?: MasterMenuWhereUniqueInput | MasterMenuWhereUniqueInput[]
  }

  export type MasterMenuCreateNestedManyWithoutDeletedByUserInput = {
    create?: XOR<MasterMenuCreateWithoutDeletedByUserInput, MasterMenuUncheckedCreateWithoutDeletedByUserInput> | MasterMenuCreateWithoutDeletedByUserInput[] | MasterMenuUncheckedCreateWithoutDeletedByUserInput[]
    connectOrCreate?: MasterMenuCreateOrConnectWithoutDeletedByUserInput | MasterMenuCreateOrConnectWithoutDeletedByUserInput[]
    createMany?: MasterMenuCreateManyDeletedByUserInputEnvelope
    connect?: MasterMenuWhereUniqueInput | MasterMenuWhereUniqueInput[]
  }

  export type SubMenuCreateNestedManyWithoutCreatedByUserInput = {
    create?: XOR<SubMenuCreateWithoutCreatedByUserInput, SubMenuUncheckedCreateWithoutCreatedByUserInput> | SubMenuCreateWithoutCreatedByUserInput[] | SubMenuUncheckedCreateWithoutCreatedByUserInput[]
    connectOrCreate?: SubMenuCreateOrConnectWithoutCreatedByUserInput | SubMenuCreateOrConnectWithoutCreatedByUserInput[]
    createMany?: SubMenuCreateManyCreatedByUserInputEnvelope
    connect?: SubMenuWhereUniqueInput | SubMenuWhereUniqueInput[]
  }

  export type SubMenuCreateNestedManyWithoutUpdatedByUserInput = {
    create?: XOR<SubMenuCreateWithoutUpdatedByUserInput, SubMenuUncheckedCreateWithoutUpdatedByUserInput> | SubMenuCreateWithoutUpdatedByUserInput[] | SubMenuUncheckedCreateWithoutUpdatedByUserInput[]
    connectOrCreate?: SubMenuCreateOrConnectWithoutUpdatedByUserInput | SubMenuCreateOrConnectWithoutUpdatedByUserInput[]
    createMany?: SubMenuCreateManyUpdatedByUserInputEnvelope
    connect?: SubMenuWhereUniqueInput | SubMenuWhereUniqueInput[]
  }

  export type SubMenuCreateNestedManyWithoutDeletedByUserInput = {
    create?: XOR<SubMenuCreateWithoutDeletedByUserInput, SubMenuUncheckedCreateWithoutDeletedByUserInput> | SubMenuCreateWithoutDeletedByUserInput[] | SubMenuUncheckedCreateWithoutDeletedByUserInput[]
    connectOrCreate?: SubMenuCreateOrConnectWithoutDeletedByUserInput | SubMenuCreateOrConnectWithoutDeletedByUserInput[]
    createMany?: SubMenuCreateManyDeletedByUserInputEnvelope
    connect?: SubMenuWhereUniqueInput | SubMenuWhereUniqueInput[]
  }

  export type RoleMenuAccessCreateNestedManyWithoutCreatedByUserInput = {
    create?: XOR<RoleMenuAccessCreateWithoutCreatedByUserInput, RoleMenuAccessUncheckedCreateWithoutCreatedByUserInput> | RoleMenuAccessCreateWithoutCreatedByUserInput[] | RoleMenuAccessUncheckedCreateWithoutCreatedByUserInput[]
    connectOrCreate?: RoleMenuAccessCreateOrConnectWithoutCreatedByUserInput | RoleMenuAccessCreateOrConnectWithoutCreatedByUserInput[]
    createMany?: RoleMenuAccessCreateManyCreatedByUserInputEnvelope
    connect?: RoleMenuAccessWhereUniqueInput | RoleMenuAccessWhereUniqueInput[]
  }

  export type RoleMenuAccessCreateNestedManyWithoutUpdatedByUserInput = {
    create?: XOR<RoleMenuAccessCreateWithoutUpdatedByUserInput, RoleMenuAccessUncheckedCreateWithoutUpdatedByUserInput> | RoleMenuAccessCreateWithoutUpdatedByUserInput[] | RoleMenuAccessUncheckedCreateWithoutUpdatedByUserInput[]
    connectOrCreate?: RoleMenuAccessCreateOrConnectWithoutUpdatedByUserInput | RoleMenuAccessCreateOrConnectWithoutUpdatedByUserInput[]
    createMany?: RoleMenuAccessCreateManyUpdatedByUserInputEnvelope
    connect?: RoleMenuAccessWhereUniqueInput | RoleMenuAccessWhereUniqueInput[]
  }

  export type RoleMenuAccessCreateNestedManyWithoutDeletedByUserInput = {
    create?: XOR<RoleMenuAccessCreateWithoutDeletedByUserInput, RoleMenuAccessUncheckedCreateWithoutDeletedByUserInput> | RoleMenuAccessCreateWithoutDeletedByUserInput[] | RoleMenuAccessUncheckedCreateWithoutDeletedByUserInput[]
    connectOrCreate?: RoleMenuAccessCreateOrConnectWithoutDeletedByUserInput | RoleMenuAccessCreateOrConnectWithoutDeletedByUserInput[]
    createMany?: RoleMenuAccessCreateManyDeletedByUserInputEnvelope
    connect?: RoleMenuAccessWhereUniqueInput | RoleMenuAccessWhereUniqueInput[]
  }

  export type RoleUncheckedCreateNestedManyWithoutUsersInput = {
    create?: XOR<RoleCreateWithoutUsersInput, RoleUncheckedCreateWithoutUsersInput> | RoleCreateWithoutUsersInput[] | RoleUncheckedCreateWithoutUsersInput[]
    connectOrCreate?: RoleCreateOrConnectWithoutUsersInput | RoleCreateOrConnectWithoutUsersInput[]
    connect?: RoleWhereUniqueInput | RoleWhereUniqueInput[]
  }

  export type RoleUncheckedCreateNestedManyWithoutCreatedByUserInput = {
    create?: XOR<RoleCreateWithoutCreatedByUserInput, RoleUncheckedCreateWithoutCreatedByUserInput> | RoleCreateWithoutCreatedByUserInput[] | RoleUncheckedCreateWithoutCreatedByUserInput[]
    connectOrCreate?: RoleCreateOrConnectWithoutCreatedByUserInput | RoleCreateOrConnectWithoutCreatedByUserInput[]
    createMany?: RoleCreateManyCreatedByUserInputEnvelope
    connect?: RoleWhereUniqueInput | RoleWhereUniqueInput[]
  }

  export type RoleUncheckedCreateNestedManyWithoutUpdatedByUserInput = {
    create?: XOR<RoleCreateWithoutUpdatedByUserInput, RoleUncheckedCreateWithoutUpdatedByUserInput> | RoleCreateWithoutUpdatedByUserInput[] | RoleUncheckedCreateWithoutUpdatedByUserInput[]
    connectOrCreate?: RoleCreateOrConnectWithoutUpdatedByUserInput | RoleCreateOrConnectWithoutUpdatedByUserInput[]
    createMany?: RoleCreateManyUpdatedByUserInputEnvelope
    connect?: RoleWhereUniqueInput | RoleWhereUniqueInput[]
  }

  export type RoleUncheckedCreateNestedManyWithoutDeletedByUserInput = {
    create?: XOR<RoleCreateWithoutDeletedByUserInput, RoleUncheckedCreateWithoutDeletedByUserInput> | RoleCreateWithoutDeletedByUserInput[] | RoleUncheckedCreateWithoutDeletedByUserInput[]
    connectOrCreate?: RoleCreateOrConnectWithoutDeletedByUserInput | RoleCreateOrConnectWithoutDeletedByUserInput[]
    createMany?: RoleCreateManyDeletedByUserInputEnvelope
    connect?: RoleWhereUniqueInput | RoleWhereUniqueInput[]
  }

  export type MasterMenuUncheckedCreateNestedManyWithoutCreatedByUserInput = {
    create?: XOR<MasterMenuCreateWithoutCreatedByUserInput, MasterMenuUncheckedCreateWithoutCreatedByUserInput> | MasterMenuCreateWithoutCreatedByUserInput[] | MasterMenuUncheckedCreateWithoutCreatedByUserInput[]
    connectOrCreate?: MasterMenuCreateOrConnectWithoutCreatedByUserInput | MasterMenuCreateOrConnectWithoutCreatedByUserInput[]
    createMany?: MasterMenuCreateManyCreatedByUserInputEnvelope
    connect?: MasterMenuWhereUniqueInput | MasterMenuWhereUniqueInput[]
  }

  export type MasterMenuUncheckedCreateNestedManyWithoutUpdatedByUserInput = {
    create?: XOR<MasterMenuCreateWithoutUpdatedByUserInput, MasterMenuUncheckedCreateWithoutUpdatedByUserInput> | MasterMenuCreateWithoutUpdatedByUserInput[] | MasterMenuUncheckedCreateWithoutUpdatedByUserInput[]
    connectOrCreate?: MasterMenuCreateOrConnectWithoutUpdatedByUserInput | MasterMenuCreateOrConnectWithoutUpdatedByUserInput[]
    createMany?: MasterMenuCreateManyUpdatedByUserInputEnvelope
    connect?: MasterMenuWhereUniqueInput | MasterMenuWhereUniqueInput[]
  }

  export type MasterMenuUncheckedCreateNestedManyWithoutDeletedByUserInput = {
    create?: XOR<MasterMenuCreateWithoutDeletedByUserInput, MasterMenuUncheckedCreateWithoutDeletedByUserInput> | MasterMenuCreateWithoutDeletedByUserInput[] | MasterMenuUncheckedCreateWithoutDeletedByUserInput[]
    connectOrCreate?: MasterMenuCreateOrConnectWithoutDeletedByUserInput | MasterMenuCreateOrConnectWithoutDeletedByUserInput[]
    createMany?: MasterMenuCreateManyDeletedByUserInputEnvelope
    connect?: MasterMenuWhereUniqueInput | MasterMenuWhereUniqueInput[]
  }

  export type SubMenuUncheckedCreateNestedManyWithoutCreatedByUserInput = {
    create?: XOR<SubMenuCreateWithoutCreatedByUserInput, SubMenuUncheckedCreateWithoutCreatedByUserInput> | SubMenuCreateWithoutCreatedByUserInput[] | SubMenuUncheckedCreateWithoutCreatedByUserInput[]
    connectOrCreate?: SubMenuCreateOrConnectWithoutCreatedByUserInput | SubMenuCreateOrConnectWithoutCreatedByUserInput[]
    createMany?: SubMenuCreateManyCreatedByUserInputEnvelope
    connect?: SubMenuWhereUniqueInput | SubMenuWhereUniqueInput[]
  }

  export type SubMenuUncheckedCreateNestedManyWithoutUpdatedByUserInput = {
    create?: XOR<SubMenuCreateWithoutUpdatedByUserInput, SubMenuUncheckedCreateWithoutUpdatedByUserInput> | SubMenuCreateWithoutUpdatedByUserInput[] | SubMenuUncheckedCreateWithoutUpdatedByUserInput[]
    connectOrCreate?: SubMenuCreateOrConnectWithoutUpdatedByUserInput | SubMenuCreateOrConnectWithoutUpdatedByUserInput[]
    createMany?: SubMenuCreateManyUpdatedByUserInputEnvelope
    connect?: SubMenuWhereUniqueInput | SubMenuWhereUniqueInput[]
  }

  export type SubMenuUncheckedCreateNestedManyWithoutDeletedByUserInput = {
    create?: XOR<SubMenuCreateWithoutDeletedByUserInput, SubMenuUncheckedCreateWithoutDeletedByUserInput> | SubMenuCreateWithoutDeletedByUserInput[] | SubMenuUncheckedCreateWithoutDeletedByUserInput[]
    connectOrCreate?: SubMenuCreateOrConnectWithoutDeletedByUserInput | SubMenuCreateOrConnectWithoutDeletedByUserInput[]
    createMany?: SubMenuCreateManyDeletedByUserInputEnvelope
    connect?: SubMenuWhereUniqueInput | SubMenuWhereUniqueInput[]
  }

  export type RoleMenuAccessUncheckedCreateNestedManyWithoutCreatedByUserInput = {
    create?: XOR<RoleMenuAccessCreateWithoutCreatedByUserInput, RoleMenuAccessUncheckedCreateWithoutCreatedByUserInput> | RoleMenuAccessCreateWithoutCreatedByUserInput[] | RoleMenuAccessUncheckedCreateWithoutCreatedByUserInput[]
    connectOrCreate?: RoleMenuAccessCreateOrConnectWithoutCreatedByUserInput | RoleMenuAccessCreateOrConnectWithoutCreatedByUserInput[]
    createMany?: RoleMenuAccessCreateManyCreatedByUserInputEnvelope
    connect?: RoleMenuAccessWhereUniqueInput | RoleMenuAccessWhereUniqueInput[]
  }

  export type RoleMenuAccessUncheckedCreateNestedManyWithoutUpdatedByUserInput = {
    create?: XOR<RoleMenuAccessCreateWithoutUpdatedByUserInput, RoleMenuAccessUncheckedCreateWithoutUpdatedByUserInput> | RoleMenuAccessCreateWithoutUpdatedByUserInput[] | RoleMenuAccessUncheckedCreateWithoutUpdatedByUserInput[]
    connectOrCreate?: RoleMenuAccessCreateOrConnectWithoutUpdatedByUserInput | RoleMenuAccessCreateOrConnectWithoutUpdatedByUserInput[]
    createMany?: RoleMenuAccessCreateManyUpdatedByUserInputEnvelope
    connect?: RoleMenuAccessWhereUniqueInput | RoleMenuAccessWhereUniqueInput[]
  }

  export type RoleMenuAccessUncheckedCreateNestedManyWithoutDeletedByUserInput = {
    create?: XOR<RoleMenuAccessCreateWithoutDeletedByUserInput, RoleMenuAccessUncheckedCreateWithoutDeletedByUserInput> | RoleMenuAccessCreateWithoutDeletedByUserInput[] | RoleMenuAccessUncheckedCreateWithoutDeletedByUserInput[]
    connectOrCreate?: RoleMenuAccessCreateOrConnectWithoutDeletedByUserInput | RoleMenuAccessCreateOrConnectWithoutDeletedByUserInput[]
    createMany?: RoleMenuAccessCreateManyDeletedByUserInputEnvelope
    connect?: RoleMenuAccessWhereUniqueInput | RoleMenuAccessWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type RoleUpdateOneRequiredWithoutUserNestedInput = {
    create?: XOR<RoleCreateWithoutUserInput, RoleUncheckedCreateWithoutUserInput>
    connectOrCreate?: RoleCreateOrConnectWithoutUserInput
    upsert?: RoleUpsertWithoutUserInput
    connect?: RoleWhereUniqueInput
    update?: XOR<XOR<RoleUpdateToOneWithWhereWithoutUserInput, RoleUpdateWithoutUserInput>, RoleUncheckedUpdateWithoutUserInput>
  }

  export type RoleUpdateManyWithoutUsersNestedInput = {
    create?: XOR<RoleCreateWithoutUsersInput, RoleUncheckedCreateWithoutUsersInput> | RoleCreateWithoutUsersInput[] | RoleUncheckedCreateWithoutUsersInput[]
    connectOrCreate?: RoleCreateOrConnectWithoutUsersInput | RoleCreateOrConnectWithoutUsersInput[]
    upsert?: RoleUpsertWithWhereUniqueWithoutUsersInput | RoleUpsertWithWhereUniqueWithoutUsersInput[]
    set?: RoleWhereUniqueInput | RoleWhereUniqueInput[]
    disconnect?: RoleWhereUniqueInput | RoleWhereUniqueInput[]
    delete?: RoleWhereUniqueInput | RoleWhereUniqueInput[]
    connect?: RoleWhereUniqueInput | RoleWhereUniqueInput[]
    update?: RoleUpdateWithWhereUniqueWithoutUsersInput | RoleUpdateWithWhereUniqueWithoutUsersInput[]
    updateMany?: RoleUpdateManyWithWhereWithoutUsersInput | RoleUpdateManyWithWhereWithoutUsersInput[]
    deleteMany?: RoleScalarWhereInput | RoleScalarWhereInput[]
  }

  export type RoleUpdateManyWithoutCreatedByUserNestedInput = {
    create?: XOR<RoleCreateWithoutCreatedByUserInput, RoleUncheckedCreateWithoutCreatedByUserInput> | RoleCreateWithoutCreatedByUserInput[] | RoleUncheckedCreateWithoutCreatedByUserInput[]
    connectOrCreate?: RoleCreateOrConnectWithoutCreatedByUserInput | RoleCreateOrConnectWithoutCreatedByUserInput[]
    upsert?: RoleUpsertWithWhereUniqueWithoutCreatedByUserInput | RoleUpsertWithWhereUniqueWithoutCreatedByUserInput[]
    createMany?: RoleCreateManyCreatedByUserInputEnvelope
    set?: RoleWhereUniqueInput | RoleWhereUniqueInput[]
    disconnect?: RoleWhereUniqueInput | RoleWhereUniqueInput[]
    delete?: RoleWhereUniqueInput | RoleWhereUniqueInput[]
    connect?: RoleWhereUniqueInput | RoleWhereUniqueInput[]
    update?: RoleUpdateWithWhereUniqueWithoutCreatedByUserInput | RoleUpdateWithWhereUniqueWithoutCreatedByUserInput[]
    updateMany?: RoleUpdateManyWithWhereWithoutCreatedByUserInput | RoleUpdateManyWithWhereWithoutCreatedByUserInput[]
    deleteMany?: RoleScalarWhereInput | RoleScalarWhereInput[]
  }

  export type RoleUpdateManyWithoutUpdatedByUserNestedInput = {
    create?: XOR<RoleCreateWithoutUpdatedByUserInput, RoleUncheckedCreateWithoutUpdatedByUserInput> | RoleCreateWithoutUpdatedByUserInput[] | RoleUncheckedCreateWithoutUpdatedByUserInput[]
    connectOrCreate?: RoleCreateOrConnectWithoutUpdatedByUserInput | RoleCreateOrConnectWithoutUpdatedByUserInput[]
    upsert?: RoleUpsertWithWhereUniqueWithoutUpdatedByUserInput | RoleUpsertWithWhereUniqueWithoutUpdatedByUserInput[]
    createMany?: RoleCreateManyUpdatedByUserInputEnvelope
    set?: RoleWhereUniqueInput | RoleWhereUniqueInput[]
    disconnect?: RoleWhereUniqueInput | RoleWhereUniqueInput[]
    delete?: RoleWhereUniqueInput | RoleWhereUniqueInput[]
    connect?: RoleWhereUniqueInput | RoleWhereUniqueInput[]
    update?: RoleUpdateWithWhereUniqueWithoutUpdatedByUserInput | RoleUpdateWithWhereUniqueWithoutUpdatedByUserInput[]
    updateMany?: RoleUpdateManyWithWhereWithoutUpdatedByUserInput | RoleUpdateManyWithWhereWithoutUpdatedByUserInput[]
    deleteMany?: RoleScalarWhereInput | RoleScalarWhereInput[]
  }

  export type RoleUpdateManyWithoutDeletedByUserNestedInput = {
    create?: XOR<RoleCreateWithoutDeletedByUserInput, RoleUncheckedCreateWithoutDeletedByUserInput> | RoleCreateWithoutDeletedByUserInput[] | RoleUncheckedCreateWithoutDeletedByUserInput[]
    connectOrCreate?: RoleCreateOrConnectWithoutDeletedByUserInput | RoleCreateOrConnectWithoutDeletedByUserInput[]
    upsert?: RoleUpsertWithWhereUniqueWithoutDeletedByUserInput | RoleUpsertWithWhereUniqueWithoutDeletedByUserInput[]
    createMany?: RoleCreateManyDeletedByUserInputEnvelope
    set?: RoleWhereUniqueInput | RoleWhereUniqueInput[]
    disconnect?: RoleWhereUniqueInput | RoleWhereUniqueInput[]
    delete?: RoleWhereUniqueInput | RoleWhereUniqueInput[]
    connect?: RoleWhereUniqueInput | RoleWhereUniqueInput[]
    update?: RoleUpdateWithWhereUniqueWithoutDeletedByUserInput | RoleUpdateWithWhereUniqueWithoutDeletedByUserInput[]
    updateMany?: RoleUpdateManyWithWhereWithoutDeletedByUserInput | RoleUpdateManyWithWhereWithoutDeletedByUserInput[]
    deleteMany?: RoleScalarWhereInput | RoleScalarWhereInput[]
  }

  export type MasterMenuUpdateManyWithoutCreatedByUserNestedInput = {
    create?: XOR<MasterMenuCreateWithoutCreatedByUserInput, MasterMenuUncheckedCreateWithoutCreatedByUserInput> | MasterMenuCreateWithoutCreatedByUserInput[] | MasterMenuUncheckedCreateWithoutCreatedByUserInput[]
    connectOrCreate?: MasterMenuCreateOrConnectWithoutCreatedByUserInput | MasterMenuCreateOrConnectWithoutCreatedByUserInput[]
    upsert?: MasterMenuUpsertWithWhereUniqueWithoutCreatedByUserInput | MasterMenuUpsertWithWhereUniqueWithoutCreatedByUserInput[]
    createMany?: MasterMenuCreateManyCreatedByUserInputEnvelope
    set?: MasterMenuWhereUniqueInput | MasterMenuWhereUniqueInput[]
    disconnect?: MasterMenuWhereUniqueInput | MasterMenuWhereUniqueInput[]
    delete?: MasterMenuWhereUniqueInput | MasterMenuWhereUniqueInput[]
    connect?: MasterMenuWhereUniqueInput | MasterMenuWhereUniqueInput[]
    update?: MasterMenuUpdateWithWhereUniqueWithoutCreatedByUserInput | MasterMenuUpdateWithWhereUniqueWithoutCreatedByUserInput[]
    updateMany?: MasterMenuUpdateManyWithWhereWithoutCreatedByUserInput | MasterMenuUpdateManyWithWhereWithoutCreatedByUserInput[]
    deleteMany?: MasterMenuScalarWhereInput | MasterMenuScalarWhereInput[]
  }

  export type MasterMenuUpdateManyWithoutUpdatedByUserNestedInput = {
    create?: XOR<MasterMenuCreateWithoutUpdatedByUserInput, MasterMenuUncheckedCreateWithoutUpdatedByUserInput> | MasterMenuCreateWithoutUpdatedByUserInput[] | MasterMenuUncheckedCreateWithoutUpdatedByUserInput[]
    connectOrCreate?: MasterMenuCreateOrConnectWithoutUpdatedByUserInput | MasterMenuCreateOrConnectWithoutUpdatedByUserInput[]
    upsert?: MasterMenuUpsertWithWhereUniqueWithoutUpdatedByUserInput | MasterMenuUpsertWithWhereUniqueWithoutUpdatedByUserInput[]
    createMany?: MasterMenuCreateManyUpdatedByUserInputEnvelope
    set?: MasterMenuWhereUniqueInput | MasterMenuWhereUniqueInput[]
    disconnect?: MasterMenuWhereUniqueInput | MasterMenuWhereUniqueInput[]
    delete?: MasterMenuWhereUniqueInput | MasterMenuWhereUniqueInput[]
    connect?: MasterMenuWhereUniqueInput | MasterMenuWhereUniqueInput[]
    update?: MasterMenuUpdateWithWhereUniqueWithoutUpdatedByUserInput | MasterMenuUpdateWithWhereUniqueWithoutUpdatedByUserInput[]
    updateMany?: MasterMenuUpdateManyWithWhereWithoutUpdatedByUserInput | MasterMenuUpdateManyWithWhereWithoutUpdatedByUserInput[]
    deleteMany?: MasterMenuScalarWhereInput | MasterMenuScalarWhereInput[]
  }

  export type MasterMenuUpdateManyWithoutDeletedByUserNestedInput = {
    create?: XOR<MasterMenuCreateWithoutDeletedByUserInput, MasterMenuUncheckedCreateWithoutDeletedByUserInput> | MasterMenuCreateWithoutDeletedByUserInput[] | MasterMenuUncheckedCreateWithoutDeletedByUserInput[]
    connectOrCreate?: MasterMenuCreateOrConnectWithoutDeletedByUserInput | MasterMenuCreateOrConnectWithoutDeletedByUserInput[]
    upsert?: MasterMenuUpsertWithWhereUniqueWithoutDeletedByUserInput | MasterMenuUpsertWithWhereUniqueWithoutDeletedByUserInput[]
    createMany?: MasterMenuCreateManyDeletedByUserInputEnvelope
    set?: MasterMenuWhereUniqueInput | MasterMenuWhereUniqueInput[]
    disconnect?: MasterMenuWhereUniqueInput | MasterMenuWhereUniqueInput[]
    delete?: MasterMenuWhereUniqueInput | MasterMenuWhereUniqueInput[]
    connect?: MasterMenuWhereUniqueInput | MasterMenuWhereUniqueInput[]
    update?: MasterMenuUpdateWithWhereUniqueWithoutDeletedByUserInput | MasterMenuUpdateWithWhereUniqueWithoutDeletedByUserInput[]
    updateMany?: MasterMenuUpdateManyWithWhereWithoutDeletedByUserInput | MasterMenuUpdateManyWithWhereWithoutDeletedByUserInput[]
    deleteMany?: MasterMenuScalarWhereInput | MasterMenuScalarWhereInput[]
  }

  export type SubMenuUpdateManyWithoutCreatedByUserNestedInput = {
    create?: XOR<SubMenuCreateWithoutCreatedByUserInput, SubMenuUncheckedCreateWithoutCreatedByUserInput> | SubMenuCreateWithoutCreatedByUserInput[] | SubMenuUncheckedCreateWithoutCreatedByUserInput[]
    connectOrCreate?: SubMenuCreateOrConnectWithoutCreatedByUserInput | SubMenuCreateOrConnectWithoutCreatedByUserInput[]
    upsert?: SubMenuUpsertWithWhereUniqueWithoutCreatedByUserInput | SubMenuUpsertWithWhereUniqueWithoutCreatedByUserInput[]
    createMany?: SubMenuCreateManyCreatedByUserInputEnvelope
    set?: SubMenuWhereUniqueInput | SubMenuWhereUniqueInput[]
    disconnect?: SubMenuWhereUniqueInput | SubMenuWhereUniqueInput[]
    delete?: SubMenuWhereUniqueInput | SubMenuWhereUniqueInput[]
    connect?: SubMenuWhereUniqueInput | SubMenuWhereUniqueInput[]
    update?: SubMenuUpdateWithWhereUniqueWithoutCreatedByUserInput | SubMenuUpdateWithWhereUniqueWithoutCreatedByUserInput[]
    updateMany?: SubMenuUpdateManyWithWhereWithoutCreatedByUserInput | SubMenuUpdateManyWithWhereWithoutCreatedByUserInput[]
    deleteMany?: SubMenuScalarWhereInput | SubMenuScalarWhereInput[]
  }

  export type SubMenuUpdateManyWithoutUpdatedByUserNestedInput = {
    create?: XOR<SubMenuCreateWithoutUpdatedByUserInput, SubMenuUncheckedCreateWithoutUpdatedByUserInput> | SubMenuCreateWithoutUpdatedByUserInput[] | SubMenuUncheckedCreateWithoutUpdatedByUserInput[]
    connectOrCreate?: SubMenuCreateOrConnectWithoutUpdatedByUserInput | SubMenuCreateOrConnectWithoutUpdatedByUserInput[]
    upsert?: SubMenuUpsertWithWhereUniqueWithoutUpdatedByUserInput | SubMenuUpsertWithWhereUniqueWithoutUpdatedByUserInput[]
    createMany?: SubMenuCreateManyUpdatedByUserInputEnvelope
    set?: SubMenuWhereUniqueInput | SubMenuWhereUniqueInput[]
    disconnect?: SubMenuWhereUniqueInput | SubMenuWhereUniqueInput[]
    delete?: SubMenuWhereUniqueInput | SubMenuWhereUniqueInput[]
    connect?: SubMenuWhereUniqueInput | SubMenuWhereUniqueInput[]
    update?: SubMenuUpdateWithWhereUniqueWithoutUpdatedByUserInput | SubMenuUpdateWithWhereUniqueWithoutUpdatedByUserInput[]
    updateMany?: SubMenuUpdateManyWithWhereWithoutUpdatedByUserInput | SubMenuUpdateManyWithWhereWithoutUpdatedByUserInput[]
    deleteMany?: SubMenuScalarWhereInput | SubMenuScalarWhereInput[]
  }

  export type SubMenuUpdateManyWithoutDeletedByUserNestedInput = {
    create?: XOR<SubMenuCreateWithoutDeletedByUserInput, SubMenuUncheckedCreateWithoutDeletedByUserInput> | SubMenuCreateWithoutDeletedByUserInput[] | SubMenuUncheckedCreateWithoutDeletedByUserInput[]
    connectOrCreate?: SubMenuCreateOrConnectWithoutDeletedByUserInput | SubMenuCreateOrConnectWithoutDeletedByUserInput[]
    upsert?: SubMenuUpsertWithWhereUniqueWithoutDeletedByUserInput | SubMenuUpsertWithWhereUniqueWithoutDeletedByUserInput[]
    createMany?: SubMenuCreateManyDeletedByUserInputEnvelope
    set?: SubMenuWhereUniqueInput | SubMenuWhereUniqueInput[]
    disconnect?: SubMenuWhereUniqueInput | SubMenuWhereUniqueInput[]
    delete?: SubMenuWhereUniqueInput | SubMenuWhereUniqueInput[]
    connect?: SubMenuWhereUniqueInput | SubMenuWhereUniqueInput[]
    update?: SubMenuUpdateWithWhereUniqueWithoutDeletedByUserInput | SubMenuUpdateWithWhereUniqueWithoutDeletedByUserInput[]
    updateMany?: SubMenuUpdateManyWithWhereWithoutDeletedByUserInput | SubMenuUpdateManyWithWhereWithoutDeletedByUserInput[]
    deleteMany?: SubMenuScalarWhereInput | SubMenuScalarWhereInput[]
  }

  export type RoleMenuAccessUpdateManyWithoutCreatedByUserNestedInput = {
    create?: XOR<RoleMenuAccessCreateWithoutCreatedByUserInput, RoleMenuAccessUncheckedCreateWithoutCreatedByUserInput> | RoleMenuAccessCreateWithoutCreatedByUserInput[] | RoleMenuAccessUncheckedCreateWithoutCreatedByUserInput[]
    connectOrCreate?: RoleMenuAccessCreateOrConnectWithoutCreatedByUserInput | RoleMenuAccessCreateOrConnectWithoutCreatedByUserInput[]
    upsert?: RoleMenuAccessUpsertWithWhereUniqueWithoutCreatedByUserInput | RoleMenuAccessUpsertWithWhereUniqueWithoutCreatedByUserInput[]
    createMany?: RoleMenuAccessCreateManyCreatedByUserInputEnvelope
    set?: RoleMenuAccessWhereUniqueInput | RoleMenuAccessWhereUniqueInput[]
    disconnect?: RoleMenuAccessWhereUniqueInput | RoleMenuAccessWhereUniqueInput[]
    delete?: RoleMenuAccessWhereUniqueInput | RoleMenuAccessWhereUniqueInput[]
    connect?: RoleMenuAccessWhereUniqueInput | RoleMenuAccessWhereUniqueInput[]
    update?: RoleMenuAccessUpdateWithWhereUniqueWithoutCreatedByUserInput | RoleMenuAccessUpdateWithWhereUniqueWithoutCreatedByUserInput[]
    updateMany?: RoleMenuAccessUpdateManyWithWhereWithoutCreatedByUserInput | RoleMenuAccessUpdateManyWithWhereWithoutCreatedByUserInput[]
    deleteMany?: RoleMenuAccessScalarWhereInput | RoleMenuAccessScalarWhereInput[]
  }

  export type RoleMenuAccessUpdateManyWithoutUpdatedByUserNestedInput = {
    create?: XOR<RoleMenuAccessCreateWithoutUpdatedByUserInput, RoleMenuAccessUncheckedCreateWithoutUpdatedByUserInput> | RoleMenuAccessCreateWithoutUpdatedByUserInput[] | RoleMenuAccessUncheckedCreateWithoutUpdatedByUserInput[]
    connectOrCreate?: RoleMenuAccessCreateOrConnectWithoutUpdatedByUserInput | RoleMenuAccessCreateOrConnectWithoutUpdatedByUserInput[]
    upsert?: RoleMenuAccessUpsertWithWhereUniqueWithoutUpdatedByUserInput | RoleMenuAccessUpsertWithWhereUniqueWithoutUpdatedByUserInput[]
    createMany?: RoleMenuAccessCreateManyUpdatedByUserInputEnvelope
    set?: RoleMenuAccessWhereUniqueInput | RoleMenuAccessWhereUniqueInput[]
    disconnect?: RoleMenuAccessWhereUniqueInput | RoleMenuAccessWhereUniqueInput[]
    delete?: RoleMenuAccessWhereUniqueInput | RoleMenuAccessWhereUniqueInput[]
    connect?: RoleMenuAccessWhereUniqueInput | RoleMenuAccessWhereUniqueInput[]
    update?: RoleMenuAccessUpdateWithWhereUniqueWithoutUpdatedByUserInput | RoleMenuAccessUpdateWithWhereUniqueWithoutUpdatedByUserInput[]
    updateMany?: RoleMenuAccessUpdateManyWithWhereWithoutUpdatedByUserInput | RoleMenuAccessUpdateManyWithWhereWithoutUpdatedByUserInput[]
    deleteMany?: RoleMenuAccessScalarWhereInput | RoleMenuAccessScalarWhereInput[]
  }

  export type RoleMenuAccessUpdateManyWithoutDeletedByUserNestedInput = {
    create?: XOR<RoleMenuAccessCreateWithoutDeletedByUserInput, RoleMenuAccessUncheckedCreateWithoutDeletedByUserInput> | RoleMenuAccessCreateWithoutDeletedByUserInput[] | RoleMenuAccessUncheckedCreateWithoutDeletedByUserInput[]
    connectOrCreate?: RoleMenuAccessCreateOrConnectWithoutDeletedByUserInput | RoleMenuAccessCreateOrConnectWithoutDeletedByUserInput[]
    upsert?: RoleMenuAccessUpsertWithWhereUniqueWithoutDeletedByUserInput | RoleMenuAccessUpsertWithWhereUniqueWithoutDeletedByUserInput[]
    createMany?: RoleMenuAccessCreateManyDeletedByUserInputEnvelope
    set?: RoleMenuAccessWhereUniqueInput | RoleMenuAccessWhereUniqueInput[]
    disconnect?: RoleMenuAccessWhereUniqueInput | RoleMenuAccessWhereUniqueInput[]
    delete?: RoleMenuAccessWhereUniqueInput | RoleMenuAccessWhereUniqueInput[]
    connect?: RoleMenuAccessWhereUniqueInput | RoleMenuAccessWhereUniqueInput[]
    update?: RoleMenuAccessUpdateWithWhereUniqueWithoutDeletedByUserInput | RoleMenuAccessUpdateWithWhereUniqueWithoutDeletedByUserInput[]
    updateMany?: RoleMenuAccessUpdateManyWithWhereWithoutDeletedByUserInput | RoleMenuAccessUpdateManyWithWhereWithoutDeletedByUserInput[]
    deleteMany?: RoleMenuAccessScalarWhereInput | RoleMenuAccessScalarWhereInput[]
  }

  export type RoleUncheckedUpdateManyWithoutUsersNestedInput = {
    create?: XOR<RoleCreateWithoutUsersInput, RoleUncheckedCreateWithoutUsersInput> | RoleCreateWithoutUsersInput[] | RoleUncheckedCreateWithoutUsersInput[]
    connectOrCreate?: RoleCreateOrConnectWithoutUsersInput | RoleCreateOrConnectWithoutUsersInput[]
    upsert?: RoleUpsertWithWhereUniqueWithoutUsersInput | RoleUpsertWithWhereUniqueWithoutUsersInput[]
    set?: RoleWhereUniqueInput | RoleWhereUniqueInput[]
    disconnect?: RoleWhereUniqueInput | RoleWhereUniqueInput[]
    delete?: RoleWhereUniqueInput | RoleWhereUniqueInput[]
    connect?: RoleWhereUniqueInput | RoleWhereUniqueInput[]
    update?: RoleUpdateWithWhereUniqueWithoutUsersInput | RoleUpdateWithWhereUniqueWithoutUsersInput[]
    updateMany?: RoleUpdateManyWithWhereWithoutUsersInput | RoleUpdateManyWithWhereWithoutUsersInput[]
    deleteMany?: RoleScalarWhereInput | RoleScalarWhereInput[]
  }

  export type RoleUncheckedUpdateManyWithoutCreatedByUserNestedInput = {
    create?: XOR<RoleCreateWithoutCreatedByUserInput, RoleUncheckedCreateWithoutCreatedByUserInput> | RoleCreateWithoutCreatedByUserInput[] | RoleUncheckedCreateWithoutCreatedByUserInput[]
    connectOrCreate?: RoleCreateOrConnectWithoutCreatedByUserInput | RoleCreateOrConnectWithoutCreatedByUserInput[]
    upsert?: RoleUpsertWithWhereUniqueWithoutCreatedByUserInput | RoleUpsertWithWhereUniqueWithoutCreatedByUserInput[]
    createMany?: RoleCreateManyCreatedByUserInputEnvelope
    set?: RoleWhereUniqueInput | RoleWhereUniqueInput[]
    disconnect?: RoleWhereUniqueInput | RoleWhereUniqueInput[]
    delete?: RoleWhereUniqueInput | RoleWhereUniqueInput[]
    connect?: RoleWhereUniqueInput | RoleWhereUniqueInput[]
    update?: RoleUpdateWithWhereUniqueWithoutCreatedByUserInput | RoleUpdateWithWhereUniqueWithoutCreatedByUserInput[]
    updateMany?: RoleUpdateManyWithWhereWithoutCreatedByUserInput | RoleUpdateManyWithWhereWithoutCreatedByUserInput[]
    deleteMany?: RoleScalarWhereInput | RoleScalarWhereInput[]
  }

  export type RoleUncheckedUpdateManyWithoutUpdatedByUserNestedInput = {
    create?: XOR<RoleCreateWithoutUpdatedByUserInput, RoleUncheckedCreateWithoutUpdatedByUserInput> | RoleCreateWithoutUpdatedByUserInput[] | RoleUncheckedCreateWithoutUpdatedByUserInput[]
    connectOrCreate?: RoleCreateOrConnectWithoutUpdatedByUserInput | RoleCreateOrConnectWithoutUpdatedByUserInput[]
    upsert?: RoleUpsertWithWhereUniqueWithoutUpdatedByUserInput | RoleUpsertWithWhereUniqueWithoutUpdatedByUserInput[]
    createMany?: RoleCreateManyUpdatedByUserInputEnvelope
    set?: RoleWhereUniqueInput | RoleWhereUniqueInput[]
    disconnect?: RoleWhereUniqueInput | RoleWhereUniqueInput[]
    delete?: RoleWhereUniqueInput | RoleWhereUniqueInput[]
    connect?: RoleWhereUniqueInput | RoleWhereUniqueInput[]
    update?: RoleUpdateWithWhereUniqueWithoutUpdatedByUserInput | RoleUpdateWithWhereUniqueWithoutUpdatedByUserInput[]
    updateMany?: RoleUpdateManyWithWhereWithoutUpdatedByUserInput | RoleUpdateManyWithWhereWithoutUpdatedByUserInput[]
    deleteMany?: RoleScalarWhereInput | RoleScalarWhereInput[]
  }

  export type RoleUncheckedUpdateManyWithoutDeletedByUserNestedInput = {
    create?: XOR<RoleCreateWithoutDeletedByUserInput, RoleUncheckedCreateWithoutDeletedByUserInput> | RoleCreateWithoutDeletedByUserInput[] | RoleUncheckedCreateWithoutDeletedByUserInput[]
    connectOrCreate?: RoleCreateOrConnectWithoutDeletedByUserInput | RoleCreateOrConnectWithoutDeletedByUserInput[]
    upsert?: RoleUpsertWithWhereUniqueWithoutDeletedByUserInput | RoleUpsertWithWhereUniqueWithoutDeletedByUserInput[]
    createMany?: RoleCreateManyDeletedByUserInputEnvelope
    set?: RoleWhereUniqueInput | RoleWhereUniqueInput[]
    disconnect?: RoleWhereUniqueInput | RoleWhereUniqueInput[]
    delete?: RoleWhereUniqueInput | RoleWhereUniqueInput[]
    connect?: RoleWhereUniqueInput | RoleWhereUniqueInput[]
    update?: RoleUpdateWithWhereUniqueWithoutDeletedByUserInput | RoleUpdateWithWhereUniqueWithoutDeletedByUserInput[]
    updateMany?: RoleUpdateManyWithWhereWithoutDeletedByUserInput | RoleUpdateManyWithWhereWithoutDeletedByUserInput[]
    deleteMany?: RoleScalarWhereInput | RoleScalarWhereInput[]
  }

  export type MasterMenuUncheckedUpdateManyWithoutCreatedByUserNestedInput = {
    create?: XOR<MasterMenuCreateWithoutCreatedByUserInput, MasterMenuUncheckedCreateWithoutCreatedByUserInput> | MasterMenuCreateWithoutCreatedByUserInput[] | MasterMenuUncheckedCreateWithoutCreatedByUserInput[]
    connectOrCreate?: MasterMenuCreateOrConnectWithoutCreatedByUserInput | MasterMenuCreateOrConnectWithoutCreatedByUserInput[]
    upsert?: MasterMenuUpsertWithWhereUniqueWithoutCreatedByUserInput | MasterMenuUpsertWithWhereUniqueWithoutCreatedByUserInput[]
    createMany?: MasterMenuCreateManyCreatedByUserInputEnvelope
    set?: MasterMenuWhereUniqueInput | MasterMenuWhereUniqueInput[]
    disconnect?: MasterMenuWhereUniqueInput | MasterMenuWhereUniqueInput[]
    delete?: MasterMenuWhereUniqueInput | MasterMenuWhereUniqueInput[]
    connect?: MasterMenuWhereUniqueInput | MasterMenuWhereUniqueInput[]
    update?: MasterMenuUpdateWithWhereUniqueWithoutCreatedByUserInput | MasterMenuUpdateWithWhereUniqueWithoutCreatedByUserInput[]
    updateMany?: MasterMenuUpdateManyWithWhereWithoutCreatedByUserInput | MasterMenuUpdateManyWithWhereWithoutCreatedByUserInput[]
    deleteMany?: MasterMenuScalarWhereInput | MasterMenuScalarWhereInput[]
  }

  export type MasterMenuUncheckedUpdateManyWithoutUpdatedByUserNestedInput = {
    create?: XOR<MasterMenuCreateWithoutUpdatedByUserInput, MasterMenuUncheckedCreateWithoutUpdatedByUserInput> | MasterMenuCreateWithoutUpdatedByUserInput[] | MasterMenuUncheckedCreateWithoutUpdatedByUserInput[]
    connectOrCreate?: MasterMenuCreateOrConnectWithoutUpdatedByUserInput | MasterMenuCreateOrConnectWithoutUpdatedByUserInput[]
    upsert?: MasterMenuUpsertWithWhereUniqueWithoutUpdatedByUserInput | MasterMenuUpsertWithWhereUniqueWithoutUpdatedByUserInput[]
    createMany?: MasterMenuCreateManyUpdatedByUserInputEnvelope
    set?: MasterMenuWhereUniqueInput | MasterMenuWhereUniqueInput[]
    disconnect?: MasterMenuWhereUniqueInput | MasterMenuWhereUniqueInput[]
    delete?: MasterMenuWhereUniqueInput | MasterMenuWhereUniqueInput[]
    connect?: MasterMenuWhereUniqueInput | MasterMenuWhereUniqueInput[]
    update?: MasterMenuUpdateWithWhereUniqueWithoutUpdatedByUserInput | MasterMenuUpdateWithWhereUniqueWithoutUpdatedByUserInput[]
    updateMany?: MasterMenuUpdateManyWithWhereWithoutUpdatedByUserInput | MasterMenuUpdateManyWithWhereWithoutUpdatedByUserInput[]
    deleteMany?: MasterMenuScalarWhereInput | MasterMenuScalarWhereInput[]
  }

  export type MasterMenuUncheckedUpdateManyWithoutDeletedByUserNestedInput = {
    create?: XOR<MasterMenuCreateWithoutDeletedByUserInput, MasterMenuUncheckedCreateWithoutDeletedByUserInput> | MasterMenuCreateWithoutDeletedByUserInput[] | MasterMenuUncheckedCreateWithoutDeletedByUserInput[]
    connectOrCreate?: MasterMenuCreateOrConnectWithoutDeletedByUserInput | MasterMenuCreateOrConnectWithoutDeletedByUserInput[]
    upsert?: MasterMenuUpsertWithWhereUniqueWithoutDeletedByUserInput | MasterMenuUpsertWithWhereUniqueWithoutDeletedByUserInput[]
    createMany?: MasterMenuCreateManyDeletedByUserInputEnvelope
    set?: MasterMenuWhereUniqueInput | MasterMenuWhereUniqueInput[]
    disconnect?: MasterMenuWhereUniqueInput | MasterMenuWhereUniqueInput[]
    delete?: MasterMenuWhereUniqueInput | MasterMenuWhereUniqueInput[]
    connect?: MasterMenuWhereUniqueInput | MasterMenuWhereUniqueInput[]
    update?: MasterMenuUpdateWithWhereUniqueWithoutDeletedByUserInput | MasterMenuUpdateWithWhereUniqueWithoutDeletedByUserInput[]
    updateMany?: MasterMenuUpdateManyWithWhereWithoutDeletedByUserInput | MasterMenuUpdateManyWithWhereWithoutDeletedByUserInput[]
    deleteMany?: MasterMenuScalarWhereInput | MasterMenuScalarWhereInput[]
  }

  export type SubMenuUncheckedUpdateManyWithoutCreatedByUserNestedInput = {
    create?: XOR<SubMenuCreateWithoutCreatedByUserInput, SubMenuUncheckedCreateWithoutCreatedByUserInput> | SubMenuCreateWithoutCreatedByUserInput[] | SubMenuUncheckedCreateWithoutCreatedByUserInput[]
    connectOrCreate?: SubMenuCreateOrConnectWithoutCreatedByUserInput | SubMenuCreateOrConnectWithoutCreatedByUserInput[]
    upsert?: SubMenuUpsertWithWhereUniqueWithoutCreatedByUserInput | SubMenuUpsertWithWhereUniqueWithoutCreatedByUserInput[]
    createMany?: SubMenuCreateManyCreatedByUserInputEnvelope
    set?: SubMenuWhereUniqueInput | SubMenuWhereUniqueInput[]
    disconnect?: SubMenuWhereUniqueInput | SubMenuWhereUniqueInput[]
    delete?: SubMenuWhereUniqueInput | SubMenuWhereUniqueInput[]
    connect?: SubMenuWhereUniqueInput | SubMenuWhereUniqueInput[]
    update?: SubMenuUpdateWithWhereUniqueWithoutCreatedByUserInput | SubMenuUpdateWithWhereUniqueWithoutCreatedByUserInput[]
    updateMany?: SubMenuUpdateManyWithWhereWithoutCreatedByUserInput | SubMenuUpdateManyWithWhereWithoutCreatedByUserInput[]
    deleteMany?: SubMenuScalarWhereInput | SubMenuScalarWhereInput[]
  }

  export type SubMenuUncheckedUpdateManyWithoutUpdatedByUserNestedInput = {
    create?: XOR<SubMenuCreateWithoutUpdatedByUserInput, SubMenuUncheckedCreateWithoutUpdatedByUserInput> | SubMenuCreateWithoutUpdatedByUserInput[] | SubMenuUncheckedCreateWithoutUpdatedByUserInput[]
    connectOrCreate?: SubMenuCreateOrConnectWithoutUpdatedByUserInput | SubMenuCreateOrConnectWithoutUpdatedByUserInput[]
    upsert?: SubMenuUpsertWithWhereUniqueWithoutUpdatedByUserInput | SubMenuUpsertWithWhereUniqueWithoutUpdatedByUserInput[]
    createMany?: SubMenuCreateManyUpdatedByUserInputEnvelope
    set?: SubMenuWhereUniqueInput | SubMenuWhereUniqueInput[]
    disconnect?: SubMenuWhereUniqueInput | SubMenuWhereUniqueInput[]
    delete?: SubMenuWhereUniqueInput | SubMenuWhereUniqueInput[]
    connect?: SubMenuWhereUniqueInput | SubMenuWhereUniqueInput[]
    update?: SubMenuUpdateWithWhereUniqueWithoutUpdatedByUserInput | SubMenuUpdateWithWhereUniqueWithoutUpdatedByUserInput[]
    updateMany?: SubMenuUpdateManyWithWhereWithoutUpdatedByUserInput | SubMenuUpdateManyWithWhereWithoutUpdatedByUserInput[]
    deleteMany?: SubMenuScalarWhereInput | SubMenuScalarWhereInput[]
  }

  export type SubMenuUncheckedUpdateManyWithoutDeletedByUserNestedInput = {
    create?: XOR<SubMenuCreateWithoutDeletedByUserInput, SubMenuUncheckedCreateWithoutDeletedByUserInput> | SubMenuCreateWithoutDeletedByUserInput[] | SubMenuUncheckedCreateWithoutDeletedByUserInput[]
    connectOrCreate?: SubMenuCreateOrConnectWithoutDeletedByUserInput | SubMenuCreateOrConnectWithoutDeletedByUserInput[]
    upsert?: SubMenuUpsertWithWhereUniqueWithoutDeletedByUserInput | SubMenuUpsertWithWhereUniqueWithoutDeletedByUserInput[]
    createMany?: SubMenuCreateManyDeletedByUserInputEnvelope
    set?: SubMenuWhereUniqueInput | SubMenuWhereUniqueInput[]
    disconnect?: SubMenuWhereUniqueInput | SubMenuWhereUniqueInput[]
    delete?: SubMenuWhereUniqueInput | SubMenuWhereUniqueInput[]
    connect?: SubMenuWhereUniqueInput | SubMenuWhereUniqueInput[]
    update?: SubMenuUpdateWithWhereUniqueWithoutDeletedByUserInput | SubMenuUpdateWithWhereUniqueWithoutDeletedByUserInput[]
    updateMany?: SubMenuUpdateManyWithWhereWithoutDeletedByUserInput | SubMenuUpdateManyWithWhereWithoutDeletedByUserInput[]
    deleteMany?: SubMenuScalarWhereInput | SubMenuScalarWhereInput[]
  }

  export type RoleMenuAccessUncheckedUpdateManyWithoutCreatedByUserNestedInput = {
    create?: XOR<RoleMenuAccessCreateWithoutCreatedByUserInput, RoleMenuAccessUncheckedCreateWithoutCreatedByUserInput> | RoleMenuAccessCreateWithoutCreatedByUserInput[] | RoleMenuAccessUncheckedCreateWithoutCreatedByUserInput[]
    connectOrCreate?: RoleMenuAccessCreateOrConnectWithoutCreatedByUserInput | RoleMenuAccessCreateOrConnectWithoutCreatedByUserInput[]
    upsert?: RoleMenuAccessUpsertWithWhereUniqueWithoutCreatedByUserInput | RoleMenuAccessUpsertWithWhereUniqueWithoutCreatedByUserInput[]
    createMany?: RoleMenuAccessCreateManyCreatedByUserInputEnvelope
    set?: RoleMenuAccessWhereUniqueInput | RoleMenuAccessWhereUniqueInput[]
    disconnect?: RoleMenuAccessWhereUniqueInput | RoleMenuAccessWhereUniqueInput[]
    delete?: RoleMenuAccessWhereUniqueInput | RoleMenuAccessWhereUniqueInput[]
    connect?: RoleMenuAccessWhereUniqueInput | RoleMenuAccessWhereUniqueInput[]
    update?: RoleMenuAccessUpdateWithWhereUniqueWithoutCreatedByUserInput | RoleMenuAccessUpdateWithWhereUniqueWithoutCreatedByUserInput[]
    updateMany?: RoleMenuAccessUpdateManyWithWhereWithoutCreatedByUserInput | RoleMenuAccessUpdateManyWithWhereWithoutCreatedByUserInput[]
    deleteMany?: RoleMenuAccessScalarWhereInput | RoleMenuAccessScalarWhereInput[]
  }

  export type RoleMenuAccessUncheckedUpdateManyWithoutUpdatedByUserNestedInput = {
    create?: XOR<RoleMenuAccessCreateWithoutUpdatedByUserInput, RoleMenuAccessUncheckedCreateWithoutUpdatedByUserInput> | RoleMenuAccessCreateWithoutUpdatedByUserInput[] | RoleMenuAccessUncheckedCreateWithoutUpdatedByUserInput[]
    connectOrCreate?: RoleMenuAccessCreateOrConnectWithoutUpdatedByUserInput | RoleMenuAccessCreateOrConnectWithoutUpdatedByUserInput[]
    upsert?: RoleMenuAccessUpsertWithWhereUniqueWithoutUpdatedByUserInput | RoleMenuAccessUpsertWithWhereUniqueWithoutUpdatedByUserInput[]
    createMany?: RoleMenuAccessCreateManyUpdatedByUserInputEnvelope
    set?: RoleMenuAccessWhereUniqueInput | RoleMenuAccessWhereUniqueInput[]
    disconnect?: RoleMenuAccessWhereUniqueInput | RoleMenuAccessWhereUniqueInput[]
    delete?: RoleMenuAccessWhereUniqueInput | RoleMenuAccessWhereUniqueInput[]
    connect?: RoleMenuAccessWhereUniqueInput | RoleMenuAccessWhereUniqueInput[]
    update?: RoleMenuAccessUpdateWithWhereUniqueWithoutUpdatedByUserInput | RoleMenuAccessUpdateWithWhereUniqueWithoutUpdatedByUserInput[]
    updateMany?: RoleMenuAccessUpdateManyWithWhereWithoutUpdatedByUserInput | RoleMenuAccessUpdateManyWithWhereWithoutUpdatedByUserInput[]
    deleteMany?: RoleMenuAccessScalarWhereInput | RoleMenuAccessScalarWhereInput[]
  }

  export type RoleMenuAccessUncheckedUpdateManyWithoutDeletedByUserNestedInput = {
    create?: XOR<RoleMenuAccessCreateWithoutDeletedByUserInput, RoleMenuAccessUncheckedCreateWithoutDeletedByUserInput> | RoleMenuAccessCreateWithoutDeletedByUserInput[] | RoleMenuAccessUncheckedCreateWithoutDeletedByUserInput[]
    connectOrCreate?: RoleMenuAccessCreateOrConnectWithoutDeletedByUserInput | RoleMenuAccessCreateOrConnectWithoutDeletedByUserInput[]
    upsert?: RoleMenuAccessUpsertWithWhereUniqueWithoutDeletedByUserInput | RoleMenuAccessUpsertWithWhereUniqueWithoutDeletedByUserInput[]
    createMany?: RoleMenuAccessCreateManyDeletedByUserInputEnvelope
    set?: RoleMenuAccessWhereUniqueInput | RoleMenuAccessWhereUniqueInput[]
    disconnect?: RoleMenuAccessWhereUniqueInput | RoleMenuAccessWhereUniqueInput[]
    delete?: RoleMenuAccessWhereUniqueInput | RoleMenuAccessWhereUniqueInput[]
    connect?: RoleMenuAccessWhereUniqueInput | RoleMenuAccessWhereUniqueInput[]
    update?: RoleMenuAccessUpdateWithWhereUniqueWithoutDeletedByUserInput | RoleMenuAccessUpdateWithWhereUniqueWithoutDeletedByUserInput[]
    updateMany?: RoleMenuAccessUpdateManyWithWhereWithoutDeletedByUserInput | RoleMenuAccessUpdateManyWithWhereWithoutDeletedByUserInput[]
    deleteMany?: RoleMenuAccessScalarWhereInput | RoleMenuAccessScalarWhereInput[]
  }

  export type UserCreateNestedManyWithoutRolesInput = {
    create?: XOR<UserCreateWithoutRolesInput, UserUncheckedCreateWithoutRolesInput> | UserCreateWithoutRolesInput[] | UserUncheckedCreateWithoutRolesInput[]
    connectOrCreate?: UserCreateOrConnectWithoutRolesInput | UserCreateOrConnectWithoutRolesInput[]
    connect?: UserWhereUniqueInput | UserWhereUniqueInput[]
  }

  export type UserCreateNestedOneWithoutCreatedRolesInput = {
    create?: XOR<UserCreateWithoutCreatedRolesInput, UserUncheckedCreateWithoutCreatedRolesInput>
    connectOrCreate?: UserCreateOrConnectWithoutCreatedRolesInput
    connect?: UserWhereUniqueInput
  }

  export type UserCreateNestedOneWithoutUpdatedRolesInput = {
    create?: XOR<UserCreateWithoutUpdatedRolesInput, UserUncheckedCreateWithoutUpdatedRolesInput>
    connectOrCreate?: UserCreateOrConnectWithoutUpdatedRolesInput
    connect?: UserWhereUniqueInput
  }

  export type UserCreateNestedOneWithoutDeletedRolesInput = {
    create?: XOR<UserCreateWithoutDeletedRolesInput, UserUncheckedCreateWithoutDeletedRolesInput>
    connectOrCreate?: UserCreateOrConnectWithoutDeletedRolesInput
    connect?: UserWhereUniqueInput
  }

  export type UserCreateNestedManyWithoutRoleInput = {
    create?: XOR<UserCreateWithoutRoleInput, UserUncheckedCreateWithoutRoleInput> | UserCreateWithoutRoleInput[] | UserUncheckedCreateWithoutRoleInput[]
    connectOrCreate?: UserCreateOrConnectWithoutRoleInput | UserCreateOrConnectWithoutRoleInput[]
    createMany?: UserCreateManyRoleInputEnvelope
    connect?: UserWhereUniqueInput | UserWhereUniqueInput[]
  }

  export type RoleMenuAccessCreateNestedManyWithoutRoleInput = {
    create?: XOR<RoleMenuAccessCreateWithoutRoleInput, RoleMenuAccessUncheckedCreateWithoutRoleInput> | RoleMenuAccessCreateWithoutRoleInput[] | RoleMenuAccessUncheckedCreateWithoutRoleInput[]
    connectOrCreate?: RoleMenuAccessCreateOrConnectWithoutRoleInput | RoleMenuAccessCreateOrConnectWithoutRoleInput[]
    createMany?: RoleMenuAccessCreateManyRoleInputEnvelope
    connect?: RoleMenuAccessWhereUniqueInput | RoleMenuAccessWhereUniqueInput[]
  }

  export type UserUncheckedCreateNestedManyWithoutRolesInput = {
    create?: XOR<UserCreateWithoutRolesInput, UserUncheckedCreateWithoutRolesInput> | UserCreateWithoutRolesInput[] | UserUncheckedCreateWithoutRolesInput[]
    connectOrCreate?: UserCreateOrConnectWithoutRolesInput | UserCreateOrConnectWithoutRolesInput[]
    connect?: UserWhereUniqueInput | UserWhereUniqueInput[]
  }

  export type UserUncheckedCreateNestedManyWithoutRoleInput = {
    create?: XOR<UserCreateWithoutRoleInput, UserUncheckedCreateWithoutRoleInput> | UserCreateWithoutRoleInput[] | UserUncheckedCreateWithoutRoleInput[]
    connectOrCreate?: UserCreateOrConnectWithoutRoleInput | UserCreateOrConnectWithoutRoleInput[]
    createMany?: UserCreateManyRoleInputEnvelope
    connect?: UserWhereUniqueInput | UserWhereUniqueInput[]
  }

  export type RoleMenuAccessUncheckedCreateNestedManyWithoutRoleInput = {
    create?: XOR<RoleMenuAccessCreateWithoutRoleInput, RoleMenuAccessUncheckedCreateWithoutRoleInput> | RoleMenuAccessCreateWithoutRoleInput[] | RoleMenuAccessUncheckedCreateWithoutRoleInput[]
    connectOrCreate?: RoleMenuAccessCreateOrConnectWithoutRoleInput | RoleMenuAccessCreateOrConnectWithoutRoleInput[]
    createMany?: RoleMenuAccessCreateManyRoleInputEnvelope
    connect?: RoleMenuAccessWhereUniqueInput | RoleMenuAccessWhereUniqueInput[]
  }

  export type UserUpdateManyWithoutRolesNestedInput = {
    create?: XOR<UserCreateWithoutRolesInput, UserUncheckedCreateWithoutRolesInput> | UserCreateWithoutRolesInput[] | UserUncheckedCreateWithoutRolesInput[]
    connectOrCreate?: UserCreateOrConnectWithoutRolesInput | UserCreateOrConnectWithoutRolesInput[]
    upsert?: UserUpsertWithWhereUniqueWithoutRolesInput | UserUpsertWithWhereUniqueWithoutRolesInput[]
    set?: UserWhereUniqueInput | UserWhereUniqueInput[]
    disconnect?: UserWhereUniqueInput | UserWhereUniqueInput[]
    delete?: UserWhereUniqueInput | UserWhereUniqueInput[]
    connect?: UserWhereUniqueInput | UserWhereUniqueInput[]
    update?: UserUpdateWithWhereUniqueWithoutRolesInput | UserUpdateWithWhereUniqueWithoutRolesInput[]
    updateMany?: UserUpdateManyWithWhereWithoutRolesInput | UserUpdateManyWithWhereWithoutRolesInput[]
    deleteMany?: UserScalarWhereInput | UserScalarWhereInput[]
  }

  export type UserUpdateOneWithoutCreatedRolesNestedInput = {
    create?: XOR<UserCreateWithoutCreatedRolesInput, UserUncheckedCreateWithoutCreatedRolesInput>
    connectOrCreate?: UserCreateOrConnectWithoutCreatedRolesInput
    upsert?: UserUpsertWithoutCreatedRolesInput
    disconnect?: UserWhereInput | boolean
    delete?: UserWhereInput | boolean
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutCreatedRolesInput, UserUpdateWithoutCreatedRolesInput>, UserUncheckedUpdateWithoutCreatedRolesInput>
  }

  export type UserUpdateOneWithoutUpdatedRolesNestedInput = {
    create?: XOR<UserCreateWithoutUpdatedRolesInput, UserUncheckedCreateWithoutUpdatedRolesInput>
    connectOrCreate?: UserCreateOrConnectWithoutUpdatedRolesInput
    upsert?: UserUpsertWithoutUpdatedRolesInput
    disconnect?: UserWhereInput | boolean
    delete?: UserWhereInput | boolean
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutUpdatedRolesInput, UserUpdateWithoutUpdatedRolesInput>, UserUncheckedUpdateWithoutUpdatedRolesInput>
  }

  export type UserUpdateOneWithoutDeletedRolesNestedInput = {
    create?: XOR<UserCreateWithoutDeletedRolesInput, UserUncheckedCreateWithoutDeletedRolesInput>
    connectOrCreate?: UserCreateOrConnectWithoutDeletedRolesInput
    upsert?: UserUpsertWithoutDeletedRolesInput
    disconnect?: UserWhereInput | boolean
    delete?: UserWhereInput | boolean
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutDeletedRolesInput, UserUpdateWithoutDeletedRolesInput>, UserUncheckedUpdateWithoutDeletedRolesInput>
  }

  export type UserUpdateManyWithoutRoleNestedInput = {
    create?: XOR<UserCreateWithoutRoleInput, UserUncheckedCreateWithoutRoleInput> | UserCreateWithoutRoleInput[] | UserUncheckedCreateWithoutRoleInput[]
    connectOrCreate?: UserCreateOrConnectWithoutRoleInput | UserCreateOrConnectWithoutRoleInput[]
    upsert?: UserUpsertWithWhereUniqueWithoutRoleInput | UserUpsertWithWhereUniqueWithoutRoleInput[]
    createMany?: UserCreateManyRoleInputEnvelope
    set?: UserWhereUniqueInput | UserWhereUniqueInput[]
    disconnect?: UserWhereUniqueInput | UserWhereUniqueInput[]
    delete?: UserWhereUniqueInput | UserWhereUniqueInput[]
    connect?: UserWhereUniqueInput | UserWhereUniqueInput[]
    update?: UserUpdateWithWhereUniqueWithoutRoleInput | UserUpdateWithWhereUniqueWithoutRoleInput[]
    updateMany?: UserUpdateManyWithWhereWithoutRoleInput | UserUpdateManyWithWhereWithoutRoleInput[]
    deleteMany?: UserScalarWhereInput | UserScalarWhereInput[]
  }

  export type RoleMenuAccessUpdateManyWithoutRoleNestedInput = {
    create?: XOR<RoleMenuAccessCreateWithoutRoleInput, RoleMenuAccessUncheckedCreateWithoutRoleInput> | RoleMenuAccessCreateWithoutRoleInput[] | RoleMenuAccessUncheckedCreateWithoutRoleInput[]
    connectOrCreate?: RoleMenuAccessCreateOrConnectWithoutRoleInput | RoleMenuAccessCreateOrConnectWithoutRoleInput[]
    upsert?: RoleMenuAccessUpsertWithWhereUniqueWithoutRoleInput | RoleMenuAccessUpsertWithWhereUniqueWithoutRoleInput[]
    createMany?: RoleMenuAccessCreateManyRoleInputEnvelope
    set?: RoleMenuAccessWhereUniqueInput | RoleMenuAccessWhereUniqueInput[]
    disconnect?: RoleMenuAccessWhereUniqueInput | RoleMenuAccessWhereUniqueInput[]
    delete?: RoleMenuAccessWhereUniqueInput | RoleMenuAccessWhereUniqueInput[]
    connect?: RoleMenuAccessWhereUniqueInput | RoleMenuAccessWhereUniqueInput[]
    update?: RoleMenuAccessUpdateWithWhereUniqueWithoutRoleInput | RoleMenuAccessUpdateWithWhereUniqueWithoutRoleInput[]
    updateMany?: RoleMenuAccessUpdateManyWithWhereWithoutRoleInput | RoleMenuAccessUpdateManyWithWhereWithoutRoleInput[]
    deleteMany?: RoleMenuAccessScalarWhereInput | RoleMenuAccessScalarWhereInput[]
  }

  export type NullableIntFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type UserUncheckedUpdateManyWithoutRolesNestedInput = {
    create?: XOR<UserCreateWithoutRolesInput, UserUncheckedCreateWithoutRolesInput> | UserCreateWithoutRolesInput[] | UserUncheckedCreateWithoutRolesInput[]
    connectOrCreate?: UserCreateOrConnectWithoutRolesInput | UserCreateOrConnectWithoutRolesInput[]
    upsert?: UserUpsertWithWhereUniqueWithoutRolesInput | UserUpsertWithWhereUniqueWithoutRolesInput[]
    set?: UserWhereUniqueInput | UserWhereUniqueInput[]
    disconnect?: UserWhereUniqueInput | UserWhereUniqueInput[]
    delete?: UserWhereUniqueInput | UserWhereUniqueInput[]
    connect?: UserWhereUniqueInput | UserWhereUniqueInput[]
    update?: UserUpdateWithWhereUniqueWithoutRolesInput | UserUpdateWithWhereUniqueWithoutRolesInput[]
    updateMany?: UserUpdateManyWithWhereWithoutRolesInput | UserUpdateManyWithWhereWithoutRolesInput[]
    deleteMany?: UserScalarWhereInput | UserScalarWhereInput[]
  }

  export type UserUncheckedUpdateManyWithoutRoleNestedInput = {
    create?: XOR<UserCreateWithoutRoleInput, UserUncheckedCreateWithoutRoleInput> | UserCreateWithoutRoleInput[] | UserUncheckedCreateWithoutRoleInput[]
    connectOrCreate?: UserCreateOrConnectWithoutRoleInput | UserCreateOrConnectWithoutRoleInput[]
    upsert?: UserUpsertWithWhereUniqueWithoutRoleInput | UserUpsertWithWhereUniqueWithoutRoleInput[]
    createMany?: UserCreateManyRoleInputEnvelope
    set?: UserWhereUniqueInput | UserWhereUniqueInput[]
    disconnect?: UserWhereUniqueInput | UserWhereUniqueInput[]
    delete?: UserWhereUniqueInput | UserWhereUniqueInput[]
    connect?: UserWhereUniqueInput | UserWhereUniqueInput[]
    update?: UserUpdateWithWhereUniqueWithoutRoleInput | UserUpdateWithWhereUniqueWithoutRoleInput[]
    updateMany?: UserUpdateManyWithWhereWithoutRoleInput | UserUpdateManyWithWhereWithoutRoleInput[]
    deleteMany?: UserScalarWhereInput | UserScalarWhereInput[]
  }

  export type RoleMenuAccessUncheckedUpdateManyWithoutRoleNestedInput = {
    create?: XOR<RoleMenuAccessCreateWithoutRoleInput, RoleMenuAccessUncheckedCreateWithoutRoleInput> | RoleMenuAccessCreateWithoutRoleInput[] | RoleMenuAccessUncheckedCreateWithoutRoleInput[]
    connectOrCreate?: RoleMenuAccessCreateOrConnectWithoutRoleInput | RoleMenuAccessCreateOrConnectWithoutRoleInput[]
    upsert?: RoleMenuAccessUpsertWithWhereUniqueWithoutRoleInput | RoleMenuAccessUpsertWithWhereUniqueWithoutRoleInput[]
    createMany?: RoleMenuAccessCreateManyRoleInputEnvelope
    set?: RoleMenuAccessWhereUniqueInput | RoleMenuAccessWhereUniqueInput[]
    disconnect?: RoleMenuAccessWhereUniqueInput | RoleMenuAccessWhereUniqueInput[]
    delete?: RoleMenuAccessWhereUniqueInput | RoleMenuAccessWhereUniqueInput[]
    connect?: RoleMenuAccessWhereUniqueInput | RoleMenuAccessWhereUniqueInput[]
    update?: RoleMenuAccessUpdateWithWhereUniqueWithoutRoleInput | RoleMenuAccessUpdateWithWhereUniqueWithoutRoleInput[]
    updateMany?: RoleMenuAccessUpdateManyWithWhereWithoutRoleInput | RoleMenuAccessUpdateManyWithWhereWithoutRoleInput[]
    deleteMany?: RoleMenuAccessScalarWhereInput | RoleMenuAccessScalarWhereInput[]
  }

  export type SubMenuCreateNestedManyWithoutMasterMenuInput = {
    create?: XOR<SubMenuCreateWithoutMasterMenuInput, SubMenuUncheckedCreateWithoutMasterMenuInput> | SubMenuCreateWithoutMasterMenuInput[] | SubMenuUncheckedCreateWithoutMasterMenuInput[]
    connectOrCreate?: SubMenuCreateOrConnectWithoutMasterMenuInput | SubMenuCreateOrConnectWithoutMasterMenuInput[]
    createMany?: SubMenuCreateManyMasterMenuInputEnvelope
    connect?: SubMenuWhereUniqueInput | SubMenuWhereUniqueInput[]
  }

  export type UserCreateNestedOneWithoutCreatedMenusInput = {
    create?: XOR<UserCreateWithoutCreatedMenusInput, UserUncheckedCreateWithoutCreatedMenusInput>
    connectOrCreate?: UserCreateOrConnectWithoutCreatedMenusInput
    connect?: UserWhereUniqueInput
  }

  export type UserCreateNestedOneWithoutUpdatedMenusInput = {
    create?: XOR<UserCreateWithoutUpdatedMenusInput, UserUncheckedCreateWithoutUpdatedMenusInput>
    connectOrCreate?: UserCreateOrConnectWithoutUpdatedMenusInput
    connect?: UserWhereUniqueInput
  }

  export type UserCreateNestedOneWithoutDeletedMenusInput = {
    create?: XOR<UserCreateWithoutDeletedMenusInput, UserUncheckedCreateWithoutDeletedMenusInput>
    connectOrCreate?: UserCreateOrConnectWithoutDeletedMenusInput
    connect?: UserWhereUniqueInput
  }

  export type SubMenuUncheckedCreateNestedManyWithoutMasterMenuInput = {
    create?: XOR<SubMenuCreateWithoutMasterMenuInput, SubMenuUncheckedCreateWithoutMasterMenuInput> | SubMenuCreateWithoutMasterMenuInput[] | SubMenuUncheckedCreateWithoutMasterMenuInput[]
    connectOrCreate?: SubMenuCreateOrConnectWithoutMasterMenuInput | SubMenuCreateOrConnectWithoutMasterMenuInput[]
    createMany?: SubMenuCreateManyMasterMenuInputEnvelope
    connect?: SubMenuWhereUniqueInput | SubMenuWhereUniqueInput[]
  }

  export type SubMenuUpdateManyWithoutMasterMenuNestedInput = {
    create?: XOR<SubMenuCreateWithoutMasterMenuInput, SubMenuUncheckedCreateWithoutMasterMenuInput> | SubMenuCreateWithoutMasterMenuInput[] | SubMenuUncheckedCreateWithoutMasterMenuInput[]
    connectOrCreate?: SubMenuCreateOrConnectWithoutMasterMenuInput | SubMenuCreateOrConnectWithoutMasterMenuInput[]
    upsert?: SubMenuUpsertWithWhereUniqueWithoutMasterMenuInput | SubMenuUpsertWithWhereUniqueWithoutMasterMenuInput[]
    createMany?: SubMenuCreateManyMasterMenuInputEnvelope
    set?: SubMenuWhereUniqueInput | SubMenuWhereUniqueInput[]
    disconnect?: SubMenuWhereUniqueInput | SubMenuWhereUniqueInput[]
    delete?: SubMenuWhereUniqueInput | SubMenuWhereUniqueInput[]
    connect?: SubMenuWhereUniqueInput | SubMenuWhereUniqueInput[]
    update?: SubMenuUpdateWithWhereUniqueWithoutMasterMenuInput | SubMenuUpdateWithWhereUniqueWithoutMasterMenuInput[]
    updateMany?: SubMenuUpdateManyWithWhereWithoutMasterMenuInput | SubMenuUpdateManyWithWhereWithoutMasterMenuInput[]
    deleteMany?: SubMenuScalarWhereInput | SubMenuScalarWhereInput[]
  }

  export type UserUpdateOneWithoutCreatedMenusNestedInput = {
    create?: XOR<UserCreateWithoutCreatedMenusInput, UserUncheckedCreateWithoutCreatedMenusInput>
    connectOrCreate?: UserCreateOrConnectWithoutCreatedMenusInput
    upsert?: UserUpsertWithoutCreatedMenusInput
    disconnect?: UserWhereInput | boolean
    delete?: UserWhereInput | boolean
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutCreatedMenusInput, UserUpdateWithoutCreatedMenusInput>, UserUncheckedUpdateWithoutCreatedMenusInput>
  }

  export type UserUpdateOneWithoutUpdatedMenusNestedInput = {
    create?: XOR<UserCreateWithoutUpdatedMenusInput, UserUncheckedCreateWithoutUpdatedMenusInput>
    connectOrCreate?: UserCreateOrConnectWithoutUpdatedMenusInput
    upsert?: UserUpsertWithoutUpdatedMenusInput
    disconnect?: UserWhereInput | boolean
    delete?: UserWhereInput | boolean
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutUpdatedMenusInput, UserUpdateWithoutUpdatedMenusInput>, UserUncheckedUpdateWithoutUpdatedMenusInput>
  }

  export type UserUpdateOneWithoutDeletedMenusNestedInput = {
    create?: XOR<UserCreateWithoutDeletedMenusInput, UserUncheckedCreateWithoutDeletedMenusInput>
    connectOrCreate?: UserCreateOrConnectWithoutDeletedMenusInput
    upsert?: UserUpsertWithoutDeletedMenusInput
    disconnect?: UserWhereInput | boolean
    delete?: UserWhereInput | boolean
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutDeletedMenusInput, UserUpdateWithoutDeletedMenusInput>, UserUncheckedUpdateWithoutDeletedMenusInput>
  }

  export type SubMenuUncheckedUpdateManyWithoutMasterMenuNestedInput = {
    create?: XOR<SubMenuCreateWithoutMasterMenuInput, SubMenuUncheckedCreateWithoutMasterMenuInput> | SubMenuCreateWithoutMasterMenuInput[] | SubMenuUncheckedCreateWithoutMasterMenuInput[]
    connectOrCreate?: SubMenuCreateOrConnectWithoutMasterMenuInput | SubMenuCreateOrConnectWithoutMasterMenuInput[]
    upsert?: SubMenuUpsertWithWhereUniqueWithoutMasterMenuInput | SubMenuUpsertWithWhereUniqueWithoutMasterMenuInput[]
    createMany?: SubMenuCreateManyMasterMenuInputEnvelope
    set?: SubMenuWhereUniqueInput | SubMenuWhereUniqueInput[]
    disconnect?: SubMenuWhereUniqueInput | SubMenuWhereUniqueInput[]
    delete?: SubMenuWhereUniqueInput | SubMenuWhereUniqueInput[]
    connect?: SubMenuWhereUniqueInput | SubMenuWhereUniqueInput[]
    update?: SubMenuUpdateWithWhereUniqueWithoutMasterMenuInput | SubMenuUpdateWithWhereUniqueWithoutMasterMenuInput[]
    updateMany?: SubMenuUpdateManyWithWhereWithoutMasterMenuInput | SubMenuUpdateManyWithWhereWithoutMasterMenuInput[]
    deleteMany?: SubMenuScalarWhereInput | SubMenuScalarWhereInput[]
  }

  export type MasterMenuCreateNestedOneWithoutSubMenusInput = {
    create?: XOR<MasterMenuCreateWithoutSubMenusInput, MasterMenuUncheckedCreateWithoutSubMenusInput>
    connectOrCreate?: MasterMenuCreateOrConnectWithoutSubMenusInput
    connect?: MasterMenuWhereUniqueInput
  }

  export type UserCreateNestedOneWithoutCreatedSubMenusInput = {
    create?: XOR<UserCreateWithoutCreatedSubMenusInput, UserUncheckedCreateWithoutCreatedSubMenusInput>
    connectOrCreate?: UserCreateOrConnectWithoutCreatedSubMenusInput
    connect?: UserWhereUniqueInput
  }

  export type UserCreateNestedOneWithoutUpdatedSubMenusInput = {
    create?: XOR<UserCreateWithoutUpdatedSubMenusInput, UserUncheckedCreateWithoutUpdatedSubMenusInput>
    connectOrCreate?: UserCreateOrConnectWithoutUpdatedSubMenusInput
    connect?: UserWhereUniqueInput
  }

  export type UserCreateNestedOneWithoutDeletedSubMenusInput = {
    create?: XOR<UserCreateWithoutDeletedSubMenusInput, UserUncheckedCreateWithoutDeletedSubMenusInput>
    connectOrCreate?: UserCreateOrConnectWithoutDeletedSubMenusInput
    connect?: UserWhereUniqueInput
  }

  export type RoleMenuAccessCreateNestedManyWithoutSubMenuInput = {
    create?: XOR<RoleMenuAccessCreateWithoutSubMenuInput, RoleMenuAccessUncheckedCreateWithoutSubMenuInput> | RoleMenuAccessCreateWithoutSubMenuInput[] | RoleMenuAccessUncheckedCreateWithoutSubMenuInput[]
    connectOrCreate?: RoleMenuAccessCreateOrConnectWithoutSubMenuInput | RoleMenuAccessCreateOrConnectWithoutSubMenuInput[]
    createMany?: RoleMenuAccessCreateManySubMenuInputEnvelope
    connect?: RoleMenuAccessWhereUniqueInput | RoleMenuAccessWhereUniqueInput[]
  }

  export type RoleMenuAccessUncheckedCreateNestedManyWithoutSubMenuInput = {
    create?: XOR<RoleMenuAccessCreateWithoutSubMenuInput, RoleMenuAccessUncheckedCreateWithoutSubMenuInput> | RoleMenuAccessCreateWithoutSubMenuInput[] | RoleMenuAccessUncheckedCreateWithoutSubMenuInput[]
    connectOrCreate?: RoleMenuAccessCreateOrConnectWithoutSubMenuInput | RoleMenuAccessCreateOrConnectWithoutSubMenuInput[]
    createMany?: RoleMenuAccessCreateManySubMenuInputEnvelope
    connect?: RoleMenuAccessWhereUniqueInput | RoleMenuAccessWhereUniqueInput[]
  }

  export type MasterMenuUpdateOneRequiredWithoutSubMenusNestedInput = {
    create?: XOR<MasterMenuCreateWithoutSubMenusInput, MasterMenuUncheckedCreateWithoutSubMenusInput>
    connectOrCreate?: MasterMenuCreateOrConnectWithoutSubMenusInput
    upsert?: MasterMenuUpsertWithoutSubMenusInput
    connect?: MasterMenuWhereUniqueInput
    update?: XOR<XOR<MasterMenuUpdateToOneWithWhereWithoutSubMenusInput, MasterMenuUpdateWithoutSubMenusInput>, MasterMenuUncheckedUpdateWithoutSubMenusInput>
  }

  export type UserUpdateOneWithoutCreatedSubMenusNestedInput = {
    create?: XOR<UserCreateWithoutCreatedSubMenusInput, UserUncheckedCreateWithoutCreatedSubMenusInput>
    connectOrCreate?: UserCreateOrConnectWithoutCreatedSubMenusInput
    upsert?: UserUpsertWithoutCreatedSubMenusInput
    disconnect?: UserWhereInput | boolean
    delete?: UserWhereInput | boolean
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutCreatedSubMenusInput, UserUpdateWithoutCreatedSubMenusInput>, UserUncheckedUpdateWithoutCreatedSubMenusInput>
  }

  export type UserUpdateOneWithoutUpdatedSubMenusNestedInput = {
    create?: XOR<UserCreateWithoutUpdatedSubMenusInput, UserUncheckedCreateWithoutUpdatedSubMenusInput>
    connectOrCreate?: UserCreateOrConnectWithoutUpdatedSubMenusInput
    upsert?: UserUpsertWithoutUpdatedSubMenusInput
    disconnect?: UserWhereInput | boolean
    delete?: UserWhereInput | boolean
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutUpdatedSubMenusInput, UserUpdateWithoutUpdatedSubMenusInput>, UserUncheckedUpdateWithoutUpdatedSubMenusInput>
  }

  export type UserUpdateOneWithoutDeletedSubMenusNestedInput = {
    create?: XOR<UserCreateWithoutDeletedSubMenusInput, UserUncheckedCreateWithoutDeletedSubMenusInput>
    connectOrCreate?: UserCreateOrConnectWithoutDeletedSubMenusInput
    upsert?: UserUpsertWithoutDeletedSubMenusInput
    disconnect?: UserWhereInput | boolean
    delete?: UserWhereInput | boolean
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutDeletedSubMenusInput, UserUpdateWithoutDeletedSubMenusInput>, UserUncheckedUpdateWithoutDeletedSubMenusInput>
  }

  export type RoleMenuAccessUpdateManyWithoutSubMenuNestedInput = {
    create?: XOR<RoleMenuAccessCreateWithoutSubMenuInput, RoleMenuAccessUncheckedCreateWithoutSubMenuInput> | RoleMenuAccessCreateWithoutSubMenuInput[] | RoleMenuAccessUncheckedCreateWithoutSubMenuInput[]
    connectOrCreate?: RoleMenuAccessCreateOrConnectWithoutSubMenuInput | RoleMenuAccessCreateOrConnectWithoutSubMenuInput[]
    upsert?: RoleMenuAccessUpsertWithWhereUniqueWithoutSubMenuInput | RoleMenuAccessUpsertWithWhereUniqueWithoutSubMenuInput[]
    createMany?: RoleMenuAccessCreateManySubMenuInputEnvelope
    set?: RoleMenuAccessWhereUniqueInput | RoleMenuAccessWhereUniqueInput[]
    disconnect?: RoleMenuAccessWhereUniqueInput | RoleMenuAccessWhereUniqueInput[]
    delete?: RoleMenuAccessWhereUniqueInput | RoleMenuAccessWhereUniqueInput[]
    connect?: RoleMenuAccessWhereUniqueInput | RoleMenuAccessWhereUniqueInput[]
    update?: RoleMenuAccessUpdateWithWhereUniqueWithoutSubMenuInput | RoleMenuAccessUpdateWithWhereUniqueWithoutSubMenuInput[]
    updateMany?: RoleMenuAccessUpdateManyWithWhereWithoutSubMenuInput | RoleMenuAccessUpdateManyWithWhereWithoutSubMenuInput[]
    deleteMany?: RoleMenuAccessScalarWhereInput | RoleMenuAccessScalarWhereInput[]
  }

  export type RoleMenuAccessUncheckedUpdateManyWithoutSubMenuNestedInput = {
    create?: XOR<RoleMenuAccessCreateWithoutSubMenuInput, RoleMenuAccessUncheckedCreateWithoutSubMenuInput> | RoleMenuAccessCreateWithoutSubMenuInput[] | RoleMenuAccessUncheckedCreateWithoutSubMenuInput[]
    connectOrCreate?: RoleMenuAccessCreateOrConnectWithoutSubMenuInput | RoleMenuAccessCreateOrConnectWithoutSubMenuInput[]
    upsert?: RoleMenuAccessUpsertWithWhereUniqueWithoutSubMenuInput | RoleMenuAccessUpsertWithWhereUniqueWithoutSubMenuInput[]
    createMany?: RoleMenuAccessCreateManySubMenuInputEnvelope
    set?: RoleMenuAccessWhereUniqueInput | RoleMenuAccessWhereUniqueInput[]
    disconnect?: RoleMenuAccessWhereUniqueInput | RoleMenuAccessWhereUniqueInput[]
    delete?: RoleMenuAccessWhereUniqueInput | RoleMenuAccessWhereUniqueInput[]
    connect?: RoleMenuAccessWhereUniqueInput | RoleMenuAccessWhereUniqueInput[]
    update?: RoleMenuAccessUpdateWithWhereUniqueWithoutSubMenuInput | RoleMenuAccessUpdateWithWhereUniqueWithoutSubMenuInput[]
    updateMany?: RoleMenuAccessUpdateManyWithWhereWithoutSubMenuInput | RoleMenuAccessUpdateManyWithWhereWithoutSubMenuInput[]
    deleteMany?: RoleMenuAccessScalarWhereInput | RoleMenuAccessScalarWhereInput[]
  }

  export type RoleCreateNestedOneWithoutRoleMenuAccessInput = {
    create?: XOR<RoleCreateWithoutRoleMenuAccessInput, RoleUncheckedCreateWithoutRoleMenuAccessInput>
    connectOrCreate?: RoleCreateOrConnectWithoutRoleMenuAccessInput
    connect?: RoleWhereUniqueInput
  }

  export type SubMenuCreateNestedOneWithoutRoleMenuAccessInput = {
    create?: XOR<SubMenuCreateWithoutRoleMenuAccessInput, SubMenuUncheckedCreateWithoutRoleMenuAccessInput>
    connectOrCreate?: SubMenuCreateOrConnectWithoutRoleMenuAccessInput
    connect?: SubMenuWhereUniqueInput
  }

  export type UserCreateNestedOneWithoutCreatedAccessesInput = {
    create?: XOR<UserCreateWithoutCreatedAccessesInput, UserUncheckedCreateWithoutCreatedAccessesInput>
    connectOrCreate?: UserCreateOrConnectWithoutCreatedAccessesInput
    connect?: UserWhereUniqueInput
  }

  export type UserCreateNestedOneWithoutUpdatedAccessesInput = {
    create?: XOR<UserCreateWithoutUpdatedAccessesInput, UserUncheckedCreateWithoutUpdatedAccessesInput>
    connectOrCreate?: UserCreateOrConnectWithoutUpdatedAccessesInput
    connect?: UserWhereUniqueInput
  }

  export type UserCreateNestedOneWithoutDeletedAccessesInput = {
    create?: XOR<UserCreateWithoutDeletedAccessesInput, UserUncheckedCreateWithoutDeletedAccessesInput>
    connectOrCreate?: UserCreateOrConnectWithoutDeletedAccessesInput
    connect?: UserWhereUniqueInput
  }

  export type RoleUpdateOneRequiredWithoutRoleMenuAccessNestedInput = {
    create?: XOR<RoleCreateWithoutRoleMenuAccessInput, RoleUncheckedCreateWithoutRoleMenuAccessInput>
    connectOrCreate?: RoleCreateOrConnectWithoutRoleMenuAccessInput
    upsert?: RoleUpsertWithoutRoleMenuAccessInput
    connect?: RoleWhereUniqueInput
    update?: XOR<XOR<RoleUpdateToOneWithWhereWithoutRoleMenuAccessInput, RoleUpdateWithoutRoleMenuAccessInput>, RoleUncheckedUpdateWithoutRoleMenuAccessInput>
  }

  export type SubMenuUpdateOneRequiredWithoutRoleMenuAccessNestedInput = {
    create?: XOR<SubMenuCreateWithoutRoleMenuAccessInput, SubMenuUncheckedCreateWithoutRoleMenuAccessInput>
    connectOrCreate?: SubMenuCreateOrConnectWithoutRoleMenuAccessInput
    upsert?: SubMenuUpsertWithoutRoleMenuAccessInput
    connect?: SubMenuWhereUniqueInput
    update?: XOR<XOR<SubMenuUpdateToOneWithWhereWithoutRoleMenuAccessInput, SubMenuUpdateWithoutRoleMenuAccessInput>, SubMenuUncheckedUpdateWithoutRoleMenuAccessInput>
  }

  export type UserUpdateOneWithoutCreatedAccessesNestedInput = {
    create?: XOR<UserCreateWithoutCreatedAccessesInput, UserUncheckedCreateWithoutCreatedAccessesInput>
    connectOrCreate?: UserCreateOrConnectWithoutCreatedAccessesInput
    upsert?: UserUpsertWithoutCreatedAccessesInput
    disconnect?: UserWhereInput | boolean
    delete?: UserWhereInput | boolean
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutCreatedAccessesInput, UserUpdateWithoutCreatedAccessesInput>, UserUncheckedUpdateWithoutCreatedAccessesInput>
  }

  export type UserUpdateOneWithoutUpdatedAccessesNestedInput = {
    create?: XOR<UserCreateWithoutUpdatedAccessesInput, UserUncheckedCreateWithoutUpdatedAccessesInput>
    connectOrCreate?: UserCreateOrConnectWithoutUpdatedAccessesInput
    upsert?: UserUpsertWithoutUpdatedAccessesInput
    disconnect?: UserWhereInput | boolean
    delete?: UserWhereInput | boolean
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutUpdatedAccessesInput, UserUpdateWithoutUpdatedAccessesInput>, UserUncheckedUpdateWithoutUpdatedAccessesInput>
  }

  export type UserUpdateOneWithoutDeletedAccessesNestedInput = {
    create?: XOR<UserCreateWithoutDeletedAccessesInput, UserUncheckedCreateWithoutDeletedAccessesInput>
    connectOrCreate?: UserCreateOrConnectWithoutDeletedAccessesInput
    upsert?: UserUpsertWithoutDeletedAccessesInput
    disconnect?: UserWhereInput | boolean
    delete?: UserWhereInput | boolean
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutDeletedAccessesInput, UserUpdateWithoutDeletedAccessesInput>, UserUncheckedUpdateWithoutDeletedAccessesInput>
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedDateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | null
    notIn?: Date[] | string[] | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
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
    in?: number[]
    notIn?: number[]
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
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

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedDateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | null
    notIn?: Date[] | string[] | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type NestedIntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
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
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
  }

  export type RoleCreateWithoutUserInput = {
    uid?: string
    name: string
    description?: string | null
    status?: number
    createdAt?: Date | string
    updatedAt?: Date | string | null
    deletedAt?: Date | string | null
    users?: UserCreateNestedManyWithoutRolesInput
    createdByUser?: UserCreateNestedOneWithoutCreatedRolesInput
    updatedByUser?: UserCreateNestedOneWithoutUpdatedRolesInput
    deletedByUser?: UserCreateNestedOneWithoutDeletedRolesInput
    RoleMenuAccess?: RoleMenuAccessCreateNestedManyWithoutRoleInput
  }

  export type RoleUncheckedCreateWithoutUserInput = {
    id?: number
    uid?: string
    name: string
    description?: string | null
    status?: number
    createdBy?: number | null
    createdAt?: Date | string
    updatedBy?: number | null
    updatedAt?: Date | string | null
    deletedBy?: number | null
    deletedAt?: Date | string | null
    users?: UserUncheckedCreateNestedManyWithoutRolesInput
    RoleMenuAccess?: RoleMenuAccessUncheckedCreateNestedManyWithoutRoleInput
  }

  export type RoleCreateOrConnectWithoutUserInput = {
    where: RoleWhereUniqueInput
    create: XOR<RoleCreateWithoutUserInput, RoleUncheckedCreateWithoutUserInput>
  }

  export type RoleCreateWithoutUsersInput = {
    uid?: string
    name: string
    description?: string | null
    status?: number
    createdAt?: Date | string
    updatedAt?: Date | string | null
    deletedAt?: Date | string | null
    createdByUser?: UserCreateNestedOneWithoutCreatedRolesInput
    updatedByUser?: UserCreateNestedOneWithoutUpdatedRolesInput
    deletedByUser?: UserCreateNestedOneWithoutDeletedRolesInput
    User?: UserCreateNestedManyWithoutRoleInput
    RoleMenuAccess?: RoleMenuAccessCreateNestedManyWithoutRoleInput
  }

  export type RoleUncheckedCreateWithoutUsersInput = {
    id?: number
    uid?: string
    name: string
    description?: string | null
    status?: number
    createdBy?: number | null
    createdAt?: Date | string
    updatedBy?: number | null
    updatedAt?: Date | string | null
    deletedBy?: number | null
    deletedAt?: Date | string | null
    User?: UserUncheckedCreateNestedManyWithoutRoleInput
    RoleMenuAccess?: RoleMenuAccessUncheckedCreateNestedManyWithoutRoleInput
  }

  export type RoleCreateOrConnectWithoutUsersInput = {
    where: RoleWhereUniqueInput
    create: XOR<RoleCreateWithoutUsersInput, RoleUncheckedCreateWithoutUsersInput>
  }

  export type RoleCreateWithoutCreatedByUserInput = {
    uid?: string
    name: string
    description?: string | null
    status?: number
    createdAt?: Date | string
    updatedAt?: Date | string | null
    deletedAt?: Date | string | null
    users?: UserCreateNestedManyWithoutRolesInput
    updatedByUser?: UserCreateNestedOneWithoutUpdatedRolesInput
    deletedByUser?: UserCreateNestedOneWithoutDeletedRolesInput
    User?: UserCreateNestedManyWithoutRoleInput
    RoleMenuAccess?: RoleMenuAccessCreateNestedManyWithoutRoleInput
  }

  export type RoleUncheckedCreateWithoutCreatedByUserInput = {
    id?: number
    uid?: string
    name: string
    description?: string | null
    status?: number
    createdAt?: Date | string
    updatedBy?: number | null
    updatedAt?: Date | string | null
    deletedBy?: number | null
    deletedAt?: Date | string | null
    users?: UserUncheckedCreateNestedManyWithoutRolesInput
    User?: UserUncheckedCreateNestedManyWithoutRoleInput
    RoleMenuAccess?: RoleMenuAccessUncheckedCreateNestedManyWithoutRoleInput
  }

  export type RoleCreateOrConnectWithoutCreatedByUserInput = {
    where: RoleWhereUniqueInput
    create: XOR<RoleCreateWithoutCreatedByUserInput, RoleUncheckedCreateWithoutCreatedByUserInput>
  }

  export type RoleCreateManyCreatedByUserInputEnvelope = {
    data: RoleCreateManyCreatedByUserInput | RoleCreateManyCreatedByUserInput[]
    skipDuplicates?: boolean
  }

  export type RoleCreateWithoutUpdatedByUserInput = {
    uid?: string
    name: string
    description?: string | null
    status?: number
    createdAt?: Date | string
    updatedAt?: Date | string | null
    deletedAt?: Date | string | null
    users?: UserCreateNestedManyWithoutRolesInput
    createdByUser?: UserCreateNestedOneWithoutCreatedRolesInput
    deletedByUser?: UserCreateNestedOneWithoutDeletedRolesInput
    User?: UserCreateNestedManyWithoutRoleInput
    RoleMenuAccess?: RoleMenuAccessCreateNestedManyWithoutRoleInput
  }

  export type RoleUncheckedCreateWithoutUpdatedByUserInput = {
    id?: number
    uid?: string
    name: string
    description?: string | null
    status?: number
    createdBy?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string | null
    deletedBy?: number | null
    deletedAt?: Date | string | null
    users?: UserUncheckedCreateNestedManyWithoutRolesInput
    User?: UserUncheckedCreateNestedManyWithoutRoleInput
    RoleMenuAccess?: RoleMenuAccessUncheckedCreateNestedManyWithoutRoleInput
  }

  export type RoleCreateOrConnectWithoutUpdatedByUserInput = {
    where: RoleWhereUniqueInput
    create: XOR<RoleCreateWithoutUpdatedByUserInput, RoleUncheckedCreateWithoutUpdatedByUserInput>
  }

  export type RoleCreateManyUpdatedByUserInputEnvelope = {
    data: RoleCreateManyUpdatedByUserInput | RoleCreateManyUpdatedByUserInput[]
    skipDuplicates?: boolean
  }

  export type RoleCreateWithoutDeletedByUserInput = {
    uid?: string
    name: string
    description?: string | null
    status?: number
    createdAt?: Date | string
    updatedAt?: Date | string | null
    deletedAt?: Date | string | null
    users?: UserCreateNestedManyWithoutRolesInput
    createdByUser?: UserCreateNestedOneWithoutCreatedRolesInput
    updatedByUser?: UserCreateNestedOneWithoutUpdatedRolesInput
    User?: UserCreateNestedManyWithoutRoleInput
    RoleMenuAccess?: RoleMenuAccessCreateNestedManyWithoutRoleInput
  }

  export type RoleUncheckedCreateWithoutDeletedByUserInput = {
    id?: number
    uid?: string
    name: string
    description?: string | null
    status?: number
    createdBy?: number | null
    createdAt?: Date | string
    updatedBy?: number | null
    updatedAt?: Date | string | null
    deletedAt?: Date | string | null
    users?: UserUncheckedCreateNestedManyWithoutRolesInput
    User?: UserUncheckedCreateNestedManyWithoutRoleInput
    RoleMenuAccess?: RoleMenuAccessUncheckedCreateNestedManyWithoutRoleInput
  }

  export type RoleCreateOrConnectWithoutDeletedByUserInput = {
    where: RoleWhereUniqueInput
    create: XOR<RoleCreateWithoutDeletedByUserInput, RoleUncheckedCreateWithoutDeletedByUserInput>
  }

  export type RoleCreateManyDeletedByUserInputEnvelope = {
    data: RoleCreateManyDeletedByUserInput | RoleCreateManyDeletedByUserInput[]
    skipDuplicates?: boolean
  }

  export type MasterMenuCreateWithoutCreatedByUserInput = {
    uid?: string
    name: string
    description?: string | null
    url?: string | null
    icon?: string | null
    order?: number
    status?: number
    createdAt?: Date | string
    updatedAt?: Date | string | null
    deletedAt?: Date | string | null
    subMenus?: SubMenuCreateNestedManyWithoutMasterMenuInput
    updatedByUser?: UserCreateNestedOneWithoutUpdatedMenusInput
    deletedByUser?: UserCreateNestedOneWithoutDeletedMenusInput
  }

  export type MasterMenuUncheckedCreateWithoutCreatedByUserInput = {
    id?: number
    uid?: string
    name: string
    description?: string | null
    url?: string | null
    icon?: string | null
    order?: number
    status?: number
    createdAt?: Date | string
    updatedBy?: number | null
    updatedAt?: Date | string | null
    deletedBy?: number | null
    deletedAt?: Date | string | null
    subMenus?: SubMenuUncheckedCreateNestedManyWithoutMasterMenuInput
  }

  export type MasterMenuCreateOrConnectWithoutCreatedByUserInput = {
    where: MasterMenuWhereUniqueInput
    create: XOR<MasterMenuCreateWithoutCreatedByUserInput, MasterMenuUncheckedCreateWithoutCreatedByUserInput>
  }

  export type MasterMenuCreateManyCreatedByUserInputEnvelope = {
    data: MasterMenuCreateManyCreatedByUserInput | MasterMenuCreateManyCreatedByUserInput[]
    skipDuplicates?: boolean
  }

  export type MasterMenuCreateWithoutUpdatedByUserInput = {
    uid?: string
    name: string
    description?: string | null
    url?: string | null
    icon?: string | null
    order?: number
    status?: number
    createdAt?: Date | string
    updatedAt?: Date | string | null
    deletedAt?: Date | string | null
    subMenus?: SubMenuCreateNestedManyWithoutMasterMenuInput
    createdByUser?: UserCreateNestedOneWithoutCreatedMenusInput
    deletedByUser?: UserCreateNestedOneWithoutDeletedMenusInput
  }

  export type MasterMenuUncheckedCreateWithoutUpdatedByUserInput = {
    id?: number
    uid?: string
    name: string
    description?: string | null
    url?: string | null
    icon?: string | null
    order?: number
    status?: number
    createdBy?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string | null
    deletedBy?: number | null
    deletedAt?: Date | string | null
    subMenus?: SubMenuUncheckedCreateNestedManyWithoutMasterMenuInput
  }

  export type MasterMenuCreateOrConnectWithoutUpdatedByUserInput = {
    where: MasterMenuWhereUniqueInput
    create: XOR<MasterMenuCreateWithoutUpdatedByUserInput, MasterMenuUncheckedCreateWithoutUpdatedByUserInput>
  }

  export type MasterMenuCreateManyUpdatedByUserInputEnvelope = {
    data: MasterMenuCreateManyUpdatedByUserInput | MasterMenuCreateManyUpdatedByUserInput[]
    skipDuplicates?: boolean
  }

  export type MasterMenuCreateWithoutDeletedByUserInput = {
    uid?: string
    name: string
    description?: string | null
    url?: string | null
    icon?: string | null
    order?: number
    status?: number
    createdAt?: Date | string
    updatedAt?: Date | string | null
    deletedAt?: Date | string | null
    subMenus?: SubMenuCreateNestedManyWithoutMasterMenuInput
    createdByUser?: UserCreateNestedOneWithoutCreatedMenusInput
    updatedByUser?: UserCreateNestedOneWithoutUpdatedMenusInput
  }

  export type MasterMenuUncheckedCreateWithoutDeletedByUserInput = {
    id?: number
    uid?: string
    name: string
    description?: string | null
    url?: string | null
    icon?: string | null
    order?: number
    status?: number
    createdBy?: number | null
    createdAt?: Date | string
    updatedBy?: number | null
    updatedAt?: Date | string | null
    deletedAt?: Date | string | null
    subMenus?: SubMenuUncheckedCreateNestedManyWithoutMasterMenuInput
  }

  export type MasterMenuCreateOrConnectWithoutDeletedByUserInput = {
    where: MasterMenuWhereUniqueInput
    create: XOR<MasterMenuCreateWithoutDeletedByUserInput, MasterMenuUncheckedCreateWithoutDeletedByUserInput>
  }

  export type MasterMenuCreateManyDeletedByUserInputEnvelope = {
    data: MasterMenuCreateManyDeletedByUserInput | MasterMenuCreateManyDeletedByUserInput[]
    skipDuplicates?: boolean
  }

  export type SubMenuCreateWithoutCreatedByUserInput = {
    uid?: string
    name: string
    description?: string | null
    url?: string | null
    icon?: string | null
    order?: number
    status?: number
    createdAt?: Date | string
    updatedAt?: Date | string | null
    deletedAt?: Date | string | null
    masterMenu: MasterMenuCreateNestedOneWithoutSubMenusInput
    updatedByUser?: UserCreateNestedOneWithoutUpdatedSubMenusInput
    deletedByUser?: UserCreateNestedOneWithoutDeletedSubMenusInput
    RoleMenuAccess?: RoleMenuAccessCreateNestedManyWithoutSubMenuInput
  }

  export type SubMenuUncheckedCreateWithoutCreatedByUserInput = {
    id?: number
    uid?: string
    masterMenuId: number
    name: string
    description?: string | null
    url?: string | null
    icon?: string | null
    order?: number
    status?: number
    createdAt?: Date | string
    updatedBy?: number | null
    updatedAt?: Date | string | null
    deletedBy?: number | null
    deletedAt?: Date | string | null
    RoleMenuAccess?: RoleMenuAccessUncheckedCreateNestedManyWithoutSubMenuInput
  }

  export type SubMenuCreateOrConnectWithoutCreatedByUserInput = {
    where: SubMenuWhereUniqueInput
    create: XOR<SubMenuCreateWithoutCreatedByUserInput, SubMenuUncheckedCreateWithoutCreatedByUserInput>
  }

  export type SubMenuCreateManyCreatedByUserInputEnvelope = {
    data: SubMenuCreateManyCreatedByUserInput | SubMenuCreateManyCreatedByUserInput[]
    skipDuplicates?: boolean
  }

  export type SubMenuCreateWithoutUpdatedByUserInput = {
    uid?: string
    name: string
    description?: string | null
    url?: string | null
    icon?: string | null
    order?: number
    status?: number
    createdAt?: Date | string
    updatedAt?: Date | string | null
    deletedAt?: Date | string | null
    masterMenu: MasterMenuCreateNestedOneWithoutSubMenusInput
    createdByUser?: UserCreateNestedOneWithoutCreatedSubMenusInput
    deletedByUser?: UserCreateNestedOneWithoutDeletedSubMenusInput
    RoleMenuAccess?: RoleMenuAccessCreateNestedManyWithoutSubMenuInput
  }

  export type SubMenuUncheckedCreateWithoutUpdatedByUserInput = {
    id?: number
    uid?: string
    masterMenuId: number
    name: string
    description?: string | null
    url?: string | null
    icon?: string | null
    order?: number
    status?: number
    createdBy?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string | null
    deletedBy?: number | null
    deletedAt?: Date | string | null
    RoleMenuAccess?: RoleMenuAccessUncheckedCreateNestedManyWithoutSubMenuInput
  }

  export type SubMenuCreateOrConnectWithoutUpdatedByUserInput = {
    where: SubMenuWhereUniqueInput
    create: XOR<SubMenuCreateWithoutUpdatedByUserInput, SubMenuUncheckedCreateWithoutUpdatedByUserInput>
  }

  export type SubMenuCreateManyUpdatedByUserInputEnvelope = {
    data: SubMenuCreateManyUpdatedByUserInput | SubMenuCreateManyUpdatedByUserInput[]
    skipDuplicates?: boolean
  }

  export type SubMenuCreateWithoutDeletedByUserInput = {
    uid?: string
    name: string
    description?: string | null
    url?: string | null
    icon?: string | null
    order?: number
    status?: number
    createdAt?: Date | string
    updatedAt?: Date | string | null
    deletedAt?: Date | string | null
    masterMenu: MasterMenuCreateNestedOneWithoutSubMenusInput
    createdByUser?: UserCreateNestedOneWithoutCreatedSubMenusInput
    updatedByUser?: UserCreateNestedOneWithoutUpdatedSubMenusInput
    RoleMenuAccess?: RoleMenuAccessCreateNestedManyWithoutSubMenuInput
  }

  export type SubMenuUncheckedCreateWithoutDeletedByUserInput = {
    id?: number
    uid?: string
    masterMenuId: number
    name: string
    description?: string | null
    url?: string | null
    icon?: string | null
    order?: number
    status?: number
    createdBy?: number | null
    createdAt?: Date | string
    updatedBy?: number | null
    updatedAt?: Date | string | null
    deletedAt?: Date | string | null
    RoleMenuAccess?: RoleMenuAccessUncheckedCreateNestedManyWithoutSubMenuInput
  }

  export type SubMenuCreateOrConnectWithoutDeletedByUserInput = {
    where: SubMenuWhereUniqueInput
    create: XOR<SubMenuCreateWithoutDeletedByUserInput, SubMenuUncheckedCreateWithoutDeletedByUserInput>
  }

  export type SubMenuCreateManyDeletedByUserInputEnvelope = {
    data: SubMenuCreateManyDeletedByUserInput | SubMenuCreateManyDeletedByUserInput[]
    skipDuplicates?: boolean
  }

  export type RoleMenuAccessCreateWithoutCreatedByUserInput = {
    uid?: string
    name: string
    description?: string | null
    status?: number
    createdAt?: Date | string
    updatedAt?: Date | string | null
    deletedAt?: Date | string | null
    role: RoleCreateNestedOneWithoutRoleMenuAccessInput
    subMenu: SubMenuCreateNestedOneWithoutRoleMenuAccessInput
    updatedByUser?: UserCreateNestedOneWithoutUpdatedAccessesInput
    deletedByUser?: UserCreateNestedOneWithoutDeletedAccessesInput
  }

  export type RoleMenuAccessUncheckedCreateWithoutCreatedByUserInput = {
    id?: number
    uid?: string
    name: string
    description?: string | null
    roleId: number
    submenuId: number
    status?: number
    createdAt?: Date | string
    updatedBy?: number | null
    updatedAt?: Date | string | null
    deletedBy?: number | null
    deletedAt?: Date | string | null
  }

  export type RoleMenuAccessCreateOrConnectWithoutCreatedByUserInput = {
    where: RoleMenuAccessWhereUniqueInput
    create: XOR<RoleMenuAccessCreateWithoutCreatedByUserInput, RoleMenuAccessUncheckedCreateWithoutCreatedByUserInput>
  }

  export type RoleMenuAccessCreateManyCreatedByUserInputEnvelope = {
    data: RoleMenuAccessCreateManyCreatedByUserInput | RoleMenuAccessCreateManyCreatedByUserInput[]
    skipDuplicates?: boolean
  }

  export type RoleMenuAccessCreateWithoutUpdatedByUserInput = {
    uid?: string
    name: string
    description?: string | null
    status?: number
    createdAt?: Date | string
    updatedAt?: Date | string | null
    deletedAt?: Date | string | null
    role: RoleCreateNestedOneWithoutRoleMenuAccessInput
    subMenu: SubMenuCreateNestedOneWithoutRoleMenuAccessInput
    createdByUser?: UserCreateNestedOneWithoutCreatedAccessesInput
    deletedByUser?: UserCreateNestedOneWithoutDeletedAccessesInput
  }

  export type RoleMenuAccessUncheckedCreateWithoutUpdatedByUserInput = {
    id?: number
    uid?: string
    name: string
    description?: string | null
    roleId: number
    submenuId: number
    status?: number
    createdBy?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string | null
    deletedBy?: number | null
    deletedAt?: Date | string | null
  }

  export type RoleMenuAccessCreateOrConnectWithoutUpdatedByUserInput = {
    where: RoleMenuAccessWhereUniqueInput
    create: XOR<RoleMenuAccessCreateWithoutUpdatedByUserInput, RoleMenuAccessUncheckedCreateWithoutUpdatedByUserInput>
  }

  export type RoleMenuAccessCreateManyUpdatedByUserInputEnvelope = {
    data: RoleMenuAccessCreateManyUpdatedByUserInput | RoleMenuAccessCreateManyUpdatedByUserInput[]
    skipDuplicates?: boolean
  }

  export type RoleMenuAccessCreateWithoutDeletedByUserInput = {
    uid?: string
    name: string
    description?: string | null
    status?: number
    createdAt?: Date | string
    updatedAt?: Date | string | null
    deletedAt?: Date | string | null
    role: RoleCreateNestedOneWithoutRoleMenuAccessInput
    subMenu: SubMenuCreateNestedOneWithoutRoleMenuAccessInput
    createdByUser?: UserCreateNestedOneWithoutCreatedAccessesInput
    updatedByUser?: UserCreateNestedOneWithoutUpdatedAccessesInput
  }

  export type RoleMenuAccessUncheckedCreateWithoutDeletedByUserInput = {
    id?: number
    uid?: string
    name: string
    description?: string | null
    roleId: number
    submenuId: number
    status?: number
    createdBy?: number | null
    createdAt?: Date | string
    updatedBy?: number | null
    updatedAt?: Date | string | null
    deletedAt?: Date | string | null
  }

  export type RoleMenuAccessCreateOrConnectWithoutDeletedByUserInput = {
    where: RoleMenuAccessWhereUniqueInput
    create: XOR<RoleMenuAccessCreateWithoutDeletedByUserInput, RoleMenuAccessUncheckedCreateWithoutDeletedByUserInput>
  }

  export type RoleMenuAccessCreateManyDeletedByUserInputEnvelope = {
    data: RoleMenuAccessCreateManyDeletedByUserInput | RoleMenuAccessCreateManyDeletedByUserInput[]
    skipDuplicates?: boolean
  }

  export type RoleUpsertWithoutUserInput = {
    update: XOR<RoleUpdateWithoutUserInput, RoleUncheckedUpdateWithoutUserInput>
    create: XOR<RoleCreateWithoutUserInput, RoleUncheckedCreateWithoutUserInput>
    where?: RoleWhereInput
  }

  export type RoleUpdateToOneWithWhereWithoutUserInput = {
    where?: RoleWhereInput
    data: XOR<RoleUpdateWithoutUserInput, RoleUncheckedUpdateWithoutUserInput>
  }

  export type RoleUpdateWithoutUserInput = {
    uid?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    status?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    users?: UserUpdateManyWithoutRolesNestedInput
    createdByUser?: UserUpdateOneWithoutCreatedRolesNestedInput
    updatedByUser?: UserUpdateOneWithoutUpdatedRolesNestedInput
    deletedByUser?: UserUpdateOneWithoutDeletedRolesNestedInput
    RoleMenuAccess?: RoleMenuAccessUpdateManyWithoutRoleNestedInput
  }

  export type RoleUncheckedUpdateWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    uid?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    status?: IntFieldUpdateOperationsInput | number
    createdBy?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedBy?: NullableIntFieldUpdateOperationsInput | number | null
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deletedBy?: NullableIntFieldUpdateOperationsInput | number | null
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    users?: UserUncheckedUpdateManyWithoutRolesNestedInput
    RoleMenuAccess?: RoleMenuAccessUncheckedUpdateManyWithoutRoleNestedInput
  }

  export type RoleUpsertWithWhereUniqueWithoutUsersInput = {
    where: RoleWhereUniqueInput
    update: XOR<RoleUpdateWithoutUsersInput, RoleUncheckedUpdateWithoutUsersInput>
    create: XOR<RoleCreateWithoutUsersInput, RoleUncheckedCreateWithoutUsersInput>
  }

  export type RoleUpdateWithWhereUniqueWithoutUsersInput = {
    where: RoleWhereUniqueInput
    data: XOR<RoleUpdateWithoutUsersInput, RoleUncheckedUpdateWithoutUsersInput>
  }

  export type RoleUpdateManyWithWhereWithoutUsersInput = {
    where: RoleScalarWhereInput
    data: XOR<RoleUpdateManyMutationInput, RoleUncheckedUpdateManyWithoutUsersInput>
  }

  export type RoleScalarWhereInput = {
    AND?: RoleScalarWhereInput | RoleScalarWhereInput[]
    OR?: RoleScalarWhereInput[]
    NOT?: RoleScalarWhereInput | RoleScalarWhereInput[]
    id?: IntFilter<"Role"> | number
    uid?: StringFilter<"Role"> | string
    name?: StringFilter<"Role"> | string
    description?: StringNullableFilter<"Role"> | string | null
    status?: IntFilter<"Role"> | number
    createdBy?: IntNullableFilter<"Role"> | number | null
    createdAt?: DateTimeFilter<"Role"> | Date | string
    updatedBy?: IntNullableFilter<"Role"> | number | null
    updatedAt?: DateTimeNullableFilter<"Role"> | Date | string | null
    deletedBy?: IntNullableFilter<"Role"> | number | null
    deletedAt?: DateTimeNullableFilter<"Role"> | Date | string | null
  }

  export type RoleUpsertWithWhereUniqueWithoutCreatedByUserInput = {
    where: RoleWhereUniqueInput
    update: XOR<RoleUpdateWithoutCreatedByUserInput, RoleUncheckedUpdateWithoutCreatedByUserInput>
    create: XOR<RoleCreateWithoutCreatedByUserInput, RoleUncheckedCreateWithoutCreatedByUserInput>
  }

  export type RoleUpdateWithWhereUniqueWithoutCreatedByUserInput = {
    where: RoleWhereUniqueInput
    data: XOR<RoleUpdateWithoutCreatedByUserInput, RoleUncheckedUpdateWithoutCreatedByUserInput>
  }

  export type RoleUpdateManyWithWhereWithoutCreatedByUserInput = {
    where: RoleScalarWhereInput
    data: XOR<RoleUpdateManyMutationInput, RoleUncheckedUpdateManyWithoutCreatedByUserInput>
  }

  export type RoleUpsertWithWhereUniqueWithoutUpdatedByUserInput = {
    where: RoleWhereUniqueInput
    update: XOR<RoleUpdateWithoutUpdatedByUserInput, RoleUncheckedUpdateWithoutUpdatedByUserInput>
    create: XOR<RoleCreateWithoutUpdatedByUserInput, RoleUncheckedCreateWithoutUpdatedByUserInput>
  }

  export type RoleUpdateWithWhereUniqueWithoutUpdatedByUserInput = {
    where: RoleWhereUniqueInput
    data: XOR<RoleUpdateWithoutUpdatedByUserInput, RoleUncheckedUpdateWithoutUpdatedByUserInput>
  }

  export type RoleUpdateManyWithWhereWithoutUpdatedByUserInput = {
    where: RoleScalarWhereInput
    data: XOR<RoleUpdateManyMutationInput, RoleUncheckedUpdateManyWithoutUpdatedByUserInput>
  }

  export type RoleUpsertWithWhereUniqueWithoutDeletedByUserInput = {
    where: RoleWhereUniqueInput
    update: XOR<RoleUpdateWithoutDeletedByUserInput, RoleUncheckedUpdateWithoutDeletedByUserInput>
    create: XOR<RoleCreateWithoutDeletedByUserInput, RoleUncheckedCreateWithoutDeletedByUserInput>
  }

  export type RoleUpdateWithWhereUniqueWithoutDeletedByUserInput = {
    where: RoleWhereUniqueInput
    data: XOR<RoleUpdateWithoutDeletedByUserInput, RoleUncheckedUpdateWithoutDeletedByUserInput>
  }

  export type RoleUpdateManyWithWhereWithoutDeletedByUserInput = {
    where: RoleScalarWhereInput
    data: XOR<RoleUpdateManyMutationInput, RoleUncheckedUpdateManyWithoutDeletedByUserInput>
  }

  export type MasterMenuUpsertWithWhereUniqueWithoutCreatedByUserInput = {
    where: MasterMenuWhereUniqueInput
    update: XOR<MasterMenuUpdateWithoutCreatedByUserInput, MasterMenuUncheckedUpdateWithoutCreatedByUserInput>
    create: XOR<MasterMenuCreateWithoutCreatedByUserInput, MasterMenuUncheckedCreateWithoutCreatedByUserInput>
  }

  export type MasterMenuUpdateWithWhereUniqueWithoutCreatedByUserInput = {
    where: MasterMenuWhereUniqueInput
    data: XOR<MasterMenuUpdateWithoutCreatedByUserInput, MasterMenuUncheckedUpdateWithoutCreatedByUserInput>
  }

  export type MasterMenuUpdateManyWithWhereWithoutCreatedByUserInput = {
    where: MasterMenuScalarWhereInput
    data: XOR<MasterMenuUpdateManyMutationInput, MasterMenuUncheckedUpdateManyWithoutCreatedByUserInput>
  }

  export type MasterMenuScalarWhereInput = {
    AND?: MasterMenuScalarWhereInput | MasterMenuScalarWhereInput[]
    OR?: MasterMenuScalarWhereInput[]
    NOT?: MasterMenuScalarWhereInput | MasterMenuScalarWhereInput[]
    id?: IntFilter<"MasterMenu"> | number
    uid?: StringFilter<"MasterMenu"> | string
    name?: StringFilter<"MasterMenu"> | string
    description?: StringNullableFilter<"MasterMenu"> | string | null
    url?: StringNullableFilter<"MasterMenu"> | string | null
    icon?: StringNullableFilter<"MasterMenu"> | string | null
    order?: IntFilter<"MasterMenu"> | number
    status?: IntFilter<"MasterMenu"> | number
    createdBy?: IntNullableFilter<"MasterMenu"> | number | null
    createdAt?: DateTimeFilter<"MasterMenu"> | Date | string
    updatedBy?: IntNullableFilter<"MasterMenu"> | number | null
    updatedAt?: DateTimeNullableFilter<"MasterMenu"> | Date | string | null
    deletedBy?: IntNullableFilter<"MasterMenu"> | number | null
    deletedAt?: DateTimeNullableFilter<"MasterMenu"> | Date | string | null
  }

  export type MasterMenuUpsertWithWhereUniqueWithoutUpdatedByUserInput = {
    where: MasterMenuWhereUniqueInput
    update: XOR<MasterMenuUpdateWithoutUpdatedByUserInput, MasterMenuUncheckedUpdateWithoutUpdatedByUserInput>
    create: XOR<MasterMenuCreateWithoutUpdatedByUserInput, MasterMenuUncheckedCreateWithoutUpdatedByUserInput>
  }

  export type MasterMenuUpdateWithWhereUniqueWithoutUpdatedByUserInput = {
    where: MasterMenuWhereUniqueInput
    data: XOR<MasterMenuUpdateWithoutUpdatedByUserInput, MasterMenuUncheckedUpdateWithoutUpdatedByUserInput>
  }

  export type MasterMenuUpdateManyWithWhereWithoutUpdatedByUserInput = {
    where: MasterMenuScalarWhereInput
    data: XOR<MasterMenuUpdateManyMutationInput, MasterMenuUncheckedUpdateManyWithoutUpdatedByUserInput>
  }

  export type MasterMenuUpsertWithWhereUniqueWithoutDeletedByUserInput = {
    where: MasterMenuWhereUniqueInput
    update: XOR<MasterMenuUpdateWithoutDeletedByUserInput, MasterMenuUncheckedUpdateWithoutDeletedByUserInput>
    create: XOR<MasterMenuCreateWithoutDeletedByUserInput, MasterMenuUncheckedCreateWithoutDeletedByUserInput>
  }

  export type MasterMenuUpdateWithWhereUniqueWithoutDeletedByUserInput = {
    where: MasterMenuWhereUniqueInput
    data: XOR<MasterMenuUpdateWithoutDeletedByUserInput, MasterMenuUncheckedUpdateWithoutDeletedByUserInput>
  }

  export type MasterMenuUpdateManyWithWhereWithoutDeletedByUserInput = {
    where: MasterMenuScalarWhereInput
    data: XOR<MasterMenuUpdateManyMutationInput, MasterMenuUncheckedUpdateManyWithoutDeletedByUserInput>
  }

  export type SubMenuUpsertWithWhereUniqueWithoutCreatedByUserInput = {
    where: SubMenuWhereUniqueInput
    update: XOR<SubMenuUpdateWithoutCreatedByUserInput, SubMenuUncheckedUpdateWithoutCreatedByUserInput>
    create: XOR<SubMenuCreateWithoutCreatedByUserInput, SubMenuUncheckedCreateWithoutCreatedByUserInput>
  }

  export type SubMenuUpdateWithWhereUniqueWithoutCreatedByUserInput = {
    where: SubMenuWhereUniqueInput
    data: XOR<SubMenuUpdateWithoutCreatedByUserInput, SubMenuUncheckedUpdateWithoutCreatedByUserInput>
  }

  export type SubMenuUpdateManyWithWhereWithoutCreatedByUserInput = {
    where: SubMenuScalarWhereInput
    data: XOR<SubMenuUpdateManyMutationInput, SubMenuUncheckedUpdateManyWithoutCreatedByUserInput>
  }

  export type SubMenuScalarWhereInput = {
    AND?: SubMenuScalarWhereInput | SubMenuScalarWhereInput[]
    OR?: SubMenuScalarWhereInput[]
    NOT?: SubMenuScalarWhereInput | SubMenuScalarWhereInput[]
    id?: IntFilter<"SubMenu"> | number
    uid?: StringFilter<"SubMenu"> | string
    masterMenuId?: IntFilter<"SubMenu"> | number
    name?: StringFilter<"SubMenu"> | string
    description?: StringNullableFilter<"SubMenu"> | string | null
    url?: StringNullableFilter<"SubMenu"> | string | null
    icon?: StringNullableFilter<"SubMenu"> | string | null
    order?: IntFilter<"SubMenu"> | number
    status?: IntFilter<"SubMenu"> | number
    createdBy?: IntNullableFilter<"SubMenu"> | number | null
    createdAt?: DateTimeFilter<"SubMenu"> | Date | string
    updatedBy?: IntNullableFilter<"SubMenu"> | number | null
    updatedAt?: DateTimeNullableFilter<"SubMenu"> | Date | string | null
    deletedBy?: IntNullableFilter<"SubMenu"> | number | null
    deletedAt?: DateTimeNullableFilter<"SubMenu"> | Date | string | null
  }

  export type SubMenuUpsertWithWhereUniqueWithoutUpdatedByUserInput = {
    where: SubMenuWhereUniqueInput
    update: XOR<SubMenuUpdateWithoutUpdatedByUserInput, SubMenuUncheckedUpdateWithoutUpdatedByUserInput>
    create: XOR<SubMenuCreateWithoutUpdatedByUserInput, SubMenuUncheckedCreateWithoutUpdatedByUserInput>
  }

  export type SubMenuUpdateWithWhereUniqueWithoutUpdatedByUserInput = {
    where: SubMenuWhereUniqueInput
    data: XOR<SubMenuUpdateWithoutUpdatedByUserInput, SubMenuUncheckedUpdateWithoutUpdatedByUserInput>
  }

  export type SubMenuUpdateManyWithWhereWithoutUpdatedByUserInput = {
    where: SubMenuScalarWhereInput
    data: XOR<SubMenuUpdateManyMutationInput, SubMenuUncheckedUpdateManyWithoutUpdatedByUserInput>
  }

  export type SubMenuUpsertWithWhereUniqueWithoutDeletedByUserInput = {
    where: SubMenuWhereUniqueInput
    update: XOR<SubMenuUpdateWithoutDeletedByUserInput, SubMenuUncheckedUpdateWithoutDeletedByUserInput>
    create: XOR<SubMenuCreateWithoutDeletedByUserInput, SubMenuUncheckedCreateWithoutDeletedByUserInput>
  }

  export type SubMenuUpdateWithWhereUniqueWithoutDeletedByUserInput = {
    where: SubMenuWhereUniqueInput
    data: XOR<SubMenuUpdateWithoutDeletedByUserInput, SubMenuUncheckedUpdateWithoutDeletedByUserInput>
  }

  export type SubMenuUpdateManyWithWhereWithoutDeletedByUserInput = {
    where: SubMenuScalarWhereInput
    data: XOR<SubMenuUpdateManyMutationInput, SubMenuUncheckedUpdateManyWithoutDeletedByUserInput>
  }

  export type RoleMenuAccessUpsertWithWhereUniqueWithoutCreatedByUserInput = {
    where: RoleMenuAccessWhereUniqueInput
    update: XOR<RoleMenuAccessUpdateWithoutCreatedByUserInput, RoleMenuAccessUncheckedUpdateWithoutCreatedByUserInput>
    create: XOR<RoleMenuAccessCreateWithoutCreatedByUserInput, RoleMenuAccessUncheckedCreateWithoutCreatedByUserInput>
  }

  export type RoleMenuAccessUpdateWithWhereUniqueWithoutCreatedByUserInput = {
    where: RoleMenuAccessWhereUniqueInput
    data: XOR<RoleMenuAccessUpdateWithoutCreatedByUserInput, RoleMenuAccessUncheckedUpdateWithoutCreatedByUserInput>
  }

  export type RoleMenuAccessUpdateManyWithWhereWithoutCreatedByUserInput = {
    where: RoleMenuAccessScalarWhereInput
    data: XOR<RoleMenuAccessUpdateManyMutationInput, RoleMenuAccessUncheckedUpdateManyWithoutCreatedByUserInput>
  }

  export type RoleMenuAccessScalarWhereInput = {
    AND?: RoleMenuAccessScalarWhereInput | RoleMenuAccessScalarWhereInput[]
    OR?: RoleMenuAccessScalarWhereInput[]
    NOT?: RoleMenuAccessScalarWhereInput | RoleMenuAccessScalarWhereInput[]
    id?: IntFilter<"RoleMenuAccess"> | number
    uid?: StringFilter<"RoleMenuAccess"> | string
    name?: StringFilter<"RoleMenuAccess"> | string
    description?: StringNullableFilter<"RoleMenuAccess"> | string | null
    roleId?: IntFilter<"RoleMenuAccess"> | number
    submenuId?: IntFilter<"RoleMenuAccess"> | number
    status?: IntFilter<"RoleMenuAccess"> | number
    createdBy?: IntNullableFilter<"RoleMenuAccess"> | number | null
    createdAt?: DateTimeFilter<"RoleMenuAccess"> | Date | string
    updatedBy?: IntNullableFilter<"RoleMenuAccess"> | number | null
    updatedAt?: DateTimeNullableFilter<"RoleMenuAccess"> | Date | string | null
    deletedBy?: IntNullableFilter<"RoleMenuAccess"> | number | null
    deletedAt?: DateTimeNullableFilter<"RoleMenuAccess"> | Date | string | null
  }

  export type RoleMenuAccessUpsertWithWhereUniqueWithoutUpdatedByUserInput = {
    where: RoleMenuAccessWhereUniqueInput
    update: XOR<RoleMenuAccessUpdateWithoutUpdatedByUserInput, RoleMenuAccessUncheckedUpdateWithoutUpdatedByUserInput>
    create: XOR<RoleMenuAccessCreateWithoutUpdatedByUserInput, RoleMenuAccessUncheckedCreateWithoutUpdatedByUserInput>
  }

  export type RoleMenuAccessUpdateWithWhereUniqueWithoutUpdatedByUserInput = {
    where: RoleMenuAccessWhereUniqueInput
    data: XOR<RoleMenuAccessUpdateWithoutUpdatedByUserInput, RoleMenuAccessUncheckedUpdateWithoutUpdatedByUserInput>
  }

  export type RoleMenuAccessUpdateManyWithWhereWithoutUpdatedByUserInput = {
    where: RoleMenuAccessScalarWhereInput
    data: XOR<RoleMenuAccessUpdateManyMutationInput, RoleMenuAccessUncheckedUpdateManyWithoutUpdatedByUserInput>
  }

  export type RoleMenuAccessUpsertWithWhereUniqueWithoutDeletedByUserInput = {
    where: RoleMenuAccessWhereUniqueInput
    update: XOR<RoleMenuAccessUpdateWithoutDeletedByUserInput, RoleMenuAccessUncheckedUpdateWithoutDeletedByUserInput>
    create: XOR<RoleMenuAccessCreateWithoutDeletedByUserInput, RoleMenuAccessUncheckedCreateWithoutDeletedByUserInput>
  }

  export type RoleMenuAccessUpdateWithWhereUniqueWithoutDeletedByUserInput = {
    where: RoleMenuAccessWhereUniqueInput
    data: XOR<RoleMenuAccessUpdateWithoutDeletedByUserInput, RoleMenuAccessUncheckedUpdateWithoutDeletedByUserInput>
  }

  export type RoleMenuAccessUpdateManyWithWhereWithoutDeletedByUserInput = {
    where: RoleMenuAccessScalarWhereInput
    data: XOR<RoleMenuAccessUpdateManyMutationInput, RoleMenuAccessUncheckedUpdateManyWithoutDeletedByUserInput>
  }

  export type UserCreateWithoutRolesInput = {
    uid?: string
    username: string
    email: string
    password: string
    firstName: string
    lastName?: string | null
    token?: string | null
    refreshToken?: string | null
    status?: number
    latestLoginAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string | null
    deletedAt?: Date | string | null
    role: RoleCreateNestedOneWithoutUserInput
    createdRoles?: RoleCreateNestedManyWithoutCreatedByUserInput
    updatedRoles?: RoleCreateNestedManyWithoutUpdatedByUserInput
    deletedRoles?: RoleCreateNestedManyWithoutDeletedByUserInput
    createdMenus?: MasterMenuCreateNestedManyWithoutCreatedByUserInput
    updatedMenus?: MasterMenuCreateNestedManyWithoutUpdatedByUserInput
    deletedMenus?: MasterMenuCreateNestedManyWithoutDeletedByUserInput
    createdSubMenus?: SubMenuCreateNestedManyWithoutCreatedByUserInput
    updatedSubMenus?: SubMenuCreateNestedManyWithoutUpdatedByUserInput
    deletedSubMenus?: SubMenuCreateNestedManyWithoutDeletedByUserInput
    createdAccesses?: RoleMenuAccessCreateNestedManyWithoutCreatedByUserInput
    updatedAccesses?: RoleMenuAccessCreateNestedManyWithoutUpdatedByUserInput
    deletedAccesses?: RoleMenuAccessCreateNestedManyWithoutDeletedByUserInput
  }

  export type UserUncheckedCreateWithoutRolesInput = {
    id?: number
    uid?: string
    roleId: number
    username: string
    email: string
    password: string
    firstName: string
    lastName?: string | null
    token?: string | null
    refreshToken?: string | null
    status?: number
    latestLoginAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string | null
    deletedAt?: Date | string | null
    createdRoles?: RoleUncheckedCreateNestedManyWithoutCreatedByUserInput
    updatedRoles?: RoleUncheckedCreateNestedManyWithoutUpdatedByUserInput
    deletedRoles?: RoleUncheckedCreateNestedManyWithoutDeletedByUserInput
    createdMenus?: MasterMenuUncheckedCreateNestedManyWithoutCreatedByUserInput
    updatedMenus?: MasterMenuUncheckedCreateNestedManyWithoutUpdatedByUserInput
    deletedMenus?: MasterMenuUncheckedCreateNestedManyWithoutDeletedByUserInput
    createdSubMenus?: SubMenuUncheckedCreateNestedManyWithoutCreatedByUserInput
    updatedSubMenus?: SubMenuUncheckedCreateNestedManyWithoutUpdatedByUserInput
    deletedSubMenus?: SubMenuUncheckedCreateNestedManyWithoutDeletedByUserInput
    createdAccesses?: RoleMenuAccessUncheckedCreateNestedManyWithoutCreatedByUserInput
    updatedAccesses?: RoleMenuAccessUncheckedCreateNestedManyWithoutUpdatedByUserInput
    deletedAccesses?: RoleMenuAccessUncheckedCreateNestedManyWithoutDeletedByUserInput
  }

  export type UserCreateOrConnectWithoutRolesInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutRolesInput, UserUncheckedCreateWithoutRolesInput>
  }

  export type UserCreateWithoutCreatedRolesInput = {
    uid?: string
    username: string
    email: string
    password: string
    firstName: string
    lastName?: string | null
    token?: string | null
    refreshToken?: string | null
    status?: number
    latestLoginAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string | null
    deletedAt?: Date | string | null
    role: RoleCreateNestedOneWithoutUserInput
    roles?: RoleCreateNestedManyWithoutUsersInput
    updatedRoles?: RoleCreateNestedManyWithoutUpdatedByUserInput
    deletedRoles?: RoleCreateNestedManyWithoutDeletedByUserInput
    createdMenus?: MasterMenuCreateNestedManyWithoutCreatedByUserInput
    updatedMenus?: MasterMenuCreateNestedManyWithoutUpdatedByUserInput
    deletedMenus?: MasterMenuCreateNestedManyWithoutDeletedByUserInput
    createdSubMenus?: SubMenuCreateNestedManyWithoutCreatedByUserInput
    updatedSubMenus?: SubMenuCreateNestedManyWithoutUpdatedByUserInput
    deletedSubMenus?: SubMenuCreateNestedManyWithoutDeletedByUserInput
    createdAccesses?: RoleMenuAccessCreateNestedManyWithoutCreatedByUserInput
    updatedAccesses?: RoleMenuAccessCreateNestedManyWithoutUpdatedByUserInput
    deletedAccesses?: RoleMenuAccessCreateNestedManyWithoutDeletedByUserInput
  }

  export type UserUncheckedCreateWithoutCreatedRolesInput = {
    id?: number
    uid?: string
    roleId: number
    username: string
    email: string
    password: string
    firstName: string
    lastName?: string | null
    token?: string | null
    refreshToken?: string | null
    status?: number
    latestLoginAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string | null
    deletedAt?: Date | string | null
    roles?: RoleUncheckedCreateNestedManyWithoutUsersInput
    updatedRoles?: RoleUncheckedCreateNestedManyWithoutUpdatedByUserInput
    deletedRoles?: RoleUncheckedCreateNestedManyWithoutDeletedByUserInput
    createdMenus?: MasterMenuUncheckedCreateNestedManyWithoutCreatedByUserInput
    updatedMenus?: MasterMenuUncheckedCreateNestedManyWithoutUpdatedByUserInput
    deletedMenus?: MasterMenuUncheckedCreateNestedManyWithoutDeletedByUserInput
    createdSubMenus?: SubMenuUncheckedCreateNestedManyWithoutCreatedByUserInput
    updatedSubMenus?: SubMenuUncheckedCreateNestedManyWithoutUpdatedByUserInput
    deletedSubMenus?: SubMenuUncheckedCreateNestedManyWithoutDeletedByUserInput
    createdAccesses?: RoleMenuAccessUncheckedCreateNestedManyWithoutCreatedByUserInput
    updatedAccesses?: RoleMenuAccessUncheckedCreateNestedManyWithoutUpdatedByUserInput
    deletedAccesses?: RoleMenuAccessUncheckedCreateNestedManyWithoutDeletedByUserInput
  }

  export type UserCreateOrConnectWithoutCreatedRolesInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutCreatedRolesInput, UserUncheckedCreateWithoutCreatedRolesInput>
  }

  export type UserCreateWithoutUpdatedRolesInput = {
    uid?: string
    username: string
    email: string
    password: string
    firstName: string
    lastName?: string | null
    token?: string | null
    refreshToken?: string | null
    status?: number
    latestLoginAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string | null
    deletedAt?: Date | string | null
    role: RoleCreateNestedOneWithoutUserInput
    roles?: RoleCreateNestedManyWithoutUsersInput
    createdRoles?: RoleCreateNestedManyWithoutCreatedByUserInput
    deletedRoles?: RoleCreateNestedManyWithoutDeletedByUserInput
    createdMenus?: MasterMenuCreateNestedManyWithoutCreatedByUserInput
    updatedMenus?: MasterMenuCreateNestedManyWithoutUpdatedByUserInput
    deletedMenus?: MasterMenuCreateNestedManyWithoutDeletedByUserInput
    createdSubMenus?: SubMenuCreateNestedManyWithoutCreatedByUserInput
    updatedSubMenus?: SubMenuCreateNestedManyWithoutUpdatedByUserInput
    deletedSubMenus?: SubMenuCreateNestedManyWithoutDeletedByUserInput
    createdAccesses?: RoleMenuAccessCreateNestedManyWithoutCreatedByUserInput
    updatedAccesses?: RoleMenuAccessCreateNestedManyWithoutUpdatedByUserInput
    deletedAccesses?: RoleMenuAccessCreateNestedManyWithoutDeletedByUserInput
  }

  export type UserUncheckedCreateWithoutUpdatedRolesInput = {
    id?: number
    uid?: string
    roleId: number
    username: string
    email: string
    password: string
    firstName: string
    lastName?: string | null
    token?: string | null
    refreshToken?: string | null
    status?: number
    latestLoginAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string | null
    deletedAt?: Date | string | null
    roles?: RoleUncheckedCreateNestedManyWithoutUsersInput
    createdRoles?: RoleUncheckedCreateNestedManyWithoutCreatedByUserInput
    deletedRoles?: RoleUncheckedCreateNestedManyWithoutDeletedByUserInput
    createdMenus?: MasterMenuUncheckedCreateNestedManyWithoutCreatedByUserInput
    updatedMenus?: MasterMenuUncheckedCreateNestedManyWithoutUpdatedByUserInput
    deletedMenus?: MasterMenuUncheckedCreateNestedManyWithoutDeletedByUserInput
    createdSubMenus?: SubMenuUncheckedCreateNestedManyWithoutCreatedByUserInput
    updatedSubMenus?: SubMenuUncheckedCreateNestedManyWithoutUpdatedByUserInput
    deletedSubMenus?: SubMenuUncheckedCreateNestedManyWithoutDeletedByUserInput
    createdAccesses?: RoleMenuAccessUncheckedCreateNestedManyWithoutCreatedByUserInput
    updatedAccesses?: RoleMenuAccessUncheckedCreateNestedManyWithoutUpdatedByUserInput
    deletedAccesses?: RoleMenuAccessUncheckedCreateNestedManyWithoutDeletedByUserInput
  }

  export type UserCreateOrConnectWithoutUpdatedRolesInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutUpdatedRolesInput, UserUncheckedCreateWithoutUpdatedRolesInput>
  }

  export type UserCreateWithoutDeletedRolesInput = {
    uid?: string
    username: string
    email: string
    password: string
    firstName: string
    lastName?: string | null
    token?: string | null
    refreshToken?: string | null
    status?: number
    latestLoginAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string | null
    deletedAt?: Date | string | null
    role: RoleCreateNestedOneWithoutUserInput
    roles?: RoleCreateNestedManyWithoutUsersInput
    createdRoles?: RoleCreateNestedManyWithoutCreatedByUserInput
    updatedRoles?: RoleCreateNestedManyWithoutUpdatedByUserInput
    createdMenus?: MasterMenuCreateNestedManyWithoutCreatedByUserInput
    updatedMenus?: MasterMenuCreateNestedManyWithoutUpdatedByUserInput
    deletedMenus?: MasterMenuCreateNestedManyWithoutDeletedByUserInput
    createdSubMenus?: SubMenuCreateNestedManyWithoutCreatedByUserInput
    updatedSubMenus?: SubMenuCreateNestedManyWithoutUpdatedByUserInput
    deletedSubMenus?: SubMenuCreateNestedManyWithoutDeletedByUserInput
    createdAccesses?: RoleMenuAccessCreateNestedManyWithoutCreatedByUserInput
    updatedAccesses?: RoleMenuAccessCreateNestedManyWithoutUpdatedByUserInput
    deletedAccesses?: RoleMenuAccessCreateNestedManyWithoutDeletedByUserInput
  }

  export type UserUncheckedCreateWithoutDeletedRolesInput = {
    id?: number
    uid?: string
    roleId: number
    username: string
    email: string
    password: string
    firstName: string
    lastName?: string | null
    token?: string | null
    refreshToken?: string | null
    status?: number
    latestLoginAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string | null
    deletedAt?: Date | string | null
    roles?: RoleUncheckedCreateNestedManyWithoutUsersInput
    createdRoles?: RoleUncheckedCreateNestedManyWithoutCreatedByUserInput
    updatedRoles?: RoleUncheckedCreateNestedManyWithoutUpdatedByUserInput
    createdMenus?: MasterMenuUncheckedCreateNestedManyWithoutCreatedByUserInput
    updatedMenus?: MasterMenuUncheckedCreateNestedManyWithoutUpdatedByUserInput
    deletedMenus?: MasterMenuUncheckedCreateNestedManyWithoutDeletedByUserInput
    createdSubMenus?: SubMenuUncheckedCreateNestedManyWithoutCreatedByUserInput
    updatedSubMenus?: SubMenuUncheckedCreateNestedManyWithoutUpdatedByUserInput
    deletedSubMenus?: SubMenuUncheckedCreateNestedManyWithoutDeletedByUserInput
    createdAccesses?: RoleMenuAccessUncheckedCreateNestedManyWithoutCreatedByUserInput
    updatedAccesses?: RoleMenuAccessUncheckedCreateNestedManyWithoutUpdatedByUserInput
    deletedAccesses?: RoleMenuAccessUncheckedCreateNestedManyWithoutDeletedByUserInput
  }

  export type UserCreateOrConnectWithoutDeletedRolesInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutDeletedRolesInput, UserUncheckedCreateWithoutDeletedRolesInput>
  }

  export type UserCreateWithoutRoleInput = {
    uid?: string
    username: string
    email: string
    password: string
    firstName: string
    lastName?: string | null
    token?: string | null
    refreshToken?: string | null
    status?: number
    latestLoginAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string | null
    deletedAt?: Date | string | null
    roles?: RoleCreateNestedManyWithoutUsersInput
    createdRoles?: RoleCreateNestedManyWithoutCreatedByUserInput
    updatedRoles?: RoleCreateNestedManyWithoutUpdatedByUserInput
    deletedRoles?: RoleCreateNestedManyWithoutDeletedByUserInput
    createdMenus?: MasterMenuCreateNestedManyWithoutCreatedByUserInput
    updatedMenus?: MasterMenuCreateNestedManyWithoutUpdatedByUserInput
    deletedMenus?: MasterMenuCreateNestedManyWithoutDeletedByUserInput
    createdSubMenus?: SubMenuCreateNestedManyWithoutCreatedByUserInput
    updatedSubMenus?: SubMenuCreateNestedManyWithoutUpdatedByUserInput
    deletedSubMenus?: SubMenuCreateNestedManyWithoutDeletedByUserInput
    createdAccesses?: RoleMenuAccessCreateNestedManyWithoutCreatedByUserInput
    updatedAccesses?: RoleMenuAccessCreateNestedManyWithoutUpdatedByUserInput
    deletedAccesses?: RoleMenuAccessCreateNestedManyWithoutDeletedByUserInput
  }

  export type UserUncheckedCreateWithoutRoleInput = {
    id?: number
    uid?: string
    username: string
    email: string
    password: string
    firstName: string
    lastName?: string | null
    token?: string | null
    refreshToken?: string | null
    status?: number
    latestLoginAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string | null
    deletedAt?: Date | string | null
    roles?: RoleUncheckedCreateNestedManyWithoutUsersInput
    createdRoles?: RoleUncheckedCreateNestedManyWithoutCreatedByUserInput
    updatedRoles?: RoleUncheckedCreateNestedManyWithoutUpdatedByUserInput
    deletedRoles?: RoleUncheckedCreateNestedManyWithoutDeletedByUserInput
    createdMenus?: MasterMenuUncheckedCreateNestedManyWithoutCreatedByUserInput
    updatedMenus?: MasterMenuUncheckedCreateNestedManyWithoutUpdatedByUserInput
    deletedMenus?: MasterMenuUncheckedCreateNestedManyWithoutDeletedByUserInput
    createdSubMenus?: SubMenuUncheckedCreateNestedManyWithoutCreatedByUserInput
    updatedSubMenus?: SubMenuUncheckedCreateNestedManyWithoutUpdatedByUserInput
    deletedSubMenus?: SubMenuUncheckedCreateNestedManyWithoutDeletedByUserInput
    createdAccesses?: RoleMenuAccessUncheckedCreateNestedManyWithoutCreatedByUserInput
    updatedAccesses?: RoleMenuAccessUncheckedCreateNestedManyWithoutUpdatedByUserInput
    deletedAccesses?: RoleMenuAccessUncheckedCreateNestedManyWithoutDeletedByUserInput
  }

  export type UserCreateOrConnectWithoutRoleInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutRoleInput, UserUncheckedCreateWithoutRoleInput>
  }

  export type UserCreateManyRoleInputEnvelope = {
    data: UserCreateManyRoleInput | UserCreateManyRoleInput[]
    skipDuplicates?: boolean
  }

  export type RoleMenuAccessCreateWithoutRoleInput = {
    uid?: string
    name: string
    description?: string | null
    status?: number
    createdAt?: Date | string
    updatedAt?: Date | string | null
    deletedAt?: Date | string | null
    subMenu: SubMenuCreateNestedOneWithoutRoleMenuAccessInput
    createdByUser?: UserCreateNestedOneWithoutCreatedAccessesInput
    updatedByUser?: UserCreateNestedOneWithoutUpdatedAccessesInput
    deletedByUser?: UserCreateNestedOneWithoutDeletedAccessesInput
  }

  export type RoleMenuAccessUncheckedCreateWithoutRoleInput = {
    id?: number
    uid?: string
    name: string
    description?: string | null
    submenuId: number
    status?: number
    createdBy?: number | null
    createdAt?: Date | string
    updatedBy?: number | null
    updatedAt?: Date | string | null
    deletedBy?: number | null
    deletedAt?: Date | string | null
  }

  export type RoleMenuAccessCreateOrConnectWithoutRoleInput = {
    where: RoleMenuAccessWhereUniqueInput
    create: XOR<RoleMenuAccessCreateWithoutRoleInput, RoleMenuAccessUncheckedCreateWithoutRoleInput>
  }

  export type RoleMenuAccessCreateManyRoleInputEnvelope = {
    data: RoleMenuAccessCreateManyRoleInput | RoleMenuAccessCreateManyRoleInput[]
    skipDuplicates?: boolean
  }

  export type UserUpsertWithWhereUniqueWithoutRolesInput = {
    where: UserWhereUniqueInput
    update: XOR<UserUpdateWithoutRolesInput, UserUncheckedUpdateWithoutRolesInput>
    create: XOR<UserCreateWithoutRolesInput, UserUncheckedCreateWithoutRolesInput>
  }

  export type UserUpdateWithWhereUniqueWithoutRolesInput = {
    where: UserWhereUniqueInput
    data: XOR<UserUpdateWithoutRolesInput, UserUncheckedUpdateWithoutRolesInput>
  }

  export type UserUpdateManyWithWhereWithoutRolesInput = {
    where: UserScalarWhereInput
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyWithoutRolesInput>
  }

  export type UserScalarWhereInput = {
    AND?: UserScalarWhereInput | UserScalarWhereInput[]
    OR?: UserScalarWhereInput[]
    NOT?: UserScalarWhereInput | UserScalarWhereInput[]
    id?: IntFilter<"User"> | number
    uid?: StringFilter<"User"> | string
    roleId?: IntFilter<"User"> | number
    username?: StringFilter<"User"> | string
    email?: StringFilter<"User"> | string
    password?: StringFilter<"User"> | string
    firstName?: StringFilter<"User"> | string
    lastName?: StringNullableFilter<"User"> | string | null
    token?: StringNullableFilter<"User"> | string | null
    refreshToken?: StringNullableFilter<"User"> | string | null
    status?: IntFilter<"User"> | number
    latestLoginAt?: DateTimeNullableFilter<"User"> | Date | string | null
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeNullableFilter<"User"> | Date | string | null
    deletedAt?: DateTimeNullableFilter<"User"> | Date | string | null
  }

  export type UserUpsertWithoutCreatedRolesInput = {
    update: XOR<UserUpdateWithoutCreatedRolesInput, UserUncheckedUpdateWithoutCreatedRolesInput>
    create: XOR<UserCreateWithoutCreatedRolesInput, UserUncheckedCreateWithoutCreatedRolesInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutCreatedRolesInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutCreatedRolesInput, UserUncheckedUpdateWithoutCreatedRolesInput>
  }

  export type UserUpdateWithoutCreatedRolesInput = {
    uid?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: NullableStringFieldUpdateOperationsInput | string | null
    token?: NullableStringFieldUpdateOperationsInput | string | null
    refreshToken?: NullableStringFieldUpdateOperationsInput | string | null
    status?: IntFieldUpdateOperationsInput | number
    latestLoginAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    role?: RoleUpdateOneRequiredWithoutUserNestedInput
    roles?: RoleUpdateManyWithoutUsersNestedInput
    updatedRoles?: RoleUpdateManyWithoutUpdatedByUserNestedInput
    deletedRoles?: RoleUpdateManyWithoutDeletedByUserNestedInput
    createdMenus?: MasterMenuUpdateManyWithoutCreatedByUserNestedInput
    updatedMenus?: MasterMenuUpdateManyWithoutUpdatedByUserNestedInput
    deletedMenus?: MasterMenuUpdateManyWithoutDeletedByUserNestedInput
    createdSubMenus?: SubMenuUpdateManyWithoutCreatedByUserNestedInput
    updatedSubMenus?: SubMenuUpdateManyWithoutUpdatedByUserNestedInput
    deletedSubMenus?: SubMenuUpdateManyWithoutDeletedByUserNestedInput
    createdAccesses?: RoleMenuAccessUpdateManyWithoutCreatedByUserNestedInput
    updatedAccesses?: RoleMenuAccessUpdateManyWithoutUpdatedByUserNestedInput
    deletedAccesses?: RoleMenuAccessUpdateManyWithoutDeletedByUserNestedInput
  }

  export type UserUncheckedUpdateWithoutCreatedRolesInput = {
    id?: IntFieldUpdateOperationsInput | number
    uid?: StringFieldUpdateOperationsInput | string
    roleId?: IntFieldUpdateOperationsInput | number
    username?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: NullableStringFieldUpdateOperationsInput | string | null
    token?: NullableStringFieldUpdateOperationsInput | string | null
    refreshToken?: NullableStringFieldUpdateOperationsInput | string | null
    status?: IntFieldUpdateOperationsInput | number
    latestLoginAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    roles?: RoleUncheckedUpdateManyWithoutUsersNestedInput
    updatedRoles?: RoleUncheckedUpdateManyWithoutUpdatedByUserNestedInput
    deletedRoles?: RoleUncheckedUpdateManyWithoutDeletedByUserNestedInput
    createdMenus?: MasterMenuUncheckedUpdateManyWithoutCreatedByUserNestedInput
    updatedMenus?: MasterMenuUncheckedUpdateManyWithoutUpdatedByUserNestedInput
    deletedMenus?: MasterMenuUncheckedUpdateManyWithoutDeletedByUserNestedInput
    createdSubMenus?: SubMenuUncheckedUpdateManyWithoutCreatedByUserNestedInput
    updatedSubMenus?: SubMenuUncheckedUpdateManyWithoutUpdatedByUserNestedInput
    deletedSubMenus?: SubMenuUncheckedUpdateManyWithoutDeletedByUserNestedInput
    createdAccesses?: RoleMenuAccessUncheckedUpdateManyWithoutCreatedByUserNestedInput
    updatedAccesses?: RoleMenuAccessUncheckedUpdateManyWithoutUpdatedByUserNestedInput
    deletedAccesses?: RoleMenuAccessUncheckedUpdateManyWithoutDeletedByUserNestedInput
  }

  export type UserUpsertWithoutUpdatedRolesInput = {
    update: XOR<UserUpdateWithoutUpdatedRolesInput, UserUncheckedUpdateWithoutUpdatedRolesInput>
    create: XOR<UserCreateWithoutUpdatedRolesInput, UserUncheckedCreateWithoutUpdatedRolesInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutUpdatedRolesInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutUpdatedRolesInput, UserUncheckedUpdateWithoutUpdatedRolesInput>
  }

  export type UserUpdateWithoutUpdatedRolesInput = {
    uid?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: NullableStringFieldUpdateOperationsInput | string | null
    token?: NullableStringFieldUpdateOperationsInput | string | null
    refreshToken?: NullableStringFieldUpdateOperationsInput | string | null
    status?: IntFieldUpdateOperationsInput | number
    latestLoginAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    role?: RoleUpdateOneRequiredWithoutUserNestedInput
    roles?: RoleUpdateManyWithoutUsersNestedInput
    createdRoles?: RoleUpdateManyWithoutCreatedByUserNestedInput
    deletedRoles?: RoleUpdateManyWithoutDeletedByUserNestedInput
    createdMenus?: MasterMenuUpdateManyWithoutCreatedByUserNestedInput
    updatedMenus?: MasterMenuUpdateManyWithoutUpdatedByUserNestedInput
    deletedMenus?: MasterMenuUpdateManyWithoutDeletedByUserNestedInput
    createdSubMenus?: SubMenuUpdateManyWithoutCreatedByUserNestedInput
    updatedSubMenus?: SubMenuUpdateManyWithoutUpdatedByUserNestedInput
    deletedSubMenus?: SubMenuUpdateManyWithoutDeletedByUserNestedInput
    createdAccesses?: RoleMenuAccessUpdateManyWithoutCreatedByUserNestedInput
    updatedAccesses?: RoleMenuAccessUpdateManyWithoutUpdatedByUserNestedInput
    deletedAccesses?: RoleMenuAccessUpdateManyWithoutDeletedByUserNestedInput
  }

  export type UserUncheckedUpdateWithoutUpdatedRolesInput = {
    id?: IntFieldUpdateOperationsInput | number
    uid?: StringFieldUpdateOperationsInput | string
    roleId?: IntFieldUpdateOperationsInput | number
    username?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: NullableStringFieldUpdateOperationsInput | string | null
    token?: NullableStringFieldUpdateOperationsInput | string | null
    refreshToken?: NullableStringFieldUpdateOperationsInput | string | null
    status?: IntFieldUpdateOperationsInput | number
    latestLoginAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    roles?: RoleUncheckedUpdateManyWithoutUsersNestedInput
    createdRoles?: RoleUncheckedUpdateManyWithoutCreatedByUserNestedInput
    deletedRoles?: RoleUncheckedUpdateManyWithoutDeletedByUserNestedInput
    createdMenus?: MasterMenuUncheckedUpdateManyWithoutCreatedByUserNestedInput
    updatedMenus?: MasterMenuUncheckedUpdateManyWithoutUpdatedByUserNestedInput
    deletedMenus?: MasterMenuUncheckedUpdateManyWithoutDeletedByUserNestedInput
    createdSubMenus?: SubMenuUncheckedUpdateManyWithoutCreatedByUserNestedInput
    updatedSubMenus?: SubMenuUncheckedUpdateManyWithoutUpdatedByUserNestedInput
    deletedSubMenus?: SubMenuUncheckedUpdateManyWithoutDeletedByUserNestedInput
    createdAccesses?: RoleMenuAccessUncheckedUpdateManyWithoutCreatedByUserNestedInput
    updatedAccesses?: RoleMenuAccessUncheckedUpdateManyWithoutUpdatedByUserNestedInput
    deletedAccesses?: RoleMenuAccessUncheckedUpdateManyWithoutDeletedByUserNestedInput
  }

  export type UserUpsertWithoutDeletedRolesInput = {
    update: XOR<UserUpdateWithoutDeletedRolesInput, UserUncheckedUpdateWithoutDeletedRolesInput>
    create: XOR<UserCreateWithoutDeletedRolesInput, UserUncheckedCreateWithoutDeletedRolesInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutDeletedRolesInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutDeletedRolesInput, UserUncheckedUpdateWithoutDeletedRolesInput>
  }

  export type UserUpdateWithoutDeletedRolesInput = {
    uid?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: NullableStringFieldUpdateOperationsInput | string | null
    token?: NullableStringFieldUpdateOperationsInput | string | null
    refreshToken?: NullableStringFieldUpdateOperationsInput | string | null
    status?: IntFieldUpdateOperationsInput | number
    latestLoginAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    role?: RoleUpdateOneRequiredWithoutUserNestedInput
    roles?: RoleUpdateManyWithoutUsersNestedInput
    createdRoles?: RoleUpdateManyWithoutCreatedByUserNestedInput
    updatedRoles?: RoleUpdateManyWithoutUpdatedByUserNestedInput
    createdMenus?: MasterMenuUpdateManyWithoutCreatedByUserNestedInput
    updatedMenus?: MasterMenuUpdateManyWithoutUpdatedByUserNestedInput
    deletedMenus?: MasterMenuUpdateManyWithoutDeletedByUserNestedInput
    createdSubMenus?: SubMenuUpdateManyWithoutCreatedByUserNestedInput
    updatedSubMenus?: SubMenuUpdateManyWithoutUpdatedByUserNestedInput
    deletedSubMenus?: SubMenuUpdateManyWithoutDeletedByUserNestedInput
    createdAccesses?: RoleMenuAccessUpdateManyWithoutCreatedByUserNestedInput
    updatedAccesses?: RoleMenuAccessUpdateManyWithoutUpdatedByUserNestedInput
    deletedAccesses?: RoleMenuAccessUpdateManyWithoutDeletedByUserNestedInput
  }

  export type UserUncheckedUpdateWithoutDeletedRolesInput = {
    id?: IntFieldUpdateOperationsInput | number
    uid?: StringFieldUpdateOperationsInput | string
    roleId?: IntFieldUpdateOperationsInput | number
    username?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: NullableStringFieldUpdateOperationsInput | string | null
    token?: NullableStringFieldUpdateOperationsInput | string | null
    refreshToken?: NullableStringFieldUpdateOperationsInput | string | null
    status?: IntFieldUpdateOperationsInput | number
    latestLoginAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    roles?: RoleUncheckedUpdateManyWithoutUsersNestedInput
    createdRoles?: RoleUncheckedUpdateManyWithoutCreatedByUserNestedInput
    updatedRoles?: RoleUncheckedUpdateManyWithoutUpdatedByUserNestedInput
    createdMenus?: MasterMenuUncheckedUpdateManyWithoutCreatedByUserNestedInput
    updatedMenus?: MasterMenuUncheckedUpdateManyWithoutUpdatedByUserNestedInput
    deletedMenus?: MasterMenuUncheckedUpdateManyWithoutDeletedByUserNestedInput
    createdSubMenus?: SubMenuUncheckedUpdateManyWithoutCreatedByUserNestedInput
    updatedSubMenus?: SubMenuUncheckedUpdateManyWithoutUpdatedByUserNestedInput
    deletedSubMenus?: SubMenuUncheckedUpdateManyWithoutDeletedByUserNestedInput
    createdAccesses?: RoleMenuAccessUncheckedUpdateManyWithoutCreatedByUserNestedInput
    updatedAccesses?: RoleMenuAccessUncheckedUpdateManyWithoutUpdatedByUserNestedInput
    deletedAccesses?: RoleMenuAccessUncheckedUpdateManyWithoutDeletedByUserNestedInput
  }

  export type UserUpsertWithWhereUniqueWithoutRoleInput = {
    where: UserWhereUniqueInput
    update: XOR<UserUpdateWithoutRoleInput, UserUncheckedUpdateWithoutRoleInput>
    create: XOR<UserCreateWithoutRoleInput, UserUncheckedCreateWithoutRoleInput>
  }

  export type UserUpdateWithWhereUniqueWithoutRoleInput = {
    where: UserWhereUniqueInput
    data: XOR<UserUpdateWithoutRoleInput, UserUncheckedUpdateWithoutRoleInput>
  }

  export type UserUpdateManyWithWhereWithoutRoleInput = {
    where: UserScalarWhereInput
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyWithoutRoleInput>
  }

  export type RoleMenuAccessUpsertWithWhereUniqueWithoutRoleInput = {
    where: RoleMenuAccessWhereUniqueInput
    update: XOR<RoleMenuAccessUpdateWithoutRoleInput, RoleMenuAccessUncheckedUpdateWithoutRoleInput>
    create: XOR<RoleMenuAccessCreateWithoutRoleInput, RoleMenuAccessUncheckedCreateWithoutRoleInput>
  }

  export type RoleMenuAccessUpdateWithWhereUniqueWithoutRoleInput = {
    where: RoleMenuAccessWhereUniqueInput
    data: XOR<RoleMenuAccessUpdateWithoutRoleInput, RoleMenuAccessUncheckedUpdateWithoutRoleInput>
  }

  export type RoleMenuAccessUpdateManyWithWhereWithoutRoleInput = {
    where: RoleMenuAccessScalarWhereInput
    data: XOR<RoleMenuAccessUpdateManyMutationInput, RoleMenuAccessUncheckedUpdateManyWithoutRoleInput>
  }

  export type SubMenuCreateWithoutMasterMenuInput = {
    uid?: string
    name: string
    description?: string | null
    url?: string | null
    icon?: string | null
    order?: number
    status?: number
    createdAt?: Date | string
    updatedAt?: Date | string | null
    deletedAt?: Date | string | null
    createdByUser?: UserCreateNestedOneWithoutCreatedSubMenusInput
    updatedByUser?: UserCreateNestedOneWithoutUpdatedSubMenusInput
    deletedByUser?: UserCreateNestedOneWithoutDeletedSubMenusInput
    RoleMenuAccess?: RoleMenuAccessCreateNestedManyWithoutSubMenuInput
  }

  export type SubMenuUncheckedCreateWithoutMasterMenuInput = {
    id?: number
    uid?: string
    name: string
    description?: string | null
    url?: string | null
    icon?: string | null
    order?: number
    status?: number
    createdBy?: number | null
    createdAt?: Date | string
    updatedBy?: number | null
    updatedAt?: Date | string | null
    deletedBy?: number | null
    deletedAt?: Date | string | null
    RoleMenuAccess?: RoleMenuAccessUncheckedCreateNestedManyWithoutSubMenuInput
  }

  export type SubMenuCreateOrConnectWithoutMasterMenuInput = {
    where: SubMenuWhereUniqueInput
    create: XOR<SubMenuCreateWithoutMasterMenuInput, SubMenuUncheckedCreateWithoutMasterMenuInput>
  }

  export type SubMenuCreateManyMasterMenuInputEnvelope = {
    data: SubMenuCreateManyMasterMenuInput | SubMenuCreateManyMasterMenuInput[]
    skipDuplicates?: boolean
  }

  export type UserCreateWithoutCreatedMenusInput = {
    uid?: string
    username: string
    email: string
    password: string
    firstName: string
    lastName?: string | null
    token?: string | null
    refreshToken?: string | null
    status?: number
    latestLoginAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string | null
    deletedAt?: Date | string | null
    role: RoleCreateNestedOneWithoutUserInput
    roles?: RoleCreateNestedManyWithoutUsersInput
    createdRoles?: RoleCreateNestedManyWithoutCreatedByUserInput
    updatedRoles?: RoleCreateNestedManyWithoutUpdatedByUserInput
    deletedRoles?: RoleCreateNestedManyWithoutDeletedByUserInput
    updatedMenus?: MasterMenuCreateNestedManyWithoutUpdatedByUserInput
    deletedMenus?: MasterMenuCreateNestedManyWithoutDeletedByUserInput
    createdSubMenus?: SubMenuCreateNestedManyWithoutCreatedByUserInput
    updatedSubMenus?: SubMenuCreateNestedManyWithoutUpdatedByUserInput
    deletedSubMenus?: SubMenuCreateNestedManyWithoutDeletedByUserInput
    createdAccesses?: RoleMenuAccessCreateNestedManyWithoutCreatedByUserInput
    updatedAccesses?: RoleMenuAccessCreateNestedManyWithoutUpdatedByUserInput
    deletedAccesses?: RoleMenuAccessCreateNestedManyWithoutDeletedByUserInput
  }

  export type UserUncheckedCreateWithoutCreatedMenusInput = {
    id?: number
    uid?: string
    roleId: number
    username: string
    email: string
    password: string
    firstName: string
    lastName?: string | null
    token?: string | null
    refreshToken?: string | null
    status?: number
    latestLoginAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string | null
    deletedAt?: Date | string | null
    roles?: RoleUncheckedCreateNestedManyWithoutUsersInput
    createdRoles?: RoleUncheckedCreateNestedManyWithoutCreatedByUserInput
    updatedRoles?: RoleUncheckedCreateNestedManyWithoutUpdatedByUserInput
    deletedRoles?: RoleUncheckedCreateNestedManyWithoutDeletedByUserInput
    updatedMenus?: MasterMenuUncheckedCreateNestedManyWithoutUpdatedByUserInput
    deletedMenus?: MasterMenuUncheckedCreateNestedManyWithoutDeletedByUserInput
    createdSubMenus?: SubMenuUncheckedCreateNestedManyWithoutCreatedByUserInput
    updatedSubMenus?: SubMenuUncheckedCreateNestedManyWithoutUpdatedByUserInput
    deletedSubMenus?: SubMenuUncheckedCreateNestedManyWithoutDeletedByUserInput
    createdAccesses?: RoleMenuAccessUncheckedCreateNestedManyWithoutCreatedByUserInput
    updatedAccesses?: RoleMenuAccessUncheckedCreateNestedManyWithoutUpdatedByUserInput
    deletedAccesses?: RoleMenuAccessUncheckedCreateNestedManyWithoutDeletedByUserInput
  }

  export type UserCreateOrConnectWithoutCreatedMenusInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutCreatedMenusInput, UserUncheckedCreateWithoutCreatedMenusInput>
  }

  export type UserCreateWithoutUpdatedMenusInput = {
    uid?: string
    username: string
    email: string
    password: string
    firstName: string
    lastName?: string | null
    token?: string | null
    refreshToken?: string | null
    status?: number
    latestLoginAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string | null
    deletedAt?: Date | string | null
    role: RoleCreateNestedOneWithoutUserInput
    roles?: RoleCreateNestedManyWithoutUsersInput
    createdRoles?: RoleCreateNestedManyWithoutCreatedByUserInput
    updatedRoles?: RoleCreateNestedManyWithoutUpdatedByUserInput
    deletedRoles?: RoleCreateNestedManyWithoutDeletedByUserInput
    createdMenus?: MasterMenuCreateNestedManyWithoutCreatedByUserInput
    deletedMenus?: MasterMenuCreateNestedManyWithoutDeletedByUserInput
    createdSubMenus?: SubMenuCreateNestedManyWithoutCreatedByUserInput
    updatedSubMenus?: SubMenuCreateNestedManyWithoutUpdatedByUserInput
    deletedSubMenus?: SubMenuCreateNestedManyWithoutDeletedByUserInput
    createdAccesses?: RoleMenuAccessCreateNestedManyWithoutCreatedByUserInput
    updatedAccesses?: RoleMenuAccessCreateNestedManyWithoutUpdatedByUserInput
    deletedAccesses?: RoleMenuAccessCreateNestedManyWithoutDeletedByUserInput
  }

  export type UserUncheckedCreateWithoutUpdatedMenusInput = {
    id?: number
    uid?: string
    roleId: number
    username: string
    email: string
    password: string
    firstName: string
    lastName?: string | null
    token?: string | null
    refreshToken?: string | null
    status?: number
    latestLoginAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string | null
    deletedAt?: Date | string | null
    roles?: RoleUncheckedCreateNestedManyWithoutUsersInput
    createdRoles?: RoleUncheckedCreateNestedManyWithoutCreatedByUserInput
    updatedRoles?: RoleUncheckedCreateNestedManyWithoutUpdatedByUserInput
    deletedRoles?: RoleUncheckedCreateNestedManyWithoutDeletedByUserInput
    createdMenus?: MasterMenuUncheckedCreateNestedManyWithoutCreatedByUserInput
    deletedMenus?: MasterMenuUncheckedCreateNestedManyWithoutDeletedByUserInput
    createdSubMenus?: SubMenuUncheckedCreateNestedManyWithoutCreatedByUserInput
    updatedSubMenus?: SubMenuUncheckedCreateNestedManyWithoutUpdatedByUserInput
    deletedSubMenus?: SubMenuUncheckedCreateNestedManyWithoutDeletedByUserInput
    createdAccesses?: RoleMenuAccessUncheckedCreateNestedManyWithoutCreatedByUserInput
    updatedAccesses?: RoleMenuAccessUncheckedCreateNestedManyWithoutUpdatedByUserInput
    deletedAccesses?: RoleMenuAccessUncheckedCreateNestedManyWithoutDeletedByUserInput
  }

  export type UserCreateOrConnectWithoutUpdatedMenusInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutUpdatedMenusInput, UserUncheckedCreateWithoutUpdatedMenusInput>
  }

  export type UserCreateWithoutDeletedMenusInput = {
    uid?: string
    username: string
    email: string
    password: string
    firstName: string
    lastName?: string | null
    token?: string | null
    refreshToken?: string | null
    status?: number
    latestLoginAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string | null
    deletedAt?: Date | string | null
    role: RoleCreateNestedOneWithoutUserInput
    roles?: RoleCreateNestedManyWithoutUsersInput
    createdRoles?: RoleCreateNestedManyWithoutCreatedByUserInput
    updatedRoles?: RoleCreateNestedManyWithoutUpdatedByUserInput
    deletedRoles?: RoleCreateNestedManyWithoutDeletedByUserInput
    createdMenus?: MasterMenuCreateNestedManyWithoutCreatedByUserInput
    updatedMenus?: MasterMenuCreateNestedManyWithoutUpdatedByUserInput
    createdSubMenus?: SubMenuCreateNestedManyWithoutCreatedByUserInput
    updatedSubMenus?: SubMenuCreateNestedManyWithoutUpdatedByUserInput
    deletedSubMenus?: SubMenuCreateNestedManyWithoutDeletedByUserInput
    createdAccesses?: RoleMenuAccessCreateNestedManyWithoutCreatedByUserInput
    updatedAccesses?: RoleMenuAccessCreateNestedManyWithoutUpdatedByUserInput
    deletedAccesses?: RoleMenuAccessCreateNestedManyWithoutDeletedByUserInput
  }

  export type UserUncheckedCreateWithoutDeletedMenusInput = {
    id?: number
    uid?: string
    roleId: number
    username: string
    email: string
    password: string
    firstName: string
    lastName?: string | null
    token?: string | null
    refreshToken?: string | null
    status?: number
    latestLoginAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string | null
    deletedAt?: Date | string | null
    roles?: RoleUncheckedCreateNestedManyWithoutUsersInput
    createdRoles?: RoleUncheckedCreateNestedManyWithoutCreatedByUserInput
    updatedRoles?: RoleUncheckedCreateNestedManyWithoutUpdatedByUserInput
    deletedRoles?: RoleUncheckedCreateNestedManyWithoutDeletedByUserInput
    createdMenus?: MasterMenuUncheckedCreateNestedManyWithoutCreatedByUserInput
    updatedMenus?: MasterMenuUncheckedCreateNestedManyWithoutUpdatedByUserInput
    createdSubMenus?: SubMenuUncheckedCreateNestedManyWithoutCreatedByUserInput
    updatedSubMenus?: SubMenuUncheckedCreateNestedManyWithoutUpdatedByUserInput
    deletedSubMenus?: SubMenuUncheckedCreateNestedManyWithoutDeletedByUserInput
    createdAccesses?: RoleMenuAccessUncheckedCreateNestedManyWithoutCreatedByUserInput
    updatedAccesses?: RoleMenuAccessUncheckedCreateNestedManyWithoutUpdatedByUserInput
    deletedAccesses?: RoleMenuAccessUncheckedCreateNestedManyWithoutDeletedByUserInput
  }

  export type UserCreateOrConnectWithoutDeletedMenusInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutDeletedMenusInput, UserUncheckedCreateWithoutDeletedMenusInput>
  }

  export type SubMenuUpsertWithWhereUniqueWithoutMasterMenuInput = {
    where: SubMenuWhereUniqueInput
    update: XOR<SubMenuUpdateWithoutMasterMenuInput, SubMenuUncheckedUpdateWithoutMasterMenuInput>
    create: XOR<SubMenuCreateWithoutMasterMenuInput, SubMenuUncheckedCreateWithoutMasterMenuInput>
  }

  export type SubMenuUpdateWithWhereUniqueWithoutMasterMenuInput = {
    where: SubMenuWhereUniqueInput
    data: XOR<SubMenuUpdateWithoutMasterMenuInput, SubMenuUncheckedUpdateWithoutMasterMenuInput>
  }

  export type SubMenuUpdateManyWithWhereWithoutMasterMenuInput = {
    where: SubMenuScalarWhereInput
    data: XOR<SubMenuUpdateManyMutationInput, SubMenuUncheckedUpdateManyWithoutMasterMenuInput>
  }

  export type UserUpsertWithoutCreatedMenusInput = {
    update: XOR<UserUpdateWithoutCreatedMenusInput, UserUncheckedUpdateWithoutCreatedMenusInput>
    create: XOR<UserCreateWithoutCreatedMenusInput, UserUncheckedCreateWithoutCreatedMenusInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutCreatedMenusInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutCreatedMenusInput, UserUncheckedUpdateWithoutCreatedMenusInput>
  }

  export type UserUpdateWithoutCreatedMenusInput = {
    uid?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: NullableStringFieldUpdateOperationsInput | string | null
    token?: NullableStringFieldUpdateOperationsInput | string | null
    refreshToken?: NullableStringFieldUpdateOperationsInput | string | null
    status?: IntFieldUpdateOperationsInput | number
    latestLoginAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    role?: RoleUpdateOneRequiredWithoutUserNestedInput
    roles?: RoleUpdateManyWithoutUsersNestedInput
    createdRoles?: RoleUpdateManyWithoutCreatedByUserNestedInput
    updatedRoles?: RoleUpdateManyWithoutUpdatedByUserNestedInput
    deletedRoles?: RoleUpdateManyWithoutDeletedByUserNestedInput
    updatedMenus?: MasterMenuUpdateManyWithoutUpdatedByUserNestedInput
    deletedMenus?: MasterMenuUpdateManyWithoutDeletedByUserNestedInput
    createdSubMenus?: SubMenuUpdateManyWithoutCreatedByUserNestedInput
    updatedSubMenus?: SubMenuUpdateManyWithoutUpdatedByUserNestedInput
    deletedSubMenus?: SubMenuUpdateManyWithoutDeletedByUserNestedInput
    createdAccesses?: RoleMenuAccessUpdateManyWithoutCreatedByUserNestedInput
    updatedAccesses?: RoleMenuAccessUpdateManyWithoutUpdatedByUserNestedInput
    deletedAccesses?: RoleMenuAccessUpdateManyWithoutDeletedByUserNestedInput
  }

  export type UserUncheckedUpdateWithoutCreatedMenusInput = {
    id?: IntFieldUpdateOperationsInput | number
    uid?: StringFieldUpdateOperationsInput | string
    roleId?: IntFieldUpdateOperationsInput | number
    username?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: NullableStringFieldUpdateOperationsInput | string | null
    token?: NullableStringFieldUpdateOperationsInput | string | null
    refreshToken?: NullableStringFieldUpdateOperationsInput | string | null
    status?: IntFieldUpdateOperationsInput | number
    latestLoginAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    roles?: RoleUncheckedUpdateManyWithoutUsersNestedInput
    createdRoles?: RoleUncheckedUpdateManyWithoutCreatedByUserNestedInput
    updatedRoles?: RoleUncheckedUpdateManyWithoutUpdatedByUserNestedInput
    deletedRoles?: RoleUncheckedUpdateManyWithoutDeletedByUserNestedInput
    updatedMenus?: MasterMenuUncheckedUpdateManyWithoutUpdatedByUserNestedInput
    deletedMenus?: MasterMenuUncheckedUpdateManyWithoutDeletedByUserNestedInput
    createdSubMenus?: SubMenuUncheckedUpdateManyWithoutCreatedByUserNestedInput
    updatedSubMenus?: SubMenuUncheckedUpdateManyWithoutUpdatedByUserNestedInput
    deletedSubMenus?: SubMenuUncheckedUpdateManyWithoutDeletedByUserNestedInput
    createdAccesses?: RoleMenuAccessUncheckedUpdateManyWithoutCreatedByUserNestedInput
    updatedAccesses?: RoleMenuAccessUncheckedUpdateManyWithoutUpdatedByUserNestedInput
    deletedAccesses?: RoleMenuAccessUncheckedUpdateManyWithoutDeletedByUserNestedInput
  }

  export type UserUpsertWithoutUpdatedMenusInput = {
    update: XOR<UserUpdateWithoutUpdatedMenusInput, UserUncheckedUpdateWithoutUpdatedMenusInput>
    create: XOR<UserCreateWithoutUpdatedMenusInput, UserUncheckedCreateWithoutUpdatedMenusInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutUpdatedMenusInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutUpdatedMenusInput, UserUncheckedUpdateWithoutUpdatedMenusInput>
  }

  export type UserUpdateWithoutUpdatedMenusInput = {
    uid?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: NullableStringFieldUpdateOperationsInput | string | null
    token?: NullableStringFieldUpdateOperationsInput | string | null
    refreshToken?: NullableStringFieldUpdateOperationsInput | string | null
    status?: IntFieldUpdateOperationsInput | number
    latestLoginAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    role?: RoleUpdateOneRequiredWithoutUserNestedInput
    roles?: RoleUpdateManyWithoutUsersNestedInput
    createdRoles?: RoleUpdateManyWithoutCreatedByUserNestedInput
    updatedRoles?: RoleUpdateManyWithoutUpdatedByUserNestedInput
    deletedRoles?: RoleUpdateManyWithoutDeletedByUserNestedInput
    createdMenus?: MasterMenuUpdateManyWithoutCreatedByUserNestedInput
    deletedMenus?: MasterMenuUpdateManyWithoutDeletedByUserNestedInput
    createdSubMenus?: SubMenuUpdateManyWithoutCreatedByUserNestedInput
    updatedSubMenus?: SubMenuUpdateManyWithoutUpdatedByUserNestedInput
    deletedSubMenus?: SubMenuUpdateManyWithoutDeletedByUserNestedInput
    createdAccesses?: RoleMenuAccessUpdateManyWithoutCreatedByUserNestedInput
    updatedAccesses?: RoleMenuAccessUpdateManyWithoutUpdatedByUserNestedInput
    deletedAccesses?: RoleMenuAccessUpdateManyWithoutDeletedByUserNestedInput
  }

  export type UserUncheckedUpdateWithoutUpdatedMenusInput = {
    id?: IntFieldUpdateOperationsInput | number
    uid?: StringFieldUpdateOperationsInput | string
    roleId?: IntFieldUpdateOperationsInput | number
    username?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: NullableStringFieldUpdateOperationsInput | string | null
    token?: NullableStringFieldUpdateOperationsInput | string | null
    refreshToken?: NullableStringFieldUpdateOperationsInput | string | null
    status?: IntFieldUpdateOperationsInput | number
    latestLoginAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    roles?: RoleUncheckedUpdateManyWithoutUsersNestedInput
    createdRoles?: RoleUncheckedUpdateManyWithoutCreatedByUserNestedInput
    updatedRoles?: RoleUncheckedUpdateManyWithoutUpdatedByUserNestedInput
    deletedRoles?: RoleUncheckedUpdateManyWithoutDeletedByUserNestedInput
    createdMenus?: MasterMenuUncheckedUpdateManyWithoutCreatedByUserNestedInput
    deletedMenus?: MasterMenuUncheckedUpdateManyWithoutDeletedByUserNestedInput
    createdSubMenus?: SubMenuUncheckedUpdateManyWithoutCreatedByUserNestedInput
    updatedSubMenus?: SubMenuUncheckedUpdateManyWithoutUpdatedByUserNestedInput
    deletedSubMenus?: SubMenuUncheckedUpdateManyWithoutDeletedByUserNestedInput
    createdAccesses?: RoleMenuAccessUncheckedUpdateManyWithoutCreatedByUserNestedInput
    updatedAccesses?: RoleMenuAccessUncheckedUpdateManyWithoutUpdatedByUserNestedInput
    deletedAccesses?: RoleMenuAccessUncheckedUpdateManyWithoutDeletedByUserNestedInput
  }

  export type UserUpsertWithoutDeletedMenusInput = {
    update: XOR<UserUpdateWithoutDeletedMenusInput, UserUncheckedUpdateWithoutDeletedMenusInput>
    create: XOR<UserCreateWithoutDeletedMenusInput, UserUncheckedCreateWithoutDeletedMenusInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutDeletedMenusInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutDeletedMenusInput, UserUncheckedUpdateWithoutDeletedMenusInput>
  }

  export type UserUpdateWithoutDeletedMenusInput = {
    uid?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: NullableStringFieldUpdateOperationsInput | string | null
    token?: NullableStringFieldUpdateOperationsInput | string | null
    refreshToken?: NullableStringFieldUpdateOperationsInput | string | null
    status?: IntFieldUpdateOperationsInput | number
    latestLoginAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    role?: RoleUpdateOneRequiredWithoutUserNestedInput
    roles?: RoleUpdateManyWithoutUsersNestedInput
    createdRoles?: RoleUpdateManyWithoutCreatedByUserNestedInput
    updatedRoles?: RoleUpdateManyWithoutUpdatedByUserNestedInput
    deletedRoles?: RoleUpdateManyWithoutDeletedByUserNestedInput
    createdMenus?: MasterMenuUpdateManyWithoutCreatedByUserNestedInput
    updatedMenus?: MasterMenuUpdateManyWithoutUpdatedByUserNestedInput
    createdSubMenus?: SubMenuUpdateManyWithoutCreatedByUserNestedInput
    updatedSubMenus?: SubMenuUpdateManyWithoutUpdatedByUserNestedInput
    deletedSubMenus?: SubMenuUpdateManyWithoutDeletedByUserNestedInput
    createdAccesses?: RoleMenuAccessUpdateManyWithoutCreatedByUserNestedInput
    updatedAccesses?: RoleMenuAccessUpdateManyWithoutUpdatedByUserNestedInput
    deletedAccesses?: RoleMenuAccessUpdateManyWithoutDeletedByUserNestedInput
  }

  export type UserUncheckedUpdateWithoutDeletedMenusInput = {
    id?: IntFieldUpdateOperationsInput | number
    uid?: StringFieldUpdateOperationsInput | string
    roleId?: IntFieldUpdateOperationsInput | number
    username?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: NullableStringFieldUpdateOperationsInput | string | null
    token?: NullableStringFieldUpdateOperationsInput | string | null
    refreshToken?: NullableStringFieldUpdateOperationsInput | string | null
    status?: IntFieldUpdateOperationsInput | number
    latestLoginAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    roles?: RoleUncheckedUpdateManyWithoutUsersNestedInput
    createdRoles?: RoleUncheckedUpdateManyWithoutCreatedByUserNestedInput
    updatedRoles?: RoleUncheckedUpdateManyWithoutUpdatedByUserNestedInput
    deletedRoles?: RoleUncheckedUpdateManyWithoutDeletedByUserNestedInput
    createdMenus?: MasterMenuUncheckedUpdateManyWithoutCreatedByUserNestedInput
    updatedMenus?: MasterMenuUncheckedUpdateManyWithoutUpdatedByUserNestedInput
    createdSubMenus?: SubMenuUncheckedUpdateManyWithoutCreatedByUserNestedInput
    updatedSubMenus?: SubMenuUncheckedUpdateManyWithoutUpdatedByUserNestedInput
    deletedSubMenus?: SubMenuUncheckedUpdateManyWithoutDeletedByUserNestedInput
    createdAccesses?: RoleMenuAccessUncheckedUpdateManyWithoutCreatedByUserNestedInput
    updatedAccesses?: RoleMenuAccessUncheckedUpdateManyWithoutUpdatedByUserNestedInput
    deletedAccesses?: RoleMenuAccessUncheckedUpdateManyWithoutDeletedByUserNestedInput
  }

  export type MasterMenuCreateWithoutSubMenusInput = {
    uid?: string
    name: string
    description?: string | null
    url?: string | null
    icon?: string | null
    order?: number
    status?: number
    createdAt?: Date | string
    updatedAt?: Date | string | null
    deletedAt?: Date | string | null
    createdByUser?: UserCreateNestedOneWithoutCreatedMenusInput
    updatedByUser?: UserCreateNestedOneWithoutUpdatedMenusInput
    deletedByUser?: UserCreateNestedOneWithoutDeletedMenusInput
  }

  export type MasterMenuUncheckedCreateWithoutSubMenusInput = {
    id?: number
    uid?: string
    name: string
    description?: string | null
    url?: string | null
    icon?: string | null
    order?: number
    status?: number
    createdBy?: number | null
    createdAt?: Date | string
    updatedBy?: number | null
    updatedAt?: Date | string | null
    deletedBy?: number | null
    deletedAt?: Date | string | null
  }

  export type MasterMenuCreateOrConnectWithoutSubMenusInput = {
    where: MasterMenuWhereUniqueInput
    create: XOR<MasterMenuCreateWithoutSubMenusInput, MasterMenuUncheckedCreateWithoutSubMenusInput>
  }

  export type UserCreateWithoutCreatedSubMenusInput = {
    uid?: string
    username: string
    email: string
    password: string
    firstName: string
    lastName?: string | null
    token?: string | null
    refreshToken?: string | null
    status?: number
    latestLoginAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string | null
    deletedAt?: Date | string | null
    role: RoleCreateNestedOneWithoutUserInput
    roles?: RoleCreateNestedManyWithoutUsersInput
    createdRoles?: RoleCreateNestedManyWithoutCreatedByUserInput
    updatedRoles?: RoleCreateNestedManyWithoutUpdatedByUserInput
    deletedRoles?: RoleCreateNestedManyWithoutDeletedByUserInput
    createdMenus?: MasterMenuCreateNestedManyWithoutCreatedByUserInput
    updatedMenus?: MasterMenuCreateNestedManyWithoutUpdatedByUserInput
    deletedMenus?: MasterMenuCreateNestedManyWithoutDeletedByUserInput
    updatedSubMenus?: SubMenuCreateNestedManyWithoutUpdatedByUserInput
    deletedSubMenus?: SubMenuCreateNestedManyWithoutDeletedByUserInput
    createdAccesses?: RoleMenuAccessCreateNestedManyWithoutCreatedByUserInput
    updatedAccesses?: RoleMenuAccessCreateNestedManyWithoutUpdatedByUserInput
    deletedAccesses?: RoleMenuAccessCreateNestedManyWithoutDeletedByUserInput
  }

  export type UserUncheckedCreateWithoutCreatedSubMenusInput = {
    id?: number
    uid?: string
    roleId: number
    username: string
    email: string
    password: string
    firstName: string
    lastName?: string | null
    token?: string | null
    refreshToken?: string | null
    status?: number
    latestLoginAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string | null
    deletedAt?: Date | string | null
    roles?: RoleUncheckedCreateNestedManyWithoutUsersInput
    createdRoles?: RoleUncheckedCreateNestedManyWithoutCreatedByUserInput
    updatedRoles?: RoleUncheckedCreateNestedManyWithoutUpdatedByUserInput
    deletedRoles?: RoleUncheckedCreateNestedManyWithoutDeletedByUserInput
    createdMenus?: MasterMenuUncheckedCreateNestedManyWithoutCreatedByUserInput
    updatedMenus?: MasterMenuUncheckedCreateNestedManyWithoutUpdatedByUserInput
    deletedMenus?: MasterMenuUncheckedCreateNestedManyWithoutDeletedByUserInput
    updatedSubMenus?: SubMenuUncheckedCreateNestedManyWithoutUpdatedByUserInput
    deletedSubMenus?: SubMenuUncheckedCreateNestedManyWithoutDeletedByUserInput
    createdAccesses?: RoleMenuAccessUncheckedCreateNestedManyWithoutCreatedByUserInput
    updatedAccesses?: RoleMenuAccessUncheckedCreateNestedManyWithoutUpdatedByUserInput
    deletedAccesses?: RoleMenuAccessUncheckedCreateNestedManyWithoutDeletedByUserInput
  }

  export type UserCreateOrConnectWithoutCreatedSubMenusInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutCreatedSubMenusInput, UserUncheckedCreateWithoutCreatedSubMenusInput>
  }

  export type UserCreateWithoutUpdatedSubMenusInput = {
    uid?: string
    username: string
    email: string
    password: string
    firstName: string
    lastName?: string | null
    token?: string | null
    refreshToken?: string | null
    status?: number
    latestLoginAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string | null
    deletedAt?: Date | string | null
    role: RoleCreateNestedOneWithoutUserInput
    roles?: RoleCreateNestedManyWithoutUsersInput
    createdRoles?: RoleCreateNestedManyWithoutCreatedByUserInput
    updatedRoles?: RoleCreateNestedManyWithoutUpdatedByUserInput
    deletedRoles?: RoleCreateNestedManyWithoutDeletedByUserInput
    createdMenus?: MasterMenuCreateNestedManyWithoutCreatedByUserInput
    updatedMenus?: MasterMenuCreateNestedManyWithoutUpdatedByUserInput
    deletedMenus?: MasterMenuCreateNestedManyWithoutDeletedByUserInput
    createdSubMenus?: SubMenuCreateNestedManyWithoutCreatedByUserInput
    deletedSubMenus?: SubMenuCreateNestedManyWithoutDeletedByUserInput
    createdAccesses?: RoleMenuAccessCreateNestedManyWithoutCreatedByUserInput
    updatedAccesses?: RoleMenuAccessCreateNestedManyWithoutUpdatedByUserInput
    deletedAccesses?: RoleMenuAccessCreateNestedManyWithoutDeletedByUserInput
  }

  export type UserUncheckedCreateWithoutUpdatedSubMenusInput = {
    id?: number
    uid?: string
    roleId: number
    username: string
    email: string
    password: string
    firstName: string
    lastName?: string | null
    token?: string | null
    refreshToken?: string | null
    status?: number
    latestLoginAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string | null
    deletedAt?: Date | string | null
    roles?: RoleUncheckedCreateNestedManyWithoutUsersInput
    createdRoles?: RoleUncheckedCreateNestedManyWithoutCreatedByUserInput
    updatedRoles?: RoleUncheckedCreateNestedManyWithoutUpdatedByUserInput
    deletedRoles?: RoleUncheckedCreateNestedManyWithoutDeletedByUserInput
    createdMenus?: MasterMenuUncheckedCreateNestedManyWithoutCreatedByUserInput
    updatedMenus?: MasterMenuUncheckedCreateNestedManyWithoutUpdatedByUserInput
    deletedMenus?: MasterMenuUncheckedCreateNestedManyWithoutDeletedByUserInput
    createdSubMenus?: SubMenuUncheckedCreateNestedManyWithoutCreatedByUserInput
    deletedSubMenus?: SubMenuUncheckedCreateNestedManyWithoutDeletedByUserInput
    createdAccesses?: RoleMenuAccessUncheckedCreateNestedManyWithoutCreatedByUserInput
    updatedAccesses?: RoleMenuAccessUncheckedCreateNestedManyWithoutUpdatedByUserInput
    deletedAccesses?: RoleMenuAccessUncheckedCreateNestedManyWithoutDeletedByUserInput
  }

  export type UserCreateOrConnectWithoutUpdatedSubMenusInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutUpdatedSubMenusInput, UserUncheckedCreateWithoutUpdatedSubMenusInput>
  }

  export type UserCreateWithoutDeletedSubMenusInput = {
    uid?: string
    username: string
    email: string
    password: string
    firstName: string
    lastName?: string | null
    token?: string | null
    refreshToken?: string | null
    status?: number
    latestLoginAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string | null
    deletedAt?: Date | string | null
    role: RoleCreateNestedOneWithoutUserInput
    roles?: RoleCreateNestedManyWithoutUsersInput
    createdRoles?: RoleCreateNestedManyWithoutCreatedByUserInput
    updatedRoles?: RoleCreateNestedManyWithoutUpdatedByUserInput
    deletedRoles?: RoleCreateNestedManyWithoutDeletedByUserInput
    createdMenus?: MasterMenuCreateNestedManyWithoutCreatedByUserInput
    updatedMenus?: MasterMenuCreateNestedManyWithoutUpdatedByUserInput
    deletedMenus?: MasterMenuCreateNestedManyWithoutDeletedByUserInput
    createdSubMenus?: SubMenuCreateNestedManyWithoutCreatedByUserInput
    updatedSubMenus?: SubMenuCreateNestedManyWithoutUpdatedByUserInput
    createdAccesses?: RoleMenuAccessCreateNestedManyWithoutCreatedByUserInput
    updatedAccesses?: RoleMenuAccessCreateNestedManyWithoutUpdatedByUserInput
    deletedAccesses?: RoleMenuAccessCreateNestedManyWithoutDeletedByUserInput
  }

  export type UserUncheckedCreateWithoutDeletedSubMenusInput = {
    id?: number
    uid?: string
    roleId: number
    username: string
    email: string
    password: string
    firstName: string
    lastName?: string | null
    token?: string | null
    refreshToken?: string | null
    status?: number
    latestLoginAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string | null
    deletedAt?: Date | string | null
    roles?: RoleUncheckedCreateNestedManyWithoutUsersInput
    createdRoles?: RoleUncheckedCreateNestedManyWithoutCreatedByUserInput
    updatedRoles?: RoleUncheckedCreateNestedManyWithoutUpdatedByUserInput
    deletedRoles?: RoleUncheckedCreateNestedManyWithoutDeletedByUserInput
    createdMenus?: MasterMenuUncheckedCreateNestedManyWithoutCreatedByUserInput
    updatedMenus?: MasterMenuUncheckedCreateNestedManyWithoutUpdatedByUserInput
    deletedMenus?: MasterMenuUncheckedCreateNestedManyWithoutDeletedByUserInput
    createdSubMenus?: SubMenuUncheckedCreateNestedManyWithoutCreatedByUserInput
    updatedSubMenus?: SubMenuUncheckedCreateNestedManyWithoutUpdatedByUserInput
    createdAccesses?: RoleMenuAccessUncheckedCreateNestedManyWithoutCreatedByUserInput
    updatedAccesses?: RoleMenuAccessUncheckedCreateNestedManyWithoutUpdatedByUserInput
    deletedAccesses?: RoleMenuAccessUncheckedCreateNestedManyWithoutDeletedByUserInput
  }

  export type UserCreateOrConnectWithoutDeletedSubMenusInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutDeletedSubMenusInput, UserUncheckedCreateWithoutDeletedSubMenusInput>
  }

  export type RoleMenuAccessCreateWithoutSubMenuInput = {
    uid?: string
    name: string
    description?: string | null
    status?: number
    createdAt?: Date | string
    updatedAt?: Date | string | null
    deletedAt?: Date | string | null
    role: RoleCreateNestedOneWithoutRoleMenuAccessInput
    createdByUser?: UserCreateNestedOneWithoutCreatedAccessesInput
    updatedByUser?: UserCreateNestedOneWithoutUpdatedAccessesInput
    deletedByUser?: UserCreateNestedOneWithoutDeletedAccessesInput
  }

  export type RoleMenuAccessUncheckedCreateWithoutSubMenuInput = {
    id?: number
    uid?: string
    name: string
    description?: string | null
    roleId: number
    status?: number
    createdBy?: number | null
    createdAt?: Date | string
    updatedBy?: number | null
    updatedAt?: Date | string | null
    deletedBy?: number | null
    deletedAt?: Date | string | null
  }

  export type RoleMenuAccessCreateOrConnectWithoutSubMenuInput = {
    where: RoleMenuAccessWhereUniqueInput
    create: XOR<RoleMenuAccessCreateWithoutSubMenuInput, RoleMenuAccessUncheckedCreateWithoutSubMenuInput>
  }

  export type RoleMenuAccessCreateManySubMenuInputEnvelope = {
    data: RoleMenuAccessCreateManySubMenuInput | RoleMenuAccessCreateManySubMenuInput[]
    skipDuplicates?: boolean
  }

  export type MasterMenuUpsertWithoutSubMenusInput = {
    update: XOR<MasterMenuUpdateWithoutSubMenusInput, MasterMenuUncheckedUpdateWithoutSubMenusInput>
    create: XOR<MasterMenuCreateWithoutSubMenusInput, MasterMenuUncheckedCreateWithoutSubMenusInput>
    where?: MasterMenuWhereInput
  }

  export type MasterMenuUpdateToOneWithWhereWithoutSubMenusInput = {
    where?: MasterMenuWhereInput
    data: XOR<MasterMenuUpdateWithoutSubMenusInput, MasterMenuUncheckedUpdateWithoutSubMenusInput>
  }

  export type MasterMenuUpdateWithoutSubMenusInput = {
    uid?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    url?: NullableStringFieldUpdateOperationsInput | string | null
    icon?: NullableStringFieldUpdateOperationsInput | string | null
    order?: IntFieldUpdateOperationsInput | number
    status?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdByUser?: UserUpdateOneWithoutCreatedMenusNestedInput
    updatedByUser?: UserUpdateOneWithoutUpdatedMenusNestedInput
    deletedByUser?: UserUpdateOneWithoutDeletedMenusNestedInput
  }

  export type MasterMenuUncheckedUpdateWithoutSubMenusInput = {
    id?: IntFieldUpdateOperationsInput | number
    uid?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    url?: NullableStringFieldUpdateOperationsInput | string | null
    icon?: NullableStringFieldUpdateOperationsInput | string | null
    order?: IntFieldUpdateOperationsInput | number
    status?: IntFieldUpdateOperationsInput | number
    createdBy?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedBy?: NullableIntFieldUpdateOperationsInput | number | null
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deletedBy?: NullableIntFieldUpdateOperationsInput | number | null
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type UserUpsertWithoutCreatedSubMenusInput = {
    update: XOR<UserUpdateWithoutCreatedSubMenusInput, UserUncheckedUpdateWithoutCreatedSubMenusInput>
    create: XOR<UserCreateWithoutCreatedSubMenusInput, UserUncheckedCreateWithoutCreatedSubMenusInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutCreatedSubMenusInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutCreatedSubMenusInput, UserUncheckedUpdateWithoutCreatedSubMenusInput>
  }

  export type UserUpdateWithoutCreatedSubMenusInput = {
    uid?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: NullableStringFieldUpdateOperationsInput | string | null
    token?: NullableStringFieldUpdateOperationsInput | string | null
    refreshToken?: NullableStringFieldUpdateOperationsInput | string | null
    status?: IntFieldUpdateOperationsInput | number
    latestLoginAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    role?: RoleUpdateOneRequiredWithoutUserNestedInput
    roles?: RoleUpdateManyWithoutUsersNestedInput
    createdRoles?: RoleUpdateManyWithoutCreatedByUserNestedInput
    updatedRoles?: RoleUpdateManyWithoutUpdatedByUserNestedInput
    deletedRoles?: RoleUpdateManyWithoutDeletedByUserNestedInput
    createdMenus?: MasterMenuUpdateManyWithoutCreatedByUserNestedInput
    updatedMenus?: MasterMenuUpdateManyWithoutUpdatedByUserNestedInput
    deletedMenus?: MasterMenuUpdateManyWithoutDeletedByUserNestedInput
    updatedSubMenus?: SubMenuUpdateManyWithoutUpdatedByUserNestedInput
    deletedSubMenus?: SubMenuUpdateManyWithoutDeletedByUserNestedInput
    createdAccesses?: RoleMenuAccessUpdateManyWithoutCreatedByUserNestedInput
    updatedAccesses?: RoleMenuAccessUpdateManyWithoutUpdatedByUserNestedInput
    deletedAccesses?: RoleMenuAccessUpdateManyWithoutDeletedByUserNestedInput
  }

  export type UserUncheckedUpdateWithoutCreatedSubMenusInput = {
    id?: IntFieldUpdateOperationsInput | number
    uid?: StringFieldUpdateOperationsInput | string
    roleId?: IntFieldUpdateOperationsInput | number
    username?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: NullableStringFieldUpdateOperationsInput | string | null
    token?: NullableStringFieldUpdateOperationsInput | string | null
    refreshToken?: NullableStringFieldUpdateOperationsInput | string | null
    status?: IntFieldUpdateOperationsInput | number
    latestLoginAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    roles?: RoleUncheckedUpdateManyWithoutUsersNestedInput
    createdRoles?: RoleUncheckedUpdateManyWithoutCreatedByUserNestedInput
    updatedRoles?: RoleUncheckedUpdateManyWithoutUpdatedByUserNestedInput
    deletedRoles?: RoleUncheckedUpdateManyWithoutDeletedByUserNestedInput
    createdMenus?: MasterMenuUncheckedUpdateManyWithoutCreatedByUserNestedInput
    updatedMenus?: MasterMenuUncheckedUpdateManyWithoutUpdatedByUserNestedInput
    deletedMenus?: MasterMenuUncheckedUpdateManyWithoutDeletedByUserNestedInput
    updatedSubMenus?: SubMenuUncheckedUpdateManyWithoutUpdatedByUserNestedInput
    deletedSubMenus?: SubMenuUncheckedUpdateManyWithoutDeletedByUserNestedInput
    createdAccesses?: RoleMenuAccessUncheckedUpdateManyWithoutCreatedByUserNestedInput
    updatedAccesses?: RoleMenuAccessUncheckedUpdateManyWithoutUpdatedByUserNestedInput
    deletedAccesses?: RoleMenuAccessUncheckedUpdateManyWithoutDeletedByUserNestedInput
  }

  export type UserUpsertWithoutUpdatedSubMenusInput = {
    update: XOR<UserUpdateWithoutUpdatedSubMenusInput, UserUncheckedUpdateWithoutUpdatedSubMenusInput>
    create: XOR<UserCreateWithoutUpdatedSubMenusInput, UserUncheckedCreateWithoutUpdatedSubMenusInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutUpdatedSubMenusInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutUpdatedSubMenusInput, UserUncheckedUpdateWithoutUpdatedSubMenusInput>
  }

  export type UserUpdateWithoutUpdatedSubMenusInput = {
    uid?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: NullableStringFieldUpdateOperationsInput | string | null
    token?: NullableStringFieldUpdateOperationsInput | string | null
    refreshToken?: NullableStringFieldUpdateOperationsInput | string | null
    status?: IntFieldUpdateOperationsInput | number
    latestLoginAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    role?: RoleUpdateOneRequiredWithoutUserNestedInput
    roles?: RoleUpdateManyWithoutUsersNestedInput
    createdRoles?: RoleUpdateManyWithoutCreatedByUserNestedInput
    updatedRoles?: RoleUpdateManyWithoutUpdatedByUserNestedInput
    deletedRoles?: RoleUpdateManyWithoutDeletedByUserNestedInput
    createdMenus?: MasterMenuUpdateManyWithoutCreatedByUserNestedInput
    updatedMenus?: MasterMenuUpdateManyWithoutUpdatedByUserNestedInput
    deletedMenus?: MasterMenuUpdateManyWithoutDeletedByUserNestedInput
    createdSubMenus?: SubMenuUpdateManyWithoutCreatedByUserNestedInput
    deletedSubMenus?: SubMenuUpdateManyWithoutDeletedByUserNestedInput
    createdAccesses?: RoleMenuAccessUpdateManyWithoutCreatedByUserNestedInput
    updatedAccesses?: RoleMenuAccessUpdateManyWithoutUpdatedByUserNestedInput
    deletedAccesses?: RoleMenuAccessUpdateManyWithoutDeletedByUserNestedInput
  }

  export type UserUncheckedUpdateWithoutUpdatedSubMenusInput = {
    id?: IntFieldUpdateOperationsInput | number
    uid?: StringFieldUpdateOperationsInput | string
    roleId?: IntFieldUpdateOperationsInput | number
    username?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: NullableStringFieldUpdateOperationsInput | string | null
    token?: NullableStringFieldUpdateOperationsInput | string | null
    refreshToken?: NullableStringFieldUpdateOperationsInput | string | null
    status?: IntFieldUpdateOperationsInput | number
    latestLoginAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    roles?: RoleUncheckedUpdateManyWithoutUsersNestedInput
    createdRoles?: RoleUncheckedUpdateManyWithoutCreatedByUserNestedInput
    updatedRoles?: RoleUncheckedUpdateManyWithoutUpdatedByUserNestedInput
    deletedRoles?: RoleUncheckedUpdateManyWithoutDeletedByUserNestedInput
    createdMenus?: MasterMenuUncheckedUpdateManyWithoutCreatedByUserNestedInput
    updatedMenus?: MasterMenuUncheckedUpdateManyWithoutUpdatedByUserNestedInput
    deletedMenus?: MasterMenuUncheckedUpdateManyWithoutDeletedByUserNestedInput
    createdSubMenus?: SubMenuUncheckedUpdateManyWithoutCreatedByUserNestedInput
    deletedSubMenus?: SubMenuUncheckedUpdateManyWithoutDeletedByUserNestedInput
    createdAccesses?: RoleMenuAccessUncheckedUpdateManyWithoutCreatedByUserNestedInput
    updatedAccesses?: RoleMenuAccessUncheckedUpdateManyWithoutUpdatedByUserNestedInput
    deletedAccesses?: RoleMenuAccessUncheckedUpdateManyWithoutDeletedByUserNestedInput
  }

  export type UserUpsertWithoutDeletedSubMenusInput = {
    update: XOR<UserUpdateWithoutDeletedSubMenusInput, UserUncheckedUpdateWithoutDeletedSubMenusInput>
    create: XOR<UserCreateWithoutDeletedSubMenusInput, UserUncheckedCreateWithoutDeletedSubMenusInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutDeletedSubMenusInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutDeletedSubMenusInput, UserUncheckedUpdateWithoutDeletedSubMenusInput>
  }

  export type UserUpdateWithoutDeletedSubMenusInput = {
    uid?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: NullableStringFieldUpdateOperationsInput | string | null
    token?: NullableStringFieldUpdateOperationsInput | string | null
    refreshToken?: NullableStringFieldUpdateOperationsInput | string | null
    status?: IntFieldUpdateOperationsInput | number
    latestLoginAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    role?: RoleUpdateOneRequiredWithoutUserNestedInput
    roles?: RoleUpdateManyWithoutUsersNestedInput
    createdRoles?: RoleUpdateManyWithoutCreatedByUserNestedInput
    updatedRoles?: RoleUpdateManyWithoutUpdatedByUserNestedInput
    deletedRoles?: RoleUpdateManyWithoutDeletedByUserNestedInput
    createdMenus?: MasterMenuUpdateManyWithoutCreatedByUserNestedInput
    updatedMenus?: MasterMenuUpdateManyWithoutUpdatedByUserNestedInput
    deletedMenus?: MasterMenuUpdateManyWithoutDeletedByUserNestedInput
    createdSubMenus?: SubMenuUpdateManyWithoutCreatedByUserNestedInput
    updatedSubMenus?: SubMenuUpdateManyWithoutUpdatedByUserNestedInput
    createdAccesses?: RoleMenuAccessUpdateManyWithoutCreatedByUserNestedInput
    updatedAccesses?: RoleMenuAccessUpdateManyWithoutUpdatedByUserNestedInput
    deletedAccesses?: RoleMenuAccessUpdateManyWithoutDeletedByUserNestedInput
  }

  export type UserUncheckedUpdateWithoutDeletedSubMenusInput = {
    id?: IntFieldUpdateOperationsInput | number
    uid?: StringFieldUpdateOperationsInput | string
    roleId?: IntFieldUpdateOperationsInput | number
    username?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: NullableStringFieldUpdateOperationsInput | string | null
    token?: NullableStringFieldUpdateOperationsInput | string | null
    refreshToken?: NullableStringFieldUpdateOperationsInput | string | null
    status?: IntFieldUpdateOperationsInput | number
    latestLoginAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    roles?: RoleUncheckedUpdateManyWithoutUsersNestedInput
    createdRoles?: RoleUncheckedUpdateManyWithoutCreatedByUserNestedInput
    updatedRoles?: RoleUncheckedUpdateManyWithoutUpdatedByUserNestedInput
    deletedRoles?: RoleUncheckedUpdateManyWithoutDeletedByUserNestedInput
    createdMenus?: MasterMenuUncheckedUpdateManyWithoutCreatedByUserNestedInput
    updatedMenus?: MasterMenuUncheckedUpdateManyWithoutUpdatedByUserNestedInput
    deletedMenus?: MasterMenuUncheckedUpdateManyWithoutDeletedByUserNestedInput
    createdSubMenus?: SubMenuUncheckedUpdateManyWithoutCreatedByUserNestedInput
    updatedSubMenus?: SubMenuUncheckedUpdateManyWithoutUpdatedByUserNestedInput
    createdAccesses?: RoleMenuAccessUncheckedUpdateManyWithoutCreatedByUserNestedInput
    updatedAccesses?: RoleMenuAccessUncheckedUpdateManyWithoutUpdatedByUserNestedInput
    deletedAccesses?: RoleMenuAccessUncheckedUpdateManyWithoutDeletedByUserNestedInput
  }

  export type RoleMenuAccessUpsertWithWhereUniqueWithoutSubMenuInput = {
    where: RoleMenuAccessWhereUniqueInput
    update: XOR<RoleMenuAccessUpdateWithoutSubMenuInput, RoleMenuAccessUncheckedUpdateWithoutSubMenuInput>
    create: XOR<RoleMenuAccessCreateWithoutSubMenuInput, RoleMenuAccessUncheckedCreateWithoutSubMenuInput>
  }

  export type RoleMenuAccessUpdateWithWhereUniqueWithoutSubMenuInput = {
    where: RoleMenuAccessWhereUniqueInput
    data: XOR<RoleMenuAccessUpdateWithoutSubMenuInput, RoleMenuAccessUncheckedUpdateWithoutSubMenuInput>
  }

  export type RoleMenuAccessUpdateManyWithWhereWithoutSubMenuInput = {
    where: RoleMenuAccessScalarWhereInput
    data: XOR<RoleMenuAccessUpdateManyMutationInput, RoleMenuAccessUncheckedUpdateManyWithoutSubMenuInput>
  }

  export type RoleCreateWithoutRoleMenuAccessInput = {
    uid?: string
    name: string
    description?: string | null
    status?: number
    createdAt?: Date | string
    updatedAt?: Date | string | null
    deletedAt?: Date | string | null
    users?: UserCreateNestedManyWithoutRolesInput
    createdByUser?: UserCreateNestedOneWithoutCreatedRolesInput
    updatedByUser?: UserCreateNestedOneWithoutUpdatedRolesInput
    deletedByUser?: UserCreateNestedOneWithoutDeletedRolesInput
    User?: UserCreateNestedManyWithoutRoleInput
  }

  export type RoleUncheckedCreateWithoutRoleMenuAccessInput = {
    id?: number
    uid?: string
    name: string
    description?: string | null
    status?: number
    createdBy?: number | null
    createdAt?: Date | string
    updatedBy?: number | null
    updatedAt?: Date | string | null
    deletedBy?: number | null
    deletedAt?: Date | string | null
    users?: UserUncheckedCreateNestedManyWithoutRolesInput
    User?: UserUncheckedCreateNestedManyWithoutRoleInput
  }

  export type RoleCreateOrConnectWithoutRoleMenuAccessInput = {
    where: RoleWhereUniqueInput
    create: XOR<RoleCreateWithoutRoleMenuAccessInput, RoleUncheckedCreateWithoutRoleMenuAccessInput>
  }

  export type SubMenuCreateWithoutRoleMenuAccessInput = {
    uid?: string
    name: string
    description?: string | null
    url?: string | null
    icon?: string | null
    order?: number
    status?: number
    createdAt?: Date | string
    updatedAt?: Date | string | null
    deletedAt?: Date | string | null
    masterMenu: MasterMenuCreateNestedOneWithoutSubMenusInput
    createdByUser?: UserCreateNestedOneWithoutCreatedSubMenusInput
    updatedByUser?: UserCreateNestedOneWithoutUpdatedSubMenusInput
    deletedByUser?: UserCreateNestedOneWithoutDeletedSubMenusInput
  }

  export type SubMenuUncheckedCreateWithoutRoleMenuAccessInput = {
    id?: number
    uid?: string
    masterMenuId: number
    name: string
    description?: string | null
    url?: string | null
    icon?: string | null
    order?: number
    status?: number
    createdBy?: number | null
    createdAt?: Date | string
    updatedBy?: number | null
    updatedAt?: Date | string | null
    deletedBy?: number | null
    deletedAt?: Date | string | null
  }

  export type SubMenuCreateOrConnectWithoutRoleMenuAccessInput = {
    where: SubMenuWhereUniqueInput
    create: XOR<SubMenuCreateWithoutRoleMenuAccessInput, SubMenuUncheckedCreateWithoutRoleMenuAccessInput>
  }

  export type UserCreateWithoutCreatedAccessesInput = {
    uid?: string
    username: string
    email: string
    password: string
    firstName: string
    lastName?: string | null
    token?: string | null
    refreshToken?: string | null
    status?: number
    latestLoginAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string | null
    deletedAt?: Date | string | null
    role: RoleCreateNestedOneWithoutUserInput
    roles?: RoleCreateNestedManyWithoutUsersInput
    createdRoles?: RoleCreateNestedManyWithoutCreatedByUserInput
    updatedRoles?: RoleCreateNestedManyWithoutUpdatedByUserInput
    deletedRoles?: RoleCreateNestedManyWithoutDeletedByUserInput
    createdMenus?: MasterMenuCreateNestedManyWithoutCreatedByUserInput
    updatedMenus?: MasterMenuCreateNestedManyWithoutUpdatedByUserInput
    deletedMenus?: MasterMenuCreateNestedManyWithoutDeletedByUserInput
    createdSubMenus?: SubMenuCreateNestedManyWithoutCreatedByUserInput
    updatedSubMenus?: SubMenuCreateNestedManyWithoutUpdatedByUserInput
    deletedSubMenus?: SubMenuCreateNestedManyWithoutDeletedByUserInput
    updatedAccesses?: RoleMenuAccessCreateNestedManyWithoutUpdatedByUserInput
    deletedAccesses?: RoleMenuAccessCreateNestedManyWithoutDeletedByUserInput
  }

  export type UserUncheckedCreateWithoutCreatedAccessesInput = {
    id?: number
    uid?: string
    roleId: number
    username: string
    email: string
    password: string
    firstName: string
    lastName?: string | null
    token?: string | null
    refreshToken?: string | null
    status?: number
    latestLoginAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string | null
    deletedAt?: Date | string | null
    roles?: RoleUncheckedCreateNestedManyWithoutUsersInput
    createdRoles?: RoleUncheckedCreateNestedManyWithoutCreatedByUserInput
    updatedRoles?: RoleUncheckedCreateNestedManyWithoutUpdatedByUserInput
    deletedRoles?: RoleUncheckedCreateNestedManyWithoutDeletedByUserInput
    createdMenus?: MasterMenuUncheckedCreateNestedManyWithoutCreatedByUserInput
    updatedMenus?: MasterMenuUncheckedCreateNestedManyWithoutUpdatedByUserInput
    deletedMenus?: MasterMenuUncheckedCreateNestedManyWithoutDeletedByUserInput
    createdSubMenus?: SubMenuUncheckedCreateNestedManyWithoutCreatedByUserInput
    updatedSubMenus?: SubMenuUncheckedCreateNestedManyWithoutUpdatedByUserInput
    deletedSubMenus?: SubMenuUncheckedCreateNestedManyWithoutDeletedByUserInput
    updatedAccesses?: RoleMenuAccessUncheckedCreateNestedManyWithoutUpdatedByUserInput
    deletedAccesses?: RoleMenuAccessUncheckedCreateNestedManyWithoutDeletedByUserInput
  }

  export type UserCreateOrConnectWithoutCreatedAccessesInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutCreatedAccessesInput, UserUncheckedCreateWithoutCreatedAccessesInput>
  }

  export type UserCreateWithoutUpdatedAccessesInput = {
    uid?: string
    username: string
    email: string
    password: string
    firstName: string
    lastName?: string | null
    token?: string | null
    refreshToken?: string | null
    status?: number
    latestLoginAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string | null
    deletedAt?: Date | string | null
    role: RoleCreateNestedOneWithoutUserInput
    roles?: RoleCreateNestedManyWithoutUsersInput
    createdRoles?: RoleCreateNestedManyWithoutCreatedByUserInput
    updatedRoles?: RoleCreateNestedManyWithoutUpdatedByUserInput
    deletedRoles?: RoleCreateNestedManyWithoutDeletedByUserInput
    createdMenus?: MasterMenuCreateNestedManyWithoutCreatedByUserInput
    updatedMenus?: MasterMenuCreateNestedManyWithoutUpdatedByUserInput
    deletedMenus?: MasterMenuCreateNestedManyWithoutDeletedByUserInput
    createdSubMenus?: SubMenuCreateNestedManyWithoutCreatedByUserInput
    updatedSubMenus?: SubMenuCreateNestedManyWithoutUpdatedByUserInput
    deletedSubMenus?: SubMenuCreateNestedManyWithoutDeletedByUserInput
    createdAccesses?: RoleMenuAccessCreateNestedManyWithoutCreatedByUserInput
    deletedAccesses?: RoleMenuAccessCreateNestedManyWithoutDeletedByUserInput
  }

  export type UserUncheckedCreateWithoutUpdatedAccessesInput = {
    id?: number
    uid?: string
    roleId: number
    username: string
    email: string
    password: string
    firstName: string
    lastName?: string | null
    token?: string | null
    refreshToken?: string | null
    status?: number
    latestLoginAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string | null
    deletedAt?: Date | string | null
    roles?: RoleUncheckedCreateNestedManyWithoutUsersInput
    createdRoles?: RoleUncheckedCreateNestedManyWithoutCreatedByUserInput
    updatedRoles?: RoleUncheckedCreateNestedManyWithoutUpdatedByUserInput
    deletedRoles?: RoleUncheckedCreateNestedManyWithoutDeletedByUserInput
    createdMenus?: MasterMenuUncheckedCreateNestedManyWithoutCreatedByUserInput
    updatedMenus?: MasterMenuUncheckedCreateNestedManyWithoutUpdatedByUserInput
    deletedMenus?: MasterMenuUncheckedCreateNestedManyWithoutDeletedByUserInput
    createdSubMenus?: SubMenuUncheckedCreateNestedManyWithoutCreatedByUserInput
    updatedSubMenus?: SubMenuUncheckedCreateNestedManyWithoutUpdatedByUserInput
    deletedSubMenus?: SubMenuUncheckedCreateNestedManyWithoutDeletedByUserInput
    createdAccesses?: RoleMenuAccessUncheckedCreateNestedManyWithoutCreatedByUserInput
    deletedAccesses?: RoleMenuAccessUncheckedCreateNestedManyWithoutDeletedByUserInput
  }

  export type UserCreateOrConnectWithoutUpdatedAccessesInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutUpdatedAccessesInput, UserUncheckedCreateWithoutUpdatedAccessesInput>
  }

  export type UserCreateWithoutDeletedAccessesInput = {
    uid?: string
    username: string
    email: string
    password: string
    firstName: string
    lastName?: string | null
    token?: string | null
    refreshToken?: string | null
    status?: number
    latestLoginAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string | null
    deletedAt?: Date | string | null
    role: RoleCreateNestedOneWithoutUserInput
    roles?: RoleCreateNestedManyWithoutUsersInput
    createdRoles?: RoleCreateNestedManyWithoutCreatedByUserInput
    updatedRoles?: RoleCreateNestedManyWithoutUpdatedByUserInput
    deletedRoles?: RoleCreateNestedManyWithoutDeletedByUserInput
    createdMenus?: MasterMenuCreateNestedManyWithoutCreatedByUserInput
    updatedMenus?: MasterMenuCreateNestedManyWithoutUpdatedByUserInput
    deletedMenus?: MasterMenuCreateNestedManyWithoutDeletedByUserInput
    createdSubMenus?: SubMenuCreateNestedManyWithoutCreatedByUserInput
    updatedSubMenus?: SubMenuCreateNestedManyWithoutUpdatedByUserInput
    deletedSubMenus?: SubMenuCreateNestedManyWithoutDeletedByUserInput
    createdAccesses?: RoleMenuAccessCreateNestedManyWithoutCreatedByUserInput
    updatedAccesses?: RoleMenuAccessCreateNestedManyWithoutUpdatedByUserInput
  }

  export type UserUncheckedCreateWithoutDeletedAccessesInput = {
    id?: number
    uid?: string
    roleId: number
    username: string
    email: string
    password: string
    firstName: string
    lastName?: string | null
    token?: string | null
    refreshToken?: string | null
    status?: number
    latestLoginAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string | null
    deletedAt?: Date | string | null
    roles?: RoleUncheckedCreateNestedManyWithoutUsersInput
    createdRoles?: RoleUncheckedCreateNestedManyWithoutCreatedByUserInput
    updatedRoles?: RoleUncheckedCreateNestedManyWithoutUpdatedByUserInput
    deletedRoles?: RoleUncheckedCreateNestedManyWithoutDeletedByUserInput
    createdMenus?: MasterMenuUncheckedCreateNestedManyWithoutCreatedByUserInput
    updatedMenus?: MasterMenuUncheckedCreateNestedManyWithoutUpdatedByUserInput
    deletedMenus?: MasterMenuUncheckedCreateNestedManyWithoutDeletedByUserInput
    createdSubMenus?: SubMenuUncheckedCreateNestedManyWithoutCreatedByUserInput
    updatedSubMenus?: SubMenuUncheckedCreateNestedManyWithoutUpdatedByUserInput
    deletedSubMenus?: SubMenuUncheckedCreateNestedManyWithoutDeletedByUserInput
    createdAccesses?: RoleMenuAccessUncheckedCreateNestedManyWithoutCreatedByUserInput
    updatedAccesses?: RoleMenuAccessUncheckedCreateNestedManyWithoutUpdatedByUserInput
  }

  export type UserCreateOrConnectWithoutDeletedAccessesInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutDeletedAccessesInput, UserUncheckedCreateWithoutDeletedAccessesInput>
  }

  export type RoleUpsertWithoutRoleMenuAccessInput = {
    update: XOR<RoleUpdateWithoutRoleMenuAccessInput, RoleUncheckedUpdateWithoutRoleMenuAccessInput>
    create: XOR<RoleCreateWithoutRoleMenuAccessInput, RoleUncheckedCreateWithoutRoleMenuAccessInput>
    where?: RoleWhereInput
  }

  export type RoleUpdateToOneWithWhereWithoutRoleMenuAccessInput = {
    where?: RoleWhereInput
    data: XOR<RoleUpdateWithoutRoleMenuAccessInput, RoleUncheckedUpdateWithoutRoleMenuAccessInput>
  }

  export type RoleUpdateWithoutRoleMenuAccessInput = {
    uid?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    status?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    users?: UserUpdateManyWithoutRolesNestedInput
    createdByUser?: UserUpdateOneWithoutCreatedRolesNestedInput
    updatedByUser?: UserUpdateOneWithoutUpdatedRolesNestedInput
    deletedByUser?: UserUpdateOneWithoutDeletedRolesNestedInput
    User?: UserUpdateManyWithoutRoleNestedInput
  }

  export type RoleUncheckedUpdateWithoutRoleMenuAccessInput = {
    id?: IntFieldUpdateOperationsInput | number
    uid?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    status?: IntFieldUpdateOperationsInput | number
    createdBy?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedBy?: NullableIntFieldUpdateOperationsInput | number | null
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deletedBy?: NullableIntFieldUpdateOperationsInput | number | null
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    users?: UserUncheckedUpdateManyWithoutRolesNestedInput
    User?: UserUncheckedUpdateManyWithoutRoleNestedInput
  }

  export type SubMenuUpsertWithoutRoleMenuAccessInput = {
    update: XOR<SubMenuUpdateWithoutRoleMenuAccessInput, SubMenuUncheckedUpdateWithoutRoleMenuAccessInput>
    create: XOR<SubMenuCreateWithoutRoleMenuAccessInput, SubMenuUncheckedCreateWithoutRoleMenuAccessInput>
    where?: SubMenuWhereInput
  }

  export type SubMenuUpdateToOneWithWhereWithoutRoleMenuAccessInput = {
    where?: SubMenuWhereInput
    data: XOR<SubMenuUpdateWithoutRoleMenuAccessInput, SubMenuUncheckedUpdateWithoutRoleMenuAccessInput>
  }

  export type SubMenuUpdateWithoutRoleMenuAccessInput = {
    uid?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    url?: NullableStringFieldUpdateOperationsInput | string | null
    icon?: NullableStringFieldUpdateOperationsInput | string | null
    order?: IntFieldUpdateOperationsInput | number
    status?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    masterMenu?: MasterMenuUpdateOneRequiredWithoutSubMenusNestedInput
    createdByUser?: UserUpdateOneWithoutCreatedSubMenusNestedInput
    updatedByUser?: UserUpdateOneWithoutUpdatedSubMenusNestedInput
    deletedByUser?: UserUpdateOneWithoutDeletedSubMenusNestedInput
  }

  export type SubMenuUncheckedUpdateWithoutRoleMenuAccessInput = {
    id?: IntFieldUpdateOperationsInput | number
    uid?: StringFieldUpdateOperationsInput | string
    masterMenuId?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    url?: NullableStringFieldUpdateOperationsInput | string | null
    icon?: NullableStringFieldUpdateOperationsInput | string | null
    order?: IntFieldUpdateOperationsInput | number
    status?: IntFieldUpdateOperationsInput | number
    createdBy?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedBy?: NullableIntFieldUpdateOperationsInput | number | null
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deletedBy?: NullableIntFieldUpdateOperationsInput | number | null
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type UserUpsertWithoutCreatedAccessesInput = {
    update: XOR<UserUpdateWithoutCreatedAccessesInput, UserUncheckedUpdateWithoutCreatedAccessesInput>
    create: XOR<UserCreateWithoutCreatedAccessesInput, UserUncheckedCreateWithoutCreatedAccessesInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutCreatedAccessesInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutCreatedAccessesInput, UserUncheckedUpdateWithoutCreatedAccessesInput>
  }

  export type UserUpdateWithoutCreatedAccessesInput = {
    uid?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: NullableStringFieldUpdateOperationsInput | string | null
    token?: NullableStringFieldUpdateOperationsInput | string | null
    refreshToken?: NullableStringFieldUpdateOperationsInput | string | null
    status?: IntFieldUpdateOperationsInput | number
    latestLoginAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    role?: RoleUpdateOneRequiredWithoutUserNestedInput
    roles?: RoleUpdateManyWithoutUsersNestedInput
    createdRoles?: RoleUpdateManyWithoutCreatedByUserNestedInput
    updatedRoles?: RoleUpdateManyWithoutUpdatedByUserNestedInput
    deletedRoles?: RoleUpdateManyWithoutDeletedByUserNestedInput
    createdMenus?: MasterMenuUpdateManyWithoutCreatedByUserNestedInput
    updatedMenus?: MasterMenuUpdateManyWithoutUpdatedByUserNestedInput
    deletedMenus?: MasterMenuUpdateManyWithoutDeletedByUserNestedInput
    createdSubMenus?: SubMenuUpdateManyWithoutCreatedByUserNestedInput
    updatedSubMenus?: SubMenuUpdateManyWithoutUpdatedByUserNestedInput
    deletedSubMenus?: SubMenuUpdateManyWithoutDeletedByUserNestedInput
    updatedAccesses?: RoleMenuAccessUpdateManyWithoutUpdatedByUserNestedInput
    deletedAccesses?: RoleMenuAccessUpdateManyWithoutDeletedByUserNestedInput
  }

  export type UserUncheckedUpdateWithoutCreatedAccessesInput = {
    id?: IntFieldUpdateOperationsInput | number
    uid?: StringFieldUpdateOperationsInput | string
    roleId?: IntFieldUpdateOperationsInput | number
    username?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: NullableStringFieldUpdateOperationsInput | string | null
    token?: NullableStringFieldUpdateOperationsInput | string | null
    refreshToken?: NullableStringFieldUpdateOperationsInput | string | null
    status?: IntFieldUpdateOperationsInput | number
    latestLoginAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    roles?: RoleUncheckedUpdateManyWithoutUsersNestedInput
    createdRoles?: RoleUncheckedUpdateManyWithoutCreatedByUserNestedInput
    updatedRoles?: RoleUncheckedUpdateManyWithoutUpdatedByUserNestedInput
    deletedRoles?: RoleUncheckedUpdateManyWithoutDeletedByUserNestedInput
    createdMenus?: MasterMenuUncheckedUpdateManyWithoutCreatedByUserNestedInput
    updatedMenus?: MasterMenuUncheckedUpdateManyWithoutUpdatedByUserNestedInput
    deletedMenus?: MasterMenuUncheckedUpdateManyWithoutDeletedByUserNestedInput
    createdSubMenus?: SubMenuUncheckedUpdateManyWithoutCreatedByUserNestedInput
    updatedSubMenus?: SubMenuUncheckedUpdateManyWithoutUpdatedByUserNestedInput
    deletedSubMenus?: SubMenuUncheckedUpdateManyWithoutDeletedByUserNestedInput
    updatedAccesses?: RoleMenuAccessUncheckedUpdateManyWithoutUpdatedByUserNestedInput
    deletedAccesses?: RoleMenuAccessUncheckedUpdateManyWithoutDeletedByUserNestedInput
  }

  export type UserUpsertWithoutUpdatedAccessesInput = {
    update: XOR<UserUpdateWithoutUpdatedAccessesInput, UserUncheckedUpdateWithoutUpdatedAccessesInput>
    create: XOR<UserCreateWithoutUpdatedAccessesInput, UserUncheckedCreateWithoutUpdatedAccessesInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutUpdatedAccessesInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutUpdatedAccessesInput, UserUncheckedUpdateWithoutUpdatedAccessesInput>
  }

  export type UserUpdateWithoutUpdatedAccessesInput = {
    uid?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: NullableStringFieldUpdateOperationsInput | string | null
    token?: NullableStringFieldUpdateOperationsInput | string | null
    refreshToken?: NullableStringFieldUpdateOperationsInput | string | null
    status?: IntFieldUpdateOperationsInput | number
    latestLoginAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    role?: RoleUpdateOneRequiredWithoutUserNestedInput
    roles?: RoleUpdateManyWithoutUsersNestedInput
    createdRoles?: RoleUpdateManyWithoutCreatedByUserNestedInput
    updatedRoles?: RoleUpdateManyWithoutUpdatedByUserNestedInput
    deletedRoles?: RoleUpdateManyWithoutDeletedByUserNestedInput
    createdMenus?: MasterMenuUpdateManyWithoutCreatedByUserNestedInput
    updatedMenus?: MasterMenuUpdateManyWithoutUpdatedByUserNestedInput
    deletedMenus?: MasterMenuUpdateManyWithoutDeletedByUserNestedInput
    createdSubMenus?: SubMenuUpdateManyWithoutCreatedByUserNestedInput
    updatedSubMenus?: SubMenuUpdateManyWithoutUpdatedByUserNestedInput
    deletedSubMenus?: SubMenuUpdateManyWithoutDeletedByUserNestedInput
    createdAccesses?: RoleMenuAccessUpdateManyWithoutCreatedByUserNestedInput
    deletedAccesses?: RoleMenuAccessUpdateManyWithoutDeletedByUserNestedInput
  }

  export type UserUncheckedUpdateWithoutUpdatedAccessesInput = {
    id?: IntFieldUpdateOperationsInput | number
    uid?: StringFieldUpdateOperationsInput | string
    roleId?: IntFieldUpdateOperationsInput | number
    username?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: NullableStringFieldUpdateOperationsInput | string | null
    token?: NullableStringFieldUpdateOperationsInput | string | null
    refreshToken?: NullableStringFieldUpdateOperationsInput | string | null
    status?: IntFieldUpdateOperationsInput | number
    latestLoginAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    roles?: RoleUncheckedUpdateManyWithoutUsersNestedInput
    createdRoles?: RoleUncheckedUpdateManyWithoutCreatedByUserNestedInput
    updatedRoles?: RoleUncheckedUpdateManyWithoutUpdatedByUserNestedInput
    deletedRoles?: RoleUncheckedUpdateManyWithoutDeletedByUserNestedInput
    createdMenus?: MasterMenuUncheckedUpdateManyWithoutCreatedByUserNestedInput
    updatedMenus?: MasterMenuUncheckedUpdateManyWithoutUpdatedByUserNestedInput
    deletedMenus?: MasterMenuUncheckedUpdateManyWithoutDeletedByUserNestedInput
    createdSubMenus?: SubMenuUncheckedUpdateManyWithoutCreatedByUserNestedInput
    updatedSubMenus?: SubMenuUncheckedUpdateManyWithoutUpdatedByUserNestedInput
    deletedSubMenus?: SubMenuUncheckedUpdateManyWithoutDeletedByUserNestedInput
    createdAccesses?: RoleMenuAccessUncheckedUpdateManyWithoutCreatedByUserNestedInput
    deletedAccesses?: RoleMenuAccessUncheckedUpdateManyWithoutDeletedByUserNestedInput
  }

  export type UserUpsertWithoutDeletedAccessesInput = {
    update: XOR<UserUpdateWithoutDeletedAccessesInput, UserUncheckedUpdateWithoutDeletedAccessesInput>
    create: XOR<UserCreateWithoutDeletedAccessesInput, UserUncheckedCreateWithoutDeletedAccessesInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutDeletedAccessesInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutDeletedAccessesInput, UserUncheckedUpdateWithoutDeletedAccessesInput>
  }

  export type UserUpdateWithoutDeletedAccessesInput = {
    uid?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: NullableStringFieldUpdateOperationsInput | string | null
    token?: NullableStringFieldUpdateOperationsInput | string | null
    refreshToken?: NullableStringFieldUpdateOperationsInput | string | null
    status?: IntFieldUpdateOperationsInput | number
    latestLoginAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    role?: RoleUpdateOneRequiredWithoutUserNestedInput
    roles?: RoleUpdateManyWithoutUsersNestedInput
    createdRoles?: RoleUpdateManyWithoutCreatedByUserNestedInput
    updatedRoles?: RoleUpdateManyWithoutUpdatedByUserNestedInput
    deletedRoles?: RoleUpdateManyWithoutDeletedByUserNestedInput
    createdMenus?: MasterMenuUpdateManyWithoutCreatedByUserNestedInput
    updatedMenus?: MasterMenuUpdateManyWithoutUpdatedByUserNestedInput
    deletedMenus?: MasterMenuUpdateManyWithoutDeletedByUserNestedInput
    createdSubMenus?: SubMenuUpdateManyWithoutCreatedByUserNestedInput
    updatedSubMenus?: SubMenuUpdateManyWithoutUpdatedByUserNestedInput
    deletedSubMenus?: SubMenuUpdateManyWithoutDeletedByUserNestedInput
    createdAccesses?: RoleMenuAccessUpdateManyWithoutCreatedByUserNestedInput
    updatedAccesses?: RoleMenuAccessUpdateManyWithoutUpdatedByUserNestedInput
  }

  export type UserUncheckedUpdateWithoutDeletedAccessesInput = {
    id?: IntFieldUpdateOperationsInput | number
    uid?: StringFieldUpdateOperationsInput | string
    roleId?: IntFieldUpdateOperationsInput | number
    username?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: NullableStringFieldUpdateOperationsInput | string | null
    token?: NullableStringFieldUpdateOperationsInput | string | null
    refreshToken?: NullableStringFieldUpdateOperationsInput | string | null
    status?: IntFieldUpdateOperationsInput | number
    latestLoginAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    roles?: RoleUncheckedUpdateManyWithoutUsersNestedInput
    createdRoles?: RoleUncheckedUpdateManyWithoutCreatedByUserNestedInput
    updatedRoles?: RoleUncheckedUpdateManyWithoutUpdatedByUserNestedInput
    deletedRoles?: RoleUncheckedUpdateManyWithoutDeletedByUserNestedInput
    createdMenus?: MasterMenuUncheckedUpdateManyWithoutCreatedByUserNestedInput
    updatedMenus?: MasterMenuUncheckedUpdateManyWithoutUpdatedByUserNestedInput
    deletedMenus?: MasterMenuUncheckedUpdateManyWithoutDeletedByUserNestedInput
    createdSubMenus?: SubMenuUncheckedUpdateManyWithoutCreatedByUserNestedInput
    updatedSubMenus?: SubMenuUncheckedUpdateManyWithoutUpdatedByUserNestedInput
    deletedSubMenus?: SubMenuUncheckedUpdateManyWithoutDeletedByUserNestedInput
    createdAccesses?: RoleMenuAccessUncheckedUpdateManyWithoutCreatedByUserNestedInput
    updatedAccesses?: RoleMenuAccessUncheckedUpdateManyWithoutUpdatedByUserNestedInput
  }

  export type RoleCreateManyCreatedByUserInput = {
    id?: number
    uid?: string
    name: string
    description?: string | null
    status?: number
    createdAt?: Date | string
    updatedBy?: number | null
    updatedAt?: Date | string | null
    deletedBy?: number | null
    deletedAt?: Date | string | null
  }

  export type RoleCreateManyUpdatedByUserInput = {
    id?: number
    uid?: string
    name: string
    description?: string | null
    status?: number
    createdBy?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string | null
    deletedBy?: number | null
    deletedAt?: Date | string | null
  }

  export type RoleCreateManyDeletedByUserInput = {
    id?: number
    uid?: string
    name: string
    description?: string | null
    status?: number
    createdBy?: number | null
    createdAt?: Date | string
    updatedBy?: number | null
    updatedAt?: Date | string | null
    deletedAt?: Date | string | null
  }

  export type MasterMenuCreateManyCreatedByUserInput = {
    id?: number
    uid?: string
    name: string
    description?: string | null
    url?: string | null
    icon?: string | null
    order?: number
    status?: number
    createdAt?: Date | string
    updatedBy?: number | null
    updatedAt?: Date | string | null
    deletedBy?: number | null
    deletedAt?: Date | string | null
  }

  export type MasterMenuCreateManyUpdatedByUserInput = {
    id?: number
    uid?: string
    name: string
    description?: string | null
    url?: string | null
    icon?: string | null
    order?: number
    status?: number
    createdBy?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string | null
    deletedBy?: number | null
    deletedAt?: Date | string | null
  }

  export type MasterMenuCreateManyDeletedByUserInput = {
    id?: number
    uid?: string
    name: string
    description?: string | null
    url?: string | null
    icon?: string | null
    order?: number
    status?: number
    createdBy?: number | null
    createdAt?: Date | string
    updatedBy?: number | null
    updatedAt?: Date | string | null
    deletedAt?: Date | string | null
  }

  export type SubMenuCreateManyCreatedByUserInput = {
    id?: number
    uid?: string
    masterMenuId: number
    name: string
    description?: string | null
    url?: string | null
    icon?: string | null
    order?: number
    status?: number
    createdAt?: Date | string
    updatedBy?: number | null
    updatedAt?: Date | string | null
    deletedBy?: number | null
    deletedAt?: Date | string | null
  }

  export type SubMenuCreateManyUpdatedByUserInput = {
    id?: number
    uid?: string
    masterMenuId: number
    name: string
    description?: string | null
    url?: string | null
    icon?: string | null
    order?: number
    status?: number
    createdBy?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string | null
    deletedBy?: number | null
    deletedAt?: Date | string | null
  }

  export type SubMenuCreateManyDeletedByUserInput = {
    id?: number
    uid?: string
    masterMenuId: number
    name: string
    description?: string | null
    url?: string | null
    icon?: string | null
    order?: number
    status?: number
    createdBy?: number | null
    createdAt?: Date | string
    updatedBy?: number | null
    updatedAt?: Date | string | null
    deletedAt?: Date | string | null
  }

  export type RoleMenuAccessCreateManyCreatedByUserInput = {
    id?: number
    uid?: string
    name: string
    description?: string | null
    roleId: number
    submenuId: number
    status?: number
    createdAt?: Date | string
    updatedBy?: number | null
    updatedAt?: Date | string | null
    deletedBy?: number | null
    deletedAt?: Date | string | null
  }

  export type RoleMenuAccessCreateManyUpdatedByUserInput = {
    id?: number
    uid?: string
    name: string
    description?: string | null
    roleId: number
    submenuId: number
    status?: number
    createdBy?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string | null
    deletedBy?: number | null
    deletedAt?: Date | string | null
  }

  export type RoleMenuAccessCreateManyDeletedByUserInput = {
    id?: number
    uid?: string
    name: string
    description?: string | null
    roleId: number
    submenuId: number
    status?: number
    createdBy?: number | null
    createdAt?: Date | string
    updatedBy?: number | null
    updatedAt?: Date | string | null
    deletedAt?: Date | string | null
  }

  export type RoleUpdateWithoutUsersInput = {
    uid?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    status?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdByUser?: UserUpdateOneWithoutCreatedRolesNestedInput
    updatedByUser?: UserUpdateOneWithoutUpdatedRolesNestedInput
    deletedByUser?: UserUpdateOneWithoutDeletedRolesNestedInput
    User?: UserUpdateManyWithoutRoleNestedInput
    RoleMenuAccess?: RoleMenuAccessUpdateManyWithoutRoleNestedInput
  }

  export type RoleUncheckedUpdateWithoutUsersInput = {
    id?: IntFieldUpdateOperationsInput | number
    uid?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    status?: IntFieldUpdateOperationsInput | number
    createdBy?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedBy?: NullableIntFieldUpdateOperationsInput | number | null
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deletedBy?: NullableIntFieldUpdateOperationsInput | number | null
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    User?: UserUncheckedUpdateManyWithoutRoleNestedInput
    RoleMenuAccess?: RoleMenuAccessUncheckedUpdateManyWithoutRoleNestedInput
  }

  export type RoleUncheckedUpdateManyWithoutUsersInput = {
    id?: IntFieldUpdateOperationsInput | number
    uid?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    status?: IntFieldUpdateOperationsInput | number
    createdBy?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedBy?: NullableIntFieldUpdateOperationsInput | number | null
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deletedBy?: NullableIntFieldUpdateOperationsInput | number | null
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type RoleUpdateWithoutCreatedByUserInput = {
    uid?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    status?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    users?: UserUpdateManyWithoutRolesNestedInput
    updatedByUser?: UserUpdateOneWithoutUpdatedRolesNestedInput
    deletedByUser?: UserUpdateOneWithoutDeletedRolesNestedInput
    User?: UserUpdateManyWithoutRoleNestedInput
    RoleMenuAccess?: RoleMenuAccessUpdateManyWithoutRoleNestedInput
  }

  export type RoleUncheckedUpdateWithoutCreatedByUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    uid?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    status?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedBy?: NullableIntFieldUpdateOperationsInput | number | null
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deletedBy?: NullableIntFieldUpdateOperationsInput | number | null
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    users?: UserUncheckedUpdateManyWithoutRolesNestedInput
    User?: UserUncheckedUpdateManyWithoutRoleNestedInput
    RoleMenuAccess?: RoleMenuAccessUncheckedUpdateManyWithoutRoleNestedInput
  }

  export type RoleUncheckedUpdateManyWithoutCreatedByUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    uid?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    status?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedBy?: NullableIntFieldUpdateOperationsInput | number | null
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deletedBy?: NullableIntFieldUpdateOperationsInput | number | null
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type RoleUpdateWithoutUpdatedByUserInput = {
    uid?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    status?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    users?: UserUpdateManyWithoutRolesNestedInput
    createdByUser?: UserUpdateOneWithoutCreatedRolesNestedInput
    deletedByUser?: UserUpdateOneWithoutDeletedRolesNestedInput
    User?: UserUpdateManyWithoutRoleNestedInput
    RoleMenuAccess?: RoleMenuAccessUpdateManyWithoutRoleNestedInput
  }

  export type RoleUncheckedUpdateWithoutUpdatedByUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    uid?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    status?: IntFieldUpdateOperationsInput | number
    createdBy?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deletedBy?: NullableIntFieldUpdateOperationsInput | number | null
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    users?: UserUncheckedUpdateManyWithoutRolesNestedInput
    User?: UserUncheckedUpdateManyWithoutRoleNestedInput
    RoleMenuAccess?: RoleMenuAccessUncheckedUpdateManyWithoutRoleNestedInput
  }

  export type RoleUncheckedUpdateManyWithoutUpdatedByUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    uid?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    status?: IntFieldUpdateOperationsInput | number
    createdBy?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deletedBy?: NullableIntFieldUpdateOperationsInput | number | null
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type RoleUpdateWithoutDeletedByUserInput = {
    uid?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    status?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    users?: UserUpdateManyWithoutRolesNestedInput
    createdByUser?: UserUpdateOneWithoutCreatedRolesNestedInput
    updatedByUser?: UserUpdateOneWithoutUpdatedRolesNestedInput
    User?: UserUpdateManyWithoutRoleNestedInput
    RoleMenuAccess?: RoleMenuAccessUpdateManyWithoutRoleNestedInput
  }

  export type RoleUncheckedUpdateWithoutDeletedByUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    uid?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    status?: IntFieldUpdateOperationsInput | number
    createdBy?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedBy?: NullableIntFieldUpdateOperationsInput | number | null
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    users?: UserUncheckedUpdateManyWithoutRolesNestedInput
    User?: UserUncheckedUpdateManyWithoutRoleNestedInput
    RoleMenuAccess?: RoleMenuAccessUncheckedUpdateManyWithoutRoleNestedInput
  }

  export type RoleUncheckedUpdateManyWithoutDeletedByUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    uid?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    status?: IntFieldUpdateOperationsInput | number
    createdBy?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedBy?: NullableIntFieldUpdateOperationsInput | number | null
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type MasterMenuUpdateWithoutCreatedByUserInput = {
    uid?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    url?: NullableStringFieldUpdateOperationsInput | string | null
    icon?: NullableStringFieldUpdateOperationsInput | string | null
    order?: IntFieldUpdateOperationsInput | number
    status?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    subMenus?: SubMenuUpdateManyWithoutMasterMenuNestedInput
    updatedByUser?: UserUpdateOneWithoutUpdatedMenusNestedInput
    deletedByUser?: UserUpdateOneWithoutDeletedMenusNestedInput
  }

  export type MasterMenuUncheckedUpdateWithoutCreatedByUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    uid?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    url?: NullableStringFieldUpdateOperationsInput | string | null
    icon?: NullableStringFieldUpdateOperationsInput | string | null
    order?: IntFieldUpdateOperationsInput | number
    status?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedBy?: NullableIntFieldUpdateOperationsInput | number | null
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deletedBy?: NullableIntFieldUpdateOperationsInput | number | null
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    subMenus?: SubMenuUncheckedUpdateManyWithoutMasterMenuNestedInput
  }

  export type MasterMenuUncheckedUpdateManyWithoutCreatedByUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    uid?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    url?: NullableStringFieldUpdateOperationsInput | string | null
    icon?: NullableStringFieldUpdateOperationsInput | string | null
    order?: IntFieldUpdateOperationsInput | number
    status?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedBy?: NullableIntFieldUpdateOperationsInput | number | null
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deletedBy?: NullableIntFieldUpdateOperationsInput | number | null
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type MasterMenuUpdateWithoutUpdatedByUserInput = {
    uid?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    url?: NullableStringFieldUpdateOperationsInput | string | null
    icon?: NullableStringFieldUpdateOperationsInput | string | null
    order?: IntFieldUpdateOperationsInput | number
    status?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    subMenus?: SubMenuUpdateManyWithoutMasterMenuNestedInput
    createdByUser?: UserUpdateOneWithoutCreatedMenusNestedInput
    deletedByUser?: UserUpdateOneWithoutDeletedMenusNestedInput
  }

  export type MasterMenuUncheckedUpdateWithoutUpdatedByUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    uid?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    url?: NullableStringFieldUpdateOperationsInput | string | null
    icon?: NullableStringFieldUpdateOperationsInput | string | null
    order?: IntFieldUpdateOperationsInput | number
    status?: IntFieldUpdateOperationsInput | number
    createdBy?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deletedBy?: NullableIntFieldUpdateOperationsInput | number | null
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    subMenus?: SubMenuUncheckedUpdateManyWithoutMasterMenuNestedInput
  }

  export type MasterMenuUncheckedUpdateManyWithoutUpdatedByUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    uid?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    url?: NullableStringFieldUpdateOperationsInput | string | null
    icon?: NullableStringFieldUpdateOperationsInput | string | null
    order?: IntFieldUpdateOperationsInput | number
    status?: IntFieldUpdateOperationsInput | number
    createdBy?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deletedBy?: NullableIntFieldUpdateOperationsInput | number | null
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type MasterMenuUpdateWithoutDeletedByUserInput = {
    uid?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    url?: NullableStringFieldUpdateOperationsInput | string | null
    icon?: NullableStringFieldUpdateOperationsInput | string | null
    order?: IntFieldUpdateOperationsInput | number
    status?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    subMenus?: SubMenuUpdateManyWithoutMasterMenuNestedInput
    createdByUser?: UserUpdateOneWithoutCreatedMenusNestedInput
    updatedByUser?: UserUpdateOneWithoutUpdatedMenusNestedInput
  }

  export type MasterMenuUncheckedUpdateWithoutDeletedByUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    uid?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    url?: NullableStringFieldUpdateOperationsInput | string | null
    icon?: NullableStringFieldUpdateOperationsInput | string | null
    order?: IntFieldUpdateOperationsInput | number
    status?: IntFieldUpdateOperationsInput | number
    createdBy?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedBy?: NullableIntFieldUpdateOperationsInput | number | null
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    subMenus?: SubMenuUncheckedUpdateManyWithoutMasterMenuNestedInput
  }

  export type MasterMenuUncheckedUpdateManyWithoutDeletedByUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    uid?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    url?: NullableStringFieldUpdateOperationsInput | string | null
    icon?: NullableStringFieldUpdateOperationsInput | string | null
    order?: IntFieldUpdateOperationsInput | number
    status?: IntFieldUpdateOperationsInput | number
    createdBy?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedBy?: NullableIntFieldUpdateOperationsInput | number | null
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type SubMenuUpdateWithoutCreatedByUserInput = {
    uid?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    url?: NullableStringFieldUpdateOperationsInput | string | null
    icon?: NullableStringFieldUpdateOperationsInput | string | null
    order?: IntFieldUpdateOperationsInput | number
    status?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    masterMenu?: MasterMenuUpdateOneRequiredWithoutSubMenusNestedInput
    updatedByUser?: UserUpdateOneWithoutUpdatedSubMenusNestedInput
    deletedByUser?: UserUpdateOneWithoutDeletedSubMenusNestedInput
    RoleMenuAccess?: RoleMenuAccessUpdateManyWithoutSubMenuNestedInput
  }

  export type SubMenuUncheckedUpdateWithoutCreatedByUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    uid?: StringFieldUpdateOperationsInput | string
    masterMenuId?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    url?: NullableStringFieldUpdateOperationsInput | string | null
    icon?: NullableStringFieldUpdateOperationsInput | string | null
    order?: IntFieldUpdateOperationsInput | number
    status?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedBy?: NullableIntFieldUpdateOperationsInput | number | null
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deletedBy?: NullableIntFieldUpdateOperationsInput | number | null
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    RoleMenuAccess?: RoleMenuAccessUncheckedUpdateManyWithoutSubMenuNestedInput
  }

  export type SubMenuUncheckedUpdateManyWithoutCreatedByUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    uid?: StringFieldUpdateOperationsInput | string
    masterMenuId?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    url?: NullableStringFieldUpdateOperationsInput | string | null
    icon?: NullableStringFieldUpdateOperationsInput | string | null
    order?: IntFieldUpdateOperationsInput | number
    status?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedBy?: NullableIntFieldUpdateOperationsInput | number | null
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deletedBy?: NullableIntFieldUpdateOperationsInput | number | null
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type SubMenuUpdateWithoutUpdatedByUserInput = {
    uid?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    url?: NullableStringFieldUpdateOperationsInput | string | null
    icon?: NullableStringFieldUpdateOperationsInput | string | null
    order?: IntFieldUpdateOperationsInput | number
    status?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    masterMenu?: MasterMenuUpdateOneRequiredWithoutSubMenusNestedInput
    createdByUser?: UserUpdateOneWithoutCreatedSubMenusNestedInput
    deletedByUser?: UserUpdateOneWithoutDeletedSubMenusNestedInput
    RoleMenuAccess?: RoleMenuAccessUpdateManyWithoutSubMenuNestedInput
  }

  export type SubMenuUncheckedUpdateWithoutUpdatedByUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    uid?: StringFieldUpdateOperationsInput | string
    masterMenuId?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    url?: NullableStringFieldUpdateOperationsInput | string | null
    icon?: NullableStringFieldUpdateOperationsInput | string | null
    order?: IntFieldUpdateOperationsInput | number
    status?: IntFieldUpdateOperationsInput | number
    createdBy?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deletedBy?: NullableIntFieldUpdateOperationsInput | number | null
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    RoleMenuAccess?: RoleMenuAccessUncheckedUpdateManyWithoutSubMenuNestedInput
  }

  export type SubMenuUncheckedUpdateManyWithoutUpdatedByUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    uid?: StringFieldUpdateOperationsInput | string
    masterMenuId?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    url?: NullableStringFieldUpdateOperationsInput | string | null
    icon?: NullableStringFieldUpdateOperationsInput | string | null
    order?: IntFieldUpdateOperationsInput | number
    status?: IntFieldUpdateOperationsInput | number
    createdBy?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deletedBy?: NullableIntFieldUpdateOperationsInput | number | null
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type SubMenuUpdateWithoutDeletedByUserInput = {
    uid?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    url?: NullableStringFieldUpdateOperationsInput | string | null
    icon?: NullableStringFieldUpdateOperationsInput | string | null
    order?: IntFieldUpdateOperationsInput | number
    status?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    masterMenu?: MasterMenuUpdateOneRequiredWithoutSubMenusNestedInput
    createdByUser?: UserUpdateOneWithoutCreatedSubMenusNestedInput
    updatedByUser?: UserUpdateOneWithoutUpdatedSubMenusNestedInput
    RoleMenuAccess?: RoleMenuAccessUpdateManyWithoutSubMenuNestedInput
  }

  export type SubMenuUncheckedUpdateWithoutDeletedByUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    uid?: StringFieldUpdateOperationsInput | string
    masterMenuId?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    url?: NullableStringFieldUpdateOperationsInput | string | null
    icon?: NullableStringFieldUpdateOperationsInput | string | null
    order?: IntFieldUpdateOperationsInput | number
    status?: IntFieldUpdateOperationsInput | number
    createdBy?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedBy?: NullableIntFieldUpdateOperationsInput | number | null
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    RoleMenuAccess?: RoleMenuAccessUncheckedUpdateManyWithoutSubMenuNestedInput
  }

  export type SubMenuUncheckedUpdateManyWithoutDeletedByUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    uid?: StringFieldUpdateOperationsInput | string
    masterMenuId?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    url?: NullableStringFieldUpdateOperationsInput | string | null
    icon?: NullableStringFieldUpdateOperationsInput | string | null
    order?: IntFieldUpdateOperationsInput | number
    status?: IntFieldUpdateOperationsInput | number
    createdBy?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedBy?: NullableIntFieldUpdateOperationsInput | number | null
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type RoleMenuAccessUpdateWithoutCreatedByUserInput = {
    uid?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    status?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    role?: RoleUpdateOneRequiredWithoutRoleMenuAccessNestedInput
    subMenu?: SubMenuUpdateOneRequiredWithoutRoleMenuAccessNestedInput
    updatedByUser?: UserUpdateOneWithoutUpdatedAccessesNestedInput
    deletedByUser?: UserUpdateOneWithoutDeletedAccessesNestedInput
  }

  export type RoleMenuAccessUncheckedUpdateWithoutCreatedByUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    uid?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    roleId?: IntFieldUpdateOperationsInput | number
    submenuId?: IntFieldUpdateOperationsInput | number
    status?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedBy?: NullableIntFieldUpdateOperationsInput | number | null
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deletedBy?: NullableIntFieldUpdateOperationsInput | number | null
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type RoleMenuAccessUncheckedUpdateManyWithoutCreatedByUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    uid?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    roleId?: IntFieldUpdateOperationsInput | number
    submenuId?: IntFieldUpdateOperationsInput | number
    status?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedBy?: NullableIntFieldUpdateOperationsInput | number | null
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deletedBy?: NullableIntFieldUpdateOperationsInput | number | null
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type RoleMenuAccessUpdateWithoutUpdatedByUserInput = {
    uid?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    status?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    role?: RoleUpdateOneRequiredWithoutRoleMenuAccessNestedInput
    subMenu?: SubMenuUpdateOneRequiredWithoutRoleMenuAccessNestedInput
    createdByUser?: UserUpdateOneWithoutCreatedAccessesNestedInput
    deletedByUser?: UserUpdateOneWithoutDeletedAccessesNestedInput
  }

  export type RoleMenuAccessUncheckedUpdateWithoutUpdatedByUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    uid?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    roleId?: IntFieldUpdateOperationsInput | number
    submenuId?: IntFieldUpdateOperationsInput | number
    status?: IntFieldUpdateOperationsInput | number
    createdBy?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deletedBy?: NullableIntFieldUpdateOperationsInput | number | null
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type RoleMenuAccessUncheckedUpdateManyWithoutUpdatedByUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    uid?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    roleId?: IntFieldUpdateOperationsInput | number
    submenuId?: IntFieldUpdateOperationsInput | number
    status?: IntFieldUpdateOperationsInput | number
    createdBy?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deletedBy?: NullableIntFieldUpdateOperationsInput | number | null
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type RoleMenuAccessUpdateWithoutDeletedByUserInput = {
    uid?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    status?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    role?: RoleUpdateOneRequiredWithoutRoleMenuAccessNestedInput
    subMenu?: SubMenuUpdateOneRequiredWithoutRoleMenuAccessNestedInput
    createdByUser?: UserUpdateOneWithoutCreatedAccessesNestedInput
    updatedByUser?: UserUpdateOneWithoutUpdatedAccessesNestedInput
  }

  export type RoleMenuAccessUncheckedUpdateWithoutDeletedByUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    uid?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    roleId?: IntFieldUpdateOperationsInput | number
    submenuId?: IntFieldUpdateOperationsInput | number
    status?: IntFieldUpdateOperationsInput | number
    createdBy?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedBy?: NullableIntFieldUpdateOperationsInput | number | null
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type RoleMenuAccessUncheckedUpdateManyWithoutDeletedByUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    uid?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    roleId?: IntFieldUpdateOperationsInput | number
    submenuId?: IntFieldUpdateOperationsInput | number
    status?: IntFieldUpdateOperationsInput | number
    createdBy?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedBy?: NullableIntFieldUpdateOperationsInput | number | null
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type UserCreateManyRoleInput = {
    id?: number
    uid?: string
    username: string
    email: string
    password: string
    firstName: string
    lastName?: string | null
    token?: string | null
    refreshToken?: string | null
    status?: number
    latestLoginAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string | null
    deletedAt?: Date | string | null
  }

  export type RoleMenuAccessCreateManyRoleInput = {
    id?: number
    uid?: string
    name: string
    description?: string | null
    submenuId: number
    status?: number
    createdBy?: number | null
    createdAt?: Date | string
    updatedBy?: number | null
    updatedAt?: Date | string | null
    deletedBy?: number | null
    deletedAt?: Date | string | null
  }

  export type UserUpdateWithoutRolesInput = {
    uid?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: NullableStringFieldUpdateOperationsInput | string | null
    token?: NullableStringFieldUpdateOperationsInput | string | null
    refreshToken?: NullableStringFieldUpdateOperationsInput | string | null
    status?: IntFieldUpdateOperationsInput | number
    latestLoginAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    role?: RoleUpdateOneRequiredWithoutUserNestedInput
    createdRoles?: RoleUpdateManyWithoutCreatedByUserNestedInput
    updatedRoles?: RoleUpdateManyWithoutUpdatedByUserNestedInput
    deletedRoles?: RoleUpdateManyWithoutDeletedByUserNestedInput
    createdMenus?: MasterMenuUpdateManyWithoutCreatedByUserNestedInput
    updatedMenus?: MasterMenuUpdateManyWithoutUpdatedByUserNestedInput
    deletedMenus?: MasterMenuUpdateManyWithoutDeletedByUserNestedInput
    createdSubMenus?: SubMenuUpdateManyWithoutCreatedByUserNestedInput
    updatedSubMenus?: SubMenuUpdateManyWithoutUpdatedByUserNestedInput
    deletedSubMenus?: SubMenuUpdateManyWithoutDeletedByUserNestedInput
    createdAccesses?: RoleMenuAccessUpdateManyWithoutCreatedByUserNestedInput
    updatedAccesses?: RoleMenuAccessUpdateManyWithoutUpdatedByUserNestedInput
    deletedAccesses?: RoleMenuAccessUpdateManyWithoutDeletedByUserNestedInput
  }

  export type UserUncheckedUpdateWithoutRolesInput = {
    id?: IntFieldUpdateOperationsInput | number
    uid?: StringFieldUpdateOperationsInput | string
    roleId?: IntFieldUpdateOperationsInput | number
    username?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: NullableStringFieldUpdateOperationsInput | string | null
    token?: NullableStringFieldUpdateOperationsInput | string | null
    refreshToken?: NullableStringFieldUpdateOperationsInput | string | null
    status?: IntFieldUpdateOperationsInput | number
    latestLoginAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdRoles?: RoleUncheckedUpdateManyWithoutCreatedByUserNestedInput
    updatedRoles?: RoleUncheckedUpdateManyWithoutUpdatedByUserNestedInput
    deletedRoles?: RoleUncheckedUpdateManyWithoutDeletedByUserNestedInput
    createdMenus?: MasterMenuUncheckedUpdateManyWithoutCreatedByUserNestedInput
    updatedMenus?: MasterMenuUncheckedUpdateManyWithoutUpdatedByUserNestedInput
    deletedMenus?: MasterMenuUncheckedUpdateManyWithoutDeletedByUserNestedInput
    createdSubMenus?: SubMenuUncheckedUpdateManyWithoutCreatedByUserNestedInput
    updatedSubMenus?: SubMenuUncheckedUpdateManyWithoutUpdatedByUserNestedInput
    deletedSubMenus?: SubMenuUncheckedUpdateManyWithoutDeletedByUserNestedInput
    createdAccesses?: RoleMenuAccessUncheckedUpdateManyWithoutCreatedByUserNestedInput
    updatedAccesses?: RoleMenuAccessUncheckedUpdateManyWithoutUpdatedByUserNestedInput
    deletedAccesses?: RoleMenuAccessUncheckedUpdateManyWithoutDeletedByUserNestedInput
  }

  export type UserUncheckedUpdateManyWithoutRolesInput = {
    id?: IntFieldUpdateOperationsInput | number
    uid?: StringFieldUpdateOperationsInput | string
    roleId?: IntFieldUpdateOperationsInput | number
    username?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: NullableStringFieldUpdateOperationsInput | string | null
    token?: NullableStringFieldUpdateOperationsInput | string | null
    refreshToken?: NullableStringFieldUpdateOperationsInput | string | null
    status?: IntFieldUpdateOperationsInput | number
    latestLoginAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type UserUpdateWithoutRoleInput = {
    uid?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: NullableStringFieldUpdateOperationsInput | string | null
    token?: NullableStringFieldUpdateOperationsInput | string | null
    refreshToken?: NullableStringFieldUpdateOperationsInput | string | null
    status?: IntFieldUpdateOperationsInput | number
    latestLoginAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    roles?: RoleUpdateManyWithoutUsersNestedInput
    createdRoles?: RoleUpdateManyWithoutCreatedByUserNestedInput
    updatedRoles?: RoleUpdateManyWithoutUpdatedByUserNestedInput
    deletedRoles?: RoleUpdateManyWithoutDeletedByUserNestedInput
    createdMenus?: MasterMenuUpdateManyWithoutCreatedByUserNestedInput
    updatedMenus?: MasterMenuUpdateManyWithoutUpdatedByUserNestedInput
    deletedMenus?: MasterMenuUpdateManyWithoutDeletedByUserNestedInput
    createdSubMenus?: SubMenuUpdateManyWithoutCreatedByUserNestedInput
    updatedSubMenus?: SubMenuUpdateManyWithoutUpdatedByUserNestedInput
    deletedSubMenus?: SubMenuUpdateManyWithoutDeletedByUserNestedInput
    createdAccesses?: RoleMenuAccessUpdateManyWithoutCreatedByUserNestedInput
    updatedAccesses?: RoleMenuAccessUpdateManyWithoutUpdatedByUserNestedInput
    deletedAccesses?: RoleMenuAccessUpdateManyWithoutDeletedByUserNestedInput
  }

  export type UserUncheckedUpdateWithoutRoleInput = {
    id?: IntFieldUpdateOperationsInput | number
    uid?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: NullableStringFieldUpdateOperationsInput | string | null
    token?: NullableStringFieldUpdateOperationsInput | string | null
    refreshToken?: NullableStringFieldUpdateOperationsInput | string | null
    status?: IntFieldUpdateOperationsInput | number
    latestLoginAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    roles?: RoleUncheckedUpdateManyWithoutUsersNestedInput
    createdRoles?: RoleUncheckedUpdateManyWithoutCreatedByUserNestedInput
    updatedRoles?: RoleUncheckedUpdateManyWithoutUpdatedByUserNestedInput
    deletedRoles?: RoleUncheckedUpdateManyWithoutDeletedByUserNestedInput
    createdMenus?: MasterMenuUncheckedUpdateManyWithoutCreatedByUserNestedInput
    updatedMenus?: MasterMenuUncheckedUpdateManyWithoutUpdatedByUserNestedInput
    deletedMenus?: MasterMenuUncheckedUpdateManyWithoutDeletedByUserNestedInput
    createdSubMenus?: SubMenuUncheckedUpdateManyWithoutCreatedByUserNestedInput
    updatedSubMenus?: SubMenuUncheckedUpdateManyWithoutUpdatedByUserNestedInput
    deletedSubMenus?: SubMenuUncheckedUpdateManyWithoutDeletedByUserNestedInput
    createdAccesses?: RoleMenuAccessUncheckedUpdateManyWithoutCreatedByUserNestedInput
    updatedAccesses?: RoleMenuAccessUncheckedUpdateManyWithoutUpdatedByUserNestedInput
    deletedAccesses?: RoleMenuAccessUncheckedUpdateManyWithoutDeletedByUserNestedInput
  }

  export type UserUncheckedUpdateManyWithoutRoleInput = {
    id?: IntFieldUpdateOperationsInput | number
    uid?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: NullableStringFieldUpdateOperationsInput | string | null
    token?: NullableStringFieldUpdateOperationsInput | string | null
    refreshToken?: NullableStringFieldUpdateOperationsInput | string | null
    status?: IntFieldUpdateOperationsInput | number
    latestLoginAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type RoleMenuAccessUpdateWithoutRoleInput = {
    uid?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    status?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    subMenu?: SubMenuUpdateOneRequiredWithoutRoleMenuAccessNestedInput
    createdByUser?: UserUpdateOneWithoutCreatedAccessesNestedInput
    updatedByUser?: UserUpdateOneWithoutUpdatedAccessesNestedInput
    deletedByUser?: UserUpdateOneWithoutDeletedAccessesNestedInput
  }

  export type RoleMenuAccessUncheckedUpdateWithoutRoleInput = {
    id?: IntFieldUpdateOperationsInput | number
    uid?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    submenuId?: IntFieldUpdateOperationsInput | number
    status?: IntFieldUpdateOperationsInput | number
    createdBy?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedBy?: NullableIntFieldUpdateOperationsInput | number | null
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deletedBy?: NullableIntFieldUpdateOperationsInput | number | null
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type RoleMenuAccessUncheckedUpdateManyWithoutRoleInput = {
    id?: IntFieldUpdateOperationsInput | number
    uid?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    submenuId?: IntFieldUpdateOperationsInput | number
    status?: IntFieldUpdateOperationsInput | number
    createdBy?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedBy?: NullableIntFieldUpdateOperationsInput | number | null
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deletedBy?: NullableIntFieldUpdateOperationsInput | number | null
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type SubMenuCreateManyMasterMenuInput = {
    id?: number
    uid?: string
    name: string
    description?: string | null
    url?: string | null
    icon?: string | null
    order?: number
    status?: number
    createdBy?: number | null
    createdAt?: Date | string
    updatedBy?: number | null
    updatedAt?: Date | string | null
    deletedBy?: number | null
    deletedAt?: Date | string | null
  }

  export type SubMenuUpdateWithoutMasterMenuInput = {
    uid?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    url?: NullableStringFieldUpdateOperationsInput | string | null
    icon?: NullableStringFieldUpdateOperationsInput | string | null
    order?: IntFieldUpdateOperationsInput | number
    status?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdByUser?: UserUpdateOneWithoutCreatedSubMenusNestedInput
    updatedByUser?: UserUpdateOneWithoutUpdatedSubMenusNestedInput
    deletedByUser?: UserUpdateOneWithoutDeletedSubMenusNestedInput
    RoleMenuAccess?: RoleMenuAccessUpdateManyWithoutSubMenuNestedInput
  }

  export type SubMenuUncheckedUpdateWithoutMasterMenuInput = {
    id?: IntFieldUpdateOperationsInput | number
    uid?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    url?: NullableStringFieldUpdateOperationsInput | string | null
    icon?: NullableStringFieldUpdateOperationsInput | string | null
    order?: IntFieldUpdateOperationsInput | number
    status?: IntFieldUpdateOperationsInput | number
    createdBy?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedBy?: NullableIntFieldUpdateOperationsInput | number | null
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deletedBy?: NullableIntFieldUpdateOperationsInput | number | null
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    RoleMenuAccess?: RoleMenuAccessUncheckedUpdateManyWithoutSubMenuNestedInput
  }

  export type SubMenuUncheckedUpdateManyWithoutMasterMenuInput = {
    id?: IntFieldUpdateOperationsInput | number
    uid?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    url?: NullableStringFieldUpdateOperationsInput | string | null
    icon?: NullableStringFieldUpdateOperationsInput | string | null
    order?: IntFieldUpdateOperationsInput | number
    status?: IntFieldUpdateOperationsInput | number
    createdBy?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedBy?: NullableIntFieldUpdateOperationsInput | number | null
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deletedBy?: NullableIntFieldUpdateOperationsInput | number | null
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type RoleMenuAccessCreateManySubMenuInput = {
    id?: number
    uid?: string
    name: string
    description?: string | null
    roleId: number
    status?: number
    createdBy?: number | null
    createdAt?: Date | string
    updatedBy?: number | null
    updatedAt?: Date | string | null
    deletedBy?: number | null
    deletedAt?: Date | string | null
  }

  export type RoleMenuAccessUpdateWithoutSubMenuInput = {
    uid?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    status?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    role?: RoleUpdateOneRequiredWithoutRoleMenuAccessNestedInput
    createdByUser?: UserUpdateOneWithoutCreatedAccessesNestedInput
    updatedByUser?: UserUpdateOneWithoutUpdatedAccessesNestedInput
    deletedByUser?: UserUpdateOneWithoutDeletedAccessesNestedInput
  }

  export type RoleMenuAccessUncheckedUpdateWithoutSubMenuInput = {
    id?: IntFieldUpdateOperationsInput | number
    uid?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    roleId?: IntFieldUpdateOperationsInput | number
    status?: IntFieldUpdateOperationsInput | number
    createdBy?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedBy?: NullableIntFieldUpdateOperationsInput | number | null
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deletedBy?: NullableIntFieldUpdateOperationsInput | number | null
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type RoleMenuAccessUncheckedUpdateManyWithoutSubMenuInput = {
    id?: IntFieldUpdateOperationsInput | number
    uid?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    roleId?: IntFieldUpdateOperationsInput | number
    status?: IntFieldUpdateOperationsInput | number
    createdBy?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedBy?: NullableIntFieldUpdateOperationsInput | number | null
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deletedBy?: NullableIntFieldUpdateOperationsInput | number | null
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }



  /**
   * Aliases for legacy arg types
   */
    /**
     * @deprecated Use UserCountOutputTypeDefaultArgs instead
     */
    export type UserCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = UserCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use RoleCountOutputTypeDefaultArgs instead
     */
    export type RoleCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = RoleCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use MasterMenuCountOutputTypeDefaultArgs instead
     */
    export type MasterMenuCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = MasterMenuCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use SubMenuCountOutputTypeDefaultArgs instead
     */
    export type SubMenuCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = SubMenuCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use UserDefaultArgs instead
     */
    export type UserArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = UserDefaultArgs<ExtArgs>
    /**
     * @deprecated Use RoleDefaultArgs instead
     */
    export type RoleArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = RoleDefaultArgs<ExtArgs>
    /**
     * @deprecated Use MasterMenuDefaultArgs instead
     */
    export type MasterMenuArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = MasterMenuDefaultArgs<ExtArgs>
    /**
     * @deprecated Use SubMenuDefaultArgs instead
     */
    export type SubMenuArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = SubMenuDefaultArgs<ExtArgs>
    /**
     * @deprecated Use RoleMenuAccessDefaultArgs instead
     */
    export type RoleMenuAccessArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = RoleMenuAccessDefaultArgs<ExtArgs>

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