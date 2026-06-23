export function Logo({ className = "" }: { className?: string }) {
  return (
    <span className={`inline-flex items-center gap-2.5 font-semibold ${className}`}>
      {/* Original mark: an ascending "spark" — value moving up and forward.
          Abstract (no letterform), tied to the Ember identity. */}
      <svg
        viewBox="0 0 32 32"
        className="h-7 w-7 shrink-0 [filter:drop-shadow(0_2px_8px_rgba(255,77,216,0.45))]"
        aria-hidden="true"
        fill="none"
      >
        <defs>
          <linearGradient id="flexpay-mark" x1="4" y1="28" x2="27" y2="5" gradientUnits="userSpaceOnUse">
            <stop offset="0%" stopColor="#ffa6cd" />
            <stop offset="50%" stopColor="#ff5e9c" />
            <stop offset="100%" stopColor="#c77dff" />
          </linearGradient>
        </defs>

        {/* Comet tail */}
        <path
          d="M4 27 C 11 25, 19 17, 26 6"
          stroke="url(#flexpay-mark)"
          strokeWidth="3.2"
          strokeLinecap="round"
        />
        {/* Arrowhead pointing up-and-forward */}
        <path
          d="M26 6 L19.4 6.5 M26 6 L25.6 12.7"
          stroke="url(#flexpay-mark)"
          strokeWidth="3.2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        {/* Ember sparks trailing the motion */}
        <circle cx="3.4" cy="29" r="1.5" fill="#ffa6cd" />
        <circle cx="7.2" cy="25.4" r="1" fill="#ff5e9c" />
      </svg>

      <span className="text-lg tracking-tight">
        Flex<span className="text-gradient">pay</span>
      </span>
    </span>
  );
}
