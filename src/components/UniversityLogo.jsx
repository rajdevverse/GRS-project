function UniversityLogo({ size = 130 }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 130 130"
      xmlns="http://www.w3.org/2000/svg"
      className="mx-auto d-block"
    >
      <defs>
        <linearGradient id="logoRing" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#1e3a8a" />
          <stop offset="100%" stopColor="#7f1d1d" />
        </linearGradient>
        <linearGradient id="logoFill" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#1e40af" />
          <stop offset="100%" stopColor="#312e81" />
        </linearGradient>
      </defs>

      <circle cx="65" cy="65" r="62" fill="url(#logoFill)" />
      <circle
        cx="65"
        cy="65"
        r="62"
        fill="none"
        stroke="url(#logoRing)"
        strokeWidth="3"
      />
      <circle
        cx="65"
        cy="65"
        r="53"
        fill="none"
        stroke="#c9a227"
        strokeWidth="1.5"
        strokeDasharray="2 4"
        opacity="0.7"
      />

      {/* Open book / knowledge motif */}
      <path
        d="M65 48c-8-6-18-7-26-4v34c8-3 18-2 26 4 8-6 18-7 26-4V44c-8-3-18-2-26 4z"
        fill="#ffffff"
        opacity="0.95"
      />
      <path
        d="M65 48v34"
        stroke="#1e3a8a"
        strokeWidth="1.5"
        opacity="0.5"
      />

      {/* Star accent above */}
      <path
        d="M65 20l2.6 5.4 5.9.6-4.4 4 1.2 5.9L65 33l-5.3 2.9 1.2-5.9-4.4-4 5.9-.6z"
        fill="#c9a227"
      />
    </svg>
  );
}

export default UniversityLogo;
