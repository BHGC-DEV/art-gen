const Foods = [
    "abiyuch",
    "acerola",
    "agave",
    "agents",
    "agutuk",
    "alfalfa",
    "amaranth",
    "animals",
    "apples",
    "applesauce",
    "apricots",
    "arrowroot",
    "artichokes",
    "arugula",
    "ascidians",
    "asparagus",
    "avocados",
    "babies",
    "baby food",
    "bacon",
    "bagels",
    "baking",
    "balls",
    "bamboo",
    "bananas",
    "barbecue",
    "barley",
    "basil",
    "beans",
    "bear",
    "beef",
    "beerwurst",
    "beets",
    "berries",
    "besan",
    "beverages",
    "biscuits",
    "bison",
    "blackberries",
    "blackeyes",
    "blueberries",
    "bockwurst",
    "bologna",
    "boysenberries",
    "bran",
    "bees",
    "bratwurst",
    "braunschweiger",
    "bread",
    "breadfruit",
    "breakfast",
    "breast",
    "broadbeans",
    "broccoli",
    "broth",
    "brotwurst",
    "brussels",
    "buckwheat",
    "buffalo",
    "buns",
    "burdock",
    "burgers",
    "burritos",
    "butter",
    "butters",
    "cabbage",
    "cake",
    "candies",
    "capers",
    "cardoon",
    "caribou",
    "carob",
    "carrot",
    "carrots",
    "cassava",
    "catsup",
    "cattail",
    "cauliflower",
    "celeriac",
    "celery",
    "celtuce",
    "cereal",
    "cereals",
    "chard",
    "chayote",
    "cheese",
    "cheesecake",
    "cheesefurter",
    "cherimoya",
    "cherries",
    "chicken",
    "chickpeas",
    "chicory",
    "chilchen",
    "children",
    "chili",
    "chips",
    "chiton",
    "chives",
    "chocolate",
    "chokecherries",
    "chorizo",
    "chrysanthemum",
    "cilantro",
    "cinnamon",
    "citronella",
    "citrus",
    "clams",
    "clementines",
    "cloudberries",
    "cockles",
    "cocktail",
    "cocoa",
    "coffee",
    "coffeecake",
    "collards",
    "special cookies",
    "concentrate",
    "marijuana",
    "cones",
    "confectionery",
    "cookies",
    "coriander",
    "corn",
    "birdseed",
    "cornmeal",
    "cornsalad",
    "cornstarch",
    "cotija",
    "couscous",
    "cowpeas",
    "crabapples",
    "seeds",
    "crackers",
    "cranberries",
    "cranberry",
    "cream",
    "cress",
    "croissants",
    "croutons",
    "crumbs",
    "crusts",
    "crustaceans",
    "cucumber",
    "currants",
    "custard-apple",
    "custards",
    "dairy",
    "dandelion",
    "danish",
    "dates",
    "deer",
    "dessert",
    "desserts",
    "dill",
    "dinner",
    "dip",
    "dock",
    "dogs",
    "dough",
    "doughnuts",
    "dove",
    "dressing",
    "drink",
    "drippings",
    "drumstick",
    "duck",
    "durian",
    "dutch people",
    "edamame",
    "eggnog",
    "eggplant",
    "eggs",
    "elderberries",
    "elk",
    "emu",
    "energy",
    "entrees",
    "eppaw",
    "the essence of wetness",
    "falafel",
    "fast",
    "fat",
    "fava",
    "feijoa",
    "fennel",
    "rocks",
    "ferns",
    "fiddlehead",
    "figs",
    "fillets",
    "fillings",
    "fireweed",
    "fish",
    "flakes",
    "flans",
    "flavored dirt",
    "flour",
    "flowers",
    "focaccia",
    "foie grass",
    "food",
    "foods",
    "formula",
    "formulated formula",
    "frankfurters",
    "franks",
    "frijoles",
    "frogs",
    "frostings",
    "frozen objects",
    "fruit",
    "fruit-flavored fruit",
    "frybread",
    "fungi",
    "garbanzo",
    "garlic",
    "gelatin",
    "gelatins",
    "germs",
    "ginger",
    "gluten",
    "goats",
    "geese",
    "gooseberries",
    "gourds",
    "grains",
    "methamphetamine",
    "granola",
    "viruses",
    "grapefruit",
    "grapes",
    "foie gras",
    "grass",
    "gravy",
    "greens",
    "groats",
    "ground apples",
    "groundcherries",
    "grouse",
    "guacamole",
    "guanabana",
    "guava",
    "guavas",
    "guinea pigs",
    "gum",
    "ham",
    "hazelnut",
    "hazelnuts",
    "headcheese",
    "hearts",
    "hibiscus",
    "rose hips",
    "genitals",
    "honey",
    "horseradish",
    "household products",
    "huckleberries",
    "hummus",
    "motherflippin' breadcrumbs",
    "hydrogenated hydrogen",
    "hydrolyzed cats",
    "ice",
    "imitation food",
    "incaparina",
    "industrial lubricant",
    "jackfruit",
    "jams",
    "jellies",
    "jellyfish",
    "jerusalem artichokes",
    "jicama",
    "juice",
    "jujubes",
    "jute",
    "kale",
    "kanpyo",
    "keikitos",
    "kielbasa",
    "kiwanos",
    "kiwifruit",
    "knackwurst",
    "kohlrabi",
    "kumquats",
    "lambs",
    "lambsquarters",
    "lard",
    "lasagna",
    "keto",
    "leavening",
    "leaves",
    "leeks",
    "legs",
    "lemonade",
    "lemons",
    "lentils",
    "lettuce",
    "lima beans",
    "lime",
    "limeade",
    "limes",
    "links",
    "litchis",
    "liver",
    "liverwurst",
    "loaf",
    "loganberries",
    "loins",
    "longans",
    "loquats",
    "lotus flowers",
    "lunch",
    "luncheon",
    "lupins",
    "macaroni",
    "malabar",
    "malted malt",
    "mammy-apples",
    "mango",
    "mangos",
    "mangosteen",
    "maraschino",
    "margarine",
    "marmalade",
    "mayonnaise",
    "meat",
    "meatballs",
    "meatloaf",
    "melons",
    "milk",
    "millet",
    "miso",
    "mocha",
    "molasses",
    "mollusks",
    "moose",
    "mortadella",
    "mothbeans",
    "mice",
    "muffin",
    "muffins",
    "mulberries",
    "ghost chips",
    "mush",
    "mushrooms",
    "mustard",
    "mutton",
    "naranjilla",
    "nectar",
    "nectarines",
    "nettles",
    "noodles",
    "nopales",
    "novelties",
    "nuts",
    "oat",
    "oats",
    "octopus",
    "oheloberries",
    "oil",
    "okra",
    "olives",
    "onions",
    "oopah",
    "oranges",
    "ostrich",
    "palm oil",
    "pancakes",
    "papad",
    "papaya",
    "papayas",
    "parfait",
    "parmesan",
    "parsley",
    "parsnips",
    "passion-fruit",
    "pasta",
    "pastrami",
    "pastries",
    "pastry",
    "pate",
    "patties",
    "patty",
    "pea",
    "peach",
    "peaches",
    "peanut",
    "peanuts",
    "detergent",
    "pears",
    "peas",
    "pectin",
    "peel",
    "people",
    "petrol",
    "flesh",
    "peppered",
    "peppermint",
    "pepperoni",
    "peppers",
    "persimmons",
    "pheasant",
    "phyllo",
    "pickle",
    "pickles",
    "picnic",
    "pie",
    "pigeon",
    "pigeonpeas",
    "pimento",
    "pimiento",
    "pineapple",
    "feathers",
    "pitanga",
    "pizza",
    "plain",
    "plantains",
    "plums",
    "pockets",
    "pokeberry",
    "pomegranate",
    "pomegranates",
    "popcorn",
    "pork",
    "potato",
    "potatoes",
    "potsticker",
    "poultry",
    "powder",
    "prairie",
    "prepared",
    "preserves",
    "pretzels",
    "prickly",
    "products",
    "protein",
    "prunes",
    "pudding",
    "puddings",
    "puffs",
    "pulp",
    "pummelo",
    "pumpkin",
    "punch",
    "puppies",
    "puree",
    "purslane",
    "quail",
    "quarters",
    "quinces",
    "quinoa",
    "raab",
    "radicchio",
    "radishes",
    "raisins",
    "rambutans",
    "raspberries",
    "ravioli",
    "ready-to-drink fluids",
    "ready-to-eat junk",
    "red stuff",
    "redditors",
    "reduced cream",
    "refried beans",
    "relish",
    "at restaurants",
    "rhubarb",
    "rice",
    "rings",
    "roast",
    "rojos",
    "rolls",
    "roots",
    "roses",
    "rose-apples",
    "rosemary",
    "rowal",
    "rutabagas",
    "rye",
    "salad",
    "salami",
    "salmon",
    "salmonberries",
    "salt",
    "sandwiches",
    "sapodilla",
    "sapote",
    "sauces",
    "sauerkraut",
    "sausages",
    "scrapple",
    "seal",
    "seasoning",
    "seaweed",
    "semolina",
    "sesbania",
    "shakes",
    "shallots",
    "shells",
    "sherbet",
    "shoots",
    "shortening",
    "shoyu",
    "smelt",
    "smoked fish",
    "smoothie",
    "snacks",
    "sorghum",
    "souffle",
    "sourdock",
    "soy",
    "soybeans",
    "soyburgers",
    "soymilk",
    "spaghetti",
    "spearmint",
    "spelt",
    "spices",
    "spinach",
    "cats",
    "spreads",
    "sprouts",
    "squabs",
    "squash",
    "squirrel",
    "steelhead",
    "stew",
    "soup",
    "sticks",
    "strawberries",
    "strudel",
    "stuffing",
    "succotash",
    "sugar",
    "sugar-apples",
    "sugars",
    "supplements",
    "sweet",
    "sweeteners",
    "swisswurst",
    "syrups",
    "tacos",
    "tamales",
    "tamari",
    "tamarinds",
    "tangerines",
    "tapioca",
    "taquitos",
    "taro",
    "tart",
    "tea",
    "teff",
    "tempeh",
    "tenders",
    "thighs",
    "thuringer",
    "thyme",
    "toast",
    "toddlers",
    "tofu",
    "tomatillos",
    "tomatoes",
    "toppings",
    "tortellini",
    "tortillas",
    "triticale",
    "trout",
    "tunicate",
    "tunughnak",
    "turkey",
    "turnip",
    "turnips",
    "turnovers",
    "turtles",
    "twists",
    "vanilla",
    "veal",
    "vegetable-oil",
    "vegetables",
    "vegetarian",
    "veggies",
    "venison",
    "vermicelli",
    "vinegar",
    "vinespinach",
    "volteados",
    "waffles",
    "walrus",
    "wasabi",
    "water",
    "waterchestnuts",
    "watercress",
    "watermelon",
    "waxgourds",
    "weed",
    "wheat",
    "whey",
    "whiskey",
    "willow",
    "wine",
    "wocas",
    "wontons",
    "wrappers",
    "yachtwurst",
    "yams",
    "yambeans",
    "yautia",
    "yeast",
    "yellow",
    "yogurt",
    "kiwifruit",
    "biltong"
];

module.exports = {
    Foods
}