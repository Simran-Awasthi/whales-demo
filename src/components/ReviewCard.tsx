import { FC } from "react";

type ReviewCardProps = {
  name: string;
  title: string;
  review: string;
};
const ReviewCard: FC<ReviewCardProps> = ({ name, title, review }) => {
  return (
    <div className="w-full h-full flex flex-col gap-4 rounded-lg bg-white drop-shadow-lg p-[20px] cursor-grab active:cursor-grabbing self-end">
      <p className="text-[16px] font-[600]">
        {name}
        <span className="text-gray-400 font-normal text-[13px] pl-2">
          {title}
        </span>
      </p>
      <p className="text-[16px] overflow-clip">{review}</p>
    </div>
  );
};

export default ReviewCard;
