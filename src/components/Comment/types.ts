export interface CommentData {
	id: number;
	content: string;
	createdAt: string;
	score: number;
	user: User;
	replies: Reply[];
}

export interface User {
	image: {
		png: string;
		webp: string;
	};
	username: string;
}

export interface Reply {
	id: number;
	content: string;
	createdAt: string;
	score: number;
	user: User;
	replyingTo: string;
}