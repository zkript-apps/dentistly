//stores
type Email = {
	email: string;
};
type Action = {
	updateEmail: (email: Email["email"]) => void;
};

enum UserRole {
	Admin,
	Host,
	User,
}

export enum RegistrationType {
	"Manual",
	"Facebook",
	"Google",
}