import fs from "fs";
import { mergeTypeDefs } from "@graphql-tools/merge";
import { typeDefs } from "../src/models";
import { print } from "graphql";

const mergedTypeDefs = mergeTypeDefs(typeDefs);
const printedTypeDefs = print(mergedTypeDefs);

fs.writeFileSync("schema.graphql", printedTypeDefs);
console.log("🚀 schema.graphql updated!");
