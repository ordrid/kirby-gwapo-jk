# DB setup

```sql
USE erms;

CREATE TABLE samples (
    id INT IDENTITY(1,1) PRIMARY KEY,
    x INT NOT NULL,
    y INT NOT NULL
);

INSERT INTO samples (x, y) VALUES (10, 20);
INSERT INTO samples (x, y) VALUES (15, 25);
INSERT INTO samples (x, y) VALUES (20, 30);
INSERT INTO samples (x, y) VALUES (25, 35);
INSERT INTO samples (x, y) VALUES (30, 40);
INSERT INTO samples (x, y) VALUES (35, 45);
INSERT INTO samples (x, y) VALUES (40, 50);
INSERT INTO samples (x, y) VALUES (45, 55);
INSERT INTO samples (x, y) VALUES (50, 60);
INSERT INTO samples (x, y) VALUES (55, 65);

SELECT *
FROM samples
```

