import mongoose, { Schema, model, models } from 'mongoose';
import * as schemaType from '@/backend/graphql/generated/schemaType';

// 2. Create a Schema corresponding to the document interface.
const schema = new Schema<schemaType.Company>({
  companyName: { type: String, required: true },
  logo: { type: String, },
  managerName: { type: String, required: true },
  activity: { type: String, required: true },
  sectorActivity: { type: String, required: true },
  state:{ type: String, required: true },
  address:{ type: String, required: true },
  phone:{ type: String,  },
  cell:{ type: String,  },
  email:{ type: String, required: true },
  website:{ type: String,  },
  facebook:{ type: String,  },
  services:{ type: String, },
  created: {
    type: Date,
    default: Date.now,
  },


});

schema.plugin(require('mongoose-autopopulate'));

export default models.Company || model<schemaType.Company>('Company', schema);
