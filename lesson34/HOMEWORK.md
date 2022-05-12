Homework 34
============
	Протипизировать данные 
```javascript

//ts
https://www.typescriptlang.org/play?#code/AQSwdgLgpgTgZgQwMZWAZQgVwCYE8DeAsAFDBlkjYBcwYmAtgEawA0J5ZiSmANhLjQwxwAcxbB2HAM6ZGAKyhIIUwRGFgRAbQC6bUhyQB7TJAw4okFbQbMY7AL7tw0eMlQBZQwDcQUIvvJKGjomVklyCBAIHihVdTFwslwoBBhgmzCAshgoGIQpKGp0NVE9DmAYE0j6WOL48UTgEQscuNEdMo5sEBylQzS60saAd2EXNo1O8mQIfqshdt1GgAceQwgJhKzgIyqYAUHJlcMpccOt8pB6bEYAJQRIjXTQmCmKa8YANXWoKxDbN7AfjLWoLI7bRiGAAeAHk4HAQChNoDljBDNhMEoQIYwJsHCQCcQjGBTsAuLxIr9VDhcDpgABeYCaRL+ACQrKCwAAjHp2eS+AcAEQACRAp36uGA2Cgy1SEBqkEFvNZMnkimUNE0goAKgALVAAdX6PGwwFF4v2SuAIrFs32wEMcGAt0MNUFS2I7N2piw0ssNAALAGSKz7A1PWyOUUAEzK-n8GiCgAiMrlCogDqdACFsWsRLglSGVbIFEorFrGLnDPmrYKkPr6LbLR6vcYfeZ-cAAKwABhDYZDkc5AGY48gKUKAGLjgWZ4DuB4Nh6IqSFz3FtVlzWC+iLqC7yJIVfiQXNV1QNQFk8lEQ48+X93K70QMx+jXAADs0f7vKHRQDY7cAKibTkB-BzimUggCIYBruyqqlu+WqYCAtaYFCtYiDACDLLqiJSr80GwS2rLPq+FjvsOH79iQ2gANyEiQxKkvQ3i+Cong+FAdKMsy67spG7KshQRQ8kWQlkJE0S1IKWY8MgADWwAGpQhjDHBQnCcAySpDQ0Y9tGYn8ey2S5CkBRFIKPYAJzAAAUrwwD6YZGkSRUVRXDJXLDgGwCNrBypuc0YCtEygoAIJYjitZoEgIAALSTqhJ7hdgXgUZgOSPuJJlSj06r9ImADCDyoGgur9NECBgNgrm5aMUSwImACiwhIMAAAKKQwFIOLiHZyDoPWCBQPCrDAAAcoUwBZhYvUBTlWkzHM26xakMQQBmdmGLq1VSPNtaTmsORgCgnWYCIuq1kmCA+KawqpJCmXZcZWmrOsiYTQ8+S7c6rrVY6TrEnAaKWEC+pSqkCmwMAsowMoc76jAwAxNgzTI8M+pgMACCQxosDGFIOw4lIyw9MgkrDFEupAuxQKGMASOw-kGapGKvwAHR1Vpz77ImACqYCNaaGClcei1kMsJxnIKuqbcsKgAPSK-QHM1N0CDxQgu4AF44hzRj0IrVwIM0UiK+4FufF2WYTXItz0BNSYAJJdu4cjuBA7j0JOuoAFogD2PYAJo60gwwADIGs7AZ+wA4s7XsJ9G7vOz2E3RgAisOwf0M7wwABoKc1uBF5OACOSBx9KmcF58uDuNqClQnb-O4BNmcAAKdxzAD6nxcr3aAF8OQcc3IywiNz7w3PcjwiDQABsHPWYFuVXDc3zQFYXKGdZw6xhLQK4CCiasVx3OspCsLwoiMkACTeQAHCwBkfiww6L1y0+w2iGJRbia0C4YDpR4MUHA2JxbbHIAOYygkhKckPq9SSUQYiJgejAe0HV1guBxjVcGqAUyLh4JKB6PA1jDCsB1OUTkf46QGPpLkRlNJaRyHkCyiYuRdnso5Rh3816sI8jUTho8-LgB-sFUKWpUrpUgJlKA11sK7kOtVCA+QCwkTct0XodpEw3TusAYOYsf4NRlhgKA6VgAAGk1jpSkP1DmViOZ-WGDwUQP9lo9W3DdIWuRnQIGwEgNxY1azNXoLuZSDwDonluJgEE8NgBx3UBAF6LDWTvQ2NaDB+xxAujAOIaq91YCNhxKgAoqR6xkn6MAb4Jp9yVQAORExyLucAogzT9CQJUKEvxQDYwgPqHowBRpwEqvTAipw0SSgGYQqGwAI79FNPkAhZJwAIDAYwB40kKim16TiHGGZhTVmGHKKQXMBFkF5kKQWwtrGiGwK6cQNzoAizUdvH+UtThNWtHLCACsqDK1VurEAmttYID1mAA2rpja7jNhbK2Nt3Bx0+PQdwBoJogHcEmBSEBg5yEzj2dwgdCXRyhBHJu6doz8wgBnP2PBg7amwApDOzsdZOwmjwIuJcy6V2rlAWu9cYRJmal2CaOtmrDhhNqZqPd+6D2HqPHs49J5riPhvO4y4njACfhzZhmkZ5fB+FYD81kexUXfotVkwIZLn18D-a+cIERImtPfYcT8eQBhsh-LkPYPl-0xJEHE6CoC4GwAgSUSUeD0HsfONiGhOqIiwDkYARVXSyjALgcQBpUhgBhlmNEZzXKwPooSIAA

1. 
const faculties = [
    {
		id: 1,
		faculty: "History department",
		subjects: ["The World History", "History of Rome"]
		countStudents: 44
	}, 
	{
		id: 2,
		faculty: "Department of Biology",
		subjects: ["biology", "chemistry"],
		countStudents: 50
	},
	{
		id: 3,
		faculty: "Faculty of Mathematics",
		subjects: ["mathematics", "geometry", "trigonometry"],
		countStudents: 72
	},
	{
		id: 4,
		faculty: "Faculty of Design",
		subjects: ["ui", "ux", "graphic design"],
		countStudents: 37
	}
];

2.
const movies = [
				{
						id: 1
						title: "Black Widow",
					  year: 2021,
					  released: "09 Jul 2021",
					  runtime: "134 min",
					  genre: ["Action", "Sci-Fi", "Adventure"],
						director: "Cate Shortland",
					  writer: "Eric Pearson, Jac Schaeffer, Ned Benson",
					  actors: ["Scarlett Johansson", "Florence Pugh", "David Harbour"],
					  plot: "Natasha Romanoff confronts the darker parts of her ledger when a dangerous conspiracy with ties to her past arises.",
					  country: "United States",
					  poster: "https://m.media-amazon.com/images/M/MV5BNjRmNDI5MjMtMmFhZi00YzcwLWI4ZGItMGI2MjI0N2Q3YmIwXkEyXkFqcGdeQXVyMTkxNjUyNQ@@._V1_SX300.jpg",
					  imdbRating: 6.9,
					  imdbVotes: 121932,
					  type: "movie",
						boxOffice: "$138,027,361",
					  production: "Marvel Studios",
        },
				{
						id: 2,
					  title: "Harry Potter and the Deathly Hallows: Part 2",
					  year: 2011,
					  released: "15 Jul 2011",
					  runtime: "130 min",
					  genre: ["Adventure", "Drama", "Fantasy"],
					  director: "David Yates",
					  writer: "Steve Kloves, J.K. Rowling",
					  actors: ["Daniel Radcliffe", "Emma Watson", "Rupert Grint"],
						plot: "Harry, Ron, and Hermione search for Voldemort's remaining Horcruxes in their effort to destroy the Dark Lord as the final battle rages on at Hogwarts.",
					  country: "United Kingdom, United States",
					  poster: "https://m.media-amazon.com/images/M/MV5BMGVmMWNiMDktYjQ0Mi00MWIxLTk0N2UtN2ZlYTdkN2IzNDNlXkEyXkFqcGdeQXVyODE5NzE3OTE@._V1_SX300.jpg",

					  imdbRating: 8.1,
					  imdbVotes: 790377,
						type: "movie",
					  boxOffice: "$381,409,310",
					  production: "Heyday Films, Moving Picture Company, Warner Bros.",
			},
];



```
