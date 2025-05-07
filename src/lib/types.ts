export type MenuItemType = {
	pageName: string;
	isHomePage?: boolean;
};

export type ImageComponents = {
	source: string;
	width?: number;
	title: string;
};

export type SlideshowComponents = {
	sources: string[];
	width?: number;
	title: string;
};

export type ColumnComponents = {
	weight?: number;
	children: any;
	noResize?: boolean;
};

export type ButtonComponents = {
	link: string;
	newTab?: boolean;
	customSVG?: boolean;
	displayBlock?: boolean;
	children: any;
};

export enum Direction {
	Next = 'NEXT',
	Back = 'BACK'
}

export const DirectionReverse: { [key: string]: Direction } = {
	[Direction.Next]: Direction.Next,
	[Direction.Back]: Direction.Back
};
