insert into balances (balance_user_id, balance) values (${user_id}, 0) returning *;