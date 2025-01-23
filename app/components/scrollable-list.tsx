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
			{href: '/skeleton', label: 'Skeleton', sublinks: []},
			{href: '/carousel', label: 'Carousel', sublinks: []},
			{href: '/carousel', label: 'Carousel', sublinks: []},
		]},
		{href: "/", label: "Presentation", sublinks: [
			{href: '/carousel', label: 'Carousel', sublinks: []},
			{href: '/carousel', label: 'Carousel', sublinks: []},
			{href: '/carousel', label: 'Carousel', sublinks: []},
		]},
		{href: "/", label: "Presentation", sublinks: [
			{href: '/carousel', label: 'Carousel', sublinks: []},
			{href: '/carousel', label: 'Carousel', sublinks: []},
			{href: '/carousel', label: 'Carousel', sublinks: []},
		]},
		{href: "/", label: "Presentation", sublinks: [
			{href: '/carousel', label: 'Carousel', sublinks: []},
			{href: '/carousel', label: 'Carousel', sublinks: []},
			{href: '/carousel', label: 'Carousel', sublinks: []},
		]},
		{href: "/", label: "Presentation", sublinks: [
			{href: '/carousel', label: 'Carousel', sublinks: []},
			{href: '/carousel', label: 'Carousel', sublinks: []},
			{href: '/carousel', label: 'Carousel', sublinks: []},
		]},
		{href: "/", label: "Presentation", sublinks: [
			{href: '/carousel', label: 'Carousel', sublinks: []},
			{href: '/carousel', label: 'Carousel', sublinks: []},
			{href: '/carousel', label: 'Carousel', sublinks: []},
		]},
	];
  
	return (
		<div className="relative flex flex-col w-[380px]">
			<motion.div
			initial={{ opacity: 0 }}
			animate={{ opacity: 1 }}
			transition={{ duration: 0.5 }}
			className="sticky top-20 w-full h-[580px] listview overflow-y-auto nested-content">
				<ul className="flex flex-col w-full pb-20 mt-10 items-center">
					{items.map((item, index) => (
					<li key={index} className="flex flex-col text-lg">
						<Link href={item.href}>{item.label}</Link>
						<ul className="w-fit p-4 pl-6 text-base">
							{item.sublinks.map((sublink, n) => {
								return (
									<li key={n} className="">
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