export class SpaceXLaunch{

    flight_number: number; 
    mission_name: string; 
    mission_id: string[]; 
    launch_year: string; 
    launch_success: boolean;
    land_success:boolean
    mission_patch: string;
    mission_patch_small: string;
    links:any[];
    static_fire_date_unix:number;
    // first_stage:any;
    // cores:any;
    reddit_campaign: null;
    reddit_launch: null;
    reddit_recovery: null;
    reddit_media: null;
    presskit: null;
    article_link: string;
    wikipedia: string;
    video_link: string;
    youtube_id: string;
    flickr_images: undefined[];
  }