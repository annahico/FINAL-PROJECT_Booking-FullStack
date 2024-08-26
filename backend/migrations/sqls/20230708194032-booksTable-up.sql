create table books( 

id int primary key not null AUTO_INCREMENT,
title varchar(100) not null,
info text not null,
imageUrl text not null,
authorId int not null,

foreign key (authorId) references authors (id)

);

insert into
    books (
        title,
        info,
        imageUrl,
        authorId
    )
values (
        "MongoDB in Action, 2nd Edition",
        "This Book illustrates Mongodb including examples,practice exams",
        "https://itbook.store/img/books/9781617291609.png",
        2
    );

insert into
    books (
        title,
        info,
        imageUrl,
        authorId
    )
values (
        "A complete guide to dealing with Big Data using MongoDB",
        "This Book illustrates Mongodb in Big data field including examples,practice exams",
        "https://itbook.store/img/books/9781484211830.png",
        1
    );

insert into
    books (
        title,
        info,
        imageUrl,
        authorId
    )
values (
        "Practical MongoDB",
        "This book is concerned with problem solving with mongodb,and practice exams",
        "https://itbook.store/img/books/9781484206485.png",
        2
    );