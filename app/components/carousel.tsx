'use client'

import { motion, useMotionValue } from 'framer-motion';
import { useEffect, useState } from 'react';

export default function Carousel(
	{components,innerArrows,innerPoints,color}:
	{components:React.ReactElement[],innerArrows?:boolean,innerPoints?:boolean,color?:string}
) {
	
	const [index, setIndex] = useState<number>(0)
	const [isHover, setIsHover] = useState<boolean>(false)

	const length = 4
	const dragX = useMotionValue(0)
	const DRAG_BUFFER = 50
	const ONE_SECOND = 1000
	const AUTO_DELAY = ONE_SECOND * 6

	const move = (n: number) => {
		setIndex(prevIndex => (prevIndex + n + length) % length);
	}

	const ArrowButton = ({direction,className}:{direction:number,className?:string}) => {
		return (
			<button
			onClick={() => {move(direction)}}
			className={`${className} flex w-6 md:w-10 h-6 md:h-10 justify-center items-center z-10 ${direction === -1 ? '-scale-x-100' : ''}`}
			style={{fill: color}}>
			<svg className='relative flex' xmlns="http://www.w3.org/2000/svg" height="40px" viewBox="0 -960 960 960" width="40px" fill="undefined">
				<path d="M504-480 348-636q-11-11-11-28t11-28q11-11 28-11t28 11l184 184q6 6 8.5 13t2.5 15q0 8-2.5 15t-8.5 13L404-268q-11 11-28 11t-28-11q-11-11-11-28t11-28l156-156Z"/>
			</svg>
			</button>
		);
	}

	const onDragEnd = () => {
		const x = dragX.get();
		if (x <= -DRAG_BUFFER && index < length - 1) {
		  setIndex((pv) => pv + 1);
		} else if (x >= DRAG_BUFFER && index > 0) {
		  setIndex((pv) => pv - 1);
		}
	};

	function Points({className}:{className?:string}) {
		return (
			<div className={`${className} flex gap-4 justify-center z-10`}>
				{components.map((component, n) => {
					return (
						<button
						key={n}
						onClick={() => {setIndex(n)}}
						className={`flex w-2 h-2 rounded-full ${n != index ? 'opacity-20' : 'opacity-100'}`}
						style={{backgroundColor: color}}/>
					)
				})}
			</div>
		)
	}

	useEffect(() => {
		const intervalRef = setInterval(() => {
			const x = dragX.get()
			if (x === 0 && !isHover) {
				move(1)
			}
		}, AUTO_DELAY)
		return () => clearInterval(intervalRef)
	}, [index, isHover, dragX, AUTO_DELAY])

	return (
		<div className="relative flex flex-col w-full gap-8 items-center">
			<div className="relative flex w-full h-fit justify-center items-center gap-4">
				<ArrowButton direction={-1} className={`${innerArrows ? 'absolute left-8' : ''}`} />
				<div className="relative flex w-full h-fit overflow-hidden">
					<motion.div
					drag='x'
					onHoverStart={() => {setIsHover(true)}}
					onHoverEnd={() => {setIsHover(false)}}
					onDragEnd={onDragEnd}
					dragConstraints={{left: 0, right: 0}}
					style={{x: dragX}}
					animate={{translateX: `${index * -100}%`}}
					transition={{duration: 0.6, type: 'spring'}}
					className="relative flex flex-shrink-0 w-full h-fit cursor-grab active:cursor-grabbing">
						{components.map((component, i) => {
							return (
								<div
								key={i}
								className={`flex w-full h-fit flex-shrink-0 justify-around items-center`}>
									{component}
								</div>
							)
						})}
					</motion.div>
				</div>
				<ArrowButton direction={1} className={`${innerArrows ? 'absolute right-8' : ''}`}/>
			</div>
			<Points className={`${innerPoints ? 'absolute bottom-8' : ''}`}/>
		</div>
	)
}