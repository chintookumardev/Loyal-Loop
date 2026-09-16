// daynamica page
// Import Next.js helper for displaying a 404 Not Found page
import { notFound } from "next/navigation";

// Import the loyalty repository for retrieving venue loyalty data
import { getLoyaltyRepository } from "@/lib/repositry";

// Import the wallet card preview component
import { WalletCardPreview } from "@/components/wallet-card-preview";

// Import the customer loyalty program join form
import { JoinForm } from "@/components/join-form";

// Render the public loyalty program join page
export default async function JoinPage({
  // Receive the dynamic route parameters
  params,
}: {
  // Define the expected route parameter containing the venue slug
  params: Promise<{ venueSlug: string }>;
}) {
  // Wait for the route parameters and extract the venue slug
  const { venueSlug } = await params;

  // Fetch the public loyalty program data for this venue
  const joinData = await getLoyaltyRepository().getPublicJoinData(venueSlug);

  // Show a 404 page if no matching venue/program is found
  if (!joinData) {
    notFound();
  }

  // Extract the tenant and loyalty program from the retrieved data
  const { tenant, program } = joinData;

  // Render the join page
  return (
    <main className="min-h-screen bg-[#f7f2e8] px-5 py-8">
      {/* Create the main responsive two-column page layout */}
      <div className="mx-auto grid max-w-5xl gap-8 md:grid-cols-[1fr_420px]">
        {/* Left column containing venue information and the join form */}
        <section className="flex flex-col justify-center">
          {/* Display the venue's city and country */}
          <p className="text-sm font-semibold uppercase text-[#9b4d2f]">
            {tenant.city}, {tenant.country}
          </p>

          {/* Display the venue name in the main page heading */}
          <h1 className="mt-3 text-4xl font-semibold leading-tight">
            Join {tenant.name} rewards
          </h1>

          {/* Explain the loyalty program joining process */}
          <p className="mt-4 max-w-md leading-7 text-black/60">
            Enter your email, save the card to your phone, and collect stamps
            from your wallet. No app download.
          </p>

          {/* Container for the loyalty program join form */}
          <div className="mt-8 max-w-md">
            {/* Pass the venue slug to the join form */}
            <JoinForm venueSlug={venueSlug} />
          </div>
        </section>

        {/* Right column containing the wallet card preview */}
        <section className="flex items-center justify-center">
          {/* Display a preview of the loyalty wallet card with 3 stamps */}
          <WalletCardPreview tenant={tenant} program={program} stamps={3} />
        </section>
      </div>
    </main>
  );
}
