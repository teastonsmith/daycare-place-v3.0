select * from users u
join user_logins ul on u.user_id = ul.user_id
join balances b on b.balance_user_id = u.user_id
where ul.username = ${username};