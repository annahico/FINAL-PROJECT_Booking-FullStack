-- Create the 'authors' table
CREATE TABLE authors (
    id INT AUTO_INCREMENT PRIMARY KEY, -- Primary key with auto-increment
    email VARCHAR(50) UNIQUE NOT NULL, -- Unique email address
    fullName VARCHAR(100) NOT NULL, -- Author's full name
    authorImageUrl TEXT NOT NULL, -- URL of the author's image
    bio TEXT NOT NULL -- Short biography of the author
);

-- Insert initial data into 'authors' table
INSERT INTO
    authors (
        email,
        fullName,
        authorImageUrl,
        bio
    )
VALUES (
        'tolkien@mail.com',
        'John Ronald Reuel Tolkien',
        'https://stateless-fueradefoco.storage.googleapis.com/wp-content/uploads/2022/01/30050115/j-rr-tolkein.jpg',
        'J.R.R.Tolkien is one of the greatest authors in the history'
    ),
    (
        'rowling@mail.com',
        'Joanne Rowling',
        'https://stateless-fueradefoco.storage.googleapis.com/wp-content/uploads/2022/01/30050115/j-rr-tolkein.jpg',
        'J.K.Rowling created the boy who lived, the most famous character in history, Harry Potter'
    );