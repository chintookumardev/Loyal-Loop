// Available roles for users within a tenant
export type Role = "owner" | "manager" | "staff";

// Loyalty program configuration
export type Program = {
  // Unique program identifier
  id: string;

  // ID of the tenant that owns this program
  tenantId: string;

  // Program display name
  name: string;

  // Type of loyalty program
  type: "stamp";

  // Number of stamps required to earn a reward
  stampsRequired: number;

  // Reward given after reaching the required stamp count
  reward: string;

  // Primary brand color
  brandColor: string;

  // Accent color used for highlights
  accentColor: string;

  // Background color for the loyalty experience
  backgroundColor: string;

  // Short text used as the program logo
  logoText: string;

  // Loyalty program terms and conditions
  terms: string;

  // Number of inactive days before a customer is considered for win-back
  inactiveWinbackDays: number;
};

// Tenant/business information
export type Tenant = {
  // Unique tenant identifier
  id: string;

  // URL-friendly tenant identifier
  slug: string;

  // Tenant/business name
  name: string;

  // Supported business category
  category: "cafe" | "gym" | "padel";

  // City where the tenant is located
  city: string;

  // Country where the tenant is located
  country: string;

  // Subscription plan assigned to the tenant
  plan: "trial" | "starter" | "growth" | "multi-location";
};

// Customer/member information
export type Customer = {
  // Unique customer identifier
  id: string;

  // ID of the tenant the customer belongs to
  tenantId: string;

  // Customer email address
  email: string;

  // Customer name
  name: string;

  // Customer's current stamp balance
  stamps: number;

  // Total stamps collected throughout the customer's lifetime
  lifetimeStamps: number;

  // Number of rewards redeemed by the customer
  rewardsRedeemed: number;

  // Date and time of the customer's last visit
  lastVisitAt: string;

  // Current wallet status
  walletStatus: "not_added" | "google";

  // Optional token used to identify the customer's membership
  memberToken?: string;

  // Optional provider-specific wallet pass identifier
  providerPassId?: string;
};

// Staff/user account information
export type StaffUser = {
  // Unique staff user identifier
  id: string;

  // ID of the tenant the staff member belongs to
  tenantId: string;

  // Staff member's name
  name: string;

  // Staff member's email address
  email: string;

  // Staff member's role within the tenant
  role: Role;

  // Date and time when the staff member was last active
  lastActiveAt: string;
};

// Loyalty stamp/reward event
export type StampEvent = {
  // Unique event identifier
  id: string;

  // ID of the tenant where the event occurred
  tenantId: string;

  // ID of the customer affected by the event
  customerId: string;

  // Name of the staff member who performed the action
  staffName: string;

  // Type of loyalty event
  type: "stamp_added" | "reward_redeemed" | "reversal";

  // Date and time when the event occurred
  createdAt: string;
};

// Summary of loyalty program analytics
export type AnalyticsSummary = {
  // Number of visits during the last 30 days
  visits30d: number;

  // Number of active members
  activeMembers: number;

  // Number of inactive members
  inactiveMembers: number;

  // Number of stamps issued during the last 30 days
  stampsIssued30d: number;

  // Number of rewards redeemed during the last 30 days
  redemptions30d: number;
};

// Subscription/billing plan configuration
export type BillingPlan = {
  // Internal identifier for the billing plan
  id: "starter" | "growth" | "multi-location";

  // Display name of the billing plan
  name: string;

  // Price displayed to the customer
  price: string;

  // Environment variable containing the Stripe price ID
  stripePriceEnv: string;

  // Maximum number of venues allowed by the plan
  venueLimit: string;

  // Maximum number of members allowed by the plan
  memberLimit: string;

  // Features included with the plan
  features: string[];
};

// Result returned after attempting to deliver a campaign
export type CampaignDeliveryResult = {
  // Number of campaign messages queued for delivery
  queued: number;

  // Number of messages successfully sent
  sent: number;

  // Number of messages skipped
  skipped: number;

  // Indicates whether the delivery was live or demo mode
  mode: "live" | "demo";
};

// Result returned after enrolling a customer
export type EnrollmentResult = {
  // Tenant associated with the enrollment
  tenant: Tenant;

  // Loyalty program associated with the enrollment
  program: Program;

  // Newly enrolled customer
  customer: Customer;
};

// Available actions that can be performed on a customer's stamps
export type StampAction = "stamp" | "redeem" | "reverse";

// Result returned after performing a stamp-related action
export type StampResult = {
  // Customer affected by the action
  customer: Customer;

  // Action that was performed
  action: StampAction;

  // Whether the customer currently has a reward ready
  rewardReady: boolean;

  // Number of stamps required to earn a reward
  stampsRequired: number;
};

// Data required to render the tenant dashboard
export type DashboardData = {
  // Tenant/business information
  tenant: Tenant;

  // Loyalty program configuration
  program: Program;

  // List of customers belonging to the tenant
  customers: Customer[];

  // List of staff users belonging to the tenant
  staffUsers: StaffUser[];

  // Loyalty event history
  stampEvents: StampEvent[];

  // Analytics summary
  analytics: AnalyticsSummary;

  // Indicates whether the data came from Supabase or demo data
  source: "supabase" | "demo";
};

// Data required for the platform administrator dashboard
export type PlatformAdminData = {
  // List of all tenants
  tenants: Tenant[];

  // Total number of members across tenants
  totalMembers: number;

  // Number of active wallet passes
  activePasses: number;

  // Number of stamps issued during the current month
  monthlyStamps: number;

  // Number of tenants currently on a trial plan
  trialTenants: number;
};
