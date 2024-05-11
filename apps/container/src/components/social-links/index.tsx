import { Badge } from '@mfe-nx/ui';
import { BadgeCheck } from 'lucide-react';

const socialLinks = [
  {
    name: '🔗 LinkedIn',
    url: '',
  },
  {
    name: '🔗 Twitter',
    url: '',
  },
];

export default function SocialLinks() {
  return (
    <section className="flex flex-col items-center justify-center w-full gap-y-4">
      <Badge className="gap-x-2" variant="secondary">
        <BadgeCheck />
        Primary Badge
      </Badge>
      <div className="flex flex-row items-center justify-center w-full  divide-black rounded-lg md:w-1/3">
        {socialLinks.map(({ name, url }) => (
          <a
            className="px-4 text-xl hover:underline text-primary"
            href={url}
            key={name}
            rel="noreferrer"
            target="_blank"
          >
            {name}
          </a>
        ))}
      </div>
    </section>
  );
}
