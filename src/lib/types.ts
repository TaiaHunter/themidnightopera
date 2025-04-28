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
	weight: number;
	children: any;
};
