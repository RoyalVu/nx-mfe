// import { HoverCardDemo } from '../../components/hover-card';
// import SocialLinks from '../../components/social-links';
import { ENV } from '@mfe-nx/data';

export default function HomePage() {
  return (
    <div className="h-[90vh] flex flex-col justify-center items-center bg-gray-100 gap-y-4 w-full">
      <p className="text-[200px]">Container</p>
      {/* <p className="text-[200px] animate-wiggle">Container</p> */}
      <h1 className="text-4xl font-bold text-primary">
        Welcome to the Container!
      </h1>
      <p className="text-xl font-bold text-primary">
        ENV Access token: {ENV.NX_ACCESS_TOKEN_KEY}
      </p>
    </div>
  );
}
