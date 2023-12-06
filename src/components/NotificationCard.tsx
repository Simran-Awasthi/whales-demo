import BellIconDark from "../assets/bell-icon-dark.svg";

export const NotificationCard = () => {
  return (
    <div className="w-full h-full max-w-[220px] min-h-[220px]  flex flex-col gap-4 rounded-lg bg-white bg-[linear-gradient(180deg,rgba(255,255,255,0.20)_27.5%,rgba(22,93,255,0.16)_157.71%)] drop-shadow-lg p-[20px] cursor-grab active:cursor-grabbing">
      <div className="flex justify-between">
        <img src={BellIconDark} alt="" className="w-8 h-8" />
        <p className="text-xs">Save</p>
      </div>
      <p>We’ll be sending notifications to you here</p>
      <input
        type="text"
        className="w-full bg-white rounded-md border border-gray-300 p-3 text-xs"
      />
    </div>
  );
};
