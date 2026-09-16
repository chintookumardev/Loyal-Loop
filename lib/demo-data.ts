// Import the TypeScript types used by the mock loyalty data
import type {
  AnalyticsSummary,
  Customer,
  Program,
  StaffUser,
  StampEvent,
  Tenant,
} from "@/lib/types";

// Mock tenant/business information
export const tenant: Tenant = {
  // Unique tenant identifier
  id: "ten_kin-collective",

  // URL-friendly tenant identifier
  slug: "kin-coffee",

  // Display name of the business
  name: "Kin Coffee Club",

  // Business category
  category: "cafe",

  // City where the business is located
  city: "Kuala Lumpur",

  // Country where the business is located
  country: "Malaysia",

  // Current subscription plan
  plan: "trial",
};

// Mock loyalty program configuration
export const program: Program = {
  // Unique loyalty program identifier
  id: "prog_kin-stamps",

  // Associate the program with the tenant
  tenantId: tenant.id,

  // Name displayed for the loyalty program
  name: "Morning Regulars",

  // Loyalty program type
  type: "stamp",

  // Number of stamps required to earn a reward
  stampsRequired: 8,

  // Reward customers receive after completing the required stamps
  reward: "Free signature drink",

  // Primary brand color
  brandColor: "#243C2F",

  // Accent color used throughout the loyalty card
  accentColor: "#FFB454",

  // Background color used for the loyalty card
  backgroundColor: "#F5F0E7",

  // Short text used as the logo
  logoText: "KIN",

  // Terms and conditions for the loyalty program
  terms: "One stamp per visit. Reward cannot be exchanged for cash.",

  // Number of inactive days before a customer is considered for win-back
  inactiveWinbackDays: 21,
};

// Mock customer/member data
export const customers: Customer[] = [
  {
    // Unique customer identifier
    id: "cus_001",

    // Associate the customer with the tenant
    tenantId: tenant.id,

    // Customer email address
    email: "maya@example.com",

    // Customer name
    name: "Maya Tan",

    // Current stamp balance
    stamps: 6,

    // Total stamps collected over the customer's lifetime
    lifetimeStamps: 22,

    // Number of rewards already redeemed
    rewardsRedeemed: 2,

    // Date and time of the customer's most recent visit
    lastVisitAt: "2026-06-12T10:05:00+08:00",

    // Customer's wallet status
    walletStatus: "google",
  },
  {
    // Unique customer identifier
    id: "cus_002",

    // Associate the customer with the tenant
    tenantId: tenant.id,

    // Customer email address
    email: "amir@example.com",

    // Customer name
    name: "Amir Rahman",

    // Current stamp balance
    stamps: 2,

    // Total stamps collected over the customer's lifetime
    lifetimeStamps: 9,

    // Number of rewards already redeemed
    rewardsRedeemed: 1,

    // Date and time of the customer's most recent visit
    lastVisitAt: "2026-06-02T18:30:00+08:00",

    // Customer's wallet status
    walletStatus: "google",
  },
  {
    // Unique customer identifier
    id: "cus_003",

    // Associate the customer with the tenant
    tenantId: tenant.id,

    // Customer email address
    email: "sophia@example.com",

    // Customer name
    name: "Sophia Lim",

    // Current stamp balance
    stamps: 0,

    // Total stamps collected over the customer's lifetime
    lifetimeStamps: 4,

    // Number of rewards already redeemed
    rewardsRedeemed: 0,

    // Date and time of the customer's most recent visit
    lastVisitAt: "2026-05-09T08:20:00+08:00",

    // Customer's wallet status
    walletStatus: "google",
  },
];

// Mock staff user data
export const staffUsers: StaffUser[] = [
  {
    // Unique staff user identifier
    id: "usr_owner",

    // Associate the staff user with the tenant
    tenantId: tenant.id,

    // Staff member's name
    name: "Aisha Wong",

    // Staff member's email address
    email: "owner@kin.example",

    // Staff member's role
    role: "owner",

    // Date and time the staff member was last active
    lastActiveAt: "2026-06-12T09:30:00+08:00",
  },
  {
    // Unique staff user identifier
    id: "usr_staff",

    // Associate the staff user with the tenant
    tenantId: tenant.id,

    // Staff member's name
    name: "Ben Lee",

    // Staff member's email address
    email: "ben@kin.example",

    // Staff member's role
    role: "staff",

    // Date and time the staff member was last active
    lastActiveAt: "2026-06-12T11:42:00+08:00",
  },
];

// Mock stamp and reward event history
export const stampEvents: StampEvent[] = [
  {
    // Unique event identifier
    id: "evt_001",

    // Associate the event with the tenant
    tenantId: tenant.id,

    // Customer affected by the event
    customerId: "cus_001",

    // Staff member who performed the action
    staffName: "Ben Lee",

    // Type of loyalty event
    type: "stamp_added",

    // Date and time when the event occurred
    createdAt: "2026-06-12T10:05:00+08:00",
  },
  {
    // Unique event identifier
    id: "evt_002",

    // Associate the event with the tenant
    tenantId: tenant.id,

    // Customer affected by the event
    customerId: "cus_002",

    // Staff member who performed the action
    staffName: "Aisha Wong",

    // Type of loyalty event
    type: "reward_redeemed",

    // Date and time when the event occurred
    createdAt: "2026-06-10T12:10:00+08:00",
  },
  {
    // Unique event identifier
    id: "evt_003",

    // Associate the event with the tenant
    tenantId: tenant.id,

    // Customer affected by the event
    customerId: "cus_001",

    // Staff member who performed the action
    staffName: "Ben Lee",

    // Type of loyalty event
    type: "stamp_added",

    // Date and time when the event occurred
    createdAt: "2026-06-08T09:15:00+08:00",
  },
];

// Mock analytics summary for the tenant
export const analytics: AnalyticsSummary = {
  // Total visits during the last 30 days
  visits30d: 148,

  // Number of currently active members
  activeMembers: 86,

  // Number of inactive members
  inactiveMembers: 19,

  // Number of stamps issued during the last 30 days
  stampsIssued30d: 221,

  // Number of rewards redeemed during the last 30 days
  redemptions30d: 17,
};

// Find a customer using a token/customer ID
export function getCustomerByToken(token: string) {
  // Remove surrounding whitespace and normalize the token to lowercase
  const normalized = token.trim().toLowerCase();

  // Return the matching customer, or the first customer if no match exists
  return (
    customers.find((customer) => customer.id.toLowerCase() === normalized) ??
    customers[0]
  );
}
