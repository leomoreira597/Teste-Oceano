import Link from "next/link";

export default function Button(props) {
    return (
        <Link href={props.destiny}>
            <div className={` h-10 w-28 bg-slate-400 flex justify-center items-center rounded-md mt-${props.margin} hover:cursor-pointer text-slate-200`}>
                {props.text}
            </div>
        </Link>
    );
}