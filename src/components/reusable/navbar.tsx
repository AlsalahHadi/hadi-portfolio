import { Divider } from '@/components/reusable/divider';
import { ImageViewer } from '@/components/reusable/image-viewer';
import { about, socials } from '@/data';
import Image from 'next/image';
import Link from 'next/link';

const Navbar = () => {
  return (
    <>
      <div>
        <div className="flex flex-row items-center gap-6">
          <ImageViewer
            src={about.photo}
            width={120}
            height={200}
            imageClassName="rounded-full object-fit w-[125px] h-[125px] md:w-[150px] md:h-[150px]"
            alt="profile-picture"
          />
          <div className="flex flex-1 flex-col">
            <h1 className="font-medium text-gray-900 mt-2 text-xl font-heading">
              {about.name}
            </h1>
            <p className="text-gray-500">{about.role}</p>
            <div className="flex flex-1 flex-row justify-between items-center mt-6">
              <div className="flex flex-1 flex-row gap-x-3">
                {socials.map((social, index) => {
                  return (
                    <Link
                      href={social.link}
                      key={String(index)}
                      target="_blank"
                      rel="noreferrer">
                      <Image
                        width={24}
                        height={24}
                        src={social.icon}
                        alt={social.name}
                      />
                    </Link>
                  );
                })}
              </div>
              {!!about.phone && (
                <div className="flex flex-row">
                  <a href={`tel:${about.phone}`}>
                    <p className="text-xs text-gray-900">{about.phone}</p>
                  </a>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
      <Divider />
    </>
  );
};

export default Navbar;
