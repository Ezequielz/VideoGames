import { useQuery } from "@tanstack/react-query";
import { rawgApi } from "../../api/rawgApi";
import { Platforms } from "../interfaces";

const API_KEY = import.meta.env.VITE_rawg_API_KEY

const getPlatforms = async():Promise<Platforms> => {

    const { data } = await rawgApi.get<Platforms>(`/platforms?key=${ API_KEY }`);
  
    return data;
  }


export const usePlatforms = () => {

    const platformQuery = useQuery(
        ['platform'],
        getPlatforms,
        {
          refetchOnWindowFocus: false,
          staleTime: 60* 1000 * 60,
          initialData:{
            "count": 51,
            "next": "https://api.rawg.io/api/platforms?key=dfeb460a477942148b1c9009e784a08e&page=2",
            "previous": null,
            "results": [
              {
                "id": 4,
                "name": "PC",
                "slug": "pc",
                "games_count": 526708,
                "image_background": "https://media.rawg.io/media/games/f46/f466571d536f2e3ea9e815ad17177501.jpg",
                "image": null,
                "year_start": null,
                "year_end": null,
                "games": [
                  {
                    "id": 3498,
                    "slug": "grand-theft-auto-v",
                    "name": "Grand Theft Auto V",
                    "added": 18845
                  },
                  {
                    "id": 3328,
                    "slug": "the-witcher-3-wild-hunt",
                    "name": "The Witcher 3: Wild Hunt",
                    "added": 17967
                  },
                  {
                    "id": 4200,
                    "slug": "portal-2",
                    "name": "Portal 2",
                    "added": 16922
                  },
                  {
                    "id": 5286,
                    "slug": "tomb-raider",
                    "name": "Tomb Raider (2013)",
                    "added": 14847
                  },
                  {
                    "id": 4291,
                    "slug": "counter-strike-global-offensive",
                    "name": "Counter-Strike: Global Offensive",
                    "added": 14648
                  },
                  {
                    "id": 13536,
                    "slug": "portal",
                    "name": "Portal",
                    "added": 14375
                  }
                ]
              },
              {
                "id": 187,
                "name": "PlayStation 5",
                "slug": "playstation5",
                "games_count": 799,
                "image_background": "https://media.rawg.io/media/games/de6/de66bc4c72b45c3bb906c85d0628112d.jpg",
                "image": null,
                "year_start": 2020,
                "year_end": null,
                "games": [
                  {
                    "id": 3498,
                    "slug": "grand-theft-auto-v",
                    "name": "Grand Theft Auto V",
                    "added": 18845
                  },
                  {
                    "id": 3328,
                    "slug": "the-witcher-3-wild-hunt",
                    "name": "The Witcher 3: Wild Hunt",
                    "added": 17967
                  },
                  {
                    "id": 32,
                    "slug": "destiny-2",
                    "name": "Destiny 2",
                    "added": 11946
                  },
                  {
                    "id": 41494,
                    "slug": "cyberpunk-2077",
                    "name": "Cyberpunk 2077",
                    "added": 10846
                  },
                  {
                    "id": 766,
                    "slug": "warframe",
                    "name": "Warframe",
                    "added": 10761
                  },
                  {
                    "id": 58134,
                    "slug": "marvels-spider-man",
                    "name": "Marvel's Spider-Man",
                    "added": 9050
                  }
                ]
              },
              {
                "id": 18,
                "name": "PlayStation 4",
                "slug": "playstation4",
                "games_count": 6570,
                "image_background": "https://media.rawg.io/media/games/942/9424d6bb763dc38d9378b488603c87fa.jpg",
                "image": null,
                "year_start": null,
                "year_end": null,
                "games": [
                  {
                    "id": 3498,
                    "slug": "grand-theft-auto-v",
                    "name": "Grand Theft Auto V",
                    "added": 18845
                  },
                  {
                    "id": 3328,
                    "slug": "the-witcher-3-wild-hunt",
                    "name": "The Witcher 3: Wild Hunt",
                    "added": 17967
                  },
                  {
                    "id": 5286,
                    "slug": "tomb-raider",
                    "name": "Tomb Raider (2013)",
                    "added": 14847
                  },
                  {
                    "id": 4062,
                    "slug": "bioshock-infinite",
                    "name": "BioShock Infinite",
                    "added": 13783
                  },
                  {
                    "id": 3439,
                    "slug": "life-is-strange-episode-1-2",
                    "name": "Life is Strange",
                    "added": 13614
                  },
                  {
                    "id": 28,
                    "slug": "red-dead-redemption-2",
                    "name": "Red Dead Redemption 2",
                    "added": 13606
                  }
                ]
              },
              {
                "id": 1,
                "name": "Xbox One",
                "slug": "xbox-one",
                "games_count": 5478,
                "image_background": "https://media.rawg.io/media/games/73e/73eecb8909e0c39fb246f457b5d6cbbe.jpg",
                "image": null,
                "year_start": null,
                "year_end": null,
                "games": [
                  {
                    "id": 3498,
                    "slug": "grand-theft-auto-v",
                    "name": "Grand Theft Auto V",
                    "added": 18845
                  },
                  {
                    "id": 3328,
                    "slug": "the-witcher-3-wild-hunt",
                    "name": "The Witcher 3: Wild Hunt",
                    "added": 17967
                  },
                  {
                    "id": 4200,
                    "slug": "portal-2",
                    "name": "Portal 2",
                    "added": 16922
                  },
                  {
                    "id": 5286,
                    "slug": "tomb-raider",
                    "name": "Tomb Raider (2013)",
                    "added": 14847
                  },
                  {
                    "id": 4062,
                    "slug": "bioshock-infinite",
                    "name": "BioShock Infinite",
                    "added": 13783
                  },
                  {
                    "id": 3439,
                    "slug": "life-is-strange-episode-1-2",
                    "name": "Life is Strange",
                    "added": 13614
                  }
                ]
              },
              {
                "id": 186,
                "name": "Xbox Series S/X",
                "slug": "xbox-series-x",
                "games_count": 718,
                "image_background": "https://media.rawg.io/media/games/5ec/5ecac5cb026ec26a56efcc546364e348.jpg",
                "image": null,
                "year_start": 2020,
                "year_end": null,
                "games": [
                  {
                    "id": 3498,
                    "slug": "grand-theft-auto-v",
                    "name": "Grand Theft Auto V",
                    "added": 18845
                  },
                  {
                    "id": 3328,
                    "slug": "the-witcher-3-wild-hunt",
                    "name": "The Witcher 3: Wild Hunt",
                    "added": 17967
                  },
                  {
                    "id": 32,
                    "slug": "destiny-2",
                    "name": "Destiny 2",
                    "added": 11946
                  },
                  {
                    "id": 41494,
                    "slug": "cyberpunk-2077",
                    "name": "Cyberpunk 2077",
                    "added": 10846
                  },
                  {
                    "id": 766,
                    "slug": "warframe",
                    "name": "Warframe",
                    "added": 10761
                  },
                  {
                    "id": 58812,
                    "slug": "control",
                    "name": "Control",
                    "added": 8077
                  }
                ]
              },
              {
                "id": 7,
                "name": "Nintendo Switch",
                "slug": "nintendo-switch",
                "games_count": 5166,
                "image_background": "https://media.rawg.io/media/games/b6b/b6b20bfc4b34e312dbc8aac53c95a348.jpg",
                "image": null,
                "year_start": null,
                "year_end": null,
                "games": [
                  {
                    "id": 3328,
                    "slug": "the-witcher-3-wild-hunt",
                    "name": "The Witcher 3: Wild Hunt",
                    "added": 17967
                  },
                  {
                    "id": 13536,
                    "slug": "portal",
                    "name": "Portal",
                    "added": 14375
                  },
                  {
                    "id": 5679,
                    "slug": "the-elder-scrolls-v-skyrim",
                    "name": "The Elder Scrolls V: Skyrim",
                    "added": 14291
                  },
                  {
                    "id": 4062,
                    "slug": "bioshock-infinite",
                    "name": "BioShock Infinite",
                    "added": 13783
                  },
                  {
                    "id": 1030,
                    "slug": "limbo",
                    "name": "Limbo",
                    "added": 12186
                  },
                  {
                    "id": 2454,
                    "slug": "doom",
                    "name": "DOOM (2016)",
                    "added": 11990
                  }
                ]
              },
              {
                "id": 3,
                "name": "iOS",
                "slug": "ios",
                "games_count": 76283,
                "image_background": "https://media.rawg.io/media/games/410/41033a495ce8f7fd4b0934bdb975f12a.jpg",
                "image": null,
                "year_start": null,
                "year_end": null,
                "games": [
                  {
                    "id": 3439,
                    "slug": "life-is-strange-episode-1-2",
                    "name": "Life is Strange",
                    "added": 13614
                  },
                  {
                    "id": 1030,
                    "slug": "limbo",
                    "name": "Limbo",
                    "added": 12186
                  },
                  {
                    "id": 422,
                    "slug": "terraria",
                    "name": "Terraria",
                    "added": 10861
                  },
                  {
                    "id": 23027,
                    "slug": "the-walking-dead",
                    "name": "The Walking Dead: Season 1",
                    "added": 10202
                  },
                  {
                    "id": 416,
                    "slug": "grand-theft-auto-san-andreas",
                    "name": "Grand Theft Auto: San Andreas",
                    "added": 9919
                  },
                  {
                    "id": 654,
                    "slug": "stardew-valley",
                    "name": "Stardew Valley",
                    "added": 8533
                  }
                ]
              },
              {
                "id": 21,
                "name": "Android",
                "slug": "android",
                "games_count": 54255,
                "image_background": "https://media.rawg.io/media/games/b6b/b6b20bfc4b34e312dbc8aac53c95a348.jpg",
                "image": null,
                "year_start": null,
                "year_end": null,
                "games": [
                  {
                    "id": 13536,
                    "slug": "portal",
                    "name": "Portal",
                    "added": 14375
                  },
                  {
                    "id": 802,
                    "slug": "borderlands-2",
                    "name": "Borderlands 2",
                    "added": 13630
                  },
                  {
                    "id": 3439,
                    "slug": "life-is-strange-episode-1-2",
                    "name": "Life is Strange",
                    "added": 13614
                  },
                  {
                    "id": 13537,
                    "slug": "half-life-2",
                    "name": "Half-Life 2",
                    "added": 12866
                  },
                  {
                    "id": 1030,
                    "slug": "limbo",
                    "name": "Limbo",
                    "added": 12186
                  },
                  {
                    "id": 422,
                    "slug": "terraria",
                    "name": "Terraria",
                    "added": 10861
                  }
                ]
              },
              {
                "id": 8,
                "name": "Nintendo 3DS",
                "slug": "nintendo-3ds",
                "games_count": 1735,
                "image_background": "https://media.rawg.io/media/games/926/926928beb8a9f9b31cf202965aa4cbbc.jpg",
                "image": null,
                "year_start": null,
                "year_end": null,
                "games": [
                  {
                    "id": 422,
                    "slug": "terraria",
                    "name": "Terraria",
                    "added": 10861
                  },
                  {
                    "id": 22509,
                    "slug": "minecraft",
                    "name": "Minecraft",
                    "added": 7232
                  },
                  {
                    "id": 2597,
                    "slug": "lego-lord-of-the-rings",
                    "name": "LEGO The Lord of the Rings",
                    "added": 4911
                  },
                  {
                    "id": 250,
                    "slug": "the-binding-of-isaac-rebirth",
                    "name": "The Binding of Isaac: Rebirth",
                    "added": 4840
                  },
                  {
                    "id": 3729,
                    "slug": "lego-the-hobbit",
                    "name": "LEGO The Hobbit",
                    "added": 4515
                  },
                  {
                    "id": 4012,
                    "slug": "resident-evil-revelations-biohazard-revelations",
                    "name": "Resident Evil Revelations",
                    "added": 3752
                  }
                ]
              },
              {
                "id": 9,
                "name": "Nintendo DS",
                "slug": "nintendo-ds",
                "games_count": 2475,
                "image_background": "https://media.rawg.io/media/games/35f/35f815a22c4678b4fe76073f0f56df8e.jpg",
                "image": null,
                "year_start": null,
                "year_end": null,
                "games": [
                  {
                    "id": 865,
                    "slug": "call-of-duty-black-ops",
                    "name": "Call of Duty: Black Ops",
                    "added": 6075
                  },
                  {
                    "id": 3486,
                    "slug": "syberia",
                    "name": "Syberia",
                    "added": 5767
                  },
                  {
                    "id": 5578,
                    "slug": "grid",
                    "name": "Race Driver: Grid",
                    "added": 4944
                  },
                  {
                    "id": 2597,
                    "slug": "lego-lord-of-the-rings",
                    "name": "LEGO The Lord of the Rings",
                    "added": 4911
                  },
                  {
                    "id": 4869,
                    "slug": "tomb-raider-underworld",
                    "name": "Tomb Raider: Underworld",
                    "added": 4089
                  },
                  {
                    "id": 5528,
                    "slug": "call-of-duty-world-at-war",
                    "name": "Call of Duty: World at War",
                    "added": 3995
                  }
                ]
              },
              {
                "id": 13,
                "name": "Nintendo DSi",
                "slug": "nintendo-dsi",
                "games_count": 37,
                "image_background": "https://media.rawg.io/media/screenshots/078/078629e997421ca28e9098bd7a87cb10.jpg",
                "image": null,
                "year_start": null,
                "year_end": null,
                "games": [
                  {
                    "id": 19309,
                    "slug": "plants-vs-zombies-goty-edition",
                    "name": "Plants vs. Zombies GOTY Edition",
                    "added": 3288
                  },
                  {
                    "id": 949,
                    "slug": "cut-the-rope",
                    "name": "Cut the Rope",
                    "added": 567
                  },
                  {
                    "id": 5463,
                    "slug": "rayman",
                    "name": "Rayman",
                    "added": 278
                  },
                  {
                    "id": 22727,
                    "slug": "jagged-alliance",
                    "name": "Jagged Alliance",
                    "added": 132
                  },
                  {
                    "id": 53802,
                    "slug": "dragons-lair",
                    "name": "Dragon's Lair",
                    "added": 58
                  },
                  {
                    "id": 25953,
                    "slug": "mario-vs-donkey-kong-minis-march-again",
                    "name": "Mario vs. Donkey Kong: Minis March Again!",
                    "added": 33
                  }
                ]
              },
              {
                "id": 5,
                "name": "macOS",
                "slug": "macos",
                "games_count": 104849,
                "image_background": "https://media.rawg.io/media/games/9dd/9ddabb34840ea9227556670606cf8ea3.jpg",
                "image": null,
                "year_start": null,
                "year_end": null,
                "games": [
                  {
                    "id": 4200,
                    "slug": "portal-2",
                    "name": "Portal 2",
                    "added": 16922
                  },
                  {
                    "id": 5286,
                    "slug": "tomb-raider",
                    "name": "Tomb Raider (2013)",
                    "added": 14847
                  },
                  {
                    "id": 13536,
                    "slug": "portal",
                    "name": "Portal",
                    "added": 14375
                  },
                  {
                    "id": 12020,
                    "slug": "left-4-dead-2",
                    "name": "Left 4 Dead 2",
                    "added": 14355
                  },
                  {
                    "id": 802,
                    "slug": "borderlands-2",
                    "name": "Borderlands 2",
                    "added": 13630
                  },
                  {
                    "id": 3439,
                    "slug": "life-is-strange-episode-1-2",
                    "name": "Life is Strange",
                    "added": 13614
                  }
                ]
              },
              {
                "id": 6,
                "name": "Linux",
                "slug": "linux",
                "games_count": 77798,
                "image_background": "https://media.rawg.io/media/games/c24/c24ec439abf4a2e92f3429dfa83f7f94.jpg",
                "image": null,
                "year_start": null,
                "year_end": null,
                "games": [
                  {
                    "id": 4200,
                    "slug": "portal-2",
                    "name": "Portal 2",
                    "added": 16922
                  },
                  {
                    "id": 13536,
                    "slug": "portal",
                    "name": "Portal",
                    "added": 14375
                  },
                  {
                    "id": 12020,
                    "slug": "left-4-dead-2",
                    "name": "Left 4 Dead 2",
                    "added": 14355
                  },
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
                    "id": 3439,
                    "slug": "life-is-strange-episode-1-2",
                    "name": "Life is Strange",
                    "added": 13614
                  }
                ]
              },
              {
                "id": 14,
                "name": "Xbox 360",
                "slug": "xbox360",
                "games_count": 2776,
                "image_background": "https://media.rawg.io/media/games/f46/f466571d536f2e3ea9e815ad17177501.jpg",
                "image": null,
                "year_start": null,
                "year_end": null,
                "games": [
                  {
                    "id": 3498,
                    "slug": "grand-theft-auto-v",
                    "name": "Grand Theft Auto V",
                    "added": 18845
                  },
                  {
                    "id": 4200,
                    "slug": "portal-2",
                    "name": "Portal 2",
                    "added": 16922
                  },
                  {
                    "id": 5286,
                    "slug": "tomb-raider",
                    "name": "Tomb Raider (2013)",
                    "added": 14847
                  },
                  {
                    "id": 4291,
                    "slug": "counter-strike-global-offensive",
                    "name": "Counter-Strike: Global Offensive",
                    "added": 14648
                  },
                  {
                    "id": 13536,
                    "slug": "portal",
                    "name": "Portal",
                    "added": 14375
                  },
                  {
                    "id": 12020,
                    "slug": "left-4-dead-2",
                    "name": "Left 4 Dead 2",
                    "added": 14355
                  }
                ]
              },
              {
                "id": 80,
                "name": "Xbox",
                "slug": "xbox-old",
                "games_count": 717,
                "image_background": "https://media.rawg.io/media/games/c89/c89ca70716080733d03724277df2c6c7.jpg",
                "image": null,
                "year_start": null,
                "year_end": null,
                "games": [
                  {
                    "id": 13537,
                    "slug": "half-life-2",
                    "name": "Half-Life 2",
                    "added": 12866
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
                    "id": 19301,
                    "slug": "counter-strike",
                    "name": "Counter-Strike",
                    "added": 7643
                  },
                  {
                    "id": 2361,
                    "slug": "psychonauts",
                    "name": "Psychonauts",
                    "added": 7232
                  },
                  {
                    "id": 432,
                    "slug": "grand-theft-auto-iii",
                    "name": "Grand Theft Auto III",
                    "added": 6280
                  }
                ]
              },
              {
                "id": 16,
                "name": "PlayStation 3",
                "slug": "playstation3",
                "games_count": 3414,
                "image_background": "https://media.rawg.io/media/games/456/456dea5e1c7e3cd07060c14e96612001.jpg",
                "image": null,
                "year_start": null,
                "year_end": null,
                "games": [
                  {
                    "id": 3498,
                    "slug": "grand-theft-auto-v",
                    "name": "Grand Theft Auto V",
                    "added": 18845
                  },
                  {
                    "id": 4200,
                    "slug": "portal-2",
                    "name": "Portal 2",
                    "added": 16922
                  },
                  {
                    "id": 5286,
                    "slug": "tomb-raider",
                    "name": "Tomb Raider (2013)",
                    "added": 14847
                  },
                  {
                    "id": 4291,
                    "slug": "counter-strike-global-offensive",
                    "name": "Counter-Strike: Global Offensive",
                    "added": 14648
                  },
                  {
                    "id": 13536,
                    "slug": "portal",
                    "name": "Portal",
                    "added": 14375
                  },
                  {
                    "id": 5679,
                    "slug": "the-elder-scrolls-v-skyrim",
                    "name": "The Elder Scrolls V: Skyrim",
                    "added": 14291
                  }
                ]
              },
              {
                "id": 15,
                "name": "PlayStation 2",
                "slug": "playstation2",
                "games_count": 1970,
                "image_background": "https://media.rawg.io/media/games/c00/c003705c0eaed100397ae408b7b89e90.jpg",
                "image": null,
                "year_start": null,
                "year_end": null,
                "games": [
                  {
                    "id": 416,
                    "slug": "grand-theft-auto-san-andreas",
                    "name": "Grand Theft Auto: San Andreas",
                    "added": 9919
                  },
                  {
                    "id": 18080,
                    "slug": "half-life",
                    "name": "Half-Life",
                    "added": 8826
                  },
                  {
                    "id": 430,
                    "slug": "grand-theft-auto-vice-city",
                    "name": "Grand Theft Auto: Vice City",
                    "added": 8256
                  },
                  {
                    "id": 2361,
                    "slug": "psychonauts",
                    "name": "Psychonauts",
                    "added": 7232
                  },
                  {
                    "id": 432,
                    "slug": "grand-theft-auto-iii",
                    "name": "Grand Theft Auto III",
                    "added": 6280
                  },
                  {
                    "id": 56184,
                    "slug": "resident-evil-4",
                    "name": "Resident Evil 4 (2005)",
                    "added": 5876
                  }
                ]
              },
              {
                "id": 27,
                "name": "PlayStation",
                "slug": "playstation1",
                "games_count": 1601,
                "image_background": "https://media.rawg.io/media/games/8da/8da6960974c2348585e6e99603c52126.jpg",
                "image": null,
                "year_start": null,
                "year_end": null,
                "games": [
                  {
                    "id": 5159,
                    "slug": "resident-evil-2",
                    "name": "Resident Evil 2 (1998)",
                    "added": 5354
                  },
                  {
                    "id": 5193,
                    "slug": "oddworld-abes-oddysee",
                    "name": "Oddworld: Abe's Oddysee",
                    "added": 5053
                  },
                  {
                    "id": 3449,
                    "slug": "resident-evil",
                    "name": "Resident Evil",
                    "added": 4684
                  },
                  {
                    "id": 52939,
                    "slug": "final-fantasy-vii",
                    "name": "Final Fantasy VII (1997)",
                    "added": 3696
                  },
                  {
                    "id": 20569,
                    "slug": "ufo-enemy-unknown",
                    "name": "X-COM: UFO Defense",
                    "added": 3222
                  },
                  {
                    "id": 57908,
                    "slug": "tomb-raider-ii",
                    "name": "Tomb Raider II",
                    "added": 2772
                  }
                ]
              },
              {
                "id": 19,
                "name": "PS Vita",
                "slug": "ps-vita",
                "games_count": 1752,
                "image_background": "https://media.rawg.io/media/games/f3e/f3eec35c6218dcfd93a537751e6bfa61.jpg",
                "image": null,
                "year_start": null,
                "year_end": null,
                "games": [
                  {
                    "id": 802,
                    "slug": "borderlands-2",
                    "name": "Borderlands 2",
                    "added": 13630
                  },
                  {
                    "id": 1030,
                    "slug": "limbo",
                    "name": "Limbo",
                    "added": 12186
                  },
                  {
                    "id": 422,
                    "slug": "terraria",
                    "name": "Terraria",
                    "added": 10861
                  },
                  {
                    "id": 23027,
                    "slug": "the-walking-dead",
                    "name": "The Walking Dead: Season 1",
                    "added": 10202
                  },
                  {
                    "id": 9767,
                    "slug": "hollow-knight",
                    "name": "Hollow Knight",
                    "added": 9449
                  },
                  {
                    "id": 3612,
                    "slug": "hotline-miami",
                    "name": "Hotline Miami",
                    "added": 9306
                  }
                ]
              },
              {
                "id": 17,
                "name": "PSP",
                "slug": "psp",
                "games_count": 1520,
                "image_background": "https://media.rawg.io/media/screenshots/be1/be17f78d80b50121fa2ed6d4562d403e.jpg",
                "image": null,
                "year_start": null,
                "year_end": null,
                "games": [
                  {
                    "id": 13886,
                    "slug": "star-wars-battlefront-ii-2",
                    "name": "Star Wars: Battlefront II (2005)",
                    "added": 4147
                  },
                  {
                    "id": 5298,
                    "slug": "tomb-raider-legend",
                    "name": "Tomb Raider: Legend",
                    "added": 3631
                  },
                  {
                    "id": 5297,
                    "slug": "tomb-raider-anniversary",
                    "name": "Tomb Raider: Anniversary",
                    "added": 3535
                  },
                  {
                    "id": 57908,
                    "slug": "tomb-raider-ii",
                    "name": "Tomb Raider II",
                    "added": 2772
                  },
                  {
                    "id": 16543,
                    "slug": "lego-batman",
                    "name": "LEGO Batman",
                    "added": 2668
                  },
                  {
                    "id": 58890,
                    "slug": "need-for-speed-most-wanted",
                    "name": "Need For Speed: Most Wanted",
                    "added": 2391
                  }
                ]
              },
              {
                "id": 10,
                "name": "Wii U",
                "slug": "wii-u",
                "games_count": 1216,
                "image_background": "https://media.rawg.io/media/games/848/8482235332f4518da363c3cb4e5cd075.jpg",
                "image": null,
                "year_start": null,
                "year_end": null,
                "games": [
                  {
                    "id": 422,
                    "slug": "terraria",
                    "name": "Terraria",
                    "added": 10861
                  },
                  {
                    "id": 3144,
                    "slug": "super-meat-boy",
                    "name": "Super Meat Boy",
                    "added": 8505
                  },
                  {
                    "id": 3841,
                    "slug": "assassins-creed-iv-black-flag",
                    "name": "Assassin???s Creed IV: Black Flag",
                    "added": 8324
                  },
                  {
                    "id": 22509,
                    "slug": "minecraft",
                    "name": "Minecraft",
                    "added": 7232
                  },
                  {
                    "id": 3687,
                    "slug": "watch-dogs",
                    "name": "Watch Dogs",
                    "added": 7167
                  },
                  {
                    "id": 3876,
                    "slug": "deus-ex-human-revolution-directors-cut",
                    "name": "Deus Ex: Human Revolution - Director's Cut",
                    "added": 6577
                  }
                ]
              },
              {
                "id": 11,
                "name": "Wii",
                "slug": "wii",
                "games_count": 2289,
                "image_background": "https://media.rawg.io/media/games/9fb/9fbaea2168caea1f806546dfdaaeb1da.jpg",
                "image": null,
                "year_start": null,
                "year_end": null,
                "games": [
                  {
                    "id": 865,
                    "slug": "call-of-duty-black-ops",
                    "name": "Call of Duty: Black Ops",
                    "added": 6075
                  },
                  {
                    "id": 56184,
                    "slug": "resident-evil-4",
                    "name": "Resident Evil 4 (2005)",
                    "added": 5876
                  },
                  {
                    "id": 11276,
                    "slug": "call-of-duty-modern-warfare-3",
                    "name": "Call of Duty: Modern Warfare 3",
                    "added": 5499
                  },
                  {
                    "id": 2597,
                    "slug": "lego-lord-of-the-rings",
                    "name": "LEGO The Lord of the Rings",
                    "added": 4911
                  },
                  {
                    "id": 4869,
                    "slug": "tomb-raider-underworld",
                    "name": "Tomb Raider: Underworld",
                    "added": 4089
                  },
                  {
                    "id": 1140,
                    "slug": "world-of-goo",
                    "name": "World of Goo",
                    "added": 4007
                  }
                ]
              },
              {
                "id": 105,
                "name": "GameCube",
                "slug": "gamecube",
                "games_count": 641,
                "image_background": "https://media.rawg.io/media/games/d24/d24ceb45b267f4b69b5d51c36c9a46db.jpg",
                "image": null,
                "year_start": null,
                "year_end": null,
                "games": [
                  {
                    "id": 56184,
                    "slug": "resident-evil-4",
                    "name": "Resident Evil 4 (2005)",
                    "added": 5876
                  },
                  {
                    "id": 5159,
                    "slug": "resident-evil-2",
                    "name": "Resident Evil 2 (1998)",
                    "added": 5354
                  },
                  {
                    "id": 3449,
                    "slug": "resident-evil",
                    "name": "Resident Evil",
                    "added": 4684
                  },
                  {
                    "id": 19592,
                    "slug": "hitman-2-silent-assassin",
                    "name": "Hitman 2: Silent Assassin",
                    "added": 3966
                  },
                  {
                    "id": 5298,
                    "slug": "tomb-raider-legend",
                    "name": "Tomb Raider: Legend",
                    "added": 3631
                  },
                  {
                    "id": 12018,
                    "slug": "star-wars-jedi-knight-ii-jedi-outcast",
                    "name": "Star Wars Jedi Knight II: Jedi Outcast",
                    "added": 3246
                  }
                ]
              },
              {
                "id": 83,
                "name": "Nintendo 64",
                "slug": "nintendo-64",
                "games_count": 364,
                "image_background": "https://media.rawg.io/media/games/f62/f62d090119e5ff05c59036480123fd83.jpg",
                "image": null,
                "year_start": null,
                "year_end": null,
                "games": [
                  {
                    "id": 5159,
                    "slug": "resident-evil-2",
                    "name": "Resident Evil 2 (1998)",
                    "added": 5354
                  },
                  {
                    "id": 54491,
                    "slug": "quake",
                    "name": "Quake",
                    "added": 2809
                  },
                  {
                    "id": 20466,
                    "slug": "worms-armageddon",
                    "name": "Worms Armageddon",
                    "added": 2667
                  },
                  {
                    "id": 54492,
                    "slug": "quake-2",
                    "name": "Quake II",
                    "added": 2168
                  },
                  {
                    "id": 25097,
                    "slug": "the-legend-of-zelda-ocarina-of-time",
                    "name": "The Legend of Zelda: Ocarina of Time",
                    "added": 1524
                  },
                  {
                    "id": 28532,
                    "slug": "banjo-kazooie",
                    "name": "Banjo-Kazooie",
                    "added": 1439
                  }
                ]
              },
              {
                "id": 24,
                "name": "Game Boy Advance",
                "slug": "game-boy-advance",
                "games_count": 955,
                "image_background": "https://media.rawg.io/media/games/360/360f00cbb4b4364b9af0e7ff8e397b65.jpg",
                "image": null,
                "year_start": null,
                "year_end": null,
                "games": [
                  {
                    "id": 53341,
                    "slug": "jet-set-radio-2012",
                    "name": "Jet Set Radio",
                    "added": 4706
                  },
                  {
                    "id": 17975,
                    "slug": "doom-ii",
                    "name": "DOOM II",
                    "added": 2800
                  },
                  {
                    "id": 19646,
                    "slug": "splinter-cell",
                    "name": "Tom Clancy's Splinter Cell",
                    "added": 1913
                  },
                  {
                    "id": 53446,
                    "slug": "need-for-speed-underground-2-2",
                    "name": "Need for Speed: Underground 2",
                    "added": 1728
                  },
                  {
                    "id": 4005,
                    "slug": "wolfenstein-3d",
                    "name": "Wolfenstein 3D",
                    "added": 1627
                  },
                  {
                    "id": 20958,
                    "slug": "street-racing-syndicate",
                    "name": "Street Racing Syndicate",
                    "added": 1474
                  }
                ]
              },
              {
                "id": 43,
                "name": "Game Boy Color",
                "slug": "game-boy-color",
                "games_count": 413,
                "image_background": "https://media.rawg.io/media/games/360/360f00cbb4b4364b9af0e7ff8e397b65.jpg",
                "image": null,
                "year_start": null,
                "year_end": null,
                "games": [
                  {
                    "id": 20466,
                    "slug": "worms-armageddon",
                    "name": "Worms Armageddon",
                    "added": 2667
                  },
                  {
                    "id": 57607,
                    "slug": "metal-gear-solid-1",
                    "name": "Metal Gear Solid",
                    "added": 1893
                  },
                  {
                    "id": 52997,
                    "slug": "grand-theft-auto-2-1999",
                    "name": "Grand Theft Auto 2",
                    "added": 1752
                  },
                  {
                    "id": 52998,
                    "slug": "grand-theft-auto-1998",
                    "name": "Grand Theft Auto",
                    "added": 1666
                  },
                  {
                    "id": 25080,
                    "slug": "super-mario-bros",
                    "name": "Super Mario Bros.",
                    "added": 1271
                  },
                  {
                    "id": 24030,
                    "slug": "super-mario-bros-3",
                    "name": "Super Mario Bros. 3",
                    "added": 1023
                  }
                ]
              },
              {
                "id": 26,
                "name": "Game Boy",
                "slug": "game-boy",
                "games_count": 602,
                "image_background": "https://media.rawg.io/media/games/356/3566c06f8e5d3b45f4163dec1d9968a2.jpg",
                "image": null,
                "year_start": null,
                "year_end": null,
                "games": [
                  {
                    "id": 5383,
                    "slug": "worms",
                    "name": "Worms",
                    "added": 1863
                  },
                  {
                    "id": 54285,
                    "slug": "mortal-kombat",
                    "name": "Mortal Kombat",
                    "added": 1676
                  },
                  {
                    "id": 52175,
                    "slug": "battletoads",
                    "name": "Battletoads",
                    "added": 1669
                  },
                  {
                    "id": 52998,
                    "slug": "grand-theft-auto-1998",
                    "name": "Grand Theft Auto",
                    "added": 1666
                  },
                  {
                    "id": 14829,
                    "slug": "turok",
                    "name": "Turok: Dinosaur Hunter",
                    "added": 1182
                  },
                  {
                    "id": 23762,
                    "slug": "pokemon-red",
                    "name": "Pok??mon Red, Blue, Yellow",
                    "added": 910
                  }
                ]
              },
              {
                "id": 79,
                "name": "SNES",
                "slug": "snes",
                "games_count": 941,
                "image_background": "https://media.rawg.io/media/games/087/08727beb32c364d30e8b2a1aa8595f8e.jpg",
                "image": null,
                "year_start": null,
                "year_end": null,
                "games": [
                  {
                    "id": 5383,
                    "slug": "worms",
                    "name": "Worms",
                    "added": 1863
                  },
                  {
                    "id": 54285,
                    "slug": "mortal-kombat",
                    "name": "Mortal Kombat",
                    "added": 1676
                  },
                  {
                    "id": 4005,
                    "slug": "wolfenstein-3d",
                    "name": "Wolfenstein 3D",
                    "added": 1627
                  },
                  {
                    "id": 52884,
                    "slug": "doom-2",
                    "name": "DOOM",
                    "added": 1338
                  },
                  {
                    "id": 24899,
                    "slug": "super-mario-world",
                    "name": "Super Mario World",
                    "added": 1321
                  },
                  {
                    "id": 1063,
                    "slug": "final-fantasy-vi",
                    "name": "FINAL FANTASY VI",
                    "added": 1292
                  }
                ]
              },
              {
                "id": 49,
                "name": "NES",
                "slug": "nes",
                "games_count": 966,
                "image_background": "https://media.rawg.io/media/screenshots/33e/33e9f79f78d1d49e7631d82c59ed32a1.jpg",
                "image": null,
                "year_start": null,
                "year_end": null,
                "games": [
                  {
                    "id": 54122,
                    "slug": "ultima-4-quest-of-the-avatar",
                    "name": "Ultima IV: Quest of the Avatar",
                    "added": 1855
                  },
                  {
                    "id": 52175,
                    "slug": "battletoads",
                    "name": "Battletoads",
                    "added": 1669
                  },
                  {
                    "id": 25080,
                    "slug": "super-mario-bros",
                    "name": "Super Mario Bros.",
                    "added": 1271
                  },
                  {
                    "id": 24030,
                    "slug": "super-mario-bros-3",
                    "name": "Super Mario Bros. 3",
                    "added": 1023
                  },
                  {
                    "id": 24881,
                    "slug": "pac-man",
                    "name": "Pac-Man",
                    "added": 702
                  },
                  {
                    "id": 24072,
                    "slug": "the-legend-of-zelda",
                    "name": "The Legend of Zelda",
                    "added": 643
                  }
                ]
              },
              {
                "id": 55,
                "name": "Classic Macintosh",
                "slug": "macintosh",
                "games_count": 679,
                "image_background": "https://media.rawg.io/media/screenshots/79a/79ab3ca882e351d5423499723bc1890c.jpg",
                "image": null,
                "year_start": null,
                "year_end": null,
                "games": [
                  {
                    "id": 13554,
                    "slug": "fallout-a-post-nuclear-role-playing-game",
                    "name": "Fallout",
                    "added": 7095
                  },
                  {
                    "id": 2518,
                    "slug": "max-payne",
                    "name": "Max Payne",
                    "added": 4765
                  },
                  {
                    "id": 12018,
                    "slug": "star-wars-jedi-knight-ii-jedi-outcast",
                    "name": "Star Wars Jedi Knight II: Jedi Outcast",
                    "added": 3246
                  },
                  {
                    "id": 17975,
                    "slug": "doom-ii",
                    "name": "DOOM II",
                    "added": 2800
                  },
                  {
                    "id": 54491,
                    "slug": "quake",
                    "name": "Quake",
                    "added": 2809
                  },
                  {
                    "id": 57908,
                    "slug": "tomb-raider-ii",
                    "name": "Tomb Raider II",
                    "added": 2772
                  }
                ]
              },
              {
                "id": 41,
                "name": "Apple II",
                "slug": "apple-ii",
                "games_count": 422,
                "image_background": "https://media.rawg.io/media/games/a9a/a9a2472f862b041d2980103ddbb61c91.jpg",
                "image": null,
                "year_start": null,
                "year_end": null,
                "games": [
                  {
                    "id": 30119,
                    "slug": "wasteland",
                    "name": "Wasteland",
                    "added": 2018
                  },
                  {
                    "id": 54122,
                    "slug": "ultima-4-quest-of-the-avatar",
                    "name": "Ultima IV: Quest of the Avatar",
                    "added": 1855
                  },
                  {
                    "id": 22991,
                    "slug": "akalabeth-world-of-doom-2",
                    "name": "Akalabeth: World of Doom",
                    "added": 1238
                  },
                  {
                    "id": 29908,
                    "slug": "another-world",
                    "name": "Another World",
                    "added": 761
                  },
                  {
                    "id": 24881,
                    "slug": "pac-man",
                    "name": "Pac-Man",
                    "added": 702
                  },
                  {
                    "id": 45957,
                    "slug": "prince-of-persia-nes",
                    "name": "Prince of Persia (1989)",
                    "added": 556
                  }
                ]
              },
              {
                "id": 166,
                "name": "Commodore / Amiga",
                "slug": "commodore-amiga",
                "games_count": 2060,
                "image_background": "https://media.rawg.io/media/screenshots/101/1015fe740ce5654eb97c9140f6da3c3e.jpg",
                "image": null,
                "year_start": null,
                "year_end": null,
                "games": [
                  {
                    "id": 20569,
                    "slug": "ufo-enemy-unknown",
                    "name": "X-COM: UFO Defense",
                    "added": 3222
                  },
                  {
                    "id": 54491,
                    "slug": "quake",
                    "name": "Quake",
                    "added": 2809
                  },
                  {
                    "id": 22734,
                    "slug": "beneath-a-steel-sky",
                    "name": "Beneath a Steel Sky",
                    "added": 2277
                  },
                  {
                    "id": 54492,
                    "slug": "quake-2",
                    "name": "Quake II",
                    "added": 2168
                  },
                  {
                    "id": 30119,
                    "slug": "wasteland",
                    "name": "Wasteland",
                    "added": 2018
                  },
                  {
                    "id": 5383,
                    "slug": "worms",
                    "name": "Worms",
                    "added": 1863
                  }
                ]
              },
              {
                "id": 28,
                "name": "Atari 7800",
                "slug": "atari-7800",
                "games_count": 64,
                "image_background": "https://media.rawg.io/media/screenshots/565/56504b28b184dbc630a7de118e39d822.jpg",
                "image": null,
                "year_start": null,
                "year_end": null,
                "games": [
                  {
                    "id": 3802,
                    "slug": "double-dragon",
                    "name": "Double Dragon",
                    "added": 417
                  },
                  {
                    "id": 52512,
                    "slug": "arcade-archives-donkey-kong",
                    "name": "Donkey Kong",
                    "added": 365
                  },
                  {
                    "id": 52434,
                    "slug": "mario-bros-1983",
                    "name": "Mario Bros. (1983)",
                    "added": 262
                  },
                  {
                    "id": 28279,
                    "slug": "joust",
                    "name": "Joust",
                    "added": 171
                  },
                  {
                    "id": 52513,
                    "slug": "donkey-kong-jr",
                    "name": "Donkey Kong Jr.",
                    "added": 125
                  },
                  {
                    "id": 53830,
                    "slug": "galaga-1981",
                    "name": "Galaga (1981)",
                    "added": 120
                  }
                ]
              },
              {
                "id": 31,
                "name": "Atari 5200",
                "slug": "atari-5200",
                "games_count": 64,
                "image_background": "https://media.rawg.io/media/screenshots/61a/61a60e3ee55941387681eaa59e3becbf.jpg",
                "image": null,
                "year_start": null,
                "year_end": null,
                "games": [
                  {
                    "id": 24881,
                    "slug": "pac-man",
                    "name": "Pac-Man",
                    "added": 702
                  },
                  {
                    "id": 52434,
                    "slug": "mario-bros-1983",
                    "name": "Mario Bros. (1983)",
                    "added": 262
                  },
                  {
                    "id": 28279,
                    "slug": "joust",
                    "name": "Joust",
                    "added": 171
                  },
                  {
                    "id": 52423,
                    "slug": "galaxian",
                    "name": "Galaxian",
                    "added": 148
                  },
                  {
                    "id": 52444,
                    "slug": "space-invaders-1978",
                    "name": "Space Invaders (1978)",
                    "added": 119
                  },
                  {
                    "id": 52567,
                    "slug": "popeye",
                    "name": "Popeye",
                    "added": 109
                  }
                ]
              },
              {
                "id": 23,
                "name": "Atari 2600",
                "slug": "atari-2600",
                "games_count": 286,
                "image_background": "https://media.rawg.io/media/games/23e/23eecccb588a4a9c97f35ebf8f9f00ef.jpg",
                "image": null,
                "year_start": null,
                "year_end": null,
                "games": [
                  {
                    "id": 24881,
                    "slug": "pac-man",
                    "name": "Pac-Man",
                    "added": 702
                  },
                  {
                    "id": 52623,
                    "slug": "tetris-1984",
                    "name": "Tetris (1984)",
                    "added": 510
                  },
                  {
                    "id": 3802,
                    "slug": "double-dragon",
                    "name": "Double Dragon",
                    "added": 417
                  },
                  {
                    "id": 52512,
                    "slug": "arcade-archives-donkey-kong",
                    "name": "Donkey Kong",
                    "added": 365
                  },
                  {
                    "id": 52434,
                    "slug": "mario-bros-1983",
                    "name": "Mario Bros. (1983)",
                    "added": 262
                  },
                  {
                    "id": 28279,
                    "slug": "joust",
                    "name": "Joust",
                    "added": 171
                  }
                ]
              },
              {
                "id": 22,
                "name": "Atari Flashback",
                "slug": "atari-flashback",
                "games_count": 30,
                "image_background": "https://media.rawg.io/media/screenshots/2aa/2aa07f58491e14b0183333f8956bc802.jpg",
                "image": null,
                "year_start": null,
                "year_end": null,
                "games": [
                  {
                    "id": 53138,
                    "slug": "pong-1972",
                    "name": "Pong (1972)",
                    "added": 99
                  },
                  {
                    "id": 52391,
                    "slug": "adventure-game-atari",
                    "name": "Adventure",
                    "added": 58
                  },
                  {
                    "id": 52563,
                    "slug": "pitfall-1982",
                    "name": "Pitfall! (1982)",
                    "added": 51
                  },
                  {
                    "id": 52402,
                    "slug": "breakout-1976",
                    "name": "Breakout (1976)",
                    "added": 50
                  },
                  {
                    "id": 52436,
                    "slug": "missile-command-1980",
                    "name": "Missile Command (1980)",
                    "added": 44
                  },
                  {
                    "id": 52409,
                    "slug": "combat-1977",
                    "name": "Combat (1977)",
                    "added": 37
                  }
                ]
              },
              {
                "id": 25,
                "name": "Atari 8-bit",
                "slug": "atari-8-bit",
                "games_count": 306,
                "image_background": "https://media.rawg.io/media/screenshots/518/5180f00f3d4626c94bdb0259a07a2903.jpg",
                "image": null,
                "year_start": null,
                "year_end": null,
                "games": [
                  {
                    "id": 54122,
                    "slug": "ultima-4-quest-of-the-avatar",
                    "name": "Ultima IV: Quest of the Avatar",
                    "added": 1855
                  },
                  {
                    "id": 24881,
                    "slug": "pac-man",
                    "name": "Pac-Man",
                    "added": 702
                  },
                  {
                    "id": 52512,
                    "slug": "arcade-archives-donkey-kong",
                    "name": "Donkey Kong",
                    "added": 365
                  },
                  {
                    "id": 52434,
                    "slug": "mario-bros-1983",
                    "name": "Mario Bros. (1983)",
                    "added": 262
                  },
                  {
                    "id": 28279,
                    "slug": "joust",
                    "name": "Joust",
                    "added": 171
                  },
                  {
                    "id": 25161,
                    "slug": "lode-runner",
                    "name": "Lode Runner",
                    "added": 154
                  }
                ]
              },
              {
                "id": 34,
                "name": "Atari ST",
                "slug": "atari-st",
                "games_count": 835,
                "image_background": "https://media.rawg.io/media/screenshots/347/347e1979dcf9b62dc48202b73317a186.jpg",
                "image": null,
                "year_start": null,
                "year_end": null,
                "games": [
                  {
                    "id": 54122,
                    "slug": "ultima-4-quest-of-the-avatar",
                    "name": "Ultima IV: Quest of the Avatar",
                    "added": 1855
                  },
                  {
                    "id": 22733,
                    "slug": "lure-of-the-temptress",
                    "name": "Lure of the Temptress",
                    "added": 1537
                  },
                  {
                    "id": 29908,
                    "slug": "another-world",
                    "name": "Another World",
                    "added": 761
                  },
                  {
                    "id": 16122,
                    "slug": "loom",
                    "name": "LOOM",
                    "added": 681
                  },
                  {
                    "id": 31542,
                    "slug": "indiana-jones-and-the-last-crusade",
                    "name": "Indiana Jones and the Last Crusade: The Graphic Adventure",
                    "added": 648
                  },
                  {
                    "id": 45957,
                    "slug": "prince-of-persia-nes",
                    "name": "Prince of Persia (1989)",
                    "added": 556
                  }
                ]
              },
              {
                "id": 46,
                "name": "Atari Lynx",
                "slug": "atari-lynx",
                "games_count": 56,
                "image_background": "https://media.rawg.io/media/screenshots/575/575b2838392ed177dd7d2c734c682f93.jpg",
                "image": null,
                "year_start": null,
                "year_end": null,
                "games": [
                  {
                    "id": 29391,
                    "slug": "eye-of-the-beholder",
                    "name": "Eye of the Beholder",
                    "added": 994
                  },
                  {
                    "id": 3802,
                    "slug": "double-dragon",
                    "name": "Double Dragon",
                    "added": 417
                  },
                  {
                    "id": 30501,
                    "slug": "chips-challenge",
                    "name": "Chip's Challenge",
                    "added": 348
                  },
                  {
                    "id": 53467,
                    "slug": "paperboy",
                    "name": "Paperboy",
                    "added": 177
                  },
                  {
                    "id": 29371,
                    "slug": "batman-returns",
                    "name": "Batman Returns (Amiga, Atari)",
                    "added": 88
                  },
                  {
                    "id": 52438,
                    "slug": "ms-pac-man",
                    "name": "Ms. Pac-Man",
                    "added": 87
                  }
                ]
              },
              {
                "id": 50,
                "name": "Atari XEGS",
                "slug": "atari-xegs",
                "games_count": 22,
                "image_background": "https://media.rawg.io/media/screenshots/769/7691726d70c23c029903df08858df001.jpg",
                "image": null,
                "year_start": null,
                "year_end": null,
                "games": [
                  {
                    "id": 52512,
                    "slug": "arcade-archives-donkey-kong",
                    "name": "Donkey Kong",
                    "added": 365
                  },
                  {
                    "id": 52434,
                    "slug": "mario-bros-1983",
                    "name": "Mario Bros. (1983)",
                    "added": 262
                  },
                  {
                    "id": 34571,
                    "slug": "lode-runner-1983",
                    "name": "Lode Runner (1983)",
                    "added": 116
                  },
                  {
                    "id": 53687,
                    "slug": "archon-the-light-and-the-dark",
                    "name": "Archon: The Light and the Dark",
                    "added": 14
                  },
                  {
                    "id": 52605,
                    "slug": "summer-games",
                    "name": "Summer Games",
                    "added": 14
                  },
                  {
                    "id": 52413,
                    "slug": "crossbow",
                    "name": "Crossbow",
                    "added": 14
                  }
                ]
              },
              {
                "id": 167,
                "name": "Genesis",
                "slug": "genesis",
                "games_count": 826,
                "image_background": "https://media.rawg.io/media/screenshots/d2a/d2a67fc84413d5341408da527e7dde60.jpg",
                "image": null,
                "year_start": null,
                "year_end": null,
                "games": [
                  {
                    "id": 5383,
                    "slug": "worms",
                    "name": "Worms",
                    "added": 1863
                  },
                  {
                    "id": 54285,
                    "slug": "mortal-kombat",
                    "name": "Mortal Kombat",
                    "added": 1676
                  },
                  {
                    "id": 52175,
                    "slug": "battletoads",
                    "name": "Battletoads",
                    "added": 1669
                  },
                  {
                    "id": 53551,
                    "slug": "sonic-the-hedgehog",
                    "name": "Sonic the Hedgehog (1991)",
                    "added": 1408
                  },
                  {
                    "id": 2552,
                    "slug": "sonic-the-hedgehog-2",
                    "name": "Sonic the Hedgehog 2",
                    "added": 1225
                  },
                  {
                    "id": 28510,
                    "slug": "duke-nukem-3d",
                    "name": "Duke Nukem 3D",
                    "added": 854
                  }
                ]
              },
              {
                "id": 107,
                "name": "SEGA Saturn",
                "slug": "sega-saturn",
                "games_count": 341,
                "image_background": "https://media.rawg.io/media/screenshots/180/180b5f6e5d8c770bbbf941b9875046b6.jpg",
                "image": null,
                "year_start": null,
                "year_end": null,
                "games": [
                  {
                    "id": 54491,
                    "slug": "quake",
                    "name": "Quake",
                    "added": 2809
                  },
                  {
                    "id": 28300,
                    "slug": "nights-into-dreams",
                    "name": "NiGHTS into dreams...",
                    "added": 2296
                  },
                  {
                    "id": 5383,
                    "slug": "worms",
                    "name": "Worms",
                    "added": 1863
                  },
                  {
                    "id": 52790,
                    "slug": "castlevania-sotn",
                    "name": "Castlevania: Symphony of the Night",
                    "added": 1533
                  },
                  {
                    "id": 52884,
                    "slug": "doom-2",
                    "name": "DOOM",
                    "added": 1338
                  },
                  {
                    "id": 56183,
                    "slug": "resident-evil-2002",
                    "name": "Resident Evil (2002)",
                    "added": 1135
                  }
                ]
              },
              {
                "id": 119,
                "name": "SEGA CD",
                "slug": "sega-cd",
                "games_count": 160,
                "image_background": "https://media.rawg.io/media/games/e9a/e9a782a3f40f0e53ab64c7018251053e.jpg",
                "image": null,
                "year_start": null,
                "year_end": null,
                "games": [
                  {
                    "id": 1559,
                    "slug": "sonic-cd",
                    "name": "Sonic CD",
                    "added": 2062
                  },
                  {
                    "id": 54285,
                    "slug": "mortal-kombat",
                    "name": "Mortal Kombat",
                    "added": 1676
                  },
                  {
                    "id": 29391,
                    "slug": "eye-of-the-beholder",
                    "name": "Eye of the Beholder",
                    "added": 994
                  },
                  {
                    "id": 25663,
                    "slug": "earthworm-jim",
                    "name": "Earthworm Jim",
                    "added": 687
                  },
                  {
                    "id": 45957,
                    "slug": "prince-of-persia-nes",
                    "name": "Prince of Persia (1989)",
                    "added": 556
                  },
                  {
                    "id": 29839,
                    "slug": "the-secret-of-monkey-island",
                    "name": "The Secret of Monkey Island",
                    "added": 328
                  }
                ]
              },
              {
                "id": 117,
                "name": "SEGA 32X",
                "slug": "sega-32x",
                "games_count": 46,
                "image_background": "https://media.rawg.io/media/screenshots/dee/dee085e88fb024149a8a88d8f0cf9f91.jpg",
                "image": null,
                "year_start": null,
                "year_end": null,
                "games": [
                  {
                    "id": 52884,
                    "slug": "doom-2",
                    "name": "DOOM",
                    "added": 1338
                  },
                  {
                    "id": 29426,
                    "slug": "mortal-kombat-2",
                    "name": "Mortal Kombat 2",
                    "added": 432
                  },
                  {
                    "id": 53781,
                    "slug": "darkwing-duck",
                    "name": "Disney's Darkwing Duck",
                    "added": 213
                  },
                  {
                    "id": 32519,
                    "slug": "wwf-wrestlemania-the-arcade-game",
                    "name": "WWF WrestleMania: The Arcade Game",
                    "added": 126
                  },
                  {
                    "id": 53975,
                    "slug": "ninja-gaiden-iii-the-ancient-ship-of-doom",
                    "name": "Ninja Gaiden III: The Ancient Ship of Doom (1991)",
                    "added": 85
                  },
                  {
                    "id": 25886,
                    "slug": "pitfall-the-mayan-adventure",
                    "name": "Pitfall: The Mayan Adventure",
                    "added": 80
                  }
                ]
              },
              {
                "id": 74,
                "name": "SEGA Master System",
                "slug": "sega-master-system",
                "games_count": 224,
                "image_background": "https://media.rawg.io/media/screenshots/2a5/2a5404773ab69671bb6585cd46dd0a97.jpg",
                "image": null,
                "year_start": null,
                "year_end": null,
                "games": [
                  {
                    "id": 54122,
                    "slug": "ultima-4-quest-of-the-avatar",
                    "name": "Ultima IV: Quest of the Avatar",
                    "added": 1855
                  },
                  {
                    "id": 54285,
                    "slug": "mortal-kombat",
                    "name": "Mortal Kombat",
                    "added": 1676
                  },
                  {
                    "id": 4678,
                    "slug": "streets-of-rage-2",
                    "name": "Streets of Rage 2",
                    "added": 853
                  },
                  {
                    "id": 914,
                    "slug": "wonder-boy-the-dragons-trap",
                    "name": "Wonder Boy: The Dragon's Trap",
                    "added": 724
                  },
                  {
                    "id": 53207,
                    "slug": "comix-zone-1995",
                    "name": "Comix Zone",
                    "added": 709
                  },
                  {
                    "id": 25663,
                    "slug": "earthworm-jim",
                    "name": "Earthworm Jim",
                    "added": 687
                  }
                ]
              },
              {
                "id": 106,
                "name": "Dreamcast",
                "slug": "dreamcast",
                "games_count": 352,
                "image_background": "https://media.rawg.io/media/games/4f5/4f57124f7c0285150626cd1411c45b6e.jpg",
                "image": null,
                "year_start": null,
                "year_end": null,
                "games": [
                  {
                    "id": 18080,
                    "slug": "half-life",
                    "name": "Half-Life",
                    "added": 8826
                  },
                  {
                    "id": 19542,
                    "slug": "half-life-blue-shift",
                    "name": "Half-Life: Blue Shift",
                    "added": 5815
                  },
                  {
                    "id": 5159,
                    "slug": "resident-evil-2",
                    "name": "Resident Evil 2 (1998)",
                    "added": 5354
                  },
                  {
                    "id": 53341,
                    "slug": "jet-set-radio-2012",
                    "name": "Jet Set Radio",
                    "added": 4706
                  },
                  {
                    "id": 20466,
                    "slug": "worms-armageddon",
                    "name": "Worms Armageddon",
                    "added": 2667
                  },
                  {
                    "id": 54629,
                    "slug": "crazy-taxi",
                    "name": "Crazy Taxi (1999)",
                    "added": 2417
                  }
                ]
              },
              {
                "id": 111,
                "name": "3DO",
                "slug": "3do",
                "games_count": 95,
                "image_background": "https://media.rawg.io/media/screenshots/180/180b5f6e5d8c770bbbf941b9875046b6.jpg",
                "image": null,
                "year_start": null,
                "year_end": null,
                "games": [
                  {
                    "id": 4005,
                    "slug": "wolfenstein-3d",
                    "name": "Wolfenstein 3D",
                    "added": 1627
                  },
                  {
                    "id": 52884,
                    "slug": "doom-2",
                    "name": "DOOM",
                    "added": 1338
                  },
                  {
                    "id": 29908,
                    "slug": "another-world",
                    "name": "Another World",
                    "added": 761
                  },
                  {
                    "id": 53432,
                    "slug": "ultimate-mortal-kombat-3",
                    "name": "Ultimate Mortal Kombat 3",
                    "added": 638
                  },
                  {
                    "id": 4377,
                    "slug": "myst",
                    "name": "Myst",
                    "added": 414
                  },
                  {
                    "id": 5498,
                    "slug": "lemmings",
                    "name": "Lemmings",
                    "added": 303
                  }
                ]
              },
              {
                "id": 112,
                "name": "Jaguar",
                "slug": "jaguar",
                "games_count": 37,
                "image_background": "https://media.rawg.io/media/screenshots/7dd/7dd630a9b38257450b53099932d3047d.jpg",
                "image": null,
                "year_start": null,
                "year_end": null,
                "games": [
                  {
                    "id": 5383,
                    "slug": "worms",
                    "name": "Worms",
                    "added": 1863
                  },
                  {
                    "id": 4005,
                    "slug": "wolfenstein-3d",
                    "name": "Wolfenstein 3D",
                    "added": 1627
                  },
                  {
                    "id": 52884,
                    "slug": "doom-2",
                    "name": "DOOM",
                    "added": 1338
                  },
                  {
                    "id": 29908,
                    "slug": "another-world",
                    "name": "Another World",
                    "added": 761
                  },
                  {
                    "id": 4377,
                    "slug": "myst",
                    "name": "Myst",
                    "added": 414
                  },
                  {
                    "id": 5463,
                    "slug": "rayman",
                    "name": "Rayman",
                    "added": 278
                  }
                ]
              },
              {
                "id": 77,
                "name": "Game Gear",
                "slug": "game-gear",
                "games_count": 217,
                "image_background": "https://media.rawg.io/media/games/2c3/2c3363eb1ae202b9e4e7520d3f14ab2e.jpg",
                "image": null,
                "year_start": null,
                "year_end": null,
                "games": [
                  {
                    "id": 54285,
                    "slug": "mortal-kombat",
                    "name": "Mortal Kombat",
                    "added": 1676
                  },
                  {
                    "id": 52175,
                    "slug": "battletoads",
                    "name": "Battletoads",
                    "added": 1669
                  },
                  {
                    "id": 53551,
                    "slug": "sonic-the-hedgehog",
                    "name": "Sonic the Hedgehog (1991)",
                    "added": 1408
                  },
                  {
                    "id": 2552,
                    "slug": "sonic-the-hedgehog-2",
                    "name": "Sonic the Hedgehog 2",
                    "added": 1225
                  },
                  {
                    "id": 4678,
                    "slug": "streets-of-rage-2",
                    "name": "Streets of Rage 2",
                    "added": 853
                  },
                  {
                    "id": 24881,
                    "slug": "pac-man",
                    "name": "Pac-Man",
                    "added": 702
                  }
                ]
              },
              {
                "id": 12,
                "name": "Neo Geo",
                "slug": "neogeo",
                "games_count": 113,
                "image_background": "https://media.rawg.io/media/screenshots/488/488788e787a69d5ecf3c74884548ec24.jpg",
                "image": null,
                "year_start": null,
                "year_end": null,
                "games": [
                  {
                    "id": 1488,
                    "slug": "metal-slug-3",
                    "name": "METAL SLUG 3",
                    "added": 2364
                  },
                  {
                    "id": 14948,
                    "slug": "metal-slug",
                    "name": "METAL SLUG",
                    "added": 1022
                  },
                  {
                    "id": 23669,
                    "slug": "the-king-of-fighters-2002",
                    "name": "THE KING OF FIGHTERS 2002",
                    "added": 783
                  },
                  {
                    "id": 24881,
                    "slug": "pac-man",
                    "name": "Pac-Man",
                    "added": 702
                  },
                  {
                    "id": 6256,
                    "slug": "metal-slug-2",
                    "name": "METAL SLUG 2",
                    "added": 643
                  },
                  {
                    "id": 5970,
                    "slug": "samurai-shodown-ii",
                    "name": "SAMURAI SHODOWN II",
                    "added": 262
                  }
                ]
              }
            ]
          }
        }
      );

    return {
        platformQuery
    };
}