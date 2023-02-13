import { useQuery } from "@tanstack/react-query";
import { rawgApi } from "../../api/rawgApi";
import { Tags } from "../interfaces";

const API_KEY = import.meta.env.VITE_rawg_API_KEY

const getTags = async():Promise<Tags> => {

    const { data } = await rawgApi.get<Tags>(`/tags?key=${ API_KEY }`);
  
    return data;
  }


export const useTags = () => {

    const tagsQuery = useQuery(
        ['tags'],
        getTags,
        {
          refetchOnWindowFocus: false,
          staleTime: 60* 1000 * 60,
          initialData:{
            "count": 9442,
            "next": "https://api.rawg.io/api/tags?key=dfeb460a477942148b1c9009e784a08e&page=2",
            "previous": null,
            "results": [
              {
                "id": 31,
                "name": "Singleplayer",
                "slug": "singleplayer",
                "games_count": 204513,
                "image_background": "https://media.rawg.io/media/games/d82/d82990b9c67ba0d2d09d4e6fa88885a7.jpg",
                "language": "eng",
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
                "id": 40847,
                "name": "Steam Achievements",
                "slug": "steam-achievements",
                "games_count": 29020,
                "image_background": "https://media.rawg.io/media/games/73e/73eecb8909e0c39fb246f457b5d6cbbe.jpg",
                "language": "eng",
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
                "id": 7,
                "name": "Multiplayer",
                "slug": "multiplayer",
                "games_count": 35137,
                "image_background": "https://media.rawg.io/media/games/021/021c4e21a1824d2526f925eff6324653.jpg",
                "language": "eng",
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
                  }
                ]
              },
              {
                "id": 40836,
                "name": "Full controller support",
                "slug": "full-controller-support",
                "games_count": 13629,
                "image_background": "https://media.rawg.io/media/games/d58/d588947d4286e7b5e0e12e1bea7d9844.jpg",
                "language": "eng",
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
                    "id": 12020,
                    "slug": "left-4-dead-2",
                    "name": "Left 4 Dead 2",
                    "added": 14355
                  }
                ]
              },
              {
                "id": 13,
                "name": "Atmospheric",
                "slug": "atmospheric",
                "games_count": 28512,
                "image_background": "https://media.rawg.io/media/games/511/5118aff5091cb3efec399c808f8c598f.jpg",
                "language": "eng",
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
                "id": 40849,
                "name": "Steam Cloud",
                "slug": "steam-cloud",
                "games_count": 13314,
                "image_background": "https://media.rawg.io/media/games/b49/b4912b5dbfc7ed8927b65f05b8507f6c.jpg",
                "language": "eng",
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
                    "id": 802,
                    "slug": "borderlands-2",
                    "name": "Borderlands 2",
                    "added": 13630
                  },
                  {
                    "id": 13537,
                    "slug": "half-life-2",
                    "name": "Half-Life 2",
                    "added": 12866
                  }
                ]
              },
              {
                "id": 7808,
                "name": "steam-trading-cards",
                "slug": "steam-trading-cards",
                "games_count": 7582,
                "image_background": "https://media.rawg.io/media/games/5c0/5c0dd63002cb23f804aab327d40ef119.jpg",
                "language": "eng",
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
                    "id": 802,
                    "slug": "borderlands-2",
                    "name": "Borderlands 2",
                    "added": 13630
                  }
                ]
              },
              {
                "id": 42,
                "name": "Great Soundtrack",
                "slug": "great-soundtrack",
                "games_count": 3228,
                "image_background": "https://media.rawg.io/media/games/157/15742f2f67eacff546738e1ab5c19d20.jpg",
                "language": "eng",
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
                    "id": 3439,
                    "slug": "life-is-strange-episode-1-2",
                    "name": "Life is Strange",
                    "added": 13614
                  }
                ]
              },
              {
                "id": 24,
                "name": "RPG",
                "slug": "rpg",
                "games_count": 16485,
                "image_background": "https://media.rawg.io/media/games/be0/be01c3d7d8795a45615da139322ca080.jpg",
                "language": "eng",
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
                    "id": 802,
                    "slug": "borderlands-2",
                    "name": "Borderlands 2",
                    "added": 13630
                  }
                ]
              },
              {
                "id": 18,
                "name": "Co-op",
                "slug": "co-op",
                "games_count": 9546,
                "image_background": "https://media.rawg.io/media/games/f46/f466571d536f2e3ea9e815ad17177501.jpg",
                "language": "eng",
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
                    "id": 802,
                    "slug": "borderlands-2",
                    "name": "Borderlands 2",
                    "added": 13630
                  },
                  {
                    "id": 28,
                    "slug": "red-dead-redemption-2",
                    "name": "Red Dead Redemption 2",
                    "added": 13606
                  }
                ]
              }
            ]
          }
        }
      );

    return {
        tagsQuery
    };
}