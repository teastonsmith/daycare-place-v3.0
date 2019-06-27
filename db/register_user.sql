INSERT INTO users(first_name, last_name, email)
VALUES (${first_name}, ${last_name}, ${email}) returning *;

-- INSERT INTO user_logins(username, password)
-- VALUES(${username}, ${password})
-- RETURNING username, login_id;