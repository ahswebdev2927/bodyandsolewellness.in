"use client";

import { usePathname } from "next/navigation";

export default function CanonicalTag() {
  const pathname = usePathname();
  // Ensure homepage has trailing slash and inner pages match exactly (e.g. /about)
  const canonicalUrl = `https://bodyandsoulwellness.in${pathname === "/" ? "/" : pathname}`;
  
  return <link rel="canonical" href={canonicalUrl} />;
}
