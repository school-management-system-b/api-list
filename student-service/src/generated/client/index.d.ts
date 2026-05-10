
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
 * Model Student
 * 
 */
export type Student = $Result.DefaultSelection<Prisma.$StudentPayload>
/**
 * Model Class
 * 
 */
export type Class = $Result.DefaultSelection<Prisma.$ClassPayload>
/**
 * Model StudentPointsHistory
 * 
 */
export type StudentPointsHistory = $Result.DefaultSelection<Prisma.$StudentPointsHistoryPayload>
/**
 * Model AcademicYear
 * 
 */
export type AcademicYear = $Result.DefaultSelection<Prisma.$AcademicYearPayload>

/**
 * Enums
 */
export namespace $Enums {
  export const Gender: {
  MALE: 'MALE',
  FEMALE: 'FEMALE'
};

export type Gender = (typeof Gender)[keyof typeof Gender]


export const Religion: {
  ISLAM: 'ISLAM',
  KRISTEN: 'KRISTEN',
  KATOLIK: 'KATOLIK',
  HINDU: 'HINDU',
  BUDDHA: 'BUDDHA',
  KONGHUCU: 'KONGHUCU'
};

export type Religion = (typeof Religion)[keyof typeof Religion]


export const BloodType: {
  A: 'A',
  B: 'B',
  AB: 'AB',
  O: 'O'
};

export type BloodType = (typeof BloodType)[keyof typeof BloodType]


export const StudentStatus: {
  ACTIVE: 'ACTIVE',
  INACTIVE: 'INACTIVE',
  GRADUATED: 'GRADUATED',
  TRANSFERRED: 'TRANSFERRED',
  DROPPED_OUT: 'DROPPED_OUT',
  SUSPENDED: 'SUSPENDED'
};

export type StudentStatus = (typeof StudentStatus)[keyof typeof StudentStatus]


export const PointSourceType: {
  VIOLATION: 'VIOLATION',
  ACHIEVEMENT: 'ACHIEVEMENT',
  ADJUSTMENT: 'ADJUSTMENT'
};

export type PointSourceType = (typeof PointSourceType)[keyof typeof PointSourceType]

}

export type Gender = $Enums.Gender

export const Gender: typeof $Enums.Gender

export type Religion = $Enums.Religion

export const Religion: typeof $Enums.Religion

export type BloodType = $Enums.BloodType

export const BloodType: typeof $Enums.BloodType

export type StudentStatus = $Enums.StudentStatus

export const StudentStatus: typeof $Enums.StudentStatus

export type PointSourceType = $Enums.PointSourceType

export const PointSourceType: typeof $Enums.PointSourceType

/**
 * ##  Prisma Client ʲˢ
 * 
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Students
 * const students = await prisma.student.findMany()
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
   * // Fetch zero or more Students
   * const students = await prisma.student.findMany()
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
   * `prisma.student`: Exposes CRUD operations for the **Student** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Students
    * const students = await prisma.student.findMany()
    * ```
    */
  get student(): Prisma.StudentDelegate<ExtArgs>;

  /**
   * `prisma.class`: Exposes CRUD operations for the **Class** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Classes
    * const classes = await prisma.class.findMany()
    * ```
    */
  get class(): Prisma.ClassDelegate<ExtArgs>;

  /**
   * `prisma.studentPointsHistory`: Exposes CRUD operations for the **StudentPointsHistory** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more StudentPointsHistories
    * const studentPointsHistories = await prisma.studentPointsHistory.findMany()
    * ```
    */
  get studentPointsHistory(): Prisma.StudentPointsHistoryDelegate<ExtArgs>;

  /**
   * `prisma.academicYear`: Exposes CRUD operations for the **AcademicYear** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more AcademicYears
    * const academicYears = await prisma.academicYear.findMany()
    * ```
    */
  get academicYear(): Prisma.AcademicYearDelegate<ExtArgs>;
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
    Student: 'Student',
    Class: 'Class',
    StudentPointsHistory: 'StudentPointsHistory',
    AcademicYear: 'AcademicYear'
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
      modelProps: "student" | "class" | "studentPointsHistory" | "academicYear"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      Student: {
        payload: Prisma.$StudentPayload<ExtArgs>
        fields: Prisma.StudentFieldRefs
        operations: {
          findUnique: {
            args: Prisma.StudentFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StudentPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.StudentFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StudentPayload>
          }
          findFirst: {
            args: Prisma.StudentFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StudentPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.StudentFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StudentPayload>
          }
          findMany: {
            args: Prisma.StudentFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StudentPayload>[]
          }
          create: {
            args: Prisma.StudentCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StudentPayload>
          }
          createMany: {
            args: Prisma.StudentCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.StudentCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StudentPayload>[]
          }
          delete: {
            args: Prisma.StudentDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StudentPayload>
          }
          update: {
            args: Prisma.StudentUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StudentPayload>
          }
          deleteMany: {
            args: Prisma.StudentDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.StudentUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.StudentUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StudentPayload>
          }
          aggregate: {
            args: Prisma.StudentAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateStudent>
          }
          groupBy: {
            args: Prisma.StudentGroupByArgs<ExtArgs>
            result: $Utils.Optional<StudentGroupByOutputType>[]
          }
          count: {
            args: Prisma.StudentCountArgs<ExtArgs>
            result: $Utils.Optional<StudentCountAggregateOutputType> | number
          }
        }
      }
      Class: {
        payload: Prisma.$ClassPayload<ExtArgs>
        fields: Prisma.ClassFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ClassFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClassPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ClassFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClassPayload>
          }
          findFirst: {
            args: Prisma.ClassFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClassPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ClassFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClassPayload>
          }
          findMany: {
            args: Prisma.ClassFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClassPayload>[]
          }
          create: {
            args: Prisma.ClassCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClassPayload>
          }
          createMany: {
            args: Prisma.ClassCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ClassCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClassPayload>[]
          }
          delete: {
            args: Prisma.ClassDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClassPayload>
          }
          update: {
            args: Prisma.ClassUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClassPayload>
          }
          deleteMany: {
            args: Prisma.ClassDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ClassUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.ClassUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClassPayload>
          }
          aggregate: {
            args: Prisma.ClassAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateClass>
          }
          groupBy: {
            args: Prisma.ClassGroupByArgs<ExtArgs>
            result: $Utils.Optional<ClassGroupByOutputType>[]
          }
          count: {
            args: Prisma.ClassCountArgs<ExtArgs>
            result: $Utils.Optional<ClassCountAggregateOutputType> | number
          }
        }
      }
      StudentPointsHistory: {
        payload: Prisma.$StudentPointsHistoryPayload<ExtArgs>
        fields: Prisma.StudentPointsHistoryFieldRefs
        operations: {
          findUnique: {
            args: Prisma.StudentPointsHistoryFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StudentPointsHistoryPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.StudentPointsHistoryFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StudentPointsHistoryPayload>
          }
          findFirst: {
            args: Prisma.StudentPointsHistoryFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StudentPointsHistoryPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.StudentPointsHistoryFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StudentPointsHistoryPayload>
          }
          findMany: {
            args: Prisma.StudentPointsHistoryFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StudentPointsHistoryPayload>[]
          }
          create: {
            args: Prisma.StudentPointsHistoryCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StudentPointsHistoryPayload>
          }
          createMany: {
            args: Prisma.StudentPointsHistoryCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.StudentPointsHistoryCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StudentPointsHistoryPayload>[]
          }
          delete: {
            args: Prisma.StudentPointsHistoryDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StudentPointsHistoryPayload>
          }
          update: {
            args: Prisma.StudentPointsHistoryUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StudentPointsHistoryPayload>
          }
          deleteMany: {
            args: Prisma.StudentPointsHistoryDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.StudentPointsHistoryUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.StudentPointsHistoryUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StudentPointsHistoryPayload>
          }
          aggregate: {
            args: Prisma.StudentPointsHistoryAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateStudentPointsHistory>
          }
          groupBy: {
            args: Prisma.StudentPointsHistoryGroupByArgs<ExtArgs>
            result: $Utils.Optional<StudentPointsHistoryGroupByOutputType>[]
          }
          count: {
            args: Prisma.StudentPointsHistoryCountArgs<ExtArgs>
            result: $Utils.Optional<StudentPointsHistoryCountAggregateOutputType> | number
          }
        }
      }
      AcademicYear: {
        payload: Prisma.$AcademicYearPayload<ExtArgs>
        fields: Prisma.AcademicYearFieldRefs
        operations: {
          findUnique: {
            args: Prisma.AcademicYearFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AcademicYearPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.AcademicYearFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AcademicYearPayload>
          }
          findFirst: {
            args: Prisma.AcademicYearFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AcademicYearPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.AcademicYearFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AcademicYearPayload>
          }
          findMany: {
            args: Prisma.AcademicYearFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AcademicYearPayload>[]
          }
          create: {
            args: Prisma.AcademicYearCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AcademicYearPayload>
          }
          createMany: {
            args: Prisma.AcademicYearCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.AcademicYearCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AcademicYearPayload>[]
          }
          delete: {
            args: Prisma.AcademicYearDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AcademicYearPayload>
          }
          update: {
            args: Prisma.AcademicYearUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AcademicYearPayload>
          }
          deleteMany: {
            args: Prisma.AcademicYearDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.AcademicYearUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.AcademicYearUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AcademicYearPayload>
          }
          aggregate: {
            args: Prisma.AcademicYearAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateAcademicYear>
          }
          groupBy: {
            args: Prisma.AcademicYearGroupByArgs<ExtArgs>
            result: $Utils.Optional<AcademicYearGroupByOutputType>[]
          }
          count: {
            args: Prisma.AcademicYearCountArgs<ExtArgs>
            result: $Utils.Optional<AcademicYearCountAggregateOutputType> | number
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
   * Count Type StudentCountOutputType
   */

  export type StudentCountOutputType = {
    pointsHistory: number
  }

  export type StudentCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    pointsHistory?: boolean | StudentCountOutputTypeCountPointsHistoryArgs
  }

  // Custom InputTypes
  /**
   * StudentCountOutputType without action
   */
  export type StudentCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StudentCountOutputType
     */
    select?: StudentCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * StudentCountOutputType without action
   */
  export type StudentCountOutputTypeCountPointsHistoryArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: StudentPointsHistoryWhereInput
  }


  /**
   * Count Type ClassCountOutputType
   */

  export type ClassCountOutputType = {
    students: number
  }

  export type ClassCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    students?: boolean | ClassCountOutputTypeCountStudentsArgs
  }

  // Custom InputTypes
  /**
   * ClassCountOutputType without action
   */
  export type ClassCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ClassCountOutputType
     */
    select?: ClassCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * ClassCountOutputType without action
   */
  export type ClassCountOutputTypeCountStudentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: StudentWhereInput
  }


  /**
   * Models
   */

  /**
   * Model Student
   */

  export type AggregateStudent = {
    _count: StudentCountAggregateOutputType | null
    _avg: StudentAvgAggregateOutputType | null
    _sum: StudentSumAggregateOutputType | null
    _min: StudentMinAggregateOutputType | null
    _max: StudentMaxAggregateOutputType | null
  }

  export type StudentAvgAggregateOutputType = {
    totalPoints: number | null
    positivePoints: number | null
    negativePoints: number | null
    currentRank: number | null
  }

  export type StudentSumAggregateOutputType = {
    totalPoints: number | null
    positivePoints: number | null
    negativePoints: number | null
    currentRank: number | null
  }

  export type StudentMinAggregateOutputType = {
    id: string | null
    userId: string | null
    nisn: string | null
    nis: string | null
    name: string | null
    nickname: string | null
    classId: string | null
    className: string | null
    classLevel: string | null
    classMajor: string | null
    gender: $Enums.Gender | null
    birthPlace: string | null
    birthDate: Date | null
    religion: $Enums.Religion | null
    bloodType: $Enums.BloodType | null
    address: string | null
    rt: string | null
    rw: string | null
    village: string | null
    district: string | null
    city: string | null
    province: string | null
    postalCode: string | null
    phone: string | null
    email: string | null
    photoUrl: string | null
    parentId: string | null
    fatherName: string | null
    fatherOccupation: string | null
    fatherPhone: string | null
    motherName: string | null
    motherOccupation: string | null
    motherPhone: string | null
    guardianName: string | null
    guardianRelation: string | null
    guardianPhone: string | null
    waliKelasId: string | null
    waliKelasName: string | null
    totalPoints: number | null
    positivePoints: number | null
    negativePoints: number | null
    currentRank: number | null
    academicYear: string | null
    entryYear: string | null
    entryDate: Date | null
    status: $Enums.StudentStatus | null
    statusReason: string | null
    graduationYear: string | null
    birthCertificateUrl: string | null
    familyCardUrl: string | null
    photoCardUrl: string | null
    isActive: boolean | null
    lastSyncedAt: Date | null
    createdBy: string | null
    createdAt: Date | null
    updatedBy: string | null
    updatedAt: Date | null
    deletedAt: Date | null
    deletedBy: string | null
  }

  export type StudentMaxAggregateOutputType = {
    id: string | null
    userId: string | null
    nisn: string | null
    nis: string | null
    name: string | null
    nickname: string | null
    classId: string | null
    className: string | null
    classLevel: string | null
    classMajor: string | null
    gender: $Enums.Gender | null
    birthPlace: string | null
    birthDate: Date | null
    religion: $Enums.Religion | null
    bloodType: $Enums.BloodType | null
    address: string | null
    rt: string | null
    rw: string | null
    village: string | null
    district: string | null
    city: string | null
    province: string | null
    postalCode: string | null
    phone: string | null
    email: string | null
    photoUrl: string | null
    parentId: string | null
    fatherName: string | null
    fatherOccupation: string | null
    fatherPhone: string | null
    motherName: string | null
    motherOccupation: string | null
    motherPhone: string | null
    guardianName: string | null
    guardianRelation: string | null
    guardianPhone: string | null
    waliKelasId: string | null
    waliKelasName: string | null
    totalPoints: number | null
    positivePoints: number | null
    negativePoints: number | null
    currentRank: number | null
    academicYear: string | null
    entryYear: string | null
    entryDate: Date | null
    status: $Enums.StudentStatus | null
    statusReason: string | null
    graduationYear: string | null
    birthCertificateUrl: string | null
    familyCardUrl: string | null
    photoCardUrl: string | null
    isActive: boolean | null
    lastSyncedAt: Date | null
    createdBy: string | null
    createdAt: Date | null
    updatedBy: string | null
    updatedAt: Date | null
    deletedAt: Date | null
    deletedBy: string | null
  }

  export type StudentCountAggregateOutputType = {
    id: number
    userId: number
    nisn: number
    nis: number
    name: number
    nickname: number
    classId: number
    className: number
    classLevel: number
    classMajor: number
    gender: number
    birthPlace: number
    birthDate: number
    religion: number
    bloodType: number
    address: number
    rt: number
    rw: number
    village: number
    district: number
    city: number
    province: number
    postalCode: number
    phone: number
    email: number
    photoUrl: number
    parentId: number
    fatherName: number
    fatherOccupation: number
    fatherPhone: number
    motherName: number
    motherOccupation: number
    motherPhone: number
    guardianName: number
    guardianRelation: number
    guardianPhone: number
    waliKelasId: number
    waliKelasName: number
    totalPoints: number
    positivePoints: number
    negativePoints: number
    currentRank: number
    academicYear: number
    entryYear: number
    entryDate: number
    status: number
    statusReason: number
    graduationYear: number
    birthCertificateUrl: number
    familyCardUrl: number
    photoCardUrl: number
    isActive: number
    lastSyncedAt: number
    createdBy: number
    createdAt: number
    updatedBy: number
    updatedAt: number
    deletedAt: number
    deletedBy: number
    _all: number
  }


  export type StudentAvgAggregateInputType = {
    totalPoints?: true
    positivePoints?: true
    negativePoints?: true
    currentRank?: true
  }

  export type StudentSumAggregateInputType = {
    totalPoints?: true
    positivePoints?: true
    negativePoints?: true
    currentRank?: true
  }

  export type StudentMinAggregateInputType = {
    id?: true
    userId?: true
    nisn?: true
    nis?: true
    name?: true
    nickname?: true
    classId?: true
    className?: true
    classLevel?: true
    classMajor?: true
    gender?: true
    birthPlace?: true
    birthDate?: true
    religion?: true
    bloodType?: true
    address?: true
    rt?: true
    rw?: true
    village?: true
    district?: true
    city?: true
    province?: true
    postalCode?: true
    phone?: true
    email?: true
    photoUrl?: true
    parentId?: true
    fatherName?: true
    fatherOccupation?: true
    fatherPhone?: true
    motherName?: true
    motherOccupation?: true
    motherPhone?: true
    guardianName?: true
    guardianRelation?: true
    guardianPhone?: true
    waliKelasId?: true
    waliKelasName?: true
    totalPoints?: true
    positivePoints?: true
    negativePoints?: true
    currentRank?: true
    academicYear?: true
    entryYear?: true
    entryDate?: true
    status?: true
    statusReason?: true
    graduationYear?: true
    birthCertificateUrl?: true
    familyCardUrl?: true
    photoCardUrl?: true
    isActive?: true
    lastSyncedAt?: true
    createdBy?: true
    createdAt?: true
    updatedBy?: true
    updatedAt?: true
    deletedAt?: true
    deletedBy?: true
  }

  export type StudentMaxAggregateInputType = {
    id?: true
    userId?: true
    nisn?: true
    nis?: true
    name?: true
    nickname?: true
    classId?: true
    className?: true
    classLevel?: true
    classMajor?: true
    gender?: true
    birthPlace?: true
    birthDate?: true
    religion?: true
    bloodType?: true
    address?: true
    rt?: true
    rw?: true
    village?: true
    district?: true
    city?: true
    province?: true
    postalCode?: true
    phone?: true
    email?: true
    photoUrl?: true
    parentId?: true
    fatherName?: true
    fatherOccupation?: true
    fatherPhone?: true
    motherName?: true
    motherOccupation?: true
    motherPhone?: true
    guardianName?: true
    guardianRelation?: true
    guardianPhone?: true
    waliKelasId?: true
    waliKelasName?: true
    totalPoints?: true
    positivePoints?: true
    negativePoints?: true
    currentRank?: true
    academicYear?: true
    entryYear?: true
    entryDate?: true
    status?: true
    statusReason?: true
    graduationYear?: true
    birthCertificateUrl?: true
    familyCardUrl?: true
    photoCardUrl?: true
    isActive?: true
    lastSyncedAt?: true
    createdBy?: true
    createdAt?: true
    updatedBy?: true
    updatedAt?: true
    deletedAt?: true
    deletedBy?: true
  }

  export type StudentCountAggregateInputType = {
    id?: true
    userId?: true
    nisn?: true
    nis?: true
    name?: true
    nickname?: true
    classId?: true
    className?: true
    classLevel?: true
    classMajor?: true
    gender?: true
    birthPlace?: true
    birthDate?: true
    religion?: true
    bloodType?: true
    address?: true
    rt?: true
    rw?: true
    village?: true
    district?: true
    city?: true
    province?: true
    postalCode?: true
    phone?: true
    email?: true
    photoUrl?: true
    parentId?: true
    fatherName?: true
    fatherOccupation?: true
    fatherPhone?: true
    motherName?: true
    motherOccupation?: true
    motherPhone?: true
    guardianName?: true
    guardianRelation?: true
    guardianPhone?: true
    waliKelasId?: true
    waliKelasName?: true
    totalPoints?: true
    positivePoints?: true
    negativePoints?: true
    currentRank?: true
    academicYear?: true
    entryYear?: true
    entryDate?: true
    status?: true
    statusReason?: true
    graduationYear?: true
    birthCertificateUrl?: true
    familyCardUrl?: true
    photoCardUrl?: true
    isActive?: true
    lastSyncedAt?: true
    createdBy?: true
    createdAt?: true
    updatedBy?: true
    updatedAt?: true
    deletedAt?: true
    deletedBy?: true
    _all?: true
  }

  export type StudentAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Student to aggregate.
     */
    where?: StudentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Students to fetch.
     */
    orderBy?: StudentOrderByWithRelationInput | StudentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: StudentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Students from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Students.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Students
    **/
    _count?: true | StudentCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: StudentAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: StudentSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: StudentMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: StudentMaxAggregateInputType
  }

  export type GetStudentAggregateType<T extends StudentAggregateArgs> = {
        [P in keyof T & keyof AggregateStudent]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateStudent[P]>
      : GetScalarType<T[P], AggregateStudent[P]>
  }




  export type StudentGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: StudentWhereInput
    orderBy?: StudentOrderByWithAggregationInput | StudentOrderByWithAggregationInput[]
    by: StudentScalarFieldEnum[] | StudentScalarFieldEnum
    having?: StudentScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: StudentCountAggregateInputType | true
    _avg?: StudentAvgAggregateInputType
    _sum?: StudentSumAggregateInputType
    _min?: StudentMinAggregateInputType
    _max?: StudentMaxAggregateInputType
  }

  export type StudentGroupByOutputType = {
    id: string
    userId: string | null
    nisn: string
    nis: string | null
    name: string
    nickname: string | null
    classId: string
    className: string
    classLevel: string
    classMajor: string | null
    gender: $Enums.Gender
    birthPlace: string
    birthDate: Date
    religion: $Enums.Religion
    bloodType: $Enums.BloodType | null
    address: string
    rt: string | null
    rw: string | null
    village: string | null
    district: string | null
    city: string
    province: string
    postalCode: string | null
    phone: string | null
    email: string | null
    photoUrl: string | null
    parentId: string | null
    fatherName: string | null
    fatherOccupation: string | null
    fatherPhone: string | null
    motherName: string | null
    motherOccupation: string | null
    motherPhone: string | null
    guardianName: string | null
    guardianRelation: string | null
    guardianPhone: string | null
    waliKelasId: string | null
    waliKelasName: string | null
    totalPoints: number
    positivePoints: number
    negativePoints: number
    currentRank: number | null
    academicYear: string
    entryYear: string
    entryDate: Date
    status: $Enums.StudentStatus
    statusReason: string | null
    graduationYear: string | null
    birthCertificateUrl: string | null
    familyCardUrl: string | null
    photoCardUrl: string | null
    isActive: boolean
    lastSyncedAt: Date | null
    createdBy: string
    createdAt: Date
    updatedBy: string | null
    updatedAt: Date
    deletedAt: Date | null
    deletedBy: string | null
    _count: StudentCountAggregateOutputType | null
    _avg: StudentAvgAggregateOutputType | null
    _sum: StudentSumAggregateOutputType | null
    _min: StudentMinAggregateOutputType | null
    _max: StudentMaxAggregateOutputType | null
  }

  type GetStudentGroupByPayload<T extends StudentGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<StudentGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof StudentGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], StudentGroupByOutputType[P]>
            : GetScalarType<T[P], StudentGroupByOutputType[P]>
        }
      >
    >


  export type StudentSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    nisn?: boolean
    nis?: boolean
    name?: boolean
    nickname?: boolean
    classId?: boolean
    className?: boolean
    classLevel?: boolean
    classMajor?: boolean
    gender?: boolean
    birthPlace?: boolean
    birthDate?: boolean
    religion?: boolean
    bloodType?: boolean
    address?: boolean
    rt?: boolean
    rw?: boolean
    village?: boolean
    district?: boolean
    city?: boolean
    province?: boolean
    postalCode?: boolean
    phone?: boolean
    email?: boolean
    photoUrl?: boolean
    parentId?: boolean
    fatherName?: boolean
    fatherOccupation?: boolean
    fatherPhone?: boolean
    motherName?: boolean
    motherOccupation?: boolean
    motherPhone?: boolean
    guardianName?: boolean
    guardianRelation?: boolean
    guardianPhone?: boolean
    waliKelasId?: boolean
    waliKelasName?: boolean
    totalPoints?: boolean
    positivePoints?: boolean
    negativePoints?: boolean
    currentRank?: boolean
    academicYear?: boolean
    entryYear?: boolean
    entryDate?: boolean
    status?: boolean
    statusReason?: boolean
    graduationYear?: boolean
    birthCertificateUrl?: boolean
    familyCardUrl?: boolean
    photoCardUrl?: boolean
    isActive?: boolean
    lastSyncedAt?: boolean
    createdBy?: boolean
    createdAt?: boolean
    updatedBy?: boolean
    updatedAt?: boolean
    deletedAt?: boolean
    deletedBy?: boolean
    class?: boolean | ClassDefaultArgs<ExtArgs>
    pointsHistory?: boolean | Student$pointsHistoryArgs<ExtArgs>
    _count?: boolean | StudentCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["student"]>

  export type StudentSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    nisn?: boolean
    nis?: boolean
    name?: boolean
    nickname?: boolean
    classId?: boolean
    className?: boolean
    classLevel?: boolean
    classMajor?: boolean
    gender?: boolean
    birthPlace?: boolean
    birthDate?: boolean
    religion?: boolean
    bloodType?: boolean
    address?: boolean
    rt?: boolean
    rw?: boolean
    village?: boolean
    district?: boolean
    city?: boolean
    province?: boolean
    postalCode?: boolean
    phone?: boolean
    email?: boolean
    photoUrl?: boolean
    parentId?: boolean
    fatherName?: boolean
    fatherOccupation?: boolean
    fatherPhone?: boolean
    motherName?: boolean
    motherOccupation?: boolean
    motherPhone?: boolean
    guardianName?: boolean
    guardianRelation?: boolean
    guardianPhone?: boolean
    waliKelasId?: boolean
    waliKelasName?: boolean
    totalPoints?: boolean
    positivePoints?: boolean
    negativePoints?: boolean
    currentRank?: boolean
    academicYear?: boolean
    entryYear?: boolean
    entryDate?: boolean
    status?: boolean
    statusReason?: boolean
    graduationYear?: boolean
    birthCertificateUrl?: boolean
    familyCardUrl?: boolean
    photoCardUrl?: boolean
    isActive?: boolean
    lastSyncedAt?: boolean
    createdBy?: boolean
    createdAt?: boolean
    updatedBy?: boolean
    updatedAt?: boolean
    deletedAt?: boolean
    deletedBy?: boolean
    class?: boolean | ClassDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["student"]>

  export type StudentSelectScalar = {
    id?: boolean
    userId?: boolean
    nisn?: boolean
    nis?: boolean
    name?: boolean
    nickname?: boolean
    classId?: boolean
    className?: boolean
    classLevel?: boolean
    classMajor?: boolean
    gender?: boolean
    birthPlace?: boolean
    birthDate?: boolean
    religion?: boolean
    bloodType?: boolean
    address?: boolean
    rt?: boolean
    rw?: boolean
    village?: boolean
    district?: boolean
    city?: boolean
    province?: boolean
    postalCode?: boolean
    phone?: boolean
    email?: boolean
    photoUrl?: boolean
    parentId?: boolean
    fatherName?: boolean
    fatherOccupation?: boolean
    fatherPhone?: boolean
    motherName?: boolean
    motherOccupation?: boolean
    motherPhone?: boolean
    guardianName?: boolean
    guardianRelation?: boolean
    guardianPhone?: boolean
    waliKelasId?: boolean
    waliKelasName?: boolean
    totalPoints?: boolean
    positivePoints?: boolean
    negativePoints?: boolean
    currentRank?: boolean
    academicYear?: boolean
    entryYear?: boolean
    entryDate?: boolean
    status?: boolean
    statusReason?: boolean
    graduationYear?: boolean
    birthCertificateUrl?: boolean
    familyCardUrl?: boolean
    photoCardUrl?: boolean
    isActive?: boolean
    lastSyncedAt?: boolean
    createdBy?: boolean
    createdAt?: boolean
    updatedBy?: boolean
    updatedAt?: boolean
    deletedAt?: boolean
    deletedBy?: boolean
  }

  export type StudentInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    class?: boolean | ClassDefaultArgs<ExtArgs>
    pointsHistory?: boolean | Student$pointsHistoryArgs<ExtArgs>
    _count?: boolean | StudentCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type StudentIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    class?: boolean | ClassDefaultArgs<ExtArgs>
  }

  export type $StudentPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Student"
    objects: {
      class: Prisma.$ClassPayload<ExtArgs>
      pointsHistory: Prisma.$StudentPointsHistoryPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      userId: string | null
      nisn: string
      nis: string | null
      name: string
      nickname: string | null
      classId: string
      className: string
      classLevel: string
      classMajor: string | null
      gender: $Enums.Gender
      birthPlace: string
      birthDate: Date
      religion: $Enums.Religion
      bloodType: $Enums.BloodType | null
      address: string
      rt: string | null
      rw: string | null
      village: string | null
      district: string | null
      city: string
      province: string
      postalCode: string | null
      phone: string | null
      email: string | null
      photoUrl: string | null
      parentId: string | null
      fatherName: string | null
      fatherOccupation: string | null
      fatherPhone: string | null
      motherName: string | null
      motherOccupation: string | null
      motherPhone: string | null
      guardianName: string | null
      guardianRelation: string | null
      guardianPhone: string | null
      waliKelasId: string | null
      waliKelasName: string | null
      totalPoints: number
      positivePoints: number
      negativePoints: number
      currentRank: number | null
      academicYear: string
      entryYear: string
      entryDate: Date
      status: $Enums.StudentStatus
      statusReason: string | null
      graduationYear: string | null
      birthCertificateUrl: string | null
      familyCardUrl: string | null
      photoCardUrl: string | null
      isActive: boolean
      lastSyncedAt: Date | null
      createdBy: string
      createdAt: Date
      updatedBy: string | null
      updatedAt: Date
      deletedAt: Date | null
      deletedBy: string | null
    }, ExtArgs["result"]["student"]>
    composites: {}
  }

  type StudentGetPayload<S extends boolean | null | undefined | StudentDefaultArgs> = $Result.GetResult<Prisma.$StudentPayload, S>

  type StudentCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<StudentFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: StudentCountAggregateInputType | true
    }

  export interface StudentDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Student'], meta: { name: 'Student' } }
    /**
     * Find zero or one Student that matches the filter.
     * @param {StudentFindUniqueArgs} args - Arguments to find a Student
     * @example
     * // Get one Student
     * const student = await prisma.student.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends StudentFindUniqueArgs>(args: SelectSubset<T, StudentFindUniqueArgs<ExtArgs>>): Prisma__StudentClient<$Result.GetResult<Prisma.$StudentPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one Student that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {StudentFindUniqueOrThrowArgs} args - Arguments to find a Student
     * @example
     * // Get one Student
     * const student = await prisma.student.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends StudentFindUniqueOrThrowArgs>(args: SelectSubset<T, StudentFindUniqueOrThrowArgs<ExtArgs>>): Prisma__StudentClient<$Result.GetResult<Prisma.$StudentPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first Student that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StudentFindFirstArgs} args - Arguments to find a Student
     * @example
     * // Get one Student
     * const student = await prisma.student.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends StudentFindFirstArgs>(args?: SelectSubset<T, StudentFindFirstArgs<ExtArgs>>): Prisma__StudentClient<$Result.GetResult<Prisma.$StudentPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first Student that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StudentFindFirstOrThrowArgs} args - Arguments to find a Student
     * @example
     * // Get one Student
     * const student = await prisma.student.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends StudentFindFirstOrThrowArgs>(args?: SelectSubset<T, StudentFindFirstOrThrowArgs<ExtArgs>>): Prisma__StudentClient<$Result.GetResult<Prisma.$StudentPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more Students that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StudentFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Students
     * const students = await prisma.student.findMany()
     * 
     * // Get first 10 Students
     * const students = await prisma.student.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const studentWithIdOnly = await prisma.student.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends StudentFindManyArgs>(args?: SelectSubset<T, StudentFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$StudentPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a Student.
     * @param {StudentCreateArgs} args - Arguments to create a Student.
     * @example
     * // Create one Student
     * const Student = await prisma.student.create({
     *   data: {
     *     // ... data to create a Student
     *   }
     * })
     * 
     */
    create<T extends StudentCreateArgs>(args: SelectSubset<T, StudentCreateArgs<ExtArgs>>): Prisma__StudentClient<$Result.GetResult<Prisma.$StudentPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many Students.
     * @param {StudentCreateManyArgs} args - Arguments to create many Students.
     * @example
     * // Create many Students
     * const student = await prisma.student.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends StudentCreateManyArgs>(args?: SelectSubset<T, StudentCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Students and returns the data saved in the database.
     * @param {StudentCreateManyAndReturnArgs} args - Arguments to create many Students.
     * @example
     * // Create many Students
     * const student = await prisma.student.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Students and only return the `id`
     * const studentWithIdOnly = await prisma.student.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends StudentCreateManyAndReturnArgs>(args?: SelectSubset<T, StudentCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$StudentPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a Student.
     * @param {StudentDeleteArgs} args - Arguments to delete one Student.
     * @example
     * // Delete one Student
     * const Student = await prisma.student.delete({
     *   where: {
     *     // ... filter to delete one Student
     *   }
     * })
     * 
     */
    delete<T extends StudentDeleteArgs>(args: SelectSubset<T, StudentDeleteArgs<ExtArgs>>): Prisma__StudentClient<$Result.GetResult<Prisma.$StudentPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one Student.
     * @param {StudentUpdateArgs} args - Arguments to update one Student.
     * @example
     * // Update one Student
     * const student = await prisma.student.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends StudentUpdateArgs>(args: SelectSubset<T, StudentUpdateArgs<ExtArgs>>): Prisma__StudentClient<$Result.GetResult<Prisma.$StudentPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more Students.
     * @param {StudentDeleteManyArgs} args - Arguments to filter Students to delete.
     * @example
     * // Delete a few Students
     * const { count } = await prisma.student.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends StudentDeleteManyArgs>(args?: SelectSubset<T, StudentDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Students.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StudentUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Students
     * const student = await prisma.student.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends StudentUpdateManyArgs>(args: SelectSubset<T, StudentUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Student.
     * @param {StudentUpsertArgs} args - Arguments to update or create a Student.
     * @example
     * // Update or create a Student
     * const student = await prisma.student.upsert({
     *   create: {
     *     // ... data to create a Student
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Student we want to update
     *   }
     * })
     */
    upsert<T extends StudentUpsertArgs>(args: SelectSubset<T, StudentUpsertArgs<ExtArgs>>): Prisma__StudentClient<$Result.GetResult<Prisma.$StudentPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of Students.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StudentCountArgs} args - Arguments to filter Students to count.
     * @example
     * // Count the number of Students
     * const count = await prisma.student.count({
     *   where: {
     *     // ... the filter for the Students we want to count
     *   }
     * })
    **/
    count<T extends StudentCountArgs>(
      args?: Subset<T, StudentCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], StudentCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Student.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StudentAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends StudentAggregateArgs>(args: Subset<T, StudentAggregateArgs>): Prisma.PrismaPromise<GetStudentAggregateType<T>>

    /**
     * Group by Student.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StudentGroupByArgs} args - Group by arguments.
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
      T extends StudentGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: StudentGroupByArgs['orderBy'] }
        : { orderBy?: StudentGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, StudentGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetStudentGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Student model
   */
  readonly fields: StudentFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Student.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__StudentClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    class<T extends ClassDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ClassDefaultArgs<ExtArgs>>): Prisma__ClassClient<$Result.GetResult<Prisma.$ClassPayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
    pointsHistory<T extends Student$pointsHistoryArgs<ExtArgs> = {}>(args?: Subset<T, Student$pointsHistoryArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$StudentPointsHistoryPayload<ExtArgs>, T, "findMany"> | Null>
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
   * Fields of the Student model
   */ 
  interface StudentFieldRefs {
    readonly id: FieldRef<"Student", 'String'>
    readonly userId: FieldRef<"Student", 'String'>
    readonly nisn: FieldRef<"Student", 'String'>
    readonly nis: FieldRef<"Student", 'String'>
    readonly name: FieldRef<"Student", 'String'>
    readonly nickname: FieldRef<"Student", 'String'>
    readonly classId: FieldRef<"Student", 'String'>
    readonly className: FieldRef<"Student", 'String'>
    readonly classLevel: FieldRef<"Student", 'String'>
    readonly classMajor: FieldRef<"Student", 'String'>
    readonly gender: FieldRef<"Student", 'Gender'>
    readonly birthPlace: FieldRef<"Student", 'String'>
    readonly birthDate: FieldRef<"Student", 'DateTime'>
    readonly religion: FieldRef<"Student", 'Religion'>
    readonly bloodType: FieldRef<"Student", 'BloodType'>
    readonly address: FieldRef<"Student", 'String'>
    readonly rt: FieldRef<"Student", 'String'>
    readonly rw: FieldRef<"Student", 'String'>
    readonly village: FieldRef<"Student", 'String'>
    readonly district: FieldRef<"Student", 'String'>
    readonly city: FieldRef<"Student", 'String'>
    readonly province: FieldRef<"Student", 'String'>
    readonly postalCode: FieldRef<"Student", 'String'>
    readonly phone: FieldRef<"Student", 'String'>
    readonly email: FieldRef<"Student", 'String'>
    readonly photoUrl: FieldRef<"Student", 'String'>
    readonly parentId: FieldRef<"Student", 'String'>
    readonly fatherName: FieldRef<"Student", 'String'>
    readonly fatherOccupation: FieldRef<"Student", 'String'>
    readonly fatherPhone: FieldRef<"Student", 'String'>
    readonly motherName: FieldRef<"Student", 'String'>
    readonly motherOccupation: FieldRef<"Student", 'String'>
    readonly motherPhone: FieldRef<"Student", 'String'>
    readonly guardianName: FieldRef<"Student", 'String'>
    readonly guardianRelation: FieldRef<"Student", 'String'>
    readonly guardianPhone: FieldRef<"Student", 'String'>
    readonly waliKelasId: FieldRef<"Student", 'String'>
    readonly waliKelasName: FieldRef<"Student", 'String'>
    readonly totalPoints: FieldRef<"Student", 'Int'>
    readonly positivePoints: FieldRef<"Student", 'Int'>
    readonly negativePoints: FieldRef<"Student", 'Int'>
    readonly currentRank: FieldRef<"Student", 'Int'>
    readonly academicYear: FieldRef<"Student", 'String'>
    readonly entryYear: FieldRef<"Student", 'String'>
    readonly entryDate: FieldRef<"Student", 'DateTime'>
    readonly status: FieldRef<"Student", 'StudentStatus'>
    readonly statusReason: FieldRef<"Student", 'String'>
    readonly graduationYear: FieldRef<"Student", 'String'>
    readonly birthCertificateUrl: FieldRef<"Student", 'String'>
    readonly familyCardUrl: FieldRef<"Student", 'String'>
    readonly photoCardUrl: FieldRef<"Student", 'String'>
    readonly isActive: FieldRef<"Student", 'Boolean'>
    readonly lastSyncedAt: FieldRef<"Student", 'DateTime'>
    readonly createdBy: FieldRef<"Student", 'String'>
    readonly createdAt: FieldRef<"Student", 'DateTime'>
    readonly updatedBy: FieldRef<"Student", 'String'>
    readonly updatedAt: FieldRef<"Student", 'DateTime'>
    readonly deletedAt: FieldRef<"Student", 'DateTime'>
    readonly deletedBy: FieldRef<"Student", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Student findUnique
   */
  export type StudentFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Student
     */
    select?: StudentSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StudentInclude<ExtArgs> | null
    /**
     * Filter, which Student to fetch.
     */
    where: StudentWhereUniqueInput
  }

  /**
   * Student findUniqueOrThrow
   */
  export type StudentFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Student
     */
    select?: StudentSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StudentInclude<ExtArgs> | null
    /**
     * Filter, which Student to fetch.
     */
    where: StudentWhereUniqueInput
  }

  /**
   * Student findFirst
   */
  export type StudentFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Student
     */
    select?: StudentSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StudentInclude<ExtArgs> | null
    /**
     * Filter, which Student to fetch.
     */
    where?: StudentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Students to fetch.
     */
    orderBy?: StudentOrderByWithRelationInput | StudentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Students.
     */
    cursor?: StudentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Students from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Students.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Students.
     */
    distinct?: StudentScalarFieldEnum | StudentScalarFieldEnum[]
  }

  /**
   * Student findFirstOrThrow
   */
  export type StudentFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Student
     */
    select?: StudentSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StudentInclude<ExtArgs> | null
    /**
     * Filter, which Student to fetch.
     */
    where?: StudentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Students to fetch.
     */
    orderBy?: StudentOrderByWithRelationInput | StudentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Students.
     */
    cursor?: StudentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Students from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Students.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Students.
     */
    distinct?: StudentScalarFieldEnum | StudentScalarFieldEnum[]
  }

  /**
   * Student findMany
   */
  export type StudentFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Student
     */
    select?: StudentSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StudentInclude<ExtArgs> | null
    /**
     * Filter, which Students to fetch.
     */
    where?: StudentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Students to fetch.
     */
    orderBy?: StudentOrderByWithRelationInput | StudentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Students.
     */
    cursor?: StudentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Students from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Students.
     */
    skip?: number
    distinct?: StudentScalarFieldEnum | StudentScalarFieldEnum[]
  }

  /**
   * Student create
   */
  export type StudentCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Student
     */
    select?: StudentSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StudentInclude<ExtArgs> | null
    /**
     * The data needed to create a Student.
     */
    data: XOR<StudentCreateInput, StudentUncheckedCreateInput>
  }

  /**
   * Student createMany
   */
  export type StudentCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Students.
     */
    data: StudentCreateManyInput | StudentCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Student createManyAndReturn
   */
  export type StudentCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Student
     */
    select?: StudentSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many Students.
     */
    data: StudentCreateManyInput | StudentCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StudentIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Student update
   */
  export type StudentUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Student
     */
    select?: StudentSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StudentInclude<ExtArgs> | null
    /**
     * The data needed to update a Student.
     */
    data: XOR<StudentUpdateInput, StudentUncheckedUpdateInput>
    /**
     * Choose, which Student to update.
     */
    where: StudentWhereUniqueInput
  }

  /**
   * Student updateMany
   */
  export type StudentUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Students.
     */
    data: XOR<StudentUpdateManyMutationInput, StudentUncheckedUpdateManyInput>
    /**
     * Filter which Students to update
     */
    where?: StudentWhereInput
  }

  /**
   * Student upsert
   */
  export type StudentUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Student
     */
    select?: StudentSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StudentInclude<ExtArgs> | null
    /**
     * The filter to search for the Student to update in case it exists.
     */
    where: StudentWhereUniqueInput
    /**
     * In case the Student found by the `where` argument doesn't exist, create a new Student with this data.
     */
    create: XOR<StudentCreateInput, StudentUncheckedCreateInput>
    /**
     * In case the Student was found with the provided `where` argument, update it with this data.
     */
    update: XOR<StudentUpdateInput, StudentUncheckedUpdateInput>
  }

  /**
   * Student delete
   */
  export type StudentDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Student
     */
    select?: StudentSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StudentInclude<ExtArgs> | null
    /**
     * Filter which Student to delete.
     */
    where: StudentWhereUniqueInput
  }

  /**
   * Student deleteMany
   */
  export type StudentDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Students to delete
     */
    where?: StudentWhereInput
  }

  /**
   * Student.pointsHistory
   */
  export type Student$pointsHistoryArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StudentPointsHistory
     */
    select?: StudentPointsHistorySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StudentPointsHistoryInclude<ExtArgs> | null
    where?: StudentPointsHistoryWhereInput
    orderBy?: StudentPointsHistoryOrderByWithRelationInput | StudentPointsHistoryOrderByWithRelationInput[]
    cursor?: StudentPointsHistoryWhereUniqueInput
    take?: number
    skip?: number
    distinct?: StudentPointsHistoryScalarFieldEnum | StudentPointsHistoryScalarFieldEnum[]
  }

  /**
   * Student without action
   */
  export type StudentDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Student
     */
    select?: StudentSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StudentInclude<ExtArgs> | null
  }


  /**
   * Model Class
   */

  export type AggregateClass = {
    _count: ClassCountAggregateOutputType | null
    _avg: ClassAvgAggregateOutputType | null
    _sum: ClassSumAggregateOutputType | null
    _min: ClassMinAggregateOutputType | null
    _max: ClassMaxAggregateOutputType | null
  }

  export type ClassAvgAggregateOutputType = {
    capacity: number | null
    currentTotal: number | null
  }

  export type ClassSumAggregateOutputType = {
    capacity: number | null
    currentTotal: number | null
  }

  export type ClassMinAggregateOutputType = {
    id: string | null
    code: string | null
    name: string | null
    level: string | null
    major: string | null
    waliKelasId: string | null
    waliKelasName: string | null
    capacity: number | null
    currentTotal: number | null
    academicYear: string | null
    roomNumber: string | null
    floor: string | null
    building: string | null
    scheduleUrl: string | null
    isActive: boolean | null
    createdBy: string | null
    createdAt: Date | null
    updatedBy: string | null
    updatedAt: Date | null
    deletedAt: Date | null
  }

  export type ClassMaxAggregateOutputType = {
    id: string | null
    code: string | null
    name: string | null
    level: string | null
    major: string | null
    waliKelasId: string | null
    waliKelasName: string | null
    capacity: number | null
    currentTotal: number | null
    academicYear: string | null
    roomNumber: string | null
    floor: string | null
    building: string | null
    scheduleUrl: string | null
    isActive: boolean | null
    createdBy: string | null
    createdAt: Date | null
    updatedBy: string | null
    updatedAt: Date | null
    deletedAt: Date | null
  }

  export type ClassCountAggregateOutputType = {
    id: number
    code: number
    name: number
    level: number
    major: number
    waliKelasId: number
    waliKelasName: number
    capacity: number
    currentTotal: number
    academicYear: number
    roomNumber: number
    floor: number
    building: number
    scheduleUrl: number
    isActive: number
    createdBy: number
    createdAt: number
    updatedBy: number
    updatedAt: number
    deletedAt: number
    _all: number
  }


  export type ClassAvgAggregateInputType = {
    capacity?: true
    currentTotal?: true
  }

  export type ClassSumAggregateInputType = {
    capacity?: true
    currentTotal?: true
  }

  export type ClassMinAggregateInputType = {
    id?: true
    code?: true
    name?: true
    level?: true
    major?: true
    waliKelasId?: true
    waliKelasName?: true
    capacity?: true
    currentTotal?: true
    academicYear?: true
    roomNumber?: true
    floor?: true
    building?: true
    scheduleUrl?: true
    isActive?: true
    createdBy?: true
    createdAt?: true
    updatedBy?: true
    updatedAt?: true
    deletedAt?: true
  }

  export type ClassMaxAggregateInputType = {
    id?: true
    code?: true
    name?: true
    level?: true
    major?: true
    waliKelasId?: true
    waliKelasName?: true
    capacity?: true
    currentTotal?: true
    academicYear?: true
    roomNumber?: true
    floor?: true
    building?: true
    scheduleUrl?: true
    isActive?: true
    createdBy?: true
    createdAt?: true
    updatedBy?: true
    updatedAt?: true
    deletedAt?: true
  }

  export type ClassCountAggregateInputType = {
    id?: true
    code?: true
    name?: true
    level?: true
    major?: true
    waliKelasId?: true
    waliKelasName?: true
    capacity?: true
    currentTotal?: true
    academicYear?: true
    roomNumber?: true
    floor?: true
    building?: true
    scheduleUrl?: true
    isActive?: true
    createdBy?: true
    createdAt?: true
    updatedBy?: true
    updatedAt?: true
    deletedAt?: true
    _all?: true
  }

  export type ClassAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Class to aggregate.
     */
    where?: ClassWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Classes to fetch.
     */
    orderBy?: ClassOrderByWithRelationInput | ClassOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ClassWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Classes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Classes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Classes
    **/
    _count?: true | ClassCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ClassAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ClassSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ClassMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ClassMaxAggregateInputType
  }

  export type GetClassAggregateType<T extends ClassAggregateArgs> = {
        [P in keyof T & keyof AggregateClass]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateClass[P]>
      : GetScalarType<T[P], AggregateClass[P]>
  }




  export type ClassGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ClassWhereInput
    orderBy?: ClassOrderByWithAggregationInput | ClassOrderByWithAggregationInput[]
    by: ClassScalarFieldEnum[] | ClassScalarFieldEnum
    having?: ClassScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ClassCountAggregateInputType | true
    _avg?: ClassAvgAggregateInputType
    _sum?: ClassSumAggregateInputType
    _min?: ClassMinAggregateInputType
    _max?: ClassMaxAggregateInputType
  }

  export type ClassGroupByOutputType = {
    id: string
    code: string
    name: string
    level: string
    major: string | null
    waliKelasId: string | null
    waliKelasName: string | null
    capacity: number
    currentTotal: number
    academicYear: string
    roomNumber: string | null
    floor: string | null
    building: string | null
    scheduleUrl: string | null
    isActive: boolean
    createdBy: string
    createdAt: Date
    updatedBy: string | null
    updatedAt: Date
    deletedAt: Date | null
    _count: ClassCountAggregateOutputType | null
    _avg: ClassAvgAggregateOutputType | null
    _sum: ClassSumAggregateOutputType | null
    _min: ClassMinAggregateOutputType | null
    _max: ClassMaxAggregateOutputType | null
  }

  type GetClassGroupByPayload<T extends ClassGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ClassGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ClassGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ClassGroupByOutputType[P]>
            : GetScalarType<T[P], ClassGroupByOutputType[P]>
        }
      >
    >


  export type ClassSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    code?: boolean
    name?: boolean
    level?: boolean
    major?: boolean
    waliKelasId?: boolean
    waliKelasName?: boolean
    capacity?: boolean
    currentTotal?: boolean
    academicYear?: boolean
    roomNumber?: boolean
    floor?: boolean
    building?: boolean
    scheduleUrl?: boolean
    isActive?: boolean
    createdBy?: boolean
    createdAt?: boolean
    updatedBy?: boolean
    updatedAt?: boolean
    deletedAt?: boolean
    students?: boolean | Class$studentsArgs<ExtArgs>
    _count?: boolean | ClassCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["class"]>

  export type ClassSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    code?: boolean
    name?: boolean
    level?: boolean
    major?: boolean
    waliKelasId?: boolean
    waliKelasName?: boolean
    capacity?: boolean
    currentTotal?: boolean
    academicYear?: boolean
    roomNumber?: boolean
    floor?: boolean
    building?: boolean
    scheduleUrl?: boolean
    isActive?: boolean
    createdBy?: boolean
    createdAt?: boolean
    updatedBy?: boolean
    updatedAt?: boolean
    deletedAt?: boolean
  }, ExtArgs["result"]["class"]>

  export type ClassSelectScalar = {
    id?: boolean
    code?: boolean
    name?: boolean
    level?: boolean
    major?: boolean
    waliKelasId?: boolean
    waliKelasName?: boolean
    capacity?: boolean
    currentTotal?: boolean
    academicYear?: boolean
    roomNumber?: boolean
    floor?: boolean
    building?: boolean
    scheduleUrl?: boolean
    isActive?: boolean
    createdBy?: boolean
    createdAt?: boolean
    updatedBy?: boolean
    updatedAt?: boolean
    deletedAt?: boolean
  }

  export type ClassInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    students?: boolean | Class$studentsArgs<ExtArgs>
    _count?: boolean | ClassCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type ClassIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $ClassPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Class"
    objects: {
      students: Prisma.$StudentPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      code: string
      name: string
      level: string
      major: string | null
      waliKelasId: string | null
      waliKelasName: string | null
      capacity: number
      currentTotal: number
      academicYear: string
      roomNumber: string | null
      floor: string | null
      building: string | null
      scheduleUrl: string | null
      isActive: boolean
      createdBy: string
      createdAt: Date
      updatedBy: string | null
      updatedAt: Date
      deletedAt: Date | null
    }, ExtArgs["result"]["class"]>
    composites: {}
  }

  type ClassGetPayload<S extends boolean | null | undefined | ClassDefaultArgs> = $Result.GetResult<Prisma.$ClassPayload, S>

  type ClassCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<ClassFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: ClassCountAggregateInputType | true
    }

  export interface ClassDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Class'], meta: { name: 'Class' } }
    /**
     * Find zero or one Class that matches the filter.
     * @param {ClassFindUniqueArgs} args - Arguments to find a Class
     * @example
     * // Get one Class
     * const class = await prisma.class.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ClassFindUniqueArgs>(args: SelectSubset<T, ClassFindUniqueArgs<ExtArgs>>): Prisma__ClassClient<$Result.GetResult<Prisma.$ClassPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one Class that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {ClassFindUniqueOrThrowArgs} args - Arguments to find a Class
     * @example
     * // Get one Class
     * const class = await prisma.class.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ClassFindUniqueOrThrowArgs>(args: SelectSubset<T, ClassFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ClassClient<$Result.GetResult<Prisma.$ClassPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first Class that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ClassFindFirstArgs} args - Arguments to find a Class
     * @example
     * // Get one Class
     * const class = await prisma.class.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ClassFindFirstArgs>(args?: SelectSubset<T, ClassFindFirstArgs<ExtArgs>>): Prisma__ClassClient<$Result.GetResult<Prisma.$ClassPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first Class that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ClassFindFirstOrThrowArgs} args - Arguments to find a Class
     * @example
     * // Get one Class
     * const class = await prisma.class.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ClassFindFirstOrThrowArgs>(args?: SelectSubset<T, ClassFindFirstOrThrowArgs<ExtArgs>>): Prisma__ClassClient<$Result.GetResult<Prisma.$ClassPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more Classes that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ClassFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Classes
     * const classes = await prisma.class.findMany()
     * 
     * // Get first 10 Classes
     * const classes = await prisma.class.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const classWithIdOnly = await prisma.class.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ClassFindManyArgs>(args?: SelectSubset<T, ClassFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ClassPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a Class.
     * @param {ClassCreateArgs} args - Arguments to create a Class.
     * @example
     * // Create one Class
     * const Class = await prisma.class.create({
     *   data: {
     *     // ... data to create a Class
     *   }
     * })
     * 
     */
    create<T extends ClassCreateArgs>(args: SelectSubset<T, ClassCreateArgs<ExtArgs>>): Prisma__ClassClient<$Result.GetResult<Prisma.$ClassPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many Classes.
     * @param {ClassCreateManyArgs} args - Arguments to create many Classes.
     * @example
     * // Create many Classes
     * const class = await prisma.class.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ClassCreateManyArgs>(args?: SelectSubset<T, ClassCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Classes and returns the data saved in the database.
     * @param {ClassCreateManyAndReturnArgs} args - Arguments to create many Classes.
     * @example
     * // Create many Classes
     * const class = await prisma.class.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Classes and only return the `id`
     * const classWithIdOnly = await prisma.class.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ClassCreateManyAndReturnArgs>(args?: SelectSubset<T, ClassCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ClassPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a Class.
     * @param {ClassDeleteArgs} args - Arguments to delete one Class.
     * @example
     * // Delete one Class
     * const Class = await prisma.class.delete({
     *   where: {
     *     // ... filter to delete one Class
     *   }
     * })
     * 
     */
    delete<T extends ClassDeleteArgs>(args: SelectSubset<T, ClassDeleteArgs<ExtArgs>>): Prisma__ClassClient<$Result.GetResult<Prisma.$ClassPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one Class.
     * @param {ClassUpdateArgs} args - Arguments to update one Class.
     * @example
     * // Update one Class
     * const class = await prisma.class.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ClassUpdateArgs>(args: SelectSubset<T, ClassUpdateArgs<ExtArgs>>): Prisma__ClassClient<$Result.GetResult<Prisma.$ClassPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more Classes.
     * @param {ClassDeleteManyArgs} args - Arguments to filter Classes to delete.
     * @example
     * // Delete a few Classes
     * const { count } = await prisma.class.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ClassDeleteManyArgs>(args?: SelectSubset<T, ClassDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Classes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ClassUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Classes
     * const class = await prisma.class.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ClassUpdateManyArgs>(args: SelectSubset<T, ClassUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Class.
     * @param {ClassUpsertArgs} args - Arguments to update or create a Class.
     * @example
     * // Update or create a Class
     * const class = await prisma.class.upsert({
     *   create: {
     *     // ... data to create a Class
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Class we want to update
     *   }
     * })
     */
    upsert<T extends ClassUpsertArgs>(args: SelectSubset<T, ClassUpsertArgs<ExtArgs>>): Prisma__ClassClient<$Result.GetResult<Prisma.$ClassPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of Classes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ClassCountArgs} args - Arguments to filter Classes to count.
     * @example
     * // Count the number of Classes
     * const count = await prisma.class.count({
     *   where: {
     *     // ... the filter for the Classes we want to count
     *   }
     * })
    **/
    count<T extends ClassCountArgs>(
      args?: Subset<T, ClassCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ClassCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Class.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ClassAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ClassAggregateArgs>(args: Subset<T, ClassAggregateArgs>): Prisma.PrismaPromise<GetClassAggregateType<T>>

    /**
     * Group by Class.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ClassGroupByArgs} args - Group by arguments.
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
      T extends ClassGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ClassGroupByArgs['orderBy'] }
        : { orderBy?: ClassGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, ClassGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetClassGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Class model
   */
  readonly fields: ClassFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Class.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ClassClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    students<T extends Class$studentsArgs<ExtArgs> = {}>(args?: Subset<T, Class$studentsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$StudentPayload<ExtArgs>, T, "findMany"> | Null>
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
   * Fields of the Class model
   */ 
  interface ClassFieldRefs {
    readonly id: FieldRef<"Class", 'String'>
    readonly code: FieldRef<"Class", 'String'>
    readonly name: FieldRef<"Class", 'String'>
    readonly level: FieldRef<"Class", 'String'>
    readonly major: FieldRef<"Class", 'String'>
    readonly waliKelasId: FieldRef<"Class", 'String'>
    readonly waliKelasName: FieldRef<"Class", 'String'>
    readonly capacity: FieldRef<"Class", 'Int'>
    readonly currentTotal: FieldRef<"Class", 'Int'>
    readonly academicYear: FieldRef<"Class", 'String'>
    readonly roomNumber: FieldRef<"Class", 'String'>
    readonly floor: FieldRef<"Class", 'String'>
    readonly building: FieldRef<"Class", 'String'>
    readonly scheduleUrl: FieldRef<"Class", 'String'>
    readonly isActive: FieldRef<"Class", 'Boolean'>
    readonly createdBy: FieldRef<"Class", 'String'>
    readonly createdAt: FieldRef<"Class", 'DateTime'>
    readonly updatedBy: FieldRef<"Class", 'String'>
    readonly updatedAt: FieldRef<"Class", 'DateTime'>
    readonly deletedAt: FieldRef<"Class", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Class findUnique
   */
  export type ClassFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Class
     */
    select?: ClassSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClassInclude<ExtArgs> | null
    /**
     * Filter, which Class to fetch.
     */
    where: ClassWhereUniqueInput
  }

  /**
   * Class findUniqueOrThrow
   */
  export type ClassFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Class
     */
    select?: ClassSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClassInclude<ExtArgs> | null
    /**
     * Filter, which Class to fetch.
     */
    where: ClassWhereUniqueInput
  }

  /**
   * Class findFirst
   */
  export type ClassFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Class
     */
    select?: ClassSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClassInclude<ExtArgs> | null
    /**
     * Filter, which Class to fetch.
     */
    where?: ClassWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Classes to fetch.
     */
    orderBy?: ClassOrderByWithRelationInput | ClassOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Classes.
     */
    cursor?: ClassWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Classes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Classes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Classes.
     */
    distinct?: ClassScalarFieldEnum | ClassScalarFieldEnum[]
  }

  /**
   * Class findFirstOrThrow
   */
  export type ClassFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Class
     */
    select?: ClassSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClassInclude<ExtArgs> | null
    /**
     * Filter, which Class to fetch.
     */
    where?: ClassWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Classes to fetch.
     */
    orderBy?: ClassOrderByWithRelationInput | ClassOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Classes.
     */
    cursor?: ClassWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Classes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Classes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Classes.
     */
    distinct?: ClassScalarFieldEnum | ClassScalarFieldEnum[]
  }

  /**
   * Class findMany
   */
  export type ClassFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Class
     */
    select?: ClassSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClassInclude<ExtArgs> | null
    /**
     * Filter, which Classes to fetch.
     */
    where?: ClassWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Classes to fetch.
     */
    orderBy?: ClassOrderByWithRelationInput | ClassOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Classes.
     */
    cursor?: ClassWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Classes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Classes.
     */
    skip?: number
    distinct?: ClassScalarFieldEnum | ClassScalarFieldEnum[]
  }

  /**
   * Class create
   */
  export type ClassCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Class
     */
    select?: ClassSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClassInclude<ExtArgs> | null
    /**
     * The data needed to create a Class.
     */
    data: XOR<ClassCreateInput, ClassUncheckedCreateInput>
  }

  /**
   * Class createMany
   */
  export type ClassCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Classes.
     */
    data: ClassCreateManyInput | ClassCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Class createManyAndReturn
   */
  export type ClassCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Class
     */
    select?: ClassSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many Classes.
     */
    data: ClassCreateManyInput | ClassCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Class update
   */
  export type ClassUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Class
     */
    select?: ClassSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClassInclude<ExtArgs> | null
    /**
     * The data needed to update a Class.
     */
    data: XOR<ClassUpdateInput, ClassUncheckedUpdateInput>
    /**
     * Choose, which Class to update.
     */
    where: ClassWhereUniqueInput
  }

  /**
   * Class updateMany
   */
  export type ClassUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Classes.
     */
    data: XOR<ClassUpdateManyMutationInput, ClassUncheckedUpdateManyInput>
    /**
     * Filter which Classes to update
     */
    where?: ClassWhereInput
  }

  /**
   * Class upsert
   */
  export type ClassUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Class
     */
    select?: ClassSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClassInclude<ExtArgs> | null
    /**
     * The filter to search for the Class to update in case it exists.
     */
    where: ClassWhereUniqueInput
    /**
     * In case the Class found by the `where` argument doesn't exist, create a new Class with this data.
     */
    create: XOR<ClassCreateInput, ClassUncheckedCreateInput>
    /**
     * In case the Class was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ClassUpdateInput, ClassUncheckedUpdateInput>
  }

  /**
   * Class delete
   */
  export type ClassDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Class
     */
    select?: ClassSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClassInclude<ExtArgs> | null
    /**
     * Filter which Class to delete.
     */
    where: ClassWhereUniqueInput
  }

  /**
   * Class deleteMany
   */
  export type ClassDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Classes to delete
     */
    where?: ClassWhereInput
  }

  /**
   * Class.students
   */
  export type Class$studentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Student
     */
    select?: StudentSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StudentInclude<ExtArgs> | null
    where?: StudentWhereInput
    orderBy?: StudentOrderByWithRelationInput | StudentOrderByWithRelationInput[]
    cursor?: StudentWhereUniqueInput
    take?: number
    skip?: number
    distinct?: StudentScalarFieldEnum | StudentScalarFieldEnum[]
  }

  /**
   * Class without action
   */
  export type ClassDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Class
     */
    select?: ClassSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClassInclude<ExtArgs> | null
  }


  /**
   * Model StudentPointsHistory
   */

  export type AggregateStudentPointsHistory = {
    _count: StudentPointsHistoryCountAggregateOutputType | null
    _avg: StudentPointsHistoryAvgAggregateOutputType | null
    _sum: StudentPointsHistorySumAggregateOutputType | null
    _min: StudentPointsHistoryMinAggregateOutputType | null
    _max: StudentPointsHistoryMaxAggregateOutputType | null
  }

  export type StudentPointsHistoryAvgAggregateOutputType = {
    previousTotal: number | null
    pointsChange: number | null
    newTotal: number | null
    semester: number | null
  }

  export type StudentPointsHistorySumAggregateOutputType = {
    previousTotal: number | null
    pointsChange: number | null
    newTotal: number | null
    semester: number | null
  }

  export type StudentPointsHistoryMinAggregateOutputType = {
    id: string | null
    studentId: string | null
    studentName: string | null
    previousTotal: number | null
    pointsChange: number | null
    newTotal: number | null
    sourceType: $Enums.PointSourceType | null
    sourceId: string | null
    sourceDescription: string | null
    academicYear: string | null
    semester: number | null
    recordedBy: string | null
    recordedAt: Date | null
  }

  export type StudentPointsHistoryMaxAggregateOutputType = {
    id: string | null
    studentId: string | null
    studentName: string | null
    previousTotal: number | null
    pointsChange: number | null
    newTotal: number | null
    sourceType: $Enums.PointSourceType | null
    sourceId: string | null
    sourceDescription: string | null
    academicYear: string | null
    semester: number | null
    recordedBy: string | null
    recordedAt: Date | null
  }

  export type StudentPointsHistoryCountAggregateOutputType = {
    id: number
    studentId: number
    studentName: number
    previousTotal: number
    pointsChange: number
    newTotal: number
    sourceType: number
    sourceId: number
    sourceDescription: number
    academicYear: number
    semester: number
    recordedBy: number
    recordedAt: number
    _all: number
  }


  export type StudentPointsHistoryAvgAggregateInputType = {
    previousTotal?: true
    pointsChange?: true
    newTotal?: true
    semester?: true
  }

  export type StudentPointsHistorySumAggregateInputType = {
    previousTotal?: true
    pointsChange?: true
    newTotal?: true
    semester?: true
  }

  export type StudentPointsHistoryMinAggregateInputType = {
    id?: true
    studentId?: true
    studentName?: true
    previousTotal?: true
    pointsChange?: true
    newTotal?: true
    sourceType?: true
    sourceId?: true
    sourceDescription?: true
    academicYear?: true
    semester?: true
    recordedBy?: true
    recordedAt?: true
  }

  export type StudentPointsHistoryMaxAggregateInputType = {
    id?: true
    studentId?: true
    studentName?: true
    previousTotal?: true
    pointsChange?: true
    newTotal?: true
    sourceType?: true
    sourceId?: true
    sourceDescription?: true
    academicYear?: true
    semester?: true
    recordedBy?: true
    recordedAt?: true
  }

  export type StudentPointsHistoryCountAggregateInputType = {
    id?: true
    studentId?: true
    studentName?: true
    previousTotal?: true
    pointsChange?: true
    newTotal?: true
    sourceType?: true
    sourceId?: true
    sourceDescription?: true
    academicYear?: true
    semester?: true
    recordedBy?: true
    recordedAt?: true
    _all?: true
  }

  export type StudentPointsHistoryAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which StudentPointsHistory to aggregate.
     */
    where?: StudentPointsHistoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of StudentPointsHistories to fetch.
     */
    orderBy?: StudentPointsHistoryOrderByWithRelationInput | StudentPointsHistoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: StudentPointsHistoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` StudentPointsHistories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` StudentPointsHistories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned StudentPointsHistories
    **/
    _count?: true | StudentPointsHistoryCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: StudentPointsHistoryAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: StudentPointsHistorySumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: StudentPointsHistoryMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: StudentPointsHistoryMaxAggregateInputType
  }

  export type GetStudentPointsHistoryAggregateType<T extends StudentPointsHistoryAggregateArgs> = {
        [P in keyof T & keyof AggregateStudentPointsHistory]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateStudentPointsHistory[P]>
      : GetScalarType<T[P], AggregateStudentPointsHistory[P]>
  }




  export type StudentPointsHistoryGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: StudentPointsHistoryWhereInput
    orderBy?: StudentPointsHistoryOrderByWithAggregationInput | StudentPointsHistoryOrderByWithAggregationInput[]
    by: StudentPointsHistoryScalarFieldEnum[] | StudentPointsHistoryScalarFieldEnum
    having?: StudentPointsHistoryScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: StudentPointsHistoryCountAggregateInputType | true
    _avg?: StudentPointsHistoryAvgAggregateInputType
    _sum?: StudentPointsHistorySumAggregateInputType
    _min?: StudentPointsHistoryMinAggregateInputType
    _max?: StudentPointsHistoryMaxAggregateInputType
  }

  export type StudentPointsHistoryGroupByOutputType = {
    id: string
    studentId: string
    studentName: string
    previousTotal: number
    pointsChange: number
    newTotal: number
    sourceType: $Enums.PointSourceType
    sourceId: string
    sourceDescription: string
    academicYear: string
    semester: number
    recordedBy: string
    recordedAt: Date
    _count: StudentPointsHistoryCountAggregateOutputType | null
    _avg: StudentPointsHistoryAvgAggregateOutputType | null
    _sum: StudentPointsHistorySumAggregateOutputType | null
    _min: StudentPointsHistoryMinAggregateOutputType | null
    _max: StudentPointsHistoryMaxAggregateOutputType | null
  }

  type GetStudentPointsHistoryGroupByPayload<T extends StudentPointsHistoryGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<StudentPointsHistoryGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof StudentPointsHistoryGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], StudentPointsHistoryGroupByOutputType[P]>
            : GetScalarType<T[P], StudentPointsHistoryGroupByOutputType[P]>
        }
      >
    >


  export type StudentPointsHistorySelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    studentId?: boolean
    studentName?: boolean
    previousTotal?: boolean
    pointsChange?: boolean
    newTotal?: boolean
    sourceType?: boolean
    sourceId?: boolean
    sourceDescription?: boolean
    academicYear?: boolean
    semester?: boolean
    recordedBy?: boolean
    recordedAt?: boolean
    student?: boolean | StudentDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["studentPointsHistory"]>

  export type StudentPointsHistorySelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    studentId?: boolean
    studentName?: boolean
    previousTotal?: boolean
    pointsChange?: boolean
    newTotal?: boolean
    sourceType?: boolean
    sourceId?: boolean
    sourceDescription?: boolean
    academicYear?: boolean
    semester?: boolean
    recordedBy?: boolean
    recordedAt?: boolean
    student?: boolean | StudentDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["studentPointsHistory"]>

  export type StudentPointsHistorySelectScalar = {
    id?: boolean
    studentId?: boolean
    studentName?: boolean
    previousTotal?: boolean
    pointsChange?: boolean
    newTotal?: boolean
    sourceType?: boolean
    sourceId?: boolean
    sourceDescription?: boolean
    academicYear?: boolean
    semester?: boolean
    recordedBy?: boolean
    recordedAt?: boolean
  }

  export type StudentPointsHistoryInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    student?: boolean | StudentDefaultArgs<ExtArgs>
  }
  export type StudentPointsHistoryIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    student?: boolean | StudentDefaultArgs<ExtArgs>
  }

  export type $StudentPointsHistoryPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "StudentPointsHistory"
    objects: {
      student: Prisma.$StudentPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      studentId: string
      studentName: string
      previousTotal: number
      pointsChange: number
      newTotal: number
      sourceType: $Enums.PointSourceType
      sourceId: string
      sourceDescription: string
      academicYear: string
      semester: number
      recordedBy: string
      recordedAt: Date
    }, ExtArgs["result"]["studentPointsHistory"]>
    composites: {}
  }

  type StudentPointsHistoryGetPayload<S extends boolean | null | undefined | StudentPointsHistoryDefaultArgs> = $Result.GetResult<Prisma.$StudentPointsHistoryPayload, S>

  type StudentPointsHistoryCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<StudentPointsHistoryFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: StudentPointsHistoryCountAggregateInputType | true
    }

  export interface StudentPointsHistoryDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['StudentPointsHistory'], meta: { name: 'StudentPointsHistory' } }
    /**
     * Find zero or one StudentPointsHistory that matches the filter.
     * @param {StudentPointsHistoryFindUniqueArgs} args - Arguments to find a StudentPointsHistory
     * @example
     * // Get one StudentPointsHistory
     * const studentPointsHistory = await prisma.studentPointsHistory.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends StudentPointsHistoryFindUniqueArgs>(args: SelectSubset<T, StudentPointsHistoryFindUniqueArgs<ExtArgs>>): Prisma__StudentPointsHistoryClient<$Result.GetResult<Prisma.$StudentPointsHistoryPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one StudentPointsHistory that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {StudentPointsHistoryFindUniqueOrThrowArgs} args - Arguments to find a StudentPointsHistory
     * @example
     * // Get one StudentPointsHistory
     * const studentPointsHistory = await prisma.studentPointsHistory.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends StudentPointsHistoryFindUniqueOrThrowArgs>(args: SelectSubset<T, StudentPointsHistoryFindUniqueOrThrowArgs<ExtArgs>>): Prisma__StudentPointsHistoryClient<$Result.GetResult<Prisma.$StudentPointsHistoryPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first StudentPointsHistory that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StudentPointsHistoryFindFirstArgs} args - Arguments to find a StudentPointsHistory
     * @example
     * // Get one StudentPointsHistory
     * const studentPointsHistory = await prisma.studentPointsHistory.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends StudentPointsHistoryFindFirstArgs>(args?: SelectSubset<T, StudentPointsHistoryFindFirstArgs<ExtArgs>>): Prisma__StudentPointsHistoryClient<$Result.GetResult<Prisma.$StudentPointsHistoryPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first StudentPointsHistory that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StudentPointsHistoryFindFirstOrThrowArgs} args - Arguments to find a StudentPointsHistory
     * @example
     * // Get one StudentPointsHistory
     * const studentPointsHistory = await prisma.studentPointsHistory.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends StudentPointsHistoryFindFirstOrThrowArgs>(args?: SelectSubset<T, StudentPointsHistoryFindFirstOrThrowArgs<ExtArgs>>): Prisma__StudentPointsHistoryClient<$Result.GetResult<Prisma.$StudentPointsHistoryPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more StudentPointsHistories that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StudentPointsHistoryFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all StudentPointsHistories
     * const studentPointsHistories = await prisma.studentPointsHistory.findMany()
     * 
     * // Get first 10 StudentPointsHistories
     * const studentPointsHistories = await prisma.studentPointsHistory.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const studentPointsHistoryWithIdOnly = await prisma.studentPointsHistory.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends StudentPointsHistoryFindManyArgs>(args?: SelectSubset<T, StudentPointsHistoryFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$StudentPointsHistoryPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a StudentPointsHistory.
     * @param {StudentPointsHistoryCreateArgs} args - Arguments to create a StudentPointsHistory.
     * @example
     * // Create one StudentPointsHistory
     * const StudentPointsHistory = await prisma.studentPointsHistory.create({
     *   data: {
     *     // ... data to create a StudentPointsHistory
     *   }
     * })
     * 
     */
    create<T extends StudentPointsHistoryCreateArgs>(args: SelectSubset<T, StudentPointsHistoryCreateArgs<ExtArgs>>): Prisma__StudentPointsHistoryClient<$Result.GetResult<Prisma.$StudentPointsHistoryPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many StudentPointsHistories.
     * @param {StudentPointsHistoryCreateManyArgs} args - Arguments to create many StudentPointsHistories.
     * @example
     * // Create many StudentPointsHistories
     * const studentPointsHistory = await prisma.studentPointsHistory.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends StudentPointsHistoryCreateManyArgs>(args?: SelectSubset<T, StudentPointsHistoryCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many StudentPointsHistories and returns the data saved in the database.
     * @param {StudentPointsHistoryCreateManyAndReturnArgs} args - Arguments to create many StudentPointsHistories.
     * @example
     * // Create many StudentPointsHistories
     * const studentPointsHistory = await prisma.studentPointsHistory.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many StudentPointsHistories and only return the `id`
     * const studentPointsHistoryWithIdOnly = await prisma.studentPointsHistory.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends StudentPointsHistoryCreateManyAndReturnArgs>(args?: SelectSubset<T, StudentPointsHistoryCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$StudentPointsHistoryPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a StudentPointsHistory.
     * @param {StudentPointsHistoryDeleteArgs} args - Arguments to delete one StudentPointsHistory.
     * @example
     * // Delete one StudentPointsHistory
     * const StudentPointsHistory = await prisma.studentPointsHistory.delete({
     *   where: {
     *     // ... filter to delete one StudentPointsHistory
     *   }
     * })
     * 
     */
    delete<T extends StudentPointsHistoryDeleteArgs>(args: SelectSubset<T, StudentPointsHistoryDeleteArgs<ExtArgs>>): Prisma__StudentPointsHistoryClient<$Result.GetResult<Prisma.$StudentPointsHistoryPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one StudentPointsHistory.
     * @param {StudentPointsHistoryUpdateArgs} args - Arguments to update one StudentPointsHistory.
     * @example
     * // Update one StudentPointsHistory
     * const studentPointsHistory = await prisma.studentPointsHistory.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends StudentPointsHistoryUpdateArgs>(args: SelectSubset<T, StudentPointsHistoryUpdateArgs<ExtArgs>>): Prisma__StudentPointsHistoryClient<$Result.GetResult<Prisma.$StudentPointsHistoryPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more StudentPointsHistories.
     * @param {StudentPointsHistoryDeleteManyArgs} args - Arguments to filter StudentPointsHistories to delete.
     * @example
     * // Delete a few StudentPointsHistories
     * const { count } = await prisma.studentPointsHistory.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends StudentPointsHistoryDeleteManyArgs>(args?: SelectSubset<T, StudentPointsHistoryDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more StudentPointsHistories.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StudentPointsHistoryUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many StudentPointsHistories
     * const studentPointsHistory = await prisma.studentPointsHistory.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends StudentPointsHistoryUpdateManyArgs>(args: SelectSubset<T, StudentPointsHistoryUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one StudentPointsHistory.
     * @param {StudentPointsHistoryUpsertArgs} args - Arguments to update or create a StudentPointsHistory.
     * @example
     * // Update or create a StudentPointsHistory
     * const studentPointsHistory = await prisma.studentPointsHistory.upsert({
     *   create: {
     *     // ... data to create a StudentPointsHistory
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the StudentPointsHistory we want to update
     *   }
     * })
     */
    upsert<T extends StudentPointsHistoryUpsertArgs>(args: SelectSubset<T, StudentPointsHistoryUpsertArgs<ExtArgs>>): Prisma__StudentPointsHistoryClient<$Result.GetResult<Prisma.$StudentPointsHistoryPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of StudentPointsHistories.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StudentPointsHistoryCountArgs} args - Arguments to filter StudentPointsHistories to count.
     * @example
     * // Count the number of StudentPointsHistories
     * const count = await prisma.studentPointsHistory.count({
     *   where: {
     *     // ... the filter for the StudentPointsHistories we want to count
     *   }
     * })
    **/
    count<T extends StudentPointsHistoryCountArgs>(
      args?: Subset<T, StudentPointsHistoryCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], StudentPointsHistoryCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a StudentPointsHistory.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StudentPointsHistoryAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends StudentPointsHistoryAggregateArgs>(args: Subset<T, StudentPointsHistoryAggregateArgs>): Prisma.PrismaPromise<GetStudentPointsHistoryAggregateType<T>>

    /**
     * Group by StudentPointsHistory.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StudentPointsHistoryGroupByArgs} args - Group by arguments.
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
      T extends StudentPointsHistoryGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: StudentPointsHistoryGroupByArgs['orderBy'] }
        : { orderBy?: StudentPointsHistoryGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, StudentPointsHistoryGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetStudentPointsHistoryGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the StudentPointsHistory model
   */
  readonly fields: StudentPointsHistoryFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for StudentPointsHistory.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__StudentPointsHistoryClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    student<T extends StudentDefaultArgs<ExtArgs> = {}>(args?: Subset<T, StudentDefaultArgs<ExtArgs>>): Prisma__StudentClient<$Result.GetResult<Prisma.$StudentPayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
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
   * Fields of the StudentPointsHistory model
   */ 
  interface StudentPointsHistoryFieldRefs {
    readonly id: FieldRef<"StudentPointsHistory", 'String'>
    readonly studentId: FieldRef<"StudentPointsHistory", 'String'>
    readonly studentName: FieldRef<"StudentPointsHistory", 'String'>
    readonly previousTotal: FieldRef<"StudentPointsHistory", 'Int'>
    readonly pointsChange: FieldRef<"StudentPointsHistory", 'Int'>
    readonly newTotal: FieldRef<"StudentPointsHistory", 'Int'>
    readonly sourceType: FieldRef<"StudentPointsHistory", 'PointSourceType'>
    readonly sourceId: FieldRef<"StudentPointsHistory", 'String'>
    readonly sourceDescription: FieldRef<"StudentPointsHistory", 'String'>
    readonly academicYear: FieldRef<"StudentPointsHistory", 'String'>
    readonly semester: FieldRef<"StudentPointsHistory", 'Int'>
    readonly recordedBy: FieldRef<"StudentPointsHistory", 'String'>
    readonly recordedAt: FieldRef<"StudentPointsHistory", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * StudentPointsHistory findUnique
   */
  export type StudentPointsHistoryFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StudentPointsHistory
     */
    select?: StudentPointsHistorySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StudentPointsHistoryInclude<ExtArgs> | null
    /**
     * Filter, which StudentPointsHistory to fetch.
     */
    where: StudentPointsHistoryWhereUniqueInput
  }

  /**
   * StudentPointsHistory findUniqueOrThrow
   */
  export type StudentPointsHistoryFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StudentPointsHistory
     */
    select?: StudentPointsHistorySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StudentPointsHistoryInclude<ExtArgs> | null
    /**
     * Filter, which StudentPointsHistory to fetch.
     */
    where: StudentPointsHistoryWhereUniqueInput
  }

  /**
   * StudentPointsHistory findFirst
   */
  export type StudentPointsHistoryFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StudentPointsHistory
     */
    select?: StudentPointsHistorySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StudentPointsHistoryInclude<ExtArgs> | null
    /**
     * Filter, which StudentPointsHistory to fetch.
     */
    where?: StudentPointsHistoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of StudentPointsHistories to fetch.
     */
    orderBy?: StudentPointsHistoryOrderByWithRelationInput | StudentPointsHistoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for StudentPointsHistories.
     */
    cursor?: StudentPointsHistoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` StudentPointsHistories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` StudentPointsHistories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of StudentPointsHistories.
     */
    distinct?: StudentPointsHistoryScalarFieldEnum | StudentPointsHistoryScalarFieldEnum[]
  }

  /**
   * StudentPointsHistory findFirstOrThrow
   */
  export type StudentPointsHistoryFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StudentPointsHistory
     */
    select?: StudentPointsHistorySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StudentPointsHistoryInclude<ExtArgs> | null
    /**
     * Filter, which StudentPointsHistory to fetch.
     */
    where?: StudentPointsHistoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of StudentPointsHistories to fetch.
     */
    orderBy?: StudentPointsHistoryOrderByWithRelationInput | StudentPointsHistoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for StudentPointsHistories.
     */
    cursor?: StudentPointsHistoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` StudentPointsHistories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` StudentPointsHistories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of StudentPointsHistories.
     */
    distinct?: StudentPointsHistoryScalarFieldEnum | StudentPointsHistoryScalarFieldEnum[]
  }

  /**
   * StudentPointsHistory findMany
   */
  export type StudentPointsHistoryFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StudentPointsHistory
     */
    select?: StudentPointsHistorySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StudentPointsHistoryInclude<ExtArgs> | null
    /**
     * Filter, which StudentPointsHistories to fetch.
     */
    where?: StudentPointsHistoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of StudentPointsHistories to fetch.
     */
    orderBy?: StudentPointsHistoryOrderByWithRelationInput | StudentPointsHistoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing StudentPointsHistories.
     */
    cursor?: StudentPointsHistoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` StudentPointsHistories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` StudentPointsHistories.
     */
    skip?: number
    distinct?: StudentPointsHistoryScalarFieldEnum | StudentPointsHistoryScalarFieldEnum[]
  }

  /**
   * StudentPointsHistory create
   */
  export type StudentPointsHistoryCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StudentPointsHistory
     */
    select?: StudentPointsHistorySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StudentPointsHistoryInclude<ExtArgs> | null
    /**
     * The data needed to create a StudentPointsHistory.
     */
    data: XOR<StudentPointsHistoryCreateInput, StudentPointsHistoryUncheckedCreateInput>
  }

  /**
   * StudentPointsHistory createMany
   */
  export type StudentPointsHistoryCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many StudentPointsHistories.
     */
    data: StudentPointsHistoryCreateManyInput | StudentPointsHistoryCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * StudentPointsHistory createManyAndReturn
   */
  export type StudentPointsHistoryCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StudentPointsHistory
     */
    select?: StudentPointsHistorySelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many StudentPointsHistories.
     */
    data: StudentPointsHistoryCreateManyInput | StudentPointsHistoryCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StudentPointsHistoryIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * StudentPointsHistory update
   */
  export type StudentPointsHistoryUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StudentPointsHistory
     */
    select?: StudentPointsHistorySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StudentPointsHistoryInclude<ExtArgs> | null
    /**
     * The data needed to update a StudentPointsHistory.
     */
    data: XOR<StudentPointsHistoryUpdateInput, StudentPointsHistoryUncheckedUpdateInput>
    /**
     * Choose, which StudentPointsHistory to update.
     */
    where: StudentPointsHistoryWhereUniqueInput
  }

  /**
   * StudentPointsHistory updateMany
   */
  export type StudentPointsHistoryUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update StudentPointsHistories.
     */
    data: XOR<StudentPointsHistoryUpdateManyMutationInput, StudentPointsHistoryUncheckedUpdateManyInput>
    /**
     * Filter which StudentPointsHistories to update
     */
    where?: StudentPointsHistoryWhereInput
  }

  /**
   * StudentPointsHistory upsert
   */
  export type StudentPointsHistoryUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StudentPointsHistory
     */
    select?: StudentPointsHistorySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StudentPointsHistoryInclude<ExtArgs> | null
    /**
     * The filter to search for the StudentPointsHistory to update in case it exists.
     */
    where: StudentPointsHistoryWhereUniqueInput
    /**
     * In case the StudentPointsHistory found by the `where` argument doesn't exist, create a new StudentPointsHistory with this data.
     */
    create: XOR<StudentPointsHistoryCreateInput, StudentPointsHistoryUncheckedCreateInput>
    /**
     * In case the StudentPointsHistory was found with the provided `where` argument, update it with this data.
     */
    update: XOR<StudentPointsHistoryUpdateInput, StudentPointsHistoryUncheckedUpdateInput>
  }

  /**
   * StudentPointsHistory delete
   */
  export type StudentPointsHistoryDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StudentPointsHistory
     */
    select?: StudentPointsHistorySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StudentPointsHistoryInclude<ExtArgs> | null
    /**
     * Filter which StudentPointsHistory to delete.
     */
    where: StudentPointsHistoryWhereUniqueInput
  }

  /**
   * StudentPointsHistory deleteMany
   */
  export type StudentPointsHistoryDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which StudentPointsHistories to delete
     */
    where?: StudentPointsHistoryWhereInput
  }

  /**
   * StudentPointsHistory without action
   */
  export type StudentPointsHistoryDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StudentPointsHistory
     */
    select?: StudentPointsHistorySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StudentPointsHistoryInclude<ExtArgs> | null
  }


  /**
   * Model AcademicYear
   */

  export type AggregateAcademicYear = {
    _count: AcademicYearCountAggregateOutputType | null
    _min: AcademicYearMinAggregateOutputType | null
    _max: AcademicYearMaxAggregateOutputType | null
  }

  export type AcademicYearMinAggregateOutputType = {
    id: string | null
    year: string | null
    startDate: Date | null
    endDate: Date | null
    semester1Start: Date | null
    semester1End: Date | null
    semester2Start: Date | null
    semester2End: Date | null
    isActive: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type AcademicYearMaxAggregateOutputType = {
    id: string | null
    year: string | null
    startDate: Date | null
    endDate: Date | null
    semester1Start: Date | null
    semester1End: Date | null
    semester2Start: Date | null
    semester2End: Date | null
    isActive: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type AcademicYearCountAggregateOutputType = {
    id: number
    year: number
    startDate: number
    endDate: number
    semester1Start: number
    semester1End: number
    semester2Start: number
    semester2End: number
    isActive: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type AcademicYearMinAggregateInputType = {
    id?: true
    year?: true
    startDate?: true
    endDate?: true
    semester1Start?: true
    semester1End?: true
    semester2Start?: true
    semester2End?: true
    isActive?: true
    createdAt?: true
    updatedAt?: true
  }

  export type AcademicYearMaxAggregateInputType = {
    id?: true
    year?: true
    startDate?: true
    endDate?: true
    semester1Start?: true
    semester1End?: true
    semester2Start?: true
    semester2End?: true
    isActive?: true
    createdAt?: true
    updatedAt?: true
  }

  export type AcademicYearCountAggregateInputType = {
    id?: true
    year?: true
    startDate?: true
    endDate?: true
    semester1Start?: true
    semester1End?: true
    semester2Start?: true
    semester2End?: true
    isActive?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type AcademicYearAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which AcademicYear to aggregate.
     */
    where?: AcademicYearWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AcademicYears to fetch.
     */
    orderBy?: AcademicYearOrderByWithRelationInput | AcademicYearOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: AcademicYearWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AcademicYears from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AcademicYears.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned AcademicYears
    **/
    _count?: true | AcademicYearCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: AcademicYearMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: AcademicYearMaxAggregateInputType
  }

  export type GetAcademicYearAggregateType<T extends AcademicYearAggregateArgs> = {
        [P in keyof T & keyof AggregateAcademicYear]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAcademicYear[P]>
      : GetScalarType<T[P], AggregateAcademicYear[P]>
  }




  export type AcademicYearGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AcademicYearWhereInput
    orderBy?: AcademicYearOrderByWithAggregationInput | AcademicYearOrderByWithAggregationInput[]
    by: AcademicYearScalarFieldEnum[] | AcademicYearScalarFieldEnum
    having?: AcademicYearScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: AcademicYearCountAggregateInputType | true
    _min?: AcademicYearMinAggregateInputType
    _max?: AcademicYearMaxAggregateInputType
  }

  export type AcademicYearGroupByOutputType = {
    id: string
    year: string
    startDate: Date
    endDate: Date
    semester1Start: Date
    semester1End: Date
    semester2Start: Date
    semester2End: Date
    isActive: boolean
    createdAt: Date
    updatedAt: Date
    _count: AcademicYearCountAggregateOutputType | null
    _min: AcademicYearMinAggregateOutputType | null
    _max: AcademicYearMaxAggregateOutputType | null
  }

  type GetAcademicYearGroupByPayload<T extends AcademicYearGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<AcademicYearGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof AcademicYearGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], AcademicYearGroupByOutputType[P]>
            : GetScalarType<T[P], AcademicYearGroupByOutputType[P]>
        }
      >
    >


  export type AcademicYearSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    year?: boolean
    startDate?: boolean
    endDate?: boolean
    semester1Start?: boolean
    semester1End?: boolean
    semester2Start?: boolean
    semester2End?: boolean
    isActive?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["academicYear"]>

  export type AcademicYearSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    year?: boolean
    startDate?: boolean
    endDate?: boolean
    semester1Start?: boolean
    semester1End?: boolean
    semester2Start?: boolean
    semester2End?: boolean
    isActive?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["academicYear"]>

  export type AcademicYearSelectScalar = {
    id?: boolean
    year?: boolean
    startDate?: boolean
    endDate?: boolean
    semester1Start?: boolean
    semester1End?: boolean
    semester2Start?: boolean
    semester2End?: boolean
    isActive?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }


  export type $AcademicYearPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "AcademicYear"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: string
      year: string
      startDate: Date
      endDate: Date
      semester1Start: Date
      semester1End: Date
      semester2Start: Date
      semester2End: Date
      isActive: boolean
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["academicYear"]>
    composites: {}
  }

  type AcademicYearGetPayload<S extends boolean | null | undefined | AcademicYearDefaultArgs> = $Result.GetResult<Prisma.$AcademicYearPayload, S>

  type AcademicYearCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<AcademicYearFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: AcademicYearCountAggregateInputType | true
    }

  export interface AcademicYearDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['AcademicYear'], meta: { name: 'AcademicYear' } }
    /**
     * Find zero or one AcademicYear that matches the filter.
     * @param {AcademicYearFindUniqueArgs} args - Arguments to find a AcademicYear
     * @example
     * // Get one AcademicYear
     * const academicYear = await prisma.academicYear.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends AcademicYearFindUniqueArgs>(args: SelectSubset<T, AcademicYearFindUniqueArgs<ExtArgs>>): Prisma__AcademicYearClient<$Result.GetResult<Prisma.$AcademicYearPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one AcademicYear that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {AcademicYearFindUniqueOrThrowArgs} args - Arguments to find a AcademicYear
     * @example
     * // Get one AcademicYear
     * const academicYear = await prisma.academicYear.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends AcademicYearFindUniqueOrThrowArgs>(args: SelectSubset<T, AcademicYearFindUniqueOrThrowArgs<ExtArgs>>): Prisma__AcademicYearClient<$Result.GetResult<Prisma.$AcademicYearPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first AcademicYear that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AcademicYearFindFirstArgs} args - Arguments to find a AcademicYear
     * @example
     * // Get one AcademicYear
     * const academicYear = await prisma.academicYear.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends AcademicYearFindFirstArgs>(args?: SelectSubset<T, AcademicYearFindFirstArgs<ExtArgs>>): Prisma__AcademicYearClient<$Result.GetResult<Prisma.$AcademicYearPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first AcademicYear that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AcademicYearFindFirstOrThrowArgs} args - Arguments to find a AcademicYear
     * @example
     * // Get one AcademicYear
     * const academicYear = await prisma.academicYear.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends AcademicYearFindFirstOrThrowArgs>(args?: SelectSubset<T, AcademicYearFindFirstOrThrowArgs<ExtArgs>>): Prisma__AcademicYearClient<$Result.GetResult<Prisma.$AcademicYearPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more AcademicYears that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AcademicYearFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all AcademicYears
     * const academicYears = await prisma.academicYear.findMany()
     * 
     * // Get first 10 AcademicYears
     * const academicYears = await prisma.academicYear.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const academicYearWithIdOnly = await prisma.academicYear.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends AcademicYearFindManyArgs>(args?: SelectSubset<T, AcademicYearFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AcademicYearPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a AcademicYear.
     * @param {AcademicYearCreateArgs} args - Arguments to create a AcademicYear.
     * @example
     * // Create one AcademicYear
     * const AcademicYear = await prisma.academicYear.create({
     *   data: {
     *     // ... data to create a AcademicYear
     *   }
     * })
     * 
     */
    create<T extends AcademicYearCreateArgs>(args: SelectSubset<T, AcademicYearCreateArgs<ExtArgs>>): Prisma__AcademicYearClient<$Result.GetResult<Prisma.$AcademicYearPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many AcademicYears.
     * @param {AcademicYearCreateManyArgs} args - Arguments to create many AcademicYears.
     * @example
     * // Create many AcademicYears
     * const academicYear = await prisma.academicYear.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends AcademicYearCreateManyArgs>(args?: SelectSubset<T, AcademicYearCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many AcademicYears and returns the data saved in the database.
     * @param {AcademicYearCreateManyAndReturnArgs} args - Arguments to create many AcademicYears.
     * @example
     * // Create many AcademicYears
     * const academicYear = await prisma.academicYear.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many AcademicYears and only return the `id`
     * const academicYearWithIdOnly = await prisma.academicYear.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends AcademicYearCreateManyAndReturnArgs>(args?: SelectSubset<T, AcademicYearCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AcademicYearPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a AcademicYear.
     * @param {AcademicYearDeleteArgs} args - Arguments to delete one AcademicYear.
     * @example
     * // Delete one AcademicYear
     * const AcademicYear = await prisma.academicYear.delete({
     *   where: {
     *     // ... filter to delete one AcademicYear
     *   }
     * })
     * 
     */
    delete<T extends AcademicYearDeleteArgs>(args: SelectSubset<T, AcademicYearDeleteArgs<ExtArgs>>): Prisma__AcademicYearClient<$Result.GetResult<Prisma.$AcademicYearPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one AcademicYear.
     * @param {AcademicYearUpdateArgs} args - Arguments to update one AcademicYear.
     * @example
     * // Update one AcademicYear
     * const academicYear = await prisma.academicYear.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends AcademicYearUpdateArgs>(args: SelectSubset<T, AcademicYearUpdateArgs<ExtArgs>>): Prisma__AcademicYearClient<$Result.GetResult<Prisma.$AcademicYearPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more AcademicYears.
     * @param {AcademicYearDeleteManyArgs} args - Arguments to filter AcademicYears to delete.
     * @example
     * // Delete a few AcademicYears
     * const { count } = await prisma.academicYear.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends AcademicYearDeleteManyArgs>(args?: SelectSubset<T, AcademicYearDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more AcademicYears.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AcademicYearUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many AcademicYears
     * const academicYear = await prisma.academicYear.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends AcademicYearUpdateManyArgs>(args: SelectSubset<T, AcademicYearUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one AcademicYear.
     * @param {AcademicYearUpsertArgs} args - Arguments to update or create a AcademicYear.
     * @example
     * // Update or create a AcademicYear
     * const academicYear = await prisma.academicYear.upsert({
     *   create: {
     *     // ... data to create a AcademicYear
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the AcademicYear we want to update
     *   }
     * })
     */
    upsert<T extends AcademicYearUpsertArgs>(args: SelectSubset<T, AcademicYearUpsertArgs<ExtArgs>>): Prisma__AcademicYearClient<$Result.GetResult<Prisma.$AcademicYearPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of AcademicYears.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AcademicYearCountArgs} args - Arguments to filter AcademicYears to count.
     * @example
     * // Count the number of AcademicYears
     * const count = await prisma.academicYear.count({
     *   where: {
     *     // ... the filter for the AcademicYears we want to count
     *   }
     * })
    **/
    count<T extends AcademicYearCountArgs>(
      args?: Subset<T, AcademicYearCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], AcademicYearCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a AcademicYear.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AcademicYearAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends AcademicYearAggregateArgs>(args: Subset<T, AcademicYearAggregateArgs>): Prisma.PrismaPromise<GetAcademicYearAggregateType<T>>

    /**
     * Group by AcademicYear.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AcademicYearGroupByArgs} args - Group by arguments.
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
      T extends AcademicYearGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: AcademicYearGroupByArgs['orderBy'] }
        : { orderBy?: AcademicYearGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, AcademicYearGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAcademicYearGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the AcademicYear model
   */
  readonly fields: AcademicYearFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for AcademicYear.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__AcademicYearClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
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
   * Fields of the AcademicYear model
   */ 
  interface AcademicYearFieldRefs {
    readonly id: FieldRef<"AcademicYear", 'String'>
    readonly year: FieldRef<"AcademicYear", 'String'>
    readonly startDate: FieldRef<"AcademicYear", 'DateTime'>
    readonly endDate: FieldRef<"AcademicYear", 'DateTime'>
    readonly semester1Start: FieldRef<"AcademicYear", 'DateTime'>
    readonly semester1End: FieldRef<"AcademicYear", 'DateTime'>
    readonly semester2Start: FieldRef<"AcademicYear", 'DateTime'>
    readonly semester2End: FieldRef<"AcademicYear", 'DateTime'>
    readonly isActive: FieldRef<"AcademicYear", 'Boolean'>
    readonly createdAt: FieldRef<"AcademicYear", 'DateTime'>
    readonly updatedAt: FieldRef<"AcademicYear", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * AcademicYear findUnique
   */
  export type AcademicYearFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AcademicYear
     */
    select?: AcademicYearSelect<ExtArgs> | null
    /**
     * Filter, which AcademicYear to fetch.
     */
    where: AcademicYearWhereUniqueInput
  }

  /**
   * AcademicYear findUniqueOrThrow
   */
  export type AcademicYearFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AcademicYear
     */
    select?: AcademicYearSelect<ExtArgs> | null
    /**
     * Filter, which AcademicYear to fetch.
     */
    where: AcademicYearWhereUniqueInput
  }

  /**
   * AcademicYear findFirst
   */
  export type AcademicYearFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AcademicYear
     */
    select?: AcademicYearSelect<ExtArgs> | null
    /**
     * Filter, which AcademicYear to fetch.
     */
    where?: AcademicYearWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AcademicYears to fetch.
     */
    orderBy?: AcademicYearOrderByWithRelationInput | AcademicYearOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for AcademicYears.
     */
    cursor?: AcademicYearWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AcademicYears from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AcademicYears.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of AcademicYears.
     */
    distinct?: AcademicYearScalarFieldEnum | AcademicYearScalarFieldEnum[]
  }

  /**
   * AcademicYear findFirstOrThrow
   */
  export type AcademicYearFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AcademicYear
     */
    select?: AcademicYearSelect<ExtArgs> | null
    /**
     * Filter, which AcademicYear to fetch.
     */
    where?: AcademicYearWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AcademicYears to fetch.
     */
    orderBy?: AcademicYearOrderByWithRelationInput | AcademicYearOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for AcademicYears.
     */
    cursor?: AcademicYearWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AcademicYears from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AcademicYears.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of AcademicYears.
     */
    distinct?: AcademicYearScalarFieldEnum | AcademicYearScalarFieldEnum[]
  }

  /**
   * AcademicYear findMany
   */
  export type AcademicYearFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AcademicYear
     */
    select?: AcademicYearSelect<ExtArgs> | null
    /**
     * Filter, which AcademicYears to fetch.
     */
    where?: AcademicYearWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AcademicYears to fetch.
     */
    orderBy?: AcademicYearOrderByWithRelationInput | AcademicYearOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing AcademicYears.
     */
    cursor?: AcademicYearWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AcademicYears from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AcademicYears.
     */
    skip?: number
    distinct?: AcademicYearScalarFieldEnum | AcademicYearScalarFieldEnum[]
  }

  /**
   * AcademicYear create
   */
  export type AcademicYearCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AcademicYear
     */
    select?: AcademicYearSelect<ExtArgs> | null
    /**
     * The data needed to create a AcademicYear.
     */
    data: XOR<AcademicYearCreateInput, AcademicYearUncheckedCreateInput>
  }

  /**
   * AcademicYear createMany
   */
  export type AcademicYearCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many AcademicYears.
     */
    data: AcademicYearCreateManyInput | AcademicYearCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * AcademicYear createManyAndReturn
   */
  export type AcademicYearCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AcademicYear
     */
    select?: AcademicYearSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many AcademicYears.
     */
    data: AcademicYearCreateManyInput | AcademicYearCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * AcademicYear update
   */
  export type AcademicYearUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AcademicYear
     */
    select?: AcademicYearSelect<ExtArgs> | null
    /**
     * The data needed to update a AcademicYear.
     */
    data: XOR<AcademicYearUpdateInput, AcademicYearUncheckedUpdateInput>
    /**
     * Choose, which AcademicYear to update.
     */
    where: AcademicYearWhereUniqueInput
  }

  /**
   * AcademicYear updateMany
   */
  export type AcademicYearUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update AcademicYears.
     */
    data: XOR<AcademicYearUpdateManyMutationInput, AcademicYearUncheckedUpdateManyInput>
    /**
     * Filter which AcademicYears to update
     */
    where?: AcademicYearWhereInput
  }

  /**
   * AcademicYear upsert
   */
  export type AcademicYearUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AcademicYear
     */
    select?: AcademicYearSelect<ExtArgs> | null
    /**
     * The filter to search for the AcademicYear to update in case it exists.
     */
    where: AcademicYearWhereUniqueInput
    /**
     * In case the AcademicYear found by the `where` argument doesn't exist, create a new AcademicYear with this data.
     */
    create: XOR<AcademicYearCreateInput, AcademicYearUncheckedCreateInput>
    /**
     * In case the AcademicYear was found with the provided `where` argument, update it with this data.
     */
    update: XOR<AcademicYearUpdateInput, AcademicYearUncheckedUpdateInput>
  }

  /**
   * AcademicYear delete
   */
  export type AcademicYearDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AcademicYear
     */
    select?: AcademicYearSelect<ExtArgs> | null
    /**
     * Filter which AcademicYear to delete.
     */
    where: AcademicYearWhereUniqueInput
  }

  /**
   * AcademicYear deleteMany
   */
  export type AcademicYearDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which AcademicYears to delete
     */
    where?: AcademicYearWhereInput
  }

  /**
   * AcademicYear without action
   */
  export type AcademicYearDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AcademicYear
     */
    select?: AcademicYearSelect<ExtArgs> | null
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


  export const StudentScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    nisn: 'nisn',
    nis: 'nis',
    name: 'name',
    nickname: 'nickname',
    classId: 'classId',
    className: 'className',
    classLevel: 'classLevel',
    classMajor: 'classMajor',
    gender: 'gender',
    birthPlace: 'birthPlace',
    birthDate: 'birthDate',
    religion: 'religion',
    bloodType: 'bloodType',
    address: 'address',
    rt: 'rt',
    rw: 'rw',
    village: 'village',
    district: 'district',
    city: 'city',
    province: 'province',
    postalCode: 'postalCode',
    phone: 'phone',
    email: 'email',
    photoUrl: 'photoUrl',
    parentId: 'parentId',
    fatherName: 'fatherName',
    fatherOccupation: 'fatherOccupation',
    fatherPhone: 'fatherPhone',
    motherName: 'motherName',
    motherOccupation: 'motherOccupation',
    motherPhone: 'motherPhone',
    guardianName: 'guardianName',
    guardianRelation: 'guardianRelation',
    guardianPhone: 'guardianPhone',
    waliKelasId: 'waliKelasId',
    waliKelasName: 'waliKelasName',
    totalPoints: 'totalPoints',
    positivePoints: 'positivePoints',
    negativePoints: 'negativePoints',
    currentRank: 'currentRank',
    academicYear: 'academicYear',
    entryYear: 'entryYear',
    entryDate: 'entryDate',
    status: 'status',
    statusReason: 'statusReason',
    graduationYear: 'graduationYear',
    birthCertificateUrl: 'birthCertificateUrl',
    familyCardUrl: 'familyCardUrl',
    photoCardUrl: 'photoCardUrl',
    isActive: 'isActive',
    lastSyncedAt: 'lastSyncedAt',
    createdBy: 'createdBy',
    createdAt: 'createdAt',
    updatedBy: 'updatedBy',
    updatedAt: 'updatedAt',
    deletedAt: 'deletedAt',
    deletedBy: 'deletedBy'
  };

  export type StudentScalarFieldEnum = (typeof StudentScalarFieldEnum)[keyof typeof StudentScalarFieldEnum]


  export const ClassScalarFieldEnum: {
    id: 'id',
    code: 'code',
    name: 'name',
    level: 'level',
    major: 'major',
    waliKelasId: 'waliKelasId',
    waliKelasName: 'waliKelasName',
    capacity: 'capacity',
    currentTotal: 'currentTotal',
    academicYear: 'academicYear',
    roomNumber: 'roomNumber',
    floor: 'floor',
    building: 'building',
    scheduleUrl: 'scheduleUrl',
    isActive: 'isActive',
    createdBy: 'createdBy',
    createdAt: 'createdAt',
    updatedBy: 'updatedBy',
    updatedAt: 'updatedAt',
    deletedAt: 'deletedAt'
  };

  export type ClassScalarFieldEnum = (typeof ClassScalarFieldEnum)[keyof typeof ClassScalarFieldEnum]


  export const StudentPointsHistoryScalarFieldEnum: {
    id: 'id',
    studentId: 'studentId',
    studentName: 'studentName',
    previousTotal: 'previousTotal',
    pointsChange: 'pointsChange',
    newTotal: 'newTotal',
    sourceType: 'sourceType',
    sourceId: 'sourceId',
    sourceDescription: 'sourceDescription',
    academicYear: 'academicYear',
    semester: 'semester',
    recordedBy: 'recordedBy',
    recordedAt: 'recordedAt'
  };

  export type StudentPointsHistoryScalarFieldEnum = (typeof StudentPointsHistoryScalarFieldEnum)[keyof typeof StudentPointsHistoryScalarFieldEnum]


  export const AcademicYearScalarFieldEnum: {
    id: 'id',
    year: 'year',
    startDate: 'startDate',
    endDate: 'endDate',
    semester1Start: 'semester1Start',
    semester1End: 'semester1End',
    semester2Start: 'semester2Start',
    semester2End: 'semester2End',
    isActive: 'isActive',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type AcademicYearScalarFieldEnum = (typeof AcademicYearScalarFieldEnum)[keyof typeof AcademicYearScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


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
   * Reference to a field of type 'Gender'
   */
  export type EnumGenderFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Gender'>
    


  /**
   * Reference to a field of type 'Gender[]'
   */
  export type ListEnumGenderFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Gender[]'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'Religion'
   */
  export type EnumReligionFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Religion'>
    


  /**
   * Reference to a field of type 'Religion[]'
   */
  export type ListEnumReligionFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Religion[]'>
    


  /**
   * Reference to a field of type 'BloodType'
   */
  export type EnumBloodTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'BloodType'>
    


  /**
   * Reference to a field of type 'BloodType[]'
   */
  export type ListEnumBloodTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'BloodType[]'>
    


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'StudentStatus'
   */
  export type EnumStudentStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'StudentStatus'>
    


  /**
   * Reference to a field of type 'StudentStatus[]'
   */
  export type ListEnumStudentStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'StudentStatus[]'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


  /**
   * Reference to a field of type 'PointSourceType'
   */
  export type EnumPointSourceTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'PointSourceType'>
    


  /**
   * Reference to a field of type 'PointSourceType[]'
   */
  export type ListEnumPointSourceTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'PointSourceType[]'>
    


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


  export type StudentWhereInput = {
    AND?: StudentWhereInput | StudentWhereInput[]
    OR?: StudentWhereInput[]
    NOT?: StudentWhereInput | StudentWhereInput[]
    id?: StringFilter<"Student"> | string
    userId?: StringNullableFilter<"Student"> | string | null
    nisn?: StringFilter<"Student"> | string
    nis?: StringNullableFilter<"Student"> | string | null
    name?: StringFilter<"Student"> | string
    nickname?: StringNullableFilter<"Student"> | string | null
    classId?: StringFilter<"Student"> | string
    className?: StringFilter<"Student"> | string
    classLevel?: StringFilter<"Student"> | string
    classMajor?: StringNullableFilter<"Student"> | string | null
    gender?: EnumGenderFilter<"Student"> | $Enums.Gender
    birthPlace?: StringFilter<"Student"> | string
    birthDate?: DateTimeFilter<"Student"> | Date | string
    religion?: EnumReligionFilter<"Student"> | $Enums.Religion
    bloodType?: EnumBloodTypeNullableFilter<"Student"> | $Enums.BloodType | null
    address?: StringFilter<"Student"> | string
    rt?: StringNullableFilter<"Student"> | string | null
    rw?: StringNullableFilter<"Student"> | string | null
    village?: StringNullableFilter<"Student"> | string | null
    district?: StringNullableFilter<"Student"> | string | null
    city?: StringFilter<"Student"> | string
    province?: StringFilter<"Student"> | string
    postalCode?: StringNullableFilter<"Student"> | string | null
    phone?: StringNullableFilter<"Student"> | string | null
    email?: StringNullableFilter<"Student"> | string | null
    photoUrl?: StringNullableFilter<"Student"> | string | null
    parentId?: StringNullableFilter<"Student"> | string | null
    fatherName?: StringNullableFilter<"Student"> | string | null
    fatherOccupation?: StringNullableFilter<"Student"> | string | null
    fatherPhone?: StringNullableFilter<"Student"> | string | null
    motherName?: StringNullableFilter<"Student"> | string | null
    motherOccupation?: StringNullableFilter<"Student"> | string | null
    motherPhone?: StringNullableFilter<"Student"> | string | null
    guardianName?: StringNullableFilter<"Student"> | string | null
    guardianRelation?: StringNullableFilter<"Student"> | string | null
    guardianPhone?: StringNullableFilter<"Student"> | string | null
    waliKelasId?: StringNullableFilter<"Student"> | string | null
    waliKelasName?: StringNullableFilter<"Student"> | string | null
    totalPoints?: IntFilter<"Student"> | number
    positivePoints?: IntFilter<"Student"> | number
    negativePoints?: IntFilter<"Student"> | number
    currentRank?: IntNullableFilter<"Student"> | number | null
    academicYear?: StringFilter<"Student"> | string
    entryYear?: StringFilter<"Student"> | string
    entryDate?: DateTimeFilter<"Student"> | Date | string
    status?: EnumStudentStatusFilter<"Student"> | $Enums.StudentStatus
    statusReason?: StringNullableFilter<"Student"> | string | null
    graduationYear?: StringNullableFilter<"Student"> | string | null
    birthCertificateUrl?: StringNullableFilter<"Student"> | string | null
    familyCardUrl?: StringNullableFilter<"Student"> | string | null
    photoCardUrl?: StringNullableFilter<"Student"> | string | null
    isActive?: BoolFilter<"Student"> | boolean
    lastSyncedAt?: DateTimeNullableFilter<"Student"> | Date | string | null
    createdBy?: StringFilter<"Student"> | string
    createdAt?: DateTimeFilter<"Student"> | Date | string
    updatedBy?: StringNullableFilter<"Student"> | string | null
    updatedAt?: DateTimeFilter<"Student"> | Date | string
    deletedAt?: DateTimeNullableFilter<"Student"> | Date | string | null
    deletedBy?: StringNullableFilter<"Student"> | string | null
    class?: XOR<ClassRelationFilter, ClassWhereInput>
    pointsHistory?: StudentPointsHistoryListRelationFilter
  }

  export type StudentOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrderInput | SortOrder
    nisn?: SortOrder
    nis?: SortOrderInput | SortOrder
    name?: SortOrder
    nickname?: SortOrderInput | SortOrder
    classId?: SortOrder
    className?: SortOrder
    classLevel?: SortOrder
    classMajor?: SortOrderInput | SortOrder
    gender?: SortOrder
    birthPlace?: SortOrder
    birthDate?: SortOrder
    religion?: SortOrder
    bloodType?: SortOrderInput | SortOrder
    address?: SortOrder
    rt?: SortOrderInput | SortOrder
    rw?: SortOrderInput | SortOrder
    village?: SortOrderInput | SortOrder
    district?: SortOrderInput | SortOrder
    city?: SortOrder
    province?: SortOrder
    postalCode?: SortOrderInput | SortOrder
    phone?: SortOrderInput | SortOrder
    email?: SortOrderInput | SortOrder
    photoUrl?: SortOrderInput | SortOrder
    parentId?: SortOrderInput | SortOrder
    fatherName?: SortOrderInput | SortOrder
    fatherOccupation?: SortOrderInput | SortOrder
    fatherPhone?: SortOrderInput | SortOrder
    motherName?: SortOrderInput | SortOrder
    motherOccupation?: SortOrderInput | SortOrder
    motherPhone?: SortOrderInput | SortOrder
    guardianName?: SortOrderInput | SortOrder
    guardianRelation?: SortOrderInput | SortOrder
    guardianPhone?: SortOrderInput | SortOrder
    waliKelasId?: SortOrderInput | SortOrder
    waliKelasName?: SortOrderInput | SortOrder
    totalPoints?: SortOrder
    positivePoints?: SortOrder
    negativePoints?: SortOrder
    currentRank?: SortOrderInput | SortOrder
    academicYear?: SortOrder
    entryYear?: SortOrder
    entryDate?: SortOrder
    status?: SortOrder
    statusReason?: SortOrderInput | SortOrder
    graduationYear?: SortOrderInput | SortOrder
    birthCertificateUrl?: SortOrderInput | SortOrder
    familyCardUrl?: SortOrderInput | SortOrder
    photoCardUrl?: SortOrderInput | SortOrder
    isActive?: SortOrder
    lastSyncedAt?: SortOrderInput | SortOrder
    createdBy?: SortOrder
    createdAt?: SortOrder
    updatedBy?: SortOrderInput | SortOrder
    updatedAt?: SortOrder
    deletedAt?: SortOrderInput | SortOrder
    deletedBy?: SortOrderInput | SortOrder
    class?: ClassOrderByWithRelationInput
    pointsHistory?: StudentPointsHistoryOrderByRelationAggregateInput
  }

  export type StudentWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    userId?: string
    nisn?: string
    nis?: string
    AND?: StudentWhereInput | StudentWhereInput[]
    OR?: StudentWhereInput[]
    NOT?: StudentWhereInput | StudentWhereInput[]
    name?: StringFilter<"Student"> | string
    nickname?: StringNullableFilter<"Student"> | string | null
    classId?: StringFilter<"Student"> | string
    className?: StringFilter<"Student"> | string
    classLevel?: StringFilter<"Student"> | string
    classMajor?: StringNullableFilter<"Student"> | string | null
    gender?: EnumGenderFilter<"Student"> | $Enums.Gender
    birthPlace?: StringFilter<"Student"> | string
    birthDate?: DateTimeFilter<"Student"> | Date | string
    religion?: EnumReligionFilter<"Student"> | $Enums.Religion
    bloodType?: EnumBloodTypeNullableFilter<"Student"> | $Enums.BloodType | null
    address?: StringFilter<"Student"> | string
    rt?: StringNullableFilter<"Student"> | string | null
    rw?: StringNullableFilter<"Student"> | string | null
    village?: StringNullableFilter<"Student"> | string | null
    district?: StringNullableFilter<"Student"> | string | null
    city?: StringFilter<"Student"> | string
    province?: StringFilter<"Student"> | string
    postalCode?: StringNullableFilter<"Student"> | string | null
    phone?: StringNullableFilter<"Student"> | string | null
    email?: StringNullableFilter<"Student"> | string | null
    photoUrl?: StringNullableFilter<"Student"> | string | null
    parentId?: StringNullableFilter<"Student"> | string | null
    fatherName?: StringNullableFilter<"Student"> | string | null
    fatherOccupation?: StringNullableFilter<"Student"> | string | null
    fatherPhone?: StringNullableFilter<"Student"> | string | null
    motherName?: StringNullableFilter<"Student"> | string | null
    motherOccupation?: StringNullableFilter<"Student"> | string | null
    motherPhone?: StringNullableFilter<"Student"> | string | null
    guardianName?: StringNullableFilter<"Student"> | string | null
    guardianRelation?: StringNullableFilter<"Student"> | string | null
    guardianPhone?: StringNullableFilter<"Student"> | string | null
    waliKelasId?: StringNullableFilter<"Student"> | string | null
    waliKelasName?: StringNullableFilter<"Student"> | string | null
    totalPoints?: IntFilter<"Student"> | number
    positivePoints?: IntFilter<"Student"> | number
    negativePoints?: IntFilter<"Student"> | number
    currentRank?: IntNullableFilter<"Student"> | number | null
    academicYear?: StringFilter<"Student"> | string
    entryYear?: StringFilter<"Student"> | string
    entryDate?: DateTimeFilter<"Student"> | Date | string
    status?: EnumStudentStatusFilter<"Student"> | $Enums.StudentStatus
    statusReason?: StringNullableFilter<"Student"> | string | null
    graduationYear?: StringNullableFilter<"Student"> | string | null
    birthCertificateUrl?: StringNullableFilter<"Student"> | string | null
    familyCardUrl?: StringNullableFilter<"Student"> | string | null
    photoCardUrl?: StringNullableFilter<"Student"> | string | null
    isActive?: BoolFilter<"Student"> | boolean
    lastSyncedAt?: DateTimeNullableFilter<"Student"> | Date | string | null
    createdBy?: StringFilter<"Student"> | string
    createdAt?: DateTimeFilter<"Student"> | Date | string
    updatedBy?: StringNullableFilter<"Student"> | string | null
    updatedAt?: DateTimeFilter<"Student"> | Date | string
    deletedAt?: DateTimeNullableFilter<"Student"> | Date | string | null
    deletedBy?: StringNullableFilter<"Student"> | string | null
    class?: XOR<ClassRelationFilter, ClassWhereInput>
    pointsHistory?: StudentPointsHistoryListRelationFilter
  }, "id" | "userId" | "nisn" | "nis">

  export type StudentOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrderInput | SortOrder
    nisn?: SortOrder
    nis?: SortOrderInput | SortOrder
    name?: SortOrder
    nickname?: SortOrderInput | SortOrder
    classId?: SortOrder
    className?: SortOrder
    classLevel?: SortOrder
    classMajor?: SortOrderInput | SortOrder
    gender?: SortOrder
    birthPlace?: SortOrder
    birthDate?: SortOrder
    religion?: SortOrder
    bloodType?: SortOrderInput | SortOrder
    address?: SortOrder
    rt?: SortOrderInput | SortOrder
    rw?: SortOrderInput | SortOrder
    village?: SortOrderInput | SortOrder
    district?: SortOrderInput | SortOrder
    city?: SortOrder
    province?: SortOrder
    postalCode?: SortOrderInput | SortOrder
    phone?: SortOrderInput | SortOrder
    email?: SortOrderInput | SortOrder
    photoUrl?: SortOrderInput | SortOrder
    parentId?: SortOrderInput | SortOrder
    fatherName?: SortOrderInput | SortOrder
    fatherOccupation?: SortOrderInput | SortOrder
    fatherPhone?: SortOrderInput | SortOrder
    motherName?: SortOrderInput | SortOrder
    motherOccupation?: SortOrderInput | SortOrder
    motherPhone?: SortOrderInput | SortOrder
    guardianName?: SortOrderInput | SortOrder
    guardianRelation?: SortOrderInput | SortOrder
    guardianPhone?: SortOrderInput | SortOrder
    waliKelasId?: SortOrderInput | SortOrder
    waliKelasName?: SortOrderInput | SortOrder
    totalPoints?: SortOrder
    positivePoints?: SortOrder
    negativePoints?: SortOrder
    currentRank?: SortOrderInput | SortOrder
    academicYear?: SortOrder
    entryYear?: SortOrder
    entryDate?: SortOrder
    status?: SortOrder
    statusReason?: SortOrderInput | SortOrder
    graduationYear?: SortOrderInput | SortOrder
    birthCertificateUrl?: SortOrderInput | SortOrder
    familyCardUrl?: SortOrderInput | SortOrder
    photoCardUrl?: SortOrderInput | SortOrder
    isActive?: SortOrder
    lastSyncedAt?: SortOrderInput | SortOrder
    createdBy?: SortOrder
    createdAt?: SortOrder
    updatedBy?: SortOrderInput | SortOrder
    updatedAt?: SortOrder
    deletedAt?: SortOrderInput | SortOrder
    deletedBy?: SortOrderInput | SortOrder
    _count?: StudentCountOrderByAggregateInput
    _avg?: StudentAvgOrderByAggregateInput
    _max?: StudentMaxOrderByAggregateInput
    _min?: StudentMinOrderByAggregateInput
    _sum?: StudentSumOrderByAggregateInput
  }

  export type StudentScalarWhereWithAggregatesInput = {
    AND?: StudentScalarWhereWithAggregatesInput | StudentScalarWhereWithAggregatesInput[]
    OR?: StudentScalarWhereWithAggregatesInput[]
    NOT?: StudentScalarWhereWithAggregatesInput | StudentScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Student"> | string
    userId?: StringNullableWithAggregatesFilter<"Student"> | string | null
    nisn?: StringWithAggregatesFilter<"Student"> | string
    nis?: StringNullableWithAggregatesFilter<"Student"> | string | null
    name?: StringWithAggregatesFilter<"Student"> | string
    nickname?: StringNullableWithAggregatesFilter<"Student"> | string | null
    classId?: StringWithAggregatesFilter<"Student"> | string
    className?: StringWithAggregatesFilter<"Student"> | string
    classLevel?: StringWithAggregatesFilter<"Student"> | string
    classMajor?: StringNullableWithAggregatesFilter<"Student"> | string | null
    gender?: EnumGenderWithAggregatesFilter<"Student"> | $Enums.Gender
    birthPlace?: StringWithAggregatesFilter<"Student"> | string
    birthDate?: DateTimeWithAggregatesFilter<"Student"> | Date | string
    religion?: EnumReligionWithAggregatesFilter<"Student"> | $Enums.Religion
    bloodType?: EnumBloodTypeNullableWithAggregatesFilter<"Student"> | $Enums.BloodType | null
    address?: StringWithAggregatesFilter<"Student"> | string
    rt?: StringNullableWithAggregatesFilter<"Student"> | string | null
    rw?: StringNullableWithAggregatesFilter<"Student"> | string | null
    village?: StringNullableWithAggregatesFilter<"Student"> | string | null
    district?: StringNullableWithAggregatesFilter<"Student"> | string | null
    city?: StringWithAggregatesFilter<"Student"> | string
    province?: StringWithAggregatesFilter<"Student"> | string
    postalCode?: StringNullableWithAggregatesFilter<"Student"> | string | null
    phone?: StringNullableWithAggregatesFilter<"Student"> | string | null
    email?: StringNullableWithAggregatesFilter<"Student"> | string | null
    photoUrl?: StringNullableWithAggregatesFilter<"Student"> | string | null
    parentId?: StringNullableWithAggregatesFilter<"Student"> | string | null
    fatherName?: StringNullableWithAggregatesFilter<"Student"> | string | null
    fatherOccupation?: StringNullableWithAggregatesFilter<"Student"> | string | null
    fatherPhone?: StringNullableWithAggregatesFilter<"Student"> | string | null
    motherName?: StringNullableWithAggregatesFilter<"Student"> | string | null
    motherOccupation?: StringNullableWithAggregatesFilter<"Student"> | string | null
    motherPhone?: StringNullableWithAggregatesFilter<"Student"> | string | null
    guardianName?: StringNullableWithAggregatesFilter<"Student"> | string | null
    guardianRelation?: StringNullableWithAggregatesFilter<"Student"> | string | null
    guardianPhone?: StringNullableWithAggregatesFilter<"Student"> | string | null
    waliKelasId?: StringNullableWithAggregatesFilter<"Student"> | string | null
    waliKelasName?: StringNullableWithAggregatesFilter<"Student"> | string | null
    totalPoints?: IntWithAggregatesFilter<"Student"> | number
    positivePoints?: IntWithAggregatesFilter<"Student"> | number
    negativePoints?: IntWithAggregatesFilter<"Student"> | number
    currentRank?: IntNullableWithAggregatesFilter<"Student"> | number | null
    academicYear?: StringWithAggregatesFilter<"Student"> | string
    entryYear?: StringWithAggregatesFilter<"Student"> | string
    entryDate?: DateTimeWithAggregatesFilter<"Student"> | Date | string
    status?: EnumStudentStatusWithAggregatesFilter<"Student"> | $Enums.StudentStatus
    statusReason?: StringNullableWithAggregatesFilter<"Student"> | string | null
    graduationYear?: StringNullableWithAggregatesFilter<"Student"> | string | null
    birthCertificateUrl?: StringNullableWithAggregatesFilter<"Student"> | string | null
    familyCardUrl?: StringNullableWithAggregatesFilter<"Student"> | string | null
    photoCardUrl?: StringNullableWithAggregatesFilter<"Student"> | string | null
    isActive?: BoolWithAggregatesFilter<"Student"> | boolean
    lastSyncedAt?: DateTimeNullableWithAggregatesFilter<"Student"> | Date | string | null
    createdBy?: StringWithAggregatesFilter<"Student"> | string
    createdAt?: DateTimeWithAggregatesFilter<"Student"> | Date | string
    updatedBy?: StringNullableWithAggregatesFilter<"Student"> | string | null
    updatedAt?: DateTimeWithAggregatesFilter<"Student"> | Date | string
    deletedAt?: DateTimeNullableWithAggregatesFilter<"Student"> | Date | string | null
    deletedBy?: StringNullableWithAggregatesFilter<"Student"> | string | null
  }

  export type ClassWhereInput = {
    AND?: ClassWhereInput | ClassWhereInput[]
    OR?: ClassWhereInput[]
    NOT?: ClassWhereInput | ClassWhereInput[]
    id?: StringFilter<"Class"> | string
    code?: StringFilter<"Class"> | string
    name?: StringFilter<"Class"> | string
    level?: StringFilter<"Class"> | string
    major?: StringNullableFilter<"Class"> | string | null
    waliKelasId?: StringNullableFilter<"Class"> | string | null
    waliKelasName?: StringNullableFilter<"Class"> | string | null
    capacity?: IntFilter<"Class"> | number
    currentTotal?: IntFilter<"Class"> | number
    academicYear?: StringFilter<"Class"> | string
    roomNumber?: StringNullableFilter<"Class"> | string | null
    floor?: StringNullableFilter<"Class"> | string | null
    building?: StringNullableFilter<"Class"> | string | null
    scheduleUrl?: StringNullableFilter<"Class"> | string | null
    isActive?: BoolFilter<"Class"> | boolean
    createdBy?: StringFilter<"Class"> | string
    createdAt?: DateTimeFilter<"Class"> | Date | string
    updatedBy?: StringNullableFilter<"Class"> | string | null
    updatedAt?: DateTimeFilter<"Class"> | Date | string
    deletedAt?: DateTimeNullableFilter<"Class"> | Date | string | null
    students?: StudentListRelationFilter
  }

  export type ClassOrderByWithRelationInput = {
    id?: SortOrder
    code?: SortOrder
    name?: SortOrder
    level?: SortOrder
    major?: SortOrderInput | SortOrder
    waliKelasId?: SortOrderInput | SortOrder
    waliKelasName?: SortOrderInput | SortOrder
    capacity?: SortOrder
    currentTotal?: SortOrder
    academicYear?: SortOrder
    roomNumber?: SortOrderInput | SortOrder
    floor?: SortOrderInput | SortOrder
    building?: SortOrderInput | SortOrder
    scheduleUrl?: SortOrderInput | SortOrder
    isActive?: SortOrder
    createdBy?: SortOrder
    createdAt?: SortOrder
    updatedBy?: SortOrderInput | SortOrder
    updatedAt?: SortOrder
    deletedAt?: SortOrderInput | SortOrder
    students?: StudentOrderByRelationAggregateInput
  }

  export type ClassWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    code?: string
    code_academicYear?: ClassCodeAcademicYearCompoundUniqueInput
    AND?: ClassWhereInput | ClassWhereInput[]
    OR?: ClassWhereInput[]
    NOT?: ClassWhereInput | ClassWhereInput[]
    name?: StringFilter<"Class"> | string
    level?: StringFilter<"Class"> | string
    major?: StringNullableFilter<"Class"> | string | null
    waliKelasId?: StringNullableFilter<"Class"> | string | null
    waliKelasName?: StringNullableFilter<"Class"> | string | null
    capacity?: IntFilter<"Class"> | number
    currentTotal?: IntFilter<"Class"> | number
    academicYear?: StringFilter<"Class"> | string
    roomNumber?: StringNullableFilter<"Class"> | string | null
    floor?: StringNullableFilter<"Class"> | string | null
    building?: StringNullableFilter<"Class"> | string | null
    scheduleUrl?: StringNullableFilter<"Class"> | string | null
    isActive?: BoolFilter<"Class"> | boolean
    createdBy?: StringFilter<"Class"> | string
    createdAt?: DateTimeFilter<"Class"> | Date | string
    updatedBy?: StringNullableFilter<"Class"> | string | null
    updatedAt?: DateTimeFilter<"Class"> | Date | string
    deletedAt?: DateTimeNullableFilter<"Class"> | Date | string | null
    students?: StudentListRelationFilter
  }, "id" | "code" | "code_academicYear">

  export type ClassOrderByWithAggregationInput = {
    id?: SortOrder
    code?: SortOrder
    name?: SortOrder
    level?: SortOrder
    major?: SortOrderInput | SortOrder
    waliKelasId?: SortOrderInput | SortOrder
    waliKelasName?: SortOrderInput | SortOrder
    capacity?: SortOrder
    currentTotal?: SortOrder
    academicYear?: SortOrder
    roomNumber?: SortOrderInput | SortOrder
    floor?: SortOrderInput | SortOrder
    building?: SortOrderInput | SortOrder
    scheduleUrl?: SortOrderInput | SortOrder
    isActive?: SortOrder
    createdBy?: SortOrder
    createdAt?: SortOrder
    updatedBy?: SortOrderInput | SortOrder
    updatedAt?: SortOrder
    deletedAt?: SortOrderInput | SortOrder
    _count?: ClassCountOrderByAggregateInput
    _avg?: ClassAvgOrderByAggregateInput
    _max?: ClassMaxOrderByAggregateInput
    _min?: ClassMinOrderByAggregateInput
    _sum?: ClassSumOrderByAggregateInput
  }

  export type ClassScalarWhereWithAggregatesInput = {
    AND?: ClassScalarWhereWithAggregatesInput | ClassScalarWhereWithAggregatesInput[]
    OR?: ClassScalarWhereWithAggregatesInput[]
    NOT?: ClassScalarWhereWithAggregatesInput | ClassScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Class"> | string
    code?: StringWithAggregatesFilter<"Class"> | string
    name?: StringWithAggregatesFilter<"Class"> | string
    level?: StringWithAggregatesFilter<"Class"> | string
    major?: StringNullableWithAggregatesFilter<"Class"> | string | null
    waliKelasId?: StringNullableWithAggregatesFilter<"Class"> | string | null
    waliKelasName?: StringNullableWithAggregatesFilter<"Class"> | string | null
    capacity?: IntWithAggregatesFilter<"Class"> | number
    currentTotal?: IntWithAggregatesFilter<"Class"> | number
    academicYear?: StringWithAggregatesFilter<"Class"> | string
    roomNumber?: StringNullableWithAggregatesFilter<"Class"> | string | null
    floor?: StringNullableWithAggregatesFilter<"Class"> | string | null
    building?: StringNullableWithAggregatesFilter<"Class"> | string | null
    scheduleUrl?: StringNullableWithAggregatesFilter<"Class"> | string | null
    isActive?: BoolWithAggregatesFilter<"Class"> | boolean
    createdBy?: StringWithAggregatesFilter<"Class"> | string
    createdAt?: DateTimeWithAggregatesFilter<"Class"> | Date | string
    updatedBy?: StringNullableWithAggregatesFilter<"Class"> | string | null
    updatedAt?: DateTimeWithAggregatesFilter<"Class"> | Date | string
    deletedAt?: DateTimeNullableWithAggregatesFilter<"Class"> | Date | string | null
  }

  export type StudentPointsHistoryWhereInput = {
    AND?: StudentPointsHistoryWhereInput | StudentPointsHistoryWhereInput[]
    OR?: StudentPointsHistoryWhereInput[]
    NOT?: StudentPointsHistoryWhereInput | StudentPointsHistoryWhereInput[]
    id?: StringFilter<"StudentPointsHistory"> | string
    studentId?: StringFilter<"StudentPointsHistory"> | string
    studentName?: StringFilter<"StudentPointsHistory"> | string
    previousTotal?: IntFilter<"StudentPointsHistory"> | number
    pointsChange?: IntFilter<"StudentPointsHistory"> | number
    newTotal?: IntFilter<"StudentPointsHistory"> | number
    sourceType?: EnumPointSourceTypeFilter<"StudentPointsHistory"> | $Enums.PointSourceType
    sourceId?: StringFilter<"StudentPointsHistory"> | string
    sourceDescription?: StringFilter<"StudentPointsHistory"> | string
    academicYear?: StringFilter<"StudentPointsHistory"> | string
    semester?: IntFilter<"StudentPointsHistory"> | number
    recordedBy?: StringFilter<"StudentPointsHistory"> | string
    recordedAt?: DateTimeFilter<"StudentPointsHistory"> | Date | string
    student?: XOR<StudentRelationFilter, StudentWhereInput>
  }

  export type StudentPointsHistoryOrderByWithRelationInput = {
    id?: SortOrder
    studentId?: SortOrder
    studentName?: SortOrder
    previousTotal?: SortOrder
    pointsChange?: SortOrder
    newTotal?: SortOrder
    sourceType?: SortOrder
    sourceId?: SortOrder
    sourceDescription?: SortOrder
    academicYear?: SortOrder
    semester?: SortOrder
    recordedBy?: SortOrder
    recordedAt?: SortOrder
    student?: StudentOrderByWithRelationInput
  }

  export type StudentPointsHistoryWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: StudentPointsHistoryWhereInput | StudentPointsHistoryWhereInput[]
    OR?: StudentPointsHistoryWhereInput[]
    NOT?: StudentPointsHistoryWhereInput | StudentPointsHistoryWhereInput[]
    studentId?: StringFilter<"StudentPointsHistory"> | string
    studentName?: StringFilter<"StudentPointsHistory"> | string
    previousTotal?: IntFilter<"StudentPointsHistory"> | number
    pointsChange?: IntFilter<"StudentPointsHistory"> | number
    newTotal?: IntFilter<"StudentPointsHistory"> | number
    sourceType?: EnumPointSourceTypeFilter<"StudentPointsHistory"> | $Enums.PointSourceType
    sourceId?: StringFilter<"StudentPointsHistory"> | string
    sourceDescription?: StringFilter<"StudentPointsHistory"> | string
    academicYear?: StringFilter<"StudentPointsHistory"> | string
    semester?: IntFilter<"StudentPointsHistory"> | number
    recordedBy?: StringFilter<"StudentPointsHistory"> | string
    recordedAt?: DateTimeFilter<"StudentPointsHistory"> | Date | string
    student?: XOR<StudentRelationFilter, StudentWhereInput>
  }, "id">

  export type StudentPointsHistoryOrderByWithAggregationInput = {
    id?: SortOrder
    studentId?: SortOrder
    studentName?: SortOrder
    previousTotal?: SortOrder
    pointsChange?: SortOrder
    newTotal?: SortOrder
    sourceType?: SortOrder
    sourceId?: SortOrder
    sourceDescription?: SortOrder
    academicYear?: SortOrder
    semester?: SortOrder
    recordedBy?: SortOrder
    recordedAt?: SortOrder
    _count?: StudentPointsHistoryCountOrderByAggregateInput
    _avg?: StudentPointsHistoryAvgOrderByAggregateInput
    _max?: StudentPointsHistoryMaxOrderByAggregateInput
    _min?: StudentPointsHistoryMinOrderByAggregateInput
    _sum?: StudentPointsHistorySumOrderByAggregateInput
  }

  export type StudentPointsHistoryScalarWhereWithAggregatesInput = {
    AND?: StudentPointsHistoryScalarWhereWithAggregatesInput | StudentPointsHistoryScalarWhereWithAggregatesInput[]
    OR?: StudentPointsHistoryScalarWhereWithAggregatesInput[]
    NOT?: StudentPointsHistoryScalarWhereWithAggregatesInput | StudentPointsHistoryScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"StudentPointsHistory"> | string
    studentId?: StringWithAggregatesFilter<"StudentPointsHistory"> | string
    studentName?: StringWithAggregatesFilter<"StudentPointsHistory"> | string
    previousTotal?: IntWithAggregatesFilter<"StudentPointsHistory"> | number
    pointsChange?: IntWithAggregatesFilter<"StudentPointsHistory"> | number
    newTotal?: IntWithAggregatesFilter<"StudentPointsHistory"> | number
    sourceType?: EnumPointSourceTypeWithAggregatesFilter<"StudentPointsHistory"> | $Enums.PointSourceType
    sourceId?: StringWithAggregatesFilter<"StudentPointsHistory"> | string
    sourceDescription?: StringWithAggregatesFilter<"StudentPointsHistory"> | string
    academicYear?: StringWithAggregatesFilter<"StudentPointsHistory"> | string
    semester?: IntWithAggregatesFilter<"StudentPointsHistory"> | number
    recordedBy?: StringWithAggregatesFilter<"StudentPointsHistory"> | string
    recordedAt?: DateTimeWithAggregatesFilter<"StudentPointsHistory"> | Date | string
  }

  export type AcademicYearWhereInput = {
    AND?: AcademicYearWhereInput | AcademicYearWhereInput[]
    OR?: AcademicYearWhereInput[]
    NOT?: AcademicYearWhereInput | AcademicYearWhereInput[]
    id?: StringFilter<"AcademicYear"> | string
    year?: StringFilter<"AcademicYear"> | string
    startDate?: DateTimeFilter<"AcademicYear"> | Date | string
    endDate?: DateTimeFilter<"AcademicYear"> | Date | string
    semester1Start?: DateTimeFilter<"AcademicYear"> | Date | string
    semester1End?: DateTimeFilter<"AcademicYear"> | Date | string
    semester2Start?: DateTimeFilter<"AcademicYear"> | Date | string
    semester2End?: DateTimeFilter<"AcademicYear"> | Date | string
    isActive?: BoolFilter<"AcademicYear"> | boolean
    createdAt?: DateTimeFilter<"AcademicYear"> | Date | string
    updatedAt?: DateTimeFilter<"AcademicYear"> | Date | string
  }

  export type AcademicYearOrderByWithRelationInput = {
    id?: SortOrder
    year?: SortOrder
    startDate?: SortOrder
    endDate?: SortOrder
    semester1Start?: SortOrder
    semester1End?: SortOrder
    semester2Start?: SortOrder
    semester2End?: SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type AcademicYearWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    year?: string
    AND?: AcademicYearWhereInput | AcademicYearWhereInput[]
    OR?: AcademicYearWhereInput[]
    NOT?: AcademicYearWhereInput | AcademicYearWhereInput[]
    startDate?: DateTimeFilter<"AcademicYear"> | Date | string
    endDate?: DateTimeFilter<"AcademicYear"> | Date | string
    semester1Start?: DateTimeFilter<"AcademicYear"> | Date | string
    semester1End?: DateTimeFilter<"AcademicYear"> | Date | string
    semester2Start?: DateTimeFilter<"AcademicYear"> | Date | string
    semester2End?: DateTimeFilter<"AcademicYear"> | Date | string
    isActive?: BoolFilter<"AcademicYear"> | boolean
    createdAt?: DateTimeFilter<"AcademicYear"> | Date | string
    updatedAt?: DateTimeFilter<"AcademicYear"> | Date | string
  }, "id" | "year">

  export type AcademicYearOrderByWithAggregationInput = {
    id?: SortOrder
    year?: SortOrder
    startDate?: SortOrder
    endDate?: SortOrder
    semester1Start?: SortOrder
    semester1End?: SortOrder
    semester2Start?: SortOrder
    semester2End?: SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: AcademicYearCountOrderByAggregateInput
    _max?: AcademicYearMaxOrderByAggregateInput
    _min?: AcademicYearMinOrderByAggregateInput
  }

  export type AcademicYearScalarWhereWithAggregatesInput = {
    AND?: AcademicYearScalarWhereWithAggregatesInput | AcademicYearScalarWhereWithAggregatesInput[]
    OR?: AcademicYearScalarWhereWithAggregatesInput[]
    NOT?: AcademicYearScalarWhereWithAggregatesInput | AcademicYearScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"AcademicYear"> | string
    year?: StringWithAggregatesFilter<"AcademicYear"> | string
    startDate?: DateTimeWithAggregatesFilter<"AcademicYear"> | Date | string
    endDate?: DateTimeWithAggregatesFilter<"AcademicYear"> | Date | string
    semester1Start?: DateTimeWithAggregatesFilter<"AcademicYear"> | Date | string
    semester1End?: DateTimeWithAggregatesFilter<"AcademicYear"> | Date | string
    semester2Start?: DateTimeWithAggregatesFilter<"AcademicYear"> | Date | string
    semester2End?: DateTimeWithAggregatesFilter<"AcademicYear"> | Date | string
    isActive?: BoolWithAggregatesFilter<"AcademicYear"> | boolean
    createdAt?: DateTimeWithAggregatesFilter<"AcademicYear"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"AcademicYear"> | Date | string
  }

  export type StudentCreateInput = {
    id?: string
    userId?: string | null
    nisn: string
    nis?: string | null
    name: string
    nickname?: string | null
    className: string
    classLevel: string
    classMajor?: string | null
    gender: $Enums.Gender
    birthPlace: string
    birthDate: Date | string
    religion: $Enums.Religion
    bloodType?: $Enums.BloodType | null
    address: string
    rt?: string | null
    rw?: string | null
    village?: string | null
    district?: string | null
    city: string
    province: string
    postalCode?: string | null
    phone?: string | null
    email?: string | null
    photoUrl?: string | null
    parentId?: string | null
    fatherName?: string | null
    fatherOccupation?: string | null
    fatherPhone?: string | null
    motherName?: string | null
    motherOccupation?: string | null
    motherPhone?: string | null
    guardianName?: string | null
    guardianRelation?: string | null
    guardianPhone?: string | null
    waliKelasId?: string | null
    waliKelasName?: string | null
    totalPoints?: number
    positivePoints?: number
    negativePoints?: number
    currentRank?: number | null
    academicYear: string
    entryYear: string
    entryDate: Date | string
    status?: $Enums.StudentStatus
    statusReason?: string | null
    graduationYear?: string | null
    birthCertificateUrl?: string | null
    familyCardUrl?: string | null
    photoCardUrl?: string | null
    isActive?: boolean
    lastSyncedAt?: Date | string | null
    createdBy: string
    createdAt?: Date | string
    updatedBy?: string | null
    updatedAt?: Date | string
    deletedAt?: Date | string | null
    deletedBy?: string | null
    class: ClassCreateNestedOneWithoutStudentsInput
    pointsHistory?: StudentPointsHistoryCreateNestedManyWithoutStudentInput
  }

  export type StudentUncheckedCreateInput = {
    id?: string
    userId?: string | null
    nisn: string
    nis?: string | null
    name: string
    nickname?: string | null
    classId: string
    className: string
    classLevel: string
    classMajor?: string | null
    gender: $Enums.Gender
    birthPlace: string
    birthDate: Date | string
    religion: $Enums.Religion
    bloodType?: $Enums.BloodType | null
    address: string
    rt?: string | null
    rw?: string | null
    village?: string | null
    district?: string | null
    city: string
    province: string
    postalCode?: string | null
    phone?: string | null
    email?: string | null
    photoUrl?: string | null
    parentId?: string | null
    fatherName?: string | null
    fatherOccupation?: string | null
    fatherPhone?: string | null
    motherName?: string | null
    motherOccupation?: string | null
    motherPhone?: string | null
    guardianName?: string | null
    guardianRelation?: string | null
    guardianPhone?: string | null
    waliKelasId?: string | null
    waliKelasName?: string | null
    totalPoints?: number
    positivePoints?: number
    negativePoints?: number
    currentRank?: number | null
    academicYear: string
    entryYear: string
    entryDate: Date | string
    status?: $Enums.StudentStatus
    statusReason?: string | null
    graduationYear?: string | null
    birthCertificateUrl?: string | null
    familyCardUrl?: string | null
    photoCardUrl?: string | null
    isActive?: boolean
    lastSyncedAt?: Date | string | null
    createdBy: string
    createdAt?: Date | string
    updatedBy?: string | null
    updatedAt?: Date | string
    deletedAt?: Date | string | null
    deletedBy?: string | null
    pointsHistory?: StudentPointsHistoryUncheckedCreateNestedManyWithoutStudentInput
  }

  export type StudentUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: NullableStringFieldUpdateOperationsInput | string | null
    nisn?: StringFieldUpdateOperationsInput | string
    nis?: NullableStringFieldUpdateOperationsInput | string | null
    name?: StringFieldUpdateOperationsInput | string
    nickname?: NullableStringFieldUpdateOperationsInput | string | null
    className?: StringFieldUpdateOperationsInput | string
    classLevel?: StringFieldUpdateOperationsInput | string
    classMajor?: NullableStringFieldUpdateOperationsInput | string | null
    gender?: EnumGenderFieldUpdateOperationsInput | $Enums.Gender
    birthPlace?: StringFieldUpdateOperationsInput | string
    birthDate?: DateTimeFieldUpdateOperationsInput | Date | string
    religion?: EnumReligionFieldUpdateOperationsInput | $Enums.Religion
    bloodType?: NullableEnumBloodTypeFieldUpdateOperationsInput | $Enums.BloodType | null
    address?: StringFieldUpdateOperationsInput | string
    rt?: NullableStringFieldUpdateOperationsInput | string | null
    rw?: NullableStringFieldUpdateOperationsInput | string | null
    village?: NullableStringFieldUpdateOperationsInput | string | null
    district?: NullableStringFieldUpdateOperationsInput | string | null
    city?: StringFieldUpdateOperationsInput | string
    province?: StringFieldUpdateOperationsInput | string
    postalCode?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    photoUrl?: NullableStringFieldUpdateOperationsInput | string | null
    parentId?: NullableStringFieldUpdateOperationsInput | string | null
    fatherName?: NullableStringFieldUpdateOperationsInput | string | null
    fatherOccupation?: NullableStringFieldUpdateOperationsInput | string | null
    fatherPhone?: NullableStringFieldUpdateOperationsInput | string | null
    motherName?: NullableStringFieldUpdateOperationsInput | string | null
    motherOccupation?: NullableStringFieldUpdateOperationsInput | string | null
    motherPhone?: NullableStringFieldUpdateOperationsInput | string | null
    guardianName?: NullableStringFieldUpdateOperationsInput | string | null
    guardianRelation?: NullableStringFieldUpdateOperationsInput | string | null
    guardianPhone?: NullableStringFieldUpdateOperationsInput | string | null
    waliKelasId?: NullableStringFieldUpdateOperationsInput | string | null
    waliKelasName?: NullableStringFieldUpdateOperationsInput | string | null
    totalPoints?: IntFieldUpdateOperationsInput | number
    positivePoints?: IntFieldUpdateOperationsInput | number
    negativePoints?: IntFieldUpdateOperationsInput | number
    currentRank?: NullableIntFieldUpdateOperationsInput | number | null
    academicYear?: StringFieldUpdateOperationsInput | string
    entryYear?: StringFieldUpdateOperationsInput | string
    entryDate?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumStudentStatusFieldUpdateOperationsInput | $Enums.StudentStatus
    statusReason?: NullableStringFieldUpdateOperationsInput | string | null
    graduationYear?: NullableStringFieldUpdateOperationsInput | string | null
    birthCertificateUrl?: NullableStringFieldUpdateOperationsInput | string | null
    familyCardUrl?: NullableStringFieldUpdateOperationsInput | string | null
    photoCardUrl?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    lastSyncedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdBy?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedBy?: NullableStringFieldUpdateOperationsInput | string | null
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deletedBy?: NullableStringFieldUpdateOperationsInput | string | null
    class?: ClassUpdateOneRequiredWithoutStudentsNestedInput
    pointsHistory?: StudentPointsHistoryUpdateManyWithoutStudentNestedInput
  }

  export type StudentUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: NullableStringFieldUpdateOperationsInput | string | null
    nisn?: StringFieldUpdateOperationsInput | string
    nis?: NullableStringFieldUpdateOperationsInput | string | null
    name?: StringFieldUpdateOperationsInput | string
    nickname?: NullableStringFieldUpdateOperationsInput | string | null
    classId?: StringFieldUpdateOperationsInput | string
    className?: StringFieldUpdateOperationsInput | string
    classLevel?: StringFieldUpdateOperationsInput | string
    classMajor?: NullableStringFieldUpdateOperationsInput | string | null
    gender?: EnumGenderFieldUpdateOperationsInput | $Enums.Gender
    birthPlace?: StringFieldUpdateOperationsInput | string
    birthDate?: DateTimeFieldUpdateOperationsInput | Date | string
    religion?: EnumReligionFieldUpdateOperationsInput | $Enums.Religion
    bloodType?: NullableEnumBloodTypeFieldUpdateOperationsInput | $Enums.BloodType | null
    address?: StringFieldUpdateOperationsInput | string
    rt?: NullableStringFieldUpdateOperationsInput | string | null
    rw?: NullableStringFieldUpdateOperationsInput | string | null
    village?: NullableStringFieldUpdateOperationsInput | string | null
    district?: NullableStringFieldUpdateOperationsInput | string | null
    city?: StringFieldUpdateOperationsInput | string
    province?: StringFieldUpdateOperationsInput | string
    postalCode?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    photoUrl?: NullableStringFieldUpdateOperationsInput | string | null
    parentId?: NullableStringFieldUpdateOperationsInput | string | null
    fatherName?: NullableStringFieldUpdateOperationsInput | string | null
    fatherOccupation?: NullableStringFieldUpdateOperationsInput | string | null
    fatherPhone?: NullableStringFieldUpdateOperationsInput | string | null
    motherName?: NullableStringFieldUpdateOperationsInput | string | null
    motherOccupation?: NullableStringFieldUpdateOperationsInput | string | null
    motherPhone?: NullableStringFieldUpdateOperationsInput | string | null
    guardianName?: NullableStringFieldUpdateOperationsInput | string | null
    guardianRelation?: NullableStringFieldUpdateOperationsInput | string | null
    guardianPhone?: NullableStringFieldUpdateOperationsInput | string | null
    waliKelasId?: NullableStringFieldUpdateOperationsInput | string | null
    waliKelasName?: NullableStringFieldUpdateOperationsInput | string | null
    totalPoints?: IntFieldUpdateOperationsInput | number
    positivePoints?: IntFieldUpdateOperationsInput | number
    negativePoints?: IntFieldUpdateOperationsInput | number
    currentRank?: NullableIntFieldUpdateOperationsInput | number | null
    academicYear?: StringFieldUpdateOperationsInput | string
    entryYear?: StringFieldUpdateOperationsInput | string
    entryDate?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumStudentStatusFieldUpdateOperationsInput | $Enums.StudentStatus
    statusReason?: NullableStringFieldUpdateOperationsInput | string | null
    graduationYear?: NullableStringFieldUpdateOperationsInput | string | null
    birthCertificateUrl?: NullableStringFieldUpdateOperationsInput | string | null
    familyCardUrl?: NullableStringFieldUpdateOperationsInput | string | null
    photoCardUrl?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    lastSyncedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdBy?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedBy?: NullableStringFieldUpdateOperationsInput | string | null
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deletedBy?: NullableStringFieldUpdateOperationsInput | string | null
    pointsHistory?: StudentPointsHistoryUncheckedUpdateManyWithoutStudentNestedInput
  }

  export type StudentCreateManyInput = {
    id?: string
    userId?: string | null
    nisn: string
    nis?: string | null
    name: string
    nickname?: string | null
    classId: string
    className: string
    classLevel: string
    classMajor?: string | null
    gender: $Enums.Gender
    birthPlace: string
    birthDate: Date | string
    religion: $Enums.Religion
    bloodType?: $Enums.BloodType | null
    address: string
    rt?: string | null
    rw?: string | null
    village?: string | null
    district?: string | null
    city: string
    province: string
    postalCode?: string | null
    phone?: string | null
    email?: string | null
    photoUrl?: string | null
    parentId?: string | null
    fatherName?: string | null
    fatherOccupation?: string | null
    fatherPhone?: string | null
    motherName?: string | null
    motherOccupation?: string | null
    motherPhone?: string | null
    guardianName?: string | null
    guardianRelation?: string | null
    guardianPhone?: string | null
    waliKelasId?: string | null
    waliKelasName?: string | null
    totalPoints?: number
    positivePoints?: number
    negativePoints?: number
    currentRank?: number | null
    academicYear: string
    entryYear: string
    entryDate: Date | string
    status?: $Enums.StudentStatus
    statusReason?: string | null
    graduationYear?: string | null
    birthCertificateUrl?: string | null
    familyCardUrl?: string | null
    photoCardUrl?: string | null
    isActive?: boolean
    lastSyncedAt?: Date | string | null
    createdBy: string
    createdAt?: Date | string
    updatedBy?: string | null
    updatedAt?: Date | string
    deletedAt?: Date | string | null
    deletedBy?: string | null
  }

  export type StudentUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: NullableStringFieldUpdateOperationsInput | string | null
    nisn?: StringFieldUpdateOperationsInput | string
    nis?: NullableStringFieldUpdateOperationsInput | string | null
    name?: StringFieldUpdateOperationsInput | string
    nickname?: NullableStringFieldUpdateOperationsInput | string | null
    className?: StringFieldUpdateOperationsInput | string
    classLevel?: StringFieldUpdateOperationsInput | string
    classMajor?: NullableStringFieldUpdateOperationsInput | string | null
    gender?: EnumGenderFieldUpdateOperationsInput | $Enums.Gender
    birthPlace?: StringFieldUpdateOperationsInput | string
    birthDate?: DateTimeFieldUpdateOperationsInput | Date | string
    religion?: EnumReligionFieldUpdateOperationsInput | $Enums.Religion
    bloodType?: NullableEnumBloodTypeFieldUpdateOperationsInput | $Enums.BloodType | null
    address?: StringFieldUpdateOperationsInput | string
    rt?: NullableStringFieldUpdateOperationsInput | string | null
    rw?: NullableStringFieldUpdateOperationsInput | string | null
    village?: NullableStringFieldUpdateOperationsInput | string | null
    district?: NullableStringFieldUpdateOperationsInput | string | null
    city?: StringFieldUpdateOperationsInput | string
    province?: StringFieldUpdateOperationsInput | string
    postalCode?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    photoUrl?: NullableStringFieldUpdateOperationsInput | string | null
    parentId?: NullableStringFieldUpdateOperationsInput | string | null
    fatherName?: NullableStringFieldUpdateOperationsInput | string | null
    fatherOccupation?: NullableStringFieldUpdateOperationsInput | string | null
    fatherPhone?: NullableStringFieldUpdateOperationsInput | string | null
    motherName?: NullableStringFieldUpdateOperationsInput | string | null
    motherOccupation?: NullableStringFieldUpdateOperationsInput | string | null
    motherPhone?: NullableStringFieldUpdateOperationsInput | string | null
    guardianName?: NullableStringFieldUpdateOperationsInput | string | null
    guardianRelation?: NullableStringFieldUpdateOperationsInput | string | null
    guardianPhone?: NullableStringFieldUpdateOperationsInput | string | null
    waliKelasId?: NullableStringFieldUpdateOperationsInput | string | null
    waliKelasName?: NullableStringFieldUpdateOperationsInput | string | null
    totalPoints?: IntFieldUpdateOperationsInput | number
    positivePoints?: IntFieldUpdateOperationsInput | number
    negativePoints?: IntFieldUpdateOperationsInput | number
    currentRank?: NullableIntFieldUpdateOperationsInput | number | null
    academicYear?: StringFieldUpdateOperationsInput | string
    entryYear?: StringFieldUpdateOperationsInput | string
    entryDate?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumStudentStatusFieldUpdateOperationsInput | $Enums.StudentStatus
    statusReason?: NullableStringFieldUpdateOperationsInput | string | null
    graduationYear?: NullableStringFieldUpdateOperationsInput | string | null
    birthCertificateUrl?: NullableStringFieldUpdateOperationsInput | string | null
    familyCardUrl?: NullableStringFieldUpdateOperationsInput | string | null
    photoCardUrl?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    lastSyncedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdBy?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedBy?: NullableStringFieldUpdateOperationsInput | string | null
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deletedBy?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type StudentUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: NullableStringFieldUpdateOperationsInput | string | null
    nisn?: StringFieldUpdateOperationsInput | string
    nis?: NullableStringFieldUpdateOperationsInput | string | null
    name?: StringFieldUpdateOperationsInput | string
    nickname?: NullableStringFieldUpdateOperationsInput | string | null
    classId?: StringFieldUpdateOperationsInput | string
    className?: StringFieldUpdateOperationsInput | string
    classLevel?: StringFieldUpdateOperationsInput | string
    classMajor?: NullableStringFieldUpdateOperationsInput | string | null
    gender?: EnumGenderFieldUpdateOperationsInput | $Enums.Gender
    birthPlace?: StringFieldUpdateOperationsInput | string
    birthDate?: DateTimeFieldUpdateOperationsInput | Date | string
    religion?: EnumReligionFieldUpdateOperationsInput | $Enums.Religion
    bloodType?: NullableEnumBloodTypeFieldUpdateOperationsInput | $Enums.BloodType | null
    address?: StringFieldUpdateOperationsInput | string
    rt?: NullableStringFieldUpdateOperationsInput | string | null
    rw?: NullableStringFieldUpdateOperationsInput | string | null
    village?: NullableStringFieldUpdateOperationsInput | string | null
    district?: NullableStringFieldUpdateOperationsInput | string | null
    city?: StringFieldUpdateOperationsInput | string
    province?: StringFieldUpdateOperationsInput | string
    postalCode?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    photoUrl?: NullableStringFieldUpdateOperationsInput | string | null
    parentId?: NullableStringFieldUpdateOperationsInput | string | null
    fatherName?: NullableStringFieldUpdateOperationsInput | string | null
    fatherOccupation?: NullableStringFieldUpdateOperationsInput | string | null
    fatherPhone?: NullableStringFieldUpdateOperationsInput | string | null
    motherName?: NullableStringFieldUpdateOperationsInput | string | null
    motherOccupation?: NullableStringFieldUpdateOperationsInput | string | null
    motherPhone?: NullableStringFieldUpdateOperationsInput | string | null
    guardianName?: NullableStringFieldUpdateOperationsInput | string | null
    guardianRelation?: NullableStringFieldUpdateOperationsInput | string | null
    guardianPhone?: NullableStringFieldUpdateOperationsInput | string | null
    waliKelasId?: NullableStringFieldUpdateOperationsInput | string | null
    waliKelasName?: NullableStringFieldUpdateOperationsInput | string | null
    totalPoints?: IntFieldUpdateOperationsInput | number
    positivePoints?: IntFieldUpdateOperationsInput | number
    negativePoints?: IntFieldUpdateOperationsInput | number
    currentRank?: NullableIntFieldUpdateOperationsInput | number | null
    academicYear?: StringFieldUpdateOperationsInput | string
    entryYear?: StringFieldUpdateOperationsInput | string
    entryDate?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumStudentStatusFieldUpdateOperationsInput | $Enums.StudentStatus
    statusReason?: NullableStringFieldUpdateOperationsInput | string | null
    graduationYear?: NullableStringFieldUpdateOperationsInput | string | null
    birthCertificateUrl?: NullableStringFieldUpdateOperationsInput | string | null
    familyCardUrl?: NullableStringFieldUpdateOperationsInput | string | null
    photoCardUrl?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    lastSyncedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdBy?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedBy?: NullableStringFieldUpdateOperationsInput | string | null
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deletedBy?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type ClassCreateInput = {
    id?: string
    code: string
    name: string
    level: string
    major?: string | null
    waliKelasId?: string | null
    waliKelasName?: string | null
    capacity?: number
    currentTotal?: number
    academicYear: string
    roomNumber?: string | null
    floor?: string | null
    building?: string | null
    scheduleUrl?: string | null
    isActive?: boolean
    createdBy: string
    createdAt?: Date | string
    updatedBy?: string | null
    updatedAt?: Date | string
    deletedAt?: Date | string | null
    students?: StudentCreateNestedManyWithoutClassInput
  }

  export type ClassUncheckedCreateInput = {
    id?: string
    code: string
    name: string
    level: string
    major?: string | null
    waliKelasId?: string | null
    waliKelasName?: string | null
    capacity?: number
    currentTotal?: number
    academicYear: string
    roomNumber?: string | null
    floor?: string | null
    building?: string | null
    scheduleUrl?: string | null
    isActive?: boolean
    createdBy: string
    createdAt?: Date | string
    updatedBy?: string | null
    updatedAt?: Date | string
    deletedAt?: Date | string | null
    students?: StudentUncheckedCreateNestedManyWithoutClassInput
  }

  export type ClassUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    code?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    level?: StringFieldUpdateOperationsInput | string
    major?: NullableStringFieldUpdateOperationsInput | string | null
    waliKelasId?: NullableStringFieldUpdateOperationsInput | string | null
    waliKelasName?: NullableStringFieldUpdateOperationsInput | string | null
    capacity?: IntFieldUpdateOperationsInput | number
    currentTotal?: IntFieldUpdateOperationsInput | number
    academicYear?: StringFieldUpdateOperationsInput | string
    roomNumber?: NullableStringFieldUpdateOperationsInput | string | null
    floor?: NullableStringFieldUpdateOperationsInput | string | null
    building?: NullableStringFieldUpdateOperationsInput | string | null
    scheduleUrl?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdBy?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedBy?: NullableStringFieldUpdateOperationsInput | string | null
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    students?: StudentUpdateManyWithoutClassNestedInput
  }

  export type ClassUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    code?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    level?: StringFieldUpdateOperationsInput | string
    major?: NullableStringFieldUpdateOperationsInput | string | null
    waliKelasId?: NullableStringFieldUpdateOperationsInput | string | null
    waliKelasName?: NullableStringFieldUpdateOperationsInput | string | null
    capacity?: IntFieldUpdateOperationsInput | number
    currentTotal?: IntFieldUpdateOperationsInput | number
    academicYear?: StringFieldUpdateOperationsInput | string
    roomNumber?: NullableStringFieldUpdateOperationsInput | string | null
    floor?: NullableStringFieldUpdateOperationsInput | string | null
    building?: NullableStringFieldUpdateOperationsInput | string | null
    scheduleUrl?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdBy?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedBy?: NullableStringFieldUpdateOperationsInput | string | null
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    students?: StudentUncheckedUpdateManyWithoutClassNestedInput
  }

  export type ClassCreateManyInput = {
    id?: string
    code: string
    name: string
    level: string
    major?: string | null
    waliKelasId?: string | null
    waliKelasName?: string | null
    capacity?: number
    currentTotal?: number
    academicYear: string
    roomNumber?: string | null
    floor?: string | null
    building?: string | null
    scheduleUrl?: string | null
    isActive?: boolean
    createdBy: string
    createdAt?: Date | string
    updatedBy?: string | null
    updatedAt?: Date | string
    deletedAt?: Date | string | null
  }

  export type ClassUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    code?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    level?: StringFieldUpdateOperationsInput | string
    major?: NullableStringFieldUpdateOperationsInput | string | null
    waliKelasId?: NullableStringFieldUpdateOperationsInput | string | null
    waliKelasName?: NullableStringFieldUpdateOperationsInput | string | null
    capacity?: IntFieldUpdateOperationsInput | number
    currentTotal?: IntFieldUpdateOperationsInput | number
    academicYear?: StringFieldUpdateOperationsInput | string
    roomNumber?: NullableStringFieldUpdateOperationsInput | string | null
    floor?: NullableStringFieldUpdateOperationsInput | string | null
    building?: NullableStringFieldUpdateOperationsInput | string | null
    scheduleUrl?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdBy?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedBy?: NullableStringFieldUpdateOperationsInput | string | null
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type ClassUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    code?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    level?: StringFieldUpdateOperationsInput | string
    major?: NullableStringFieldUpdateOperationsInput | string | null
    waliKelasId?: NullableStringFieldUpdateOperationsInput | string | null
    waliKelasName?: NullableStringFieldUpdateOperationsInput | string | null
    capacity?: IntFieldUpdateOperationsInput | number
    currentTotal?: IntFieldUpdateOperationsInput | number
    academicYear?: StringFieldUpdateOperationsInput | string
    roomNumber?: NullableStringFieldUpdateOperationsInput | string | null
    floor?: NullableStringFieldUpdateOperationsInput | string | null
    building?: NullableStringFieldUpdateOperationsInput | string | null
    scheduleUrl?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdBy?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedBy?: NullableStringFieldUpdateOperationsInput | string | null
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type StudentPointsHistoryCreateInput = {
    id?: string
    studentName: string
    previousTotal: number
    pointsChange: number
    newTotal: number
    sourceType: $Enums.PointSourceType
    sourceId: string
    sourceDescription: string
    academicYear: string
    semester: number
    recordedBy: string
    recordedAt?: Date | string
    student: StudentCreateNestedOneWithoutPointsHistoryInput
  }

  export type StudentPointsHistoryUncheckedCreateInput = {
    id?: string
    studentId: string
    studentName: string
    previousTotal: number
    pointsChange: number
    newTotal: number
    sourceType: $Enums.PointSourceType
    sourceId: string
    sourceDescription: string
    academicYear: string
    semester: number
    recordedBy: string
    recordedAt?: Date | string
  }

  export type StudentPointsHistoryUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    studentName?: StringFieldUpdateOperationsInput | string
    previousTotal?: IntFieldUpdateOperationsInput | number
    pointsChange?: IntFieldUpdateOperationsInput | number
    newTotal?: IntFieldUpdateOperationsInput | number
    sourceType?: EnumPointSourceTypeFieldUpdateOperationsInput | $Enums.PointSourceType
    sourceId?: StringFieldUpdateOperationsInput | string
    sourceDescription?: StringFieldUpdateOperationsInput | string
    academicYear?: StringFieldUpdateOperationsInput | string
    semester?: IntFieldUpdateOperationsInput | number
    recordedBy?: StringFieldUpdateOperationsInput | string
    recordedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    student?: StudentUpdateOneRequiredWithoutPointsHistoryNestedInput
  }

  export type StudentPointsHistoryUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    studentId?: StringFieldUpdateOperationsInput | string
    studentName?: StringFieldUpdateOperationsInput | string
    previousTotal?: IntFieldUpdateOperationsInput | number
    pointsChange?: IntFieldUpdateOperationsInput | number
    newTotal?: IntFieldUpdateOperationsInput | number
    sourceType?: EnumPointSourceTypeFieldUpdateOperationsInput | $Enums.PointSourceType
    sourceId?: StringFieldUpdateOperationsInput | string
    sourceDescription?: StringFieldUpdateOperationsInput | string
    academicYear?: StringFieldUpdateOperationsInput | string
    semester?: IntFieldUpdateOperationsInput | number
    recordedBy?: StringFieldUpdateOperationsInput | string
    recordedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type StudentPointsHistoryCreateManyInput = {
    id?: string
    studentId: string
    studentName: string
    previousTotal: number
    pointsChange: number
    newTotal: number
    sourceType: $Enums.PointSourceType
    sourceId: string
    sourceDescription: string
    academicYear: string
    semester: number
    recordedBy: string
    recordedAt?: Date | string
  }

  export type StudentPointsHistoryUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    studentName?: StringFieldUpdateOperationsInput | string
    previousTotal?: IntFieldUpdateOperationsInput | number
    pointsChange?: IntFieldUpdateOperationsInput | number
    newTotal?: IntFieldUpdateOperationsInput | number
    sourceType?: EnumPointSourceTypeFieldUpdateOperationsInput | $Enums.PointSourceType
    sourceId?: StringFieldUpdateOperationsInput | string
    sourceDescription?: StringFieldUpdateOperationsInput | string
    academicYear?: StringFieldUpdateOperationsInput | string
    semester?: IntFieldUpdateOperationsInput | number
    recordedBy?: StringFieldUpdateOperationsInput | string
    recordedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type StudentPointsHistoryUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    studentId?: StringFieldUpdateOperationsInput | string
    studentName?: StringFieldUpdateOperationsInput | string
    previousTotal?: IntFieldUpdateOperationsInput | number
    pointsChange?: IntFieldUpdateOperationsInput | number
    newTotal?: IntFieldUpdateOperationsInput | number
    sourceType?: EnumPointSourceTypeFieldUpdateOperationsInput | $Enums.PointSourceType
    sourceId?: StringFieldUpdateOperationsInput | string
    sourceDescription?: StringFieldUpdateOperationsInput | string
    academicYear?: StringFieldUpdateOperationsInput | string
    semester?: IntFieldUpdateOperationsInput | number
    recordedBy?: StringFieldUpdateOperationsInput | string
    recordedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AcademicYearCreateInput = {
    id?: string
    year: string
    startDate: Date | string
    endDate: Date | string
    semester1Start: Date | string
    semester1End: Date | string
    semester2Start: Date | string
    semester2End: Date | string
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type AcademicYearUncheckedCreateInput = {
    id?: string
    year: string
    startDate: Date | string
    endDate: Date | string
    semester1Start: Date | string
    semester1End: Date | string
    semester2Start: Date | string
    semester2End: Date | string
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type AcademicYearUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    year?: StringFieldUpdateOperationsInput | string
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: DateTimeFieldUpdateOperationsInput | Date | string
    semester1Start?: DateTimeFieldUpdateOperationsInput | Date | string
    semester1End?: DateTimeFieldUpdateOperationsInput | Date | string
    semester2Start?: DateTimeFieldUpdateOperationsInput | Date | string
    semester2End?: DateTimeFieldUpdateOperationsInput | Date | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AcademicYearUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    year?: StringFieldUpdateOperationsInput | string
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: DateTimeFieldUpdateOperationsInput | Date | string
    semester1Start?: DateTimeFieldUpdateOperationsInput | Date | string
    semester1End?: DateTimeFieldUpdateOperationsInput | Date | string
    semester2Start?: DateTimeFieldUpdateOperationsInput | Date | string
    semester2End?: DateTimeFieldUpdateOperationsInput | Date | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AcademicYearCreateManyInput = {
    id?: string
    year: string
    startDate: Date | string
    endDate: Date | string
    semester1Start: Date | string
    semester1End: Date | string
    semester2Start: Date | string
    semester2End: Date | string
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type AcademicYearUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    year?: StringFieldUpdateOperationsInput | string
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: DateTimeFieldUpdateOperationsInput | Date | string
    semester1Start?: DateTimeFieldUpdateOperationsInput | Date | string
    semester1End?: DateTimeFieldUpdateOperationsInput | Date | string
    semester2Start?: DateTimeFieldUpdateOperationsInput | Date | string
    semester2End?: DateTimeFieldUpdateOperationsInput | Date | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AcademicYearUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    year?: StringFieldUpdateOperationsInput | string
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: DateTimeFieldUpdateOperationsInput | Date | string
    semester1Start?: DateTimeFieldUpdateOperationsInput | Date | string
    semester1End?: DateTimeFieldUpdateOperationsInput | Date | string
    semester2Start?: DateTimeFieldUpdateOperationsInput | Date | string
    semester2End?: DateTimeFieldUpdateOperationsInput | Date | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
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

  export type EnumGenderFilter<$PrismaModel = never> = {
    equals?: $Enums.Gender | EnumGenderFieldRefInput<$PrismaModel>
    in?: $Enums.Gender[] | ListEnumGenderFieldRefInput<$PrismaModel>
    notIn?: $Enums.Gender[] | ListEnumGenderFieldRefInput<$PrismaModel>
    not?: NestedEnumGenderFilter<$PrismaModel> | $Enums.Gender
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

  export type EnumReligionFilter<$PrismaModel = never> = {
    equals?: $Enums.Religion | EnumReligionFieldRefInput<$PrismaModel>
    in?: $Enums.Religion[] | ListEnumReligionFieldRefInput<$PrismaModel>
    notIn?: $Enums.Religion[] | ListEnumReligionFieldRefInput<$PrismaModel>
    not?: NestedEnumReligionFilter<$PrismaModel> | $Enums.Religion
  }

  export type EnumBloodTypeNullableFilter<$PrismaModel = never> = {
    equals?: $Enums.BloodType | EnumBloodTypeFieldRefInput<$PrismaModel> | null
    in?: $Enums.BloodType[] | ListEnumBloodTypeFieldRefInput<$PrismaModel> | null
    notIn?: $Enums.BloodType[] | ListEnumBloodTypeFieldRefInput<$PrismaModel> | null
    not?: NestedEnumBloodTypeNullableFilter<$PrismaModel> | $Enums.BloodType | null
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

  export type EnumStudentStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.StudentStatus | EnumStudentStatusFieldRefInput<$PrismaModel>
    in?: $Enums.StudentStatus[] | ListEnumStudentStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.StudentStatus[] | ListEnumStudentStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumStudentStatusFilter<$PrismaModel> | $Enums.StudentStatus
  }

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
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

  export type ClassRelationFilter = {
    is?: ClassWhereInput
    isNot?: ClassWhereInput
  }

  export type StudentPointsHistoryListRelationFilter = {
    every?: StudentPointsHistoryWhereInput
    some?: StudentPointsHistoryWhereInput
    none?: StudentPointsHistoryWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type StudentPointsHistoryOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type StudentCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    nisn?: SortOrder
    nis?: SortOrder
    name?: SortOrder
    nickname?: SortOrder
    classId?: SortOrder
    className?: SortOrder
    classLevel?: SortOrder
    classMajor?: SortOrder
    gender?: SortOrder
    birthPlace?: SortOrder
    birthDate?: SortOrder
    religion?: SortOrder
    bloodType?: SortOrder
    address?: SortOrder
    rt?: SortOrder
    rw?: SortOrder
    village?: SortOrder
    district?: SortOrder
    city?: SortOrder
    province?: SortOrder
    postalCode?: SortOrder
    phone?: SortOrder
    email?: SortOrder
    photoUrl?: SortOrder
    parentId?: SortOrder
    fatherName?: SortOrder
    fatherOccupation?: SortOrder
    fatherPhone?: SortOrder
    motherName?: SortOrder
    motherOccupation?: SortOrder
    motherPhone?: SortOrder
    guardianName?: SortOrder
    guardianRelation?: SortOrder
    guardianPhone?: SortOrder
    waliKelasId?: SortOrder
    waliKelasName?: SortOrder
    totalPoints?: SortOrder
    positivePoints?: SortOrder
    negativePoints?: SortOrder
    currentRank?: SortOrder
    academicYear?: SortOrder
    entryYear?: SortOrder
    entryDate?: SortOrder
    status?: SortOrder
    statusReason?: SortOrder
    graduationYear?: SortOrder
    birthCertificateUrl?: SortOrder
    familyCardUrl?: SortOrder
    photoCardUrl?: SortOrder
    isActive?: SortOrder
    lastSyncedAt?: SortOrder
    createdBy?: SortOrder
    createdAt?: SortOrder
    updatedBy?: SortOrder
    updatedAt?: SortOrder
    deletedAt?: SortOrder
    deletedBy?: SortOrder
  }

  export type StudentAvgOrderByAggregateInput = {
    totalPoints?: SortOrder
    positivePoints?: SortOrder
    negativePoints?: SortOrder
    currentRank?: SortOrder
  }

  export type StudentMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    nisn?: SortOrder
    nis?: SortOrder
    name?: SortOrder
    nickname?: SortOrder
    classId?: SortOrder
    className?: SortOrder
    classLevel?: SortOrder
    classMajor?: SortOrder
    gender?: SortOrder
    birthPlace?: SortOrder
    birthDate?: SortOrder
    religion?: SortOrder
    bloodType?: SortOrder
    address?: SortOrder
    rt?: SortOrder
    rw?: SortOrder
    village?: SortOrder
    district?: SortOrder
    city?: SortOrder
    province?: SortOrder
    postalCode?: SortOrder
    phone?: SortOrder
    email?: SortOrder
    photoUrl?: SortOrder
    parentId?: SortOrder
    fatherName?: SortOrder
    fatherOccupation?: SortOrder
    fatherPhone?: SortOrder
    motherName?: SortOrder
    motherOccupation?: SortOrder
    motherPhone?: SortOrder
    guardianName?: SortOrder
    guardianRelation?: SortOrder
    guardianPhone?: SortOrder
    waliKelasId?: SortOrder
    waliKelasName?: SortOrder
    totalPoints?: SortOrder
    positivePoints?: SortOrder
    negativePoints?: SortOrder
    currentRank?: SortOrder
    academicYear?: SortOrder
    entryYear?: SortOrder
    entryDate?: SortOrder
    status?: SortOrder
    statusReason?: SortOrder
    graduationYear?: SortOrder
    birthCertificateUrl?: SortOrder
    familyCardUrl?: SortOrder
    photoCardUrl?: SortOrder
    isActive?: SortOrder
    lastSyncedAt?: SortOrder
    createdBy?: SortOrder
    createdAt?: SortOrder
    updatedBy?: SortOrder
    updatedAt?: SortOrder
    deletedAt?: SortOrder
    deletedBy?: SortOrder
  }

  export type StudentMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    nisn?: SortOrder
    nis?: SortOrder
    name?: SortOrder
    nickname?: SortOrder
    classId?: SortOrder
    className?: SortOrder
    classLevel?: SortOrder
    classMajor?: SortOrder
    gender?: SortOrder
    birthPlace?: SortOrder
    birthDate?: SortOrder
    religion?: SortOrder
    bloodType?: SortOrder
    address?: SortOrder
    rt?: SortOrder
    rw?: SortOrder
    village?: SortOrder
    district?: SortOrder
    city?: SortOrder
    province?: SortOrder
    postalCode?: SortOrder
    phone?: SortOrder
    email?: SortOrder
    photoUrl?: SortOrder
    parentId?: SortOrder
    fatherName?: SortOrder
    fatherOccupation?: SortOrder
    fatherPhone?: SortOrder
    motherName?: SortOrder
    motherOccupation?: SortOrder
    motherPhone?: SortOrder
    guardianName?: SortOrder
    guardianRelation?: SortOrder
    guardianPhone?: SortOrder
    waliKelasId?: SortOrder
    waliKelasName?: SortOrder
    totalPoints?: SortOrder
    positivePoints?: SortOrder
    negativePoints?: SortOrder
    currentRank?: SortOrder
    academicYear?: SortOrder
    entryYear?: SortOrder
    entryDate?: SortOrder
    status?: SortOrder
    statusReason?: SortOrder
    graduationYear?: SortOrder
    birthCertificateUrl?: SortOrder
    familyCardUrl?: SortOrder
    photoCardUrl?: SortOrder
    isActive?: SortOrder
    lastSyncedAt?: SortOrder
    createdBy?: SortOrder
    createdAt?: SortOrder
    updatedBy?: SortOrder
    updatedAt?: SortOrder
    deletedAt?: SortOrder
    deletedBy?: SortOrder
  }

  export type StudentSumOrderByAggregateInput = {
    totalPoints?: SortOrder
    positivePoints?: SortOrder
    negativePoints?: SortOrder
    currentRank?: SortOrder
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

  export type EnumGenderWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Gender | EnumGenderFieldRefInput<$PrismaModel>
    in?: $Enums.Gender[] | ListEnumGenderFieldRefInput<$PrismaModel>
    notIn?: $Enums.Gender[] | ListEnumGenderFieldRefInput<$PrismaModel>
    not?: NestedEnumGenderWithAggregatesFilter<$PrismaModel> | $Enums.Gender
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumGenderFilter<$PrismaModel>
    _max?: NestedEnumGenderFilter<$PrismaModel>
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

  export type EnumReligionWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Religion | EnumReligionFieldRefInput<$PrismaModel>
    in?: $Enums.Religion[] | ListEnumReligionFieldRefInput<$PrismaModel>
    notIn?: $Enums.Religion[] | ListEnumReligionFieldRefInput<$PrismaModel>
    not?: NestedEnumReligionWithAggregatesFilter<$PrismaModel> | $Enums.Religion
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumReligionFilter<$PrismaModel>
    _max?: NestedEnumReligionFilter<$PrismaModel>
  }

  export type EnumBloodTypeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.BloodType | EnumBloodTypeFieldRefInput<$PrismaModel> | null
    in?: $Enums.BloodType[] | ListEnumBloodTypeFieldRefInput<$PrismaModel> | null
    notIn?: $Enums.BloodType[] | ListEnumBloodTypeFieldRefInput<$PrismaModel> | null
    not?: NestedEnumBloodTypeNullableWithAggregatesFilter<$PrismaModel> | $Enums.BloodType | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedEnumBloodTypeNullableFilter<$PrismaModel>
    _max?: NestedEnumBloodTypeNullableFilter<$PrismaModel>
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

  export type EnumStudentStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.StudentStatus | EnumStudentStatusFieldRefInput<$PrismaModel>
    in?: $Enums.StudentStatus[] | ListEnumStudentStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.StudentStatus[] | ListEnumStudentStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumStudentStatusWithAggregatesFilter<$PrismaModel> | $Enums.StudentStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumStudentStatusFilter<$PrismaModel>
    _max?: NestedEnumStudentStatusFilter<$PrismaModel>
  }

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
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

  export type StudentListRelationFilter = {
    every?: StudentWhereInput
    some?: StudentWhereInput
    none?: StudentWhereInput
  }

  export type StudentOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ClassCodeAcademicYearCompoundUniqueInput = {
    code: string
    academicYear: string
  }

  export type ClassCountOrderByAggregateInput = {
    id?: SortOrder
    code?: SortOrder
    name?: SortOrder
    level?: SortOrder
    major?: SortOrder
    waliKelasId?: SortOrder
    waliKelasName?: SortOrder
    capacity?: SortOrder
    currentTotal?: SortOrder
    academicYear?: SortOrder
    roomNumber?: SortOrder
    floor?: SortOrder
    building?: SortOrder
    scheduleUrl?: SortOrder
    isActive?: SortOrder
    createdBy?: SortOrder
    createdAt?: SortOrder
    updatedBy?: SortOrder
    updatedAt?: SortOrder
    deletedAt?: SortOrder
  }

  export type ClassAvgOrderByAggregateInput = {
    capacity?: SortOrder
    currentTotal?: SortOrder
  }

  export type ClassMaxOrderByAggregateInput = {
    id?: SortOrder
    code?: SortOrder
    name?: SortOrder
    level?: SortOrder
    major?: SortOrder
    waliKelasId?: SortOrder
    waliKelasName?: SortOrder
    capacity?: SortOrder
    currentTotal?: SortOrder
    academicYear?: SortOrder
    roomNumber?: SortOrder
    floor?: SortOrder
    building?: SortOrder
    scheduleUrl?: SortOrder
    isActive?: SortOrder
    createdBy?: SortOrder
    createdAt?: SortOrder
    updatedBy?: SortOrder
    updatedAt?: SortOrder
    deletedAt?: SortOrder
  }

  export type ClassMinOrderByAggregateInput = {
    id?: SortOrder
    code?: SortOrder
    name?: SortOrder
    level?: SortOrder
    major?: SortOrder
    waliKelasId?: SortOrder
    waliKelasName?: SortOrder
    capacity?: SortOrder
    currentTotal?: SortOrder
    academicYear?: SortOrder
    roomNumber?: SortOrder
    floor?: SortOrder
    building?: SortOrder
    scheduleUrl?: SortOrder
    isActive?: SortOrder
    createdBy?: SortOrder
    createdAt?: SortOrder
    updatedBy?: SortOrder
    updatedAt?: SortOrder
    deletedAt?: SortOrder
  }

  export type ClassSumOrderByAggregateInput = {
    capacity?: SortOrder
    currentTotal?: SortOrder
  }

  export type EnumPointSourceTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.PointSourceType | EnumPointSourceTypeFieldRefInput<$PrismaModel>
    in?: $Enums.PointSourceType[] | ListEnumPointSourceTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.PointSourceType[] | ListEnumPointSourceTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumPointSourceTypeFilter<$PrismaModel> | $Enums.PointSourceType
  }

  export type StudentRelationFilter = {
    is?: StudentWhereInput
    isNot?: StudentWhereInput
  }

  export type StudentPointsHistoryCountOrderByAggregateInput = {
    id?: SortOrder
    studentId?: SortOrder
    studentName?: SortOrder
    previousTotal?: SortOrder
    pointsChange?: SortOrder
    newTotal?: SortOrder
    sourceType?: SortOrder
    sourceId?: SortOrder
    sourceDescription?: SortOrder
    academicYear?: SortOrder
    semester?: SortOrder
    recordedBy?: SortOrder
    recordedAt?: SortOrder
  }

  export type StudentPointsHistoryAvgOrderByAggregateInput = {
    previousTotal?: SortOrder
    pointsChange?: SortOrder
    newTotal?: SortOrder
    semester?: SortOrder
  }

  export type StudentPointsHistoryMaxOrderByAggregateInput = {
    id?: SortOrder
    studentId?: SortOrder
    studentName?: SortOrder
    previousTotal?: SortOrder
    pointsChange?: SortOrder
    newTotal?: SortOrder
    sourceType?: SortOrder
    sourceId?: SortOrder
    sourceDescription?: SortOrder
    academicYear?: SortOrder
    semester?: SortOrder
    recordedBy?: SortOrder
    recordedAt?: SortOrder
  }

  export type StudentPointsHistoryMinOrderByAggregateInput = {
    id?: SortOrder
    studentId?: SortOrder
    studentName?: SortOrder
    previousTotal?: SortOrder
    pointsChange?: SortOrder
    newTotal?: SortOrder
    sourceType?: SortOrder
    sourceId?: SortOrder
    sourceDescription?: SortOrder
    academicYear?: SortOrder
    semester?: SortOrder
    recordedBy?: SortOrder
    recordedAt?: SortOrder
  }

  export type StudentPointsHistorySumOrderByAggregateInput = {
    previousTotal?: SortOrder
    pointsChange?: SortOrder
    newTotal?: SortOrder
    semester?: SortOrder
  }

  export type EnumPointSourceTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.PointSourceType | EnumPointSourceTypeFieldRefInput<$PrismaModel>
    in?: $Enums.PointSourceType[] | ListEnumPointSourceTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.PointSourceType[] | ListEnumPointSourceTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumPointSourceTypeWithAggregatesFilter<$PrismaModel> | $Enums.PointSourceType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumPointSourceTypeFilter<$PrismaModel>
    _max?: NestedEnumPointSourceTypeFilter<$PrismaModel>
  }

  export type AcademicYearCountOrderByAggregateInput = {
    id?: SortOrder
    year?: SortOrder
    startDate?: SortOrder
    endDate?: SortOrder
    semester1Start?: SortOrder
    semester1End?: SortOrder
    semester2Start?: SortOrder
    semester2End?: SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type AcademicYearMaxOrderByAggregateInput = {
    id?: SortOrder
    year?: SortOrder
    startDate?: SortOrder
    endDate?: SortOrder
    semester1Start?: SortOrder
    semester1End?: SortOrder
    semester2Start?: SortOrder
    semester2End?: SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type AcademicYearMinOrderByAggregateInput = {
    id?: SortOrder
    year?: SortOrder
    startDate?: SortOrder
    endDate?: SortOrder
    semester1Start?: SortOrder
    semester1End?: SortOrder
    semester2Start?: SortOrder
    semester2End?: SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ClassCreateNestedOneWithoutStudentsInput = {
    create?: XOR<ClassCreateWithoutStudentsInput, ClassUncheckedCreateWithoutStudentsInput>
    connectOrCreate?: ClassCreateOrConnectWithoutStudentsInput
    connect?: ClassWhereUniqueInput
  }

  export type StudentPointsHistoryCreateNestedManyWithoutStudentInput = {
    create?: XOR<StudentPointsHistoryCreateWithoutStudentInput, StudentPointsHistoryUncheckedCreateWithoutStudentInput> | StudentPointsHistoryCreateWithoutStudentInput[] | StudentPointsHistoryUncheckedCreateWithoutStudentInput[]
    connectOrCreate?: StudentPointsHistoryCreateOrConnectWithoutStudentInput | StudentPointsHistoryCreateOrConnectWithoutStudentInput[]
    createMany?: StudentPointsHistoryCreateManyStudentInputEnvelope
    connect?: StudentPointsHistoryWhereUniqueInput | StudentPointsHistoryWhereUniqueInput[]
  }

  export type StudentPointsHistoryUncheckedCreateNestedManyWithoutStudentInput = {
    create?: XOR<StudentPointsHistoryCreateWithoutStudentInput, StudentPointsHistoryUncheckedCreateWithoutStudentInput> | StudentPointsHistoryCreateWithoutStudentInput[] | StudentPointsHistoryUncheckedCreateWithoutStudentInput[]
    connectOrCreate?: StudentPointsHistoryCreateOrConnectWithoutStudentInput | StudentPointsHistoryCreateOrConnectWithoutStudentInput[]
    createMany?: StudentPointsHistoryCreateManyStudentInputEnvelope
    connect?: StudentPointsHistoryWhereUniqueInput | StudentPointsHistoryWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type EnumGenderFieldUpdateOperationsInput = {
    set?: $Enums.Gender
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type EnumReligionFieldUpdateOperationsInput = {
    set?: $Enums.Religion
  }

  export type NullableEnumBloodTypeFieldUpdateOperationsInput = {
    set?: $Enums.BloodType | null
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type NullableIntFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type EnumStudentStatusFieldUpdateOperationsInput = {
    set?: $Enums.StudentStatus
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
  }

  export type ClassUpdateOneRequiredWithoutStudentsNestedInput = {
    create?: XOR<ClassCreateWithoutStudentsInput, ClassUncheckedCreateWithoutStudentsInput>
    connectOrCreate?: ClassCreateOrConnectWithoutStudentsInput
    upsert?: ClassUpsertWithoutStudentsInput
    connect?: ClassWhereUniqueInput
    update?: XOR<XOR<ClassUpdateToOneWithWhereWithoutStudentsInput, ClassUpdateWithoutStudentsInput>, ClassUncheckedUpdateWithoutStudentsInput>
  }

  export type StudentPointsHistoryUpdateManyWithoutStudentNestedInput = {
    create?: XOR<StudentPointsHistoryCreateWithoutStudentInput, StudentPointsHistoryUncheckedCreateWithoutStudentInput> | StudentPointsHistoryCreateWithoutStudentInput[] | StudentPointsHistoryUncheckedCreateWithoutStudentInput[]
    connectOrCreate?: StudentPointsHistoryCreateOrConnectWithoutStudentInput | StudentPointsHistoryCreateOrConnectWithoutStudentInput[]
    upsert?: StudentPointsHistoryUpsertWithWhereUniqueWithoutStudentInput | StudentPointsHistoryUpsertWithWhereUniqueWithoutStudentInput[]
    createMany?: StudentPointsHistoryCreateManyStudentInputEnvelope
    set?: StudentPointsHistoryWhereUniqueInput | StudentPointsHistoryWhereUniqueInput[]
    disconnect?: StudentPointsHistoryWhereUniqueInput | StudentPointsHistoryWhereUniqueInput[]
    delete?: StudentPointsHistoryWhereUniqueInput | StudentPointsHistoryWhereUniqueInput[]
    connect?: StudentPointsHistoryWhereUniqueInput | StudentPointsHistoryWhereUniqueInput[]
    update?: StudentPointsHistoryUpdateWithWhereUniqueWithoutStudentInput | StudentPointsHistoryUpdateWithWhereUniqueWithoutStudentInput[]
    updateMany?: StudentPointsHistoryUpdateManyWithWhereWithoutStudentInput | StudentPointsHistoryUpdateManyWithWhereWithoutStudentInput[]
    deleteMany?: StudentPointsHistoryScalarWhereInput | StudentPointsHistoryScalarWhereInput[]
  }

  export type StudentPointsHistoryUncheckedUpdateManyWithoutStudentNestedInput = {
    create?: XOR<StudentPointsHistoryCreateWithoutStudentInput, StudentPointsHistoryUncheckedCreateWithoutStudentInput> | StudentPointsHistoryCreateWithoutStudentInput[] | StudentPointsHistoryUncheckedCreateWithoutStudentInput[]
    connectOrCreate?: StudentPointsHistoryCreateOrConnectWithoutStudentInput | StudentPointsHistoryCreateOrConnectWithoutStudentInput[]
    upsert?: StudentPointsHistoryUpsertWithWhereUniqueWithoutStudentInput | StudentPointsHistoryUpsertWithWhereUniqueWithoutStudentInput[]
    createMany?: StudentPointsHistoryCreateManyStudentInputEnvelope
    set?: StudentPointsHistoryWhereUniqueInput | StudentPointsHistoryWhereUniqueInput[]
    disconnect?: StudentPointsHistoryWhereUniqueInput | StudentPointsHistoryWhereUniqueInput[]
    delete?: StudentPointsHistoryWhereUniqueInput | StudentPointsHistoryWhereUniqueInput[]
    connect?: StudentPointsHistoryWhereUniqueInput | StudentPointsHistoryWhereUniqueInput[]
    update?: StudentPointsHistoryUpdateWithWhereUniqueWithoutStudentInput | StudentPointsHistoryUpdateWithWhereUniqueWithoutStudentInput[]
    updateMany?: StudentPointsHistoryUpdateManyWithWhereWithoutStudentInput | StudentPointsHistoryUpdateManyWithWhereWithoutStudentInput[]
    deleteMany?: StudentPointsHistoryScalarWhereInput | StudentPointsHistoryScalarWhereInput[]
  }

  export type StudentCreateNestedManyWithoutClassInput = {
    create?: XOR<StudentCreateWithoutClassInput, StudentUncheckedCreateWithoutClassInput> | StudentCreateWithoutClassInput[] | StudentUncheckedCreateWithoutClassInput[]
    connectOrCreate?: StudentCreateOrConnectWithoutClassInput | StudentCreateOrConnectWithoutClassInput[]
    createMany?: StudentCreateManyClassInputEnvelope
    connect?: StudentWhereUniqueInput | StudentWhereUniqueInput[]
  }

  export type StudentUncheckedCreateNestedManyWithoutClassInput = {
    create?: XOR<StudentCreateWithoutClassInput, StudentUncheckedCreateWithoutClassInput> | StudentCreateWithoutClassInput[] | StudentUncheckedCreateWithoutClassInput[]
    connectOrCreate?: StudentCreateOrConnectWithoutClassInput | StudentCreateOrConnectWithoutClassInput[]
    createMany?: StudentCreateManyClassInputEnvelope
    connect?: StudentWhereUniqueInput | StudentWhereUniqueInput[]
  }

  export type StudentUpdateManyWithoutClassNestedInput = {
    create?: XOR<StudentCreateWithoutClassInput, StudentUncheckedCreateWithoutClassInput> | StudentCreateWithoutClassInput[] | StudentUncheckedCreateWithoutClassInput[]
    connectOrCreate?: StudentCreateOrConnectWithoutClassInput | StudentCreateOrConnectWithoutClassInput[]
    upsert?: StudentUpsertWithWhereUniqueWithoutClassInput | StudentUpsertWithWhereUniqueWithoutClassInput[]
    createMany?: StudentCreateManyClassInputEnvelope
    set?: StudentWhereUniqueInput | StudentWhereUniqueInput[]
    disconnect?: StudentWhereUniqueInput | StudentWhereUniqueInput[]
    delete?: StudentWhereUniqueInput | StudentWhereUniqueInput[]
    connect?: StudentWhereUniqueInput | StudentWhereUniqueInput[]
    update?: StudentUpdateWithWhereUniqueWithoutClassInput | StudentUpdateWithWhereUniqueWithoutClassInput[]
    updateMany?: StudentUpdateManyWithWhereWithoutClassInput | StudentUpdateManyWithWhereWithoutClassInput[]
    deleteMany?: StudentScalarWhereInput | StudentScalarWhereInput[]
  }

  export type StudentUncheckedUpdateManyWithoutClassNestedInput = {
    create?: XOR<StudentCreateWithoutClassInput, StudentUncheckedCreateWithoutClassInput> | StudentCreateWithoutClassInput[] | StudentUncheckedCreateWithoutClassInput[]
    connectOrCreate?: StudentCreateOrConnectWithoutClassInput | StudentCreateOrConnectWithoutClassInput[]
    upsert?: StudentUpsertWithWhereUniqueWithoutClassInput | StudentUpsertWithWhereUniqueWithoutClassInput[]
    createMany?: StudentCreateManyClassInputEnvelope
    set?: StudentWhereUniqueInput | StudentWhereUniqueInput[]
    disconnect?: StudentWhereUniqueInput | StudentWhereUniqueInput[]
    delete?: StudentWhereUniqueInput | StudentWhereUniqueInput[]
    connect?: StudentWhereUniqueInput | StudentWhereUniqueInput[]
    update?: StudentUpdateWithWhereUniqueWithoutClassInput | StudentUpdateWithWhereUniqueWithoutClassInput[]
    updateMany?: StudentUpdateManyWithWhereWithoutClassInput | StudentUpdateManyWithWhereWithoutClassInput[]
    deleteMany?: StudentScalarWhereInput | StudentScalarWhereInput[]
  }

  export type StudentCreateNestedOneWithoutPointsHistoryInput = {
    create?: XOR<StudentCreateWithoutPointsHistoryInput, StudentUncheckedCreateWithoutPointsHistoryInput>
    connectOrCreate?: StudentCreateOrConnectWithoutPointsHistoryInput
    connect?: StudentWhereUniqueInput
  }

  export type EnumPointSourceTypeFieldUpdateOperationsInput = {
    set?: $Enums.PointSourceType
  }

  export type StudentUpdateOneRequiredWithoutPointsHistoryNestedInput = {
    create?: XOR<StudentCreateWithoutPointsHistoryInput, StudentUncheckedCreateWithoutPointsHistoryInput>
    connectOrCreate?: StudentCreateOrConnectWithoutPointsHistoryInput
    upsert?: StudentUpsertWithoutPointsHistoryInput
    connect?: StudentWhereUniqueInput
    update?: XOR<XOR<StudentUpdateToOneWithWhereWithoutPointsHistoryInput, StudentUpdateWithoutPointsHistoryInput>, StudentUncheckedUpdateWithoutPointsHistoryInput>
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

  export type NestedEnumGenderFilter<$PrismaModel = never> = {
    equals?: $Enums.Gender | EnumGenderFieldRefInput<$PrismaModel>
    in?: $Enums.Gender[] | ListEnumGenderFieldRefInput<$PrismaModel>
    notIn?: $Enums.Gender[] | ListEnumGenderFieldRefInput<$PrismaModel>
    not?: NestedEnumGenderFilter<$PrismaModel> | $Enums.Gender
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

  export type NestedEnumReligionFilter<$PrismaModel = never> = {
    equals?: $Enums.Religion | EnumReligionFieldRefInput<$PrismaModel>
    in?: $Enums.Religion[] | ListEnumReligionFieldRefInput<$PrismaModel>
    notIn?: $Enums.Religion[] | ListEnumReligionFieldRefInput<$PrismaModel>
    not?: NestedEnumReligionFilter<$PrismaModel> | $Enums.Religion
  }

  export type NestedEnumBloodTypeNullableFilter<$PrismaModel = never> = {
    equals?: $Enums.BloodType | EnumBloodTypeFieldRefInput<$PrismaModel> | null
    in?: $Enums.BloodType[] | ListEnumBloodTypeFieldRefInput<$PrismaModel> | null
    notIn?: $Enums.BloodType[] | ListEnumBloodTypeFieldRefInput<$PrismaModel> | null
    not?: NestedEnumBloodTypeNullableFilter<$PrismaModel> | $Enums.BloodType | null
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

  export type NestedEnumStudentStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.StudentStatus | EnumStudentStatusFieldRefInput<$PrismaModel>
    in?: $Enums.StudentStatus[] | ListEnumStudentStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.StudentStatus[] | ListEnumStudentStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumStudentStatusFilter<$PrismaModel> | $Enums.StudentStatus
  }

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
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

  export type NestedEnumGenderWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Gender | EnumGenderFieldRefInput<$PrismaModel>
    in?: $Enums.Gender[] | ListEnumGenderFieldRefInput<$PrismaModel>
    notIn?: $Enums.Gender[] | ListEnumGenderFieldRefInput<$PrismaModel>
    not?: NestedEnumGenderWithAggregatesFilter<$PrismaModel> | $Enums.Gender
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumGenderFilter<$PrismaModel>
    _max?: NestedEnumGenderFilter<$PrismaModel>
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

  export type NestedEnumReligionWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Religion | EnumReligionFieldRefInput<$PrismaModel>
    in?: $Enums.Religion[] | ListEnumReligionFieldRefInput<$PrismaModel>
    notIn?: $Enums.Religion[] | ListEnumReligionFieldRefInput<$PrismaModel>
    not?: NestedEnumReligionWithAggregatesFilter<$PrismaModel> | $Enums.Religion
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumReligionFilter<$PrismaModel>
    _max?: NestedEnumReligionFilter<$PrismaModel>
  }

  export type NestedEnumBloodTypeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.BloodType | EnumBloodTypeFieldRefInput<$PrismaModel> | null
    in?: $Enums.BloodType[] | ListEnumBloodTypeFieldRefInput<$PrismaModel> | null
    notIn?: $Enums.BloodType[] | ListEnumBloodTypeFieldRefInput<$PrismaModel> | null
    not?: NestedEnumBloodTypeNullableWithAggregatesFilter<$PrismaModel> | $Enums.BloodType | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedEnumBloodTypeNullableFilter<$PrismaModel>
    _max?: NestedEnumBloodTypeNullableFilter<$PrismaModel>
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

  export type NestedEnumStudentStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.StudentStatus | EnumStudentStatusFieldRefInput<$PrismaModel>
    in?: $Enums.StudentStatus[] | ListEnumStudentStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.StudentStatus[] | ListEnumStudentStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumStudentStatusWithAggregatesFilter<$PrismaModel> | $Enums.StudentStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumStudentStatusFilter<$PrismaModel>
    _max?: NestedEnumStudentStatusFilter<$PrismaModel>
  }

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
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

  export type NestedEnumPointSourceTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.PointSourceType | EnumPointSourceTypeFieldRefInput<$PrismaModel>
    in?: $Enums.PointSourceType[] | ListEnumPointSourceTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.PointSourceType[] | ListEnumPointSourceTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumPointSourceTypeFilter<$PrismaModel> | $Enums.PointSourceType
  }

  export type NestedEnumPointSourceTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.PointSourceType | EnumPointSourceTypeFieldRefInput<$PrismaModel>
    in?: $Enums.PointSourceType[] | ListEnumPointSourceTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.PointSourceType[] | ListEnumPointSourceTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumPointSourceTypeWithAggregatesFilter<$PrismaModel> | $Enums.PointSourceType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumPointSourceTypeFilter<$PrismaModel>
    _max?: NestedEnumPointSourceTypeFilter<$PrismaModel>
  }

  export type ClassCreateWithoutStudentsInput = {
    id?: string
    code: string
    name: string
    level: string
    major?: string | null
    waliKelasId?: string | null
    waliKelasName?: string | null
    capacity?: number
    currentTotal?: number
    academicYear: string
    roomNumber?: string | null
    floor?: string | null
    building?: string | null
    scheduleUrl?: string | null
    isActive?: boolean
    createdBy: string
    createdAt?: Date | string
    updatedBy?: string | null
    updatedAt?: Date | string
    deletedAt?: Date | string | null
  }

  export type ClassUncheckedCreateWithoutStudentsInput = {
    id?: string
    code: string
    name: string
    level: string
    major?: string | null
    waliKelasId?: string | null
    waliKelasName?: string | null
    capacity?: number
    currentTotal?: number
    academicYear: string
    roomNumber?: string | null
    floor?: string | null
    building?: string | null
    scheduleUrl?: string | null
    isActive?: boolean
    createdBy: string
    createdAt?: Date | string
    updatedBy?: string | null
    updatedAt?: Date | string
    deletedAt?: Date | string | null
  }

  export type ClassCreateOrConnectWithoutStudentsInput = {
    where: ClassWhereUniqueInput
    create: XOR<ClassCreateWithoutStudentsInput, ClassUncheckedCreateWithoutStudentsInput>
  }

  export type StudentPointsHistoryCreateWithoutStudentInput = {
    id?: string
    studentName: string
    previousTotal: number
    pointsChange: number
    newTotal: number
    sourceType: $Enums.PointSourceType
    sourceId: string
    sourceDescription: string
    academicYear: string
    semester: number
    recordedBy: string
    recordedAt?: Date | string
  }

  export type StudentPointsHistoryUncheckedCreateWithoutStudentInput = {
    id?: string
    studentName: string
    previousTotal: number
    pointsChange: number
    newTotal: number
    sourceType: $Enums.PointSourceType
    sourceId: string
    sourceDescription: string
    academicYear: string
    semester: number
    recordedBy: string
    recordedAt?: Date | string
  }

  export type StudentPointsHistoryCreateOrConnectWithoutStudentInput = {
    where: StudentPointsHistoryWhereUniqueInput
    create: XOR<StudentPointsHistoryCreateWithoutStudentInput, StudentPointsHistoryUncheckedCreateWithoutStudentInput>
  }

  export type StudentPointsHistoryCreateManyStudentInputEnvelope = {
    data: StudentPointsHistoryCreateManyStudentInput | StudentPointsHistoryCreateManyStudentInput[]
    skipDuplicates?: boolean
  }

  export type ClassUpsertWithoutStudentsInput = {
    update: XOR<ClassUpdateWithoutStudentsInput, ClassUncheckedUpdateWithoutStudentsInput>
    create: XOR<ClassCreateWithoutStudentsInput, ClassUncheckedCreateWithoutStudentsInput>
    where?: ClassWhereInput
  }

  export type ClassUpdateToOneWithWhereWithoutStudentsInput = {
    where?: ClassWhereInput
    data: XOR<ClassUpdateWithoutStudentsInput, ClassUncheckedUpdateWithoutStudentsInput>
  }

  export type ClassUpdateWithoutStudentsInput = {
    id?: StringFieldUpdateOperationsInput | string
    code?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    level?: StringFieldUpdateOperationsInput | string
    major?: NullableStringFieldUpdateOperationsInput | string | null
    waliKelasId?: NullableStringFieldUpdateOperationsInput | string | null
    waliKelasName?: NullableStringFieldUpdateOperationsInput | string | null
    capacity?: IntFieldUpdateOperationsInput | number
    currentTotal?: IntFieldUpdateOperationsInput | number
    academicYear?: StringFieldUpdateOperationsInput | string
    roomNumber?: NullableStringFieldUpdateOperationsInput | string | null
    floor?: NullableStringFieldUpdateOperationsInput | string | null
    building?: NullableStringFieldUpdateOperationsInput | string | null
    scheduleUrl?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdBy?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedBy?: NullableStringFieldUpdateOperationsInput | string | null
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type ClassUncheckedUpdateWithoutStudentsInput = {
    id?: StringFieldUpdateOperationsInput | string
    code?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    level?: StringFieldUpdateOperationsInput | string
    major?: NullableStringFieldUpdateOperationsInput | string | null
    waliKelasId?: NullableStringFieldUpdateOperationsInput | string | null
    waliKelasName?: NullableStringFieldUpdateOperationsInput | string | null
    capacity?: IntFieldUpdateOperationsInput | number
    currentTotal?: IntFieldUpdateOperationsInput | number
    academicYear?: StringFieldUpdateOperationsInput | string
    roomNumber?: NullableStringFieldUpdateOperationsInput | string | null
    floor?: NullableStringFieldUpdateOperationsInput | string | null
    building?: NullableStringFieldUpdateOperationsInput | string | null
    scheduleUrl?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdBy?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedBy?: NullableStringFieldUpdateOperationsInput | string | null
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type StudentPointsHistoryUpsertWithWhereUniqueWithoutStudentInput = {
    where: StudentPointsHistoryWhereUniqueInput
    update: XOR<StudentPointsHistoryUpdateWithoutStudentInput, StudentPointsHistoryUncheckedUpdateWithoutStudentInput>
    create: XOR<StudentPointsHistoryCreateWithoutStudentInput, StudentPointsHistoryUncheckedCreateWithoutStudentInput>
  }

  export type StudentPointsHistoryUpdateWithWhereUniqueWithoutStudentInput = {
    where: StudentPointsHistoryWhereUniqueInput
    data: XOR<StudentPointsHistoryUpdateWithoutStudentInput, StudentPointsHistoryUncheckedUpdateWithoutStudentInput>
  }

  export type StudentPointsHistoryUpdateManyWithWhereWithoutStudentInput = {
    where: StudentPointsHistoryScalarWhereInput
    data: XOR<StudentPointsHistoryUpdateManyMutationInput, StudentPointsHistoryUncheckedUpdateManyWithoutStudentInput>
  }

  export type StudentPointsHistoryScalarWhereInput = {
    AND?: StudentPointsHistoryScalarWhereInput | StudentPointsHistoryScalarWhereInput[]
    OR?: StudentPointsHistoryScalarWhereInput[]
    NOT?: StudentPointsHistoryScalarWhereInput | StudentPointsHistoryScalarWhereInput[]
    id?: StringFilter<"StudentPointsHistory"> | string
    studentId?: StringFilter<"StudentPointsHistory"> | string
    studentName?: StringFilter<"StudentPointsHistory"> | string
    previousTotal?: IntFilter<"StudentPointsHistory"> | number
    pointsChange?: IntFilter<"StudentPointsHistory"> | number
    newTotal?: IntFilter<"StudentPointsHistory"> | number
    sourceType?: EnumPointSourceTypeFilter<"StudentPointsHistory"> | $Enums.PointSourceType
    sourceId?: StringFilter<"StudentPointsHistory"> | string
    sourceDescription?: StringFilter<"StudentPointsHistory"> | string
    academicYear?: StringFilter<"StudentPointsHistory"> | string
    semester?: IntFilter<"StudentPointsHistory"> | number
    recordedBy?: StringFilter<"StudentPointsHistory"> | string
    recordedAt?: DateTimeFilter<"StudentPointsHistory"> | Date | string
  }

  export type StudentCreateWithoutClassInput = {
    id?: string
    userId?: string | null
    nisn: string
    nis?: string | null
    name: string
    nickname?: string | null
    className: string
    classLevel: string
    classMajor?: string | null
    gender: $Enums.Gender
    birthPlace: string
    birthDate: Date | string
    religion: $Enums.Religion
    bloodType?: $Enums.BloodType | null
    address: string
    rt?: string | null
    rw?: string | null
    village?: string | null
    district?: string | null
    city: string
    province: string
    postalCode?: string | null
    phone?: string | null
    email?: string | null
    photoUrl?: string | null
    parentId?: string | null
    fatherName?: string | null
    fatherOccupation?: string | null
    fatherPhone?: string | null
    motherName?: string | null
    motherOccupation?: string | null
    motherPhone?: string | null
    guardianName?: string | null
    guardianRelation?: string | null
    guardianPhone?: string | null
    waliKelasId?: string | null
    waliKelasName?: string | null
    totalPoints?: number
    positivePoints?: number
    negativePoints?: number
    currentRank?: number | null
    academicYear: string
    entryYear: string
    entryDate: Date | string
    status?: $Enums.StudentStatus
    statusReason?: string | null
    graduationYear?: string | null
    birthCertificateUrl?: string | null
    familyCardUrl?: string | null
    photoCardUrl?: string | null
    isActive?: boolean
    lastSyncedAt?: Date | string | null
    createdBy: string
    createdAt?: Date | string
    updatedBy?: string | null
    updatedAt?: Date | string
    deletedAt?: Date | string | null
    deletedBy?: string | null
    pointsHistory?: StudentPointsHistoryCreateNestedManyWithoutStudentInput
  }

  export type StudentUncheckedCreateWithoutClassInput = {
    id?: string
    userId?: string | null
    nisn: string
    nis?: string | null
    name: string
    nickname?: string | null
    className: string
    classLevel: string
    classMajor?: string | null
    gender: $Enums.Gender
    birthPlace: string
    birthDate: Date | string
    religion: $Enums.Religion
    bloodType?: $Enums.BloodType | null
    address: string
    rt?: string | null
    rw?: string | null
    village?: string | null
    district?: string | null
    city: string
    province: string
    postalCode?: string | null
    phone?: string | null
    email?: string | null
    photoUrl?: string | null
    parentId?: string | null
    fatherName?: string | null
    fatherOccupation?: string | null
    fatherPhone?: string | null
    motherName?: string | null
    motherOccupation?: string | null
    motherPhone?: string | null
    guardianName?: string | null
    guardianRelation?: string | null
    guardianPhone?: string | null
    waliKelasId?: string | null
    waliKelasName?: string | null
    totalPoints?: number
    positivePoints?: number
    negativePoints?: number
    currentRank?: number | null
    academicYear: string
    entryYear: string
    entryDate: Date | string
    status?: $Enums.StudentStatus
    statusReason?: string | null
    graduationYear?: string | null
    birthCertificateUrl?: string | null
    familyCardUrl?: string | null
    photoCardUrl?: string | null
    isActive?: boolean
    lastSyncedAt?: Date | string | null
    createdBy: string
    createdAt?: Date | string
    updatedBy?: string | null
    updatedAt?: Date | string
    deletedAt?: Date | string | null
    deletedBy?: string | null
    pointsHistory?: StudentPointsHistoryUncheckedCreateNestedManyWithoutStudentInput
  }

  export type StudentCreateOrConnectWithoutClassInput = {
    where: StudentWhereUniqueInput
    create: XOR<StudentCreateWithoutClassInput, StudentUncheckedCreateWithoutClassInput>
  }

  export type StudentCreateManyClassInputEnvelope = {
    data: StudentCreateManyClassInput | StudentCreateManyClassInput[]
    skipDuplicates?: boolean
  }

  export type StudentUpsertWithWhereUniqueWithoutClassInput = {
    where: StudentWhereUniqueInput
    update: XOR<StudentUpdateWithoutClassInput, StudentUncheckedUpdateWithoutClassInput>
    create: XOR<StudentCreateWithoutClassInput, StudentUncheckedCreateWithoutClassInput>
  }

  export type StudentUpdateWithWhereUniqueWithoutClassInput = {
    where: StudentWhereUniqueInput
    data: XOR<StudentUpdateWithoutClassInput, StudentUncheckedUpdateWithoutClassInput>
  }

  export type StudentUpdateManyWithWhereWithoutClassInput = {
    where: StudentScalarWhereInput
    data: XOR<StudentUpdateManyMutationInput, StudentUncheckedUpdateManyWithoutClassInput>
  }

  export type StudentScalarWhereInput = {
    AND?: StudentScalarWhereInput | StudentScalarWhereInput[]
    OR?: StudentScalarWhereInput[]
    NOT?: StudentScalarWhereInput | StudentScalarWhereInput[]
    id?: StringFilter<"Student"> | string
    userId?: StringNullableFilter<"Student"> | string | null
    nisn?: StringFilter<"Student"> | string
    nis?: StringNullableFilter<"Student"> | string | null
    name?: StringFilter<"Student"> | string
    nickname?: StringNullableFilter<"Student"> | string | null
    classId?: StringFilter<"Student"> | string
    className?: StringFilter<"Student"> | string
    classLevel?: StringFilter<"Student"> | string
    classMajor?: StringNullableFilter<"Student"> | string | null
    gender?: EnumGenderFilter<"Student"> | $Enums.Gender
    birthPlace?: StringFilter<"Student"> | string
    birthDate?: DateTimeFilter<"Student"> | Date | string
    religion?: EnumReligionFilter<"Student"> | $Enums.Religion
    bloodType?: EnumBloodTypeNullableFilter<"Student"> | $Enums.BloodType | null
    address?: StringFilter<"Student"> | string
    rt?: StringNullableFilter<"Student"> | string | null
    rw?: StringNullableFilter<"Student"> | string | null
    village?: StringNullableFilter<"Student"> | string | null
    district?: StringNullableFilter<"Student"> | string | null
    city?: StringFilter<"Student"> | string
    province?: StringFilter<"Student"> | string
    postalCode?: StringNullableFilter<"Student"> | string | null
    phone?: StringNullableFilter<"Student"> | string | null
    email?: StringNullableFilter<"Student"> | string | null
    photoUrl?: StringNullableFilter<"Student"> | string | null
    parentId?: StringNullableFilter<"Student"> | string | null
    fatherName?: StringNullableFilter<"Student"> | string | null
    fatherOccupation?: StringNullableFilter<"Student"> | string | null
    fatherPhone?: StringNullableFilter<"Student"> | string | null
    motherName?: StringNullableFilter<"Student"> | string | null
    motherOccupation?: StringNullableFilter<"Student"> | string | null
    motherPhone?: StringNullableFilter<"Student"> | string | null
    guardianName?: StringNullableFilter<"Student"> | string | null
    guardianRelation?: StringNullableFilter<"Student"> | string | null
    guardianPhone?: StringNullableFilter<"Student"> | string | null
    waliKelasId?: StringNullableFilter<"Student"> | string | null
    waliKelasName?: StringNullableFilter<"Student"> | string | null
    totalPoints?: IntFilter<"Student"> | number
    positivePoints?: IntFilter<"Student"> | number
    negativePoints?: IntFilter<"Student"> | number
    currentRank?: IntNullableFilter<"Student"> | number | null
    academicYear?: StringFilter<"Student"> | string
    entryYear?: StringFilter<"Student"> | string
    entryDate?: DateTimeFilter<"Student"> | Date | string
    status?: EnumStudentStatusFilter<"Student"> | $Enums.StudentStatus
    statusReason?: StringNullableFilter<"Student"> | string | null
    graduationYear?: StringNullableFilter<"Student"> | string | null
    birthCertificateUrl?: StringNullableFilter<"Student"> | string | null
    familyCardUrl?: StringNullableFilter<"Student"> | string | null
    photoCardUrl?: StringNullableFilter<"Student"> | string | null
    isActive?: BoolFilter<"Student"> | boolean
    lastSyncedAt?: DateTimeNullableFilter<"Student"> | Date | string | null
    createdBy?: StringFilter<"Student"> | string
    createdAt?: DateTimeFilter<"Student"> | Date | string
    updatedBy?: StringNullableFilter<"Student"> | string | null
    updatedAt?: DateTimeFilter<"Student"> | Date | string
    deletedAt?: DateTimeNullableFilter<"Student"> | Date | string | null
    deletedBy?: StringNullableFilter<"Student"> | string | null
  }

  export type StudentCreateWithoutPointsHistoryInput = {
    id?: string
    userId?: string | null
    nisn: string
    nis?: string | null
    name: string
    nickname?: string | null
    className: string
    classLevel: string
    classMajor?: string | null
    gender: $Enums.Gender
    birthPlace: string
    birthDate: Date | string
    religion: $Enums.Religion
    bloodType?: $Enums.BloodType | null
    address: string
    rt?: string | null
    rw?: string | null
    village?: string | null
    district?: string | null
    city: string
    province: string
    postalCode?: string | null
    phone?: string | null
    email?: string | null
    photoUrl?: string | null
    parentId?: string | null
    fatherName?: string | null
    fatherOccupation?: string | null
    fatherPhone?: string | null
    motherName?: string | null
    motherOccupation?: string | null
    motherPhone?: string | null
    guardianName?: string | null
    guardianRelation?: string | null
    guardianPhone?: string | null
    waliKelasId?: string | null
    waliKelasName?: string | null
    totalPoints?: number
    positivePoints?: number
    negativePoints?: number
    currentRank?: number | null
    academicYear: string
    entryYear: string
    entryDate: Date | string
    status?: $Enums.StudentStatus
    statusReason?: string | null
    graduationYear?: string | null
    birthCertificateUrl?: string | null
    familyCardUrl?: string | null
    photoCardUrl?: string | null
    isActive?: boolean
    lastSyncedAt?: Date | string | null
    createdBy: string
    createdAt?: Date | string
    updatedBy?: string | null
    updatedAt?: Date | string
    deletedAt?: Date | string | null
    deletedBy?: string | null
    class: ClassCreateNestedOneWithoutStudentsInput
  }

  export type StudentUncheckedCreateWithoutPointsHistoryInput = {
    id?: string
    userId?: string | null
    nisn: string
    nis?: string | null
    name: string
    nickname?: string | null
    classId: string
    className: string
    classLevel: string
    classMajor?: string | null
    gender: $Enums.Gender
    birthPlace: string
    birthDate: Date | string
    religion: $Enums.Religion
    bloodType?: $Enums.BloodType | null
    address: string
    rt?: string | null
    rw?: string | null
    village?: string | null
    district?: string | null
    city: string
    province: string
    postalCode?: string | null
    phone?: string | null
    email?: string | null
    photoUrl?: string | null
    parentId?: string | null
    fatherName?: string | null
    fatherOccupation?: string | null
    fatherPhone?: string | null
    motherName?: string | null
    motherOccupation?: string | null
    motherPhone?: string | null
    guardianName?: string | null
    guardianRelation?: string | null
    guardianPhone?: string | null
    waliKelasId?: string | null
    waliKelasName?: string | null
    totalPoints?: number
    positivePoints?: number
    negativePoints?: number
    currentRank?: number | null
    academicYear: string
    entryYear: string
    entryDate: Date | string
    status?: $Enums.StudentStatus
    statusReason?: string | null
    graduationYear?: string | null
    birthCertificateUrl?: string | null
    familyCardUrl?: string | null
    photoCardUrl?: string | null
    isActive?: boolean
    lastSyncedAt?: Date | string | null
    createdBy: string
    createdAt?: Date | string
    updatedBy?: string | null
    updatedAt?: Date | string
    deletedAt?: Date | string | null
    deletedBy?: string | null
  }

  export type StudentCreateOrConnectWithoutPointsHistoryInput = {
    where: StudentWhereUniqueInput
    create: XOR<StudentCreateWithoutPointsHistoryInput, StudentUncheckedCreateWithoutPointsHistoryInput>
  }

  export type StudentUpsertWithoutPointsHistoryInput = {
    update: XOR<StudentUpdateWithoutPointsHistoryInput, StudentUncheckedUpdateWithoutPointsHistoryInput>
    create: XOR<StudentCreateWithoutPointsHistoryInput, StudentUncheckedCreateWithoutPointsHistoryInput>
    where?: StudentWhereInput
  }

  export type StudentUpdateToOneWithWhereWithoutPointsHistoryInput = {
    where?: StudentWhereInput
    data: XOR<StudentUpdateWithoutPointsHistoryInput, StudentUncheckedUpdateWithoutPointsHistoryInput>
  }

  export type StudentUpdateWithoutPointsHistoryInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: NullableStringFieldUpdateOperationsInput | string | null
    nisn?: StringFieldUpdateOperationsInput | string
    nis?: NullableStringFieldUpdateOperationsInput | string | null
    name?: StringFieldUpdateOperationsInput | string
    nickname?: NullableStringFieldUpdateOperationsInput | string | null
    className?: StringFieldUpdateOperationsInput | string
    classLevel?: StringFieldUpdateOperationsInput | string
    classMajor?: NullableStringFieldUpdateOperationsInput | string | null
    gender?: EnumGenderFieldUpdateOperationsInput | $Enums.Gender
    birthPlace?: StringFieldUpdateOperationsInput | string
    birthDate?: DateTimeFieldUpdateOperationsInput | Date | string
    religion?: EnumReligionFieldUpdateOperationsInput | $Enums.Religion
    bloodType?: NullableEnumBloodTypeFieldUpdateOperationsInput | $Enums.BloodType | null
    address?: StringFieldUpdateOperationsInput | string
    rt?: NullableStringFieldUpdateOperationsInput | string | null
    rw?: NullableStringFieldUpdateOperationsInput | string | null
    village?: NullableStringFieldUpdateOperationsInput | string | null
    district?: NullableStringFieldUpdateOperationsInput | string | null
    city?: StringFieldUpdateOperationsInput | string
    province?: StringFieldUpdateOperationsInput | string
    postalCode?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    photoUrl?: NullableStringFieldUpdateOperationsInput | string | null
    parentId?: NullableStringFieldUpdateOperationsInput | string | null
    fatherName?: NullableStringFieldUpdateOperationsInput | string | null
    fatherOccupation?: NullableStringFieldUpdateOperationsInput | string | null
    fatherPhone?: NullableStringFieldUpdateOperationsInput | string | null
    motherName?: NullableStringFieldUpdateOperationsInput | string | null
    motherOccupation?: NullableStringFieldUpdateOperationsInput | string | null
    motherPhone?: NullableStringFieldUpdateOperationsInput | string | null
    guardianName?: NullableStringFieldUpdateOperationsInput | string | null
    guardianRelation?: NullableStringFieldUpdateOperationsInput | string | null
    guardianPhone?: NullableStringFieldUpdateOperationsInput | string | null
    waliKelasId?: NullableStringFieldUpdateOperationsInput | string | null
    waliKelasName?: NullableStringFieldUpdateOperationsInput | string | null
    totalPoints?: IntFieldUpdateOperationsInput | number
    positivePoints?: IntFieldUpdateOperationsInput | number
    negativePoints?: IntFieldUpdateOperationsInput | number
    currentRank?: NullableIntFieldUpdateOperationsInput | number | null
    academicYear?: StringFieldUpdateOperationsInput | string
    entryYear?: StringFieldUpdateOperationsInput | string
    entryDate?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumStudentStatusFieldUpdateOperationsInput | $Enums.StudentStatus
    statusReason?: NullableStringFieldUpdateOperationsInput | string | null
    graduationYear?: NullableStringFieldUpdateOperationsInput | string | null
    birthCertificateUrl?: NullableStringFieldUpdateOperationsInput | string | null
    familyCardUrl?: NullableStringFieldUpdateOperationsInput | string | null
    photoCardUrl?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    lastSyncedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdBy?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedBy?: NullableStringFieldUpdateOperationsInput | string | null
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deletedBy?: NullableStringFieldUpdateOperationsInput | string | null
    class?: ClassUpdateOneRequiredWithoutStudentsNestedInput
  }

  export type StudentUncheckedUpdateWithoutPointsHistoryInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: NullableStringFieldUpdateOperationsInput | string | null
    nisn?: StringFieldUpdateOperationsInput | string
    nis?: NullableStringFieldUpdateOperationsInput | string | null
    name?: StringFieldUpdateOperationsInput | string
    nickname?: NullableStringFieldUpdateOperationsInput | string | null
    classId?: StringFieldUpdateOperationsInput | string
    className?: StringFieldUpdateOperationsInput | string
    classLevel?: StringFieldUpdateOperationsInput | string
    classMajor?: NullableStringFieldUpdateOperationsInput | string | null
    gender?: EnumGenderFieldUpdateOperationsInput | $Enums.Gender
    birthPlace?: StringFieldUpdateOperationsInput | string
    birthDate?: DateTimeFieldUpdateOperationsInput | Date | string
    religion?: EnumReligionFieldUpdateOperationsInput | $Enums.Religion
    bloodType?: NullableEnumBloodTypeFieldUpdateOperationsInput | $Enums.BloodType | null
    address?: StringFieldUpdateOperationsInput | string
    rt?: NullableStringFieldUpdateOperationsInput | string | null
    rw?: NullableStringFieldUpdateOperationsInput | string | null
    village?: NullableStringFieldUpdateOperationsInput | string | null
    district?: NullableStringFieldUpdateOperationsInput | string | null
    city?: StringFieldUpdateOperationsInput | string
    province?: StringFieldUpdateOperationsInput | string
    postalCode?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    photoUrl?: NullableStringFieldUpdateOperationsInput | string | null
    parentId?: NullableStringFieldUpdateOperationsInput | string | null
    fatherName?: NullableStringFieldUpdateOperationsInput | string | null
    fatherOccupation?: NullableStringFieldUpdateOperationsInput | string | null
    fatherPhone?: NullableStringFieldUpdateOperationsInput | string | null
    motherName?: NullableStringFieldUpdateOperationsInput | string | null
    motherOccupation?: NullableStringFieldUpdateOperationsInput | string | null
    motherPhone?: NullableStringFieldUpdateOperationsInput | string | null
    guardianName?: NullableStringFieldUpdateOperationsInput | string | null
    guardianRelation?: NullableStringFieldUpdateOperationsInput | string | null
    guardianPhone?: NullableStringFieldUpdateOperationsInput | string | null
    waliKelasId?: NullableStringFieldUpdateOperationsInput | string | null
    waliKelasName?: NullableStringFieldUpdateOperationsInput | string | null
    totalPoints?: IntFieldUpdateOperationsInput | number
    positivePoints?: IntFieldUpdateOperationsInput | number
    negativePoints?: IntFieldUpdateOperationsInput | number
    currentRank?: NullableIntFieldUpdateOperationsInput | number | null
    academicYear?: StringFieldUpdateOperationsInput | string
    entryYear?: StringFieldUpdateOperationsInput | string
    entryDate?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumStudentStatusFieldUpdateOperationsInput | $Enums.StudentStatus
    statusReason?: NullableStringFieldUpdateOperationsInput | string | null
    graduationYear?: NullableStringFieldUpdateOperationsInput | string | null
    birthCertificateUrl?: NullableStringFieldUpdateOperationsInput | string | null
    familyCardUrl?: NullableStringFieldUpdateOperationsInput | string | null
    photoCardUrl?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    lastSyncedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdBy?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedBy?: NullableStringFieldUpdateOperationsInput | string | null
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deletedBy?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type StudentPointsHistoryCreateManyStudentInput = {
    id?: string
    studentName: string
    previousTotal: number
    pointsChange: number
    newTotal: number
    sourceType: $Enums.PointSourceType
    sourceId: string
    sourceDescription: string
    academicYear: string
    semester: number
    recordedBy: string
    recordedAt?: Date | string
  }

  export type StudentPointsHistoryUpdateWithoutStudentInput = {
    id?: StringFieldUpdateOperationsInput | string
    studentName?: StringFieldUpdateOperationsInput | string
    previousTotal?: IntFieldUpdateOperationsInput | number
    pointsChange?: IntFieldUpdateOperationsInput | number
    newTotal?: IntFieldUpdateOperationsInput | number
    sourceType?: EnumPointSourceTypeFieldUpdateOperationsInput | $Enums.PointSourceType
    sourceId?: StringFieldUpdateOperationsInput | string
    sourceDescription?: StringFieldUpdateOperationsInput | string
    academicYear?: StringFieldUpdateOperationsInput | string
    semester?: IntFieldUpdateOperationsInput | number
    recordedBy?: StringFieldUpdateOperationsInput | string
    recordedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type StudentPointsHistoryUncheckedUpdateWithoutStudentInput = {
    id?: StringFieldUpdateOperationsInput | string
    studentName?: StringFieldUpdateOperationsInput | string
    previousTotal?: IntFieldUpdateOperationsInput | number
    pointsChange?: IntFieldUpdateOperationsInput | number
    newTotal?: IntFieldUpdateOperationsInput | number
    sourceType?: EnumPointSourceTypeFieldUpdateOperationsInput | $Enums.PointSourceType
    sourceId?: StringFieldUpdateOperationsInput | string
    sourceDescription?: StringFieldUpdateOperationsInput | string
    academicYear?: StringFieldUpdateOperationsInput | string
    semester?: IntFieldUpdateOperationsInput | number
    recordedBy?: StringFieldUpdateOperationsInput | string
    recordedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type StudentPointsHistoryUncheckedUpdateManyWithoutStudentInput = {
    id?: StringFieldUpdateOperationsInput | string
    studentName?: StringFieldUpdateOperationsInput | string
    previousTotal?: IntFieldUpdateOperationsInput | number
    pointsChange?: IntFieldUpdateOperationsInput | number
    newTotal?: IntFieldUpdateOperationsInput | number
    sourceType?: EnumPointSourceTypeFieldUpdateOperationsInput | $Enums.PointSourceType
    sourceId?: StringFieldUpdateOperationsInput | string
    sourceDescription?: StringFieldUpdateOperationsInput | string
    academicYear?: StringFieldUpdateOperationsInput | string
    semester?: IntFieldUpdateOperationsInput | number
    recordedBy?: StringFieldUpdateOperationsInput | string
    recordedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type StudentCreateManyClassInput = {
    id?: string
    userId?: string | null
    nisn: string
    nis?: string | null
    name: string
    nickname?: string | null
    className: string
    classLevel: string
    classMajor?: string | null
    gender: $Enums.Gender
    birthPlace: string
    birthDate: Date | string
    religion: $Enums.Religion
    bloodType?: $Enums.BloodType | null
    address: string
    rt?: string | null
    rw?: string | null
    village?: string | null
    district?: string | null
    city: string
    province: string
    postalCode?: string | null
    phone?: string | null
    email?: string | null
    photoUrl?: string | null
    parentId?: string | null
    fatherName?: string | null
    fatherOccupation?: string | null
    fatherPhone?: string | null
    motherName?: string | null
    motherOccupation?: string | null
    motherPhone?: string | null
    guardianName?: string | null
    guardianRelation?: string | null
    guardianPhone?: string | null
    waliKelasId?: string | null
    waliKelasName?: string | null
    totalPoints?: number
    positivePoints?: number
    negativePoints?: number
    currentRank?: number | null
    academicYear: string
    entryYear: string
    entryDate: Date | string
    status?: $Enums.StudentStatus
    statusReason?: string | null
    graduationYear?: string | null
    birthCertificateUrl?: string | null
    familyCardUrl?: string | null
    photoCardUrl?: string | null
    isActive?: boolean
    lastSyncedAt?: Date | string | null
    createdBy: string
    createdAt?: Date | string
    updatedBy?: string | null
    updatedAt?: Date | string
    deletedAt?: Date | string | null
    deletedBy?: string | null
  }

  export type StudentUpdateWithoutClassInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: NullableStringFieldUpdateOperationsInput | string | null
    nisn?: StringFieldUpdateOperationsInput | string
    nis?: NullableStringFieldUpdateOperationsInput | string | null
    name?: StringFieldUpdateOperationsInput | string
    nickname?: NullableStringFieldUpdateOperationsInput | string | null
    className?: StringFieldUpdateOperationsInput | string
    classLevel?: StringFieldUpdateOperationsInput | string
    classMajor?: NullableStringFieldUpdateOperationsInput | string | null
    gender?: EnumGenderFieldUpdateOperationsInput | $Enums.Gender
    birthPlace?: StringFieldUpdateOperationsInput | string
    birthDate?: DateTimeFieldUpdateOperationsInput | Date | string
    religion?: EnumReligionFieldUpdateOperationsInput | $Enums.Religion
    bloodType?: NullableEnumBloodTypeFieldUpdateOperationsInput | $Enums.BloodType | null
    address?: StringFieldUpdateOperationsInput | string
    rt?: NullableStringFieldUpdateOperationsInput | string | null
    rw?: NullableStringFieldUpdateOperationsInput | string | null
    village?: NullableStringFieldUpdateOperationsInput | string | null
    district?: NullableStringFieldUpdateOperationsInput | string | null
    city?: StringFieldUpdateOperationsInput | string
    province?: StringFieldUpdateOperationsInput | string
    postalCode?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    photoUrl?: NullableStringFieldUpdateOperationsInput | string | null
    parentId?: NullableStringFieldUpdateOperationsInput | string | null
    fatherName?: NullableStringFieldUpdateOperationsInput | string | null
    fatherOccupation?: NullableStringFieldUpdateOperationsInput | string | null
    fatherPhone?: NullableStringFieldUpdateOperationsInput | string | null
    motherName?: NullableStringFieldUpdateOperationsInput | string | null
    motherOccupation?: NullableStringFieldUpdateOperationsInput | string | null
    motherPhone?: NullableStringFieldUpdateOperationsInput | string | null
    guardianName?: NullableStringFieldUpdateOperationsInput | string | null
    guardianRelation?: NullableStringFieldUpdateOperationsInput | string | null
    guardianPhone?: NullableStringFieldUpdateOperationsInput | string | null
    waliKelasId?: NullableStringFieldUpdateOperationsInput | string | null
    waliKelasName?: NullableStringFieldUpdateOperationsInput | string | null
    totalPoints?: IntFieldUpdateOperationsInput | number
    positivePoints?: IntFieldUpdateOperationsInput | number
    negativePoints?: IntFieldUpdateOperationsInput | number
    currentRank?: NullableIntFieldUpdateOperationsInput | number | null
    academicYear?: StringFieldUpdateOperationsInput | string
    entryYear?: StringFieldUpdateOperationsInput | string
    entryDate?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumStudentStatusFieldUpdateOperationsInput | $Enums.StudentStatus
    statusReason?: NullableStringFieldUpdateOperationsInput | string | null
    graduationYear?: NullableStringFieldUpdateOperationsInput | string | null
    birthCertificateUrl?: NullableStringFieldUpdateOperationsInput | string | null
    familyCardUrl?: NullableStringFieldUpdateOperationsInput | string | null
    photoCardUrl?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    lastSyncedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdBy?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedBy?: NullableStringFieldUpdateOperationsInput | string | null
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deletedBy?: NullableStringFieldUpdateOperationsInput | string | null
    pointsHistory?: StudentPointsHistoryUpdateManyWithoutStudentNestedInput
  }

  export type StudentUncheckedUpdateWithoutClassInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: NullableStringFieldUpdateOperationsInput | string | null
    nisn?: StringFieldUpdateOperationsInput | string
    nis?: NullableStringFieldUpdateOperationsInput | string | null
    name?: StringFieldUpdateOperationsInput | string
    nickname?: NullableStringFieldUpdateOperationsInput | string | null
    className?: StringFieldUpdateOperationsInput | string
    classLevel?: StringFieldUpdateOperationsInput | string
    classMajor?: NullableStringFieldUpdateOperationsInput | string | null
    gender?: EnumGenderFieldUpdateOperationsInput | $Enums.Gender
    birthPlace?: StringFieldUpdateOperationsInput | string
    birthDate?: DateTimeFieldUpdateOperationsInput | Date | string
    religion?: EnumReligionFieldUpdateOperationsInput | $Enums.Religion
    bloodType?: NullableEnumBloodTypeFieldUpdateOperationsInput | $Enums.BloodType | null
    address?: StringFieldUpdateOperationsInput | string
    rt?: NullableStringFieldUpdateOperationsInput | string | null
    rw?: NullableStringFieldUpdateOperationsInput | string | null
    village?: NullableStringFieldUpdateOperationsInput | string | null
    district?: NullableStringFieldUpdateOperationsInput | string | null
    city?: StringFieldUpdateOperationsInput | string
    province?: StringFieldUpdateOperationsInput | string
    postalCode?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    photoUrl?: NullableStringFieldUpdateOperationsInput | string | null
    parentId?: NullableStringFieldUpdateOperationsInput | string | null
    fatherName?: NullableStringFieldUpdateOperationsInput | string | null
    fatherOccupation?: NullableStringFieldUpdateOperationsInput | string | null
    fatherPhone?: NullableStringFieldUpdateOperationsInput | string | null
    motherName?: NullableStringFieldUpdateOperationsInput | string | null
    motherOccupation?: NullableStringFieldUpdateOperationsInput | string | null
    motherPhone?: NullableStringFieldUpdateOperationsInput | string | null
    guardianName?: NullableStringFieldUpdateOperationsInput | string | null
    guardianRelation?: NullableStringFieldUpdateOperationsInput | string | null
    guardianPhone?: NullableStringFieldUpdateOperationsInput | string | null
    waliKelasId?: NullableStringFieldUpdateOperationsInput | string | null
    waliKelasName?: NullableStringFieldUpdateOperationsInput | string | null
    totalPoints?: IntFieldUpdateOperationsInput | number
    positivePoints?: IntFieldUpdateOperationsInput | number
    negativePoints?: IntFieldUpdateOperationsInput | number
    currentRank?: NullableIntFieldUpdateOperationsInput | number | null
    academicYear?: StringFieldUpdateOperationsInput | string
    entryYear?: StringFieldUpdateOperationsInput | string
    entryDate?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumStudentStatusFieldUpdateOperationsInput | $Enums.StudentStatus
    statusReason?: NullableStringFieldUpdateOperationsInput | string | null
    graduationYear?: NullableStringFieldUpdateOperationsInput | string | null
    birthCertificateUrl?: NullableStringFieldUpdateOperationsInput | string | null
    familyCardUrl?: NullableStringFieldUpdateOperationsInput | string | null
    photoCardUrl?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    lastSyncedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdBy?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedBy?: NullableStringFieldUpdateOperationsInput | string | null
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deletedBy?: NullableStringFieldUpdateOperationsInput | string | null
    pointsHistory?: StudentPointsHistoryUncheckedUpdateManyWithoutStudentNestedInput
  }

  export type StudentUncheckedUpdateManyWithoutClassInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: NullableStringFieldUpdateOperationsInput | string | null
    nisn?: StringFieldUpdateOperationsInput | string
    nis?: NullableStringFieldUpdateOperationsInput | string | null
    name?: StringFieldUpdateOperationsInput | string
    nickname?: NullableStringFieldUpdateOperationsInput | string | null
    className?: StringFieldUpdateOperationsInput | string
    classLevel?: StringFieldUpdateOperationsInput | string
    classMajor?: NullableStringFieldUpdateOperationsInput | string | null
    gender?: EnumGenderFieldUpdateOperationsInput | $Enums.Gender
    birthPlace?: StringFieldUpdateOperationsInput | string
    birthDate?: DateTimeFieldUpdateOperationsInput | Date | string
    religion?: EnumReligionFieldUpdateOperationsInput | $Enums.Religion
    bloodType?: NullableEnumBloodTypeFieldUpdateOperationsInput | $Enums.BloodType | null
    address?: StringFieldUpdateOperationsInput | string
    rt?: NullableStringFieldUpdateOperationsInput | string | null
    rw?: NullableStringFieldUpdateOperationsInput | string | null
    village?: NullableStringFieldUpdateOperationsInput | string | null
    district?: NullableStringFieldUpdateOperationsInput | string | null
    city?: StringFieldUpdateOperationsInput | string
    province?: StringFieldUpdateOperationsInput | string
    postalCode?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    photoUrl?: NullableStringFieldUpdateOperationsInput | string | null
    parentId?: NullableStringFieldUpdateOperationsInput | string | null
    fatherName?: NullableStringFieldUpdateOperationsInput | string | null
    fatherOccupation?: NullableStringFieldUpdateOperationsInput | string | null
    fatherPhone?: NullableStringFieldUpdateOperationsInput | string | null
    motherName?: NullableStringFieldUpdateOperationsInput | string | null
    motherOccupation?: NullableStringFieldUpdateOperationsInput | string | null
    motherPhone?: NullableStringFieldUpdateOperationsInput | string | null
    guardianName?: NullableStringFieldUpdateOperationsInput | string | null
    guardianRelation?: NullableStringFieldUpdateOperationsInput | string | null
    guardianPhone?: NullableStringFieldUpdateOperationsInput | string | null
    waliKelasId?: NullableStringFieldUpdateOperationsInput | string | null
    waliKelasName?: NullableStringFieldUpdateOperationsInput | string | null
    totalPoints?: IntFieldUpdateOperationsInput | number
    positivePoints?: IntFieldUpdateOperationsInput | number
    negativePoints?: IntFieldUpdateOperationsInput | number
    currentRank?: NullableIntFieldUpdateOperationsInput | number | null
    academicYear?: StringFieldUpdateOperationsInput | string
    entryYear?: StringFieldUpdateOperationsInput | string
    entryDate?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumStudentStatusFieldUpdateOperationsInput | $Enums.StudentStatus
    statusReason?: NullableStringFieldUpdateOperationsInput | string | null
    graduationYear?: NullableStringFieldUpdateOperationsInput | string | null
    birthCertificateUrl?: NullableStringFieldUpdateOperationsInput | string | null
    familyCardUrl?: NullableStringFieldUpdateOperationsInput | string | null
    photoCardUrl?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    lastSyncedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdBy?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedBy?: NullableStringFieldUpdateOperationsInput | string | null
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deletedBy?: NullableStringFieldUpdateOperationsInput | string | null
  }



  /**
   * Aliases for legacy arg types
   */
    /**
     * @deprecated Use StudentCountOutputTypeDefaultArgs instead
     */
    export type StudentCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = StudentCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use ClassCountOutputTypeDefaultArgs instead
     */
    export type ClassCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = ClassCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use StudentDefaultArgs instead
     */
    export type StudentArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = StudentDefaultArgs<ExtArgs>
    /**
     * @deprecated Use ClassDefaultArgs instead
     */
    export type ClassArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = ClassDefaultArgs<ExtArgs>
    /**
     * @deprecated Use StudentPointsHistoryDefaultArgs instead
     */
    export type StudentPointsHistoryArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = StudentPointsHistoryDefaultArgs<ExtArgs>
    /**
     * @deprecated Use AcademicYearDefaultArgs instead
     */
    export type AcademicYearArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = AcademicYearDefaultArgs<ExtArgs>

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