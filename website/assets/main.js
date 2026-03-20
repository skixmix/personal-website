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

	const hamburger = document.querySelector('.hamburger');
	const mobileMenu = document.getElementById('mobile-menu');
	const closeBtn = document.querySelector('.mobile-menu-close');

	if (hamburger && mobileMenu) {
		hamburger.addEventListener('click', function () {
			hamburger.classList.toggle('active');
			mobileMenu.classList.toggle('active');
			document.body.style.overflow = mobileMenu.classList.contains('active') ? 'hidden' : '';
		});

		if (closeBtn) {
			closeBtn.addEventListener('click', function () {
				hamburger.classList.remove('active');
				mobileMenu.classList.remove('active');
				document.body.style.overflow = '';
			});
		}

		const mobileLinks = document.querySelectorAll('.mobile-nav-menu a');
		mobileLinks.forEach(function (link) {
			link.addEventListener('click', function () {
				hamburger.classList.remove('active');
				mobileMenu.classList.remove('active');
				document.body.style.overflow = '';
			});
		});
	}

	console.log('%cHello There!', 'color: #7DCFFF; font-size: 20px; font-weight: bold;');
	console.log(
		"%cI'm glad you're here! If you like my website, you can find the source here: https://github.com/skixmix/personal-website \n\nHave a nice day ;)",
		'font-size: 14px',
	);
});
