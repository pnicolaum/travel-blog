--
-- PostgreSQL database dump
--

-- Dumped from database version 16.1
-- Dumped by pg_dump version 16.1

SET statement_timeout = 0;
SET lock_timeout = 0;
SET idle_in_transaction_session_timeout = 0;
SET client_encoding = 'UTF8';
SET standard_conforming_strings = on;
SELECT pg_catalog.set_config('search_path', '', false);
SET check_function_bodies = false;
SET xmloption = content;
SET client_min_messages = warning;
SET row_security = off;

SET default_tablespace = '';

SET default_table_access_method = heap;

--
-- Name: User; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public."User" (
    id integer NOT NULL,
    nick text NOT NULL,
    name text NOT NULL,
    surname text NOT NULL,
    mail text NOT NULL,
    password text NOT NULL,
    phone integer NOT NULL,
    dob date NOT NULL,
    nationality text,
    gender text
);


ALTER TABLE public."User" OWNER TO postgres;

--
-- Name: User_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

ALTER TABLE public."User" ALTER COLUMN id ADD GENERATED ALWAYS AS IDENTITY (
    SEQUENCE NAME public."User_id_seq"
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1
);


--
-- Name: blogs; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.blogs (
    id integer NOT NULL,
    title character varying(255),
    keyword character varying(255),
    continent character varying(255),
    country character varying(255),
    description text,
    days integer,
    date date
);


ALTER TABLE public.blogs OWNER TO postgres;

--
-- Name: blogs_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.blogs_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER SEQUENCE public.blogs_id_seq OWNER TO postgres;

--
-- Name: blogs_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.blogs_id_seq OWNED BY public.blogs.id;


--
-- Name: sections; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.sections (
    id integer NOT NULL,
    title character varying(255),
    description text,
    blogid integer,
    keyword character varying(255),
    structure integer
);


ALTER TABLE public.sections OWNER TO postgres;

--
-- Name: sections_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.sections_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER SEQUENCE public.sections_id_seq OWNER TO postgres;

--
-- Name: sections_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.sections_id_seq OWNED BY public.sections.id;


--
-- Name: subscriptions; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.subscriptions (
    id integer NOT NULL,
    mail character varying(255)
);


ALTER TABLE public.subscriptions OWNER TO postgres;

--
-- Name: subscriptions_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.subscriptions_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER SEQUENCE public.subscriptions_id_seq OWNER TO postgres;

--
-- Name: subscriptions_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.subscriptions_id_seq OWNED BY public.subscriptions.id;


--
-- Name: users; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.users (
    id integer NOT NULL,
    username character varying(255),
    name character varying(255),
    surname character varying(255),
    mail character varying(255),
    password character varying(255)
);


ALTER TABLE public.users OWNER TO postgres;

--
-- Name: users_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.users_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER SEQUENCE public.users_id_seq OWNER TO postgres;

--
-- Name: users_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.users_id_seq OWNED BY public.users.id;


--
-- Name: blogs id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.blogs ALTER COLUMN id SET DEFAULT nextval('public.blogs_id_seq'::regclass);


--
-- Name: sections id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.sections ALTER COLUMN id SET DEFAULT nextval('public.sections_id_seq'::regclass);


--
-- Name: subscriptions id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.subscriptions ALTER COLUMN id SET DEFAULT nextval('public.subscriptions_id_seq'::regclass);


--
-- Name: users id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.users ALTER COLUMN id SET DEFAULT nextval('public.users_id_seq'::regclass);


--
-- Data for Name: User; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public."User" (id, nick, name, surname, mail, password, phone, dob, nationality, gender) FROM stdin;
1	CarlosJR	Carlos	Mario	cm@gmail.com	test	606131585	2000-12-12	Spain	Male
\.


--
-- Data for Name: blogs; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.blogs (id, title, keyword, continent, country, description, days, date) FROM stdin;
27	Galicia el norte	Galicia	Europa	España	Galia lugar para comer mariscos.\ntambien hay gallegos	4	2023-07-06
7	Mallorca un paraiso	Mallorca	Spain	Spain	Mallorca, la perla mediterránea de España, deslumbra con sus playas de arena dorada, aguas turquesas y un paisaje diverso que oscila entre majestuosas montañas y encantadores pueblos históricos. Rodeada por el Mar Balear, la isla ofrece un refugio idílico donde la rica herencia cultural se mezcla armoniosamente con el relajado estilo de vida mediterráneo.\n\nEn Mallorca, cada rincón revela una historia fascinante, desde antiguas fortalezas hasta mercados vibrantes que despiertan los sentidos con sabores locales. La gastronomía mallorquina, influenciada por la cocina mediterránea, completa la experiencia, convirtiendo a esta isla en un destino único que combina la belleza natural con la riqueza de su patrimonio y la hospitalidad de su gente.	1	2023-11-21
9	Tenerife 	Tenerife	Spain	Spain	Bilbao increible	1	2023-08-23
18	Ibiza	Ibiza	Europa	Spain	Ibiza me encanta	5	2024-01-13
8	Formentera 	Formentera	Spain	Spain	Formentera ensueño de playas	1	2023-08-22
4	Cantabria 	Cantabria	Europa	Spain	Cantabria me encanta	4	2023-01-23
\.


--
-- Data for Name: sections; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.sections (id, title, description, blogid, keyword, structure) FROM stdin;
7	Can Joan d saigo	Sitio para ensaimadas	7	CanJoanDSaigo	2
8	Cala comtessa	Playa paradisiaca	7	CalaComtessa	3
10	Bar Cuba	Bar de coktails	7	BarCuba	5
16	Sa Foradada	Lugar para aterdeceres increibles	7	SaForadada	8
17	Illetes	La mejor playa del mundo	8	IlletesFormentera	1
6	La catedral La seu de Palma	\nLa majestuosa Catedral La Seu de Palma, una obra maestra arquitectónica situada en el corazón de la ciudad de Palma de Mallorca, invita a los visitantes a sumergirse en la riqueza de la historia y la espiritualidad. Con una fachada impresionante que combina estilos góticos, renacentistas y barrocos, esta catedral católica es un monumento emblemático que domina el horizonte de la isla de Mallorca. Construida sobre el sitio de una antigua mezquita, La Seu es un testimonio visual del mestizaje cultural que ha definido la región a lo largo de los siglos.\n\nEn el interior, los intrincados vitrales y la imponente nave principal dan testimonio de la destreza artística de maestros como Antoni Gaudí y Miquel Barceló, quienes han contribuido a la espléndida decoración. Además, La Seu alberga la capilla real donde yacen los restos del Rey Jaime II. La intersección de la historia, la arquitectura sublime y la espiritualidad palpable hacen de la Catedral La Seu de Palma un destino imprescindible que cautiva a los visitantes con su magnificencia atemporal.	7	LaSeu	1
\.


--
-- Data for Name: subscriptions; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.subscriptions (id, mail) FROM stdin;
2	b@gmail.com
23	destinoscompartidos2024@gmail.com
\.


--
-- Data for Name: users; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.users (id, username, name, surname, mail, password) FROM stdin;
15	JaimeSR1	Jaime1	Sans	js1@gmai.com	$2b$10$zZxAs2wWQktglrw5JX4Cy.9vRdsba6nPA9CT/na2zrofkAgaOxwEi
16	Pablo	Pablo	Nic	p@fdsa	$2b$10$RoojLZaNEYABEtYNZukzzuqBnulXsZjLmOfFi/42lasJsS9pID9Ze
\.


--
-- Name: User_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public."User_id_seq"', 1, true);


--
-- Name: blogs_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.blogs_id_seq', 27, true);


--
-- Name: sections_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.sections_id_seq', 24, true);


--
-- Name: subscriptions_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.subscriptions_id_seq', 27, true);


--
-- Name: users_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.users_id_seq', 16, true);


--
-- Name: User User_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public."User"
    ADD CONSTRAINT "User_pkey" PRIMARY KEY (id);


--
-- Name: blogs blogs_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.blogs
    ADD CONSTRAINT blogs_pkey PRIMARY KEY (id);


--
-- Name: sections sections_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.sections
    ADD CONSTRAINT sections_pkey PRIMARY KEY (id);


--
-- Name: subscriptions subscriptions_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.subscriptions
    ADD CONSTRAINT subscriptions_pkey PRIMARY KEY (id);


--
-- Name: users users_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.users
    ADD CONSTRAINT users_pkey PRIMARY KEY (id);


--
-- Name: sections sections_blog_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.sections
    ADD CONSTRAINT sections_blog_id_fkey FOREIGN KEY (blogid) REFERENCES public.blogs(id) ON DELETE CASCADE;


--
-- PostgreSQL database dump complete
--

