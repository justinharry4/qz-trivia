export const decodeHtml = (htmlStr: string): string => {
	const textarea = document.createElement("textarea");
	textarea.innerHTML = htmlStr;
	return textarea.value;
};
