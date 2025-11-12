import mongoose from "mongoose";

const SessionSchema = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
  sessionCount: { type: Number, required: true },
  streak: { type: Number, default: 1 },
  transcript: [{ role: String, text: String }],
  recordingUrl: { type: String },
  moodPercentages: {
    positive: { type: Number, default: 0 },
    neutral: { type: Number, default: 0 },
    negative: { type: Number, default: 0 },
  },
  todayMood: { type: String, default: "neutral" },
  summary: { type: String },
  startTime: { type: Date },
  endTime: { type: Date },
  durationMinutes: { type: Number },
  emotionScore: { type: Number, min: 0, max: 10 },
  improvementPercent: { type: Number },
  stressDownPercent: { type: Number },
  avgLast7Score: { type: Number },
  last3Summaries: [{ type: String }],
  wellnessChecklist: [{ type: String }],
  aiRecommendations: [{ title: String, description: String }],
  topicDistribution: [
    {
      topic: { type: String },
      percentage: { type: Number },
    },
  ],
  topWords: [{ type: String }],
  mostDiscussedTopic: { type: String },
}, { timestamps: true });

export default mongoose.models.Session || mongoose.model("Session", SessionSchema);
