"use client";

// Import icons used by the join form
import { Check, Mail, WalletCards } from "lucide-react";

// Import React state management and the form submit event type
import { SubmitEvent, useState } from "react";

// Props required by the JoinForm component
type JoinFormProps = {
  // URL-friendly identifier for the venue
  venueSlug: string;
};

// Expected response returned by the join API
type JoinResponse = {
  // URL used to add the loyalty card to Google Wallet
  googleUrl: string;

  // Identifier for the wallet pass created by the provider
  providerPassId: string;

  // Indicates how the wallet pass was created
  mode: "demo" | "external" | "direct";

  // Additional information returned by the API
  note: string;
};

// Form used by customers to join a venue's loyalty program
export function JoinForm({ venueSlug }: JoinFormProps) {
  // Store the customer's email address
  const [email, setEmail] = useState("");

  // Store whether the customer has agreed to receive marketing updates
  const [consent, setConsent] = useState(false);

  // Track whether the form submission is currently being processed
  const [isPending, setIsPending] = useState(false);

  // Store the API response after a successful join
  const [result, setResult] = useState<JoinResponse | null>(null);

  // Handle submission of the join form
  const onSubmit = async (event: SubmitEvent<HTMLFormElement>) => {
    // Prevent the browser from performing a normal form submission
    event.preventDefault();

    // Mark the form as being processed
    setIsPending(true);

    // Send the customer's email and marketing consent to the join API
    const resonse = await fetch(`/api/public/${venueSlug}/join`, {
      // Use POST because the request creates/enrolls a customer
      method: "POST",

      // Send the form data as JSON
      body: JSON.stringify({ email, marketingConsent: consent }),
    });

    // Convert the API response into JSON
    const data = await resonse.json();

    // Store the API response so the success card can be displayed
    setResult(data);

    // Mark the form submission as complete
    setIsPending(false);
  };

  // Display the success state after the customer has joined
  if (result) {
    return (
      <div className="rounded-lg border border-black/10 bg-white p-5 shadow-sm">
        {/* Success header containing the check icon and status message */}
        <div className="flex items-center gap-3">
          {/* Circular success icon */}
          <div className="grid size-10 place-items-center rounded-full bg-[#243c2f] text-white">
            <Check className="size-5" />
          </div>

          {/* Success title and wallet mode description */}
          <div>
            <h2 className="font-semibold">Your card is ready</h2>

            {/* Display different instructions depending on the wallet mode */}
            <p className="text-sm text-black/55">
              {result.mode === "demo"
                ? "Tutorial mode is simulating wallet install."
                : result.mode === "direct"
                  ? "Google Wallet is using direct integration."
                  : "Choose your wallet below."}
            </p>
          </div>
        </div>

        {/* Display the additional message returned by the API */}
        <div className="mt-4 rounded-lg bg-[#f7f2e8] p-3 text-sm text-black/65">
          {result.note}
        </div>

        {/* Wallet installation actions */}
        <div className="mt-5 grid gap-3">
          {/* Link for adding the loyalty card to Google Wallet */}
          <a
            href={result.googleUrl}
            className="rounded-lg bg-black px-4 py-3 text-center font-semibold text-white"
          >
            Add to Google Wallet
          </a>
        </div>

        {/* Display the provider pass ID for reference */}
        <p className="mt-4 text-xs text-black/45">
          Pass id: {result.providerPassId}
        </p>
      </div>
    );
  }

  // Display the join form before the customer has submitted it
  return (
    <form
      onSubmit={onSubmit}
      className="rounded-lg border border-black/10 bg-white p-5 shadow-sm"
    >
      {/* Label for the email input */}
      <label className="text-sm font-medium text-black/70" htmlFor="email">
        Email address
      </label>

      {/* Email input container */}
      <div className="mt-2 flex items-center gap-2 rounded-lg border border-black/15 px-3">
        {/* Email icon */}
        <Mail className="size-4 text-black/40" />

        {/* Customer email input */}
        <input
          id="email"
          type="email"
          required
          value={email}
          onChange={(event) => setEmail(event.target.value)}
          placeholder="you@example.com"
          className="h-12 w-full bg-transparent outline-none"
        />
      </div>

      {/* Marketing consent checkbox */}
      <label className="mt-4 flex items-start gap-3 text-sm text-black/60">
        <input
          type="checkbox"
          checked={consent}
          onChange={(event) => setConsent(event.target.checked)}
          className="mt-1"
        />

        {/* Text explaining the marketing consent */}
        Send me loyalty updates and rewards from this venue.
      </label>

      {/* Form submission button */}
      <button
        type="submit"
        disabled={isPending}
        className="mt-5 inline-flex h-12 w-full items-center justify-center gap-2 rounded-lg bg-[#e95f3d] font-semibold text-white disabled:opacity-60"
      >
        {/* Wallet icon displayed on the button */}
        <WalletCards className="size-5" />

        {/* Change the button text while the request is being processed */}
        {isPending ? "Creating card..." : "Create wallet card"}
      </button>
    </form>
  );
}
