const coffeeImages = [
  'https://images.unsplash.com/photo-1554118811-1e0d58224f24?auto=format&fit=crop&w=1200&q=85',
  'https://images.unsplash.com/photo-1445116572660-236099ec97a0?auto=format&fit=crop&w=1200&q=85',
  'https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?auto=format&fit=crop&w=1200&q=85',
  'https://images.unsplash.com/photo-1501339847302-ac426a4a7cbb?auto=format&fit=crop&w=1200&q=85',
];
const museumImages = [
  'https://images.unsplash.com/photo-1577083552431-6e5fd01aa342?auto=format&fit=crop&w=1200&q=85',
  'https://images.unsplash.com/photo-1565060169194-19fabf63012b?auto=format&fit=crop&w=1200&q=85',
  'https://images.unsplash.com/photo-1561214115-f2f134cc4912?auto=format&fit=crop&w=1200&q=85',
];

const cafe = (id, name, address, lat, lng, reviews, imageIndex = 0, why = 'A neighbourhood coffee stop for a good cup and a slower moment.') => ({
  id, name, category: 'Café · Coffee & something good', mood: 'cosy', rating: 4.3 + (reviews % 6) / 10, reviews,
  walk: 10 + (reviews % 11), distance: +(0.5 + (reviews % 10) / 10).toFixed(1), image: coffeeImages[imageIndex % coffeeImages.length],
  why, quote: 'A lovely little stop along the way.', author: 'A café visitor',
  tags: ['cafe','coffee','cosy','social','food','indoor','sit'], address, lat, lng,
});
const museum = (id, name, category, address, lat, lng, reviews, imageIndex = 0, why = 'A thoughtful cultural stop with plenty to discover indoors.') => ({
  id, name, category, mood: 'culture', rating: 4.4 + (reviews % 5) / 10, reviews,
  walk: 9 + (reviews % 18), distance: +(0.6 + (reviews % 12) / 10).toFixed(1), image: museumImages[imageIndex % museumImages.length],
  why, quote: 'There is always something new to notice.', author: 'A museum visitor',
  tags: ['museum','gallery','culture','art','history','rainy','indoor','architecture'], address, lat, lng,
});

// Seed/demo discovery set. Ratings, counts and visitor excerpts are illustrative.
export const extras = [
  cafe('daku','Dāku Coffee','100 Kensington High Street, London W8 4SG',51.5009,-0.1946,2810,1,'A specialty coffee bar for a quick pause between shops and galleries.'),
  cafe('treelogy','Treelogy Speciality Coffee','Unit 6, Wrights Lane, London W8 5SF',51.5017,-0.1918,1840,2,'Small-batch coffee, matcha and hojicha on the High Street.'),
  cafe('gails-high-street','GAIL’s Bakery, High Street Kensington','240–242 Kensington High Street, London W8 6ND',51.501,-0.1935,4090,0,'Fresh pastries and a dependable coffee stop in the middle of the neighbourhood.'),
  cafe('gails-arcade','GAIL’s Bakery, Kensington Arcade','Kensington Arcade, London W8 5SF',51.5018,-0.1922,2200,3,'A grab-a-coffee-and-keep-wandering bakery stop.'),
  cafe('over-under','Over Under Coffee','281 Kensington High Street, London W8 6NA',51.5014,-0.1979,1610,2,'An easy espresso stop with a neighbourhood feel.'),
  cafe('hagen','Hagen Espresso Bar','282 Kensington High Street, London W14 8NZ',51.5017,-0.1981,1320,1,'Nordic-style coffee for a calm start or a mid-walk reset.'),
  cafe('cafe-jumo','Café Jumo','32B Kensington Church Street, London W8 4HA',51.5032,-0.1929,870,0,'A tucked-away Church Street café for a slower coffee break.'),
  cafe('caffe-concerto','Caffè Concerto, Kensington','88 Kensington High Street, London W8 4SG',51.5006,-0.1916,5480,3,'A grander café pause for cakes, coffee and a long catch-up.'),
  cafe('joe-juice-44','Joe & The Juice, Kensington High Street','44 Kensington High Street, London W8 4PE',51.5004,-0.1884,2310,2,'Juice, coffee and a quick bright stop while exploring.'),
  cafe('paris-baguette','Paris Baguette, Kensington','129 Kensington High Street, London W8 6SU',51.5014,-0.1964,2960,0,'A bakery counter with plenty of sweet options for a little treat.'),
  cafe('farm-girl-exhibition','Farm Girl Café, Exhibition Road','59A Exhibition Road, London SW7 2EN',51.4983,-0.1741,1910,3,'A colourful brunch stop just off the museum mile.'),
  cafe('chucs','Chucs Café, South Kensington','30–32 Old Brompton Road, London SW7 3DL',51.4937,-0.1763,2210,1,'An Italian-leaning café for coffee, a light bite and a relaxed sit-down.'),
  cafe('cafe-deco','Café Deco, Gloucester Road','62 Gloucester Road, London SW7 4QT',51.4952,-0.1824,720,2,'A small local café stop between the garden and the museums.'),
  cafe('cafe-phillies','Café Phillies','South Kensington, London SW7',51.4948,-0.1749,980,0,'A handy coffee and sandwich stop close to South Kensington station.'),
  cafe('sally-clarke','Sally Clarke Shop & Bakery','34 Kensington Church Street, London W8 4HA',51.5031,-0.193,1420,3,'A lovely bakery counter for bread, a pastry and something to take away.'),
  cafe('holland-park-cafe','Holland Park Café','Holland Park, London W8 6LU',51.5034,-0.2032,2380,1,'Pause under the park arches with a warm drink after a woodland loop.'),
  cafe('va-cafe','V&A Café','Cromwell Road, London SW7 2RL',51.4965,-0.1719,7380,0,'A museum café with ornate rooms that make the coffee break part of the visit.'),
  cafe('orangery','The Orangery at Kensington Palace','Kensington Gardens, London W8 4PX',51.5058,-0.1877,6240,3,'A bright, historic setting for tea and a proper pause in the gardens.'),
  cafe('honesty-holland','Honesty, Holland Street','14 Holland Street, London W8 4LT',51.5023,-0.1901,680,2,'A little neighbourhood bakery café with a relaxed, local pace.'),
  cafe('tamini','Ta’Mini Lebanese Bakery','15 Kensington Church Street, London W8 4LF',51.5026,-0.1932,1660,0,'Warm pastries and Lebanese bakery favourites for a quick comfort stop.'),
  cafe('caffe-nero','Caffè Nero, Kensington High Street','25A Kensington High Street, London W8 5NP',51.5005,-0.1888,3100,1,'A familiar coffee pause close to the High Street shops.'),
  cafe('starbucks-kensington','Starbucks, Kensington High Street','Kensington High Street, London W8 5NP',51.5007,-0.1891,4280,2,'An easy place to refuel before carrying on with the day.'),
  cafe('pret-kensington','Pret A Manger, Kensington','Kensington High Street, London W8',51.5008,-0.1908,3550,3,'Coffee and a simple bite when you want to get straight back outside.'),
  cafe('aux-merveilleux','Aux Merveilleux de Fred, Kensington','Kensington High Street, London W8 5SA',51.5015,-0.1913,2170,0,'A sweet bakery detour for delicate meringue treats and coffee.'),
  cafe('labakery','La Bakery, Kensington High Street','246 Kensington High Street, London W8 6DN',51.501,-0.194,640,1,'A convenient bakery stop for a pastry and a small coffee.'),
  museum('design-museum','Design Museum','Design Museum · Contemporary design','224–238 Kensington High Street, London W8 6AG',51.4994,-0.1995,12820,1,'Modern design, architecture and everyday objects inside a striking former Commonwealth Institute.'),
  museum('kensington-palace','Kensington Palace','Palace · Royal history','Kensington Gardens, London W8 4PX',51.505,-0.1877,18820,0,'Royal stories, historic rooms and exhibitions tucked into the gardens.'),
  museum('japan-house','Japan House London','Culture centre · Japanese art & design','101–111 Kensington High Street, London W8 5SA',51.501,-0.1912,2390,2,'A vivid introduction to Japanese craft, design, food and contemporary culture.'),
  museum('serpentine','Serpentine Galleries','Contemporary art gallery','Kensington Gardens, London W2 3XA',51.5045,-0.1755,4890,0,'A free contemporary art visit with a lakeside walk just outside.'),
  museum('saatchi','Saatchi Gallery','Contemporary art gallery','Duke of York’s HQ, King’s Road, London SW3 4RY',51.49,-0.158,8370,1,'Big, thought-provoking exhibitions a short hop from South Kensington.'),
  museum('national-army','National Army Museum','Museum · Military history','Royal Hospital Road, London SW3 4HT',51.487,-0.1601,4630,2,'A lively look at the people and stories behind the British Army.'),
  museum('stafford-terrace','18 Stafford Terrace','Historic house museum','18 Stafford Terrace, London W8 7BH',51.5035,-0.1965,810,0,'Step into a remarkably preserved Victorian home filled with Aesthetic Movement details.'),
  museum('rcm-museum','Royal College of Music Museum','Music museum','Prince Consort Road, London SW7 2BS',51.4994,-0.176,690,1,'Rare instruments and musical stories in a quiet museum beside the Albert Hall.'),
  museum('museum-brands','Museum of Brands','Museum · Design & culture','111–117 Lancaster Road, London W11 4UT',51.5154,-0.2117,2830,2,'A nostalgic trip through packaging, advertising and everyday life across the decades.'),
  museum('polish-institute','Polish Institute and Sikorski Museum','Museum · Polish history','20 Princes Gate, London SW7 1PT',51.5017,-0.1763,420,0,'A small, specialist museum exploring Polish history and its wartime story.'),
];
