# Migration `20201006003240-updated-names`

This migration has been generated by Johnny Ung at 10/5/2020, 5:32:40 PM.
You can check out the [state of the schema](./schema.prisma) after the migration.

## Database Steps

```sql
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Todo" (
    "todoId" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "text" TEXT NOT NULL,
    "completed" BOOLEAN NOT NULL DEFAULT false,
    "userUserId" INTEGER,

    FOREIGN KEY ("userUserId") REFERENCES "User"("userId") ON DELETE SET NULL ON UPDATE CASCADE
);
INSERT INTO "new_Todo" ("text", "completed") SELECT "text", "completed" FROM "Todo";
DROP TABLE "Todo";
ALTER TABLE "new_Todo" RENAME TO "Todo";
CREATE TABLE "new_User" (
    "userId" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "name" TEXT NOT NULL
);
INSERT INTO "new_User" ("name") SELECT "name" FROM "User";
DROP TABLE "User";
ALTER TABLE "new_User" RENAME TO "User";
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON
```

## Changes

```diff
diff --git schema.prisma schema.prisma
migration 20201005183429-updated-todo..20201006003240-updated-names
--- datamodel.dml
+++ datamodel.dml
@@ -1,21 +1,21 @@
 datasource db {
   provider = "sqlite"
-  url = "***"
+  url = "***"
 }
 generator client {
   provider = "prisma-client-js"
 }
 model User {
-  id    Int @default(autoincrement()) @id
+  userId    Int @default(autoincrement()) @id
   name  String
   todos Todo[]
 }
 model Todo {
-  id        Int  @default(autoincrement()) @id
+  todoId        Int  @default(autoincrement()) @id
   text      String
   completed Boolean @default(false)
   assigned  User?
 }
```


