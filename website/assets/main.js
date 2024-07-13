async function walkTree(root, visit) {
	await visit(root);
	for (const node of root.childNodes) {
		await walkTree(node, visit);
	}
}

addEventListener('DOMContentLoaded', function () {
	const globalContainer = document.querySelector('#global-container');

	walkTree(globalContainer, function (el) {
		const style = el.style;
		if (!!style) {
			style.visibility = 'hidden';
		}
	});

	walkTree(globalContainer, function (el) {
		const style = el.style;
		if (!!style) {
			style.visibility = 'visible';
		}
		return new Promise((resolve) => setTimeout(resolve, 1));
	});

	console.log('%cHello There!', 'color: #7DCFFF; font-size: 20px; font-weight: bold;');
	console.log(
		"%cI'm glad you're here! If you like my website, you can find the source here: https://github.com/skixmix/personal-website \n\nHave a nice day ;)",
		'font-size: 14px',
	);
});
