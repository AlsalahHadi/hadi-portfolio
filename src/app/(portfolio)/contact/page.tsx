import { about } from '@/data';

export default function Contact() {
  return (
    <p className="text-gray-500 mb-4 text-justify">
      You can reach me on my personal email{' '}
      <a href={`mailto:${about.email}`} className="underline">
        click here
      </a>
      , or send me a DM on my linkedin profile!
    </p>
  );
}
