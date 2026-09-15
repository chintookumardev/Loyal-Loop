// Import PostgreSQL column types and table utilities from Drizzle ORM.
import {
  boolean, // Boolean data type: true or false.
  integer, // Integer number data type.
  jsonb, // PostgreSQL JSON/JSONB data type for structured data.
  pgEnum, // Creates PostgreSQL enum types.
  pgTable, // Creates PostgreSQL database tables.
  text, // Text/string data type.
  timestamp, // Timestamp/date-time data type.
  uniqueIndex, // Creates a unique database index.
  uuid, // UUID data type for unique identifiers.
} from "drizzle-orm/pg-core";

// Defines the roles that a member can have within a tenant/business.
export const memberRole = pgEnum("member_role", ["owner", "manager", "staff"]);

// Defines the types of loyalty programs supported by the application.
export const programType = pgEnum("program_type", ["stamp"]);

// Defines the types of digital wallets supported by the application.
export const walletKind = pgEnum("wallet_kind", ["google"]);

// Defines the different events that can happen to a customer's stamp wallet.
export const stampEventType = pgEnum("stamp_event_type", [
  "stamp_added", // A new loyalty stamp was added.
  "reward_redeemed", // A customer redeemed a reward.
  "reversal", // A previous stamp/reward action was reversed.
]);

// Defines the tenants table.
// A tenant represents a separate business/account using the Loyal Loop platform.
export const tenants = pgTable("tenants", {
  // Unique identifier for the tenant.
  // A random UUID is automatically generated when a new tenant is created.
  id: uuid("id").defaultRandom().primaryKey(),

  // URL-friendly unique identifier for the tenant.
  // Example: "coffee-house".
  slug: text("slug").notNull().unique(),

  // Display name of the business.
  name: text("name").notNull(),

  // Business category.
  // Example: "Coffee Shop", "Restaurant", or "Salon".
  category: text("category").notNull(),

  // City where the business is located.
  city: text("city").notNull(),

  // Country where the business is located.
  country: text("country").notNull(),

  // Subscription plan used by the tenant.
  // New tenants start on the "trial" plan by default.
  plan: text("plan").notNull().default("trial"),

  // Stripe customer ID associated with the tenant.
  // This is optional because a tenant may not have a Stripe customer yet.
  stripeCustomerId: text("stripe_customer_id"),

  // Stripe subscription ID associated with the tenant.
  // This is optional because the tenant may not have an active subscription.
  stripeSubscriptionId: text("stripe_subscription_id"),

  // Current billing status of the tenant.
  // New tenants start with a "trialing" status by default.
  billingStatus: text("billing_status").notNull().default("trialing"),

  // Date and time when the tenant was created.
  // withTimezone ensures the timestamp stores timezone information.
  // defaultNow() automatically sets the current date/time.
  createdAt: timestamp("created_at", { withTimezone: true })
    .defaultNow()
    .notNull(),
});
