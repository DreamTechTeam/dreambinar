import Image from "next/legacy/image";

interface Props {
  name: string;
  imgUrl: string;
}

const OrmawaCard = ({ name, imgUrl }: Props) => {
  return (
    <div className="flex items-center justify-center p-6 bg-opacity-25 bg-slate-200 rounded-lg shadow-md hover:shadow-lg">
      <Image
        loader={({ src }) => src}
        src={imgUrl}
        alt={name}
        className="block object-contain h-16"
        objectFit="contain"
        width={64}
        height={64}
        unoptimized={true}
      />
    </div>
  );
};

export default OrmawaCard;
