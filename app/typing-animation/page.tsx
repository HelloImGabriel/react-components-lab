'use client'

import Image from "next/image";
import Carousel from "../components/carousel";
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { vscDarkPlus } from "react-syntax-highlighter/dist/esm/styles/prism";
import VariablesTable from "../components/variables-table";
import { variables } from "@/lib/component-variables";
import ContentSection from "../components/content-section";
import { useState } from "react";
import TypingAnimation from "../components/typing-animation";
import CursorBlinker from "../components/cursor-blinker";

export default function Page() {

	const codeString = 
`const texts = ['professionals.', 'designers.', 'developers.', 'entrepreneurs.', 'people like you.']

<div key={key} className='p-10 h-28 text-xl'>
	<TypingAnimation delay={1} texts={['This text provides solutions for ']}/>
	<TypingAnimation delay={2} texts={texts} repeat className="text-blue-500"/>
	<CursorBlinker className="bg-neutral-600 h-6 translate-y-1"/>
</div>`

	const variableTable: React.ReactElement = <VariablesTable vars={variables}/>

	const exampleComponent = () => {

	const [key, setKey] = useState<number>(0)

	const texts = [
		'professionals.',
		'designers.',
		'developers.',
		'entrepreneurs.',
		'people like you.'
	];
	  
	return (
		<div className="flex flex-col w-full gap-4">
			<SyntaxHighlighter customStyle={{border: '1px solid #ddd', borderRadius: '8px', background: '#001b22'}} language="tsx" style={vscDarkPlus}>
				{codeString}
			</SyntaxHighlighter>
			<div className="w-full">
				<div className="w-full h-fit p-2 bg-blue-200">
					<div key={key} className="p-10 h-28 text-xl">
						<TypingAnimation delay={1} texts={['This text provides solutions for ']}/>
						<TypingAnimation delay={2} texts={texts} repeat className="text-blue-500"/>
						<CursorBlinker className="bg-neutral-600 h-6 translate-y-1"/>
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
		<h1 className=""><span className="text-primary">{`<`}</span>TypingAnimation<span className="text-primary">{` />`}</span></h1>
		<p className="flex">This component creates a typing effect by animating the display of text one character at a time. It cycles through an array of predefined texts, progressively revealing each one with a smooth, typewriter-style animation.</p>
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