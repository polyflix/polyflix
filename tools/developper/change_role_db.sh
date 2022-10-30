#!/bin/bash

db=usermanagement
user=root
host=127.0.0.1
port=5433

echo "This script allows you to change the role of a user"

echo -n "User's email: "
read email

echo -n "User's new role (Member, Contributor, Administrator): "
read role

sql="UPDATE users_roles SET role_id = (select roles.id as role_id from roles where name = '${role}') WHERE user_id = (select id from users where email = '${email}');"
echo + $sql

echo "Connecting to database ${db} on ${host}:${port} with user ${user}... (help: password is probably 'root')"
psql -U "${user}" -d "${db}" -h "${host}" -p "${port}" -c "${sql}"