-- Run this in your Supabase project: Dashboard → SQL Editor → New query → paste → Run.
-- It creates the waitlist table and the security policy that lets the public
-- landing page insert emails (but never read them back).

create table if not exists public.waitlist (
  id          uuid primary key default gen_random_uuid(),
  email       text not null unique,
  language    text,
  source      text,
  created_at  timestamptz not null default now()
);

-- Lock the table down with Row Level Security.
alter table public.waitlist enable row level security;

-- Allow anyone (the anon/publishable key used by the website) to INSERT a signup.
-- No SELECT/UPDATE/DELETE policy exists, so the public cannot read the list.
drop policy if exists "Public can join the waitlist" on public.waitlist;
create policy "Public can join the waitlist"
  on public.waitlist
  for insert
  to anon, authenticated
  with check (true);

-- Helpful index for de-duplication lookups.
create index if not exists waitlist_email_idx on public.waitlist (email);
