import CheckIcon from "../assets/check-icon.svg";
import ClockIcon from "../assets/clock-icon.svg";

const NotificationDormantCard = () => {
  return (
    <div className="w-full h-full min-h-[220px] max-w-[220px] flex flex-col justify-between gap-4 rounded-lg bg-white drop-shadow-lg p-6 cursor-grab active:cursor-grabbing">
      <div className="flex justify-between">
        <img src={ClockIcon} alt="" className="w-8 h-8" />
        <div className="bg-blue-600 rounded h-4 w-4 flex justify-center items-center">
          <img src={CheckIcon} alt="" />
        </div>
      </div>
      <div className="flex flex-col gap-4">
        <p className="text-xs">Notify me when any wallet dormant for</p>
        <select
          value="30"
          className="bg-neutral-100 w-full max-w-[100px] text-xs rounded p-1">
          <option value="30">{">"}30 days</option>
          <option value="60">{">"}60 days</option>
          <option value="90">{">"}90 days</option>
        </select>
      </div>
    </div>
  );
};

export default NotificationDormantCard;
