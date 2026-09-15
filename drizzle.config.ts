// Import the configuration helper from Drizzle Kit.
import { defineConfig } from "drizzle-kit";

// Export the Drizzle Kit configuration.
export default defineConfig({
  // Location of the Drizzle database schema file.
  schema: "./db/schema.ts",

  // Directory where generated PostgreSQL/Supabase migration files will be stored.
  out: "./supabase/migrations",

  // Database dialect used by the project.
  dialect: "postgresql",

  // Database connection credentials.
  dbCredentials: {
    // Reads the PostgreSQL connection URL from the environment variables.
    // The "!" tells TypeScript that DATABASE_URL is expected to be defined.
    url: process.env.DATABASE_URL!,
  },
});
