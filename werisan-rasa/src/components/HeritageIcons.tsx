import type { SVGProps } from "react";

export function IconCompass(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      width="1em"
      height="1em"
      {...props}
    >
      <circle cx="12" cy="12" r="9" />
      <polygon points="12 4 14.5 9.5 20 12 14.5 14.5 12 20 9.5 14.5 4 12 9.5 9.5 12 4" fill="currentColor" fillOpacity="0.15" />
      <circle cx="12" cy="12" r="1.5" fill="currentColor" />
    </svg>
  );
}

export function IconPrawn(props: SVGProps<SVGSVGElement>) {
  // Stylized minimal maritime crest / shrimp curve
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      width="1em"
      height="1em"
      {...props}
    >
      <path d="M19 12c0-4-3-7-7-7a7 7 0 0 0-7 7c0 2.5 1.5 4.5 3.5 5.5" />
      <path d="M12 5c-1.5 0-3 1-3.8 2.5" />
      <path d="M16 9c1.5 1 2 2.5 2 4a5 5 0 0 1-5 5c-2 0-3.5-1-4.2-2.5" />
      <path d="M14 18c0 1.5-1 3-3 3-2.5 0-4-2-4-4.5" />
      <circle cx="15.5" cy="7.5" r="0.75" fill="currentColor" />
    </svg>
  );
}

export function IconSagu(props: SVGProps<SVGSVGElement>) {
  // Stylized botanical palm frond / bloom
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      width="1em"
      height="1em"
      {...props}
    >
      <path d="M12 21V3" />
      <path d="M12 7c2-2.5 5-3 7-2-1 2.5-3 4.5-7 5" />
      <path d="M12 7c-2-2.5-5-3-7-2 1 2.5 3 4.5 7 5" />
      <path d="M12 12c2.5-2 5.5-2.5 7-1.5-1 2.5-3.5 4-7 4.5" />
      <path d="M12 12c-2.5-2-5.5-2.5-7-1.5 1 2.5 3.5 4 7 4.5" />
      <path d="M12 17c2-1.5 4.5-1.5 6-.5-1 2-3 3-6 3" />
      <path d="M12 17c-2-1.5-4.5-1.5-6-.5 1 2 3 3 6 3" />
    </svg>
  );
}

export function IconSesame(props: SVGProps<SVGSVGElement>) {
  // Stylized harvest grain sprig
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      width="1em"
      height="1em"
      {...props}
    >
      <path d="M5 20c3-2 6-6 7-12" />
      <path d="M11 6c1.5-2 3.5-2.5 4.5-1.5s.5 3-1.5 4.5-3.5 1-4.5 0" />
      <path d="M12 9c2-1 4-1 4.8.2.8 1.2 0 3-1.8 3.8-1.8.8-3.2.2-3.8-.8" />
      <path d="M10 13c1.8-1 3.5-.8 4.2.2.7 1 .1 2.6-1.5 3.3-1.6.7-3 .2-3.5-.6" />
      <path d="M8 16c1.5-.8 2.8-.5 3.3.3.5.8 0 2-1.2 2.6-1.3.6-2.4.2-2.8-.5" />
    </svg>
  );
}

export function IconSpices(props: SVGProps<SVGSVGElement>) {
  // Stylized star anise / clove motif
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      width="1em"
      height="1em"
      {...props}
    >
      <circle cx="12" cy="12" r="2.5" />
      <path d="M12 4v4m0 8v4M4 12h4m8 0h4" />
      <path d="m6.3 6.3 2.8 2.8m5.8 5.8 2.8 2.8m-11.4 0 2.8-2.8m5.8-5.8 2.8-2.8" />
    </svg>
  );
}

export function IconTemple(props: SVGProps<SVGSVGElement>) {
  // Minimalist heritage gapura / candi portal
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      width="1em"
      height="1em"
      {...props}
    >
      <path d="M3 21h18M5 21v-8l2-2v-4l2-2v-2h6v2l2 2v4l2 2v8" />
      <path d="M9 21v-6a3 3 0 0 1 6 0v6" />
      <path d="M12 3v3" />
    </svg>
  );
}

export function IconScroll(props: SVGProps<SVGSVGElement>) {
  // Archival seal / ledger insignia
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      width="1em"
      height="1em"
      {...props}
    >
      <circle cx="12" cy="12" r="8" />
      <circle cx="12" cy="12" r="5" strokeDasharray="2 2" />
      <path d="m10 12 1.5 1.5 3-3" />
    </svg>
  );
}

export function IconBook(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      width="1em"
      height="1em"
      {...props}
    >
      <path d="M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H20v20H6.5a2.5 2.5 0 0 1-2.5-2.5Z" />
      <path d="M6 6h10M6 10h10M6 14h6" />
    </svg>
  );
}

export function IconCheck(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
      width="1em"
      height="1em"
      {...props}
    >
      <polyline points="20 6 9 17 4 12" />
    </svg>
  );
}

export function IconLock(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      width="1em"
      height="1em"
      {...props}
    >
      <rect x="5" y="11" width="14" height="10" rx="2" />
      <path d="M8 11V7a4 4 0 0 1 8 0v4" />
    </svg>
  );
}

export function IconVolume(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      width="1em"
      height="1em"
      {...props}
    >
      <polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5" />
      <path d="M15.54 8.46a5 5 0 0 1 0 7.07" />
    </svg>
  );
}

export function IconVolumeMute(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      width="1em"
      height="1em"
      {...props}
    >
      <polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5" />
      <line x1="23" y1="9" x2="17" y2="15" />
      <line x1="17" y1="9" x2="23" y2="15" />
    </svg>
  );
}

export function IconArrowRight(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      width="1em"
      height="1em"
      {...props}
    >
      <line x1="5" y1="12" x2="19" y2="12" />
      <polyline points="12 5 19 12 12 19" />
    </svg>
  );
}

export function IconClose(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      width="1em"
      height="1em"
      {...props}
    >
      <line x1="18" y1="6" x2="6" y2="18" />
      <line x1="6" y1="6" x2="18" y2="18" />
    </svg>
  );
}

export function IconInsignia(props: SVGProps<SVGSVGElement>) {
  // Geometric diamond emblem / hallmark
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      width="1em"
      height="1em"
      {...props}
    >
      <rect x="4" y="4" width="16" height="16" transform="rotate(45 12 12)" />
      <circle cx="12" cy="12" r="2.5" fill="currentColor" />
    </svg>
  );
}
