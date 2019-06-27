DELETE FROM balances WHERE balance_user_id = ${user_id};
delete from user_logins where user_id = ${user_id};
delete from users where user_id = ${user_id};