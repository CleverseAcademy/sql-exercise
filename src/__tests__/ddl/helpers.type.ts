import enforceDDLType, { DDLCommand } from "../../schemas/ddl/enforce.type";
import { Filename as DDLSchema } from "../../utils/types/ddl-path.type";

export interface TestSuite<D extends DDLCommand, S extends DDLCommand> {
  directive: enforceDDLType<D>;
  schema: DDLSchema<S>;
  schemaType: S;
}
