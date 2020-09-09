import { Component, OnInit } from '@angular/core';
import { SpaceXLaunch } from './models/spacexlaunch.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  title = 'ResponsiveDesign';
 
  spacexlaunch=[
    {
      "flight_number": 4,
      "mission_name": "RatSat",
      "mission_id": [],
      "launch_year": "2008",
      "launch_date_unix": 1222643700,
      "launch_date_utc": "2008-09-28T23:15:00.000Z",
      "launch_date_local": "2008-09-28T11:15:00+12:00",
      "is_tentative": false,
      "tentative_max_precision": "hour",
      "tbd": false,
      "launch_window": 0,
      "rocket": {
          "rocket_id": "falcon1",
          "rocket_name": "Falcon 1",
          "rocket_type": "Merlin C",
          "first_stage": {
              "cores": [
                  {
                      "core_serial": "Merlin2C",
                      "flight": 1,
                      "block": null,
                      "gridfins": false,
                      "legs": false,
                      "reused": false,
                      "land_success": null,
                      "landing_intent": false,
                      "landing_type": null,
                      "landing_vehicle": null
                  }
              ]
          },
          "second_stage": {
              "block": 1,
              "payloads": [
                  {
                      "payload_id": "RatSat",
                      "norad_id": [
                          33393
                      ],
                      "reused": false,
                      "customers": [
                          "SpaceX"
                      ],
                      "nationality": "United States",
                      "manufacturer": "SpaceX",
                      "payload_type": "Satellite",
                      "payload_mass_kg": 165,
                      "payload_mass_lbs": 363,
                      "orbit": "LEO",
                      "orbit_params": {
                          "reference_system": "geocentric",
                          "regime": "low-earth",
                          "longitude": null,
                          "lifespan_years": null,
                          "epoch": "2020-09-08T06:26:04.000Z",
                          "mean_motion": 14.84854835,
                          "raan": 261.0055,
                          "semi_major_axis_km": 6992.178,
                          "eccentricity": 0.0012533,
                          "periapsis_km": 605.28,
                          "apoapsis_km": 622.806,
                          "inclination_deg": 9.3459,
                          "period_min": 96.979,
                          "arg_of_pericenter": 65.4843,
                          "mean_anomaly": 294.6662
                      }
                  }
              ]
          },
          "fairings": {
              "reused": false,
              "recovery_attempt": false,
              "recovered": false,
              "ship": null
          }
      },
      "ships": [],
      "telemetry": {
          "flight_club": null
      },
      "launch_site": {
          "site_id": "kwajalein_atoll",
          "site_name": "Kwajalein Atoll",
          "site_name_long": "Kwajalein Atoll Omelek Island"
      },
      "launch_success": true,
      "links": {
          "mission_patch": "https://images2.imgbox.com/e0/a7/FNjvKlXW_o.png",
          "mission_patch_small": "https://images2.imgbox.com/e9/c9/T8CfiSYb_o.png",
          "reddit_campaign": null,
          "reddit_launch": null,
          "reddit_recovery": null,
          "reddit_media": null,
          "presskit": null,
          "article_link": "https://en.wikipedia.org/wiki/Ratsat",
          "wikipedia": "https://en.wikipedia.org/wiki/Ratsat",
          "video_link": "https://www.youtube.com/watch?v=dLQ2tZEH6G0",
          "youtube_id": "dLQ2tZEH6G0",
          "flickr_images": []
      },
      "details": "Ratsat was carried to orbit on the first successful orbital launch of any privately funded and developed, liquid-propelled carrier rocket, the SpaceX Falcon 1",
      "upcoming": false,
      "static_fire_date_utc": "2008-09-20T00:00:00.000Z",
      "static_fire_date_unix": 1221868800,
      "timeline": {
          "webcast_liftoff": 5
      },
      "crew": null
  },
  {
      "flight_number": 5,
      "mission_name": "RazakSat",
      "mission_id": [],
      "launch_year": "2009",
      "launch_date_unix": 1247456100,
      "launch_date_utc": "2009-07-13T03:35:00.000Z",
      "launch_date_local": "2009-07-13T15:35:00+12:00",
      "is_tentative": false,
      "tentative_max_precision": "hour",
      "tbd": false,
      "launch_window": 0,
      "rocket": {
          "rocket_id": "falcon1",
          "rocket_name": "Falcon 1",
          "rocket_type": "Merlin C",
          "first_stage": {
              "cores": [
                  {
                      "core_serial": "Merlin3C",
                      "flight": 1,
                      "block": null,
                      "gridfins": false,
                      "legs": false,
                      "reused": false,
                      "land_success": true,
                      "landing_intent": false,
                      "landing_type": null,
                      "landing_vehicle": null
                  }
              ]
          },
          "second_stage": {
              "block": 1,
              "payloads": [
                  {
                      "payload_id": "RazakSAT",
                      "norad_id": [
                          35578
                      ],
                      "reused": false,
                      "customers": [
                          "ATSB"
                      ],
                      "nationality": "Malaysia",
                      "manufacturer": "Satrec",
                      "payload_type": "Satellite",
                      "payload_mass_kg": 200,
                      "payload_mass_lbs": 440,
                      "orbit": "LEO",
                      "orbit_params": {
                          "reference_system": "geocentric",
                          "regime": "low-earth",
                          "longitude": null,
                          "semi_major_axis_km": 7048.96,
                          "eccentricity": 0.0016893,
                          "periapsis_km": 658.917,
                          "apoapsis_km": 682.733,
                          "inclination_deg": 8.9868,
                          "period_min": 98.162,
                          "lifespan_years": null,
                          "epoch": "2020-09-08T01:37:49.000Z",
                          "mean_motion": 14.66949534,
                          "raan": 141.4112,
                          "arg_of_pericenter": 321.5246,
                          "mean_anomaly": 38.374
                      }
                  }
              ]
          },
          "fairings": {
              "reused": false,
              "recovery_attempt": false,
              "recovered": false,
              "ship": null
          }
      },
      "ships": [],
      "telemetry": {
          "flight_club": null
      },
      "launch_site": {
          "site_id": "kwajalein_atoll",
          "site_name": "Kwajalein Atoll",
          "site_name_long": "Kwajalein Atoll Omelek Island"
      },
      "launch_success": true,
      "links": {
          "mission_patch": "https://images2.imgbox.com/8d/fc/0qdZMWWx_o.png",
          "mission_patch_small": "https://images2.imgbox.com/a7/ba/NBZSw3Ho_o.png",
          "reddit_campaign": null,
          "reddit_launch": null,
          "reddit_recovery": null,
          "reddit_media": null,
          "presskit": "http://www.spacex.com/press/2012/12/19/spacexs-falcon-1-successfully-delivers-razaksat-satellite-orbit",
          "article_link": "http://www.spacex.com/news/2013/02/12/falcon-1-flight-5",
          "wikipedia": "https://en.wikipedia.org/wiki/RazakSAT",
          "video_link": "https://www.youtube.com/watch?v=yTaIDooc8Og",
          "youtube_id": "yTaIDooc8Og",
          "flickr_images": []
      },
      "details": null,
      "upcoming": false,
      "static_fire_date_utc": null,
      "static_fire_date_unix": null,
      "timeline": {
          "webcast_liftoff": 5
      },
      "crew": null
  },
  {
      "flight_number": 6,
      "mission_name": "Falcon 9 Test Flight",
      "mission_id": [
          "EE86F74"
      ],
      "launch_year": "2010",
      "launch_date_unix": 1275677100,
      "launch_date_utc": "2010-06-04T18:45:00.000Z",
      "launch_date_local": "2010-06-04T14:45:00-04:00",
      "is_tentative": false,
      "tentative_max_precision": "hour",
      "tbd": false,
      "launch_window": 0,
      "rocket": {
          "rocket_id": "falcon9",
          "rocket_name": "Falcon 9",
          "rocket_type": "v1.0",
          "first_stage": {
              "cores": [
                  {
                      "core_serial": "B0003",
                      "flight": 1,
                      "block": 1,
                      "gridfins": false,
                      "legs": false,
                      "reused": false,
                      "land_success": null,
                      "landing_intent": false,
                      "landing_type": null,
                      "landing_vehicle": null
                  }
              ]
          },
          "second_stage": {
              "block": 1,
              "payloads": [
                  {
                      "payload_id": "Dragon Qualification Unit",
                      "norad_id": [
                          36595
                      ],
                      "reused": false,
                      "customers": [
                          "SpaceX"
                      ],
                      "nationality": "United States",
                      "manufacturer": "SpaceX",
                      "payload_type": "Dragon Boilerplate",
                      "payload_mass_kg": null,
                      "payload_mass_lbs": null,
                      "orbit": "LEO",
                      "orbit_params": {
                          "reference_system": "geocentric",
                          "regime": "low-earth",
                          "longitude": null,
                          "semi_major_axis_km": 6634.458,
                          "eccentricity": 0.0030715,
                          "periapsis_km": 235.945,
                          "apoapsis_km": 276.701,
                          "inclination_deg": 34.5005,
                          "period_min": 89.632,
                          "lifespan_years": null,
                          "epoch": "2010-06-04T20:04:51.000Z",
                          "mean_motion": 16.06552645,
                          "raan": 41.2862,
                          "arg_of_pericenter": 213.759,
                          "mean_anomaly": 146.1185
                      }
                  }
              ]
          },
          "fairings": null
      },
      "ships": [],
      "telemetry": {
          "flight_club": null
      },
      "launch_site": {
          "site_id": "ccafs_slc_40",
          "site_name": "CCAFS SLC 40",
          "site_name_long": "Cape Canaveral Air Force Station Space Launch Complex 40"
      },
      "launch_success": true,
      "links": {
          "mission_patch": "https://images2.imgbox.com/d6/12/yxne8mMD_o.png",
          "mission_patch_small": "https://images2.imgbox.com/5c/36/gbDKf6Y7_o.png",
          "reddit_campaign": null,
          "reddit_launch": null,
          "reddit_recovery": null,
          "reddit_media": null,
          "presskit": "http://forum.nasaspaceflight.com/index.php?action=dlattach;topic=21869.0;attach=230821",
          "article_link": "http://www.spacex.com/news/2013/02/12/falcon-9-flight-1",
          "wikipedia": "https://en.wikipedia.org/wiki/Dragon_Spacecraft_Qualification_Unit",
          "video_link": "https://www.youtube.com/watch?v=nxSxgBKlYws",
          "youtube_id": "nxSxgBKlYws",
          "flickr_images": []
      },
      "details": null,
      "upcoming": false,
      "static_fire_date_utc": "2010-03-13T00:00:00.000Z",
      "static_fire_date_unix": 1268438400,
      "timeline": {
          "webcast_liftoff": 123,
          "go_for_prop_loading": -2280,
          "rp1_loading": -2100,
          "stage1_lox_loading": -2100,
          "stage2_lox_loading": -960,
          "engine_chill": -420,
          "prelaunch_checks": -60,
          "propellant_pressurization": -60,
          "go_for_launch": -45,
          "ignition": -3,
          "liftoff": 0,
          "maxq": 76,
          "meco": 174,
          "stage_sep": 176,
          "second_stage_ignition": 179,
          "seco-1": 476
      },
      "crew": null
  },
  {
      "flight_number": 7,
      "mission_name": "COTS 1",
      "mission_id": [
          "EE86F74"
      ],
      "launch_year": "2010",
      "launch_date_unix": 1291822980,
      "launch_date_utc": "2010-12-08T15:43:00.000Z",
      "launch_date_local": "2010-12-08T11:43:00-04:00",
      "is_tentative": false,
      "tentative_max_precision": "hour",
      "tbd": false,
      "launch_window": 0,
      "rocket": {
          "rocket_id": "falcon9",
          "rocket_name": "Falcon 9",
          "rocket_type": "v1.0",
          "first_stage": {
              "cores": [
                  {
                      "core_serial": "B0004",
                      "flight": 1,
                      "block": 1,
                      "gridfins": false,
                      "legs": false,
                      "reused": false,
                      "land_success": null,
                      "landing_intent": false,
                      "landing_type": null,
                      "landing_vehicle": null
                  }
              ]
          },
          "second_stage": {
              "block": 1,
              "payloads": [
                  {
                      "payload_id": "COTS Demo Flight 1",
                      "norad_id": [
                          37244
                      ],
                      "cap_serial": "C101",
                      "reused": false,
                      "customers": [
                          "NASA(COTS)"
                      ],
                      "nationality": "United States",
                      "manufacturer": "SpaceX",
                      "payload_type": "Dragon 1.0",
                      "payload_mass_kg": null,
                      "payload_mass_lbs": null,
                      "orbit": "LEO",
                      "orbit_params": {
                          "reference_system": "geocentric",
                          "regime": "low-earth",
                          "longitude": null,
                          "semi_major_axis_km": 6672.063,
                          "eccentricity": 0.0021812,
                          "periapsis_km": 279.375,
                          "apoapsis_km": 308.481,
                          "inclination_deg": 34.5447,
                          "period_min": 90.396,
                          "lifespan_years": null,
                          "epoch": "2010-12-08T15:34:03.000Z",
                          "mean_motion": 15.9298967,
                          "raan": 180.7668,
                          "arg_of_pericenter": 225.2707,
                          "mean_anomaly": 136.6556
                      },
                      "mass_returned_kg": null,
                      "mass_returned_lbs": null,
                      "flight_time_sec": 11940,
                      "cargo_manifest": null
                  },
                  {
                      "payload_id": "Cubesats",
                      "norad_id": [],
                      "reused": false,
                      "customers": [
                          "NRO"
                      ],
                      "payload_type": "Satellite",
                      "payload_mass_kg": null,
                      "payload_mass_lbs": null,
                      "orbit": "LEO",
                      "orbit_params": {
                          "reference_system": "geocentric",
                          "regime": "low-earth",
                          "longitude": null,
                          "semi_major_axis_km": null,
                          "eccentricity": null,
                          "periapsis_km": null,
                          "apoapsis_km": null,
                          "inclination_deg": null,
                          "period_min": null,
                          "lifespan_years": 0,
                          "epoch": null,
                          "mean_motion": null,
                          "raan": null,
                          "arg_of_pericenter": null,
                          "mean_anomaly": null
                      }
                  }
              ]
          },
          "fairings": null
      },
      "ships": [
          "AMERICANCHAMPION"
      ],
      "telemetry": {
          "flight_club": null
      },
      "launch_site": {
          "site_id": "ccafs_slc_40",
          "site_name": "CCAFS SLC 40",
          "site_name_long": "Cape Canaveral Air Force Station Space Launch Complex 40"
      },
      "launch_success": true,
      "links": {
          "mission_patch": "https://images2.imgbox.com/00/2f/FhtEd0nB_o.png",
          "mission_patch_small": "https://images2.imgbox.com/d9/3e/FfrN88ry_o.png",
          "reddit_campaign": null,
          "reddit_launch": null,
          "reddit_recovery": null,
          "reddit_media": null,
          "presskit": "http://www.spacex.com/files/downloads/cots1-20101206.pdf",
          "article_link": "https://en.wikipedia.org/wiki/SpaceX_COTS_Demo_Flight_1",
          "wikipedia": "https://en.wikipedia.org/wiki/SpaceX_COTS_Demo_Flight_1",
          "video_link": "https://www.youtube.com/watch?v=cdLITgWKe_0",
          "youtube_id": "cdLITgWKe_0",
          "flickr_images": []
      },
      "details": null,
      "upcoming": false,
      "static_fire_date_utc": "2010-12-04T00:00:00.000Z",
      "static_fire_date_unix": 1291420800,
      "timeline": {
          "webcast_liftoff": 14,
          "go_for_prop_loading": -2280,
          "rp1_loading": -2100,
          "stage1_lox_loading": -2100,
          "stage2_lox_loading": -960,
          "engine_chill": -420,
          "prelaunch_checks": -60,
          "propellant_pressurization": -60,
          "go_for_launch": -45,
          "ignition": -3,
          "liftoff": 0,
          "meco": 178,
          "stage_sep": 182,
          "second_stage_ignition": 189,
          "seco-1": 540,
          "dragon_separation": 575
      },
      "crew": null
  },
  {
      "flight_number": 8,
      "mission_name": "COTS 2",
      "mission_id": [
          "EE86F74"
      ],
      "launch_year": "2012",
      "launch_date_unix": 1335944640,
      "launch_date_utc": "2012-05-22T07:44:00.000Z",
      "launch_date_local": "2012-05-22T03:44:00-04:00",
      "is_tentative": false,
      "tentative_max_precision": "hour",
      "tbd": false,
      "launch_window": 0,
      "rocket": {
          "rocket_id": "falcon9",
          "rocket_name": "Falcon 9",
          "rocket_type": "v1.0",
          "first_stage": {
              "cores": [
                  {
                      "core_serial": "B0005",
                      "flight": 1,
                      "block": 1,
                      "gridfins": false,
                      "legs": false,
                      "reused": false,
                      "land_success": null,
                      "landing_intent": false,
                      "landing_type": null,
                      "landing_vehicle": null
                  }
              ]
          },
          "second_stage": {
              "block": 1,
              "payloads": [
                  {
                      "payload_id": "COTS Demo Flight 2",
                      "norad_id": [
                          38348
                      ],
                      "cap_serial": "C102",
                      "reused": false,
                      "customers": [
                          "NASA(COTS)"
                      ],
                      "nationality": "United States",
                      "manufacturer": "SpaceX",
                      "payload_type": "Dragon 1.0",
                      "payload_mass_kg": 525,
                      "payload_mass_lbs": 1157,
                      "orbit": "LEO",
                      "orbit_params": {
                          "reference_system": "geocentric",
                          "regime": "low-earth",
                          "longitude": null,
                          "semi_major_axis_km": 6711.684,
                          "eccentricity": 0.0057963,
                          "periapsis_km": 294.646,
                          "apoapsis_km": 372.452,
                          "inclination_deg": 51.6726,
                          "period_min": 91.202,
                          "lifespan_years": null,
                          "epoch": "2012-05-22T09:12:31.000Z",
                          "mean_motion": 15.78904505,
                          "raan": 251.5418,
                          "arg_of_pericenter": 331.7079,
                          "mean_anomaly": 31.2745
                      },
                      "mass_returned_kg": null,
                      "mass_returned_lbs": null,
                      "flight_time_sec": 806400,
                      "cargo_manifest": null
                  }
              ]
          },
          "fairings": null
      },
      "ships": [
          "AMERICANCHAMPION"
      ],
      "telemetry": {
          "flight_club": null
      },
      "launch_site": {
          "site_id": "ccafs_slc_40",
          "site_name": "CCAFS SLC 40",
          "site_name_long": "Cape Canaveral Air Force Station Space Launch Complex 40"
      },
      "launch_success": true,
      "links": {
          "mission_patch": "https://images2.imgbox.com/2b/8e/MYyHbnd2_o.png",
          "mission_patch_small": "https://images2.imgbox.com/fc/7a/r9ITwL12_o.png",
          "reddit_campaign": null,
          "reddit_launch": null,
          "reddit_recovery": null,
          "reddit_media": null,
          "presskit": "https://www.nasa.gov/pdf/649910main_cots2_presskit_051412.pdf",
          "article_link": "https://en.wikipedia.org/wiki/Dragon_C2%2B",
          "wikipedia": "https://en.wikipedia.org/wiki/Dragon_C2%2B",
          "video_link": "https://www.youtube.com/watch?v=tpQzDbAY7yI",
          "youtube_id": "tpQzDbAY7yI",
          "flickr_images": []
      },
      "details": "Launch was scrubbed on first attempt, second launch attempt was successful",
      "upcoming": false,
      "static_fire_date_utc": "2012-04-30T00:00:00.000Z",
      "static_fire_date_unix": 1335744000,
      "timeline": {
          "webcast_liftoff": 42,
          "go_for_prop_loading": -2280,
          "rp1_loading": -2100,
          "stage1_lox_loading": -2100,
          "stage2_lox_loading": -960,
          "engine_chill": -420,
          "prelaunch_checks": -60,
          "propellant_pressurization": -60,
          "go_for_launch": -45,
          "ignition": -3,
          "liftoff": 0,
          "maxq": 84,
          "meco": 180,
          "stage_sep": 180,
          "second_stage_ignition": 185,
          "seco-1": 554,
          "dragon_separation": 598,
          "dragon_solar_deploy": 713,
          "dragon_bay_door_deploy": 8808
      },
      "crew": null
  },
  {
      "flight_number": 9,
      "mission_name": "CRS-1",
      "mission_id": [
          "EE86F74"
      ],
      "launch_year": "2012",
      "launch_date_unix": 1349656500,
      "launch_date_utc": "2012-10-08T00:35:00.000Z",
      "launch_date_local": "2012-10-08T20:35:00-04:00",
      "is_tentative": false,
      "tentative_max_precision": "hour",
      "tbd": false,
      "launch_window": 0,
      "rocket": {
          "rocket_id": "falcon9",
          "rocket_name": "Falcon 9",
          "rocket_type": "v1.0",
          "first_stage": {
              "cores": [
                  {
                      "core_serial": "B0006",
                      "flight": 1,
                      "block": 1,
                      "gridfins": false,
                      "legs": false,
                      "reused": false,
                      "land_success": null,
                      "landing_intent": false,
                      "landing_type": null,
                      "landing_vehicle": null
                  }
              ]
          },
          "second_stage": {
              "block": 1,
              "payloads": [
                  {
                      "payload_id": "CRS-1",
                      "norad_id": [
                          38846
                      ],
                      "cap_serial": "C103",
                      "reused": false,
                      "customers": [
                          "NASA (CRS)"
                      ],
                      "nationality": "United States",
                      "manufacturer": "SpaceX",
                      "payload_type": "Dragon 1.0",
                      "payload_mass_kg": 400,
                      "payload_mass_lbs": 881,
                      "orbit": "ISS",
                      "orbit_params": {
                          "reference_system": "geocentric",
                          "regime": "low-earth",
                          "longitude": null,
                          "semi_major_axis_km": 6643.164,
                          "eccentricity": 0.0092222,
                          "periapsis_km": 203.764,
                          "apoapsis_km": 326.293,
                          "inclination_deg": 51.6539,
                          "period_min": 89.809,
                          "lifespan_years": null,
                          "epoch": "2012-10-08T00:31:33.000Z",
                          "mean_motion": 16.03395683,
                          "raan": 281.4248,
                          "arg_of_pericenter": 54.4728,
                          "mean_anomaly": 306.4841
                      },
                      "mass_returned_kg": 905,
                      "mass_returned_lbs": 1995,
                      "flight_time_sec": 1728000,
                      "cargo_manifest": "https://en.wikipedia.org/wiki/SpaceX_CRS-1#Payload"
                  },
                  {
                      "payload_id": "Orbcomm-OG2",
                      "norad_id": [],
                      "reused": false,
                      "customers": [
                          "Orbcomm"
                      ],
                      "payload_type": "Dragon 1.0",
                      "payload_mass_kg": 400,
                      "payload_mass_lbs": 881,
                      "orbit": "LEO",
                      "orbit_params": {
                          "reference_system": "geocentric",
                          "regime": "low-earth",
                          "longitude": null,
                          "semi_major_axis_km": null,
                          "eccentricity": null,
                          "periapsis_km": null,
                          "apoapsis_km": null,
                          "inclination_deg": 45,
                          "period_min": null,
                          "lifespan_years": 5,
                          "epoch": null,
                          "mean_motion": null,
                          "raan": null
                      }
                  }
              ]
          },
          "fairings": null
      },
      "ships": [
          "AMERICANISLANDER"
      ],
      "telemetry": {
          "flight_club": null
      },
      "launch_site": {
          "site_id": "ccafs_slc_40",
          "site_name": "CCAFS SLC 40",
          "site_name_long": "Cape Canaveral Air Force Station Space Launch Complex 40"
      },
      "launch_success": true,
      "links": {
          "mission_patch": "https://images2.imgbox.com/52/09/eNvilptL_o.png",
          "mission_patch_small": "https://images2.imgbox.com/0b/33/2eLGEejP_o.png",
          "reddit_campaign": null,
          "reddit_launch": null,
          "reddit_recovery": null,
          "reddit_media": null,
          "presskit": "https://www.nasa.gov/pdf/694166main_SpaceXCRS-1PressKit.pdf",
          "article_link": "https://www.nasa.gov/mission_pages/station/main/spacex-crs1-target.html",
          "wikipedia": "https://en.wikipedia.org/wiki/SpaceX_CRS-1",
          "video_link": "https://www.youtube.com/watch?v=-Vk3hiV_zXU",
          "youtube_id": "-Vk3hiV_zXU",
          "flickr_images": []
      },
      "details": "CRS-1 successful, but the secondary payload was inserted into abnormally low orbit and lost due to Falcon 9 boost stage engine failure, ISS visiting vehicle safety rules, and the primary payload owner's contractual right to decline a second ignition of the second stage under some conditions.",
      "upcoming": false,
      "static_fire_date_utc": "2012-09-29T00:00:00.000Z",
      "static_fire_date_unix": 1348876800,
      "timeline": {
          "webcast_liftoff": 605,
          "go_for_prop_loading": -2280,
          "rp1_loading": -2100,
          "stage1_lox_loading": -2100,
          "stage2_lox_loading": -960,
          "engine_chill": -420,
          "prelaunch_checks": -60,
          "propellant_pressurization": -60,
          "go_for_launch": -45,
          "ignition": -3,
          "liftoff": 0,
          "maxq": 60,
          "meco": 180,
          "stage_sep": 180,
          "second_stage_ignition": 180,
          "seco-1": 540,
          "dragon_separation": 600,
          "dragon_solar_deploy": 720,
          "dragon_bay_door_deploy": 8400
      },
      "crew": null
  },
  {
      "flight_number": 10,
      "mission_name": "CRS-2",
      "mission_id": [
          "EE86F74"
      ],
      "launch_year": "2013",
      "launch_date_unix": 1362165000,
      "launch_date_utc": "2013-03-01T19:10:00.000Z",
      "launch_date_local": "2013-03-01T15:10:00-04:00",
      "is_tentative": false,
      "tentative_max_precision": "hour",
      "tbd": false,
      "launch_window": 0,
      "rocket": {
          "rocket_id": "falcon9",
          "rocket_name": "Falcon 9",
          "rocket_type": "v1.0",
          "first_stage": {
              "cores": [
                  {
                      "core_serial": "B0007",
                      "flight": 1,
                      "block": 1,
                      "gridfins": false,
                      "legs": false,
                      "reused": false,
                      "land_success": null,
                      "landing_intent": false,
                      "landing_type": null,
                      "landing_vehicle": null
                  }
              ]
          },
          "second_stage": {
              "block": 1,
              "payloads": [
                  {
                      "payload_id": "CRS-2",
                      "norad_id": [
                          39115
                      ],
                      "cap_serial": "C104",
                      "reused": false,
                      "customers": [
                          "NASA (CRS)"
                      ],
                      "nationality": "United States",
                      "manufacturer": "SpaceX",
                      "payload_type": "Dragon 1.0",
                      "payload_mass_kg": 677,
                      "payload_mass_lbs": 1492,
                      "orbit": "ISS",
                      "orbit_params": {
                          "reference_system": "geocentric",
                          "regime": "low-earth",
                          "longitude": null,
                          "semi_major_axis_km": 6640.79,
                          "eccentricity": 0.0089419,
                          "periapsis_km": 203.274,
                          "apoapsis_km": 322.036,
                          "inclination_deg": 51.6797,
                          "period_min": 89.761,
                          "lifespan_years": null,
                          "epoch": "2013-03-01T20:19:32.000Z",
                          "mean_motion": 16.04255447,
                          "raan": 281.5076,
                          "arg_of_pericenter": 50.5296,
                          "mean_anomaly": 127.2881
                      },
                      "mass_returned_kg": 1370,
                      "mass_returned_lbs": 3020,
                      "flight_time_sec": 2160000,
                      "cargo_manifest": "https://en.wikipedia.org/wiki/SpaceX_CRS-2#Payload"
                  }
              ]
          },
          "fairings": null
      },
      "ships": [
          "AMERICANISLANDER"
      ],
      "telemetry": {
          "flight_club": null
      },
      "launch_site": {
          "site_id": "ccafs_slc_40",
          "site_name": "CCAFS SLC 40",
          "site_name_long": "Cape Canaveral Air Force Station Space Launch Complex 40"
      },
      "launch_success": true,
      "links": {
          "mission_patch": "https://images2.imgbox.com/ef/39/FyZRYeOh_o.png",
          "mission_patch_small": "https://images2.imgbox.com/1b/b6/Z4oktZeR_o.png",
          "reddit_campaign": null,
          "reddit_launch": "https://www.reddit.com/r/space/comments/19gm5f/live_coverage_spacex_crs2_launch_to_the_iss/c8nvah4",
          "reddit_recovery": null,
          "reddit_media": null,
          "presskit": "https://www.nasa.gov/sites/default/files/files/Orb2_PRESS_KIT.pdf",
          "article_link": "https://en.wikipedia.org/wiki/SpaceX_CRS-2",
          "wikipedia": "https://en.wikipedia.org/wiki/SpaceX_CRS-2",
          "video_link": "https://www.youtube.com/watch?v=ik0ElKl5kW4",
          "youtube_id": "ik0ElKl5kW4",
          "flickr_images": []
      },
      "details": "Last launch of the original Falcon 9 v1.0 launch vehicle",
      "upcoming": false,
      "static_fire_date_utc": "2013-02-25T18:30:00.000Z",
      "static_fire_date_unix": 1361817000,
      "timeline": {
          "webcast_liftoff": 2393,
          "go_for_prop_loading": -2280,
          "rp1_loading": -2100,
          "stage1_lox_loading": -2100,
          "stage2_lox_loading": -960,
          "engine_chill": -420,
          "prelaunch_checks": -60,
          "propellant_pressurization": -60,
          "go_for_launch": -45,
          "ignition": -3,
          "liftoff": 0,
          "maxq": 60,
          "meco": 180,
          "stage_sep": 180,
          "second_stage_ignition": 180,
          "seco-1": 540,
          "dragon_separation": 600,
          "dragon_solar_deploy": 720,
          "dragon_bay_door_deploy": 8400
      },
      "crew": null
  },
  {
    "flight_number": 11,
    "mission_name": "CASSIOPE",
    "mission_id": [],
    "launch_year": "2013",
    "launch_date_unix": 1380470400,
    "launch_date_utc": "2013-09-29T16:00:00.000Z",
    "launch_date_local": "2013-09-29T09:00:00-07:00",
    "is_tentative": false,
    "tentative_max_precision": "hour",
    "tbd": false,
    "launch_window": 0,
    "rocket": {
        "rocket_id": "falcon9",
        "rocket_name": "Falcon 9",
        "rocket_type": "v1.1",
        "first_stage": {
            "cores": [
                {
                    "core_serial": "B1003",
                    "flight": 1,
                    "block": 1,
                    "gridfins": false,
                    "legs": false,
                    "reused": false,
                    "land_success": false,
                    "landing_intent": true,
                    "landing_type": "Ocean",
                    "landing_vehicle": null
                }
            ]
        },
        "second_stage": {
            "block": 1,
            "payloads": [
                {
                    "payload_id": "CASSIOPE",
                    "norad_id": [
                        39265
                    ],
                    "reused": false,
                    "customers": [
                        "MDA"
                    ],
                    "nationality": "Canada",
                    "manufacturer": "MDA",
                    "payload_type": "Satellite",
                    "payload_mass_kg": 500,
                    "payload_mass_lbs": 1100,
                    "orbit": "PO",
                    "orbit_params": {
                        "reference_system": "geocentric",
                        "regime": "low-earth",
                        "longitude": null,
                        "semi_major_axis_km": 7170.613,
                        "eccentricity": 0.0660163,
                        "periapsis_km": 319.101,
                        "apoapsis_km": 1265.855,
                        "inclination_deg": 80.9663,
                        "period_min": 100.715,
                        "lifespan_years": 2,
                        "epoch": "2020-09-08T21:14:54.000Z",
                        "mean_motion": 14.29776923,
                        "raan": 227.1774,
                        "arg_of_pericenter": 58.9994,
                        "mean_anomaly": 307.432
                    }
                }
            ]
        },
        "fairings": {
            "reused": false,
            "recovery_attempt": false,
            "recovered": false,
            "ship": null
        }
    },
    "ships": [
        "AMERICANSPIRIT"
    ],
    "telemetry": {
        "flight_club": null
    },
    "launch_site": {
        "site_id": "vafb_slc_4e",
        "site_name": "VAFB SLC 4E",
        "site_name_long": "Vandenberg Air Force Base Space Launch Complex 4E"
    },
    "launch_success": true,
    "links": {
        "mission_patch": "https://images2.imgbox.com/89/bc/JcbcvuBI_o.png",
        "mission_patch_small": "https://images2.imgbox.com/91/27/VhC1TTYN_o.png",
        "reddit_campaign": null,
        "reddit_launch": "http://www.reddit.com/r/spacex/comments/1ndlay",
        "reddit_recovery": null,
        "reddit_media": null,
        "presskit": "https://spaceflightnow.com/falcon9/006/UpgradedF9DemoMission_PressKit.pdf",
        "article_link": "http://www.parabolicarc.com/2013/09/29/falcon-9-launch-payloads-orbit-vandenberg/",
        "wikipedia": "https://en.wikipedia.org/wiki/CASSIOPE",
        "video_link": "https://www.youtube.com/watch?v=uFefasS6bhc",
        "youtube_id": "uFefasS6bhc",
        "flickr_images": []
    },
    "details": "Commercial mission and first Falcon 9 v1.1 flight, with improved 13-tonne to LEO capacity. Following second-stage separation from the first stage, an attempt was made to perform an ocean touchdown test of the discarded booster vehicle. The test provided good test data on the experiment-its primary objective-but as the booster neared the ocean, aerodynamic forces caused an uncontrollable roll. The center engine, depleted of fuel by centrifugal force, shut down resulting in the impact and destruction of the vehicle.",
    "upcoming": false,
    "static_fire_date_utc": "2013-09-19T00:00:00.000Z",
    "static_fire_date_unix": 1379548800,
    "timeline": {
        "webcast_liftoff": 55,
        "go_for_prop_loading": -2280,
        "rp1_loading": -2100,
        "stage1_lox_loading": -2100,
        "stage2_lox_loading": -960,
        "engine_chill": -420,
        "prelaunch_checks": -60,
        "propellant_pressurization": -60,
        "go_for_launch": -45,
        "ignition": -3,
        "liftoff": 0,
        "maxq": 78,
        "meco": 163,
        "stage_sep": 170,
        "second_stage_ignition": 177,
        "fairing_deploy": 217,
        "seco-1": 534,
        "payload_deploy": 855
    },
    "crew": null
},
{
    "flight_number": 13,
    "mission_name": "Thaicom 6",
    "mission_id": [
        "9D1B7E0"
    ],
    "launch_year": "2014",
    "launch_date_unix": 1389031560,
    "launch_date_utc": "2014-01-06T18:06:00.000Z",
    "launch_date_local": "2014-01-06T14:06:00-04:00",
    "is_tentative": false,
    "tentative_max_precision": "hour",
    "tbd": false,
    "launch_window": 0,
    "rocket": {
        "rocket_id": "falcon9",
        "rocket_name": "Falcon 9",
        "rocket_type": "v1.1",
        "first_stage": {
            "cores": [
                {
                    "core_serial": "B1005",
                    "flight": 1,
                    "block": 1,
                    "gridfins": false,
                    "legs": false,
                    "reused": false,
                    "land_success": null,
                    "landing_intent": false,
                    "landing_type": null,
                    "landing_vehicle": null
                }
            ]
        },
        "second_stage": {
            "block": 1,
            "payloads": [
                {
                    "payload_id": "Thaicom 6",
                    "norad_id": [
                        39500
                    ],
                    "reused": false,
                    "customers": [
                        "Thaicom"
                    ],
                    "nationality": "Thailand",
                    "manufacturer": "Orbital ATK",
                    "payload_type": "Satellite",
                    "payload_mass_kg": 3325,
                    "payload_mass_lbs": 7330,
                    "orbit": "GTO",
                    "orbit_params": {
                        "reference_system": "geocentric",
                        "regime": "geostationary",
                        "longitude": 78.5,
                        "semi_major_axis_km": 42164.272,
                        "eccentricity": 0.0004551,
                        "periapsis_km": 35766.948,
                        "apoapsis_km": 35805.326,
                        "inclination_deg": 0.0389,
                        "period_min": 1436.073,
                        "lifespan_years": 15,
                        "epoch": "2020-09-08T20:08:14.000Z",
                        "mean_motion": 1.00273424,
                        "raan": 137.8809,
                        "arg_of_pericenter": 29.4421,
                        "mean_anomaly": 201.5801
                    }
                }
            ]
        },
        "fairings": {
            "reused": false,
            "recovery_attempt": false,
            "recovered": false,
            "ship": null
        }
    },
    "ships": [],
    "telemetry": {
        "flight_club": null
    },
    "launch_site": {
        "site_id": "ccafs_slc_40",
        "site_name": "CCAFS SLC 40",
        "site_name_long": "Cape Canaveral Air Force Station Space Launch Complex 40"
    },
    "launch_success": true,
    "links": {
        "mission_patch": "https://images2.imgbox.com/37/c4/jRAk115c_o.png",
        "mission_patch_small": "https://images2.imgbox.com/d8/6d/fnqIBEJh_o.png",
        "reddit_campaign": null,
        "reddit_launch": "http://www.reddit.com/r/spacex/comments/1ujoc0",
        "reddit_recovery": null,
        "reddit_media": null,
        "presskit": "http://www.spacex.com/sites/spacex/files/spacex_thaicom6_presskit.pdf",
        "article_link": "http://spacenews.com/38959spacex-delivers-thaicom-6-satellite-to-orbit/",
        "wikipedia": "https://en.wikipedia.org/wiki/Thaicom_6",
        "video_link": "https://www.youtube.com/watch?v=AnSNRzMEmCU",
        "youtube_id": "AnSNRzMEmCU",
        "flickr_images": [
            "https://farm9.staticflickr.com/8617/16789019815_f99a165dc5_o.jpg",
            "https://farm8.staticflickr.com/7619/16763151866_35a0a4d8e1_o.jpg",
            "https://farm9.staticflickr.com/8569/16169086873_4d8829832e_o.png"
        ]
    },
    "details": "Second GTO launch for Falcon 9. The USAF evaluated launch data from this flight as part of a separate certification program for SpaceX to qualify to fly U.S. military payloads and found that the Thaicom 6 launch had \"unacceptable fuel reserves at engine cutoff of the stage 2 second burnoff\"",
    "upcoming": false,
    "static_fire_date_utc": "2013-12-28T00:00:00.000Z",
    "static_fire_date_unix": 1388188800,
    "timeline": {
        "webcast_liftoff": 2367,
        "go_for_prop_loading": -2280,
        "rp1_loading": -2100,
        "stage1_lox_loading": -2100,
        "stage2_lox_loading": -960,
        "engine_chill": -420,
        "prelaunch_checks": -60,
        "propellant_pressurization": -60,
        "go_for_launch": -45,
        "ignition": -3,
        "liftoff": 0,
        "maxq": 60,
        "meco": 180,
        "stage_sep": 180,
        "second_stage_ignition": 1620,
        "fairing_deploy": 1860,
        "seco-1": 480,
        "second_stage_restart": 1620,
        "seco-2": 1680,
        "payload_deploy": 1860
    },
    "crew": null
},
{
    "flight_number": 14,
    "mission_name": "CRS-3",
    "mission_id": [
        "EE86F74"
    ],
    "launch_year": "2014",
    "launch_date_unix": 1397849100,
    "launch_date_utc": "2014-04-18T19:25:00.000Z",
    "launch_date_local": "2014-04-18T15:25:00-04:00",
    "is_tentative": false,
    "tentative_max_precision": "hour",
    "tbd": false,
    "launch_window": 0,
    "rocket": {
        "rocket_id": "falcon9",
        "rocket_name": "Falcon 9",
        "rocket_type": "v1.1",
        "first_stage": {
            "cores": [
                {
                    "core_serial": "B1006",
                    "flight": 1,
                    "block": 1,
                    "gridfins": false,
                    "legs": true,
                    "reused": false,
                    "land_success": true,
                    "landing_intent": true,
                    "landing_type": "Ocean",
                    "landing_vehicle": null
                }
            ]
        },
        "second_stage": {
            "block": 1,
            "payloads": [
                {
                    "payload_id": "CRS-3",
                    "norad_id": [
                        39680
                    ],
                    "cap_serial": "C105",
                    "reused": false,
                    "customers": [
                        "NASA (CRS)"
                    ],
                    "nationality": "United States",
                    "manufacturer": "SpaceX",
                    "payload_type": "Dragon 1.1",
                    "payload_mass_kg": 2296,
                    "payload_mass_lbs": 5062,
                    "orbit": "ISS",
                    "orbit_params": {
                        "reference_system": "geocentric",
                        "regime": "low-earth",
                        "longitude": null,
                        "semi_major_axis_km": 6700.881,
                        "eccentricity": 0.0013819,
                        "periapsis_km": 313.486,
                        "apoapsis_km": 332.006,
                        "inclination_deg": 51.6429,
                        "period_min": 90.982,
                        "lifespan_years": null,
                        "epoch": "2014-04-18T19:40:03.000Z",
                        "mean_motion": 15.82724147,
                        "raan": 34.0918,
                        "arg_of_pericenter": 268.425,
                        "mean_anomaly": 162.2575
                    },
                    "mass_returned_kg": 1600,
                    "mass_returned_lbs": 3500,
                    "flight_time_sec": 2592000,
                    "cargo_manifest": "https://en.wikipedia.org/wiki/SpaceX_CRS-3#Primary_payload_and_downmass"
                }
            ]
        },
        "fairings": null
    },
    "ships": [
        "AMERICANISLANDER"
    ],
    "telemetry": {
        "flight_club": null
    },
    "launch_site": {
        "site_id": "ccafs_slc_40",
        "site_name": "CCAFS SLC 40",
        "site_name_long": "Cape Canaveral Air Force Station Space Launch Complex 40"
    },
    "launch_success": true,
    "links": {
        "mission_patch": "https://images2.imgbox.com/ff/81/EOWojaSj_o.png",
        "mission_patch_small": "https://images2.imgbox.com/a0/cb/s1h2RuR0_o.png",
        "reddit_campaign": null,
        "reddit_launch": "http://www.reddit.com/r/spacex/comments/22zo8c",
        "reddit_recovery": null,
        "reddit_media": null,
        "presskit": "http://www.spacex.com/sites/spacex/files/spacexcrs-3_presskit_042014.pdf",
        "article_link": "https://newatlas.com/crs-3-launch-spacex/31671/",
        "wikipedia": "https://en.wikipedia.org/wiki/SpaceX_CRS-3",
        "video_link": "https://www.youtube.com/watch?v=Od-lON4bTyQ",
        "youtube_id": "Od-lON4bTyQ",
        "flickr_images": [
            "https://farm8.staticflickr.com/7615/16670240949_8d43db0e36_o.jpg",
            "https://farm9.staticflickr.com/8597/16856369125_e97cd30ef7_o.jpg",
            "https://farm8.staticflickr.com/7586/16166732954_9338dc859c_o.jpg",
            "https://farm8.staticflickr.com/7603/16855223522_462da54e84_o.jpg",
            "https://farm8.staticflickr.com/7618/16234010894_e1210ec300_o.jpg",
            "https://farm8.staticflickr.com/7617/16855338881_69542a2fa9_o.jpg"
        ]
    },
    "details": "Following second-stage separation, SpaceX conducted a second controlled-descent test of the discarded booster vehicle and achieved the first successful controlled ocean touchdown of a liquid-rocket-engine orbital booster. Following touchdown the first stage tipped over as expected and was destroyed. This was the first Falcon 9 booster to fly with extensible landing legs and the first Dragon mission with the Falcon 9 v1.1 launch vehicle.",
    "upcoming": false,
    "static_fire_date_utc": "2014-03-08T00:00:00.000Z",
    "static_fire_date_unix": 1394236800,
    "timeline": {
        "webcast_liftoff": 2400,
        "go_for_prop_loading": -2280,
        "rp1_loading": -2100,
        "stage1_lox_loading": -2100,
        "stage2_lox_loading": -960,
        "engine_chill": -420,
        "prelaunch_checks": -60,
        "propellant_pressurization": -60,
        "go_for_launch": -45,
        "ignition": -3,
        "liftoff": 0,
        "maxq": 60,
        "meco": 180,
        "stage_sep": 180,
        "second_stage_ignition": 180,
        "seco-1": 540,
        "dragon_separation": 600,
        "dragon_solar_deploy": 720,
        "dragon_bay_door_deploy": 8400
    },
    "crew": null
},
{
    "flight_number": 15,
    "mission_name": "OG-2 Mission 1",
    "mission_id": [
        "CE91D46"
    ],
    "launch_year": "2014",
    "launch_date_unix": 1405350900,
    "launch_date_utc": "2014-07-14T15:15:00.000Z",
    "launch_date_local": "2014-07-14T11:15:00-04:00",
    "is_tentative": false,
    "tentative_max_precision": "hour",
    "tbd": false,
    "launch_window": 0,
    "rocket": {
        "rocket_id": "falcon9",
        "rocket_name": "Falcon 9",
        "rocket_type": "v1.1",
        "first_stage": {
            "cores": [
                {
                    "core_serial": "B1007",
                    "flight": 1,
                    "block": 1,
                    "gridfins": false,
                    "legs": true,
                    "reused": false,
                    "land_success": true,
                    "landing_intent": true,
                    "landing_type": "Ocean",
                    "landing_vehicle": null
                }
            ]
        },
        "second_stage": {
            "block": 1,
            "payloads": [
                {
                    "payload_id": "Orbcomm-OG2-M1",
                    "norad_id": [
                        38847
                    ],
                    "reused": false,
                    "customers": [
                        "Orbcomm"
                    ],
                    "nationality": "United States",
                    "manufacturer": "Boeing",
                    "payload_type": "Satellite",
                    "payload_mass_kg": 1316,
                    "payload_mass_lbs": 2901,
                    "orbit": "LEO",
                    "orbit_params": {
                        "reference_system": "geocentric",
                        "regime": "low-earth",
                        "longitude": null,
                        "semi_major_axis_km": 6641.01,
                        "eccentricity": 0.0090712,
                        "periapsis_km": 202.633,
                        "apoapsis_km": 323.117,
                        "inclination_deg": 51.6528,
                        "period_min": 89.765,
                        "lifespan_years": 5,
                        "epoch": "2012-10-08T03:42:59.000Z",
                        "mean_motion": 16.04175555,
                        "raan": 280.7278,
                        "arg_of_pericenter": 54.0639,
                        "mean_anomaly": 355.0595
                    }
                }
            ]
        },
        "fairings": {
            "reused": false,
            "recovery_attempt": false,
            "recovered": false,
            "ship": null
        }
    },
    "ships": [],
    "telemetry": {
        "flight_club": null
    },
    "launch_site": {
        "site_id": "ccafs_slc_40",
        "site_name": "CCAFS SLC 40",
        "site_name_long": "Cape Canaveral Air Force Station Space Launch Complex 40"
    },
    "launch_success": true,
    "links": {
        "mission_patch": "https://images2.imgbox.com/4d/ed/CHXoRaSP_o.png",
        "mission_patch_small": "https://images2.imgbox.com/a7/b4/bcMrHMey_o.png",
        "reddit_campaign": null,
        "reddit_launch": "http://www.reddit.com/r/spacex/comments/2aany2",
        "reddit_recovery": null,
        "reddit_media": null,
        "presskit": "http://www.spacex.com/sites/spacex/files/spacex_orbcomm_presskit_final.pdf",
        "article_link": "https://www.orbcomm.com/en/networks/satellite/orbcomm-og2",
        "wikipedia": "https://en.wikipedia.org/wiki/Falcon_9_flight_10",
        "video_link": "https://www.youtube.com/watch?v=lbHnSu-DLR4",
        "youtube_id": "lbHnSu-DLR4",
        "flickr_images": [
            "https://farm8.staticflickr.com/7585/16602893909_1181317089_o.jpg",
            "https://farm9.staticflickr.com/8747/16581738577_83e0690136_o.png",
            "https://farm8.staticflickr.com/7285/16581736047_6fd536ab11_o.jpg",
            "https://farm8.staticflickr.com/7597/16789021675_35f0148f78_o.jpg",
            "https://farm8.staticflickr.com/7631/16236321533_829ae07b42_o.jpg",
            "https://farm9.staticflickr.com/8726/16830422056_26c2265bbc_o.jpg",
            "https://farm9.staticflickr.com/8591/16670149079_33d6cc3631_o.jpg"
        ]
    },
    "details": "Total payload mass was 1,316 kg (2,901 lb) : 6 satellites weighing 172 kg each, plus two 142-kg mass simulators. This was the second Falcon 9 booster equipped with landing legs. Following second-stage separation, SpaceX conducted a controlled-descent test of the first stage, which successfully decelerated from hypersonic velocity in the upper atmosphere, made reentry and landing burns, deployed its legs and touched down on the ocean surface. As with the previous mission, the first stage then tipped over as expected and was not recovered.",
    "upcoming": false,
    "static_fire_date_utc": "2015-12-19T04:57:00.000Z",
    "static_fire_date_unix": 1450501020,
    "timeline": {
        "webcast_liftoff": 920,
        "go_for_prop_loading": -2280,
        "rp1_loading": -2100,
        "stage1_lox_loading": -2100,
        "stage2_lox_loading": -960,
        "engine_chill": -420,
        "prelaunch_checks": -60,
        "propellant_pressurization": -60,
        "go_for_launch": -45,
        "ignition": -3,
        "liftoff": 0,
        "meco": 180,
        "stage_sep": 180,
        "second_stage_ignition": 180,
        "fairing_deploy": 180,
        "seco-1": 360,
        "payload_deploy": 900
    },
    "crew": null
},
{
    "flight_number": 16,
    "mission_name": "AsiaSat 8",
    "mission_id": [
        "593B499"
    ],
    "launch_year": "2014",
    "launch_date_unix": 1407225600,
    "launch_date_utc": "2014-08-05T08:00:00.000Z",
    "launch_date_local": "2014-08-05T04:00:00-04:00",
    "is_tentative": false,
    "tentative_max_precision": "hour",
    "tbd": false,
    "launch_window": 0,
    "rocket": {
        "rocket_id": "falcon9",
        "rocket_name": "Falcon 9",
        "rocket_type": "v1.1",
        "first_stage": {
            "cores": [
                {
                    "core_serial": "B1008",
                    "flight": 1,
                    "block": 1,
                    "gridfins": false,
                    "legs": false,
                    "reused": false,
                    "land_success": null,
                    "landing_intent": false,
                    "landing_type": null,
                    "landing_vehicle": null
                }
            ]
        },
        "second_stage": {
            "block": 1,
            "payloads": [
                {
                    "payload_id": "AsiaSat 8",
                    "norad_id": [
                        40107
                    ],
                    "reused": false,
                    "customers": [
                        "AsiaSat"
                    ],
                    "nationality": "Hong Kong",
                    "manufacturer": "SSL",
                    "payload_type": "Satellite",
                    "payload_mass_kg": 4535,
                    "payload_mass_lbs": 9998,
                    "orbit": "GTO",
                    "orbit_params": {
                        "reference_system": "geocentric",
                        "regime": "geostationary",
                        "longitude": 105.5,
                        "semi_major_axis_km": 42164.756,
                        "eccentricity": 0.0002277,
                        "periapsis_km": 35777.02,
                        "apoapsis_km": 35796.222,
                        "inclination_deg": 0.0612,
                        "period_min": 1436.098,
                        "lifespan_years": 15,
                        "epoch": "2020-09-08T19:44:37.000Z",
                        "mean_motion": 1.00271696,
                        "raan": 273.3811,
                        "arg_of_pericenter": 229.5521,
                        "mean_anomaly": 137.6945
                    }
                }
            ]
        },
        "fairings": {
            "reused": false,
            "recovery_attempt": false,
            "recovered": false,
            "ship": null
        }
    },
    "ships": [],
    "telemetry": {
        "flight_club": null
    },
    "launch_site": {
        "site_id": "ccafs_slc_40",
        "site_name": "CCAFS SLC 40",
        "site_name_long": "Cape Canaveral Air Force Station Space Launch Complex 40"
    },
    "launch_success": true,
    "links": {
        "mission_patch": "https://images2.imgbox.com/5a/ab/8IzvDOzc_o.png",
        "mission_patch_small": "https://images2.imgbox.com/bf/12/oSP2EwNz_o.png",
        "reddit_campaign": null,
        "reddit_launch": "http://www.reddit.com/r/spacex/comments/2fenrv",
        "reddit_recovery": null,
        "reddit_media": null,
        "presskit": "https://spaceflightnow.com/falcon9/011/presskit.pdf",
        "article_link": "http://spacenews.com/41497spacex-launches-first-of-two-satellites-for-asiasat/",
        "wikipedia": "https://en.wikipedia.org/wiki/AsiaSat_8",
        "video_link": "https://www.youtube.com/watch?v=essrkMGlw5s",
        "youtube_id": "essrkMGlw5s",
        "flickr_images": [
            "https://farm9.staticflickr.com/8638/16855192031_962f7b1113_o.jpg",
            "https://farm8.staticflickr.com/7603/16648925347_769a6009c7_o.jpg",
            "https://farm9.staticflickr.com/8687/16789027675_cde1bd098a_o.jpg",
            "https://farm8.staticflickr.com/7629/16668638138_7acf13cfb5_o.jpg",
            "https://farm8.staticflickr.com/7281/16668845950_7680146525_o.jpg",
            "https://farm8.staticflickr.com/7626/16233865484_10d9925b5d_o.jpg"
        ]
    },
    "details": null,
    "upcoming": false,
    "static_fire_date_utc": "2014-07-31T23:35:15.000Z",
    "static_fire_date_unix": 1406849715,
    "timeline": {
        "webcast_liftoff": 6,
        "go_for_prop_loading": -2280,
        "rp1_loading": -2100,
        "stage1_lox_loading": -2100,
        "stage2_lox_loading": -960,
        "engine_chill": -420,
        "prelaunch_checks": -60,
        "propellant_pressurization": -60,
        "go_for_launch": -45,
        "ignition": -3,
        "liftoff": 0,
        "meco": 180,
        "stage_sep": 180,
        "second_stage_ignition": 1560,
        "fairing_deploy": 180,
        "seco-1": 540,
        "second_stage_restart": 1560,
        "seco-2": 1620,
        "payload_deploy": 1920
    },
    "crew": null
}
  ]
ngOnInit() {

  
}

}

