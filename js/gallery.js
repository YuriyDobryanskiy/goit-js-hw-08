const images = [
	{
		preview:
			'https://cdn.pixabay.com/photo/2019/05/14/16/43/rchids-4202820__480.jpg',
		original:
			'https://cdn.pixabay.com/photo/2019/05/14/16/43/rchids-4202820_1280.jpg',
		description: 'Hokkaido Flower',
	},
	{
		preview:
			'https://cdn.pixabay.com/photo/2019/05/14/22/05/container-4203677__340.jpg',
		original:
			'https://cdn.pixabay.com/photo/2019/05/14/22/05/container-4203677_1280.jpg',
		description: 'Container Haulage Freight',
	},
	{
		preview:
			'https://cdn.pixabay.com/photo/2019/05/16/09/47/beach-4206785__340.jpg',
		original:
			'https://cdn.pixabay.com/photo/2019/05/16/09/47/beach-4206785_1280.jpg',
		description: 'Aerial Beach View',
	},
	{
		preview:
			'https://cdn.pixabay.com/photo/2016/11/18/16/19/flowers-1835619__340.jpg',
		original:
			'https://cdn.pixabay.com/photo/2016/11/18/16/19/flowers-1835619_1280.jpg',
		description: 'Flower Blooms',
	},
	{
		preview:
			'https://cdn.pixabay.com/photo/2018/09/13/10/36/mountains-3674334__340.jpg',
		original:
			'https://cdn.pixabay.com/photo/2018/09/13/10/36/mountains-3674334_1280.jpg',
		description: 'Alpine Mountains',
	},
	{
		preview:
			'https://cdn.pixabay.com/photo/2019/05/16/23/04/landscape-4208571__340.jpg',
		original:
			'https://cdn.pixabay.com/photo/2019/05/16/23/04/landscape-4208571_1280.jpg',
		description: 'Mountain Lake Sailing',
	},
	{
		preview:
			'https://cdn.pixabay.com/photo/2019/05/17/09/27/the-alps-4209272__340.jpg',
		original:
			'https://cdn.pixabay.com/photo/2019/05/17/09/27/the-alps-4209272_1280.jpg',
		description: 'Alpine Spring Meadows',
	},
	{
		preview:
			'https://cdn.pixabay.com/photo/2019/05/16/21/10/landscape-4208255__340.jpg',
		original:
			'https://cdn.pixabay.com/photo/2019/05/16/21/10/landscape-4208255_1280.jpg',
		description: 'Nature Landscape',
	},
	{
		preview:
			'https://cdn.pixabay.com/photo/2019/05/17/04/35/lighthouse-4208843__340.jpg',
		original:
			'https://cdn.pixabay.com/photo/2019/05/17/04/35/lighthouse-4208843_1280.jpg',
		description: 'Lighthouse Coast Sea',
	},
];

function createGalleryItemMarkUp(images) {
	return images.map(({ preview, original, description }) => {
		const item = document.createElement('li');
		item.classList.add('gallery__item');

		const link = document.createElement('a');
		link.classList.add('gallery__link');
		link.href = original;

		const image = document.createElement('img');
		image.classList.add('gallery__image');
		image.src = preview;
		image.dataset.source = original;
		image.alt = description;

		link.append(image);
		item.append(link);

		return item;
	});
}

// наповнення ul
const galleryItemsUl = document.querySelector('.gallery');
const itemsMarkUp = createGalleryItemMarkUp(images);
galleryItemsUl.append(...itemsMarkUp);

// клік
galleryItemsUl.addEventListener('click', e => {
	e.preventDefault();

	if (e.target.classList.contains('gallery__image')) {
		const imageUrl = e.target.dataset.source;
		const instance = basicLightbox.create(
			`<div class="imgFullWidthBg"><img class="imgFullWidth" src='${imageUrl}'></div>`,
			{
				onShow: () => window.addEventListener('keydown', onKeydown),
				onClose: () => window.removeEventListener('keydown', onKeydown),
			}
		);
		instance.show();

		function onKeydown(e) {
			if (e.code === 'Escape') {
				instance.close();
			}
		}
	}
});
