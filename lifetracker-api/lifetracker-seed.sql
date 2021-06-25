    INSERT INTO users (id, username, email, password)
    VAlues (
        1,
        'BillyBob',
        'BillyBob@gmail.com',
        'password'
    ), (
        2,
        'PhillSteve',
        'PhillSteve@gmail.com',
        'password'
    ), (
        3,
        'Krillin',
        'Krillin@gmail.com',
        'password'
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
    ), (
        2,
        'push ups',
        42,
        1
    ), (
        2,
        'sit ups',
        200,
        10
    ), (
        3,
        'squats',
        5,
        9
    );