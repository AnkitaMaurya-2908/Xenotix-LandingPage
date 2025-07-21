import React from "react";

const InfoCard = ({
  title,
  highlightText = "",
  description,
  tags = [],
  className = "",
  topBlurColor = "bg-blue-700",
  bottomBlurColor = "bg-blue-700",
}) => {
  const parts =
    highlightText && title.includes(highlightText)
      ? title.split(highlightText)
      : [title];

  return (
    <div
      className={`relative w-[270px] rounded-2xl px-5 py-4 bg-white shadow-md overflow-hidden ${className}`}
    >
      <div
        className={`absolute w-24 h-24 ${topBlurColor} rounded-full filter blur-lg top-[-30px] right-[-30px] opacity-50 z-0`}
      />
      <div
        className={`absolute w-10 h-10 ${bottomBlurColor} rounded-full filter blur-sm bottom-[13px] right-[13px] opacity-40 z-0`}
      />

      <div className="relative z-10">
        <h3 className="text-md font-bold text-gray-800">
          {parts.length > 1 ? (
            <>
              {parts[0]}
              <span className="border-b-2 border-blue-500">
                {highlightText}
              </span>
              {parts[1]}
            </>
          ) : (
            title
          )}
        </h3>

        <p className="text-xs font-light text-gray-600 mt-2">{description}</p>

        <div className="flex flex-wrap gap-2 mt-3">
          {tags.map((tag, index) => (
            <span
              key={index}
              className="text-[10px] px-2 py-[1px] bg-gray-100 border border-gray-300 shadow-sm text-gray-600 flex items-center gap-1"
            >
              {tag.icon && <span className="text-[12px]">{tag.icon}</span>}
              {tag.label || tag}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default InfoCard;
