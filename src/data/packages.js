// Singapore
import singapore1 from '../Assets/pdf/singapore/singaporewithuniversalstudio.pdf';
import singapore2 from '../Assets/pdf/singapore/Singapore 2.pdf';
import singapore3 from '../Assets/pdf/singapore/Singapore 3.pdf';
import singapore4 from '../Assets/pdf/singapore/Singapore 4.pdf';
import s1 from '../Assets/pdf/singapore/singapore1.webp';
import s2 from '../Assets/pdf/singapore/s2.webp';
import s3 from '../Assets/pdf/singapore/s3.webp';
import s4 from '../Assets/pdf/singapore/s4.webp';
// Dubai
import Dubai1 from '../Assets/pdf/Dubai/Dubai 1.pdf';
import Dubai2 from '../Assets/pdf/Dubai/Dubai 2.pdf';
import Dubai3 from '../Assets/pdf/Dubai/Dubai 3.pdf';
import d1 from '../Assets/pdf/Dubai/d1.webp';
import d2 from '../Assets/pdf/Dubai/d2.webp';
import d3 from '../Assets/pdf/Dubai/d3.webp';
// Bali
import Bali1 from '../Assets/pdf/Bali/Bali 1.pdf';
import Bali2 from '../Assets/pdf/Bali/Bali 2.pdf';
import Bali3 from '../Assets/pdf/Bali/Bali 3.pdf';
import Bali4 from '../Assets/pdf/Bali/Bali 4.pdf';
import b1 from '../Assets/pdf/Bali/b1.webp';
import b2 from '../Assets/pdf/Bali/b2.webp';
import b3 from '../Assets/pdf/Bali/b3.webp';
import b4 from '../Assets/pdf/Bali/b4.webp';
// Kashmir
import Kashmir1 from '../Assets/pdf/Kashmir/kashmir 1.pdf';
import Kashmir2 from '../Assets/pdf/Kashmir/kashmir 2.pdf';
import Kashmir3 from '../Assets/pdf/Kashmir/kashmir 3.pdf';
import k1 from '../Assets/pdf/Kashmir/k1.webp';
import k2 from '../Assets/pdf/Kashmir/k2.webp';
import k3 from '../Assets/pdf/Kashmir/k3.webp';
// Maldives
import Maldives1 from '../Assets/pdf/Maldives/Maldives 1.pdf';
import Maldives2 from '../Assets/pdf/Maldives/Maldives 2.pdf';
import Maldives3 from '../Assets/pdf/Maldives/Maldives 3.pdf';
import Maldives4 from '../Assets/pdf/Maldives/Maldives 4.pdf';
import Maldives5 from '../Assets/pdf/Maldives/Maldives 5.pdf';
import m1 from '../Assets/pdf/Maldives/m1.webp';
import m2 from '../Assets/pdf/Maldives/m2.webp';
import m3 from '../Assets/pdf/Maldives/m3.webp';
import m4 from '../Assets/pdf/Maldives/m4.webp';
import m5 from '../Assets/pdf/Maldives/m5.webp';
// Vietnam
import Vietnam1 from '../Assets/pdf/Vietnam/Vietnam 1.pdf';
import Vietnam2 from '../Assets/pdf/Vietnam/Vietnam 2.pdf';
import Vietnam3 from '../Assets/pdf/Vietnam/Vietnam 3.pdf';
import Vietnam4 from '../Assets/pdf/Vietnam/Vietnam 4.pdf';
import v1 from '../Assets/pdf/Vietnam/v1.webp';
import v2 from '../Assets/pdf/Vietnam/v2.webp';
import v3 from '../Assets/pdf/Vietnam/v3.webp';
import v4 from '../Assets/pdf/Vietnam/v4.webp';
// Thailand
import Thailand1 from '../Assets/pdf/Thailand/Thailand 1.pdf';
import Thailand2 from '../Assets/pdf/Thailand/Thailand 2.pdf';
import Thailand3 from '../Assets/pdf/Thailand/Thailand 3.pdf';
import t1 from '../Assets/pdf/Thailand/t1.webp';
import t2 from '../Assets/pdf/Thailand/t2.webp';
import t3 from '../Assets/pdf/Thailand/t3.webp';
// Srilanka
import Srilanka1 from '../Assets/pdf/Srilanka/Srilanka 1.pdf';
import Srilanka2 from '../Assets/pdf/Srilanka/Srilanka 2.pdf';
import Srilanka3 from '../Assets/pdf/Srilanka/Srilanka 3.pdf';
import Srilanka4 from '../Assets/pdf/Srilanka/Srilanka 4.pdf';
import sr1 from '../Assets/pdf/Srilanka/sr1.webp';
import sr2 from '../Assets/pdf/Srilanka/sr2.webp';
import sr3 from '../Assets/pdf/Srilanka/sr3.webp';
import sr4 from '../Assets/pdf/Srilanka/sr4.webp';
// Andaman
import Andaman1 from '../Assets/pdf/Andaman/Andaman 1.pdf';
import Andaman2 from '../Assets/pdf/Andaman/Andaman 2.pdf';
import Andaman3 from '../Assets/pdf/Andaman/Andaman 3.pdf';
import Andaman4 from '../Assets/pdf/Andaman/Andaman 4.pdf';
import a1 from '../Assets/pdf/Andaman/a1.webp';
import a2 from '../Assets/pdf/Andaman/a2.webp';
import a3 from '../Assets/pdf/Andaman/a3.webp';
// Goa villas
import g1 from '../Assets/g1.jpg';
import g2 from '../Assets/g2.jpg';
import g3 from '../Assets/g3.jpg';
import g4 from '../Assets/g4.jpg';
import g5 from '../Assets/g5.jpg';
import g6 from '../Assets/g6.jpg';
import g7 from '../Assets/g7.jpg';
import g8 from '../Assets/g8.jpg';
import g9 from '../Assets/g9.jpg';
import g10 from '../Assets/g10.jpg';
import g11 from '../Assets/g11.jpg';
import g12 from '../Assets/g12.jpg';
import g13 from '../Assets/g13.jpg';
import g14 from '../Assets/g14.jpg';
import g15 from '../Assets/g15.jpg';
import g16 from '../Assets/g16.jpg';
import g17 from '../Assets/g17.jpg';
import g18 from '../Assets/g18.jpg';
import g19 from '../Assets/g19.jpg';
import g20 from '../Assets/g20.jpg';
import g21 from '../Assets/g21.jpg';
import g22 from '../Assets/g22.jpg';

const tour = (image, title, hotel, rating, facilities, document) => ({
  image, title, hotel, rating, facilities, document, type: 'tour',
});

const villa = (image, title, hotel, rating, facilities, link) => ({
  image, title, hotel, rating, facilities, link, type: 'villa',
});

const singapore = [
  tour(s1, 'Singapore with Universal Studio, Sentosa & Night Safari', 'Mercure Tyrwhitt', '4',
    ['Night Safari', 'Sentosa Magic', 'City Tour with Guide', 'Duck Tour', 'S.E.A. Aquarium', 'Singapore Zoo', 'Universal Studios'], singapore1),
  tour(s2, 'Singapore Highlights with Marina Bay & Gardens', 'The Boss', '4',
    ['Gardens By The Bay', 'Marina Bay SkyPark', 'Night Safari', 'Sentosa Magic', 'City Tour with Guide', 'Universal Studios'], singapore2),
  tour(s3, 'Singapore Family Escape', 'Mercure Tyrwhitt', '4',
    ['Sentosa Magic', 'City Tour with Guide', 'Duck Tour', 'S.E.A. Aquarium', 'Singapore Zoo', 'Night Safari', 'Universal Studios'], singapore3),
  tour(s4, 'Premium Singapore — Orchard Stay', 'Hotel Pullman Orchard Road', '4',
    ['Singapore Zoo', 'Night Safari', 'Universal Studios with Meal Voucher', 'City Tour with Guide', 'S.E.A. Aquarium'], singapore4),
];

const dubai = [
  tour(d1, 'Dubai Trio — City Tour, Desert Safari & Dhow Cruise', 'Versailles By Raviz', '3',
    ['Burj Khalifa 124th Floor', 'Half Day City Tour', 'Abu Dhabi with Ferrari World'], Dubai1),
  tour(d2, 'Dubai Discovery with Museum of the Future', 'Hyatt Place Dubai Wasl District', '4',
    ['Dubai Trio Deluxe', 'Half Day City Tour', 'Museum of Future with Transfers'], Dubai2),
  tour(d3, 'Premium Dubai — Burj Al Arab & Yacht', 'Crowne Plaza Jumeirah', '5',
    ['Global Village & Miracle Garden', 'Inside Burj Al Arab', 'Dubai Frame', 'Sunset Yacht Tour', 'Jet Ski'], Dubai3),
];

const bali = [
  tour(b1, 'Nusa Penida West & Watersports Adventure', 'The Tusita Enlightsphere', '3',
    ['Full Day Watersports', 'Padang Padang Beach', 'Uluwatu Temple', 'Nusa Penida West Tour', 'Indonesian Lunch', '2-way Ferry'], Bali1),
  tour(b2, 'Bali Beach Bliss', 'Anvaya Beach Hotel', '5',
    ['Kintamani Tour', 'Jimbaran Beach', 'Aristocat Beach Club Cruise', 'Buffet Lunch', 'Snorkeling at Nusa Lembongan', 'Hotel Transfer'], Bali3),
  tour(b3, 'Bali Luxe — Ubud Swings & Sunset Cruise', 'Asvara Villa', '5',
    ['Bali Swing with Nests & Lunch, Ubud', 'Watersports Package', 'Parasailing & Jet Ski', 'Bali Hai Sunset Dinner Cruise', 'Tanjung Benoa'], Bali4),
  tour(b1, 'Bali Honeymoon Special', 'Crowne Plaza Bali', '5',
    ['Full Day Watersports', 'Padang Padang Beach', 'Uluwatu Temple', 'Nusa Penida West Tour with Lunch', '2-way Ferry'], Bali2),
];

const kashmir = [
  tour(k1, 'Srinagar Serenity — Shikara & Pahalgam', 'Hotel Royal Milad', '5',
    ['Srinagar Sightseeing', 'Shikara Ride', 'Day trip to Pahalgam'], Kashmir1),
  tour(k2, 'Kashmir Gardens & Valleys', 'Hayat Residency', '5',
    ['Zahgeer Continental', 'Shikara Ride', 'Mughal Gardens', 'ABC Valley Cab'], Kashmir2),
  tour(k3, 'Houseboat Kashmir Escape', 'Ennco Resort', '5',
    ['Anarkali Group of Houseboat', 'Royal Castle', 'Mughal Gardens'], Kashmir3),
];

const maldives = [
  tour(m1, 'Makunudu Island Trip', 'Makunudu Island Resort', '5',
    ['Breakfast', 'Dinner', 'Lunch'], Maldives1),
  tour(m2, 'Medhufushi Island Resort Escape', 'Medhufushi Island Resort', '5',
    ['Beach Villa', 'Breakfast', 'Lunch & Dinner'], Maldives2),
  tour(m3, 'Paradise Island Villa Nautica', 'Villa Nautica Paradise Island', '5',
    ['Beach Villa', 'Breakfast', 'Lunch', 'Dinner'], Maldives3),
  tour(m4, 'Kaani Village & Spa Maldives', 'Kaani Village and Spa', '5',
    ['Double Room with Pool View', 'Breakfast', 'Lunch & Dinner'], Maldives4),
  tour(m5, 'JW Marriott Overwater Pool Villa', 'JW Marriott', '5',
    ['Breakfast', 'Lunch', 'Overwater Villa Pool Sunrise'], Maldives5),
];

const vietnam = [
  tour(v1, 'Vietnam Vista Retreat', 'The Q Hotel', '5',
    ['Victory Cruises', 'Hanoi Full Day City Tour', 'Day Trip to Ninh Binh (Hoa Lu – Tam Coc)'], Vietnam1),
  tour(v2, 'Vietnam Imperial Explorations', 'Golden Holiday Hotel', '5',
    ['Sunrise Central Hotel', 'Hanoi Full Day City Tour', 'Full day Ho Chi Minh City Tour'], Vietnam2),
  tour(v3, 'Mystical Vietnam — Bana Hills & Golden Bridge', 'SOJO Hotel Ga Hanoi', '5',
    ['Merry Land Hotel Da Nang', 'Hanoi Full Day City Tour', 'Day Trip to Ninh Binh', 'Bana Hills & Golden Bridge'], Vietnam3),
  tour(v4, 'Vietnam Adventura Abode', 'Golden Holiday Hotel', '5',
    ['Danang City Tour', 'Hoi An Lantern Boat Ride', 'Nguyen Gia Hotel', 'Hanoi Full Day City Tour', 'Ninh Binh Day Trip'], Vietnam4),
];

const thailand = [
  tour(t1, 'Phuket–Krabi Monday Escape', 'Bel Aire Patong', '5',
    ['Coral Island tour by Speed Boat', 'Phi Phi Island Tour with Lunch', 'James Bond Island'], Thailand1),
  tour(t2, 'Phuket Krabi with Phi Phi & Jungle Tour', 'The Nature Phuket', '5',
    ['Holiday Ao Nang Beach Resort', 'Phi Phi Island Speed Boat Tour', 'James Bond Island Tour'], Thailand2),
  tour(t3, 'Pattaya Bangkok with Coral Island', 'Mind Resort', '4',
    ['Bangkok City Tour', 'Citrus Sukhumvit 11', 'Coral Island Tour with Lunch'], Thailand3),
];

const srilanka = [
  tour(sr1, 'Colombo Discovery', 'Colombo City Hotel', '5',
    ['Colombo City Tour', 'Full Day Car at Disposal (80 KMs / 8 Hrs)'], Srilanka1),
  tour(sr2, 'Sri Lanka Heritage Trail', 'JW Marriott Colombo', '5',
    ['Houseboat Stay', 'Royal Castle', 'Mughal Gardens'], Srilanka2),
  tour(sr3, 'Kandy & Colombo Combo', 'Tourmaline Hotel', '5',
    ['Full Day Car at Disposal', 'Ocean Colombo', 'Kandy City Tour', 'Day Trip to Nuwara Eliya'], Srilanka3),
  tour(sr4, 'Bentota Beach & Nuwara Eliya', 'The Golden Crown', '5',
    ['Taj Bentota Resort & Spa', 'Taj Samudra', 'Bentota City Tour', 'Full Day Car at Disposal'], Srilanka4),
];

const andaman = [
  tour(a1, '4N Serene Andaman Getaway', 'Lemon Tree Hotel', '5',
    ['Aquays Hotel and Resort', 'Hotel Mansha Regency', 'Elephant Beach with Snorkelling'], Andaman1),
  tour(a2, 'Andaman Adventure Expedition', 'NK Havelock Eco Resort', '5',
    ['Ross & North Bay Island', 'Tango Beach Resort', 'Megapode Resort', 'Elephant Beach with Snorkelling'], Andaman2),
  tour(a3, '6N Island Hopping Adventure', 'NK Havelock Eco Resort', '5',
    ['Tango Beach Resort', 'Megapode Resort', 'Corbyns Cove Beach', 'Laxmanpur & Bharatpur Beach', 'Natural Coral Bridge'], Andaman3),
  tour(b4, 'Andaman Archipelago Escapade', 'Lemon Tree Hotel', '5',
    ['Summer Sand Beach Resort', 'Hotel Mansha Regency', 'Corbyns Cove Beach', 'Ross & North Bay Island'], Andaman4),
];

const villas = [
  villa(g1, '1 BHK Luxury Bella Serviced Apartment @ Candolim', 'Bella Serviced Apartment', '4.6',
    ['Kitchen', 'Wifi', 'Free parking', 'Workspace', 'Pool', 'Lift', 'TV', 'AC'],
    'https://www.airbnb.co.uk/rooms/46983434'),
  villa(g2, '2 BHK Luxury Serviced Beach Apartment @ Calangute', 'Calangute', '4.6',
    ['Smoking allowed', 'Gym', 'Free parking', 'TV', 'Pool'],
    'https://www.airbnb.co.uk/rooms/46982034'),
  villa(g3, '2 BHK Luxury Serviced Apartment @ Calangute', 'Calangute', '4.6',
    ['Kitchen', 'Wifi', 'Garden', 'Washer', 'Dryer', 'Pool', 'Lift', 'TV', 'AC'],
    'https://www.airbnb.co.uk/rooms/908495435398144929'),
  villa(g4, '2 BHK Silver Park Apartment @ Calangute', 'Silver Park', '4.6',
    ['Kitchen', 'Wifi', 'Garden', 'Washer', 'Dryer', 'Pool', 'Lift', 'TV', 'AC'],
    'https://www.airbnb.co.uk/rooms/25431972'),
  villa(g5, '2 BHK Super Luxury Silver Park near Beach', 'Silver Park serviced Apartments', '4.6',
    ['Kitchen', 'Wifi', 'Washer', 'Hair Dryer', 'Pool', 'Lift', 'TV', 'AC'],
    'https://www.airbnb.co.uk/rooms/39096552'),
  villa(g6, '2 BHK Exotic Waves Luxury Apartment, Calangute', 'Calangute', '4.6',
    ['Kitchen', 'Wifi', 'Free parking', 'Hair Dryer', 'Pool', 'TV', 'AC', 'Microwave'],
    'https://www.airbnb.co.uk/rooms/24762097'),
  villa(g7, '5 BHK Private Pool Beach Villa @ Baga', 'Baga', '3.3',
    ['Beachfront', 'Kitchen', 'Wifi', 'Free parking', 'Private Pool', 'TV', 'AC', 'Gym'],
    'https://www.airbnb.co.uk/rooms/40217511'),
  villa(g8, '10 BHK Luxury Apartment @ Candolim — 20 Guests', 'Silver Park serviced Apartments', '5',
    ['Luggage drop-off', 'Dryer', 'Kitchen', 'Wifi', 'Free parking', 'Pool', 'TV', 'AC', 'Lift', 'Washer'],
    'https://www.airbnb.co.uk/rooms/38639720'),
  villa(g9, '2 BHK Exotic Waves Luxury Apartment, Calangute — Unit 1', 'Silver Park', '4.6',
    ['Hair Dryer', 'Kitchen', 'Wifi', 'Free parking', 'Pool', 'TV', 'AC'],
    'https://www.airbnb.co.uk/rooms/25468484'),
  villa(g10, '2 BHK Silver Park Apartment @ Calangute', 'Silver Park', '4.7',
    ['Hair Dryer', 'Kitchen', 'Wifi', 'Free parking', 'Pool', 'TV', 'AC', 'Lift', 'Washer', 'Gym'],
    'https://www.airbnb.co.uk/rooms/40218123'),
  villa(g11, '2 BHK Exotic Waves Luxury Apartment — Unit 2', 'Calangute', '4.6',
    ['Hair Dryer', 'Kitchen', 'Wifi', 'Free parking', 'Pool', 'TV', 'AC'],
    'https://www.airbnb.co.uk/rooms/25243096'),
  villa(g12, '4 BHK Private Pool Luxury Villa Marigold', 'Villa Marigold', '4.6',
    ['Kitchen', 'Wifi', 'Free parking', 'Pool', 'TV', 'AC', 'Smoking allowed'],
    'https://www.airbnb.co.uk/rooms/52157347'),
  villa(g13, '8 BHK Luxe Private Pool Villa @ Candolim', 'Candolim', '4.6',
    ['Kitchen', 'Wifi', 'Free parking', 'Pool', 'TV', 'Washer', 'AC', 'Smoking allowed'],
    'https://www.airbnb.co.uk/rooms/988245055439993783'),
  villa(g14, '4 BHK Boulevard Villa in Goa', 'Baga', '4.6',
    ['Kitchen', 'Wifi', 'Free parking', 'Pool', 'TV', 'Washer', 'AC', 'Microwave'],
    'https://www.airbnb.co.uk/rooms/967329493186796393'),
  villa(g15, '4 BHK Super Luxury Apartment @ Candolim', 'Silver Park', '4.6',
    ['Kitchen', 'Wifi', 'Free parking', 'Pool', 'TV', 'Lift', 'Washer', 'AC', 'Dryer'],
    'https://www.airbnb.co.uk/rooms/29982188'),
  villa(g16, '6 BHK Super Luxury Villa @ Baga', 'Baga', '4.6',
    ['Kitchen', 'Wifi', 'Free parking', 'Private Pool', 'TV', 'Washer', 'AC'],
    'https://www.airbnb.co.uk/rooms/46840928'),
  villa(g17, '4 BHK Villa Orchid — Private Pool', 'Villa Orchid', '4.6',
    ['Kitchen', 'Wifi', 'Free parking', 'Pool', 'TV', 'Washer', 'AC'],
    'https://www.airbnb.co.uk/rooms/907831734575822377'),
  villa(g18, '2 BHK Luxury Serviced Apartment @ Baga', 'Baga', '4.6',
    ['Kitchen', 'Wifi', 'Workspace', 'Free parking', 'Pool', 'TV', 'AC', 'Lift'],
    'https://www.airbnb.co.uk/rooms/47047646'),
  villa(g19, '3 BHK Brand New Private Pool Villa @ Baga', 'Baga', '4.6',
    ['Kitchen', 'Wifi', 'Free parking', 'Pool', 'TV', 'AC'],
    'https://www.airbnb.co.uk/rooms/47842682'),
  villa(g20, '6 BHK Private Pool Beach Villa @ Baga', 'Baga', '4.6',
    ['Kitchen', 'Wifi', 'Free parking', 'Pool', 'TV', 'AC', 'Balcony', 'Washer'],
    'https://www.airbnb.co.uk/rooms/46685605'),
  villa(g21, '6 BHK Celebrity Ultra Luxury Villa @ Baga', 'Baga', '4.6',
    ['Kitchen', 'Wifi', 'Free parking', 'Pool', 'TV', 'AC', 'Microwave', 'Washer'],
    'https://www.airbnb.co.uk/rooms/47913801'),
  villa(g22, '3 BHK Ultra Luxury Beach Villa @ Baga', 'Baga', '4.6',
    ['Kitchen', 'Wifi', 'Workspace', 'Free parking', 'Pool', 'TV', 'AC', 'Hair Dryer', 'Washer'],
    'https://www.airbnb.co.uk/rooms/46935497'),
];

const tag = (arr, category) => arr.map((p) => ({ ...p, category }));

const allPackages = [
  ...tag(singapore, 'Singapore'),
  ...tag(dubai, 'Dubai'),
  ...tag(bali, 'Bali'),
  ...tag(kashmir, 'Kashmir'),
  ...tag(maldives, 'Maldives'),
  ...tag(vietnam, 'Vietnam'),
  ...tag(thailand, 'Thailand'),
  ...tag(srilanka, 'Srilanka'),
  ...tag(andaman, 'Andaman'),
  ...tag(villas, 'villas'),
];

const international = [...singapore, ...dubai, ...bali, ...maldives, ...vietnam, ...thailand, ...srilanka, ...andaman]
  .map((p) => ({ ...p, category: 'International' }));

const domestic = [...kashmir, ...andaman].map((p) => ({ ...p, category: 'Domestic' }));

export const packagesByCategory = {
  Singapore: tag(singapore, 'Singapore'),
  Dubai: tag(dubai, 'Dubai'),
  Bali: tag(bali, 'Bali'),
  Kashmir: tag(kashmir, 'Kashmir'),
  Maldives: tag(maldives, 'Maldives'),
  Vietnam: tag(vietnam, 'Vietnam'),
  Thailand: tag(thailand, 'Thailand'),
  Srilanka: tag(srilanka, 'Srilanka'),
  Andaman: tag(andaman, 'Andaman'),
  villas: tag(villas, 'villas'),
  International: international,
  Domestic: domestic,
};

export const getPackages = (category) =>
  packagesByCategory[category] || allPackages.filter((p) => p.category === category);

export const categoryLabels = {
  Singapore: 'Singapore',
  Dubai: 'Dubai',
  Bali: 'Bali',
  Kashmir: 'Kashmir',
  Maldives: 'Maldives',
  Vietnam: 'Vietnam',
  Thailand: 'Thailand',
  Srilanka: 'Sri Lanka',
  Andaman: 'Andaman',
  villas: 'Luxury Villas',
  International: 'International',
  Domestic: 'Domestic',
};
