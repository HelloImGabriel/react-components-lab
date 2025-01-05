'use client'

import { motion } from "motion/react";
import Link from "next/link";

export interface LinkInfo {
	href: string
	label: string
	sublinks: LinkInfo[]
}

export default function ScrollableList() {

	const items: LinkInfo[] = [
		{href: "/", label: "Presentation", sublinks: [
			{href: '/carousel', label: 'Carousel', sublinks: []}
		]},
	];
  
	return (
		<div className="relative flex flex-col w-1/4">
			<motion.div
			initial={{ opacity: 0 }}
			animate={{ opacity: 1 }}
			transition={{ duration: 0.5 }}
			className="sticky top-20 w-full h-[580px] listview overflow-y-auto nested-content">
				<ul className="pt-10 pb-20 pl-10">
					{items.map((item, index) => (
					<li key={index} className="p-4 text-lg">
						<Link href={item.href}>{item.label}</Link>
						<ul className="p-4 text-base">
							{item.sublinks.map((sublink, n) => {
								return (
									<li key={n} className="pl-4">
										<Link href={sublink.href}>{sublink.label}</Link>
									</li>
								)
							})}
						</ul>
					</li>
					))}
				</ul>
			</motion.div>
		</div>
	);
}