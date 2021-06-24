CREATE TABLE users (
    id          SERIAL PRIMARY KEY,
    password    TEXT NOT NULL,
    email       TEXT NOT NULL,
    is_admin    BOOLEAN NOT NULL DEFAULT FALSE,
    created_at  TIMESTAMP NOT NULL DEFAULT NOW()
);

-- CREATE TABLE activity_logs (
--     id          SERIAL PRIMARY KEY,
--     user_id     INTEGER NOT NULL,
--     created_at  TIMESTAMP NOT NULL DEFAULT NOW(),
--     FOREIGN KEY (user_id) REFERENCES users(id) ON DELETE CASCADE
-- );

-- CREATE TABLE activity_details (
--     activity_log_id INTEGER NOT NULL,
--     item_category   TEXT NOT NULL,
--     item_id         INTEGER NOT NULL
--     PRIMARY KEY (activity_log_id, item_category, item_id),
--     FOREIGN KEY (activity_log_id) REFERENCES activity_logs(id) ON DELETE CASCADE
--     FOREIGN KEY (item_id) REFERENCES 
-- );

CREATE TABLE exercise_items (
    id                  SERIAL PRIMARY KEY,
    user_id             INTEGER NOT NULL,
    name                TEXT NOT NULL,
    duration            INTEGER NOT NULL,
    intensity           INTEGER NOT NULL DEFAULT 1 CHECK (intensity BETWEEN 1 AND 10),
    FOREIGN KEY (user_id) REFERENCES users(id) ON DELETE CASCADE
);

CREATE TABLE sleep_items (
    id                  SERIAL PRIMARY KEY,
    user_id             INTEGER NOT NULL,
    date                DATE NOT NULL,      --'yyyy-mm-dd' 
    start_time          TIME (0) NOT NULL,  --'hh:mm:ss'   hh: 0-23  mm: 0-59  ss: 0-59
    end_time            TIME (0) NOT NULL,
    FOREIGN KEY (user_id) REFERENCES users(id) ON DELETE CASCADE
);

CREATE TABLE nutritional_items (
    id                  SERIAL PRIMARY KEY,
    user_id             INTEGER NOT NULL,
    food_name           TEXT NOT NULL,
    calories            INTEGER NOT NULL,
    quantity            INTEGER NOT NULL DEFAULT 1,
    food_category       TEXT,
    FOREIGN KEY (user_id) REFERENCES users(id) ON DELETE CASCADE
);