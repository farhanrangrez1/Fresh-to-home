

const data={
    "biscuits": [
        {
          "id": 1,
          // "name": "Chocolate Chip",
          "description": "Premium Antibiotic-residue-free Chicken Thigh (Boneless)",
          // "ingredients": ["flour", "sugar", "butter", "chocolate chips"],
          "price": "199.00",
          "image": "https://static.freshtohome.com/media/catalog/product/cache/0/image/600x400/18ae109e34f485bd0b0c075abec96b2e/p/r/premium_chicken_drumsticks_5.jpeg"
        },
        {
          "id": 2,
          // "name": "Oatmeal Raisin",
          "description": "Mackerel / Ayala / Bangda / Aylai / ಬಂಗಡೆ (5 to 9 Count/kg)",
          "ingredients": ["flour", "sugar", "butter", "oats", "raisins"],
          "price": "123.00",
          "image": "https://static.freshtohome.com/media/catalog/product/cache/1/image/600x400/18ae109e34f485bd0b0c075abec96b2e/c/h/chicken_thighboneless.jpg"
        },
        {
          "id": 3,
          // "name": "Shortbread",
          "description": "Premium Sardine / Mathi / Tarli",
          "ingredients": ["flour", "sugar", "butter"],
          "price":"111.00",
          "image": "https://static.freshtohome.com/media/catalog/product/cache/1/image/600x400/18ae109e34f485bd0b0c075abec96b2e/m/a/mackerel_whole_1.jpg"
        },
        {
          "id": 4,
          // "name": "Peanut Butter",
          "description": "Premium Antibiotic-residue-free Chicken Drumsticks (Pack of 5)",
          "ingredients": ["flour", "sugar", "butter", "peanut butter"],
          "price": "199.00",
          "image": "https://static.freshtohome.com/media/catalog/product/cache/1/image/600x400/18ae109e34f485bd0b0c075abec96b2e/m/a/mathi_whole_510g_special.jpg"
        },
        {
          "id": 5,
          // "name": "Almond",
          "description": "Spicy Chettinad Chicken (250g Pack)",
          "ingredients": ["flour", "sugar", "butter", "almonds"],
          "price": "125.00",
          "image": "https://static.freshtohome.com/media/catalog/product/cache/1/image/600x400/18ae109e34f485bd0b0c075abec96b2e/s/a/sail-fish.jpg"
        },
        {
          "id": 6,
          // "name": "Coconut",
          "description": "Chicken Haleem - 200g Pack",
          "ingredients": ["flour", "sugar", "butter", "coconut"],
          "price": "175.00",
          "image": "https://static.freshtohome.com/media/catalog/product/cache/1/image/600x400/18ae109e34f485bd0b0c075abec96b2e/r/u/rupchanda_whole_1_1_.jpg"
        },
        {
          "id": 7,
          // "name": "Gingerbread",
          "description": "Quail / Kaada (Japanese) Skinless - Pack of 2",
          "ingredients": ["flour", "sugar", "butter", "ginger", "molasses"],
          "price": "198.00",
          "image": "https://static.freshtohome.com/media/catalog/product/cache/1/image/600x400/18ae109e34f485bd0b0c075abec96b2e/q/u/quail2_1.jpg"
        },
        {
          "id": 8,
          // "name": "Maple Pecan",
          "description": "Rupchanda / Roopchand / River Pomfret",
          "ingredients": ["flour", "sugar", "butter", "maple syrup", "pecans"],
          "price": "119.00",
          "image": "https://static.freshtohome.com/media/catalog/product/cache/1/image/600x400/18ae109e34f485bd0b0c075abec96b2e/p/r/premium_chicken_winglets_1.jpg"
        },
        {
          "id": 9,
          // "name": "Lemon",
          "description": "Catla / ಕಾಟ್ಲಾ (2kg to 3.5kg)",
          "ingredients": ["flour", "sugar", "butter", "lemon juice", "lemon zest"],
          "price": "125.00",
          "image": "https://static.freshtohome.com/media/catalog/product/cache/1/image/600x400/18ae109e34f485bd0b0c075abec96b2e/5/b/5b3a82935d.jpg"
    },  {
          "id": 10,
          // "name": "Classic",
          "description": "Premium Antibiotic-residue-free Chicken Winglets",
          "ingredients": ["enriched flour", "sugar", "palm and/or canola oil", "cocoa", "high fructose corn syrup", "leavening", "salt", "soy lecithin", "vanillin"],
          "price": "149.00",
          "image": "https://static.freshtohome.com/media/catalog/product/cache/1/image/600x400/18ae109e34f485bd0b0c075abec96b2e/k/a/katla_whole.jpg"
        },
        {
          "id": 11,
          // "name": "Double Stuf",
          "description": "Sail Fish / Ola Meen",
          "ingredients": ["enriched flour", "sugar", "palm and/or canola oil", "cocoa", "high fructose corn syrup", "leavening", "salt", "soy lecithin", "vanillin"],
          "price": "249.00",
          "image": "https://static.freshtohome.com/media/catalog/product/cache/1/image/600x400/18ae109e34f485bd0b0c075abec96b2e/c/h/chicken-haleem_1_1.jpg"
        },
        {
          "id": 12,
          // "name": "Golden",
          "description": "White Prawns / Indian Naaran / ಸೀಗಡಿ (Medium)",
          "ingredients": ["enriched flour", "sugar", "palm and/or canola oil", "high fructose corn syrup", "leavening", "salt", "soy lecithin", "artificial flavor"],
          "price": "359.00",
          "image": "https://static.freshtohome.com/media/catalog/product/cache/1/image/600x400/18ae109e34f485bd0b0c075abec96b2e/c/h/chettinad_chicken.jpg"
        },
        {
          "id": 13,
          // "name": "Mint",
          "description": "Premium Chicken Thigh (Boneless)",
          "ingredients": ["enriched flour", "sugar", "palm and/or canola oil", "cocoa", "high fructose corn syrup", "leavening", "salt", "soy lecithin", "vanillin", "artificial flavor"],
          "price": "199.00",
          "image": "https://static.freshtohome.com/media/catalog/product/cache/1/image/600x400/18ae109e34f485bd0b0c075abec96b2e/c/h/chicken_thighboneless.jpg"
        },
        {
          "id": 14,
          // "name": "Peanut Butter",
          "description": "Emperor / Eari / Sheri / Shaari",
          "ingredients": ["enriched flour", "sugar", "peanut butter", "palm and/or canola oil", "cocoa", "high fructose corn syrup", "leavening", "salt", "soy lecithin", "vanillin"],
          "price": "359.00",
          "image": "https://static.freshtohome.com/media/catalog/product/cache/1/image/600x400/18ae109e34f485bd0b0c075abec96b2e/e/m/emperor_eari_whole.jpg"
        },
  
  
        {
          "id": 15,
          // "name": "Oreo mint creme candle",
          "description": "Black Pomfret / Karutha Avoli / Halwa Fish / ಮಾಂಜಿ (700g to 3kg)",
          "ingredients": ["enriched flour", "sugar", "peanut butter", "palm and/or canola oil", "cocoa", "high fructose corn syrup", "leavening", "salt", "soy lecithin", "vanillin"],
          "price": "759.00",
          "image": "https://static.freshtohome.com/media/catalog/product/cache/1/image/600x400/18ae109e34f485bd0b0c075abec96b2e/b/l/black_pomfret_whole_2.jpg"
        },
        {
          "id": 16,
          // "name": "Oreo Birthday cake candle",
          "description": "Cobia / Motha/ Black King Fish (Similar to Seer Fish, Some Say That It Tastes Better)",
          "ingredients": ["enriched flour", "sugar", "peanut butter", "palm and/or canola oil", "cocoa", "high fructose corn syrup", "leavening", "salt", "soy lecithin", "vanillin"],
          "price": "525.00",
          "image": "https://static.freshtohome.com/media/catalog/product/cache/1/image/600x400/18ae109e34f485bd0b0c075abec96b2e/m/o/motha_whole17653.jpg"
        },
        {
          "id": 17,
          // "name": "Oreo Mint Creme Hat",
          "description": "Mahi Mahi / Pulli Motha",
          "ingredients": ["enriched flour", "sugar", "peanut butter", "palm and/or canola oil", "cocoa", "high fructose corn syrup", "leavening", "salt", "soy lecithin", "vanillin"],
          "price": "269.00",
          "image": "https://static.freshtohome.com/media/catalog/product/cache/1/image/600x400/18ae109e34f485bd0b0c075abec96b2e/m/a/mahi-mahi.jpg"
        },
        {
          "id": 18,
          // "name": "OREO Chocolate-Raspberry Mousse Cake Tower",
          "description": "Pink Perch / Kilimeen / Sankara Meen / Thread Finned Bream / ಮಧುಮಗಳು (Large)",
          "ingredients": ["enriched flour", "sugar", "peanut butter", "palm and/or canola oil", "cocoa", "high fructose corn syrup", "leavening", "salt", "soy lecithin", "vanillin"],
          "price": "289.00",
          "image": "https://static.freshtohome.com/media/catalog/product/cache/1/image/600x400/18ae109e34f485bd0b0c075abec96b2e/p/i/pink_perch_whole_1_1.jpg"
        },
        {
          "id": 19,
          // "name": "OREO Mint Chocolate Chip Pops",
          "description": "Rohu / Rui / ರೋಹು (Size/Grade: 1-1.5kg)",
          "ingredients": ["enriched flour", "sugar", "peanut butter", "palm and/or canola oil", "cocoa", "high fructose corn syrup", "leavening", "salt", "soy lecithin", "vanillin"],
          "price": "119.00",
          "image": "https://static.freshtohome.com/media/catalog/product/cache/1/image/600x400/18ae109e34f485bd0b0c075abec96b2e/r/o/rohu_12.jpg"
        },
        {
          "id": 20,
          "description": "Snake Head Fish / Varaal / Bral / Kannan / Shol / Murrel",
          "ingredients": ["enriched flour", "sugar", "peanut butter", "palm and/or canola oil", "cocoa", "high fructose corn syrup", "leavening", "salt", "soy lecithin", "vanillin"],
          "price":"289.00",
          "image": "https://static.freshtohome.com/media/catalog/product/cache/1/image/600x400/18ae109e34f485bd0b0c075abec96b2e/s/n/snakehead_whole_.jpg"
        },
        {
          "id": 21,
          "description": "Tilapia / Jalebi Fish",
          "ingredients": ["enriched flour", "sugar", "peanut butter", "palm and/or canola oil", "cocoa", "high fructose corn syrup", "leavening", "salt", "soy lecithin", "vanillin"],
          "price": "99.00",
          "image": "https://static.freshtohome.com/media/catalog/product/cache/1/image/600x400/18ae109e34f485bd0b0c075abec96b2e/t/i/tilopia_large_whole.jpg"
        },
        {
          "id": 22,
          "description": "Squid / Koonthal / ಬೊಂಡಾಸ್",
          "ingredients": ["enriched flour", "sugar", "peanut butter", "palm and/or canola oil", "cocoa", "high fructose corn syrup", "leavening", "salt", "soy lecithin", "vanillin"],
          "price": "419.00",
          "image": "https://static.freshtohome.com/media/catalog/product/cache/1/image/600x400/18ae109e34f485bd0b0c075abec96b2e/s/q/squid_whole.jpg"
        },
        {
          "id": 23,
          "description": "Fresh Indian Baasa / Pangasius / Pangas",
          "ingredients": ["enriched flour", "sugar", "peanut butter", "palm and/or canola oil", "cocoa", "high fructose corn syrup", "leavening", "salt", "soy lecithin", "vanillin"],
          "price": "99.00",
          "image": "https://static.freshtohome.com/media/catalog/product/cache/1/image/600x400/18ae109e34f485bd0b0c075abec96b2e/b/a/baasa_whole.jpg"
        },
        {
          "id": 24,
          "description": "Sword Fish",
          "ingredients": ["enriched flour", "sugar", "peanut butter", "palm and/or canola oil", "cocoa", "high fructose corn syrup", "leavening", "salt", "soy lecithin", "vanillin"],
          "price": "299.00",
          "image": "https://static.freshtohome.com/media/catalog/product/cache/33/image/600x400/18ae109e34f485bd0b0c075abec96b2e/p/i/pink_perch_whole-cleaned_1.jpg"
        },
        {
          "id": 25,
          "description": "Boal Fish / Attu Vaala",
          "ingredients": ["enriched flour", "sugar", "peanut butter", "palm and/or canola oil", "cocoa", "high fructose corn syrup", "leavening", "salt", "soy lecithin", "vanillin"],
          "price": "179.00",
          "image": "https://static.freshtohome.com/media/catalog/product/cache/1/image/600x400/18ae109e34f485bd0b0c075abec96b2e/b/o/boal-fish-whole.jpg"
        },
        {
          "id": 26,
          "description": "Flower Tiger Shrimp",
          "ingredients": ["enriched flour", "sugar", "peanut butter", "palm and/or canola oil", "cocoa", "high fructose corn syrup", "leavening", "salt", "soy lecithin", "vanillin"],
          "price": "649.00",
          "image": "https://static.freshtohome.com/media/catalog/product/cache/1/image/600x400/18ae109e34f485bd0b0c075abec96b2e/5/b/5b3a75895d-edit_-_flower_prawn_1.jpg"
        },
        {
          "id": 27,
          "description": "Indian Prawns / Venami / Vannamei / Jhinga / Chemmin / ಸೀಗಡಿ (40+ Count/kg)",
          "ingredients": ["enriched flour", "sugar", "peanut butter", "palm and/or canola oil", "cocoa", "high fructose corn syrup", "leavening", "salt", "soy lecithin", "vanillin"],
          "price": "369.00",
          "image": "https://static.freshtohome.com/media/catalog/product/cache/1/image/600x400/18ae109e34f485bd0b0c075abec96b2e/i/n/indian_prawns_whole11169_4__2.jpg"
        },
        {
          "id": 28,
          "description": "Horse Mackerel / Ayala Para / Vankada / ಗೊಂಡ್ಲು (Small)",
          "ingredients": ["enriched flour", "sugar", "peanut butter", "palm and/or canola oil", "cocoa", "high fructose corn syrup", "leavening", "salt", "soy lecithin", "vanillin"],
          "price": "129.00",
          "image": "https://static.freshtohome.com/media/catalog/product/cache/1/image/600x400/18ae109e34f485bd0b0c075abec96b2e/h/o/horse_mackerel_whole.jpg"
        },
        {
          "id": 29,
          "description": "Queen Fish / Leather Skin Fish",
          "ingredients": ["enriched flour", "sugar", "peanut butter", "palm and/or canola oil", "cocoa", "high fructose corn syrup", "leavening", "salt", "soy lecithin", "vanillin"],
          "price": "229.00",
          "image": "https://static.freshtohome.com/media/catalog/product/cache/1/image/600x400/18ae109e34f485bd0b0c075abec96b2e/q/u/queen-fish.jpg"
        },
        {
          "id": 30,
          "description": "Bhetki / ভেটকী / Barramundi / Asian Seabass / Kalanji",
          "ingredients": ["enriched flour", "sugar", "peanut butter", "palm and/or canola oil", "cocoa", "high fructose corn syrup", "leavening", "salt", "soy lecithin", "vanillin"],
          "price": "475.00",
          "image": "https://static.freshtohome.com/media/catalog/product/cache/1/image/600x400/18ae109e34f485bd0b0c075abec96b2e/b/h/bhetki_1.jpg"
        },
        {
          "id": 31,
          "description": "Premium Tender Lamb - Curry Cut",
          "ingredients": ["enriched flour", "sugar", "peanut butter", "palm and/or canola oil", "cocoa", "high fructose corn syrup", "leavening", "salt", "soy lecithin", "vanillin"],
          "price": "449.00",
          "image": "https://static.freshtohome.com/media/catalog/product/cache/1/image/600x400/18ae109e34f485bd0b0c075abec96b2e/l/a/lamb_curry_cut_4.jpg"
        },
        {
          "id": 32,
          "description": "Premium Tender Goat / ಮೇಕೆ - Curry Cut",
          "ingredients": ["enriched flour", "sugar", "peanut butter", "palm and/or canola oil", "cocoa", "high fructose corn syrup", "leavening", "salt", "soy lecithin", "vanillin"],
          "price":"449.00",
          "image": "https://static.freshtohome.com/media/catalog/product/cache/1/image/600x400/18ae109e34f485bd0b0c075abec96b2e/p/r/premium_tender_goat_curry_cut_1_.jpg"
        },
        {
          "id": 33,
          "description": "Horse Mackerel / Ayala Para / Vankada / ಗೊಂಡ್ಲು",
          "ingredients": ["enriched flour", "sugar", "peanut butter", "palm and/or canola oil", "cocoa", "high fructose corn syrup", "leavening", "salt", "soy lecithin", "vanillin"],
          "price": "199.00",
          "image": "https://static.freshtohome.com/media/catalog/product/cache/1/image/600x400/18ae109e34f485bd0b0c075abec96b2e/h/o/horse_mackerel_whole_1_1.jpg"
        },
        {
          "id": 34,
          "description": "Premium Boneless Chicken Cubes",
          "ingredients": ["enriched flour", "sugar", "peanut butter", "palm and/or canola oil", "cocoa", "high fructose corn syrup", "leavening", "salt", "soy lecithin", "vanillin"],
          "price": "249.00",
          "image": "https://static.freshtohome.com/media/catalog/product/cache/1/image/600x400/18ae109e34f485bd0b0c075abec96b2e/c/h/chicken_cubes_3.jpg"
        },
        {
          "id": 35,
          "description": "Jumbo Flower Tiger Shrimp",
          "ingredients": ["enriched flour", "sugar", "peanut butter", "palm and/or canola oil", "cocoa", "high fructose corn syrup", "leavening", "salt", "soy lecithin", "vanillin"],
          "price": "639.00",
          "image": "https://static.freshtohome.com/media/catalog/product/cache/1/image/600x400/18ae109e34f485bd0b0c075abec96b2e/5/b/5b3a75615d-edit_1.jpg"
        },
        {
          "id": 36,
          "description": "Emperor / Eari / Sheri (Small)",
          "ingredients": ["enriched flour", "sugar", "peanut butter", "palm and/or canola oil", "cocoa", "high fructose corn syrup", "leavening", "salt", "soy lecithin", "vanillin"],
          "price": "339.00",
          "image": "https://static.freshtohome.com/media/catalog/product/cache/1/image/600x400/18ae109e34f485bd0b0c075abec96b2e/e/m/emperor_eari_whole_3_.jpg"
        },
        {
          "id": 37,
          "description": "Chitol / চিতল/ চেতল / Chitala / Knifefish / Humped Featherback",
          "ingredients": ["enriched flour", "sugar", "peanut butter", "palm and/or canola oil", "cocoa", "high fructose corn syrup", "leavening", "salt", "soy lecithin", "vanillin"],
          "price": "379.00",
          "image": "https://static.freshtohome.com/media/catalog/product/cache/1/image/600x400/18ae109e34f485bd0b0c075abec96b2e/c/h/chitol_whole__1.jpg"
        },
        {
          "id": 38,
          "description": "Preservative Free Malabar Style Chicken Pickle - 150g+ pack",
          "ingredients": ["enriched flour", "sugar", "peanut butter", "palm and/or canola oil", "cocoa", "high fructose corn syrup", "leavening", "salt", "soy lecithin", "vanillin"],
          "price": "145.00",
          "image": "https://static.freshtohome.com/media/catalog/product/cache/1/image/600x400/18ae109e34f485bd0b0c075abec96b2e/c/h/chicken_pickle_1.jpg"
        },
        {
          "id": 39,
          "description": "Indian Prawns / Venami / Vannamei / Jhinga / Chemmin / ಸೀಗಡಿ (60+ Count/kg)",
          "ingredients": ["enriched flour", "sugar", "peanut butter", "palm and/or canola oil", "cocoa", "high fructose corn syrup", "leavening", "salt", "soy lecithin", "vanillin"],
          "price": "309.00",
          "image": "https://static.freshtohome.com/media/catalog/product/cache/1/image/600x400/18ae109e34f485bd0b0c075abec96b2e/i/n/indian_prawns_whole11169_4__2_3.jpg"
        },
        {
          "id": 40,
          "description": "Mutton Trotters / Paya (Set of 4 whole legs) for Soup",
          "ingredients": ["enriched flour", "sugar", "peanut butter", "palm and/or canola oil", "cocoa", "high fructose corn syrup", "leavening", "salt", "soy lecithin", "vanillin"],
          "price": "538.00",
          "image": "https://static.freshtohome.com/media/catalog/product/cache/1/image/600x400/18ae109e34f485bd0b0c075abec96b2e/m/u/mutton_trotters_set_of_4_legs_for_soup.jpg"
        },
        {
          "id": 41,
          "description": "Premium Goat Raan / Leg Portion / ಮೇಕೆ ಕಾಲು ಮಾಂಸ",
          "ingredients": ["enriched flour", "sugar", "peanut butter", "palm and/or canola oil", "cocoa", "high fructose corn syrup", "leavening", "salt", "soy lecithin", "vanillin"],
          "price": "499.00",
          "image": "https://static.freshtohome.com/media/catalog/product/cache/1/image/600x400/18ae109e34f485bd0b0c075abec96b2e/g/o/goat_whole_leg.jpg"
        },
        {
          "id": 42,
          "description": "Peri Peri Chicken Drumsticks - Pack of 2 Drumsticks (Ready-To-Fry)",
          "ingredients": ["enriched flour", "sugar", "peanut butter", "palm and/or canola oil", "cocoa", "high fructose corn syrup", "leavening", "salt", "soy lecithin", "vanillin"],
          "price": "145.00",
          "image": "https://static.freshtohome.com/media/catalog/product/cache/1/image/600x400/18ae109e34f485bd0b0c075abec96b2e/p/e/peri-peri-drumstick.jpg"
        },
        {
          "id": 43,
          "description": "Idly / Dosa Batter (Freshly Stone-ground, no added preservatives/chemicals) - 1kg Pack",
          "ingredients": ["enriched flour", "sugar", "peanut butter", "palm and/or canola oil", "cocoa", "high fructose corn syrup", "leavening", "salt", "soy lecithin", "vanillin"],
          "price":"65.00",
          "image": "https://static.freshtohome.com/media/catalog/product/cache/1/image/600x400/18ae109e34f485bd0b0c075abec96b2e/i/d/idly_dosa_batter_1.jpg"
        },
        {
          "id": 44,
          "description": "Chicken Mince / Kheema Dry Fry (500g)",
          "ingredients": ["enriched flour", "sugar", "peanut butter", "palm and/or canola oil", "cocoa", "high fructose corn syrup", "leavening", "salt", "soy lecithin", "vanillin"],
          "price": "198.00",
          "image": "https://static.freshtohome.com/media/catalog/product/cache/1/image/600x400/18ae109e34f485bd0b0c075abec96b2e/c/h/chicken_mince_dry_fry.jpg"
        },
        {
          "id": 45,
          "description": "Premium Chicken Hearts",
          "ingredients": ["enriched flour", "sugar", "peanut butter", "palm and/or canola oil", "cocoa", "high fructose corn syrup", "leavening", "salt", "soy lecithin", "vanillin"],
          "price": "99.00",
          "image": "https://static.freshtohome.com/media/catalog/product/cache/1/image/600x400/18ae109e34f485bd0b0c075abec96b2e/c/h/chicken_heart_2.jpg"
        },
        {
          "id": 46,
          "description": "Mutton Haleem - 200g Pack",
          "ingredients": ["enriched flour", "sugar", "peanut butter", "palm and/or canola oil", "cocoa", "high fructose corn syrup", "leavening", "salt", "soy lecithin", "vanillin"],
          "price": "222.00",
          "image": "https://static.freshtohome.com/media/catalog/product/cache/1/image/600x400/18ae109e34f485bd0b0c075abec96b2e/m/u/mutton-haleem_1_1.jpg"
        },
        {
          "id": 47,
          "description": "Butter Chicken",
          "ingredients": ["enriched flour", "sugar", "peanut butter", "palm and/or canola oil", "cocoa", "high fructose corn syrup", "leavening", "salt", "soy lecithin", "vanillin"],
          "price": "225.00",
          "image": "https://static.freshtohome.com/media/catalog/product/cache/1/image/600x400/18ae109e34f485bd0b0c075abec96b2e/b/u/butter_chicken_1.jpg"
        },
        {
          "id": 48,
          "description": "Tandoori Baasa Boneless Fillets",
          "ingredients": ["enriched flour", "sugar", "peanut butter", "palm and/or canola oil", "cocoa", "high fructose corn syrup", "leavening", "salt", "soy lecithin", "vanillin"],
          "price": "225.00",
          "image": "https://static.freshtohome.com/media/catalog/product/cache/1/image/600x400/18ae109e34f485bd0b0c075abec96b2e/t/a/tandoori_baasa.jpg"
        },
        {
          "id": 49,
          "description": "Fresh Indian Baasa / Pangasius / Pangas - Tikka Cut (300g Pack)",
          "ingredients": ["enriched flour", "sugar", "peanut butter", "palm and/or canola oil", "cocoa", "high fructose corn syrup", "leavening", "salt", "soy lecithin", "vanillin"],
          "price": "243.00",
          "image": "https://static.freshtohome.com/media/catalog/product/cache/1/image/600x400/18ae109e34f485bd0b0c075abec96b2e/b/a/basa_tikka.jpeg"
        },
        {
          "id": 50,
          "description": "Fresh Indian Baasa / Pangasius / Pangas - Fish Finger Cut (300g Pack)",
          "ingredients": ["enriched flour", "sugar", "peanut butter", "palm and/or canola oil", "cocoa", "high fructose corn syrup", "leavening", "salt", "soy lecithin", "vanillin"],
          "price": "243.00",
          "image": "https://static.freshtohome.com/media/catalog/product/cache/1/image/600x400/18ae109e34f485bd0b0c075abec96b2e/f/r/fresh_indian_baasa_fish_fingers.jpg"
        },
        {
          "id": 51,
          "description": "Combo: (250g Spicy Chettinad Chicken + 250g Tangy Chicken Ghee Roast)",
          "ingredients": ["enriched flour", "sugar", "peanut butter", "palm and/or canola oil", "cocoa", "high fructose corn syrup", "leavening", "salt", "soy lecithin", "vanillin"],
          "price": "245.00",
          "image": "https://static.freshtohome.com/media/catalog/product/cache/1/image/600x400/18ae109e34f485bd0b0c075abec96b2e/c/a/catelogue-images_chettinad-chicken-and-chicken-ghee-roast-07.06.2022.jpg"
        },
        {
          "id": 52,
          "description": "Combo: (250g Goan Style Chicken Cafreal + 250g Tangy Chicken Ghee Roast)",
          "ingredients": ["enriched flour", "sugar", "peanut butter", "palm and/or canola oil", "cocoa", "high fructose corn syrup", "leavening", "salt", "soy lecithin", "vanillin"],
          "price":"245.00",
          "image": "https://static.freshtohome.com/media/catalog/product/cache/1/image/600x400/18ae109e34f485bd0b0c075abec96b2e/g/o/goan_chicken_cafreal_-_tangy_ghee_roast.jpeg"
        },



        
      
      ] }


export default data