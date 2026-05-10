
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
 * Model Achievement
 * 
 */
export type Achievement = $Result.DefaultSelection<Prisma.$AchievementPayload>
/**
 * Model AchievementApprovalHistory
 * 
 */
export type AchievementApprovalHistory = $Result.DefaultSelection<Prisma.$AchievementApprovalHistoryPayload>
/**
 * Model AchievementStatistics
 * 
 */
export type AchievementStatistics = $Result.DefaultSelection<Prisma.$AchievementStatisticsPayload>
/**
 * Model HallOfFame
 * 
 */
export type HallOfFame = $Result.DefaultSelection<Prisma.$HallOfFamePayload>

/**
 * Enums
 */
export namespace $Enums {
  export const AchievementType: {
  ACADEMIC: 'ACADEMIC',
  NON_ACADEMIC: 'NON_ACADEMIC',
  SPORTS: 'SPORTS',
  ARTS: 'ARTS',
  SCIENCE: 'SCIENCE',
  TECHNOLOGY: 'TECHNOLOGY',
  LANGUAGE: 'LANGUAGE',
  RELIGIOUS: 'RELIGIOUS',
  SOCIAL: 'SOCIAL',
  OTHER: 'OTHER'
};

export type AchievementType = (typeof AchievementType)[keyof typeof AchievementType]


export const AchievementLevel: {
  SEKOLAH: 'SEKOLAH',
  KECAMATAN: 'KECAMATAN',
  KABUPATEN: 'KABUPATEN',
  PROVINSI: 'PROVINSI',
  NASIONAL: 'NASIONAL',
  INTERNASIONAL: 'INTERNASIONAL'
};

export type AchievementLevel = (typeof AchievementLevel)[keyof typeof AchievementLevel]


export const AchievementRank: {
  JUARA_1: 'JUARA_1',
  JUARA_2: 'JUARA_2',
  JUARA_3: 'JUARA_3',
  HARAPAN_1: 'HARAPAN_1',
  HARAPAN_2: 'HARAPAN_2',
  HARAPAN_3: 'HARAPAN_3',
  FINALIS: 'FINALIS',
  PESERTA: 'PESERTA',
  LULUS_SELEKSI: 'LULUS_SELEKSI'
};

export type AchievementRank = (typeof AchievementRank)[keyof typeof AchievementRank]


export const AchievementStatus: {
  PENDING: 'PENDING',
  APPROVED_WALI: 'APPROVED_WALI',
  APPROVED_BK: 'APPROVED_BK',
  REJECTED: 'REJECTED'
};

export type AchievementStatus = (typeof AchievementStatus)[keyof typeof AchievementStatus]


export const ApprovalAction: {
  SUBMIT: 'SUBMIT',
  APPROVE: 'APPROVE',
  REJECT: 'REJECT',
  UPDATE: 'UPDATE',
  DELETE: 'DELETE',
  PUBLISH: 'PUBLISH',
  FEATURE: 'FEATURE'
};

export type ApprovalAction = (typeof ApprovalAction)[keyof typeof ApprovalAction]

}

export type AchievementType = $Enums.AchievementType

export const AchievementType: typeof $Enums.AchievementType

export type AchievementLevel = $Enums.AchievementLevel

export const AchievementLevel: typeof $Enums.AchievementLevel

export type AchievementRank = $Enums.AchievementRank

export const AchievementRank: typeof $Enums.AchievementRank

export type AchievementStatus = $Enums.AchievementStatus

export const AchievementStatus: typeof $Enums.AchievementStatus

export type ApprovalAction = $Enums.ApprovalAction

export const ApprovalAction: typeof $Enums.ApprovalAction

/**
 * ##  Prisma Client ʲˢ
 * 
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Achievements
 * const achievements = await prisma.achievement.findMany()
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
   * // Fetch zero or more Achievements
   * const achievements = await prisma.achievement.findMany()
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
   * `prisma.achievement`: Exposes CRUD operations for the **Achievement** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Achievements
    * const achievements = await prisma.achievement.findMany()
    * ```
    */
  get achievement(): Prisma.AchievementDelegate<ExtArgs>;

  /**
   * `prisma.achievementApprovalHistory`: Exposes CRUD operations for the **AchievementApprovalHistory** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more AchievementApprovalHistories
    * const achievementApprovalHistories = await prisma.achievementApprovalHistory.findMany()
    * ```
    */
  get achievementApprovalHistory(): Prisma.AchievementApprovalHistoryDelegate<ExtArgs>;

  /**
   * `prisma.achievementStatistics`: Exposes CRUD operations for the **AchievementStatistics** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more AchievementStatistics
    * const achievementStatistics = await prisma.achievementStatistics.findMany()
    * ```
    */
  get achievementStatistics(): Prisma.AchievementStatisticsDelegate<ExtArgs>;

  /**
   * `prisma.hallOfFame`: Exposes CRUD operations for the **HallOfFame** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more HallOfFames
    * const hallOfFames = await prisma.hallOfFame.findMany()
    * ```
    */
  get hallOfFame(): Prisma.HallOfFameDelegate<ExtArgs>;
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
    Achievement: 'Achievement',
    AchievementApprovalHistory: 'AchievementApprovalHistory',
    AchievementStatistics: 'AchievementStatistics',
    HallOfFame: 'HallOfFame'
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
      modelProps: "achievement" | "achievementApprovalHistory" | "achievementStatistics" | "hallOfFame"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      Achievement: {
        payload: Prisma.$AchievementPayload<ExtArgs>
        fields: Prisma.AchievementFieldRefs
        operations: {
          findUnique: {
            args: Prisma.AchievementFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AchievementPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.AchievementFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AchievementPayload>
          }
          findFirst: {
            args: Prisma.AchievementFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AchievementPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.AchievementFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AchievementPayload>
          }
          findMany: {
            args: Prisma.AchievementFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AchievementPayload>[]
          }
          create: {
            args: Prisma.AchievementCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AchievementPayload>
          }
          createMany: {
            args: Prisma.AchievementCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.AchievementCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AchievementPayload>[]
          }
          delete: {
            args: Prisma.AchievementDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AchievementPayload>
          }
          update: {
            args: Prisma.AchievementUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AchievementPayload>
          }
          deleteMany: {
            args: Prisma.AchievementDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.AchievementUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.AchievementUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AchievementPayload>
          }
          aggregate: {
            args: Prisma.AchievementAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateAchievement>
          }
          groupBy: {
            args: Prisma.AchievementGroupByArgs<ExtArgs>
            result: $Utils.Optional<AchievementGroupByOutputType>[]
          }
          count: {
            args: Prisma.AchievementCountArgs<ExtArgs>
            result: $Utils.Optional<AchievementCountAggregateOutputType> | number
          }
        }
      }
      AchievementApprovalHistory: {
        payload: Prisma.$AchievementApprovalHistoryPayload<ExtArgs>
        fields: Prisma.AchievementApprovalHistoryFieldRefs
        operations: {
          findUnique: {
            args: Prisma.AchievementApprovalHistoryFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AchievementApprovalHistoryPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.AchievementApprovalHistoryFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AchievementApprovalHistoryPayload>
          }
          findFirst: {
            args: Prisma.AchievementApprovalHistoryFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AchievementApprovalHistoryPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.AchievementApprovalHistoryFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AchievementApprovalHistoryPayload>
          }
          findMany: {
            args: Prisma.AchievementApprovalHistoryFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AchievementApprovalHistoryPayload>[]
          }
          create: {
            args: Prisma.AchievementApprovalHistoryCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AchievementApprovalHistoryPayload>
          }
          createMany: {
            args: Prisma.AchievementApprovalHistoryCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.AchievementApprovalHistoryCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AchievementApprovalHistoryPayload>[]
          }
          delete: {
            args: Prisma.AchievementApprovalHistoryDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AchievementApprovalHistoryPayload>
          }
          update: {
            args: Prisma.AchievementApprovalHistoryUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AchievementApprovalHistoryPayload>
          }
          deleteMany: {
            args: Prisma.AchievementApprovalHistoryDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.AchievementApprovalHistoryUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.AchievementApprovalHistoryUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AchievementApprovalHistoryPayload>
          }
          aggregate: {
            args: Prisma.AchievementApprovalHistoryAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateAchievementApprovalHistory>
          }
          groupBy: {
            args: Prisma.AchievementApprovalHistoryGroupByArgs<ExtArgs>
            result: $Utils.Optional<AchievementApprovalHistoryGroupByOutputType>[]
          }
          count: {
            args: Prisma.AchievementApprovalHistoryCountArgs<ExtArgs>
            result: $Utils.Optional<AchievementApprovalHistoryCountAggregateOutputType> | number
          }
        }
      }
      AchievementStatistics: {
        payload: Prisma.$AchievementStatisticsPayload<ExtArgs>
        fields: Prisma.AchievementStatisticsFieldRefs
        operations: {
          findUnique: {
            args: Prisma.AchievementStatisticsFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AchievementStatisticsPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.AchievementStatisticsFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AchievementStatisticsPayload>
          }
          findFirst: {
            args: Prisma.AchievementStatisticsFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AchievementStatisticsPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.AchievementStatisticsFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AchievementStatisticsPayload>
          }
          findMany: {
            args: Prisma.AchievementStatisticsFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AchievementStatisticsPayload>[]
          }
          create: {
            args: Prisma.AchievementStatisticsCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AchievementStatisticsPayload>
          }
          createMany: {
            args: Prisma.AchievementStatisticsCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.AchievementStatisticsCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AchievementStatisticsPayload>[]
          }
          delete: {
            args: Prisma.AchievementStatisticsDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AchievementStatisticsPayload>
          }
          update: {
            args: Prisma.AchievementStatisticsUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AchievementStatisticsPayload>
          }
          deleteMany: {
            args: Prisma.AchievementStatisticsDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.AchievementStatisticsUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.AchievementStatisticsUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AchievementStatisticsPayload>
          }
          aggregate: {
            args: Prisma.AchievementStatisticsAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateAchievementStatistics>
          }
          groupBy: {
            args: Prisma.AchievementStatisticsGroupByArgs<ExtArgs>
            result: $Utils.Optional<AchievementStatisticsGroupByOutputType>[]
          }
          count: {
            args: Prisma.AchievementStatisticsCountArgs<ExtArgs>
            result: $Utils.Optional<AchievementStatisticsCountAggregateOutputType> | number
          }
        }
      }
      HallOfFame: {
        payload: Prisma.$HallOfFamePayload<ExtArgs>
        fields: Prisma.HallOfFameFieldRefs
        operations: {
          findUnique: {
            args: Prisma.HallOfFameFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HallOfFamePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.HallOfFameFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HallOfFamePayload>
          }
          findFirst: {
            args: Prisma.HallOfFameFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HallOfFamePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.HallOfFameFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HallOfFamePayload>
          }
          findMany: {
            args: Prisma.HallOfFameFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HallOfFamePayload>[]
          }
          create: {
            args: Prisma.HallOfFameCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HallOfFamePayload>
          }
          createMany: {
            args: Prisma.HallOfFameCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.HallOfFameCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HallOfFamePayload>[]
          }
          delete: {
            args: Prisma.HallOfFameDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HallOfFamePayload>
          }
          update: {
            args: Prisma.HallOfFameUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HallOfFamePayload>
          }
          deleteMany: {
            args: Prisma.HallOfFameDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.HallOfFameUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.HallOfFameUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HallOfFamePayload>
          }
          aggregate: {
            args: Prisma.HallOfFameAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateHallOfFame>
          }
          groupBy: {
            args: Prisma.HallOfFameGroupByArgs<ExtArgs>
            result: $Utils.Optional<HallOfFameGroupByOutputType>[]
          }
          count: {
            args: Prisma.HallOfFameCountArgs<ExtArgs>
            result: $Utils.Optional<HallOfFameCountAggregateOutputType> | number
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
   * Count Type AchievementCountOutputType
   */

  export type AchievementCountOutputType = {
    approvalHistory: number
  }

  export type AchievementCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    approvalHistory?: boolean | AchievementCountOutputTypeCountApprovalHistoryArgs
  }

  // Custom InputTypes
  /**
   * AchievementCountOutputType without action
   */
  export type AchievementCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AchievementCountOutputType
     */
    select?: AchievementCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * AchievementCountOutputType without action
   */
  export type AchievementCountOutputTypeCountApprovalHistoryArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AchievementApprovalHistoryWhereInput
  }


  /**
   * Models
   */

  /**
   * Model Achievement
   */

  export type AggregateAchievement = {
    _count: AchievementCountAggregateOutputType | null
    _avg: AchievementAvgAggregateOutputType | null
    _sum: AchievementSumAggregateOutputType | null
    _min: AchievementMinAggregateOutputType | null
    _max: AchievementMaxAggregateOutputType | null
  }

  export type AchievementAvgAggregateOutputType = {
    points: number | null
    basePoints: number | null
    levelMultiplier: number | null
    rankMultiplier: number | null
    semester: number | null
    viewCount: number | null
  }

  export type AchievementSumAggregateOutputType = {
    points: number | null
    basePoints: number | null
    levelMultiplier: number | null
    rankMultiplier: number | null
    semester: number | null
    viewCount: number | null
  }

  export type AchievementMinAggregateOutputType = {
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
    categoryType: $Enums.AchievementType | null
    title: string | null
    description: string | null
    achievementDate: Date | null
    location: string | null
    organizer: string | null
    level: $Enums.AchievementLevel | null
    rank: $Enums.AchievementRank | null
    isTeamAchievement: boolean | null
    teamName: string | null
    studentRole: string | null
    points: number | null
    basePoints: number | null
    levelMultiplier: number | null
    rankMultiplier: number | null
    certificateUrl: string | null
    status: $Enums.AchievementStatus | null
    approvedAt: Date | null
    approvedBy: string | null
    approvedByName: string | null
    bkNotes: string | null
    rejectedAt: Date | null
    rejectedBy: string | null
    rejectedByName: string | null
    rejectionReason: string | null
    isPublished: boolean | null
    publishedAt: Date | null
    isFeatured: boolean | null
    featuredUntil: Date | null
    academicYear: string | null
    semester: number | null
    notificationSent: boolean | null
    notificationSentAt: Date | null
    viewCount: number | null
    isActive: boolean | null
    createdBy: string | null
    createdAt: Date | null
    updatedBy: string | null
    updatedAt: Date | null
    deletedAt: Date | null
    deletedBy: string | null
  }

  export type AchievementMaxAggregateOutputType = {
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
    categoryType: $Enums.AchievementType | null
    title: string | null
    description: string | null
    achievementDate: Date | null
    location: string | null
    organizer: string | null
    level: $Enums.AchievementLevel | null
    rank: $Enums.AchievementRank | null
    isTeamAchievement: boolean | null
    teamName: string | null
    studentRole: string | null
    points: number | null
    basePoints: number | null
    levelMultiplier: number | null
    rankMultiplier: number | null
    certificateUrl: string | null
    status: $Enums.AchievementStatus | null
    approvedAt: Date | null
    approvedBy: string | null
    approvedByName: string | null
    bkNotes: string | null
    rejectedAt: Date | null
    rejectedBy: string | null
    rejectedByName: string | null
    rejectionReason: string | null
    isPublished: boolean | null
    publishedAt: Date | null
    isFeatured: boolean | null
    featuredUntil: Date | null
    academicYear: string | null
    semester: number | null
    notificationSent: boolean | null
    notificationSentAt: Date | null
    viewCount: number | null
    isActive: boolean | null
    createdBy: string | null
    createdAt: Date | null
    updatedBy: string | null
    updatedAt: Date | null
    deletedAt: Date | null
    deletedBy: string | null
  }

  export type AchievementCountAggregateOutputType = {
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
    categoryType: number
    title: number
    description: number
    achievementDate: number
    location: number
    organizer: number
    level: number
    rank: number
    isTeamAchievement: number
    teamName: number
    teamMembers: number
    studentRole: number
    points: number
    basePoints: number
    levelMultiplier: number
    rankMultiplier: number
    certificateUrl: number
    evidenceUrls: number
    photoUrls: number
    status: number
    approvedAt: number
    approvedBy: number
    approvedByName: number
    bkNotes: number
    rejectedAt: number
    rejectedBy: number
    rejectedByName: number
    rejectionReason: number
    isPublished: number
    publishedAt: number
    isFeatured: number
    featuredUntil: number
    academicYear: number
    semester: number
    notificationSent: number
    notificationSentAt: number
    viewCount: number
    isActive: number
    createdBy: number
    createdAt: number
    updatedBy: number
    updatedAt: number
    deletedAt: number
    deletedBy: number
    _all: number
  }


  export type AchievementAvgAggregateInputType = {
    points?: true
    basePoints?: true
    levelMultiplier?: true
    rankMultiplier?: true
    semester?: true
    viewCount?: true
  }

  export type AchievementSumAggregateInputType = {
    points?: true
    basePoints?: true
    levelMultiplier?: true
    rankMultiplier?: true
    semester?: true
    viewCount?: true
  }

  export type AchievementMinAggregateInputType = {
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
    categoryType?: true
    title?: true
    description?: true
    achievementDate?: true
    location?: true
    organizer?: true
    level?: true
    rank?: true
    isTeamAchievement?: true
    teamName?: true
    studentRole?: true
    points?: true
    basePoints?: true
    levelMultiplier?: true
    rankMultiplier?: true
    certificateUrl?: true
    status?: true
    approvedAt?: true
    approvedBy?: true
    approvedByName?: true
    bkNotes?: true
    rejectedAt?: true
    rejectedBy?: true
    rejectedByName?: true
    rejectionReason?: true
    isPublished?: true
    publishedAt?: true
    isFeatured?: true
    featuredUntil?: true
    academicYear?: true
    semester?: true
    notificationSent?: true
    notificationSentAt?: true
    viewCount?: true
    isActive?: true
    createdBy?: true
    createdAt?: true
    updatedBy?: true
    updatedAt?: true
    deletedAt?: true
    deletedBy?: true
  }

  export type AchievementMaxAggregateInputType = {
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
    categoryType?: true
    title?: true
    description?: true
    achievementDate?: true
    location?: true
    organizer?: true
    level?: true
    rank?: true
    isTeamAchievement?: true
    teamName?: true
    studentRole?: true
    points?: true
    basePoints?: true
    levelMultiplier?: true
    rankMultiplier?: true
    certificateUrl?: true
    status?: true
    approvedAt?: true
    approvedBy?: true
    approvedByName?: true
    bkNotes?: true
    rejectedAt?: true
    rejectedBy?: true
    rejectedByName?: true
    rejectionReason?: true
    isPublished?: true
    publishedAt?: true
    isFeatured?: true
    featuredUntil?: true
    academicYear?: true
    semester?: true
    notificationSent?: true
    notificationSentAt?: true
    viewCount?: true
    isActive?: true
    createdBy?: true
    createdAt?: true
    updatedBy?: true
    updatedAt?: true
    deletedAt?: true
    deletedBy?: true
  }

  export type AchievementCountAggregateInputType = {
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
    categoryType?: true
    title?: true
    description?: true
    achievementDate?: true
    location?: true
    organizer?: true
    level?: true
    rank?: true
    isTeamAchievement?: true
    teamName?: true
    teamMembers?: true
    studentRole?: true
    points?: true
    basePoints?: true
    levelMultiplier?: true
    rankMultiplier?: true
    certificateUrl?: true
    evidenceUrls?: true
    photoUrls?: true
    status?: true
    approvedAt?: true
    approvedBy?: true
    approvedByName?: true
    bkNotes?: true
    rejectedAt?: true
    rejectedBy?: true
    rejectedByName?: true
    rejectionReason?: true
    isPublished?: true
    publishedAt?: true
    isFeatured?: true
    featuredUntil?: true
    academicYear?: true
    semester?: true
    notificationSent?: true
    notificationSentAt?: true
    viewCount?: true
    isActive?: true
    createdBy?: true
    createdAt?: true
    updatedBy?: true
    updatedAt?: true
    deletedAt?: true
    deletedBy?: true
    _all?: true
  }

  export type AchievementAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Achievement to aggregate.
     */
    where?: AchievementWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Achievements to fetch.
     */
    orderBy?: AchievementOrderByWithRelationInput | AchievementOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: AchievementWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Achievements from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Achievements.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Achievements
    **/
    _count?: true | AchievementCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: AchievementAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: AchievementSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: AchievementMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: AchievementMaxAggregateInputType
  }

  export type GetAchievementAggregateType<T extends AchievementAggregateArgs> = {
        [P in keyof T & keyof AggregateAchievement]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAchievement[P]>
      : GetScalarType<T[P], AggregateAchievement[P]>
  }




  export type AchievementGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AchievementWhereInput
    orderBy?: AchievementOrderByWithAggregationInput | AchievementOrderByWithAggregationInput[]
    by: AchievementScalarFieldEnum[] | AchievementScalarFieldEnum
    having?: AchievementScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: AchievementCountAggregateInputType | true
    _avg?: AchievementAvgAggregateInputType
    _sum?: AchievementSumAggregateInputType
    _min?: AchievementMinAggregateInputType
    _max?: AchievementMaxAggregateInputType
  }

  export type AchievementGroupByOutputType = {
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
    categoryType: $Enums.AchievementType
    title: string
    description: string
    achievementDate: Date
    location: string | null
    organizer: string | null
    level: $Enums.AchievementLevel
    rank: $Enums.AchievementRank | null
    isTeamAchievement: boolean
    teamName: string | null
    teamMembers: JsonValue | null
    studentRole: string | null
    points: number
    basePoints: number
    levelMultiplier: number
    rankMultiplier: number
    certificateUrl: string | null
    evidenceUrls: JsonValue | null
    photoUrls: JsonValue | null
    status: $Enums.AchievementStatus
    approvedAt: Date | null
    approvedBy: string | null
    approvedByName: string | null
    bkNotes: string | null
    rejectedAt: Date | null
    rejectedBy: string | null
    rejectedByName: string | null
    rejectionReason: string | null
    isPublished: boolean
    publishedAt: Date | null
    isFeatured: boolean
    featuredUntil: Date | null
    academicYear: string
    semester: number
    notificationSent: boolean
    notificationSentAt: Date | null
    viewCount: number
    isActive: boolean
    createdBy: string
    createdAt: Date
    updatedBy: string | null
    updatedAt: Date
    deletedAt: Date | null
    deletedBy: string | null
    _count: AchievementCountAggregateOutputType | null
    _avg: AchievementAvgAggregateOutputType | null
    _sum: AchievementSumAggregateOutputType | null
    _min: AchievementMinAggregateOutputType | null
    _max: AchievementMaxAggregateOutputType | null
  }

  type GetAchievementGroupByPayload<T extends AchievementGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<AchievementGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof AchievementGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], AchievementGroupByOutputType[P]>
            : GetScalarType<T[P], AchievementGroupByOutputType[P]>
        }
      >
    >


  export type AchievementSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
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
    categoryType?: boolean
    title?: boolean
    description?: boolean
    achievementDate?: boolean
    location?: boolean
    organizer?: boolean
    level?: boolean
    rank?: boolean
    isTeamAchievement?: boolean
    teamName?: boolean
    teamMembers?: boolean
    studentRole?: boolean
    points?: boolean
    basePoints?: boolean
    levelMultiplier?: boolean
    rankMultiplier?: boolean
    certificateUrl?: boolean
    evidenceUrls?: boolean
    photoUrls?: boolean
    status?: boolean
    approvedAt?: boolean
    approvedBy?: boolean
    approvedByName?: boolean
    bkNotes?: boolean
    rejectedAt?: boolean
    rejectedBy?: boolean
    rejectedByName?: boolean
    rejectionReason?: boolean
    isPublished?: boolean
    publishedAt?: boolean
    isFeatured?: boolean
    featuredUntil?: boolean
    academicYear?: boolean
    semester?: boolean
    notificationSent?: boolean
    notificationSentAt?: boolean
    viewCount?: boolean
    isActive?: boolean
    createdBy?: boolean
    createdAt?: boolean
    updatedBy?: boolean
    updatedAt?: boolean
    deletedAt?: boolean
    deletedBy?: boolean
    approvalHistory?: boolean | Achievement$approvalHistoryArgs<ExtArgs>
    _count?: boolean | AchievementCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["achievement"]>

  export type AchievementSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
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
    categoryType?: boolean
    title?: boolean
    description?: boolean
    achievementDate?: boolean
    location?: boolean
    organizer?: boolean
    level?: boolean
    rank?: boolean
    isTeamAchievement?: boolean
    teamName?: boolean
    teamMembers?: boolean
    studentRole?: boolean
    points?: boolean
    basePoints?: boolean
    levelMultiplier?: boolean
    rankMultiplier?: boolean
    certificateUrl?: boolean
    evidenceUrls?: boolean
    photoUrls?: boolean
    status?: boolean
    approvedAt?: boolean
    approvedBy?: boolean
    approvedByName?: boolean
    bkNotes?: boolean
    rejectedAt?: boolean
    rejectedBy?: boolean
    rejectedByName?: boolean
    rejectionReason?: boolean
    isPublished?: boolean
    publishedAt?: boolean
    isFeatured?: boolean
    featuredUntil?: boolean
    academicYear?: boolean
    semester?: boolean
    notificationSent?: boolean
    notificationSentAt?: boolean
    viewCount?: boolean
    isActive?: boolean
    createdBy?: boolean
    createdAt?: boolean
    updatedBy?: boolean
    updatedAt?: boolean
    deletedAt?: boolean
    deletedBy?: boolean
  }, ExtArgs["result"]["achievement"]>

  export type AchievementSelectScalar = {
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
    categoryType?: boolean
    title?: boolean
    description?: boolean
    achievementDate?: boolean
    location?: boolean
    organizer?: boolean
    level?: boolean
    rank?: boolean
    isTeamAchievement?: boolean
    teamName?: boolean
    teamMembers?: boolean
    studentRole?: boolean
    points?: boolean
    basePoints?: boolean
    levelMultiplier?: boolean
    rankMultiplier?: boolean
    certificateUrl?: boolean
    evidenceUrls?: boolean
    photoUrls?: boolean
    status?: boolean
    approvedAt?: boolean
    approvedBy?: boolean
    approvedByName?: boolean
    bkNotes?: boolean
    rejectedAt?: boolean
    rejectedBy?: boolean
    rejectedByName?: boolean
    rejectionReason?: boolean
    isPublished?: boolean
    publishedAt?: boolean
    isFeatured?: boolean
    featuredUntil?: boolean
    academicYear?: boolean
    semester?: boolean
    notificationSent?: boolean
    notificationSentAt?: boolean
    viewCount?: boolean
    isActive?: boolean
    createdBy?: boolean
    createdAt?: boolean
    updatedBy?: boolean
    updatedAt?: boolean
    deletedAt?: boolean
    deletedBy?: boolean
  }

  export type AchievementInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    approvalHistory?: boolean | Achievement$approvalHistoryArgs<ExtArgs>
    _count?: boolean | AchievementCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type AchievementIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $AchievementPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Achievement"
    objects: {
      approvalHistory: Prisma.$AchievementApprovalHistoryPayload<ExtArgs>[]
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
      categoryType: $Enums.AchievementType
      title: string
      description: string
      achievementDate: Date
      location: string | null
      organizer: string | null
      level: $Enums.AchievementLevel
      rank: $Enums.AchievementRank | null
      isTeamAchievement: boolean
      teamName: string | null
      teamMembers: Prisma.JsonValue | null
      studentRole: string | null
      points: number
      basePoints: number
      levelMultiplier: number
      rankMultiplier: number
      certificateUrl: string | null
      evidenceUrls: Prisma.JsonValue | null
      photoUrls: Prisma.JsonValue | null
      status: $Enums.AchievementStatus
      approvedAt: Date | null
      approvedBy: string | null
      approvedByName: string | null
      bkNotes: string | null
      rejectedAt: Date | null
      rejectedBy: string | null
      rejectedByName: string | null
      rejectionReason: string | null
      isPublished: boolean
      publishedAt: Date | null
      isFeatured: boolean
      featuredUntil: Date | null
      academicYear: string
      semester: number
      notificationSent: boolean
      notificationSentAt: Date | null
      viewCount: number
      isActive: boolean
      createdBy: string
      createdAt: Date
      updatedBy: string | null
      updatedAt: Date
      deletedAt: Date | null
      deletedBy: string | null
    }, ExtArgs["result"]["achievement"]>
    composites: {}
  }

  type AchievementGetPayload<S extends boolean | null | undefined | AchievementDefaultArgs> = $Result.GetResult<Prisma.$AchievementPayload, S>

  type AchievementCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<AchievementFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: AchievementCountAggregateInputType | true
    }

  export interface AchievementDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Achievement'], meta: { name: 'Achievement' } }
    /**
     * Find zero or one Achievement that matches the filter.
     * @param {AchievementFindUniqueArgs} args - Arguments to find a Achievement
     * @example
     * // Get one Achievement
     * const achievement = await prisma.achievement.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends AchievementFindUniqueArgs>(args: SelectSubset<T, AchievementFindUniqueArgs<ExtArgs>>): Prisma__AchievementClient<$Result.GetResult<Prisma.$AchievementPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one Achievement that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {AchievementFindUniqueOrThrowArgs} args - Arguments to find a Achievement
     * @example
     * // Get one Achievement
     * const achievement = await prisma.achievement.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends AchievementFindUniqueOrThrowArgs>(args: SelectSubset<T, AchievementFindUniqueOrThrowArgs<ExtArgs>>): Prisma__AchievementClient<$Result.GetResult<Prisma.$AchievementPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first Achievement that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AchievementFindFirstArgs} args - Arguments to find a Achievement
     * @example
     * // Get one Achievement
     * const achievement = await prisma.achievement.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends AchievementFindFirstArgs>(args?: SelectSubset<T, AchievementFindFirstArgs<ExtArgs>>): Prisma__AchievementClient<$Result.GetResult<Prisma.$AchievementPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first Achievement that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AchievementFindFirstOrThrowArgs} args - Arguments to find a Achievement
     * @example
     * // Get one Achievement
     * const achievement = await prisma.achievement.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends AchievementFindFirstOrThrowArgs>(args?: SelectSubset<T, AchievementFindFirstOrThrowArgs<ExtArgs>>): Prisma__AchievementClient<$Result.GetResult<Prisma.$AchievementPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more Achievements that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AchievementFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Achievements
     * const achievements = await prisma.achievement.findMany()
     * 
     * // Get first 10 Achievements
     * const achievements = await prisma.achievement.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const achievementWithIdOnly = await prisma.achievement.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends AchievementFindManyArgs>(args?: SelectSubset<T, AchievementFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AchievementPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a Achievement.
     * @param {AchievementCreateArgs} args - Arguments to create a Achievement.
     * @example
     * // Create one Achievement
     * const Achievement = await prisma.achievement.create({
     *   data: {
     *     // ... data to create a Achievement
     *   }
     * })
     * 
     */
    create<T extends AchievementCreateArgs>(args: SelectSubset<T, AchievementCreateArgs<ExtArgs>>): Prisma__AchievementClient<$Result.GetResult<Prisma.$AchievementPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many Achievements.
     * @param {AchievementCreateManyArgs} args - Arguments to create many Achievements.
     * @example
     * // Create many Achievements
     * const achievement = await prisma.achievement.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends AchievementCreateManyArgs>(args?: SelectSubset<T, AchievementCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Achievements and returns the data saved in the database.
     * @param {AchievementCreateManyAndReturnArgs} args - Arguments to create many Achievements.
     * @example
     * // Create many Achievements
     * const achievement = await prisma.achievement.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Achievements and only return the `id`
     * const achievementWithIdOnly = await prisma.achievement.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends AchievementCreateManyAndReturnArgs>(args?: SelectSubset<T, AchievementCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AchievementPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a Achievement.
     * @param {AchievementDeleteArgs} args - Arguments to delete one Achievement.
     * @example
     * // Delete one Achievement
     * const Achievement = await prisma.achievement.delete({
     *   where: {
     *     // ... filter to delete one Achievement
     *   }
     * })
     * 
     */
    delete<T extends AchievementDeleteArgs>(args: SelectSubset<T, AchievementDeleteArgs<ExtArgs>>): Prisma__AchievementClient<$Result.GetResult<Prisma.$AchievementPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one Achievement.
     * @param {AchievementUpdateArgs} args - Arguments to update one Achievement.
     * @example
     * // Update one Achievement
     * const achievement = await prisma.achievement.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends AchievementUpdateArgs>(args: SelectSubset<T, AchievementUpdateArgs<ExtArgs>>): Prisma__AchievementClient<$Result.GetResult<Prisma.$AchievementPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more Achievements.
     * @param {AchievementDeleteManyArgs} args - Arguments to filter Achievements to delete.
     * @example
     * // Delete a few Achievements
     * const { count } = await prisma.achievement.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends AchievementDeleteManyArgs>(args?: SelectSubset<T, AchievementDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Achievements.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AchievementUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Achievements
     * const achievement = await prisma.achievement.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends AchievementUpdateManyArgs>(args: SelectSubset<T, AchievementUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Achievement.
     * @param {AchievementUpsertArgs} args - Arguments to update or create a Achievement.
     * @example
     * // Update or create a Achievement
     * const achievement = await prisma.achievement.upsert({
     *   create: {
     *     // ... data to create a Achievement
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Achievement we want to update
     *   }
     * })
     */
    upsert<T extends AchievementUpsertArgs>(args: SelectSubset<T, AchievementUpsertArgs<ExtArgs>>): Prisma__AchievementClient<$Result.GetResult<Prisma.$AchievementPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of Achievements.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AchievementCountArgs} args - Arguments to filter Achievements to count.
     * @example
     * // Count the number of Achievements
     * const count = await prisma.achievement.count({
     *   where: {
     *     // ... the filter for the Achievements we want to count
     *   }
     * })
    **/
    count<T extends AchievementCountArgs>(
      args?: Subset<T, AchievementCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], AchievementCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Achievement.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AchievementAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends AchievementAggregateArgs>(args: Subset<T, AchievementAggregateArgs>): Prisma.PrismaPromise<GetAchievementAggregateType<T>>

    /**
     * Group by Achievement.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AchievementGroupByArgs} args - Group by arguments.
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
      T extends AchievementGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: AchievementGroupByArgs['orderBy'] }
        : { orderBy?: AchievementGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, AchievementGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAchievementGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Achievement model
   */
  readonly fields: AchievementFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Achievement.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__AchievementClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    approvalHistory<T extends Achievement$approvalHistoryArgs<ExtArgs> = {}>(args?: Subset<T, Achievement$approvalHistoryArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AchievementApprovalHistoryPayload<ExtArgs>, T, "findMany"> | Null>
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
   * Fields of the Achievement model
   */ 
  interface AchievementFieldRefs {
    readonly id: FieldRef<"Achievement", 'String'>
    readonly studentId: FieldRef<"Achievement", 'String'>
    readonly studentNisn: FieldRef<"Achievement", 'String'>
    readonly studentName: FieldRef<"Achievement", 'String'>
    readonly studentClass: FieldRef<"Achievement", 'String'>
    readonly reportedBy: FieldRef<"Achievement", 'String'>
    readonly reportedByName: FieldRef<"Achievement", 'String'>
    readonly reporterRole: FieldRef<"Achievement", 'String'>
    readonly categoryId: FieldRef<"Achievement", 'String'>
    readonly categoryCode: FieldRef<"Achievement", 'String'>
    readonly categoryName: FieldRef<"Achievement", 'String'>
    readonly categoryType: FieldRef<"Achievement", 'AchievementType'>
    readonly title: FieldRef<"Achievement", 'String'>
    readonly description: FieldRef<"Achievement", 'String'>
    readonly achievementDate: FieldRef<"Achievement", 'DateTime'>
    readonly location: FieldRef<"Achievement", 'String'>
    readonly organizer: FieldRef<"Achievement", 'String'>
    readonly level: FieldRef<"Achievement", 'AchievementLevel'>
    readonly rank: FieldRef<"Achievement", 'AchievementRank'>
    readonly isTeamAchievement: FieldRef<"Achievement", 'Boolean'>
    readonly teamName: FieldRef<"Achievement", 'String'>
    readonly teamMembers: FieldRef<"Achievement", 'Json'>
    readonly studentRole: FieldRef<"Achievement", 'String'>
    readonly points: FieldRef<"Achievement", 'Int'>
    readonly basePoints: FieldRef<"Achievement", 'Int'>
    readonly levelMultiplier: FieldRef<"Achievement", 'Float'>
    readonly rankMultiplier: FieldRef<"Achievement", 'Float'>
    readonly certificateUrl: FieldRef<"Achievement", 'String'>
    readonly evidenceUrls: FieldRef<"Achievement", 'Json'>
    readonly photoUrls: FieldRef<"Achievement", 'Json'>
    readonly status: FieldRef<"Achievement", 'AchievementStatus'>
    readonly approvedAt: FieldRef<"Achievement", 'DateTime'>
    readonly approvedBy: FieldRef<"Achievement", 'String'>
    readonly approvedByName: FieldRef<"Achievement", 'String'>
    readonly bkNotes: FieldRef<"Achievement", 'String'>
    readonly rejectedAt: FieldRef<"Achievement", 'DateTime'>
    readonly rejectedBy: FieldRef<"Achievement", 'String'>
    readonly rejectedByName: FieldRef<"Achievement", 'String'>
    readonly rejectionReason: FieldRef<"Achievement", 'String'>
    readonly isPublished: FieldRef<"Achievement", 'Boolean'>
    readonly publishedAt: FieldRef<"Achievement", 'DateTime'>
    readonly isFeatured: FieldRef<"Achievement", 'Boolean'>
    readonly featuredUntil: FieldRef<"Achievement", 'DateTime'>
    readonly academicYear: FieldRef<"Achievement", 'String'>
    readonly semester: FieldRef<"Achievement", 'Int'>
    readonly notificationSent: FieldRef<"Achievement", 'Boolean'>
    readonly notificationSentAt: FieldRef<"Achievement", 'DateTime'>
    readonly viewCount: FieldRef<"Achievement", 'Int'>
    readonly isActive: FieldRef<"Achievement", 'Boolean'>
    readonly createdBy: FieldRef<"Achievement", 'String'>
    readonly createdAt: FieldRef<"Achievement", 'DateTime'>
    readonly updatedBy: FieldRef<"Achievement", 'String'>
    readonly updatedAt: FieldRef<"Achievement", 'DateTime'>
    readonly deletedAt: FieldRef<"Achievement", 'DateTime'>
    readonly deletedBy: FieldRef<"Achievement", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Achievement findUnique
   */
  export type AchievementFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Achievement
     */
    select?: AchievementSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AchievementInclude<ExtArgs> | null
    /**
     * Filter, which Achievement to fetch.
     */
    where: AchievementWhereUniqueInput
  }

  /**
   * Achievement findUniqueOrThrow
   */
  export type AchievementFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Achievement
     */
    select?: AchievementSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AchievementInclude<ExtArgs> | null
    /**
     * Filter, which Achievement to fetch.
     */
    where: AchievementWhereUniqueInput
  }

  /**
   * Achievement findFirst
   */
  export type AchievementFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Achievement
     */
    select?: AchievementSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AchievementInclude<ExtArgs> | null
    /**
     * Filter, which Achievement to fetch.
     */
    where?: AchievementWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Achievements to fetch.
     */
    orderBy?: AchievementOrderByWithRelationInput | AchievementOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Achievements.
     */
    cursor?: AchievementWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Achievements from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Achievements.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Achievements.
     */
    distinct?: AchievementScalarFieldEnum | AchievementScalarFieldEnum[]
  }

  /**
   * Achievement findFirstOrThrow
   */
  export type AchievementFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Achievement
     */
    select?: AchievementSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AchievementInclude<ExtArgs> | null
    /**
     * Filter, which Achievement to fetch.
     */
    where?: AchievementWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Achievements to fetch.
     */
    orderBy?: AchievementOrderByWithRelationInput | AchievementOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Achievements.
     */
    cursor?: AchievementWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Achievements from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Achievements.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Achievements.
     */
    distinct?: AchievementScalarFieldEnum | AchievementScalarFieldEnum[]
  }

  /**
   * Achievement findMany
   */
  export type AchievementFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Achievement
     */
    select?: AchievementSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AchievementInclude<ExtArgs> | null
    /**
     * Filter, which Achievements to fetch.
     */
    where?: AchievementWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Achievements to fetch.
     */
    orderBy?: AchievementOrderByWithRelationInput | AchievementOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Achievements.
     */
    cursor?: AchievementWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Achievements from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Achievements.
     */
    skip?: number
    distinct?: AchievementScalarFieldEnum | AchievementScalarFieldEnum[]
  }

  /**
   * Achievement create
   */
  export type AchievementCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Achievement
     */
    select?: AchievementSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AchievementInclude<ExtArgs> | null
    /**
     * The data needed to create a Achievement.
     */
    data: XOR<AchievementCreateInput, AchievementUncheckedCreateInput>
  }

  /**
   * Achievement createMany
   */
  export type AchievementCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Achievements.
     */
    data: AchievementCreateManyInput | AchievementCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Achievement createManyAndReturn
   */
  export type AchievementCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Achievement
     */
    select?: AchievementSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many Achievements.
     */
    data: AchievementCreateManyInput | AchievementCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Achievement update
   */
  export type AchievementUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Achievement
     */
    select?: AchievementSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AchievementInclude<ExtArgs> | null
    /**
     * The data needed to update a Achievement.
     */
    data: XOR<AchievementUpdateInput, AchievementUncheckedUpdateInput>
    /**
     * Choose, which Achievement to update.
     */
    where: AchievementWhereUniqueInput
  }

  /**
   * Achievement updateMany
   */
  export type AchievementUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Achievements.
     */
    data: XOR<AchievementUpdateManyMutationInput, AchievementUncheckedUpdateManyInput>
    /**
     * Filter which Achievements to update
     */
    where?: AchievementWhereInput
  }

  /**
   * Achievement upsert
   */
  export type AchievementUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Achievement
     */
    select?: AchievementSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AchievementInclude<ExtArgs> | null
    /**
     * The filter to search for the Achievement to update in case it exists.
     */
    where: AchievementWhereUniqueInput
    /**
     * In case the Achievement found by the `where` argument doesn't exist, create a new Achievement with this data.
     */
    create: XOR<AchievementCreateInput, AchievementUncheckedCreateInput>
    /**
     * In case the Achievement was found with the provided `where` argument, update it with this data.
     */
    update: XOR<AchievementUpdateInput, AchievementUncheckedUpdateInput>
  }

  /**
   * Achievement delete
   */
  export type AchievementDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Achievement
     */
    select?: AchievementSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AchievementInclude<ExtArgs> | null
    /**
     * Filter which Achievement to delete.
     */
    where: AchievementWhereUniqueInput
  }

  /**
   * Achievement deleteMany
   */
  export type AchievementDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Achievements to delete
     */
    where?: AchievementWhereInput
  }

  /**
   * Achievement.approvalHistory
   */
  export type Achievement$approvalHistoryArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AchievementApprovalHistory
     */
    select?: AchievementApprovalHistorySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AchievementApprovalHistoryInclude<ExtArgs> | null
    where?: AchievementApprovalHistoryWhereInput
    orderBy?: AchievementApprovalHistoryOrderByWithRelationInput | AchievementApprovalHistoryOrderByWithRelationInput[]
    cursor?: AchievementApprovalHistoryWhereUniqueInput
    take?: number
    skip?: number
    distinct?: AchievementApprovalHistoryScalarFieldEnum | AchievementApprovalHistoryScalarFieldEnum[]
  }

  /**
   * Achievement without action
   */
  export type AchievementDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Achievement
     */
    select?: AchievementSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AchievementInclude<ExtArgs> | null
  }


  /**
   * Model AchievementApprovalHistory
   */

  export type AggregateAchievementApprovalHistory = {
    _count: AchievementApprovalHistoryCountAggregateOutputType | null
    _min: AchievementApprovalHistoryMinAggregateOutputType | null
    _max: AchievementApprovalHistoryMaxAggregateOutputType | null
  }

  export type AchievementApprovalHistoryMinAggregateOutputType = {
    id: string | null
    achievementId: string | null
    action: $Enums.ApprovalAction | null
    fromStatus: $Enums.AchievementStatus | null
    toStatus: $Enums.AchievementStatus | null
    approverUserId: string | null
    approverName: string | null
    approverRole: string | null
    notes: string | null
    actionDate: Date | null
  }

  export type AchievementApprovalHistoryMaxAggregateOutputType = {
    id: string | null
    achievementId: string | null
    action: $Enums.ApprovalAction | null
    fromStatus: $Enums.AchievementStatus | null
    toStatus: $Enums.AchievementStatus | null
    approverUserId: string | null
    approverName: string | null
    approverRole: string | null
    notes: string | null
    actionDate: Date | null
  }

  export type AchievementApprovalHistoryCountAggregateOutputType = {
    id: number
    achievementId: number
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


  export type AchievementApprovalHistoryMinAggregateInputType = {
    id?: true
    achievementId?: true
    action?: true
    fromStatus?: true
    toStatus?: true
    approverUserId?: true
    approverName?: true
    approverRole?: true
    notes?: true
    actionDate?: true
  }

  export type AchievementApprovalHistoryMaxAggregateInputType = {
    id?: true
    achievementId?: true
    action?: true
    fromStatus?: true
    toStatus?: true
    approverUserId?: true
    approverName?: true
    approverRole?: true
    notes?: true
    actionDate?: true
  }

  export type AchievementApprovalHistoryCountAggregateInputType = {
    id?: true
    achievementId?: true
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

  export type AchievementApprovalHistoryAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which AchievementApprovalHistory to aggregate.
     */
    where?: AchievementApprovalHistoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AchievementApprovalHistories to fetch.
     */
    orderBy?: AchievementApprovalHistoryOrderByWithRelationInput | AchievementApprovalHistoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: AchievementApprovalHistoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AchievementApprovalHistories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AchievementApprovalHistories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned AchievementApprovalHistories
    **/
    _count?: true | AchievementApprovalHistoryCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: AchievementApprovalHistoryMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: AchievementApprovalHistoryMaxAggregateInputType
  }

  export type GetAchievementApprovalHistoryAggregateType<T extends AchievementApprovalHistoryAggregateArgs> = {
        [P in keyof T & keyof AggregateAchievementApprovalHistory]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAchievementApprovalHistory[P]>
      : GetScalarType<T[P], AggregateAchievementApprovalHistory[P]>
  }




  export type AchievementApprovalHistoryGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AchievementApprovalHistoryWhereInput
    orderBy?: AchievementApprovalHistoryOrderByWithAggregationInput | AchievementApprovalHistoryOrderByWithAggregationInput[]
    by: AchievementApprovalHistoryScalarFieldEnum[] | AchievementApprovalHistoryScalarFieldEnum
    having?: AchievementApprovalHistoryScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: AchievementApprovalHistoryCountAggregateInputType | true
    _min?: AchievementApprovalHistoryMinAggregateInputType
    _max?: AchievementApprovalHistoryMaxAggregateInputType
  }

  export type AchievementApprovalHistoryGroupByOutputType = {
    id: string
    achievementId: string
    action: $Enums.ApprovalAction
    fromStatus: $Enums.AchievementStatus
    toStatus: $Enums.AchievementStatus
    approverUserId: string
    approverName: string
    approverRole: string
    notes: string | null
    actionDate: Date
    _count: AchievementApprovalHistoryCountAggregateOutputType | null
    _min: AchievementApprovalHistoryMinAggregateOutputType | null
    _max: AchievementApprovalHistoryMaxAggregateOutputType | null
  }

  type GetAchievementApprovalHistoryGroupByPayload<T extends AchievementApprovalHistoryGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<AchievementApprovalHistoryGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof AchievementApprovalHistoryGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], AchievementApprovalHistoryGroupByOutputType[P]>
            : GetScalarType<T[P], AchievementApprovalHistoryGroupByOutputType[P]>
        }
      >
    >


  export type AchievementApprovalHistorySelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    achievementId?: boolean
    action?: boolean
    fromStatus?: boolean
    toStatus?: boolean
    approverUserId?: boolean
    approverName?: boolean
    approverRole?: boolean
    notes?: boolean
    actionDate?: boolean
    achievement?: boolean | AchievementDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["achievementApprovalHistory"]>

  export type AchievementApprovalHistorySelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    achievementId?: boolean
    action?: boolean
    fromStatus?: boolean
    toStatus?: boolean
    approverUserId?: boolean
    approverName?: boolean
    approverRole?: boolean
    notes?: boolean
    actionDate?: boolean
    achievement?: boolean | AchievementDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["achievementApprovalHistory"]>

  export type AchievementApprovalHistorySelectScalar = {
    id?: boolean
    achievementId?: boolean
    action?: boolean
    fromStatus?: boolean
    toStatus?: boolean
    approverUserId?: boolean
    approverName?: boolean
    approverRole?: boolean
    notes?: boolean
    actionDate?: boolean
  }

  export type AchievementApprovalHistoryInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    achievement?: boolean | AchievementDefaultArgs<ExtArgs>
  }
  export type AchievementApprovalHistoryIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    achievement?: boolean | AchievementDefaultArgs<ExtArgs>
  }

  export type $AchievementApprovalHistoryPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "AchievementApprovalHistory"
    objects: {
      achievement: Prisma.$AchievementPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      achievementId: string
      action: $Enums.ApprovalAction
      fromStatus: $Enums.AchievementStatus
      toStatus: $Enums.AchievementStatus
      approverUserId: string
      approverName: string
      approverRole: string
      notes: string | null
      actionDate: Date
    }, ExtArgs["result"]["achievementApprovalHistory"]>
    composites: {}
  }

  type AchievementApprovalHistoryGetPayload<S extends boolean | null | undefined | AchievementApprovalHistoryDefaultArgs> = $Result.GetResult<Prisma.$AchievementApprovalHistoryPayload, S>

  type AchievementApprovalHistoryCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<AchievementApprovalHistoryFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: AchievementApprovalHistoryCountAggregateInputType | true
    }

  export interface AchievementApprovalHistoryDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['AchievementApprovalHistory'], meta: { name: 'AchievementApprovalHistory' } }
    /**
     * Find zero or one AchievementApprovalHistory that matches the filter.
     * @param {AchievementApprovalHistoryFindUniqueArgs} args - Arguments to find a AchievementApprovalHistory
     * @example
     * // Get one AchievementApprovalHistory
     * const achievementApprovalHistory = await prisma.achievementApprovalHistory.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends AchievementApprovalHistoryFindUniqueArgs>(args: SelectSubset<T, AchievementApprovalHistoryFindUniqueArgs<ExtArgs>>): Prisma__AchievementApprovalHistoryClient<$Result.GetResult<Prisma.$AchievementApprovalHistoryPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one AchievementApprovalHistory that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {AchievementApprovalHistoryFindUniqueOrThrowArgs} args - Arguments to find a AchievementApprovalHistory
     * @example
     * // Get one AchievementApprovalHistory
     * const achievementApprovalHistory = await prisma.achievementApprovalHistory.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends AchievementApprovalHistoryFindUniqueOrThrowArgs>(args: SelectSubset<T, AchievementApprovalHistoryFindUniqueOrThrowArgs<ExtArgs>>): Prisma__AchievementApprovalHistoryClient<$Result.GetResult<Prisma.$AchievementApprovalHistoryPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first AchievementApprovalHistory that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AchievementApprovalHistoryFindFirstArgs} args - Arguments to find a AchievementApprovalHistory
     * @example
     * // Get one AchievementApprovalHistory
     * const achievementApprovalHistory = await prisma.achievementApprovalHistory.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends AchievementApprovalHistoryFindFirstArgs>(args?: SelectSubset<T, AchievementApprovalHistoryFindFirstArgs<ExtArgs>>): Prisma__AchievementApprovalHistoryClient<$Result.GetResult<Prisma.$AchievementApprovalHistoryPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first AchievementApprovalHistory that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AchievementApprovalHistoryFindFirstOrThrowArgs} args - Arguments to find a AchievementApprovalHistory
     * @example
     * // Get one AchievementApprovalHistory
     * const achievementApprovalHistory = await prisma.achievementApprovalHistory.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends AchievementApprovalHistoryFindFirstOrThrowArgs>(args?: SelectSubset<T, AchievementApprovalHistoryFindFirstOrThrowArgs<ExtArgs>>): Prisma__AchievementApprovalHistoryClient<$Result.GetResult<Prisma.$AchievementApprovalHistoryPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more AchievementApprovalHistories that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AchievementApprovalHistoryFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all AchievementApprovalHistories
     * const achievementApprovalHistories = await prisma.achievementApprovalHistory.findMany()
     * 
     * // Get first 10 AchievementApprovalHistories
     * const achievementApprovalHistories = await prisma.achievementApprovalHistory.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const achievementApprovalHistoryWithIdOnly = await prisma.achievementApprovalHistory.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends AchievementApprovalHistoryFindManyArgs>(args?: SelectSubset<T, AchievementApprovalHistoryFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AchievementApprovalHistoryPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a AchievementApprovalHistory.
     * @param {AchievementApprovalHistoryCreateArgs} args - Arguments to create a AchievementApprovalHistory.
     * @example
     * // Create one AchievementApprovalHistory
     * const AchievementApprovalHistory = await prisma.achievementApprovalHistory.create({
     *   data: {
     *     // ... data to create a AchievementApprovalHistory
     *   }
     * })
     * 
     */
    create<T extends AchievementApprovalHistoryCreateArgs>(args: SelectSubset<T, AchievementApprovalHistoryCreateArgs<ExtArgs>>): Prisma__AchievementApprovalHistoryClient<$Result.GetResult<Prisma.$AchievementApprovalHistoryPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many AchievementApprovalHistories.
     * @param {AchievementApprovalHistoryCreateManyArgs} args - Arguments to create many AchievementApprovalHistories.
     * @example
     * // Create many AchievementApprovalHistories
     * const achievementApprovalHistory = await prisma.achievementApprovalHistory.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends AchievementApprovalHistoryCreateManyArgs>(args?: SelectSubset<T, AchievementApprovalHistoryCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many AchievementApprovalHistories and returns the data saved in the database.
     * @param {AchievementApprovalHistoryCreateManyAndReturnArgs} args - Arguments to create many AchievementApprovalHistories.
     * @example
     * // Create many AchievementApprovalHistories
     * const achievementApprovalHistory = await prisma.achievementApprovalHistory.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many AchievementApprovalHistories and only return the `id`
     * const achievementApprovalHistoryWithIdOnly = await prisma.achievementApprovalHistory.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends AchievementApprovalHistoryCreateManyAndReturnArgs>(args?: SelectSubset<T, AchievementApprovalHistoryCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AchievementApprovalHistoryPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a AchievementApprovalHistory.
     * @param {AchievementApprovalHistoryDeleteArgs} args - Arguments to delete one AchievementApprovalHistory.
     * @example
     * // Delete one AchievementApprovalHistory
     * const AchievementApprovalHistory = await prisma.achievementApprovalHistory.delete({
     *   where: {
     *     // ... filter to delete one AchievementApprovalHistory
     *   }
     * })
     * 
     */
    delete<T extends AchievementApprovalHistoryDeleteArgs>(args: SelectSubset<T, AchievementApprovalHistoryDeleteArgs<ExtArgs>>): Prisma__AchievementApprovalHistoryClient<$Result.GetResult<Prisma.$AchievementApprovalHistoryPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one AchievementApprovalHistory.
     * @param {AchievementApprovalHistoryUpdateArgs} args - Arguments to update one AchievementApprovalHistory.
     * @example
     * // Update one AchievementApprovalHistory
     * const achievementApprovalHistory = await prisma.achievementApprovalHistory.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends AchievementApprovalHistoryUpdateArgs>(args: SelectSubset<T, AchievementApprovalHistoryUpdateArgs<ExtArgs>>): Prisma__AchievementApprovalHistoryClient<$Result.GetResult<Prisma.$AchievementApprovalHistoryPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more AchievementApprovalHistories.
     * @param {AchievementApprovalHistoryDeleteManyArgs} args - Arguments to filter AchievementApprovalHistories to delete.
     * @example
     * // Delete a few AchievementApprovalHistories
     * const { count } = await prisma.achievementApprovalHistory.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends AchievementApprovalHistoryDeleteManyArgs>(args?: SelectSubset<T, AchievementApprovalHistoryDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more AchievementApprovalHistories.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AchievementApprovalHistoryUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many AchievementApprovalHistories
     * const achievementApprovalHistory = await prisma.achievementApprovalHistory.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends AchievementApprovalHistoryUpdateManyArgs>(args: SelectSubset<T, AchievementApprovalHistoryUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one AchievementApprovalHistory.
     * @param {AchievementApprovalHistoryUpsertArgs} args - Arguments to update or create a AchievementApprovalHistory.
     * @example
     * // Update or create a AchievementApprovalHistory
     * const achievementApprovalHistory = await prisma.achievementApprovalHistory.upsert({
     *   create: {
     *     // ... data to create a AchievementApprovalHistory
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the AchievementApprovalHistory we want to update
     *   }
     * })
     */
    upsert<T extends AchievementApprovalHistoryUpsertArgs>(args: SelectSubset<T, AchievementApprovalHistoryUpsertArgs<ExtArgs>>): Prisma__AchievementApprovalHistoryClient<$Result.GetResult<Prisma.$AchievementApprovalHistoryPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of AchievementApprovalHistories.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AchievementApprovalHistoryCountArgs} args - Arguments to filter AchievementApprovalHistories to count.
     * @example
     * // Count the number of AchievementApprovalHistories
     * const count = await prisma.achievementApprovalHistory.count({
     *   where: {
     *     // ... the filter for the AchievementApprovalHistories we want to count
     *   }
     * })
    **/
    count<T extends AchievementApprovalHistoryCountArgs>(
      args?: Subset<T, AchievementApprovalHistoryCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], AchievementApprovalHistoryCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a AchievementApprovalHistory.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AchievementApprovalHistoryAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends AchievementApprovalHistoryAggregateArgs>(args: Subset<T, AchievementApprovalHistoryAggregateArgs>): Prisma.PrismaPromise<GetAchievementApprovalHistoryAggregateType<T>>

    /**
     * Group by AchievementApprovalHistory.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AchievementApprovalHistoryGroupByArgs} args - Group by arguments.
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
      T extends AchievementApprovalHistoryGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: AchievementApprovalHistoryGroupByArgs['orderBy'] }
        : { orderBy?: AchievementApprovalHistoryGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, AchievementApprovalHistoryGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAchievementApprovalHistoryGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the AchievementApprovalHistory model
   */
  readonly fields: AchievementApprovalHistoryFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for AchievementApprovalHistory.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__AchievementApprovalHistoryClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    achievement<T extends AchievementDefaultArgs<ExtArgs> = {}>(args?: Subset<T, AchievementDefaultArgs<ExtArgs>>): Prisma__AchievementClient<$Result.GetResult<Prisma.$AchievementPayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
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
   * Fields of the AchievementApprovalHistory model
   */ 
  interface AchievementApprovalHistoryFieldRefs {
    readonly id: FieldRef<"AchievementApprovalHistory", 'String'>
    readonly achievementId: FieldRef<"AchievementApprovalHistory", 'String'>
    readonly action: FieldRef<"AchievementApprovalHistory", 'ApprovalAction'>
    readonly fromStatus: FieldRef<"AchievementApprovalHistory", 'AchievementStatus'>
    readonly toStatus: FieldRef<"AchievementApprovalHistory", 'AchievementStatus'>
    readonly approverUserId: FieldRef<"AchievementApprovalHistory", 'String'>
    readonly approverName: FieldRef<"AchievementApprovalHistory", 'String'>
    readonly approverRole: FieldRef<"AchievementApprovalHistory", 'String'>
    readonly notes: FieldRef<"AchievementApprovalHistory", 'String'>
    readonly actionDate: FieldRef<"AchievementApprovalHistory", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * AchievementApprovalHistory findUnique
   */
  export type AchievementApprovalHistoryFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AchievementApprovalHistory
     */
    select?: AchievementApprovalHistorySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AchievementApprovalHistoryInclude<ExtArgs> | null
    /**
     * Filter, which AchievementApprovalHistory to fetch.
     */
    where: AchievementApprovalHistoryWhereUniqueInput
  }

  /**
   * AchievementApprovalHistory findUniqueOrThrow
   */
  export type AchievementApprovalHistoryFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AchievementApprovalHistory
     */
    select?: AchievementApprovalHistorySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AchievementApprovalHistoryInclude<ExtArgs> | null
    /**
     * Filter, which AchievementApprovalHistory to fetch.
     */
    where: AchievementApprovalHistoryWhereUniqueInput
  }

  /**
   * AchievementApprovalHistory findFirst
   */
  export type AchievementApprovalHistoryFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AchievementApprovalHistory
     */
    select?: AchievementApprovalHistorySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AchievementApprovalHistoryInclude<ExtArgs> | null
    /**
     * Filter, which AchievementApprovalHistory to fetch.
     */
    where?: AchievementApprovalHistoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AchievementApprovalHistories to fetch.
     */
    orderBy?: AchievementApprovalHistoryOrderByWithRelationInput | AchievementApprovalHistoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for AchievementApprovalHistories.
     */
    cursor?: AchievementApprovalHistoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AchievementApprovalHistories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AchievementApprovalHistories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of AchievementApprovalHistories.
     */
    distinct?: AchievementApprovalHistoryScalarFieldEnum | AchievementApprovalHistoryScalarFieldEnum[]
  }

  /**
   * AchievementApprovalHistory findFirstOrThrow
   */
  export type AchievementApprovalHistoryFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AchievementApprovalHistory
     */
    select?: AchievementApprovalHistorySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AchievementApprovalHistoryInclude<ExtArgs> | null
    /**
     * Filter, which AchievementApprovalHistory to fetch.
     */
    where?: AchievementApprovalHistoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AchievementApprovalHistories to fetch.
     */
    orderBy?: AchievementApprovalHistoryOrderByWithRelationInput | AchievementApprovalHistoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for AchievementApprovalHistories.
     */
    cursor?: AchievementApprovalHistoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AchievementApprovalHistories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AchievementApprovalHistories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of AchievementApprovalHistories.
     */
    distinct?: AchievementApprovalHistoryScalarFieldEnum | AchievementApprovalHistoryScalarFieldEnum[]
  }

  /**
   * AchievementApprovalHistory findMany
   */
  export type AchievementApprovalHistoryFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AchievementApprovalHistory
     */
    select?: AchievementApprovalHistorySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AchievementApprovalHistoryInclude<ExtArgs> | null
    /**
     * Filter, which AchievementApprovalHistories to fetch.
     */
    where?: AchievementApprovalHistoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AchievementApprovalHistories to fetch.
     */
    orderBy?: AchievementApprovalHistoryOrderByWithRelationInput | AchievementApprovalHistoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing AchievementApprovalHistories.
     */
    cursor?: AchievementApprovalHistoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AchievementApprovalHistories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AchievementApprovalHistories.
     */
    skip?: number
    distinct?: AchievementApprovalHistoryScalarFieldEnum | AchievementApprovalHistoryScalarFieldEnum[]
  }

  /**
   * AchievementApprovalHistory create
   */
  export type AchievementApprovalHistoryCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AchievementApprovalHistory
     */
    select?: AchievementApprovalHistorySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AchievementApprovalHistoryInclude<ExtArgs> | null
    /**
     * The data needed to create a AchievementApprovalHistory.
     */
    data: XOR<AchievementApprovalHistoryCreateInput, AchievementApprovalHistoryUncheckedCreateInput>
  }

  /**
   * AchievementApprovalHistory createMany
   */
  export type AchievementApprovalHistoryCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many AchievementApprovalHistories.
     */
    data: AchievementApprovalHistoryCreateManyInput | AchievementApprovalHistoryCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * AchievementApprovalHistory createManyAndReturn
   */
  export type AchievementApprovalHistoryCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AchievementApprovalHistory
     */
    select?: AchievementApprovalHistorySelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many AchievementApprovalHistories.
     */
    data: AchievementApprovalHistoryCreateManyInput | AchievementApprovalHistoryCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AchievementApprovalHistoryIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * AchievementApprovalHistory update
   */
  export type AchievementApprovalHistoryUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AchievementApprovalHistory
     */
    select?: AchievementApprovalHistorySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AchievementApprovalHistoryInclude<ExtArgs> | null
    /**
     * The data needed to update a AchievementApprovalHistory.
     */
    data: XOR<AchievementApprovalHistoryUpdateInput, AchievementApprovalHistoryUncheckedUpdateInput>
    /**
     * Choose, which AchievementApprovalHistory to update.
     */
    where: AchievementApprovalHistoryWhereUniqueInput
  }

  /**
   * AchievementApprovalHistory updateMany
   */
  export type AchievementApprovalHistoryUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update AchievementApprovalHistories.
     */
    data: XOR<AchievementApprovalHistoryUpdateManyMutationInput, AchievementApprovalHistoryUncheckedUpdateManyInput>
    /**
     * Filter which AchievementApprovalHistories to update
     */
    where?: AchievementApprovalHistoryWhereInput
  }

  /**
   * AchievementApprovalHistory upsert
   */
  export type AchievementApprovalHistoryUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AchievementApprovalHistory
     */
    select?: AchievementApprovalHistorySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AchievementApprovalHistoryInclude<ExtArgs> | null
    /**
     * The filter to search for the AchievementApprovalHistory to update in case it exists.
     */
    where: AchievementApprovalHistoryWhereUniqueInput
    /**
     * In case the AchievementApprovalHistory found by the `where` argument doesn't exist, create a new AchievementApprovalHistory with this data.
     */
    create: XOR<AchievementApprovalHistoryCreateInput, AchievementApprovalHistoryUncheckedCreateInput>
    /**
     * In case the AchievementApprovalHistory was found with the provided `where` argument, update it with this data.
     */
    update: XOR<AchievementApprovalHistoryUpdateInput, AchievementApprovalHistoryUncheckedUpdateInput>
  }

  /**
   * AchievementApprovalHistory delete
   */
  export type AchievementApprovalHistoryDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AchievementApprovalHistory
     */
    select?: AchievementApprovalHistorySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AchievementApprovalHistoryInclude<ExtArgs> | null
    /**
     * Filter which AchievementApprovalHistory to delete.
     */
    where: AchievementApprovalHistoryWhereUniqueInput
  }

  /**
   * AchievementApprovalHistory deleteMany
   */
  export type AchievementApprovalHistoryDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which AchievementApprovalHistories to delete
     */
    where?: AchievementApprovalHistoryWhereInput
  }

  /**
   * AchievementApprovalHistory without action
   */
  export type AchievementApprovalHistoryDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AchievementApprovalHistory
     */
    select?: AchievementApprovalHistorySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AchievementApprovalHistoryInclude<ExtArgs> | null
  }


  /**
   * Model AchievementStatistics
   */

  export type AggregateAchievementStatistics = {
    _count: AchievementStatisticsCountAggregateOutputType | null
    _avg: AchievementStatisticsAvgAggregateOutputType | null
    _sum: AchievementStatisticsSumAggregateOutputType | null
    _min: AchievementStatisticsMinAggregateOutputType | null
    _max: AchievementStatisticsMaxAggregateOutputType | null
  }

  export type AchievementStatisticsAvgAggregateOutputType = {
    totalAchievements: number | null
    pendingCount: number | null
    approvedCount: number | null
    rejectedCount: number | null
    totalPoints: number | null
    academicCount: number | null
    nonAcademicCount: number | null
    sportsCount: number | null
    artsCount: number | null
    scienceCount: number | null
    technologyCount: number | null
    schoolCount: number | null
    districtCount: number | null
    regencyCount: number | null
    provinceCount: number | null
    nationalCount: number | null
    internationalCount: number | null
    firstPlaceCount: number | null
    secondPlaceCount: number | null
    thirdPlaceCount: number | null
    semester: number | null
  }

  export type AchievementStatisticsSumAggregateOutputType = {
    totalAchievements: number | null
    pendingCount: number | null
    approvedCount: number | null
    rejectedCount: number | null
    totalPoints: number | null
    academicCount: number | null
    nonAcademicCount: number | null
    sportsCount: number | null
    artsCount: number | null
    scienceCount: number | null
    technologyCount: number | null
    schoolCount: number | null
    districtCount: number | null
    regencyCount: number | null
    provinceCount: number | null
    nationalCount: number | null
    internationalCount: number | null
    firstPlaceCount: number | null
    secondPlaceCount: number | null
    thirdPlaceCount: number | null
    semester: number | null
  }

  export type AchievementStatisticsMinAggregateOutputType = {
    id: string | null
    studentId: string | null
    studentName: string | null
    classId: string | null
    className: string | null
    totalAchievements: number | null
    pendingCount: number | null
    approvedCount: number | null
    rejectedCount: number | null
    totalPoints: number | null
    academicCount: number | null
    nonAcademicCount: number | null
    sportsCount: number | null
    artsCount: number | null
    scienceCount: number | null
    technologyCount: number | null
    schoolCount: number | null
    districtCount: number | null
    regencyCount: number | null
    provinceCount: number | null
    nationalCount: number | null
    internationalCount: number | null
    firstPlaceCount: number | null
    secondPlaceCount: number | null
    thirdPlaceCount: number | null
    isTopAchiever: boolean | null
    lastAchievementDate: Date | null
    academicYear: string | null
    semester: number | null
    updatedAt: Date | null
  }

  export type AchievementStatisticsMaxAggregateOutputType = {
    id: string | null
    studentId: string | null
    studentName: string | null
    classId: string | null
    className: string | null
    totalAchievements: number | null
    pendingCount: number | null
    approvedCount: number | null
    rejectedCount: number | null
    totalPoints: number | null
    academicCount: number | null
    nonAcademicCount: number | null
    sportsCount: number | null
    artsCount: number | null
    scienceCount: number | null
    technologyCount: number | null
    schoolCount: number | null
    districtCount: number | null
    regencyCount: number | null
    provinceCount: number | null
    nationalCount: number | null
    internationalCount: number | null
    firstPlaceCount: number | null
    secondPlaceCount: number | null
    thirdPlaceCount: number | null
    isTopAchiever: boolean | null
    lastAchievementDate: Date | null
    academicYear: string | null
    semester: number | null
    updatedAt: Date | null
  }

  export type AchievementStatisticsCountAggregateOutputType = {
    id: number
    studentId: number
    studentName: number
    classId: number
    className: number
    totalAchievements: number
    pendingCount: number
    approvedCount: number
    rejectedCount: number
    totalPoints: number
    academicCount: number
    nonAcademicCount: number
    sportsCount: number
    artsCount: number
    scienceCount: number
    technologyCount: number
    schoolCount: number
    districtCount: number
    regencyCount: number
    provinceCount: number
    nationalCount: number
    internationalCount: number
    firstPlaceCount: number
    secondPlaceCount: number
    thirdPlaceCount: number
    isTopAchiever: number
    lastAchievementDate: number
    academicYear: number
    semester: number
    updatedAt: number
    _all: number
  }


  export type AchievementStatisticsAvgAggregateInputType = {
    totalAchievements?: true
    pendingCount?: true
    approvedCount?: true
    rejectedCount?: true
    totalPoints?: true
    academicCount?: true
    nonAcademicCount?: true
    sportsCount?: true
    artsCount?: true
    scienceCount?: true
    technologyCount?: true
    schoolCount?: true
    districtCount?: true
    regencyCount?: true
    provinceCount?: true
    nationalCount?: true
    internationalCount?: true
    firstPlaceCount?: true
    secondPlaceCount?: true
    thirdPlaceCount?: true
    semester?: true
  }

  export type AchievementStatisticsSumAggregateInputType = {
    totalAchievements?: true
    pendingCount?: true
    approvedCount?: true
    rejectedCount?: true
    totalPoints?: true
    academicCount?: true
    nonAcademicCount?: true
    sportsCount?: true
    artsCount?: true
    scienceCount?: true
    technologyCount?: true
    schoolCount?: true
    districtCount?: true
    regencyCount?: true
    provinceCount?: true
    nationalCount?: true
    internationalCount?: true
    firstPlaceCount?: true
    secondPlaceCount?: true
    thirdPlaceCount?: true
    semester?: true
  }

  export type AchievementStatisticsMinAggregateInputType = {
    id?: true
    studentId?: true
    studentName?: true
    classId?: true
    className?: true
    totalAchievements?: true
    pendingCount?: true
    approvedCount?: true
    rejectedCount?: true
    totalPoints?: true
    academicCount?: true
    nonAcademicCount?: true
    sportsCount?: true
    artsCount?: true
    scienceCount?: true
    technologyCount?: true
    schoolCount?: true
    districtCount?: true
    regencyCount?: true
    provinceCount?: true
    nationalCount?: true
    internationalCount?: true
    firstPlaceCount?: true
    secondPlaceCount?: true
    thirdPlaceCount?: true
    isTopAchiever?: true
    lastAchievementDate?: true
    academicYear?: true
    semester?: true
    updatedAt?: true
  }

  export type AchievementStatisticsMaxAggregateInputType = {
    id?: true
    studentId?: true
    studentName?: true
    classId?: true
    className?: true
    totalAchievements?: true
    pendingCount?: true
    approvedCount?: true
    rejectedCount?: true
    totalPoints?: true
    academicCount?: true
    nonAcademicCount?: true
    sportsCount?: true
    artsCount?: true
    scienceCount?: true
    technologyCount?: true
    schoolCount?: true
    districtCount?: true
    regencyCount?: true
    provinceCount?: true
    nationalCount?: true
    internationalCount?: true
    firstPlaceCount?: true
    secondPlaceCount?: true
    thirdPlaceCount?: true
    isTopAchiever?: true
    lastAchievementDate?: true
    academicYear?: true
    semester?: true
    updatedAt?: true
  }

  export type AchievementStatisticsCountAggregateInputType = {
    id?: true
    studentId?: true
    studentName?: true
    classId?: true
    className?: true
    totalAchievements?: true
    pendingCount?: true
    approvedCount?: true
    rejectedCount?: true
    totalPoints?: true
    academicCount?: true
    nonAcademicCount?: true
    sportsCount?: true
    artsCount?: true
    scienceCount?: true
    technologyCount?: true
    schoolCount?: true
    districtCount?: true
    regencyCount?: true
    provinceCount?: true
    nationalCount?: true
    internationalCount?: true
    firstPlaceCount?: true
    secondPlaceCount?: true
    thirdPlaceCount?: true
    isTopAchiever?: true
    lastAchievementDate?: true
    academicYear?: true
    semester?: true
    updatedAt?: true
    _all?: true
  }

  export type AchievementStatisticsAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which AchievementStatistics to aggregate.
     */
    where?: AchievementStatisticsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AchievementStatistics to fetch.
     */
    orderBy?: AchievementStatisticsOrderByWithRelationInput | AchievementStatisticsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: AchievementStatisticsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AchievementStatistics from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AchievementStatistics.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned AchievementStatistics
    **/
    _count?: true | AchievementStatisticsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: AchievementStatisticsAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: AchievementStatisticsSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: AchievementStatisticsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: AchievementStatisticsMaxAggregateInputType
  }

  export type GetAchievementStatisticsAggregateType<T extends AchievementStatisticsAggregateArgs> = {
        [P in keyof T & keyof AggregateAchievementStatistics]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAchievementStatistics[P]>
      : GetScalarType<T[P], AggregateAchievementStatistics[P]>
  }




  export type AchievementStatisticsGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AchievementStatisticsWhereInput
    orderBy?: AchievementStatisticsOrderByWithAggregationInput | AchievementStatisticsOrderByWithAggregationInput[]
    by: AchievementStatisticsScalarFieldEnum[] | AchievementStatisticsScalarFieldEnum
    having?: AchievementStatisticsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: AchievementStatisticsCountAggregateInputType | true
    _avg?: AchievementStatisticsAvgAggregateInputType
    _sum?: AchievementStatisticsSumAggregateInputType
    _min?: AchievementStatisticsMinAggregateInputType
    _max?: AchievementStatisticsMaxAggregateInputType
  }

  export type AchievementStatisticsGroupByOutputType = {
    id: string
    studentId: string
    studentName: string
    classId: string
    className: string
    totalAchievements: number
    pendingCount: number
    approvedCount: number
    rejectedCount: number
    totalPoints: number
    academicCount: number
    nonAcademicCount: number
    sportsCount: number
    artsCount: number
    scienceCount: number
    technologyCount: number
    schoolCount: number
    districtCount: number
    regencyCount: number
    provinceCount: number
    nationalCount: number
    internationalCount: number
    firstPlaceCount: number
    secondPlaceCount: number
    thirdPlaceCount: number
    isTopAchiever: boolean
    lastAchievementDate: Date | null
    academicYear: string
    semester: number
    updatedAt: Date
    _count: AchievementStatisticsCountAggregateOutputType | null
    _avg: AchievementStatisticsAvgAggregateOutputType | null
    _sum: AchievementStatisticsSumAggregateOutputType | null
    _min: AchievementStatisticsMinAggregateOutputType | null
    _max: AchievementStatisticsMaxAggregateOutputType | null
  }

  type GetAchievementStatisticsGroupByPayload<T extends AchievementStatisticsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<AchievementStatisticsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof AchievementStatisticsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], AchievementStatisticsGroupByOutputType[P]>
            : GetScalarType<T[P], AchievementStatisticsGroupByOutputType[P]>
        }
      >
    >


  export type AchievementStatisticsSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    studentId?: boolean
    studentName?: boolean
    classId?: boolean
    className?: boolean
    totalAchievements?: boolean
    pendingCount?: boolean
    approvedCount?: boolean
    rejectedCount?: boolean
    totalPoints?: boolean
    academicCount?: boolean
    nonAcademicCount?: boolean
    sportsCount?: boolean
    artsCount?: boolean
    scienceCount?: boolean
    technologyCount?: boolean
    schoolCount?: boolean
    districtCount?: boolean
    regencyCount?: boolean
    provinceCount?: boolean
    nationalCount?: boolean
    internationalCount?: boolean
    firstPlaceCount?: boolean
    secondPlaceCount?: boolean
    thirdPlaceCount?: boolean
    isTopAchiever?: boolean
    lastAchievementDate?: boolean
    academicYear?: boolean
    semester?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["achievementStatistics"]>

  export type AchievementStatisticsSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    studentId?: boolean
    studentName?: boolean
    classId?: boolean
    className?: boolean
    totalAchievements?: boolean
    pendingCount?: boolean
    approvedCount?: boolean
    rejectedCount?: boolean
    totalPoints?: boolean
    academicCount?: boolean
    nonAcademicCount?: boolean
    sportsCount?: boolean
    artsCount?: boolean
    scienceCount?: boolean
    technologyCount?: boolean
    schoolCount?: boolean
    districtCount?: boolean
    regencyCount?: boolean
    provinceCount?: boolean
    nationalCount?: boolean
    internationalCount?: boolean
    firstPlaceCount?: boolean
    secondPlaceCount?: boolean
    thirdPlaceCount?: boolean
    isTopAchiever?: boolean
    lastAchievementDate?: boolean
    academicYear?: boolean
    semester?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["achievementStatistics"]>

  export type AchievementStatisticsSelectScalar = {
    id?: boolean
    studentId?: boolean
    studentName?: boolean
    classId?: boolean
    className?: boolean
    totalAchievements?: boolean
    pendingCount?: boolean
    approvedCount?: boolean
    rejectedCount?: boolean
    totalPoints?: boolean
    academicCount?: boolean
    nonAcademicCount?: boolean
    sportsCount?: boolean
    artsCount?: boolean
    scienceCount?: boolean
    technologyCount?: boolean
    schoolCount?: boolean
    districtCount?: boolean
    regencyCount?: boolean
    provinceCount?: boolean
    nationalCount?: boolean
    internationalCount?: boolean
    firstPlaceCount?: boolean
    secondPlaceCount?: boolean
    thirdPlaceCount?: boolean
    isTopAchiever?: boolean
    lastAchievementDate?: boolean
    academicYear?: boolean
    semester?: boolean
    updatedAt?: boolean
  }


  export type $AchievementStatisticsPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "AchievementStatistics"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: string
      studentId: string
      studentName: string
      classId: string
      className: string
      totalAchievements: number
      pendingCount: number
      approvedCount: number
      rejectedCount: number
      totalPoints: number
      academicCount: number
      nonAcademicCount: number
      sportsCount: number
      artsCount: number
      scienceCount: number
      technologyCount: number
      schoolCount: number
      districtCount: number
      regencyCount: number
      provinceCount: number
      nationalCount: number
      internationalCount: number
      firstPlaceCount: number
      secondPlaceCount: number
      thirdPlaceCount: number
      isTopAchiever: boolean
      lastAchievementDate: Date | null
      academicYear: string
      semester: number
      updatedAt: Date
    }, ExtArgs["result"]["achievementStatistics"]>
    composites: {}
  }

  type AchievementStatisticsGetPayload<S extends boolean | null | undefined | AchievementStatisticsDefaultArgs> = $Result.GetResult<Prisma.$AchievementStatisticsPayload, S>

  type AchievementStatisticsCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<AchievementStatisticsFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: AchievementStatisticsCountAggregateInputType | true
    }

  export interface AchievementStatisticsDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['AchievementStatistics'], meta: { name: 'AchievementStatistics' } }
    /**
     * Find zero or one AchievementStatistics that matches the filter.
     * @param {AchievementStatisticsFindUniqueArgs} args - Arguments to find a AchievementStatistics
     * @example
     * // Get one AchievementStatistics
     * const achievementStatistics = await prisma.achievementStatistics.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends AchievementStatisticsFindUniqueArgs>(args: SelectSubset<T, AchievementStatisticsFindUniqueArgs<ExtArgs>>): Prisma__AchievementStatisticsClient<$Result.GetResult<Prisma.$AchievementStatisticsPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one AchievementStatistics that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {AchievementStatisticsFindUniqueOrThrowArgs} args - Arguments to find a AchievementStatistics
     * @example
     * // Get one AchievementStatistics
     * const achievementStatistics = await prisma.achievementStatistics.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends AchievementStatisticsFindUniqueOrThrowArgs>(args: SelectSubset<T, AchievementStatisticsFindUniqueOrThrowArgs<ExtArgs>>): Prisma__AchievementStatisticsClient<$Result.GetResult<Prisma.$AchievementStatisticsPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first AchievementStatistics that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AchievementStatisticsFindFirstArgs} args - Arguments to find a AchievementStatistics
     * @example
     * // Get one AchievementStatistics
     * const achievementStatistics = await prisma.achievementStatistics.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends AchievementStatisticsFindFirstArgs>(args?: SelectSubset<T, AchievementStatisticsFindFirstArgs<ExtArgs>>): Prisma__AchievementStatisticsClient<$Result.GetResult<Prisma.$AchievementStatisticsPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first AchievementStatistics that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AchievementStatisticsFindFirstOrThrowArgs} args - Arguments to find a AchievementStatistics
     * @example
     * // Get one AchievementStatistics
     * const achievementStatistics = await prisma.achievementStatistics.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends AchievementStatisticsFindFirstOrThrowArgs>(args?: SelectSubset<T, AchievementStatisticsFindFirstOrThrowArgs<ExtArgs>>): Prisma__AchievementStatisticsClient<$Result.GetResult<Prisma.$AchievementStatisticsPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more AchievementStatistics that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AchievementStatisticsFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all AchievementStatistics
     * const achievementStatistics = await prisma.achievementStatistics.findMany()
     * 
     * // Get first 10 AchievementStatistics
     * const achievementStatistics = await prisma.achievementStatistics.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const achievementStatisticsWithIdOnly = await prisma.achievementStatistics.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends AchievementStatisticsFindManyArgs>(args?: SelectSubset<T, AchievementStatisticsFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AchievementStatisticsPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a AchievementStatistics.
     * @param {AchievementStatisticsCreateArgs} args - Arguments to create a AchievementStatistics.
     * @example
     * // Create one AchievementStatistics
     * const AchievementStatistics = await prisma.achievementStatistics.create({
     *   data: {
     *     // ... data to create a AchievementStatistics
     *   }
     * })
     * 
     */
    create<T extends AchievementStatisticsCreateArgs>(args: SelectSubset<T, AchievementStatisticsCreateArgs<ExtArgs>>): Prisma__AchievementStatisticsClient<$Result.GetResult<Prisma.$AchievementStatisticsPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many AchievementStatistics.
     * @param {AchievementStatisticsCreateManyArgs} args - Arguments to create many AchievementStatistics.
     * @example
     * // Create many AchievementStatistics
     * const achievementStatistics = await prisma.achievementStatistics.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends AchievementStatisticsCreateManyArgs>(args?: SelectSubset<T, AchievementStatisticsCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many AchievementStatistics and returns the data saved in the database.
     * @param {AchievementStatisticsCreateManyAndReturnArgs} args - Arguments to create many AchievementStatistics.
     * @example
     * // Create many AchievementStatistics
     * const achievementStatistics = await prisma.achievementStatistics.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many AchievementStatistics and only return the `id`
     * const achievementStatisticsWithIdOnly = await prisma.achievementStatistics.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends AchievementStatisticsCreateManyAndReturnArgs>(args?: SelectSubset<T, AchievementStatisticsCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AchievementStatisticsPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a AchievementStatistics.
     * @param {AchievementStatisticsDeleteArgs} args - Arguments to delete one AchievementStatistics.
     * @example
     * // Delete one AchievementStatistics
     * const AchievementStatistics = await prisma.achievementStatistics.delete({
     *   where: {
     *     // ... filter to delete one AchievementStatistics
     *   }
     * })
     * 
     */
    delete<T extends AchievementStatisticsDeleteArgs>(args: SelectSubset<T, AchievementStatisticsDeleteArgs<ExtArgs>>): Prisma__AchievementStatisticsClient<$Result.GetResult<Prisma.$AchievementStatisticsPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one AchievementStatistics.
     * @param {AchievementStatisticsUpdateArgs} args - Arguments to update one AchievementStatistics.
     * @example
     * // Update one AchievementStatistics
     * const achievementStatistics = await prisma.achievementStatistics.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends AchievementStatisticsUpdateArgs>(args: SelectSubset<T, AchievementStatisticsUpdateArgs<ExtArgs>>): Prisma__AchievementStatisticsClient<$Result.GetResult<Prisma.$AchievementStatisticsPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more AchievementStatistics.
     * @param {AchievementStatisticsDeleteManyArgs} args - Arguments to filter AchievementStatistics to delete.
     * @example
     * // Delete a few AchievementStatistics
     * const { count } = await prisma.achievementStatistics.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends AchievementStatisticsDeleteManyArgs>(args?: SelectSubset<T, AchievementStatisticsDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more AchievementStatistics.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AchievementStatisticsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many AchievementStatistics
     * const achievementStatistics = await prisma.achievementStatistics.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends AchievementStatisticsUpdateManyArgs>(args: SelectSubset<T, AchievementStatisticsUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one AchievementStatistics.
     * @param {AchievementStatisticsUpsertArgs} args - Arguments to update or create a AchievementStatistics.
     * @example
     * // Update or create a AchievementStatistics
     * const achievementStatistics = await prisma.achievementStatistics.upsert({
     *   create: {
     *     // ... data to create a AchievementStatistics
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the AchievementStatistics we want to update
     *   }
     * })
     */
    upsert<T extends AchievementStatisticsUpsertArgs>(args: SelectSubset<T, AchievementStatisticsUpsertArgs<ExtArgs>>): Prisma__AchievementStatisticsClient<$Result.GetResult<Prisma.$AchievementStatisticsPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of AchievementStatistics.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AchievementStatisticsCountArgs} args - Arguments to filter AchievementStatistics to count.
     * @example
     * // Count the number of AchievementStatistics
     * const count = await prisma.achievementStatistics.count({
     *   where: {
     *     // ... the filter for the AchievementStatistics we want to count
     *   }
     * })
    **/
    count<T extends AchievementStatisticsCountArgs>(
      args?: Subset<T, AchievementStatisticsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], AchievementStatisticsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a AchievementStatistics.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AchievementStatisticsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends AchievementStatisticsAggregateArgs>(args: Subset<T, AchievementStatisticsAggregateArgs>): Prisma.PrismaPromise<GetAchievementStatisticsAggregateType<T>>

    /**
     * Group by AchievementStatistics.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AchievementStatisticsGroupByArgs} args - Group by arguments.
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
      T extends AchievementStatisticsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: AchievementStatisticsGroupByArgs['orderBy'] }
        : { orderBy?: AchievementStatisticsGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, AchievementStatisticsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAchievementStatisticsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the AchievementStatistics model
   */
  readonly fields: AchievementStatisticsFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for AchievementStatistics.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__AchievementStatisticsClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
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
   * Fields of the AchievementStatistics model
   */ 
  interface AchievementStatisticsFieldRefs {
    readonly id: FieldRef<"AchievementStatistics", 'String'>
    readonly studentId: FieldRef<"AchievementStatistics", 'String'>
    readonly studentName: FieldRef<"AchievementStatistics", 'String'>
    readonly classId: FieldRef<"AchievementStatistics", 'String'>
    readonly className: FieldRef<"AchievementStatistics", 'String'>
    readonly totalAchievements: FieldRef<"AchievementStatistics", 'Int'>
    readonly pendingCount: FieldRef<"AchievementStatistics", 'Int'>
    readonly approvedCount: FieldRef<"AchievementStatistics", 'Int'>
    readonly rejectedCount: FieldRef<"AchievementStatistics", 'Int'>
    readonly totalPoints: FieldRef<"AchievementStatistics", 'Int'>
    readonly academicCount: FieldRef<"AchievementStatistics", 'Int'>
    readonly nonAcademicCount: FieldRef<"AchievementStatistics", 'Int'>
    readonly sportsCount: FieldRef<"AchievementStatistics", 'Int'>
    readonly artsCount: FieldRef<"AchievementStatistics", 'Int'>
    readonly scienceCount: FieldRef<"AchievementStatistics", 'Int'>
    readonly technologyCount: FieldRef<"AchievementStatistics", 'Int'>
    readonly schoolCount: FieldRef<"AchievementStatistics", 'Int'>
    readonly districtCount: FieldRef<"AchievementStatistics", 'Int'>
    readonly regencyCount: FieldRef<"AchievementStatistics", 'Int'>
    readonly provinceCount: FieldRef<"AchievementStatistics", 'Int'>
    readonly nationalCount: FieldRef<"AchievementStatistics", 'Int'>
    readonly internationalCount: FieldRef<"AchievementStatistics", 'Int'>
    readonly firstPlaceCount: FieldRef<"AchievementStatistics", 'Int'>
    readonly secondPlaceCount: FieldRef<"AchievementStatistics", 'Int'>
    readonly thirdPlaceCount: FieldRef<"AchievementStatistics", 'Int'>
    readonly isTopAchiever: FieldRef<"AchievementStatistics", 'Boolean'>
    readonly lastAchievementDate: FieldRef<"AchievementStatistics", 'DateTime'>
    readonly academicYear: FieldRef<"AchievementStatistics", 'String'>
    readonly semester: FieldRef<"AchievementStatistics", 'Int'>
    readonly updatedAt: FieldRef<"AchievementStatistics", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * AchievementStatistics findUnique
   */
  export type AchievementStatisticsFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AchievementStatistics
     */
    select?: AchievementStatisticsSelect<ExtArgs> | null
    /**
     * Filter, which AchievementStatistics to fetch.
     */
    where: AchievementStatisticsWhereUniqueInput
  }

  /**
   * AchievementStatistics findUniqueOrThrow
   */
  export type AchievementStatisticsFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AchievementStatistics
     */
    select?: AchievementStatisticsSelect<ExtArgs> | null
    /**
     * Filter, which AchievementStatistics to fetch.
     */
    where: AchievementStatisticsWhereUniqueInput
  }

  /**
   * AchievementStatistics findFirst
   */
  export type AchievementStatisticsFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AchievementStatistics
     */
    select?: AchievementStatisticsSelect<ExtArgs> | null
    /**
     * Filter, which AchievementStatistics to fetch.
     */
    where?: AchievementStatisticsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AchievementStatistics to fetch.
     */
    orderBy?: AchievementStatisticsOrderByWithRelationInput | AchievementStatisticsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for AchievementStatistics.
     */
    cursor?: AchievementStatisticsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AchievementStatistics from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AchievementStatistics.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of AchievementStatistics.
     */
    distinct?: AchievementStatisticsScalarFieldEnum | AchievementStatisticsScalarFieldEnum[]
  }

  /**
   * AchievementStatistics findFirstOrThrow
   */
  export type AchievementStatisticsFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AchievementStatistics
     */
    select?: AchievementStatisticsSelect<ExtArgs> | null
    /**
     * Filter, which AchievementStatistics to fetch.
     */
    where?: AchievementStatisticsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AchievementStatistics to fetch.
     */
    orderBy?: AchievementStatisticsOrderByWithRelationInput | AchievementStatisticsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for AchievementStatistics.
     */
    cursor?: AchievementStatisticsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AchievementStatistics from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AchievementStatistics.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of AchievementStatistics.
     */
    distinct?: AchievementStatisticsScalarFieldEnum | AchievementStatisticsScalarFieldEnum[]
  }

  /**
   * AchievementStatistics findMany
   */
  export type AchievementStatisticsFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AchievementStatistics
     */
    select?: AchievementStatisticsSelect<ExtArgs> | null
    /**
     * Filter, which AchievementStatistics to fetch.
     */
    where?: AchievementStatisticsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AchievementStatistics to fetch.
     */
    orderBy?: AchievementStatisticsOrderByWithRelationInput | AchievementStatisticsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing AchievementStatistics.
     */
    cursor?: AchievementStatisticsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AchievementStatistics from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AchievementStatistics.
     */
    skip?: number
    distinct?: AchievementStatisticsScalarFieldEnum | AchievementStatisticsScalarFieldEnum[]
  }

  /**
   * AchievementStatistics create
   */
  export type AchievementStatisticsCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AchievementStatistics
     */
    select?: AchievementStatisticsSelect<ExtArgs> | null
    /**
     * The data needed to create a AchievementStatistics.
     */
    data: XOR<AchievementStatisticsCreateInput, AchievementStatisticsUncheckedCreateInput>
  }

  /**
   * AchievementStatistics createMany
   */
  export type AchievementStatisticsCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many AchievementStatistics.
     */
    data: AchievementStatisticsCreateManyInput | AchievementStatisticsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * AchievementStatistics createManyAndReturn
   */
  export type AchievementStatisticsCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AchievementStatistics
     */
    select?: AchievementStatisticsSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many AchievementStatistics.
     */
    data: AchievementStatisticsCreateManyInput | AchievementStatisticsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * AchievementStatistics update
   */
  export type AchievementStatisticsUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AchievementStatistics
     */
    select?: AchievementStatisticsSelect<ExtArgs> | null
    /**
     * The data needed to update a AchievementStatistics.
     */
    data: XOR<AchievementStatisticsUpdateInput, AchievementStatisticsUncheckedUpdateInput>
    /**
     * Choose, which AchievementStatistics to update.
     */
    where: AchievementStatisticsWhereUniqueInput
  }

  /**
   * AchievementStatistics updateMany
   */
  export type AchievementStatisticsUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update AchievementStatistics.
     */
    data: XOR<AchievementStatisticsUpdateManyMutationInput, AchievementStatisticsUncheckedUpdateManyInput>
    /**
     * Filter which AchievementStatistics to update
     */
    where?: AchievementStatisticsWhereInput
  }

  /**
   * AchievementStatistics upsert
   */
  export type AchievementStatisticsUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AchievementStatistics
     */
    select?: AchievementStatisticsSelect<ExtArgs> | null
    /**
     * The filter to search for the AchievementStatistics to update in case it exists.
     */
    where: AchievementStatisticsWhereUniqueInput
    /**
     * In case the AchievementStatistics found by the `where` argument doesn't exist, create a new AchievementStatistics with this data.
     */
    create: XOR<AchievementStatisticsCreateInput, AchievementStatisticsUncheckedCreateInput>
    /**
     * In case the AchievementStatistics was found with the provided `where` argument, update it with this data.
     */
    update: XOR<AchievementStatisticsUpdateInput, AchievementStatisticsUncheckedUpdateInput>
  }

  /**
   * AchievementStatistics delete
   */
  export type AchievementStatisticsDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AchievementStatistics
     */
    select?: AchievementStatisticsSelect<ExtArgs> | null
    /**
     * Filter which AchievementStatistics to delete.
     */
    where: AchievementStatisticsWhereUniqueInput
  }

  /**
   * AchievementStatistics deleteMany
   */
  export type AchievementStatisticsDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which AchievementStatistics to delete
     */
    where?: AchievementStatisticsWhereInput
  }

  /**
   * AchievementStatistics without action
   */
  export type AchievementStatisticsDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AchievementStatistics
     */
    select?: AchievementStatisticsSelect<ExtArgs> | null
  }


  /**
   * Model HallOfFame
   */

  export type AggregateHallOfFame = {
    _count: HallOfFameCountAggregateOutputType | null
    _avg: HallOfFameAvgAggregateOutputType | null
    _sum: HallOfFameSumAggregateOutputType | null
    _min: HallOfFameMinAggregateOutputType | null
    _max: HallOfFameMaxAggregateOutputType | null
  }

  export type HallOfFameAvgAggregateOutputType = {
    displayOrder: number | null
  }

  export type HallOfFameSumAggregateOutputType = {
    displayOrder: number | null
  }

  export type HallOfFameMinAggregateOutputType = {
    id: string | null
    studentId: string | null
    studentName: string | null
    studentClass: string | null
    achievementId: string | null
    achievementTitle: string | null
    level: $Enums.AchievementLevel | null
    rank: $Enums.AchievementRank | null
    achievementDate: Date | null
    photoUrl: string | null
    academicYear: string | null
    displayOrder: number | null
    isActive: boolean | null
    createdAt: Date | null
  }

  export type HallOfFameMaxAggregateOutputType = {
    id: string | null
    studentId: string | null
    studentName: string | null
    studentClass: string | null
    achievementId: string | null
    achievementTitle: string | null
    level: $Enums.AchievementLevel | null
    rank: $Enums.AchievementRank | null
    achievementDate: Date | null
    photoUrl: string | null
    academicYear: string | null
    displayOrder: number | null
    isActive: boolean | null
    createdAt: Date | null
  }

  export type HallOfFameCountAggregateOutputType = {
    id: number
    studentId: number
    studentName: number
    studentClass: number
    achievementId: number
    achievementTitle: number
    level: number
    rank: number
    achievementDate: number
    photoUrl: number
    academicYear: number
    displayOrder: number
    isActive: number
    createdAt: number
    _all: number
  }


  export type HallOfFameAvgAggregateInputType = {
    displayOrder?: true
  }

  export type HallOfFameSumAggregateInputType = {
    displayOrder?: true
  }

  export type HallOfFameMinAggregateInputType = {
    id?: true
    studentId?: true
    studentName?: true
    studentClass?: true
    achievementId?: true
    achievementTitle?: true
    level?: true
    rank?: true
    achievementDate?: true
    photoUrl?: true
    academicYear?: true
    displayOrder?: true
    isActive?: true
    createdAt?: true
  }

  export type HallOfFameMaxAggregateInputType = {
    id?: true
    studentId?: true
    studentName?: true
    studentClass?: true
    achievementId?: true
    achievementTitle?: true
    level?: true
    rank?: true
    achievementDate?: true
    photoUrl?: true
    academicYear?: true
    displayOrder?: true
    isActive?: true
    createdAt?: true
  }

  export type HallOfFameCountAggregateInputType = {
    id?: true
    studentId?: true
    studentName?: true
    studentClass?: true
    achievementId?: true
    achievementTitle?: true
    level?: true
    rank?: true
    achievementDate?: true
    photoUrl?: true
    academicYear?: true
    displayOrder?: true
    isActive?: true
    createdAt?: true
    _all?: true
  }

  export type HallOfFameAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which HallOfFame to aggregate.
     */
    where?: HallOfFameWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of HallOfFames to fetch.
     */
    orderBy?: HallOfFameOrderByWithRelationInput | HallOfFameOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: HallOfFameWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` HallOfFames from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` HallOfFames.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned HallOfFames
    **/
    _count?: true | HallOfFameCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: HallOfFameAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: HallOfFameSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: HallOfFameMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: HallOfFameMaxAggregateInputType
  }

  export type GetHallOfFameAggregateType<T extends HallOfFameAggregateArgs> = {
        [P in keyof T & keyof AggregateHallOfFame]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateHallOfFame[P]>
      : GetScalarType<T[P], AggregateHallOfFame[P]>
  }




  export type HallOfFameGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: HallOfFameWhereInput
    orderBy?: HallOfFameOrderByWithAggregationInput | HallOfFameOrderByWithAggregationInput[]
    by: HallOfFameScalarFieldEnum[] | HallOfFameScalarFieldEnum
    having?: HallOfFameScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: HallOfFameCountAggregateInputType | true
    _avg?: HallOfFameAvgAggregateInputType
    _sum?: HallOfFameSumAggregateInputType
    _min?: HallOfFameMinAggregateInputType
    _max?: HallOfFameMaxAggregateInputType
  }

  export type HallOfFameGroupByOutputType = {
    id: string
    studentId: string
    studentName: string
    studentClass: string
    achievementId: string
    achievementTitle: string
    level: $Enums.AchievementLevel
    rank: $Enums.AchievementRank
    achievementDate: Date
    photoUrl: string | null
    academicYear: string
    displayOrder: number
    isActive: boolean
    createdAt: Date
    _count: HallOfFameCountAggregateOutputType | null
    _avg: HallOfFameAvgAggregateOutputType | null
    _sum: HallOfFameSumAggregateOutputType | null
    _min: HallOfFameMinAggregateOutputType | null
    _max: HallOfFameMaxAggregateOutputType | null
  }

  type GetHallOfFameGroupByPayload<T extends HallOfFameGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<HallOfFameGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof HallOfFameGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], HallOfFameGroupByOutputType[P]>
            : GetScalarType<T[P], HallOfFameGroupByOutputType[P]>
        }
      >
    >


  export type HallOfFameSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    studentId?: boolean
    studentName?: boolean
    studentClass?: boolean
    achievementId?: boolean
    achievementTitle?: boolean
    level?: boolean
    rank?: boolean
    achievementDate?: boolean
    photoUrl?: boolean
    academicYear?: boolean
    displayOrder?: boolean
    isActive?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["hallOfFame"]>

  export type HallOfFameSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    studentId?: boolean
    studentName?: boolean
    studentClass?: boolean
    achievementId?: boolean
    achievementTitle?: boolean
    level?: boolean
    rank?: boolean
    achievementDate?: boolean
    photoUrl?: boolean
    academicYear?: boolean
    displayOrder?: boolean
    isActive?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["hallOfFame"]>

  export type HallOfFameSelectScalar = {
    id?: boolean
    studentId?: boolean
    studentName?: boolean
    studentClass?: boolean
    achievementId?: boolean
    achievementTitle?: boolean
    level?: boolean
    rank?: boolean
    achievementDate?: boolean
    photoUrl?: boolean
    academicYear?: boolean
    displayOrder?: boolean
    isActive?: boolean
    createdAt?: boolean
  }


  export type $HallOfFamePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "HallOfFame"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: string
      studentId: string
      studentName: string
      studentClass: string
      achievementId: string
      achievementTitle: string
      level: $Enums.AchievementLevel
      rank: $Enums.AchievementRank
      achievementDate: Date
      photoUrl: string | null
      academicYear: string
      displayOrder: number
      isActive: boolean
      createdAt: Date
    }, ExtArgs["result"]["hallOfFame"]>
    composites: {}
  }

  type HallOfFameGetPayload<S extends boolean | null | undefined | HallOfFameDefaultArgs> = $Result.GetResult<Prisma.$HallOfFamePayload, S>

  type HallOfFameCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<HallOfFameFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: HallOfFameCountAggregateInputType | true
    }

  export interface HallOfFameDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['HallOfFame'], meta: { name: 'HallOfFame' } }
    /**
     * Find zero or one HallOfFame that matches the filter.
     * @param {HallOfFameFindUniqueArgs} args - Arguments to find a HallOfFame
     * @example
     * // Get one HallOfFame
     * const hallOfFame = await prisma.hallOfFame.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends HallOfFameFindUniqueArgs>(args: SelectSubset<T, HallOfFameFindUniqueArgs<ExtArgs>>): Prisma__HallOfFameClient<$Result.GetResult<Prisma.$HallOfFamePayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one HallOfFame that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {HallOfFameFindUniqueOrThrowArgs} args - Arguments to find a HallOfFame
     * @example
     * // Get one HallOfFame
     * const hallOfFame = await prisma.hallOfFame.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends HallOfFameFindUniqueOrThrowArgs>(args: SelectSubset<T, HallOfFameFindUniqueOrThrowArgs<ExtArgs>>): Prisma__HallOfFameClient<$Result.GetResult<Prisma.$HallOfFamePayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first HallOfFame that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HallOfFameFindFirstArgs} args - Arguments to find a HallOfFame
     * @example
     * // Get one HallOfFame
     * const hallOfFame = await prisma.hallOfFame.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends HallOfFameFindFirstArgs>(args?: SelectSubset<T, HallOfFameFindFirstArgs<ExtArgs>>): Prisma__HallOfFameClient<$Result.GetResult<Prisma.$HallOfFamePayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first HallOfFame that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HallOfFameFindFirstOrThrowArgs} args - Arguments to find a HallOfFame
     * @example
     * // Get one HallOfFame
     * const hallOfFame = await prisma.hallOfFame.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends HallOfFameFindFirstOrThrowArgs>(args?: SelectSubset<T, HallOfFameFindFirstOrThrowArgs<ExtArgs>>): Prisma__HallOfFameClient<$Result.GetResult<Prisma.$HallOfFamePayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more HallOfFames that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HallOfFameFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all HallOfFames
     * const hallOfFames = await prisma.hallOfFame.findMany()
     * 
     * // Get first 10 HallOfFames
     * const hallOfFames = await prisma.hallOfFame.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const hallOfFameWithIdOnly = await prisma.hallOfFame.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends HallOfFameFindManyArgs>(args?: SelectSubset<T, HallOfFameFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$HallOfFamePayload<ExtArgs>, T, "findMany">>

    /**
     * Create a HallOfFame.
     * @param {HallOfFameCreateArgs} args - Arguments to create a HallOfFame.
     * @example
     * // Create one HallOfFame
     * const HallOfFame = await prisma.hallOfFame.create({
     *   data: {
     *     // ... data to create a HallOfFame
     *   }
     * })
     * 
     */
    create<T extends HallOfFameCreateArgs>(args: SelectSubset<T, HallOfFameCreateArgs<ExtArgs>>): Prisma__HallOfFameClient<$Result.GetResult<Prisma.$HallOfFamePayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many HallOfFames.
     * @param {HallOfFameCreateManyArgs} args - Arguments to create many HallOfFames.
     * @example
     * // Create many HallOfFames
     * const hallOfFame = await prisma.hallOfFame.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends HallOfFameCreateManyArgs>(args?: SelectSubset<T, HallOfFameCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many HallOfFames and returns the data saved in the database.
     * @param {HallOfFameCreateManyAndReturnArgs} args - Arguments to create many HallOfFames.
     * @example
     * // Create many HallOfFames
     * const hallOfFame = await prisma.hallOfFame.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many HallOfFames and only return the `id`
     * const hallOfFameWithIdOnly = await prisma.hallOfFame.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends HallOfFameCreateManyAndReturnArgs>(args?: SelectSubset<T, HallOfFameCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$HallOfFamePayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a HallOfFame.
     * @param {HallOfFameDeleteArgs} args - Arguments to delete one HallOfFame.
     * @example
     * // Delete one HallOfFame
     * const HallOfFame = await prisma.hallOfFame.delete({
     *   where: {
     *     // ... filter to delete one HallOfFame
     *   }
     * })
     * 
     */
    delete<T extends HallOfFameDeleteArgs>(args: SelectSubset<T, HallOfFameDeleteArgs<ExtArgs>>): Prisma__HallOfFameClient<$Result.GetResult<Prisma.$HallOfFamePayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one HallOfFame.
     * @param {HallOfFameUpdateArgs} args - Arguments to update one HallOfFame.
     * @example
     * // Update one HallOfFame
     * const hallOfFame = await prisma.hallOfFame.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends HallOfFameUpdateArgs>(args: SelectSubset<T, HallOfFameUpdateArgs<ExtArgs>>): Prisma__HallOfFameClient<$Result.GetResult<Prisma.$HallOfFamePayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more HallOfFames.
     * @param {HallOfFameDeleteManyArgs} args - Arguments to filter HallOfFames to delete.
     * @example
     * // Delete a few HallOfFames
     * const { count } = await prisma.hallOfFame.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends HallOfFameDeleteManyArgs>(args?: SelectSubset<T, HallOfFameDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more HallOfFames.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HallOfFameUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many HallOfFames
     * const hallOfFame = await prisma.hallOfFame.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends HallOfFameUpdateManyArgs>(args: SelectSubset<T, HallOfFameUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one HallOfFame.
     * @param {HallOfFameUpsertArgs} args - Arguments to update or create a HallOfFame.
     * @example
     * // Update or create a HallOfFame
     * const hallOfFame = await prisma.hallOfFame.upsert({
     *   create: {
     *     // ... data to create a HallOfFame
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the HallOfFame we want to update
     *   }
     * })
     */
    upsert<T extends HallOfFameUpsertArgs>(args: SelectSubset<T, HallOfFameUpsertArgs<ExtArgs>>): Prisma__HallOfFameClient<$Result.GetResult<Prisma.$HallOfFamePayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of HallOfFames.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HallOfFameCountArgs} args - Arguments to filter HallOfFames to count.
     * @example
     * // Count the number of HallOfFames
     * const count = await prisma.hallOfFame.count({
     *   where: {
     *     // ... the filter for the HallOfFames we want to count
     *   }
     * })
    **/
    count<T extends HallOfFameCountArgs>(
      args?: Subset<T, HallOfFameCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], HallOfFameCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a HallOfFame.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HallOfFameAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends HallOfFameAggregateArgs>(args: Subset<T, HallOfFameAggregateArgs>): Prisma.PrismaPromise<GetHallOfFameAggregateType<T>>

    /**
     * Group by HallOfFame.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HallOfFameGroupByArgs} args - Group by arguments.
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
      T extends HallOfFameGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: HallOfFameGroupByArgs['orderBy'] }
        : { orderBy?: HallOfFameGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, HallOfFameGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetHallOfFameGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the HallOfFame model
   */
  readonly fields: HallOfFameFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for HallOfFame.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__HallOfFameClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
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
   * Fields of the HallOfFame model
   */ 
  interface HallOfFameFieldRefs {
    readonly id: FieldRef<"HallOfFame", 'String'>
    readonly studentId: FieldRef<"HallOfFame", 'String'>
    readonly studentName: FieldRef<"HallOfFame", 'String'>
    readonly studentClass: FieldRef<"HallOfFame", 'String'>
    readonly achievementId: FieldRef<"HallOfFame", 'String'>
    readonly achievementTitle: FieldRef<"HallOfFame", 'String'>
    readonly level: FieldRef<"HallOfFame", 'AchievementLevel'>
    readonly rank: FieldRef<"HallOfFame", 'AchievementRank'>
    readonly achievementDate: FieldRef<"HallOfFame", 'DateTime'>
    readonly photoUrl: FieldRef<"HallOfFame", 'String'>
    readonly academicYear: FieldRef<"HallOfFame", 'String'>
    readonly displayOrder: FieldRef<"HallOfFame", 'Int'>
    readonly isActive: FieldRef<"HallOfFame", 'Boolean'>
    readonly createdAt: FieldRef<"HallOfFame", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * HallOfFame findUnique
   */
  export type HallOfFameFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the HallOfFame
     */
    select?: HallOfFameSelect<ExtArgs> | null
    /**
     * Filter, which HallOfFame to fetch.
     */
    where: HallOfFameWhereUniqueInput
  }

  /**
   * HallOfFame findUniqueOrThrow
   */
  export type HallOfFameFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the HallOfFame
     */
    select?: HallOfFameSelect<ExtArgs> | null
    /**
     * Filter, which HallOfFame to fetch.
     */
    where: HallOfFameWhereUniqueInput
  }

  /**
   * HallOfFame findFirst
   */
  export type HallOfFameFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the HallOfFame
     */
    select?: HallOfFameSelect<ExtArgs> | null
    /**
     * Filter, which HallOfFame to fetch.
     */
    where?: HallOfFameWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of HallOfFames to fetch.
     */
    orderBy?: HallOfFameOrderByWithRelationInput | HallOfFameOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for HallOfFames.
     */
    cursor?: HallOfFameWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` HallOfFames from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` HallOfFames.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of HallOfFames.
     */
    distinct?: HallOfFameScalarFieldEnum | HallOfFameScalarFieldEnum[]
  }

  /**
   * HallOfFame findFirstOrThrow
   */
  export type HallOfFameFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the HallOfFame
     */
    select?: HallOfFameSelect<ExtArgs> | null
    /**
     * Filter, which HallOfFame to fetch.
     */
    where?: HallOfFameWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of HallOfFames to fetch.
     */
    orderBy?: HallOfFameOrderByWithRelationInput | HallOfFameOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for HallOfFames.
     */
    cursor?: HallOfFameWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` HallOfFames from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` HallOfFames.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of HallOfFames.
     */
    distinct?: HallOfFameScalarFieldEnum | HallOfFameScalarFieldEnum[]
  }

  /**
   * HallOfFame findMany
   */
  export type HallOfFameFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the HallOfFame
     */
    select?: HallOfFameSelect<ExtArgs> | null
    /**
     * Filter, which HallOfFames to fetch.
     */
    where?: HallOfFameWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of HallOfFames to fetch.
     */
    orderBy?: HallOfFameOrderByWithRelationInput | HallOfFameOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing HallOfFames.
     */
    cursor?: HallOfFameWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` HallOfFames from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` HallOfFames.
     */
    skip?: number
    distinct?: HallOfFameScalarFieldEnum | HallOfFameScalarFieldEnum[]
  }

  /**
   * HallOfFame create
   */
  export type HallOfFameCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the HallOfFame
     */
    select?: HallOfFameSelect<ExtArgs> | null
    /**
     * The data needed to create a HallOfFame.
     */
    data: XOR<HallOfFameCreateInput, HallOfFameUncheckedCreateInput>
  }

  /**
   * HallOfFame createMany
   */
  export type HallOfFameCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many HallOfFames.
     */
    data: HallOfFameCreateManyInput | HallOfFameCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * HallOfFame createManyAndReturn
   */
  export type HallOfFameCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the HallOfFame
     */
    select?: HallOfFameSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many HallOfFames.
     */
    data: HallOfFameCreateManyInput | HallOfFameCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * HallOfFame update
   */
  export type HallOfFameUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the HallOfFame
     */
    select?: HallOfFameSelect<ExtArgs> | null
    /**
     * The data needed to update a HallOfFame.
     */
    data: XOR<HallOfFameUpdateInput, HallOfFameUncheckedUpdateInput>
    /**
     * Choose, which HallOfFame to update.
     */
    where: HallOfFameWhereUniqueInput
  }

  /**
   * HallOfFame updateMany
   */
  export type HallOfFameUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update HallOfFames.
     */
    data: XOR<HallOfFameUpdateManyMutationInput, HallOfFameUncheckedUpdateManyInput>
    /**
     * Filter which HallOfFames to update
     */
    where?: HallOfFameWhereInput
  }

  /**
   * HallOfFame upsert
   */
  export type HallOfFameUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the HallOfFame
     */
    select?: HallOfFameSelect<ExtArgs> | null
    /**
     * The filter to search for the HallOfFame to update in case it exists.
     */
    where: HallOfFameWhereUniqueInput
    /**
     * In case the HallOfFame found by the `where` argument doesn't exist, create a new HallOfFame with this data.
     */
    create: XOR<HallOfFameCreateInput, HallOfFameUncheckedCreateInput>
    /**
     * In case the HallOfFame was found with the provided `where` argument, update it with this data.
     */
    update: XOR<HallOfFameUpdateInput, HallOfFameUncheckedUpdateInput>
  }

  /**
   * HallOfFame delete
   */
  export type HallOfFameDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the HallOfFame
     */
    select?: HallOfFameSelect<ExtArgs> | null
    /**
     * Filter which HallOfFame to delete.
     */
    where: HallOfFameWhereUniqueInput
  }

  /**
   * HallOfFame deleteMany
   */
  export type HallOfFameDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which HallOfFames to delete
     */
    where?: HallOfFameWhereInput
  }

  /**
   * HallOfFame without action
   */
  export type HallOfFameDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the HallOfFame
     */
    select?: HallOfFameSelect<ExtArgs> | null
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


  export const AchievementScalarFieldEnum: {
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
    categoryType: 'categoryType',
    title: 'title',
    description: 'description',
    achievementDate: 'achievementDate',
    location: 'location',
    organizer: 'organizer',
    level: 'level',
    rank: 'rank',
    isTeamAchievement: 'isTeamAchievement',
    teamName: 'teamName',
    teamMembers: 'teamMembers',
    studentRole: 'studentRole',
    points: 'points',
    basePoints: 'basePoints',
    levelMultiplier: 'levelMultiplier',
    rankMultiplier: 'rankMultiplier',
    certificateUrl: 'certificateUrl',
    evidenceUrls: 'evidenceUrls',
    photoUrls: 'photoUrls',
    status: 'status',
    approvedAt: 'approvedAt',
    approvedBy: 'approvedBy',
    approvedByName: 'approvedByName',
    bkNotes: 'bkNotes',
    rejectedAt: 'rejectedAt',
    rejectedBy: 'rejectedBy',
    rejectedByName: 'rejectedByName',
    rejectionReason: 'rejectionReason',
    isPublished: 'isPublished',
    publishedAt: 'publishedAt',
    isFeatured: 'isFeatured',
    featuredUntil: 'featuredUntil',
    academicYear: 'academicYear',
    semester: 'semester',
    notificationSent: 'notificationSent',
    notificationSentAt: 'notificationSentAt',
    viewCount: 'viewCount',
    isActive: 'isActive',
    createdBy: 'createdBy',
    createdAt: 'createdAt',
    updatedBy: 'updatedBy',
    updatedAt: 'updatedAt',
    deletedAt: 'deletedAt',
    deletedBy: 'deletedBy'
  };

  export type AchievementScalarFieldEnum = (typeof AchievementScalarFieldEnum)[keyof typeof AchievementScalarFieldEnum]


  export const AchievementApprovalHistoryScalarFieldEnum: {
    id: 'id',
    achievementId: 'achievementId',
    action: 'action',
    fromStatus: 'fromStatus',
    toStatus: 'toStatus',
    approverUserId: 'approverUserId',
    approverName: 'approverName',
    approverRole: 'approverRole',
    notes: 'notes',
    actionDate: 'actionDate'
  };

  export type AchievementApprovalHistoryScalarFieldEnum = (typeof AchievementApprovalHistoryScalarFieldEnum)[keyof typeof AchievementApprovalHistoryScalarFieldEnum]


  export const AchievementStatisticsScalarFieldEnum: {
    id: 'id',
    studentId: 'studentId',
    studentName: 'studentName',
    classId: 'classId',
    className: 'className',
    totalAchievements: 'totalAchievements',
    pendingCount: 'pendingCount',
    approvedCount: 'approvedCount',
    rejectedCount: 'rejectedCount',
    totalPoints: 'totalPoints',
    academicCount: 'academicCount',
    nonAcademicCount: 'nonAcademicCount',
    sportsCount: 'sportsCount',
    artsCount: 'artsCount',
    scienceCount: 'scienceCount',
    technologyCount: 'technologyCount',
    schoolCount: 'schoolCount',
    districtCount: 'districtCount',
    regencyCount: 'regencyCount',
    provinceCount: 'provinceCount',
    nationalCount: 'nationalCount',
    internationalCount: 'internationalCount',
    firstPlaceCount: 'firstPlaceCount',
    secondPlaceCount: 'secondPlaceCount',
    thirdPlaceCount: 'thirdPlaceCount',
    isTopAchiever: 'isTopAchiever',
    lastAchievementDate: 'lastAchievementDate',
    academicYear: 'academicYear',
    semester: 'semester',
    updatedAt: 'updatedAt'
  };

  export type AchievementStatisticsScalarFieldEnum = (typeof AchievementStatisticsScalarFieldEnum)[keyof typeof AchievementStatisticsScalarFieldEnum]


  export const HallOfFameScalarFieldEnum: {
    id: 'id',
    studentId: 'studentId',
    studentName: 'studentName',
    studentClass: 'studentClass',
    achievementId: 'achievementId',
    achievementTitle: 'achievementTitle',
    level: 'level',
    rank: 'rank',
    achievementDate: 'achievementDate',
    photoUrl: 'photoUrl',
    academicYear: 'academicYear',
    displayOrder: 'displayOrder',
    isActive: 'isActive',
    createdAt: 'createdAt'
  };

  export type HallOfFameScalarFieldEnum = (typeof HallOfFameScalarFieldEnum)[keyof typeof HallOfFameScalarFieldEnum]


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
   * Reference to a field of type 'AchievementType'
   */
  export type EnumAchievementTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'AchievementType'>
    


  /**
   * Reference to a field of type 'AchievementType[]'
   */
  export type ListEnumAchievementTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'AchievementType[]'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'AchievementLevel'
   */
  export type EnumAchievementLevelFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'AchievementLevel'>
    


  /**
   * Reference to a field of type 'AchievementLevel[]'
   */
  export type ListEnumAchievementLevelFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'AchievementLevel[]'>
    


  /**
   * Reference to a field of type 'AchievementRank'
   */
  export type EnumAchievementRankFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'AchievementRank'>
    


  /**
   * Reference to a field of type 'AchievementRank[]'
   */
  export type ListEnumAchievementRankFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'AchievementRank[]'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


  /**
   * Reference to a field of type 'Json'
   */
  export type JsonFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Json'>
    


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    


  /**
   * Reference to a field of type 'AchievementStatus'
   */
  export type EnumAchievementStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'AchievementStatus'>
    


  /**
   * Reference to a field of type 'AchievementStatus[]'
   */
  export type ListEnumAchievementStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'AchievementStatus[]'>
    


  /**
   * Reference to a field of type 'ApprovalAction'
   */
  export type EnumApprovalActionFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'ApprovalAction'>
    


  /**
   * Reference to a field of type 'ApprovalAction[]'
   */
  export type ListEnumApprovalActionFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'ApprovalAction[]'>
    
  /**
   * Deep Input Types
   */


  export type AchievementWhereInput = {
    AND?: AchievementWhereInput | AchievementWhereInput[]
    OR?: AchievementWhereInput[]
    NOT?: AchievementWhereInput | AchievementWhereInput[]
    id?: StringFilter<"Achievement"> | string
    studentId?: StringFilter<"Achievement"> | string
    studentNisn?: StringFilter<"Achievement"> | string
    studentName?: StringFilter<"Achievement"> | string
    studentClass?: StringFilter<"Achievement"> | string
    reportedBy?: StringFilter<"Achievement"> | string
    reportedByName?: StringFilter<"Achievement"> | string
    reporterRole?: StringFilter<"Achievement"> | string
    categoryId?: StringFilter<"Achievement"> | string
    categoryCode?: StringFilter<"Achievement"> | string
    categoryName?: StringFilter<"Achievement"> | string
    categoryType?: EnumAchievementTypeFilter<"Achievement"> | $Enums.AchievementType
    title?: StringFilter<"Achievement"> | string
    description?: StringFilter<"Achievement"> | string
    achievementDate?: DateTimeFilter<"Achievement"> | Date | string
    location?: StringNullableFilter<"Achievement"> | string | null
    organizer?: StringNullableFilter<"Achievement"> | string | null
    level?: EnumAchievementLevelFilter<"Achievement"> | $Enums.AchievementLevel
    rank?: EnumAchievementRankNullableFilter<"Achievement"> | $Enums.AchievementRank | null
    isTeamAchievement?: BoolFilter<"Achievement"> | boolean
    teamName?: StringNullableFilter<"Achievement"> | string | null
    teamMembers?: JsonNullableFilter<"Achievement">
    studentRole?: StringNullableFilter<"Achievement"> | string | null
    points?: IntFilter<"Achievement"> | number
    basePoints?: IntFilter<"Achievement"> | number
    levelMultiplier?: FloatFilter<"Achievement"> | number
    rankMultiplier?: FloatFilter<"Achievement"> | number
    certificateUrl?: StringNullableFilter<"Achievement"> | string | null
    evidenceUrls?: JsonNullableFilter<"Achievement">
    photoUrls?: JsonNullableFilter<"Achievement">
    status?: EnumAchievementStatusFilter<"Achievement"> | $Enums.AchievementStatus
    approvedAt?: DateTimeNullableFilter<"Achievement"> | Date | string | null
    approvedBy?: StringNullableFilter<"Achievement"> | string | null
    approvedByName?: StringNullableFilter<"Achievement"> | string | null
    bkNotes?: StringNullableFilter<"Achievement"> | string | null
    rejectedAt?: DateTimeNullableFilter<"Achievement"> | Date | string | null
    rejectedBy?: StringNullableFilter<"Achievement"> | string | null
    rejectedByName?: StringNullableFilter<"Achievement"> | string | null
    rejectionReason?: StringNullableFilter<"Achievement"> | string | null
    isPublished?: BoolFilter<"Achievement"> | boolean
    publishedAt?: DateTimeNullableFilter<"Achievement"> | Date | string | null
    isFeatured?: BoolFilter<"Achievement"> | boolean
    featuredUntil?: DateTimeNullableFilter<"Achievement"> | Date | string | null
    academicYear?: StringFilter<"Achievement"> | string
    semester?: IntFilter<"Achievement"> | number
    notificationSent?: BoolFilter<"Achievement"> | boolean
    notificationSentAt?: DateTimeNullableFilter<"Achievement"> | Date | string | null
    viewCount?: IntFilter<"Achievement"> | number
    isActive?: BoolFilter<"Achievement"> | boolean
    createdBy?: StringFilter<"Achievement"> | string
    createdAt?: DateTimeFilter<"Achievement"> | Date | string
    updatedBy?: StringNullableFilter<"Achievement"> | string | null
    updatedAt?: DateTimeFilter<"Achievement"> | Date | string
    deletedAt?: DateTimeNullableFilter<"Achievement"> | Date | string | null
    deletedBy?: StringNullableFilter<"Achievement"> | string | null
    approvalHistory?: AchievementApprovalHistoryListRelationFilter
  }

  export type AchievementOrderByWithRelationInput = {
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
    categoryType?: SortOrder
    title?: SortOrder
    description?: SortOrder
    achievementDate?: SortOrder
    location?: SortOrderInput | SortOrder
    organizer?: SortOrderInput | SortOrder
    level?: SortOrder
    rank?: SortOrderInput | SortOrder
    isTeamAchievement?: SortOrder
    teamName?: SortOrderInput | SortOrder
    teamMembers?: SortOrderInput | SortOrder
    studentRole?: SortOrderInput | SortOrder
    points?: SortOrder
    basePoints?: SortOrder
    levelMultiplier?: SortOrder
    rankMultiplier?: SortOrder
    certificateUrl?: SortOrderInput | SortOrder
    evidenceUrls?: SortOrderInput | SortOrder
    photoUrls?: SortOrderInput | SortOrder
    status?: SortOrder
    approvedAt?: SortOrderInput | SortOrder
    approvedBy?: SortOrderInput | SortOrder
    approvedByName?: SortOrderInput | SortOrder
    bkNotes?: SortOrderInput | SortOrder
    rejectedAt?: SortOrderInput | SortOrder
    rejectedBy?: SortOrderInput | SortOrder
    rejectedByName?: SortOrderInput | SortOrder
    rejectionReason?: SortOrderInput | SortOrder
    isPublished?: SortOrder
    publishedAt?: SortOrderInput | SortOrder
    isFeatured?: SortOrder
    featuredUntil?: SortOrderInput | SortOrder
    academicYear?: SortOrder
    semester?: SortOrder
    notificationSent?: SortOrder
    notificationSentAt?: SortOrderInput | SortOrder
    viewCount?: SortOrder
    isActive?: SortOrder
    createdBy?: SortOrder
    createdAt?: SortOrder
    updatedBy?: SortOrderInput | SortOrder
    updatedAt?: SortOrder
    deletedAt?: SortOrderInput | SortOrder
    deletedBy?: SortOrderInput | SortOrder
    approvalHistory?: AchievementApprovalHistoryOrderByRelationAggregateInput
  }

  export type AchievementWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: AchievementWhereInput | AchievementWhereInput[]
    OR?: AchievementWhereInput[]
    NOT?: AchievementWhereInput | AchievementWhereInput[]
    studentId?: StringFilter<"Achievement"> | string
    studentNisn?: StringFilter<"Achievement"> | string
    studentName?: StringFilter<"Achievement"> | string
    studentClass?: StringFilter<"Achievement"> | string
    reportedBy?: StringFilter<"Achievement"> | string
    reportedByName?: StringFilter<"Achievement"> | string
    reporterRole?: StringFilter<"Achievement"> | string
    categoryId?: StringFilter<"Achievement"> | string
    categoryCode?: StringFilter<"Achievement"> | string
    categoryName?: StringFilter<"Achievement"> | string
    categoryType?: EnumAchievementTypeFilter<"Achievement"> | $Enums.AchievementType
    title?: StringFilter<"Achievement"> | string
    description?: StringFilter<"Achievement"> | string
    achievementDate?: DateTimeFilter<"Achievement"> | Date | string
    location?: StringNullableFilter<"Achievement"> | string | null
    organizer?: StringNullableFilter<"Achievement"> | string | null
    level?: EnumAchievementLevelFilter<"Achievement"> | $Enums.AchievementLevel
    rank?: EnumAchievementRankNullableFilter<"Achievement"> | $Enums.AchievementRank | null
    isTeamAchievement?: BoolFilter<"Achievement"> | boolean
    teamName?: StringNullableFilter<"Achievement"> | string | null
    teamMembers?: JsonNullableFilter<"Achievement">
    studentRole?: StringNullableFilter<"Achievement"> | string | null
    points?: IntFilter<"Achievement"> | number
    basePoints?: IntFilter<"Achievement"> | number
    levelMultiplier?: FloatFilter<"Achievement"> | number
    rankMultiplier?: FloatFilter<"Achievement"> | number
    certificateUrl?: StringNullableFilter<"Achievement"> | string | null
    evidenceUrls?: JsonNullableFilter<"Achievement">
    photoUrls?: JsonNullableFilter<"Achievement">
    status?: EnumAchievementStatusFilter<"Achievement"> | $Enums.AchievementStatus
    approvedAt?: DateTimeNullableFilter<"Achievement"> | Date | string | null
    approvedBy?: StringNullableFilter<"Achievement"> | string | null
    approvedByName?: StringNullableFilter<"Achievement"> | string | null
    bkNotes?: StringNullableFilter<"Achievement"> | string | null
    rejectedAt?: DateTimeNullableFilter<"Achievement"> | Date | string | null
    rejectedBy?: StringNullableFilter<"Achievement"> | string | null
    rejectedByName?: StringNullableFilter<"Achievement"> | string | null
    rejectionReason?: StringNullableFilter<"Achievement"> | string | null
    isPublished?: BoolFilter<"Achievement"> | boolean
    publishedAt?: DateTimeNullableFilter<"Achievement"> | Date | string | null
    isFeatured?: BoolFilter<"Achievement"> | boolean
    featuredUntil?: DateTimeNullableFilter<"Achievement"> | Date | string | null
    academicYear?: StringFilter<"Achievement"> | string
    semester?: IntFilter<"Achievement"> | number
    notificationSent?: BoolFilter<"Achievement"> | boolean
    notificationSentAt?: DateTimeNullableFilter<"Achievement"> | Date | string | null
    viewCount?: IntFilter<"Achievement"> | number
    isActive?: BoolFilter<"Achievement"> | boolean
    createdBy?: StringFilter<"Achievement"> | string
    createdAt?: DateTimeFilter<"Achievement"> | Date | string
    updatedBy?: StringNullableFilter<"Achievement"> | string | null
    updatedAt?: DateTimeFilter<"Achievement"> | Date | string
    deletedAt?: DateTimeNullableFilter<"Achievement"> | Date | string | null
    deletedBy?: StringNullableFilter<"Achievement"> | string | null
    approvalHistory?: AchievementApprovalHistoryListRelationFilter
  }, "id">

  export type AchievementOrderByWithAggregationInput = {
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
    categoryType?: SortOrder
    title?: SortOrder
    description?: SortOrder
    achievementDate?: SortOrder
    location?: SortOrderInput | SortOrder
    organizer?: SortOrderInput | SortOrder
    level?: SortOrder
    rank?: SortOrderInput | SortOrder
    isTeamAchievement?: SortOrder
    teamName?: SortOrderInput | SortOrder
    teamMembers?: SortOrderInput | SortOrder
    studentRole?: SortOrderInput | SortOrder
    points?: SortOrder
    basePoints?: SortOrder
    levelMultiplier?: SortOrder
    rankMultiplier?: SortOrder
    certificateUrl?: SortOrderInput | SortOrder
    evidenceUrls?: SortOrderInput | SortOrder
    photoUrls?: SortOrderInput | SortOrder
    status?: SortOrder
    approvedAt?: SortOrderInput | SortOrder
    approvedBy?: SortOrderInput | SortOrder
    approvedByName?: SortOrderInput | SortOrder
    bkNotes?: SortOrderInput | SortOrder
    rejectedAt?: SortOrderInput | SortOrder
    rejectedBy?: SortOrderInput | SortOrder
    rejectedByName?: SortOrderInput | SortOrder
    rejectionReason?: SortOrderInput | SortOrder
    isPublished?: SortOrder
    publishedAt?: SortOrderInput | SortOrder
    isFeatured?: SortOrder
    featuredUntil?: SortOrderInput | SortOrder
    academicYear?: SortOrder
    semester?: SortOrder
    notificationSent?: SortOrder
    notificationSentAt?: SortOrderInput | SortOrder
    viewCount?: SortOrder
    isActive?: SortOrder
    createdBy?: SortOrder
    createdAt?: SortOrder
    updatedBy?: SortOrderInput | SortOrder
    updatedAt?: SortOrder
    deletedAt?: SortOrderInput | SortOrder
    deletedBy?: SortOrderInput | SortOrder
    _count?: AchievementCountOrderByAggregateInput
    _avg?: AchievementAvgOrderByAggregateInput
    _max?: AchievementMaxOrderByAggregateInput
    _min?: AchievementMinOrderByAggregateInput
    _sum?: AchievementSumOrderByAggregateInput
  }

  export type AchievementScalarWhereWithAggregatesInput = {
    AND?: AchievementScalarWhereWithAggregatesInput | AchievementScalarWhereWithAggregatesInput[]
    OR?: AchievementScalarWhereWithAggregatesInput[]
    NOT?: AchievementScalarWhereWithAggregatesInput | AchievementScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Achievement"> | string
    studentId?: StringWithAggregatesFilter<"Achievement"> | string
    studentNisn?: StringWithAggregatesFilter<"Achievement"> | string
    studentName?: StringWithAggregatesFilter<"Achievement"> | string
    studentClass?: StringWithAggregatesFilter<"Achievement"> | string
    reportedBy?: StringWithAggregatesFilter<"Achievement"> | string
    reportedByName?: StringWithAggregatesFilter<"Achievement"> | string
    reporterRole?: StringWithAggregatesFilter<"Achievement"> | string
    categoryId?: StringWithAggregatesFilter<"Achievement"> | string
    categoryCode?: StringWithAggregatesFilter<"Achievement"> | string
    categoryName?: StringWithAggregatesFilter<"Achievement"> | string
    categoryType?: EnumAchievementTypeWithAggregatesFilter<"Achievement"> | $Enums.AchievementType
    title?: StringWithAggregatesFilter<"Achievement"> | string
    description?: StringWithAggregatesFilter<"Achievement"> | string
    achievementDate?: DateTimeWithAggregatesFilter<"Achievement"> | Date | string
    location?: StringNullableWithAggregatesFilter<"Achievement"> | string | null
    organizer?: StringNullableWithAggregatesFilter<"Achievement"> | string | null
    level?: EnumAchievementLevelWithAggregatesFilter<"Achievement"> | $Enums.AchievementLevel
    rank?: EnumAchievementRankNullableWithAggregatesFilter<"Achievement"> | $Enums.AchievementRank | null
    isTeamAchievement?: BoolWithAggregatesFilter<"Achievement"> | boolean
    teamName?: StringNullableWithAggregatesFilter<"Achievement"> | string | null
    teamMembers?: JsonNullableWithAggregatesFilter<"Achievement">
    studentRole?: StringNullableWithAggregatesFilter<"Achievement"> | string | null
    points?: IntWithAggregatesFilter<"Achievement"> | number
    basePoints?: IntWithAggregatesFilter<"Achievement"> | number
    levelMultiplier?: FloatWithAggregatesFilter<"Achievement"> | number
    rankMultiplier?: FloatWithAggregatesFilter<"Achievement"> | number
    certificateUrl?: StringNullableWithAggregatesFilter<"Achievement"> | string | null
    evidenceUrls?: JsonNullableWithAggregatesFilter<"Achievement">
    photoUrls?: JsonNullableWithAggregatesFilter<"Achievement">
    status?: EnumAchievementStatusWithAggregatesFilter<"Achievement"> | $Enums.AchievementStatus
    approvedAt?: DateTimeNullableWithAggregatesFilter<"Achievement"> | Date | string | null
    approvedBy?: StringNullableWithAggregatesFilter<"Achievement"> | string | null
    approvedByName?: StringNullableWithAggregatesFilter<"Achievement"> | string | null
    bkNotes?: StringNullableWithAggregatesFilter<"Achievement"> | string | null
    rejectedAt?: DateTimeNullableWithAggregatesFilter<"Achievement"> | Date | string | null
    rejectedBy?: StringNullableWithAggregatesFilter<"Achievement"> | string | null
    rejectedByName?: StringNullableWithAggregatesFilter<"Achievement"> | string | null
    rejectionReason?: StringNullableWithAggregatesFilter<"Achievement"> | string | null
    isPublished?: BoolWithAggregatesFilter<"Achievement"> | boolean
    publishedAt?: DateTimeNullableWithAggregatesFilter<"Achievement"> | Date | string | null
    isFeatured?: BoolWithAggregatesFilter<"Achievement"> | boolean
    featuredUntil?: DateTimeNullableWithAggregatesFilter<"Achievement"> | Date | string | null
    academicYear?: StringWithAggregatesFilter<"Achievement"> | string
    semester?: IntWithAggregatesFilter<"Achievement"> | number
    notificationSent?: BoolWithAggregatesFilter<"Achievement"> | boolean
    notificationSentAt?: DateTimeNullableWithAggregatesFilter<"Achievement"> | Date | string | null
    viewCount?: IntWithAggregatesFilter<"Achievement"> | number
    isActive?: BoolWithAggregatesFilter<"Achievement"> | boolean
    createdBy?: StringWithAggregatesFilter<"Achievement"> | string
    createdAt?: DateTimeWithAggregatesFilter<"Achievement"> | Date | string
    updatedBy?: StringNullableWithAggregatesFilter<"Achievement"> | string | null
    updatedAt?: DateTimeWithAggregatesFilter<"Achievement"> | Date | string
    deletedAt?: DateTimeNullableWithAggregatesFilter<"Achievement"> | Date | string | null
    deletedBy?: StringNullableWithAggregatesFilter<"Achievement"> | string | null
  }

  export type AchievementApprovalHistoryWhereInput = {
    AND?: AchievementApprovalHistoryWhereInput | AchievementApprovalHistoryWhereInput[]
    OR?: AchievementApprovalHistoryWhereInput[]
    NOT?: AchievementApprovalHistoryWhereInput | AchievementApprovalHistoryWhereInput[]
    id?: StringFilter<"AchievementApprovalHistory"> | string
    achievementId?: StringFilter<"AchievementApprovalHistory"> | string
    action?: EnumApprovalActionFilter<"AchievementApprovalHistory"> | $Enums.ApprovalAction
    fromStatus?: EnumAchievementStatusFilter<"AchievementApprovalHistory"> | $Enums.AchievementStatus
    toStatus?: EnumAchievementStatusFilter<"AchievementApprovalHistory"> | $Enums.AchievementStatus
    approverUserId?: StringFilter<"AchievementApprovalHistory"> | string
    approverName?: StringFilter<"AchievementApprovalHistory"> | string
    approverRole?: StringFilter<"AchievementApprovalHistory"> | string
    notes?: StringNullableFilter<"AchievementApprovalHistory"> | string | null
    actionDate?: DateTimeFilter<"AchievementApprovalHistory"> | Date | string
    achievement?: XOR<AchievementRelationFilter, AchievementWhereInput>
  }

  export type AchievementApprovalHistoryOrderByWithRelationInput = {
    id?: SortOrder
    achievementId?: SortOrder
    action?: SortOrder
    fromStatus?: SortOrder
    toStatus?: SortOrder
    approverUserId?: SortOrder
    approverName?: SortOrder
    approverRole?: SortOrder
    notes?: SortOrderInput | SortOrder
    actionDate?: SortOrder
    achievement?: AchievementOrderByWithRelationInput
  }

  export type AchievementApprovalHistoryWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: AchievementApprovalHistoryWhereInput | AchievementApprovalHistoryWhereInput[]
    OR?: AchievementApprovalHistoryWhereInput[]
    NOT?: AchievementApprovalHistoryWhereInput | AchievementApprovalHistoryWhereInput[]
    achievementId?: StringFilter<"AchievementApprovalHistory"> | string
    action?: EnumApprovalActionFilter<"AchievementApprovalHistory"> | $Enums.ApprovalAction
    fromStatus?: EnumAchievementStatusFilter<"AchievementApprovalHistory"> | $Enums.AchievementStatus
    toStatus?: EnumAchievementStatusFilter<"AchievementApprovalHistory"> | $Enums.AchievementStatus
    approverUserId?: StringFilter<"AchievementApprovalHistory"> | string
    approverName?: StringFilter<"AchievementApprovalHistory"> | string
    approverRole?: StringFilter<"AchievementApprovalHistory"> | string
    notes?: StringNullableFilter<"AchievementApprovalHistory"> | string | null
    actionDate?: DateTimeFilter<"AchievementApprovalHistory"> | Date | string
    achievement?: XOR<AchievementRelationFilter, AchievementWhereInput>
  }, "id">

  export type AchievementApprovalHistoryOrderByWithAggregationInput = {
    id?: SortOrder
    achievementId?: SortOrder
    action?: SortOrder
    fromStatus?: SortOrder
    toStatus?: SortOrder
    approverUserId?: SortOrder
    approverName?: SortOrder
    approverRole?: SortOrder
    notes?: SortOrderInput | SortOrder
    actionDate?: SortOrder
    _count?: AchievementApprovalHistoryCountOrderByAggregateInput
    _max?: AchievementApprovalHistoryMaxOrderByAggregateInput
    _min?: AchievementApprovalHistoryMinOrderByAggregateInput
  }

  export type AchievementApprovalHistoryScalarWhereWithAggregatesInput = {
    AND?: AchievementApprovalHistoryScalarWhereWithAggregatesInput | AchievementApprovalHistoryScalarWhereWithAggregatesInput[]
    OR?: AchievementApprovalHistoryScalarWhereWithAggregatesInput[]
    NOT?: AchievementApprovalHistoryScalarWhereWithAggregatesInput | AchievementApprovalHistoryScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"AchievementApprovalHistory"> | string
    achievementId?: StringWithAggregatesFilter<"AchievementApprovalHistory"> | string
    action?: EnumApprovalActionWithAggregatesFilter<"AchievementApprovalHistory"> | $Enums.ApprovalAction
    fromStatus?: EnumAchievementStatusWithAggregatesFilter<"AchievementApprovalHistory"> | $Enums.AchievementStatus
    toStatus?: EnumAchievementStatusWithAggregatesFilter<"AchievementApprovalHistory"> | $Enums.AchievementStatus
    approverUserId?: StringWithAggregatesFilter<"AchievementApprovalHistory"> | string
    approverName?: StringWithAggregatesFilter<"AchievementApprovalHistory"> | string
    approverRole?: StringWithAggregatesFilter<"AchievementApprovalHistory"> | string
    notes?: StringNullableWithAggregatesFilter<"AchievementApprovalHistory"> | string | null
    actionDate?: DateTimeWithAggregatesFilter<"AchievementApprovalHistory"> | Date | string
  }

  export type AchievementStatisticsWhereInput = {
    AND?: AchievementStatisticsWhereInput | AchievementStatisticsWhereInput[]
    OR?: AchievementStatisticsWhereInput[]
    NOT?: AchievementStatisticsWhereInput | AchievementStatisticsWhereInput[]
    id?: StringFilter<"AchievementStatistics"> | string
    studentId?: StringFilter<"AchievementStatistics"> | string
    studentName?: StringFilter<"AchievementStatistics"> | string
    classId?: StringFilter<"AchievementStatistics"> | string
    className?: StringFilter<"AchievementStatistics"> | string
    totalAchievements?: IntFilter<"AchievementStatistics"> | number
    pendingCount?: IntFilter<"AchievementStatistics"> | number
    approvedCount?: IntFilter<"AchievementStatistics"> | number
    rejectedCount?: IntFilter<"AchievementStatistics"> | number
    totalPoints?: IntFilter<"AchievementStatistics"> | number
    academicCount?: IntFilter<"AchievementStatistics"> | number
    nonAcademicCount?: IntFilter<"AchievementStatistics"> | number
    sportsCount?: IntFilter<"AchievementStatistics"> | number
    artsCount?: IntFilter<"AchievementStatistics"> | number
    scienceCount?: IntFilter<"AchievementStatistics"> | number
    technologyCount?: IntFilter<"AchievementStatistics"> | number
    schoolCount?: IntFilter<"AchievementStatistics"> | number
    districtCount?: IntFilter<"AchievementStatistics"> | number
    regencyCount?: IntFilter<"AchievementStatistics"> | number
    provinceCount?: IntFilter<"AchievementStatistics"> | number
    nationalCount?: IntFilter<"AchievementStatistics"> | number
    internationalCount?: IntFilter<"AchievementStatistics"> | number
    firstPlaceCount?: IntFilter<"AchievementStatistics"> | number
    secondPlaceCount?: IntFilter<"AchievementStatistics"> | number
    thirdPlaceCount?: IntFilter<"AchievementStatistics"> | number
    isTopAchiever?: BoolFilter<"AchievementStatistics"> | boolean
    lastAchievementDate?: DateTimeNullableFilter<"AchievementStatistics"> | Date | string | null
    academicYear?: StringFilter<"AchievementStatistics"> | string
    semester?: IntFilter<"AchievementStatistics"> | number
    updatedAt?: DateTimeFilter<"AchievementStatistics"> | Date | string
  }

  export type AchievementStatisticsOrderByWithRelationInput = {
    id?: SortOrder
    studentId?: SortOrder
    studentName?: SortOrder
    classId?: SortOrder
    className?: SortOrder
    totalAchievements?: SortOrder
    pendingCount?: SortOrder
    approvedCount?: SortOrder
    rejectedCount?: SortOrder
    totalPoints?: SortOrder
    academicCount?: SortOrder
    nonAcademicCount?: SortOrder
    sportsCount?: SortOrder
    artsCount?: SortOrder
    scienceCount?: SortOrder
    technologyCount?: SortOrder
    schoolCount?: SortOrder
    districtCount?: SortOrder
    regencyCount?: SortOrder
    provinceCount?: SortOrder
    nationalCount?: SortOrder
    internationalCount?: SortOrder
    firstPlaceCount?: SortOrder
    secondPlaceCount?: SortOrder
    thirdPlaceCount?: SortOrder
    isTopAchiever?: SortOrder
    lastAchievementDate?: SortOrderInput | SortOrder
    academicYear?: SortOrder
    semester?: SortOrder
    updatedAt?: SortOrder
  }

  export type AchievementStatisticsWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    studentId_academicYear_semester?: AchievementStatisticsStudentIdAcademicYearSemesterCompoundUniqueInput
    AND?: AchievementStatisticsWhereInput | AchievementStatisticsWhereInput[]
    OR?: AchievementStatisticsWhereInput[]
    NOT?: AchievementStatisticsWhereInput | AchievementStatisticsWhereInput[]
    studentId?: StringFilter<"AchievementStatistics"> | string
    studentName?: StringFilter<"AchievementStatistics"> | string
    classId?: StringFilter<"AchievementStatistics"> | string
    className?: StringFilter<"AchievementStatistics"> | string
    totalAchievements?: IntFilter<"AchievementStatistics"> | number
    pendingCount?: IntFilter<"AchievementStatistics"> | number
    approvedCount?: IntFilter<"AchievementStatistics"> | number
    rejectedCount?: IntFilter<"AchievementStatistics"> | number
    totalPoints?: IntFilter<"AchievementStatistics"> | number
    academicCount?: IntFilter<"AchievementStatistics"> | number
    nonAcademicCount?: IntFilter<"AchievementStatistics"> | number
    sportsCount?: IntFilter<"AchievementStatistics"> | number
    artsCount?: IntFilter<"AchievementStatistics"> | number
    scienceCount?: IntFilter<"AchievementStatistics"> | number
    technologyCount?: IntFilter<"AchievementStatistics"> | number
    schoolCount?: IntFilter<"AchievementStatistics"> | number
    districtCount?: IntFilter<"AchievementStatistics"> | number
    regencyCount?: IntFilter<"AchievementStatistics"> | number
    provinceCount?: IntFilter<"AchievementStatistics"> | number
    nationalCount?: IntFilter<"AchievementStatistics"> | number
    internationalCount?: IntFilter<"AchievementStatistics"> | number
    firstPlaceCount?: IntFilter<"AchievementStatistics"> | number
    secondPlaceCount?: IntFilter<"AchievementStatistics"> | number
    thirdPlaceCount?: IntFilter<"AchievementStatistics"> | number
    isTopAchiever?: BoolFilter<"AchievementStatistics"> | boolean
    lastAchievementDate?: DateTimeNullableFilter<"AchievementStatistics"> | Date | string | null
    academicYear?: StringFilter<"AchievementStatistics"> | string
    semester?: IntFilter<"AchievementStatistics"> | number
    updatedAt?: DateTimeFilter<"AchievementStatistics"> | Date | string
  }, "id" | "studentId_academicYear_semester">

  export type AchievementStatisticsOrderByWithAggregationInput = {
    id?: SortOrder
    studentId?: SortOrder
    studentName?: SortOrder
    classId?: SortOrder
    className?: SortOrder
    totalAchievements?: SortOrder
    pendingCount?: SortOrder
    approvedCount?: SortOrder
    rejectedCount?: SortOrder
    totalPoints?: SortOrder
    academicCount?: SortOrder
    nonAcademicCount?: SortOrder
    sportsCount?: SortOrder
    artsCount?: SortOrder
    scienceCount?: SortOrder
    technologyCount?: SortOrder
    schoolCount?: SortOrder
    districtCount?: SortOrder
    regencyCount?: SortOrder
    provinceCount?: SortOrder
    nationalCount?: SortOrder
    internationalCount?: SortOrder
    firstPlaceCount?: SortOrder
    secondPlaceCount?: SortOrder
    thirdPlaceCount?: SortOrder
    isTopAchiever?: SortOrder
    lastAchievementDate?: SortOrderInput | SortOrder
    academicYear?: SortOrder
    semester?: SortOrder
    updatedAt?: SortOrder
    _count?: AchievementStatisticsCountOrderByAggregateInput
    _avg?: AchievementStatisticsAvgOrderByAggregateInput
    _max?: AchievementStatisticsMaxOrderByAggregateInput
    _min?: AchievementStatisticsMinOrderByAggregateInput
    _sum?: AchievementStatisticsSumOrderByAggregateInput
  }

  export type AchievementStatisticsScalarWhereWithAggregatesInput = {
    AND?: AchievementStatisticsScalarWhereWithAggregatesInput | AchievementStatisticsScalarWhereWithAggregatesInput[]
    OR?: AchievementStatisticsScalarWhereWithAggregatesInput[]
    NOT?: AchievementStatisticsScalarWhereWithAggregatesInput | AchievementStatisticsScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"AchievementStatistics"> | string
    studentId?: StringWithAggregatesFilter<"AchievementStatistics"> | string
    studentName?: StringWithAggregatesFilter<"AchievementStatistics"> | string
    classId?: StringWithAggregatesFilter<"AchievementStatistics"> | string
    className?: StringWithAggregatesFilter<"AchievementStatistics"> | string
    totalAchievements?: IntWithAggregatesFilter<"AchievementStatistics"> | number
    pendingCount?: IntWithAggregatesFilter<"AchievementStatistics"> | number
    approvedCount?: IntWithAggregatesFilter<"AchievementStatistics"> | number
    rejectedCount?: IntWithAggregatesFilter<"AchievementStatistics"> | number
    totalPoints?: IntWithAggregatesFilter<"AchievementStatistics"> | number
    academicCount?: IntWithAggregatesFilter<"AchievementStatistics"> | number
    nonAcademicCount?: IntWithAggregatesFilter<"AchievementStatistics"> | number
    sportsCount?: IntWithAggregatesFilter<"AchievementStatistics"> | number
    artsCount?: IntWithAggregatesFilter<"AchievementStatistics"> | number
    scienceCount?: IntWithAggregatesFilter<"AchievementStatistics"> | number
    technologyCount?: IntWithAggregatesFilter<"AchievementStatistics"> | number
    schoolCount?: IntWithAggregatesFilter<"AchievementStatistics"> | number
    districtCount?: IntWithAggregatesFilter<"AchievementStatistics"> | number
    regencyCount?: IntWithAggregatesFilter<"AchievementStatistics"> | number
    provinceCount?: IntWithAggregatesFilter<"AchievementStatistics"> | number
    nationalCount?: IntWithAggregatesFilter<"AchievementStatistics"> | number
    internationalCount?: IntWithAggregatesFilter<"AchievementStatistics"> | number
    firstPlaceCount?: IntWithAggregatesFilter<"AchievementStatistics"> | number
    secondPlaceCount?: IntWithAggregatesFilter<"AchievementStatistics"> | number
    thirdPlaceCount?: IntWithAggregatesFilter<"AchievementStatistics"> | number
    isTopAchiever?: BoolWithAggregatesFilter<"AchievementStatistics"> | boolean
    lastAchievementDate?: DateTimeNullableWithAggregatesFilter<"AchievementStatistics"> | Date | string | null
    academicYear?: StringWithAggregatesFilter<"AchievementStatistics"> | string
    semester?: IntWithAggregatesFilter<"AchievementStatistics"> | number
    updatedAt?: DateTimeWithAggregatesFilter<"AchievementStatistics"> | Date | string
  }

  export type HallOfFameWhereInput = {
    AND?: HallOfFameWhereInput | HallOfFameWhereInput[]
    OR?: HallOfFameWhereInput[]
    NOT?: HallOfFameWhereInput | HallOfFameWhereInput[]
    id?: StringFilter<"HallOfFame"> | string
    studentId?: StringFilter<"HallOfFame"> | string
    studentName?: StringFilter<"HallOfFame"> | string
    studentClass?: StringFilter<"HallOfFame"> | string
    achievementId?: StringFilter<"HallOfFame"> | string
    achievementTitle?: StringFilter<"HallOfFame"> | string
    level?: EnumAchievementLevelFilter<"HallOfFame"> | $Enums.AchievementLevel
    rank?: EnumAchievementRankFilter<"HallOfFame"> | $Enums.AchievementRank
    achievementDate?: DateTimeFilter<"HallOfFame"> | Date | string
    photoUrl?: StringNullableFilter<"HallOfFame"> | string | null
    academicYear?: StringFilter<"HallOfFame"> | string
    displayOrder?: IntFilter<"HallOfFame"> | number
    isActive?: BoolFilter<"HallOfFame"> | boolean
    createdAt?: DateTimeFilter<"HallOfFame"> | Date | string
  }

  export type HallOfFameOrderByWithRelationInput = {
    id?: SortOrder
    studentId?: SortOrder
    studentName?: SortOrder
    studentClass?: SortOrder
    achievementId?: SortOrder
    achievementTitle?: SortOrder
    level?: SortOrder
    rank?: SortOrder
    achievementDate?: SortOrder
    photoUrl?: SortOrderInput | SortOrder
    academicYear?: SortOrder
    displayOrder?: SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
  }

  export type HallOfFameWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: HallOfFameWhereInput | HallOfFameWhereInput[]
    OR?: HallOfFameWhereInput[]
    NOT?: HallOfFameWhereInput | HallOfFameWhereInput[]
    studentId?: StringFilter<"HallOfFame"> | string
    studentName?: StringFilter<"HallOfFame"> | string
    studentClass?: StringFilter<"HallOfFame"> | string
    achievementId?: StringFilter<"HallOfFame"> | string
    achievementTitle?: StringFilter<"HallOfFame"> | string
    level?: EnumAchievementLevelFilter<"HallOfFame"> | $Enums.AchievementLevel
    rank?: EnumAchievementRankFilter<"HallOfFame"> | $Enums.AchievementRank
    achievementDate?: DateTimeFilter<"HallOfFame"> | Date | string
    photoUrl?: StringNullableFilter<"HallOfFame"> | string | null
    academicYear?: StringFilter<"HallOfFame"> | string
    displayOrder?: IntFilter<"HallOfFame"> | number
    isActive?: BoolFilter<"HallOfFame"> | boolean
    createdAt?: DateTimeFilter<"HallOfFame"> | Date | string
  }, "id">

  export type HallOfFameOrderByWithAggregationInput = {
    id?: SortOrder
    studentId?: SortOrder
    studentName?: SortOrder
    studentClass?: SortOrder
    achievementId?: SortOrder
    achievementTitle?: SortOrder
    level?: SortOrder
    rank?: SortOrder
    achievementDate?: SortOrder
    photoUrl?: SortOrderInput | SortOrder
    academicYear?: SortOrder
    displayOrder?: SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    _count?: HallOfFameCountOrderByAggregateInput
    _avg?: HallOfFameAvgOrderByAggregateInput
    _max?: HallOfFameMaxOrderByAggregateInput
    _min?: HallOfFameMinOrderByAggregateInput
    _sum?: HallOfFameSumOrderByAggregateInput
  }

  export type HallOfFameScalarWhereWithAggregatesInput = {
    AND?: HallOfFameScalarWhereWithAggregatesInput | HallOfFameScalarWhereWithAggregatesInput[]
    OR?: HallOfFameScalarWhereWithAggregatesInput[]
    NOT?: HallOfFameScalarWhereWithAggregatesInput | HallOfFameScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"HallOfFame"> | string
    studentId?: StringWithAggregatesFilter<"HallOfFame"> | string
    studentName?: StringWithAggregatesFilter<"HallOfFame"> | string
    studentClass?: StringWithAggregatesFilter<"HallOfFame"> | string
    achievementId?: StringWithAggregatesFilter<"HallOfFame"> | string
    achievementTitle?: StringWithAggregatesFilter<"HallOfFame"> | string
    level?: EnumAchievementLevelWithAggregatesFilter<"HallOfFame"> | $Enums.AchievementLevel
    rank?: EnumAchievementRankWithAggregatesFilter<"HallOfFame"> | $Enums.AchievementRank
    achievementDate?: DateTimeWithAggregatesFilter<"HallOfFame"> | Date | string
    photoUrl?: StringNullableWithAggregatesFilter<"HallOfFame"> | string | null
    academicYear?: StringWithAggregatesFilter<"HallOfFame"> | string
    displayOrder?: IntWithAggregatesFilter<"HallOfFame"> | number
    isActive?: BoolWithAggregatesFilter<"HallOfFame"> | boolean
    createdAt?: DateTimeWithAggregatesFilter<"HallOfFame"> | Date | string
  }

  export type AchievementCreateInput = {
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
    categoryType: $Enums.AchievementType
    title: string
    description: string
    achievementDate: Date | string
    location?: string | null
    organizer?: string | null
    level: $Enums.AchievementLevel
    rank?: $Enums.AchievementRank | null
    isTeamAchievement?: boolean
    teamName?: string | null
    teamMembers?: NullableJsonNullValueInput | InputJsonValue
    studentRole?: string | null
    points: number
    basePoints: number
    levelMultiplier?: number
    rankMultiplier?: number
    certificateUrl?: string | null
    evidenceUrls?: NullableJsonNullValueInput | InputJsonValue
    photoUrls?: NullableJsonNullValueInput | InputJsonValue
    status?: $Enums.AchievementStatus
    approvedAt?: Date | string | null
    approvedBy?: string | null
    approvedByName?: string | null
    bkNotes?: string | null
    rejectedAt?: Date | string | null
    rejectedBy?: string | null
    rejectedByName?: string | null
    rejectionReason?: string | null
    isPublished?: boolean
    publishedAt?: Date | string | null
    isFeatured?: boolean
    featuredUntil?: Date | string | null
    academicYear: string
    semester: number
    notificationSent?: boolean
    notificationSentAt?: Date | string | null
    viewCount?: number
    isActive?: boolean
    createdBy: string
    createdAt?: Date | string
    updatedBy?: string | null
    updatedAt?: Date | string
    deletedAt?: Date | string | null
    deletedBy?: string | null
    approvalHistory?: AchievementApprovalHistoryCreateNestedManyWithoutAchievementInput
  }

  export type AchievementUncheckedCreateInput = {
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
    categoryType: $Enums.AchievementType
    title: string
    description: string
    achievementDate: Date | string
    location?: string | null
    organizer?: string | null
    level: $Enums.AchievementLevel
    rank?: $Enums.AchievementRank | null
    isTeamAchievement?: boolean
    teamName?: string | null
    teamMembers?: NullableJsonNullValueInput | InputJsonValue
    studentRole?: string | null
    points: number
    basePoints: number
    levelMultiplier?: number
    rankMultiplier?: number
    certificateUrl?: string | null
    evidenceUrls?: NullableJsonNullValueInput | InputJsonValue
    photoUrls?: NullableJsonNullValueInput | InputJsonValue
    status?: $Enums.AchievementStatus
    approvedAt?: Date | string | null
    approvedBy?: string | null
    approvedByName?: string | null
    bkNotes?: string | null
    rejectedAt?: Date | string | null
    rejectedBy?: string | null
    rejectedByName?: string | null
    rejectionReason?: string | null
    isPublished?: boolean
    publishedAt?: Date | string | null
    isFeatured?: boolean
    featuredUntil?: Date | string | null
    academicYear: string
    semester: number
    notificationSent?: boolean
    notificationSentAt?: Date | string | null
    viewCount?: number
    isActive?: boolean
    createdBy: string
    createdAt?: Date | string
    updatedBy?: string | null
    updatedAt?: Date | string
    deletedAt?: Date | string | null
    deletedBy?: string | null
    approvalHistory?: AchievementApprovalHistoryUncheckedCreateNestedManyWithoutAchievementInput
  }

  export type AchievementUpdateInput = {
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
    categoryType?: EnumAchievementTypeFieldUpdateOperationsInput | $Enums.AchievementType
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    achievementDate?: DateTimeFieldUpdateOperationsInput | Date | string
    location?: NullableStringFieldUpdateOperationsInput | string | null
    organizer?: NullableStringFieldUpdateOperationsInput | string | null
    level?: EnumAchievementLevelFieldUpdateOperationsInput | $Enums.AchievementLevel
    rank?: NullableEnumAchievementRankFieldUpdateOperationsInput | $Enums.AchievementRank | null
    isTeamAchievement?: BoolFieldUpdateOperationsInput | boolean
    teamName?: NullableStringFieldUpdateOperationsInput | string | null
    teamMembers?: NullableJsonNullValueInput | InputJsonValue
    studentRole?: NullableStringFieldUpdateOperationsInput | string | null
    points?: IntFieldUpdateOperationsInput | number
    basePoints?: IntFieldUpdateOperationsInput | number
    levelMultiplier?: FloatFieldUpdateOperationsInput | number
    rankMultiplier?: FloatFieldUpdateOperationsInput | number
    certificateUrl?: NullableStringFieldUpdateOperationsInput | string | null
    evidenceUrls?: NullableJsonNullValueInput | InputJsonValue
    photoUrls?: NullableJsonNullValueInput | InputJsonValue
    status?: EnumAchievementStatusFieldUpdateOperationsInput | $Enums.AchievementStatus
    approvedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    approvedBy?: NullableStringFieldUpdateOperationsInput | string | null
    approvedByName?: NullableStringFieldUpdateOperationsInput | string | null
    bkNotes?: NullableStringFieldUpdateOperationsInput | string | null
    rejectedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    rejectedBy?: NullableStringFieldUpdateOperationsInput | string | null
    rejectedByName?: NullableStringFieldUpdateOperationsInput | string | null
    rejectionReason?: NullableStringFieldUpdateOperationsInput | string | null
    isPublished?: BoolFieldUpdateOperationsInput | boolean
    publishedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    isFeatured?: BoolFieldUpdateOperationsInput | boolean
    featuredUntil?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    academicYear?: StringFieldUpdateOperationsInput | string
    semester?: IntFieldUpdateOperationsInput | number
    notificationSent?: BoolFieldUpdateOperationsInput | boolean
    notificationSentAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    viewCount?: IntFieldUpdateOperationsInput | number
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdBy?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedBy?: NullableStringFieldUpdateOperationsInput | string | null
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deletedBy?: NullableStringFieldUpdateOperationsInput | string | null
    approvalHistory?: AchievementApprovalHistoryUpdateManyWithoutAchievementNestedInput
  }

  export type AchievementUncheckedUpdateInput = {
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
    categoryType?: EnumAchievementTypeFieldUpdateOperationsInput | $Enums.AchievementType
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    achievementDate?: DateTimeFieldUpdateOperationsInput | Date | string
    location?: NullableStringFieldUpdateOperationsInput | string | null
    organizer?: NullableStringFieldUpdateOperationsInput | string | null
    level?: EnumAchievementLevelFieldUpdateOperationsInput | $Enums.AchievementLevel
    rank?: NullableEnumAchievementRankFieldUpdateOperationsInput | $Enums.AchievementRank | null
    isTeamAchievement?: BoolFieldUpdateOperationsInput | boolean
    teamName?: NullableStringFieldUpdateOperationsInput | string | null
    teamMembers?: NullableJsonNullValueInput | InputJsonValue
    studentRole?: NullableStringFieldUpdateOperationsInput | string | null
    points?: IntFieldUpdateOperationsInput | number
    basePoints?: IntFieldUpdateOperationsInput | number
    levelMultiplier?: FloatFieldUpdateOperationsInput | number
    rankMultiplier?: FloatFieldUpdateOperationsInput | number
    certificateUrl?: NullableStringFieldUpdateOperationsInput | string | null
    evidenceUrls?: NullableJsonNullValueInput | InputJsonValue
    photoUrls?: NullableJsonNullValueInput | InputJsonValue
    status?: EnumAchievementStatusFieldUpdateOperationsInput | $Enums.AchievementStatus
    approvedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    approvedBy?: NullableStringFieldUpdateOperationsInput | string | null
    approvedByName?: NullableStringFieldUpdateOperationsInput | string | null
    bkNotes?: NullableStringFieldUpdateOperationsInput | string | null
    rejectedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    rejectedBy?: NullableStringFieldUpdateOperationsInput | string | null
    rejectedByName?: NullableStringFieldUpdateOperationsInput | string | null
    rejectionReason?: NullableStringFieldUpdateOperationsInput | string | null
    isPublished?: BoolFieldUpdateOperationsInput | boolean
    publishedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    isFeatured?: BoolFieldUpdateOperationsInput | boolean
    featuredUntil?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    academicYear?: StringFieldUpdateOperationsInput | string
    semester?: IntFieldUpdateOperationsInput | number
    notificationSent?: BoolFieldUpdateOperationsInput | boolean
    notificationSentAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    viewCount?: IntFieldUpdateOperationsInput | number
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdBy?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedBy?: NullableStringFieldUpdateOperationsInput | string | null
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deletedBy?: NullableStringFieldUpdateOperationsInput | string | null
    approvalHistory?: AchievementApprovalHistoryUncheckedUpdateManyWithoutAchievementNestedInput
  }

  export type AchievementCreateManyInput = {
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
    categoryType: $Enums.AchievementType
    title: string
    description: string
    achievementDate: Date | string
    location?: string | null
    organizer?: string | null
    level: $Enums.AchievementLevel
    rank?: $Enums.AchievementRank | null
    isTeamAchievement?: boolean
    teamName?: string | null
    teamMembers?: NullableJsonNullValueInput | InputJsonValue
    studentRole?: string | null
    points: number
    basePoints: number
    levelMultiplier?: number
    rankMultiplier?: number
    certificateUrl?: string | null
    evidenceUrls?: NullableJsonNullValueInput | InputJsonValue
    photoUrls?: NullableJsonNullValueInput | InputJsonValue
    status?: $Enums.AchievementStatus
    approvedAt?: Date | string | null
    approvedBy?: string | null
    approvedByName?: string | null
    bkNotes?: string | null
    rejectedAt?: Date | string | null
    rejectedBy?: string | null
    rejectedByName?: string | null
    rejectionReason?: string | null
    isPublished?: boolean
    publishedAt?: Date | string | null
    isFeatured?: boolean
    featuredUntil?: Date | string | null
    academicYear: string
    semester: number
    notificationSent?: boolean
    notificationSentAt?: Date | string | null
    viewCount?: number
    isActive?: boolean
    createdBy: string
    createdAt?: Date | string
    updatedBy?: string | null
    updatedAt?: Date | string
    deletedAt?: Date | string | null
    deletedBy?: string | null
  }

  export type AchievementUpdateManyMutationInput = {
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
    categoryType?: EnumAchievementTypeFieldUpdateOperationsInput | $Enums.AchievementType
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    achievementDate?: DateTimeFieldUpdateOperationsInput | Date | string
    location?: NullableStringFieldUpdateOperationsInput | string | null
    organizer?: NullableStringFieldUpdateOperationsInput | string | null
    level?: EnumAchievementLevelFieldUpdateOperationsInput | $Enums.AchievementLevel
    rank?: NullableEnumAchievementRankFieldUpdateOperationsInput | $Enums.AchievementRank | null
    isTeamAchievement?: BoolFieldUpdateOperationsInput | boolean
    teamName?: NullableStringFieldUpdateOperationsInput | string | null
    teamMembers?: NullableJsonNullValueInput | InputJsonValue
    studentRole?: NullableStringFieldUpdateOperationsInput | string | null
    points?: IntFieldUpdateOperationsInput | number
    basePoints?: IntFieldUpdateOperationsInput | number
    levelMultiplier?: FloatFieldUpdateOperationsInput | number
    rankMultiplier?: FloatFieldUpdateOperationsInput | number
    certificateUrl?: NullableStringFieldUpdateOperationsInput | string | null
    evidenceUrls?: NullableJsonNullValueInput | InputJsonValue
    photoUrls?: NullableJsonNullValueInput | InputJsonValue
    status?: EnumAchievementStatusFieldUpdateOperationsInput | $Enums.AchievementStatus
    approvedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    approvedBy?: NullableStringFieldUpdateOperationsInput | string | null
    approvedByName?: NullableStringFieldUpdateOperationsInput | string | null
    bkNotes?: NullableStringFieldUpdateOperationsInput | string | null
    rejectedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    rejectedBy?: NullableStringFieldUpdateOperationsInput | string | null
    rejectedByName?: NullableStringFieldUpdateOperationsInput | string | null
    rejectionReason?: NullableStringFieldUpdateOperationsInput | string | null
    isPublished?: BoolFieldUpdateOperationsInput | boolean
    publishedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    isFeatured?: BoolFieldUpdateOperationsInput | boolean
    featuredUntil?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    academicYear?: StringFieldUpdateOperationsInput | string
    semester?: IntFieldUpdateOperationsInput | number
    notificationSent?: BoolFieldUpdateOperationsInput | boolean
    notificationSentAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    viewCount?: IntFieldUpdateOperationsInput | number
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdBy?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedBy?: NullableStringFieldUpdateOperationsInput | string | null
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deletedBy?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type AchievementUncheckedUpdateManyInput = {
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
    categoryType?: EnumAchievementTypeFieldUpdateOperationsInput | $Enums.AchievementType
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    achievementDate?: DateTimeFieldUpdateOperationsInput | Date | string
    location?: NullableStringFieldUpdateOperationsInput | string | null
    organizer?: NullableStringFieldUpdateOperationsInput | string | null
    level?: EnumAchievementLevelFieldUpdateOperationsInput | $Enums.AchievementLevel
    rank?: NullableEnumAchievementRankFieldUpdateOperationsInput | $Enums.AchievementRank | null
    isTeamAchievement?: BoolFieldUpdateOperationsInput | boolean
    teamName?: NullableStringFieldUpdateOperationsInput | string | null
    teamMembers?: NullableJsonNullValueInput | InputJsonValue
    studentRole?: NullableStringFieldUpdateOperationsInput | string | null
    points?: IntFieldUpdateOperationsInput | number
    basePoints?: IntFieldUpdateOperationsInput | number
    levelMultiplier?: FloatFieldUpdateOperationsInput | number
    rankMultiplier?: FloatFieldUpdateOperationsInput | number
    certificateUrl?: NullableStringFieldUpdateOperationsInput | string | null
    evidenceUrls?: NullableJsonNullValueInput | InputJsonValue
    photoUrls?: NullableJsonNullValueInput | InputJsonValue
    status?: EnumAchievementStatusFieldUpdateOperationsInput | $Enums.AchievementStatus
    approvedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    approvedBy?: NullableStringFieldUpdateOperationsInput | string | null
    approvedByName?: NullableStringFieldUpdateOperationsInput | string | null
    bkNotes?: NullableStringFieldUpdateOperationsInput | string | null
    rejectedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    rejectedBy?: NullableStringFieldUpdateOperationsInput | string | null
    rejectedByName?: NullableStringFieldUpdateOperationsInput | string | null
    rejectionReason?: NullableStringFieldUpdateOperationsInput | string | null
    isPublished?: BoolFieldUpdateOperationsInput | boolean
    publishedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    isFeatured?: BoolFieldUpdateOperationsInput | boolean
    featuredUntil?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    academicYear?: StringFieldUpdateOperationsInput | string
    semester?: IntFieldUpdateOperationsInput | number
    notificationSent?: BoolFieldUpdateOperationsInput | boolean
    notificationSentAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    viewCount?: IntFieldUpdateOperationsInput | number
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdBy?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedBy?: NullableStringFieldUpdateOperationsInput | string | null
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deletedBy?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type AchievementApprovalHistoryCreateInput = {
    id?: string
    action: $Enums.ApprovalAction
    fromStatus: $Enums.AchievementStatus
    toStatus: $Enums.AchievementStatus
    approverUserId: string
    approverName: string
    approverRole: string
    notes?: string | null
    actionDate?: Date | string
    achievement: AchievementCreateNestedOneWithoutApprovalHistoryInput
  }

  export type AchievementApprovalHistoryUncheckedCreateInput = {
    id?: string
    achievementId: string
    action: $Enums.ApprovalAction
    fromStatus: $Enums.AchievementStatus
    toStatus: $Enums.AchievementStatus
    approverUserId: string
    approverName: string
    approverRole: string
    notes?: string | null
    actionDate?: Date | string
  }

  export type AchievementApprovalHistoryUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    action?: EnumApprovalActionFieldUpdateOperationsInput | $Enums.ApprovalAction
    fromStatus?: EnumAchievementStatusFieldUpdateOperationsInput | $Enums.AchievementStatus
    toStatus?: EnumAchievementStatusFieldUpdateOperationsInput | $Enums.AchievementStatus
    approverUserId?: StringFieldUpdateOperationsInput | string
    approverName?: StringFieldUpdateOperationsInput | string
    approverRole?: StringFieldUpdateOperationsInput | string
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    actionDate?: DateTimeFieldUpdateOperationsInput | Date | string
    achievement?: AchievementUpdateOneRequiredWithoutApprovalHistoryNestedInput
  }

  export type AchievementApprovalHistoryUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    achievementId?: StringFieldUpdateOperationsInput | string
    action?: EnumApprovalActionFieldUpdateOperationsInput | $Enums.ApprovalAction
    fromStatus?: EnumAchievementStatusFieldUpdateOperationsInput | $Enums.AchievementStatus
    toStatus?: EnumAchievementStatusFieldUpdateOperationsInput | $Enums.AchievementStatus
    approverUserId?: StringFieldUpdateOperationsInput | string
    approverName?: StringFieldUpdateOperationsInput | string
    approverRole?: StringFieldUpdateOperationsInput | string
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    actionDate?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AchievementApprovalHistoryCreateManyInput = {
    id?: string
    achievementId: string
    action: $Enums.ApprovalAction
    fromStatus: $Enums.AchievementStatus
    toStatus: $Enums.AchievementStatus
    approverUserId: string
    approverName: string
    approverRole: string
    notes?: string | null
    actionDate?: Date | string
  }

  export type AchievementApprovalHistoryUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    action?: EnumApprovalActionFieldUpdateOperationsInput | $Enums.ApprovalAction
    fromStatus?: EnumAchievementStatusFieldUpdateOperationsInput | $Enums.AchievementStatus
    toStatus?: EnumAchievementStatusFieldUpdateOperationsInput | $Enums.AchievementStatus
    approverUserId?: StringFieldUpdateOperationsInput | string
    approverName?: StringFieldUpdateOperationsInput | string
    approverRole?: StringFieldUpdateOperationsInput | string
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    actionDate?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AchievementApprovalHistoryUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    achievementId?: StringFieldUpdateOperationsInput | string
    action?: EnumApprovalActionFieldUpdateOperationsInput | $Enums.ApprovalAction
    fromStatus?: EnumAchievementStatusFieldUpdateOperationsInput | $Enums.AchievementStatus
    toStatus?: EnumAchievementStatusFieldUpdateOperationsInput | $Enums.AchievementStatus
    approverUserId?: StringFieldUpdateOperationsInput | string
    approverName?: StringFieldUpdateOperationsInput | string
    approverRole?: StringFieldUpdateOperationsInput | string
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    actionDate?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AchievementStatisticsCreateInput = {
    id?: string
    studentId: string
    studentName: string
    classId: string
    className: string
    totalAchievements?: number
    pendingCount?: number
    approvedCount?: number
    rejectedCount?: number
    totalPoints?: number
    academicCount?: number
    nonAcademicCount?: number
    sportsCount?: number
    artsCount?: number
    scienceCount?: number
    technologyCount?: number
    schoolCount?: number
    districtCount?: number
    regencyCount?: number
    provinceCount?: number
    nationalCount?: number
    internationalCount?: number
    firstPlaceCount?: number
    secondPlaceCount?: number
    thirdPlaceCount?: number
    isTopAchiever?: boolean
    lastAchievementDate?: Date | string | null
    academicYear: string
    semester: number
    updatedAt?: Date | string
  }

  export type AchievementStatisticsUncheckedCreateInput = {
    id?: string
    studentId: string
    studentName: string
    classId: string
    className: string
    totalAchievements?: number
    pendingCount?: number
    approvedCount?: number
    rejectedCount?: number
    totalPoints?: number
    academicCount?: number
    nonAcademicCount?: number
    sportsCount?: number
    artsCount?: number
    scienceCount?: number
    technologyCount?: number
    schoolCount?: number
    districtCount?: number
    regencyCount?: number
    provinceCount?: number
    nationalCount?: number
    internationalCount?: number
    firstPlaceCount?: number
    secondPlaceCount?: number
    thirdPlaceCount?: number
    isTopAchiever?: boolean
    lastAchievementDate?: Date | string | null
    academicYear: string
    semester: number
    updatedAt?: Date | string
  }

  export type AchievementStatisticsUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    studentId?: StringFieldUpdateOperationsInput | string
    studentName?: StringFieldUpdateOperationsInput | string
    classId?: StringFieldUpdateOperationsInput | string
    className?: StringFieldUpdateOperationsInput | string
    totalAchievements?: IntFieldUpdateOperationsInput | number
    pendingCount?: IntFieldUpdateOperationsInput | number
    approvedCount?: IntFieldUpdateOperationsInput | number
    rejectedCount?: IntFieldUpdateOperationsInput | number
    totalPoints?: IntFieldUpdateOperationsInput | number
    academicCount?: IntFieldUpdateOperationsInput | number
    nonAcademicCount?: IntFieldUpdateOperationsInput | number
    sportsCount?: IntFieldUpdateOperationsInput | number
    artsCount?: IntFieldUpdateOperationsInput | number
    scienceCount?: IntFieldUpdateOperationsInput | number
    technologyCount?: IntFieldUpdateOperationsInput | number
    schoolCount?: IntFieldUpdateOperationsInput | number
    districtCount?: IntFieldUpdateOperationsInput | number
    regencyCount?: IntFieldUpdateOperationsInput | number
    provinceCount?: IntFieldUpdateOperationsInput | number
    nationalCount?: IntFieldUpdateOperationsInput | number
    internationalCount?: IntFieldUpdateOperationsInput | number
    firstPlaceCount?: IntFieldUpdateOperationsInput | number
    secondPlaceCount?: IntFieldUpdateOperationsInput | number
    thirdPlaceCount?: IntFieldUpdateOperationsInput | number
    isTopAchiever?: BoolFieldUpdateOperationsInput | boolean
    lastAchievementDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    academicYear?: StringFieldUpdateOperationsInput | string
    semester?: IntFieldUpdateOperationsInput | number
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AchievementStatisticsUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    studentId?: StringFieldUpdateOperationsInput | string
    studentName?: StringFieldUpdateOperationsInput | string
    classId?: StringFieldUpdateOperationsInput | string
    className?: StringFieldUpdateOperationsInput | string
    totalAchievements?: IntFieldUpdateOperationsInput | number
    pendingCount?: IntFieldUpdateOperationsInput | number
    approvedCount?: IntFieldUpdateOperationsInput | number
    rejectedCount?: IntFieldUpdateOperationsInput | number
    totalPoints?: IntFieldUpdateOperationsInput | number
    academicCount?: IntFieldUpdateOperationsInput | number
    nonAcademicCount?: IntFieldUpdateOperationsInput | number
    sportsCount?: IntFieldUpdateOperationsInput | number
    artsCount?: IntFieldUpdateOperationsInput | number
    scienceCount?: IntFieldUpdateOperationsInput | number
    technologyCount?: IntFieldUpdateOperationsInput | number
    schoolCount?: IntFieldUpdateOperationsInput | number
    districtCount?: IntFieldUpdateOperationsInput | number
    regencyCount?: IntFieldUpdateOperationsInput | number
    provinceCount?: IntFieldUpdateOperationsInput | number
    nationalCount?: IntFieldUpdateOperationsInput | number
    internationalCount?: IntFieldUpdateOperationsInput | number
    firstPlaceCount?: IntFieldUpdateOperationsInput | number
    secondPlaceCount?: IntFieldUpdateOperationsInput | number
    thirdPlaceCount?: IntFieldUpdateOperationsInput | number
    isTopAchiever?: BoolFieldUpdateOperationsInput | boolean
    lastAchievementDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    academicYear?: StringFieldUpdateOperationsInput | string
    semester?: IntFieldUpdateOperationsInput | number
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AchievementStatisticsCreateManyInput = {
    id?: string
    studentId: string
    studentName: string
    classId: string
    className: string
    totalAchievements?: number
    pendingCount?: number
    approvedCount?: number
    rejectedCount?: number
    totalPoints?: number
    academicCount?: number
    nonAcademicCount?: number
    sportsCount?: number
    artsCount?: number
    scienceCount?: number
    technologyCount?: number
    schoolCount?: number
    districtCount?: number
    regencyCount?: number
    provinceCount?: number
    nationalCount?: number
    internationalCount?: number
    firstPlaceCount?: number
    secondPlaceCount?: number
    thirdPlaceCount?: number
    isTopAchiever?: boolean
    lastAchievementDate?: Date | string | null
    academicYear: string
    semester: number
    updatedAt?: Date | string
  }

  export type AchievementStatisticsUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    studentId?: StringFieldUpdateOperationsInput | string
    studentName?: StringFieldUpdateOperationsInput | string
    classId?: StringFieldUpdateOperationsInput | string
    className?: StringFieldUpdateOperationsInput | string
    totalAchievements?: IntFieldUpdateOperationsInput | number
    pendingCount?: IntFieldUpdateOperationsInput | number
    approvedCount?: IntFieldUpdateOperationsInput | number
    rejectedCount?: IntFieldUpdateOperationsInput | number
    totalPoints?: IntFieldUpdateOperationsInput | number
    academicCount?: IntFieldUpdateOperationsInput | number
    nonAcademicCount?: IntFieldUpdateOperationsInput | number
    sportsCount?: IntFieldUpdateOperationsInput | number
    artsCount?: IntFieldUpdateOperationsInput | number
    scienceCount?: IntFieldUpdateOperationsInput | number
    technologyCount?: IntFieldUpdateOperationsInput | number
    schoolCount?: IntFieldUpdateOperationsInput | number
    districtCount?: IntFieldUpdateOperationsInput | number
    regencyCount?: IntFieldUpdateOperationsInput | number
    provinceCount?: IntFieldUpdateOperationsInput | number
    nationalCount?: IntFieldUpdateOperationsInput | number
    internationalCount?: IntFieldUpdateOperationsInput | number
    firstPlaceCount?: IntFieldUpdateOperationsInput | number
    secondPlaceCount?: IntFieldUpdateOperationsInput | number
    thirdPlaceCount?: IntFieldUpdateOperationsInput | number
    isTopAchiever?: BoolFieldUpdateOperationsInput | boolean
    lastAchievementDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    academicYear?: StringFieldUpdateOperationsInput | string
    semester?: IntFieldUpdateOperationsInput | number
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AchievementStatisticsUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    studentId?: StringFieldUpdateOperationsInput | string
    studentName?: StringFieldUpdateOperationsInput | string
    classId?: StringFieldUpdateOperationsInput | string
    className?: StringFieldUpdateOperationsInput | string
    totalAchievements?: IntFieldUpdateOperationsInput | number
    pendingCount?: IntFieldUpdateOperationsInput | number
    approvedCount?: IntFieldUpdateOperationsInput | number
    rejectedCount?: IntFieldUpdateOperationsInput | number
    totalPoints?: IntFieldUpdateOperationsInput | number
    academicCount?: IntFieldUpdateOperationsInput | number
    nonAcademicCount?: IntFieldUpdateOperationsInput | number
    sportsCount?: IntFieldUpdateOperationsInput | number
    artsCount?: IntFieldUpdateOperationsInput | number
    scienceCount?: IntFieldUpdateOperationsInput | number
    technologyCount?: IntFieldUpdateOperationsInput | number
    schoolCount?: IntFieldUpdateOperationsInput | number
    districtCount?: IntFieldUpdateOperationsInput | number
    regencyCount?: IntFieldUpdateOperationsInput | number
    provinceCount?: IntFieldUpdateOperationsInput | number
    nationalCount?: IntFieldUpdateOperationsInput | number
    internationalCount?: IntFieldUpdateOperationsInput | number
    firstPlaceCount?: IntFieldUpdateOperationsInput | number
    secondPlaceCount?: IntFieldUpdateOperationsInput | number
    thirdPlaceCount?: IntFieldUpdateOperationsInput | number
    isTopAchiever?: BoolFieldUpdateOperationsInput | boolean
    lastAchievementDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    academicYear?: StringFieldUpdateOperationsInput | string
    semester?: IntFieldUpdateOperationsInput | number
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type HallOfFameCreateInput = {
    id?: string
    studentId: string
    studentName: string
    studentClass: string
    achievementId: string
    achievementTitle: string
    level: $Enums.AchievementLevel
    rank: $Enums.AchievementRank
    achievementDate: Date | string
    photoUrl?: string | null
    academicYear: string
    displayOrder?: number
    isActive?: boolean
    createdAt?: Date | string
  }

  export type HallOfFameUncheckedCreateInput = {
    id?: string
    studentId: string
    studentName: string
    studentClass: string
    achievementId: string
    achievementTitle: string
    level: $Enums.AchievementLevel
    rank: $Enums.AchievementRank
    achievementDate: Date | string
    photoUrl?: string | null
    academicYear: string
    displayOrder?: number
    isActive?: boolean
    createdAt?: Date | string
  }

  export type HallOfFameUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    studentId?: StringFieldUpdateOperationsInput | string
    studentName?: StringFieldUpdateOperationsInput | string
    studentClass?: StringFieldUpdateOperationsInput | string
    achievementId?: StringFieldUpdateOperationsInput | string
    achievementTitle?: StringFieldUpdateOperationsInput | string
    level?: EnumAchievementLevelFieldUpdateOperationsInput | $Enums.AchievementLevel
    rank?: EnumAchievementRankFieldUpdateOperationsInput | $Enums.AchievementRank
    achievementDate?: DateTimeFieldUpdateOperationsInput | Date | string
    photoUrl?: NullableStringFieldUpdateOperationsInput | string | null
    academicYear?: StringFieldUpdateOperationsInput | string
    displayOrder?: IntFieldUpdateOperationsInput | number
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type HallOfFameUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    studentId?: StringFieldUpdateOperationsInput | string
    studentName?: StringFieldUpdateOperationsInput | string
    studentClass?: StringFieldUpdateOperationsInput | string
    achievementId?: StringFieldUpdateOperationsInput | string
    achievementTitle?: StringFieldUpdateOperationsInput | string
    level?: EnumAchievementLevelFieldUpdateOperationsInput | $Enums.AchievementLevel
    rank?: EnumAchievementRankFieldUpdateOperationsInput | $Enums.AchievementRank
    achievementDate?: DateTimeFieldUpdateOperationsInput | Date | string
    photoUrl?: NullableStringFieldUpdateOperationsInput | string | null
    academicYear?: StringFieldUpdateOperationsInput | string
    displayOrder?: IntFieldUpdateOperationsInput | number
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type HallOfFameCreateManyInput = {
    id?: string
    studentId: string
    studentName: string
    studentClass: string
    achievementId: string
    achievementTitle: string
    level: $Enums.AchievementLevel
    rank: $Enums.AchievementRank
    achievementDate: Date | string
    photoUrl?: string | null
    academicYear: string
    displayOrder?: number
    isActive?: boolean
    createdAt?: Date | string
  }

  export type HallOfFameUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    studentId?: StringFieldUpdateOperationsInput | string
    studentName?: StringFieldUpdateOperationsInput | string
    studentClass?: StringFieldUpdateOperationsInput | string
    achievementId?: StringFieldUpdateOperationsInput | string
    achievementTitle?: StringFieldUpdateOperationsInput | string
    level?: EnumAchievementLevelFieldUpdateOperationsInput | $Enums.AchievementLevel
    rank?: EnumAchievementRankFieldUpdateOperationsInput | $Enums.AchievementRank
    achievementDate?: DateTimeFieldUpdateOperationsInput | Date | string
    photoUrl?: NullableStringFieldUpdateOperationsInput | string | null
    academicYear?: StringFieldUpdateOperationsInput | string
    displayOrder?: IntFieldUpdateOperationsInput | number
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type HallOfFameUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    studentId?: StringFieldUpdateOperationsInput | string
    studentName?: StringFieldUpdateOperationsInput | string
    studentClass?: StringFieldUpdateOperationsInput | string
    achievementId?: StringFieldUpdateOperationsInput | string
    achievementTitle?: StringFieldUpdateOperationsInput | string
    level?: EnumAchievementLevelFieldUpdateOperationsInput | $Enums.AchievementLevel
    rank?: EnumAchievementRankFieldUpdateOperationsInput | $Enums.AchievementRank
    achievementDate?: DateTimeFieldUpdateOperationsInput | Date | string
    photoUrl?: NullableStringFieldUpdateOperationsInput | string | null
    academicYear?: StringFieldUpdateOperationsInput | string
    displayOrder?: IntFieldUpdateOperationsInput | number
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
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

  export type EnumAchievementTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.AchievementType | EnumAchievementTypeFieldRefInput<$PrismaModel>
    in?: $Enums.AchievementType[] | ListEnumAchievementTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.AchievementType[] | ListEnumAchievementTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumAchievementTypeFilter<$PrismaModel> | $Enums.AchievementType
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

  export type EnumAchievementLevelFilter<$PrismaModel = never> = {
    equals?: $Enums.AchievementLevel | EnumAchievementLevelFieldRefInput<$PrismaModel>
    in?: $Enums.AchievementLevel[] | ListEnumAchievementLevelFieldRefInput<$PrismaModel>
    notIn?: $Enums.AchievementLevel[] | ListEnumAchievementLevelFieldRefInput<$PrismaModel>
    not?: NestedEnumAchievementLevelFilter<$PrismaModel> | $Enums.AchievementLevel
  }

  export type EnumAchievementRankNullableFilter<$PrismaModel = never> = {
    equals?: $Enums.AchievementRank | EnumAchievementRankFieldRefInput<$PrismaModel> | null
    in?: $Enums.AchievementRank[] | ListEnumAchievementRankFieldRefInput<$PrismaModel> | null
    notIn?: $Enums.AchievementRank[] | ListEnumAchievementRankFieldRefInput<$PrismaModel> | null
    not?: NestedEnumAchievementRankNullableFilter<$PrismaModel> | $Enums.AchievementRank | null
  }

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
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

  export type FloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type EnumAchievementStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.AchievementStatus | EnumAchievementStatusFieldRefInput<$PrismaModel>
    in?: $Enums.AchievementStatus[] | ListEnumAchievementStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.AchievementStatus[] | ListEnumAchievementStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumAchievementStatusFilter<$PrismaModel> | $Enums.AchievementStatus
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

  export type AchievementApprovalHistoryListRelationFilter = {
    every?: AchievementApprovalHistoryWhereInput
    some?: AchievementApprovalHistoryWhereInput
    none?: AchievementApprovalHistoryWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type AchievementApprovalHistoryOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type AchievementCountOrderByAggregateInput = {
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
    categoryType?: SortOrder
    title?: SortOrder
    description?: SortOrder
    achievementDate?: SortOrder
    location?: SortOrder
    organizer?: SortOrder
    level?: SortOrder
    rank?: SortOrder
    isTeamAchievement?: SortOrder
    teamName?: SortOrder
    teamMembers?: SortOrder
    studentRole?: SortOrder
    points?: SortOrder
    basePoints?: SortOrder
    levelMultiplier?: SortOrder
    rankMultiplier?: SortOrder
    certificateUrl?: SortOrder
    evidenceUrls?: SortOrder
    photoUrls?: SortOrder
    status?: SortOrder
    approvedAt?: SortOrder
    approvedBy?: SortOrder
    approvedByName?: SortOrder
    bkNotes?: SortOrder
    rejectedAt?: SortOrder
    rejectedBy?: SortOrder
    rejectedByName?: SortOrder
    rejectionReason?: SortOrder
    isPublished?: SortOrder
    publishedAt?: SortOrder
    isFeatured?: SortOrder
    featuredUntil?: SortOrder
    academicYear?: SortOrder
    semester?: SortOrder
    notificationSent?: SortOrder
    notificationSentAt?: SortOrder
    viewCount?: SortOrder
    isActive?: SortOrder
    createdBy?: SortOrder
    createdAt?: SortOrder
    updatedBy?: SortOrder
    updatedAt?: SortOrder
    deletedAt?: SortOrder
    deletedBy?: SortOrder
  }

  export type AchievementAvgOrderByAggregateInput = {
    points?: SortOrder
    basePoints?: SortOrder
    levelMultiplier?: SortOrder
    rankMultiplier?: SortOrder
    semester?: SortOrder
    viewCount?: SortOrder
  }

  export type AchievementMaxOrderByAggregateInput = {
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
    categoryType?: SortOrder
    title?: SortOrder
    description?: SortOrder
    achievementDate?: SortOrder
    location?: SortOrder
    organizer?: SortOrder
    level?: SortOrder
    rank?: SortOrder
    isTeamAchievement?: SortOrder
    teamName?: SortOrder
    studentRole?: SortOrder
    points?: SortOrder
    basePoints?: SortOrder
    levelMultiplier?: SortOrder
    rankMultiplier?: SortOrder
    certificateUrl?: SortOrder
    status?: SortOrder
    approvedAt?: SortOrder
    approvedBy?: SortOrder
    approvedByName?: SortOrder
    bkNotes?: SortOrder
    rejectedAt?: SortOrder
    rejectedBy?: SortOrder
    rejectedByName?: SortOrder
    rejectionReason?: SortOrder
    isPublished?: SortOrder
    publishedAt?: SortOrder
    isFeatured?: SortOrder
    featuredUntil?: SortOrder
    academicYear?: SortOrder
    semester?: SortOrder
    notificationSent?: SortOrder
    notificationSentAt?: SortOrder
    viewCount?: SortOrder
    isActive?: SortOrder
    createdBy?: SortOrder
    createdAt?: SortOrder
    updatedBy?: SortOrder
    updatedAt?: SortOrder
    deletedAt?: SortOrder
    deletedBy?: SortOrder
  }

  export type AchievementMinOrderByAggregateInput = {
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
    categoryType?: SortOrder
    title?: SortOrder
    description?: SortOrder
    achievementDate?: SortOrder
    location?: SortOrder
    organizer?: SortOrder
    level?: SortOrder
    rank?: SortOrder
    isTeamAchievement?: SortOrder
    teamName?: SortOrder
    studentRole?: SortOrder
    points?: SortOrder
    basePoints?: SortOrder
    levelMultiplier?: SortOrder
    rankMultiplier?: SortOrder
    certificateUrl?: SortOrder
    status?: SortOrder
    approvedAt?: SortOrder
    approvedBy?: SortOrder
    approvedByName?: SortOrder
    bkNotes?: SortOrder
    rejectedAt?: SortOrder
    rejectedBy?: SortOrder
    rejectedByName?: SortOrder
    rejectionReason?: SortOrder
    isPublished?: SortOrder
    publishedAt?: SortOrder
    isFeatured?: SortOrder
    featuredUntil?: SortOrder
    academicYear?: SortOrder
    semester?: SortOrder
    notificationSent?: SortOrder
    notificationSentAt?: SortOrder
    viewCount?: SortOrder
    isActive?: SortOrder
    createdBy?: SortOrder
    createdAt?: SortOrder
    updatedBy?: SortOrder
    updatedAt?: SortOrder
    deletedAt?: SortOrder
    deletedBy?: SortOrder
  }

  export type AchievementSumOrderByAggregateInput = {
    points?: SortOrder
    basePoints?: SortOrder
    levelMultiplier?: SortOrder
    rankMultiplier?: SortOrder
    semester?: SortOrder
    viewCount?: SortOrder
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

  export type EnumAchievementTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.AchievementType | EnumAchievementTypeFieldRefInput<$PrismaModel>
    in?: $Enums.AchievementType[] | ListEnumAchievementTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.AchievementType[] | ListEnumAchievementTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumAchievementTypeWithAggregatesFilter<$PrismaModel> | $Enums.AchievementType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumAchievementTypeFilter<$PrismaModel>
    _max?: NestedEnumAchievementTypeFilter<$PrismaModel>
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

  export type EnumAchievementLevelWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.AchievementLevel | EnumAchievementLevelFieldRefInput<$PrismaModel>
    in?: $Enums.AchievementLevel[] | ListEnumAchievementLevelFieldRefInput<$PrismaModel>
    notIn?: $Enums.AchievementLevel[] | ListEnumAchievementLevelFieldRefInput<$PrismaModel>
    not?: NestedEnumAchievementLevelWithAggregatesFilter<$PrismaModel> | $Enums.AchievementLevel
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumAchievementLevelFilter<$PrismaModel>
    _max?: NestedEnumAchievementLevelFilter<$PrismaModel>
  }

  export type EnumAchievementRankNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.AchievementRank | EnumAchievementRankFieldRefInput<$PrismaModel> | null
    in?: $Enums.AchievementRank[] | ListEnumAchievementRankFieldRefInput<$PrismaModel> | null
    notIn?: $Enums.AchievementRank[] | ListEnumAchievementRankFieldRefInput<$PrismaModel> | null
    not?: NestedEnumAchievementRankNullableWithAggregatesFilter<$PrismaModel> | $Enums.AchievementRank | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedEnumAchievementRankNullableFilter<$PrismaModel>
    _max?: NestedEnumAchievementRankNullableFilter<$PrismaModel>
  }

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
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

  export type FloatWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedFloatFilter<$PrismaModel>
    _min?: NestedFloatFilter<$PrismaModel>
    _max?: NestedFloatFilter<$PrismaModel>
  }

  export type EnumAchievementStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.AchievementStatus | EnumAchievementStatusFieldRefInput<$PrismaModel>
    in?: $Enums.AchievementStatus[] | ListEnumAchievementStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.AchievementStatus[] | ListEnumAchievementStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumAchievementStatusWithAggregatesFilter<$PrismaModel> | $Enums.AchievementStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumAchievementStatusFilter<$PrismaModel>
    _max?: NestedEnumAchievementStatusFilter<$PrismaModel>
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

  export type EnumApprovalActionFilter<$PrismaModel = never> = {
    equals?: $Enums.ApprovalAction | EnumApprovalActionFieldRefInput<$PrismaModel>
    in?: $Enums.ApprovalAction[] | ListEnumApprovalActionFieldRefInput<$PrismaModel>
    notIn?: $Enums.ApprovalAction[] | ListEnumApprovalActionFieldRefInput<$PrismaModel>
    not?: NestedEnumApprovalActionFilter<$PrismaModel> | $Enums.ApprovalAction
  }

  export type AchievementRelationFilter = {
    is?: AchievementWhereInput
    isNot?: AchievementWhereInput
  }

  export type AchievementApprovalHistoryCountOrderByAggregateInput = {
    id?: SortOrder
    achievementId?: SortOrder
    action?: SortOrder
    fromStatus?: SortOrder
    toStatus?: SortOrder
    approverUserId?: SortOrder
    approverName?: SortOrder
    approverRole?: SortOrder
    notes?: SortOrder
    actionDate?: SortOrder
  }

  export type AchievementApprovalHistoryMaxOrderByAggregateInput = {
    id?: SortOrder
    achievementId?: SortOrder
    action?: SortOrder
    fromStatus?: SortOrder
    toStatus?: SortOrder
    approverUserId?: SortOrder
    approverName?: SortOrder
    approverRole?: SortOrder
    notes?: SortOrder
    actionDate?: SortOrder
  }

  export type AchievementApprovalHistoryMinOrderByAggregateInput = {
    id?: SortOrder
    achievementId?: SortOrder
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

  export type AchievementStatisticsStudentIdAcademicYearSemesterCompoundUniqueInput = {
    studentId: string
    academicYear: string
    semester: number
  }

  export type AchievementStatisticsCountOrderByAggregateInput = {
    id?: SortOrder
    studentId?: SortOrder
    studentName?: SortOrder
    classId?: SortOrder
    className?: SortOrder
    totalAchievements?: SortOrder
    pendingCount?: SortOrder
    approvedCount?: SortOrder
    rejectedCount?: SortOrder
    totalPoints?: SortOrder
    academicCount?: SortOrder
    nonAcademicCount?: SortOrder
    sportsCount?: SortOrder
    artsCount?: SortOrder
    scienceCount?: SortOrder
    technologyCount?: SortOrder
    schoolCount?: SortOrder
    districtCount?: SortOrder
    regencyCount?: SortOrder
    provinceCount?: SortOrder
    nationalCount?: SortOrder
    internationalCount?: SortOrder
    firstPlaceCount?: SortOrder
    secondPlaceCount?: SortOrder
    thirdPlaceCount?: SortOrder
    isTopAchiever?: SortOrder
    lastAchievementDate?: SortOrder
    academicYear?: SortOrder
    semester?: SortOrder
    updatedAt?: SortOrder
  }

  export type AchievementStatisticsAvgOrderByAggregateInput = {
    totalAchievements?: SortOrder
    pendingCount?: SortOrder
    approvedCount?: SortOrder
    rejectedCount?: SortOrder
    totalPoints?: SortOrder
    academicCount?: SortOrder
    nonAcademicCount?: SortOrder
    sportsCount?: SortOrder
    artsCount?: SortOrder
    scienceCount?: SortOrder
    technologyCount?: SortOrder
    schoolCount?: SortOrder
    districtCount?: SortOrder
    regencyCount?: SortOrder
    provinceCount?: SortOrder
    nationalCount?: SortOrder
    internationalCount?: SortOrder
    firstPlaceCount?: SortOrder
    secondPlaceCount?: SortOrder
    thirdPlaceCount?: SortOrder
    semester?: SortOrder
  }

  export type AchievementStatisticsMaxOrderByAggregateInput = {
    id?: SortOrder
    studentId?: SortOrder
    studentName?: SortOrder
    classId?: SortOrder
    className?: SortOrder
    totalAchievements?: SortOrder
    pendingCount?: SortOrder
    approvedCount?: SortOrder
    rejectedCount?: SortOrder
    totalPoints?: SortOrder
    academicCount?: SortOrder
    nonAcademicCount?: SortOrder
    sportsCount?: SortOrder
    artsCount?: SortOrder
    scienceCount?: SortOrder
    technologyCount?: SortOrder
    schoolCount?: SortOrder
    districtCount?: SortOrder
    regencyCount?: SortOrder
    provinceCount?: SortOrder
    nationalCount?: SortOrder
    internationalCount?: SortOrder
    firstPlaceCount?: SortOrder
    secondPlaceCount?: SortOrder
    thirdPlaceCount?: SortOrder
    isTopAchiever?: SortOrder
    lastAchievementDate?: SortOrder
    academicYear?: SortOrder
    semester?: SortOrder
    updatedAt?: SortOrder
  }

  export type AchievementStatisticsMinOrderByAggregateInput = {
    id?: SortOrder
    studentId?: SortOrder
    studentName?: SortOrder
    classId?: SortOrder
    className?: SortOrder
    totalAchievements?: SortOrder
    pendingCount?: SortOrder
    approvedCount?: SortOrder
    rejectedCount?: SortOrder
    totalPoints?: SortOrder
    academicCount?: SortOrder
    nonAcademicCount?: SortOrder
    sportsCount?: SortOrder
    artsCount?: SortOrder
    scienceCount?: SortOrder
    technologyCount?: SortOrder
    schoolCount?: SortOrder
    districtCount?: SortOrder
    regencyCount?: SortOrder
    provinceCount?: SortOrder
    nationalCount?: SortOrder
    internationalCount?: SortOrder
    firstPlaceCount?: SortOrder
    secondPlaceCount?: SortOrder
    thirdPlaceCount?: SortOrder
    isTopAchiever?: SortOrder
    lastAchievementDate?: SortOrder
    academicYear?: SortOrder
    semester?: SortOrder
    updatedAt?: SortOrder
  }

  export type AchievementStatisticsSumOrderByAggregateInput = {
    totalAchievements?: SortOrder
    pendingCount?: SortOrder
    approvedCount?: SortOrder
    rejectedCount?: SortOrder
    totalPoints?: SortOrder
    academicCount?: SortOrder
    nonAcademicCount?: SortOrder
    sportsCount?: SortOrder
    artsCount?: SortOrder
    scienceCount?: SortOrder
    technologyCount?: SortOrder
    schoolCount?: SortOrder
    districtCount?: SortOrder
    regencyCount?: SortOrder
    provinceCount?: SortOrder
    nationalCount?: SortOrder
    internationalCount?: SortOrder
    firstPlaceCount?: SortOrder
    secondPlaceCount?: SortOrder
    thirdPlaceCount?: SortOrder
    semester?: SortOrder
  }

  export type EnumAchievementRankFilter<$PrismaModel = never> = {
    equals?: $Enums.AchievementRank | EnumAchievementRankFieldRefInput<$PrismaModel>
    in?: $Enums.AchievementRank[] | ListEnumAchievementRankFieldRefInput<$PrismaModel>
    notIn?: $Enums.AchievementRank[] | ListEnumAchievementRankFieldRefInput<$PrismaModel>
    not?: NestedEnumAchievementRankFilter<$PrismaModel> | $Enums.AchievementRank
  }

  export type HallOfFameCountOrderByAggregateInput = {
    id?: SortOrder
    studentId?: SortOrder
    studentName?: SortOrder
    studentClass?: SortOrder
    achievementId?: SortOrder
    achievementTitle?: SortOrder
    level?: SortOrder
    rank?: SortOrder
    achievementDate?: SortOrder
    photoUrl?: SortOrder
    academicYear?: SortOrder
    displayOrder?: SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
  }

  export type HallOfFameAvgOrderByAggregateInput = {
    displayOrder?: SortOrder
  }

  export type HallOfFameMaxOrderByAggregateInput = {
    id?: SortOrder
    studentId?: SortOrder
    studentName?: SortOrder
    studentClass?: SortOrder
    achievementId?: SortOrder
    achievementTitle?: SortOrder
    level?: SortOrder
    rank?: SortOrder
    achievementDate?: SortOrder
    photoUrl?: SortOrder
    academicYear?: SortOrder
    displayOrder?: SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
  }

  export type HallOfFameMinOrderByAggregateInput = {
    id?: SortOrder
    studentId?: SortOrder
    studentName?: SortOrder
    studentClass?: SortOrder
    achievementId?: SortOrder
    achievementTitle?: SortOrder
    level?: SortOrder
    rank?: SortOrder
    achievementDate?: SortOrder
    photoUrl?: SortOrder
    academicYear?: SortOrder
    displayOrder?: SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
  }

  export type HallOfFameSumOrderByAggregateInput = {
    displayOrder?: SortOrder
  }

  export type EnumAchievementRankWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.AchievementRank | EnumAchievementRankFieldRefInput<$PrismaModel>
    in?: $Enums.AchievementRank[] | ListEnumAchievementRankFieldRefInput<$PrismaModel>
    notIn?: $Enums.AchievementRank[] | ListEnumAchievementRankFieldRefInput<$PrismaModel>
    not?: NestedEnumAchievementRankWithAggregatesFilter<$PrismaModel> | $Enums.AchievementRank
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumAchievementRankFilter<$PrismaModel>
    _max?: NestedEnumAchievementRankFilter<$PrismaModel>
  }

  export type AchievementApprovalHistoryCreateNestedManyWithoutAchievementInput = {
    create?: XOR<AchievementApprovalHistoryCreateWithoutAchievementInput, AchievementApprovalHistoryUncheckedCreateWithoutAchievementInput> | AchievementApprovalHistoryCreateWithoutAchievementInput[] | AchievementApprovalHistoryUncheckedCreateWithoutAchievementInput[]
    connectOrCreate?: AchievementApprovalHistoryCreateOrConnectWithoutAchievementInput | AchievementApprovalHistoryCreateOrConnectWithoutAchievementInput[]
    createMany?: AchievementApprovalHistoryCreateManyAchievementInputEnvelope
    connect?: AchievementApprovalHistoryWhereUniqueInput | AchievementApprovalHistoryWhereUniqueInput[]
  }

  export type AchievementApprovalHistoryUncheckedCreateNestedManyWithoutAchievementInput = {
    create?: XOR<AchievementApprovalHistoryCreateWithoutAchievementInput, AchievementApprovalHistoryUncheckedCreateWithoutAchievementInput> | AchievementApprovalHistoryCreateWithoutAchievementInput[] | AchievementApprovalHistoryUncheckedCreateWithoutAchievementInput[]
    connectOrCreate?: AchievementApprovalHistoryCreateOrConnectWithoutAchievementInput | AchievementApprovalHistoryCreateOrConnectWithoutAchievementInput[]
    createMany?: AchievementApprovalHistoryCreateManyAchievementInputEnvelope
    connect?: AchievementApprovalHistoryWhereUniqueInput | AchievementApprovalHistoryWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type EnumAchievementTypeFieldUpdateOperationsInput = {
    set?: $Enums.AchievementType
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type EnumAchievementLevelFieldUpdateOperationsInput = {
    set?: $Enums.AchievementLevel
  }

  export type NullableEnumAchievementRankFieldUpdateOperationsInput = {
    set?: $Enums.AchievementRank | null
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type FloatFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type EnumAchievementStatusFieldUpdateOperationsInput = {
    set?: $Enums.AchievementStatus
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
  }

  export type AchievementApprovalHistoryUpdateManyWithoutAchievementNestedInput = {
    create?: XOR<AchievementApprovalHistoryCreateWithoutAchievementInput, AchievementApprovalHistoryUncheckedCreateWithoutAchievementInput> | AchievementApprovalHistoryCreateWithoutAchievementInput[] | AchievementApprovalHistoryUncheckedCreateWithoutAchievementInput[]
    connectOrCreate?: AchievementApprovalHistoryCreateOrConnectWithoutAchievementInput | AchievementApprovalHistoryCreateOrConnectWithoutAchievementInput[]
    upsert?: AchievementApprovalHistoryUpsertWithWhereUniqueWithoutAchievementInput | AchievementApprovalHistoryUpsertWithWhereUniqueWithoutAchievementInput[]
    createMany?: AchievementApprovalHistoryCreateManyAchievementInputEnvelope
    set?: AchievementApprovalHistoryWhereUniqueInput | AchievementApprovalHistoryWhereUniqueInput[]
    disconnect?: AchievementApprovalHistoryWhereUniqueInput | AchievementApprovalHistoryWhereUniqueInput[]
    delete?: AchievementApprovalHistoryWhereUniqueInput | AchievementApprovalHistoryWhereUniqueInput[]
    connect?: AchievementApprovalHistoryWhereUniqueInput | AchievementApprovalHistoryWhereUniqueInput[]
    update?: AchievementApprovalHistoryUpdateWithWhereUniqueWithoutAchievementInput | AchievementApprovalHistoryUpdateWithWhereUniqueWithoutAchievementInput[]
    updateMany?: AchievementApprovalHistoryUpdateManyWithWhereWithoutAchievementInput | AchievementApprovalHistoryUpdateManyWithWhereWithoutAchievementInput[]
    deleteMany?: AchievementApprovalHistoryScalarWhereInput | AchievementApprovalHistoryScalarWhereInput[]
  }

  export type AchievementApprovalHistoryUncheckedUpdateManyWithoutAchievementNestedInput = {
    create?: XOR<AchievementApprovalHistoryCreateWithoutAchievementInput, AchievementApprovalHistoryUncheckedCreateWithoutAchievementInput> | AchievementApprovalHistoryCreateWithoutAchievementInput[] | AchievementApprovalHistoryUncheckedCreateWithoutAchievementInput[]
    connectOrCreate?: AchievementApprovalHistoryCreateOrConnectWithoutAchievementInput | AchievementApprovalHistoryCreateOrConnectWithoutAchievementInput[]
    upsert?: AchievementApprovalHistoryUpsertWithWhereUniqueWithoutAchievementInput | AchievementApprovalHistoryUpsertWithWhereUniqueWithoutAchievementInput[]
    createMany?: AchievementApprovalHistoryCreateManyAchievementInputEnvelope
    set?: AchievementApprovalHistoryWhereUniqueInput | AchievementApprovalHistoryWhereUniqueInput[]
    disconnect?: AchievementApprovalHistoryWhereUniqueInput | AchievementApprovalHistoryWhereUniqueInput[]
    delete?: AchievementApprovalHistoryWhereUniqueInput | AchievementApprovalHistoryWhereUniqueInput[]
    connect?: AchievementApprovalHistoryWhereUniqueInput | AchievementApprovalHistoryWhereUniqueInput[]
    update?: AchievementApprovalHistoryUpdateWithWhereUniqueWithoutAchievementInput | AchievementApprovalHistoryUpdateWithWhereUniqueWithoutAchievementInput[]
    updateMany?: AchievementApprovalHistoryUpdateManyWithWhereWithoutAchievementInput | AchievementApprovalHistoryUpdateManyWithWhereWithoutAchievementInput[]
    deleteMany?: AchievementApprovalHistoryScalarWhereInput | AchievementApprovalHistoryScalarWhereInput[]
  }

  export type AchievementCreateNestedOneWithoutApprovalHistoryInput = {
    create?: XOR<AchievementCreateWithoutApprovalHistoryInput, AchievementUncheckedCreateWithoutApprovalHistoryInput>
    connectOrCreate?: AchievementCreateOrConnectWithoutApprovalHistoryInput
    connect?: AchievementWhereUniqueInput
  }

  export type EnumApprovalActionFieldUpdateOperationsInput = {
    set?: $Enums.ApprovalAction
  }

  export type AchievementUpdateOneRequiredWithoutApprovalHistoryNestedInput = {
    create?: XOR<AchievementCreateWithoutApprovalHistoryInput, AchievementUncheckedCreateWithoutApprovalHistoryInput>
    connectOrCreate?: AchievementCreateOrConnectWithoutApprovalHistoryInput
    upsert?: AchievementUpsertWithoutApprovalHistoryInput
    connect?: AchievementWhereUniqueInput
    update?: XOR<XOR<AchievementUpdateToOneWithWhereWithoutApprovalHistoryInput, AchievementUpdateWithoutApprovalHistoryInput>, AchievementUncheckedUpdateWithoutApprovalHistoryInput>
  }

  export type EnumAchievementRankFieldUpdateOperationsInput = {
    set?: $Enums.AchievementRank
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

  export type NestedEnumAchievementTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.AchievementType | EnumAchievementTypeFieldRefInput<$PrismaModel>
    in?: $Enums.AchievementType[] | ListEnumAchievementTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.AchievementType[] | ListEnumAchievementTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumAchievementTypeFilter<$PrismaModel> | $Enums.AchievementType
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

  export type NestedEnumAchievementLevelFilter<$PrismaModel = never> = {
    equals?: $Enums.AchievementLevel | EnumAchievementLevelFieldRefInput<$PrismaModel>
    in?: $Enums.AchievementLevel[] | ListEnumAchievementLevelFieldRefInput<$PrismaModel>
    notIn?: $Enums.AchievementLevel[] | ListEnumAchievementLevelFieldRefInput<$PrismaModel>
    not?: NestedEnumAchievementLevelFilter<$PrismaModel> | $Enums.AchievementLevel
  }

  export type NestedEnumAchievementRankNullableFilter<$PrismaModel = never> = {
    equals?: $Enums.AchievementRank | EnumAchievementRankFieldRefInput<$PrismaModel> | null
    in?: $Enums.AchievementRank[] | ListEnumAchievementRankFieldRefInput<$PrismaModel> | null
    notIn?: $Enums.AchievementRank[] | ListEnumAchievementRankFieldRefInput<$PrismaModel> | null
    not?: NestedEnumAchievementRankNullableFilter<$PrismaModel> | $Enums.AchievementRank | null
  }

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
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

  export type NestedEnumAchievementStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.AchievementStatus | EnumAchievementStatusFieldRefInput<$PrismaModel>
    in?: $Enums.AchievementStatus[] | ListEnumAchievementStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.AchievementStatus[] | ListEnumAchievementStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumAchievementStatusFilter<$PrismaModel> | $Enums.AchievementStatus
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

  export type NestedEnumAchievementTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.AchievementType | EnumAchievementTypeFieldRefInput<$PrismaModel>
    in?: $Enums.AchievementType[] | ListEnumAchievementTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.AchievementType[] | ListEnumAchievementTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumAchievementTypeWithAggregatesFilter<$PrismaModel> | $Enums.AchievementType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumAchievementTypeFilter<$PrismaModel>
    _max?: NestedEnumAchievementTypeFilter<$PrismaModel>
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

  export type NestedEnumAchievementLevelWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.AchievementLevel | EnumAchievementLevelFieldRefInput<$PrismaModel>
    in?: $Enums.AchievementLevel[] | ListEnumAchievementLevelFieldRefInput<$PrismaModel>
    notIn?: $Enums.AchievementLevel[] | ListEnumAchievementLevelFieldRefInput<$PrismaModel>
    not?: NestedEnumAchievementLevelWithAggregatesFilter<$PrismaModel> | $Enums.AchievementLevel
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumAchievementLevelFilter<$PrismaModel>
    _max?: NestedEnumAchievementLevelFilter<$PrismaModel>
  }

  export type NestedEnumAchievementRankNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.AchievementRank | EnumAchievementRankFieldRefInput<$PrismaModel> | null
    in?: $Enums.AchievementRank[] | ListEnumAchievementRankFieldRefInput<$PrismaModel> | null
    notIn?: $Enums.AchievementRank[] | ListEnumAchievementRankFieldRefInput<$PrismaModel> | null
    not?: NestedEnumAchievementRankNullableWithAggregatesFilter<$PrismaModel> | $Enums.AchievementRank | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedEnumAchievementRankNullableFilter<$PrismaModel>
    _max?: NestedEnumAchievementRankNullableFilter<$PrismaModel>
  }

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
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

  export type NestedFloatWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedFloatFilter<$PrismaModel>
    _min?: NestedFloatFilter<$PrismaModel>
    _max?: NestedFloatFilter<$PrismaModel>
  }

  export type NestedEnumAchievementStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.AchievementStatus | EnumAchievementStatusFieldRefInput<$PrismaModel>
    in?: $Enums.AchievementStatus[] | ListEnumAchievementStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.AchievementStatus[] | ListEnumAchievementStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumAchievementStatusWithAggregatesFilter<$PrismaModel> | $Enums.AchievementStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumAchievementStatusFilter<$PrismaModel>
    _max?: NestedEnumAchievementStatusFilter<$PrismaModel>
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

  export type NestedEnumAchievementRankFilter<$PrismaModel = never> = {
    equals?: $Enums.AchievementRank | EnumAchievementRankFieldRefInput<$PrismaModel>
    in?: $Enums.AchievementRank[] | ListEnumAchievementRankFieldRefInput<$PrismaModel>
    notIn?: $Enums.AchievementRank[] | ListEnumAchievementRankFieldRefInput<$PrismaModel>
    not?: NestedEnumAchievementRankFilter<$PrismaModel> | $Enums.AchievementRank
  }

  export type NestedEnumAchievementRankWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.AchievementRank | EnumAchievementRankFieldRefInput<$PrismaModel>
    in?: $Enums.AchievementRank[] | ListEnumAchievementRankFieldRefInput<$PrismaModel>
    notIn?: $Enums.AchievementRank[] | ListEnumAchievementRankFieldRefInput<$PrismaModel>
    not?: NestedEnumAchievementRankWithAggregatesFilter<$PrismaModel> | $Enums.AchievementRank
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumAchievementRankFilter<$PrismaModel>
    _max?: NestedEnumAchievementRankFilter<$PrismaModel>
  }

  export type AchievementApprovalHistoryCreateWithoutAchievementInput = {
    id?: string
    action: $Enums.ApprovalAction
    fromStatus: $Enums.AchievementStatus
    toStatus: $Enums.AchievementStatus
    approverUserId: string
    approverName: string
    approverRole: string
    notes?: string | null
    actionDate?: Date | string
  }

  export type AchievementApprovalHistoryUncheckedCreateWithoutAchievementInput = {
    id?: string
    action: $Enums.ApprovalAction
    fromStatus: $Enums.AchievementStatus
    toStatus: $Enums.AchievementStatus
    approverUserId: string
    approverName: string
    approverRole: string
    notes?: string | null
    actionDate?: Date | string
  }

  export type AchievementApprovalHistoryCreateOrConnectWithoutAchievementInput = {
    where: AchievementApprovalHistoryWhereUniqueInput
    create: XOR<AchievementApprovalHistoryCreateWithoutAchievementInput, AchievementApprovalHistoryUncheckedCreateWithoutAchievementInput>
  }

  export type AchievementApprovalHistoryCreateManyAchievementInputEnvelope = {
    data: AchievementApprovalHistoryCreateManyAchievementInput | AchievementApprovalHistoryCreateManyAchievementInput[]
    skipDuplicates?: boolean
  }

  export type AchievementApprovalHistoryUpsertWithWhereUniqueWithoutAchievementInput = {
    where: AchievementApprovalHistoryWhereUniqueInput
    update: XOR<AchievementApprovalHistoryUpdateWithoutAchievementInput, AchievementApprovalHistoryUncheckedUpdateWithoutAchievementInput>
    create: XOR<AchievementApprovalHistoryCreateWithoutAchievementInput, AchievementApprovalHistoryUncheckedCreateWithoutAchievementInput>
  }

  export type AchievementApprovalHistoryUpdateWithWhereUniqueWithoutAchievementInput = {
    where: AchievementApprovalHistoryWhereUniqueInput
    data: XOR<AchievementApprovalHistoryUpdateWithoutAchievementInput, AchievementApprovalHistoryUncheckedUpdateWithoutAchievementInput>
  }

  export type AchievementApprovalHistoryUpdateManyWithWhereWithoutAchievementInput = {
    where: AchievementApprovalHistoryScalarWhereInput
    data: XOR<AchievementApprovalHistoryUpdateManyMutationInput, AchievementApprovalHistoryUncheckedUpdateManyWithoutAchievementInput>
  }

  export type AchievementApprovalHistoryScalarWhereInput = {
    AND?: AchievementApprovalHistoryScalarWhereInput | AchievementApprovalHistoryScalarWhereInput[]
    OR?: AchievementApprovalHistoryScalarWhereInput[]
    NOT?: AchievementApprovalHistoryScalarWhereInput | AchievementApprovalHistoryScalarWhereInput[]
    id?: StringFilter<"AchievementApprovalHistory"> | string
    achievementId?: StringFilter<"AchievementApprovalHistory"> | string
    action?: EnumApprovalActionFilter<"AchievementApprovalHistory"> | $Enums.ApprovalAction
    fromStatus?: EnumAchievementStatusFilter<"AchievementApprovalHistory"> | $Enums.AchievementStatus
    toStatus?: EnumAchievementStatusFilter<"AchievementApprovalHistory"> | $Enums.AchievementStatus
    approverUserId?: StringFilter<"AchievementApprovalHistory"> | string
    approverName?: StringFilter<"AchievementApprovalHistory"> | string
    approverRole?: StringFilter<"AchievementApprovalHistory"> | string
    notes?: StringNullableFilter<"AchievementApprovalHistory"> | string | null
    actionDate?: DateTimeFilter<"AchievementApprovalHistory"> | Date | string
  }

  export type AchievementCreateWithoutApprovalHistoryInput = {
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
    categoryType: $Enums.AchievementType
    title: string
    description: string
    achievementDate: Date | string
    location?: string | null
    organizer?: string | null
    level: $Enums.AchievementLevel
    rank?: $Enums.AchievementRank | null
    isTeamAchievement?: boolean
    teamName?: string | null
    teamMembers?: NullableJsonNullValueInput | InputJsonValue
    studentRole?: string | null
    points: number
    basePoints: number
    levelMultiplier?: number
    rankMultiplier?: number
    certificateUrl?: string | null
    evidenceUrls?: NullableJsonNullValueInput | InputJsonValue
    photoUrls?: NullableJsonNullValueInput | InputJsonValue
    status?: $Enums.AchievementStatus
    approvedAt?: Date | string | null
    approvedBy?: string | null
    approvedByName?: string | null
    bkNotes?: string | null
    rejectedAt?: Date | string | null
    rejectedBy?: string | null
    rejectedByName?: string | null
    rejectionReason?: string | null
    isPublished?: boolean
    publishedAt?: Date | string | null
    isFeatured?: boolean
    featuredUntil?: Date | string | null
    academicYear: string
    semester: number
    notificationSent?: boolean
    notificationSentAt?: Date | string | null
    viewCount?: number
    isActive?: boolean
    createdBy: string
    createdAt?: Date | string
    updatedBy?: string | null
    updatedAt?: Date | string
    deletedAt?: Date | string | null
    deletedBy?: string | null
  }

  export type AchievementUncheckedCreateWithoutApprovalHistoryInput = {
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
    categoryType: $Enums.AchievementType
    title: string
    description: string
    achievementDate: Date | string
    location?: string | null
    organizer?: string | null
    level: $Enums.AchievementLevel
    rank?: $Enums.AchievementRank | null
    isTeamAchievement?: boolean
    teamName?: string | null
    teamMembers?: NullableJsonNullValueInput | InputJsonValue
    studentRole?: string | null
    points: number
    basePoints: number
    levelMultiplier?: number
    rankMultiplier?: number
    certificateUrl?: string | null
    evidenceUrls?: NullableJsonNullValueInput | InputJsonValue
    photoUrls?: NullableJsonNullValueInput | InputJsonValue
    status?: $Enums.AchievementStatus
    approvedAt?: Date | string | null
    approvedBy?: string | null
    approvedByName?: string | null
    bkNotes?: string | null
    rejectedAt?: Date | string | null
    rejectedBy?: string | null
    rejectedByName?: string | null
    rejectionReason?: string | null
    isPublished?: boolean
    publishedAt?: Date | string | null
    isFeatured?: boolean
    featuredUntil?: Date | string | null
    academicYear: string
    semester: number
    notificationSent?: boolean
    notificationSentAt?: Date | string | null
    viewCount?: number
    isActive?: boolean
    createdBy: string
    createdAt?: Date | string
    updatedBy?: string | null
    updatedAt?: Date | string
    deletedAt?: Date | string | null
    deletedBy?: string | null
  }

  export type AchievementCreateOrConnectWithoutApprovalHistoryInput = {
    where: AchievementWhereUniqueInput
    create: XOR<AchievementCreateWithoutApprovalHistoryInput, AchievementUncheckedCreateWithoutApprovalHistoryInput>
  }

  export type AchievementUpsertWithoutApprovalHistoryInput = {
    update: XOR<AchievementUpdateWithoutApprovalHistoryInput, AchievementUncheckedUpdateWithoutApprovalHistoryInput>
    create: XOR<AchievementCreateWithoutApprovalHistoryInput, AchievementUncheckedCreateWithoutApprovalHistoryInput>
    where?: AchievementWhereInput
  }

  export type AchievementUpdateToOneWithWhereWithoutApprovalHistoryInput = {
    where?: AchievementWhereInput
    data: XOR<AchievementUpdateWithoutApprovalHistoryInput, AchievementUncheckedUpdateWithoutApprovalHistoryInput>
  }

  export type AchievementUpdateWithoutApprovalHistoryInput = {
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
    categoryType?: EnumAchievementTypeFieldUpdateOperationsInput | $Enums.AchievementType
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    achievementDate?: DateTimeFieldUpdateOperationsInput | Date | string
    location?: NullableStringFieldUpdateOperationsInput | string | null
    organizer?: NullableStringFieldUpdateOperationsInput | string | null
    level?: EnumAchievementLevelFieldUpdateOperationsInput | $Enums.AchievementLevel
    rank?: NullableEnumAchievementRankFieldUpdateOperationsInput | $Enums.AchievementRank | null
    isTeamAchievement?: BoolFieldUpdateOperationsInput | boolean
    teamName?: NullableStringFieldUpdateOperationsInput | string | null
    teamMembers?: NullableJsonNullValueInput | InputJsonValue
    studentRole?: NullableStringFieldUpdateOperationsInput | string | null
    points?: IntFieldUpdateOperationsInput | number
    basePoints?: IntFieldUpdateOperationsInput | number
    levelMultiplier?: FloatFieldUpdateOperationsInput | number
    rankMultiplier?: FloatFieldUpdateOperationsInput | number
    certificateUrl?: NullableStringFieldUpdateOperationsInput | string | null
    evidenceUrls?: NullableJsonNullValueInput | InputJsonValue
    photoUrls?: NullableJsonNullValueInput | InputJsonValue
    status?: EnumAchievementStatusFieldUpdateOperationsInput | $Enums.AchievementStatus
    approvedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    approvedBy?: NullableStringFieldUpdateOperationsInput | string | null
    approvedByName?: NullableStringFieldUpdateOperationsInput | string | null
    bkNotes?: NullableStringFieldUpdateOperationsInput | string | null
    rejectedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    rejectedBy?: NullableStringFieldUpdateOperationsInput | string | null
    rejectedByName?: NullableStringFieldUpdateOperationsInput | string | null
    rejectionReason?: NullableStringFieldUpdateOperationsInput | string | null
    isPublished?: BoolFieldUpdateOperationsInput | boolean
    publishedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    isFeatured?: BoolFieldUpdateOperationsInput | boolean
    featuredUntil?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    academicYear?: StringFieldUpdateOperationsInput | string
    semester?: IntFieldUpdateOperationsInput | number
    notificationSent?: BoolFieldUpdateOperationsInput | boolean
    notificationSentAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    viewCount?: IntFieldUpdateOperationsInput | number
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdBy?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedBy?: NullableStringFieldUpdateOperationsInput | string | null
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deletedBy?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type AchievementUncheckedUpdateWithoutApprovalHistoryInput = {
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
    categoryType?: EnumAchievementTypeFieldUpdateOperationsInput | $Enums.AchievementType
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    achievementDate?: DateTimeFieldUpdateOperationsInput | Date | string
    location?: NullableStringFieldUpdateOperationsInput | string | null
    organizer?: NullableStringFieldUpdateOperationsInput | string | null
    level?: EnumAchievementLevelFieldUpdateOperationsInput | $Enums.AchievementLevel
    rank?: NullableEnumAchievementRankFieldUpdateOperationsInput | $Enums.AchievementRank | null
    isTeamAchievement?: BoolFieldUpdateOperationsInput | boolean
    teamName?: NullableStringFieldUpdateOperationsInput | string | null
    teamMembers?: NullableJsonNullValueInput | InputJsonValue
    studentRole?: NullableStringFieldUpdateOperationsInput | string | null
    points?: IntFieldUpdateOperationsInput | number
    basePoints?: IntFieldUpdateOperationsInput | number
    levelMultiplier?: FloatFieldUpdateOperationsInput | number
    rankMultiplier?: FloatFieldUpdateOperationsInput | number
    certificateUrl?: NullableStringFieldUpdateOperationsInput | string | null
    evidenceUrls?: NullableJsonNullValueInput | InputJsonValue
    photoUrls?: NullableJsonNullValueInput | InputJsonValue
    status?: EnumAchievementStatusFieldUpdateOperationsInput | $Enums.AchievementStatus
    approvedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    approvedBy?: NullableStringFieldUpdateOperationsInput | string | null
    approvedByName?: NullableStringFieldUpdateOperationsInput | string | null
    bkNotes?: NullableStringFieldUpdateOperationsInput | string | null
    rejectedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    rejectedBy?: NullableStringFieldUpdateOperationsInput | string | null
    rejectedByName?: NullableStringFieldUpdateOperationsInput | string | null
    rejectionReason?: NullableStringFieldUpdateOperationsInput | string | null
    isPublished?: BoolFieldUpdateOperationsInput | boolean
    publishedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    isFeatured?: BoolFieldUpdateOperationsInput | boolean
    featuredUntil?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    academicYear?: StringFieldUpdateOperationsInput | string
    semester?: IntFieldUpdateOperationsInput | number
    notificationSent?: BoolFieldUpdateOperationsInput | boolean
    notificationSentAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    viewCount?: IntFieldUpdateOperationsInput | number
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdBy?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedBy?: NullableStringFieldUpdateOperationsInput | string | null
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deletedBy?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type AchievementApprovalHistoryCreateManyAchievementInput = {
    id?: string
    action: $Enums.ApprovalAction
    fromStatus: $Enums.AchievementStatus
    toStatus: $Enums.AchievementStatus
    approverUserId: string
    approverName: string
    approverRole: string
    notes?: string | null
    actionDate?: Date | string
  }

  export type AchievementApprovalHistoryUpdateWithoutAchievementInput = {
    id?: StringFieldUpdateOperationsInput | string
    action?: EnumApprovalActionFieldUpdateOperationsInput | $Enums.ApprovalAction
    fromStatus?: EnumAchievementStatusFieldUpdateOperationsInput | $Enums.AchievementStatus
    toStatus?: EnumAchievementStatusFieldUpdateOperationsInput | $Enums.AchievementStatus
    approverUserId?: StringFieldUpdateOperationsInput | string
    approverName?: StringFieldUpdateOperationsInput | string
    approverRole?: StringFieldUpdateOperationsInput | string
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    actionDate?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AchievementApprovalHistoryUncheckedUpdateWithoutAchievementInput = {
    id?: StringFieldUpdateOperationsInput | string
    action?: EnumApprovalActionFieldUpdateOperationsInput | $Enums.ApprovalAction
    fromStatus?: EnumAchievementStatusFieldUpdateOperationsInput | $Enums.AchievementStatus
    toStatus?: EnumAchievementStatusFieldUpdateOperationsInput | $Enums.AchievementStatus
    approverUserId?: StringFieldUpdateOperationsInput | string
    approverName?: StringFieldUpdateOperationsInput | string
    approverRole?: StringFieldUpdateOperationsInput | string
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    actionDate?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AchievementApprovalHistoryUncheckedUpdateManyWithoutAchievementInput = {
    id?: StringFieldUpdateOperationsInput | string
    action?: EnumApprovalActionFieldUpdateOperationsInput | $Enums.ApprovalAction
    fromStatus?: EnumAchievementStatusFieldUpdateOperationsInput | $Enums.AchievementStatus
    toStatus?: EnumAchievementStatusFieldUpdateOperationsInput | $Enums.AchievementStatus
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
     * @deprecated Use AchievementCountOutputTypeDefaultArgs instead
     */
    export type AchievementCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = AchievementCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use AchievementDefaultArgs instead
     */
    export type AchievementArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = AchievementDefaultArgs<ExtArgs>
    /**
     * @deprecated Use AchievementApprovalHistoryDefaultArgs instead
     */
    export type AchievementApprovalHistoryArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = AchievementApprovalHistoryDefaultArgs<ExtArgs>
    /**
     * @deprecated Use AchievementStatisticsDefaultArgs instead
     */
    export type AchievementStatisticsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = AchievementStatisticsDefaultArgs<ExtArgs>
    /**
     * @deprecated Use HallOfFameDefaultArgs instead
     */
    export type HallOfFameArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = HallOfFameDefaultArgs<ExtArgs>

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