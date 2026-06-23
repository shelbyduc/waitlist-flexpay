import { Logo } from "./Logo";

// Illustrative product UI shown in the hero — a stylized dashboard mock,
// the way Stripe/Linear preview their app. Decorative, not a data claim.
export function ProductPreview() {
  const rows = [
    { name: "Lumen Studio", cur: "EUR", amount: "€1,240.00" },
    { name: "Northwind Co.", cur: "USD", amount: "$3,980.50" },
    { name: "Sakura Labs", cur: "JPY", amount: "¥86,400" },
    { name: "Atlas Mobility", cur: "GBP", amount: "£2,150.00" },
  ];

  return (
    <div className="relative mx-auto w-full max-w-5xl [perspective:1800px]">
      {/* Glow behind the card */}
      <div
        className="absolute -inset-x-10 -top-10 bottom-0 -z-10 blur-3xl"
        style={{
          background:
            "radial-gradient(60% 50% at 50% 0%, rgba(255,77,216,0.30), transparent 70%)",
        }}
      />

      <div className="glass rounded-2xl p-2 shadow-2xl [transform:rotateX(7deg)] sm:rounded-[1.75rem] sm:p-3">
        <div className="rounded-xl bg-[var(--color-bg-soft)]/80 ring-1 ring-[var(--color-border)] sm:rounded-[1.35rem]">
          {/* Window chrome */}
          <div className="flex items-center gap-3 border-b border-[var(--color-border)] px-4 py-3 sm:px-5">
            <div className="flex gap-1.5">
              <span className="h-3 w-3 rounded-full bg-white/15" />
              <span className="h-3 w-3 rounded-full bg-white/15" />
              <span className="h-3 w-3 rounded-full bg-white/15" />
            </div>
            <div className="mx-auto flex items-center gap-2 rounded-md bg-white/[0.03] px-3 py-1 text-[11px] text-[var(--color-muted)] sm:text-xs">
              <span className="h-1.5 w-1.5 rounded-full bg-[var(--color-brand)]" />
              app.flexpay.com
            </div>
            <Logo className="hidden text-white/90 sm:inline-flex [&_span:last-child]:hidden" />
          </div>

          <div className="grid gap-5 p-5 sm:grid-cols-5 sm:gap-7 sm:p-8">
            {/* Volume + sparkline */}
            <div className="sm:col-span-3">
              <p className="text-xs text-[var(--color-muted)] sm:text-sm">Net volume</p>
              <div className="mt-1 flex items-end gap-2">
                <span className="text-3xl font-semibold tracking-tight text-white sm:text-4xl">
                  $248,920
                </span>
                <span className="mb-1.5 rounded-full bg-[var(--color-brand)]/15 px-2 py-0.5 text-[11px] font-medium text-[var(--color-brand-light)] sm:text-xs">
                  +12.4%
                </span>
              </div>

              <svg viewBox="0 0 320 110" className="mt-5 h-28 w-full sm:h-36" preserveAspectRatio="none">
                <defs>
                  <linearGradient id="spark-line" x1="0" y1="0" x2="320" y2="0">
                    <stop offset="0%" stopColor="#ff5e9c" />
                    <stop offset="100%" stopColor="#c77dff" />
                  </linearGradient>
                  <linearGradient id="spark-fill" x1="0" y1="0" x2="0" y2="110">
                    <stop offset="0%" stopColor="#ff5e9c" stopOpacity="0.3" />
                    <stop offset="100%" stopColor="#ff5e9c" stopOpacity="0" />
                  </linearGradient>
                </defs>
                <path
                  d="M0 86 C 30 78, 50 50, 80 54 S 130 80, 160 60 S 220 22, 260 34 S 300 14, 320 20"
                  fill="none"
                  stroke="url(#spark-line)"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                />
                <path
                  d="M0 86 C 30 78, 50 50, 80 54 S 130 80, 160 60 S 220 22, 260 34 S 300 14, 320 20 L320 110 L0 110 Z"
                  fill="url(#spark-fill)"
                />
              </svg>
            </div>

            {/* Recent payments */}
            <div className="sm:col-span-2">
              <p className="mb-3 text-xs text-[var(--color-muted)] sm:text-sm">Recent payments</p>
              <ul className="space-y-3">
                {rows.map((r) => (
                  <li key={r.name} className="flex items-center gap-3">
                    <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-[var(--color-brand)] to-[var(--color-accent)] text-xs font-semibold text-[var(--ink)]">
                      {r.name[0]}
                    </span>
                    <div className="min-w-0 flex-1">
                      <p className="truncate text-xs font-medium text-white sm:text-sm">{r.name}</p>
                      <p className="text-[11px] text-[var(--color-muted)]">{r.cur}</p>
                    </div>
                    <span className="text-xs font-semibold text-white sm:text-sm">{r.amount}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Floating success toast for depth */}
      <div className="animate-float glass absolute -bottom-5 -left-3 hidden items-center gap-2.5 rounded-2xl px-4 py-2.5 shadow-xl sm:flex">
        <span className="flex h-7 w-7 items-center justify-center rounded-full bg-gradient-to-br from-[var(--color-brand)] to-[var(--color-accent)]">
          <svg viewBox="0 0 24 24" className="h-4 w-4 text-[var(--ink)]" fill="none" stroke="currentColor" strokeWidth="3">
            <path d="m5 13 4 4L19 7" />
          </svg>
        </span>
        <div>
          <p className="text-xs font-semibold text-white">Payment received</p>
          <p className="text-[11px] text-[var(--color-muted)]">Settled in 1.2s</p>
        </div>
      </div>
    </div>
  );
}
