import React from "react";
import { v4 as uuidv4 } from "uuid";
import useGetDataAPI from "hooks/useGetDataAPI";
const Keyword = ({ params, side }) => {
  const { dataMovie: keywordData } = useGetDataAPI(
    side,
    "",
    "",
    params,
    "keywords"
  );
  const { keywords, results: keywordTV } = keywordData;
  return (
    <>
      <h2 className="uppercase font-medium text-[25px] text-[#333] border-b leading-7 border-gray-300">
        Từ Khóa
      </h2>
      <div className="mt-[10px] flex flex-wrap gap-[3px]">
        {(keywords || keywordTV) &&
          (keywords?.length || keywordTV?.length) > 0 &&
          (keywords || keywordTV).map((keyword) => (
            <p
              key={uuidv4()}
              className="text-colorDetails text-[15px] px-[7px] py-[3px] bg-[#DFDFDF] rounded-[6px] w-max"
            >
              #{keyword?.name || keywordTV?.name}
            </p>
          ))}
      </div>
    </>
  );
};

export default Keyword;
