import mongoose from "mongoose";

const { Schema } = mongoose;

const wordsSchema = new Schema(
  {
    title: {
      type: String,
      required: true,
    },
    text: [
      {
        type: String,
      },
    ],
    img: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

// export default mongoose.model("Words", wordsSchema);
export default mongoose.models.Words || mongoose.model("Words", wordsSchema);
