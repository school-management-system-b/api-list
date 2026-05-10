
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
 * Model Violation
 * 
 */
export type Violation = $Result.DefaultSelection<Prisma.$ViolationPayload>
/**
 * Model ViolationApprovalHistory
 * 
 */
export type ViolationApprovalHistory = $Result.DefaultSelection<Prisma.$ViolationApprovalHistoryPayload>
/**
 * Model ViolationStatistics
 * 
 */
export type ViolationStatistics = $Result.DefaultSelection<Prisma.$ViolationStatisticsPayload>

/**
 * Enums
 */
export namespace $Enums {
  export const ViolationSeverity: {
  RINGAN: 'RINGAN',
  SEDANG: 'SEDANG',
  BERAT: 'BERAT'
};

export type ViolationSeverity = (typeof ViolationSeverity)[keyof typeof ViolationSeverity]


export const ViolationStatus: {
  PENDING: 'PENDING',
  APPROVED_WALI: 'APPROVED_WALI',
  APPROVED_BK: 'APPROVED_BK',
  REJECTED: 'REJECTED',
  APPEALED: 'APPEALED',
  APPEAL_APPROVED: 'APPEAL_APPROVED',
  APPEAL_REJECTED: 'APPEAL_REJECTED'
};

export type ViolationStatus = (typeof ViolationStatus)[keyof typeof ViolationStatus]


export const AppealStatus: {
  PENDING: 'PENDING',
  APPROVED: 'APPROVED',
  REJECTED: 'REJECTED'
};

export type AppealStatus = (typeof AppealStatus)[keyof typeof AppealStatus]


export const ApprovalAction: {
  SUBMIT: 'SUBMIT',
  APPROVE_WALI: 'APPROVE_WALI',
  APPROVE_BK: 'APPROVE_BK',
  REJECT: 'REJECT',
  APPEAL: 'APPEAL',
  APPEAL_APPROVE: 'APPEAL_APPROVE',
  APPEAL_REJECT: 'APPEAL_REJECT',
  UPDATE: 'UPDATE',
  DELETE: 'DELETE'
};

export type ApprovalAction = (typeof ApprovalAction)[keyof typeof ApprovalAction]

}

export type ViolationSeverity = $Enums.ViolationSeverity

export const ViolationSeverity: typeof $Enums.ViolationSeverity

export type ViolationStatus = $Enums.ViolationStatus

export const ViolationStatus: typeof $Enums.ViolationStatus

export type AppealStatus = $Enums.AppealStatus

export const AppealStatus: typeof $Enums.AppealStatus

export type ApprovalAction = $Enums.ApprovalAction

export const ApprovalAction: typeof $Enums.ApprovalAction

/**
 * ##  Prisma Client ʲˢ
 * 
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Violations
 * const violations = await prisma.violation.findMany()
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
   * // Fetch zero or more Violations
   * const violations = await prisma.violation.findMany()
   * ```
   *
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
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


  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb, ExtArgs>

      /**
   * `prisma.violation`: Exposes CRUD operations for the **Violation** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Violations
    * const violations = await prisma.violation.findMany()
    * ```
    */
  get violation(): Prisma.ViolationDelegate<ExtArgs>;

  /**
   * `prisma.violationApprovalHistory`: Exposes CRUD operations for the **ViolationApprovalHistory** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more ViolationApprovalHistories
    * const violationApprovalHistories = await prisma.violationApprovalHistory.findMany()
    * ```
    */
  get violationApprovalHistory(): Prisma.ViolationApprovalHistoryDelegate<ExtArgs>;

  /**
   * `prisma.violationStatistics`: Exposes CRUD operations for the **ViolationStatistics** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more ViolationStatistics
    * const violationStatistics = await prisma.violationStatistics.findMany()
    * ```
    */
  get violationStatistics(): Prisma.ViolationStatisticsDelegate<ExtArgs>;
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
   * Prisma Client JS version: 5.22.0
   * Query Engine version: 605197351a3c8bdd595af2d2a9bc3025bca48ea2
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
    Violation: 'Violation',
    ViolationApprovalHistory: 'ViolationApprovalHistory',
    ViolationStatistics: 'ViolationStatistics'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb extends $Utils.Fn<{extArgs: $Extensions.InternalArgs, clientOptions: PrismaClientOptions }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], this['params']['clientOptions']>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, ClientOptions = {}> = {
    meta: {
      modelProps: "violation" | "violationApprovalHistory" | "violationStatistics"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      Violation: {
        payload: Prisma.$ViolationPayload<ExtArgs>
        fields: Prisma.ViolationFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ViolationFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ViolationPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ViolationFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ViolationPayload>
          }
          findFirst: {
            args: Prisma.ViolationFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ViolationPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ViolationFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ViolationPayload>
          }
          findMany: {
            args: Prisma.ViolationFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ViolationPayload>[]
          }
          create: {
            args: Prisma.ViolationCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ViolationPayload>
          }
          createMany: {
            args: Prisma.ViolationCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ViolationCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ViolationPayload>[]
          }
          delete: {
            args: Prisma.ViolationDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ViolationPayload>
          }
          update: {
            args: Prisma.ViolationUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ViolationPayload>
          }
          deleteMany: {
            args: Prisma.ViolationDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ViolationUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.ViolationUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ViolationPayload>
          }
          aggregate: {
            args: Prisma.ViolationAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateViolation>
          }
          groupBy: {
            args: Prisma.ViolationGroupByArgs<ExtArgs>
            result: $Utils.Optional<ViolationGroupByOutputType>[]
          }
          count: {
            args: Prisma.ViolationCountArgs<ExtArgs>
            result: $Utils.Optional<ViolationCountAggregateOutputType> | number
          }
        }
      }
      ViolationApprovalHistory: {
        payload: Prisma.$ViolationApprovalHistoryPayload<ExtArgs>
        fields: Prisma.ViolationApprovalHistoryFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ViolationApprovalHistoryFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ViolationApprovalHistoryPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ViolationApprovalHistoryFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ViolationApprovalHistoryPayload>
          }
          findFirst: {
            args: Prisma.ViolationApprovalHistoryFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ViolationApprovalHistoryPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ViolationApprovalHistoryFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ViolationApprovalHistoryPayload>
          }
          findMany: {
            args: Prisma.ViolationApprovalHistoryFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ViolationApprovalHistoryPayload>[]
          }
          create: {
            args: Prisma.ViolationApprovalHistoryCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ViolationApprovalHistoryPayload>
          }
          createMany: {
            args: Prisma.ViolationApprovalHistoryCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ViolationApprovalHistoryCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ViolationApprovalHistoryPayload>[]
          }
          delete: {
            args: Prisma.ViolationApprovalHistoryDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ViolationApprovalHistoryPayload>
          }
          update: {
            args: Prisma.ViolationApprovalHistoryUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ViolationApprovalHistoryPayload>
          }
          deleteMany: {
            args: Prisma.ViolationApprovalHistoryDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ViolationApprovalHistoryUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.ViolationApprovalHistoryUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ViolationApprovalHistoryPayload>
          }
          aggregate: {
            args: Prisma.ViolationApprovalHistoryAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateViolationApprovalHistory>
          }
          groupBy: {
            args: Prisma.ViolationApprovalHistoryGroupByArgs<ExtArgs>
            result: $Utils.Optional<ViolationApprovalHistoryGroupByOutputType>[]
          }
          count: {
            args: Prisma.ViolationApprovalHistoryCountArgs<ExtArgs>
            result: $Utils.Optional<ViolationApprovalHistoryCountAggregateOutputType> | number
          }
        }
      }
      ViolationStatistics: {
        payload: Prisma.$ViolationStatisticsPayload<ExtArgs>
        fields: Prisma.ViolationStatisticsFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ViolationStatisticsFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ViolationStatisticsPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ViolationStatisticsFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ViolationStatisticsPayload>
          }
          findFirst: {
            args: Prisma.ViolationStatisticsFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ViolationStatisticsPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ViolationStatisticsFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ViolationStatisticsPayload>
          }
          findMany: {
            args: Prisma.ViolationStatisticsFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ViolationStatisticsPayload>[]
          }
          create: {
            args: Prisma.ViolationStatisticsCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ViolationStatisticsPayload>
          }
          createMany: {
            args: Prisma.ViolationStatisticsCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ViolationStatisticsCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ViolationStatisticsPayload>[]
          }
          delete: {
            args: Prisma.ViolationStatisticsDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ViolationStatisticsPayload>
          }
          update: {
            args: Prisma.ViolationStatisticsUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ViolationStatisticsPayload>
          }
          deleteMany: {
            args: Prisma.ViolationStatisticsDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ViolationStatisticsUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.ViolationStatisticsUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ViolationStatisticsPayload>
          }
          aggregate: {
            args: Prisma.ViolationStatisticsAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateViolationStatistics>
          }
          groupBy: {
            args: Prisma.ViolationStatisticsGroupByArgs<ExtArgs>
            result: $Utils.Optional<ViolationStatisticsGroupByOutputType>[]
          }
          count: {
            args: Prisma.ViolationStatisticsCountArgs<ExtArgs>
            result: $Utils.Optional<ViolationStatisticsCountAggregateOutputType> | number
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
   * Count Type ViolationCountOutputType
   */

  export type ViolationCountOutputType = {
    approvalHistory: number
  }

  export type ViolationCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    approvalHistory?: boolean | ViolationCountOutputTypeCountApprovalHistoryArgs
  }

  // Custom InputTypes
  /**
   * ViolationCountOutputType without action
   */
  export type ViolationCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ViolationCountOutputType
     */
    select?: ViolationCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * ViolationCountOutputType without action
   */
  export type ViolationCountOutputTypeCountApprovalHistoryArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ViolationApprovalHistoryWhereInput
  }


  /**
   * Models
   */

  /**
   * Model Violation
   */

  export type AggregateViolation = {
    _count: ViolationCountAggregateOutputType | null
    _avg: ViolationAvgAggregateOutputType | null
    _sum: ViolationSumAggregateOutputType | null
    _min: ViolationMinAggregateOutputType | null
    _max: ViolationMaxAggregateOutputType | null
  }

  export type ViolationAvgAggregateOutputType = {
    points: number | null
    semester: number | null
  }

  export type ViolationSumAggregateOutputType = {
    points: number | null
    semester: number | null
  }

  export type ViolationMinAggregateOutputType = {
    id: string | null
    studentId: string | null
    studentNisn: string | null
    studentName: string | null
    studentClass: string | null
    reportedBy: string | null
    reportedByName: string | null
    reporterRole: string | null
    categoryId: string | null
    categoryCode: string | null
    categoryName: string | null
    categorySeverity: $Enums.ViolationSeverity | null
    description: string | null
    location: string | null
    violationDate: Date | null
    violationTime: string | null
    points: number | null
    witnessName: string | null
    witnessStatement: string | null
    status: $Enums.ViolationStatus | null
    approvedByWaliAt: Date | null
    approvedByWaliBy: string | null
    approvedByWaliName: string | null
    waliKelasNotes: string | null
    approvedByBKAt: Date | null
    approvedByBKBy: string | null
    approvedByBKName: string | null
    bkNotes: string | null
    rejectedAt: Date | null
    rejectedBy: string | null
    rejectedByName: string | null
    rejectionReason: string | null
    rejectionLevel: string | null
    appealReason: string | null
    appealedAt: Date | null
    appealedBy: string | null
    appealReviewedAt: Date | null
    appealReviewedBy: string | null
    appealStatus: $Enums.AppealStatus | null
    appealNotes: string | null
    sanction: string | null
    sanctionStartDate: Date | null
    sanctionEndDate: Date | null
    sanctionCompleted: boolean | null
    academicYear: string | null
    semester: number | null
    notificationSent: boolean | null
    notificationSentAt: Date | null
    isActive: boolean | null
    createdBy: string | null
    createdAt: Date | null
    updatedBy: string | null
    updatedAt: Date | null
    deletedAt: Date | null
    deletedBy: string | null
  }

  export type ViolationMaxAggregateOutputType = {
    id: string | null
    studentId: string | null
    studentNisn: string | null
    studentName: string | null
    studentClass: string | null
    reportedBy: string | null
    reportedByName: string | null
    reporterRole: string | null
    categoryId: string | null
    categoryCode: string | null
    categoryName: string | null
    categorySeverity: $Enums.ViolationSeverity | null
    description: string | null
    location: string | null
    violationDate: Date | null
    violationTime: string | null
    points: number | null
    witnessName: string | null
    witnessStatement: string | null
    status: $Enums.ViolationStatus | null
    approvedByWaliAt: Date | null
    approvedByWaliBy: string | null
    approvedByWaliName: string | null
    waliKelasNotes: string | null
    approvedByBKAt: Date | null
    approvedByBKBy: string | null
    approvedByBKName: string | null
    bkNotes: string | null
    rejectedAt: Date | null
    rejectedBy: string | null
    rejectedByName: string | null
    rejectionReason: string | null
    rejectionLevel: string | null
    appealReason: string | null
    appealedAt: Date | null
    appealedBy: string | null
    appealReviewedAt: Date | null
    appealReviewedBy: string | null
    appealStatus: $Enums.AppealStatus | null
    appealNotes: string | null
    sanction: string | null
    sanctionStartDate: Date | null
    sanctionEndDate: Date | null
    sanctionCompleted: boolean | null
    academicYear: string | null
    semester: number | null
    notificationSent: boolean | null
    notificationSentAt: Date | null
    isActive: boolean | null
    createdBy: string | null
    createdAt: Date | null
    updatedBy: string | null
    updatedAt: Date | null
    deletedAt: Date | null
    deletedBy: string | null
  }

  export type ViolationCountAggregateOutputType = {
    id: number
    studentId: number
    studentNisn: number
    studentName: number
    studentClass: number
    reportedBy: number
    reportedByName: number
    reporterRole: number
    categoryId: number
    categoryCode: number
    categoryName: number
    categorySeverity: number
    description: number
    location: number
    violationDate: number
    violationTime: number
    points: number
    evidenceUrls: number
    witnessName: number
    witnessStatement: number
    status: number
    approvedByWaliAt: number
    approvedByWaliBy: number
    approvedByWaliName: number
    waliKelasNotes: number
    approvedByBKAt: number
    approvedByBKBy: number
    approvedByBKName: number
    bkNotes: number
    rejectedAt: number
    rejectedBy: number
    rejectedByName: number
    rejectionReason: number
    rejectionLevel: number
    appealReason: number
    appealedAt: number
    appealedBy: number
    appealReviewedAt: number
    appealReviewedBy: number
    appealStatus: number
    appealNotes: number
    sanction: number
    sanctionStartDate: number
    sanctionEndDate: number
    sanctionCompleted: number
    academicYear: number
    semester: number
    notificationSent: number
    notificationSentAt: number
    isActive: number
    createdBy: number
    createdAt: number
    updatedBy: number
    updatedAt: number
    deletedAt: number
    deletedBy: number
    _all: number
  }


  export type ViolationAvgAggregateInputType = {
    points?: true
    semester?: true
  }

  export type ViolationSumAggregateInputType = {
    points?: true
    semester?: true
  }

  export type ViolationMinAggregateInputType = {
    id?: true
    studentId?: true
    studentNisn?: true
    studentName?: true
    studentClass?: true
    reportedBy?: true
    reportedByName?: true
    reporterRole?: true
    categoryId?: true
    categoryCode?: true
    categoryName?: true
    categorySeverity?: true
    description?: true
    location?: true
    violationDate?: true
    violationTime?: true
    points?: true
    witnessName?: true
    witnessStatement?: true
    status?: true
    approvedByWaliAt?: true
    approvedByWaliBy?: true
    approvedByWaliName?: true
    waliKelasNotes?: true
    approvedByBKAt?: true
    approvedByBKBy?: true
    approvedByBKName?: true
    bkNotes?: true
    rejectedAt?: true
    rejectedBy?: true
    rejectedByName?: true
    rejectionReason?: true
    rejectionLevel?: true
    appealReason?: true
    appealedAt?: true
    appealedBy?: true
    appealReviewedAt?: true
    appealReviewedBy?: true
    appealStatus?: true
    appealNotes?: true
    sanction?: true
    sanctionStartDate?: true
    sanctionEndDate?: true
    sanctionCompleted?: true
    academicYear?: true
    semester?: true
    notificationSent?: true
    notificationSentAt?: true
    isActive?: true
    createdBy?: true
    createdAt?: true
    updatedBy?: true
    updatedAt?: true
    deletedAt?: true
    deletedBy?: true
  }

  export type ViolationMaxAggregateInputType = {
    id?: true
    studentId?: true
    studentNisn?: true
    studentName?: true
    studentClass?: true
    reportedBy?: true
    reportedByName?: true
    reporterRole?: true
    categoryId?: true
    categoryCode?: true
    categoryName?: true
    categorySeverity?: true
    description?: true
    location?: true
    violationDate?: true
    violationTime?: true
    points?: true
    witnessName?: true
    witnessStatement?: true
    status?: true
    approvedByWaliAt?: true
    approvedByWaliBy?: true
    approvedByWaliName?: true
    waliKelasNotes?: true
    approvedByBKAt?: true
    approvedByBKBy?: true
    approvedByBKName?: true
    bkNotes?: true
    rejectedAt?: true
    rejectedBy?: true
    rejectedByName?: true
    rejectionReason?: true
    rejectionLevel?: true
    appealReason?: true
    appealedAt?: true
    appealedBy?: true
    appealReviewedAt?: true
    appealReviewedBy?: true
    appealStatus?: true
    appealNotes?: true
    sanction?: true
    sanctionStartDate?: true
    sanctionEndDate?: true
    sanctionCompleted?: true
    academicYear?: true
    semester?: true
    notificationSent?: true
    notificationSentAt?: true
    isActive?: true
    createdBy?: true
    createdAt?: true
    updatedBy?: true
    updatedAt?: true
    deletedAt?: true
    deletedBy?: true
  }

  export type ViolationCountAggregateInputType = {
    id?: true
    studentId?: true
    studentNisn?: true
    studentName?: true
    studentClass?: true
    reportedBy?: true
    reportedByName?: true
    reporterRole?: true
    categoryId?: true
    categoryCode?: true
    categoryName?: true
    categorySeverity?: true
    description?: true
    location?: true
    violationDate?: true
    violationTime?: true
    points?: true
    evidenceUrls?: true
    witnessName?: true
    witnessStatement?: true
    status?: true
    approvedByWaliAt?: true
    approvedByWaliBy?: true
    approvedByWaliName?: true
    waliKelasNotes?: true
    approvedByBKAt?: true
    approvedByBKBy?: true
    approvedByBKName?: true
    bkNotes?: true
    rejectedAt?: true
    rejectedBy?: true
    rejectedByName?: true
    rejectionReason?: true
    rejectionLevel?: true
    appealReason?: true
    appealedAt?: true
    appealedBy?: true
    appealReviewedAt?: true
    appealReviewedBy?: true
    appealStatus?: true
    appealNotes?: true
    sanction?: true
    sanctionStartDate?: true
    sanctionEndDate?: true
    sanctionCompleted?: true
    academicYear?: true
    semester?: true
    notificationSent?: true
    notificationSentAt?: true
    isActive?: true
    createdBy?: true
    createdAt?: true
    updatedBy?: true
    updatedAt?: true
    deletedAt?: true
    deletedBy?: true
    _all?: true
  }

  export type ViolationAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Violation to aggregate.
     */
    where?: ViolationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Violations to fetch.
     */
    orderBy?: ViolationOrderByWithRelationInput | ViolationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ViolationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Violations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Violations.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Violations
    **/
    _count?: true | ViolationCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ViolationAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ViolationSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ViolationMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ViolationMaxAggregateInputType
  }

  export type GetViolationAggregateType<T extends ViolationAggregateArgs> = {
        [P in keyof T & keyof AggregateViolation]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateViolation[P]>
      : GetScalarType<T[P], AggregateViolation[P]>
  }




  export type ViolationGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ViolationWhereInput
    orderBy?: ViolationOrderByWithAggregationInput | ViolationOrderByWithAggregationInput[]
    by: ViolationScalarFieldEnum[] | ViolationScalarFieldEnum
    having?: ViolationScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ViolationCountAggregateInputType | true
    _avg?: ViolationAvgAggregateInputType
    _sum?: ViolationSumAggregateInputType
    _min?: ViolationMinAggregateInputType
    _max?: ViolationMaxAggregateInputType
  }

  export type ViolationGroupByOutputType = {
    id: string
    studentId: string
    studentNisn: string
    studentName: string
    studentClass: string
    reportedBy: string
    reportedByName: string
    reporterRole: string
    categoryId: string
    categoryCode: string
    categoryName: string
    categorySeverity: $Enums.ViolationSeverity
    description: string
    location: string | null
    violationDate: Date
    violationTime: string | null
    points: number
    evidenceUrls: JsonValue | null
    witnessName: string | null
    witnessStatement: string | null
    status: $Enums.ViolationStatus
    approvedByWaliAt: Date | null
    approvedByWaliBy: string | null
    approvedByWaliName: string | null
    waliKelasNotes: string | null
    approvedByBKAt: Date | null
    approvedByBKBy: string | null
    approvedByBKName: string | null
    bkNotes: string | null
    rejectedAt: Date | null
    rejectedBy: string | null
    rejectedByName: string | null
    rejectionReason: string | null
    rejectionLevel: string | null
    appealReason: string | null
    appealedAt: Date | null
    appealedBy: string | null
    appealReviewedAt: Date | null
    appealReviewedBy: string | null
    appealStatus: $Enums.AppealStatus | null
    appealNotes: string | null
    sanction: string | null
    sanctionStartDate: Date | null
    sanctionEndDate: Date | null
    sanctionCompleted: boolean
    academicYear: string
    semester: number
    notificationSent: boolean
    notificationSentAt: Date | null
    isActive: boolean
    createdBy: string
    createdAt: Date
    updatedBy: string | null
    updatedAt: Date
    deletedAt: Date | null
    deletedBy: string | null
    _count: ViolationCountAggregateOutputType | null
    _avg: ViolationAvgAggregateOutputType | null
    _sum: ViolationSumAggregateOutputType | null
    _min: ViolationMinAggregateOutputType | null
    _max: ViolationMaxAggregateOutputType | null
  }

  type GetViolationGroupByPayload<T extends ViolationGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ViolationGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ViolationGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ViolationGroupByOutputType[P]>
            : GetScalarType<T[P], ViolationGroupByOutputType[P]>
        }
      >
    >


  export type ViolationSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    studentId?: boolean
    studentNisn?: boolean
    studentName?: boolean
    studentClass?: boolean
    reportedBy?: boolean
    reportedByName?: boolean
    reporterRole?: boolean
    categoryId?: boolean
    categoryCode?: boolean
    categoryName?: boolean
    categorySeverity?: boolean
    description?: boolean
    location?: boolean
    violationDate?: boolean
    violationTime?: boolean
    points?: boolean
    evidenceUrls?: boolean
    witnessName?: boolean
    witnessStatement?: boolean
    status?: boolean
    approvedByWaliAt?: boolean
    approvedByWaliBy?: boolean
    approvedByWaliName?: boolean
    waliKelasNotes?: boolean
    approvedByBKAt?: boolean
    approvedByBKBy?: boolean
    approvedByBKName?: boolean
    bkNotes?: boolean
    rejectedAt?: boolean
    rejectedBy?: boolean
    rejectedByName?: boolean
    rejectionReason?: boolean
    rejectionLevel?: boolean
    appealReason?: boolean
    appealedAt?: boolean
    appealedBy?: boolean
    appealReviewedAt?: boolean
    appealReviewedBy?: boolean
    appealStatus?: boolean
    appealNotes?: boolean
    sanction?: boolean
    sanctionStartDate?: boolean
    sanctionEndDate?: boolean
    sanctionCompleted?: boolean
    academicYear?: boolean
    semester?: boolean
    notificationSent?: boolean
    notificationSentAt?: boolean
    isActive?: boolean
    createdBy?: boolean
    createdAt?: boolean
    updatedBy?: boolean
    updatedAt?: boolean
    deletedAt?: boolean
    deletedBy?: boolean
    approvalHistory?: boolean | Violation$approvalHistoryArgs<ExtArgs>
    _count?: boolean | ViolationCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["violation"]>

  export type ViolationSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    studentId?: boolean
    studentNisn?: boolean
    studentName?: boolean
    studentClass?: boolean
    reportedBy?: boolean
    reportedByName?: boolean
    reporterRole?: boolean
    categoryId?: boolean
    categoryCode?: boolean
    categoryName?: boolean
    categorySeverity?: boolean
    description?: boolean
    location?: boolean
    violationDate?: boolean
    violationTime?: boolean
    points?: boolean
    evidenceUrls?: boolean
    witnessName?: boolean
    witnessStatement?: boolean
    status?: boolean
    approvedByWaliAt?: boolean
    approvedByWaliBy?: boolean
    approvedByWaliName?: boolean
    waliKelasNotes?: boolean
    approvedByBKAt?: boolean
    approvedByBKBy?: boolean
    approvedByBKName?: boolean
    bkNotes?: boolean
    rejectedAt?: boolean
    rejectedBy?: boolean
    rejectedByName?: boolean
    rejectionReason?: boolean
    rejectionLevel?: boolean
    appealReason?: boolean
    appealedAt?: boolean
    appealedBy?: boolean
    appealReviewedAt?: boolean
    appealReviewedBy?: boolean
    appealStatus?: boolean
    appealNotes?: boolean
    sanction?: boolean
    sanctionStartDate?: boolean
    sanctionEndDate?: boolean
    sanctionCompleted?: boolean
    academicYear?: boolean
    semester?: boolean
    notificationSent?: boolean
    notificationSentAt?: boolean
    isActive?: boolean
    createdBy?: boolean
    createdAt?: boolean
    updatedBy?: boolean
    updatedAt?: boolean
    deletedAt?: boolean
    deletedBy?: boolean
  }, ExtArgs["result"]["violation"]>

  export type ViolationSelectScalar = {
    id?: boolean
    studentId?: boolean
    studentNisn?: boolean
    studentName?: boolean
    studentClass?: boolean
    reportedBy?: boolean
    reportedByName?: boolean
    reporterRole?: boolean
    categoryId?: boolean
    categoryCode?: boolean
    categoryName?: boolean
    categorySeverity?: boolean
    description?: boolean
    location?: boolean
    violationDate?: boolean
    violationTime?: boolean
    points?: boolean
    evidenceUrls?: boolean
    witnessName?: boolean
    witnessStatement?: boolean
    status?: boolean
    approvedByWaliAt?: boolean
    approvedByWaliBy?: boolean
    approvedByWaliName?: boolean
    waliKelasNotes?: boolean
    approvedByBKAt?: boolean
    approvedByBKBy?: boolean
    approvedByBKName?: boolean
    bkNotes?: boolean
    rejectedAt?: boolean
    rejectedBy?: boolean
    rejectedByName?: boolean
    rejectionReason?: boolean
    rejectionLevel?: boolean
    appealReason?: boolean
    appealedAt?: boolean
    appealedBy?: boolean
    appealReviewedAt?: boolean
    appealReviewedBy?: boolean
    appealStatus?: boolean
    appealNotes?: boolean
    sanction?: boolean
    sanctionStartDate?: boolean
    sanctionEndDate?: boolean
    sanctionCompleted?: boolean
    academicYear?: boolean
    semester?: boolean
    notificationSent?: boolean
    notificationSentAt?: boolean
    isActive?: boolean
    createdBy?: boolean
    createdAt?: boolean
    updatedBy?: boolean
    updatedAt?: boolean
    deletedAt?: boolean
    deletedBy?: boolean
  }

  export type ViolationInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    approvalHistory?: boolean | Violation$approvalHistoryArgs<ExtArgs>
    _count?: boolean | ViolationCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type ViolationIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $ViolationPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Violation"
    objects: {
      approvalHistory: Prisma.$ViolationApprovalHistoryPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      studentId: string
      studentNisn: string
      studentName: string
      studentClass: string
      reportedBy: string
      reportedByName: string
      reporterRole: string
      categoryId: string
      categoryCode: string
      categoryName: string
      categorySeverity: $Enums.ViolationSeverity
      description: string
      location: string | null
      violationDate: Date
      violationTime: string | null
      points: number
      evidenceUrls: Prisma.JsonValue | null
      witnessName: string | null
      witnessStatement: string | null
      status: $Enums.ViolationStatus
      approvedByWaliAt: Date | null
      approvedByWaliBy: string | null
      approvedByWaliName: string | null
      waliKelasNotes: string | null
      approvedByBKAt: Date | null
      approvedByBKBy: string | null
      approvedByBKName: string | null
      bkNotes: string | null
      rejectedAt: Date | null
      rejectedBy: string | null
      rejectedByName: string | null
      rejectionReason: string | null
      rejectionLevel: string | null
      appealReason: string | null
      appealedAt: Date | null
      appealedBy: string | null
      appealReviewedAt: Date | null
      appealReviewedBy: string | null
      appealStatus: $Enums.AppealStatus | null
      appealNotes: string | null
      sanction: string | null
      sanctionStartDate: Date | null
      sanctionEndDate: Date | null
      sanctionCompleted: boolean
      academicYear: string
      semester: number
      notificationSent: boolean
      notificationSentAt: Date | null
      isActive: boolean
      createdBy: string
      createdAt: Date
      updatedBy: string | null
      updatedAt: Date
      deletedAt: Date | null
      deletedBy: string | null
    }, ExtArgs["result"]["violation"]>
    composites: {}
  }

  type ViolationGetPayload<S extends boolean | null | undefined | ViolationDefaultArgs> = $Result.GetResult<Prisma.$ViolationPayload, S>

  type ViolationCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<ViolationFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: ViolationCountAggregateInputType | true
    }

  export interface ViolationDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Violation'], meta: { name: 'Violation' } }
    /**
     * Find zero or one Violation that matches the filter.
     * @param {ViolationFindUniqueArgs} args - Arguments to find a Violation
     * @example
     * // Get one Violation
     * const violation = await prisma.violation.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ViolationFindUniqueArgs>(args: SelectSubset<T, ViolationFindUniqueArgs<ExtArgs>>): Prisma__ViolationClient<$Result.GetResult<Prisma.$ViolationPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one Violation that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {ViolationFindUniqueOrThrowArgs} args - Arguments to find a Violation
     * @example
     * // Get one Violation
     * const violation = await prisma.violation.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ViolationFindUniqueOrThrowArgs>(args: SelectSubset<T, ViolationFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ViolationClient<$Result.GetResult<Prisma.$ViolationPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first Violation that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ViolationFindFirstArgs} args - Arguments to find a Violation
     * @example
     * // Get one Violation
     * const violation = await prisma.violation.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ViolationFindFirstArgs>(args?: SelectSubset<T, ViolationFindFirstArgs<ExtArgs>>): Prisma__ViolationClient<$Result.GetResult<Prisma.$ViolationPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first Violation that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ViolationFindFirstOrThrowArgs} args - Arguments to find a Violation
     * @example
     * // Get one Violation
     * const violation = await prisma.violation.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ViolationFindFirstOrThrowArgs>(args?: SelectSubset<T, ViolationFindFirstOrThrowArgs<ExtArgs>>): Prisma__ViolationClient<$Result.GetResult<Prisma.$ViolationPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more Violations that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ViolationFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Violations
     * const violations = await prisma.violation.findMany()
     * 
     * // Get first 10 Violations
     * const violations = await prisma.violation.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const violationWithIdOnly = await prisma.violation.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ViolationFindManyArgs>(args?: SelectSubset<T, ViolationFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ViolationPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a Violation.
     * @param {ViolationCreateArgs} args - Arguments to create a Violation.
     * @example
     * // Create one Violation
     * const Violation = await prisma.violation.create({
     *   data: {
     *     // ... data to create a Violation
     *   }
     * })
     * 
     */
    create<T extends ViolationCreateArgs>(args: SelectSubset<T, ViolationCreateArgs<ExtArgs>>): Prisma__ViolationClient<$Result.GetResult<Prisma.$ViolationPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many Violations.
     * @param {ViolationCreateManyArgs} args - Arguments to create many Violations.
     * @example
     * // Create many Violations
     * const violation = await prisma.violation.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ViolationCreateManyArgs>(args?: SelectSubset<T, ViolationCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Violations and returns the data saved in the database.
     * @param {ViolationCreateManyAndReturnArgs} args - Arguments to create many Violations.
     * @example
     * // Create many Violations
     * const violation = await prisma.violation.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Violations and only return the `id`
     * const violationWithIdOnly = await prisma.violation.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ViolationCreateManyAndReturnArgs>(args?: SelectSubset<T, ViolationCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ViolationPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a Violation.
     * @param {ViolationDeleteArgs} args - Arguments to delete one Violation.
     * @example
     * // Delete one Violation
     * const Violation = await prisma.violation.delete({
     *   where: {
     *     // ... filter to delete one Violation
     *   }
     * })
     * 
     */
    delete<T extends ViolationDeleteArgs>(args: SelectSubset<T, ViolationDeleteArgs<ExtArgs>>): Prisma__ViolationClient<$Result.GetResult<Prisma.$ViolationPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one Violation.
     * @param {ViolationUpdateArgs} args - Arguments to update one Violation.
     * @example
     * // Update one Violation
     * const violation = await prisma.violation.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ViolationUpdateArgs>(args: SelectSubset<T, ViolationUpdateArgs<ExtArgs>>): Prisma__ViolationClient<$Result.GetResult<Prisma.$ViolationPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more Violations.
     * @param {ViolationDeleteManyArgs} args - Arguments to filter Violations to delete.
     * @example
     * // Delete a few Violations
     * const { count } = await prisma.violation.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ViolationDeleteManyArgs>(args?: SelectSubset<T, ViolationDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Violations.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ViolationUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Violations
     * const violation = await prisma.violation.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ViolationUpdateManyArgs>(args: SelectSubset<T, ViolationUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Violation.
     * @param {ViolationUpsertArgs} args - Arguments to update or create a Violation.
     * @example
     * // Update or create a Violation
     * const violation = await prisma.violation.upsert({
     *   create: {
     *     // ... data to create a Violation
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Violation we want to update
     *   }
     * })
     */
    upsert<T extends ViolationUpsertArgs>(args: SelectSubset<T, ViolationUpsertArgs<ExtArgs>>): Prisma__ViolationClient<$Result.GetResult<Prisma.$ViolationPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of Violations.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ViolationCountArgs} args - Arguments to filter Violations to count.
     * @example
     * // Count the number of Violations
     * const count = await prisma.violation.count({
     *   where: {
     *     // ... the filter for the Violations we want to count
     *   }
     * })
    **/
    count<T extends ViolationCountArgs>(
      args?: Subset<T, ViolationCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ViolationCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Violation.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ViolationAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ViolationAggregateArgs>(args: Subset<T, ViolationAggregateArgs>): Prisma.PrismaPromise<GetViolationAggregateType<T>>

    /**
     * Group by Violation.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ViolationGroupByArgs} args - Group by arguments.
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
      T extends ViolationGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ViolationGroupByArgs['orderBy'] }
        : { orderBy?: ViolationGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, ViolationGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetViolationGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Violation model
   */
  readonly fields: ViolationFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Violation.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ViolationClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    approvalHistory<T extends Violation$approvalHistoryArgs<ExtArgs> = {}>(args?: Subset<T, Violation$approvalHistoryArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ViolationApprovalHistoryPayload<ExtArgs>, T, "findMany"> | Null>
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
   * Fields of the Violation model
   */ 
  interface ViolationFieldRefs {
    readonly id: FieldRef<"Violation", 'String'>
    readonly studentId: FieldRef<"Violation", 'String'>
    readonly studentNisn: FieldRef<"Violation", 'String'>
    readonly studentName: FieldRef<"Violation", 'String'>
    readonly studentClass: FieldRef<"Violation", 'String'>
    readonly reportedBy: FieldRef<"Violation", 'String'>
    readonly reportedByName: FieldRef<"Violation", 'String'>
    readonly reporterRole: FieldRef<"Violation", 'String'>
    readonly categoryId: FieldRef<"Violation", 'String'>
    readonly categoryCode: FieldRef<"Violation", 'String'>
    readonly categoryName: FieldRef<"Violation", 'String'>
    readonly categorySeverity: FieldRef<"Violation", 'ViolationSeverity'>
    readonly description: FieldRef<"Violation", 'String'>
    readonly location: FieldRef<"Violation", 'String'>
    readonly violationDate: FieldRef<"Violation", 'DateTime'>
    readonly violationTime: FieldRef<"Violation", 'String'>
    readonly points: FieldRef<"Violation", 'Int'>
    readonly evidenceUrls: FieldRef<"Violation", 'Json'>
    readonly witnessName: FieldRef<"Violation", 'String'>
    readonly witnessStatement: FieldRef<"Violation", 'String'>
    readonly status: FieldRef<"Violation", 'ViolationStatus'>
    readonly approvedByWaliAt: FieldRef<"Violation", 'DateTime'>
    readonly approvedByWaliBy: FieldRef<"Violation", 'String'>
    readonly approvedByWaliName: FieldRef<"Violation", 'String'>
    readonly waliKelasNotes: FieldRef<"Violation", 'String'>
    readonly approvedByBKAt: FieldRef<"Violation", 'DateTime'>
    readonly approvedByBKBy: FieldRef<"Violation", 'String'>
    readonly approvedByBKName: FieldRef<"Violation", 'String'>
    readonly bkNotes: FieldRef<"Violation", 'String'>
    readonly rejectedAt: FieldRef<"Violation", 'DateTime'>
    readonly rejectedBy: FieldRef<"Violation", 'String'>
    readonly rejectedByName: FieldRef<"Violation", 'String'>
    readonly rejectionReason: FieldRef<"Violation", 'String'>
    readonly rejectionLevel: FieldRef<"Violation", 'String'>
    readonly appealReason: FieldRef<"Violation", 'String'>
    readonly appealedAt: FieldRef<"Violation", 'DateTime'>
    readonly appealedBy: FieldRef<"Violation", 'String'>
    readonly appealReviewedAt: FieldRef<"Violation", 'DateTime'>
    readonly appealReviewedBy: FieldRef<"Violation", 'String'>
    readonly appealStatus: FieldRef<"Violation", 'AppealStatus'>
    readonly appealNotes: FieldRef<"Violation", 'String'>
    readonly sanction: FieldRef<"Violation", 'String'>
    readonly sanctionStartDate: FieldRef<"Violation", 'DateTime'>
    readonly sanctionEndDate: FieldRef<"Violation", 'DateTime'>
    readonly sanctionCompleted: FieldRef<"Violation", 'Boolean'>
    readonly academicYear: FieldRef<"Violation", 'String'>
    readonly semester: FieldRef<"Violation", 'Int'>
    readonly notificationSent: FieldRef<"Violation", 'Boolean'>
    readonly notificationSentAt: FieldRef<"Violation", 'DateTime'>
    readonly isActive: FieldRef<"Violation", 'Boolean'>
    readonly createdBy: FieldRef<"Violation", 'String'>
    readonly createdAt: FieldRef<"Violation", 'DateTime'>
    readonly updatedBy: FieldRef<"Violation", 'String'>
    readonly updatedAt: FieldRef<"Violation", 'DateTime'>
    readonly deletedAt: FieldRef<"Violation", 'DateTime'>
    readonly deletedBy: FieldRef<"Violation", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Violation findUnique
   */
  export type ViolationFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Violation
     */
    select?: ViolationSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ViolationInclude<ExtArgs> | null
    /**
     * Filter, which Violation to fetch.
     */
    where: ViolationWhereUniqueInput
  }

  /**
   * Violation findUniqueOrThrow
   */
  export type ViolationFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Violation
     */
    select?: ViolationSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ViolationInclude<ExtArgs> | null
    /**
     * Filter, which Violation to fetch.
     */
    where: ViolationWhereUniqueInput
  }

  /**
   * Violation findFirst
   */
  export type ViolationFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Violation
     */
    select?: ViolationSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ViolationInclude<ExtArgs> | null
    /**
     * Filter, which Violation to fetch.
     */
    where?: ViolationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Violations to fetch.
     */
    orderBy?: ViolationOrderByWithRelationInput | ViolationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Violations.
     */
    cursor?: ViolationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Violations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Violations.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Violations.
     */
    distinct?: ViolationScalarFieldEnum | ViolationScalarFieldEnum[]
  }

  /**
   * Violation findFirstOrThrow
   */
  export type ViolationFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Violation
     */
    select?: ViolationSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ViolationInclude<ExtArgs> | null
    /**
     * Filter, which Violation to fetch.
     */
    where?: ViolationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Violations to fetch.
     */
    orderBy?: ViolationOrderByWithRelationInput | ViolationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Violations.
     */
    cursor?: ViolationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Violations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Violations.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Violations.
     */
    distinct?: ViolationScalarFieldEnum | ViolationScalarFieldEnum[]
  }

  /**
   * Violation findMany
   */
  export type ViolationFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Violation
     */
    select?: ViolationSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ViolationInclude<ExtArgs> | null
    /**
     * Filter, which Violations to fetch.
     */
    where?: ViolationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Violations to fetch.
     */
    orderBy?: ViolationOrderByWithRelationInput | ViolationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Violations.
     */
    cursor?: ViolationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Violations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Violations.
     */
    skip?: number
    distinct?: ViolationScalarFieldEnum | ViolationScalarFieldEnum[]
  }

  /**
   * Violation create
   */
  export type ViolationCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Violation
     */
    select?: ViolationSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ViolationInclude<ExtArgs> | null
    /**
     * The data needed to create a Violation.
     */
    data: XOR<ViolationCreateInput, ViolationUncheckedCreateInput>
  }

  /**
   * Violation createMany
   */
  export type ViolationCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Violations.
     */
    data: ViolationCreateManyInput | ViolationCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Violation createManyAndReturn
   */
  export type ViolationCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Violation
     */
    select?: ViolationSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many Violations.
     */
    data: ViolationCreateManyInput | ViolationCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Violation update
   */
  export type ViolationUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Violation
     */
    select?: ViolationSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ViolationInclude<ExtArgs> | null
    /**
     * The data needed to update a Violation.
     */
    data: XOR<ViolationUpdateInput, ViolationUncheckedUpdateInput>
    /**
     * Choose, which Violation to update.
     */
    where: ViolationWhereUniqueInput
  }

  /**
   * Violation updateMany
   */
  export type ViolationUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Violations.
     */
    data: XOR<ViolationUpdateManyMutationInput, ViolationUncheckedUpdateManyInput>
    /**
     * Filter which Violations to update
     */
    where?: ViolationWhereInput
  }

  /**
   * Violation upsert
   */
  export type ViolationUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Violation
     */
    select?: ViolationSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ViolationInclude<ExtArgs> | null
    /**
     * The filter to search for the Violation to update in case it exists.
     */
    where: ViolationWhereUniqueInput
    /**
     * In case the Violation found by the `where` argument doesn't exist, create a new Violation with this data.
     */
    create: XOR<ViolationCreateInput, ViolationUncheckedCreateInput>
    /**
     * In case the Violation was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ViolationUpdateInput, ViolationUncheckedUpdateInput>
  }

  /**
   * Violation delete
   */
  export type ViolationDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Violation
     */
    select?: ViolationSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ViolationInclude<ExtArgs> | null
    /**
     * Filter which Violation to delete.
     */
    where: ViolationWhereUniqueInput
  }

  /**
   * Violation deleteMany
   */
  export type ViolationDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Violations to delete
     */
    where?: ViolationWhereInput
  }

  /**
   * Violation.approvalHistory
   */
  export type Violation$approvalHistoryArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ViolationApprovalHistory
     */
    select?: ViolationApprovalHistorySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ViolationApprovalHistoryInclude<ExtArgs> | null
    where?: ViolationApprovalHistoryWhereInput
    orderBy?: ViolationApprovalHistoryOrderByWithRelationInput | ViolationApprovalHistoryOrderByWithRelationInput[]
    cursor?: ViolationApprovalHistoryWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ViolationApprovalHistoryScalarFieldEnum | ViolationApprovalHistoryScalarFieldEnum[]
  }

  /**
   * Violation without action
   */
  export type ViolationDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Violation
     */
    select?: ViolationSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ViolationInclude<ExtArgs> | null
  }


  /**
   * Model ViolationApprovalHistory
   */

  export type AggregateViolationApprovalHistory = {
    _count: ViolationApprovalHistoryCountAggregateOutputType | null
    _min: ViolationApprovalHistoryMinAggregateOutputType | null
    _max: ViolationApprovalHistoryMaxAggregateOutputType | null
  }

  export type ViolationApprovalHistoryMinAggregateOutputType = {
    id: string | null
    violationId: string | null
    action: $Enums.ApprovalAction | null
    fromStatus: $Enums.ViolationStatus | null
    toStatus: $Enums.ViolationStatus | null
    approverUserId: string | null
    approverName: string | null
    approverRole: string | null
    notes: string | null
    actionDate: Date | null
  }

  export type ViolationApprovalHistoryMaxAggregateOutputType = {
    id: string | null
    violationId: string | null
    action: $Enums.ApprovalAction | null
    fromStatus: $Enums.ViolationStatus | null
    toStatus: $Enums.ViolationStatus | null
    approverUserId: string | null
    approverName: string | null
    approverRole: string | null
    notes: string | null
    actionDate: Date | null
  }

  export type ViolationApprovalHistoryCountAggregateOutputType = {
    id: number
    violationId: number
    action: number
    fromStatus: number
    toStatus: number
    approverUserId: number
    approverName: number
    approverRole: number
    notes: number
    actionDate: number
    _all: number
  }


  export type ViolationApprovalHistoryMinAggregateInputType = {
    id?: true
    violationId?: true
    action?: true
    fromStatus?: true
    toStatus?: true
    approverUserId?: true
    approverName?: true
    approverRole?: true
    notes?: true
    actionDate?: true
  }

  export type ViolationApprovalHistoryMaxAggregateInputType = {
    id?: true
    violationId?: true
    action?: true
    fromStatus?: true
    toStatus?: true
    approverUserId?: true
    approverName?: true
    approverRole?: true
    notes?: true
    actionDate?: true
  }

  export type ViolationApprovalHistoryCountAggregateInputType = {
    id?: true
    violationId?: true
    action?: true
    fromStatus?: true
    toStatus?: true
    approverUserId?: true
    approverName?: true
    approverRole?: true
    notes?: true
    actionDate?: true
    _all?: true
  }

  export type ViolationApprovalHistoryAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ViolationApprovalHistory to aggregate.
     */
    where?: ViolationApprovalHistoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ViolationApprovalHistories to fetch.
     */
    orderBy?: ViolationApprovalHistoryOrderByWithRelationInput | ViolationApprovalHistoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ViolationApprovalHistoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ViolationApprovalHistories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ViolationApprovalHistories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned ViolationApprovalHistories
    **/
    _count?: true | ViolationApprovalHistoryCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ViolationApprovalHistoryMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ViolationApprovalHistoryMaxAggregateInputType
  }

  export type GetViolationApprovalHistoryAggregateType<T extends ViolationApprovalHistoryAggregateArgs> = {
        [P in keyof T & keyof AggregateViolationApprovalHistory]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateViolationApprovalHistory[P]>
      : GetScalarType<T[P], AggregateViolationApprovalHistory[P]>
  }




  export type ViolationApprovalHistoryGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ViolationApprovalHistoryWhereInput
    orderBy?: ViolationApprovalHistoryOrderByWithAggregationInput | ViolationApprovalHistoryOrderByWithAggregationInput[]
    by: ViolationApprovalHistoryScalarFieldEnum[] | ViolationApprovalHistoryScalarFieldEnum
    having?: ViolationApprovalHistoryScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ViolationApprovalHistoryCountAggregateInputType | true
    _min?: ViolationApprovalHistoryMinAggregateInputType
    _max?: ViolationApprovalHistoryMaxAggregateInputType
  }

  export type ViolationApprovalHistoryGroupByOutputType = {
    id: string
    violationId: string
    action: $Enums.ApprovalAction
    fromStatus: $Enums.ViolationStatus
    toStatus: $Enums.ViolationStatus
    approverUserId: string
    approverName: string
    approverRole: string
    notes: string | null
    actionDate: Date
    _count: ViolationApprovalHistoryCountAggregateOutputType | null
    _min: ViolationApprovalHistoryMinAggregateOutputType | null
    _max: ViolationApprovalHistoryMaxAggregateOutputType | null
  }

  type GetViolationApprovalHistoryGroupByPayload<T extends ViolationApprovalHistoryGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ViolationApprovalHistoryGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ViolationApprovalHistoryGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ViolationApprovalHistoryGroupByOutputType[P]>
            : GetScalarType<T[P], ViolationApprovalHistoryGroupByOutputType[P]>
        }
      >
    >


  export type ViolationApprovalHistorySelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    violationId?: boolean
    action?: boolean
    fromStatus?: boolean
    toStatus?: boolean
    approverUserId?: boolean
    approverName?: boolean
    approverRole?: boolean
    notes?: boolean
    actionDate?: boolean
    violation?: boolean | ViolationDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["violationApprovalHistory"]>

  export type ViolationApprovalHistorySelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    violationId?: boolean
    action?: boolean
    fromStatus?: boolean
    toStatus?: boolean
    approverUserId?: boolean
    approverName?: boolean
    approverRole?: boolean
    notes?: boolean
    actionDate?: boolean
    violation?: boolean | ViolationDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["violationApprovalHistory"]>

  export type ViolationApprovalHistorySelectScalar = {
    id?: boolean
    violationId?: boolean
    action?: boolean
    fromStatus?: boolean
    toStatus?: boolean
    approverUserId?: boolean
    approverName?: boolean
    approverRole?: boolean
    notes?: boolean
    actionDate?: boolean
  }

  export type ViolationApprovalHistoryInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    violation?: boolean | ViolationDefaultArgs<ExtArgs>
  }
  export type ViolationApprovalHistoryIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    violation?: boolean | ViolationDefaultArgs<ExtArgs>
  }

  export type $ViolationApprovalHistoryPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "ViolationApprovalHistory"
    objects: {
      violation: Prisma.$ViolationPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      violationId: string
      action: $Enums.ApprovalAction
      fromStatus: $Enums.ViolationStatus
      toStatus: $Enums.ViolationStatus
      approverUserId: string
      approverName: string
      approverRole: string
      notes: string | null
      actionDate: Date
    }, ExtArgs["result"]["violationApprovalHistory"]>
    composites: {}
  }

  type ViolationApprovalHistoryGetPayload<S extends boolean | null | undefined | ViolationApprovalHistoryDefaultArgs> = $Result.GetResult<Prisma.$ViolationApprovalHistoryPayload, S>

  type ViolationApprovalHistoryCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<ViolationApprovalHistoryFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: ViolationApprovalHistoryCountAggregateInputType | true
    }

  export interface ViolationApprovalHistoryDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['ViolationApprovalHistory'], meta: { name: 'ViolationApprovalHistory' } }
    /**
     * Find zero or one ViolationApprovalHistory that matches the filter.
     * @param {ViolationApprovalHistoryFindUniqueArgs} args - Arguments to find a ViolationApprovalHistory
     * @example
     * // Get one ViolationApprovalHistory
     * const violationApprovalHistory = await prisma.violationApprovalHistory.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ViolationApprovalHistoryFindUniqueArgs>(args: SelectSubset<T, ViolationApprovalHistoryFindUniqueArgs<ExtArgs>>): Prisma__ViolationApprovalHistoryClient<$Result.GetResult<Prisma.$ViolationApprovalHistoryPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one ViolationApprovalHistory that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {ViolationApprovalHistoryFindUniqueOrThrowArgs} args - Arguments to find a ViolationApprovalHistory
     * @example
     * // Get one ViolationApprovalHistory
     * const violationApprovalHistory = await prisma.violationApprovalHistory.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ViolationApprovalHistoryFindUniqueOrThrowArgs>(args: SelectSubset<T, ViolationApprovalHistoryFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ViolationApprovalHistoryClient<$Result.GetResult<Prisma.$ViolationApprovalHistoryPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first ViolationApprovalHistory that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ViolationApprovalHistoryFindFirstArgs} args - Arguments to find a ViolationApprovalHistory
     * @example
     * // Get one ViolationApprovalHistory
     * const violationApprovalHistory = await prisma.violationApprovalHistory.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ViolationApprovalHistoryFindFirstArgs>(args?: SelectSubset<T, ViolationApprovalHistoryFindFirstArgs<ExtArgs>>): Prisma__ViolationApprovalHistoryClient<$Result.GetResult<Prisma.$ViolationApprovalHistoryPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first ViolationApprovalHistory that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ViolationApprovalHistoryFindFirstOrThrowArgs} args - Arguments to find a ViolationApprovalHistory
     * @example
     * // Get one ViolationApprovalHistory
     * const violationApprovalHistory = await prisma.violationApprovalHistory.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ViolationApprovalHistoryFindFirstOrThrowArgs>(args?: SelectSubset<T, ViolationApprovalHistoryFindFirstOrThrowArgs<ExtArgs>>): Prisma__ViolationApprovalHistoryClient<$Result.GetResult<Prisma.$ViolationApprovalHistoryPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more ViolationApprovalHistories that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ViolationApprovalHistoryFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all ViolationApprovalHistories
     * const violationApprovalHistories = await prisma.violationApprovalHistory.findMany()
     * 
     * // Get first 10 ViolationApprovalHistories
     * const violationApprovalHistories = await prisma.violationApprovalHistory.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const violationApprovalHistoryWithIdOnly = await prisma.violationApprovalHistory.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ViolationApprovalHistoryFindManyArgs>(args?: SelectSubset<T, ViolationApprovalHistoryFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ViolationApprovalHistoryPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a ViolationApprovalHistory.
     * @param {ViolationApprovalHistoryCreateArgs} args - Arguments to create a ViolationApprovalHistory.
     * @example
     * // Create one ViolationApprovalHistory
     * const ViolationApprovalHistory = await prisma.violationApprovalHistory.create({
     *   data: {
     *     // ... data to create a ViolationApprovalHistory
     *   }
     * })
     * 
     */
    create<T extends ViolationApprovalHistoryCreateArgs>(args: SelectSubset<T, ViolationApprovalHistoryCreateArgs<ExtArgs>>): Prisma__ViolationApprovalHistoryClient<$Result.GetResult<Prisma.$ViolationApprovalHistoryPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many ViolationApprovalHistories.
     * @param {ViolationApprovalHistoryCreateManyArgs} args - Arguments to create many ViolationApprovalHistories.
     * @example
     * // Create many ViolationApprovalHistories
     * const violationApprovalHistory = await prisma.violationApprovalHistory.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ViolationApprovalHistoryCreateManyArgs>(args?: SelectSubset<T, ViolationApprovalHistoryCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many ViolationApprovalHistories and returns the data saved in the database.
     * @param {ViolationApprovalHistoryCreateManyAndReturnArgs} args - Arguments to create many ViolationApprovalHistories.
     * @example
     * // Create many ViolationApprovalHistories
     * const violationApprovalHistory = await prisma.violationApprovalHistory.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many ViolationApprovalHistories and only return the `id`
     * const violationApprovalHistoryWithIdOnly = await prisma.violationApprovalHistory.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ViolationApprovalHistoryCreateManyAndReturnArgs>(args?: SelectSubset<T, ViolationApprovalHistoryCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ViolationApprovalHistoryPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a ViolationApprovalHistory.
     * @param {ViolationApprovalHistoryDeleteArgs} args - Arguments to delete one ViolationApprovalHistory.
     * @example
     * // Delete one ViolationApprovalHistory
     * const ViolationApprovalHistory = await prisma.violationApprovalHistory.delete({
     *   where: {
     *     // ... filter to delete one ViolationApprovalHistory
     *   }
     * })
     * 
     */
    delete<T extends ViolationApprovalHistoryDeleteArgs>(args: SelectSubset<T, ViolationApprovalHistoryDeleteArgs<ExtArgs>>): Prisma__ViolationApprovalHistoryClient<$Result.GetResult<Prisma.$ViolationApprovalHistoryPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one ViolationApprovalHistory.
     * @param {ViolationApprovalHistoryUpdateArgs} args - Arguments to update one ViolationApprovalHistory.
     * @example
     * // Update one ViolationApprovalHistory
     * const violationApprovalHistory = await prisma.violationApprovalHistory.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ViolationApprovalHistoryUpdateArgs>(args: SelectSubset<T, ViolationApprovalHistoryUpdateArgs<ExtArgs>>): Prisma__ViolationApprovalHistoryClient<$Result.GetResult<Prisma.$ViolationApprovalHistoryPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more ViolationApprovalHistories.
     * @param {ViolationApprovalHistoryDeleteManyArgs} args - Arguments to filter ViolationApprovalHistories to delete.
     * @example
     * // Delete a few ViolationApprovalHistories
     * const { count } = await prisma.violationApprovalHistory.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ViolationApprovalHistoryDeleteManyArgs>(args?: SelectSubset<T, ViolationApprovalHistoryDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ViolationApprovalHistories.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ViolationApprovalHistoryUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many ViolationApprovalHistories
     * const violationApprovalHistory = await prisma.violationApprovalHistory.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ViolationApprovalHistoryUpdateManyArgs>(args: SelectSubset<T, ViolationApprovalHistoryUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one ViolationApprovalHistory.
     * @param {ViolationApprovalHistoryUpsertArgs} args - Arguments to update or create a ViolationApprovalHistory.
     * @example
     * // Update or create a ViolationApprovalHistory
     * const violationApprovalHistory = await prisma.violationApprovalHistory.upsert({
     *   create: {
     *     // ... data to create a ViolationApprovalHistory
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the ViolationApprovalHistory we want to update
     *   }
     * })
     */
    upsert<T extends ViolationApprovalHistoryUpsertArgs>(args: SelectSubset<T, ViolationApprovalHistoryUpsertArgs<ExtArgs>>): Prisma__ViolationApprovalHistoryClient<$Result.GetResult<Prisma.$ViolationApprovalHistoryPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of ViolationApprovalHistories.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ViolationApprovalHistoryCountArgs} args - Arguments to filter ViolationApprovalHistories to count.
     * @example
     * // Count the number of ViolationApprovalHistories
     * const count = await prisma.violationApprovalHistory.count({
     *   where: {
     *     // ... the filter for the ViolationApprovalHistories we want to count
     *   }
     * })
    **/
    count<T extends ViolationApprovalHistoryCountArgs>(
      args?: Subset<T, ViolationApprovalHistoryCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ViolationApprovalHistoryCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a ViolationApprovalHistory.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ViolationApprovalHistoryAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ViolationApprovalHistoryAggregateArgs>(args: Subset<T, ViolationApprovalHistoryAggregateArgs>): Prisma.PrismaPromise<GetViolationApprovalHistoryAggregateType<T>>

    /**
     * Group by ViolationApprovalHistory.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ViolationApprovalHistoryGroupByArgs} args - Group by arguments.
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
      T extends ViolationApprovalHistoryGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ViolationApprovalHistoryGroupByArgs['orderBy'] }
        : { orderBy?: ViolationApprovalHistoryGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, ViolationApprovalHistoryGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetViolationApprovalHistoryGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the ViolationApprovalHistory model
   */
  readonly fields: ViolationApprovalHistoryFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for ViolationApprovalHistory.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ViolationApprovalHistoryClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    violation<T extends ViolationDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ViolationDefaultArgs<ExtArgs>>): Prisma__ViolationClient<$Result.GetResult<Prisma.$ViolationPayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
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
   * Fields of the ViolationApprovalHistory model
   */ 
  interface ViolationApprovalHistoryFieldRefs {
    readonly id: FieldRef<"ViolationApprovalHistory", 'String'>
    readonly violationId: FieldRef<"ViolationApprovalHistory", 'String'>
    readonly action: FieldRef<"ViolationApprovalHistory", 'ApprovalAction'>
    readonly fromStatus: FieldRef<"ViolationApprovalHistory", 'ViolationStatus'>
    readonly toStatus: FieldRef<"ViolationApprovalHistory", 'ViolationStatus'>
    readonly approverUserId: FieldRef<"ViolationApprovalHistory", 'String'>
    readonly approverName: FieldRef<"ViolationApprovalHistory", 'String'>
    readonly approverRole: FieldRef<"ViolationApprovalHistory", 'String'>
    readonly notes: FieldRef<"ViolationApprovalHistory", 'String'>
    readonly actionDate: FieldRef<"ViolationApprovalHistory", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * ViolationApprovalHistory findUnique
   */
  export type ViolationApprovalHistoryFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ViolationApprovalHistory
     */
    select?: ViolationApprovalHistorySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ViolationApprovalHistoryInclude<ExtArgs> | null
    /**
     * Filter, which ViolationApprovalHistory to fetch.
     */
    where: ViolationApprovalHistoryWhereUniqueInput
  }

  /**
   * ViolationApprovalHistory findUniqueOrThrow
   */
  export type ViolationApprovalHistoryFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ViolationApprovalHistory
     */
    select?: ViolationApprovalHistorySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ViolationApprovalHistoryInclude<ExtArgs> | null
    /**
     * Filter, which ViolationApprovalHistory to fetch.
     */
    where: ViolationApprovalHistoryWhereUniqueInput
  }

  /**
   * ViolationApprovalHistory findFirst
   */
  export type ViolationApprovalHistoryFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ViolationApprovalHistory
     */
    select?: ViolationApprovalHistorySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ViolationApprovalHistoryInclude<ExtArgs> | null
    /**
     * Filter, which ViolationApprovalHistory to fetch.
     */
    where?: ViolationApprovalHistoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ViolationApprovalHistories to fetch.
     */
    orderBy?: ViolationApprovalHistoryOrderByWithRelationInput | ViolationApprovalHistoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ViolationApprovalHistories.
     */
    cursor?: ViolationApprovalHistoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ViolationApprovalHistories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ViolationApprovalHistories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ViolationApprovalHistories.
     */
    distinct?: ViolationApprovalHistoryScalarFieldEnum | ViolationApprovalHistoryScalarFieldEnum[]
  }

  /**
   * ViolationApprovalHistory findFirstOrThrow
   */
  export type ViolationApprovalHistoryFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ViolationApprovalHistory
     */
    select?: ViolationApprovalHistorySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ViolationApprovalHistoryInclude<ExtArgs> | null
    /**
     * Filter, which ViolationApprovalHistory to fetch.
     */
    where?: ViolationApprovalHistoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ViolationApprovalHistories to fetch.
     */
    orderBy?: ViolationApprovalHistoryOrderByWithRelationInput | ViolationApprovalHistoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ViolationApprovalHistories.
     */
    cursor?: ViolationApprovalHistoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ViolationApprovalHistories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ViolationApprovalHistories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ViolationApprovalHistories.
     */
    distinct?: ViolationApprovalHistoryScalarFieldEnum | ViolationApprovalHistoryScalarFieldEnum[]
  }

  /**
   * ViolationApprovalHistory findMany
   */
  export type ViolationApprovalHistoryFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ViolationApprovalHistory
     */
    select?: ViolationApprovalHistorySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ViolationApprovalHistoryInclude<ExtArgs> | null
    /**
     * Filter, which ViolationApprovalHistories to fetch.
     */
    where?: ViolationApprovalHistoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ViolationApprovalHistories to fetch.
     */
    orderBy?: ViolationApprovalHistoryOrderByWithRelationInput | ViolationApprovalHistoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing ViolationApprovalHistories.
     */
    cursor?: ViolationApprovalHistoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ViolationApprovalHistories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ViolationApprovalHistories.
     */
    skip?: number
    distinct?: ViolationApprovalHistoryScalarFieldEnum | ViolationApprovalHistoryScalarFieldEnum[]
  }

  /**
   * ViolationApprovalHistory create
   */
  export type ViolationApprovalHistoryCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ViolationApprovalHistory
     */
    select?: ViolationApprovalHistorySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ViolationApprovalHistoryInclude<ExtArgs> | null
    /**
     * The data needed to create a ViolationApprovalHistory.
     */
    data: XOR<ViolationApprovalHistoryCreateInput, ViolationApprovalHistoryUncheckedCreateInput>
  }

  /**
   * ViolationApprovalHistory createMany
   */
  export type ViolationApprovalHistoryCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many ViolationApprovalHistories.
     */
    data: ViolationApprovalHistoryCreateManyInput | ViolationApprovalHistoryCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * ViolationApprovalHistory createManyAndReturn
   */
  export type ViolationApprovalHistoryCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ViolationApprovalHistory
     */
    select?: ViolationApprovalHistorySelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many ViolationApprovalHistories.
     */
    data: ViolationApprovalHistoryCreateManyInput | ViolationApprovalHistoryCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ViolationApprovalHistoryIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * ViolationApprovalHistory update
   */
  export type ViolationApprovalHistoryUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ViolationApprovalHistory
     */
    select?: ViolationApprovalHistorySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ViolationApprovalHistoryInclude<ExtArgs> | null
    /**
     * The data needed to update a ViolationApprovalHistory.
     */
    data: XOR<ViolationApprovalHistoryUpdateInput, ViolationApprovalHistoryUncheckedUpdateInput>
    /**
     * Choose, which ViolationApprovalHistory to update.
     */
    where: ViolationApprovalHistoryWhereUniqueInput
  }

  /**
   * ViolationApprovalHistory updateMany
   */
  export type ViolationApprovalHistoryUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update ViolationApprovalHistories.
     */
    data: XOR<ViolationApprovalHistoryUpdateManyMutationInput, ViolationApprovalHistoryUncheckedUpdateManyInput>
    /**
     * Filter which ViolationApprovalHistories to update
     */
    where?: ViolationApprovalHistoryWhereInput
  }

  /**
   * ViolationApprovalHistory upsert
   */
  export type ViolationApprovalHistoryUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ViolationApprovalHistory
     */
    select?: ViolationApprovalHistorySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ViolationApprovalHistoryInclude<ExtArgs> | null
    /**
     * The filter to search for the ViolationApprovalHistory to update in case it exists.
     */
    where: ViolationApprovalHistoryWhereUniqueInput
    /**
     * In case the ViolationApprovalHistory found by the `where` argument doesn't exist, create a new ViolationApprovalHistory with this data.
     */
    create: XOR<ViolationApprovalHistoryCreateInput, ViolationApprovalHistoryUncheckedCreateInput>
    /**
     * In case the ViolationApprovalHistory was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ViolationApprovalHistoryUpdateInput, ViolationApprovalHistoryUncheckedUpdateInput>
  }

  /**
   * ViolationApprovalHistory delete
   */
  export type ViolationApprovalHistoryDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ViolationApprovalHistory
     */
    select?: ViolationApprovalHistorySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ViolationApprovalHistoryInclude<ExtArgs> | null
    /**
     * Filter which ViolationApprovalHistory to delete.
     */
    where: ViolationApprovalHistoryWhereUniqueInput
  }

  /**
   * ViolationApprovalHistory deleteMany
   */
  export type ViolationApprovalHistoryDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ViolationApprovalHistories to delete
     */
    where?: ViolationApprovalHistoryWhereInput
  }

  /**
   * ViolationApprovalHistory without action
   */
  export type ViolationApprovalHistoryDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ViolationApprovalHistory
     */
    select?: ViolationApprovalHistorySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ViolationApprovalHistoryInclude<ExtArgs> | null
  }


  /**
   * Model ViolationStatistics
   */

  export type AggregateViolationStatistics = {
    _count: ViolationStatisticsCountAggregateOutputType | null
    _avg: ViolationStatisticsAvgAggregateOutputType | null
    _sum: ViolationStatisticsSumAggregateOutputType | null
    _min: ViolationStatisticsMinAggregateOutputType | null
    _max: ViolationStatisticsMaxAggregateOutputType | null
  }

  export type ViolationStatisticsAvgAggregateOutputType = {
    totalViolations: number | null
    pendingCount: number | null
    approvedCount: number | null
    rejectedCount: number | null
    appealedCount: number | null
    totalPoints: number | null
    ringanCount: number | null
    sedangCount: number | null
    beratCount: number | null
    semester: number | null
  }

  export type ViolationStatisticsSumAggregateOutputType = {
    totalViolations: number | null
    pendingCount: number | null
    approvedCount: number | null
    rejectedCount: number | null
    appealedCount: number | null
    totalPoints: number | null
    ringanCount: number | null
    sedangCount: number | null
    beratCount: number | null
    semester: number | null
  }

  export type ViolationStatisticsMinAggregateOutputType = {
    id: string | null
    studentId: string | null
    studentName: string | null
    classId: string | null
    className: string | null
    totalViolations: number | null
    pendingCount: number | null
    approvedCount: number | null
    rejectedCount: number | null
    appealedCount: number | null
    totalPoints: number | null
    ringanCount: number | null
    sedangCount: number | null
    beratCount: number | null
    academicYear: string | null
    semester: number | null
    isRepeatOffender: boolean | null
    lastViolationDate: Date | null
    updatedAt: Date | null
  }

  export type ViolationStatisticsMaxAggregateOutputType = {
    id: string | null
    studentId: string | null
    studentName: string | null
    classId: string | null
    className: string | null
    totalViolations: number | null
    pendingCount: number | null
    approvedCount: number | null
    rejectedCount: number | null
    appealedCount: number | null
    totalPoints: number | null
    ringanCount: number | null
    sedangCount: number | null
    beratCount: number | null
    academicYear: string | null
    semester: number | null
    isRepeatOffender: boolean | null
    lastViolationDate: Date | null
    updatedAt: Date | null
  }

  export type ViolationStatisticsCountAggregateOutputType = {
    id: number
    studentId: number
    studentName: number
    classId: number
    className: number
    totalViolations: number
    pendingCount: number
    approvedCount: number
    rejectedCount: number
    appealedCount: number
    totalPoints: number
    ringanCount: number
    sedangCount: number
    beratCount: number
    academicYear: number
    semester: number
    isRepeatOffender: number
    lastViolationDate: number
    updatedAt: number
    _all: number
  }


  export type ViolationStatisticsAvgAggregateInputType = {
    totalViolations?: true
    pendingCount?: true
    approvedCount?: true
    rejectedCount?: true
    appealedCount?: true
    totalPoints?: true
    ringanCount?: true
    sedangCount?: true
    beratCount?: true
    semester?: true
  }

  export type ViolationStatisticsSumAggregateInputType = {
    totalViolations?: true
    pendingCount?: true
    approvedCount?: true
    rejectedCount?: true
    appealedCount?: true
    totalPoints?: true
    ringanCount?: true
    sedangCount?: true
    beratCount?: true
    semester?: true
  }

  export type ViolationStatisticsMinAggregateInputType = {
    id?: true
    studentId?: true
    studentName?: true
    classId?: true
    className?: true
    totalViolations?: true
    pendingCount?: true
    approvedCount?: true
    rejectedCount?: true
    appealedCount?: true
    totalPoints?: true
    ringanCount?: true
    sedangCount?: true
    beratCount?: true
    academicYear?: true
    semester?: true
    isRepeatOffender?: true
    lastViolationDate?: true
    updatedAt?: true
  }

  export type ViolationStatisticsMaxAggregateInputType = {
    id?: true
    studentId?: true
    studentName?: true
    classId?: true
    className?: true
    totalViolations?: true
    pendingCount?: true
    approvedCount?: true
    rejectedCount?: true
    appealedCount?: true
    totalPoints?: true
    ringanCount?: true
    sedangCount?: true
    beratCount?: true
    academicYear?: true
    semester?: true
    isRepeatOffender?: true
    lastViolationDate?: true
    updatedAt?: true
  }

  export type ViolationStatisticsCountAggregateInputType = {
    id?: true
    studentId?: true
    studentName?: true
    classId?: true
    className?: true
    totalViolations?: true
    pendingCount?: true
    approvedCount?: true
    rejectedCount?: true
    appealedCount?: true
    totalPoints?: true
    ringanCount?: true
    sedangCount?: true
    beratCount?: true
    academicYear?: true
    semester?: true
    isRepeatOffender?: true
    lastViolationDate?: true
    updatedAt?: true
    _all?: true
  }

  export type ViolationStatisticsAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ViolationStatistics to aggregate.
     */
    where?: ViolationStatisticsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ViolationStatistics to fetch.
     */
    orderBy?: ViolationStatisticsOrderByWithRelationInput | ViolationStatisticsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ViolationStatisticsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ViolationStatistics from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ViolationStatistics.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned ViolationStatistics
    **/
    _count?: true | ViolationStatisticsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ViolationStatisticsAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ViolationStatisticsSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ViolationStatisticsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ViolationStatisticsMaxAggregateInputType
  }

  export type GetViolationStatisticsAggregateType<T extends ViolationStatisticsAggregateArgs> = {
        [P in keyof T & keyof AggregateViolationStatistics]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateViolationStatistics[P]>
      : GetScalarType<T[P], AggregateViolationStatistics[P]>
  }




  export type ViolationStatisticsGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ViolationStatisticsWhereInput
    orderBy?: ViolationStatisticsOrderByWithAggregationInput | ViolationStatisticsOrderByWithAggregationInput[]
    by: ViolationStatisticsScalarFieldEnum[] | ViolationStatisticsScalarFieldEnum
    having?: ViolationStatisticsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ViolationStatisticsCountAggregateInputType | true
    _avg?: ViolationStatisticsAvgAggregateInputType
    _sum?: ViolationStatisticsSumAggregateInputType
    _min?: ViolationStatisticsMinAggregateInputType
    _max?: ViolationStatisticsMaxAggregateInputType
  }

  export type ViolationStatisticsGroupByOutputType = {
    id: string
    studentId: string
    studentName: string
    classId: string
    className: string
    totalViolations: number
    pendingCount: number
    approvedCount: number
    rejectedCount: number
    appealedCount: number
    totalPoints: number
    ringanCount: number
    sedangCount: number
    beratCount: number
    academicYear: string
    semester: number
    isRepeatOffender: boolean
    lastViolationDate: Date | null
    updatedAt: Date
    _count: ViolationStatisticsCountAggregateOutputType | null
    _avg: ViolationStatisticsAvgAggregateOutputType | null
    _sum: ViolationStatisticsSumAggregateOutputType | null
    _min: ViolationStatisticsMinAggregateOutputType | null
    _max: ViolationStatisticsMaxAggregateOutputType | null
  }

  type GetViolationStatisticsGroupByPayload<T extends ViolationStatisticsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ViolationStatisticsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ViolationStatisticsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ViolationStatisticsGroupByOutputType[P]>
            : GetScalarType<T[P], ViolationStatisticsGroupByOutputType[P]>
        }
      >
    >


  export type ViolationStatisticsSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    studentId?: boolean
    studentName?: boolean
    classId?: boolean
    className?: boolean
    totalViolations?: boolean
    pendingCount?: boolean
    approvedCount?: boolean
    rejectedCount?: boolean
    appealedCount?: boolean
    totalPoints?: boolean
    ringanCount?: boolean
    sedangCount?: boolean
    beratCount?: boolean
    academicYear?: boolean
    semester?: boolean
    isRepeatOffender?: boolean
    lastViolationDate?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["violationStatistics"]>

  export type ViolationStatisticsSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    studentId?: boolean
    studentName?: boolean
    classId?: boolean
    className?: boolean
    totalViolations?: boolean
    pendingCount?: boolean
    approvedCount?: boolean
    rejectedCount?: boolean
    appealedCount?: boolean
    totalPoints?: boolean
    ringanCount?: boolean
    sedangCount?: boolean
    beratCount?: boolean
    academicYear?: boolean
    semester?: boolean
    isRepeatOffender?: boolean
    lastViolationDate?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["violationStatistics"]>

  export type ViolationStatisticsSelectScalar = {
    id?: boolean
    studentId?: boolean
    studentName?: boolean
    classId?: boolean
    className?: boolean
    totalViolations?: boolean
    pendingCount?: boolean
    approvedCount?: boolean
    rejectedCount?: boolean
    appealedCount?: boolean
    totalPoints?: boolean
    ringanCount?: boolean
    sedangCount?: boolean
    beratCount?: boolean
    academicYear?: boolean
    semester?: boolean
    isRepeatOffender?: boolean
    lastViolationDate?: boolean
    updatedAt?: boolean
  }


  export type $ViolationStatisticsPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "ViolationStatistics"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: string
      studentId: string
      studentName: string
      classId: string
      className: string
      totalViolations: number
      pendingCount: number
      approvedCount: number
      rejectedCount: number
      appealedCount: number
      totalPoints: number
      ringanCount: number
      sedangCount: number
      beratCount: number
      academicYear: string
      semester: number
      isRepeatOffender: boolean
      lastViolationDate: Date | null
      updatedAt: Date
    }, ExtArgs["result"]["violationStatistics"]>
    composites: {}
  }

  type ViolationStatisticsGetPayload<S extends boolean | null | undefined | ViolationStatisticsDefaultArgs> = $Result.GetResult<Prisma.$ViolationStatisticsPayload, S>

  type ViolationStatisticsCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<ViolationStatisticsFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: ViolationStatisticsCountAggregateInputType | true
    }

  export interface ViolationStatisticsDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['ViolationStatistics'], meta: { name: 'ViolationStatistics' } }
    /**
     * Find zero or one ViolationStatistics that matches the filter.
     * @param {ViolationStatisticsFindUniqueArgs} args - Arguments to find a ViolationStatistics
     * @example
     * // Get one ViolationStatistics
     * const violationStatistics = await prisma.violationStatistics.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ViolationStatisticsFindUniqueArgs>(args: SelectSubset<T, ViolationStatisticsFindUniqueArgs<ExtArgs>>): Prisma__ViolationStatisticsClient<$Result.GetResult<Prisma.$ViolationStatisticsPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one ViolationStatistics that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {ViolationStatisticsFindUniqueOrThrowArgs} args - Arguments to find a ViolationStatistics
     * @example
     * // Get one ViolationStatistics
     * const violationStatistics = await prisma.violationStatistics.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ViolationStatisticsFindUniqueOrThrowArgs>(args: SelectSubset<T, ViolationStatisticsFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ViolationStatisticsClient<$Result.GetResult<Prisma.$ViolationStatisticsPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first ViolationStatistics that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ViolationStatisticsFindFirstArgs} args - Arguments to find a ViolationStatistics
     * @example
     * // Get one ViolationStatistics
     * const violationStatistics = await prisma.violationStatistics.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ViolationStatisticsFindFirstArgs>(args?: SelectSubset<T, ViolationStatisticsFindFirstArgs<ExtArgs>>): Prisma__ViolationStatisticsClient<$Result.GetResult<Prisma.$ViolationStatisticsPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first ViolationStatistics that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ViolationStatisticsFindFirstOrThrowArgs} args - Arguments to find a ViolationStatistics
     * @example
     * // Get one ViolationStatistics
     * const violationStatistics = await prisma.violationStatistics.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ViolationStatisticsFindFirstOrThrowArgs>(args?: SelectSubset<T, ViolationStatisticsFindFirstOrThrowArgs<ExtArgs>>): Prisma__ViolationStatisticsClient<$Result.GetResult<Prisma.$ViolationStatisticsPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more ViolationStatistics that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ViolationStatisticsFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all ViolationStatistics
     * const violationStatistics = await prisma.violationStatistics.findMany()
     * 
     * // Get first 10 ViolationStatistics
     * const violationStatistics = await prisma.violationStatistics.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const violationStatisticsWithIdOnly = await prisma.violationStatistics.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ViolationStatisticsFindManyArgs>(args?: SelectSubset<T, ViolationStatisticsFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ViolationStatisticsPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a ViolationStatistics.
     * @param {ViolationStatisticsCreateArgs} args - Arguments to create a ViolationStatistics.
     * @example
     * // Create one ViolationStatistics
     * const ViolationStatistics = await prisma.violationStatistics.create({
     *   data: {
     *     // ... data to create a ViolationStatistics
     *   }
     * })
     * 
     */
    create<T extends ViolationStatisticsCreateArgs>(args: SelectSubset<T, ViolationStatisticsCreateArgs<ExtArgs>>): Prisma__ViolationStatisticsClient<$Result.GetResult<Prisma.$ViolationStatisticsPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many ViolationStatistics.
     * @param {ViolationStatisticsCreateManyArgs} args - Arguments to create many ViolationStatistics.
     * @example
     * // Create many ViolationStatistics
     * const violationStatistics = await prisma.violationStatistics.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ViolationStatisticsCreateManyArgs>(args?: SelectSubset<T, ViolationStatisticsCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many ViolationStatistics and returns the data saved in the database.
     * @param {ViolationStatisticsCreateManyAndReturnArgs} args - Arguments to create many ViolationStatistics.
     * @example
     * // Create many ViolationStatistics
     * const violationStatistics = await prisma.violationStatistics.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many ViolationStatistics and only return the `id`
     * const violationStatisticsWithIdOnly = await prisma.violationStatistics.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ViolationStatisticsCreateManyAndReturnArgs>(args?: SelectSubset<T, ViolationStatisticsCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ViolationStatisticsPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a ViolationStatistics.
     * @param {ViolationStatisticsDeleteArgs} args - Arguments to delete one ViolationStatistics.
     * @example
     * // Delete one ViolationStatistics
     * const ViolationStatistics = await prisma.violationStatistics.delete({
     *   where: {
     *     // ... filter to delete one ViolationStatistics
     *   }
     * })
     * 
     */
    delete<T extends ViolationStatisticsDeleteArgs>(args: SelectSubset<T, ViolationStatisticsDeleteArgs<ExtArgs>>): Prisma__ViolationStatisticsClient<$Result.GetResult<Prisma.$ViolationStatisticsPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one ViolationStatistics.
     * @param {ViolationStatisticsUpdateArgs} args - Arguments to update one ViolationStatistics.
     * @example
     * // Update one ViolationStatistics
     * const violationStatistics = await prisma.violationStatistics.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ViolationStatisticsUpdateArgs>(args: SelectSubset<T, ViolationStatisticsUpdateArgs<ExtArgs>>): Prisma__ViolationStatisticsClient<$Result.GetResult<Prisma.$ViolationStatisticsPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more ViolationStatistics.
     * @param {ViolationStatisticsDeleteManyArgs} args - Arguments to filter ViolationStatistics to delete.
     * @example
     * // Delete a few ViolationStatistics
     * const { count } = await prisma.violationStatistics.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ViolationStatisticsDeleteManyArgs>(args?: SelectSubset<T, ViolationStatisticsDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ViolationStatistics.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ViolationStatisticsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many ViolationStatistics
     * const violationStatistics = await prisma.violationStatistics.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ViolationStatisticsUpdateManyArgs>(args: SelectSubset<T, ViolationStatisticsUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one ViolationStatistics.
     * @param {ViolationStatisticsUpsertArgs} args - Arguments to update or create a ViolationStatistics.
     * @example
     * // Update or create a ViolationStatistics
     * const violationStatistics = await prisma.violationStatistics.upsert({
     *   create: {
     *     // ... data to create a ViolationStatistics
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the ViolationStatistics we want to update
     *   }
     * })
     */
    upsert<T extends ViolationStatisticsUpsertArgs>(args: SelectSubset<T, ViolationStatisticsUpsertArgs<ExtArgs>>): Prisma__ViolationStatisticsClient<$Result.GetResult<Prisma.$ViolationStatisticsPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of ViolationStatistics.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ViolationStatisticsCountArgs} args - Arguments to filter ViolationStatistics to count.
     * @example
     * // Count the number of ViolationStatistics
     * const count = await prisma.violationStatistics.count({
     *   where: {
     *     // ... the filter for the ViolationStatistics we want to count
     *   }
     * })
    **/
    count<T extends ViolationStatisticsCountArgs>(
      args?: Subset<T, ViolationStatisticsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ViolationStatisticsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a ViolationStatistics.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ViolationStatisticsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ViolationStatisticsAggregateArgs>(args: Subset<T, ViolationStatisticsAggregateArgs>): Prisma.PrismaPromise<GetViolationStatisticsAggregateType<T>>

    /**
     * Group by ViolationStatistics.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ViolationStatisticsGroupByArgs} args - Group by arguments.
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
      T extends ViolationStatisticsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ViolationStatisticsGroupByArgs['orderBy'] }
        : { orderBy?: ViolationStatisticsGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, ViolationStatisticsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetViolationStatisticsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the ViolationStatistics model
   */
  readonly fields: ViolationStatisticsFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for ViolationStatistics.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ViolationStatisticsClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
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
   * Fields of the ViolationStatistics model
   */ 
  interface ViolationStatisticsFieldRefs {
    readonly id: FieldRef<"ViolationStatistics", 'String'>
    readonly studentId: FieldRef<"ViolationStatistics", 'String'>
    readonly studentName: FieldRef<"ViolationStatistics", 'String'>
    readonly classId: FieldRef<"ViolationStatistics", 'String'>
    readonly className: FieldRef<"ViolationStatistics", 'String'>
    readonly totalViolations: FieldRef<"ViolationStatistics", 'Int'>
    readonly pendingCount: FieldRef<"ViolationStatistics", 'Int'>
    readonly approvedCount: FieldRef<"ViolationStatistics", 'Int'>
    readonly rejectedCount: FieldRef<"ViolationStatistics", 'Int'>
    readonly appealedCount: FieldRef<"ViolationStatistics", 'Int'>
    readonly totalPoints: FieldRef<"ViolationStatistics", 'Int'>
    readonly ringanCount: FieldRef<"ViolationStatistics", 'Int'>
    readonly sedangCount: FieldRef<"ViolationStatistics", 'Int'>
    readonly beratCount: FieldRef<"ViolationStatistics", 'Int'>
    readonly academicYear: FieldRef<"ViolationStatistics", 'String'>
    readonly semester: FieldRef<"ViolationStatistics", 'Int'>
    readonly isRepeatOffender: FieldRef<"ViolationStatistics", 'Boolean'>
    readonly lastViolationDate: FieldRef<"ViolationStatistics", 'DateTime'>
    readonly updatedAt: FieldRef<"ViolationStatistics", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * ViolationStatistics findUnique
   */
  export type ViolationStatisticsFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ViolationStatistics
     */
    select?: ViolationStatisticsSelect<ExtArgs> | null
    /**
     * Filter, which ViolationStatistics to fetch.
     */
    where: ViolationStatisticsWhereUniqueInput
  }

  /**
   * ViolationStatistics findUniqueOrThrow
   */
  export type ViolationStatisticsFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ViolationStatistics
     */
    select?: ViolationStatisticsSelect<ExtArgs> | null
    /**
     * Filter, which ViolationStatistics to fetch.
     */
    where: ViolationStatisticsWhereUniqueInput
  }

  /**
   * ViolationStatistics findFirst
   */
  export type ViolationStatisticsFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ViolationStatistics
     */
    select?: ViolationStatisticsSelect<ExtArgs> | null
    /**
     * Filter, which ViolationStatistics to fetch.
     */
    where?: ViolationStatisticsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ViolationStatistics to fetch.
     */
    orderBy?: ViolationStatisticsOrderByWithRelationInput | ViolationStatisticsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ViolationStatistics.
     */
    cursor?: ViolationStatisticsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ViolationStatistics from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ViolationStatistics.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ViolationStatistics.
     */
    distinct?: ViolationStatisticsScalarFieldEnum | ViolationStatisticsScalarFieldEnum[]
  }

  /**
   * ViolationStatistics findFirstOrThrow
   */
  export type ViolationStatisticsFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ViolationStatistics
     */
    select?: ViolationStatisticsSelect<ExtArgs> | null
    /**
     * Filter, which ViolationStatistics to fetch.
     */
    where?: ViolationStatisticsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ViolationStatistics to fetch.
     */
    orderBy?: ViolationStatisticsOrderByWithRelationInput | ViolationStatisticsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ViolationStatistics.
     */
    cursor?: ViolationStatisticsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ViolationStatistics from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ViolationStatistics.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ViolationStatistics.
     */
    distinct?: ViolationStatisticsScalarFieldEnum | ViolationStatisticsScalarFieldEnum[]
  }

  /**
   * ViolationStatistics findMany
   */
  export type ViolationStatisticsFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ViolationStatistics
     */
    select?: ViolationStatisticsSelect<ExtArgs> | null
    /**
     * Filter, which ViolationStatistics to fetch.
     */
    where?: ViolationStatisticsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ViolationStatistics to fetch.
     */
    orderBy?: ViolationStatisticsOrderByWithRelationInput | ViolationStatisticsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing ViolationStatistics.
     */
    cursor?: ViolationStatisticsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ViolationStatistics from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ViolationStatistics.
     */
    skip?: number
    distinct?: ViolationStatisticsScalarFieldEnum | ViolationStatisticsScalarFieldEnum[]
  }

  /**
   * ViolationStatistics create
   */
  export type ViolationStatisticsCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ViolationStatistics
     */
    select?: ViolationStatisticsSelect<ExtArgs> | null
    /**
     * The data needed to create a ViolationStatistics.
     */
    data: XOR<ViolationStatisticsCreateInput, ViolationStatisticsUncheckedCreateInput>
  }

  /**
   * ViolationStatistics createMany
   */
  export type ViolationStatisticsCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many ViolationStatistics.
     */
    data: ViolationStatisticsCreateManyInput | ViolationStatisticsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * ViolationStatistics createManyAndReturn
   */
  export type ViolationStatisticsCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ViolationStatistics
     */
    select?: ViolationStatisticsSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many ViolationStatistics.
     */
    data: ViolationStatisticsCreateManyInput | ViolationStatisticsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * ViolationStatistics update
   */
  export type ViolationStatisticsUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ViolationStatistics
     */
    select?: ViolationStatisticsSelect<ExtArgs> | null
    /**
     * The data needed to update a ViolationStatistics.
     */
    data: XOR<ViolationStatisticsUpdateInput, ViolationStatisticsUncheckedUpdateInput>
    /**
     * Choose, which ViolationStatistics to update.
     */
    where: ViolationStatisticsWhereUniqueInput
  }

  /**
   * ViolationStatistics updateMany
   */
  export type ViolationStatisticsUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update ViolationStatistics.
     */
    data: XOR<ViolationStatisticsUpdateManyMutationInput, ViolationStatisticsUncheckedUpdateManyInput>
    /**
     * Filter which ViolationStatistics to update
     */
    where?: ViolationStatisticsWhereInput
  }

  /**
   * ViolationStatistics upsert
   */
  export type ViolationStatisticsUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ViolationStatistics
     */
    select?: ViolationStatisticsSelect<ExtArgs> | null
    /**
     * The filter to search for the ViolationStatistics to update in case it exists.
     */
    where: ViolationStatisticsWhereUniqueInput
    /**
     * In case the ViolationStatistics found by the `where` argument doesn't exist, create a new ViolationStatistics with this data.
     */
    create: XOR<ViolationStatisticsCreateInput, ViolationStatisticsUncheckedCreateInput>
    /**
     * In case the ViolationStatistics was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ViolationStatisticsUpdateInput, ViolationStatisticsUncheckedUpdateInput>
  }

  /**
   * ViolationStatistics delete
   */
  export type ViolationStatisticsDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ViolationStatistics
     */
    select?: ViolationStatisticsSelect<ExtArgs> | null
    /**
     * Filter which ViolationStatistics to delete.
     */
    where: ViolationStatisticsWhereUniqueInput
  }

  /**
   * ViolationStatistics deleteMany
   */
  export type ViolationStatisticsDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ViolationStatistics to delete
     */
    where?: ViolationStatisticsWhereInput
  }

  /**
   * ViolationStatistics without action
   */
  export type ViolationStatisticsDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ViolationStatistics
     */
    select?: ViolationStatisticsSelect<ExtArgs> | null
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


  export const ViolationScalarFieldEnum: {
    id: 'id',
    studentId: 'studentId',
    studentNisn: 'studentNisn',
    studentName: 'studentName',
    studentClass: 'studentClass',
    reportedBy: 'reportedBy',
    reportedByName: 'reportedByName',
    reporterRole: 'reporterRole',
    categoryId: 'categoryId',
    categoryCode: 'categoryCode',
    categoryName: 'categoryName',
    categorySeverity: 'categorySeverity',
    description: 'description',
    location: 'location',
    violationDate: 'violationDate',
    violationTime: 'violationTime',
    points: 'points',
    evidenceUrls: 'evidenceUrls',
    witnessName: 'witnessName',
    witnessStatement: 'witnessStatement',
    status: 'status',
    approvedByWaliAt: 'approvedByWaliAt',
    approvedByWaliBy: 'approvedByWaliBy',
    approvedByWaliName: 'approvedByWaliName',
    waliKelasNotes: 'waliKelasNotes',
    approvedByBKAt: 'approvedByBKAt',
    approvedByBKBy: 'approvedByBKBy',
    approvedByBKName: 'approvedByBKName',
    bkNotes: 'bkNotes',
    rejectedAt: 'rejectedAt',
    rejectedBy: 'rejectedBy',
    rejectedByName: 'rejectedByName',
    rejectionReason: 'rejectionReason',
    rejectionLevel: 'rejectionLevel',
    appealReason: 'appealReason',
    appealedAt: 'appealedAt',
    appealedBy: 'appealedBy',
    appealReviewedAt: 'appealReviewedAt',
    appealReviewedBy: 'appealReviewedBy',
    appealStatus: 'appealStatus',
    appealNotes: 'appealNotes',
    sanction: 'sanction',
    sanctionStartDate: 'sanctionStartDate',
    sanctionEndDate: 'sanctionEndDate',
    sanctionCompleted: 'sanctionCompleted',
    academicYear: 'academicYear',
    semester: 'semester',
    notificationSent: 'notificationSent',
    notificationSentAt: 'notificationSentAt',
    isActive: 'isActive',
    createdBy: 'createdBy',
    createdAt: 'createdAt',
    updatedBy: 'updatedBy',
    updatedAt: 'updatedAt',
    deletedAt: 'deletedAt',
    deletedBy: 'deletedBy'
  };

  export type ViolationScalarFieldEnum = (typeof ViolationScalarFieldEnum)[keyof typeof ViolationScalarFieldEnum]


  export const ViolationApprovalHistoryScalarFieldEnum: {
    id: 'id',
    violationId: 'violationId',
    action: 'action',
    fromStatus: 'fromStatus',
    toStatus: 'toStatus',
    approverUserId: 'approverUserId',
    approverName: 'approverName',
    approverRole: 'approverRole',
    notes: 'notes',
    actionDate: 'actionDate'
  };

  export type ViolationApprovalHistoryScalarFieldEnum = (typeof ViolationApprovalHistoryScalarFieldEnum)[keyof typeof ViolationApprovalHistoryScalarFieldEnum]


  export const ViolationStatisticsScalarFieldEnum: {
    id: 'id',
    studentId: 'studentId',
    studentName: 'studentName',
    classId: 'classId',
    className: 'className',
    totalViolations: 'totalViolations',
    pendingCount: 'pendingCount',
    approvedCount: 'approvedCount',
    rejectedCount: 'rejectedCount',
    appealedCount: 'appealedCount',
    totalPoints: 'totalPoints',
    ringanCount: 'ringanCount',
    sedangCount: 'sedangCount',
    beratCount: 'beratCount',
    academicYear: 'academicYear',
    semester: 'semester',
    isRepeatOffender: 'isRepeatOffender',
    lastViolationDate: 'lastViolationDate',
    updatedAt: 'updatedAt'
  };

  export type ViolationStatisticsScalarFieldEnum = (typeof ViolationStatisticsScalarFieldEnum)[keyof typeof ViolationStatisticsScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const NullableJsonNullValueInput: {
    DbNull: typeof DbNull,
    JsonNull: typeof JsonNull
  };

  export type NullableJsonNullValueInput = (typeof NullableJsonNullValueInput)[keyof typeof NullableJsonNullValueInput]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  export const JsonNullValueFilter: {
    DbNull: typeof DbNull,
    JsonNull: typeof JsonNull,
    AnyNull: typeof AnyNull
  };

  export type JsonNullValueFilter = (typeof JsonNullValueFilter)[keyof typeof JsonNullValueFilter]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  /**
   * Field references 
   */


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'ViolationSeverity'
   */
  export type EnumViolationSeverityFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'ViolationSeverity'>
    


  /**
   * Reference to a field of type 'ViolationSeverity[]'
   */
  export type ListEnumViolationSeverityFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'ViolationSeverity[]'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'Json'
   */
  export type JsonFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Json'>
    


  /**
   * Reference to a field of type 'ViolationStatus'
   */
  export type EnumViolationStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'ViolationStatus'>
    


  /**
   * Reference to a field of type 'ViolationStatus[]'
   */
  export type ListEnumViolationStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'ViolationStatus[]'>
    


  /**
   * Reference to a field of type 'AppealStatus'
   */
  export type EnumAppealStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'AppealStatus'>
    


  /**
   * Reference to a field of type 'AppealStatus[]'
   */
  export type ListEnumAppealStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'AppealStatus[]'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


  /**
   * Reference to a field of type 'ApprovalAction'
   */
  export type EnumApprovalActionFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'ApprovalAction'>
    


  /**
   * Reference to a field of type 'ApprovalAction[]'
   */
  export type ListEnumApprovalActionFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'ApprovalAction[]'>
    


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


  export type ViolationWhereInput = {
    AND?: ViolationWhereInput | ViolationWhereInput[]
    OR?: ViolationWhereInput[]
    NOT?: ViolationWhereInput | ViolationWhereInput[]
    id?: StringFilter<"Violation"> | string
    studentId?: StringFilter<"Violation"> | string
    studentNisn?: StringFilter<"Violation"> | string
    studentName?: StringFilter<"Violation"> | string
    studentClass?: StringFilter<"Violation"> | string
    reportedBy?: StringFilter<"Violation"> | string
    reportedByName?: StringFilter<"Violation"> | string
    reporterRole?: StringFilter<"Violation"> | string
    categoryId?: StringFilter<"Violation"> | string
    categoryCode?: StringFilter<"Violation"> | string
    categoryName?: StringFilter<"Violation"> | string
    categorySeverity?: EnumViolationSeverityFilter<"Violation"> | $Enums.ViolationSeverity
    description?: StringFilter<"Violation"> | string
    location?: StringNullableFilter<"Violation"> | string | null
    violationDate?: DateTimeFilter<"Violation"> | Date | string
    violationTime?: StringNullableFilter<"Violation"> | string | null
    points?: IntFilter<"Violation"> | number
    evidenceUrls?: JsonNullableFilter<"Violation">
    witnessName?: StringNullableFilter<"Violation"> | string | null
    witnessStatement?: StringNullableFilter<"Violation"> | string | null
    status?: EnumViolationStatusFilter<"Violation"> | $Enums.ViolationStatus
    approvedByWaliAt?: DateTimeNullableFilter<"Violation"> | Date | string | null
    approvedByWaliBy?: StringNullableFilter<"Violation"> | string | null
    approvedByWaliName?: StringNullableFilter<"Violation"> | string | null
    waliKelasNotes?: StringNullableFilter<"Violation"> | string | null
    approvedByBKAt?: DateTimeNullableFilter<"Violation"> | Date | string | null
    approvedByBKBy?: StringNullableFilter<"Violation"> | string | null
    approvedByBKName?: StringNullableFilter<"Violation"> | string | null
    bkNotes?: StringNullableFilter<"Violation"> | string | null
    rejectedAt?: DateTimeNullableFilter<"Violation"> | Date | string | null
    rejectedBy?: StringNullableFilter<"Violation"> | string | null
    rejectedByName?: StringNullableFilter<"Violation"> | string | null
    rejectionReason?: StringNullableFilter<"Violation"> | string | null
    rejectionLevel?: StringNullableFilter<"Violation"> | string | null
    appealReason?: StringNullableFilter<"Violation"> | string | null
    appealedAt?: DateTimeNullableFilter<"Violation"> | Date | string | null
    appealedBy?: StringNullableFilter<"Violation"> | string | null
    appealReviewedAt?: DateTimeNullableFilter<"Violation"> | Date | string | null
    appealReviewedBy?: StringNullableFilter<"Violation"> | string | null
    appealStatus?: EnumAppealStatusNullableFilter<"Violation"> | $Enums.AppealStatus | null
    appealNotes?: StringNullableFilter<"Violation"> | string | null
    sanction?: StringNullableFilter<"Violation"> | string | null
    sanctionStartDate?: DateTimeNullableFilter<"Violation"> | Date | string | null
    sanctionEndDate?: DateTimeNullableFilter<"Violation"> | Date | string | null
    sanctionCompleted?: BoolFilter<"Violation"> | boolean
    academicYear?: StringFilter<"Violation"> | string
    semester?: IntFilter<"Violation"> | number
    notificationSent?: BoolFilter<"Violation"> | boolean
    notificationSentAt?: DateTimeNullableFilter<"Violation"> | Date | string | null
    isActive?: BoolFilter<"Violation"> | boolean
    createdBy?: StringFilter<"Violation"> | string
    createdAt?: DateTimeFilter<"Violation"> | Date | string
    updatedBy?: StringNullableFilter<"Violation"> | string | null
    updatedAt?: DateTimeFilter<"Violation"> | Date | string
    deletedAt?: DateTimeNullableFilter<"Violation"> | Date | string | null
    deletedBy?: StringNullableFilter<"Violation"> | string | null
    approvalHistory?: ViolationApprovalHistoryListRelationFilter
  }

  export type ViolationOrderByWithRelationInput = {
    id?: SortOrder
    studentId?: SortOrder
    studentNisn?: SortOrder
    studentName?: SortOrder
    studentClass?: SortOrder
    reportedBy?: SortOrder
    reportedByName?: SortOrder
    reporterRole?: SortOrder
    categoryId?: SortOrder
    categoryCode?: SortOrder
    categoryName?: SortOrder
    categorySeverity?: SortOrder
    description?: SortOrder
    location?: SortOrderInput | SortOrder
    violationDate?: SortOrder
    violationTime?: SortOrderInput | SortOrder
    points?: SortOrder
    evidenceUrls?: SortOrderInput | SortOrder
    witnessName?: SortOrderInput | SortOrder
    witnessStatement?: SortOrderInput | SortOrder
    status?: SortOrder
    approvedByWaliAt?: SortOrderInput | SortOrder
    approvedByWaliBy?: SortOrderInput | SortOrder
    approvedByWaliName?: SortOrderInput | SortOrder
    waliKelasNotes?: SortOrderInput | SortOrder
    approvedByBKAt?: SortOrderInput | SortOrder
    approvedByBKBy?: SortOrderInput | SortOrder
    approvedByBKName?: SortOrderInput | SortOrder
    bkNotes?: SortOrderInput | SortOrder
    rejectedAt?: SortOrderInput | SortOrder
    rejectedBy?: SortOrderInput | SortOrder
    rejectedByName?: SortOrderInput | SortOrder
    rejectionReason?: SortOrderInput | SortOrder
    rejectionLevel?: SortOrderInput | SortOrder
    appealReason?: SortOrderInput | SortOrder
    appealedAt?: SortOrderInput | SortOrder
    appealedBy?: SortOrderInput | SortOrder
    appealReviewedAt?: SortOrderInput | SortOrder
    appealReviewedBy?: SortOrderInput | SortOrder
    appealStatus?: SortOrderInput | SortOrder
    appealNotes?: SortOrderInput | SortOrder
    sanction?: SortOrderInput | SortOrder
    sanctionStartDate?: SortOrderInput | SortOrder
    sanctionEndDate?: SortOrderInput | SortOrder
    sanctionCompleted?: SortOrder
    academicYear?: SortOrder
    semester?: SortOrder
    notificationSent?: SortOrder
    notificationSentAt?: SortOrderInput | SortOrder
    isActive?: SortOrder
    createdBy?: SortOrder
    createdAt?: SortOrder
    updatedBy?: SortOrderInput | SortOrder
    updatedAt?: SortOrder
    deletedAt?: SortOrderInput | SortOrder
    deletedBy?: SortOrderInput | SortOrder
    approvalHistory?: ViolationApprovalHistoryOrderByRelationAggregateInput
  }

  export type ViolationWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: ViolationWhereInput | ViolationWhereInput[]
    OR?: ViolationWhereInput[]
    NOT?: ViolationWhereInput | ViolationWhereInput[]
    studentId?: StringFilter<"Violation"> | string
    studentNisn?: StringFilter<"Violation"> | string
    studentName?: StringFilter<"Violation"> | string
    studentClass?: StringFilter<"Violation"> | string
    reportedBy?: StringFilter<"Violation"> | string
    reportedByName?: StringFilter<"Violation"> | string
    reporterRole?: StringFilter<"Violation"> | string
    categoryId?: StringFilter<"Violation"> | string
    categoryCode?: StringFilter<"Violation"> | string
    categoryName?: StringFilter<"Violation"> | string
    categorySeverity?: EnumViolationSeverityFilter<"Violation"> | $Enums.ViolationSeverity
    description?: StringFilter<"Violation"> | string
    location?: StringNullableFilter<"Violation"> | string | null
    violationDate?: DateTimeFilter<"Violation"> | Date | string
    violationTime?: StringNullableFilter<"Violation"> | string | null
    points?: IntFilter<"Violation"> | number
    evidenceUrls?: JsonNullableFilter<"Violation">
    witnessName?: StringNullableFilter<"Violation"> | string | null
    witnessStatement?: StringNullableFilter<"Violation"> | string | null
    status?: EnumViolationStatusFilter<"Violation"> | $Enums.ViolationStatus
    approvedByWaliAt?: DateTimeNullableFilter<"Violation"> | Date | string | null
    approvedByWaliBy?: StringNullableFilter<"Violation"> | string | null
    approvedByWaliName?: StringNullableFilter<"Violation"> | string | null
    waliKelasNotes?: StringNullableFilter<"Violation"> | string | null
    approvedByBKAt?: DateTimeNullableFilter<"Violation"> | Date | string | null
    approvedByBKBy?: StringNullableFilter<"Violation"> | string | null
    approvedByBKName?: StringNullableFilter<"Violation"> | string | null
    bkNotes?: StringNullableFilter<"Violation"> | string | null
    rejectedAt?: DateTimeNullableFilter<"Violation"> | Date | string | null
    rejectedBy?: StringNullableFilter<"Violation"> | string | null
    rejectedByName?: StringNullableFilter<"Violation"> | string | null
    rejectionReason?: StringNullableFilter<"Violation"> | string | null
    rejectionLevel?: StringNullableFilter<"Violation"> | string | null
    appealReason?: StringNullableFilter<"Violation"> | string | null
    appealedAt?: DateTimeNullableFilter<"Violation"> | Date | string | null
    appealedBy?: StringNullableFilter<"Violation"> | string | null
    appealReviewedAt?: DateTimeNullableFilter<"Violation"> | Date | string | null
    appealReviewedBy?: StringNullableFilter<"Violation"> | string | null
    appealStatus?: EnumAppealStatusNullableFilter<"Violation"> | $Enums.AppealStatus | null
    appealNotes?: StringNullableFilter<"Violation"> | string | null
    sanction?: StringNullableFilter<"Violation"> | string | null
    sanctionStartDate?: DateTimeNullableFilter<"Violation"> | Date | string | null
    sanctionEndDate?: DateTimeNullableFilter<"Violation"> | Date | string | null
    sanctionCompleted?: BoolFilter<"Violation"> | boolean
    academicYear?: StringFilter<"Violation"> | string
    semester?: IntFilter<"Violation"> | number
    notificationSent?: BoolFilter<"Violation"> | boolean
    notificationSentAt?: DateTimeNullableFilter<"Violation"> | Date | string | null
    isActive?: BoolFilter<"Violation"> | boolean
    createdBy?: StringFilter<"Violation"> | string
    createdAt?: DateTimeFilter<"Violation"> | Date | string
    updatedBy?: StringNullableFilter<"Violation"> | string | null
    updatedAt?: DateTimeFilter<"Violation"> | Date | string
    deletedAt?: DateTimeNullableFilter<"Violation"> | Date | string | null
    deletedBy?: StringNullableFilter<"Violation"> | string | null
    approvalHistory?: ViolationApprovalHistoryListRelationFilter
  }, "id">

  export type ViolationOrderByWithAggregationInput = {
    id?: SortOrder
    studentId?: SortOrder
    studentNisn?: SortOrder
    studentName?: SortOrder
    studentClass?: SortOrder
    reportedBy?: SortOrder
    reportedByName?: SortOrder
    reporterRole?: SortOrder
    categoryId?: SortOrder
    categoryCode?: SortOrder
    categoryName?: SortOrder
    categorySeverity?: SortOrder
    description?: SortOrder
    location?: SortOrderInput | SortOrder
    violationDate?: SortOrder
    violationTime?: SortOrderInput | SortOrder
    points?: SortOrder
    evidenceUrls?: SortOrderInput | SortOrder
    witnessName?: SortOrderInput | SortOrder
    witnessStatement?: SortOrderInput | SortOrder
    status?: SortOrder
    approvedByWaliAt?: SortOrderInput | SortOrder
    approvedByWaliBy?: SortOrderInput | SortOrder
    approvedByWaliName?: SortOrderInput | SortOrder
    waliKelasNotes?: SortOrderInput | SortOrder
    approvedByBKAt?: SortOrderInput | SortOrder
    approvedByBKBy?: SortOrderInput | SortOrder
    approvedByBKName?: SortOrderInput | SortOrder
    bkNotes?: SortOrderInput | SortOrder
    rejectedAt?: SortOrderInput | SortOrder
    rejectedBy?: SortOrderInput | SortOrder
    rejectedByName?: SortOrderInput | SortOrder
    rejectionReason?: SortOrderInput | SortOrder
    rejectionLevel?: SortOrderInput | SortOrder
    appealReason?: SortOrderInput | SortOrder
    appealedAt?: SortOrderInput | SortOrder
    appealedBy?: SortOrderInput | SortOrder
    appealReviewedAt?: SortOrderInput | SortOrder
    appealReviewedBy?: SortOrderInput | SortOrder
    appealStatus?: SortOrderInput | SortOrder
    appealNotes?: SortOrderInput | SortOrder
    sanction?: SortOrderInput | SortOrder
    sanctionStartDate?: SortOrderInput | SortOrder
    sanctionEndDate?: SortOrderInput | SortOrder
    sanctionCompleted?: SortOrder
    academicYear?: SortOrder
    semester?: SortOrder
    notificationSent?: SortOrder
    notificationSentAt?: SortOrderInput | SortOrder
    isActive?: SortOrder
    createdBy?: SortOrder
    createdAt?: SortOrder
    updatedBy?: SortOrderInput | SortOrder
    updatedAt?: SortOrder
    deletedAt?: SortOrderInput | SortOrder
    deletedBy?: SortOrderInput | SortOrder
    _count?: ViolationCountOrderByAggregateInput
    _avg?: ViolationAvgOrderByAggregateInput
    _max?: ViolationMaxOrderByAggregateInput
    _min?: ViolationMinOrderByAggregateInput
    _sum?: ViolationSumOrderByAggregateInput
  }

  export type ViolationScalarWhereWithAggregatesInput = {
    AND?: ViolationScalarWhereWithAggregatesInput | ViolationScalarWhereWithAggregatesInput[]
    OR?: ViolationScalarWhereWithAggregatesInput[]
    NOT?: ViolationScalarWhereWithAggregatesInput | ViolationScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Violation"> | string
    studentId?: StringWithAggregatesFilter<"Violation"> | string
    studentNisn?: StringWithAggregatesFilter<"Violation"> | string
    studentName?: StringWithAggregatesFilter<"Violation"> | string
    studentClass?: StringWithAggregatesFilter<"Violation"> | string
    reportedBy?: StringWithAggregatesFilter<"Violation"> | string
    reportedByName?: StringWithAggregatesFilter<"Violation"> | string
    reporterRole?: StringWithAggregatesFilter<"Violation"> | string
    categoryId?: StringWithAggregatesFilter<"Violation"> | string
    categoryCode?: StringWithAggregatesFilter<"Violation"> | string
    categoryName?: StringWithAggregatesFilter<"Violation"> | string
    categorySeverity?: EnumViolationSeverityWithAggregatesFilter<"Violation"> | $Enums.ViolationSeverity
    description?: StringWithAggregatesFilter<"Violation"> | string
    location?: StringNullableWithAggregatesFilter<"Violation"> | string | null
    violationDate?: DateTimeWithAggregatesFilter<"Violation"> | Date | string
    violationTime?: StringNullableWithAggregatesFilter<"Violation"> | string | null
    points?: IntWithAggregatesFilter<"Violation"> | number
    evidenceUrls?: JsonNullableWithAggregatesFilter<"Violation">
    witnessName?: StringNullableWithAggregatesFilter<"Violation"> | string | null
    witnessStatement?: StringNullableWithAggregatesFilter<"Violation"> | string | null
    status?: EnumViolationStatusWithAggregatesFilter<"Violation"> | $Enums.ViolationStatus
    approvedByWaliAt?: DateTimeNullableWithAggregatesFilter<"Violation"> | Date | string | null
    approvedByWaliBy?: StringNullableWithAggregatesFilter<"Violation"> | string | null
    approvedByWaliName?: StringNullableWithAggregatesFilter<"Violation"> | string | null
    waliKelasNotes?: StringNullableWithAggregatesFilter<"Violation"> | string | null
    approvedByBKAt?: DateTimeNullableWithAggregatesFilter<"Violation"> | Date | string | null
    approvedByBKBy?: StringNullableWithAggregatesFilter<"Violation"> | string | null
    approvedByBKName?: StringNullableWithAggregatesFilter<"Violation"> | string | null
    bkNotes?: StringNullableWithAggregatesFilter<"Violation"> | string | null
    rejectedAt?: DateTimeNullableWithAggregatesFilter<"Violation"> | Date | string | null
    rejectedBy?: StringNullableWithAggregatesFilter<"Violation"> | string | null
    rejectedByName?: StringNullableWithAggregatesFilter<"Violation"> | string | null
    rejectionReason?: StringNullableWithAggregatesFilter<"Violation"> | string | null
    rejectionLevel?: StringNullableWithAggregatesFilter<"Violation"> | string | null
    appealReason?: StringNullableWithAggregatesFilter<"Violation"> | string | null
    appealedAt?: DateTimeNullableWithAggregatesFilter<"Violation"> | Date | string | null
    appealedBy?: StringNullableWithAggregatesFilter<"Violation"> | string | null
    appealReviewedAt?: DateTimeNullableWithAggregatesFilter<"Violation"> | Date | string | null
    appealReviewedBy?: StringNullableWithAggregatesFilter<"Violation"> | string | null
    appealStatus?: EnumAppealStatusNullableWithAggregatesFilter<"Violation"> | $Enums.AppealStatus | null
    appealNotes?: StringNullableWithAggregatesFilter<"Violation"> | string | null
    sanction?: StringNullableWithAggregatesFilter<"Violation"> | string | null
    sanctionStartDate?: DateTimeNullableWithAggregatesFilter<"Violation"> | Date | string | null
    sanctionEndDate?: DateTimeNullableWithAggregatesFilter<"Violation"> | Date | string | null
    sanctionCompleted?: BoolWithAggregatesFilter<"Violation"> | boolean
    academicYear?: StringWithAggregatesFilter<"Violation"> | string
    semester?: IntWithAggregatesFilter<"Violation"> | number
    notificationSent?: BoolWithAggregatesFilter<"Violation"> | boolean
    notificationSentAt?: DateTimeNullableWithAggregatesFilter<"Violation"> | Date | string | null
    isActive?: BoolWithAggregatesFilter<"Violation"> | boolean
    createdBy?: StringWithAggregatesFilter<"Violation"> | string
    createdAt?: DateTimeWithAggregatesFilter<"Violation"> | Date | string
    updatedBy?: StringNullableWithAggregatesFilter<"Violation"> | string | null
    updatedAt?: DateTimeWithAggregatesFilter<"Violation"> | Date | string
    deletedAt?: DateTimeNullableWithAggregatesFilter<"Violation"> | Date | string | null
    deletedBy?: StringNullableWithAggregatesFilter<"Violation"> | string | null
  }

  export type ViolationApprovalHistoryWhereInput = {
    AND?: ViolationApprovalHistoryWhereInput | ViolationApprovalHistoryWhereInput[]
    OR?: ViolationApprovalHistoryWhereInput[]
    NOT?: ViolationApprovalHistoryWhereInput | ViolationApprovalHistoryWhereInput[]
    id?: StringFilter<"ViolationApprovalHistory"> | string
    violationId?: StringFilter<"ViolationApprovalHistory"> | string
    action?: EnumApprovalActionFilter<"ViolationApprovalHistory"> | $Enums.ApprovalAction
    fromStatus?: EnumViolationStatusFilter<"ViolationApprovalHistory"> | $Enums.ViolationStatus
    toStatus?: EnumViolationStatusFilter<"ViolationApprovalHistory"> | $Enums.ViolationStatus
    approverUserId?: StringFilter<"ViolationApprovalHistory"> | string
    approverName?: StringFilter<"ViolationApprovalHistory"> | string
    approverRole?: StringFilter<"ViolationApprovalHistory"> | string
    notes?: StringNullableFilter<"ViolationApprovalHistory"> | string | null
    actionDate?: DateTimeFilter<"ViolationApprovalHistory"> | Date | string
    violation?: XOR<ViolationRelationFilter, ViolationWhereInput>
  }

  export type ViolationApprovalHistoryOrderByWithRelationInput = {
    id?: SortOrder
    violationId?: SortOrder
    action?: SortOrder
    fromStatus?: SortOrder
    toStatus?: SortOrder
    approverUserId?: SortOrder
    approverName?: SortOrder
    approverRole?: SortOrder
    notes?: SortOrderInput | SortOrder
    actionDate?: SortOrder
    violation?: ViolationOrderByWithRelationInput
  }

  export type ViolationApprovalHistoryWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: ViolationApprovalHistoryWhereInput | ViolationApprovalHistoryWhereInput[]
    OR?: ViolationApprovalHistoryWhereInput[]
    NOT?: ViolationApprovalHistoryWhereInput | ViolationApprovalHistoryWhereInput[]
    violationId?: StringFilter<"ViolationApprovalHistory"> | string
    action?: EnumApprovalActionFilter<"ViolationApprovalHistory"> | $Enums.ApprovalAction
    fromStatus?: EnumViolationStatusFilter<"ViolationApprovalHistory"> | $Enums.ViolationStatus
    toStatus?: EnumViolationStatusFilter<"ViolationApprovalHistory"> | $Enums.ViolationStatus
    approverUserId?: StringFilter<"ViolationApprovalHistory"> | string
    approverName?: StringFilter<"ViolationApprovalHistory"> | string
    approverRole?: StringFilter<"ViolationApprovalHistory"> | string
    notes?: StringNullableFilter<"ViolationApprovalHistory"> | string | null
    actionDate?: DateTimeFilter<"ViolationApprovalHistory"> | Date | string
    violation?: XOR<ViolationRelationFilter, ViolationWhereInput>
  }, "id">

  export type ViolationApprovalHistoryOrderByWithAggregationInput = {
    id?: SortOrder
    violationId?: SortOrder
    action?: SortOrder
    fromStatus?: SortOrder
    toStatus?: SortOrder
    approverUserId?: SortOrder
    approverName?: SortOrder
    approverRole?: SortOrder
    notes?: SortOrderInput | SortOrder
    actionDate?: SortOrder
    _count?: ViolationApprovalHistoryCountOrderByAggregateInput
    _max?: ViolationApprovalHistoryMaxOrderByAggregateInput
    _min?: ViolationApprovalHistoryMinOrderByAggregateInput
  }

  export type ViolationApprovalHistoryScalarWhereWithAggregatesInput = {
    AND?: ViolationApprovalHistoryScalarWhereWithAggregatesInput | ViolationApprovalHistoryScalarWhereWithAggregatesInput[]
    OR?: ViolationApprovalHistoryScalarWhereWithAggregatesInput[]
    NOT?: ViolationApprovalHistoryScalarWhereWithAggregatesInput | ViolationApprovalHistoryScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"ViolationApprovalHistory"> | string
    violationId?: StringWithAggregatesFilter<"ViolationApprovalHistory"> | string
    action?: EnumApprovalActionWithAggregatesFilter<"ViolationApprovalHistory"> | $Enums.ApprovalAction
    fromStatus?: EnumViolationStatusWithAggregatesFilter<"ViolationApprovalHistory"> | $Enums.ViolationStatus
    toStatus?: EnumViolationStatusWithAggregatesFilter<"ViolationApprovalHistory"> | $Enums.ViolationStatus
    approverUserId?: StringWithAggregatesFilter<"ViolationApprovalHistory"> | string
    approverName?: StringWithAggregatesFilter<"ViolationApprovalHistory"> | string
    approverRole?: StringWithAggregatesFilter<"ViolationApprovalHistory"> | string
    notes?: StringNullableWithAggregatesFilter<"ViolationApprovalHistory"> | string | null
    actionDate?: DateTimeWithAggregatesFilter<"ViolationApprovalHistory"> | Date | string
  }

  export type ViolationStatisticsWhereInput = {
    AND?: ViolationStatisticsWhereInput | ViolationStatisticsWhereInput[]
    OR?: ViolationStatisticsWhereInput[]
    NOT?: ViolationStatisticsWhereInput | ViolationStatisticsWhereInput[]
    id?: StringFilter<"ViolationStatistics"> | string
    studentId?: StringFilter<"ViolationStatistics"> | string
    studentName?: StringFilter<"ViolationStatistics"> | string
    classId?: StringFilter<"ViolationStatistics"> | string
    className?: StringFilter<"ViolationStatistics"> | string
    totalViolations?: IntFilter<"ViolationStatistics"> | number
    pendingCount?: IntFilter<"ViolationStatistics"> | number
    approvedCount?: IntFilter<"ViolationStatistics"> | number
    rejectedCount?: IntFilter<"ViolationStatistics"> | number
    appealedCount?: IntFilter<"ViolationStatistics"> | number
    totalPoints?: IntFilter<"ViolationStatistics"> | number
    ringanCount?: IntFilter<"ViolationStatistics"> | number
    sedangCount?: IntFilter<"ViolationStatistics"> | number
    beratCount?: IntFilter<"ViolationStatistics"> | number
    academicYear?: StringFilter<"ViolationStatistics"> | string
    semester?: IntFilter<"ViolationStatistics"> | number
    isRepeatOffender?: BoolFilter<"ViolationStatistics"> | boolean
    lastViolationDate?: DateTimeNullableFilter<"ViolationStatistics"> | Date | string | null
    updatedAt?: DateTimeFilter<"ViolationStatistics"> | Date | string
  }

  export type ViolationStatisticsOrderByWithRelationInput = {
    id?: SortOrder
    studentId?: SortOrder
    studentName?: SortOrder
    classId?: SortOrder
    className?: SortOrder
    totalViolations?: SortOrder
    pendingCount?: SortOrder
    approvedCount?: SortOrder
    rejectedCount?: SortOrder
    appealedCount?: SortOrder
    totalPoints?: SortOrder
    ringanCount?: SortOrder
    sedangCount?: SortOrder
    beratCount?: SortOrder
    academicYear?: SortOrder
    semester?: SortOrder
    isRepeatOffender?: SortOrder
    lastViolationDate?: SortOrderInput | SortOrder
    updatedAt?: SortOrder
  }

  export type ViolationStatisticsWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    studentId_academicYear_semester?: ViolationStatisticsStudentIdAcademicYearSemesterCompoundUniqueInput
    AND?: ViolationStatisticsWhereInput | ViolationStatisticsWhereInput[]
    OR?: ViolationStatisticsWhereInput[]
    NOT?: ViolationStatisticsWhereInput | ViolationStatisticsWhereInput[]
    studentId?: StringFilter<"ViolationStatistics"> | string
    studentName?: StringFilter<"ViolationStatistics"> | string
    classId?: StringFilter<"ViolationStatistics"> | string
    className?: StringFilter<"ViolationStatistics"> | string
    totalViolations?: IntFilter<"ViolationStatistics"> | number
    pendingCount?: IntFilter<"ViolationStatistics"> | number
    approvedCount?: IntFilter<"ViolationStatistics"> | number
    rejectedCount?: IntFilter<"ViolationStatistics"> | number
    appealedCount?: IntFilter<"ViolationStatistics"> | number
    totalPoints?: IntFilter<"ViolationStatistics"> | number
    ringanCount?: IntFilter<"ViolationStatistics"> | number
    sedangCount?: IntFilter<"ViolationStatistics"> | number
    beratCount?: IntFilter<"ViolationStatistics"> | number
    academicYear?: StringFilter<"ViolationStatistics"> | string
    semester?: IntFilter<"ViolationStatistics"> | number
    isRepeatOffender?: BoolFilter<"ViolationStatistics"> | boolean
    lastViolationDate?: DateTimeNullableFilter<"ViolationStatistics"> | Date | string | null
    updatedAt?: DateTimeFilter<"ViolationStatistics"> | Date | string
  }, "id" | "studentId_academicYear_semester">

  export type ViolationStatisticsOrderByWithAggregationInput = {
    id?: SortOrder
    studentId?: SortOrder
    studentName?: SortOrder
    classId?: SortOrder
    className?: SortOrder
    totalViolations?: SortOrder
    pendingCount?: SortOrder
    approvedCount?: SortOrder
    rejectedCount?: SortOrder
    appealedCount?: SortOrder
    totalPoints?: SortOrder
    ringanCount?: SortOrder
    sedangCount?: SortOrder
    beratCount?: SortOrder
    academicYear?: SortOrder
    semester?: SortOrder
    isRepeatOffender?: SortOrder
    lastViolationDate?: SortOrderInput | SortOrder
    updatedAt?: SortOrder
    _count?: ViolationStatisticsCountOrderByAggregateInput
    _avg?: ViolationStatisticsAvgOrderByAggregateInput
    _max?: ViolationStatisticsMaxOrderByAggregateInput
    _min?: ViolationStatisticsMinOrderByAggregateInput
    _sum?: ViolationStatisticsSumOrderByAggregateInput
  }

  export type ViolationStatisticsScalarWhereWithAggregatesInput = {
    AND?: ViolationStatisticsScalarWhereWithAggregatesInput | ViolationStatisticsScalarWhereWithAggregatesInput[]
    OR?: ViolationStatisticsScalarWhereWithAggregatesInput[]
    NOT?: ViolationStatisticsScalarWhereWithAggregatesInput | ViolationStatisticsScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"ViolationStatistics"> | string
    studentId?: StringWithAggregatesFilter<"ViolationStatistics"> | string
    studentName?: StringWithAggregatesFilter<"ViolationStatistics"> | string
    classId?: StringWithAggregatesFilter<"ViolationStatistics"> | string
    className?: StringWithAggregatesFilter<"ViolationStatistics"> | string
    totalViolations?: IntWithAggregatesFilter<"ViolationStatistics"> | number
    pendingCount?: IntWithAggregatesFilter<"ViolationStatistics"> | number
    approvedCount?: IntWithAggregatesFilter<"ViolationStatistics"> | number
    rejectedCount?: IntWithAggregatesFilter<"ViolationStatistics"> | number
    appealedCount?: IntWithAggregatesFilter<"ViolationStatistics"> | number
    totalPoints?: IntWithAggregatesFilter<"ViolationStatistics"> | number
    ringanCount?: IntWithAggregatesFilter<"ViolationStatistics"> | number
    sedangCount?: IntWithAggregatesFilter<"ViolationStatistics"> | number
    beratCount?: IntWithAggregatesFilter<"ViolationStatistics"> | number
    academicYear?: StringWithAggregatesFilter<"ViolationStatistics"> | string
    semester?: IntWithAggregatesFilter<"ViolationStatistics"> | number
    isRepeatOffender?: BoolWithAggregatesFilter<"ViolationStatistics"> | boolean
    lastViolationDate?: DateTimeNullableWithAggregatesFilter<"ViolationStatistics"> | Date | string | null
    updatedAt?: DateTimeWithAggregatesFilter<"ViolationStatistics"> | Date | string
  }

  export type ViolationCreateInput = {
    id?: string
    studentId: string
    studentNisn: string
    studentName: string
    studentClass: string
    reportedBy: string
    reportedByName: string
    reporterRole: string
    categoryId: string
    categoryCode: string
    categoryName: string
    categorySeverity: $Enums.ViolationSeverity
    description: string
    location?: string | null
    violationDate: Date | string
    violationTime?: string | null
    points: number
    evidenceUrls?: NullableJsonNullValueInput | InputJsonValue
    witnessName?: string | null
    witnessStatement?: string | null
    status?: $Enums.ViolationStatus
    approvedByWaliAt?: Date | string | null
    approvedByWaliBy?: string | null
    approvedByWaliName?: string | null
    waliKelasNotes?: string | null
    approvedByBKAt?: Date | string | null
    approvedByBKBy?: string | null
    approvedByBKName?: string | null
    bkNotes?: string | null
    rejectedAt?: Date | string | null
    rejectedBy?: string | null
    rejectedByName?: string | null
    rejectionReason?: string | null
    rejectionLevel?: string | null
    appealReason?: string | null
    appealedAt?: Date | string | null
    appealedBy?: string | null
    appealReviewedAt?: Date | string | null
    appealReviewedBy?: string | null
    appealStatus?: $Enums.AppealStatus | null
    appealNotes?: string | null
    sanction?: string | null
    sanctionStartDate?: Date | string | null
    sanctionEndDate?: Date | string | null
    sanctionCompleted?: boolean
    academicYear: string
    semester: number
    notificationSent?: boolean
    notificationSentAt?: Date | string | null
    isActive?: boolean
    createdBy: string
    createdAt?: Date | string
    updatedBy?: string | null
    updatedAt?: Date | string
    deletedAt?: Date | string | null
    deletedBy?: string | null
    approvalHistory?: ViolationApprovalHistoryCreateNestedManyWithoutViolationInput
  }

  export type ViolationUncheckedCreateInput = {
    id?: string
    studentId: string
    studentNisn: string
    studentName: string
    studentClass: string
    reportedBy: string
    reportedByName: string
    reporterRole: string
    categoryId: string
    categoryCode: string
    categoryName: string
    categorySeverity: $Enums.ViolationSeverity
    description: string
    location?: string | null
    violationDate: Date | string
    violationTime?: string | null
    points: number
    evidenceUrls?: NullableJsonNullValueInput | InputJsonValue
    witnessName?: string | null
    witnessStatement?: string | null
    status?: $Enums.ViolationStatus
    approvedByWaliAt?: Date | string | null
    approvedByWaliBy?: string | null
    approvedByWaliName?: string | null
    waliKelasNotes?: string | null
    approvedByBKAt?: Date | string | null
    approvedByBKBy?: string | null
    approvedByBKName?: string | null
    bkNotes?: string | null
    rejectedAt?: Date | string | null
    rejectedBy?: string | null
    rejectedByName?: string | null
    rejectionReason?: string | null
    rejectionLevel?: string | null
    appealReason?: string | null
    appealedAt?: Date | string | null
    appealedBy?: string | null
    appealReviewedAt?: Date | string | null
    appealReviewedBy?: string | null
    appealStatus?: $Enums.AppealStatus | null
    appealNotes?: string | null
    sanction?: string | null
    sanctionStartDate?: Date | string | null
    sanctionEndDate?: Date | string | null
    sanctionCompleted?: boolean
    academicYear: string
    semester: number
    notificationSent?: boolean
    notificationSentAt?: Date | string | null
    isActive?: boolean
    createdBy: string
    createdAt?: Date | string
    updatedBy?: string | null
    updatedAt?: Date | string
    deletedAt?: Date | string | null
    deletedBy?: string | null
    approvalHistory?: ViolationApprovalHistoryUncheckedCreateNestedManyWithoutViolationInput
  }

  export type ViolationUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    studentId?: StringFieldUpdateOperationsInput | string
    studentNisn?: StringFieldUpdateOperationsInput | string
    studentName?: StringFieldUpdateOperationsInput | string
    studentClass?: StringFieldUpdateOperationsInput | string
    reportedBy?: StringFieldUpdateOperationsInput | string
    reportedByName?: StringFieldUpdateOperationsInput | string
    reporterRole?: StringFieldUpdateOperationsInput | string
    categoryId?: StringFieldUpdateOperationsInput | string
    categoryCode?: StringFieldUpdateOperationsInput | string
    categoryName?: StringFieldUpdateOperationsInput | string
    categorySeverity?: EnumViolationSeverityFieldUpdateOperationsInput | $Enums.ViolationSeverity
    description?: StringFieldUpdateOperationsInput | string
    location?: NullableStringFieldUpdateOperationsInput | string | null
    violationDate?: DateTimeFieldUpdateOperationsInput | Date | string
    violationTime?: NullableStringFieldUpdateOperationsInput | string | null
    points?: IntFieldUpdateOperationsInput | number
    evidenceUrls?: NullableJsonNullValueInput | InputJsonValue
    witnessName?: NullableStringFieldUpdateOperationsInput | string | null
    witnessStatement?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumViolationStatusFieldUpdateOperationsInput | $Enums.ViolationStatus
    approvedByWaliAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    approvedByWaliBy?: NullableStringFieldUpdateOperationsInput | string | null
    approvedByWaliName?: NullableStringFieldUpdateOperationsInput | string | null
    waliKelasNotes?: NullableStringFieldUpdateOperationsInput | string | null
    approvedByBKAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    approvedByBKBy?: NullableStringFieldUpdateOperationsInput | string | null
    approvedByBKName?: NullableStringFieldUpdateOperationsInput | string | null
    bkNotes?: NullableStringFieldUpdateOperationsInput | string | null
    rejectedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    rejectedBy?: NullableStringFieldUpdateOperationsInput | string | null
    rejectedByName?: NullableStringFieldUpdateOperationsInput | string | null
    rejectionReason?: NullableStringFieldUpdateOperationsInput | string | null
    rejectionLevel?: NullableStringFieldUpdateOperationsInput | string | null
    appealReason?: NullableStringFieldUpdateOperationsInput | string | null
    appealedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    appealedBy?: NullableStringFieldUpdateOperationsInput | string | null
    appealReviewedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    appealReviewedBy?: NullableStringFieldUpdateOperationsInput | string | null
    appealStatus?: NullableEnumAppealStatusFieldUpdateOperationsInput | $Enums.AppealStatus | null
    appealNotes?: NullableStringFieldUpdateOperationsInput | string | null
    sanction?: NullableStringFieldUpdateOperationsInput | string | null
    sanctionStartDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    sanctionEndDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    sanctionCompleted?: BoolFieldUpdateOperationsInput | boolean
    academicYear?: StringFieldUpdateOperationsInput | string
    semester?: IntFieldUpdateOperationsInput | number
    notificationSent?: BoolFieldUpdateOperationsInput | boolean
    notificationSentAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdBy?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedBy?: NullableStringFieldUpdateOperationsInput | string | null
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deletedBy?: NullableStringFieldUpdateOperationsInput | string | null
    approvalHistory?: ViolationApprovalHistoryUpdateManyWithoutViolationNestedInput
  }

  export type ViolationUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    studentId?: StringFieldUpdateOperationsInput | string
    studentNisn?: StringFieldUpdateOperationsInput | string
    studentName?: StringFieldUpdateOperationsInput | string
    studentClass?: StringFieldUpdateOperationsInput | string
    reportedBy?: StringFieldUpdateOperationsInput | string
    reportedByName?: StringFieldUpdateOperationsInput | string
    reporterRole?: StringFieldUpdateOperationsInput | string
    categoryId?: StringFieldUpdateOperationsInput | string
    categoryCode?: StringFieldUpdateOperationsInput | string
    categoryName?: StringFieldUpdateOperationsInput | string
    categorySeverity?: EnumViolationSeverityFieldUpdateOperationsInput | $Enums.ViolationSeverity
    description?: StringFieldUpdateOperationsInput | string
    location?: NullableStringFieldUpdateOperationsInput | string | null
    violationDate?: DateTimeFieldUpdateOperationsInput | Date | string
    violationTime?: NullableStringFieldUpdateOperationsInput | string | null
    points?: IntFieldUpdateOperationsInput | number
    evidenceUrls?: NullableJsonNullValueInput | InputJsonValue
    witnessName?: NullableStringFieldUpdateOperationsInput | string | null
    witnessStatement?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumViolationStatusFieldUpdateOperationsInput | $Enums.ViolationStatus
    approvedByWaliAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    approvedByWaliBy?: NullableStringFieldUpdateOperationsInput | string | null
    approvedByWaliName?: NullableStringFieldUpdateOperationsInput | string | null
    waliKelasNotes?: NullableStringFieldUpdateOperationsInput | string | null
    approvedByBKAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    approvedByBKBy?: NullableStringFieldUpdateOperationsInput | string | null
    approvedByBKName?: NullableStringFieldUpdateOperationsInput | string | null
    bkNotes?: NullableStringFieldUpdateOperationsInput | string | null
    rejectedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    rejectedBy?: NullableStringFieldUpdateOperationsInput | string | null
    rejectedByName?: NullableStringFieldUpdateOperationsInput | string | null
    rejectionReason?: NullableStringFieldUpdateOperationsInput | string | null
    rejectionLevel?: NullableStringFieldUpdateOperationsInput | string | null
    appealReason?: NullableStringFieldUpdateOperationsInput | string | null
    appealedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    appealedBy?: NullableStringFieldUpdateOperationsInput | string | null
    appealReviewedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    appealReviewedBy?: NullableStringFieldUpdateOperationsInput | string | null
    appealStatus?: NullableEnumAppealStatusFieldUpdateOperationsInput | $Enums.AppealStatus | null
    appealNotes?: NullableStringFieldUpdateOperationsInput | string | null
    sanction?: NullableStringFieldUpdateOperationsInput | string | null
    sanctionStartDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    sanctionEndDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    sanctionCompleted?: BoolFieldUpdateOperationsInput | boolean
    academicYear?: StringFieldUpdateOperationsInput | string
    semester?: IntFieldUpdateOperationsInput | number
    notificationSent?: BoolFieldUpdateOperationsInput | boolean
    notificationSentAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdBy?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedBy?: NullableStringFieldUpdateOperationsInput | string | null
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deletedBy?: NullableStringFieldUpdateOperationsInput | string | null
    approvalHistory?: ViolationApprovalHistoryUncheckedUpdateManyWithoutViolationNestedInput
  }

  export type ViolationCreateManyInput = {
    id?: string
    studentId: string
    studentNisn: string
    studentName: string
    studentClass: string
    reportedBy: string
    reportedByName: string
    reporterRole: string
    categoryId: string
    categoryCode: string
    categoryName: string
    categorySeverity: $Enums.ViolationSeverity
    description: string
    location?: string | null
    violationDate: Date | string
    violationTime?: string | null
    points: number
    evidenceUrls?: NullableJsonNullValueInput | InputJsonValue
    witnessName?: string | null
    witnessStatement?: string | null
    status?: $Enums.ViolationStatus
    approvedByWaliAt?: Date | string | null
    approvedByWaliBy?: string | null
    approvedByWaliName?: string | null
    waliKelasNotes?: string | null
    approvedByBKAt?: Date | string | null
    approvedByBKBy?: string | null
    approvedByBKName?: string | null
    bkNotes?: string | null
    rejectedAt?: Date | string | null
    rejectedBy?: string | null
    rejectedByName?: string | null
    rejectionReason?: string | null
    rejectionLevel?: string | null
    appealReason?: string | null
    appealedAt?: Date | string | null
    appealedBy?: string | null
    appealReviewedAt?: Date | string | null
    appealReviewedBy?: string | null
    appealStatus?: $Enums.AppealStatus | null
    appealNotes?: string | null
    sanction?: string | null
    sanctionStartDate?: Date | string | null
    sanctionEndDate?: Date | string | null
    sanctionCompleted?: boolean
    academicYear: string
    semester: number
    notificationSent?: boolean
    notificationSentAt?: Date | string | null
    isActive?: boolean
    createdBy: string
    createdAt?: Date | string
    updatedBy?: string | null
    updatedAt?: Date | string
    deletedAt?: Date | string | null
    deletedBy?: string | null
  }

  export type ViolationUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    studentId?: StringFieldUpdateOperationsInput | string
    studentNisn?: StringFieldUpdateOperationsInput | string
    studentName?: StringFieldUpdateOperationsInput | string
    studentClass?: StringFieldUpdateOperationsInput | string
    reportedBy?: StringFieldUpdateOperationsInput | string
    reportedByName?: StringFieldUpdateOperationsInput | string
    reporterRole?: StringFieldUpdateOperationsInput | string
    categoryId?: StringFieldUpdateOperationsInput | string
    categoryCode?: StringFieldUpdateOperationsInput | string
    categoryName?: StringFieldUpdateOperationsInput | string
    categorySeverity?: EnumViolationSeverityFieldUpdateOperationsInput | $Enums.ViolationSeverity
    description?: StringFieldUpdateOperationsInput | string
    location?: NullableStringFieldUpdateOperationsInput | string | null
    violationDate?: DateTimeFieldUpdateOperationsInput | Date | string
    violationTime?: NullableStringFieldUpdateOperationsInput | string | null
    points?: IntFieldUpdateOperationsInput | number
    evidenceUrls?: NullableJsonNullValueInput | InputJsonValue
    witnessName?: NullableStringFieldUpdateOperationsInput | string | null
    witnessStatement?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumViolationStatusFieldUpdateOperationsInput | $Enums.ViolationStatus
    approvedByWaliAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    approvedByWaliBy?: NullableStringFieldUpdateOperationsInput | string | null
    approvedByWaliName?: NullableStringFieldUpdateOperationsInput | string | null
    waliKelasNotes?: NullableStringFieldUpdateOperationsInput | string | null
    approvedByBKAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    approvedByBKBy?: NullableStringFieldUpdateOperationsInput | string | null
    approvedByBKName?: NullableStringFieldUpdateOperationsInput | string | null
    bkNotes?: NullableStringFieldUpdateOperationsInput | string | null
    rejectedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    rejectedBy?: NullableStringFieldUpdateOperationsInput | string | null
    rejectedByName?: NullableStringFieldUpdateOperationsInput | string | null
    rejectionReason?: NullableStringFieldUpdateOperationsInput | string | null
    rejectionLevel?: NullableStringFieldUpdateOperationsInput | string | null
    appealReason?: NullableStringFieldUpdateOperationsInput | string | null
    appealedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    appealedBy?: NullableStringFieldUpdateOperationsInput | string | null
    appealReviewedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    appealReviewedBy?: NullableStringFieldUpdateOperationsInput | string | null
    appealStatus?: NullableEnumAppealStatusFieldUpdateOperationsInput | $Enums.AppealStatus | null
    appealNotes?: NullableStringFieldUpdateOperationsInput | string | null
    sanction?: NullableStringFieldUpdateOperationsInput | string | null
    sanctionStartDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    sanctionEndDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    sanctionCompleted?: BoolFieldUpdateOperationsInput | boolean
    academicYear?: StringFieldUpdateOperationsInput | string
    semester?: IntFieldUpdateOperationsInput | number
    notificationSent?: BoolFieldUpdateOperationsInput | boolean
    notificationSentAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdBy?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedBy?: NullableStringFieldUpdateOperationsInput | string | null
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deletedBy?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type ViolationUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    studentId?: StringFieldUpdateOperationsInput | string
    studentNisn?: StringFieldUpdateOperationsInput | string
    studentName?: StringFieldUpdateOperationsInput | string
    studentClass?: StringFieldUpdateOperationsInput | string
    reportedBy?: StringFieldUpdateOperationsInput | string
    reportedByName?: StringFieldUpdateOperationsInput | string
    reporterRole?: StringFieldUpdateOperationsInput | string
    categoryId?: StringFieldUpdateOperationsInput | string
    categoryCode?: StringFieldUpdateOperationsInput | string
    categoryName?: StringFieldUpdateOperationsInput | string
    categorySeverity?: EnumViolationSeverityFieldUpdateOperationsInput | $Enums.ViolationSeverity
    description?: StringFieldUpdateOperationsInput | string
    location?: NullableStringFieldUpdateOperationsInput | string | null
    violationDate?: DateTimeFieldUpdateOperationsInput | Date | string
    violationTime?: NullableStringFieldUpdateOperationsInput | string | null
    points?: IntFieldUpdateOperationsInput | number
    evidenceUrls?: NullableJsonNullValueInput | InputJsonValue
    witnessName?: NullableStringFieldUpdateOperationsInput | string | null
    witnessStatement?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumViolationStatusFieldUpdateOperationsInput | $Enums.ViolationStatus
    approvedByWaliAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    approvedByWaliBy?: NullableStringFieldUpdateOperationsInput | string | null
    approvedByWaliName?: NullableStringFieldUpdateOperationsInput | string | null
    waliKelasNotes?: NullableStringFieldUpdateOperationsInput | string | null
    approvedByBKAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    approvedByBKBy?: NullableStringFieldUpdateOperationsInput | string | null
    approvedByBKName?: NullableStringFieldUpdateOperationsInput | string | null
    bkNotes?: NullableStringFieldUpdateOperationsInput | string | null
    rejectedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    rejectedBy?: NullableStringFieldUpdateOperationsInput | string | null
    rejectedByName?: NullableStringFieldUpdateOperationsInput | string | null
    rejectionReason?: NullableStringFieldUpdateOperationsInput | string | null
    rejectionLevel?: NullableStringFieldUpdateOperationsInput | string | null
    appealReason?: NullableStringFieldUpdateOperationsInput | string | null
    appealedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    appealedBy?: NullableStringFieldUpdateOperationsInput | string | null
    appealReviewedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    appealReviewedBy?: NullableStringFieldUpdateOperationsInput | string | null
    appealStatus?: NullableEnumAppealStatusFieldUpdateOperationsInput | $Enums.AppealStatus | null
    appealNotes?: NullableStringFieldUpdateOperationsInput | string | null
    sanction?: NullableStringFieldUpdateOperationsInput | string | null
    sanctionStartDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    sanctionEndDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    sanctionCompleted?: BoolFieldUpdateOperationsInput | boolean
    academicYear?: StringFieldUpdateOperationsInput | string
    semester?: IntFieldUpdateOperationsInput | number
    notificationSent?: BoolFieldUpdateOperationsInput | boolean
    notificationSentAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdBy?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedBy?: NullableStringFieldUpdateOperationsInput | string | null
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deletedBy?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type ViolationApprovalHistoryCreateInput = {
    id?: string
    action: $Enums.ApprovalAction
    fromStatus: $Enums.ViolationStatus
    toStatus: $Enums.ViolationStatus
    approverUserId: string
    approverName: string
    approverRole: string
    notes?: string | null
    actionDate?: Date | string
    violation: ViolationCreateNestedOneWithoutApprovalHistoryInput
  }

  export type ViolationApprovalHistoryUncheckedCreateInput = {
    id?: string
    violationId: string
    action: $Enums.ApprovalAction
    fromStatus: $Enums.ViolationStatus
    toStatus: $Enums.ViolationStatus
    approverUserId: string
    approverName: string
    approverRole: string
    notes?: string | null
    actionDate?: Date | string
  }

  export type ViolationApprovalHistoryUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    action?: EnumApprovalActionFieldUpdateOperationsInput | $Enums.ApprovalAction
    fromStatus?: EnumViolationStatusFieldUpdateOperationsInput | $Enums.ViolationStatus
    toStatus?: EnumViolationStatusFieldUpdateOperationsInput | $Enums.ViolationStatus
    approverUserId?: StringFieldUpdateOperationsInput | string
    approverName?: StringFieldUpdateOperationsInput | string
    approverRole?: StringFieldUpdateOperationsInput | string
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    actionDate?: DateTimeFieldUpdateOperationsInput | Date | string
    violation?: ViolationUpdateOneRequiredWithoutApprovalHistoryNestedInput
  }

  export type ViolationApprovalHistoryUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    violationId?: StringFieldUpdateOperationsInput | string
    action?: EnumApprovalActionFieldUpdateOperationsInput | $Enums.ApprovalAction
    fromStatus?: EnumViolationStatusFieldUpdateOperationsInput | $Enums.ViolationStatus
    toStatus?: EnumViolationStatusFieldUpdateOperationsInput | $Enums.ViolationStatus
    approverUserId?: StringFieldUpdateOperationsInput | string
    approverName?: StringFieldUpdateOperationsInput | string
    approverRole?: StringFieldUpdateOperationsInput | string
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    actionDate?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ViolationApprovalHistoryCreateManyInput = {
    id?: string
    violationId: string
    action: $Enums.ApprovalAction
    fromStatus: $Enums.ViolationStatus
    toStatus: $Enums.ViolationStatus
    approverUserId: string
    approverName: string
    approverRole: string
    notes?: string | null
    actionDate?: Date | string
  }

  export type ViolationApprovalHistoryUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    action?: EnumApprovalActionFieldUpdateOperationsInput | $Enums.ApprovalAction
    fromStatus?: EnumViolationStatusFieldUpdateOperationsInput | $Enums.ViolationStatus
    toStatus?: EnumViolationStatusFieldUpdateOperationsInput | $Enums.ViolationStatus
    approverUserId?: StringFieldUpdateOperationsInput | string
    approverName?: StringFieldUpdateOperationsInput | string
    approverRole?: StringFieldUpdateOperationsInput | string
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    actionDate?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ViolationApprovalHistoryUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    violationId?: StringFieldUpdateOperationsInput | string
    action?: EnumApprovalActionFieldUpdateOperationsInput | $Enums.ApprovalAction
    fromStatus?: EnumViolationStatusFieldUpdateOperationsInput | $Enums.ViolationStatus
    toStatus?: EnumViolationStatusFieldUpdateOperationsInput | $Enums.ViolationStatus
    approverUserId?: StringFieldUpdateOperationsInput | string
    approverName?: StringFieldUpdateOperationsInput | string
    approverRole?: StringFieldUpdateOperationsInput | string
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    actionDate?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ViolationStatisticsCreateInput = {
    id?: string
    studentId: string
    studentName: string
    classId: string
    className: string
    totalViolations?: number
    pendingCount?: number
    approvedCount?: number
    rejectedCount?: number
    appealedCount?: number
    totalPoints?: number
    ringanCount?: number
    sedangCount?: number
    beratCount?: number
    academicYear: string
    semester: number
    isRepeatOffender?: boolean
    lastViolationDate?: Date | string | null
    updatedAt?: Date | string
  }

  export type ViolationStatisticsUncheckedCreateInput = {
    id?: string
    studentId: string
    studentName: string
    classId: string
    className: string
    totalViolations?: number
    pendingCount?: number
    approvedCount?: number
    rejectedCount?: number
    appealedCount?: number
    totalPoints?: number
    ringanCount?: number
    sedangCount?: number
    beratCount?: number
    academicYear: string
    semester: number
    isRepeatOffender?: boolean
    lastViolationDate?: Date | string | null
    updatedAt?: Date | string
  }

  export type ViolationStatisticsUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    studentId?: StringFieldUpdateOperationsInput | string
    studentName?: StringFieldUpdateOperationsInput | string
    classId?: StringFieldUpdateOperationsInput | string
    className?: StringFieldUpdateOperationsInput | string
    totalViolations?: IntFieldUpdateOperationsInput | number
    pendingCount?: IntFieldUpdateOperationsInput | number
    approvedCount?: IntFieldUpdateOperationsInput | number
    rejectedCount?: IntFieldUpdateOperationsInput | number
    appealedCount?: IntFieldUpdateOperationsInput | number
    totalPoints?: IntFieldUpdateOperationsInput | number
    ringanCount?: IntFieldUpdateOperationsInput | number
    sedangCount?: IntFieldUpdateOperationsInput | number
    beratCount?: IntFieldUpdateOperationsInput | number
    academicYear?: StringFieldUpdateOperationsInput | string
    semester?: IntFieldUpdateOperationsInput | number
    isRepeatOffender?: BoolFieldUpdateOperationsInput | boolean
    lastViolationDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ViolationStatisticsUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    studentId?: StringFieldUpdateOperationsInput | string
    studentName?: StringFieldUpdateOperationsInput | string
    classId?: StringFieldUpdateOperationsInput | string
    className?: StringFieldUpdateOperationsInput | string
    totalViolations?: IntFieldUpdateOperationsInput | number
    pendingCount?: IntFieldUpdateOperationsInput | number
    approvedCount?: IntFieldUpdateOperationsInput | number
    rejectedCount?: IntFieldUpdateOperationsInput | number
    appealedCount?: IntFieldUpdateOperationsInput | number
    totalPoints?: IntFieldUpdateOperationsInput | number
    ringanCount?: IntFieldUpdateOperationsInput | number
    sedangCount?: IntFieldUpdateOperationsInput | number
    beratCount?: IntFieldUpdateOperationsInput | number
    academicYear?: StringFieldUpdateOperationsInput | string
    semester?: IntFieldUpdateOperationsInput | number
    isRepeatOffender?: BoolFieldUpdateOperationsInput | boolean
    lastViolationDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ViolationStatisticsCreateManyInput = {
    id?: string
    studentId: string
    studentName: string
    classId: string
    className: string
    totalViolations?: number
    pendingCount?: number
    approvedCount?: number
    rejectedCount?: number
    appealedCount?: number
    totalPoints?: number
    ringanCount?: number
    sedangCount?: number
    beratCount?: number
    academicYear: string
    semester: number
    isRepeatOffender?: boolean
    lastViolationDate?: Date | string | null
    updatedAt?: Date | string
  }

  export type ViolationStatisticsUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    studentId?: StringFieldUpdateOperationsInput | string
    studentName?: StringFieldUpdateOperationsInput | string
    classId?: StringFieldUpdateOperationsInput | string
    className?: StringFieldUpdateOperationsInput | string
    totalViolations?: IntFieldUpdateOperationsInput | number
    pendingCount?: IntFieldUpdateOperationsInput | number
    approvedCount?: IntFieldUpdateOperationsInput | number
    rejectedCount?: IntFieldUpdateOperationsInput | number
    appealedCount?: IntFieldUpdateOperationsInput | number
    totalPoints?: IntFieldUpdateOperationsInput | number
    ringanCount?: IntFieldUpdateOperationsInput | number
    sedangCount?: IntFieldUpdateOperationsInput | number
    beratCount?: IntFieldUpdateOperationsInput | number
    academicYear?: StringFieldUpdateOperationsInput | string
    semester?: IntFieldUpdateOperationsInput | number
    isRepeatOffender?: BoolFieldUpdateOperationsInput | boolean
    lastViolationDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ViolationStatisticsUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    studentId?: StringFieldUpdateOperationsInput | string
    studentName?: StringFieldUpdateOperationsInput | string
    classId?: StringFieldUpdateOperationsInput | string
    className?: StringFieldUpdateOperationsInput | string
    totalViolations?: IntFieldUpdateOperationsInput | number
    pendingCount?: IntFieldUpdateOperationsInput | number
    approvedCount?: IntFieldUpdateOperationsInput | number
    rejectedCount?: IntFieldUpdateOperationsInput | number
    appealedCount?: IntFieldUpdateOperationsInput | number
    totalPoints?: IntFieldUpdateOperationsInput | number
    ringanCount?: IntFieldUpdateOperationsInput | number
    sedangCount?: IntFieldUpdateOperationsInput | number
    beratCount?: IntFieldUpdateOperationsInput | number
    academicYear?: StringFieldUpdateOperationsInput | string
    semester?: IntFieldUpdateOperationsInput | number
    isRepeatOffender?: BoolFieldUpdateOperationsInput | boolean
    lastViolationDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
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

  export type EnumViolationSeverityFilter<$PrismaModel = never> = {
    equals?: $Enums.ViolationSeverity | EnumViolationSeverityFieldRefInput<$PrismaModel>
    in?: $Enums.ViolationSeverity[] | ListEnumViolationSeverityFieldRefInput<$PrismaModel>
    notIn?: $Enums.ViolationSeverity[] | ListEnumViolationSeverityFieldRefInput<$PrismaModel>
    not?: NestedEnumViolationSeverityFilter<$PrismaModel> | $Enums.ViolationSeverity
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
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
  export type JsonNullableFilter<$PrismaModel = never> = 
    | PatchUndefined<
        Either<Required<JsonNullableFilterBase<$PrismaModel>>, Exclude<keyof Required<JsonNullableFilterBase<$PrismaModel>>, 'path'>>,
        Required<JsonNullableFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<JsonNullableFilterBase<$PrismaModel>>, 'path'>>

  export type JsonNullableFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
  }

  export type EnumViolationStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.ViolationStatus | EnumViolationStatusFieldRefInput<$PrismaModel>
    in?: $Enums.ViolationStatus[] | ListEnumViolationStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.ViolationStatus[] | ListEnumViolationStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumViolationStatusFilter<$PrismaModel> | $Enums.ViolationStatus
  }

  export type DateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type EnumAppealStatusNullableFilter<$PrismaModel = never> = {
    equals?: $Enums.AppealStatus | EnumAppealStatusFieldRefInput<$PrismaModel> | null
    in?: $Enums.AppealStatus[] | ListEnumAppealStatusFieldRefInput<$PrismaModel> | null
    notIn?: $Enums.AppealStatus[] | ListEnumAppealStatusFieldRefInput<$PrismaModel> | null
    not?: NestedEnumAppealStatusNullableFilter<$PrismaModel> | $Enums.AppealStatus | null
  }

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type ViolationApprovalHistoryListRelationFilter = {
    every?: ViolationApprovalHistoryWhereInput
    some?: ViolationApprovalHistoryWhereInput
    none?: ViolationApprovalHistoryWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type ViolationApprovalHistoryOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ViolationCountOrderByAggregateInput = {
    id?: SortOrder
    studentId?: SortOrder
    studentNisn?: SortOrder
    studentName?: SortOrder
    studentClass?: SortOrder
    reportedBy?: SortOrder
    reportedByName?: SortOrder
    reporterRole?: SortOrder
    categoryId?: SortOrder
    categoryCode?: SortOrder
    categoryName?: SortOrder
    categorySeverity?: SortOrder
    description?: SortOrder
    location?: SortOrder
    violationDate?: SortOrder
    violationTime?: SortOrder
    points?: SortOrder
    evidenceUrls?: SortOrder
    witnessName?: SortOrder
    witnessStatement?: SortOrder
    status?: SortOrder
    approvedByWaliAt?: SortOrder
    approvedByWaliBy?: SortOrder
    approvedByWaliName?: SortOrder
    waliKelasNotes?: SortOrder
    approvedByBKAt?: SortOrder
    approvedByBKBy?: SortOrder
    approvedByBKName?: SortOrder
    bkNotes?: SortOrder
    rejectedAt?: SortOrder
    rejectedBy?: SortOrder
    rejectedByName?: SortOrder
    rejectionReason?: SortOrder
    rejectionLevel?: SortOrder
    appealReason?: SortOrder
    appealedAt?: SortOrder
    appealedBy?: SortOrder
    appealReviewedAt?: SortOrder
    appealReviewedBy?: SortOrder
    appealStatus?: SortOrder
    appealNotes?: SortOrder
    sanction?: SortOrder
    sanctionStartDate?: SortOrder
    sanctionEndDate?: SortOrder
    sanctionCompleted?: SortOrder
    academicYear?: SortOrder
    semester?: SortOrder
    notificationSent?: SortOrder
    notificationSentAt?: SortOrder
    isActive?: SortOrder
    createdBy?: SortOrder
    createdAt?: SortOrder
    updatedBy?: SortOrder
    updatedAt?: SortOrder
    deletedAt?: SortOrder
    deletedBy?: SortOrder
  }

  export type ViolationAvgOrderByAggregateInput = {
    points?: SortOrder
    semester?: SortOrder
  }

  export type ViolationMaxOrderByAggregateInput = {
    id?: SortOrder
    studentId?: SortOrder
    studentNisn?: SortOrder
    studentName?: SortOrder
    studentClass?: SortOrder
    reportedBy?: SortOrder
    reportedByName?: SortOrder
    reporterRole?: SortOrder
    categoryId?: SortOrder
    categoryCode?: SortOrder
    categoryName?: SortOrder
    categorySeverity?: SortOrder
    description?: SortOrder
    location?: SortOrder
    violationDate?: SortOrder
    violationTime?: SortOrder
    points?: SortOrder
    witnessName?: SortOrder
    witnessStatement?: SortOrder
    status?: SortOrder
    approvedByWaliAt?: SortOrder
    approvedByWaliBy?: SortOrder
    approvedByWaliName?: SortOrder
    waliKelasNotes?: SortOrder
    approvedByBKAt?: SortOrder
    approvedByBKBy?: SortOrder
    approvedByBKName?: SortOrder
    bkNotes?: SortOrder
    rejectedAt?: SortOrder
    rejectedBy?: SortOrder
    rejectedByName?: SortOrder
    rejectionReason?: SortOrder
    rejectionLevel?: SortOrder
    appealReason?: SortOrder
    appealedAt?: SortOrder
    appealedBy?: SortOrder
    appealReviewedAt?: SortOrder
    appealReviewedBy?: SortOrder
    appealStatus?: SortOrder
    appealNotes?: SortOrder
    sanction?: SortOrder
    sanctionStartDate?: SortOrder
    sanctionEndDate?: SortOrder
    sanctionCompleted?: SortOrder
    academicYear?: SortOrder
    semester?: SortOrder
    notificationSent?: SortOrder
    notificationSentAt?: SortOrder
    isActive?: SortOrder
    createdBy?: SortOrder
    createdAt?: SortOrder
    updatedBy?: SortOrder
    updatedAt?: SortOrder
    deletedAt?: SortOrder
    deletedBy?: SortOrder
  }

  export type ViolationMinOrderByAggregateInput = {
    id?: SortOrder
    studentId?: SortOrder
    studentNisn?: SortOrder
    studentName?: SortOrder
    studentClass?: SortOrder
    reportedBy?: SortOrder
    reportedByName?: SortOrder
    reporterRole?: SortOrder
    categoryId?: SortOrder
    categoryCode?: SortOrder
    categoryName?: SortOrder
    categorySeverity?: SortOrder
    description?: SortOrder
    location?: SortOrder
    violationDate?: SortOrder
    violationTime?: SortOrder
    points?: SortOrder
    witnessName?: SortOrder
    witnessStatement?: SortOrder
    status?: SortOrder
    approvedByWaliAt?: SortOrder
    approvedByWaliBy?: SortOrder
    approvedByWaliName?: SortOrder
    waliKelasNotes?: SortOrder
    approvedByBKAt?: SortOrder
    approvedByBKBy?: SortOrder
    approvedByBKName?: SortOrder
    bkNotes?: SortOrder
    rejectedAt?: SortOrder
    rejectedBy?: SortOrder
    rejectedByName?: SortOrder
    rejectionReason?: SortOrder
    rejectionLevel?: SortOrder
    appealReason?: SortOrder
    appealedAt?: SortOrder
    appealedBy?: SortOrder
    appealReviewedAt?: SortOrder
    appealReviewedBy?: SortOrder
    appealStatus?: SortOrder
    appealNotes?: SortOrder
    sanction?: SortOrder
    sanctionStartDate?: SortOrder
    sanctionEndDate?: SortOrder
    sanctionCompleted?: SortOrder
    academicYear?: SortOrder
    semester?: SortOrder
    notificationSent?: SortOrder
    notificationSentAt?: SortOrder
    isActive?: SortOrder
    createdBy?: SortOrder
    createdAt?: SortOrder
    updatedBy?: SortOrder
    updatedAt?: SortOrder
    deletedAt?: SortOrder
    deletedBy?: SortOrder
  }

  export type ViolationSumOrderByAggregateInput = {
    points?: SortOrder
    semester?: SortOrder
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

  export type EnumViolationSeverityWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.ViolationSeverity | EnumViolationSeverityFieldRefInput<$PrismaModel>
    in?: $Enums.ViolationSeverity[] | ListEnumViolationSeverityFieldRefInput<$PrismaModel>
    notIn?: $Enums.ViolationSeverity[] | ListEnumViolationSeverityFieldRefInput<$PrismaModel>
    not?: NestedEnumViolationSeverityWithAggregatesFilter<$PrismaModel> | $Enums.ViolationSeverity
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumViolationSeverityFilter<$PrismaModel>
    _max?: NestedEnumViolationSeverityFilter<$PrismaModel>
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
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
  export type JsonNullableWithAggregatesFilter<$PrismaModel = never> = 
    | PatchUndefined<
        Either<Required<JsonNullableWithAggregatesFilterBase<$PrismaModel>>, Exclude<keyof Required<JsonNullableWithAggregatesFilterBase<$PrismaModel>>, 'path'>>,
        Required<JsonNullableWithAggregatesFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<JsonNullableWithAggregatesFilterBase<$PrismaModel>>, 'path'>>

  export type JsonNullableWithAggregatesFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedJsonNullableFilter<$PrismaModel>
    _max?: NestedJsonNullableFilter<$PrismaModel>
  }

  export type EnumViolationStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.ViolationStatus | EnumViolationStatusFieldRefInput<$PrismaModel>
    in?: $Enums.ViolationStatus[] | ListEnumViolationStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.ViolationStatus[] | ListEnumViolationStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumViolationStatusWithAggregatesFilter<$PrismaModel> | $Enums.ViolationStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumViolationStatusFilter<$PrismaModel>
    _max?: NestedEnumViolationStatusFilter<$PrismaModel>
  }

  export type DateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type EnumAppealStatusNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.AppealStatus | EnumAppealStatusFieldRefInput<$PrismaModel> | null
    in?: $Enums.AppealStatus[] | ListEnumAppealStatusFieldRefInput<$PrismaModel> | null
    notIn?: $Enums.AppealStatus[] | ListEnumAppealStatusFieldRefInput<$PrismaModel> | null
    not?: NestedEnumAppealStatusNullableWithAggregatesFilter<$PrismaModel> | $Enums.AppealStatus | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedEnumAppealStatusNullableFilter<$PrismaModel>
    _max?: NestedEnumAppealStatusNullableFilter<$PrismaModel>
  }

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type EnumApprovalActionFilter<$PrismaModel = never> = {
    equals?: $Enums.ApprovalAction | EnumApprovalActionFieldRefInput<$PrismaModel>
    in?: $Enums.ApprovalAction[] | ListEnumApprovalActionFieldRefInput<$PrismaModel>
    notIn?: $Enums.ApprovalAction[] | ListEnumApprovalActionFieldRefInput<$PrismaModel>
    not?: NestedEnumApprovalActionFilter<$PrismaModel> | $Enums.ApprovalAction
  }

  export type ViolationRelationFilter = {
    is?: ViolationWhereInput
    isNot?: ViolationWhereInput
  }

  export type ViolationApprovalHistoryCountOrderByAggregateInput = {
    id?: SortOrder
    violationId?: SortOrder
    action?: SortOrder
    fromStatus?: SortOrder
    toStatus?: SortOrder
    approverUserId?: SortOrder
    approverName?: SortOrder
    approverRole?: SortOrder
    notes?: SortOrder
    actionDate?: SortOrder
  }

  export type ViolationApprovalHistoryMaxOrderByAggregateInput = {
    id?: SortOrder
    violationId?: SortOrder
    action?: SortOrder
    fromStatus?: SortOrder
    toStatus?: SortOrder
    approverUserId?: SortOrder
    approverName?: SortOrder
    approverRole?: SortOrder
    notes?: SortOrder
    actionDate?: SortOrder
  }

  export type ViolationApprovalHistoryMinOrderByAggregateInput = {
    id?: SortOrder
    violationId?: SortOrder
    action?: SortOrder
    fromStatus?: SortOrder
    toStatus?: SortOrder
    approverUserId?: SortOrder
    approverName?: SortOrder
    approverRole?: SortOrder
    notes?: SortOrder
    actionDate?: SortOrder
  }

  export type EnumApprovalActionWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.ApprovalAction | EnumApprovalActionFieldRefInput<$PrismaModel>
    in?: $Enums.ApprovalAction[] | ListEnumApprovalActionFieldRefInput<$PrismaModel>
    notIn?: $Enums.ApprovalAction[] | ListEnumApprovalActionFieldRefInput<$PrismaModel>
    not?: NestedEnumApprovalActionWithAggregatesFilter<$PrismaModel> | $Enums.ApprovalAction
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumApprovalActionFilter<$PrismaModel>
    _max?: NestedEnumApprovalActionFilter<$PrismaModel>
  }

  export type ViolationStatisticsStudentIdAcademicYearSemesterCompoundUniqueInput = {
    studentId: string
    academicYear: string
    semester: number
  }

  export type ViolationStatisticsCountOrderByAggregateInput = {
    id?: SortOrder
    studentId?: SortOrder
    studentName?: SortOrder
    classId?: SortOrder
    className?: SortOrder
    totalViolations?: SortOrder
    pendingCount?: SortOrder
    approvedCount?: SortOrder
    rejectedCount?: SortOrder
    appealedCount?: SortOrder
    totalPoints?: SortOrder
    ringanCount?: SortOrder
    sedangCount?: SortOrder
    beratCount?: SortOrder
    academicYear?: SortOrder
    semester?: SortOrder
    isRepeatOffender?: SortOrder
    lastViolationDate?: SortOrder
    updatedAt?: SortOrder
  }

  export type ViolationStatisticsAvgOrderByAggregateInput = {
    totalViolations?: SortOrder
    pendingCount?: SortOrder
    approvedCount?: SortOrder
    rejectedCount?: SortOrder
    appealedCount?: SortOrder
    totalPoints?: SortOrder
    ringanCount?: SortOrder
    sedangCount?: SortOrder
    beratCount?: SortOrder
    semester?: SortOrder
  }

  export type ViolationStatisticsMaxOrderByAggregateInput = {
    id?: SortOrder
    studentId?: SortOrder
    studentName?: SortOrder
    classId?: SortOrder
    className?: SortOrder
    totalViolations?: SortOrder
    pendingCount?: SortOrder
    approvedCount?: SortOrder
    rejectedCount?: SortOrder
    appealedCount?: SortOrder
    totalPoints?: SortOrder
    ringanCount?: SortOrder
    sedangCount?: SortOrder
    beratCount?: SortOrder
    academicYear?: SortOrder
    semester?: SortOrder
    isRepeatOffender?: SortOrder
    lastViolationDate?: SortOrder
    updatedAt?: SortOrder
  }

  export type ViolationStatisticsMinOrderByAggregateInput = {
    id?: SortOrder
    studentId?: SortOrder
    studentName?: SortOrder
    classId?: SortOrder
    className?: SortOrder
    totalViolations?: SortOrder
    pendingCount?: SortOrder
    approvedCount?: SortOrder
    rejectedCount?: SortOrder
    appealedCount?: SortOrder
    totalPoints?: SortOrder
    ringanCount?: SortOrder
    sedangCount?: SortOrder
    beratCount?: SortOrder
    academicYear?: SortOrder
    semester?: SortOrder
    isRepeatOffender?: SortOrder
    lastViolationDate?: SortOrder
    updatedAt?: SortOrder
  }

  export type ViolationStatisticsSumOrderByAggregateInput = {
    totalViolations?: SortOrder
    pendingCount?: SortOrder
    approvedCount?: SortOrder
    rejectedCount?: SortOrder
    appealedCount?: SortOrder
    totalPoints?: SortOrder
    ringanCount?: SortOrder
    sedangCount?: SortOrder
    beratCount?: SortOrder
    semester?: SortOrder
  }

  export type ViolationApprovalHistoryCreateNestedManyWithoutViolationInput = {
    create?: XOR<ViolationApprovalHistoryCreateWithoutViolationInput, ViolationApprovalHistoryUncheckedCreateWithoutViolationInput> | ViolationApprovalHistoryCreateWithoutViolationInput[] | ViolationApprovalHistoryUncheckedCreateWithoutViolationInput[]
    connectOrCreate?: ViolationApprovalHistoryCreateOrConnectWithoutViolationInput | ViolationApprovalHistoryCreateOrConnectWithoutViolationInput[]
    createMany?: ViolationApprovalHistoryCreateManyViolationInputEnvelope
    connect?: ViolationApprovalHistoryWhereUniqueInput | ViolationApprovalHistoryWhereUniqueInput[]
  }

  export type ViolationApprovalHistoryUncheckedCreateNestedManyWithoutViolationInput = {
    create?: XOR<ViolationApprovalHistoryCreateWithoutViolationInput, ViolationApprovalHistoryUncheckedCreateWithoutViolationInput> | ViolationApprovalHistoryCreateWithoutViolationInput[] | ViolationApprovalHistoryUncheckedCreateWithoutViolationInput[]
    connectOrCreate?: ViolationApprovalHistoryCreateOrConnectWithoutViolationInput | ViolationApprovalHistoryCreateOrConnectWithoutViolationInput[]
    createMany?: ViolationApprovalHistoryCreateManyViolationInputEnvelope
    connect?: ViolationApprovalHistoryWhereUniqueInput | ViolationApprovalHistoryWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type EnumViolationSeverityFieldUpdateOperationsInput = {
    set?: $Enums.ViolationSeverity
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type EnumViolationStatusFieldUpdateOperationsInput = {
    set?: $Enums.ViolationStatus
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
  }

  export type NullableEnumAppealStatusFieldUpdateOperationsInput = {
    set?: $Enums.AppealStatus | null
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type ViolationApprovalHistoryUpdateManyWithoutViolationNestedInput = {
    create?: XOR<ViolationApprovalHistoryCreateWithoutViolationInput, ViolationApprovalHistoryUncheckedCreateWithoutViolationInput> | ViolationApprovalHistoryCreateWithoutViolationInput[] | ViolationApprovalHistoryUncheckedCreateWithoutViolationInput[]
    connectOrCreate?: ViolationApprovalHistoryCreateOrConnectWithoutViolationInput | ViolationApprovalHistoryCreateOrConnectWithoutViolationInput[]
    upsert?: ViolationApprovalHistoryUpsertWithWhereUniqueWithoutViolationInput | ViolationApprovalHistoryUpsertWithWhereUniqueWithoutViolationInput[]
    createMany?: ViolationApprovalHistoryCreateManyViolationInputEnvelope
    set?: ViolationApprovalHistoryWhereUniqueInput | ViolationApprovalHistoryWhereUniqueInput[]
    disconnect?: ViolationApprovalHistoryWhereUniqueInput | ViolationApprovalHistoryWhereUniqueInput[]
    delete?: ViolationApprovalHistoryWhereUniqueInput | ViolationApprovalHistoryWhereUniqueInput[]
    connect?: ViolationApprovalHistoryWhereUniqueInput | ViolationApprovalHistoryWhereUniqueInput[]
    update?: ViolationApprovalHistoryUpdateWithWhereUniqueWithoutViolationInput | ViolationApprovalHistoryUpdateWithWhereUniqueWithoutViolationInput[]
    updateMany?: ViolationApprovalHistoryUpdateManyWithWhereWithoutViolationInput | ViolationApprovalHistoryUpdateManyWithWhereWithoutViolationInput[]
    deleteMany?: ViolationApprovalHistoryScalarWhereInput | ViolationApprovalHistoryScalarWhereInput[]
  }

  export type ViolationApprovalHistoryUncheckedUpdateManyWithoutViolationNestedInput = {
    create?: XOR<ViolationApprovalHistoryCreateWithoutViolationInput, ViolationApprovalHistoryUncheckedCreateWithoutViolationInput> | ViolationApprovalHistoryCreateWithoutViolationInput[] | ViolationApprovalHistoryUncheckedCreateWithoutViolationInput[]
    connectOrCreate?: ViolationApprovalHistoryCreateOrConnectWithoutViolationInput | ViolationApprovalHistoryCreateOrConnectWithoutViolationInput[]
    upsert?: ViolationApprovalHistoryUpsertWithWhereUniqueWithoutViolationInput | ViolationApprovalHistoryUpsertWithWhereUniqueWithoutViolationInput[]
    createMany?: ViolationApprovalHistoryCreateManyViolationInputEnvelope
    set?: ViolationApprovalHistoryWhereUniqueInput | ViolationApprovalHistoryWhereUniqueInput[]
    disconnect?: ViolationApprovalHistoryWhereUniqueInput | ViolationApprovalHistoryWhereUniqueInput[]
    delete?: ViolationApprovalHistoryWhereUniqueInput | ViolationApprovalHistoryWhereUniqueInput[]
    connect?: ViolationApprovalHistoryWhereUniqueInput | ViolationApprovalHistoryWhereUniqueInput[]
    update?: ViolationApprovalHistoryUpdateWithWhereUniqueWithoutViolationInput | ViolationApprovalHistoryUpdateWithWhereUniqueWithoutViolationInput[]
    updateMany?: ViolationApprovalHistoryUpdateManyWithWhereWithoutViolationInput | ViolationApprovalHistoryUpdateManyWithWhereWithoutViolationInput[]
    deleteMany?: ViolationApprovalHistoryScalarWhereInput | ViolationApprovalHistoryScalarWhereInput[]
  }

  export type ViolationCreateNestedOneWithoutApprovalHistoryInput = {
    create?: XOR<ViolationCreateWithoutApprovalHistoryInput, ViolationUncheckedCreateWithoutApprovalHistoryInput>
    connectOrCreate?: ViolationCreateOrConnectWithoutApprovalHistoryInput
    connect?: ViolationWhereUniqueInput
  }

  export type EnumApprovalActionFieldUpdateOperationsInput = {
    set?: $Enums.ApprovalAction
  }

  export type ViolationUpdateOneRequiredWithoutApprovalHistoryNestedInput = {
    create?: XOR<ViolationCreateWithoutApprovalHistoryInput, ViolationUncheckedCreateWithoutApprovalHistoryInput>
    connectOrCreate?: ViolationCreateOrConnectWithoutApprovalHistoryInput
    upsert?: ViolationUpsertWithoutApprovalHistoryInput
    connect?: ViolationWhereUniqueInput
    update?: XOR<XOR<ViolationUpdateToOneWithWhereWithoutApprovalHistoryInput, ViolationUpdateWithoutApprovalHistoryInput>, ViolationUncheckedUpdateWithoutApprovalHistoryInput>
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

  export type NestedEnumViolationSeverityFilter<$PrismaModel = never> = {
    equals?: $Enums.ViolationSeverity | EnumViolationSeverityFieldRefInput<$PrismaModel>
    in?: $Enums.ViolationSeverity[] | ListEnumViolationSeverityFieldRefInput<$PrismaModel>
    notIn?: $Enums.ViolationSeverity[] | ListEnumViolationSeverityFieldRefInput<$PrismaModel>
    not?: NestedEnumViolationSeverityFilter<$PrismaModel> | $Enums.ViolationSeverity
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
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

  export type NestedEnumViolationStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.ViolationStatus | EnumViolationStatusFieldRefInput<$PrismaModel>
    in?: $Enums.ViolationStatus[] | ListEnumViolationStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.ViolationStatus[] | ListEnumViolationStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumViolationStatusFilter<$PrismaModel> | $Enums.ViolationStatus
  }

  export type NestedDateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type NestedEnumAppealStatusNullableFilter<$PrismaModel = never> = {
    equals?: $Enums.AppealStatus | EnumAppealStatusFieldRefInput<$PrismaModel> | null
    in?: $Enums.AppealStatus[] | ListEnumAppealStatusFieldRefInput<$PrismaModel> | null
    notIn?: $Enums.AppealStatus[] | ListEnumAppealStatusFieldRefInput<$PrismaModel> | null
    not?: NestedEnumAppealStatusNullableFilter<$PrismaModel> | $Enums.AppealStatus | null
  }

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
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

  export type NestedEnumViolationSeverityWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.ViolationSeverity | EnumViolationSeverityFieldRefInput<$PrismaModel>
    in?: $Enums.ViolationSeverity[] | ListEnumViolationSeverityFieldRefInput<$PrismaModel>
    notIn?: $Enums.ViolationSeverity[] | ListEnumViolationSeverityFieldRefInput<$PrismaModel>
    not?: NestedEnumViolationSeverityWithAggregatesFilter<$PrismaModel> | $Enums.ViolationSeverity
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumViolationSeverityFilter<$PrismaModel>
    _max?: NestedEnumViolationSeverityFilter<$PrismaModel>
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
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
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
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
  export type NestedJsonNullableFilter<$PrismaModel = never> = 
    | PatchUndefined<
        Either<Required<NestedJsonNullableFilterBase<$PrismaModel>>, Exclude<keyof Required<NestedJsonNullableFilterBase<$PrismaModel>>, 'path'>>,
        Required<NestedJsonNullableFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<NestedJsonNullableFilterBase<$PrismaModel>>, 'path'>>

  export type NestedJsonNullableFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
  }

  export type NestedEnumViolationStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.ViolationStatus | EnumViolationStatusFieldRefInput<$PrismaModel>
    in?: $Enums.ViolationStatus[] | ListEnumViolationStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.ViolationStatus[] | ListEnumViolationStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumViolationStatusWithAggregatesFilter<$PrismaModel> | $Enums.ViolationStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumViolationStatusFilter<$PrismaModel>
    _max?: NestedEnumViolationStatusFilter<$PrismaModel>
  }

  export type NestedDateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type NestedEnumAppealStatusNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.AppealStatus | EnumAppealStatusFieldRefInput<$PrismaModel> | null
    in?: $Enums.AppealStatus[] | ListEnumAppealStatusFieldRefInput<$PrismaModel> | null
    notIn?: $Enums.AppealStatus[] | ListEnumAppealStatusFieldRefInput<$PrismaModel> | null
    not?: NestedEnumAppealStatusNullableWithAggregatesFilter<$PrismaModel> | $Enums.AppealStatus | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedEnumAppealStatusNullableFilter<$PrismaModel>
    _max?: NestedEnumAppealStatusNullableFilter<$PrismaModel>
  }

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type NestedEnumApprovalActionFilter<$PrismaModel = never> = {
    equals?: $Enums.ApprovalAction | EnumApprovalActionFieldRefInput<$PrismaModel>
    in?: $Enums.ApprovalAction[] | ListEnumApprovalActionFieldRefInput<$PrismaModel>
    notIn?: $Enums.ApprovalAction[] | ListEnumApprovalActionFieldRefInput<$PrismaModel>
    not?: NestedEnumApprovalActionFilter<$PrismaModel> | $Enums.ApprovalAction
  }

  export type NestedEnumApprovalActionWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.ApprovalAction | EnumApprovalActionFieldRefInput<$PrismaModel>
    in?: $Enums.ApprovalAction[] | ListEnumApprovalActionFieldRefInput<$PrismaModel>
    notIn?: $Enums.ApprovalAction[] | ListEnumApprovalActionFieldRefInput<$PrismaModel>
    not?: NestedEnumApprovalActionWithAggregatesFilter<$PrismaModel> | $Enums.ApprovalAction
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumApprovalActionFilter<$PrismaModel>
    _max?: NestedEnumApprovalActionFilter<$PrismaModel>
  }

  export type ViolationApprovalHistoryCreateWithoutViolationInput = {
    id?: string
    action: $Enums.ApprovalAction
    fromStatus: $Enums.ViolationStatus
    toStatus: $Enums.ViolationStatus
    approverUserId: string
    approverName: string
    approverRole: string
    notes?: string | null
    actionDate?: Date | string
  }

  export type ViolationApprovalHistoryUncheckedCreateWithoutViolationInput = {
    id?: string
    action: $Enums.ApprovalAction
    fromStatus: $Enums.ViolationStatus
    toStatus: $Enums.ViolationStatus
    approverUserId: string
    approverName: string
    approverRole: string
    notes?: string | null
    actionDate?: Date | string
  }

  export type ViolationApprovalHistoryCreateOrConnectWithoutViolationInput = {
    where: ViolationApprovalHistoryWhereUniqueInput
    create: XOR<ViolationApprovalHistoryCreateWithoutViolationInput, ViolationApprovalHistoryUncheckedCreateWithoutViolationInput>
  }

  export type ViolationApprovalHistoryCreateManyViolationInputEnvelope = {
    data: ViolationApprovalHistoryCreateManyViolationInput | ViolationApprovalHistoryCreateManyViolationInput[]
    skipDuplicates?: boolean
  }

  export type ViolationApprovalHistoryUpsertWithWhereUniqueWithoutViolationInput = {
    where: ViolationApprovalHistoryWhereUniqueInput
    update: XOR<ViolationApprovalHistoryUpdateWithoutViolationInput, ViolationApprovalHistoryUncheckedUpdateWithoutViolationInput>
    create: XOR<ViolationApprovalHistoryCreateWithoutViolationInput, ViolationApprovalHistoryUncheckedCreateWithoutViolationInput>
  }

  export type ViolationApprovalHistoryUpdateWithWhereUniqueWithoutViolationInput = {
    where: ViolationApprovalHistoryWhereUniqueInput
    data: XOR<ViolationApprovalHistoryUpdateWithoutViolationInput, ViolationApprovalHistoryUncheckedUpdateWithoutViolationInput>
  }

  export type ViolationApprovalHistoryUpdateManyWithWhereWithoutViolationInput = {
    where: ViolationApprovalHistoryScalarWhereInput
    data: XOR<ViolationApprovalHistoryUpdateManyMutationInput, ViolationApprovalHistoryUncheckedUpdateManyWithoutViolationInput>
  }

  export type ViolationApprovalHistoryScalarWhereInput = {
    AND?: ViolationApprovalHistoryScalarWhereInput | ViolationApprovalHistoryScalarWhereInput[]
    OR?: ViolationApprovalHistoryScalarWhereInput[]
    NOT?: ViolationApprovalHistoryScalarWhereInput | ViolationApprovalHistoryScalarWhereInput[]
    id?: StringFilter<"ViolationApprovalHistory"> | string
    violationId?: StringFilter<"ViolationApprovalHistory"> | string
    action?: EnumApprovalActionFilter<"ViolationApprovalHistory"> | $Enums.ApprovalAction
    fromStatus?: EnumViolationStatusFilter<"ViolationApprovalHistory"> | $Enums.ViolationStatus
    toStatus?: EnumViolationStatusFilter<"ViolationApprovalHistory"> | $Enums.ViolationStatus
    approverUserId?: StringFilter<"ViolationApprovalHistory"> | string
    approverName?: StringFilter<"ViolationApprovalHistory"> | string
    approverRole?: StringFilter<"ViolationApprovalHistory"> | string
    notes?: StringNullableFilter<"ViolationApprovalHistory"> | string | null
    actionDate?: DateTimeFilter<"ViolationApprovalHistory"> | Date | string
  }

  export type ViolationCreateWithoutApprovalHistoryInput = {
    id?: string
    studentId: string
    studentNisn: string
    studentName: string
    studentClass: string
    reportedBy: string
    reportedByName: string
    reporterRole: string
    categoryId: string
    categoryCode: string
    categoryName: string
    categorySeverity: $Enums.ViolationSeverity
    description: string
    location?: string | null
    violationDate: Date | string
    violationTime?: string | null
    points: number
    evidenceUrls?: NullableJsonNullValueInput | InputJsonValue
    witnessName?: string | null
    witnessStatement?: string | null
    status?: $Enums.ViolationStatus
    approvedByWaliAt?: Date | string | null
    approvedByWaliBy?: string | null
    approvedByWaliName?: string | null
    waliKelasNotes?: string | null
    approvedByBKAt?: Date | string | null
    approvedByBKBy?: string | null
    approvedByBKName?: string | null
    bkNotes?: string | null
    rejectedAt?: Date | string | null
    rejectedBy?: string | null
    rejectedByName?: string | null
    rejectionReason?: string | null
    rejectionLevel?: string | null
    appealReason?: string | null
    appealedAt?: Date | string | null
    appealedBy?: string | null
    appealReviewedAt?: Date | string | null
    appealReviewedBy?: string | null
    appealStatus?: $Enums.AppealStatus | null
    appealNotes?: string | null
    sanction?: string | null
    sanctionStartDate?: Date | string | null
    sanctionEndDate?: Date | string | null
    sanctionCompleted?: boolean
    academicYear: string
    semester: number
    notificationSent?: boolean
    notificationSentAt?: Date | string | null
    isActive?: boolean
    createdBy: string
    createdAt?: Date | string
    updatedBy?: string | null
    updatedAt?: Date | string
    deletedAt?: Date | string | null
    deletedBy?: string | null
  }

  export type ViolationUncheckedCreateWithoutApprovalHistoryInput = {
    id?: string
    studentId: string
    studentNisn: string
    studentName: string
    studentClass: string
    reportedBy: string
    reportedByName: string
    reporterRole: string
    categoryId: string
    categoryCode: string
    categoryName: string
    categorySeverity: $Enums.ViolationSeverity
    description: string
    location?: string | null
    violationDate: Date | string
    violationTime?: string | null
    points: number
    evidenceUrls?: NullableJsonNullValueInput | InputJsonValue
    witnessName?: string | null
    witnessStatement?: string | null
    status?: $Enums.ViolationStatus
    approvedByWaliAt?: Date | string | null
    approvedByWaliBy?: string | null
    approvedByWaliName?: string | null
    waliKelasNotes?: string | null
    approvedByBKAt?: Date | string | null
    approvedByBKBy?: string | null
    approvedByBKName?: string | null
    bkNotes?: string | null
    rejectedAt?: Date | string | null
    rejectedBy?: string | null
    rejectedByName?: string | null
    rejectionReason?: string | null
    rejectionLevel?: string | null
    appealReason?: string | null
    appealedAt?: Date | string | null
    appealedBy?: string | null
    appealReviewedAt?: Date | string | null
    appealReviewedBy?: string | null
    appealStatus?: $Enums.AppealStatus | null
    appealNotes?: string | null
    sanction?: string | null
    sanctionStartDate?: Date | string | null
    sanctionEndDate?: Date | string | null
    sanctionCompleted?: boolean
    academicYear: string
    semester: number
    notificationSent?: boolean
    notificationSentAt?: Date | string | null
    isActive?: boolean
    createdBy: string
    createdAt?: Date | string
    updatedBy?: string | null
    updatedAt?: Date | string
    deletedAt?: Date | string | null
    deletedBy?: string | null
  }

  export type ViolationCreateOrConnectWithoutApprovalHistoryInput = {
    where: ViolationWhereUniqueInput
    create: XOR<ViolationCreateWithoutApprovalHistoryInput, ViolationUncheckedCreateWithoutApprovalHistoryInput>
  }

  export type ViolationUpsertWithoutApprovalHistoryInput = {
    update: XOR<ViolationUpdateWithoutApprovalHistoryInput, ViolationUncheckedUpdateWithoutApprovalHistoryInput>
    create: XOR<ViolationCreateWithoutApprovalHistoryInput, ViolationUncheckedCreateWithoutApprovalHistoryInput>
    where?: ViolationWhereInput
  }

  export type ViolationUpdateToOneWithWhereWithoutApprovalHistoryInput = {
    where?: ViolationWhereInput
    data: XOR<ViolationUpdateWithoutApprovalHistoryInput, ViolationUncheckedUpdateWithoutApprovalHistoryInput>
  }

  export type ViolationUpdateWithoutApprovalHistoryInput = {
    id?: StringFieldUpdateOperationsInput | string
    studentId?: StringFieldUpdateOperationsInput | string
    studentNisn?: StringFieldUpdateOperationsInput | string
    studentName?: StringFieldUpdateOperationsInput | string
    studentClass?: StringFieldUpdateOperationsInput | string
    reportedBy?: StringFieldUpdateOperationsInput | string
    reportedByName?: StringFieldUpdateOperationsInput | string
    reporterRole?: StringFieldUpdateOperationsInput | string
    categoryId?: StringFieldUpdateOperationsInput | string
    categoryCode?: StringFieldUpdateOperationsInput | string
    categoryName?: StringFieldUpdateOperationsInput | string
    categorySeverity?: EnumViolationSeverityFieldUpdateOperationsInput | $Enums.ViolationSeverity
    description?: StringFieldUpdateOperationsInput | string
    location?: NullableStringFieldUpdateOperationsInput | string | null
    violationDate?: DateTimeFieldUpdateOperationsInput | Date | string
    violationTime?: NullableStringFieldUpdateOperationsInput | string | null
    points?: IntFieldUpdateOperationsInput | number
    evidenceUrls?: NullableJsonNullValueInput | InputJsonValue
    witnessName?: NullableStringFieldUpdateOperationsInput | string | null
    witnessStatement?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumViolationStatusFieldUpdateOperationsInput | $Enums.ViolationStatus
    approvedByWaliAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    approvedByWaliBy?: NullableStringFieldUpdateOperationsInput | string | null
    approvedByWaliName?: NullableStringFieldUpdateOperationsInput | string | null
    waliKelasNotes?: NullableStringFieldUpdateOperationsInput | string | null
    approvedByBKAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    approvedByBKBy?: NullableStringFieldUpdateOperationsInput | string | null
    approvedByBKName?: NullableStringFieldUpdateOperationsInput | string | null
    bkNotes?: NullableStringFieldUpdateOperationsInput | string | null
    rejectedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    rejectedBy?: NullableStringFieldUpdateOperationsInput | string | null
    rejectedByName?: NullableStringFieldUpdateOperationsInput | string | null
    rejectionReason?: NullableStringFieldUpdateOperationsInput | string | null
    rejectionLevel?: NullableStringFieldUpdateOperationsInput | string | null
    appealReason?: NullableStringFieldUpdateOperationsInput | string | null
    appealedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    appealedBy?: NullableStringFieldUpdateOperationsInput | string | null
    appealReviewedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    appealReviewedBy?: NullableStringFieldUpdateOperationsInput | string | null
    appealStatus?: NullableEnumAppealStatusFieldUpdateOperationsInput | $Enums.AppealStatus | null
    appealNotes?: NullableStringFieldUpdateOperationsInput | string | null
    sanction?: NullableStringFieldUpdateOperationsInput | string | null
    sanctionStartDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    sanctionEndDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    sanctionCompleted?: BoolFieldUpdateOperationsInput | boolean
    academicYear?: StringFieldUpdateOperationsInput | string
    semester?: IntFieldUpdateOperationsInput | number
    notificationSent?: BoolFieldUpdateOperationsInput | boolean
    notificationSentAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdBy?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedBy?: NullableStringFieldUpdateOperationsInput | string | null
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deletedBy?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type ViolationUncheckedUpdateWithoutApprovalHistoryInput = {
    id?: StringFieldUpdateOperationsInput | string
    studentId?: StringFieldUpdateOperationsInput | string
    studentNisn?: StringFieldUpdateOperationsInput | string
    studentName?: StringFieldUpdateOperationsInput | string
    studentClass?: StringFieldUpdateOperationsInput | string
    reportedBy?: StringFieldUpdateOperationsInput | string
    reportedByName?: StringFieldUpdateOperationsInput | string
    reporterRole?: StringFieldUpdateOperationsInput | string
    categoryId?: StringFieldUpdateOperationsInput | string
    categoryCode?: StringFieldUpdateOperationsInput | string
    categoryName?: StringFieldUpdateOperationsInput | string
    categorySeverity?: EnumViolationSeverityFieldUpdateOperationsInput | $Enums.ViolationSeverity
    description?: StringFieldUpdateOperationsInput | string
    location?: NullableStringFieldUpdateOperationsInput | string | null
    violationDate?: DateTimeFieldUpdateOperationsInput | Date | string
    violationTime?: NullableStringFieldUpdateOperationsInput | string | null
    points?: IntFieldUpdateOperationsInput | number
    evidenceUrls?: NullableJsonNullValueInput | InputJsonValue
    witnessName?: NullableStringFieldUpdateOperationsInput | string | null
    witnessStatement?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumViolationStatusFieldUpdateOperationsInput | $Enums.ViolationStatus
    approvedByWaliAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    approvedByWaliBy?: NullableStringFieldUpdateOperationsInput | string | null
    approvedByWaliName?: NullableStringFieldUpdateOperationsInput | string | null
    waliKelasNotes?: NullableStringFieldUpdateOperationsInput | string | null
    approvedByBKAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    approvedByBKBy?: NullableStringFieldUpdateOperationsInput | string | null
    approvedByBKName?: NullableStringFieldUpdateOperationsInput | string | null
    bkNotes?: NullableStringFieldUpdateOperationsInput | string | null
    rejectedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    rejectedBy?: NullableStringFieldUpdateOperationsInput | string | null
    rejectedByName?: NullableStringFieldUpdateOperationsInput | string | null
    rejectionReason?: NullableStringFieldUpdateOperationsInput | string | null
    rejectionLevel?: NullableStringFieldUpdateOperationsInput | string | null
    appealReason?: NullableStringFieldUpdateOperationsInput | string | null
    appealedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    appealedBy?: NullableStringFieldUpdateOperationsInput | string | null
    appealReviewedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    appealReviewedBy?: NullableStringFieldUpdateOperationsInput | string | null
    appealStatus?: NullableEnumAppealStatusFieldUpdateOperationsInput | $Enums.AppealStatus | null
    appealNotes?: NullableStringFieldUpdateOperationsInput | string | null
    sanction?: NullableStringFieldUpdateOperationsInput | string | null
    sanctionStartDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    sanctionEndDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    sanctionCompleted?: BoolFieldUpdateOperationsInput | boolean
    academicYear?: StringFieldUpdateOperationsInput | string
    semester?: IntFieldUpdateOperationsInput | number
    notificationSent?: BoolFieldUpdateOperationsInput | boolean
    notificationSentAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdBy?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedBy?: NullableStringFieldUpdateOperationsInput | string | null
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deletedBy?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type ViolationApprovalHistoryCreateManyViolationInput = {
    id?: string
    action: $Enums.ApprovalAction
    fromStatus: $Enums.ViolationStatus
    toStatus: $Enums.ViolationStatus
    approverUserId: string
    approverName: string
    approverRole: string
    notes?: string | null
    actionDate?: Date | string
  }

  export type ViolationApprovalHistoryUpdateWithoutViolationInput = {
    id?: StringFieldUpdateOperationsInput | string
    action?: EnumApprovalActionFieldUpdateOperationsInput | $Enums.ApprovalAction
    fromStatus?: EnumViolationStatusFieldUpdateOperationsInput | $Enums.ViolationStatus
    toStatus?: EnumViolationStatusFieldUpdateOperationsInput | $Enums.ViolationStatus
    approverUserId?: StringFieldUpdateOperationsInput | string
    approverName?: StringFieldUpdateOperationsInput | string
    approverRole?: StringFieldUpdateOperationsInput | string
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    actionDate?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ViolationApprovalHistoryUncheckedUpdateWithoutViolationInput = {
    id?: StringFieldUpdateOperationsInput | string
    action?: EnumApprovalActionFieldUpdateOperationsInput | $Enums.ApprovalAction
    fromStatus?: EnumViolationStatusFieldUpdateOperationsInput | $Enums.ViolationStatus
    toStatus?: EnumViolationStatusFieldUpdateOperationsInput | $Enums.ViolationStatus
    approverUserId?: StringFieldUpdateOperationsInput | string
    approverName?: StringFieldUpdateOperationsInput | string
    approverRole?: StringFieldUpdateOperationsInput | string
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    actionDate?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ViolationApprovalHistoryUncheckedUpdateManyWithoutViolationInput = {
    id?: StringFieldUpdateOperationsInput | string
    action?: EnumApprovalActionFieldUpdateOperationsInput | $Enums.ApprovalAction
    fromStatus?: EnumViolationStatusFieldUpdateOperationsInput | $Enums.ViolationStatus
    toStatus?: EnumViolationStatusFieldUpdateOperationsInput | $Enums.ViolationStatus
    approverUserId?: StringFieldUpdateOperationsInput | string
    approverName?: StringFieldUpdateOperationsInput | string
    approverRole?: StringFieldUpdateOperationsInput | string
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    actionDate?: DateTimeFieldUpdateOperationsInput | Date | string
  }



  /**
   * Aliases for legacy arg types
   */
    /**
     * @deprecated Use ViolationCountOutputTypeDefaultArgs instead
     */
    export type ViolationCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = ViolationCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use ViolationDefaultArgs instead
     */
    export type ViolationArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = ViolationDefaultArgs<ExtArgs>
    /**
     * @deprecated Use ViolationApprovalHistoryDefaultArgs instead
     */
    export type ViolationApprovalHistoryArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = ViolationApprovalHistoryDefaultArgs<ExtArgs>
    /**
     * @deprecated Use ViolationStatisticsDefaultArgs instead
     */
    export type ViolationStatisticsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = ViolationStatisticsDefaultArgs<ExtArgs>

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