create schema todo;

create table todo.users (
    id serial primary key,
    username text not null,
    email text not null,
    password text not null,
    created_at timestamp default now()
);

create table todo.tasks (
    id serial primary key,
    user_id integer not null,
    title text not null,
    description text not null,
    created_at timestamp default now(),
    foreign key (user_id) references todo.users (id)
);