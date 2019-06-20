SELECT first_name, email, user_id, balance FROM users
JOIN balances ON balances.balance_id = users.user_id
WHERE user_id = ${id};