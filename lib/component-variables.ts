export interface ComponentVariable {
	name: string
	type: string
	description: string
}

export const variables: ComponentVariable[] = [
	{name: 'components', type: 'React.ReactElement[]', description: 'list of components that will be displayed in the carousel'},
	{name: 'color', type: 'string', description: 'color of the direction arrows and index point.'},
	{name: 'innerArrows', type: 'boolean', description: 'if true direction arrows will be inside the component.'},
	{name: 'innerPoints', type: 'boolean', description: 'if true index points will be inside the component.'},
	{name: 'delay', type: 'number', description: 'delay of the auto-scroll in seconds.'},
]