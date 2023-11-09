-- Mock data for DB
\c wheels_dev;


INSERT INTO wheels (name, manufacturer, type, hybrid, time, is_favorite)
VALUES
('Equinox', 'Chevrolet','SUV', 'no', '2023', yes),
('Prius', 'Toyota','Sedan', 'yes', '2022', true),
('Model Y', 'Tesla','Sedan', 'no' '2022', no),
('Ninja', 'Kawasaki','Motorcycle', 'no', '2019', yes);

INSERT INTO wheels (wheels_id, reviewer, title, content, rating)
VALUES
('1', 'Eddie', 'My Favorite', 'This vehicle is cool', 4),
('2', 'Eddie', 'My Favorite', 'This vehicle is fuel efficient', 3),
('3', 'Evan', 'My Least Favorite', 'This vehicle is stylish and can go fast, does not charge fast', 5),
('2', 'Juliana', 'I Love this car', 'I finally learned how to properly drive this car', 5),
('2', 'David', 'Cool car', 'But I got way into adding decorative pillows everywhere', 1),
('3', 'Mike', 'Nice design', 'I got some awesome recommendations for upgrades', 3),
('1', 'Alison', 'A lifesaver!','Helped me drive thru some rough terrain and bad weather', 4),
('4', 'Hannah', 'Insert Confetti Emoji Here', 'I survived 6 hours at the DMV!', 4),
('4', 'Gabi', 'My Friend Hannah', 'Gets a discount if I leave a positive review, so here it is', 5);
