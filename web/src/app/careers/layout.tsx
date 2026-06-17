import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Careers',
  description:
    'Join Space Node Architects — a multidisciplinary practice creating timeless architecture. View open positions and submit your portfolio.',
};

export default function CareersLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
