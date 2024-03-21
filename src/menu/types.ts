export interface Beatmap {
    BeatmapId: number;
    ParentSetId: number;
    DiffName: string;
    FileMD5: string;
    Mode: number;
    BPM: number;
    AR: number;
    OD: number;
    CS: number;
    HP: number;
    TotalLength: number;
    HitLength: number;
    Playcount: number;
    Passcount: number;
    MaxCombo: number;
    DifficultyRating: number;
    OsuFile: string;
    DownloadPath: string;
}

export interface BeatmapSet {
    SetId: number;
    ChildrenBeatmaps: Beatmap[];
    RankedStatus: number;
    ApprovedDate: string;
    LastUpdate: string;
    LastChecked: string;
    Artist: string;
    Artist_Unicode: string;
    Title: string;
    Title_Unicode: string;
    Creator: string;
    Source: string;
    Tags: string;
    HasVideo: boolean;
    Genre: number;
    Language: number;
    Favourites: number;
    Disabled: boolean;
}