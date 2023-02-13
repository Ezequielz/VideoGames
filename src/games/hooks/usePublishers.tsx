import { useQuery } from "@tanstack/react-query";
import { rawgApi } from "../../api/rawgApi";
import { Publishers } from "../interfaces";

const API_KEY = import.meta.env.VITE_rawg_API_KEY

const getPublishers = async():Promise<Publishers> => {

    const { data } = await rawgApi.get<Publishers>(`/publishers?key=${ API_KEY }`);
  
    return data;
  }


export const usePublishers = () => {

    const publisherQuery = useQuery(
        ['publisher'],
        getPublishers,
        {
          refetchOnWindowFocus: false,
          staleTime: 60* 1000 * 60,
          initialData:{
            "count": 60944,
            "next": "https://api.rawg.io/api/publishers?key=dfeb460a477942148b1c9009e784a08e&page=2",
            "previous": null,
            "results": [
              {
                "id": 354,
                "name": "Electronic Arts",
                "slug": "electronic-arts",
                "games_count": 1308,
                "image_background": "https://media.rawg.io/media/games/ae1/ae1518c3dc1e847344661905fd2a8d16.jpg",
                "games": [
                  {
                    "id": 4200,
                    "slug": "portal-2",
                    "name": "Portal 2",
                    "added": 16922
                  },
                  {
                    "id": 12020,
                    "slug": "left-4-dead-2",
                    "name": "Left 4 Dead 2",
                    "added": 14355
                  },
                  {
                    "id": 290856,
                    "slug": "apex-legends",
                    "name": "Apex Legends",
                    "added": 9496
                  },
                  {
                    "id": 4252,
                    "slug": "mirrors-edge",
                    "name": "Mirror's Edge",
                    "added": 9405
                  },
                  {
                    "id": 4570,
                    "slug": "dead-space",
                    "name": "Dead Space",
                    "added": 8437
                  },
                  {
                    "id": 4806,
                    "slug": "mass-effect-2",
                    "name": "Mass Effect 2",
                    "added": 8301
                  }
                ]
              },
              {
                "id": 308,
                "name": "Square Enix",
                "slug": "square-enix",
                "games_count": 567,
                "image_background": "https://media.rawg.io/media/games/3d9/3d9bac98d79bcd2d445f829e8d6be902.jpg",
                "games": [
                  {
                    "id": 5286,
                    "slug": "tomb-raider",
                    "name": "Tomb Raider (2013)",
                    "added": 14847
                  },
                  {
                    "id": 3439,
                    "slug": "life-is-strange-episode-1-2",
                    "name": "Life is Strange",
                    "added": 13614
                  },
                  {
                    "id": 7689,
                    "slug": "rise-of-the-tomb-raider",
                    "name": "Rise of the Tomb Raider",
                    "added": 10507
                  },
                  {
                    "id": 10035,
                    "slug": "hitman",
                    "name": "Hitman",
                    "added": 9567
                  },
                  {
                    "id": 1447,
                    "slug": "deus-ex-mankind-divided",
                    "name": "Deus Ex: Mankind Divided",
                    "added": 9213
                  },
                  {
                    "id": 5583,
                    "slug": "hitman-absolution",
                    "name": "Hitman: Absolution",
                    "added": 8305
                  }
                ]
              },
              {
                "id": 918,
                "name": "Ubisoft Entertainment",
                "slug": "ubisoft-entertainment",
                "games_count": 1053,
                "image_background": "https://media.rawg.io/media/games/1be/1bed7fae69d1004c09dfe1101d5a3a94.jpg",
                "games": [
                  {
                    "id": 4161,
                    "slug": "far-cry-3",
                    "name": "Far Cry 3",
                    "added": 9044
                  },
                  {
                    "id": 362,
                    "slug": "for-honor",
                    "name": "For Honor",
                    "added": 8388
                  },
                  {
                    "id": 3841,
                    "slug": "assassins-creed-iv-black-flag",
                    "name": "Assassin’s Creed IV: Black Flag",
                    "added": 8324
                  },
                  {
                    "id": 3687,
                    "slug": "watch-dogs",
                    "name": "Watch Dogs",
                    "added": 7167
                  },
                  {
                    "id": 23585,
                    "slug": "far-cry-5",
                    "name": "Far Cry 5",
                    "added": 7119
                  },
                  {
                    "id": 28568,
                    "slug": "assassins-creed-ii",
                    "name": "Assassin's Creed II",
                    "added": 7018
                  }
                ]
              },
              {
                "id": 20987,
                "name": "Microsoft Studios",
                "slug": "microsoft-studios",
                "games_count": 494,
                "image_background": "https://media.rawg.io/media/games/121/1213f8b9b0a26307e672cf51f34882f8.jpg",
                "games": [
                  {
                    "id": 1030,
                    "slug": "limbo",
                    "name": "Limbo",
                    "added": 12186
                  },
                  {
                    "id": 7689,
                    "slug": "rise-of-the-tomb-raider",
                    "name": "Rise of the Tomb Raider",
                    "added": 10507
                  },
                  {
                    "id": 19487,
                    "slug": "alan-wake",
                    "name": "Alan Wake",
                    "added": 8972
                  },
                  {
                    "id": 3144,
                    "slug": "super-meat-boy",
                    "name": "Super Meat Boy",
                    "added": 8505
                  },
                  {
                    "id": 4166,
                    "slug": "mass-effect",
                    "name": "Mass Effect",
                    "added": 7963
                  },
                  {
                    "id": 5525,
                    "slug": "brutal-legend",
                    "name": "Brutal Legend",
                    "added": 7461
                  }
                ]
              },
              {
                "id": 3408,
                "name": "SEGA",
                "slug": "sega-2",
                "games_count": 1216,
                "image_background": "https://media.rawg.io/media/screenshots/bf7/bf71c819eace914e6c42ae3ecb667308.jpg",
                "games": [
                  {
                    "id": 10243,
                    "slug": "company-of-heroes-2",
                    "name": "Company of Heroes 2",
                    "added": 8309
                  },
                  {
                    "id": 28179,
                    "slug": "sega-mega-drive-and-genesis-classics",
                    "name": "SEGA Mega Drive and Genesis Classics",
                    "added": 7231
                  },
                  {
                    "id": 3556,
                    "slug": "alien-isolation",
                    "name": "Alien: Isolation",
                    "added": 7031
                  },
                  {
                    "id": 10560,
                    "slug": "total-war-shogun-2",
                    "name": "Total War: SHOGUN 2",
                    "added": 6329
                  },
                  {
                    "id": 492,
                    "slug": "yakuza-0",
                    "name": "Yakuza 0",
                    "added": 5530
                  },
                  {
                    "id": 4101,
                    "slug": "bayonetta",
                    "name": "Bayonetta",
                    "added": 5328
                  }
                ]
              },
              {
                "id": 358,
                "name": "2K Games",
                "slug": "2k-games",
                "games_count": 205,
                "image_background": "https://media.rawg.io/media/games/615/61503312a95d451198d80d9bae275f79.jpg",
                "games": [
                  {
                    "id": 4062,
                    "slug": "bioshock-infinite",
                    "name": "BioShock Infinite",
                    "added": 13783
                  },
                  {
                    "id": 802,
                    "slug": "borderlands-2",
                    "name": "Borderlands 2",
                    "added": 13630
                  },
                  {
                    "id": 4286,
                    "slug": "bioshock",
                    "name": "BioShock",
                    "added": 12555
                  },
                  {
                    "id": 4427,
                    "slug": "bioshock-2",
                    "name": "BioShock 2",
                    "added": 9720
                  },
                  {
                    "id": 4332,
                    "slug": "spec-ops-the-line",
                    "name": "Spec Ops: The Line",
                    "added": 9096
                  },
                  {
                    "id": 10754,
                    "slug": "bioshock-remastered",
                    "name": "BioShock Remastered",
                    "added": 9063
                  }
                ]
              },
              {
                "id": 339,
                "name": "Bethesda Softworks",
                "slug": "bethesda-softworks",
                "games_count": 168,
                "image_background": "https://media.rawg.io/media/games/3ea/3ea3c9bbd940b6cb7f2139e42d3d443f.jpg",
                "games": [
                  {
                    "id": 5679,
                    "slug": "the-elder-scrolls-v-skyrim",
                    "name": "The Elder Scrolls V: Skyrim",
                    "added": 14291
                  },
                  {
                    "id": 2454,
                    "slug": "doom",
                    "name": "DOOM (2016)",
                    "added": 11990
                  },
                  {
                    "id": 3070,
                    "slug": "fallout-4",
                    "name": "Fallout 4",
                    "added": 11963
                  },
                  {
                    "id": 3696,
                    "slug": "wolfenstein-the-new-order",
                    "name": "Wolfenstein: The New Order",
                    "added": 8774
                  },
                  {
                    "id": 39,
                    "slug": "prey",
                    "name": "Prey",
                    "added": 8561
                  },
                  {
                    "id": 5563,
                    "slug": "fallout-new-vegas",
                    "name": "Fallout: New Vegas",
                    "added": 8340
                  }
                ]
              },
              {
                "id": 3399,
                "name": "Valve",
                "slug": "valve",
                "games_count": 45,
                "image_background": "https://media.rawg.io/media/games/ccc/ccc0d5396e3331d58e5eb58a6a1fa1b7.jpg",
                "games": [
                  {
                    "id": 4200,
                    "slug": "portal-2",
                    "name": "Portal 2",
                    "added": 16922
                  },
                  {
                    "id": 4291,
                    "slug": "counter-strike-global-offensive",
                    "name": "Counter-Strike: Global Offensive",
                    "added": 14648
                  },
                  {
                    "id": 12020,
                    "slug": "left-4-dead-2",
                    "name": "Left 4 Dead 2",
                    "added": 14355
                  },
                  {
                    "id": 13536,
                    "slug": "portal",
                    "name": "Portal",
                    "added": 14375
                  },
                  {
                    "id": 13537,
                    "slug": "half-life-2",
                    "name": "Half-Life 2",
                    "added": 12866
                  },
                  {
                    "id": 11859,
                    "slug": "team-fortress-2",
                    "name": "Team Fortress 2",
                    "added": 11677
                  }
                ]
              },
              {
                "id": 2150,
                "name": "Capcom",
                "slug": "capcom",
                "games_count": 592,
                "image_background": "https://media.rawg.io/media/games/cee/cee577e2097a59b77193fe2bce94667d.jpg",
                "games": [
                  {
                    "id": 4459,
                    "slug": "grand-theft-auto-iv",
                    "name": "Grand Theft Auto IV",
                    "added": 11242
                  },
                  {
                    "id": 416,
                    "slug": "grand-theft-auto-san-andreas",
                    "name": "Grand Theft Auto: San Andreas",
                    "added": 9919
                  },
                  {
                    "id": 430,
                    "slug": "grand-theft-auto-vice-city",
                    "name": "Grand Theft Auto: Vice City",
                    "added": 8256
                  },
                  {
                    "id": 46889,
                    "slug": "monster-hunter-world-2",
                    "name": "Monster Hunter: World",
                    "added": 7550
                  },
                  {
                    "id": 480,
                    "slug": "resident-evil-7-biohazard",
                    "name": "Resident Evil 7: Biohazard",
                    "added": 7280
                  },
                  {
                    "id": 13461,
                    "slug": "resident-evil-5-biohazard-5",
                    "name": "Resident Evil 5",
                    "added": 6528
                  }
                ]
              },
              {
                "id": 10212,
                "name": "Sony Computer Entertainment",
                "slug": "sony-computer-entertainment",
                "games_count": 483,
                "image_background": "https://media.rawg.io/media/games/709/709bf81f874ce5d25d625b37b014cb63.jpg",
                "games": [
                  {
                    "id": 278,
                    "slug": "horizon-zero-dawn",
                    "name": "Horizon Zero Dawn",
                    "added": 11410
                  },
                  {
                    "id": 58134,
                    "slug": "marvels-spider-man",
                    "name": "Marvel's Spider-Man",
                    "added": 9050
                  },
                  {
                    "id": 2462,
                    "slug": "uncharted-4-a-thiefs-end",
                    "name": "Uncharted 4: A Thief’s End",
                    "added": 8681
                  },
                  {
                    "id": 29177,
                    "slug": "detroit-become-human",
                    "name": "Detroit: Become Human",
                    "added": 8681
                  },
                  {
                    "id": 3636,
                    "slug": "the-last-of-us-remastered",
                    "name": "The Last Of Us Remastered",
                    "added": 8298
                  },
                  {
                    "id": 3254,
                    "slug": "journey",
                    "name": "Journey",
                    "added": 7734
                  }
                ]
              }
            ]
          }
        }
      );

    return {
        publisherQuery
    };
}