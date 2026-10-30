CREATE TABLE garments (
  id TEXT PRIMARY KEY, user_id TEXT NOT NULL, name TEXT NOT NULL, category TEXT NOT NULL,
  primary_color TEXT, primary_color_hex TEXT, secondary_colors TEXT, brand TEXT, size TEXT, notes TEXT,
  hash TEXT, status TEXT, bg_status TEXT, bg_error TEXT, logo_status TEXT, logos TEXT,
  original_image_key TEXT NOT NULL, processed_image_key TEXT, thumbnail_image_key TEXT,
  created_at INTEGER NOT NULL, updated_at INTEGER NOT NULL
);
CREATE INDEX idx_garments_user_created ON garments(user_id, created_at DESC, id);
CREATE INDEX idx_garments_user_hash ON garments(user_id, hash);
CREATE TABLE trips (
  id TEXT PRIMARY KEY, user_id TEXT NOT NULL, name TEXT NOT NULL, destination TEXT, start_date TEXT, end_date TEXT, notes TEXT,
  created_at INTEGER NOT NULL, updated_at INTEGER NOT NULL
);
CREATE INDEX idx_trips_user ON trips(user_id, created_at DESC);
CREATE TABLE trip_items (
  trip_id TEXT NOT NULL REFERENCES trips(id) ON DELETE CASCADE,
  garment_id TEXT NOT NULL REFERENCES garments(id) ON DELETE CASCADE,
  packed INTEGER NOT NULL DEFAULT 0, PRIMARY KEY (trip_id, garment_id)
);
