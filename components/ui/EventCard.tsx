import Image from "next/legacy/image";
import Link from "next/link";
import {
  abbreviateNumber,
  INDONESIAN_SYMBOL,
} from "../../utils/abbreviateNumber";
import dateFormatted from "../../utils/dateFormatted";
import isExpired from "../../utils/isExpired";

interface Props {
  id: number;
  title: string;
  imgUrl: string;
  user_id: {
    id: number;
    name: string;
    imgUrl: string;
    alternativeText: string;
  };
  category: string;
  price: number;
  isOnline: boolean;
  dateStart: string;
  dateEnd: string;
}

export default function EventCard({
  id,
  title,
  imgUrl,
  user_id,
  category,
  price,
  isOnline,
  dateStart,
  dateEnd,
}: Props) {
  const dateEvent = `${dateFormatted(dateStart)} - ${dateFormatted(dateEnd)}`;

  return (
    <div className="w-full h-full m-auto overflow-hidden rounded-lg shadow-lg">
      <Link href={`/events/${id}`}>
        <div className="relative h-40 md:h-32 lg:h-40 block w-full">
          <Image
            loader={({ src }) => src}
            alt={title}
            src={imgUrl}
            objectFit="cover"
            sizes="100%"
            layout="fill"
            unoptimized={true}
          />
          {isOnline ? (
            <div className="absolute top-0 right-0 mt-2 mr-2 text-white z-10 backdrop-brightness-50 backdrop-blur-lg rounded-lg py-1 px-3 w-[7rem]">
              <div className="flex flex-wrap -mx-1 overflow-hidden">
                <div className="flex items-center justify-start w-1/2 my-1 overflow-hidden font-sans text-sm font-black">
                  Online
                </div>
                <div
                  className={`text-sm font-normal ${
                    price !== 0 ? "bg-red-500" : "bg-green-500"
                  } rounded-md my-1 w-1/2 overflow-hidden flex justify-center items-center`}
                >
                  {price !== 0
                    ? abbreviateNumber(price, INDONESIAN_SYMBOL)
                    : "Free"}
                </div>
              </div>
            </div>
          ) : (
            <div className="absolute top-0 right-0 mt-2 mr-2 text-white z-10 backdrop-brightness-50 backdrop-blur-lg rounded-lg py-1 px-3 w-[7.5rem]">
              <div className="flex flex-wrap -mx-1 overflow-hidden">
                <div className="flex items-center justify-start w-1/2 my-1 overflow-hidden font-sans text-sm font-black">
                  Offline
                </div>
                <div
                  className={`text-sm font-normal ${
                    price ? "bg-red-500" : "bg-green-500"
                  } rounded-md my-1 w-1/2 overflow-hidden flex justify-center items-center`}
                >
                  {price ? abbreviateNumber(price, INDONESIAN_SYMBOL) : "Free"}
                </div>
              </div>
            </div>
          )}
        </div>
        <div className="p-4">
          <div className="block w-full h-full">
            {title.length > 24 ? (
              <>
                <p className="mb-1 overflow-hidden font-sans text-xl font-black text-gray-800 text-ellipsis dark:text-white h-14">
                  {title}
                </p>
              </>
            ) : (
              <p className="mb-1 font-sans text-xl font-black text-gray-800 dark:text-white h-14">
                {title}
              </p>
            )}
            {isExpired(dateEnd) ? (
              <p className="mb-2 font-medium text-md">Event Expired</p>
            ) : (
              <>
                <p className="block mb-2 font-medium text-md lg:hidden xl:block">
                  {dateFormatted(dateStart) === dateFormatted(dateEnd)
                    ? dateFormatted(dateStart)
                    : dateEvent.length > 27
                    ? `${dateEvent.slice(0, 27)}...`
                    : dateEvent}
                </p>
                <p className="hidden mb-2 font-medium text-md lg:block xl:hidden">
                  {dateFormatted(dateStart) === dateFormatted(dateEnd)
                    ? dateFormatted(dateStart)
                    : dateEvent.length > 20
                    ? `${dateEvent.slice(0, 20)}...`
                    : dateEvent}
                </p>
              </>
            )}
            <div className="bg-blue-100 text-blue-800 dark:bg-blue-200 dark:text-blue-900 text-xs font-semibold mr-2 px-2.5 py-0.5 rounded w-fit overflow-hidden text-ellipsis">
              {category}
            </div>
          </div>
        </div>
      </Link>
      <Link href={`/users/${user_id.id}`}>
        <div className="p-4 pt-0">
          <div className="my-3 border-t-2"></div>
          <div className="flex items-center">
            <div className="block">
              <Image
                loader={({ src }) => src}
                src={user_id.imgUrl}
                alt={user_id.name}
                className="object-cover w-10 h-10 mx-auto rounded-full"
                objectFit="cover"
                width={40}
                height={40}
                unoptimized={true}
              />
            </div>
            <p className="ml-4 text-sm text-gray-800 dark:text-white">
              {user_id.name.length > 24
                ? user_id.name.slice(0, 24) + "..."
                : user_id.name}
            </p>
          </div>
        </div>
      </Link>
    </div>
  );
}
