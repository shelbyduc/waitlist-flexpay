// Animated aurora gradient blobs + grid. Purely decorative, fixed behind content.
export function Background() {
  return (
    <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden" aria-hidden="true">
      <div className="absolute inset-0 bg-[var(--color-bg)]" />
      <div className="grid-overlay absolute inset-0" />

      <div
        className="animate-aurora absolute -top-40 left-1/2 h-[520px] w-[520px] -translate-x-1/2 rounded-full opacity-50 blur-[120px]"
        style={{ background: "radial-gradient(circle, #ff5e9c 0%, transparent 65%)" }}
      />
      <div
        className="animate-aurora absolute top-10 -left-40 h-[440px] w-[440px] rounded-full opacity-45 blur-[120px]"
        style={{ background: "radial-gradient(circle, #c77dff 0%, transparent 65%)", animationDelay: "-7s" }}
      />
      <div
        className="animate-aurora absolute top-32 -right-40 h-[460px] w-[460px] rounded-full opacity-35 blur-[120px]"
        style={{ background: "radial-gradient(circle, #ff4dd8 0%, transparent 65%)", animationDelay: "-13s" }}
      />

      {/* Bottom fade so content sits on near-black. */}
      <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-b from-transparent to-[var(--color-bg)]" />

      {/* Film grain for a premium, non-flat texture. */}
      <div
        className="absolute inset-0 opacity-[0.04] mix-blend-soft-light"
        style={{
          backgroundImage:
            "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='160' height='160'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E\")",
        }}
      />
    </div>
  );
}
