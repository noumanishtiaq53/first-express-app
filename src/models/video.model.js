import { DB_MODELS } from "../constants/db-models.constant";
import { generateSchema, ObjectIdType } from "../db/db.odm";

const videoSchemaPattern = {
  videoFile: {
    type: String, //cloudinary url
    required: true,
  },
  thumbnail: {
    type: String, //cloudinary url
    required: true,
  },
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  duration: {
    type: Number,
    required: true,
  },
  views: {
    type: Number,
    default: 0,
  },
  isPublished: {
    type: Boolean,
    default: true,
  },
  owner: {
    type: ObjectIdType,
    ref: DB_MODELS?.USER,
  },
};

const videoSchema = generateSchema(videoSchemaPattern);
export const Video = generateModel(DB_MODELS?.VIDEO, videoSchema);
