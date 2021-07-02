    INSERT INTO users (id, first_name, last_name, username, email, password, is_admin)
    VALUES (
        1,
        'Billy',
        'Bob',
        'BillyBob',
        'BillyBob@gmail.com',
        'password',
        false
    );
    
    INSERT INTO exercise_items (user_id, name, duration, intensity) 
    VALUES (
        1,
        'push ups',
        60,
        5
    ), (
        1,
        'sit ups',
        100,
        3
    );