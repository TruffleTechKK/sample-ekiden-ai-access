
export interface WhoopUser {
  user_id: number;
  email: string;
  first_name: string;
  last_name: string;
}

export interface WhoopCycle {
  id: number;
  user_id: number;
  created_at: string;
  updated_at: string;
  start: string;
  end: string;
  timezone_offset: string;
  score_state: string;
  score: {
    strain: number;
    kilojoule: number;
    average_heart_rate: number;
    max_heart_rate: number;
  };
}

export interface WhoopSleep {
  id: string;
  v1_id: number;
  user_id: number;
  created_at: string;
  updated_at: string;
  start: string;
  end: string;
  timezone_offset: string;
  nap: boolean;
  score_state: string;
  score: {
    stage_summary: {
      total_in_bed_time_milli: number; // Example: 30272735
      total_awake_time_milli: number; // Example: 1403507
      total_no_data_time_milli: number; // Example: 0
      total_light_sleep_time_milli: number; // Example: 14905851
      total_slow_wave_sleep_time_milli: number; // Example: 6630370
      total_rem_sleep_time_milli: number; // Example: 5879573
      sleep_cycle_count: number; // Example: 3
      disturbance_count: number; // Example: 12
    };
    sleep_needed: {
      baseline_milli: number; // Example: 27395716
      need_from_sleep_debt_milli: number; // Example: 352230
      need_from_recent_strain_milli: number; // Example: 208595
      need_from_recent_nap_milli: number; // Example: -12312
    };
    respiratory_rate: number; // Example: 16.11328125
    sleep_performance_percentage: number; // Example: 98
    sleep_consistency_percentage: number; // Example: 90
    sleep_efficiency_percentage: number; // Example: 91.69533848
  };
}

export interface WhoopWorkout {
  id: string;
  v1_id: number;
  user_id: number;
  created_at: string;
  updated_at: string;
  start: string;
  end: string;
  timezone_offset: string;
  sport_name: string;
  score_state: string;
  score: {
    strain: number;
    average_heart_rate: number;
    max_heart_rate: number;
    kilojoule: number;
    percent_recorded: number;
    distance_meter: number;
    altitude_gain_meter: number;
    altitude_change_meter: number;
    zone_durations: {
      zone_zero_milli: number;
      zone_one_milli: number;
      zone_two_milli: number;
      zone_three_milli: number;
      zone_four_milli: number;
      zone_five_milli: number;
    };
  };
  sport_id: number;
}
