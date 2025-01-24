'use client'

import Image from "next/image";
import Carousel from "../components/carousel";
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { vscDarkPlus } from "react-syntax-highlighter/dist/esm/styles/prism";
import VariablesTable from "../components/variables-table";
import { variables } from "@/lib/component-variables";
import ContentSection from "../components/content-section";
import { useState } from "react";

export default function CarouselPage() {

  const codeString = `<Carousel components={components} color="#ffffff" innerArrows innerPoints/>`
  const variableTable: React.ReactElement = <VariablesTable vars={variables}/>
  const [key, setKey] = useState<number>(0)

  const ExampleComponent = () => {
	return (
		<div className="flex flex-col w-full gap-4">
			<SyntaxHighlighter customStyle={{border: '1px solid #ddd', borderRadius: '8px', background: '#001b22'}} language="tsx" style={vscDarkPlus}>
			{codeString}
			</SyntaxHighlighter>
			<div className="flex flex-col w-full">
				<div className="flex w-full h-fit p-2 bg-rose-200">
					<Carousel key={key} components={components} color="#ffffff" innerArrows innerPoints/>
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
		<h1 className=""><span className="text-primary">{`<`}</span>Carousel<span className="text-primary">{` />`}</span></h1>
		<p className="flex">A custom React carousel allows navigation between different personalized elements, such as images, texts, or interactive components, enhancing the visual and user experience. Perfect for displaying content in an engaging and optimized way.</p>
		<ContentSection content={ExampleComponent()}/>
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
