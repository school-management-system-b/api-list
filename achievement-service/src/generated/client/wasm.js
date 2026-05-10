
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

exports.Prisma.AchievementScalarFieldEnum = {
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

exports.Prisma.AchievementApprovalHistoryScalarFieldEnum = {
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

exports.Prisma.AchievementStatisticsScalarFieldEnum = {
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

exports.Prisma.HallOfFameScalarFieldEnum = {
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

exports.Prisma.SortOrder = {
  asc: 'asc',
  desc: 'desc'
};

exports.Prisma.NullableJsonNullValueInput = {
  DbNull: Prisma.DbNull,
  JsonNull: Prisma.JsonNull
};

exports.Prisma.QueryMode = {
  default: 'default',
  insensitive: 'insensitive'
};

exports.Prisma.JsonNullValueFilter = {
  DbNull: Prisma.DbNull,
  JsonNull: Prisma.JsonNull,
  AnyNull: Prisma.AnyNull
};

exports.Prisma.NullsOrder = {
  first: 'first',
  last: 'last'
};
exports.AchievementType = exports.$Enums.AchievementType = {
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

exports.AchievementLevel = exports.$Enums.AchievementLevel = {
  SEKOLAH: 'SEKOLAH',
  KECAMATAN: 'KECAMATAN',
  KABUPATEN: 'KABUPATEN',
  PROVINSI: 'PROVINSI',
  NASIONAL: 'NASIONAL',
  INTERNASIONAL: 'INTERNASIONAL'
};

exports.AchievementRank = exports.$Enums.AchievementRank = {
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

exports.AchievementStatus = exports.$Enums.AchievementStatus = {
  PENDING: 'PENDING',
  APPROVED_WALI: 'APPROVED_WALI',
  APPROVED_BK: 'APPROVED_BK',
  REJECTED: 'REJECTED'
};

exports.ApprovalAction = exports.$Enums.ApprovalAction = {
  SUBMIT: 'SUBMIT',
  APPROVE: 'APPROVE',
  REJECT: 'REJECT',
  UPDATE: 'UPDATE',
  DELETE: 'DELETE',
  PUBLISH: 'PUBLISH',
  FEATURE: 'FEATURE'
};

exports.Prisma.ModelName = {
  Achievement: 'Achievement',
  AchievementApprovalHistory: 'AchievementApprovalHistory',
  AchievementStatistics: 'AchievementStatistics',
  HallOfFame: 'HallOfFame'
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
