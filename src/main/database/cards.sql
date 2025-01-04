--DROP TABLE cards;

CREATE TABLE cards (
    id SERIAL PRIMARY KEY, -- Coluna para identificar unicamente cada registro, com auto incremento gerenciado pelo banco
    url_image TEXT,        -- Corresponde ao atributo urlImage
    image_alt TEXT,        -- Corresponde ao atributo imageAlt
    title VARCHAR(255),    -- Corresponde ao atributo title
    subtitle VARCHAR(255), -- Corresponde ao atributo subtitle
    description TEXT,      -- Corresponde ao atributo description
    url_page TEXT          -- Corresponde ao atributo urlPage
);

--INSERTS Iniciais

INSERT INTO arc.cards
(id, url_image, image_alt, title, subtitle, description, url_page)
VALUES(nextval('arc.cards_id_seq'::regclass), '/images/coffee.webp', 'formValidation', 'Forms', 'Frontend inputs validations', 'Case examples to use Javascript or jQuery for validate form inputs', 'input-validations');

INSERT INTO arc.cards
(id, url_image, image_alt, title, subtitle, description, url_page)
VALUES(nextval('arc.cards_id_seq'::regclass), '/images/coffee.webp', 'formValidation', 'Forms 2', 'Frontend inputs validations 2', 'Case examples to use Javascript or jQuery for validate form inputs 2', 'input-validations');

INSERT INTO arc.cards
(id, url_image, image_alt, title, subtitle, description, url_page)
VALUES(nextval('arc.cards_id_seq'::regclass), '/images/coffee.webp', 'formValidation', 'Forms 3', 'Frontend inputs validations 3', 'Case examples to use Javascript or jQuery for validate form inputs3', 'input-validations');

INSERT INTO arc.cards
(id, url_image, image_alt, title, subtitle, description, url_page)
VALUES(nextval('arc.cards_id_seq'::regclass), '/images/coffee.webp', 'formValidation', 'Forms4', 'Frontend inputs validations4', 'Case examples to use Javascript or jQuery for validate form inputs4', 'input-validations');

INSERT INTO arc.cards
(id, url_image, image_alt, title, subtitle, description, url_page)
VALUES(nextval('arc.cards_id_seq'::regclass), '/images/coffee.webp', 'formValidation', 'Forms5', 'Frontend inputs validations5', 'Case examples to use Javascript or jQuery for validate form inputs5', 'input-validations');

INSERT INTO arc.cards
(id, url_image, image_alt, title, subtitle, description, url_page)
VALUES(nextval('arc.cards_id_seq'::regclass), '/images/coffee.webp', 'formValidation', 'Forms6', 'Frontend inputs validations6', 'Case examples to use Javascript or jQuery for validate form inputs6', 'input-validations');

INSERT INTO arc.cards
(id, url_image, image_alt, title, subtitle, description, url_page)
VALUES(nextval('arc.cards_id_seq'::regclass), '/images/coffee.webp', 'formValidation', 'Forms7', 'Frontend inputs validations7', 'Case examples to use Javascript or jQuery for validate form inputs7', 'input-validations');