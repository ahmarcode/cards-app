// const data = [
//   {
//     name: "Mixmax",
//     budget_name: "Software subscription",
//     owner_id: 1,
//     spent: {
//       value: 100,
//       currency: "SGD",
//     },
//     available_to_spend: {
//       value: 1000,
//       currency: "SGD",
//     },
//     card_type: "burner",
//     expiry: "2023-02-08T18:30:00.000Z",
//     limit: 100,
//     status: "active",
//   },
// ];

const DATA = [
  {
    name: "Patten",
    available_to_spend: "$485.38",
    spent: "$3.93",
    budget_name: "Research and Development",
    id: 1,
    expiry: "12/13/2022",
    card_type: "Iskandar Airport",
    limit: 7,
    status: "Reconquista Airport",

    owner_id: 1,
  },
  {
    name: "Danila",
    budget_name: "Training",
    id: 2,
    owner_id: 2,
    spent: "$9.86",
    available_to_spend: "$286.03",
    card_type: "Astrakhan Airport",
    expiry: "8/15/2022",
    limit: 942,
    status: "Tshabong Airport",
  },
  {
    name: "Luigi",
    budget_name: "Human Resources",
    id: 3,
    owner_id: 3,
    spent: "$3.70",
    available_to_spend: "$469.47",
    card_type: "Kangiqsujuaq (Wakeham Bay) Airport",
    expiry: "9/17/2022",
    limit: 807,
    status: "Ebolowa Airport",
  },
  {
    name: "Michael",
    budget_name: "Research and Development",
    id: 4,
    owner_id: 4,
    spent: "$8.60",
    available_to_spend: "$447.56",
    card_type: "Sahiwal Airport",
    expiry: "2/16/2023",
    limit: 619,
    status: "La Gaviota Airport",
  },
  {
    name: "Gracie",
    budget_name: "Research and Development",
    id: 5,
    owner_id: 5,
    spent: "$6.39",
    available_to_spend: "$234.54",
    card_type: "Ailinglaplap Airok Airport",
    expiry: "12/19/2022",
    limit: 757,
    status: "Bassel Al-Assad International Airport",
  },
  {
    name: "Johnna",
    budget_name: "Business Development",
    id: 6,
    owner_id: 6,
    spent: "$1.13",
    available_to_spend: "$171.77",
    card_type: "Dornoch Airfield",
    expiry: "9/7/2022",
    limit: 657,
    status: "Néma Airport",
  },
  {
    name: "Warden",
    budget_name: "Services",
    id: 7,
    owner_id: 7,
    spent: "$6.52",
    available_to_spend: "$510.26",
    card_type: "Naracoorte Airport",
    expiry: "8/1/2022",
    limit: 248,
    status: "Maré Airport",
  },
  {
    name: "Remington",
    budget_name: "Legal",
    id: 8,
    owner_id: 8,
    spent: "$9.46",
    available_to_spend: "$256.87",
    card_type: "Røst Airport",
    expiry: "4/21/2023",
    limit: 188,
    status: "Stevens Point Municipal Airport",
  },
  {
    name: "Ernest",
    budget_name: "Business Development",
    id: 9,
    owner_id: 9,
    spent: "$3.49",
    available_to_spend: "$291.91",
    card_type: "José Leonardo Chirinos Airport",
    expiry: "7/6/2023",
    limit: 101,
    status: "East Texas Regional Airport",
  },
  {
    name: "Florentia",
    budget_name: "Training",
    id: 10,
    owner_id: 10,
    spent: "$5.03",
    available_to_spend: "$639.55",
    card_type: "Maximo Gomez Airport",
    expiry: "6/26/2023",
    limit: 327,
    status: "Gainesville Regional Airport",
  },
  {
    name: "Pauletta",
    budget_name: "Accounting",
    id: 11,
    owner_id: 11,
    spent: "$1.44",
    available_to_spend: "$845.33",
    card_type: "Pacific City State Airport",
    expiry: "11/17/2022",
    limit: 316,
    status: "Muş Airport",
  },
  {
    name: "Pail",
    budget_name: "Marketing",
    id: 12,
    owner_id: 12,
    spent: "$7.56",
    available_to_spend: "$636.51",
    card_type: "Doha International Airport",
    expiry: "11/23/2022",
    limit: 753,
    status: "Whale Pass Seaplane Float Harbor Facility",
  },
  {
    name: "Charlton",
    budget_name: "Marketing",
    id: 13,
    owner_id: 13,
    spent: "$2.97",
    available_to_spend: "$72.52",
    card_type: "Trincomalee Harbor Waterdrome",
    expiry: "4/20/2023",
    limit: 602,
    status: "Chengjisihan Airport",
  },
  {
    name: "Manuel",
    budget_name: "Training",
    id: 14,
    owner_id: 14,
    spent: "$1.49",
    available_to_spend: "$411.28",
    card_type: "Coari Airport",
    expiry: "3/28/2023",
    limit: 30,
    status: "Rochester International Airport",
  },
  {
    name: "Lodovico",
    budget_name: "Research and Development",
    id: 15,
    owner_id: 15,
    spent: "$1.56",
    available_to_spend: "$423.80",
    card_type: "Ambler Airport",
    expiry: "3/28/2023",
    limit: 8,
    status: "Stockholm Västerås Airport",
  },
  {
    name: "Ardyce",
    budget_name: "Services",
    id: 16,
    owner_id: 16,
    spent: "$6.04",
    available_to_spend: "$959.48",
    card_type: "George R Carr Memorial Air Field",
    expiry: "1/8/2023",
    limit: 962,
    status: "Yasouj Airport",
  },
  {
    name: "Joyan",
    budget_name: "Accounting",
    id: 17,
    owner_id: 17,
    spent: "$5.93",
    available_to_spend: "$356.24",
    card_type: "Djumu-Djomoe Airport",
    expiry: "10/1/2022",
    limit: 659,
    status: "Bassatine Airport",
  },
  {
    name: "Kiri",
    budget_name: "Services",
    id: 18,
    owner_id: 18,
    spent: "$5.30",
    available_to_spend: "$755.35",
    card_type: "Puerto Rico Airport",
    expiry: "11/30/2022",
    limit: 324,
    status: "Kangding Airport",
  },
  {
    name: "Bunny",
    budget_name: "Marketing",
    id: 19,
    owner_id: 19,
    spent: "$1.52",
    available_to_spend: "$536.52",
    card_type: "Hluhluwe Airport",
    expiry: "5/10/2023",
    limit: 359,
    status: "Esfahan Shahid Beheshti International Airport",
  },
  {
    name: "Pincus",
    budget_name: "Business Development",
    id: 20,
    owner_id: 20,
    spent: "$3.22",
    available_to_spend: "$378.86",
    card_type: "Dalnerechensk Airport",
    expiry: "2/5/2023",
    limit: 83,
    status: "Rentschler Heliport",
  },
  {
    name: "Derrek",
    budget_name: "Product Management",
    id: 21,
    owner_id: 21,
    spent: "$2.03",
    available_to_spend: "$282.85",
    card_type: "Tulita Airport",
    expiry: "1/25/2023",
    limit: 432,
    status: "Opa-locka Executive Airport",
  },
  {
    name: "Constancia",
    budget_name: "Accounting",
    id: 22,
    owner_id: 22,
    spent: "$1.27",
    available_to_spend: "$552.51",
    card_type: "Tangalooma Airport",
    expiry: "7/19/2023",
    limit: 740,
    status: "Uyuni Airport",
  },
  {
    name: "Giselle",
    budget_name: "Human Resources",
    id: 23,
    owner_id: 23,
    spent: "$9.91",
    available_to_spend: "$538.35",
    card_type: "Lihue Airport",
    expiry: "10/3/2022",
    limit: 69,
    status: "Mopah Airport",
  },
  {
    name: "Myrna",
    budget_name: "Business Development",
    id: 24,
    owner_id: 24,
    spent: "$6.36",
    available_to_spend: "$822.76",
    card_type: "Laguna Army Airfield",
    expiry: "6/24/2023",
    limit: 209,
    status: "Robinson River Airport",
  },
  {
    name: "Kirby",
    budget_name: "Engineering",
    id: 25,
    owner_id: 25,
    spent: "$4.78",
    available_to_spend: "$872.30",
    card_type: "Lumberton Regional Airport",
    expiry: "2/13/2023",
    limit: 769,
    status: "Latina Air Base",
  },
  {
    name: "Stephanie",
    budget_name: "Product Management",
    id: 26,
    owner_id: 26,
    spent: "$4.18",
    available_to_spend: "$752.32",
    card_type: "Owen Roberts International Airport",
    expiry: "7/31/2022",
    limit: 889,
    status: "Sioux Lookout Airport",
  },
  {
    name: "Cristi",
    budget_name: "Accounting",
    id: 27,
    owner_id: 27,
    spent: "$4.83",
    available_to_spend: "$449.94",
    card_type: "Guadalupe Airport",
    expiry: "11/10/2022",
    limit: 342,
    status: "Néma Airport",
  },
  {
    name: "Valeria",
    budget_name: "Services",
    id: 28,
    owner_id: 28,
    spent: "$7.63",
    available_to_spend: "$738.48",
    card_type: "Perth International Airport",
    expiry: "7/31/2022",
    limit: 769,
    status: "Santa Ana Airport",
  },
  {
    name: "Archibaldo",
    budget_name: "Human Resources",
    id: 29,
    owner_id: 29,
    spent: "$5.06",
    available_to_spend: "$312.79",
    card_type: "Nabire Airport",
    expiry: "4/21/2023",
    limit: 151,
    status: "Zhukovsky International Airport",
  },
  {
    name: "Natal",
    budget_name: "Human Resources",
    id: 30,
    owner_id: 30,
    spent: "$4.88",
    available_to_spend: "$66.08",
    card_type: "Ministro Victor Konder International Airport",
    expiry: "2/26/2023",
    limit: 921,
    status: "Lomé-Tokoin Airport",
  },
  {
    name: "Forrester",
    budget_name: "Services",
    id: 31,
    owner_id: 31,
    spent: "$0.04",
    available_to_spend: "$327.15",
    card_type: "Anderson Regional Airport",
    expiry: "6/14/2023",
    limit: 428,
    status: "Paiela Airport",
  },
  {
    name: "Andrew",
    budget_name: "Business Development",
    id: 32,
    owner_id: 32,
    spent: "$7.53",
    available_to_spend: "$191.65",
    card_type: "Mamfe Airport",
    expiry: "2/4/2023",
    limit: 652,
    status: "Edwaki Airport",
  },
  {
    name: "Corabelle",
    budget_name: "Engineering",
    id: 33,
    owner_id: 33,
    spent: "$6.67",
    available_to_spend: "$543.23",
    card_type: "Batangafo Airport",
    expiry: "9/10/2022",
    limit: 388,
    status: "Chico Municipal Airport",
  },
  {
    name: "Nettle",
    budget_name: "Product Management",
    id: 34,
    owner_id: 34,
    spent: "$3.19",
    available_to_spend: "$170.54",
    card_type: "Ware Airport",
    expiry: "8/30/2022",
    limit: 369,
    status: "Opa-locka Executive Airport",
  },
  {
    name: "Basil",
    budget_name: "Product Management",
    id: 35,
    owner_id: 35,
    spent: "$5.69",
    available_to_spend: "$87.10",
    card_type: "Al Thaurah Airport",
    expiry: "5/30/2023",
    limit: 320,
    status: "Statesboro Bulloch County Airport",
  },
  {
    name: "Dasya",
    budget_name: "Human Resources",
    id: 36,
    owner_id: 36,
    spent: "$9.01",
    available_to_spend: "$356.08",
    card_type: "Maestro Marinho Franco Airport",
    expiry: "6/15/2023",
    limit: 610,
    status: "Hana Airport",
  },
  {
    name: "Dionisio",
    budget_name: "Human Resources",
    id: 37,
    owner_id: 37,
    spent: "$0.34",
    available_to_spend: "$176.16",
    card_type: "Lázaro Cárdenas Airport",
    expiry: "10/23/2022",
    limit: 877,
    status: "Naga Airport",
  },
  {
    name: "Ossie",
    budget_name: "Legal",
    id: 38,
    owner_id: 38,
    spent: "$0.77",
    available_to_spend: "$43.76",
    card_type: "Mulan Airport",
    expiry: "6/29/2023",
    limit: 523,
    status: "Chico Municipal Airport",
  },
  {
    name: "Will",
    budget_name: "Sales",
    id: 39,
    owner_id: 39,
    spent: "$8.23",
    available_to_spend: "$845.25",
    card_type: "Šiauliai International Airport",
    expiry: "4/28/2023",
    limit: 330,
    status: "South Bend Regional Airport",
  },
  {
    name: "Marven",
    budget_name: "Marketing",
    id: 40,
    owner_id: 40,
    spent: "$0.77",
    available_to_spend: "$213.58",
    card_type: "Taitung Airport",
    expiry: "1/18/2023",
    limit: 369,
    status: "Gamboma Airport",
  },
  {
    name: "Pate",
    budget_name: "Services",
    id: 41,
    owner_id: 41,
    spent: "$0.84",
    available_to_spend: "$887.22",
    card_type: "Paso De Los Libres Airport",
    expiry: "7/11/2023",
    limit: 284,
    status: "Mianwali Air Base",
  },
  {
    name: "Bertha",
    budget_name: "Human Resources",
    id: 42,
    owner_id: 42,
    spent: "$8.75",
    available_to_spend: "$239.54",
    card_type: "Kontum Airport",
    expiry: "10/27/2022",
    limit: 525,
    status: "Tampa North Aero Park Airport",
  },
  {
    name: "Brett",
    budget_name: "Accounting",
    id: 43,
    owner_id: 43,
    spent: "$6.32",
    available_to_spend: "$539.70",
    card_type: "Ixtepec Airport",
    expiry: "12/2/2022",
    limit: 997,
    status: "Robert F Swinnie Airport",
  },
  {
    name: "Joya",
    budget_name: "Human Resources",
    id: 44,
    owner_id: 44,
    spent: "$5.73",
    available_to_spend: "$529.02",
    card_type: "King Mswati III International Airport",
    expiry: "2/8/2023",
    limit: 237,
    status: "Nyagan Airport",
  },
  {
    name: "Darya",
    budget_name: "Training",
    id: 45,
    owner_id: 45,
    spent: "$2.99",
    available_to_spend: "$741.60",
    card_type: "Carnot Airport",
    expiry: "8/3/2022",
    limit: 272,
    status: "Grand Bahama International Airport",
  },
  {
    name: "Matthias",
    budget_name: "Legal",
    id: 46,
    owner_id: 46,
    spent: "$9.99",
    available_to_spend: "$33.27",
    card_type: "Gilze Rijen Air Base",
    expiry: "10/3/2022",
    limit: 599,
    status: "Mekane Selam Airport",
  },
  {
    name: "Simon",
    budget_name: "Support",
    id: 47,
    owner_id: 47,
    spent: "$2.27",
    available_to_spend: "$308.71",
    card_type: "Dong Tac Airport",
    expiry: "9/16/2022",
    limit: 509,
    status: "Dera Ismael Khan Airport",
  },
  {
    name: "Glendon",
    budget_name: "Accounting",
    id: 48,
    owner_id: 48,
    spent: "$4.72",
    available_to_spend: "$85.19",
    card_type: "Brno-Tuřany Airport",
    expiry: "1/22/2023",
    limit: 215,
    status: "Santa Teresita Airport",
  },
  {
    name: "Jennee",
    budget_name: "Accounting",
    id: 49,
    owner_id: 49,
    spent: "$4.11",
    available_to_spend: "$755.86",
    card_type: "Amahai Airport",
    expiry: "3/18/2023",
    limit: 390,
    status: "Puerto Nare Airport",
  },
  {
    name: "Laughton",
    budget_name: "Support",
    id: 50,
    owner_id: 50,
    spent: "$4.62",
    available_to_spend: "$700.26",
    card_type: "Show Low Regional Airport",
    expiry: "4/4/2023",
    limit: 584,
    status: "Goodnews Airport",
  },
];

function getRandomEnum(enumArray = ["alice", "bob", "charlie"]) {
  return enumArray[Math.floor(Math.random() * enumArray.length)];
}

function getRandomCurrency(availableCurrencies = ["SGD", "USD", "INR", "AED"]) {
  return getRandomEnum(availableCurrencies);
}

function getRandomCardType(cardTypes = ["burner", "subscription"]) {
  return getRandomEnum(cardTypes);
}

function getRandomStatus(statuses = ["active", "blocked"]) {
  return getRandomEnum(statuses);
}

function getRandomUserId(numberOfUsers = 5) {
  return 1 + Math.floor(Math.random() * numberOfUsers);
}

function getRandomCardHolder(
  holderNames = ["Vishal", "Rajesh", "Rajith", "Mayank"]
) {
  return getRandomEnum(holderNames);
}

function makeSane(arr) {
  // spent
  // available_to_spend
  return arr.map((item) => {
    return {
      ...item,
      spent: { value: item.spent.substr(1), currency: getRandomEnum() },
      available_to_spend: {
        value: item.available_to_spend.substr(1),
        currency: getRandomEnum(),
      },
      card_type: getRandomCardType(),
      status: getRandomStatus(),
      owner_id: getRandomUserId(),
      card_holder: getRandomCardHolder(),
    };
  });
}

const mockData = makeSane(DATA);

// console.log(makeSane(data));

/**
 *
 * @param {String | null | ''} tab
 * @param {String | null | ''} cardType
 * @param {String | null | ''} owner_id
 */
function getItems(
  arr = [],
  params = { tab: "all", card_type: "", owner_id: 1, card_holder: "" }
) {
  // Use pipelining for filter since filters are independent of each other.
  return arr
    .filter((item) => {
      // tab filter
      if (!params.tab || params.tab === "all")
        return true; // empty string is also treated as "all"
      else if (params.tab === "yours") {
        return params.owner_id == item.owner_id;
      } else if (params.tab === "blocked") {
        return params.tab == item.status;
      }
    })
    .filter((item) => {
      // card type filter
      if (!params.card_type) return true;
      return params.card_type == item.card_type;
    })
    .filter((item) => {
      // card holder filter
      if (!params.card_holder) return true;
      return params.card_holder == item.card_holder;
    });
}

// console.log(
//   getItems(mockData, { tab: "yours", owner_id: 1, card_type: "subscription" })
// );

// UI CODE STARTS HERE.
const appState = {
  // tab data
  tab: "all",
  // filter data
  card_type: "",
  card_holder: "",

  // listing
  currentListing: mockData,

  // mic
  // user data - not a filter, just the current loggedin user's data
  owner_id: 1,
};

function renderApp(data, state) {
  // top header is static, no render needed
  // re-render tabs
  const tabNodes = document.querySelectorAll(".tab-item");
  tabNodes.forEach((tabNode) => {
    tabNode.classList.remove("tab-item--selected"); // de-select-all
    // select current tab
    if (tabNode.getAttribute("data-tab-value") === state.tab)
      tabNode.classList.add("tab-item--selected");

    function onClickHandler(event) {
      const node = event.target;
      state.tab = node.getAttribute("data-tab-value") || Math.random();

      // re-render the app
      renderApp(data, state);
    }
    // repace event listener
    // Remove existing click listeners on tabNode
    const newTabNode = tabNode.cloneNode(true);
    tabNode.parentNode.replaceChild(newTabNode, tabNode);
    // Attach the onClickHandler
    newTabNode.addEventListener("click", onClickHandler);
  });

  // re-render filters

  // re-render listing
}

// first render
renderApp(mockData, appState);


const score = 100;
const total = 200;

