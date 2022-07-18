export type CardProps = {
	className?: string;
	id: string | number;
	image?: string;
	text: string;
	date: string;
	lesson_num?: number;
	titleCard: string;
	author?: number;
	onPreviewClick?: (id: string | number) => void;
	LikeDislike?: React.ComponentType<{ id: string | number }>;
 };