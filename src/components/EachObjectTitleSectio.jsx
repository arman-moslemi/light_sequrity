import React from "react";
import {Link} from "react-router-dom";
import {ChevronLeftIcon} from "@heroicons/react/24/solid";
import Pencil from "../assets/icon/pencil";
const EachObjectTitleSection = () => {
    // const [showNewModal,setShowNewModal] = useState(false);
    return (
        <div className="flex justify-between items-center mt-8  mx-4">
            <Link to={'/object'}>
                <div className="flex">
                    <ChevronLeftIcon className="w-[20px] mr-4"/>
                    <p className="font-bold text-sm text-[#000]">
                        Back

                    </p>

                </div>
            </Link>

            <div className="flex items-center">
                {/* <Link to={'/editObject'}>
                    <div className="flex items-center">
                        <Pencil className="w-[40px]"/>
                        <span className="text-[#000] text-sm font-bold">
                            Edit
                        </span>
                    </div>
                </Link> */}
                <select
                    id="statusSelect"
                    name="statusSelect"
                    className="w-[100px] ml-4 bg-[#212b36] rounded-lg border border-borderGray py-2 px-2 text-white">
                    <option value="Active">Draft</option>
                    <option value="DeActive">Published</option>

                </select>

            </div>

        </div>

    )
}

export default EachObjectTitleSection;