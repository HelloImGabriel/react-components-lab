import Link from "next/link";

export default function Header() {
	return (
		<header className="sticky top-0 z-50 flex w-full h-20 px-2 md:px-10 lg:px-20 xl:px-40 items-center bg-white shadow-md">
			<Link className="logo select-none" href={"/"}>Components</Link>
			<div className="flex w-full justify-end">
				<Link className="flex" href={""}>About</Link>
			</div>
		</header>
	)
}