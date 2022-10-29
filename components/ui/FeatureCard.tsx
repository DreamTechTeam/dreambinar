import Image from "next/legacy/image";

interface Props {
  title: string;
  imgUrl: string;
  desc: string;
  width: number;
  height: number;
}

const FeatureCard = ({ title, imgUrl, desc, width, height }: Props) => {
  return (
    <div className="w-full md:w-1/2 lg:w-1/4 px-4">
      <div className=" p-10 md:px-7 xl:px-10 rounded-[20px] bg-white shadow-md hover:shadow-lg mb-8">
        <div className=" w-[70px] h-[70px] flex items-center justify-center bg-primary rounded-2xl mb-8">
          <Image
            loader={({ src }) => src}
            src={imgUrl}
            alt={title}
            objectFit="cover"
            width={width}
            height={height}
            unoptimized={true}
          />
        </div>
        <h4 className="font-bold font-sans text-xl mb-3">{title}</h4>
        <p>{desc}</p>
      </div>
    </div>
  );
};

export default FeatureCard;
