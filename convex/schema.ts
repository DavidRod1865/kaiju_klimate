import { defineSchema, defineTable } from "convex/server";
import { v } from "convex/values";

export default defineSchema({
  weather: defineTable({
    location: v.string(),
    currentCondition: v.string(),
    temperature: v.number(),
    feelsLike: v.number(),
    kaijuDescription: v.string(),
    forecast: v.array(
      v.object({
        date: v.string(),
        condition: v.string(),
        tempature: v.number(),
        feelsLike: v.number(),
        kaijuDescription: v.string(),
        icon: v.string(),
        kaijuIcon: v.string(),
        kaijuName: v.string(),
      })
    ),
  }),
});
