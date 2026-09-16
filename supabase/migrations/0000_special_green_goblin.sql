DO $$
BEGIN
  IF NOT EXISTS (
    SELECT 1 FROM pg_type
    WHERE typname = 'member_role'
    AND typnamespace = 'public'::regnamespace
  ) THEN
    CREATE TYPE public.member_role AS ENUM ('owner', 'manager', 'staff');
  END IF;

  IF NOT EXISTS (
    SELECT 1 FROM pg_type
    WHERE typname = 'program_type'
    AND typnamespace = 'public'::regnamespace
  ) THEN
    CREATE TYPE public.program_type AS ENUM ('stamp');
  END IF;

  IF NOT EXISTS (
    SELECT 1 FROM pg_type
    WHERE typname = 'stamp_event_type'
    AND typnamespace = 'public'::regnamespace
  ) THEN
    CREATE TYPE public.stamp_event_type AS ENUM (
      'stamp_added',
      'reward_redeemed',
      'reversal'
    );
  END IF;

  IF NOT EXISTS (
    SELECT 1 FROM pg_type
    WHERE typname = 'wallet_kind'
    AND typnamespace = 'public'::regnamespace
  ) THEN
    CREATE TYPE public.wallet_kind AS ENUM ('google');
  END IF;
END
$$;
