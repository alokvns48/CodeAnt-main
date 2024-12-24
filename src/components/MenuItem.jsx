const MenuItem = ({ icon, label, onClick }) => {
  return (
    <div
      className="flex justify-start items-center gap-3 px-4 py-3 rounded-md font-medium w-[95%] hover:bg-[#FAFAFA] cursor-pointer"
      onClick={onClick}
    >
      <img src={icon} alt={label} />
      <span>{label}</span>
    </div>
  );
};

export default MenuItem;
