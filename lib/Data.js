// Use these guidelines for display:
// - Null nickname or no records should be displayed as *none*
// - Multiple nicknames should be displayed with commas between them in one field
// - No start or end date should be displayed as *Open Season*
// - No minimum or maximum size should be displayed as *No size limit*
// - Sizes should be displayed in inches with labels for minimum, maximum or slot (for both min and max)
// - Minimum and maximum size should be combined into one field
// - Null bag limit should be displayed as *No bag limit*


export const fishingRegulations = [
    {
      species: "Black Sea Bass",
      nicknames: ["Biscuit", "Knob Head"],
      seasons: [
        {
          opening: "2022-06-23",
          close: "2022-08-31",
          minimumSize: 15,
          maximumSize: null,
          bagLimit: 3
        },
        {
          opening: "2022-09-01",
          close: "2022-12-31",
          minimumSize: 15,
          maximumSize: null,
          bagLimit: 7
        }
      ]
    },
    {
      species: "Bluefish",
      nicknames: ["Snapper", "Gator", "Gorilla"],
      seasons: [
        {
          opening: null,
          close: null,
          minimumSize: null,
          maximumSize: null,
          bagLimit: 3
        }
      ]
    },
    {
      species: "Cod",
      nicknames: null,
      seasons: [
        {
          opening: null,
          close: null,
          minimumSize: 22,
          maximumSize: null,
          bagLimit: 10
        }
      ]
    },
    {
      species: "Fluke",
      nicknames: ["Summer Flounder", "Doormat"],
      seasons: [
        {
          opening: "2022-05-04",
          close: "2022-09-30",
          minimumSize: 19,
          maximumSize: null,
          bagLimit: 4
        }
      ]
    },
    {
      species: "Haddock",
      nicknames: null,
      seasons: [
        {
          opening: null,
          close: null,
          minimumSize: 18,
          maximumSize: null,
          bagLimit: null
        }
      ]
    },
    {
      species: "Oyster Toadfish",
      nicknames: ["Hacklehead"],
      seasons: [
        {
          opening: null,
          close: null,
          minimumSize: 10,
          maximumSize: null,
          bagLimit: 3
        }
      ]
    },
    {
      species: "Pollock",
      nicknames: null,
      seasons: [
        {
          opening: null,
          close: null,
          minimumSize: 19,
          maximumSize: null,
          bagLimit: null
        }
      ]
    },
    {
      species: "Porgy",
      nicknames: ["Scup", "Sea Bream"],
      seasons: [
        {
          opening: null,
          close: null,
          minimumSize: 9,
          maximumSize: null,
          bagLimit: 30
        }
      ]
    },
    {
      species: "Striped Bass",
      nicknames: ["Striper", "Rockfish", "Cow"],
      seasons: [
        {
          opening: "2022-04-15",
          close: "2022-12-15",
          minimumSize: 28,
          maximumSize: 35,
          bagLimit: 1
        }
      ]
    },
    {
      species: "Tautog",
      nicknames: ["Blackfish", "White Chin", "Bulldog"],
      seasons: [
        {
          opening: "2022-04-01",
          close: "2022-04-30",
          minimumSize: 16,
          maximumSize: null,
          bagLimit: 2
        },
        {
          opening: "2022-10-11",
          close: "2022-12-09",
          minimumSize: 16,
          maximumSize: null,
          bagLimit: 3
        }
      ]
    },
    {
      species: "Weakfish",
      nicknames: "Northern Sea Trout",
      seasons: [
        {
          opening: null,
          close: null,
          minimumSize: 16,
          maximumSize: null,
          bagLimit: 1
        }
      ]
    }
  ]