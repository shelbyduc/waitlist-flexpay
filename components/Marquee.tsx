// Decorative, language-neutral strip of currencies that scrolls continuously.
// Reinforces "multi-currency / global" without making any numeric claim.
const currencies = [
  { s: "$", c: "USD" },
  { s: "€", c: "EUR" },
  { s: "£", c: "GBP" },
  { s: "¥", c: "JPY" },
  { s: "₹", c: "INR" },
  { s: "R$", c: "BRL" },
  { s: "₩", c: "KRW" },
  { s: "₦", c: "NGN" },
  { s: "A$", c: "AUD" },
  { s: "CHF", c: "CHF" },
  { s: "S$", c: "SGD" },
  { s: "₺", c: "TRY" },
  { s: "¥", c: "CNY" },
  { s: "₿", c: "BTC" },
];

export function Marquee() {
  const items = [...currencies, ...currencies];
  return (
    <div className="marquee-mask relative overflow-hidden py-6">
      <div className="animate-marquee flex w-max items-center gap-10 sm:gap-14">
        {items.map((cur, i) => (
          <div key={i} className="flex shrink-0 items-center gap-2.5 text-[var(--color-muted)]">
            <span className="text-lg font-semibold text-[var(--color-brand-light)]">{cur.s}</span>
            <span className="text-sm font-medium tracking-wide">{cur.c}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
