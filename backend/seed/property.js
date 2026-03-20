const PROPERTIES = [
    {
      title: "Elegant 4 Bedroom Detached House in Richmond",
      description: "A beautifully presented detached family home set in a quiet tree-lined street in Richmond. Features a spacious open-plan kitchen, four generous bedrooms and a well-maintained rear garden. Close to Richmond Park and excellent transport links into central London.",
      price: 4500, category: "rent", bedrooms: 4, bathrooms: 3, garages: 2, rooms: 8, size_sqft: 2100, land_size_sqft: 3000, year_built: 2010,
      address: "12 Kew Road", neighbourhood: "Richmond", city: "London", state: "Greater London", country: "United Kingdom",
      amenities: ["Garden", "Parking", "WiFi", "Security", "Air Conditioning"],
      images: [
        "https://res.cloudinary.com/dsljbxkfy/image/upload/v1774017088/e1_aog2gw.jpg",
        "https://res.cloudinary.com/dsljbxkfy/image/upload/v1774017093/i4_zvnavs.jpg",
        "https://res.cloudinary.com/dsljbxkfy/image/upload/v1774017076/i1_wye5tf.jpg",
        "https://res.cloudinary.com/dsljbxkfy/image/upload/v1774017076/i2_v4lhwg.jpg",
        "https://res.cloudinary.com/dsljbxkfy/image/upload/v1774017073/i6_xcomls.jpg"
      ]
    },
    {
      title: "Modern 3 Bedroom Semi-Detached in Wimbledon",
      description: "A stylish semi-detached home in the heart of Wimbledon offering three double bedrooms, a bright open-plan living space and a private garden. Recently renovated throughout with high-end finishes. Walking distance to Wimbledon station and the town centre.",
      price: 3800, category: "rent", bedrooms: 3, bathrooms: 2, garages: 1, rooms: 6, size_sqft: 1600, land_size_sqft: 2200, year_built: 2015,
      address: "45 Worple Road", neighbourhood: "Wimbledon", city: "London", state: "Greater London", country: "United Kingdom",
      amenities: ["Garden", "Parking", "WiFi", "Furnished", "CCTV"],
      images: [
        "https://res.cloudinary.com/dsljbxkfy/image/upload/v1774017088/e2_fajmxu.jpg",
        "https://res.cloudinary.com/dsljbxkfy/image/upload/v1774017073/i3_ofuacr.jpg",
        "https://res.cloudinary.com/dsljbxkfy/image/upload/v1774017072/i5_dr6ypw.jpg",
        "https://res.cloudinary.com/dsljbxkfy/image/upload/v1774017069/i7_t0dkrb.jpg",
        "https://res.cloudinary.com/dsljbxkfy/image/upload/v1774017068/i8_dfippp.jpg"
      ]
    },
    {
      title: "Charming 2 Bedroom Cottage in Bath",
      description: "A delightful stone cottage nestled in one of Bath's most sought-after streets. Features two cosy bedrooms, a fitted kitchen, exposed stone walls and a private courtyard garden. Minutes from Bath Spa station and the Roman Baths.",
      price: 2200, category: "rent", bedrooms: 2, bathrooms: 1, garages: 0, rooms: 4, size_sqft: 900, land_size_sqft: 1100, year_built: 1998,
      address: "7 Pulteney Street", neighbourhood: "Bathwick", city: "Bath", state: "Somerset", country: "United Kingdom",
      amenities: ["Garden", "WiFi", "Furnished", "Security"],
      images: [
        "https://res.cloudinary.com/dsljbxkfy/image/upload/v1774017088/e3_mftkr3.jpg",
        "https://res.cloudinary.com/dsljbxkfy/image/upload/v1774016988/i10_zrzgzr.jpg",
        "https://res.cloudinary.com/dsljbxkfy/image/upload/v1774016988/i11_jkayzm.jpg",
        "https://res.cloudinary.com/dsljbxkfy/image/upload/v1774016987/i13_lbgyw6.jpg",
        "https://res.cloudinary.com/dsljbxkfy/image/upload/v1774016987/i15_kwhgca.jpg"
      ]
    },
    {
      title: "Stunning 5 Bedroom Detached House in Guildford",
      description: "An impressive five bedroom detached family home in a prestigious Guildford neighbourhood. Boasting a grand entrance hallway, a large kitchen with island, a landscaped garden and a double garage. Excellent schools and transport links nearby.",
      price: 5800, category: "rent", bedrooms: 5, bathrooms: 4, garages: 2, rooms: 10, size_sqft: 3200, land_size_sqft: 5000, year_built: 2012,
      address: "3 Pewley Hill", neighbourhood: "Pewley Down", city: "Guildford", state: "Surrey", country: "United Kingdom",
      amenities: ["Garden", "Parking", "Swimming Pool", "Security", "CCTV", "Air Conditioning", "Gym"],
      images: [
        "https://res.cloudinary.com/dsljbxkfy/image/upload/v1774017087/e4_bt1aad.jpg",
        "https://res.cloudinary.com/dsljbxkfy/image/upload/v1774016987/i18_gjz242.jpg",
        "https://res.cloudinary.com/dsljbxkfy/image/upload/v1774016987/i16_m95xb1.jpg",
        "https://res.cloudinary.com/dsljbxkfy/image/upload/v1774016987/i17_bxqqpq.jpg",
        "https://res.cloudinary.com/dsljbxkfy/image/upload/v1774016985/i12_ujc4ul.jpg"
      ]
    },
    {
      title: "Contemporary 3 Bedroom Townhouse in Manchester",
      description: "A well-appointed three bedroom townhouse in Manchester's vibrant Northern Quarter. Features an open-plan ground floor, a private roof terrace and allocated parking. Moments from the city centre, bars, restaurants and Piccadilly station.",
      price: 2800, category: "rent", bedrooms: 3, bathrooms: 2, garages: 1, rooms: 6, size_sqft: 1400, land_size_sqft: 1600, year_built: 2017,
      address: "18 Tib Street", neighbourhood: "Northern Quarter", city: "Manchester", state: "Greater Manchester", country: "United Kingdom",
      amenities: ["Parking", "WiFi", "Balcony", "Security", "Air Conditioning"],
      images: [
        "https://res.cloudinary.com/dsljbxkfy/image/upload/v1774017087/e5_mnxwwb.jpg",
        "https://res.cloudinary.com/dsljbxkfy/image/upload/v1774016986/i14_wr5zn7.jpg",
        "https://res.cloudinary.com/dsljbxkfy/image/upload/v1774016986/i9_tsxd9x.jpg",
        "https://res.cloudinary.com/dsljbxkfy/image/upload/v1774016984/i19_voyzar.jpg",
        "https://res.cloudinary.com/dsljbxkfy/image/upload/v1774016983/i20_cxhigl.jpg"
      ]
    },
    {
      title: "Spacious 4 Bedroom Family Home in Bristol",
      description: "A spacious and light-filled four bedroom family home in the popular Clifton area of Bristol. Offers a large kitchen-diner, separate living room, mature garden and driveway parking. Close to Clifton Village, excellent schools and Bristol's best amenities.",
      price: 3200, category: "rent", bedrooms: 4, bathrooms: 2, garages: 1, rooms: 8, size_sqft: 1900, land_size_sqft: 2800, year_built: 2005,
      address: "22 Pembroke Road", neighbourhood: "Clifton", city: "Bristol", state: "Bristol", country: "United Kingdom",
      amenities: ["Garden", "Parking", "WiFi", "Security", "Laundry"],
      images: [
        "https://res.cloudinary.com/dsljbxkfy/image/upload/v1774017085/e7_chtns9.jpg",
        "https://res.cloudinary.com/dsljbxkfy/image/upload/v1774016982/i21_ndq2iq.jpg",
        "https://res.cloudinary.com/dsljbxkfy/image/upload/v1774016981/i23_gynlnk.jpg",
        "https://res.cloudinary.com/dsljbxkfy/image/upload/v1774016981/i22_it1hpk.jpg",
        "https://res.cloudinary.com/dsljbxkfy/image/upload/v1774016981/i24_f7zem8.jpg"
      ]
    },
    {
      title: "Luxury 3 Bedroom Apartment in Canary Wharf",
      description: "A stunning luxury apartment on the 12th floor of a prestigious Canary Wharf development. Features floor-to-ceiling windows with river views, a sleek open-plan kitchen and access to a residents gym and concierge. Minutes from Canary Wharf underground station.",
      price: 4200, category: "rent", bedrooms: 3, bathrooms: 2, garages: 1, rooms: 6, size_sqft: 1500, land_size_sqft: 1500, year_built: 2019,
      address: "1 Pan Peninsula Square", neighbourhood: "Canary Wharf", city: "London", state: "Greater London", country: "United Kingdom",
      amenities: ["Gym", "Elevator", "Parking", "Security", "CCTV", "Air Conditioning"],
      images: [
        "https://res.cloudinary.com/dsljbxkfy/image/upload/v1774017085/e10_cakqom.jpg",
        "https://res.cloudinary.com/dsljbxkfy/image/upload/v1774005748/properties/um9djaqujfgl1as4bcu5.jpg",
        "https://res.cloudinary.com/dsljbxkfy/image/upload/v1774005748/properties/txzvzwerbkvvep8qkim7.jpg",
        "https://res.cloudinary.com/dsljbxkfy/image/upload/v1774005748/properties/iqxpqwb8p7xt8a2wudfj.jpg",
        "https://res.cloudinary.com/dsljbxkfy/image/upload/v1774017093/i4_zvnavs.jpg"
      ]
    },
    {
      title: "Classic 2 Bedroom Flat in Edinburgh New Town",
      description: "A beautifully maintained two bedroom flat on a quiet Georgian street in Edinburgh's New Town. Features high ceilings, original cornicing, a modern kitchen and a private communal garden. A short walk from Princes Street and the city centre.",
      price: 1800, category: "rent", bedrooms: 2, bathrooms: 1, garages: 0, rooms: 4, size_sqft: 850, land_size_sqft: 850, year_built: 2000,
      address: "14 Heriot Row", neighbourhood: "New Town", city: "Edinburgh", state: "Scotland", country: "United Kingdom",
      amenities: ["WiFi", "Furnished", "Security", "Garden"],
      images: [
        "https://res.cloudinary.com/dsljbxkfy/image/upload/v1774017085/e14_w1umay.jpg",
        "https://res.cloudinary.com/dsljbxkfy/image/upload/v1774017076/i1_wye5tf.jpg",
        "https://res.cloudinary.com/dsljbxkfy/image/upload/v1774017073/i6_xcomls.jpg",
        "https://res.cloudinary.com/dsljbxkfy/image/upload/v1774017072/i5_dr6ypw.jpg",
        "https://res.cloudinary.com/dsljbxkfy/image/upload/v1774017068/i8_dfippp.jpg"
      ]
    },
    {
      title: "Grand 5 Bedroom Villa in Kensington",
      description: "An exceptional five bedroom villa in one of London's most prestigious addresses. Set over four floors with grand reception rooms, a chef's kitchen, a private garden and a basement cinema room. Close to Hyde Park and Kensington High Street.",
      price: 12000, category: "rent", bedrooms: 5, bathrooms: 5, garages: 2, rooms: 12, size_sqft: 5000, land_size_sqft: 6000, year_built: 2008,
      address: "9 Holland Villas Road", neighbourhood: "Kensington", city: "London", state: "Greater London", country: "United Kingdom",
      amenities: ["Garden", "Parking", "Swimming Pool", "Gym", "Security", "CCTV", "Air Conditioning", "Elevator"],
      images: [
        "https://res.cloudinary.com/dsljbxkfy/image/upload/v1774017084/e8_t1vap9.jpg",
        "https://res.cloudinary.com/dsljbxkfy/image/upload/v1774016988/i10_zrzgzr.jpg",
        "https://res.cloudinary.com/dsljbxkfy/image/upload/v1774016987/i13_lbgyw6.jpg",
        "https://res.cloudinary.com/dsljbxkfy/image/upload/v1774016987/i18_gjz242.jpg",
        "https://res.cloudinary.com/dsljbxkfy/image/upload/v1774016986/i9_tsxd9x.jpg"
      ]
    },
    {
      title: "Cosy 1 Bedroom Studio in Shoreditch",
      description: "A stylish and compact one bedroom studio in the heart of Shoreditch. Features an open-plan living area, a modern fitted kitchen and easy access to East London's best culture, dining and nightlife. Great transport links via Shoreditch High Street Overground.",
      price: 1900, category: "rent", bedrooms: 1, bathrooms: 1, garages: 0, rooms: 2, size_sqft: 520, land_size_sqft: 520, year_built: 2018,
      address: "6 Hoxton Square", neighbourhood: "Shoreditch", city: "London", state: "Greater London", country: "United Kingdom",
      amenities: ["WiFi", "Furnished", "Security", "CCTV", "Air Conditioning"],
      images: [
        "https://res.cloudinary.com/dsljbxkfy/image/upload/v1774017083/e13_n09cvo.jpg",
        "https://res.cloudinary.com/dsljbxkfy/image/upload/v1774016984/i19_voyzar.jpg",
        "https://res.cloudinary.com/dsljbxkfy/image/upload/v1774016983/i20_cxhigl.jpg",
        "https://res.cloudinary.com/dsljbxkfy/image/upload/v1774016981/i22_it1hpk.jpg",
        "https://res.cloudinary.com/dsljbxkfy/image/upload/v1774016981/i24_f7zem8.jpg"
      ]
    },
    {
      title: "Period 4 Bedroom Townhouse in Notting Hill",
      description: "A magnificent period townhouse on one of Notting Hill's most iconic streets. Spread across five floors with four double bedrooms, a stunning kitchen, a private terrace and a garden. Close to Portobello Road market and Notting Hill Gate station.",
      price: 7500, category: "rent", bedrooms: 4, bathrooms: 3, garages: 1, rooms: 9, size_sqft: 3000, land_size_sqft: 3500, year_built: 2003,
      address: "31 Pembridge Crescent", neighbourhood: "Notting Hill", city: "London", state: "Greater London", country: "United Kingdom",
      amenities: ["Garden", "Parking", "WiFi", "Security", "CCTV", "Balcony"],
      images: [
        "https://res.cloudinary.com/dsljbxkfy/image/upload/v1774017079/e16_u3ljye.jpg",
        "https://res.cloudinary.com/dsljbxkfy/image/upload/v1774016987/i15_kwhgca.jpg",
        "https://res.cloudinary.com/dsljbxkfy/image/upload/v1774016987/i16_m95xb1.jpg",
        "https://res.cloudinary.com/dsljbxkfy/image/upload/v1774016985/i12_ujc4ul.jpg",
        "https://res.cloudinary.com/dsljbxkfy/image/upload/v1774016986/i14_wr5zn7.jpg"
      ]
    },
    {
      title: "Modern 2 Bedroom Apartment in Leeds City Centre",
      description: "A contemporary two bedroom apartment in Leeds city centre offering a modern open-plan layout, a private balcony and allocated underground parking. Ideal for professionals with easy access to Leeds station and the financial district.",
      price: 1600, category: "rent", bedrooms: 2, bathrooms: 1, garages: 1, rooms: 4, size_sqft: 780, land_size_sqft: 780, year_built: 2020,
      address: "5 Brewery Wharf", neighbourhood: "City Centre", city: "Leeds", state: "West Yorkshire", country: "United Kingdom",
      amenities: ["Parking", "WiFi", "Balcony", "Elevator", "Security", "Air Conditioning"],
      images: [
        "https://res.cloudinary.com/dsljbxkfy/image/upload/v1774017076/e18_ysend8.jpg",
        "https://res.cloudinary.com/dsljbxkfy/image/upload/v1774016982/i21_ndq2iq.jpg",
        "https://res.cloudinary.com/dsljbxkfy/image/upload/v1774016981/i23_gynlnk.jpg",
        "https://res.cloudinary.com/dsljbxkfy/image/upload/v1774017073/i3_ofuacr.jpg",
        "https://res.cloudinary.com/dsljbxkfy/image/upload/v1774017069/i7_t0dkrb.jpg"
      ]
    },
    {
      title: "Spacious 3 Bedroom House in Oxford",
      description: "A well-presented three bedroom family home in a popular Oxford suburb. Features a large lounge, a modern kitchen-diner, a well-maintained garden and off-street parking. Easy access to Oxford city centre, top universities and excellent local schools.",
      price: 2600, category: "rent", bedrooms: 3, bathrooms: 2, garages: 1, rooms: 6, size_sqft: 1350, land_size_sqft: 2000, year_built: 2007,
      address: "18 Banbury Road", neighbourhood: "Summertown", city: "Oxford", state: "Oxfordshire", country: "United Kingdom",
      amenities: ["Garden", "Parking", "WiFi", "Laundry", "Security"],
      images: [
        "https://res.cloudinary.com/dsljbxkfy/image/upload/v1774017086/e9_ebxlqi.jpg",
        "https://res.cloudinary.com/dsljbxkfy/image/upload/v1774017076/i2_v4lhwg.jpg",
        "https://res.cloudinary.com/dsljbxkfy/image/upload/v1774016988/i11_jkayzm.jpg",
        "https://res.cloudinary.com/dsljbxkfy/image/upload/v1774016987/i17_bxqqpq.jpg",
        "https://res.cloudinary.com/dsljbxkfy/image/upload/v1774016984/i19_voyzar.jpg"
      ]
    },
    {
      title: "Bright 2 Bedroom Flat in Brighton",
      description: "A bright and airy two bedroom flat just moments from Brighton seafront. Features a modern open-plan kitchen, a south-facing balcony with sea glimpses and allocated parking. Close to Brighton station, the Lanes and the city's vibrant restaurant scene.",
      price: 2000, category: "rent", bedrooms: 2, bathrooms: 1, garages: 0, rooms: 4, size_sqft: 820, land_size_sqft: 820, year_built: 2016,
      address: "3 Marine Parade", neighbourhood: "Kemptown", city: "Brighton", state: "East Sussex", country: "United Kingdom",
      amenities: ["Balcony", "WiFi", "Furnished", "Security", "Air Conditioning"],
      images: [
        "https://res.cloudinary.com/dsljbxkfy/image/upload/v1774017086/e11_g8b4me.jpg",
        "https://res.cloudinary.com/dsljbxkfy/image/upload/v1774016983/i20_cxhigl.jpg",
        "https://res.cloudinary.com/dsljbxkfy/image/upload/v1774016981/i24_f7zem8.jpg",
        "https://res.cloudinary.com/dsljbxkfy/image/upload/v1774005748/properties/um9djaqujfgl1as4bcu5.jpg",
        "https://res.cloudinary.com/dsljbxkfy/image/upload/v1773928441/properties/vr4hndnv04dhyiflb0bv.jpg"
      ]
    },
    {
      title: "Executive 4 Bedroom Home in Cambridge",
      description: "An executive four bedroom detached home in a sought-after Cambridge village. Offers a stunning kitchen with bi-fold doors opening to the garden, a master bedroom with en-suite and a double garage. Close to top schools and Cambridge city centre.",
      price: 3600, category: "rent", bedrooms: 4, bathrooms: 3, garages: 2, rooms: 8, size_sqft: 2000, land_size_sqft: 3200, year_built: 2014,
      address: "7 Trumpington Road", neighbourhood: "Trumpington", city: "Cambridge", state: "Cambridgeshire", country: "United Kingdom",
      amenities: ["Garden", "Parking", "WiFi", "Security", "Air Conditioning", "Laundry"],
      images: [
        "https://res.cloudinary.com/dsljbxkfy/image/upload/v1774017086/e12_n3inow.jpg",
        "https://res.cloudinary.com/dsljbxkfy/image/upload/v1774005748/properties/txzvzwerbkvvep8qkim7.jpg",
        "https://res.cloudinary.com/dsljbxkfy/image/upload/v1774005748/properties/iqxpqwb8p7xt8a2wudfj.jpg",
        "https://res.cloudinary.com/dsljbxkfy/image/upload/v1774017093/i4_zvnavs.jpg",
        "https://res.cloudinary.com/dsljbxkfy/image/upload/v1774017072/i5_dr6ypw.jpg"
      ]
    },
    {
      title: "Stylish 1 Bedroom Apartment in Birmingham",
      description: "A chic and modern one bedroom apartment in Birmingham's bustling Jewellery Quarter. Features an open-plan kitchen and lounge, floor-to-ceiling windows, a private balcony and access to a rooftop terrace. Perfect for young professionals.",
      price: 1200, category: "rent", bedrooms: 1, bathrooms: 1, garages: 0, rooms: 2, size_sqft: 550, land_size_sqft: 550, year_built: 2021,
      address: "12 Vyse Street", neighbourhood: "Jewellery Quarter", city: "Birmingham", state: "West Midlands", country: "United Kingdom",
      amenities: ["Balcony", "WiFi", "Furnished", "Elevator", "Security", "Air Conditioning"],
      images: [
        "https://res.cloudinary.com/dsljbxkfy/image/upload/v1774017085/e14_w1umay.jpg",
        "https://res.cloudinary.com/dsljbxkfy/image/upload/v1774016987/i15_kwhgca.jpg",
        "https://res.cloudinary.com/dsljbxkfy/image/upload/v1774016986/i14_wr5zn7.jpg",
        "https://res.cloudinary.com/dsljbxkfy/image/upload/v1774016988/i10_zrzgzr.jpg",
        "https://res.cloudinary.com/dsljbxkfy/image/upload/v1774016982/i21_ndq2iq.jpg"
      ]
    },
    {
      title: "Countryside 3 Bedroom Cottage in the Cotswolds",
      description: "A picturesque three bedroom stone cottage set in the heart of the Cotswolds. Features original beamed ceilings, an Aga kitchen, a cosy fireplace and a charming private garden. Ideal for those seeking a peaceful rural retreat with easy motorway access.",
      price: 2400, category: "rent", bedrooms: 3, bathrooms: 2, garages: 1, rooms: 6, size_sqft: 1200, land_size_sqft: 4000, year_built: 1995,
      address: "4 High Street", neighbourhood: "Bourton-on-the-Water", city: "Cheltenham", state: "Gloucestershire", country: "United Kingdom",
      amenities: ["Garden", "Parking", "WiFi", "Furnished", "Solar Power"],
      images: [
        "https://res.cloudinary.com/dsljbxkfy/image/upload/v1774017085/e10_cakqom.jpg",
        "https://res.cloudinary.com/dsljbxkfy/image/upload/v1774016987/i18_gjz242.jpg",
        "https://res.cloudinary.com/dsljbxkfy/image/upload/v1774016981/i23_gynlnk.jpg",
        "https://res.cloudinary.com/dsljbxkfy/image/upload/v1774016985/i12_ujc4ul.jpg",
        "https://res.cloudinary.com/dsljbxkfy/image/upload/v1774016983/i20_cxhigl.jpg"
      ]
    }
  ];
  
  export default PROPERTIES;