import Image from "next/image";
import Carousel from "../components/carousel";
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { vscDarkPlus } from "react-syntax-highlighter/dist/esm/styles/prism";
import VariablesTable from "../components/variables-table";
import { variables } from "@/lib/component-variables";
import ContentSection from "../components/content-section";

export default function Home() {

  const codeString = `<Carousel components={components} color="#ffffff" innerArrows innerPoints/>`
  const variableTable: React.ReactElement = <VariablesTable vars={variables}/>

  const exampleComponent = () => {
	return (
		<div className="flex flex-col w-full gap-4">
			<SyntaxHighlighter customStyle={{border: '1px solid #ddd', borderRadius: '8px', background: '#001b22'}} language="tsx" style={vscDarkPlus}>
			{codeString}
			</SyntaxHighlighter>
			<div className="flex w-full h-fit p-6 rounded-xl bg-gradient-to-b from-black/10 to-black/20 shadow-inner">
			<Carousel components={components} color="#ffffff" innerArrows innerPoints/>
			</div>
		</div>
	)
  }

  return (
	<div className="flex px-40 py-10 justify-center">
	  <div className="relative flex flex-col gap-4">
		<h1 className="">{`<Carousel/>`}</h1>
		<p className="flex">A custom React carousel allows navigation between different personalized elements, such as images, texts, or interactive components, enhancing the visual and user experience. Perfect for displaying content in an engaging and optimized way.</p>
		<SyntaxHighlighter customStyle={{border: '1px solid #ddd', borderRadius: '8px', background: '#001b22'}} language="tsx" style={vscDarkPlus}>
			{`<Carousel components={components} color="#444444"/>`}
		</SyntaxHighlighter>
		<div className="flex w-full h-fit p-6 rounded-xl bg-gradient-to-b from-black/10 to-black/20 shadow-inner">
		  <Carousel components={components} color="#444444"/>
		</div>
		<ContentSection title={"Variables"} content={variableTable}/>
		<ContentSection title={"Example"} content={exampleComponent()}/>
	  </div>
	</div>
  );
}

const components = [1,2,3,4].map((n) => {
  return(
	<div key={n} className="flex w-full h-96 m-2 shadow-md">
	  <Image className="flex w-full h-full object-cover" draggable='false' src={`/images/image_${n}.jpg`} alt={"Landscape"} width={1400} height={400}/>
	</div>
  )
})
