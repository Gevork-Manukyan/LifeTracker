CREATE TABLE users (
    id          SERIAL PRIMARY KEY,
    first_name  TEXT NOT NULL,
    last_name   TEXT NOT NULL,
    username    TEXT NOT NULL UNIQUE,
    email       TEXT NOT NULL UNIQUE CHECK (POSITION('@' IN email) > 1),
    password    TEXT NOT NULL,
    is_admin    BOOLEAN NOT NULL DEFAULT FALSE,
    created_at  TIMESTAMP NOT NULL DEFAULT NOW()
);

CREATE TABLE exercise_items (
    id                  SERIAL PRIMARY KEY,
    user_id             INTEGER NOT NULL,
    name                TEXT NOT NULL,
    duration            INTEGER NOT NULL,
    intensity           INTEGER NOT NULL CHECK (intensity BETWEEN 0 AND 10),
    FOREIGN KEY (user_id) REFERENCES users(id) ON DELETE CASCADE
);

CREATE TABLE sleep_items (
    id                  SERIAL PRIMARY KEY,
    user_id             INTEGER NOT NULL,
    date                DATE NOT NULL,      --'yyyy-mm-dd' 
    start_time          TIME (0) NOT NULL,  --'hh:mm:ss'   hh: 0-23  mm: 0-59  ss: 0-59
    end_time            TIME (0) NOT NULL,
    hours               INTEGER,
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