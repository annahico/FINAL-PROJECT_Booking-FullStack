-- Create the 'books' table
CREATE TABLE books (
    id INT AUTO_INCREMENT PRIMARY KEY, -- Primary key with auto-increment
    title VARCHAR(100) NOT NULL, -- Title of the book
    info TEXT NOT NULL, -- Description or information about the book
    imageUrl TEXT NOT NULL, -- URL of the book's cover image
    authorId INT NOT NULL, -- Foreign key to 'authors' table
    -- Define foreign key constraint
    FOREIGN KEY (authorId) REFERENCES authors (id)
);

-- Insert initial data into 'books' table
INSERT INTO
    books (
        title,
        info,
        imageUrl,
        authorId
    )
VALUES (
        'MongoDB in Action, 2nd Edition',
        'This book illustrates MongoDB, including examples and practice exams.',
        'https://itbook.store/img/books/9781617291609.png',
        2
    ),
    (
        'A Complete Guide to Dealing with Big Data Using MongoDB',
        'This book covers MongoDB in the context of big data, including examples and practice exams.',
        'https://itbook.store/img/books/9781484211830.png',
        1
    ),
    (
        'Practical MongoDB',
        'This book focuses on problem-solving with MongoDB and includes practice exams.',
        'https://itbook.store/img/books/9781484206485.png',
        2
    );