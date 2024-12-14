import { DB_MODELS } from "../constants/db-models.constant.js";
import { PRODUCT_STATUS } from "../constants/db.constant.js";
import { PRODUCTS } from "../constants/products.constant.js";
import { generateModel, generateSchema, ObjectIdType } from "../db/db.odm.js";

const productSchemaPattern = {
  name: {
    type: String,
    enum: Object.values(PRODUCTS),
    required: true,
  },
  description: {
    type: String,
  },
  logo: {
    type: String,
  },
  status: {
    type: String,
    enum: Object?.values(PRODUCT_STATUS),
  },
  createdBy: {
    type: ObjectIdType,
    ref: DB_MODELS?.USER,
  },
};

const productSchema = generateSchema(productSchemaPattern);

export const Product = generateModel(DB_MODELS?.PRODUCT, productSchema);
