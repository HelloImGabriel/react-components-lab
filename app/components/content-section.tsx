export default function ContentSection({title,content}:{title:string,content:React.ReactElement}) {
	return (
		<div className="flex flex-col w-full gap-4">
			<h2>{title}</h2>
			{content}
		</div>
	)
}