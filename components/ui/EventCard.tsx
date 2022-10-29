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
    <div className="overflow-hidden shadow-lg rounded-lg h-full w-full m-auto">
      <Link href={`/events/${id}`}>
        <div className="w-full block relative">
          <Image
            loader={({ src }) => src}
            alt={title}
            src={imgUrl}
            className="md:h-64 lg:h-40 w-full object-cover"
            objectFit="cover"
            width={320}
            height={150}
            unoptimized={true}
          />
          {isOnline ? (
            <div className="absolute top-0 right-0 mt-2 mr-2 text-white z-10 backdrop-brightness-50 backdrop-blur-lg rounded-lg py-1 px-3 w-[7rem]">
              <div className="flex flex-wrap -mx-1 overflow-hidden">
                <div className="my-1 w-1/2 overflow-hidden text-sm font-black font-sans flex justify-start items-center">
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
                <div className="my-1 w-1/2 overflow-hidden text-sm font-black font-sans flex justify-start items-center">
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
        <div className={`p-4`}>
          <div className="w-full block h-full">
            {title.length > 24 ? (
              <>
                <p className="overflow-hidden text-ellipsis text-gray-800 dark:text-white text-xl h-14 font-black font-sans mb-1">
                  {title}
                </p>
              </>
            ) : (
              <p className="text-gray-800 dark:text-white text-xl h-14 font-black font-sans mb-1">
                {title}
              </p>
            )}
            {isExpired(dateEnd) ? (
              <p className="text-md font-medium mb-2">Event Expired</p>
            ) : (
              <>
                <p className="text-md font-medium mb-2 block lg:hidden xl:block">
                  {dateFormatted(dateStart) === dateFormatted(dateEnd)
                    ? dateFormatted(dateStart)
                    : dateEvent.length > 27
                    ? `${dateEvent.slice(0, 27)}...`
                    : dateEvent}
                </p>
                <p className="text-md font-medium mb-2 hidden lg:block xl:hidden">
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
      <Link href={`/user/${user_id.id}`}>
        <div className="p-4 pt-0">
          <div className="border-t-2 my-3"></div>
          <div className="flex items-center">
            <div className="block">
              <Image
                loader={({ src }) => src}
                src={user_id.imgUrl}
                alt={user_id.name}
                className="mx-auto object-cover rounded-full h-10 w-10"
                objectFit="cover"
                width={40}
                height={40}
                unoptimized={true}
              />
            </div>
            <p className="text-gray-800 dark:text-white text-sm ml-4">
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
