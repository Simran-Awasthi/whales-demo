import GraphIcon from "../assets/graph-icon.svg";
import CheckIcon from "../assets/check-icon.svg";
const NotificationAmountCard = () => {
  return (
    <div className="w-full h-full min-h-[220px] max-w-[220px] flex flex-col justify-between gap-4 rounded-lg bg-white drop-shadow-lg p-6 cursor-grab active:cursor-grabbing">
      <div className="flex justify-between">
        <img src={GraphIcon} alt="" className="w-8 h-8" />
        <div className="bg-blue-600 rounded h-4 w-4 flex justify-center items-center">
          <img src={CheckIcon} alt="" />
        </div>
      </div>
      <div className="flex flex-col gap-4">
        <p className="text-xs">Notify me when any wallets move more than</p>
        <select
          value="1000"
          className="bg-neutral-100 w-full max-w-[100px] text-xs rounded p-1">
          <option value="100">$100.00</option>
          <option value="500">$500.00</option>
          <option value="1000">$1,000.00</option>
        </select>
      </div>
    </div>
  );
};

export default NotificationAmountCard;
