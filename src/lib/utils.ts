import { type ClassValue, clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';
import type * as schema from '../packages/db/src/schema';
import type {
  BuildQueryResult,
  DBQueryConfig,
  ExtractTablesWithRelations,
  InferSelectModel,
} from 'drizzle-orm';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export class PublicError extends Error {
  constructor(message: string) {
    super(message);
  }
}

type Schema = typeof schema;
type TablesWithRelations = ExtractTablesWithRelations<Schema>;

export type TIncludeRelation<TableName extends keyof TablesWithRelations> =
  DBQueryConfig<
    'one' | 'many',
    boolean,
    TablesWithRelations,
    TablesWithRelations[TableName]
  >['with'];

export type TIncludeColumns<TableName extends keyof TablesWithRelations> =
  DBQueryConfig<
    'one' | 'many',
    boolean,
    TablesWithRelations,
    TablesWithRelations[TableName]
  >['columns'];

export type TInferQueryModel<
  TableName extends keyof TablesWithRelations,
  Columns extends TIncludeColumns<TableName> | undefined = undefined,
  With extends TIncludeRelation<TableName> | undefined = undefined,
> = BuildQueryResult<
  TablesWithRelations,
  TablesWithRelations[TableName],
  {
    columns: Columns;
    with: With;
  }
>;

export type TLoadedUser = InferSelectModel<typeof schema.users> & {
  isPro: boolean;
  writerSubscriptions:
    | undefined
    | InferSelectModel<typeof schema.writerSubscriptions>;
  writer:
    | undefined
    | (InferSelectModel<typeof schema.writers> & {
        referenceRequests:
          | undefined
          | (InferSelectModel<typeof schema.referenceRequests> & {
              referenceLetters: InferSelectModel<
                typeof schema.referenceLetters
              >[];
            })[];
      });
};

export function stringToEnum<T extends object>(
  enumObj: T,
  value: string,
): T[keyof T] | undefined {
  // Use type assertion to cast the enum object to an object with string keys
  const keys = Object.keys(enumObj) as Array<keyof T>;
  const key = keys.find(k => k === value || enumObj[k] === value);
  if (key !== undefined) {
    return enumObj[key];
  }
  return undefined;
}

export function arraysEqual<T>(a: T[] | null, b: T[] | null) {
  if (a === b) return true;
  if (a == null || b == null) return false;
  if (a.length !== b.length) return false;

  for (let i = 0; i < a.length; ++i) {
    if (a[i] !== b[i]) return false;
  }
  return true;
}
