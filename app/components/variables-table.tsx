import { ComponentVariable } from "@/lib/component-variables";

export default function VariablesTable({vars}:{vars:ComponentVariable[]}) {
	return (
		<div className="flex w-full">
			<table className="w-full">
				<thead>
					<tr className="border-b border-neutral-300">
						<th className="text-start py-2">Name</th>
						<th className="text-start py-2">Type</th>
						<th className="text-start py-2">Description</th>
					</tr>
				</thead>
				<tbody>
					{vars.map((v, n) => {
						return (
							<tr key={n} className="border-b border-neutral-300">
								<td className="text-blue-500 py-2">{v.name}</td>
								<td className="py-2">{v.type}</td>
								<td className="py-2">{v.description}</td>
							</tr>
						)
					})}
				</tbody>
			</table>
		</div>
	)
}