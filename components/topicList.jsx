import Link from "next/link";
import RemoveBtn from "./RemoveBtn";
import { HiPencilAlt } from "react-icons/hi";


export default function TopicList () {
    return (
        <>
        <div className="p-4 flex justify-between border border-slate-300 my-4 gap-5 items-start">
            <div>
                <h2>Topic List</h2>
                <div>Topic discription</div>
            </div>
            <div className="flex gap-4">
        <RemoveBtn />
        <Link href={"/editTopic/id"}>
        <HiPencilAlt size={24} />
        </Link>

            </div>
        </div>
        </>
    );
}