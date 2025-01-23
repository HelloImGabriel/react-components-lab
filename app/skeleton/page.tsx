'use client'

import Image from "next/image";
import Carousel from "../components/carousel";
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { vscDarkPlus } from "react-syntax-highlighter/dist/esm/styles/prism";
import VariablesTable from "../components/variables-table";
import { variables } from "@/lib/component-variables";
import ContentSection from "../components/content-section";
import { useState } from "react";
import Skeleton from "@mui/material/Skeleton";

export default function CarouselPage() {

	const codeString = `<div className="flex flex-col w-full gap-2 p-10">
	<div className="flex gap-4 w-full">
		<Skeleton variant="circular" width={40} height={40} />
		<Skeleton width={200} height={40}/>
	</div>
	<div className="flex flex-col w-full h-20">
		<Skeleton className="w-full h-full"/>
		<Skeleton className="w-full h-full"/>
		<Skeleton className="w-2/3 h-full"/>
	</div>
</div>`

  const variableTable: React.ReactElement = <VariablesTable vars={variables}/>

  const exampleComponent = () => {

	const [key, setKey] = useState<number>(0)

	return (
		<div className="flex flex-col w-full gap-4">
			<SyntaxHighlighter customStyle={{border: '1px solid #ddd', borderRadius: '8px', background: '#001b22'}} language="tsx" style={vscDarkPlus}>
				{codeString}
			</SyntaxHighlighter>
			<div className="flex flex-col w-full">
				<div className="flex w-full h-fit p-2 bg-neutral-200">
					<div className="flex flex-col w-full gap-2 p-10">
						<div className="flex gap-4 w-full">
							<Skeleton variant="circular" width={40} height={40} />
							<Skeleton width={200} height={40}/>
						</div>
						<div className="flex flex-col w-full h-20">
							<Skeleton className="w-full h-full"/>
							<Skeleton className="w-full h-full"/>
							<Skeleton className="w-2/3 h-full"/>
						</div>
					</div>
				</div>
				<div className="flex w-full h-10 px-4 justify-end bg-neutral-900">
					<button onClick={() => setKey(key+1)}>
						<Image src={"/restart.svg"} alt={"Restart Button"} width={24} height={24}/>
					</button>
				</div>
			</div>
		</div>
	)
  }

  return (
	<div className="flex px-40 py-10 justify-center">
	  <div className="relative flex flex-col gap-4">
		<h1 className=""><span className="text-primary">{`<`}</span>Skeleton<span className="text-primary">{` />`}</span></h1>
		<p className="flex">A Skeleton component is a placeholder UI used to indicate that content is loading. It provides a visual representation of the layout, often using grey or animated blocks, to improve user experience by making the loading state more engaging and reducing perceived wait times. Skeletons are commonly used in web applications to mimic the shape of the final content until the actual data is fully loaded.</p>
		<ContentSection content={exampleComponent()}/>
		<ContentSection title={"Reference"} content={variableTable}/>
	  </div>
	</div>
  );
}

const components = [26,21,17,24].map((n) => {
  return(
	<div key={n} className="flex w-full h-96 m-2" style={{boxShadow: '0px 4px 4px rgb(0,0,0,0.4)'}}>
	  <Image className="flex w-full h-full object-cover" draggable='false' src={`/images/image_${n}.jpg`} alt={"Landscape"} width={1400} height={400}/>
	</div>
  )
})