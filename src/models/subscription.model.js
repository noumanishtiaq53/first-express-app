import { ObjectIdType } from "../db/db.odm";

const subscriptionSchemaPattern = {
  subscriber: {
    type: ObjectIdType,
    ref: DB_MODELS?.USER,
  },
  channel: {
    type: ObjectIdType,
    ref: DB_MODELS?.USER,
  },
};

const subscriptionSchema = generateSchema(subscriptionSchemaPattern);

export const Subscription = generateModel(
  DB_MODELS?.SUBSCRIPTION,
  subscriptionSchema
);
