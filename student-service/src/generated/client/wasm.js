
Object.defineProperty(exports, "__esModule", { value: true });

const {
  Decimal,
  objectEnumValues,
  makeStrictEnum,
  Public,
  getRuntime,
  skip
} = require('./runtime/index-browser.js')


const Prisma = {}

exports.Prisma = Prisma
exports.$Enums = {}

/**
 * Prisma Client JS version: 5.22.0
 * Query Engine version: 605197351a3c8bdd595af2d2a9bc3025bca48ea2
 */
Prisma.prismaVersion = {
  client: "5.22.0",
  engine: "605197351a3c8bdd595af2d2a9bc3025bca48ea2"
}

Prisma.PrismaClientKnownRequestError = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`PrismaClientKnownRequestError is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)};
Prisma.PrismaClientUnknownRequestError = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`PrismaClientUnknownRequestError is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.PrismaClientRustPanicError = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`PrismaClientRustPanicError is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.PrismaClientInitializationError = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`PrismaClientInitializationError is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.PrismaClientValidationError = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`PrismaClientValidationError is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.NotFoundError = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`NotFoundError is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.Decimal = Decimal

/**
 * Re-export of sql-template-tag
 */
Prisma.sql = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`sqltag is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.empty = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`empty is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.join = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`join is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.raw = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`raw is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.validator = Public.validator

/**
* Extensions
*/
Prisma.getExtensionContext = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`Extensions.getExtensionContext is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.defineExtension = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`Extensions.defineExtension is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}

/**
 * Shorthand utilities for JSON filtering
 */
Prisma.DbNull = objectEnumValues.instances.DbNull
Prisma.JsonNull = objectEnumValues.instances.JsonNull
Prisma.AnyNull = objectEnumValues.instances.AnyNull

Prisma.NullTypes = {
  DbNull: objectEnumValues.classes.DbNull,
  JsonNull: objectEnumValues.classes.JsonNull,
  AnyNull: objectEnumValues.classes.AnyNull
}



/**
 * Enums
 */

exports.Prisma.TransactionIsolationLevel = makeStrictEnum({
  ReadUncommitted: 'ReadUncommitted',
  ReadCommitted: 'ReadCommitted',
  RepeatableRead: 'RepeatableRead',
  Serializable: 'Serializable'
});

exports.Prisma.StudentScalarFieldEnum = {
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

exports.Prisma.ClassScalarFieldEnum = {
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

exports.Prisma.StudentPointsHistoryScalarFieldEnum = {
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

exports.Prisma.AcademicYearScalarFieldEnum = {
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

exports.Prisma.SortOrder = {
  asc: 'asc',
  desc: 'desc'
};

exports.Prisma.QueryMode = {
  default: 'default',
  insensitive: 'insensitive'
};

exports.Prisma.NullsOrder = {
  first: 'first',
  last: 'last'
};
exports.Gender = exports.$Enums.Gender = {
  MALE: 'MALE',
  FEMALE: 'FEMALE'
};

exports.Religion = exports.$Enums.Religion = {
  ISLAM: 'ISLAM',
  KRISTEN: 'KRISTEN',
  KATOLIK: 'KATOLIK',
  HINDU: 'HINDU',
  BUDDHA: 'BUDDHA',
  KONGHUCU: 'KONGHUCU'
};

exports.BloodType = exports.$Enums.BloodType = {
  A: 'A',
  B: 'B',
  AB: 'AB',
  O: 'O'
};

exports.StudentStatus = exports.$Enums.StudentStatus = {
  ACTIVE: 'ACTIVE',
  INACTIVE: 'INACTIVE',
  GRADUATED: 'GRADUATED',
  TRANSFERRED: 'TRANSFERRED',
  DROPPED_OUT: 'DROPPED_OUT',
  SUSPENDED: 'SUSPENDED'
};

exports.PointSourceType = exports.$Enums.PointSourceType = {
  VIOLATION: 'VIOLATION',
  ACHIEVEMENT: 'ACHIEVEMENT',
  ADJUSTMENT: 'ADJUSTMENT'
};

exports.Prisma.ModelName = {
  Student: 'Student',
  Class: 'Class',
  StudentPointsHistory: 'StudentPointsHistory',
  AcademicYear: 'AcademicYear'
};

/**
 * This is a stub Prisma Client that will error at runtime if called.
 */
class PrismaClient {
  constructor() {
    return new Proxy(this, {
      get(target, prop) {
        let message
        const runtime = getRuntime()
        if (runtime.isEdge) {
          message = `PrismaClient is not configured to run in ${runtime.prettyName}. In order to run Prisma Client on edge runtime, either:
- Use Prisma Accelerate: https://pris.ly/d/accelerate
- Use Driver Adapters: https://pris.ly/d/driver-adapters
`;
        } else {
          message = 'PrismaClient is unable to run in this browser environment, or has been bundled for the browser (running in `' + runtime.prettyName + '`).'
        }
        
        message += `
If this is unexpected, please open an issue: https://pris.ly/prisma-prisma-bug-report`

        throw new Error(message)
      }
    })
  }
}

exports.PrismaClient = PrismaClient

Object.assign(exports, Prisma)
