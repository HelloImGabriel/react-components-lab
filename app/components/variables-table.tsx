import { ComponentVariable } from "@/lib/component-variables";

export default function VariablesTable({vars}:{vars:ComponentVariable[]}) {
	return (
		<div className="flex w-full">
			<table className="w-full">
				<tbody>
					{vars.map((v, n) => {
						return (
							<tr key={n}>
								<td className="border border-gray-400 px-4 py-2">{v.name}</td>
								<td className="border border-gray-400 px-4 py-2">{v.type}</td>
								<td className="border border-gray-400 px-4 py-2">{v.description}</td>
							</tr>
						)
					})}
				</tbody>
			</table>
		</div>
	)
}