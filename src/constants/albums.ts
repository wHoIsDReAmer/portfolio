export interface Album {
	title: string;
	artist: string;
	year?: number;

	coverUrl: string | null;
	labelColor?: string;
	url?: string | null;
}

export const albums: Album[] = [
  {
		title: '이상기후',
		artist: 'THORNAPPLE',
		year: 2014,
		coverUrl: 'https://cdn-images.dzcdn.net/images/cover/7d035cf601997dc8150263fd0e1020d8/500x500-000000-80-0-0.jpg',
		labelColor: '#265569',
	},
	{
		title: 'CICADA',
		artist: 'YULEUM',
		year: 2024,
		coverUrl: 'https://is1-ssl.mzstatic.com/image/thumb/Music211/v4/ad/6f/0d/ad6f0df2-10f1-fcb2-3c27-1bef53525eb5/cover_KM0020485_1.jpg/600x600bb.jpg',
		labelColor: '#726336',
	},
	{
		title: 'Misfits',
		artist: 'Ghvstclub',
		year: 2023,
		coverUrl: 'https://cdn-images.dzcdn.net/images/cover/079c2d47ad8a32e750bcc903ec31f7c3/500x500-000000-80-0-0.jpg',
		labelColor: '#959695',
	},
	{
		title: 'Lifes Like',
		artist: '재지팩트',
		year: 2010,
		coverUrl: 'https://cdn-images.dzcdn.net/images/cover/99dfc481ca682e73ab8fb06549006723/500x500-000000-80-0-0.jpg',
		labelColor: '#606e33',
	},
	{
		title: '2 MANY HOMES 4 1 KID',
		artist: '저스디스',
		year: 2019,
		coverUrl: 'https://cdn-images.dzcdn.net/images/cover/777c59b847992897d77de6b75de6c2d1/500x500-000000-80-0-0.jpg',
		labelColor: '#8b0404',
	},
	{
		title: 'The Forbidden World',
		artist: 'Quintero',
		year: 2007,
		coverUrl: 'https://cdn-images.dzcdn.net/images/cover/ff97594be6d43426889fa2986a1ff386/500x500-000000-80-0-0.jpg',
		labelColor: '#573a38',
	},
	{
		title: 'Enfant terrible',
		artist: 'Ghvstclub',
		year: 2024,
		coverUrl: 'https://cdn-images.dzcdn.net/images/cover/3185fdf6a46aeaf85e210cbf705be053/500x500-000000-80-0-0.jpg',
		labelColor: '#3f734f',
	},
	{
		title: '선인장화 : MALIK THE CACTUS FLOWER',
		artist: '던말릭',
		year: 2020,
		coverUrl: 'https://cdn-images.dzcdn.net/images/cover/c2b544936ca4a2ba65cc9963d7247710/500x500-000000-80-0-0.jpg',
		labelColor: '#9e6e4b',
	},
	{
		title: '살아숨셔 4',
		artist: '염따',
		year: 2025,
		coverUrl: 'https://cdn-images.dzcdn.net/images/cover/cd6c03c761f32c4889253aba9ff39a4a/500x500-000000-80-0-0.jpg',
		labelColor: '#99b9d6',
	},
	{
		title: 'LANGUAGE',
		artist: 'XXX',
		year: 2018,
		coverUrl: 'https://cdn-images.dzcdn.net/images/cover/19e1824f7e954fd2ea248cc47c79c6ab/500x500-000000-80-0-0.jpg',
		labelColor: '#454a47',
	},
	{
		title: 'ANIMAL FKRY',
		artist: 'viceversa',
		year: 2025,
		coverUrl: 'https://cdn-images.dzcdn.net/images/cover/0407c0fad7f0b469eec2f0a4c527579c/500x500-000000-80-0-0.jpg',
		labelColor: '#b4bbba',
	},
	{
		title: 'ㅠㅠ',
		artist: '공공구',
		year: 2022,
		coverUrl: 'https://cdn-images.dzcdn.net/images/cover/f160750e9625cf790a1fe1a38fb83915/500x500-000000-80-0-0.jpg',
		labelColor: '#f1977e',
	},
	{
		title: '천재지변',
		artist: '태풍',
		year: 2022,
		coverUrl: 'https://cdn-images.dzcdn.net/images/cover/d58f511607bb417746bfbfde77b9bd24/500x500-000000-80-0-0.jpg',
		labelColor: '#30435e',
	},
	{
		title: '4 the Youth',
		artist: '저스디스, 팔로알토',
		year: 2018,
		coverUrl: 'https://is1-ssl.mzstatic.com/image/thumb/Music211/v4/a2/9f/a9/a29fa9f2-f9a7-6e9c-8a96-0e0fd8774cad/cover_KM0020966_1.jpg/600x600bb.jpg',
		labelColor: '#7ea4c4',
	},
];
