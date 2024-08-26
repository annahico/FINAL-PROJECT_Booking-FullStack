CREATE TABLE authors (
    id INT AUTO_INCREMENT PRIMARY KEY,
    email VARCHAR(50) UNIQUE NOT NULL,
    fullName VARCHAR(100) NOT NULL,
    authorImageUrl TEXT NOT NULL,
    bio TEXT NOT NULL
);

INSERT INTO
    authors (
        id,
        email,
        fullName,
        authorImageUrl,
        bio
    )
VALUES (
        1,
        'tolkien@mail.com',
        'John Ronald Reuel Tolkien',
        'https://stateless-fueradefoco.storage.googleapis.com/wp-content/uploads/2022/01/30050115/j-rr-tolkein.jpg',
        'J.R.R.Tolkien is one of the greatest authors in the history'
    ),
    (
        2,
        'Rowling@mail.com',
        'Joanne Rowling',
        'https://stateless-fueradefoco.storage.googleapis.com/wp-content/uploads/2022/01/30050115/j-rr-tolkein.jpg',
        'J.K.Rowling created the boy who live, the most famous character in history, Harry Potter'
    );